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
const jharkhandMap = "https://i.postimg.cc/fTfBzbGW/image.png";
const sarhul1 = "https://i.postimg.cc/9MLrphZQ/image.png";
const sarhul2 = "https://i.postimg.cc/28bV4g6x/image.png";
const sarhul3 = "https://i.postimg.cc/Prw5LZ31/image.png";
const karma1 = "https://i.postimg.cc/W1mp8VP2/image.png";
const karma2 = "https://i.postimg.cc/G2tcbsTB/image.png";
const sohrai1 = "https://i.postimg.cc/7PC2V5th/image.png";
const sohrai2 = "https://i.postimg.cc/WbgqBQPx/image.png";
const sohrai3 = "https://i.postimg.cc/L8Sg2N9T/image.png";
const tusu1 = "https://i.postimg.cc/DzjSQhqZ/image.png";
const tusu2 = "https://i.postimg.cc/1t8fJdBh/image.png";
const baha1 = "https://i.postimg.cc/DfbSGtm8/image.png";
const baha2 = "https://i.postimg.cc/BQTtYHTG/image.png";
const bhagta1 = "https://i.postimg.cc/YC80k7Ds/image.png";
const bhagta2 = "https://i.postimg.cc/25K5bwDQ/image.png";
const bandna1 = "https://i.postimg.cc/j5nSz7qs/image.png";
const bandna2 = "https://i.postimg.cc/FzjF6XJW/image.png";
const hal1 = "https://i.postimg.cc/X7bYCqR6/image.png";
const hal2 = "https://i.postimg.cc/5299sG9r/image.png";
const hal3 = "https://i.postimg.cc/FK7r4LLJ/image.png";
const rohini1 = "https://i.postimg.cc/43qJNxvG/image.png";
const rohini2 = "https://i.postimg.cc/Y0wMYDyL/image.png";
const jitia1 = "https://i.postimg.cc/ryS8McK3/image.png";
const jitia2 = "https://i.postimg.cc/zGf5Cgp7/image.png";
const baidyanath1 = "https://i.postimg.cc/qMVx6cJF/image.png";
const baidyanath2 = "https://i.postimg.cc/13y0J9q1/image.png";
const kon1 = "https://i.postimg.cc/PqRmXYVg/image.png";
const kon2 = "https://i.postimg.cc/vTRf9MsJ/image.png";
const kon3 = "https://i.postimg.cc/c1YQWKRX/image.png";
const chinnamasta1 = "https://i.postimg.cc/y8690vwn/image.png";
const chinnamasta2 = "https://i.postimg.cc/YSZWKkhw/image.png";
const chinnamasta3 = "https://i.postimg.cc/PJkvJ4WS/image.png";
const palamu1 = "https://i.postimg.cc/RV0GB7R6/image.png";
const palamu2 = "https://i.postimg.cc/g2XDwG1r/image.png";
const palamu3 = "https://i.postimg.cc/Qtskn1Cc/image.png";
const angrabadi1 = "https://i.postimg.cc/GhzNP3MV/image.png";
const angrabadi2 = "https://i.postimg.cc/LsgbMtmt/image.png";
const gumla1 = "https://i.postimg.cc/g006wswW/image.png";
const gumla2 = "https://i.postimg.cc/qRhhw7XQ/image.png";
const gumla3 = "https://i.postimg.cc/QN7KWHML/image.png";
const maluti1 = "https://i.postimg.cc/HsCc0dJt/image.png";
const maluti2 = "https://i.postimg.cc/nhFX52Gj/image.png";
const benisagar1 = "https://i.postimg.cc/CKtdRgTz/image.png";
const benisagar2 = "https://i.postimg.cc/C5p14sKx/image.png";
const jagannath1 = "https://i.postimg.cc/Zq95tM9G/image.png";
const jagannath2 = "https://i.postimg.cc/k5kXnvKG/image.png";
const isko1 = "https://i.postimg.cc/d39qjMX1/image.png";
const isko2 = "https://i.postimg.cc/L4k6pfXq/image.png";
const gRanchiCapital = "https://i.postimg.cc/7LFkrQDP/image.png";
const gDassamFalls = "https://i.postimg.cc/Bn3pkTRR/image.png";
const gJubileePark = "https://i.postimg.cc/6q0JRWvM/image.png";
const gRugraCurry = "https://i.postimg.cc/sx19PKQW/image.png";
const gRajmahalFossils = "https://i.postimg.cc/HWJ6ysQQ/image.png";
const gDhuska = "https://i.postimg.cc/K84SkyvV/image.png";
const gThekua = "https://i.postimg.cc/LsZcDBP7/image.png";
const gChhauDance = "https://i.postimg.cc/hvKNKkYW/image.png";
const gJhumarDance = "https://i.postimg.cc/tghr7rWJ/image.png";
const gSohraiTribalArt = "https://i.postimg.cc/59mZstH2/image.png";
const gHundruFalls = "https://i.postimg.cc/0yzF5dVM/image.png";
const gAsianElephant = "https://i.postimg.cc/sXrNcFsg/image.png";
const gIndianBison = "https://i.postimg.cc/sxfHkpBF/image.png";

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
export default function JharkhandPage() {
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
                East India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Jharkhand
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Forests
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Ranchi" },
                  { label: "Population", value: "3.30 Crore" },
                  { label: "Area", value: "79,716 sq km" },
                  { label: "Founded", value: "15 November 2000" },
                  { label: "Language", value: "Hindi, Santali, Bengali" },
                  { label: "Districts", value: "24 Districts" },
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
              Ranchi
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Jharkhand — City of Waterfalls
            </p>
          </div>
        </Section>

        {/* Map of Jharkhand — click to enlarge */}
        <Section title="Map of Jharkhand" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(jharkhandMap, "Map of Jharkhand")}
            >
              <img
                src={jharkhandMap}
                alt="Map of Jharkhand"
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
              Jharkhand, historically known as the "Land of Forests," possesses a heritage that stretches back to the Stone Age, with its tribal roots forming the backbone of its cultural identity. Over the centuries, the region was influenced by the Magadha and Maurya empires and later referred to as "Kukara" during the Mughal era. Resistance against external rule became a defining characteristic of the land, highlighted by significant 18th and 19th-century tribal uprisings such as the Tilka Manjhi revolt and the "Ulgulan" movement led by the iconic tribal leader Bhagwan Birsa Munda. 
            </p>
            <p className="text-foreground">
              The modern quest for autonomy gained political momentum in the early 20th century through the efforts of Jaipal Singh Munda and was eventually realized on November 15, 2000, when Jharkhand was officially founded as the 28th state of India. This date was strategically chosen to honor the birth anniversary of Birsa Munda, marking the state's formal separation from Bihar under the Bihar Reorganisation Act.
            </p>
            <p className="text-foreground">
              Linguistically, Jharkhand is a vibrant mosaic that reflects its diverse ethnic demographics. While Hindi serves as the official language and primary medium for administration and commerce, the state is home to a rich variety of tribal and regional tongues. These include the Austroasiatic languages like Santali, Mundari, and Ho, as well as Dravidian languages such as Kurukh and Malto. Additionally, Indo-Aryan languages like Khortha, Nagpuri, and Sadri are widely spoken, with Sadri often functioning as a vital lingua franca that bridges communication between different tribal communities.
            </p>
            <p className="text-foreground">
             Due to its geographic location, the influence of neighboring states is also evident through the prevalence of Bengali, Odia, Bhojpuri, and Maithili, making Jharkhand a unique crossroads of Indian linguistic traditions. Beyond its political history, Jharkhand is a geological powerhouse, often called the "Ruhr of India" because it contains over 40% of the country’s total mineral resources, including coal, iron ore, and mica. This natural wealth has fueled the growth of major industrial hubs like Jamshedpur, India’s first planned industrial city, and Dhanbad, the nation's coal capital. 
            </p>
            <p className="text-foreground">
              The state’s geography is dominated by the Chota Nagpur Plateau, which creates a stunning landscape of rolling hills, dense forests, and magnificent waterfalls like Dassam and Hundru. Spiritually, the land is deeply significant, housing the Baidyanath Jyotirlinga in Deoghar and the sacred Parasnath Hill, the most important pilgrimage site for the Jain community. The local culture is celebrated through vibrant folk dances like Chhau and Jhumair, which are performed during seasonal festivals such as Sarhul and Karam to honor nature
            </p>
            <p className="text-foreground italic text-primary font-medium">
              These traditions reflect a deep-seated respect for the environment that remains central to the Jharkhandi way of life. Today, the state continues to balance its rapid industrial development with the preservation of its ancient tribal heritage and vast green cover.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Jharkhand, mapsofindia.com)
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
        <Section title="Facts about Jharkhand" icon="💡">
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
            Scroll horizontally to explore Jharkhand's iconic foods, crafts,
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
    name: "Sarhul (The Flower Festival)",
    tagline: "",
    description:
     "Sarhul stands as the most magnificent display of tribal identity, spiritual ecology, and the cyclical nature of life in the Chota Nagpur Plateau. As the most significant and popular festival for the Munda, Oraon, and Ho tribes, it is celebrated during the Hindu month of Chaitra, specifically on the third day of the moon, marking the official arrival of the spring season. The name 'Sarhul' is derived from tribal terminology meaning 'Worship of Trees', highlighting a deep-seated ecological connection where the Sal tree is considered a provider of life, wood, and shelter. It marks the tribal New Year, a period when Mother Nature awakens from her winter slumber to drape the landscape in vibrant blossoms. The festival honors the village deity, believed to be the protector of the tribe and the ultimate source of all prosperity. Tribal legend strictly dictates that no fresh crops or flowers from the forest should be consumed until the deities are offered the first blossoms of the Sal. Central to the celebration is the Pahan, or village priest, who acts as the bridge between the community and the divine. Days before the festival, the Pahan observes a rigorous fast to purify himself for the upcoming sacred rituals. On the eve of Sarhul, he places three earthen pots filled with water at the Sarna, or sacred grove. The next morning, the water level is used to predict the year’s future; a drop warns of impending famine, while a stable level signals abundant rainfall. This ritual serves as an ancient, data-driven method of agricultural forecasting that tribes have relied upon for centuries. The core ceremonies occur at the Sarna Sthal, a cluster of Sal trees that is never cut and is kept pristine for worship. The Pahan offers Sal flowers and grain to the deities, praying for the fertility of the soil and the protection of the village cattle. A unique ritual involves the symbolic 'marriage' of the Pahan and his wife, representing the union of Sun and Earth to ensure a bountiful harvest. Sacrificial offerings, often a rooster, are made to appease spirits and ensure the village remains free from disease. Following the rituals, the Pahan distributes Sal flowers to every household to be tucked into hair or placed above doorways as a blessing. Sarhul is also an explosion of music, where the rhythmic beats of the Mandhar, Dhol, and Nagara echo through the forest. Men and women dress in traditional white cotton sarees and dhotis with vibrant red borders, symbolizing purity and life. Women adorn their hair with freshly plucked Sal blossoms, creating a visually stunning connection to their environment. The traditional Sarhul dance involves dancers forming large, concentric circles, moving in harmony to represent tribal unity. A traditional rice-based beer called 'Handia' is prepared and shared, facilitating a spirit of brotherhood and joy. In cities like Ranchi, the festival has evolved into a massive cultural procession where thousands march to showcase their heritage. Sarhul acts as a powerful reminder of environmental conservation, as the tribe vows to protect the forests that sustain them. It remains a living museum of nature worship that has survived modern industrialization. For the youth, it is a time to reconnect with roots and learn the ancient songs and stories of their ancestors. Ultimately, Sarhul is a testament to the fact that for the people of Jharkhand, nature is not a resource to be exploited, but a deity to be worshipped.",
    images: [sarhul1, sarhul2, sarhul3],
    source: "(src: Wikimedia commons, Dainik BHaskar)",
  },
  {
    name: "Karma (The Nature and Youth Festival)",
    tagline:
      "",
    description:
      "The Karma festival is a profound celebration of nature’s bounty and the vital energy of youth, occurring on the 11th moon of the Hindu month Bhadra. It is primarily a festival dedicated to Karma Devta, the deity representing power, courage, and youthfulness, and is observed with deep fervor across tribal belts. The celebration officially begins when groups of young people enter the forest to find the sacred Karma tree. Once located, a branch of the Karam tree is ceremoniously cut and brought back to the village amidst singing and dancing. This branch is planted in the center of a courtyard or common village ground, which then becomes the focal point for worship. The festival is particularly significant for young girls, who perform a ritual known as 'Jawa'. About a week before the main event, girls place germinating seeds of grains and pulses in small bamboo baskets. They nurture these seedlings in the dark, believing that the health and growth of the 'Jawa' reflect the future prosperity of their families. On the day of the festival, the community gathers around the planted Karam branch to listen to the legendary story of Karma and Dharma. This story emphasizes the importance of hard work (Karma) over mere fate and teaches the moral values of the tribe. After the storytelling, the atmosphere transforms into one of joyous celebration, with the rhythmic thumping of the Mandar drum. Dancers form semi-circles, interlocking their arms and swaying in a synchronized pattern that mimics the movement of the wind through trees. The dancers often wear traditional ornaments and garlands made from wild forest flowers. Fasting is a central component for the participants, who abstain from food until the evening rituals are completed. Offerings of fruits, flowers, and the newly sprouted Jawa seedlings are made to the Karam branch to seek blessings. The ritual represents the tribe's prayer for a successful harvest and the protection of their crops from pests and disease. It also serves as a celebration of sibling bonds, similar to Raksha Bandhan, as sisters pray for the longevity of their brothers. The following morning, the Karam branch is carried in a procession and immersed in a local pond or river. This immersion symbolizes the cycle of life—returning to the nature from which it was borrowed. Karma is more than just a ritual; it is a social glue that binds the younger generation to their ancestral land. It reinforces the philosophy that human survival is intrinsically linked to the fertility of the soil and the health of the forest. The festival concludes with communal feasting, where traditional tribal delicacies like Pitha and Handia are shared among all neighbors. In modern times, Karma has become a symbol of tribal resistance and pride, asserting their cultural identity in a changing world. It remains a vibrant testament to the endurance of Jharkhand’s indigenous traditions and their unwavering respect for the green world.",
    images: [karma1, karma2],
    source: "(src: Wikimedia commons, Jharkhand culture department)",
  },
  {
    name: "Sohrai (The Harvest and Cattle Festival)",
    tagline:
      "",
    description:
      "Sohrai is a grand post-harvest festival celebrated during the Amavasya (New Moon) of the month of Kartik, coinciding with the timing of Diwali. It is a unique celebration dedicated to cattle, expressing the tribe's deep gratitude for the animals that help till the land and sustain the family. The festival recognizes that without the labor of bulls and buffaloes, the successful harvest being celebrated would not have been possible. The preparation for Sohrai begins weeks in advance as women clean and repair their mud-walled houses for the season. This cleaning process serves as the canvas for Sohrai Art, one of India's most ancient and stunning mural traditions found in villages. Using natural pigments made from clay, charcoal, and ochre, women paint intricate designs of birds, animals, and plants on their walls. These murals are not just decorative; they are spiritual invitations for prosperity and ancestral spirits to enter the home. On the first day of the festival, cattle are taken to the local pond for a ceremonial bath to refresh their spirits. After being cleaned, the animals' horns are anointed with oil and vermilion, and they are garlanded with wild marigolds. In some regions, cattle are also marked with colorful handprints or geometric patterns using traditional rice paste. Farmers offer a special meal of boiled grains and pulses to their livestock as a sincere token of appreciation. The village comes alive with the sound of 'Gai-Jagao' songs, which are sung to wake the spirits of the cattle. Earthen lamps (Diyas) are lit in the cattle sheds at night to ward off evil spirits and seasonal diseases. The second day often features a communal ritual where the village priest (Pahan) performs a puja for the health of the livestock. A highlight of the festivities is the 'Khuntan' or cattle sports, where animals are playfully incited to show their strength. This is not a violent act but a celebration of the raw, primal power that sustains the entire agrarian economy. Traditional dances are performed by both men and women, often wearing masks or carrying symbolic agricultural tools. The music is dominated by the Nagara and Dhak, creating a heavy, resonant beat that can be heard for miles. Families prepare special traditional foods like 'Ladu' and 'Arsa' made from the newly harvested winter rice. The festival serves as a vital social bridge, where relatives from different villages visit each other to share the harvest. It reinforces the symbiotic relationship between humans, animals, and the earth that characterizes tribal life. Sohrai is a powerful reminder that in the tribal worldview, wealth is measured by the health of one's livestock. Today, Sohrai art has gained international recognition, but its soul remains in the humble mud huts of Jharkhand’s villages. The festival remains a vibrant, living tradition that celebrates the dignity of manual labor and the sacredness of domestic animals.",
    images: [sohrai1, sohrai2, sohrai3],
    source: "(src: Wikimedia commons, Hazaribagh tribal art alliance)",
  },
  {
    name: "Tusu Parab (The Winter Harvest Festival)",
    tagline:
      "",
    description:
      "Tusu Parab is a beautiful and melodic harvest festival observed in the winter, specifically on the last day of the month of Poush. It is a celebration of the harvest's end and is uniquely focused on the female members of the tribal and agrarian communities. The festival is named after 'Tusu', a legendary folk goddess who represents purity, grace, and the bounty of the winter earth. Preparations for Tusu begin a month in advance, as young girls gather to sing daily songs dedicated to the goddess's spirit. These Tusu songs are often competitive, with different groups of girls trying to outdo each other in creativity and vocal skill. A central feature of the festival is the 'Chaudal', which is a bamboo frame elaborately decorated with colorful paper and tinsel. These Chaudals can range from small handheld structures to massive towers that require several men to carry to the river. On the day of the festival, girls carry these Chaudals in a grand procession toward the nearest river or pond for immersion. The procession is filled with dancing and the continuous singing of Tusu melodies that describe the beauty of the goddess. Upon reaching the water, a ritual immersion of the Chaudals takes place, symbolizing the return of the goddess to nature. This immersion is a bittersweet moment, often accompanied by emotional songs of farewell and prayers for a good next year. The festival is especially popular in the districts of Bundu, Tamar, and Silli, where massive Tusu Melas (fairs) are organized. These fairs become a marketplace for local crafts, traditional snacks, and cultural performances like the famous Chhau dance. Tusu is also a time for young girls to showcase their needlework and artistic skills through the decoration of the goddess's idols. Traditional sweets like 'Til-Ladu' and 'Gur-Pitha' are prepared in every household using the fresh winter harvest grains. The festival serves as a rite of passage for many young women, fostering a sense of sisterhood and deep community pride. It reflects the deep-seated respect for the 'female energy' that ensures the continuity of life and productive agriculture. Tusu songs also serve as an oral history, preserving the stories and struggles of the tribal people through generations. Despite the influence of modern entertainment, Tusu remains a deeply cherished tradition that brings the rural landscape to life. It is a festival of hope, celebrating the storage of food for the winter and the promise of a new agricultural cycle. The simplicity and melodic nature of Tusu make it one of the most accessible and heartwarming celebrations in Jharkhand.",
    images: [tusu1, tusu2],
    source: "(src: bJharkhand tourism, Dainik jagran)",
  },
  {
    name: "Baha Parab (The Santhal Flower Festival)",
    tagline:
      "",
    description:
      "Baha Parab, literally meaning the 'Flower Festival', is the second most important festival for the Santhal tribe, celebrated in the spring. It is a sacred communion with nature that takes place when the Sal and Mahua trees begin to blossom in the forests. The festival signifies the arrival of spring and is a time for cleansing, renewal, and honoring the ancestral spirits. Like Sarhul, Baha legend forbids the picking or wearing of new flowers until they have been ceremonially offered to the gods. The festival usually lasts for three days and is characterized by a unique sense of ritual purity and communal discipline. On the first day, known as 'Um', the village priest (Naike) and the community undergo a ritual purification bath. The second day is the focal point of the festival, where the community gathers at the 'Jaherthan' or sacred grove. Here, the Naike offers the first Sal flowers to the deities, praying for the protection of the village from wild animals. A unique feature of Baha is the use of water as a medium of celebration, similar to the festival of Holi but without colors. Participants splash water on each other as a sign of love, respect, and the refreshing of vital social bonds. This water-splashing ritual is believed to wash away the grievances of the past year and bring spiritual freshness. Men and women dress in traditional Santhal attire—the 'Sari' for women and the 'Kacha' for men, usually in white. The Santhal dance during Baha is graceful and controlled, performed to the haunting melodies of the Tirio (bamboo flute). The dancers often move in long lines, mimicking the swaying of flowers in a spring breeze across the hills. Baha is also a celebration of the Mahua flower, which is a vital source of food and livelihood for the tribal forest dwellers. After the public ceremonies, the Naike visits every house in the village, carrying a basket of Sal flowers. He is welcomed at each doorstep with a washing of feet, and in return, he blesses the household with a Sal blossom. This personal blessing ensures that the spirit of the forest enters every home in the community for the year. The festival concludes with communal feasting, where special rice cakes and Handia are served to all guests and family. Baha reinforces the Santhal philosophy of living in perfect harmony with the spirits of the deep woods. It is a sophisticated celebration that blends profound spiritual rituals with joyous communal interaction. In an age of climate change, Baha serves as a powerful cultural mandate for the preservation of indigenous forests.",
    images: [baha1, baha2],
    source: "(src: Wikimedia commons, Santhal pargana cultural society)",
  },
  {
    name: "Bhagta Parab (Bravery and Faith)",
    tagline: "",
    description:
      "Bhagta Parab is one of the most intense and visually striking festivals in Jharkhand, celebrated between the end of spring and summer. It is primarily observed by the non-tribal and tribal communities in the Tamar and Bundu regions, dedicated to Budha Baba. The festival is a test of extreme physical endurance and unwavering faith, where devotees (Bhagtas) undergo rigorous penance. Preparations involve a period of strict fasting and spiritual seclusion to prepare the body for the coming trials of faith. On the main day of the festival, a massive wooden pole about 40 feet high is erected in the village common area. The most iconic ritual involves the Bhagtas being tied to this pole using hooks and ropes, often through the skin of their backs. They are then swung in high circles above the ground, a ritual known as 'Sky Dancing', meant to show total devotion. This act of bravery is believed to bring divine protection to the entire village and ensure a good monsoon for crops. Another significant ritual involves the 'Pahan' (priest) being carried by the Bhagtas over a path of thorns or glowing coals. The Pahan emerges from a holy dip in the local pond, and his feet must not touch the ground as he is carried. The atmosphere is electric, filled with the loud chanting of mantras and the frenetic beating of traditional drums and cymbals. Spectators from neighboring villages gather in large numbers to witness these feats of faith and spiritual power. In the evenings, the mood shifts from intense penance to artistic celebration with the performance of Chhau dance. These Chhau performances are known for their athletic leaps and gymnastic movements, depicting battles from Indian mythology. The dancers wear elaborate masks and costumes, turning the village square into a vibrant theatrical stage for the community. Bhagta Parab is a unique blend of Vedic-era asceticism and local folk traditions that have survived for many centuries. It highlights the 'warrior spirit' of the region, where faith is not just a mental state but a physical manifestation. Despite the intensity of the rituals, participants report a sense of spiritual ecstasy rather than physical pain. The festival serves as a powerful communal bond, bringing people of different castes and tribes together under one umbrella. It concludes with a grand feast where the Bhagtas break their long fast with special offerings made to Budha Baba. Bhagta Parab remains a testament to the raw, unfiltered religious energy that defines the cultural landscape of rural Jharkhand.",
    images: [bhagta1, bhagta2],
    source: "(src: Tamar district cultural archives, Jharkhand sangeet natak academy)",
  },
  {
    name: "Bandna (The Cattle Blessing Festival)",
    tagline:
      "",
    description:
      "Bandna is a popular festival celebrated during the month of Kartik, usually following the celebration of the Diwali lights. It is a celebration of the 'domestic world', specifically the animals that live and work alongside humans in the village. The festival is based on the belief that animals possess souls and that their happiness is essential for human prosperity. On the day of Bandna, the livestock are treated as honored guests of the household and pampered by all members. The cattle sheds are cleaned and decorated with rice paste drawings and fresh wild flowers from the forest. A special ritual involves the women of the house offering 'Arwa rice' and vermilion to the animals as a sign of respect. The cattle are garlanded and their bodies are sometimes painted with geometric symbols that represent the tribe’s history. A unique feature of Bandna is the singing of 'Ohira' songs, which are ballads that praise the strength and loyalty of animals. These songs are often sung at night by groups of men who move from house to house, accompanied by loud drums. The lyrics of the Ohira describe how the cattle labor in the sun and rain to provide food for the village family. The following day features a public celebration where the bulls are tied to decorated poles in the village center grounds. They are playfully incited with animal hides, leading to a display of raw energy that the villagers cheer with enthusiasm. This practice, known as 'Bail-Larai', is a symbolic recognition of the animal's untamed and powerful spirit. Unlike a rodeo, the goal is not to 'conquer' the animal but to celebrate its natural power and vital energy. Traditional snacks like 'Dhuska' and 'Chilka' are prepared and shared with neighbors and even fed to the animals. The festival reinforces the ethical duty of the farmer to care for their livestock with kindness and great dignity. It is a time for families to relax after the heavy labor of the harvest season and bond with their animals. Bandna serves as a vital reminder of the interconnectedness of all living beings in the complex tribal ecosystem. Despite the rise of mechanical farming, the spiritual importance of Bandna remains unchanged in the rural heartland. It is a humble yet profound celebration that elevates the status of the 'beast of burden' to that of a family member.",
    images: [bandna1, bandna2],
    source: "(src: Wikimedia commons, Jharkhand folk media)",
  },
  {
    name: "Hal Punhya (The First Ploughing Festival)",
    tagline: "",
    description:
      "Hal Punhya is a deeply significant agricultural festival celebrated on the first day of the month of Magh across the state. It marks the official end of the winter season and the beginning of the new agricultural year for the farmers. The festival is a 'Thanksgiving for Tools', where the farmer recognizes the sacredness of the earth and the instruments. In the early morning, before the sun rises, farmers take their ploughs and bullocks to their designated fields. They perform a ritual of ploughing exactly two and a half circles in the soil, which is considered a lucky number. This act is not for planting but is a symbolic gesture to 'awaken' the land from its long winter rest. No other field work is allowed on this day, as the earth is given a moment of spiritual respect and silence. The farmers worship their ploughs (Hal) by applying vermilion and offering incense to the iron blade and wood. This ritual reflects the belief that the tools of one's trade are a source of divine blessing and survival. Hal Punhya is seen as a day of 'limitless fortune', where any new project started on this day is believed to succeed. It is also a time for farmers to assess the condition of their soil and plan for the crops of the coming year. Traditional folk songs are sung that describe the hardships and the hopes of the farming life in the plateau. The atmosphere is quiet and meditative compared to the loud celebrations of Sarhul or the Karma festivals. Families gather to eat a simple meal made from the remains of the previous harvest and freshly ground grains. In some regions, the festival also marks a time for settling old debts and entering into new social contracts. It reinforces the agrarian values of discipline, preparation, and respect for the natural order of the seasons. Hal Punhya remains a 'silent pillar' of Jharkhand’s cultural calendar, ensuring the continuity of traditional practices. It serves as a reminder that every successful harvest begins with a single, respectful turn of the rich soil. For the Data Science student, this festival represents the 'initialization' of a biological system—the starting point. Despite modern technology, the first circle ploughed on Hal Punhya remains a sacred tradition for millions today.",
    images: [hal1, hal2, hal3],
    source: "(src: Ranchi municipal corporation gallery, Wikimedia commons, Jharkhand agrarian history portal)",
  },
  {
    name: "Rohini (The Sowing Festival)",
    tagline: "",
    description:
      "Rohini is historically recognized as the very first festival of the Jharkhandi calendar year for the local tribes. It marks the start of the seed-sowing season and occurs when the Rohini Nakshatra appears in the night sky. Unlike most other festivals in the state, Rohini is a 'working festival' that does not feature large dances. It is characterized by individual family rituals performed in the privacy of one’s own fields and homes. The primary ritual involves the farmer taking a handful of paddy seeds and sowing them into a prepared patch. This act is done with great reverence, seeking the blessings of the earth for a healthy germination process. It is believed that seeds sown on this specific day are protected from pests and will grow into resilient plants. While the day lacks the 'pomp and show' of Sarhul, it carries an intense spiritual weight as the foundation. Farmers often place branches of the 'Kendu' tree in their fields to ward off the 'evil eye' and protect sprouts. The festival marks a transition from the relaxation of summer to the intense labor of the monsoon season. It serves as a communal signal that the time for play has ended and the time for toil has officially begun. Traditional snacks made from rice and jaggery are often shared among family members to celebrate the sowing. Rohini is also a time for traditional weather forecasting, as the elderly observe the winds to predict the monsoon. It reinforces the tribe's identity as 'people of the soil' who live in sync with the movements of the stars. For the youth, it is a day to learn the technical skills of sowing and soil management from their elders. The simplicity of Rohini reflects the humility of the farmer, who knows they are assistants to nature. It is a festival of quiet hope, where the potential of the future is literally buried in the earth on this day. Even in urbanized areas, families often sow a few seeds in pots to maintain their link to this ancient tradition. Rohini remains the 'unspoken beginning' of Jharkhand's vibrant cultural and biological cycle of life.",
    images: [rohini1, rohini2],
    source: "(src: Jharkhand department of agriculture, Wikimedia commons)",
  },
  {
    name: "Jitia (Maternal Faith and Fasting)",
    tagline: "",
    description:
      "Jitia, or Jivitputrika Vrat, is a deeply emotional festival celebrated with great devotion by mothers for their children. Observed during the Hindu month of Ashwin, it is a three-day celebration involving one of the most difficult fasts. The festival is based on the legend of Prince Jimutavahana, who sacrificed his life to save a child from a predator. The first day, known as 'Nahay-Khay', involves a holy bath in a river followed by a vegetarian meal for the mother. On the second and main day, mothers observe a 'Nirjala' fast, meaning they do not consume even a drop of water. This period of intense physical sacrifice is believed to create a spiritual shield of protection around their children. Women gather in groups in the evenings to listen to the 'Jitia Katha', the stories of the goddess and sacrifices. They often sit around a small artificial pond or a clay idol of the deity, decorated with lamps and flowers. The atmosphere is one of profound sisterhood, as mothers from different families share their hopes and prayers. Many women decorate their hands with henna and wear their finest traditional jewelry for the sacred occasion. The fast is finally broken on the third day after a morning puja and the offering of grain to the gods. Special traditional foods like 'Madua Roti' and 'Non-Saag' are prepared to break the fast for the family. While primarily observed in the Bihar-influenced regions, it has become an integral part of Jharkhand's fabric. It highlights the central role of the mother as the spiritual and emotional anchor of the tribal family. The festival is a powerful display of the 'strength through sacrifice' that characterizes rural Indian women. It also serves as a social gathering where old stories and values are passed down to the younger generation. Jitia remains a vibrant celebration of the 'unconditional love' that sustains the social fabric of the entire region. Despite the difficulty of the fast, it is observed with a sense of joy and fulfillment by millions of women. It is a festival that celebrates life, longevity, and the enduring bond between mother and child in Jharkhand",
    images: [jitia1, jitia2],
    source: "(src: Patna news, Wikimedia commons)",
  },
];

const historicalPlaces = [
  {
    name: "Baidyanath temple",
    description:
      "It is a Hindu temple dedicated to Shiva. It is located in Deoghar, in the Santhal Parganas division of the Indian state of Jharkhand. The temple complex comprises the central shrine of Baba Baidyanath along with 21 additional temples. It is significant to the Hindu sects of Shaivism as this temple is referred to as one of the twelve Jyotirlingas.According to Shiv Mahapuran, once Brahma (the Hindu God of creation) and Vishnu (the Hindu God of preservation) had an argument in terms of supremacy of creation To test them, Shiva pierced the three worlds as a huge endless pillar of light, the Jyotirlinga. Vishnu and Brahma split their way downwards and upwards respectively to find the end of the light in either direction. Brahma lied that he found out the end, while Vishnu conceded his defeat. Shiva appeared as the second pillar of light and cursed Brahma, that he would have no place in ceremonies while Vishnu would be worshipped until the end of eternity. The jyotirlinga is the supreme partless reality, out of which Shiva partly appears. The jyotirlinga shrines, thus are places where Shiva appeared as a fiery column of light. The Matsya Purana called the place Arogya Baidyanathitee. This whole area of Deoghar was under the rule of the Kings of Gidhaur who were much attached with this temple. Raja Bir Vikram Singh founded this princely state in 1266. In 1757 after the Battle of Plassey the officers of the East India Company paid their attention to this temple. An English man, Keating was sent to look at the administration of the temple. Mr. Keating, the first English collector of Birbhum, took interest in the administration of the temple. In 1788, under Mr. Keating's order Mr. Hesilrigg, his assistant, who was probably the first English man to visit the holy city, set out to supervise personally the collection of the pilgrim offerings and dues. Later, when Mr. Keating himself visited Babadham, he was convinced and forced to abandon his policy of direct interference. He handed over the full control of the temple to the hands of the high priest. The Havan Kund temple of Baba dham opens only once a year, there is a special tradition associated with the Navratri festival.",
    images: [baidyanath1, baidyanath2],
    source: "(src: Deoghar District Administration, Official Portal of Baba Baidyanath Temple )",
  },
  {
    name: "konark Sun Temple, Ranchi",
    description:
      "Often described as a 'poem in stone,' this temple is designed like a giant chariot with 18 wheels and seven lifelike horses. It is located on the Tata-Ranchi Highway and is a masterpiece of modern architecture inspired by traditional Sun temples. Konark Sun Temple is a 13th-century CE Hindu Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India The temple is attributed to king Narasingha Deva I of the Eastern Ganga dynasty about 1250 CE.[3][4] Dedicated to the Hindu Sun-god Surya, it reflects the pinnacle of kalingan architecture and artistic excellence, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone. Once over 200 feet (61 m) high, much of the temple is now in ruins, in particular the large shikara tower over the sanctuary; at one time this rose much higher than the mandapa that remains. The structures and elements that have survived are famed for their intricate artwork, iconography, and themes, including erotic kama and mithuna scenes. Also called the Surya Devalaya, it is a classic illustration of the Odisha style of Architecture or Kalinga architecture. The cause of the destruction of the Konark temple is unclear and still remains a source of controversy. Theories range from natural damage to deliberate destruction of the temple in the course of being sacked several times by Muslim armies between the 15th and 17th centuries. This temple was called the 'Black Pagoda' in European sailor accounts as early as 1676 because it looked like a great tiered tower which appeared black. Similarly, the Jagannath Temple in Puri was called the 'White Pagoda'. Both temples served as important landmarks for sailors in the Bay of Bengal. The temple that exists today was partially restored by the conservation efforts of British India-era archaeological teams. Declared a UNESCO World Heritage Site in 1984, it remains a major pilgrimage site for Hindus, who gather here every year for the Chandrabhaga Mela around the month of February. Konark Sun Temple is depicted on the reverse side of the Indian currency note of 10 rupees to signify its importance to Indian cultural heritage.",
    images: [kon1,kon2,kon3],
    source: "(src: Archaeological survey of India,UNESCO World Heritage Centre,Wikipedia commons )",
  },
  {
    name: "Chinnamasta temple,rajrappa",
    description:
      "Situated at the confluence of the Damodar and Bhera rivers, this ancient temple is dedicated to Goddess Chinnamasta. It is a major Shakti Peeth and is known for its unique tantric architecture and spiritual importance.Chhinnamastika Temple is a Hindu temple, dedicated to Goddess Chinnamasta is a Hindu pilgrimage centre located in Rajrappa, in Ramgarh district of Jharkhand, India. The place attracts devotees from all parts of Jharkhand, and also from the neighbouring states of West Bengal and Bihar. The Chhinnamasta temple is popular for its Tantric style of architectural design. Apart from the main temple, there are ten temples of various deities such as the Surya, Hanuman and Shiva.It was this place where the Raja of Ramgarh Raj gave 3 acres of land to the people in the Bhudhan Movement in Jharkhand. Chhinnamasta  often spelled Chinnamasta and also called Chhinnamastika and Prachanda Chandika, is one of the Mahavidyas, ten Tantric goddesses and a ferocious aspect of Devi, the Hindu Divine Mother. Chhinnamasta can be easily identified by her fearsome iconography. The self-decapitated goddess holds her own severed head in one hand, a scimitar in another. Three jets of blood spurt out of her bleeding neck and are drunk by her severed head and two attendants. Chhinnamasta is usually depicted standing on a copulating couple. The temple is very old and is flocked by devotees from Bihar, Jharkhand, West Bengal, Assam and Nepal for worship of Goddess Chinnamastika. Vedic book Durga Saptashati also mentions the temple. The art and architectural design resembles the design of temples of Tantrik importance. The temple is considered as notable as the tantrik site of Kamakhya Temple of Assam which has a similar architecture. The temple is one of the 10 Mahavidhyas.The ancient temple of Goddess was destroyed and later a new temple was constructed and the original idol of Goddess was placed in it. Animal sacrifice is still practised in the temple. The sacrificial animals are killed on Tuesdays, Saturdays and during Kali puja.",
    images: [chinnamasta1, chinnamasta2, chinnamasta3],
    source: "(src: Ramgarh District Administration, Wikimedia Commons, Official Website of Jharkhand Tourism)",
  },
  {
    name: "Palamu Forts, Latehar",
    description:
      "These are two spectacular forts (the Old Fort and the New Fort) located deep within the Betla National Park. Built by the Chero kings in the 16th and 17th centuries, they represent the architectural prowess of the tribal dynasties of that era. The Palamu Fort are two ruined forts located 3 k.m from Betla National Park, Latehar district on the bank of Auranga River, in the Indian state of Jharkhand. The original fort in the plains and the other on an adjoining hill are attributed to the kings of the Chero dynasty. The fort in the plains had defences on three sides and three main gates. The New fort was constructed by Raja Medini Ray. East India company used this fort to prison Narayan Peshwa of Tiroha and Raja Harsh Dubey alias Subedar Aftab Singh, mutineers of 1857. The old fort in the plains, which existed even before the Chero dynasty, was built by the King of Raksel Dynasty. However, it was during the reign of King Medini Ray (also spelled Medini Rai), who ruled for thirteen years from 1658 to 1674 in Palamau. The old fort was rebuilt into a defensive structure. Ray was a Chero tribal king. His rule extended to areas in South Gaya and Hazaribagh. He attacked Doisa now known as Navratangarh (33 miles (53 km) from Ranchi) and defeated the Nagvanshi Raja Raghunath Shah. With war bounty he constructed the lower fort close to Satbarwa, and this fort became famous in the history of the district.The Mughals, during the reign of Emperor Akbar, under the command of Raja Man Singh, invaded in 1574, but subsequently his contingent at Palamau was defeated in 1605 following the death of Akbar. During the reign of Jahangir, the Subedar of Patna and Palamau tried to impose a tribute on the Raksel rulers which they refused to pay. This resulted in three attacks in series by the Mughals.",
    images: [palamu1, palamu2, palamu3],
    source: "(src: Latehar district administration, Wikimedia commons, Archaelogical survey of india)",
  },
  {
    name: "Angrabadi (Amreshwar Dham)",
    description:
      "Located near Khunti, this temple complex houses deities of Lord Shiva, Ram-Sita, and Hanuman. It is a serene spot that attracts large crowds during the Shivratri festival. Angrabari or Amreshwar Dham located near Khunti, Jharkhand, is a Hindu temple complex dedicated to the Hindu deity Shiva. The temple is built and maintained by Amreshvar Dham Prabandh Samiti. It was renamed as Amreshwar Dham by the Sage Shankaracharya Swami Swarupananda Saraswati. It is situated on the Khunti-Torpa road NH-20 approximately 45 km (28 mi) from Ranchi, the capital city of Jharkhand, and 9 km (5.6 mi) from the district headquarters. The temple site also houses several other Hindu deities including Ganesha, Rama, Sita and Hanuman. There is a large crowd of Shiva devotees here during the month of Sawan and on the day of Maha Shivaratri. Located in the quiet beauty of the surrounding area and the calm and serene environment of Angrabadi temple, the majestic temple complex of Khunti is a must-see attraction in the area. This location is located in a low hilly landscape at an average elevation of 1800 feet (615 metres) and covers an area of 183.89 square kilometres. . The temples present in this complex are one-of-a-kind and include Hindu deities such as Lord Shiva, Lord Ganesh, Ram-Sita, and Hanuman, among others. Ram-Sita is a one-of-a-kind location that is well worth visiting. If you are looking for spiritual development, this is an excellent place to attend. It is also a pleasure to observe. The temple is spread across an area of eight acres. Visitors are drawn to the complex by a temple in the shape of a minor. People visit this location to give their prayers and seek spiritual advancement. The Angrabadi temple is kept in the open air, with no roof provided for protection. It is reported that anytime it was attempted to construct a concrete roof for the temple, Lord Shiva appeared in a dream and asked the devotees to cease their efforts. As a result, the temple has been preserved over the years. In its current location, the shrine is under the shade of a banyan tree.",
    images: [angrabadi1, angrabadi2],
    source: "(src: Khunti district administration, Wikimedia commons)",
  },
  {
    name: "Navratangarh Fort (Gumla)",
    description:
      "Navratangarh (Doisagarh) was one of the capitals of the Nagvanshi dynasty, who ruled parts of what is now the state of Jharkhand, India. It is located in Sisai block of Gumla district. It is said that king Durjan Shah shifted his capital from Khukhragarh to Navratangarh. He constructed the fort between 1636 and 1639. The palace was a five-storeyed structure with its 'water-gate' and garh-khai (moat) arrangement. It has a kiaclmy (court), a treasury house and a prison-cell with its underground dungeon. It was declared national heritage in 2009. The Navratragarh fort is located in Sisai block of Gumla district. It is located in around 30 km from Gumla and 75 km from Ranchi. It is said that king Durjan Shah shifted his capital from Khukhragarh to Navratangarh. He constructed the fort between 1636 and 1639 CE. After his release from Mughal captivity, the Raja decided to build the fort. Navratangarh was in a strategic location as it was surrounded by forests, hills and rivers. King Ram Shah built Kapilnath Temple in 1643. He succeeded by Raghunath Shah. He also built several temples. Yadunath Shah shifted capital to Palkot due to Mughal invasion. This five-storey fort, though partially sunken today (with four levels visible), was a marvel of medieval engineering. Each floor featured nine rooms, and the premises include the Queen’s Palace, treasury, royal courtroom, and temples like the Jagannath and Durga Mandir. A special tunnel from the palace to the Queen’s bathing pond exemplifies the architectural finesse. The fort’s outer walls, guardrooms, and temple relics reflect Mughal and tribal design synergy. Today, it is recognized as a national heritage site by the Archaeological Survey of India (ASI) since 2009.",
    images: [gumla1, gumla2, gumla3],
    source: "(src: Gumla district administration, Wikimedia commons, Archaelogical survey of india)",
  },
  {
    name: "Maluti Terracotta Temples (Dumka)",
    description:
      "Maluti is a small village in the Dumka district that serves as an open-air museum of terracotta art. Originally, there were 108 temples, but only 72 survive today in various stages of preservation. These temples were built by the kings of the Pala dynasty in the 17th century. The temples are primarily dedicated to Lord Shiva and Goddess Mowlakshi. The architecture is influenced by the 'Chala' style of Bengal, characterized by sloping roofs. The walls are decorated with terracotta plaques depicting scenes from the Ramayana, Mahabharata, and local folk legends. The village was once a 'tax-free' kingdom, which allowed the royal family to focus entirely on spiritual and artistic pursuits. The craftsmanship on the burnt clay panels is incredibly detailed, showing warriors, musicians, and deities. Maluti was recently featured in the Republic Day parade, bringing it national attention. It is often compared to the temples of Bishnupur but has a distinct, more intimate local feel. The village layout itself is spiritual, with the temples grouped in clusters. It represents a high point in the medieval art of the Santhal Pargana region. Efforts are currently underway by the state government and the Global Heritage Fund to restore the crumbling structures. It remains a living heritage site where locals still offer daily prayers. History of these temples is directly linked to the gift of the kingdom of Maluti, then known as 'Nankar Raj' (meaning: tax-free kingdom), that was granted to a Brahmin named Basanta by the Muslim ruler Alauddin Husain Shah of Gaura (1495–1525) for having saved his hawk (Baj) and returning it to him. Consequently, Basanta was given the suffix Raja and called Raja Baj Basanta. As Basanta was a religious person, he preferred building temples instead of palaces. Subsequently, his family divided into four clans and they continued to build the temples in Maluti, their capital, in clusters, inspired by goddess Mowlakshi, their family deity The name Maluti is said to be derived from Mallahati, the Malla Kings of Bankura. The Indian Trust for Rural Heritage and Development (ITRHD), has dated the building of these temples between the 17th and 19th centuries. The Maluti temples were not known to the outside world until A.K.Sinha, Director of Archaeology, Government of Bihar, publicized them, for the first time in 1979.",
    images: [maluti1, maluti2],
    source: "(src: Dumka district administration, Global heritage fund)",
  },
  {
    name: "Benisagar (West Singhbhum)",
    description:
      "Benisagar, situated in the Majhgaon block of West Singhbhum, stands as a premier archaeological site of national importance, representing a continuous thread of history from the 5th to the 17th century. The site derives its name from a colossal ancient tank, approximately 300 by 340 meters in size, which local legends attribute to the legendary ruler Raja Benu, the son of the King of Kisanagarh. While the historical specifics of Raja Benu remain shrouded in myth, the physical evidence of his 'Sagar' (tank) remains a central feature of the landscape. Scientific excavations led by the Archaeological Survey of India (ASI) have transformed Benisagar into an open-air museum, revealing that it was once a thriving urban center and a major spiritual hub for Tantric Saivism. Architecturally, Benisagar is unique in Jharkhand for housing the only known examples of Panchayatana temple complexes, a style where a central shrine is flanked by four smaller ones. These structures, primarily built from sandstone and specialized bricks, display a transition from late Gupta to early medieval styles, reminiscent of the Orissan Rekha Deula type. The most significant archaeological find at the site is a stone seal inscribed with the Brahmi script in Sanskrit, mentioning a scholar named Priyangu who was well-versed in the four Vedas. This discovery, along with the presence of Mesolithic tools like blades and flakes made of chert and jasper, proves that the region was a sophisticated center of learning and trade long before modern history began. The sculptural wealth of Benisagar is equally staggering, featuring rare images like the Brahmasirochhedaka Bhairava, where Lord Shiva is depicted in a ferocious state holding Brahma's fifth head. Other significant recoveries include idols of Ganesha, Mahishasura Mardini, Agni, and Lakulisha, alongside panels depicting erotic scenes and river goddesses Yamuna and Ganga. The pluralistic nature of the site is evidenced by the overlap of Hindu, Jain, and Buddhist iconographic elements, suggesting it was a crossroads for diverse religious traditions. Today, Benisagar serves as a vital historical corridor that bridges the gap between the Gangetic plains and the coastal cultures of Odisha, offering tourists and researchers a rare, serene glimpse into the pre-medieval administrative and spiritual life of the Singhbhum region.",
    images: [benisagar1, benisagar2],
    source: "(src: Archaeological survey of India, West Singhbhum district administration)",
  },
  {
    name: "The Jagannath Temple of Ranchi",
    description:
      "The Jagannath Temple of Ranchi, standing majestically atop a hillock in the Dhurwa area, is a profound architectural and spiritual landmark founded in 1691 by Thakur Ani Nath Shahdeo. As a relative of the Nagvanshi rulers and the king of the Barkagarh estate, Shahdeo sought to bring the sacred energy of Puri to the Chota Nagpur plateau, resulting in this magnificent structure designed as a smaller replica of the world-famous Jagannath Temple in Odisha. Built with local stone and lime mortar, the temple follows the classic Kalinga 'Rekha Deula' style, featuring a towering white Shikhara that remains visible for miles across the Ranchi landscape. This elevation serves a dual purpose: it acts as a strategic vantage point overlooking the plateau and symbolizes a spiritual ascent, requiring devotees to climb a steep flight of stone stairs to reach the sanctum sanctorum. Inside the temple, the divine trinity of Lord Jagannath, Balabhadra, and Subhadra are housed as wooden idols carved from neem wood, strictly adhering to the traditions of the Puri temple including the periodic 'Nabakalebara' ritual. The temple has survived significant challenges over its three-century history, including a partial structural collapse in 1990 that led to a massive, community-driven restoration effort which successfully preserved its ancient charm while reinforcing its foundation. Beyond its physical structure, the temple serves as the epicenter of the annual Rath Yatra, the largest festival in Jharkhand. During this event, the deities are transported in massive wooden chariots to their 'Mausi Bari' (Aunt’s house) located a kilometer away, accompanied by a vibrant mela that draws hundreds of thousands of people from diverse tribal and non-tribal backgrounds. Culturally, the Jagannath Temple is a vital symbol of integration, bridging Vedic traditions with local Sarna tribal customs and providing a sense of shared identity for the people of Jharkhand. The surrounding greenery and the panoramic views of the modern Heavy Engineering Corporation (HEC) plant from the temple steps create a unique juxtaposition of Ranchi’s ancient heritage and its industrial progress. As a state-protected heritage site, it remains the spiritual heart of the capital, offering a tranquil retreat and a living museum of the region's royal and religious history.",
    images: [jagannath1, jagannath2],
    source: "(src: Ranchi district administration, Wikimedia commons)",
  },
  {
    name: "GIsko Roch Shelter",
    description:
      "Isko Rock Shelter, located in the Hazaribagh district of Jharkhand, is one of the most significant prehistoric archaeological sites in India, representing a window into the lives of human civilizations from the Meso-chalcolithic period. These rock shelters are famous for their stunning displays of 'Kohvar' or cave art, which features intricate designs, animal figures, and geometric patterns painted with natural mineral pigments like hematite and ochre. Unlike modern structures, Isko is a 'natural monument' where the ancient inhabitants used the cave walls as a canvas to document their spiritual beliefs and daily experiences thousands of years ago. The discovery of these shelters has provided concrete evidence that the Chota Nagpur plateau was a thriving cradle of early human culture, long before the establishment of formal kingdoms or recorded history. The art found at Isko is remarkably sophisticated, featuring depictions of deer, bulls, birds, and complex solar symbols that suggest an advanced understanding of the natural world and seasonal cycles. Interestingly, the artistic style found in these caves is still echoed today in the traditional 'Kohvar' and 'Sohrai' wall paintings practiced by tribal women in the villages of Hazaribagh during weddings and harvest festivals. This creates a rare 'living link' between prehistoric humanity and modern tribal traditions, making the site an essential study point for anthropologists and historians worldwide. The natural iron ore found in the region’s soil provided the vibrant red and orange hues that have remained visible for millennia, resisting the erosion of time and weather. Geographically, the Isko rock shelters are situated in a rugged, forested terrain that offered natural protection and a steady supply of resources to early hunter-gatherers. The caves are part of a larger network of megalithic sites in the Hazaribagh region, which include stone circles and ancient burial grounds that point to a deeply rooted spiritual connection with the land. While the site is tucked away from the main urban centers, it has gained international recognition as a site of immense cultural value. The local communities often view these shelters with a sense of sacredness, believing them to be the dwellings of ancient spirits, a belief that has inadvertently helped in the preservation of the art. Despite its importance, Isko remains a site that requires careful conservation to protect its delicate paintings from the elements and human interference. It stands as a silent witness to the dawn of creativity in the Indian subcontinent, proving that the ancestors of Jharkhand’s tribal communities possessed a rich symbolic language and a deep appreciation for the aesthetic. For researchers, Isko is not just a collection of drawings; it is a complex data set that reveals the migration patterns, social structures, and environmental adaptations of our prehistoric ancestors. As a cornerstone of Jharkhand's heritage, the Isko Rock Shelter invites us to look back at the very beginning of the human story on the plateau.",
    images: [isko1, isko2],
    source: "(src: Hazaribagh district administration, wikimedia commons)",
  },
];

const facts = [
  "Jharkhand is the undisputed leader of India’s mineral wealth, holding roughly 40% of the country’s total mineral resources. It ranks first in the production of coal and mica, and contains the only producer of prime coking coal in India.",
  "Ranchi, the capital, is uniquely nicknamed the 'City of Waterfalls' due to the sheer number of falls surrounding it, such as Hundru, Dassam, Johna, and Panchghagh. These falls are created by the rugged edges of the Chota Nagpur Plateau, where rivers drop sharply into the plains.",
  "Jamshedpur (Tatanagar) was the first planned industrial city in India, founded by Jamsetji Tata. It is home to Tata Steel, the first private iron and steel plant in India, which began production in 1912.",
  "In the Isko Caves of Hazaribagh, there are prehistoric rock paintings dating back to the Meso-Chalcolithic period (9,000–5,000 BC). These paintings feature abstract geometrical designs and animal figures, showing that the region has been a center of human creativity for nearly 10,000 years.",
  "Itkhori in Chatra district is one of the few places in the world sacred to three religions simultaneously: Hinduism, Buddhism, and Jainism. It houses the 9th-century Bhadrakali Temple, Buddhist stupas dating back to 200 BC, and is the birthplace of the 10th Jain Tirthankara, Lord Sheetalnath.",
  "Netarhat is a stunning hill station known for its spectacular sunrises and sunsets. It is famous for the Netarhat Residential School, one of the most prestigious schools in India, which has produced a record number of IAS and IPS officers over the decades.",
  "Parasnath Hill (Sammed Shikharji) is the highest peak in Jharkhand (1,365 meters). It is the most sacred pilgrimage site for Jains globally because it is believed that 20 out of the 24 Jain Tirthankaras attained Moksha (salvation) here.",
  "Jharkhand’s cuisine features a rare forest mushroom called Rugra, which grows under the soil near Sal trees during the monsoon. It is a prized tribal delicacy known for its meat-like texture and high nutritional value, found almost nowhere else in India.",
  "Every year during the month of Shravan, Deoghar (Baidyanath Dham) hosts a month-long mela. Devotees carry holy water from the Ganges at Sultanganj and walk 108 km barefoot to offer it to Lord Shiva, making it one of the longest unceasing religious processions in the world.",
  "The Rajmahal Hills in the Sahibganj district are of great geological importance because they contain plant fossils dating back to the Jurassic era (around 150-200 million years ago). These hills were formed by volcanic activity when India was still part of the Gondwana supercontinent.",
];

const artGallery = [
  {
    title: "Ranchi Capital City",
    emoji: "🏙️",
    color: "#78A8D4",
    desc: "Capital city of Jharkhand, famous for waterfalls, tribal culture, and scenic beauty",
    image: gRanchiCapital,
  },
  {
    title: "Dassam Falls",
    emoji: "🌊",
    color: "#4AC8E8",
    desc: "A spectacular cascade formed by the Kanchi River dropping sharply over the Chota Nagpur Plateau",
    image: gDassamFalls,
  },
  {
    title: "Jamshedpur Jubilee Park",
    emoji: "🌳",
    color: "#58B478",
    desc: "Beautiful green space in India's first planned industrial city, inspired by Mysore's Brindavan Gardens",
    image: gJubileePark,
  },
  {
    title: "Rugra Mushroom Curry",
    emoji: "🍄",
    color: "#A87858",
    desc: "A prized, rare forest mushroom delicacy growing under Sal trees with a meat-like texture",
    image: gRugraCurry,
  },
  {
    title: "Rajmahal Hills Fossils",
    emoji: "🐚",
    color: "#A89C88",
    desc: "Geological heritage site containing rare plant fossils dating back 150-200 million years to the Jurassic era",
    image: gRajmahalFossils,
  },
  {
    title: "Dhuska",
    emoji: "🥞",
    color: "#F4C84A",
    desc: "A beloved deep-fried traditional snack made from rice and chana dal batter, served with spicy potato curry",
    image: gDhuska,
  },
  {
    title: "Thekua",
    emoji: "🍪",
    color: "#D4883A",
    desc: "A sweet traditional snack made from wheat flour and jaggery, prepared especially during festivals",
    image: gThekua,
  },
  {
    title: "Chhau Dance",
    emoji: "🎭",
    color: "#E84A4A",
    desc: "A traditional semi-classical masked folk dance famous for its martial art movements and mythological storytelling",
    image: gChhauDance,
  },
  {
    title: "Jhumar Dance",
    emoji: "💃",
    color: "#E888A8",
    desc: "A graceful tribal group dance performed during community festivals and harvest celebrations",
    image: gJhumarDance,
  },
  {
    title: "Sohrai and Tribal Art",
    emoji: "🖼️",
    color: "#C88858",
    desc: "Globally admired traditional framed tribal art and wall designs utilizing natural elements",
    image: gSohraiTribalArt,
  },
  {
    title: "Hundru Falls",
    emoji: "🏞️",
    color: "#64A8D4",
    desc: "One of the highest and most beautiful waterfalls in Jharkhand, formed by the Subarnarekha River over granite rock formations",
    image: gHundruFalls,
  },
  {
    title: "Asian Elephant",
    emoji: "🐘",
    color: "#78889C",
    desc: "The iconic, majestic state animal found in the dense, deep wild forests of Jharkhand",
    image: gAsianElephant,
  },
  {
    title: "Indian Bison (Gaur)",
    emoji: "🐂",
    color: "#4A4A4A",
    desc: "The largest wild cattle species known for its massive body, great strength, and presence in Betla National Park",
    image: gIndianBison,
  }
];