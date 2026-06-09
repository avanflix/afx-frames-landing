const TESTIMONIALS = [
  {
    name: "Priya Reddy",
    role: "Model — Hyderabad",
    text: "I was nervous before the shoot, but the team made me feel comfortable from the start. The photos came out better than I expected.",
  },
  {
    name: "Arjun Mehta",
    role: "Actor — Hyderabad",
    text: "The entire process was smooth and professional. They guided me with poses and expressions, which made a huge difference in the final pictures.",
  },
  {
    name: "Rahul Sharma",
    role: "Model — Hyderabad",
    text: "Loved the experience. The team paid attention to every detail, and the final portfolio looked clean, polished, and exactly what I was looking for.",
  },
  {
    name: "Praveen Reddy",
    role: "Model — Hyderabad",
    text: "What I liked most was how natural everything felt. The team was patient, gave clear direction, and the photos genuinely reflected my personality.",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        .testi-section {
          background: #111111;
          padding: 120px 48px;
          overflow: hidden;
        }
        .testi-inner { max-width: 1200px; margin: 0 auto; }
        .section-label-t {
          font-size: 0.6rem; letter-spacing: 0.42em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 16px; font-weight: 600;
        }
        .section-title-t {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 400; line-height: 1.08;
          color: #f5f0e8; margin-bottom: 24px;
        }
        .section-title-t em { font-style: italic; color: #d4af37; }
        .gold-rule-t { width: 48px; height: 2px; background: #b8960c; margin-bottom: 56px; }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2px;
          background: rgba(184,150,12,0.15);
        }
        .testi-card {
          background: #161616;
          padding: 52px;
          position: relative;
          transition: background 0.3s;
        }
        .testi-card:hover { background: #1a1a1a; }
        .testi-card::before {
          content: '\\201C';
          font-family: 'Cormorant Garamond', serif;
          font-size: 7rem; line-height: 1;
          color: #b8960c; opacity: 0.12;
          position: absolute; top: 14px; left: 34px;
          pointer-events: none;
        }
        .testi-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-style: italic;
          color: rgba(245,240,232,0.78);
          line-height: 1.85; margin-bottom: 36px;
          position: relative; z-index: 1;
        }
        .testi-author { display: flex; align-items: center; gap: 18px; }
        .testi-rule { width: 24px; height: 1px; background: #b8960c; flex-shrink: 0; }
        .testi-name {
          font-size: 0.72rem; letter-spacing: 0.15em;
          text-transform: uppercase; color: #f5f0e8;
          font-weight: 600; margin-bottom: 4px;
        }
        .testi-role {
          font-size: 0.62rem; letter-spacing: 0.12em;
          text-transform: uppercase; color: #b8960c; font-weight: 500;
        }
        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr; }
          .testi-section { padding: 80px 24px; }
          .testi-card { padding: 36px 28px; }
        }
      `}</style>

      <section className="testi-section" id="testimonials">
        <div className="testi-inner">
          <div className="section-label-t">Client Stories</div>
          <h2 className="section-title-t"><em>Testimonials</em></h2>
          <div className="gold-rule-t" />
          <div className="testi-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testi-card" key={t.name}>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-rule" />
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
