# AFX Frames — Landing Page

Premium creative studio landing page built with **Next.js 14** + **TypeScript**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## 🎬 Adding a Hero Video

To enable the background video in the hero section:

1. Place your video file at `public/hero-video.mp4`
2. Open `components/HeroSection.tsx`
3. Find the commented-out video block and uncomment it:

```tsx
<div className="hero-video-wrap">
  <video autoPlay muted loop playsInline>
    <source src="/hero-video.mp4" type="video/mp4" />
  </video>
</div>
<div className="hero-video-overlay" />
```

**Recommended video specs:**
- Format: MP4 (H.264)
- Resolution: 1920×1080 or higher
- Duration: 15–30 seconds looping
- File size: Under 15MB for fast loading

---

## 📁 Project Structure

```
afxframes/
├── app/
│   ├── layout.tsx        # Root layout with metadata & font imports
│   ├── page.tsx          # Main page — composes all sections
│   └── globals.css       # Base reset & scrollbar styles
├── components/
│   ├── LogoMark.tsx      # Reusable AFX Frames logo (splash / nav / footer sizes)
│   ├── NavBar.tsx        # Sticky navbar with scroll-aware background
│   ├── IntroSplash.tsx   # Full-screen logo intro animation
│   ├── HeroSection.tsx   # Hero with gradient bg, stats bar, video slot
│   ├── AboutSection.tsx  # About the studio + services list
│   ├── ServicesSection.tsx  # 8-card services grid
│   ├── WhySection.tsx    # 7-point why-us list
│   ├── PackagesSection.tsx  # 3-tier pricing cards
│   ├── TestimonialsSection.tsx  # 4-card testimonials grid
│   └── CTAAndFooter.tsx  # Final CTA + footer
├── public/
│   └── (place hero-video.mp4 here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🎨 Brand Colours

| Name       | Hex       | Usage                        |
|------------|-----------|------------------------------|
| Black      | `#0a0a0a` | Primary background           |
| Dark       | `#111111` | Alternate section background |
| Card       | `#161616` | Card backgrounds             |
| Gold       | `#b8960c` | Primary accent               |
| Gold Light | `#d4af37` | Italic headings              |
| Gold Pale  | `#f0d060` | Hover states                 |
| Red        | `#8b1a1a` | Logo dot                     |
| Red Bright | `#c0392b` | Logo X letter                |
| White      | `#f5f0e8` | Body text                    |

---

## ✏️ Customisation

- **Content** — Edit the data arrays at the top of each component file
- **Contact details** — Update in `components/CTAAndFooter.tsx`
- **Fonts** — Loaded via Google Fonts in `app/layout.tsx`
- **Animations** — All intro animation timings are in `app/page.tsx` (`useEffect`)

---

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- CSS-in-JS via `<style>` tags (no extra dependencies)
- Google Fonts — Cormorant Garamond + Montserrat
