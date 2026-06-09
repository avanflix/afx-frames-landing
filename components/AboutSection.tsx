import Image from "next/image";
export default function AboutSection() {
  return (
    <>
      <style>{`
        .about-section {
          background: #111111;
          padding: 120px 48px;
          position: relative;
          overflow: hidden;
        }
        .about-section::before {
          content: '';
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(184,150,12,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .about-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 96px;
          align-items: center;
        }
        .section-label {
          font-size: 0.6rem;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #b8960c;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 400;
          line-height: 1.08;
          color: #f5f0e8;
          margin-bottom: 24px;
        }
        .section-title em { font-style: italic; color: #d4af37; }
        .gold-rule {
          width: 48px; height: 2px;
          background: #b8960c;
          margin-bottom: 48px;
        }
        .about-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.55rem;
          font-style: italic;
          color: #f5f0e8;
          line-height: 1.45;
          border-left: 2px solid #b8960c;
          padding-left: 24px;
          margin-bottom: 36px;
        }
        .about-body {
          font-size: 0.95rem;
          line-height: 1.9;
          color: rgba(245,240,232,0.62);
          margin-bottom: 40px;
          font-weight: 300;
        }
        .about-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .about-list li {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d4af37;
          display: flex;
          align-items: center;
          gap: 14px;
          font-weight: 500;
        }
        .about-list li::before {
          content: '';
          width: 24px; height: 1px;
          background: #b8960c;
          flex-shrink: 0;
        }
        /* right visual */
        .about-visual {
          position: relative;
        }
        .about-frame-outer {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
        }
        .about-frame-inner {
          position: absolute;
          inset: 0;
          background: #161616;
          border: 1px solid rgba(184,150,12,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 24px;
          overflow: hidden;
        }
        .about-frame-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg,  transparent, transparent 39px, rgba(184,150,12,0.035) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(184,150,12,0.035) 40px);
        }
        .about-frame-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.4rem;
          font-style: italic;
          color: rgba(245,240,232,0.18);
          text-align: center;
          padding: 40px;
          letter-spacing: 0.04em;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }
        .about-accent-box {
          position: absolute;
          bottom: -20px; right: -20px;
          width: 140px; height: 140px;
          border: 1px solid rgba(184,150,12,0.15);
          background: rgba(139,26,26,0.06);
        }
        .about-accent-num {
          position: absolute;
          top: -30px; left: -24px;
          font-family: 'Cormorant Garamond', serif;
          font-size: 8rem;
          font-weight: 300;
          color: rgba(184,150,12,0.05);
          line-height: 1;
          user-select: none;
        }

        .about-frame-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.about-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.8s ease;
  will-change: transform;
}

.about-frame-inner:hover .about-image {
  transform: scale(1.05);
}
        /* corners */
        .corner { position: absolute; width: 20px; height: 20px; border-color: #b8960c; border-style: solid; opacity: 0.45; }
        .c-tl { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
        .c-tr { top: 12px; right: 12px; border-width: 1px 1px 0 0; }
        .c-bl { bottom: 12px; left: 12px; border-width: 0 0 1px 1px; }
        .c-br { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr; gap: 56px; }
          .about-visual { display: none; }
          .about-section { padding: 80px 24px; }
        }
      `}</style>

      <section className="about-section" id="about">
        <div className="about-inner">
          <div>
            <div className="section-label">About the Studio</div>
            <h2 className="section-title">A Premium<br /><em>Creative Studio</em></h2>
            <div className="gold-rule" />
            <blockquote className="about-quote">
              "Every frame we capture is a deliberate act of storytelling."
            </blockquote>
            <p className="about-body">
              We are a full-service creative studio dedicated to producing world-class visual content
              for talent at every stage of their career. We partner with models, actors, influencers,
              and children to craft portfolios that open doors, command attention, and define careers.
            </p>
            <ul className="about-list">
              {["Model Portfolios", "Actor Portfolios", "Child Portfolio Shoots", "Fashion Editorials", "Personal Branding"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-visual">
            <div className="about-frame-outer">
              <div className="about-accent-num">A</div>
              <div className="about-frame-inner">
                <Image
                  src="/13.jpg" // place image in public/images
                  alt="About Us"
                  fill
                  className="about-image"
                  priority
                />

                <div className="corner c-tl" />
                <div className="corner c-tr" />
                <div className="corner c-bl" />
                <div className="corner c-br" />
                <div className="about-frame-quote">
                  "Your Portfolio.<br />Our Vision."
                </div>
              </div>
              <div className="about-accent-box" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
