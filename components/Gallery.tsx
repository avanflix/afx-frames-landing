import Image from "next/image";

export default function GallerySection() {
  const GALLERY_IMAGES = [
    { src: "/gallery2/10.jpg", position: "center 15%" },
    { src: "/gallery2/12.jpg", position: "center center" },
    { src: "/gallery2/3.jpg", position: "center 20%" },
    { src: "/gallery2/4.jpg", position: "center center" },
    { src: "/gallery2/5.jpg", position: "center 10%" },
    { src: "/gallery2/6.jpg", position: "center center" },
    { src: "/gallery2/9.jpg", position: "center 15%" },
    { src: "/gallery2/11.jpg", position: "center center" },
  ];

  return (
    <> <style>{`
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
  object-position: center top;
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
  grid-auto-rows: 90px;
  gap: 15px;
  width: 100%;
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
  `}</style>

      <section className="gallery-section" id="gallery">
        <div className="gallery-inner">
          <div className="section-label-g">Portfolio</div>

          <h2 className="section-title-g">
            Featured <em>Gallery</em>
          </h2>

          <div className="gold-rule-g" />

          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, index) => (
              <div className="gallery-item" key={index}>
                <Image
                  src={img.src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: img.position,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>

  );
}
