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
import puducherryMap from "@assets/puducherryMap.jpg";
const bastille1 = "https://i.postimg.cc/0QYWrkKt/image.png";
const bastille2 = "https://i.postimg.cc/MKKPK86v/image.png";
const pongal1 = "https://i.postimg.cc/7Z5K0MTz/image.png";
const pongal2 = "https://i.postimg.cc/FRVpNTwG/image.png";
const masi1 = "https://i.postimg.cc/m2DjWNjH/image.png";
const masi2 = "https://i.postimg.cc/4xH1mfr1/image.png";
const yoga1 = "https://i.postimg.cc/cH079Q6R/image.png";
const villianur1 = "https://i.postimg.cc/Wz4GjTGp/image.png";
const villianur2 = "https://i.postimg.cc/CMvC7n0M/image.png";
const fete1 = "https://i.postimg.cc/ZK28tk0M/image.png";
const birth1 = "https://i.postimg.cc/d1sdmwSG/image.png";
const mascarade1 = "https://i.postimg.cc/FzqL4cFy/image.png";
const veerampattinam1 = "https://i.postimg.cc/kX6Syjwp/image.png";
const veerampattinam2 = "https://i.postimg.cc/cJZ80dW9/image.png";
const christmas1 = "https://i.postimg.cc/G2m8TzHz/image.png";
const christmas2 = "https://i.postimg.cc/qRDtsnKN/image.png";
const auroville1 = "https://i.postimg.cc/PrwLDC5n/image.png";
const auroville2 = "https://i.postimg.cc/130fWbF2/image.png";
const french1 = "https://i.postimg.cc/BvMt3DMV/image.png";
const french2 = "https://i.postimg.cc/B6z6L3WG/image.png";
const aayi1 = "https://i.postimg.cc/HjDkztkC/image.png";
const aayi2 = "https://i.postimg.cc/fW37HTbn/image.png";
const basilica1 = "https://i.postimg.cc/Dwc1WSx3/image.png";
const basilica2 = "https://i.postimg.cc/9fFZyck7/image.png";
const cathedral1 = "https://i.postimg.cc/Zq73c1tJ/image.png";
const cathedral2 = "https://i.postimg.cc/NMZXhmjV/image.png";
const dupleix1 = "https://i.postimg.cc/J4VXPNgw/image.png";
const dupleix2 = "https://i.postimg.cc/t49xHX9Q/image.png";
const aurobindo1 = "https://i.postimg.cc/yd3JTxyg/image.png";
const aurobindo2 = "https://i.postimg.cc/sxpvtL83/image.png";
const lighthouse1 = "https://i.postimg.cc/PrQCyB1G/image.png";
const lighthouse2 = "https://i.postimg.cc/6QyT9qgs/image.png";
const arulmigu1 = "https://i.postimg.cc/MHbpsQMz/image.png";
const arulmigu2 = "https://i.postimg.cc/02nND71Z/image.png";
const joan1 = "https://i.postimg.cc/GmShSr2M/image.png";
const joan2 = "https://i.postimg.cc/jjpqtXyP/image.png";
const gPuducherry = "https://i.postimg.cc/cLj0Bm9M/image.png";
const gKaraikal = "https://i.postimg.cc/mDW40rG3/image.png";
const gDindigul = "https://i.postimg.cc/wT4p92px/image.png";
const gPrawn = "https://i.postimg.cc/sfwFJm15/image.png";
const gPromenade = "https://i.postimg.cc/K83dxyfQ/image.png";
const gGaradi = "https://i.postimg.cc/76wc3J4r/image.png";
const gFrench = "https://i.postimg.cc/xTcZ3SWp/image.png";
const gOlive = "https://i.postimg.cc/zBxdTdpb/image.png";
const gHeron = "https://i.postimg.cc/qBZbR5zG/image.png";

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
export default function PuducherryPage() {
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
                South India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Puducherry
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The French Riviera of the East
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Puducherry" },
                  { label: "Population", value: "12.47 Crore" },
                  { label: "Area", value: "479 sq km" },
                  { label: "Founded", value: "1 November 1954" },
                  {
                    label: "Language",
                    value: "Tamil, French, Telugu, Malayalam",
                  },
                  { label: "Districts", value: "4 Districts" },
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
              Puducherry
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Puducherry — Paris of the East
            </p>
          </div>
        </Section>

        {/* Map of Puducherry — click to enlarge */}
        <Section title="Map of Puducherry" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(puducherryMap, "Map of Puducherry")}
            >
              <img
                src={puducherryMap}
                alt="Map of Puducherry"
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
              Puducherry, earlier known as Pondicherry and affectionately called
              "Puduvai," is a unique destination on India’s southeastern coast
              where French elegance meets Tamil soul. Its history is a layered
              tapestry, beginning as a modest fishing village known as Poduca,
              an ancient Roman trading post mentioned in the Periplus of the
              Erythraean Sea. For centuries, it remained under the influence of
              various Southern Indian dynasties, including the Pallavas, Cholas,
              and Pandyas, until the colonial era reshaped its destiny. In 1674,
              the French East India Company established a trading center here,
              transforming it into the headquarters of French India.
            </p>
            <p className="text-foreground">
              The town became a theater for colonial rivalry between the French
              and the British, changing hands several times before finally being
              restored to the French in 1814. Unlike many other parts of India,
              Puducherry remained under French administration even after India
              gained independence in 1947. It wasn't until November 1, 1954,
              that the territory was de facto integrated into the Indian Union,
              a legacy that remains visible in its unique legal and
              administrative structures today.
            </p>
            <p className="text-foreground">
              The architectural layout of the town is a physical manifestation
              of this dual history. Divided by a canal, the "White Town"
              features cobblestone streets, mustard-yellow villas with
              bougainvillea-draped balconies, and high-arched gates. Conversely,
              the "Black Town" (Heritage Town) showcases traditional Tamil
              architecture with thinnai (verandahs) and intricately carved
              wooden doors. This cultural fusion extends to the spiritual realm,
              most notably through the Sri Aurobindo Ashram, established in 1926
              by the philosopher Sri Aurobindo and "The Mother," Mirra Alfassa.
            </p>
            <p className="text-foreground">
              Linguistically, Pondicherry is a fascinating melting pot. While
              Tamil is the predominant language spoken by the majority of the
              population and serves as an official language, the influence of
              French remains palpable. It is one of the few places in India
              where French is still taught in schools and spoken by a segment of
              the local population, particularly the Franco-Pondicherrians.
              Because it is a major tourism hub and an educational center,
              English is widely understood and used in administration, commerce,
              and daily interaction.
            </p>
            <p className="text-foreground">
              Additionally, due to its administrative ties with other regions
              like Mahe and Yanam, languages like Malayalam and Telugu also hold
              official status within the Union Territory. The local dialect of
              Tamil in Pondicherry often incorporates unique loanwords from
              French, creating a linguistic flavor found nowhere else in the
              country. This multiculturalism is further reflected in the
              cuisine, where "Creole" cooking blends French techniques with
              South Indian spices, resulting in dishes like fish assad and prawn
              vadai.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Today, Puducherry is celebrated for its serene Promenade Beach,
              the experimental township of Auroville, and its vibrant festivals
              like Bastille Day and the Tamil festival of Pongal. It stands as a
              living museum of cross-cultural harmony, where the "Riviera of the
              East" continues to preserve its distinct identity while evolving
              as a modern Indian territory. Whether through its quiet spiritual
              retreats or its bustling markets, Pondicherry offers a timeless
              experience of peace and heritage.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Puducherry, mapsofindia.com)
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
        <Section title="Facts about Puducherry" icon="💡">
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
            Scroll horizontally to explore Puducherry's iconic foods, crafts,
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
    name: "Bastille Day",
    tagline: "The French National Day",
    description:
      "Bastille Day is perhaps the most visible remnant of Pondicherry’s colonial past. While the rest of India prepares for its own independence celebrations in August, July 14th belongs to the 'Francophone' spirit of the White Town. The day commemorates the storming of the Bastille in 1789, a turning point in the French Revolution. In Pondicherry, the celebration is a somber yet proud display of Indo-French harmony. Retired soldiers, known as 'Anciens Combattants', dress in their finest uniforms, adorned with medals, and march through the streets toward the War Memorial on Goubert Avenue. The atmosphere is distinctly European; the French flag (the Tricolour) flies prominently alongside the Indian flag. Both 'La Marseillaise' and 'Jana Gana Mana' are sung, symbolizing a shared history. The French Consulate remains the center of activity, hosting receptions for the French citizens living in the territory. As evening falls, the promenade is illuminated with decorative lights, and the French war memorial becomes a site of floral tributes. It is a day where the local Tamil community and the French diaspora blend, sharing stories of the past. The architectural backdrop of the French Quarter, with its yellow ochre walls and bougainvillea, adds an authentic charm to the parade. Visitors can often find special French menus in local cafes, serving traditional pastries and wine. It is a unique cultural bridge that exists nowhere else in India with such authenticity.",
    images: [bastille1, bastille2],
    source: "(src: Wikipedia, The Hindu)",
  },
  {
    name: "Pongal",
    tagline: "Harvest Festival",
    description:
      "Pongal is the heartbeat of the Tamil people, celebrating the bounty of the land and the end of the winter solstice. In Pondicherry, this four-day festival turns the city into a canvas of color and tradition. The first day, Bhogi, is about cleansing; old clothes and household items are discarded in symbolic fires to welcome a new beginning. The second day, Perum Pongal, is the main event. Families gather outside their homes to boil fresh rice with milk and jaggery in new clay pots. When the pot boils over, everyone shouts 'Pongalo Pongal!' to signify prosperity. The streets are filled with Kolams—intricate geometric patterns made of rice flour—that are thought to bring luck. The third day, Maatu Pongal, is particularly beautiful as it honors the cattle that help farmers. Cows and bulls are bathed, their horns are painted in bright colors, and they are adorned with garlands. In rural pockets of Pondicherry, traditional games and community feasts are held. The final day, Kaanum Pongal, is for social bonding. People visit the Promenade Beach and Bharathi Park to meet relatives and exchange sweets. The aroma of freshly harvested turmeric and ginger fills the air, and the entire territory feels like one large, extended family. It is a time of deep gratitude toward nature and the elements.",
    images: [pongal1, pongal2],
    source: "(src: Wikimedia, The Hindu)",
  },
  {
    name: "Masi Magam",
    tagline:
      "It is a spectacle of faith that centers on the purifying power of the ocean",
    description:
      "Occurring on the full moon day of the Tamil month of Masi, it is a day of massive religious significance. The highlight of this festival is the arrival of deities from all the major temples in and around Pondicherry, as well as from distant towns in Tamil Nadu. These idols are carried in elaborate palanquins to the Promenade Beach or the Kuruchikuppam coast. The sight of dozens of divine chariots lined up against the crashing waves of the Bay of Bengal is unforgettable. Devotees believe that taking a dip in the sea on this day washes away sins and brings merit. The 'Theerthavari' (ceremonial bath) of the deities is the most sacred moment, performed by priests amidst the chanting of Vedic hymns and the blowing of conch shells. The beach transforms into a sprawling fairground with stalls selling traditional toys, snacks, and religious artifacts. It is a logistical marvel, managed by thousands of volunteers and local authorities. The sheer scale of the gathering—hundreds of thousands of people—showcases the deep-rooted spirituality of the region. As the sun sets, the idols are taken back to their respective temples in grand processions lit by torches. Masi Magam represents the union of the divine with the natural world.",
    images: [masi1, masi2],
    source: "(src: Wikimedia)",
  },
  {
    name: "International Yoga Festival",
    tagline: "",
    description:
      "Since 1992, Pondicherry has hosted this prestigious festival, cementing its reputation as a center for spiritual wellness. The festival attracts yoga practitioners, scholars, and students from across the globe to share the ancient wisdom of the 'science of the soul'. It is not just about physical postures (asanas) but encompasses the entire philosophy of yoga, including meditation, breathing techniques (pranayama), and diet. The event is typically organized by the Government of Pondicherry’s Tourism Department, emphasizing the region's heritage as a place of peace. The schedule is rigorous, featuring early morning practice sessions, followed by workshops and academic seminars throughout the day. Renowned yogis give lectures on the healing properties of yoga and its relevance in the modern, stressful world. One of the most enchanting aspects of the festival is the evening cultural program. Participants are treated to Indian classical dance and music performances, showing how yoga and art are intertwined. Competitions are also held for different age groups, showcasing incredible displays of flexibility and balance. The festival fosters a sense of global community, with people of all nationalities sitting together in silence or chanting in unison. It is a powerful reminder of Pondicherry’s role as a bridge between the physical and the metaphysical.",
    images: [yoga1],
    source: "(src: Press Information Bureau(PIB)Gov)",
  },
  {
    name: "Villianur Temple Car Festival",
    tagline: "",
    description:
      "The Thirukameswarar Temple in Villianur, about 10 km from Pondicherry, is the site of this massive 10-day celebration. Built during the Chola period, the temple is dedicated to Lord Shiva. The 'Car Festival' or Rath Yatra takes place on the ninth day and is the most anticipated event of the year for the local population. A towering wooden chariot, intricately carved with figures of gods and goddesses, is decorated with bright silks, flowers, and flags. Inside sits the presiding deity, ready to 'survey' the town and bless the people. The atmosphere is electric as thousands of devotees grab the thick jute ropes to pull the chariot through the streets. It is believed that pulling the car is a path to salvation. The Lieutenant Governor of Pondicherry traditionally joins the crowds to pull the rope, a gesture that highlights the state's patronage of the festival. Along the route, people offer coconuts, flowers, and camphor to the deity. The streets are lined with stalls selling everything from terracotta pottery to traditional sweets. Traditional musicians playing the Nadaswaram and Thavil provide a rhythmic backdrop to the slow, majestic movement of the chariot. For many, it is a time of family reunions and the fulfillment of religious vows. The festival ends with the 'Theerthavari', where the deity is taken for a holy dip in the temple tank.",
    images: [villianur1, villianur2],
    source: "(src: Blogspot, Wikimedia)",
  },
  {
    name: "Fête de Puducherry ",
    tagline: "",
    description:
      "Fête de Puducherry is a three-day celebration of the territory’s unique political and cultural identity. While August 15th is India's Independence Day, for Pondicherry, it also marks the anniversary of the 'De Jure' transfer of power from the French to the Indian government in 1962. This festival is a vibrant showcase of the region's 'Indo-French' blend. Organized by the Art and Culture Department, the event features a wide array of folk dances, music concerts, and theatrical performances at various venues like the Gandhi Thidal and the Promenade. You can witness traditional Tamil folk arts like Karagattam, Kavadi, and Silambam (martial arts) alongside contemporary music and Western dance. The entire town is lit up, with the Old Lighthouse and the Raj Nivas (the Governor’s palace) looking particularly festive. Exhibitions are held displaying local handicrafts, paintings, and historical photographs that tell the story of the transition from French rule. Food stalls offer a mix of spicy Tamil cuisine and French-inspired delicacies, reflecting the town's culinary heritage. It is a period of high energy, where locals and tourists alike soak in the festive spirit. The event concludes with a grand finale of fireworks and cultural pageants, celebrating the 'Freedom of the Soul' that Pondicherry represents. It is a testament to how gracefully the city has embraced its dual heritage.",
    images: [fete1],
    source: "(src: The Hindu)",
  },
  {
    name: "Sri Aurobindo’s Birth Anniversary",
    tagline: "",
    description:
      "August 15th holds a dual significance in Pondicherry; it is the day the world celebrates the birth of the revolutionary-turned-philosopher Sri Aurobindo. This is a day of profound silence and inward reflection rather than outward noise. Thousands of followers from all corners of the world converge on the Sri Aurobindo Ashram to pay their respects. The centerpiece of the day is the 'Darshan', where visitors are allowed to walk through the Ashram premises and visit the Samadhi, the marble shrine where Sri Aurobindo and The Mother are laid to rest. The Samadhi is always beautifully decorated with elaborate flower arrangements, creating a sense of peace and divinity. On this specific day, the rooms where Sri Aurobindo lived and meditated are opened to the public for a rare viewing. People stand in long, orderly queues that stretch down the street, waiting for hours just for a few moments of quiet reflection in those sacred spaces. The atmosphere in the 'White Town' remains exceptionally calm, as devotees spend the day in meditation or reading his works. Collective meditations are held in the evening, where the silent power of the Ashram can be felt by everyone present. It is a spiritual pilgrimage that reminds visitors of Pondicherry’s reputation as a sanctuary for those seeking a higher consciousness.",
    images: [birth1],
    source: "(src: Blogspot)",
  },
  {
    name: "Mascarade Festival",
    tagline: "",
    description:
      "The Mascarade Festival is one of the most whimsical and joyful events in Pondicherry, reflecting the playful side of its French roots. Drawing inspiration from the European carnival traditions, this festival involves locals dressing up in elaborate, often humorous, costumes and wearing handcrafted masks. It is a time when the strict social order is briefly suspended in favor of laughter and music. The participants parade through the streets of the French Quarter, accompanied by the brassy notes of trumpets and the rhythmic beating of drums. The 'mascarades' often perform short street plays or dances that poke gentle fun at societal norms or historical figures. The craftsmanship of the masks is a highlight, ranging from traditional grotesque faces to beautiful, ornate designs. It is a photographer's paradise, with the vibrant colors of the costumes contrasting against the pastel walls of the heritage buildings. Children particularly enjoy the festival, as it feels like a giant outdoor party. The event usually winds its way toward the beach, where the festivities continue with more music and dance. Although it is smaller in scale than the religious festivals, its cultural uniqueness makes it a must-see. It preserves a specific type of social humor and community bonding that was once common in the French colonies.",
    images: [mascarade1],
    source: "(src: The Hindu)",
  },
  {
    name: "Veerampattinam Car Festival",
    tagline: "",
    description:
      "Veerampattinam is a historic coastal village situated about 7 km from the city center, and its annual car festival is one of Pondicherry's oldest traditions. The festival is dedicated to Sengazhuneer Amman, the presiding goddess of the village temple. The celebration lasts for several days, but the chariot procession on the fifth Friday of the Tamil month of Adi is the most iconic moment. Because Veerampattinam is a fishing village, the festival is deeply intertwined with the sea and the lives of those who depend on it. The massive temple car is decorated with incredible detail, often featuring themes from the Puranas. As the chariot moves through the sandy streets of the village, it is a sight of immense power and devotion. Historically, even the French Governors of Pondicherry would attend this festival and donate to the temple, a tradition that shows how deeply integrated the French were with local Tamil customs. Today, thousands of people from surrounding regions flock to the village, turning the small coastal settlement into a bustling hub of activity. The beach nearby becomes a place for family picnics and celebrations. The festival is not just a religious event but a proud display of the village's identity and its centuries-old connection to the divine mother.",
    images: [veerampattinam1, veerampattinam2],
    source: "(src: Wikimedia, Blogspot)",
  },
  {
    name: "Christmas and New Year",
    tagline: "",
    description:
      "As the year comes to a close, Pondicherry transforms into a glittering wonderland. The territory’s significant Christian population, combined with its French history, makes Christmas a grand affair. The historic churches, such as the Basilica of the Sacred Heart of Jesus and the Immaculate Conception Cathedral, are adorned with thousands of fairy lights and elaborate nativity scenes. Midnight masses are conducted in Tamil, French, and English, attracting people of all faiths who come to experience the serene beauty of the service and the choral singing. Following Christmas, the energy shifts toward New Year’s Eve. Pondicherry is one of the most popular destinations in South India for New Year celebrations. The Promenade Beach is closed to vehicles, and thousands of people gather to walk along the ocean under the stars. Hotels and cafes host themed parties, and the air is filled with the sound of music and laughter. As the clock strikes midnight, spectacular fireworks light up the sky over the Bay of Bengal. It is a time of immense optimism and celebration, where the old-world charm of the French Quarter meets the modern energy of the youth. The cool December breeze and the festive decorations make it the perfect time to experience the cosmopolitan heart of Pondicherry.",
    images: [christmas1, christmas2],
    source: "(src: Wikimedia)",
  },
];

const historicalPlaces = [
  {
    name: "Auroville Matrimandir",
    description:
      "The Matrimandir, often described as the 'soul of the city' in Auroville, stands as a breathtaking architectural achievement and a profound spiritual symbol. Conceived by Mirra Alfassa, known as The Mother, this massive golden sphere was designed as a symbol of the Divine's answer to man's aspiration for perfection. Located at the center of the experimental township, the structure took thirty-seven years to complete, finally reaching its finished form in 2008. From the outside, it is a geodesic dome covered by 1,415 large gold discs, which are made of stainless steel frames covered with gold leaf, creating a shimmering effect that changes with the angle of the sun. The building is not a temple in the traditional sense; it does not host organized rituals, prayers, or religious ceremonies, but rather serves as a place for individual silent concentration. It is surrounded by twelve gardens, each named after attributes like 'Bliss', 'Perfection', and 'Sincerity', which are designed to create an atmosphere of tranquility and introspection. Inside the dome, a spiral ramp leads visitors upward into the Inner Chamber, a starkly different environment from the golden exterior. This chamber is a vast, white, cylindrical space with white marble walls and a white carpet, designed to be completely devoid of any ornamentation that might distract the mind. At the very center of this room sits the world's largest optically perfect glass globe, which measures approximately 70 centimeters in diameter. A single heliostat-directed ray of sunlight enters through an opening in the roof and strikes the crystal ball, illuminating the entire chamber with a soft, ethereal glow. This play of light and silence creates a powerful environment for those seeking inner peace and self-discovery. The architecture itself is deeply symbolic; the four main pillars supporting the structure are named Mahakali, Maheshwari, Mahalakshmi, and Mahasaraswati, representing the four aspects of the Divine Mother in integral yoga. Beyond its spiritual significance, the Matrimandir is an engineering marvel that integrates sustainable landscaping and advanced structural design. The surrounding 'Peace Area' includes a large amphitheater built with red Himalayan sandstone, which houses an urn containing soil from 124 nations and 23 Indian states, symbolizing human unity. Visitors usually view the structure from a dedicated viewpoint at the end of a shaded walking path, but the true experience lies in the silence it commands from everyone who approaches it. The Matrimandir does not belong to any particular religion or sect, adhering to the Auroville charter which states that the town belongs to humanity as a whole. It stands as a physical manifestation of the ideal that through quiet reflection and a collective shift in consciousness, humanity can move toward a more harmonious future. Its presence in the landscape of South India is a unique bridge between ancient spiritual aspirations and modern, futuristic design, making it a landmark of global significance.",
    images: [auroville1, auroville2],
    source: "(src: Wikimedia commons)",
  },
  {
    name: "The French War memorial",
    description:
      "The French War Memorial, located on the picturesque Goubert Avenue facing the Bay of Bengal, stands as a solemn and elegant tribute to the brave soldiers who sacrificed their lives during World War I. Constructed in 1947, while Pondicherry was still under French administration, the memorial serves as a poignant reminder of the shared history between France and India. The structure itself is a masterpiece of minimalist colonial architecture, characterized by its tall, white columns and four distinct pillars that frame a central pedestal. Unlike more ornate monuments, its beauty lies in its simplicity and the stark contrast of its white facade against the deep blue of the ocean and the lush green of the surrounding manicured gardens. Each year on July 14th, which is Bastille Day or the French National Day, the memorial becomes the center of a grand ceremonial event where officials, veterans, and residents gather to lay wreaths and pay their respects. During this time, the monument is beautifully illuminated, transforming the Promenade into a space of quiet reflection and historical reverence. The site is meticulously maintained, offering a peaceful sanctuary amidst the bustling energy of the Rock Beach area. It is positioned in a way that allows the sea breeze to flow through its open structure, creating an atmosphere of serenity that invites passersby to pause and think about the global impact of the Great War. On the bronze plaques mounted within the memorial, the names of the fallen soldiers are inscribed, ensuring that their memory remains etched in the heart of the city. For many locals and tourists, the monument is not just a historical site but a symbol of the enduring friendship and cultural bridge between the people of Pondicherry and France. It reflects the territory's unique status as a former 'comptoir' or trading post that evolved into a cultural melting pot where European traditions and Indian heritage coexist. Visiting the memorial offers a deep dive into the geopolitical significance of Pondicherry during the early 20th century, highlighting how men from this small coastal enclave were part of a much larger global struggle. The surrounding area, with its cobblestone paths and proximity to other colonial landmarks like the Statue of Dupleix and the Old Lighthouse, makes it an essential stop for anyone exploring the heritage of the White Town. The memorial’s presence ensures that the narrative of those who served is never lost to time, acting as a silent sentinel over the waves of the Coromandel Coast. It stands as a beacon of peace, reminding every visitor of the high cost of conflict and the timeless value of courage. As the sun sets over the Bay of Bengal, the shadows cast by the memorial’s pillars seem to stretch across history, connecting the past to the present in a way that is both humble and profoundly moving.",
    images: [french1, french2],
    source: "(src: Wikimedia commons, Casual Walker)",
  },
  {
    name: "Aayi Mandapam (Park Monument)",
    description:
      "The Aayi Mandapam, also known as the Park Monument, is a gleaming white architectural landmark that stands as the centerpiece of Bharathi Park in the heart of Pondicherry’s White Town. Built during the mid-19th century under the reign of the French Emperor Napoleon III, the monument is a unique example of Greco-Roman architecture, featuring majestic pillars and an elegant pediment. While its design is European, the story it commemorates is a deeply moving piece of local Indian folklore dating back to the 16th century during the Vijayanagara Empire. According to legend, a humble courtesan named Aayi lived in the area and mistook the King’s visit for a religious procession. When she realized her error had offended the monarch, she chose to demolish her own house and replace it with a water tank to serve the public as an act of penance. This selfless deed ensured a steady water supply for the local community for generations, and her legacy of sacrifice became a part of the city's oral history. Centuries later, when the French faced a severe water crisis in Pondicherry, they discovered the pristine water source from Aayi’s tank, which was located some distance away in Muthialpet. The French engineers were so impressed by the quality of the water and the story behind it that they channeled it into the town to solve the drought. When King Napoleon III heard of the woman whose ancient contribution had saved the colonial settlement, he was so moved that he ordered the construction of a monument in her honor. Today, the Aayi Mandapam serves as a symbol of gratitude, bridging the gap between an ancient Indian legend and French colonial history. The structure is beautifully illuminated at night, casting a soft glow over the surrounding gardens, fountains, and ancient trees of the park. It is a favorite spot for both locals and travelers, offering a quiet space to appreciate the city’s historical depth. The monument stands as a testament to the idea that true nobility is found in service to others, making it one of the most culturally significant sites in the Union Territory.",
    images: [aayi1, aayi2],
    source: "(src: Wikimedia commons)",
  },
  {
    name: "Basilica of the Sacred Heart of Jesus",
    description:
      "The Basilica of the Sacred Heart of Jesus stands as one of the most iconic and spiritually significant landmarks in Pondicherry, situated near the railway station as a magnificent example of Gothic Revival architecture. Established by French missionaries in 1908, this sprawling church is instantly recognizable by its striking white and maroon facade, which features twin spires that reach toward the sky. Its design is deeply inspired by the great cathedrals of Europe, characterized by pointed arches, ribbed vaults, and a layout in the shape of a Latin cross. As you step through its grand entrance, the interior reveals an atmosphere of profound serenity and artistic beauty, most notably through its 28 rare stained-glass panels. These intricate glassworks depict various scenes from the life of Jesus Christ and the saints of the Catholic Church, filtering the coastal sunlight into a kaleidoscope of colors that dance across the marble floors. The Basilica is not only an architectural marvel but also a center of deep devotion, having been elevated to the status of a minor basilica in 2011, making it one of the few in Asia with this distinction. The altar is particularly impressive, featuring a beautiful statue of the Sacred Heart of Jesus and elaborate carvings that reflect the craftsmanship of the early 20th century. Over the decades, the church has undergone meticulous restoration to preserve its structural integrity against the salty sea air, ensuring that its historical charm remains intact. It serves as a vital cultural hub during the Christmas and Easter seasons, when it is adorned with thousands of lights and attracts pilgrims from across the country. Beyond its religious role, the Basilica represents the enduring French influence on the spiritual landscape of Pondicherry, standing as a silent witness to over a century of the city's evolution. Whether you are visiting for prayer or to admire its Neo-Gothic aesthetics, the Basilica offers a timeless experience of peace and wonder, firmly cementing its place as a cornerstone of the region's rich heritage.",
    images: [basilica1, basilica2],
    source: "(src: Pondicherry tourism, Wikimedia commons)",
  },
  {
    name: "Immaculate Conception Cathedral",
    description:
      "The Immaculate Conception Cathedral, also known as 'Samba Kovil', is a stunning testament to Pondicherry’s resilient spiritual history and its deep-rooted Portuguese and French influences. Located on Mission Street, this cathedral is the mother church of the Roman Catholic Archdiocese of Pondicherry and Cuddalore, boasting a history that dates back to the late 17th century. The original structure was established by Jesuit fathers in 1686, but the cathedral seen today is actually the fourth iteration, as the previous three were destroyed during various colonial conflicts and British occupations. Completed in its current form around 1791, the architecture is a beautiful blend of Herrerian and Baroque styles, characterized by its imposing white facade, grand columns, and a bell tower that dominates the local skyline. The entrance is flanked by statues of various saints, leading into a vast, airy interior designed with a traditional cruciform layout. Inside, the cathedral exudes a sense of solemn grandeur with its high vaulted ceilings, ornate altars, and beautifully crafted wooden pulpits. One of the most significant historical moments associated with this site is the visit of Mother Teresa, which is commemorated by a plaque, adding a layer of contemporary spiritual importance to its ancient walls. The sanctuary is particularly famous for its exquisite statues and the quiet dignity of its prayer halls, which provide a cool refuge from the tropical heat outside. The courtyard in front of the cathedral is often the site of vibrant community gatherings and religious processions, especially during the annual feast of the Immaculate Conception on December 8th. As one of the oldest colonial buildings in the city, it stands as a symbol of the enduring faith of the local community and the architectural ambition of the early missionaries. The cathedral’s pristine white exterior, often seen against a bright blue sky, remains one of the most photographed and revered landmarks in the heritage heart of Pondicherry.",
    images: [cathedral1, cathedral2],
    source: "(src: Wikimedia commons)",
  },
  {
    name: "Statue of Dupleix",
    description:
      "The Statue of Dupleix, standing at the southern end of Pondicherry’s famous Promenade Beach, is a monumental tribute to Joseph François Dupleix, one of the most ambitious and influential figures in the history of French India. Installed in 1870, this nearly three-meter-tall bronze statue honors the man who served as the Governor-General of the French establishments in India from 1742 to 1754. Dupleix is remembered for his strategic brilliance and his dream of expanding French influence across the Indian subcontinent, a vision that brought him into direct and legendary conflict with the British East India Company. The statue depicts him in a commanding pose, dressed in 18th-century official attire, symbolizing the era when Pondicherry was the glittering capital of the French 'comptoirs'. Originally, the statue was placed at the center of the Place du Gouvernement (now Bharathi Park), reflecting his central role in the city's administration, but it was moved to its current seaside location during the mid-20th century. Surrounded by a small, well-maintained garden, the monument looks out over the Bay of Bengal, a fitting vista for a man whose life was dedicated to maritime trade and colonial expansion. Interestingly, the granite pillars that flank the statue were brought all the way from the ruins of Gingee Fort, showcasing the historical layers and local materials integrated into French commemorative art. While the statue serves as a reminder of a bygone colonial era, it is also a testament to Pondicherry's commitment to preserving its complex history. Today, it is a popular landmark for tourists taking evening strolls along Rock Beach, providing a tangible link to the 18th-century power struggles that shaped the modern borders of South India. The weathered patina of the bronze tells a story of centuries spent in the salty sea air, standing as a silent sentinel over the waves that once brought French ships to these shores. It remains an essential stop for history enthusiasts, representing the height of French political and military ambition in India and the enduring cultural bridge that connects the town to its European past.",
    images: [dupleix1, dupleix2],
    source: "(src: Pondicherry tourism, Wikimedia commons)",
  },
  {
    name: "Sri Aurobindo Ashram",
    description:
      "The Sri Aurobindo Ashram, located in the heart of the White Town, is perhaps the most globally recognized spiritual landmark in Pondicherry. Founded in 1926 by the Indian philosopher and revolutionary Sri Aurobindo and his spiritual collaborator, a French woman known as The Mother, the ashram is not a traditional monastery but a vibrant center for the practice of Integral Yoga. The main building consists of a group of interconnected houses where the two founders lived for much of their lives. At the center of the ashram’s leafy courtyard lies the Samadhi, a white marble shrine where the bodies of Sri Aurobindo and The Mother are laid to rest. This spot is perpetually covered with artfully arranged, fresh flowers and remains a place of profound silence and intense vibration, where devotees and visitors from all over the world come to meditate and seek inner peace. The ashram’s influence extends far beyond the walls of the main building, as it manages a vast network of departments including farms, gardens, printing presses, and small-scale industries that support the community's self-sufficiency. Unlike many spiritual centers, the ashram does not follow a set of rigid rituals or religious dogmas; instead, it encourages individuals to find the divine within their daily work and activities. The architecture of the ashram buildings is characterized by their distinctive grey and white paint, high ceilings, and clean, minimalist lines that reflect a sense of order and tranquility. Visitors are expected to maintain strict silence while inside, creating an atmosphere that feels worlds away from the busy streets just outside the gates. The ashram has played a pivotal role in the cultural and intellectual life of Pondicherry, fostering a community that values education, physical culture, and the arts. Its library and international center of education are renowned for their unique pedagogical approaches. For the traveler, the ashram offers a glimpse into a lifestyle dedicated to the evolution of consciousness and the realization of human unity. It stands as a living legacy of Sri Aurobindo’s vision of a life divine on earth, making it a cornerstone of Pondicherry’s identity as a place of spiritual retreat. Whether one is a seeker or a curious visitor, the ashram provides a unique space for reflection, surrounded by the scent of incense and the quiet hum of a community dedicated to a higher purpose.",
    images: [aurobindo1, aurobindo2],
    source: "(src: Wikimedia commons)",
  },
  {
    name: "Old Lighthouse",
    description:
      "The Old Lighthouse is one of Pondicherry’s most iconic and nostalgic maritime landmarks, standing as a sentinel over the Promenade Beach for over 150 years. Constructed by the French in the 19th century, specifically commissioned in 1836, it was once a vital piece of infrastructure for sailors navigating the treacherous waters of the Bay of Bengal. Its design is classically colonial, featuring a sturdy, round tower that stands approximately 29 meters tall, topped with a traditional lantern room. Before its construction, the only guide for mariners was a simple fire lit on the beach, but as Pondicherry grew into a major French trading hub, the need for a more sophisticated signaling system became urgent. The lighthouse was ahead of its time, utilizing a complex system of mirrors and oil lamps that could be seen by ships many miles away at sea. For over a century, the tower guided countless merchant ships carrying textiles, spices, and indigo to and from the French 'comptoirs'. However, as maritime technology evolved and the coastline changed, the Old Lighthouse eventually became obsolete and was officially retired in 1979 when a modern, taller lighthouse was built further south at Kirapalayam. Despite being decommissioned, the structure remains an architectural jewel of the White Town, characterized by its weathered white facade and the heavy iron door that once led keepers to the top. Today, it serves as a popular cultural site and a frequent backdrop for photography, symbolizing the city's deep connection to the ocean. The lighthouse is often surrounded by local artisans and vendors, making it a bustling center of activity during the evening hours when the sea breeze draws crowds to the Rock Beach. Although visitors can no longer climb to the lantern room for safety reasons, the structure’s presence adds a historical gravity to the coastline, reminding every passerby of the era when the French flag flew high over the harbor. It stands as a bridge between the past and the present, witness to the city's transformation from a colonial outpost to a thriving Indian Union Territory. For those walking along the Promenade, the Old Lighthouse is not just a building; it is a monument to the spirit of exploration and the enduring legacy of French engineering on Indian soil. It remains one of the most beloved heritage sites, capturing the essence of Pondicherry’s romantic, seaside history.",
    images: [lighthouse1, lighthouse2],
    source: "(src: Puducherry Government, Tour my India)",
  },
  {
    name: "Arulmigu Manakula Vinayagar Temple",
    description:
      "The Arulmigu Manakula Vinayagar Temple is one of the most ancient and revered spiritual landmarks in Pondicherry, standing as a vibrant symbol of Tamil heritage within the heart of the French Quarter. Dedicated to Lord Ganesha, the elephant-headed deity of wisdom and new beginnings, the temple’s history predates the arrival of the French in 1674. Its name, 'Manakula', is derived from the Tamil words Manal (sand) and Kulam (pond), referring to a pond near the sea that was once surrounded by sand. The temple is famous for its resilience; historical accounts suggest that French colonial authorities made several attempts to remove the temple or halt its activities, yet it survived and flourished due to the unwavering devotion of the local population. Today, it serves as a stunning architectural contrast to the surrounding mustard-yellow colonial villas, featuring a magnificent five-tiered Rajagopuram (entrance tower) decorated with intricate, colorful sculptures of various deities and mythological scenes. The interior of the temple is equally breathtaking, particularly the ceiling of the main hall, which is adorned with vivid paintings depicting the different forms and life stories of Lord Ganesha. One of the temple's most striking features is the 'Golden Chariot', made using 7.5 kilograms of gold, which is used during special festivals and processions. For many visitors, the highlight of the temple experience was Lakshmi, the beloved temple elephant who resided there for decades, offering blessings to devotees with her trunk. Even today, the temple remains a hub of daily spiritual life, where the scent of jasmine garlands and incense fills the air, and the rhythmic sounds of temple bells provide a soulful soundtrack to the busy streets. The shrine itself is housed in a sanctum covered with gold-plated sheets, creating a divine atmosphere during the Aarati (lamp ceremony). Beyond its religious significance, the temple is an essential cultural stop for anyone exploring Pondicherry, offering a deep dive into the local customs and traditional architecture of South India. It stands as a powerful reminder that while the town is famous for its French influence, its roots are deeply embedded in ancient Indian spirituality. During the festival of Vinayaka Chaturthi, the temple transforms into a sea of celebration, attracting thousands of pilgrims from across the state. Whether you are seeking a spiritual blessing or simply want to admire the masterful craftsmanship of its stone carvings and golden pillars, the Manakula Vinayagar Temple offers a timeless experience. It remains a cornerstone of the city’s identity, representing the enduring strength of faith and the harmonious coexistence of diverse cultures in this coastal enclave.",
    images: [arulmigu1, arulmigu2],
    source: "(src: Casual Walker, Wikimedia commons)",
  },
  {
    name: "The Statue of Joan of Arc",
    description:
      "The Statue of Joan of Arc is a poignant and graceful monument located in the heart of Pondicherry’s French Quarter, standing within a small, tranquil garden directly opposite the Church of Our Lady of Angels. Carved from white marble, the statue depicts the legendary French heroine and saint, Jeanne d'Arc, in a triumphant pose. She is portrayed in her iconic armor, holding a banner, symbolizing her courage and her pivotal role in the Hundred Years' War. The monument was gifted to the city in 1923 by Francois Gaudibert, a wealthy resident, as a tribute to the 'Maid of Orléans' and as a symbol of the enduring French spirit and cultural identity in India. The garden that surrounds the statue is meticulously maintained, offering a quiet, shaded retreat that contrasts with the tropical vibrancy of the surrounding streets. The placement of the statue is deeply symbolic, as it faces the sea and stands near the spiritual heart of the Catholic community in Pondicherry. Historically, it has served as a gathering point for the Franco-Pondicherrian community, especially during French national holidays. Every year, during the celebration of her feast day, the statue is beautifully decorated with floral tributes, reflecting the high esteem in which she is held. Architecturally, the statue provides a touch of European classicism to the coastal town, and its white marble glows brilliantly under the afternoon sun, making it one of the most serene and photographed landmarks in the area. Beyond its artistic value, the Statue of Joan of Arc represents the unique dual identity of Pondicherry—a place where a medieval French saint is honored on Indian soil, surrounded by the scents of the Bay of Bengal. It serves as a reminder of the historical ties that bound France to this coastal enclave for nearly three centuries. For travelers, the site is a peaceful stop on a walking tour of the White Town, offering a moment of reflection on the themes of bravery and sacrifice. The statue stands not just as a religious or national icon, but as a piece of living history that continues to bridge two very different cultures. Its presence ensures that the story of the young woman who led armies and changed the course of French history remains a part of the local narrative, adding to the rich, multicultural tapestry that makes Pondicherry so distinctive.",
    images: [joan1, joan2],
    source: "(src: Wikimedia commons, Blogspot)",
  },
];

const facts = [
  "Though it became part of India in 1954, residents were given the option to maintain French citizenship. Today, it remains one of the few places in India where you can find locals holding French passports and voting in French elections.",
  "The town is famously divided into the French Quarter (White Town) and the Tamil Quarter (Black Town). This results in a striking visual contrast between European colonial villas and traditional Tamil houses with courtyards and verandas.",
  "Located in Auroville, the Matrimandir is a massive geodesic dome covered in gold-plated discs. It is not a temple for any specific religion but a space for silent individual meditation and concentration.",
  "Auroville, an experimental township nearby, is home to people from over 50 different countries. Its goal is to realize human unity, functioning without the use of paper currency or central government within the community.",
  "The local police are famous for their unique headgear called the Képi. This bright red, flat-topped cylindrical cap is a direct stylistic inheritance from the French colonial era.",
  "The state is the birthplace of legendary mathematician Srinivasa Ramanujan and former President APJ Abdul Kalam.",
  "Pondicherry holds the unusual record of changing hands between the French and the British ten times during the colonial wars. The French finally took firm control in 1814 and stayed until long after India’s independence.",
  "Pondicherry is the only place in India where you will find a life-sized bronze statue of the French heroine Joan of Arc. It stands in a quiet garden facing the Church of Our Lady of Angels, gifted by a French politician in the 1920s.",
  "Navigating the town feels like walking through Paris because many street names still start with 'Rue' (the French word for street). You might find yourself walking down Rue Romain Rolland or Rue Dumas amidst bougainvillea-clad walls.",
  "The 'Franco-Tamil' architectural style is a unique hybrid found only here. It features French-style facades on the street level with traditional Tamil-style interiors, blending two vastly different cultures into a single building.",
  "The Mahatma Gandhi statue on the Promenade Beach is surrounded by eight magnificent monolithic granite pillars. These pillars were actually carved in the 17th century and brought all the way from the Gingee Fort, located about 70 kilometers away.",
];

const artGallery = [
  {
    title: "Puducherry",
    emoji: "🍛",
    color: "#D4883A",
    desc: "A beautiful coastal city famous for its French architecture, beaches, and peaceful atmosphere.",
    image: gPuducherry,
  },
  {
    title: "Karaikal",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "A scenic town known for temples, beaches, and its rich Tamil culture.",
    image: gKaraikal,
  },
  {
    title: "Creole Curry",
    emoji: "🍚",
    color: "#E8733A",
    desc: "A flavorful fusion dish that blends French cooking styles with spicy Tamil flavors.",
    image: gDindigul,
  },
  {
    title: "Pondicherry Prawn Fry",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "A famous coastal seafood dish made with fresh prawns, aromatic spices, and crispy frying.",
    image: gPrawn,
  },
  {
    title: "Promenade Beach",
    emoji: "🥐",
    color: "#F4E884",
    desc: "A scenic beachfront walkway in Pondicherry famous for its peaceful sea views and French-style charm.",
    image: gPromenade,
  },
  {
    title: "Garadi Folk Dance",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "A traditional folk dance of Puducherry performed during festivals with energetic drum beats and colorful costumes.",
    image: gGaradi,
  },
  {
    title: "French Quarter",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "Known for its colorful colonial buildings, cafes, and charming French-style streets.",
    image: gFrench,
  },
  {
    title: "Olive Ridley Sea Turtle",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "A famous endangered sea turtle that visits the coastal beaches near Pondicherry for nesting.",
    image: gOlive,
  },
  {
    title: "Indian Pond Heron",
    emoji: "🥭",
    color: "#F8C840",
    desc: "A small water bird commonly found near the lakes, beaches, and wetlands of Pondicherry.",
    image: gHeron,
  },
];
