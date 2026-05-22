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
import mahaMap from "@assets/maharashtraMap.jpg";

// Festivals
const gudi1 = "https://i.postimg.cc/Xv4MTVv8/image.png";
const gudi2 = "https://i.postimg.cc/rmZv0xNm/image.png";
const ganesh1 = "https://i.postimg.cc/GtB6ktXg/image.png";
const ganesh2 = "https://i.postimg.cc/QCRwSDPZ/image.png";
const ganesh3 = "https://i.postimg.cc/1RTky0tx/image.png";
const nag1 = "https://i.postimg.cc/pLM3F2z3/image.png";
const nag2 = "https://i.postimg.cc/GpcNXqMQ/image.png";
const makar1 = "https://i.postimg.cc/vDF2fzgt/image.png";
const makar2 = "https://i.postimg.cc/Z5Z4hP70/image.png";
const ashadi1 = "https://i.postimg.cc/pLZxV941/image.png";
const ashadi2 = "https://i.postimg.cc/PqVjZgtm/image.png";
const mangala1 = "https://i.postimg.cc/sXtCH5GV/image.png";
const mangala2 = "https://i.postimg.cc/021qpdq0/image.png";
const pola1 = "https://i.postimg.cc/0QKLSrWC/image.png";
const pola2 = "https://i.postimg.cc/FHF8ZTCy/image.png";
const shivaji1 = "https://i.postimg.cc/cJgD92RT/image.png";
const shivaji2 = "https://i.postimg.cc/W1tSzCfS/image.png";
const janmashtami1 = "https://i.postimg.cc/cHcfXBbX/image.png";
const janmashtami2 = "https://i.postimg.cc/J0nHKVXF/image.png";
const gauri1 = "https://i.postimg.cc/3R3t8NM4/image.png";
const gauri2 = "https://i.postimg.cc/76Xmf4Dc/image.png";

// Monuments / Historical Places
const gateway1 = "https://i.postimg.cc/6q3zZPpL/image.png";
const gateway2 = "https://i.postimg.cc/tRSBb9Bx/image.png";
const ajanta1 = "https://i.postimg.cc/xTXtTBZ5/image.png";
const ajanta2 = "https://i.postimg.cc/ZKXj9Vk1/image.png";
const sindhu1 = "https://i.postimg.cc/3Jz9yn5G/image.png";
const sindhu2 = "https://i.postimg.cc/t4PkFWpF/image.png";
const shaniwar1 = "https://i.postimg.cc/R0LTDm3h/image.png";
const shaniwar2 = "https://i.postimg.cc/QtNqLz5f/image.png";
const csmt1 = "https://i.postimg.cc/prpYrnsy/image.png";
const csmt2 = "https://i.postimg.cc/nVPG50Lj/image.png";
const chand1 = "https://i.postimg.cc/02K0qDMq/image.png";
const chand2 = "https://i.postimg.cc/rw6Cysxs/image.png";
const pf1 = "https://i.postimg.cc/RZc1WmLg/image.png";
const pf2 = "https://i.postimg.cc/tgp3PcBc/image.png";
const rai1 = "https://i.postimg.cc/3w1gZZ6w/image.png";
const rai2 = "https://i.postimg.cc/nL2v115d/image.png";
const aga1 = "https://i.postimg.cc/zBPKsGqK/image.png";
const aga2 = "https://i.postimg.cc/NGSRbFNH/image.png";
const bibi1 = "https://i.postimg.cc/pLtzb7M5/image.png";
const bibi2 = "https://i.postimg.cc/4xTVkMRP/image.png";

// Art Gallery — Crafts
const gWarliPainting = "https://i.postimg.cc/L8BfHTHF/image.png";
const gPaithaniSaree = "https://i.postimg.cc/43fcn9dG/image.png";
const gBidriware = "https://i.postimg.cc/KY0MT8k3/image.png";
const gKolhapuriChappal = "https://i.postimg.cc/3wtvGx46/image.png";
const gMiniaturePainting = "https://i.postimg.cc/QtPK6Yqx/image.png";
const gDhokraCraft = "https://i.postimg.cc/NLv9tySK/image.png";

// Art Gallery — Cuisines
const gVadaPav = "https://i.postimg.cc/htq3jcdR/image.png";
const gMaharashtrianThali = "https://i.postimg.cc/HLYZwzz2/image.png";
const gPuranPoli = "https://i.postimg.cc/wv3wPBSL/image.png";
const gMisalPav = "https://i.postimg.cc/bJMmjhPz/image.png";
const gKothimbirVadi = "https://i.postimg.cc/9X6L8C1w/image.png";
const gBakharwadi = "https://i.postimg.cc/htgpnskm/image.png";
const gPithlaBhakri = "https://i.postimg.cc/Xv18wbpd/image.png";
const gThaaliPeeth = "https://i.postimg.cc/Hxf9h90d/image.png";
const gAluVadi = "https://i.postimg.cc/dQyBTgvY/image.png";
const gVaranBhaat = "https://i.postimg.cc/TYvcjQ3v/image.png";

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
export default function MaharashtraPage() {
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
                West India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Maharashtra
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Marathas
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Mumbai" },
                  { label: "Population", value: "11.24 Crore" },
                  { label: "Area", value: "3,07,713 sq km" },
                  { label: "Founded", value: "1 May 1960" },
                  { label: "Language", value: "Marathi, Hindi" },
                  { label: "Districts", value: "36 Districts" },
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
              Mumbai
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Maharashtra — The City of Dreams
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Maharashtra" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(mahaMap, "Map of Maharashtra")}
            >
              <img
                src={mahaMap}
                alt="Map of Maharashtra"
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
              Maharashtra is a state in the western peninsular region of India
              occupying a substantial portion of the Deccan Plateau. It is
              bordered by the Arabian Sea to the west, the Indian states of
              Karnataka and Goa to the south, Telangana to the southeast and
              Chhattisgarh to the east, Gujarat and Madhya Pradesh to the north,
              and the Indian union territory of Dadra and Nagar Haveli and Daman
              and Diu to the northwest. Maharashtra is the second-most populous
              state in India, the third-most populous country subdivision in
              South Asia, and the fourth-most populous in the world.
            </p>
            <p className="text-foreground">
              The region that encompasses the modern state has a history going
              back many millennia. Notable dynasties that ruled the region
              include the Asmakas, the Mauryas, the Satavahanas, the Western
              Satraps, the Abhiras, the Vakatakas, the Chalukyas, the
              Rashtrakutas, the Western Chalukyas, the Seuna Yadavas, the
              Khaljis, the Tughlaqs, the Bahamanis and the Mughals. In the early
              19th century, the region was divided between the Dominions of the
              Peshwa in the Maratha Confederacy and the Nizamate of Hyderabad.
            </p>
            <p className="text-foreground">
              Early in the 19th century, the British East India Company defeated
              the Marathas and brought most of present-day Maharashtra under its
              control, both directly and indirectly through many princely
              states. After 1858, the British crown assumed control of the area
              from the company. During the periods of Company and British rule,
              the region was divided between the Bombay Presidency, the Central
              Provinces, Berar, and many princely states including Hyderabad.
            </p>
            <p className="text-foreground">
              After Indian independence in 1947, the Bombay Presidency became
              Bombay State in the Indian Union. Between 1950 and 1956, Berar,
              the Deccan states and the Gujarat states were annexed into Bombay
              State. Aspirations of a separate state for Marathi-speaking
              peoples were pursued by the United Maharashtra Movement; their
              advocacy eventually borne fruit on 1 May 1960, when the State of
              Bombay was bifurcated into the modern states of Maharashtra and
              Gujarat.
            </p>
            <p className="text-foreground">
              Maharashtra is one of the most industrialised states in India. The
              state's capital, Mumbai, is India's financial and commercial
              capital. The Bombay Stock Exchange, India's largest stock exchange
              and the oldest in Asia, is located in the city, as is the National
              Stock Exchange, which is the second-largest stock exchange in
              India and one of world's largest derivatives exchanges.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              The state has played a significant role in the country's social
              and political life and is widely considered a leader in terms of
              agricultural and industrial production, trade and transport, and
              education.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Maharashtra, mapsofindia.com)
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
        <Section title="Facts about Maharashtra" icon="💡">
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
            Scroll horizontally to explore Maharashtra's iconic foods, crafts,
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
    name: "Gudi Padwa",
    tagline: "",
    description:
      "Gudi Padwa is the traditional New Year celebration of the people of Maharashtra, observed on the first day of the Hindu lunar month of Chaitra, which typically falls in March or April. It is one of the most sacred and joyous festivals in the Maharashtrian cultural calendar, marking the beginning of a new year according to the lunisolar Hindu calendar. The word 'Gudi' refers to a ceremonial flag or emblem, and 'Padwa' comes from the Sanskrit word 'Pratipada', meaning the first day of the lunar fortnight. Together, they symbolize a day of new beginnings, hope, and divine blessings. The festival is celebrated with immense enthusiasm not only in Maharashtra but also among Maharashtrian communities settled across India and the world. The historical and mythological significance of Gudi Padwa is deep and multifaceted. One of the most popular beliefs is that the day commemorates the victories and conquests of the great Maratha king Chhatrapati Shivaji Maharaj, who is revered as a symbol of Maharashtrian pride and valor. Another tradition links the festival to the return of Lord Rama to Ayodhya after fourteen years of exile and his triumphant defeat of the demon king Ravana, with people hoisting the Gudi to celebrate that joy. According to Hindu cosmology, Lord Brahma, the creator of the universe, is said to have begun the creation of the world on this very day, which is why it is considered one of the most auspicious moments in the entire Hindu calendar. Some accounts also associate the day with the beginning of the Shalivahana Shaka calendar, attributed to the legendary king Shalivahana who is said to have defeated powerful enemies and established a new era of prosperity. A Gudi is carefully prepared by attaching a bright, colorful silk cloth — most commonly in shades of green, yellow, or saffron — along with a fragrant garland of marigold or other flowers, a bunch of fresh neem leaves, and a string of sugar crystals called 'gathi' or 'sakhar' onto a long bamboo pole. At the very top of the pole, a gleaming copper or silver kalash (pot) is placed upside down. This entire assembly is then raised high at the entrance of the home, near a window, or on a terrace, where it is visible to all passersby. The Gudi is considered a symbol of victory, auspiciousness, and divine protection. It is believed to drive away evil spirits, bring good luck, and invite prosperity and health into the household throughout the coming year.",
    images: [gudi1, gudi2],
    source: "",
  },
  {
    name: "Ganesh Chaturthi",
    tagline: "",
    description:
      "Ganesh Chaturthi is undoubtedly the most grand, deeply beloved, and emotionally charged festival of Maharashtra, celebrated with an intensity and devotion that is unparalleled anywhere else in the country. For ten glorious days, the entire state transforms into a living, breathing celebration, with millions of homes, streets, and public spaces reverberating with devotion, music, art, and an infectious spirit of togetherness. The festival marks the birthday of Lord Ganesha — the elephant-headed deity who is revered as the remover of obstacles, the lord of new beginnings, and the god of wisdom and intellect. While the worship of Lord Ganesha has been a part of Hindu tradition for centuries, it was the great freedom fighter and social reformer Lokmanya Bal Gangadhar Tilak who transformed it into a large-scale community celebration in 1893. Recognizing the power of collective gatherings at a time when the British colonial government had banned public assembly, Tilak used Ganesh Chaturthi as a platform to unite people across social divides, inspire nationalist sentiment, and foster a sense of shared purpose and identity. He encouraged the installation of large public Ganesha idols in community spaces called pandals, turning the private household puja into a grand public event. Traditionally, idols were made from Shadu clay, which is natural, eco-friendly, and dissolves easily in water. In recent years, there has been a growing and commendable movement to return to these eco-friendly clay idols, driven by environmental awareness and the desire to protect the rivers and lakes into which the idols are eventually immersed. The idols are painted in vivid colors and decorated with great artistry, with each craftsman pouring months of labor and devotion into every detail of the deity's form, expression, and ornamentation. The deity is offered modak — the crescent-shaped sweet dumpling made of rice flour and filled with coconut and jaggery — which is considered Ganesha's favorite food and is therefore the most iconic culinary offering of the festival. Some of the most famous Ganesh Mandals in Mumbai — such as the Lalbaugcha Raja, Ganesh Galli Mumbaichacha Raja, Andhericha Raja, and GSB Seva Mandal — draw millions of devotees from across the country and even from abroad. ",
    images: [ganesh1, ganesh2, ganesh3],
    source: "",
  },
  {
    name: "Nag Panchami",
    tagline: "",
    description:
      "Observed on the fifth day — Panchami — of the bright fortnight of the Hindu lunar month of Shravana, which typically falls in July or August, the festival is dedicated to the worship of snakes, particularly the cobra, which holds an extraordinarily sacred place in Hindu mythology and culture. In Maharashtra, Nag Panchami is not simply a day of ritual observance — it is a living expression of the ancient relationship between human beings and nature, a celebration of reverence for the creatures that have been intertwined with Hindu cosmology, agriculture, and village life since time immemorial. The festival is observed with great sincerity and devotion across both urban and rural parts of Maharashtra, though it is in the villages and small towns that its traditional character is most vividly and authentically preserved. The mythological roots of Nag Panchami run deep and wide across several strands of Hindu scripture and legend. In the Mahabharata, the story of King Janmejaya's serpent sacrifice and the intervention of the sage Astika, who saved the serpents from annihilation, is directly associated with this festival — it is said that the serpents were saved on the day of Panchami in the month of Shravana, and that Nag Panchami is observed in memory of this divine deliverance. Another powerful mythological association connects the festival to Lord Krishna, who on this day is said to have defeated and subdued the fearsome serpent Kaliya, who had been poisoning the waters of the Yamuna river, thereby protecting the people of Vrindavan. One of the most distinctive and well-known practices of Nag Panchami, particularly in Maharashtra, is the offering of milk to live cobras. Snake charmers, known as Garudi in the local tradition, travel from village to village and town to town in the days leading up to and on the day of Nag Panchami, carrying cobras in baskets. The worship of snakes on Nag Panchami is therefore also an expression of gratitude from farming communities toward these creatures for their role in protecting the fields and ensuring a good harvest.",
    images: [nag1, nag2],
    source: "",
  },
  {
    name: "Makar Sankranti",
    tagline: "",
    description:
      "Unlike most Hindu festivals, which are determined by the lunar calendar, Makar Sankranti is a solar festival — it is fixed to the solar calendar and marks the precise moment when the sun transitions from the zodiac sign of Sagittarius, known as Dhanu, into the sign of Capricorn, known as Makara, beginning its northward journey across the sky in a phase called Uttarayana. This celestial event typically falls on the fourteenth of January every year, making it one of the few Hindu festivals with a largely fixed date in the Gregorian calendar. The northward movement of the sun, known as Uttarayan, is considered deeply auspicious in Hindu thought — it is associated with light conquering darkness, warmth returning to the world, and the divine favor of the sun god Surya blessing the earth with renewed energy and abundance. In Maharashtra, Makar Sankranti has a character and flavor that is distinctly its own, shaped by the state's particular cultural traditions, its agricultural rhythms, and the warm and generous spirit of its people. The most iconic and universally recognized symbol of Makar Sankranti in Maharashtra is til-gul — a preparation made of sesame seeds and jaggery that is at the very heart of the festival's social and symbolic meaning.These sweets are prepared in every household in the days leading up to Sankranti and are exchanged between friends, neighbors, relatives, and even strangers on the day of the festival with a greeting that has become one of the most beloved phrases in the Maharashtrian cultural vocabulary — 'Tilgul ghya, god god bola', which translates beautifully as 'Eat til-gul, and speak sweetly'. This simple, profound greeting encapsulates the entire philosophy of the festival — that sweetness should not remain confined to the mouth but should flow outward into every word, every relationship, and every interaction. It is an invitation to let go of bitterness, to soften the edges of old conflicts, and to approach the new year — the new solar year — with a heart full of kindness and goodwill",
    images: [makar1, makar2],
    source: "(src: boldskytamil.com)",
  },
  {
    name: "Ashadi Ekadashi",
    tagline: "",
    description:
      "Ashadhi Ekadashi is one of the most significant and deeply revered religious festivals in Maharashtra, marking the eleventh lunar day of the bright fortnight in the Hindu month of Ashadha (typically June or July). It celebrates Lord Vitthal (a beloved form of Lord Vishnu worshipped in the state) and coincides with the beginning of Chaturmas, the four sacred monsoon months when the deity is believed to enter a period of cosmic sleep. The absolute highlight of this day is the culmination of the Pandharpur Wari, an incredible 800-year-old pilgrimage. For about 21 days leading up to the festival, millions of devotees—known as Warkaris—walk hundreds of kilometers barefoot from various parts of Maharashtra to the holy town of Pandharpur. Moving in organized groups called dindis, they carry palkhis (palanquins) holding the sacred footprints of revered saint-poets like Sant Dnyaneshwar and Sant Tukaram. The entire journey is a vibrant, deeply spiritual display of communal harmony, filled with fasting, dancing, and the ecstatic chanting of devotional poetry (abhangas). Upon reaching Pandharpur, pilgrims take a ritual dip in the holy Chandrabhaga River and queue patiently for hours to catch a glimpse of Lord Vitthal, turning the day into a massive, colorful celebration of collective faith and cultural unity.",
    images: [ashadi1, ashadi2],
    source: "",
  },
  {
    name: "Mangala Gauri",
    tagline: "",
    description:
      "In Maharashtra, Mangala Gauri is a deeply cherished ritual celebrated by newly married women on every Tuesday of the holy Hindu month of Shravan (typically July or August) for the first five years of their marriage. The festival holds immense significance as it is dedicated to Goddess Gauri (Parvati), the epitome of marital bliss, and is observed to seek her blessings for a long, healthy life for the husband, domestic prosperity, and a happy married life. The celebration begins in the morning with a ritualistic puja where the bride installs and beautifully dresses an idol of Goddess Gauri, offering sixteen types of leaves, flowers, and a special naivedya (food offering). However, the true essence of Mangala Gauri unfolds at night during an all-female gathering. Women stay awake until dawn, engaging in a vibrant and energetic display of traditional Maharashtrian folk games, songs, and dances. These include rhythmic games like Fugdi, Zimma, Kombda (rooster dance), and the enactments of traditional kitchen chores or humorous skits. It serves as a beautiful cultural platform that blends intense religious devotion with joyful feminine bonding, giving newly wedded brides a warm, supportive space to celebrate their new phase of life with friends and family.",
    images: [mangala1, mangala2],
    source: "",
  },
  {
    name: "Bail Pola",
    tagline: "",
    description:
      "Bail Pola is a deeply heartfelt thanksgiving festival celebrated across Maharashtra, particularly in rural and farming communities, to express immense gratitude towards bulls and oxen for their indispensable role in agriculture. Falling on the new moon day (Pithori Amavasya) of the holy month of Shravan (usually in August), this unique festival honors the livestock that pull the plows and carts, driving the farmers' livelihood. On this day, the animals are given a well-deserved day of rest and are pampered like royalty; farmers wash them in local rivers, paint their horns in vibrant colors, drape them in embroidered shawls (zhul), and decorate them with flower garlands and bells. The celebration culminates in a grand evening village procession where the beautifully groomed bulls are led through the streets amidst beating dhol-tasha drums and cheering crowds. After the parade, women perform a ritualistic arati to bless the animals, and they are fed a special feast of Puran Poli (sweet lentil flatbread) before any humans eat, beautifully highlighting the deep, sacred bond between the Maharashtrian farmer and nature.",
    images: [pola1, pola2],
    source: "",
  },
  {
    name: "Shivaji Jayanti",
    tagline: "",
    description:
      "Shivaji Jayanti, celebrated with immense pride and fervor on February 19th, marks the birth anniversary of Chhatrapati Shivaji Maharaj, the legendary founder of the Maratha Empire. The festival holds unparalleled cultural and emotional significance in Maharashtra, as it honors a visionary ruler revered not just for his military genius and guerrilla warfare tactics, but for his progressive governance, religious tolerance, and foundational concept of Hindavi Swarajya (self-rule). The celebration is a grand, high-energy spectacle across the state, characterized by massive public processions featuring saffron flags, traditional Lezim dance performances, and the thunderous beats of dhol-tasha drums. Cities and historical forts are beautifully illuminated, and people gather around statues of the warrior king to offer floral tributes and chant 'Jai Bhavani, Jai Shivaji'. The day is further enriched by theatrical plays, speeches, and the spirited singing of Powadas (traditional heroic ballads) that recount his legendary exploits, transforming the occasion into a powerful, collective reminder of courage, justice, and regional identity.",
    images: [shivaji1, shivaji2],
    source: "",
  },
  {
    name: "Krishna Janmashtami",
    tagline: "",
    description:
      "Janmashtami in Maharashtra, broadly known alongside its high-octane second-day counterpart Dahi Handi, holds immense spiritual and cultural significance as it celebrates the birth of Lord Krishna, embodying the triumph of playfulness, community, and divine grace over evil. While the first day is marked by quiet devotion, midnight temple prayers, fasting, and the preparation of Gopalkala (a traditional dish made of beaten rice, curd, and cucumber), the second day transforms the state into a thrilling, high-energy spectacle. Inspired by Krishna’s legendary childhood antics of stealing butter, teams of young enthusiasts called Govindas travel across cities to form staggering, multi-tiered human pyramids. The entire neighborhood gathers to watch these brave participants balance precariously on each other's shoulders, braving jets of water sprayed by spectators, to reach and smash an earthen pot filled with curd and milk hung high between buildings. This spectacular tradition, accompanied by the thunderous beats of dhol-tasha drums and chants of 'Govinda Ala Re!', elevates Janmashtami from a religious ritual into a massive, competitive sport that showcases spectacular teamwork, physical grit, and an unparalleled spirit of collective joy.",
    images: [janmashtami1, janmashtami2],
    source: "",
  },
  {
    name: "Gauri-Ganpati",
    tagline: "",
    description:
      "Gauri-Ganpati, also widely revered as the Jyeshtha Gauri festival, is a deeply emotional three-day celebration nestled within the larger Ganesh Chaturthi festival in Maharashtra. It carries immense cultural significance, symbolizing the arrival of Goddess Gauri (often worshipped as Lord Ganesha's mother or as the twin Mahalakshmi deities) to her maher (maternal home) to visit her son. The festival is celebrated with intense devotion and exquisite artistry; households welcome the Goddess—represented by beautifully sculpted masks or brass idols—by draping them in rich traditional Nauvari (nine-yard) sarees, adorning them with gold jewelry, and placing them lovingly next to Ganesha on an intricately decorated altar. The first day marks her welcoming (Avahan), followed by the primary day of worship (Pujan), where an elaborate multi-course vegetarian feast called Naivedya, featuring traditional sweets, savory snacks, and local delicacies layered carefully on a banana leaf, is offered to the deity. On the final day (Visarjan), women of the household perform a tearful yet hopeful farewell ritual, singing traditional songs and praying for health, domestic prosperity, and marital bliss before the idols are immersed, beautifully blending familial warmth with deep spiritual reverence.",
    images: [gauri1, gauri2],
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "The Gateway of India",
    description:
      "The Gateway of India stands as Mumbai’s most iconic and deeply significant historical landmark. Located at the tip of Apollo Bunder, it directly overlooks the vast and bustling Arabian Sea. The monument was built to commemorate the grand visit of King George V and Queen Mary in 1911. Designed by British architect George Wittet, it was officially opened to the public in 1924. Its striking architecture showcases a beautiful Indo-Saracenic style, blending Hindu and Muslim design elements. The structure is built from locally quarried yellow basalt and features an imposing 85-foot-tall arch. Historically, it served as the majestic ceremonial entry point into India for British viceroys and governors. In a twist of historical irony, it also marked the absolute end of the British empire in India. On February 28, 1948, the final contingent of British troops marched through its arch to board ships home. Today, the monumental archway serves as the vibrant, beating heart of Mumbai’s tourism industry. Its sprawling waterfront plaza is always crowded with street vendors, photographers, and visitors. It also acts as the primary jetty for boats traveling to the famous, ancient Elephanta Caves. Facing the historic Taj Mahal Palace hotel, it creates one of India's most recognizable skylines. Ultimately, it remains a proud symbol of Mumbai's rich colonial past and its dynamic modern spirit.",
    images: [gateway1, gateway2],
    source: "",
  },
  {
    name: "Ajanta & Ellora Caves",
    description:
      "The Ajanta and Ellora Caves in Maharashtra are twin UNESCO World Heritage sites that represent the absolute pinnacle of ancient Indian rock-cut architecture, artistry, and engineering. Though frequently grouped together, they are located 100 kilometers apart and belong to completely different eras.The Ajanta Caves consist of 30 rock-cut Buddhist monuments carved into a steep, horseshoe-shaped river gorge between the 2nd century BCE and 6th century CE. Serving as ancient monasteries and prayer halls, Ajanta is globally celebrated for its remarkably preserved fresco-style wall paintings. Using natural mineral pigments, ancient master artists beautifully illustrated the Jataka Tales (previous lives of the Buddha) and courtly life. The serene expressions of the iconic Bodhisattvas Padmapani and Vajrapani in Cave 1 represent the true golden age of classical Indian art.In contrast, the Ellora Caves stretch along a linear basalt cliff and were carved later, between the 6th and 10th centuries CE. Ellora is a magnificent testament to ancient India's religious harmony, housing 34 public caves divided sequentially among three major faiths: Buddhism, Hinduism, and Jainism. Rather than paintings, Ellora is defined by its monumental, high-relief stone sculptures.The undisputed crown jewel of Ellora is the Kailash Temple (Cave 16), the world's largest monolithic rock-cut structure. Dedicated to Lord Shiva, this multi-story temple complex was miraculously carved top-down from a single mountain face, requiring the removal of over 200,000 tons of solid basalt using only hammers and chisels—a staggering feat of ancient engineering.",
    images: [ajanta1, ajanta2],
    source: "",
  },
  {
    name: "Sindhudurg Fort",
    description:
      "Sindhudurg Fort is a magnificent fortress built on a rocky island off the coast of Malvan in Maharashtra's Konkan region. Constructed between 1664 and 1667 by the visionary Maratha warrior king, Chhatrapati Shivaji Maharaj, it stands as a brilliant masterpiece of ancient military engineering. The fort's primary objective was to counter the rising maritime influence of foreign colonial powers like the British, Portuguese, and the Siddis of Janjira, serving as a powerful naval base for the emerging Maratha navy.Spanning across 48 acres, the fort is enclosed by massive, 3-kilometer-long ramparts that rise nearly 30 feet high. To withstand the relentless pounding of the Arabian Sea's waves, its foundations were reinforced by pouring over 4,000 mounds of molten lead into the stones—a revolutionary engineering feat for its time. A major tactical design feature is its hidden main entrance (Dilli Darwaza), which is completely invisible from the sea to confuse invading enemy ships.Inside the fortified walls lie three sweet-water wells, a remarkable anomaly given that the fort is entirely surrounded by saltwater. It also houses the rare Shivrajeshwar Temple, the only temple in the world dedicated to Chhatrapati Shivaji Maharaj, featuring an idol that depicts him as a seafaring deity. Accessible today only via a scenic ferry ride from the Malvan jetty, Sindhudurg Fort remains a proud, resilient symbol of Maharashtra's glorious maritime heritage and architectural ingenuity.",
    images: [sindhu1, sindhu2],
    source: "",
  },
  {
    name: "Shaniwar Wada",
    description:
      "Shaniwar Wada is a magnificent historical fortification in the heart of Pune, Maharashtra, that once served as the seat of the Peshwas—the hereditary prime ministers of the Maratha Empire. Constructed in 1732 by Peshwa Baji Rao I, this legendary seven-story palace complex was the epicenter of Maratha politics during the 18th century, a time when the empire's influence expanded across most of the Indian subcontinent.Architecturally, Shaniwar Wada reflects a beautiful synthesis of Maratha craftsmanship and military design. It is securely enclosed by massive stone ramparts and features five grand gateways. The most famous of these is the Dilli Darwaza (Delhi Gate), an imposing entrance fitted with formidable steel spikes to deter charging enemy elephants. Within the walls, the complex was once renowned for its exquisite wooden pillars, beautifully manicured gardens, and the striking Hazari Karanje (Lotus Fountain), an engineering marvel featuring a thousand individual jets.Tragedy struck the palace in 1828 when a mysterious and devastating fire raged for seven days, destroying the lavish wooden upper structures and leaving behind only the solid stone foundations and heavy outer walls. Beyond its architectural legacy, the fort is deeply tied to history and folklore, most notably the tragic assassination of the young Peshwa Narayanrao, which has fueled local legends that the ruins are haunted. Today, Shaniwar Wada stands as a protected national monument, captivating visitors with its grand historical aura and its popular evening light-and-sound show.",
    images: [shaniwar1, shaniwar2],
    source: "",
  },
  {
    name: "Chhatrapati Shivaji Maharaj Terminus",
    description:
      "Chhatrapati Shivaji Maharaj Terminus (CSMT), located in Mumbai, is a breathtaking UNESCO World Heritage site and an architectural masterpiece that serves as one of India's busiest railway stations. Designed by British architect Frederick William Stevens and completed in 1888 after a decade of construction, the building was initially named Victoria Terminus to honor the Silver Jubilee of Queen Victoria. In 1996, it was renamed to honor the legendary 17th-century Maratha warrior king, Chhatrapati Shivaji Maharaj, reflecting India's proud regional identity.Architecturally, CSMT is a sublime fusion of Victorian Gothic Revival style and traditional Indian palace architecture. Built using a combination of local yellow sandstone and limestone, it features a grand central dome topped by a colossal figure of the 'Progress' goddess. The facade is a masterclass in detail, adorned with stone arches, towering spires, gargoyles, and intricate relief carvings of local flora and fauna, alongside stone medallions portraying British and Indian motifs. Inside, the station boasts grand vaulted ceilings, sweeping wrought-iron railings, and stained-glass windows.Beyond its artistic grandeur, CSMT is the vital beating heart of Mumbai's transportation network. Serving as the headquarters of the Central Railway, it acts as the final destination for both long-distance trains and the city’s massive suburban local train network. Every single day, more than three million commuters surge through its historic gates, turning this magnificent 19th-century monument into a living, breathing symbol of Mumbai's relentless energy, resilience, and dynamic spirit.",
    images: [csmt1, csmt2],
    source: "",
  },
  {
    name: "Chand Minar",
    description:
      "The Chand Minar (Tower of the Moon) is a breathtaking medieval minaret located inside the historic Daulatabad Fort near Chhatrapati Sambhajinagar (Aurangabad) in Maharashtra. Built in 1445 by Sultan Ala-ud-din Bahmani to celebrate his capture of the fort, this striking tower stands at an impressive height of approximately 210 feet, making it one of the tallest stone minarets in India, second only to the Qutub Minar in Delhi. Beyond its role as a victory monument, it also functioned as a defensive watchtower, offering an expansive view of the surrounding landscape to guard against advancing enemy forces.Architecturally, the Chand Minar is a masterful specimen of early Indo-Islamic and Persian engineering. The soaring, circular tower is divided into four distinct stories, separated by beautifully sculpted, projecting balconies that rest on decorative stone brackets. It is built using local basalt stone and was originally coated in a brilliant layer of Persian turquoise-blue glazed tiles, though much of this colorful plaster has faded over centuries, exposing its rustic, red-ochre undertones. At its base sits a small, elegant mosque adorned with intricate stone carvings.A unique design element is its tapered silhouette and an internal spiral staircase of 24 steps that winds through the core of the monument. Today, the Chand Minar stands as a protected national monument under the Archaeological Survey of India. Rising dramatically against the backdrop of the rugged Deccan hills, it remains an enduring symbol of the architectural grandeur and complex geopolitical history of medieval Maharashtra.",
    images: [chand1, chand2],
    source: "",
  },
  {
    name: "Pratapgad Fort",
    description:
      "Pratapgad Fort, literally meaning 'Valour Fort', is a massive hill fortress situated in the Satara district of Maharashtra. Perched at an elevation of over 3,500 feet in the rugged Western Ghats, the fort was commissioned by the visionary Maratha ruler Chhatrapati Shivaji Maharaj and completed in 1656 by his prime minister, Moropant Trimbak Pingle. The strategic objective behind building Pratapgad was to command and protect the vital trade routes passing through the dense Javli forest valleys, effectively securing the Maratha kingdom’s western borders.Historically, Pratapgad is etched into folklore as the legendary staging ground for the Battle of Pratapgad in 1659. It was here that Shivaji Maharaj met the formidable and towering Bijapuri general, Afzal Khan, under the guise of a peaceful truce. Anticipating treachery, Shivaji Maharaj wore hidden chain mail and used Bagh Nakh (tiger claws) to overpower and slay Khan when the general attempted to stab him during an embrace. This historic victory was a massive turning point, demonstrating Maratha military brilliance and establishing their dominance in the region.Architecturally, the fort is divided into two parts: the lower fort and the upper fort. It features sprawling stone ramparts, watchtowers, a famous temple dedicated to Goddess Bhavani, and a majestic, full-sized bronze statue of Chhatrapati Shivaji Maharaj unveiled in 1957. Surrounded by deep mist-covered cliffs and dense green canopies, Pratapgad Fort stands today as an enduring pilgrimage of Maratha history and a popular trekking destination near the hill station of Mahabaleshwar.",
    images: [pf1, pf2],
    source: "",
  },
  {
    name: "Raigad Fort",
    description:
      "Raigad Fort is a majestic hill fortress situated in the Mahad region of Raigad district, Maharashtra. Perched at an altitude of 2,700 feet in the Sahyadri mountain range, it holds a deeply revered place in Indian history as the capital of the Maratha Empire. Initially known as Rairi, the fort was captured by Chhatrapati Shivaji Maharaj in 1656 from the Chandrarao More clan. Recognizing its highly strategic and virtually impregnable location surrounded by deep valleys, Shivaji Maharaj completely remodeled the fort under the supervision of master architect Hiroji Indulkar, officially making it his royal capital in 1674.The fort is historically significant as the holy ground where Chhatrapati Shivaji Maharaj was crowned as the Chhatrapati (Supreme Sovereign) on June 6, 1674, establishing Hindavi Swarajya. Architecturally, it is an engineering marvel accessible via a steep climb of nearly 1,450 steps or a modern ropeway. Key highlights include the massive Maha Darwaza, the royal court (Raj Sabha) designed with perfect acoustics, and the Takmak Tok, a sheer 1,200-foot cliff historically used for executing criminals. It also houses the ruins of the grand marketplace and the Jagadishwar Temple.Most importantly, Raigad Fort serves as the final resting place of the great king, housing the solemn Samadhi of Chhatrapati Shivaji Maharaj. Though later captured and heavily damaged by the British East India Company in 1818, the sprawling stone ruins remain an enduring pilgrimage site, symbolizing Maratha courage, administrative genius, and the spirit of independence.",
    images: [rai1, rai2],
    source: "",
  },
  {
    name: "Aga khan Palace",
    description:
      "Aga Khan Palace is an architectural marvel and a monument of profound historical significance located in Pune, Maharashtra. Built in 1892 by Sultan Muhammed Shah Aga Khan III, the palace was constructed as an act of charity to provide employment to thousands of local villagers hard-hit by a devastating, prolonged famine in the surrounding region. Sprawling across 19 acres of beautifully manicured lawns and thick Italian arches, the estate reflects elegant European and Islamic design sensibilities, complete with grand corridors, sweeping stone verandas, and majestic fountains.Beyond its physical beauty, the palace serves as a solemn sanctuary of India’s freedom struggle. Following the launch of the intense Quit India Movement in August 1942, British colonial authorities imprisoned Mahatma Gandhi, his wife Kasturba Gandhi, and Gandhi's personal secretary, Mahadev Desai, within these walls for nearly two years. Tragically, both Kasturba Gandhi and Mahadev Desai passed away during their captivity here. Their final resting places—beautiful marble samadhis built by architect Charles Correa—sit peacefully within the palace’s quiet, shaded gardens.In 1969, Aga Khan IV generously donated the entire palace complex to the Indian people as a tribute to Mahatma Gandhi and his message of non-violence. Today, managed by the Gandhi National Memorial Society, it houses a rich museum displaying rare photographs, personal belongings, and touching artifacts from the freedom fighters' lives. Recognized as a monument of national importance, Aga Khan Palace remains an enduring symbol of compassion, resilience, and India's long journey toward independence.",
    images: [aga1, aga2],
    source: "",
  },
  {
    name: "Bibi-ka-Maqbara",
    description:
      "Bibi Ka Maqbara is a beautiful 17th-century Mughal mausoleum located in Chhatrapati Sambhajinagar (formerly Aurangabad), Maharashtra. Commissioned in 1660 by Prince Azam Shah, the son of Mughal Emperor Aurangzeb, it was built as a loving tribute to his mother, Dilras Banu Begum (posthumously known as Rabia-ud-Daurani). Because its design was explicitly inspired by the world-famous Taj Mahal in Agra, it is widely and affectionately known as the 'Taj of the Deccan'.Architecturally, the monument showcases the classic Mughal Charbagh formal garden layout, divided neatly by water channels, fountains, and stone pathways. The tomb rests elegantly on a raised square platform, flanked at its four corners by towering, 90-foot-tall minarets. It was designed by the chief architect Ataullah, who happened to be the son of Ustad Ahmad Lahori—the principal designer of the actual Taj Mahal.While it beautifully mirrors the proportions and silhouette of its Agra counterpart, there is a key material difference. Due to Aurangzeb’s strict budgetary constraints, the monument was not constructed entirely of pure marble. Instead, only the main central dome, the inner tomb chamber, and the delicate screen walls are carved from white marble. The main superstructure and minarets are built using local basalt stone covered in polished stucco plaster, creating a marble-like finish. Rising gracefully against the backdrop of the rugged Sihachal mountain ranges, Bibi Ka Maqbara stands as a protected national monument and an iconic symbol of Mughal architectural influence in Southern India.",
    images: [bibi1, bibi2],
    source: "",
  },
];

const facts = [
  "The economy of Maharashtra is the largest in India, with a gross state domestic product (GSDP) of ₹42.5 trillion (US$450 billion) and GSDP per capita of ₹335,247 (US$3,500)",
  "It is the single-largest contributor to India's economy, being accountable for 14% of all-India nominal GDP.",
  "The service sector dominates the state's economy, accounting for 69.3% of the value of the output of the country.",
  "Although agriculture accounts for 12% of the state GDP, it employs nearly half the population of the state.",
  "The state is home to seven UNESCO World Heritage Sites: Ajanta Caves, Ellora Caves, Elephanta Caves, Chhatrapati Shivaji Terminus (formerly Victoria Terminus), the Victorian Gothic and Art Deco Ensembles of Mumbai, the Maratha Military Landscapes of India (shared with Tamil Nadu) and the Western Ghats, a heritage site made up of 39 individual properties, of which four are located in Maharashtra.",
  "Maharashtra is the ninth-highest ranking among Indian states in the human development index.",
  "Out of the 12 sacred Jyotirlingas (shrines dedicated to Lord Shiva) across India, Maharashtra proudly houses five, which is the highest number in any single state, namely -Trimbakeshwar, Bhimashankar, Grishneshwar, Aundha Nagnath Temple, Parli Vaijnath",
  "The state houses The Ashtavinayak which is a highly celebrated pilgrimage circuit connecting eight distinct, self-manifested (Swayambhu) temples of Lord Ganesha scattered across Pune, Ahmednagar, and Raigad districts. They are namely - Moreshwar, Siddhivinayak, Ballaleshwar, Varadavinayak, Chintamani, Girijatmaj, Vigneshwar, Mahaganapati (Ranjangaon)",
  "Shree Siddhivinayak Temple which is one of the richest and most frequently visited temples in India is located in Mumbai. Dedicated to Lord Ganesha, this multi-story modern monument features a small sanctum with gold-plated inner walls, drawing everyone from daily commuters to global celebrities and politicians seeking blessings.",
  "The Shirdi Sai Baba Temple & Kolhapur Mahalakshmi Temple are also located in Maharashtra.",
  "The state is home to over 450 forts.",
  "Over 114.2 million people reside in Maharashtra. Out of which approximately 18.41 million stay in Mumbai.",
  "Vidarbha region has many nature reserve parks.",
  "With 18 national highways, Maharashtra boasts India’s greatest network of highways.",
  "The popular folk dances of Maharashtra include Lavani, Tamasha, Gafa and Mauni.",
  "Maharashtra is home to over 1200 caves like Ajanta, Ellora, Elephant and more.",
];

const artGallery = [
  {
    title: "Warli Painting",
    emoji: "🎨",
    color: "#8D6E63",
    desc: "Ancient tribal art from the Warli people of Maharashtra using geometric shapes to depict nature and daily life",
    image: gWarliPainting,
  },
  {
    title: "Paithani Saree",
    emoji: "🧣",
    color: "#6A1B9A",
    desc: "Handwoven silk saree with zari borders and peacock motifs, a treasured bridal heirloom of Maharashtra",
    image: gPaithaniSaree,
  },
  {
    title: "Bidriware",
    emoji: "🏺",
    color: "#37474F",
    desc: "Intricate metalcraft of black alloy inlaid with silver, originating from Bidar with strong Maharashtra traditions",
    image: gBidriware,
  },
  {
    title: "Kolhapuri Chappal",
    emoji: "👡",
    color: "#BF360C",
    desc: "Handcrafted flat leather sandal from Kolhapur, known for its durability and distinctive geometric cutwork design",
    image: gKolhapuriChappal,
  },
  {
    title: "Miniature Paintings",
    emoji: "🖼️",
    color: "#1565C0",
    desc: "Delicate miniature paintings from Nashik depicting mythological scenes with fine brushwork and vivid natural dyes",
    image: gMiniaturePainting,
  },
  {
    title: "Dhokra & Tribal Craft",
    emoji: "🔔",
    color: "#E65100",
    desc: "Lost-wax cast tribal metal figurines made by Gondi artisans, one of India's oldest non-ferrous metal crafts",
    image: gDhokraCraft,
  },
  {
    title: "Vada Pav",
    emoji: "🍔",
    color: "#F9A825",
    desc: "Mumbai's beloved street food — spiced potato fritter in a bread bun served with green and tamarind chutneys",
    image: gVadaPav,
  },
  {
    title: "Maharashtrian Thali",
    emoji: "🍽️",
    color: "#2E7D32",
    desc: "A wholesome platter of dal, bhakri, sabzi, rice, pickle, and papad representing the full flavors of Maharashtra",
    image: gMaharashtrianThali,
  },
  {
    title: "Puran Poli",
    emoji: "🫓",
    color: "#F57F17",
    desc: "Sweet flatbread stuffed with jaggery and chana dal filling, a festive staple made during Holi and Diwali",
    image: gPuranPoli,
  },
  {
    title: "Misal Pav",
    emoji: "🌶️",
    color: "#C62828",
    desc: "Spicy sprouted moth bean curry topped with farsan and onions, served with pav — a Pune breakfast classic",
    image: gMisalPav,
  },
  {
    title: "Kothimbir Vadi",
    emoji: "🌿",
    color: "#558B2F",
    desc: "Crispy fried fritters made from fresh coriander and besan batter, a beloved Maharashtrian tea-time snack",
    image: gKothimbirVadi,
  },
  {
    title: "Bakharwadi",
    emoji: "🥐",
    color: "#AD6F3B",
    desc: "Crunchy spiral snack from Pune filled with coconut, sesame, and spiced stuffing — a signature Chitale Bandhu treat",
    image: gBakharwadi,
  },
  {
    title: "Pithla Bhakri",
    emoji: "🫔",
    color: "#6D4C41",
    desc: "Rustic besan curry served with thick jowar or bajra flatbread — a simple and hearty rural Maharashtrian meal",
    image: gPithlaBhakri,
  },
  {
    title: "Thalipeeth",
    emoji: "🥞",
    color: "#4E342E",
    desc: "Multi-grain savory pancake made with bhajani flour, onions, and spices — a nutritious Maharashtrian breakfast",
    image: gThaaliPeeth,
  },
  {
    title: "Alu Vadi",
    emoji: "🌀",
    color: "#00695C",
    desc: "Steamed and pan-fried colocasia leaf rolls filled with tangy besan paste — a beloved Maharashtrian appetizer",
    image: gAluVadi,
  },
  {
    title: "Varan Bhaat",
    emoji: "🍚",
    color: "#1565C0",
    desc: "Simple and soul-warming toor dal with steamed rice drizzled with ghee — the comfort food heart of Maharashtra",
    image: gVaranBhaat,
  },
];
