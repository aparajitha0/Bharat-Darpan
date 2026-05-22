import { useState } from "react";  
import { useLocation } from "wouter";
import {
  ArrowLeft,
  MapPin,
  ChevronRight,
  CheckCircle,
  X,
  ZoomIn,
} from "lucide-react";
import mizoramMap from "@assets/mizoramMap.jpg";
const chapchar1 = "https://i.postimg.cc/mrNr3MGB/image.png";
const mim1 = "https://i.postimg.cc/Fz1sQBk4/image.png";
const pawl1 = "https://i.postimg.cc/g23cdRj6/image.png";
const thalfavang1 = "https://i.postimg.cc/RFZvcDRZ/image.png";
const spring1 = "https://i.postimg.cc/kgP9j4cz/image.png";
const reiek1 = "https://i.postimg.cc/Vs3d8zg2/image.png";
const vantawng1 = "https://i.postimg.cc/x1PCMMQ9/image.png";
const museum1 = "https://i.postimg.cc/k51ghCDQ/image.png";
const durtlang1 = "https://i.postimg.cc/jd0d1Zds/image.png";
const champhai1 = "https://i.postimg.cc/Njbs5t8h/image.png";
const solomon1 = "https://i.postimg.cc/CK1F82JG/image.png";
const tamdil1 = "https://i.postimg.cc/hjQcy7kG/image.png";
const phawngpui1 = "https://i.postimg.cc/15QsBXJR/image.png";
const lunglei1 = "https://i.postimg.cc/XY2Wn83S/image.png";
const hmuifang1 = "https://i.postimg.cc/8CjSc6PL/image.png";
const mWangala = "https://i.postimg.cc/xTnVH71Y/image.png";
const mCheraw = "https://i.postimg.cc/wBtCgY0h/image.png";
const mKhullam = "https://i.postimg.cc/wT6n3mwD/image.png";
const mPuanchei = "https://i.postimg.cc/HxwPkY5N/image.png";
const mHmaram = "https://i.postimg.cc/zG4dwbF3/image.png";
const mPuanthar = "https://i.postimg.cc/9MCY1GRb/image.png";
const mBai = "https://i.postimg.cc/WbCmxRqs/image.png";
const mSawhchiar = "https://i.postimg.cc/SQtcz0rn/image.png";
const mVawksa = "https://i.postimg.cc/y80R5DzZ/image.png";
const mKhuang = "https://i.postimg.cc/R0RHS2hW/image.png";
const mDarkhuang = "https://i.postimg.cc/D0tWpTjr/image.png";
const mPhenglawng = "https://i.postimg.cc/8P6fJ7sg/image.png";
const mZawlbuk = "https://i.postimg.cc/bw0Gg4Q5/image.png";


/* ─── Lightbox ──────────────────────────────────────────────────────────── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

/* ─── Image placeholder (for docx images without uploaded files) ─────────── */
function DocxImage({
  label,
  source,
  color = "#D45A3A",
}: {
  label: string;
  source?: string;
  color?: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-border my-4"
      style={{ background: color + "12" }}
    >
      <div
        className="flex items-center justify-center py-10 gap-3"
        style={{ borderBottom: `2px solid ${color}22` }}
      >
        <div className="text-4xl opacity-60">🖼️</div>
        <div>
          <p className="font-semibold text-sm text-foreground/70">{label}</p>
          {source && <p className="text-xs text-muted-foreground">{source}</p>}
        </div>
      </div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────────────────────────── */
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {title}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

/* ─── Image grid (shared) ────────────────────────────────────────────────── */
function ImageGrid({
  images,
  alt,
  onImageClick,
}: {
  images: string[];
  alt: string;
  onImageClick: (src: string, alt: string) => void;
}) {
  const cols =
    images.length === 1
      ? "grid-cols-1"
      : images.length >= 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${cols}`}>
      {images.map((src, idx) => (
        <button
          key={idx}
          onClick={() =>
            onImageClick(
              src,
              `${alt}${images.length > 1 ? ` — image ${idx + 1}` : ""}`,
            )
          }
          className="group relative rounded-xl overflow-hidden border border-border bg-muted/30 cursor-zoom-in aspect-[4/3]"
        >
          <img
            src={src}
            alt={`${alt} ${idx + 1}`}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      ))}
    </div>
  );
}

/* ─── Festival card ──────────────────────────────────────────────────────── */
function FestivalCard({
  number,
  name,
  tagline,
  description,
  source,
  hasImage,
  imageLabel,
  images,
  onImageClick,
}: {
  number: number;
  name: string;
  tagline?: string;
  description: string;
  source?: string;
  hasImage?: boolean;
  imageLabel?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <div className="flex items-center gap-4 px-5 py-4 bg-gradient-to-r from-primary/8 to-transparent border-b border-border">
        <div
          className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {number}
        </div>
        <div>
          <h3
            className="font-bold text-foreground text-base"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {name}
          </h3>
          {tagline && (
            <p className="text-muted-foreground text-xs italic mt-0.5">
              {tagline}
            </p>
          )}
        </div>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p
          className="text-sm text-foreground leading-relaxed"
          style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
        >
          {description}
        </p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage
            label={imageLabel ?? name}
            source={source}
            color="#D45A3A"
          />
        )}
        {source && !hasImage && !images && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}
        {source && images && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Historical place card ──────────────────────────────────────────────── */
function HistoricalPlaceCard({
  number,
  name,
  description,
  source,
  hasImage,
  imageLabel,
  subPlaces,
  images,
  onImageClick,
}: {
  number: number;
  name: string;
  description: string;
  source?: string;
  hasImage?: boolean;
  imageLabel?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
  subPlaces?: {
    name: string;
    location?: string;
    description: string;
    source?: string;
    hasImage?: boolean;
    imageLabel?: string;
    images?: string[];
  }[];
}) {
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <div className="flex items-start gap-4 px-5 py-4 bg-gradient-to-r from-accent/8 to-transparent border-b border-border">
        <div
          className="w-9 h-9 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {number}
        </div>
        <h3
          className="font-bold text-foreground text-base pt-1"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {name}
        </h3>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p
          className="text-sm text-foreground leading-relaxed whitespace-pre-line"
          style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
        >
          {description}
        </p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage
            label={imageLabel ?? name}
            source={source}
            color="#3A8A5A"
          />
        )}
        {source && (!hasImage || images) && (
          <p className="text-xs text-muted-foreground">{source}</p>
        )}

        {subPlaces && subPlaces.length > 0 && (
          <div className="space-y-5">
            {subPlaces.map((sub, idx) => (
              <div
                key={idx}
                className="border border-border/60 rounded-xl p-4 bg-muted/30"
              >
                <div className="flex items-start gap-2 mb-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {sub.name}
                    </p>
                    {sub.location && (
                      <p className="text-xs text-muted-foreground">
                        {sub.location}
                      </p>
                    )}
                  </div>
                </div>
                <p
                  className="text-sm text-foreground/80 leading-relaxed pl-6"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {sub.description}
                </p>
                {sub.images && sub.images.length > 0 && (
                  <div className="pl-6 mt-3">
                    <ImageGrid
                      images={sub.images}
                      alt={sub.name}
                      onImageClick={onImageClick}
                    />
                  </div>
                )}
                {sub.hasImage && !sub.images && (
                  <div className="pl-6">
                    <DocxImage
                      label={sub.imageLabel ?? sub.name}
                      source={sub.source}
                      color="#3A7AAA"
                    />
                  </div>
                )}
                {sub.source && (!sub.hasImage || sub.images) && (
                  <p className="text-xs text-muted-foreground mt-2 pl-6">
                    {sub.source}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function MizoramPage() {
  const [, setLocation] = useLocation();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <div className="min-h-screen bg-background">
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #D45A3A 0%, #C03020 40%, #4CAF84 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-white translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </button>
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-4">
                Northeast India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Mizoram
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of the Blue Mountains
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Aizawl" },
                  { label: "Population", value: "10.97 Lakh" },
                  { label: "Area", value: "21,081 sq km" },
                  { label: "Founded", value: "20 February 1987" },
                  { label: "Language", value: "Mizo, English" },
                  { label: "Districts", value: "11 Districts" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-white/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-white/60 text-xs">{label}: </span>
                      <span className="text-white text-xs font-medium">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Capital */}
        <Section title="Capital" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Aizawl
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Mizoram — Silent City
            </p>
          </div>
        </Section>

        {/* Map of Mizoram — click to enlarge */}
        <Section title="Map of Mizoram" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(mizoramMap, "Map of Mizoram")}
            >
              <img
                src={mizoramMap}
                alt="Map of Mizoram"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium">
                  <ZoomIn className="w-4 h-4" />
                  Click to enlarge
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              (src: mapsofindia.com) — Click the map to view full size
            </p>
          </div>
        </Section>

        {/* Brief Introduction */}
        <Section title="Brief Introduction" icon="📜">
          <div
            className="space-y-4 text-base leading-relaxed"
            style={{ fontFamily: "'Lora', serif", textAlign: "justify" }}
          >
            <p className="text-foreground">
              Mizoram, often called the “Land of the Hill People,” is a northeastern state known for its scenic hills, bamboo forests, and clean towns. It became a full state on 20 February 1987 and today has 11 districts, with Aizawl as its capital.
            </p>
            <p className="text-foreground">
              The people of Mizoram are famous for their discipline, community spirit, and rich traditions. The state’s landscapes are dotted with rivers like Tlawng, Tuivawl, and Chhimtuipui, adding to its natural charm. Mizoram is renowned for its music, festivals, and vibrant dances like Cheraw, the bamboo dance. Chapchar Kut, Mim Kut, and Pawl Kut are celebrated with joy, reflecting agricultural cycles and community bonding. 
            </p>
            <p className="text-foreground">
              The cuisine includes Bai, Vawksa Rep, and Koat Pitha, showcasing local flavors. Mizoram State Museum in Aizawl preserves cultural heritage through artifacts and traditional clothing. The state is also known for its vineyards in Champhai and waterfalls like Vantawng Falls. Mizoram’s society emphasizes equality and cooperation, with women playing active roles. The hills and valleys make it a paradise for trekkers and nature lovers. Bamboo plays a central role in housing, crafts, and daily life.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Mizoram is one of the cleanest states in India, admired for its civic sense. Its peaceful atmosphere and scenic views make it a unique destination. Mizoram continues to thrive as a land of culture, nature, and harmony.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Mizoram, mapsofindia.com)
            </p>
          </div>
        </Section>

        {/* Festivals */}
        <Section title="Festivals / Culture / Traditions" icon="🎉">
          <div className="space-y-8">
            {festivals.map((f, i) => (
              <FestivalCard
                key={i}
                number={i + 1}
                {...f}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </Section>

        {/* Historical Places */}
        <Section title="Historical Places / Monuments" icon="🏯">
          <div className="space-y-10">
            {historicalPlaces.map((p, i) => (
              <HistoricalPlaceCard
                key={i}
                number={i + 1}
                {...p}
                onImageClick={openLightbox}
              />
            ))}
          </div>
        </Section>

        {/* Facts */}
        <Section title="Facts about Mizoram" icon="💡">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
              >
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p
                  className="text-sm text-foreground leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Art Gallery */}
        <Section title="Art Gallery" icon="🎨">
          <p className="text-muted-foreground text-sm mb-4">
            Scroll horizontally to explore Mizoram's iconic foods, crafts,
            dance, and traditions.
          </p>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {artGallery.map((item, i) => {
                const hasImg = "image" in item && !!item.image;
                const Wrapper: React.ElementType = hasImg ? "button" : "div";
                return (
                  <Wrapper
                    key={i}
                    onClick={
                      hasImg
                        ? () => openLightbox(item.image as string, item.title)
                        : undefined
                    }
                    className={`flex-shrink-0 w-44 rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow text-left ${hasImg ? "cursor-zoom-in group" : ""}`}
                  >
                    <div
                      className="h-36 flex items-center justify-center overflow-hidden relative"
                      style={{
                        backgroundColor: item.color + "33",
                        borderBottom: `2px solid ${item.color}44`,
                      }}
                    >
                      {hasImg ? (
                        <>
                          <img
                            src={item.image as string}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </>
                      ) : (
                        <span className="text-4xl">{item.emoji}</span>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-xs text-foreground leading-tight">
                        {item.title}
                      </p>
                      {item.desc && (
                        <p className="text-xs text-muted-foreground mt-1 leading-tight">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Back */}
        <div className="text-center pt-4">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <MapPin className="w-5 h-5" />
            Explore the Full Map
          </button>
        </div>
      </main>

      <footer className="mt-16 bg-foreground/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-primary font-semibold hover:underline text-sm"
          >
            ← Bharat Darpan
          </button>
          <p className="text-xs text-muted-foreground mt-2">
            Preserving India's rich cultural legacy for generations to come
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── DATA ───────────────────────────────────────────────────────────────── */

const festivals = [
  {
    name: "Chapchar Kut",
    tagline: "Celebrated in spring after jungle clearing for farming. Includes dance, music, and traditional clothing",
    description:
      "Chapchar Kut is the most popular festival of Mizoram. It is celebrated after the completion of jhum cultivation. The festival includes dances, songs, and feasts. Traditional costumes are worn during celebrations. Chapchar Kut reflects agricultural heritage. It promotes unity and community spirit. Visitors enjoy cultural performances and local food. The festival remains a highlight of Mizoram’s traditions. It attracts tourists and researchers. Chapchar Kut embodies the harmony of agriculture and culture. It continues to thrive as a cultural landmark.",
    images: [chapchar1],
    source: "(src: Pinterest)",
  },
  {
    name: "Mim Kut",
    tagline:
      "A festival related to remembrance and sharing food, linked with traditional beliefs and harvest",
    description:
      "Mim Kut is a harvest festival celebrated after the maize crop is gathered. It is one of Mizoram’s oldest traditions. The festival includes rituals, dances, and feasts. Elders honor ancestors during celebrations. The festival reflects agricultural heritage. It promotes unity and community spirit. Visitors enjoy cultural performances and local food. Mim Kut is linked to farming cycles. It remains a highlight of Mizoram’s traditions. The festival attracts tourists and researchers. It embodies the harmony of agriculture and culture. Mim Kut continues to thrive as a cultural landmark.",
    images: [mim1],
    source: "(src: india-tours.com)",
  },
  {
    name: "Pawl Kut",
    tagline:
      "A harvest festival that celebrates hard work and community gatherings with feasts and cultural programs",
    description:
      "Pawl Kut is a harvest festival celebrated after the paddy crop is gathered. It is one of Mizoram’s oldest traditions. The festival includes rituals, dances, and feasts. Elders bless harvests for prosperity. The festival reflects agricultural heritage. It promotes unity and community spirit. Visitors enjoy cultural performances and local food. Pawl Kut is linked to farming cycles. It remains a highlight of Mizoram’s traditions. The festival attracts tourists and researchers. It embodies the harmony of agriculture and culture. Pawl Kut continues to thrive as a cultural landmark.",
    images: [pawl1],
    source: "(src: travelworldplanet.com)",
  },
  {
    name: "Thalfavang Kut",
    tagline:
      "",
    description:
      "Thalfavang Kut is celebrated after the completion of weeding in jhum cultivation. It marks the hard work of farmers. The festival includes dances, songs, and feasts. It is a time of joy and community bonding. Traditional costumes are worn during celebrations. The festival reflects Mizoram’s agricultural heritage. It promotes unity and cooperation. Visitors enjoy cultural performances and local food. Thalfavang Kut is linked to farming cycles. It remains a highlight of Mizoram’s traditions. The festival attracts tourists and researchers. It embodies the harmony of agriculture and culture. Thalfavang Kut continues to thrive as a cultural landmark.",
    images: [thalfavang1],
    source: "(src: Makemytrip.com)",
  },
  {
    name: "Spring Festival",
    tagline:
      "Anthurium Festival",
    description:
      "The Anthurium Festival is a modern celebration of Mizoram’s floriculture. It is held annually in Reiek. The festival showcases vibrant anthurium flowers. Cultural programs and dances are organized. Local crafts and cuisine are displayed. The festival promotes tourism and economy. It reflects Mizoram’s natural charm. Visitors enjoy photography and shopping. The festival remains a highlight of Mizoram’s culture. It attracts tourists and researchers. Anthurium Festival embodies joy and community spirit. It continues to thrive as a cultural landmark",
    images: [spring1],
    source: "(src: ourguest.com)",
  },
];

const historicalPlaces = [
  {
    name: "Reiek Tlang",
    description:
      "Reiek, also called Reiek Tlang, is a popular hill destination near Aizawl. It offers panoramic views of the surrounding valleys and hills. The area is ideal for trekking and adventure activities. Reiek is also culturally significant, hosting traditional festivals and events. The hill is covered with lush greenery and bamboo forests. Visitors enjoy the serene environment and fresh air. The site reflects Mizoram’s natural beauty and community spirit. Local villages nearby showcase Mizo traditions. Reiek is a favorite spot for picnics and outings. It attracts tourists and locals alike. The hill is often used for cultural programs. Its scenic charm makes it a photographer’s delight. Reiek embodies the harmony of nature and culture. It remains a jewel of Mizoram’s tourism. The destination highlights the state’s eco friendly lifestyle.",
    images: [reiek1],
    source: "(src: Exploremizoram.com)",
  },
  {
    name: "Vantawng Falls",
    description:
      "Vantawng Falls, located near Thenzawl in Serchhip district, is one of the highest waterfalls in Mizoram. It cascades down from a great height, creating a spectacular view. The waterfall is surrounded by dense forests and hills. It is a major tourist attraction in the state. The falls are best viewed from a nearby vantage point. Vantawng reflects Mizoram’s pristine natural beauty. The area is rich in biodiversity. Visitors are enchanted by the sound of rushing water. The falls are linked to local legends and folklore. It is a symbol of Mizoram’s ecological wealth. The site is ideal for nature lovers and photographers. Seasonal rains enhance its grandeur. Vantawng Falls remains a highlight of Mizoram’s tourism. It showcases the state’s untouched landscapes. The waterfall is a pride of Mizoram’s natural heritage",
    images: [vantawng1],
    source: "(src: Treksandtravels.com)",
  },
  {
    name: "Mizoram State Museum",
    description:
      "The Mizoram State Museum, located in Aizawl, preserves the cultural heritage of the Mizo people. It displays traditional clothing, tools, and artifacts. The museum highlights the history and lifestyle of Mizoram. Exhibits include musical instruments and crafts. It is managed by state authorities. The museum educates visitors about Mizo traditions. It attracts tourists and researchers alike. The building reflects modern architecture. The museum is a hub of cultural learning. It showcases the discipline and creativity of Mizoram. Visitors gain insights into local customs. The museum supports cultural preservation. It is a pride of Aizawl city. The exhibits inspire respect for heritage. Mizoram State Museum remains a cultural landmark",
    images: [museum1],
    source: "(src: Indiano.com)",
  },
  {
    name: "Durtlang Hills",
    description:
      "Durtlang Hills, located near Aizawl, offer scenic views of the city. The hills are covered with greenery and forests. They are popular for trekking and sightseeing. Visitors enjoy panoramic views from the top. The hills provide a peaceful retreat. Durtlang reflects Mizoram’s natural charm. Local villages nearby showcase traditions. The area is ideal for photography. It attracts tourists and locals alike. The hills are linked to cultural stories. Durtlang is a symbol of Mizoram’s beauty. Seasonal changes add to its appeal. The site is eco friendly and serene. Durtlang Hills remain a highlight of Aizawl. They embody the harmony of nature and culture.",
    images: [durtlang1],
    source: "(src: hellotravel.com)",
  },
  {
    name: "Champhai",
    description:
      "Champhai, located near the Myanmar border, is a beautiful town in Mizoram. It is known for its vineyards and valleys. The town offers stunning views of hills and plains. Champhai reflects Mizoram’s agricultural wealth. It is a hub for trade and culture. The area is rich in biodiversity. Visitors enjoy the peaceful atmosphere. Champhai is linked to local traditions. The town attracts tourists for its scenic charm. It is a symbol of Mizoram’s prosperity. The vineyards produce quality grapes and wines. Champhai showcases Mizoram’s eco friendly lifestyle. It remains a pride of the state. The town highlights cross border cultural ties. Champhai embodies Mizoram’s natural and cultural heritage.",
    images: [champhai1],
    source: "(src: Pinterest)",
  },
  {
    name: "Solomon’s Temple",
    description:
      "Solomon’s Temple, located in Aizawl, is a modern Christian landmark. It was built by the Kohhran Thianghlim church. The temple is inspired by the biblical Solomon’s Temple. Its architecture is grand and unique. The site attracts devotees and tourists alike. It is a hub of Christian worship in Mizoram. Festivals and ceremonies are held here. The temple reflects Mizoram’s strong Christian identity. It is surrounded by scenic hills. The site educates visitors about faith. Solomon’s Temple remains a pride of Aizawl. It embodies devotion and modernity. The temple continues to thrive as a spiritual landmark.",
    images: [solomon1],
    source: "(src: Chaloghumane.com)",
  },
  {
    name: "Tam Dil Lake",
    description:
      "Tam Dil Lake, located near Aizawl, is a scenic natural lake surrounded by forests. It is a popular picnic and tourist spot. The lake is linked to local legends. It reflects Mizoram’s natural beauty. Visitors enjoy boating and fishing here. The site attracts nature lovers and adventurers. Tam Dil is rich in biodiversity. Seasonal changes add to its charm. The lake is a symbol of Mizoram’s ecological wealth. It remains a highlight of tourism. The site educates visitors about nature. Tam Dil embodies serenity and tradition. It continues to thrive as a natural landmark",
    images: [tamdil1],
    source: "(src: gosahin.com)",
  },
  {
    name: "Phawngpui (Blue Mountain)",
    description:
      "Phawngpui, also called Blue Mountain, is the highest peak in Mizoram. It is located near the Myanmar border. The mountain is covered with rare plants and flowers. Phawngpui is considered sacred by locals. It attracts trekkers and adventurers. The site offers panoramic views of valleys. Phawngpui reflects Mizoram’s natural wealth. Visitors enjoy camping and photography. The mountain is linked to local folklore. It remains a highlight of Mizoram’s tourism. Phawngpui educates visitors about ecology. The site embodies serenity and tradition. It continues to thrive as a natural landmark.",
    images: [phawngpui1],
    source: "(src: happysclick.blogspot.com)",
  },
  {
    name: "Lunglei Rock Bridge",
    description:
      "Lunglei Rock Bridge is a natural rock formation located near Lunglei. It is shaped like a bridge across a stream. The site reflects Mizoram’s geological heritage. It attracts tourists and adventurers. Lunglei Rock Bridge is linked to local legends. Visitors enjoy scenic views and photography. The site remains a highlight of Mizoram’s tourism. It educates visitors about nature. Lunglei embodies resilience and tradition. The rock bridge continues to thrive as a natural landmark.",
    images: [lunglei1],
    source: "(src: savaari.com)",
  },
  {
    name: "Hmuifang Hill",
    description:
      "Hmuifang Hill, located near Aizawl, is a popular trekking and picnic spot. It is covered with lush forests and meadows. The hill reflects Mizoram’s natural beauty. Visitors enjoy camping and photography. Hmuifang hosts cultural festivals and events. The site attracts tourists and adventurers. It is linked to local folklore and traditions. Hmuifang remains a highlight of Mizoram’s tourism. The hill educates visitors about ecology. It embodies serenity and tradition. Hmuifang continues to thrive as a natural landmark.",
    images: [hmuifang1],
    source: "(src: Incredible India)",
  },
];

const facts = [
  "Mizoram is one of the cleanest states in India.",
  "The Cheraw (bamboo dance) is one of the most famous folk dances of Mizoram.",
  "Bamboo plays a huge role in Mizoram’s culture, houses, and crafts..",
  "Aizawl is known for its peaceful atmosphere and scenic hill views.",
  "Mizoram became the 23rd state of India in 1987.",
  "Over 80% of the state is covered in dense forests, making it one of the greenest states in India.",
  "With a literacy rate of 93%, it is the second most literate state in India.",
  "Unlike most parts of India, the great majority of the population is Christian, mostly belonging to various Protestant denominations.",
  " The states's economy heavily features bamboo processing, sericulture, horticulture, and hydropower",
  "Aizawl is the capital and largest city, housing over one-third of the state's population.",
];

const artGallery = [
  { title: "Wangala Dance", emoji: "💃", color: "#8B4513", desc: "Harvest thanksgiving dance of the Garo tribe", image: mWangala },
  { title: "Cheraw Dance", emoji: "🎋", color: "#C0392B", desc: "Iconic bamboo pole dance of the Mizo people", image: mCheraw },
  { title: "Khullam Dance", emoji: "🥁", color: "#6D4C41", desc: "Energetic war dance performed by Mizo warriors", image: mKhullam },
  { title: "Puanchei", emoji: "🧣", color: "#E74C3C", desc: "Vibrant traditional shawl worn by Mizo women", image: mPuanchei },
  { title: "Hmaram", emoji: "🧶", color: "#922B21", desc: "Traditional black shawl worn by Mizo men", image: mHmaram },
  { title: "Mizo Puanthar", emoji: "🪡", color: "#CB4335", desc: "Handwoven white ceremonial cloth of Mizoram", image: mPuanthar },
  { title: "Bai", emoji: "🍲", color: "#1E8449", desc: "Traditional Mizo stew of boiled vegetables and pork", image: mBai },
  { title: "Sawhchiar", emoji: "🍚", color: "#D4AC0D", desc: "Comforting Mizo rice and meat porridge", image: mSawhchiar },
  { title: "Vawksa Rep", emoji: "🥩", color: "#922B21", desc: "Smoked pork, a beloved staple of Mizo cuisine", image: mVawksa },
  { title: "Khuang", emoji: "🥁", color: "#784212", desc: "Traditional cylindrical drum central to Mizo music", image: mKhuang },
  { title: "Darkhuang", emoji: "🪘", color: "#6E2F1A", desc: "Large ceremonial gong used in Mizo festivals", image: mDarkhuang },
  { title: "Phenglawng", emoji: "🎵", color: "#1A5276", desc: "Traditional Mizo bamboo flute", image: mPhenglawng },
  { title: "Mizo Zawlbuk", emoji: "🏛️", color: "#117A65", desc: "Ancient communal dormitory tradition of Mizo youth", image: mZawlbuk },
];