const PACKAGES = [
  {
    tier: "STARTER",
    name: "Basic",
    highlight: false,
    features: [
      "1-hour studio session",
      "05 edited digital images",
      "1 Signature Look",
      "Raw Files Included",
      "On-Set creative guidance",
    ],
  },
  {
    tier: "MOST POPULAR",
    name: "Standard",
    highlight: true,
    features: [
      "2-hour studio session",
      "10 edited digital images",
      "2 Signature Looks",
      "Reel Clips for Social Media",
      "Professional Creative Direction",
      "Raw Files Included",
    ],
  },
  {
    tier: "FULL EXPERIENCE",
    name: "Premium",
    highlight: false,
    features: [
      "5-hour studio session",
      "Complete Portfolio Kit",
      "3 Signature Looks",
      "Cinematic Reel Production",
      "Full Styling Guidance",
      "Professional Makeup Support",
      "Priority Editing & Delivery",
      "Behind the Scenes Content",
    ],
  },
];

export default function PackagesSection() {
  return (
    <>
      <style>{`
        .packages-section {
          background: #0a0a0a;
          padding: 120px 48px;
        }
        .packages-inner { max-width: 1100px; margin: 0 auto; }
        .section-label-p {
          font-size: 0.6rem; letter-spacing: 0.42em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 16px; font-weight: 600;
        }
        .section-title-p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 400; line-height: 1.08;
          color: #f5f0e8; margin-bottom: 24px;
        }
        .section-title-p em { font-style: italic; color: #d4af37; }
        .gold-rule-p { width: 48px; height: 2px; background: #b8960c; margin-bottom: 56px; }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(184,150,12,0.15);
        }
        .pkg-card {
          background: #161616;
          padding: 52px 40px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
          .pkg-card {
background: #161616;
padding: 52px 40px;
display: flex;
flex-direction: column;
position: relative;
transition: all 0.4s ease;
overflow: hidden;
}

.pkg-card::before {
content: "";
position: absolute;
inset: 0;
background: linear-gradient(
135deg,
rgba(184,150,12,0.12),
transparent 45%
);
opacity: 0;
transition: opacity 0.4s ease;
pointer-events: none;
}

.pkg-card::after {
content: "";
position: absolute;
inset: 0;
border: 1px solid transparent;
transition: all 0.4s ease;
pointer-events: none;
}

.pkg-card:hover {
transform: translateY(-10px);
background: #1a1710;
box-shadow:
0 20px 40px rgba(0,0,0,0.35),
0 0 30px rgba(184,150,12,0.12);
}

.pkg-card:hover::before {
opacity: 1;
}

.pkg-card:hover::after {
border-color: rgba(212,175,55,0.4);
}

.pkg-card:hover .pkg-name {
color: #d4af37;
}

.pkg-card:hover .pkg-tier {
color: #f0d060;
}

.pkg-card:hover .pkg-sep {
background: rgba(212,175,55,0.5);
}

.pkg-card:hover .pkg-btn {
background: #d4af37;
color: #0a0a0a;
border-color: #d4af37;
}

.pkg-btn {
font-size: 0.65rem;
letter-spacing: 0.28em;
text-transform: uppercase;
background: transparent;
border: 1px solid #b8960c;
color: #b8960c;
padding: 15px 28px;
cursor: pointer;
font-family: 'Montserrat', sans-serif;
font-weight: 600;
width: 100%;
transition: all 0.35s ease;
}

        .pkg-card.featured {
          background: #15110a;
        }
        .pkg-card.featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #b8960c, #f0d060, #b8960c);
        }
        .pkg-tier {
          font-size: 0.58rem; letter-spacing: 0.38em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 14px; font-weight: 600;
        }
        .pkg-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.6rem; font-weight: 400;
          color: #f5f0e8; line-height: 1;
        }
        .pkg-name span { color: #d4af37; display: block; }
        .pkg-sep {
          width: 100%; height: 1px;
          background: rgba(184,150,12,0.2);
          margin: 32px 0 28px;
        }
        .pkg-features {
          list-style: none;
          display: flex; flex-direction: column; gap: 14px;
          flex: 1; margin-bottom: 44px;
        }
        .pkg-features li {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 0.83rem; color: rgba(245,240,232,0.62);
          font-weight: 300; line-height: 1.55;
        }
        .pkg-features li::before {
          content: '—'; color: #b8960c; flex-shrink: 0;
          font-size: 0.75rem; margin-top: 1px;
        }
        .pkg-btn {
          font-size: 0.65rem; letter-spacing: 0.28em; text-transform: uppercase;
          background: transparent; border: 1px solid #b8960c;
          color: #b8960c; padding: 15px 28px;
          cursor: pointer; font-family: 'Montserrat', sans-serif;
          font-weight: 600; width: 100%;
          transition: background 0.3s, color 0.3s;
        }
        .pkg-btn:hover, .pkg-card.featured .pkg-btn {
          background: #b8960c; color: #0a0a0a;
        }
        @media (max-width: 768px) {
          .packages-grid { grid-template-columns: 1fr; }
          .packages-section { padding: 80px 24px; }
        }
      `}</style>

      <section className="packages-section" id="packages">
        <div className="packages-inner">
          <div className="section-label-p">Pricing</div>
          <h2 className="section-title-p">Our <em>Packages</em></h2>
          <div className="gold-rule-p" />
          <div className="packages-grid">
            {PACKAGES.map((pkg) => (
              <div className={`pkg-card${pkg.highlight ? " featured" : ""}`} key={pkg.name}>
                <div className="pkg-tier">{pkg.tier}</div>
                <div className="pkg-name">
                  {pkg.name}
                  <span>Package</span>
                </div>
                <div className="pkg-sep" />
                <ul className="pkg-features">
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <button className="pkg-btn">Book This Package</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
