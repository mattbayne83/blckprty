import { useEffect, useState } from "react";
import { SafeVariation } from "./variations/SafeVariation";
import { LoudVariation } from "./variations/LoudVariation";

type Variation = "safe" | "loud";

function readFromUrl(): Variation {
  if (typeof window === "undefined") return "safe";
  const v = new URLSearchParams(window.location.search).get("v");
  return v === "loud" ? "loud" : "safe";
}

function App() {
  const [variation, setVariation] = useState<Variation>(readFromUrl);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    sp.set("v", variation);
    const next = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", next);
  }, [variation]);

  return variation === "loud"
    ? <LoudVariation variation={variation} onVariationChange={setVariation} />
    : <SafeVariation variation={variation} onVariationChange={setVariation} />;
}

export default App;
