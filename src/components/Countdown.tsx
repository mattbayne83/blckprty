import { useEffect, useState } from "react";

type Props = {
  /** YYYY-MM-DD; ticker uses 12:00:00 local on that day */
  shipDate: string;
  dark?: boolean;
};

function diffToCells(target: number, now: number) {
  let diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000); diff -= d * 86400000;
  const h = Math.floor(diff / 3600000);  diff -= h * 3600000;
  const m = Math.floor(diff / 60000);    diff -= m * 60000;
  const s = Math.floor(diff / 1000);
  return {
    days:  String(d).padStart(3, "0"),
    hours: String(h).padStart(2, "0"),
    mins:  String(m).padStart(2, "0"),
    secs:  String(s).padStart(2, "0"),
  };
}

export function Countdown({ shipDate, dark = true }: Props) {
  const target = new Date(shipDate + "T12:00:00").getTime();
  const [cells, setCells] = useState(() => diffToCells(target, Date.now()));

  useEffect(() => {
    const id = setInterval(() => setCells(diffToCells(target, Date.now())), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className={`countdown${dark ? " countdown--dark" : ""}`}>
      <div className="countdown__cell"><span className="countdown__num">{cells.days}</span><span className="countdown__label">days</span></div>
      <div className="countdown__cell"><span className="countdown__num">{cells.hours}</span><span className="countdown__label">hrs</span></div>
      <div className="countdown__cell"><span className="countdown__num">{cells.mins}</span><span className="countdown__label">min</span></div>
      <div className="countdown__cell"><span className="countdown__num">{cells.secs}</span><span className="countdown__label">sec</span></div>
    </div>
  );
}
