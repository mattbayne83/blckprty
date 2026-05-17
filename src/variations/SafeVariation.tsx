import { CONTENT, QUOTES, SPECS } from "../data/content";
import { Countdown } from "../components/Countdown";
import { HeroPhoto } from "../components/HeroPhoto";
import { RampDiagram } from "../components/RampDiagram";
import { Scrubber } from "../components/Scrubber";
import { SignupForm } from "../components/SignupForm";
import "./safe.css";

export function SafeVariation() {
  return (
    <div className="safe">
      {/* NAV */}
      <div className="nav-wrap">
        <nav className="bp-nav">
          <button
            type="button"
            className="bp-nav-brand"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/assets/logo-black.png" alt="Blck Prty" style={{ height: 44 }} />
          </button>
          <div className="bp-nav-links">
            <a href="#kit">The Ramp</a>
            <a href="#build">Build</a>
            <a href="#block">Neighbors</a>
            <a href="#list">Drop list</a>
          </div>
          <div className="bp-nav-right">
            <span className="nav-status">Pre-orders open</span>
            <a href="#kit" className="bp-btn bp-btn--sm bp-btn--primary">Reserve · ${CONTENT.price}</a>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section className="hero bp-grain">
        <div className="container hero__grid">
          <div>
            <div className="hero__eyebrow">Pre-order · OBP · ships {CONTENT.shipDateCopy}</div>
            <h1 className="hero__headline">{CONTENT.headline}</h1>
            <p className="hero__sub">
              <strong>Twelve boards. Four brackets. One ramp. Ten minutes flat.</strong>{" "}
              Pulls out of a flat-pack box and turns your driveway into a session before the
              ice-cream truck rolls past. Reserve your spot for ${CONTENT.price}.
            </p>
            <div className="hero__ctas">
              <a href="#kit" className="bp-btn bp-btn--primary bp-btn--lg">Hold my ramp · ${CONTENT.price}</a>
              <a href="#build" className="bp-btn bp-btn--ghost bp-btn--lg" style={{ color: "var(--bone)", borderColor: "var(--bone)" }}>
                Watch the 10-min build →
              </a>
            </div>
            <div className="hero__eyebrow hero__eyebrow--muted">
              deposit holds your spot · fully refundable until shipping
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="hero__photo">
              <HeroPhoto />
            </div>
            <div className="hero__photo-stamp">
              <span className="bp-stamp" style={{ fontSize: 16 }}>{CONTENT.partNo}</span>
            </div>
          </div>
        </div>

        {/* Countdown band */}
        <div className="countdown-band">
          <div className="container countdown-band__grid">
            <div className="countdown-band__label">
              ships
              <strong>{CONTENT.shipDate}</strong>
            </div>
            <Countdown shipDate={CONTENT.shipDate} dark />
            <div style={{ textAlign: "right" }}>
              <span className="bp-chip bp-chip--hi-vis">Lower 48 · free ship</span>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container manifesto__grid">
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 18, color: "var(--concrete-700)" }}>Why we built it</div>
            <h2 className="manifesto__hd">
              We made it<br />
              for the <span className="hi">block,</span><br />
              not the park.
            </h2>
          </div>
          <div className="manifesto__body">
            <p>
              The skatepark closes at sundown. The block doesn't. Blck Prty is a
              knock-down kick ramp that ships in a flat box and assembles in
              your driveway in ten minutes — no tools, no holes, no permits,
              no parents standing around squinting at instructions.
            </p>
            <p>
              We grew up with cobbled-together plywood kickers and the smell of
              spray paint on hot asphalt. We wanted that for our kids without
              the splinters and the trip to Home Depot. So we built one ramp
              and shipped it to the people on our block. They told two more.
            </p>
            <p>
              The OBP is the original. Reserve one now — first run, first
              summer, first session on your street.
            </p>
            <div className="manifesto__sig">Jon · founder · brooklyn ny</div>
          </div>
        </div>
      </section>

      {/* KIT */}
      <section id="kit" className="kit">
        <div className="container kit__grid">
          <div className="kit__media">
            <div className="kit__partno">{CONTENT.partNo}</div>
            <h3>{CONTENT.kitName}</h3>
            <div className="bp-tape-rule" />
            <RampDiagram />
            <ul className="kit__specs">
              {SPECS.map((s) => (
                <li key={s.k}><span>{s.k}</span><span>{s.v}</span></li>
              ))}
            </ul>
          </div>

          <div className="kit__buy">
            <div className="kit__eyebrow">First production run · ships {CONTENT.shipDateCopy}</div>
            <h2 className="kit__h">Reserve the<br />OBP.</h2>
            <div className="kit__pricing">
              <div className="kit__price">${CONTENT.price}</div>
              <div className="kit__price-sub">refundable deposit</div>
            </div>
            <p className="kit__retail">
              retail <strong>${CONTENT.retail}</strong> · balance charged on ship day · cancel anytime
            </p>
            <a href="#list" className="bp-btn bp-btn--primary bp-btn--lg bp-btn--block" style={{ marginBottom: 16 }}>
              Hold my ramp · ${CONTENT.price}
            </a>
            <a href="#build" className="bp-btn bp-btn--ghost bp-btn--block">See the 10-min build →</a>
            <ul className="kit__perks">
              <li>· first 200 reserves get a hi-vis sticker pack</li>
              <li>· free ship in the lower 48</li>
              <li>· founder's price locked at ${CONTENT.retail}, retail goes to $299</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section id="build" className="build bp-grain">
        <div className="container">
          <div className="build__hd">
            <div>
              <div className="build__eyebrow">Build · 6 steps</div>
              <h2>Ten minutes<br /><span className="hi">flat.</span></h2>
            </div>
            <p>
              no power tools, no allen keys, no <em>"is there a missing piece?"</em>.
              just numbered boards and a bracket system that only fits one way.
            </p>
          </div>
          <Scrubber />
          <div className="build__chips">
            <span className="bp-chip bp-chip--hi-vis">No tools</span>
            <span className="bp-chip" style={{ background: "transparent", color: "var(--bone)", borderColor: "var(--bone)" }}>No instructions to lose</span>
            <span className="bp-chip" style={{ background: "transparent", color: "var(--bone)", borderColor: "var(--bone)" }}>No excuses</span>
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section id="block" className="quotes">
        <div className="container">
          <div className="quotes__hd">
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 14, color: "var(--concrete-700)" }}>Notes from the block</div>
              <h2 className="t-display-2">Real ramps.<br />Real driveways.</h2>
            </div>
            <div className="t-mono" style={{ fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              · {CONTENT.reserves} reserves &amp; counting
            </div>
          </div>

          <div className="quotes__grid">
            {QUOTES.map((q, i) => (
              <figure
                key={i}
                className={`quote${i === 1 ? " quote--hi" : ""}`}
                style={{ transform: i === 1 ? "rotate(0.7deg)" : i === 0 ? "rotate(-1deg)" : "rotate(-0.6deg)" }}
              >
                <div className="quote__mark">“</div>
                <p className="quote__text">{q.text}</p>
                <figcaption className="quote__by"><span>{q.by}</span><span>{q.tag}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section id="list" className="signup-band">
        <div className="container">
          <div className="signup-band__inner">
            <div className="signup-band__tape" />
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 14, color: "var(--concrete-700)" }}>Drop list</div>
              <h2 className="t-display-3">Not ready to put ${CONTENT.price} down?</h2>
              <p>
                Get the heads-up before the second run, plus the build guide PDF
                and a free hi-vis sticker. we email about once a month and it's mostly
                ramp video.
              </p>
            </div>
            <div>
              <SignupForm />
              <p style={{ margin: "14px 0 0", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--concrete-700)" }}>
                no spam · unsubscribe with one click · built by humans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bp-grain">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <img src="/assets/logo-white.png" alt="Blck Prty" />
              <p>Flat-pack street ramps. Built in 10 minutes. Put kids back on the block.</p>
            </div>
            <div className="footer__col">
              <h4>The ramp</h4>
              <ul>
                <li><a href="#kit">Original Blck Prty</a></li>
                <li><a href="#kit">What's in the box</a></li>
                <li><a href="#kit">Compatibility</a></li>
                <li><a href="#kit">Maintenance</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Pre-order</h4>
              <ul>
                <li><a href="#kit">Hold my ramp</a></li>
                <li><a href="#list">Drop list</a></li>
                <li><a href="#kit">Refund policy</a></li>
                <li><a href="#kit">Shipping windows</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Block</h4>
              <ul>
                <li><a href="#block">Sessions on IG</a></li>
                <li><a href="#">Email Jon</a></li>
                <li><a href="#">Press kit</a></li>
                <li><a href="#">HOA letter PDF</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>© 2026 Blck Prty Inc · Brooklyn NY</span>
            <span>Built on a driveway · Shipped from a warehouse</span>
            <span>Adult supervision always</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
