const SERVICES = [
  { num: "01", title: "Portfolio Shoots",          desc: "Tailored sessions for models, actors & influencers" },
  { num: "02", title: "Cinematic Reels",           desc: "Motion content that captures your on-screen presence" },
  { num: "03", title: "Fashion Photography",       desc: "Editorial-grade imagery for campaigns & lookbooks" },
  { num: "04", title: "Creative Direction",        desc: "Concept-to-capture vision for your brand story" },
  { num: "05", title: "Styling Guidance",          desc: "Expert wardrobe and look consultation pre-shoot" },
  { num: "06", title: "Social Media Branding",     desc: "Content optimised for Instagram, TikTok & beyond" },
  { num: "07", title: "Professional Retouching",   desc: "Refined post-production to industry standards" },
  { num: "08", title: "Child Modeling Portfolios", desc: "Safe, fun, professional shoots for young talent" },
];

export default function ServicesSection() {
  return (
    <>
      <style>{`
        .services-section {
          background: #0a0a0a;
          padding: 120px 48px;
        }
        .services-inner { max-width: 1200px; margin: 0 auto; }
        .section-label-s {
          font-size: 0.6rem; letter-spacing: 0.42em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 16px; font-weight: 600;
        }
        .section-title-s {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 400; line-height: 1.08;
          color: #f5f0e8; margin-bottom: 24px;
        }
        .section-title-s em { font-style: italic; color: #d4af37; }
        .gold-rule-s { width: 48px; height: 2px; background: #b8960c; margin-bottom: 56px; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(184,150,12,0.18);
          border: 1px solid rgba(184,150,12,0.18);
        }
        .service-card {
          background: #0a0a0a;
          padding: 44px 32px 40px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background 0.35s;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b1a1a, #b8960c);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .service-card:hover { background: #141414; }
        .service-card:hover::after { transform: scaleX(1); }
        .svc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem; font-weight: 300;
          color: rgba(184,150,12,0.15);
          line-height: 1; margin-bottom: 20px;
          transition: color 0.3s;
        }
        .service-card:hover .svc-num { color: rgba(184,150,12,0.35); }
        .svc-title {
          font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #f5f0e8;
          font-weight: 600; margin-bottom: 12px;
        }
        .svc-desc {
          font-size: 0.82rem; color: rgba(245,240,232,0.48);
          line-height: 1.75; font-weight: 300;
        }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .services-grid { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .services-section { padding: 80px 24px; } }
      `}</style>

      <section className="services-section" id="services">
        <div className="services-inner">
          <div className="section-label-s">Our Services</div>
          <h2 className="section-title-s">What We <em>Provide</em></h2>
          <div className="gold-rule-s" />
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.num}>
                <div className="svc-num">{s.num}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
