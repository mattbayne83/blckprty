type Variation = "safe" | "loud";

type Props = {
  variation: Variation;
  onChange: (v: Variation) => void;
};

export function VariationToggle({ variation, onChange }: Props) {
  return (
    <div className="bp-toggle" role="group" aria-label="Site variation">
      <button type="button" aria-pressed={variation === "safe"} onClick={() => onChange("safe")}>Safe</button>
      <button type="button" aria-pressed={variation === "loud"} onClick={() => onChange("loud")}>Loud</button>
    </div>
  );
}
