"use client";

import LogoMark from "./LogoMark";

interface IntroSplashProps {
  loaded: boolean;
}

export default function IntroSplash({ loaded }: IntroSplashProps) {
  return (
    <>
      <style>{`

      @media (max-width: 768px) {
  .intro-splash {
    padding: 0 20px;
  }

  .splash-logo-wrap {
    width: 100%;
    justify-content: center;
  }

  .splash-tagline {
    text-align: center;
    max-width: 280px;
    line-height: 1.6;
  }
}
        .intro-splash {
          position: fixed;
          inset: 0;
          z-index: 9999;

          background:
            radial-gradient(
              circle at center,
              rgba(199,167,106,.08),
              transparent 40%
            ),
            #0b0d10;

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          overflow: hidden;

          transition:
            opacity .8s ease,
            visibility .8s ease;
        }

        .intro-splash::before {
          content: "";

          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at center,
              rgba(229,200,146,.05),
              transparent 55%
            );

          animation: ambientGlow 6s ease-in-out infinite;
        }

        @keyframes ambientGlow {
          0%,100% {
            transform: scale(1);
            opacity: .5;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        .intro-splash.hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .splash-logo-wrap {
          position: relative;
          z-index: 2;

          animation: logoReveal 2s ease forwards;
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform:
              translateY(20px)
              scale(.92);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .splash-rule {
          width: 90px;
          height: 1px;

          margin-top: 24px;
          margin-bottom: 24px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #c7a76a,
              transparent
            );

          opacity: 0;

          animation:
            fadeUp 1.2s .6s ease forwards;
        }

        .splash-tagline {
          position: relative;
          z-index: 2;

          font-family: 'Inter', sans-serif;

          font-size: .78rem;
          font-weight: 500;

          letter-spacing: .45em;
          text-transform: uppercase;

          color: #c7a76a;

          opacity: 0;

          animation:
            fadeUp 1.2s .8s ease forwards;
        }

        .splash-dots {
          position: relative;
          z-index: 2;

          display: flex;
          gap: 10px;

          margin-top: 28px;

          opacity: 0;

          animation:
            fadeUp 1s 1s ease forwards;
        }

        .splash-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #c7a76a;

          animation:
            luxuryPulse 1.8s infinite;
        }

        .splash-dot:nth-child(2) {
          animation-delay: .2s;
        }

        .splash-dot:nth-child(3) {
          animation-delay: .4s;
        }

        @keyframes luxuryPulse {
          0%,100% {
            opacity: .3;
            transform: scale(1);
          }

          50% {
            opacity: 1;
            transform: scale(1.8);
            box-shadow:
              0 0 20px rgba(199,167,106,.4);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .splash-rule {
            width: 70px;
          }

          .splash-tagline {
            font-size: .65rem;
            letter-spacing: .3em;
            text-align: center;
            padding: 0 24px;
          }
        }
      `}</style>

      <div className={`intro-splash${loaded ? " hide" : ""}`}>
        <div className="splash-logo-wrap">
          <LogoMark size="splash" />
        </div>
        <div className="splash-rule" />

        <div className="splash-tagline">
          Hyderabad · Premium Creative Studio
        </div>

        <div className="splash-dots">
          <div className="splash-dot" />
          <div className="splash-dot" />
          <div className="splash-dot" />
        </div>
      </div>
    </>
  );
}
