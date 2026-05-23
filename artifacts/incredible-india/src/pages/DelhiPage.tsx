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
import delhiMap from "https://i.postimg.cc/T3Vxbcf6/image.png";
const diwali1 = "https://i.postimg.cc/0QQ1LRmq/image.png";
const diwali2 = "https://i.postimg.cc/WzqL1GX6/image.png";
const diwali3 = "https://i.postimg.cc/qgffhNFc/image.png";
const diwali4 = "https://i.postimg.cc/JzLnS0hR/image.png";
const pragati1 = "https://i.postimg.cc/xdjdTZHp/image.png";
const pragati2 = "https://i.postimg.cc/wvZx2TPH/image.png";
const eid1 = "https://i.postimg.cc/DyVyb0LG/image.png";
const parade1 = "https://i.postimg.cc/YSvJ3fwL/image.png";
const qutubf1 = "https://i.postimg.cc/2y7J60n7/image.png";
const qutubf2 = "https://i.postimg.cc/85hXKZXs/image.png";
const durga1 = "https://i.postimg.cc/Jh8k3KXv/image.png";
const durga2 = "https://i.postimg.cc/1X8nRdxS/image.png";
const mahavir1 = "https://i.postimg.cc/dtTkzgmy/image.png";
const mango1 = "https://i.postimg.cc/mrTP1kfx/image.png";
const red1 = "https://i.postimg.cc/QVLt8xkS/image.png";
const red2 = "https://i.postimg.cc/jSbHvs0Z/image.png";
const qutubq = "https://i.postimg.cc/FKP093fT/image.png";
const qutub2 = "https://i.postimg.cc/G3TvCBbQ/image.png";
const ig1 = "https://i.postimg.cc/7Z92V0Nr/image.png";
const ig2 = "https://i.postimg.cc/fWdSP6vS/image.png";
const ht1 = "https://i.postimg.cc/mrqhXw1s/image.png";
const ht2 = "https://i.postimg.cc/8cgcDzbh/image.png";
const ht3 = "https://i.postimg.cc/8kLs4L10/image.png";
const lotus1 = "https://i.postimg.cc/8PHcQDfb/image.png";
const lotus2 = "https://i.postimg.cc/sgH2xccX/image.png";
const lotus3 = "https://i.postimg.cc/TPy3DD7F/image.png";
const swami1 = "https://i.postimg.cc/C1kMvVVY/image.png";
const swami2 = "https://i.postimg.cc/cCWx25sw/image.png";
const swami3 = "https://i.postimg.cc/RhTSBQFs/image.png";
const thiruv1 = "https://i.postimg.cc/nVKcBZkd/image.png";
const thiruv2 = "https://i.postimg.cc/FsDrCZwk/image.png";
const jantar1 = "https://i.postimg.cc/SxRyB9hS/image.png";
const waste1 = "https://i.postimg.cc/s2Z3XRxS/image.png";
const waste2 = "https://i.postimg.cc/j50tnkJr/image.png";
const waste3 = "https://i.postimg.cc/nz4Z4Yv4/image.png";
const qila1 = "https://i.postimg.cc/RCT4qdCz/image.png";
const qila2 = "https://i.postimg.cc/nzJfhjNy/image.png";
const gMughalMiniature = "https://i.postimg.cc/mDyfzZs1/image.png";
const gIvoryWoodCarving = "https://i.postimg.cc/brYXQXYX/image.png";
const gTerracottaPottery = "https://i.postimg.cc/hv2ksChf/image.png";
const gKathak = "https://i.postimg.cc/qBQHp7Qk/image.png";
const gBhangra = "https://i.postimg.cc/vHBFTdSS/image.png";
const gCholeBhature = "https://i.postimg.cc/8CLx9kjD/image.png";
const gButterChicken = "https://i.postimg.cc/501DVcCz/image.png";
const gParatha = "https://i.postimg.cc/TYhFGJpK/image.png";
const gStreetFood = "https://i.postimg.cc/SN55KY9K/image.png";
const gTabla = "https://i.postimg.cc/PxtV7mgq/image.png";
const gSitar = "https://i.postimg.cc/MTd3Jnws/image.png";
const gHarmonium = "https://i.postimg.cc/4y08njm1/image.png";
const gBanarasiSilk = "https://i.postimg.cc/sDB6bfNY/image.png";
const gZariWork = "https://i.postimg.cc/wBzwtXTW/image.png";
const gPhulkari = "https://i.postimg.cc/KzvQfmTJ/image.png";

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
export default function DelhiPage() {
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
                North India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Delhi
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Heart of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "New Delhi" },
                  { label: "Population", value: "1.68 Crore" },
                  { label: "Area", value: "1,484 sq km" },
                  { label: "Founded", value: "1 February 1992" },
                  { label: "Language", value: "Hindi, English, Punjabi, Urdu" },
                  { label: "Districts", value: "13 Districts" },
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
              New Delhi
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Delhi — City of Rallies
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Delhi" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(delhiMap, "Map of Delhi")}
            >
              <img
                src={delhiMap}
                alt="Map of Delhi"
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
              Delhi is the capital territory of India and one of the country’s
              most populous urban centers. Functioning as a major political,
              cultural, and historical hub, it encompasses the national capital,
              New Delhi, and serves as the seat of the Indian government.
            </p>
            <p className="text-foreground">
              Delhi lies along the Yamuna River in northern India, bordered by
              Haryana and Uttar Pradesh. It consists of New Delhi, the
              administrative core built during British rule, and Old Delhi, a
              dense historic district dating to the Mughal era. The wider
              metropolitan region, often called the National Capital Region
              (NCR), integrates surrounding satellite cities such as Gurugram,
              Noida, and Ghaziabad.
            </p>
            <p className="text-foreground">
              Delhi’s history spans over a millennium, serving as the capital
              for several empires, including the Delhi Sultanate and the Mughal
              Empire. Monuments such as the Red Fort, Qutub Minar, and Humayun’s
              Tomb reflect its layered past. In 1911, the British shifted
              India’s capital from Calcutta to Delhi, commissioning New Delhi,
              which became the seat of power in 1931. Beyond its massive stone
              walls and urban landscapes, Delhi is a true melting pot of human
              stories, famously earning the warm colloquial title of "Dil Walon
              ki Dilli" or the city of big-hearted people. For thousands of
              years, it has served as a strategic gateway to the subcontinent,
              surviving as the seat of seven distinct historic cities under
              powerful dynasties like the Tomar Rajputs, the Delhi Sultanate,
              and the Mughals. This relentless convergence of cultures has
              shaped a remarkably diverse society where grand festivals,
              historic Sufi music traditions, and culinary flavors from every
              corner of India exist in perfect harmony, making it the perfect
              starting point for students eager to discover the true spirit of
              India.
            </p>
            <p className="text-foreground">
              As one of India’s largest urban economies, Delhi drives commerce,
              technology, and services. It hosts major corporations, media
              organizations, and cultural institutions. The city is known for
              its vibrant food scene, diverse festivals, and art centers such as
              National Museum and National Gallery of Modern Art.
            </p>
            <p className="text-foreground">
              Delhi’s infrastructure includes an extensive metro system, major
              road networks, and Indira Gandhi International Airport. However,
              it faces significant challenges related to air pollution, urban
              sprawl, and water scarcity. Recent policy efforts focus on
              sustainable transport, waste management, and renewable energy
              adoption.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              After India gained independence in 1947, Delhi continued to
              develop as the administrative heart of the country. The National
              Capital Territory of Delhi was officially formed on 1 November
              1956 under the States Reorganisation Act, and later, the 69th
              Constitutional Amendment Act of 1991 granted it special status as
              the National Capital Territory with its own legislative assembly.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Delhi, mapsofindia.com)
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
        <Section title="Facts about Delhi" icon="💡">
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
            Scroll horizontally to explore Delhi's iconic foods, crafts, dance,
            and traditions.
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
    name: "Diwali",
    tagline: "",
    description:
      "Diwali stands out as one of the most visually stunning and widely anticipated festivals in the capital, transforming the entire urban landscape into a glowing wonderland of lights. Celebrated in October or November, the preparation begins weeks in advance as residents clean and deeply decorate their homes with intricate clay lamps (diyas), vibrant fairy lights, and colorful geometric floor patterns called rangolis. The energy hits its absolute peak at Delhi’s iconic historic marketplaces—such as Chandni Chowk, Lajpat Nagar, and Connaught Place—which host grand, specialized festive bazaars packed with shoppers buying sweets, traditional attire, and gifts. The celebration serves as a beautiful educational example of community unity, as families of all backgrounds gather to share delicious food, exchange blessings, and watch dazzling fireworks illuminate the midnight sky.",
    images: [diwali1, diwali2, diwali3, diwali4],
    source: "(src: Sarang Gupta, hindustantimes, baps, stock,.adobe.com)",
  },
  {
    name: "India International Trade Fair (Pragati Maidan)",
    tagline: "",
    description:
      "Held annually from November 14 to 27 at the massive, newly revamped Pragati Maidan complex, the India International Trade Fair is a legendary cultural and commercial mega-event that has been a rite of passage for Delhi students for decades. This colossal fair serves as a massive global pavilion where every single Indian state and dozens of foreign countries set up incredibly elaborate, themed exhibition zones. For visitors, it offers a fascinating interactive journey across India under one roof, showcasing everything from high-tech industrial innovations to rare regional handicrafts, tribal handlooms, and authentic traditional art forms. The absolute highlight for most attendees is the sprawling open-air food courts, which fill the air with the rich aromas of diverse state cuisines, making it a premier educational platform for exploring India’s massive geographical and economic diversity.",
    images: [pragati1, pragati2],
    source: "(src: wikipedia)",
  },
  {
    name: "Eid-ul-Fitr",
    tagline: "",
    description:
      "Marking the sacred conclusion of Ramadan, the holy month of dawn-to-dusk fasting, Eid al-Fitr is celebrated with immense joy, deep spiritual devotion, and an unparalleled culinary extravaganza centered in the historic heart of Old Delhi. The epicenter of the entire festival is the majestic, 17th-century Jama Masjid, where tens of thousands of devotees dressed in beautiful, pristine traditional attire gather in spectacular synchronized rows for the special morning prayers. Following the prayers, the atmospheric lanes of Chandni Chowk, Matia Mahal, and Hazrat Nizamuddin transform into an energetic, round-the-clock carnival filled with warmth and communal harmony. The streets echo with joyous greetings of 'Eid Mubarak' as people from all communities flock to the historic food stalls to feast on legendary Mughlai delicacies, freshly baked breads, and iconic festive sweet dishes like sheer khurma and sewain. ",
    images: [eid1],
    source: "(src: wikipedia)",
  },
  {
    name: "Republic Day Parade (Kartavya Path)",
    tagline: "",
    description:
      "Celebrated with deep national pride on January 26, the Republic Day Parade on the grand, tree-lined Kartavya Path (formerly Rajpath) is an extraordinary national festival that displays India’s defense capabilities and rich cultural tapestry on a global stage. The entire morning event unfolds as a breathtaking spectacle, starting with a solemn tribute at the National War Memorial followed by a massive, highly synchronized march of military regiments, brass bands, and automated armored columns. For youth and students, the most engaging segment of the parade is the long convoy of colorful, intricately designed floats (jhankis) representing different Indian states and ministries, each performing traditional regional dances to showcase the country's unique heritage. The grand event culminates in a sensational, roaring flypast by the Indian Air Force fighter jets, leaving the entire capital charged with patriotic energy",
    images: [parade1],
    source: "(src: wikipedia)",
  },
  {
    name: "Qutub Festival (Mehrauli)",
    tagline: "",
    description:
      "The Qutub Festival is a highly prestigious, multi-day cultural celebration organized annually by Delhi Tourism against the awe-inspiring, floodlit backdrop of the magnificent 13th-century Qutub Minar complex. Held during the pleasant onset of winter in November or December, this unique festival is explicitly designed to bring India's ancient stone heritage to life by matching it with the timeless beauty of classical performing arts. The historic monument resonates with the soulful sounds of Sufi music, captivating qawwalis, classical ghazals, and mesmerizing traditional dance recitals performed by legendary national and international maestros. This event provides students with a stellar example of historical preservation, showing how ancient architectural spaces can be creatively utilized to keep indigenous musical roots alive and highly engaging for younger generations.",
    images: [qutubf1, qutubf2],
    source: "(src: wikipedia, adotrip.com)",
  },
  {
    name: "Durga Puja & Navratri",
    tagline: "",
    description:
      "During the nine sacred nights of Navratri, Delhi completely transforms into a dual hub of intense cultural activity, showcasing a beautiful blend of North and East Indian festive traditions. In neighborhoods across the city, massive fields host energetic Ramlila theatrical plays that dramatize the epic life of Lord Rama, culminating in the dramatic burning of giant paper effigies of Ravana on Dussehra. Simultaneously, the South Delhi neighborhood of Chittaranjan Park (CR Park) morphs into a spectacular enclave of Durga Puja, featuring massive, beautifully designed artistic structures called pandals that house gorgeous clay idols of Goddess Durga. The entire area comes alive with the powerful beats of traditional dhak drums, intense smoke dances (dhunuchi naach), and thousands of visitors hopping from one creative pavilion to another to enjoy cultural stage shows and authentic street food. ",
    images: [durga1, durga2],
    source: "(src: Wikipedia, timesonnews.com)",
  },
  {
    name: "Mahavir Jayanti",
    tagline: "",
    description:
      "Mahavir Jayanti is one of the most significant and deeply peaceful religious festivals celebrated across the capital, marking the birth anniversary of Lord Mahavira, the twenty-fourth and final Tirthankara of Jainism. Falling in March or April, this auspicious day is observed with great spiritual devotion but an intentional lack of flashy extravagance, beautifully reflecting the core Jain values of simplicity, truth, and ahimsa (absolute non-violence). In Delhi, the celebration comes alive as the entire Jain community unites for a grand morning procession called the Rath Yatra, where beautifully decorated chariots carrying the idol of Lord Mahavira are gently paraded through the streets while devotees sing traditional hymns and recite sacred verses. The spiritual heart of the festival centers on ancient, major Jain shrines across the city—such as the historic Shri Digambar Jain Lal Mandir in Old Delhi—where the idols are given a ceremonial ritual bath called abhisheka using milk and saffron. For students exploring regional cultures, this festival serves as an excellent real-world example of humanitarian values, as the day is largely spent participating in silent meditation and coordinating massive charitable drives to feed the underprivileged and rescue animals.",
    images: [mahavir1],
    source: "(src: businessnewsthisweek.com)",
  },
  {
    name: "International Mango Festival",
    tagline: "",
    description:
      "The International Mango Festival is a wildly popular, mouth-watering two-day summer event that turns Delhi into the ultimate paradise for food lovers, completely celebrating India's undisputed 'King of Fruits'. Organized every July by Delhi Tourism at vibrant hubs like Dilli Haat, this legendary festival brings together massive crowds of students, tourists, and agricultural scientists to marvel at an unbelievable display of more than five hundred distinct varieties of mangoes brought in by farmers from all over the country. Visitors who grew up only knowing standard commercial varieties are treated to a fascinating educational journey as they explore rows of unheard-of hybrids alongside famous regional icons like the fiberless Langra from Varanasi, the sweet Chausa, and the premium Alphonso. The entire open-air venue fills with an incredible tropical fragrance while hosting energetic mango-carving demonstrations, specialized quiz games, live musical stages, and a hilariously competitive mango-eating contest where participants race against the clock. Additionally, elite chefs from five-star hotels host live cooking workshops to show how this versatile fruit can be used in complex savory dishes, while interactive stalls offer a massive array of gourmet mango products like spiced pickles, fresh fruit pulps, tangy aam panna, and artisanal jams, making it a spectacular celebration of India’s massive agricultural heritage.",
    images: [mango1],
    source: "(src: hellotravel.com)",
  },
];

const historicalPlaces = [
  {
    name: "Red Fort",
    description:
      "The Red Fort is a 17th-century Mughal fortress complex located in Delhi, India. Built from red sandstone, it served as the main residence of Mughal emperors for nearly 200 years. A UNESCO World Heritage Site, the fort remains a symbol of India’s architectural heritage and political sovereignty. Commissioned by Mughal emperor Shah Jahan after he moved his capital from Agra to Shahjahanabad (Old Delhi), the Red Fort was completed in 1648. It became the ceremonial and political heart of the empire. The fort’s name derives from its massive red sandstone walls, which stretch roughly 2.4 kilometers. The fort blends Persian, Timurid, and Indian influences, creating an early example of Mughal architectural synthesis. Key structures include the Lahori Gate (main entrance), Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas (Hall of Private Audience), Rang Mahal, Moti Masjid, and royal gardens. Intricate marble inlays, floral motifs, and domed pavilions demonstrate imperial grandeur. Beyond its architectural value, the Red Fort symbolizes Indian sovereignty. Every year on August 15, India’s Prime Minister hoists the national flag here to mark Independence Day. During colonial and post-independence periods, the fort served as a site of major political events, speeches, and national celebrations. Managed by the Archaeological Survey of India, the Red Fort draws millions of visitors annually. Conservation efforts address pollution, urban encroachment, and structural wear. Its light-and-sound show and nearby markets, such as Chandni Chowk, make it a central attraction for cultural tourism in Delhi.",
    images: [red1, red2],
    source: "(src: Wikipedia, vecteezy.com)",
  },
  {
    name: "Qutub Minar",
    description:
      "Qutub Minar is a towering 13th-century minaret located in Delhi, India. Rising within the Qutb archaeological complex, it is one of the most celebrated examples of early Indo-Islamic architecture and a UNESCO World Heritage Site that symbolizes the beginning of Muslim rule in northern India. Commissioned by Qutb-ud-din Aibak, founder of the Delhi Sultanate, Qutub Minar was completed by his successor, Shams-ud-din Iltutmish. It served both as a victory tower celebrating Muslim conquest and as a minaret for the adjoining Quwwat-ul-Islam Mosque, one of India’s earliest mosques built from repurposed temple materials. Constructed primarily of red sandstone with later additions of marble, the minar tapers from about 14 meters at the base to 2.7 meters at the top. It has five distinct stories marked by balconies and intricate carvings of Quranic inscriptions. The alternating fluted and angular sections create visual rhythm typical of early Indo-Islamic design. The Qutb complex includes several notable monuments: the Quwwat-ul-Islam Mosque, the Iron Pillar of Delhi (famous for its rust-resistant composition), Ala-ud-din Khalji’s unfinished Alai Minar, and numerous tombs and gateways. Together they form a key heritage precinct illustrating the architectural evolution of the Delhi Sultanate. utub Minar stands as an enduring symbol of Delhi’s layered history, merging Islamic and Indic artistic traditions. It continues to attract millions of visitors annually, serving as a major historical, educational, and cultural landmark of India.",
    images: [qutubq, qutub2],
    source: "(src: wikipedia, holidayify.com)",
  },
  {
    name: "India Gate",
    description:
      "India Gate is a 42-meter-high sandstone war memorial in New Delhi, India. Designed by British architect Sir Edwin Lutyens, it honors the soldiers of British India who died during World War I and the Third Anglo-Afghan War. Today, it serves as both a national symbol of sacrifice and a central landmark in the Indian capital. Completed in 1931 as the All-India War Memorial, the monument is built from red and pale sandstone in the form of a triumphal arch reminiscent of Paris’s Arc de Triomphe. It bears the inscription “INDIA” flanked by the Roman numerals MCMXIV and MCMXIX, marking 1914 and 1919. The names of more than 13,000 soldiers are engraved on its surface. Beneath the arch burns the Amar Jawan Jyoti, an eternal flame established in 1972 to commemorate soldiers who died in the 1971 Indo-Pakistan War. The flame was merged in 2022 with that of the adjacent National War Memorial, a larger complex built in 2019 that honors all Indian service personnel who have fallen in battle. India Gate anchors the ceremonial axis of New Delhi and is the focal point for the annual Republic Day parade on January 26. At night, the arch and nearby fountains are floodlit, and the surrounding lawns draw visitors for picnics and evening walks. The site also features the Children’s Park, boating facilities, and proximity to major landmarks such as Rashtrapati Bhavan, Parliament House, and the National Gallery of Modern Art. Accessible from the Central Secretariat Metro Station, India Gate is open year-round with no entry charge. Evening visits offer striking views of the illuminated memorial and vibrant public life that has made it one of India’s most visited and photographed monuments.",
    images: [ig1, ig2],
    source: "(src: trawell.in, dreamstime.com)",
  },
  {
    name: "Humayun's Tomb",
    description:
      "India Gate is a 42-meter-high sandstone war memorial in New Delhi, India. Designed by British architect Sir Edwin Lutyens, it honors the soldiers of British India who died during World War I and the Third Anglo-Afghan War. Today, it serves as both a national symbol of sacrifice and a central landmark in the Indian capital. Completed in 1931 as the All-India War Memorial, the monument is built from red and pale sandstone in the form of a triumphal arch reminiscent of Paris’s Arc de Triomphe. It bears the inscription “INDIA” flanked by the Roman numerals MCMXIV and MCMXIX, marking 1914 and 1919. The names of more than 13,000 soldiers are engraved on its surface. Beneath the arch burns the Amar Jawan Jyoti, an eternal flame established in 1972 to commemorate soldiers who died in the 1971 Indo-Pakistan War. The flame was merged in 2022 with that of the adjacent National War Memorial, a larger complex built in 2019 that honors all Indian service personnel who have fallen in battle. India Gate anchors the ceremonial axis of New Delhi and is the focal point for the annual Republic Day parade on January 26. At night, the arch and nearby fountains are floodlit, and the surrounding lawns draw visitors for picnics and evening walks. The site also features the Children’s Park, boating facilities, and proximity to major landmarks such as Rashtrapati Bhavan, Parliament House, and the National Gallery of Modern Art. Accessible from the Central Secretariat Metro Station, India Gate is open year-round with no entry charge. Evening visits offer striking views of the illuminated memorial and vibrant public life that has made it one of India’s most visited and photographed monuments. ",
    images: [ht1, ht2, ht3],
    source: "(src: wikipedia, istockphoto.com, weebly)",
  },
  {
    name: "Lotus Temple",
    description:
      "The Lotus Temple is a Baháʼí House of Worship located in Delhi, India, renowned for its distinctive lotus flower–inspired design. Completed in 1986, it serves as a symbol of unity, open to people of all faiths for meditation and prayer, and stands among Delhi’s most visited architectural landmarks. The structure’s design, inspired by the lotus—India’s national flower—embodies purity and spiritual awakening. Architect Fariborz Sahba used 27 freestanding marble-clad “petals” arranged in clusters of three to create nine sides. The temple’s central hall, surrounded by nine doors, can accommodate about 2,500 people and is illuminated by natural light filtering through the petal openings. As a Baháʼí House of Worship, the Lotus Temple is open to all regardless of religion or background, emphasizing the Baháʼí principle of the oneness of humanity and religion. There are no sermons or rituals; visitors pray, meditate, or read from various religious texts in silence. Its inclusive approach and serene atmosphere have made it a major interfaith and cultural symbol in India. Situated amid landscaped gardens and nine reflecting pools, the temple attracts millions of visitors annually. The surrounding complex includes a visitor center that provides information about the Baháʼí Faith and the temple’s architecture. Its tranquil environment contrasts with the city’s bustle, offering a reflective space within Delhi’s urban landscape.",
    images: [lotus1, lotus2, lotus3],
    source: "(src:wikipedia, pinterest, mouthshut.com)",
  },
  {
    name: "Swaminarayan Akshardham",
    description:
      "Swaminarayan Akshardham is a magnificent Hindu temple complex located in Delhi and is renowned for its grand architecture, spiritual atmosphere, and cultural exhibitions. Officially opened in 2005, the monument was built by the BAPS Swaminarayan Sanstha under the guidance of Pramukh Swami Maharaj to showcase India’s ancient art, culture, spirituality, and values. Constructed mainly from pink sandstone and white marble, the central monument features intricate carvings of deities, saints, animals, and floral designs created by skilled artisans. The complex includes beautifully landscaped gardens, exhibitions, a musical fountain, and a large Yagnapurush Kund, which is one of the world’s largest stepwells. Akshardham reflects traditional Indian temple architecture and craftsmanship while promoting messages of peace, devotion, and harmony. Due to its stunning design and cultural significance, it has become one of the most popular tourist attractions and spiritual landmarks in Delhi.",
    images: [swami1, swami2, swami3],
    source: "(src: Wikipedia, pinterest, animalialife.com)",
  },
  {
    name: "National Science Centre (Pragati Maidan)",
    description:
      "Strategically situated right near the commercial exhibition hub of Pragati Maidan, the National Science Centre is one of the largest and most interactive science museums in Asia. Established in 1992, this iconic multi-story educational landmark was specifically designed by the noted Indian architect Achyut Kanvinde to promote scientific curiosity among the youth. The museum features seven sprawling permanent galleries, including a deeply fascinating Pre-Historic Life Gallery packed with electro-pneumatically animated dinosaurs and a highly interactive Fun Science Gallery where visitors can ride a historic penny-farthing bicycle or manipulate optical illusions. For students building interactive digital content, this center acts as a ultimate blueprint of experiential learning, offering dedicated zones on Human Biology, the Information Revolution, and a unique Science and Technology Heritage Gallery that tracks forty-five hundred years of rich scientific discoveries on Indian soil, including the mathematical evolution of zero.",
    images: [thiruv1, thiruv2],
    source: "(src: Wikipedia, mydinosaurs.com)",
  },
  {
    name: "Jantar Mantar",
    description:
      "Jantar Mantar in Delhi, India, is an 18th-century astronomical observatory built by Maharaja Jai Singh II of Jaipur. It was designed to measure celestial movements and time using large, precisely constructed instruments. Today, it stands as a historic scientific monument and a UNESCO-recognized heritage site symbolizing India’s early advances in astronomy. Jantar Mantar was the first of five observatories built by Jai Singh II across India, predating those in Jaipur, Varanasi, Ujjain, and Mathura. Its construction reflected the ruler’s fascination with celestial science and his desire to refine astronomical tables and calendars that were inaccurate at the time. The Delhi complex contains 13 masonry instruments, each serving a unique astronomical function. Notable among them are the Samrat Yantra, a massive sundial used to measure time precisely, and the Jai Prakash and Rama Yantra, which help observe celestial altitudes and declinations. The instruments’ geometric forms give the site its distinctive appearance. The observatory was a key tool in refining astronomical data before modern instruments became available. It represents a fusion of traditional Hindu cosmology and advanced geometry. Today, it serves as both a scientific heritage site and a cultural landmark, attracting scholars and tourists interested in India’s scientific history. Located near Connaught Place (Delhi), Jantar Mantar remains a popular attraction and an educational site for students of astronomy and architecture. Its open-air structures, still aligned with celestial bodies, demonstrate the enduring precision of early Indian astronomical knowledge.",
    images: [jantar1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Waste to Wonder Park (Sarai Kale Khan)",
    description:
      "The Waste to Wonder Park is a highly innovative, eco-themed public park that brilliantly merges global architectural appreciation with modern environmental sustainability. Located near the Sarai Kale Khan transport hub, this unique seven-acre park features incredibly detailed, scaled replicas of the Seven Wonders of the World—including the Eiffel Tower, the Taj Mahal, and the Statue of Liberty—constructed entirely out of industrial and automobile scrap metal. Over one hundred and fifty tonnes of waste products, such as old pipes, discarded metal utensils, rusty bicycle chains, and scrap iron sheets, were painstakingly welded together by master artists to create these spectacular, high-visibility structures. The park serves as an exceptional educational tool for students researching green technology and circular economies, as the entire complex is powered cleanly by its own built-in solar panels and wind turbine installations, illuminating the metallic monuments beautifully at night to demonstrate the creative concept of turning waste into wealth.",
    images: [waste1, waste2, waste3],
    source: "(src: tripgurogo.com, outlookindia.com, hindustantimes.com)",
  },
  {
    name: "Purana Qila (Old Fort)",
    description:
      "Purana Qila (“Old Fort”) is one of the oldest surviving forts in Delhi, India. Standing near the banks of the Yamuna River, it represents a blend of Mughal and pre-Mughal architecture. The site has been continuously inhabited since ancient times, making it a significant archaeological and historical landmark of Delhi. The fort’s origins trace to the ancient city of Indraprastha, mentioned in the Mahabharata. Excavations have revealed continuous habitation layers spanning the Mauryan to Mughal periods. Emperor Humayun began constructing the fort around 1533, and it was later completed and modified by Sher Shah Suri, who briefly displaced the Mughals from Delhi. Purana Qila is an irregular rectangle with massive sandstone ramparts and bastions enclosing about two kilometers of wall. Its three main gates—Bada Darwaza, Talaqi Darwaza, and Humayun Darwaza—showcase intricate calligraphy and decorative tile work. Inside, notable structures include the Sher Mandal (a double-storeyed octagonal tower) and the Qila-i-Kuhna Mosque, a masterpiece of early Mughal design. The site serves as a vital link between ancient and medieval Delhi. Archaeological excavations by the Archaeological Survey of India have uncovered artifacts dating back to around 1000 BCE. Today, Purana Qila hosts a museum displaying these finds and is a popular venue for light-and-sound shows narrating Delhi’s history. Purana Qila remains a major tourist attraction and educational site. Its gardens, archaeological museum, and evening cultural programs draw visitors year-round. The fort’s commanding presence and layered history make it an enduring emblem of Delhi’s long and complex urban evolution.",
    images: [qila1, qila2],
    source: "(src: wikipedia)",
  },
];

const facts = [
  "The Green Capital: Delhi features an incredible green cover spanning over 20% of its total land area, making it one of the greenest capital cities in the entire world.",
  "Asia's Largest Spice Market: Khari Baoli in Old Delhi is a massive commercial hub operating since the 17th century as the largest wholesale spice market in Asia.",
  "The Eco-Friendly Fleet: Delhi’s massive public transport network runs cleanly on compressed natural gas (CNG) to curb urban carbon emissions across the city.",
  "The Seat of Seven Cities: Historical records show that modern Delhi is built on the ruins and strategic layouts of seven distinct historic capital cities.",
  "Ancient Iron Miracle: The famous 1,600-year-old Iron Pillar at the Qutub complex has baffled global scientists by remaining completely rust-free for centuries.",
  "The Unique Bird Capital: Delhi ranks as the second most bird-rich capital city in the world, trailing only behind Nairobi in its incredible diversity of avian species.",
  "Asia’s Busiest Metro: The high-tech Delhi Metro network carries over six million passenger commutes daily across its vast multi-line structural grid.",
  "A Museum for Toilets: The capital houses the highly unique Sulabh International Museum of Toilets, which tracks the global history of sanitation since 2500 BC.",
  "World’s Tallest Brick Tower: Soaring over 73 meters high, the 13th-century Qutub Minar is officially recognized as the tallest brick minaret on Earth.",
  "The Big-Hearted City: Delhi is globally celebrated by travelers under the warm cultural nickname of 'Dil Walon Ki Dilli' (The City of Big-Hearted People).",
  "The Original Ring Road: The historic 14th-century fortress of Feroz Shah Kotla houses a massive polished sandstone pillars brought by Ashoka the Great.",
  "Global Wonder in Scrap: The innovative Waste to Wonder Park features scaled replicas of the Seven Wonders of the World built entirely from recycled scrap metal.",
  "Asia's Electronic Hub: The bustling Nehru Place district in South Delhi is widely recognized as the largest open-market commercial hub for electronics in Asia.",
  "The Historic Summer Capital: Long before independence, New Delhi was meticulously constructed by British architects to serve as the grand geometric seat of empire.",
  "Ancient Time Machine: The giant Samrat Yantra stone sundial at Jantar Mantar can calculate local Delhi time to an unbelievable accuracy of just two seconds.",
];

const artGallery = [
  {
    title: "Mughal Miniature Painting",
    emoji: "🖼️",
    color: "#8B4513",
    desc: "Detailed painting style from the Mughal era with intricate designs and royal themes",
    image: gMughalMiniature,
  },
  {
    title: "Ivory & Wood Carving",
    emoji: "🪵",
    color: "#D4A017",
    desc: "Intricate engraving work on faux-ivory and sandalwood from the alleyways of Old Delhi",
    image: gIvoryWoodCarving,
  },
  {
    title: "Terracotta Pottery",
    emoji: "🏺",
    color: "#C0522A",
    desc: "Rustic wheel-spun clay pottery handcrafted by traditional artisan colonies in Uttam Nagar",
    image: gTerracottaPottery,
  },
  {
    title: "Kathak",
    emoji: "💃",
    color: "#9B2D8A",
    desc: "Classical dance form known for graceful spins, expressive storytelling and footwork",
    image: gKathak,
  },
  {
    title: "Bhangra",
    emoji: "🕺",
    color: "#E8A44A",
    desc: "Energetic Punjabi folk dance widely performed during celebrations across Delhi",
    image: gBhangra,
  },
  {
    title: "Chole Bhature",
    emoji: "🍛",
    color: "#D4822A",
    desc: "Iconic Delhi dish of spicy chickpea curry served with golden deep-fried bread",
    image: gCholeBhature,
  },
  {
    title: "Butter Chicken",
    emoji: "🍗",
    color: "#E8733A",
    desc: "Creamy, mildly spiced tomato-based chicken curry that was born in the streets of Delhi",
    image: gButterChicken,
  },
  {
    title: "Paratha",
    emoji: "🫓",
    color: "#C9A96E",
    desc: "Stuffed flatbread especially famous in the iconic Paranthe Wali Gali of Old Delhi",
    image: gParatha,
  },
  {
    title: "Street Food",
    emoji: "🥘",
    color: "#B5341A",
    desc: "Aloo chaat, golgappa, kebabs and shahi paneer — the legendary flavors of Delhi's streets",
    image: gStreetFood,
  },
  {
    title: "Tabla",
    emoji: "🥁",
    color: "#6F4E37",
    desc: "Pair of hand drums central to Indian classical music and widely played across Delhi",
    image: gTabla,
  },
  {
    title: "Sitar",
    emoji: "🎸",
    color: "#4A6E8A",
    desc: "Classical string instrument known for its melodious sound and deep Hindustani roots",
    image: gSitar,
  },
  {
    title: "Harmonium",
    emoji: "🎹",
    color: "#2E6B4A",
    desc: "Portable bellows keyboard that forms the melodic backbone of Qawwalis and Ghazals",
    image: gHarmonium,
  },
  {
    title: "Banarasi Silk",
    emoji: "🧵",
    color: "#7B1E8A",
    desc: "Luxurious silk fabric woven with golden zari, commonly worn at weddings and festivals",
    image: gBanarasiSilk,
  },
  {
    title: "Zari Work",
    emoji: "✨",
    color: "#B8922A",
    desc: "Decorative metallic gold and silver thread embroidery used in traditional Delhi garments",
    image: gZariWork,
  },
  {
    title: "Phulkari",
    emoji: "🌸",
    color: "#D4456A",
    desc: "Vibrant geometric folk embroidery with bright silken threads brought to Delhi by the Punjabi community",
    image: gPhulkari,
  },
];
