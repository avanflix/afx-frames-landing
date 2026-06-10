"use client";
import { useState } from "react";

interface HeroSectionProps {
  onBookNow: () => void;
}
export default function HeroSection({
  onBookNow,
}: HeroSectionProps) {

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          height: 80vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        /* ---------- backgrounds ---------- */
        .hero-gradient-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 65% 40%, rgba(139,26,26,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 20% 80%, rgba(184,150,12,0.09) 0%, transparent 60%),
            linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%);
          z-index: 0;
        }
        .hero-video-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(10,10,10,0.35) 0%,
            rgba(10,10,10,0.1)  40%,
            rgba(10,10,10,0.75) 85%,
            rgba(10,10,10,1)    100%
          );
        }
        .hero-video-wrap {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-video-wrap video {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.38;
          filter: saturate(0.25) brightness(0.55);
        }
        .hero-grain {
          position: absolute;
          inset: 0;
          z-index: 2;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }
        /* ---------- lines ---------- */
        .hero-lines {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-line-v {
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(184,150,12,0.08) 30%, rgba(184,150,12,0.08) 70%, transparent);
        }
        .hero-line-v:nth-child(1) { left: 15%; }
        .hero-line-v:nth-child(2) { left: 85%; }
        /* ---------- content ---------- */
        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 0 14px;
          max-width: 960px;
        }
        .hero-eyebrow {
          font-size: 0.48rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          color: #b8960c;
          margin-bottom: 20px;
          font-weight: 500;
          opacity: 0;
          animation: heroFadeUp 1s 3.2s ease forwards;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 7vw, 4.5rem);
          font-weight: 200;
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: #f5f0e8;
          margin-bottom: 10px;
          opacity: 0;
          animation: heroFadeUp 1s 3.4s ease forwards;
        }
        .hero-title em { font-style: italic; color: #d4af37; }
        .hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.85rem, 1.95vw, 1.15rem);
          font-weight: 300;
          font-style: italic;
          color: rgba(245,240,232,0.6);
          margin-bottom: 52px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          opacity: 0;
          animation: heroFadeUp 1s 3.6s ease forwards;
        }
        .hero-divider {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8960c, transparent);
          margin: 0 auto 48px;
          opacity: 0;
          animation: heroFadeUp 1s 3.7s ease forwards;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          animation: heroFadeUp 1s 3.85s ease forwards;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        /* ---------- scroll indicator ---------- */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 36px; left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: heroFadeUp 1s 4.1s ease forwards;
        }
        .hero-scroll-indicator span {
          font-size: 0.58rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.35);
          font-weight: 500;
        }
        .scroll-line {
          width: 1px; height: 44px;
          background: linear-gradient(180deg, #b8960c, transparent);
          animation: scrollDrop 2s 4.2s infinite;
        }
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0.4; }
        }
        /* ---------- buttons ---------- */
        .hero-btn-primary {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          background: #b8960c;
          color: #0a0a0a;
          border: none;
          padding: 16px 40px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          transition: background 0.3s, transform 0.2s;
        }
        .hero-btn-primary:hover { background: #f0d060; transform: translateY(-2px); }
        .hero-btn-outline {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          background: transparent;
          color: #f5f0e8;
          border: 1px solid rgba(245,240,232,0.28);
          padding: 16px 40px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.3s, color 0.3s;
        }
        .hero-btn-outline:hover { border-color: #b8960c; color: #b8960c; }
        /* ---------- stats bar ---------- */
        .hero-stats {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 3;
          display: flex;
          justify-content: center;
          gap: 0;
          border-top: 1px solid rgba(184,150,12,0.15);
          background: rgba(10,10,10,0.6);
          backdrop-filter: blur(8px);
          opacity: 0;
          animation: heroFadeUp 1s 4.3s ease forwards;
        }
        .hero-stat {
          padding: 20px 48px;
          text-align: center;
          border-right: 1px solid rgba(184,150,12,0.1);
          flex: 1;
          max-width: 200px;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem;
          font-weight: 400;
          color: #d4af37;
          line-height: 1;
          margin-bottom: 4px;
        }
        .hero-stat-label {
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.4);
          font-weight: 500;
        }
        @media (max-width: 640px) {
          .hero-stats { display: none; }
          .hero-lines  { display: none; }
        }
      `}</style>

      <section className="hero" id="home">
        {/* Gradient fallback (always visible) */}
        <div className="hero-gradient-bg" />

        {/*
          ══════════════════════════════════════════
          VIDEO BACKGROUND — uncomment to activate
          Place your video at: /public/hero-video.mp4
          ══════════════════════════════════════════
          <div className="hero-video-wrap">
            <video autoPlay muted loop playsInline>
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-video-overlay" />
        */}

        <div className="hero-grain" />
        <div className="hero-lines">
          <div className="hero-line-v" />
          <div className="hero-line-v" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Premium Creative Studio · Hyderabad</p>
          <h1 className="hero-title">
            Where <em>Talent</em><br />Meets Vision.
          </h1>
          <p className="hero-subtitle">
            "We don't just create portfolios. We build presence, identity, and visual impact."
          </p>
          <div className="hero-divider" />
          <div className="hero-actions">
            <button
              className="hero-btn-primary"
              onClick={onBookNow}
            >
              Book Your Shoot
            </button>
            <a
              href="#gallery"
              className="hero-btn-outline"
              onClick={(e) => { e.preventDefault(); scrollTo("gallery"); }}
            >
              Explore Our Work
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          {[
            // { num: "20+", label: "Portfolios Created" },
            { num: "8", label: "Services Offered" },
            { num: "4–6", label: "Day Delivery" },
            { num: "100%", label: "Agency-Ready" },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}
