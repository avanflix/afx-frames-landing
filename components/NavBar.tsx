"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";

interface NavBarProps {
  logoVisible: boolean;
  onBookNow: () => void;
}



const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why" },
  // { label: "Packages", id: "packages" },
  { label: "Contact", id: "contact" },
];

export default function NavBar({
  logoVisible,
  onBookNow,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
.mobile-menu-btn {
  display: none;
}

@media (max-width: 768px) {
  .afx-nav {
    padding: 0 20px;
  }

  .nav-links-list {
    display: none;
  }

  .nav-book-btn {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    width: 40px;
    height: 40px;

    background: transparent;
    border: none;
    cursor: pointer;
  }

  .mobile-menu-btn span {
    width: 24px;
    height: 2px;
    background: #d4af37;
    transition: all 0.3s ease;
  }

  .mobile-menu {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;

    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(20px);

    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 28px;

    border-bottom: 1px solid rgba(184,150,12,0.2);

    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;

    transition: all 0.35s ease;
    z-index: 999;
  }

  .mobile-menu.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  .mobile-menu a {
    text-decoration: none;
    color: #f5f0e8;

    font-size: 0.85rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;

    padding: 6px 0;
  }

  .mobile-book-btn {
    margin-top: 8px;

    padding: 12px;
    border: 1px solid #b8960c;

    background: transparent;
    color: #b8960c;

    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
}

.mobile-menu-btn.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none;
  }
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
        <button
          className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <button className="nav-book-btn" onClick={onBookNow}>
          Book a Shoot
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ label, id }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
              setMenuOpen(false);
            }}
          >
            {label}
          </a>
        ))}

        <button
          className="mobile-book-btn"
          onClick={() => {
            onBookNow();
            setMenuOpen(false);
          }}
        >
          Book a Shoot
        </button>
      </div>
    </>
  );
}
