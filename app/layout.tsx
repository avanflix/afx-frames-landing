import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFX Frames | Premium Creative Studio",
  description:
    "Where Talent Meets Vision. Premium portfolio photography studio in Hyderabad for models, actors, influencers and more.",
  keywords:
    "portfolio photography, model portfolio, actor portfolio, creative studio, Hyderabad, AFX Frames",
  openGraph: {
    title: "AFX Frames | Premium Creative Studio",
    description:
      "Where Talent Meets Vision. We build presence, identity, and visual impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
