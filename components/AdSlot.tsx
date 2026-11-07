// Manual placements stay inactive until a real AdSense ad unit is created and
// explicitly listed in NEXT_PUBLIC_AD_SLOT_IDS. Auto ads use the site-level
// AdSense loader and are not controlled by this component.
const PUBLISHER_ID = "ca-pub-9889586007871680";

type AdSlotProps = {
  slot: string;
  format?: "horizontal" | "rectangle" | "vertical";
  className?: string;
};

export default function AdSlot({ slot, format = "horizontal", className = "" }: AdSlotProps) {
  const enabled = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";
  const configuredIds = (process.env.NEXT_PUBLIC_AD_SLOT_IDS || "")
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^\d{10}$/.test(id));

  // Never expose development labels or send placeholder unit IDs to AdSense.
  // Creating/configuring real units and applicable consent are separate steps.
  if (!enabled || !configuredIds.includes(slot)) return null;

  return (
    <div className={`my-6 mx-auto max-w-3xl overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
      <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
    </div>
  );
}
