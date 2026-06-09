const WHY_LIST = [
  { num: "01", title: "Industry-Trained Photographers", desc: "Our team has worked with top agencies and publications worldwide." },
  { num: "02", title: "Bespoke Creative Direction", desc: "Every shoot is custom-designed around your unique identity." },
  { num: "03", title: "State-of-the-Art Studio", desc: "Professional lighting, backdrops, and equipment for flawless results." },
  { num: "04", title: "Child-Safe Environment", desc: "Certified, vetted professionals ensuring comfort and safety for young talent." },
  { num: "05", title: "Fast Turnaround", desc: "Edited, retouched images delivered within 5–7 business days." },
  { num: "06", title: "Agency-Ready Output", desc: "Portfolios formatted to the exact specifications top agencies demand." },
  { num: "07", title: "Ongoing Creative Partnership", desc: "We grow with your career — from first shoot to international campaigns." },
];

import { useEffect, useRef, useState } from "react";

export default function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        .why-section {
          background: #111111;
          padding: 120px 48px;
          position: relative;
        }
        .why-section::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,150,12,0.4), transparent);
        }
        .why-inner { max-width: 1200px; margin: 0 auto; }
        .section-label-w {
          font-size: 0.6rem; letter-spacing: 0.42em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 16px; font-weight: 600;
        }
        .section-title-w {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 400; line-height: 1.08;
          color: #f5f0e8; margin-bottom: 24px;
        }
        .section-title-w em { font-style: italic; color: #d4af37; }
        .gold-rule-w { width: 48px; height: 2px; background: #b8960c; margin-bottom: 56px; }
        .why-list { display: flex; flex-direction: column; }
        .why-item {
          display: grid;
          grid-template-columns: 72px 1fr 2fr;
          gap: 48px;
          align-items: start;
          padding: 32px 0;
          border-bottom: 1px solid rgba(184,150,12,0.1);
          transition: padding-left 0.3s;
          cursor: default;
        }
        .why-item:last-child { border-bottom: none; }
        .why-item {
position: relative;
display: grid;
grid-template-columns: 72px 1fr 2fr;
gap: 48px;
align-items: start;
padding: 32px 24px;
border-bottom: 1px solid rgba(184,150,12,0.1);
transition: all 0.35s ease;
cursor: default;
overflow: hidden;
}

.why-item::before {
content: "";
position: absolute;
inset: 0;
background: linear-gradient(
90deg,
rgba(184,150,12,0.12) 0%,
rgba(184,150,12,0.04) 50%,
transparent 100%
);
opacity: 0;
transition: opacity 0.35s ease;
}

.why-item::after {
content: "";
position: absolute;
left: 0;
width: 1px;
height: 100%;
background: #d4af37;
transform: scaleY(0);
transition: transform 0.35s ease;
}

.why-item:hover {
padding-left: 32px;
background: rgba(184,150,12,0.04);
}

.why-item:hover::before {
opacity: 1;
}

.why-item:hover::after {
transform: scaleY(1);
}

.why-item:hover .why-title {
color: #cbb25d;
}

.why-item:hover .why-num {
color: #f0c95d;
}

.why-num,
.why-title,
.why-desc {
position: relative;
z-index: 2;
}

.why-item {
  opacity: 0;
  transition:
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.9s ease;
}

.why-item {
  opacity: 0;
}

.visible .from-left {
  animation: slideLeft 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

.visible .from-right {
  animation: slideRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-150px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(150px);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
}
.from-left {
  transform: translateX(-150px);
  opacity: 0;
}

.from-right {
  transform: translateX(150px);
  opacity: 0;
}

        .why-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; color: #b8960c;
          font-weight: 400; padding-top: 2px;
        }
        .why-title {
          font-size: 0.82rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: #f5f0e8;
          font-weight: 600; padding-top: 2px; line-height: 1.5;
        }
        .why-desc {
          font-size: 0.9rem; color: rgba(245,240,232,0.52);
          line-height: 1.8; font-weight: 300;
        }
        @media (max-width: 900px) {
          .why-item { grid-template-columns: 48px 1fr; gap: 20px; }
          .why-desc { grid-column: 2; }
          .why-section { padding: 80px 24px; }
        }
      `}</style>

      <section className="why-section" id="why" ref={sectionRef}>
        <div className="why-inner">
          <div className="section-label-w">Why Choose Us</div>
          <h2 className="section-title-w">Why <em>AFX Frames</em></h2>
          <div className="gold-rule-w" />
          <div className={`why-list ${visible ? "visible" : ""}`}>
            {WHY_LIST.map((w, index) => (
              <div
                key={w.num}
                className={`why-item ${index % 2 === 0 ? "from-left" : "from-right"
                  }`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <span className="why-num">{w.num}</span>
                <span className="why-title">{w.title}</span>
                <span className="why-desc">{w.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
