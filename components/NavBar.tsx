"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

interface NavBarProps {
  logoVisible: boolean;
  onBookNow: () => void;
}



const NAV_LINKS = [
  { label: "About",    id: "about"    },
  { label: "Gallery",    id: "gallery"    },
  { label: "Services", id: "services" },
  { label: "Why Us",   id: "why"      },
  // { label: "Packages", id: "packages" },
  { label: "Contact",  id: "contact"  },
];

export default function NavBar({
  logoVisible,
  onBookNow,
}: NavBarProps) {  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .afx-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 0 48px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }
        .afx-nav.scrolled {
          background: rgba(10,10,10,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom-color: rgba(184,150,12,0.2);
        }
        .nav-logo-wrap {
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
          cursor: pointer;
        }
        .nav-logo-wrap.visible {
          opacity: 1;
          transform: translateX(0);
          pointer-events: auto;
        }
        .nav-links-list {
          display: flex;
          gap: 40px;
          list-style: none;
          opacity: 0;
          transition: opacity 0.5s 0.3s ease;
        }
        .nav-logo-wrap.visible ~ .nav-links-list { opacity: 1; }
        .nav-links-list a {
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #f5f0e8;
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s, color 0.2s;
          font-weight: 500;
        }
        .nav-links-list a:hover { opacity: 1; color: #d4af37; }
        .nav-book-btn {
          font-size: 0.68rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid #b8960c;
          color: #b8960c;
          padding: 10px 24px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.5s 0.4s ease, background 0.3s, color 0.3s;
        }
        .nav-logo-wrap.visible ~ .nav-links-list ~ .nav-book-btn { opacity: 1; }
        .nav-book-btn:hover { background: #b8960c; color: #0a0a0a; }
        @media (max-width: 768px) {
          .afx-nav { padding: 0 24px; }
          .nav-links-list { display: none; }
          .nav-book-btn { font-size: 0.6rem; padding: 8px 16px; }
        }
      `}</style>

      <nav className={`afx-nav${scrolled ? " scrolled" : ""}`}>
        <div
          className={`nav-logo-wrap${logoVisible ? " visible" : ""}`}
          onClick={() => scrollTo("home")}
        >
          <LogoMark size="nav" />
        </div>

        <ul className="nav-links-list">
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button className="nav-book-btn" onClick={onBookNow}>
          Book a Shoot
        </button>
      </nav>
    </>
  );
}
