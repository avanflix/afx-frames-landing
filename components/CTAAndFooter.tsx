import LogoMark from "./LogoMark";

interface CTAAndFooterProps {
  onBookNow: () => void;
}
export default function CTAAndFooter({
  onBookNow,
}: CTAAndFooterProps) {
  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        /* ---- CTA ---- */
        .cta-section {
          background: #0a0a0a;
          text-align: center;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,150,12,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,150,12,0.35), transparent);
        }
        .cta-inner { position: relative; max-width: 740px; margin: 0 auto; }
        .cta-eyebrow {
          font-size: 0.62rem; letter-spacing: 0.5em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 24px; font-weight: 600;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 300; line-height: 1.05;
          color: #f5f0e8; margin-bottom: 12px;
        }
        .cta-title em { font-style: italic; color: #d4af37; }
        .cta-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.2rem;
          color: rgba(245,240,232,0.45); margin-bottom: 56px;
        }
        .cta-btns {
          display: flex; gap: 16px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 72px;
        }
        .cta-btn-primary {
          font-size: 0.68rem; letter-spacing: 0.28em; text-transform: uppercase;
          background: #b8960c; color: #0a0a0a; border: none;
          padding: 18px 48px; cursor: pointer;
          font-family: 'Montserrat', sans-serif; font-weight: 700;
          transition: background 0.3s, transform 0.2s;
        }
        .cta-btn-primary:hover { background: #f0d060; transform: translateY(-2px); }
        .cta-btn-outline {
          font-size: 0.68rem; letter-spacing: 0.28em; text-transform: uppercase;
          background: transparent; color: #f5f0e8;
          border: 1px solid rgba(245,240,232,0.25);
          padding: 18px 48px; cursor: pointer;
          font-family: 'Montserrat', sans-serif; font-weight: 500;
          text-decoration: none; display: inline-block;
          transition: border-color 0.3s, color 0.3s;
        }
        .cta-btn-outline:hover { border-color: #b8960c; color: #b8960c; }
        .cta-contact {
          display: flex; justify-content: center; gap: 56px; flex-wrap: wrap;
        }
        .contact-block { display: flex; flex-direction: column; gap: 5px; }
        .contact-lbl {
          font-size: 0.58rem; letter-spacing: 0.32em; text-transform: uppercase;
          color: #b8960c; font-weight: 600;
        }
        .contact-val {
          font-size: 0.9rem; color: rgba(245,240,232,0.65); font-weight: 300;
        }
        /* ---- FOOTER ---- */
        footer {
          background: #080808;
          border-top: 1px solid rgba(184,150,12,0.18);
          padding:5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 0.95rem;
          color: rgba(184,150,12,0.45);
        }
        .footer-copy {
          font-size: 0.62rem; letter-spacing: 0.08em;
          color: rgba(245,240,232,0.2);
        }
        @media (max-width: 768px) {
          .cta-section { padding: 100px 24px; }
          .cta-contact { gap: 32px; }
          footer { flex-direction: column; text-align: center; padding: 28px 24px; }
        }
      `}</style>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <p className="cta-eyebrow">Book Your Shoot Today</p>
          <h2 className="cta-title">
            Your Portfolio.<br /><em>Our Vision.</em>
          </h2>
          <p className="cta-sub">Build your identity with AFX Frames.</p>
          <div className="cta-btns">
            <button className="cta-btn-primary" onClick={onBookNow}>
              Book Now
            </button>
            <a href="mailto:info@afxframes.com" className="cta-btn-outline">
              Get in Touch
            </a>
          </div>
          <div className="cta-contact">
            {[
              { label: "Email",    value: "info@afxframes.com" },
              { label: "Phone",    value: "+91 77992 25757"    },
              { label: "Location", value: "Hyderabad, India"   },
            ].map((c) => (
              <div className="contact-block" key={c.label}>
                <span className="contact-lbl">{c.label}</span>
                <span className="contact-val">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <LogoMark size="footer" />
        <span className="footer-tagline">"Where Talent Meets Vision."</span>
        <span className="footer-copy">© {new Date().getFullYear()} AFX Frames. All rights reserved.</span>
      </footer>
    </>
  );
}
