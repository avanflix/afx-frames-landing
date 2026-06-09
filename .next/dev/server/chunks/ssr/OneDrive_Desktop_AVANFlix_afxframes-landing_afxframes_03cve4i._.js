module.exports = [
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const logoSizes = {
    splash: {
        width: 360,
        height: 140,
        className: "logo-splash"
    },
    nav: {
        width: 190,
        height: 72,
        className: "logo-nav"
    },
    footer: {
        width: 170,
        height: 64,
        className: "logo-footer"
    }
};
function LogoMark({ size }) {
    const logo = logoSizes[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `afx-logo ${logo.className}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/afxframes3.png",
                    alt: "AFX Frames",
                    width: logo.width,
                    height: logo.height,
                    priority: size === "splash",
                    quality: 100
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroSplash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function IntroSplash({ loaded }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `intro-splash${loaded ? " hide" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "splash-logo-wrap",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            size: "splash"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "splash-rule"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "splash-tagline",
                        children: "Hyderabad · Premium Creative Studio"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "splash-dots",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "splash-dot"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "splash-dot"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "splash-dot"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const NAV_LINKS = [
    {
        label: "About",
        id: "about"
    },
    {
        label: "Gallery",
        id: "gallery"
    },
    {
        label: "Services",
        id: "services"
    },
    {
        label: "Why Us",
        id: "why"
    },
    {
        label: "Packages",
        id: "packages"
    },
    {
        label: "Contact",
        id: "contact"
    }
];
function NavBar({ logoVisible }) {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    const scrollTo = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `afx-nav${scrolled ? " scrolled" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `nav-logo-wrap${logoVisible ? " visible" : ""}`,
                        onClick: ()=>scrollTo("home"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            size: "nav"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "nav-links-list",
                        children: NAV_LINKS.map(({ label, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${id}`,
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        scrollTo(id);
                                    },
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this)
                            }, id, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-book-btn",
                        onClick: ()=>scrollTo("packages"),
                        children: "Book a Shoot"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function HeroSection() {
    const scrollTo = (id)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                id: "home",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-gradient-bg"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                        lineNumber: 247,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-grain"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-lines",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-line-v"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-line-v"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-eyebrow",
                                children: "Premium Creative Studio · Hyderabad"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "hero-title",
                                children: [
                                    "Where ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Talent"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 271,
                                        columnNumber: 34
                                    }, this),
                                    "Meets Vision."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-subtitle",
                                children: '"We don\'t just create portfolios. We build presence, identity, and visual impact."'
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-divider"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hero-btn-primary",
                                        onClick: ()=>scrollTo("packages"),
                                        children: "Book Your Shoot"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#about",
                                        className: "hero-btn-outline",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            scrollTo("about");
                                        },
                                        children: "Explore Our Work"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-stats",
                        children: [
                            {
                                num: "500+",
                                label: "Portfolios Created"
                            },
                            {
                                num: "8",
                                label: "Services Offered"
                            },
                            {
                                num: "5–7",
                                label: "Day Delivery"
                            },
                            {
                                num: "100%",
                                label: "Agency-Ready"
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-stat",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-stat-num",
                                        children: s.num
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hero-stat-label",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                                lineNumber: 302,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section",
                id: "about",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-label",
                                    children: "About the Studio"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: [
                                        "A Premium",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                            lineNumber: 186,
                                            columnNumber: 52
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "Creative Studio"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                            lineNumber: 186,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gold-rule"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "about-quote",
                                    children: '"Every frame we capture is a deliberate act of storytelling."'
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "about-body",
                                    children: "We are a full-service creative studio dedicated to producing world-class visual content for talent at every stage of their career. We partner with models, actors, influencers, and children to craft portfolios that open doors, command attention, and define careers."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "about-list",
                                    children: [
                                        "Model Portfolios",
                                        "Actor Portfolios",
                                        "Child Portfolio Shoots",
                                        "Fashion Editorials",
                                        "Personal Branding"
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-visual",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-frame-outer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-accent-num",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-frame-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/13.jpg",
                                                alt: "About Us",
                                                fill: true,
                                                className: "about-image",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner c-tl"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner c-tr"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 216,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner c-bl"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner c-br"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 218,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-frame-quote",
                                                children: [
                                                    '"Your Portfolio.',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 35
                                                    }, this),
                                                    'Our Vision."'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-accent-box"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SERVICES = [
    {
        num: "01",
        title: "Portfolio Shoots",
        desc: "Tailored sessions for models, actors & influencers"
    },
    {
        num: "02",
        title: "Cinematic Reels",
        desc: "Motion content that captures your on-screen presence"
    },
    {
        num: "03",
        title: "Fashion Photography",
        desc: "Editorial-grade imagery for campaigns & lookbooks"
    },
    {
        num: "04",
        title: "Creative Direction",
        desc: "Concept-to-capture vision for your brand story"
    },
    {
        num: "05",
        title: "Styling Guidance",
        desc: "Expert wardrobe and look consultation pre-shoot"
    },
    {
        num: "06",
        title: "Social Media Branding",
        desc: "Content optimised for Instagram, TikTok & beyond"
    },
    {
        num: "07",
        title: "Professional Retouching",
        desc: "Refined post-production to industry standards"
    },
    {
        num: "08",
        title: "Child Modeling Portfolios",
        desc: "Safe, fun, professional shoots for young talent"
    }
];
function ServicesSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "services-section",
                id: "services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-label-s",
                            children: "Our Services"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title-s",
                            children: [
                                "What We ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Provide"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 51
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gold-rule-s"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "services-grid",
                            children: SERVICES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "svc-num",
                                            children: s.num
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "svc-title",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "svc-desc",
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.num, true, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const WHY_LIST = [
    {
        num: "01",
        title: "Industry-Trained Photographers",
        desc: "Our team has worked with top agencies and publications worldwide."
    },
    {
        num: "02",
        title: "Bespoke Creative Direction",
        desc: "Every shoot is custom-designed around your unique identity."
    },
    {
        num: "03",
        title: "State-of-the-Art Studio",
        desc: "Professional lighting, backdrops, and equipment for flawless results."
    },
    {
        num: "04",
        title: "Child-Safe Environment",
        desc: "Certified, vetted professionals ensuring comfort and safety for young talent."
    },
    {
        num: "05",
        title: "Fast Turnaround",
        desc: "Edited, retouched images delivered within 5–7 business days."
    },
    {
        num: "06",
        title: "Agency-Ready Output",
        desc: "Portfolios formatted to the exact specifications top agencies demand."
    },
    {
        num: "07",
        title: "Ongoing Creative Partnership",
        desc: "We grow with your career — from first shoot to international campaigns."
    }
];
function WhySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "why-section",
                id: "why",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "why-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-label-w",
                            children: "Why Choose Us"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title-w",
                            children: [
                                "Why ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "AFX Frames"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 47
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gold-rule-w"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "why-list",
                            children: WHY_LIST.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "why-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "why-num",
                                            children: w.num
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "why-title",
                                            children: w.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "why-desc",
                                            children: w.desc
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, w.num, true, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TESTIMONIALS = [
    {
        name: "Priya Reddy",
        role: "Model — Hyderabad",
        text: "I was nervous before the shoot, but the team made me feel comfortable from the start. The photos came out better than I expected."
    },
    {
        name: "Arjun Mehta",
        role: "Actor — Hyderabad",
        text: "The entire process was smooth and professional. They guided me with poses and expressions, which made a huge difference in the final pictures."
    },
    {
        name: "Rahul Sharma",
        role: "Model — Hyderabad",
        text: "Loved the experience. The team paid attention to every detail, and the final portfolio looked clean, polished, and exactly what I was looking for."
    },
    {
        name: "Praveen Reddy",
        role: "Model — Hyderabad",
        text: "What I liked most was how natural everything felt. The team was patient, gave clear direction, and the photos genuinely reflected my personality."
    }
];
function TestimonialsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "testi-section",
                id: "testimonials",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "testi-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-label-t",
                            children: "Client Stories"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title-t",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "Testimonials"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                lineNumber: 95,
                                columnNumber: 43
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gold-rule-t"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "testi-grid",
                            children: TESTIMONIALS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "testi-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "testi-text",
                                            children: t.text
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "testi-author",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "testi-rule"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "testi-name",
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "testi-role",
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.name, true, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTAAndFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/LogoMark.tsx [app-ssr] (ecmascript)");
;
;
function CTAAndFooter() {
    const scrollTo = (id)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ---- CTA ---- */
        .cta-section {
          background: #0a0a0a;
          text-align: center;
          padding: 100px 48px;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(184,150,12,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .cta-section::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(184,150,12,0.35), transparent);
        }
        .cta-inner { position: relative; max-width: 740px; margin: 0 auto; }
        .cta-eyebrow {
          font-size: 0.62rem; letter-spacing: 0.5em; text-transform: uppercase;
          color: #b8960c; margin-bottom: 24px; font-weight: 600;
        }
        .cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 4.5rem);
          font-weight: 300; line-height: 1.05;
          color: #f5f0e8; margin-bottom: 12px;
        }
        .cta-title em { font-style: italic; color: #d4af37; }
        .cta-sub {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.2rem;
          color: rgba(245,240,232,0.45); margin-bottom: 56px;
        }
        .cta-btns {
          display: flex; gap: 16px; justify-content: center;
          flex-wrap: wrap; margin-bottom: 72px;
        }
        .cta-btn-primary {
          font-size: 0.68rem; letter-spacing: 0.28em; text-transform: uppercase;
          background: #b8960c; color: #0a0a0a; border: none;
          padding: 18px 48px; cursor: pointer;
          font-family: 'Montserrat', sans-serif; font-weight: 700;
          transition: background 0.3s, transform 0.2s;
        }
        .cta-btn-primary:hover { background: #f0d060; transform: translateY(-2px); }
        .cta-btn-outline {
          font-size: 0.68rem; letter-spacing: 0.28em; text-transform: uppercase;
          background: transparent; color: #f5f0e8;
          border: 1px solid rgba(245,240,232,0.25);
          padding: 18px 48px; cursor: pointer;
          font-family: 'Montserrat', sans-serif; font-weight: 500;
          text-decoration: none; display: inline-block;
          transition: border-color 0.3s, color 0.3s;
        }
        .cta-btn-outline:hover { border-color: #b8960c; color: #b8960c; }
        .cta-contact {
          display: flex; justify-content: center; gap: 56px; flex-wrap: wrap;
        }
        .contact-block { display: flex; flex-direction: column; gap: 5px; }
        .contact-lbl {
          font-size: 0.58rem; letter-spacing: 0.32em; text-transform: uppercase;
          color: #b8960c; font-weight: 600;
        }
        .contact-val {
          font-size: 0.9rem; color: rgba(245,240,232,0.65); font-weight: 300;
        }
        /* ---- FOOTER ---- */
        footer {
          background: #080808;
          border-top: 1px solid rgba(184,150,12,0.18);
          padding:5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 0.95rem;
          color: rgba(184,150,12,0.45);
        }
        .footer-copy {
          font-size: 0.62rem; letter-spacing: 0.08em;
          color: rgba(245,240,232,0.2);
        }
        @media (max-width: 768px) {
          .cta-section { padding: 100px 24px; }
          .cta-contact { gap: 32px; }
          footer { flex-direction: column; text-align: center; padding: 28px 24px; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "cta-section",
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cta-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cta-eyebrow",
                            children: "Book Your Shoot Today"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "cta-title",
                            children: [
                                "Your Portfolio.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                    lineNumber: 116,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Our Vision."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                    lineNumber: 116,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cta-sub",
                            children: "Build your identity with AFX Frames."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cta-btns",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "cta-btn-primary",
                                    onClick: ()=>scrollTo("packages"),
                                    children: "Book Now"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:info@afxframes.com",
                                    className: "cta-btn-outline",
                                    children: "Get in Touch"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cta-contact",
                            children: [
                                {
                                    label: "Email",
                                    value: "info@afxframes.com"
                                },
                                {
                                    label: "Phone",
                                    value: "+91 98765 43210"
                                },
                                {
                                    label: "Location",
                                    value: "Hyderabad, India"
                                }
                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-lbl",
                                            children: c.label
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-val",
                                            children: c.value
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.label, true, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$LogoMark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        size: "footer"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "footer-tagline",
                        children: '"Where Talent Meets Vision."'
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "footer-copy",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " AFX Frames. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function GallerySection() {
    const GALLERY_IMAGES = [
        "/gallery/5.jpg",
        "/gallery/9.jpg",
        "/gallery/14.jpg",
        "/gallery/3.jpg",
        "/gallery/10.jpg",
        "/gallery/4.jpg",
        "/gallery/11.jpg",
        "/gallery/1.jpg"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
.gallery-section {
  background: #111111;
  padding: 120px 48px;
  position: relative;
}

.gallery-inner {
  max-width: 1400px;
  margin: 0 auto;
}

/* Section Heading */
.section-label-g {
  font-size: 0.6rem;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  color: #b8960c;
  margin-bottom: 16px;
  font-weight: 600;
}

.section-title-g {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  color: #f5f0e8;
  margin-bottom: 24px;
}

.section-title-g em {
  color: #d4af37;
  font-style: italic;
}

.gold-rule-g {
  width: 48px;
  height: 2px;
  background: #b8960c;
  margin-bottom: 56px;
}

.gallery-stack {
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
}

.stack-item {
  position: absolute;
  overflow: hidden;
  border-radius: 8px;
  background: #161616;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  transition: all 0.5s ease;
}

.gallery-image {
  object-fit: cover;
  transition: transform 0.8s ease;
}

.stack-item:hover {
  z-index: 100;
  transform: scale(1.03);
}

.stack-item:hover .gallery-image {
  transform: scale(1.1);
}

/* Layout */

.stack-1 {
  width: 38%;
  height: 60%;
  left: 0;
  top: 10%;
  z-index: 8;
}

.stack-2 {
  width: 28%;
  height: 35%;
  left: 30%;
  top: 0;
  z-index: 7;
}

.stack-3 {
  width: 32%;
  height: 40%;
  right: 0;
  top: 8%;
  z-index: 6;
}

.stack-4 {
  width: 26%;
  height: 42%;
  left: 30%;
  top: 30%;
  z-index: 9;
}

.stack-5 {
  width: 24%;
  height: 28%;
  right: 10%;
  top: 42%;
  z-index: 10;
}

.stack-6 {
  width: 28%;
  height: 32%;
  left: 5%;
  bottom: 0;
  z-index: 5;
}

.stack-7 {
  width: 34%;
  height: 40%;
  left: 32%;
  bottom: 0;
  z-index: 4;
}

.stack-8 {
  width: 30%;
  height: 35%;
  right: 0;
  bottom: 5%;
  z-index: 3;
}

@media (max-width: 768px) {
  .gallery-stack {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .stack-item {
    position: relative;
    width: 100% !important;
    height: 300px !important;
    left: auto !important;
    right: auto !important;
    top: auto !important;
    bottom: auto !important;
  }
}
/* Gallery Layout */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  width: 100%;
  gap: 0;
  overflow: hidden;
}

/* Editorial Positions */
.gallery-item:nth-child(1) {
  grid-column: 1 / span 5;
  grid-row: 1 / span 7;
}

.gallery-item:nth-child(2) {
  grid-column: 6 / span 3;
  grid-row: 1 / span 4;
}

.gallery-item:nth-child(3) {
  grid-column: 9 / span 4;
  grid-row: 1 / span 4;
}

.gallery-item:nth-child(4) {
  grid-column: 6 / span 4;
  grid-row: 5 / span 3;
}

.gallery-item:nth-child(5) {
  grid-column: 10 / span 3;
  grid-row: 5 / span 3;
}

.gallery-item:nth-child(6) {
  grid-column: 1 / span 4;
  grid-row: 8 / span 5;
}

.gallery-item:nth-child(7) {
  grid-column: 5 / span 4;
  grid-row: 8 / span 5;
}

.gallery-item:nth-child(8) {
  grid-column: 9 / span 4;
  grid-row: 8 / span 5;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  background: #161616;
  cursor: pointer;
}

/* Image */
.gallery-image {
  object-fit: cover;
  transition:
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s ease;
}

/* Gold Overlay */
.gallery-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(212, 175, 55, 0.22),
    transparent 45%
  );
  opacity: 0;
  z-index: 2;
  transition: opacity 0.45s ease;
}

/* Gold Frame */
.gallery-item::after {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid rgba(212, 175, 55, 0.5);
  opacity: 0;
  z-index: 3;
  transform: scale(0.95);
  transition: all 0.45s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.08);
  filter: brightness(1.08);
}

.gallery-item:hover::before {
  opacity: 1;
}

.gallery-item:hover::after {
  opacity: 1;
  transform: scale(1);
}

/* Optional Counter */
.gallery-index {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 4;
  font-family: "Cormorant Garamond", serif;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transform: translateY(12px);
  transition: all 0.4s ease;
}

.gallery-item:hover .gallery-index {
  opacity: 1;
  transform: translateY(0);
}

/* Tablet */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(6, 1fr);
    height: auto;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .gallery-section {
    padding: 80px 24px;
  }

  .gallery-grid {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .gallery-item,
  .gallery-item:nth-child(n) {
    height: 320px;
  }
}
  `
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                lineNumber: 16,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "gallery-section",
                id: "gallery",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gallery-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-label-g",
                            children: "Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                            lineNumber: 328,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title-g",
                            children: [
                                "Featured ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                                    lineNumber: 331,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                            lineNumber: 330,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gold-rule-g"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                            lineNumber: 334,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "gallery-grid",
                            children: GALLERY_IMAGES.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gallery-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: img,
                                        alt: `Gallery ${index + 1}`,
                                        fill: true,
                                        className: "gallery-image"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                                        lineNumber: 339,
                                        columnNumber: 33
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                                    lineNumber: 338,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                            lineNumber: 336,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                    lineNumber: 327,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx",
                lineNumber: 326,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$IntroSplash$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/IntroSplash.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/NavBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/HeroSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/AboutSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/ServicesSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$WhySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/WhySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$TestimonialsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/TestimonialsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$CTAAndFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/CTAAndFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/components/Gallery.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logoVisible, setLogoVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t1 = setTimeout(()=>setLoaded(true), 2200);
        const t2 = setTimeout(()=>setLogoVisible(true), 2800);
        return ()=>{
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$IntroSplash$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                loaded: loaded
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                logoVisible: logoVisible
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$ServicesSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$WhySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$TestimonialsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$AVANFlix$2f$afxframes$2d$landing$2f$afxframes$2f$components$2f$CTAAndFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/AVANFlix/afxframes-landing/afxframes/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=OneDrive_Desktop_AVANFlix_afxframes-landing_afxframes_03cve4i._.js.map