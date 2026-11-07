const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// Transpile the existing TypeScript modules in memory; no test dependencies or build artifacts.
function loadTypeScript(file, overrides = {}) {
  const source = fs.readFileSync(file, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const localRequire = createRequire(file);
  const requireModule = name => Object.hasOwn(overrides, name) ? overrides[name] : localRequire(name);
  new Function("require", "module", "exports", output)(requireModule, module, module.exports);
  return module.exports;
}

const calculatorDir = path.join(__dirname, "../app/calculator");
const calculations = loadTypeScript(path.join(calculatorDir, "calculations.ts"));
const baseInputs = {
  income: "1200", debt: "0", downPayment: "0", rate: "0",
  tax: "27.98", insurance: "0", mortgageInsurance: "0", hoa: "0",
};

function render(inputs) {
  const mockedReact = { ...React, useState: () => [inputs, () => {}] };
  const { default: Calculator } = loadTypeScript(path.join(calculatorDir, "Calculator.tsx"), {
    react: mockedReact,
    "./calculations": calculations,
  });
  return renderToStaticMarkup(React.createElement(Calculator));
}

function valueForLabel(html, label) {
  const match = html.match(new RegExp(`<div[^>]*>([^<]*)</div><div[^>]*>${label}</div>`));
  assert.ok(match, `Result card not found: ${label}`);
  return match[1].replaceAll("&lt;", "<");
}

function near(actual, expected) {
  assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} is not close to ${expected}`);
}

test("reported $0.02 principal and interest is explicitly sub-dollar", () => {
  const { estimate } = calculations.calculate(baseInputs);
  assert.ok(estimate);
  near(estimate.principalAndInterest, 0.02);
  near(estimate.housingBudget, 28);
  near(estimate.loan, 7.2);
  near(estimate.homePrice, 7.2);
  const html = render(baseInputs);
  assert.equal(valueForLabel(html, "Monthly principal &amp; interest"), "<$1");
  assert.equal(valueForLabel(html, "Total monthly housing budget"), "$28");
  assert.equal(valueForLabel(html, "Illustrative loan"), "$7");
  assert.equal(valueForLabel(html, "Illustrative home price"), "$7");
});

test("both monthly cards explicitly show a positive sub-dollar amount", () => {
  const inputs = { ...baseInputs, income: "12", tax: "0.26" };
  const { estimate } = calculations.calculate(inputs);
  assert.ok(estimate);
  near(estimate.principalAndInterest, 0.02);
  near(estimate.housingBudget, 0.28);
  const html = render(inputs);
  assert.equal(valueForLabel(html, "Monthly principal &amp; interest"), "<$1");
  assert.equal(valueForLabel(html, "Total monthly housing budget"), "<$1");
});

test("one-cent and dollar boundaries preserve the calculation and whole-dollar formatting", () => {
  for (const [tax, expected] of [["27.99", "<$1"], ["27.01", "<$1"], ["27", "$1"], ["26.6", "$1"]]) {
    const inputs = { ...baseInputs, tax };
    assert.ok(calculations.calculate(inputs).estimate, `Expected an estimate at tax ${tax}`);
    assert.equal(valueForLabel(render(inputs), "Monthly principal &amp; interest"), expected);
  }
});

test("less than one cent remains a no-estimate case", () => {
  const inputs = { ...baseInputs, tax: "27.995" };
  const result = calculations.calculate(inputs);
  assert.equal(result.estimate, undefined);
  assert.match(result.message, /less than one cent/);
  assert.match(render(inputs), /less than one cent/);
});

test("normal nonzero-rate scenario keeps existing loan and whole-dollar results", () => {
  const inputs = { income: "80000", debt: "500", downPayment: "60000", rate: "6.75", tax: "200", insurance: "100", mortgageInsurance: "50", hoa: "100" };
  const { estimate } = calculations.calculate(inputs);
  assert.ok(estimate);
  const expectedBudget = (80000 / 12) * 0.28;
  const expectedPayment = expectedBudget - 450;
  const monthlyRate = 6.75 / 1200;
  const expectedLoan = expectedPayment * (1 - Math.pow(1 + monthlyRate, -360)) / monthlyRate;
  near(estimate.housingBudget, expectedBudget);
  near(estimate.principalAndInterest, expectedPayment);
  near(estimate.loan, expectedLoan);
  near(estimate.homePrice, expectedLoan + 60000);
  const html = render(inputs);
  assert.equal(valueForLabel(html, "Monthly principal &amp; interest"), "$1,416");
  assert.equal(valueForLabel(html, "Total monthly housing budget"), "$1,866");
  assert.equal(valueForLabel(html, "Illustrative loan"), `$${Math.floor(expectedLoan).toLocaleString("en-US")}`);
  assert.equal(valueForLabel(html, "Illustrative home price"), `$${Math.floor(expectedLoan + 60000).toLocaleString("en-US")}`);
});
