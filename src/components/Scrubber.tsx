import { useState } from "react";
import { STEPS } from "../data/content";

export function Scrubber() {
  const [active, setActive] = useState(0);
  return (
    <div className="scrubber__steps" style={{ color: "var(--bone)" }}>
      {STEPS.map((s, i) => (
        <button
          key={i}
          type="button"
          className="scrubber__step"
          aria-pressed={i === active}
          onClick={() => setActive(i)}
        >
          <span className="scrubber__caption">Step {String(i + 1).padStart(2, "0")} / 06</span>
          <span className="scrubber__num">{String(i + 1).padStart(2, "0")}</span>
          <span className="scrubber__title">{s.t}</span>
          <span className="scrubber__detail">{s.d}</span>
        </button>
      ))}
    </div>
  );
}
