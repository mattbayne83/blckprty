import { CONTENT, QUOTES, SPECS_SHORT } from "../data/content";
import { Countdown } from "../components/Countdown";
import { HeroPhoto } from "../components/HeroPhoto";
import { RampDiagram } from "../components/RampDiagram";
import { Scrubber } from "../components/Scrubber";
import { SignupForm } from "../components/SignupForm";
import { VariationToggle } from "../components/VariationToggle";
import "./loud.css";

type Props = {
  variation: "safe" | "loud";
  onVariationChange: (v: "safe" | "loud") => void;
};

export function LoudVariation({ variation, onVariationChange }: Props) {
  return (
    <div className="loud">
      <div className="topband" />

      {/* NAV */}
      <nav className="nav-loud">
        <button
          type="button"
          className="nav-loud__brand"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/assets/logo-black.png" alt="Blck Prty" style={{ height: 40 }} />
          <span className="stampno">{CONTENT.partNo}</span>
        </button>
        <div className="nav-loud__links">
          <a href="#kit">The ramp</a>
          <a href="#build">10-min build</a>
          <a href="#block">The block</a>
          <a href="#list">Drop list</a>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <VariationToggle variation={variation} onChange={onVariationChange} />
          <a href="#kit" className="bp-btn bp-btn--primary bp-btn--sm">Reserve · ${CONTENT.price}</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero__nbr" aria-hidden="true">06</div>
        <div className="container hero__grid">
          <div className="hero__title-card">
            <span className="hero__eyebrow">Pre-order · OBP · Summer {CONTENT.shipDateCopy}</span>
            <h1 className="hero__headline">{CONTENT.headline}</h1>
            <p className="hero__sub">
              <strong>twelve boards. four brackets. ten minutes flat.</strong>{" "}
              A ramp shows up at your door in a flat-pack box. Your driveway
              becomes a session before the ice-cream truck rolls past.
            </p>
            <div className="hero__ctas">
              <a href="#kit" className="bp-btn bp-btn--primary bp-btn--lg">Hold my ramp · ${CONTENT.price}</a>
              <a href="#build" className="bp-btn bp-btn--lg">Watch the build →</a>
            </div>
            <div className="hero__chips">
              <span className="bp-chip bp-chip--filled">FREE SHIP · LOWER 48</span>
              <span className="bp-chip">HOLDS 250 LB</span>
              <span className="bp-chip">NO TOOLS</span>
              <span className="bp-chip" style={{ background: "var(--cone)", color: "var(--paper)", borderColor: "var(--asphalt)" }}>REFUNDABLE</span>
            </div>
          </div>

          <div style={{ position: "relative", padding: "36px 24px" }}>
            <div className="polaroid">
              <span className="tape tape--tl" />
              <span className="tape tape--br" />
              <span className="sticker sticker--launch">
                LAUNCH 06.26
                <small>summer drop</small>
              </span>
              <span className="sticker sticker--deposit">
                ${CONTENT.price} HOLDS
                <small>fully refundable</small>
              </span>
              <div className="polaroid__photo">
                <HeroPhoto />
              </div>
              <div className="polaroid__caption">
                <span>SHOT · 06.14.26</span>
                <span>BP-OBP-001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Countdown band */}
        <div className="cd-row">
          <div className="container cd-row__inner">
            <div>
              <small>summer drop · first run</small>
              ships {CONTENT.shipDate}
            </div>
            <Countdown shipDate={CONTENT.shipDate} dark />
            <span className="bp-chip bp-chip--hi-vis">{CONTENT.reserves} reserves</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container">
          <div className="manifesto__flyer">
            <span className="manifesto__stamp">
              <span className="bp-stamp" style={{ background: "var(--hi-vis)", color: "var(--asphalt)", fontSize: 14 }}>
                WHY WE BUILT IT
              </span>
            </span>
            <span className="manifesto__stamp-2">
              <span className="bp-stamp" style={{ background: "var(--paper)", color: "var(--asphalt)", fontSize: 14, transform: "rotate(4deg)" }}>
                EST · 2024 · BKLYN
              </span>
            </span>

            <h2>
              we made it for<br />
              the <span className="yel">block,</span><br />
              <span className="strike">not the park.</span>
            </h2>
            <p>
              The skatepark closes at sundown. The block doesn't. So we built
              a knock-down kick ramp that ships in a flat box and assembles
              in your driveway in <strong>ten minutes</strong> — no tools,
              no holes, no permits, no parents standing around squinting at
              instructions.
            </p>
            <p>
              We grew up with cobbled-together plywood and the smell of spray
              paint on hot asphalt. We wanted that for our kids without the
              splinters and the trip to home depot. So we built one ramp and
              shipped it to the people on our block. They told two more.
            </p>
            <p>
              The OBP is the original. Reserve one for ${CONTENT.price} —
              first run, first summer, first session on your street.
            </p>
            <div className="manifesto__sig">
              <span>jon · founder · bkln ny</span>
              <span>signed in spray-paint</span>
            </div>
          </div>
        </div>
      </section>

      {/* KIT — wanted poster */}
      <section id="kit" className="kit">
        <div className="container">
          <div className="kit__poster">
            <div className="kit__head">
              <span className="reward">RESERVE</span>
              <h2>{CONTENT.kitName}</h2>
              <div className="partno">{CONTENT.partNo} · kick ramp · 48 × 18 × 12 in</div>
            </div>

            <div className="kit__body">
              <div className="kit__art">
                <RampDiagram />
                <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="bp-chip bp-chip--filled">SIDE PROFILE</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--concrete-700)" }}>SCALE 1:14</span>
                </div>
              </div>

              <div>
                <div className="kit__price-blk">
                  <div className="deposit-label">deposit · holds your spot</div>
                  <span className="deposit">${CONTENT.price}</span>
                  <div className="retail">retail <span className="yel">${CONTENT.retail}</span> · balance on ship day</div>
                </div>
                <ul className="kit__specs">
                  {SPECS_SHORT.map((s) => (
                    <li key={s.k}><span>{s.k}</span><span>{s.v}</span></li>
                  ))}
                </ul>
                <a href="#list" className="bp-btn bp-btn--primary bp-btn--lg bp-btn--block kit__cta">
                  Reserve mine · ${CONTENT.price}
                </a>
                <div className="kit__fineprint">
                  ships {CONTENT.shipDateCopy} · fully refundable · cancel anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section id="build" className="build bp-grain">
        <div className="container">
          <div className="build__hd">
            <div>
              <span className="bp-stamp" style={{ background: "var(--hi-vis)", color: "var(--asphalt)", marginBottom: 18, display: "inline-block" }}>
                6 STEPS · NO ALLEN KEYS
              </span>
              <h2>ten minutes<br /><span className="hi">flat.</span></h2>
            </div>
            <p>
              no power tools, no allen keys, no <em>"is there a missing piece?"</em>.
              just numbered boards and a bracket system that only fits one way.
              tap a step to read it.
            </p>
          </div>
          <Scrubber />
        </div>
      </section>

      {/* QUOTES */}
      <section id="block" className="quotes">
        <div className="container">
          <div className="quotes__hd">
            <h2>real ramps. real driveways.</h2>
            <span className="count">{CONTENT.reserves} reserves · 14 states · 1 cul-de-sac on fire</span>
          </div>
          <div className="quotes__wall">
            {QUOTES.map((q, i) => {
              const variantClass = i === 1 ? " stickynote--yel" : " stickynote--bone";
              const tagChip =
                i === 0 ? <span className="bp-chip" style={{ background: "var(--paper)" }}>SKATE</span> :
                i === 1 ? <span className="bp-chip bp-chip--filled">SCOOT</span> :
                <span className="bp-chip" style={{ background: "var(--cone)", color: "var(--paper)", borderColor: "var(--asphalt)" }}>BMX</span>;
              return (
                <figure key={i} className={`stickynote${variantClass}`}>
                  <span className="stickynote__tape" />
                  {tagChip}
                  <blockquote>{q.text}</blockquote>
                  <div className="stickynote__by"><span>{q.by.replace(" · ", " · ")}</span><span>★★★★★</span></div>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="list" className="signup-loud">
        <div className="container">
          <div className="signup-loud__inner bp-grain">
            <div className="signup-loud__stamp">
              <span className="bp-stamp" style={{ background: "var(--cone)", transform: "rotate(8deg)" }}>
                DROP LIST
              </span>
            </div>
            <h2>
              not ready to put<br />
              <span className="yel">${CONTENT.price}</span> down?
            </h2>
            <p>
              Get the heads-up before the second run, the build-guide PDF, plus a
              free hi-vis sticker in the mail. we email about once a month. mostly
              ramp video.
            </p>
            <SignupForm
              inputStyle={{ background: "var(--bone)" }}
              buttonStyle={{ background: "var(--hi-vis)", color: "var(--asphalt)", borderColor: "var(--asphalt)" }}
              stampStyle={{ color: "var(--hi-vis)", borderColor: "var(--hi-vis)" }}
              stampSubStyle={{ color: "var(--hi-vis)" }}
            />
            <div style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--concrete-300)" }}>
              no spam · one-click unsub · built by humans
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-loud">
        <div className="container">
          <div className="footer-loud__grid">
            <div className="footer-loud__brand">
              <img src="/assets/logo-black.png" alt="Blck Prty" />
              <p style={{ maxWidth: 320, fontSize: 14 }}>Flat-pack street ramps. Built in 10 minutes. Put kids back on the block.</p>
            </div>
            <div className="footer-loud__col">
              <h4>The ramp</h4>
              <ul>
                <li><a href="#kit">Original Blck Prty</a></li>
                <li><a href="#kit">What's in the box</a></li>
                <li><a href="#kit">Compatibility</a></li>
                <li><a href="#kit">Maintenance</a></li>
              </ul>
            </div>
            <div className="footer-loud__col">
              <h4>Pre-order</h4>
              <ul>
                <li><a href="#kit">Hold my ramp</a></li>
                <li><a href="#list">Drop list</a></li>
                <li><a href="#kit">Refund policy</a></li>
                <li><a href="#kit">Shipping windows</a></li>
              </ul>
            </div>
            <div className="footer-loud__col">
              <h4>Block</h4>
              <ul>
                <li><a href="#block">Sessions on IG</a></li>
                <li><a href="#">Email jon</a></li>
                <li><a href="#">Press kit</a></li>
                <li><a href="#">HOA letter PDF</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-loud__legal">
            <span>© 2026 Blck Prty Inc · BKLN NY</span>
            <span>Built on a driveway · shipped from a warehouse</span>
            <span>Adult supervision always</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
