import Image from "next/image";

type LogoSize = "splash" | "nav" | "footer";

interface LogoMarkProps {
  size: LogoSize;
}

const logoSizes = {
  splash: {
    width: 360,
    height: 140,
    className: "logo-splash",
  },

  nav: {
    width: 190,
    height: 72,
    className: "logo-nav",
  },

  footer: {
    width: 170,
    height: 64,
    className: "logo-footer",
  },
};

export default function LogoMark({ size }: LogoMarkProps) {
  const logo = logoSizes[size];

  return (
    <>
      <style>{`
        .afx-logo {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          transition:
            transform .35s ease,
            opacity .35s ease,
            filter .35s ease;
        }

        .afx-logo img {
          object-fit: contain;
        }

        .logo-nav:hover {
          transform: translateY(-1px);
          filter:
            drop-shadow(0 0 10px rgba(199,167,106,.15))
            drop-shadow(0 0 20px rgba(199,167,106,.08));
        }

        .logo-footer {
          opacity: .9;
        }

        .logo-footer:hover {
          opacity: 1;
        }

        .logo-splash {
          animation: logoReveal 1.8s ease forwards;
        }

        @keyframes logoReveal {
          0% {
            opacity: 0;
            transform: scale(.92);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .logo-nav {
            transform: scale(.92);
            transform-origin: left center;
          }

          .logo-splash {
            transform: scale(.82);
          }
        }
      `}</style>

      <div className={`afx-logo ${logo.className}`}>
        <Image
          src="/afxframes3.png"
          alt="AFX Frames"
          width={logo.width}
          height={logo.height}
          priority={size === "splash"}
          quality={100}
        />
      </div>
    </>
  );
}