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
const mpMap = "https://i.postimg.cc/DznhWmZN/image.png";
const khajuraho1 = "https://i.postimg.cc/523xfYKp/image.png";
const khajuraho2 = "https://i.postimg.cc/PxyHjPXQ/image.png";
const tansen1 = "https://i.postimg.cc/MKw2XZQ0/image.png";
const tansen2 = "https://i.postimg.cc/MKw2XZQ0/image.png";
const bhagoria1 = "https://i.postimg.cc/Gp8Sq6Dj/image.png";
const lokrang1 = "https://i.postimg.cc/W3cSSzTT/image.png";
const kumbhmela1 = "https://i.postimg.cc/MZDtbz4J/image.png";
const mandufest1 = "https://i.postimg.cc/zGLjrKfm/image.png";
const orchha1 = "https://i.postimg.cc/zBkwjkxH/image.png";
const pachmarhi1 = "https://i.postimg.cc/pVqY5qhp/image.png";
const chethiyagiri1 = "https://i.postimg.cc/R05cxY88/image.png";
const malwautsav1 = "https://i.postimg.cc/J02k6YZR/image.png";
const khajurahotemple1 = "https://i.postimg.cc/xj7t86bQ/image.png";
const khajurahotemple2 = "https://i.postimg.cc/85cmPvp1/image.png";
const khajurahotemple3 = "https://i.postimg.cc/prnQKt56/image.png";
const sanchi1 = "https://i.postimg.cc/PJ9CzpnJ/image.png";
const sanchi2 = "https://i.postimg.cc/43Pn2FTn/image.png";
const sanchi3 = "https://i.postimg.cc/XJXNHj8t/image.png";
const bhimbetka1 = "https://i.postimg.cc/RFj3wJBh/image.png";
const bhimbetka2 = "https://i.postimg.cc/pVzrgTv3/image.png";
const bhimbetka3 = "https://i.postimg.cc/J7Pv73R0/image.png";
const gwalior1 = "https://i.postimg.cc/j5kHmjrN/image.png";
const gwalior2 = "https://i.postimg.cc/SjbMb2TH/image.png";
const gwalior3 = "https://i.postimg.cc/5yC7br18/image.png";
const jahaz1 = "https://i.postimg.cc/XJTLHgF7/image.png";
const jahaz2 = "https://i.postimg.cc/6QqhBPft/image.png";
const jahaz3 = "https://i.postimg.cc/Px8zw87g/image.png";
const ujjain1 = "https://i.postimg.cc/qqssmH45/image.png";
const ujjain2 = "https://i.postimg.cc/ZKLPpmfq/image.png";
const omkareshwar1 = "https://i.postimg.cc/wxXDYHYV/image.png";
const omkareshwar2 = "https://i.postimg.cc/858fxXyH/image.png";
const asirgarh1 = "https://i.postimg.cc/hjqh2zvQ/image.png";
const asirgarh2 = "https://i.postimg.cc/hjr4M2N3/image.png";
const asirgarh3 = "https://i.postimg.cc/sfLCyFP5/image.png";
const jahangir1 = "https://i.postimg.cc/6qZXgzmC/image.png";
const jahangir2 = "https://i.postimg.cc/CK599mZs/image.png";
const rajwada1 = "https://i.postimg.cc/5tQnwGQb/image.png";
const rajwada2 = "https://i.postimg.cc/HLM9JyFd/image.png";
const khamba1 = "https://i.postimg.cc/hGVV4qQw/image.png";
const khamba2 = "https://i.postimg.cc/wjmmFd2v/image.png";
const badal1 = "https://i.postimg.cc/hPHJX5nc/image.png";
const badal2 = "https://i.postimg.cc/XJpGGSrw/image.png";
const badal3 = "https://i.postimg.cc/YSyjwnbV/image.png";
const sarafa1 = "https://i.postimg.cc/VkWD4MDV/image.png";
const sarafa2 = "https://i.postimg.cc/1XDpXhdj/image.png";
const sarafa3 = "https://i.postimg.cc/28mWGtMY/image.png";
const chappan1 = "https://i.postimg.cc/6QGTtVgZ/image.png";
const chappan2 = "https://i.postimg.cc/0yzy0d8H/image.png";
const chappan3 = "https://i.postimg.cc/tTNq4B53/image.png";
const chappan4 = "https://i.postimg.cc/MKT6zbjQ/image.png";
const gRajwada = "https://i.postimg.cc/vZ2XpMw8/image.png";
const gLalbagh = "https://i.postimg.cc/MZtBs5ST/image.png";
const gChappan = "https://i.postimg.cc/fbjyVWWN/image.png";
const gTaj = "https://i.postimg.cc/d0qvS2Fx/image.png";
const gBhojtal = "https://i.postimg.cc/jSqtM6tm/image.png";
const gPoha = "https://i.postimg.cc/pd4vVgz8/image.png";
const gDalbafla = "https://i.postimg.cc/X74bvKG8/image.png";
const gBhuttakees = "https://i.postimg.cc/nrx6CZLy/image.png";
const gBedaghat = "https://i.postimg.cc/QCSnCTwp/image.png";
const gDhuandhar = "https://i.postimg.cc/pX6qSRH2/image.png";
const gMatki = "https://i.postimg.cc/yxW0h3Wp/image.png";
const gBedaghatrocks = "https://i.postimg.cc/8crjPRj2/image.png";
const gBengaltiger = "https://i.postimg.cc/J0bH53Ms/image.png";
const gBarasingha = "https://i.postimg.cc/Y9QC5pVn/image.png";
const gDahibade = "https://i.postimg.cc/RZcRPfVn/image.png";
const gCholetikiya = "https://i.postimg.cc/Y9yf4z8T/image.png";
const gGaraadu = "https://i.postimg.cc/0jTYn5TM/image.png";
const gGajarhalwa = "https://i.postimg.cc/VspWm4Js/image.png";


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
export default function MadhyaPradeshPage() {
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
                Central India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Madhya Pradesh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Heart of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Bhopal" },
                  { label: "Population", value: "7.26 Crore" },
                  { label: "Area", value: "3,08,252 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                  { label: "Language", value: "Hindi, Bundeli, Malwi" },
                  { label: "Districts", value: "55 Districts" },
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
              Bhopal
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Madhya Pradesh — City of Lakes
            </p>
          </div>
        </Section>

        {/* Map of Madhya Pradesh — click to enlarge */}
        <Section title="Map of Madhya Pradesh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(mpMap, "Map of Madhya Pradesh")}
            >
              <img
                src={mpMap}
                alt="Map of Madhya Pradesh"
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
              Known as the "Heart of India," Madhya Pradesh was formed in its modern version on November 1, 1956, by merging the former states of Madhya Bharat, Vindhya Pradesh, and Bhopal. Its history spans from the prehistoric rock paintings of Bhimbetka to the reign of the Chandela kings who built the Khajuraho temples. Hindi is the primary language spoken across the state. It remained the largest state in India by area until 2000. The region has transitioned from a collection of princely states to a major hub for diamonds, forest reserves, and diverse tribal cultures.
            </p>
            <p className="text-foreground">
              Madhya Pradesh acts as a geographical and cultural bridge between North and South India. From the meticulously planned stupas of Sanchi to the complex urban management of Indore today, MP is a blend of antiquity and modernization. The state's landscape is defined by the Narmada River, the Satpura and Vindhya mountain ranges, and dense teak forests that inspired literary classics. Whether it is the spiritual energy of Ujjain or the architectural precision of Gwalior, every corner of this state tells a story of resilience and artistic brilliance.
            </p>
            <p className="text-foreground">
              The area covered by the present-day Madhya Pradesh includes the area of the ancient Avanti Mahajanapada, whose capital Ujjain (also known as Avantika) arose as a major city during the second wave of Indian urbanisation in the sixth century BCE. Subsequently, the region was ruled by the major dynasties of India. The Maratha Empire dominated the majority of the 18th century.
            </p>
            <p className="text-foreground">
              After the Third Anglo-Maratha War in the 19th century, the region was divided into several princely states under the British and incorporated into Central Provinces and Berar and the Central India Agency. After India's independence, the Central Provinces and Berar was renamed as Madhya Pradesh with Nagpur as its capital, this state included the southern parts of the present-day Madhya Pradesh and northeastern portion of today's Maharashtra while Central India Agency was renamed as Madhya Bharat which includes parts of present day north western Madhya Pradesh became a separate state with Gwalior as its capital and Jiwajirao Scindia as Rajpramukh (Governor). 
            </p>
            <p className="text-foreground">
             In 1956, these states were reorganised and its parts were combined with the states of Vindhya Pradesh and Bhopal to form the new Madhya Pradesh state, the Marathi-speaking Vidarbha region was removed and merged with the Bombay State. This state was the largest in India by area until 2000, when its southeastern Chhattisgarh region was designated a separate state.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is regarded as the "Heart of Incredible India" due to its central geographical location. It is also widely known as the "Tiger State of India" because it boasts the highest tiger population in the country, with 785 tigers recorded in the 2022 census..
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of MP, mapsofindia.com)
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
        <Section title="Facts about Madhya Pradesh" icon="💡">
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
            Scroll horizontally to explore Madhya Pradesh's iconic foods, crafts,
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
    name: "Khajuraho Dance Festival",
    tagline: "Mainly celebrated in Chattarpur district",
    description:
      "This world-renowned festival takes place every February against the stunning backdrop of the illuminated Khajuraho temples. It is a week-long celebration of Indian classical dance forms like Kathak, Bharatanatyam, Odissi, and Kuchipudi. Top dancers from across the country perform in an open-air auditorium to honor the temple’s architectural beauty. For someone like you who enjoys dancing, it is the ultimate destination to see 'Art in Motion.' The atmosphere is filled with the sound of ghungroos and traditional music, creating a magical experience. It truly bridges the gap between ancient stone carvings and living traditions. Visitors can also explore the Hunar craft bazaar, an initiative that supports local artisans by showcasing indigenous pottery, metalwork, and hand-woven textiles from the Bundelkhand region. The festival has expanded its repertoire over the years to include rarer dance forms like Mohiniyattam and Gaudiya Nritya, ensuring a diverse representation of India’s rhythmic heritage. To engage the audience further, the Lay Shala sessions offer a rare opportunity for students and enthusiasts to interact directly with master performers in a workshop setting. Additionally, the Natraja exhibition focuses specifically on the cosmic iconography of Lord Shiva, bridging the spiritual significance of the temples with the physical beauty of the performances. Finally, the experience is rounded out by the Swaad food festival, which allows guests to sample authentic regional delicacies, making the week-long celebration a complete immersion into the heart of Indian culture.",
    images: [khajuraho1, khajuraho2],
    source: "(src: Wikipedia, Safari Plus)",
  },
  {
    name: "Tansen Music Festival ",
    tagline:
      "Mainly celebrated in Gwalior",
    description:
      "As a fan of singing, the Tansen Samaroh is a festival you shouldn't miss. Held annually in December near the tomb of the legendary musician Tansen, it is one of India's oldest and most prestigious music festivals. For four days, the city of Gwalior resonates with the soul-stirring melodies of Hindustani classical vocalists and instrumentalists. Musicians from all over the world gather here to pay tribute to the 'Music Maestro' of Akbar's court. The festival also features the prestigious 'Tansen Samman' award given to legendary artists. It is a perfect place to experience the 'Gwalior Gharana' style of music in its purest form. It is organized by the Academy of Culture under the Department of Culture, ensuring that only the highest caliber of Dhrupad and Hindustani classical vocalists and instrumentalists are invited. A unique tradition of the festival is the Tansen Samman, a national-level award conferred upon great exponents of Indian classical music during the event. The festival begins with a traditional 'Harikatha' and 'Milad', symbolizing the communal harmony that Tansen himself represented through his music. To accommodate the growing global audience, the stage is often designed as a replica of historic Gwalior landmarks, such as the Man Singh Palace or local temples. Beyond the music, the event serves as a pilgrimage for students of the Gwalior Gharana, who gather to pay homage to the 'Sangeet Samrat'. The morning and evening sessions are timed according to specific 'Ragas' meant to be performed at those hours, aligning the music with the natural rhythm of the day.",
    images: [tansen1, tansen2],
    source: "(src: wikipedia)",
  },
  {
    name: "Bhagoria Haat Festival ",
    tagline:
      "Celebrated in West MP.",
    description:
      "Bhagoria is a vibrant tribal festival celebrated by the Bhil and Bhilala tribes just before the Holi festival. It is primarily held in districts like Jhabua and Alirajpur and serves as a grand fair (Haat) for social bonding and match-making. Young men and women dress in their most colorful traditional attire and perform energetic folk dances to the beat of massive drums. A unique custom involves the 'Paan' (betel leaf) ceremony, which is a traditional way of expressing mutual affection. The festival is a riot of colors, traditional silver jewelry, and joyous tribal music. It marks the end of the harvest season and the beginning of spring celebrations. Primarily celebrated by the Bhil and Bhilala tribes, the Bhagoria Haat is a vibrant pre-Holi carnival that acts as a massive cultural fair and a traditional matchmaking ground. The festival is famous for its unique 'Gulal' tradition, where young men and women express interest in one another by applying red powder on each other's faces. It is held in various local markets, or 'Haat, across districts like Jhabua and West Nimar, turning the entire region into a kaleidoscope of traditional silver jewelry and colorful attire. Music plays a central role, featuring the deep, rhythmic sounds of the 'Dhol' and the high-pitched melodies of bamboo flutes that lead massive tribal dance circles. Historically, the festival also allowed couples to elope with the community's eventual blessing, though today it has evolved more into a grand social gathering for migrant workers returning home. Visitors can find unique tribal delicacies and indigenous beverages like 'Mahua', which are integral to the festive spirit. The 'Haat' also serves as an open-air museum for 'Pithora' paintings, which are often displayed or sold by local tribal artists during this week. It is a rare opportunity to witness an ancient socio-economic system where trade and tradition are seamlessly intertwined.",
    images: [bhagoria1],
    source: "(src: wikipedia)",
  },
  {
    name: "Lokrang Festival",
    tagline:
      "Celebrated in Bhopal",
    description:
      "Celebrated every year starting on Republic Day (January 26th), Lokrang is Bhopal’s tribute to the folk and tribal arts of India. The festival aims to preserve and showcase the vanishing traditions of various ethnic groups through dance, music, and theater. Artists from different states perform their indigenous dances, making it a 'Mini India' on a single stage. Since you are in your first year of engineering, you might also appreciate the 'Shilp Gram' (craft village) where traditional artisans display their handmade works. It is a five-day event that fills the capital city with energy, lights, and cultural pride. The festival is organized by the Adivasi Lok Kala Academy to keep tribal heritage alive. The Lokrang Festival is a five-day cultural feast that begins every year on Republic Day to celebrate the diverse folk and tribal traditions of India. Organized by the Madhya Pradesh Adivasi Lok Kala Academy, the festival’s primary goal is to prevent the extinction of rare folk art forms by giving them a grand national stage. Each year, the festival adopts a specific theme, such as 'Dharti' (Earth) or 'Panchatantra', and invites performers from across the country to showcase regional dances like Lavani, Bihu, or Garba. A major highlight is the 'Shilpgram', a dedicated craft village where master craftsmen demonstrate live techniques of terracotta, weaving, and bell-metal casting. The festival also features 'Puroo' and 'Aparajita', segments dedicated to tribal heritage and the empowerment of women artists respectively. For children, the 'Bal-Rang' section provides a platform for young students to perform and learn about their cultural roots through storytelling and puppet shows. The evening performances at the Ravindra Bhavan open-air auditorium use sophisticated lighting and sound to bring ancient tribal myths to life. It is widely considered the most comprehensive event in Central India for those wishing to study the anthropological diversity of the subcontinent in one location.",
    images: [lokrang1],
    source: "(src: wikipedia)",
  },
  {
    name: "Ujjain Simhastha Kumbh Mela",
    tagline:
      "Celebrated in Ujjain",
    description:
      "The Simhastha Kumbh Mela is one of the largest religious gatherings in the world, held every 12 years on the banks of the Shipra River. It occurs when the planet Jupiter enters the zodiac sign of Leo (Simha), which is why it is called 'Simhastha'. Millions of devotees and sadhus (saints) gather to take a holy dip in the river, believing it washes away sins. The city of Ujjain transforms into a massive spiritual camp filled with chanting, devotional singing, and religious discourses. Even if you aren't there for the religious aspect, the sheer scale of management and human connection is a great study for a data science student. It is a spectacular display of faith, tradition, and ancient Indian astronomy. The Ujjain Simhastha is one of the four Great Kumbh Melas, occurring only once every twelve years when Jupiter enters Leo (Simha) and the Sun is in Aries. It is held on the banks of the sacred Shipra River, where millions of devotees congregate for the 'Shahi Snan' or royal bath, believed to cleanse the soul of all sins. The festival is unique because it is the only Kumbh where the 'Panch Kroshi Yatra', a 118-kilometer barefoot pilgrimage around the holy city, takes place simultaneously. The riverfront is divided into various 'Akharas', where Naga Sadhus and various sects of ascetics set up temporary camps to provide spiritual discourses and yoga demonstrations. The night sky over Ujjain is illuminated by massive evening 'Aartis', where hundreds of lamps are floated down the Shipra in a breathtaking display of faith. Unlike other festivals, Simhastha turns Ujjain into a temporary 'Pop-up City', complete with its own hospitals, police stations, and massive communal kitchens called 'Langars'. It is a site of intense intellectual exchange, as it hosts 'Vaicharik Kumbhs' where leaders discuss global peace, ecology, and social issues. The event is deeply tied to the Mahakaleshwar Temple, one of the twelve Jyotirlingas, making it a pinnacle event for both spiritual seekers and cultural historians.",
    images: [kumbhmela1],
    source: "",
  },
  {
    name: "Mandu Festival",
    tagline: "Celebrated in Dhar district of MP",
    description:
      "The Mandu Festival is a five-day celebration of heritage and romance held in the medieval hilltop fortress of Mandu, often referred to as the 'City of Joy'. It is unique for its 'eco-tourism' approach, offering visitors the chance to stay in luxurious tent cities and explore the rugged Malwa plateau through hot air balloon rides and sunrise cycling tours. The festival creates a living narrative of the legendary love story between Sultan Baz Bahadur and Rani Roopmati through specialized light and sound shows projected against the Jahaz Mahal. Beyond history, it hosts an Adventure Sports Zone where travelers can engage in paragliding and rock climbing amidst ancient ruins. The local 'Instagrammable' spots are enhanced by curated art installations that blend contemporary design with the town’s Afghan architectural style. Foodies can enjoy the Malwa Food Court, which features the famous 'Mandu ki Imli' (baobab fruit) and traditional tribal cuisines. The evenings are dedicated to 'Music in the Fort', where independent folk-fusion bands perform in open-air courtyards. It is essentially a bridge between the 15th-century stone structures and 21st-century adventure tourism",
    images: [mandufest1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Namaste Orchha ",
    tagline:
      "Celebrated in Niwari district of MP",
    description:
      "Namaste Orchha is a contemporary cultural festival designed to showcase the architectural grandeur of the Bundela era to a global audience. One of its most distinctive features is the 'Maha Aarti' held at the Kanchan Ghat of the Betwa River, which uses theatrical lighting and choreography to create a spiritual spectacle. The festival is famous for its 'Farm-to-Fork' initiative, where visitors can enjoy meals prepared by local villagers, promoting rural entrepreneurship and authentic Bundelkhandi flavors. Unlike traditional fairs, it includes 'Photography and Filmmaking Workshops' led by industry experts, using the palaces and cenotaphs as a cinematic backdrop. The town’s narrow lanes are transformed into an open-air gallery for 'Nail Art' and 3D street paintings that tell stories of the town’s hidden history. It also features high-octane performances by fusion-rock bands and classical vocalists on floating stages on the river. The event is curated to feel like a boutique experience, blending wellness sessions like 'Yoga by the River' with heritage walks through the Orchha Wildlife Sanctuary.",
    images: [orchha1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Pachmarhi Utsav",
    tagline: "Celebrated in Narmadapuram district of MP",
    description:
      "Pachmarhi Utsav is a six-day cultural carnival that begins on December 25th, turning the 'Queen of Satpura' into a hub of folk festivities during the peak winter season. The festival is unique for its heavy focus on the indigenous Gond and Korku tribal cultures, featuring rare dance forms like the 'Ahirai' and 'Matki' that are seldom seen elsewhere. A highlight of the event is the exhibition of 'Pithora' paintings, where tribal artists demonstrate their sacred art of storytelling through vibrant wall murals. It also serves as a platform for regional school and college talents through the 'Bal-Rang' segment, encouraging the younger generation to preserve their heritage. Because it takes place in a hill station, the festival integrates nature walks and eco-tours to the Pandava Caves and Jata Shankar temples as part of the official itinerary. The local craft bazaar is particularly famous for its medicinal honey and bamboo artifacts harvested from the surrounding Satpura forests. The cool mountain air filled with the scent of pine and the sound of tribal drums creates an atmosphere that feels both festive and serene.",
    images: [pachmarhi1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Chethiyagiri Vihara Festival",
    tagline: "Celebrated in Sanchi district of MP",
    description:
      "The Chethiyagiri Vihara Festival is a significant international Buddhist event held in November at the UNESCO World Heritage site of Sanchi. Its most sacred and unique aspect is the public viewing of the 2,500-year-old relics of Sariputta and Mahamoggallana, the two chief disciples of Lord Buddha, which are otherwise kept in a high-security vault. Thousands of monks in saffron robes and pilgrims from Sri Lanka, Japan, and Thailand descend upon the town, turning Sanchi into a global center of peace and meditation. The festival is characterized by a grand procession where the relics are carried through the town, accompanied by traditional chants and Buddhist hymns. Unlike other loud festivals, this event focuses on 'Dhamma Talks' and silent meditation sessions led by revered international scholars. The surrounding stalls offer a unique glimpse into Buddhist literature and handicrafts from across Southeast Asia, creating a rare cross-cultural exchange. It is a deeply spiritual experience that emphasizes the 'Maha Karuna' (Great Compassion) and the architectural legacy of Emperor Ashoka.",
    images: [chethiyagiri1],
    source: "(src: kalkionline.com, incredibleindia.com, tirthyatra.com)",
  },
  {
    name: "Malwa Utsav",
    tagline: "Celebrated in Indore & Ujjain district of MP",
    description:
      "Malwa Utsav is a massive seven-day traveling festival that splits its time between the historic cities of Indore and Ujjain to celebrate the vibrant lifestyle of the Malwa region. It is most famous for hosting one of the largest 'Shilp Hatt' (craft fairs) in Central India, where over 400 craftsmen from across the country display everything from Chanderi silks to Bastar bell-metal art. The festival is a paradise for street-food lovers, as it features dedicated zones for Indore’s world-famous 'Chappan Dukan' style snacks like Garadu and Bhutte Ka Kees. The cultural evenings are a grand display of 'Gharana' music and classical dances, often held at the magnificent Rajwada Palace in Indore or the ghats of Ujjain. A unique feature is the 'Traditional Costume Parade', where participants dress in historical Malwi attire to recreate the era of Devi Ahilya Bai Holkar. The festival also includes a 'Kavi Sammelan', where renowned Hindi poets engage the audience with wit and satire, a staple of the local culture. It is an event that perfectly captures the 'Indori' spirit of hospitality, food, and deep-rooted respect for traditional arts.",
    images: [malwautsav1],
    source: "(src: wikipedia)",
  },
];

const historicalPlaces = [
  {
    name: "Khajuraho Group of Temples - Chhatarpur",
    description:
      "These temples were built by the Chandela Dynasty between 950 and 1050 AD. Originally a complex of 85 temples (only 22 survive), they are famous for their Nagara-style architecture and intricate erotic sculptures. They were 'rediscovered' by British officer T.S. Burt in 1838. The temples represent a high point of North Indian temple art, emphasizing the four goals of life in Hinduism: dharma, artha, kama, and moksha. The temples are divided into three groups: Western, Eastern, and Southern. The Kandariya Mahadeva Temple is the largest and most ornate. The sculptures are not merely erotic; they depict everyday life, music, dance, and celestial beings. Beyond the famous carvings, the temples are engineered with a sophisticated 'sand-box' foundation technique to withstand earthquakes, explaining why they remain standing after 1,000 years. The Kandariya Mahadeva temple alone features 872 statues, each meticulously placed to create a fractal-like appearance that mimics a mountain range. Interestingly, the temples were dedicated to both Hinduism and Jainism side-by-side, reflecting a high degree of religious harmony during the Chandela reign. The site is now a UNESCO World Heritage treasure, preserved for its 'expressiveness' and technical mastery in stone. The name Khajuraho, or Kharjuravāhaka, is derived from ancient Sanskrit (kharjura, खर्जूर means date palm, and vāhaka, वाहक means 'one who carries' or bearer). Local legends state that the temples had two golden date-palm trees as their gate (missing when they were rediscovered). Desai states that Kharjuravāhaka also means scorpion bearer, which is another symbolic name for deity Shiva (who wears snakes and scorpion garlands in his fierce form). Cunningham's nomenclature and systematic documentation work in 1850s and 1860s have been widely adopted and continue to be in use. He grouped the temples into the Western group around Lakshmana, Eastern group around Javeri, and Southern group around Duladeva.",
    images: [khajurahotemple1, khajurahotemple2, khajurahotemple3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Sanchi Stupa - Raisen",
    description:
      "Commissioned by Emperor Ashoka in the 3rd century BC, Sanchi is one of the oldest stone structures in India. It was formed to house the relics of Lord Buddha. The Great Stupa was later expanded during the Shunga and Satavahana periods with ornate gateways (Toranas) depicting Jataka tales. It was found in ruins in 1818 by General Taylor. It serves as a symbol of the spread of Buddhism across Asia. The four 'Toranas' (gateways) are considered the finest specimens of early Indian stone carving, depicting over 50 stories from the Jataka tales. Unlike later Buddhist art, the Buddha is never shown in human form here; instead, he is represented by symbols like a footprint, a throne, or a Bodhi tree. The Ashoka Pillar located near the main stupa is famous for its 'Mauryan Polish', a glass-like finish on stone that scientists still find difficult to replicate today. The site also includes the ruins of a 7th-century temple, proving Sanchi remained a living religious center for over 1,300 years. The Great Stupa at Sanchi is one of the oldest stone structures in India, and an important monument to the historical architecture of India. It was originally commissioned by the Mauryan emperor Ashoka in the 3rd century BCE. Its nucleus was a simple hemispherical brick structure built over the relics of the Buddha. It was crowned by the chatra, a parasol-like structure symbolising high rank, which was intended to honour and shelter the relics. The original construction work of this stupa was overseen by Ashoka, whose wife Devi was the daughter of a merchant of nearby Vidisha. Sanchi was also her birthplace as well as the venue of her and Ashoka's wedding. In the 1st century BCE, four elaborately carved toranas (ornamental gateways) and a balustrade encircling the entire structure were added. The stupa at Sanchi built during the Mauryan period was made of bricks. The composite flourished until the 11th century.",
    images: [sanchi1, sanchi2, sanchi3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Bhimbetka Rock Shelters - Raisen",
    description:
      "These are prehistoric caves discovered by V.S. Wakankar in 1957. They contain paintings that are over 30,000 years old, showing the earliest traces of human life on the Indian subcontinent. The paintings depict scenes of hunting, dancing, and daily life using natural pigments like red and white. These natural sandstone formations provided shelter to humans from the Paleolithic to the Mesolithic ages. These shelters are not just 'caves' but a massive open-air gallery spanning 10 km, containing the 'Zoo Rock' which depicts 252 animals of 16 different species. Excavations here revealed stone tools from the Acheulian period, suggesting that human ancestors lived here nearly 100,000 years ago. The paintings were made using a mixture of colored earth, vegetable dyes, and even animal fat, which has chemically bonded with the rock to survive the elements. It is one of the few places on Earth where you can see a continuous record of human evolution from the Stone Age to the Medieval era. Bhimbetka meaning 'Bhima's resting place' or 'Bhima's lounge', is compound word made of Bhima (second brother among the five Pandavas of Mahabharata) and Baithaka (seat or lounge). According to the native belief, Bhima during his exile used to rest here to interact with the locals. Bhima Worshiped Mata Vaishavi at this location and blessed for concurring the forthcoming war. There is a famous Mata Vaishavi Temple existing at this place since long.",
    images: [bhimbetka1, bhimbetka2, bhimbetka3],
    source: "(src: wikipedia)",
  },
  {
    name: "Gwalior Fort",
    description:
      "Known as the 'Gibraltar of India', its foundations date back to the 6th century AD. It was built and expanded by various rulers, most notably Raja Man Singh Tomar in the 15th century. The fort houses the Teli Ka Mandir and the Saas-Bahu Temple. It witnessed numerous sieges by the Mughals, Marathas, and the British. The architecture is a stunning blend of Hindu and Islamic styles, featuring blue ceramic tiles on the outer walls. The fort is home to the 'Gujari Mahal', a palace built by Raja Man Singh specifically for his queen Mrignayani, who demanded her own palace with a continuous supply of water from the Rai River. Emperor Babur was so impressed by its grandeur that he famously called it 'the pearl amongst fortresses in Hind'. The fort also holds a deep mathematical secret: a small 9th-century temple inside contains one of the oldest inscribed 'zeros' in the world. Its blue-painted outer walls, decorated with yellow ducks and elephants, were intended to make the fort look like a 'living palace' from a distance. Gwalior derived its name from the Gwalior Fort itself, which was earlier known as Gopgiri, Gop Parvat (Shepherd's Hill) or Gopachal during Gupta period. In ancient time this region was known as Gopashetra roughly translated to 'the land of Gopis' or 'the land associated to Cowherds'. The name is believed to have connections with the Gopis (the cow herdesses or cowherds girls) of the Lord Krishna mythology. It is said that the area was once inhabited by cowherds and associated with pastoral activities, especially in the times of Mahabharata. This may refer to the cultural or historical ties with Lord Krishna worship, which had an influence on the region. Gwalior was the major commercial and trade route during Samudragupta reign. According to some legends, Gwalior was founded in 600 CE (early 5th Century) after a local chieftain, Suraj Sen, who was cured of leprosy from a drink given to him by a hermit named Gwalipa. Suraj subsequently set up a city and fort and named them after Gwalipa.",
    images: [gwalior1, gwalior2, gwalior3],
    source: "(src: wikipedia)",
  },
  {
    name: "Jahaz Mahal (Mandu) - Dhar",
    description:
      "Built during the reign of Sultan Ghiyas-ud-din Khalji in the late 15th century, this 'Ship Palace' is situated between two artificial lakes, Munj and Kapur. It was designed to resemble a ship floating in water, serving as a harem for the Sultan. Mandu’s architecture influenced the later Mughal style, particularly the Taj Mahal. The structures are made of local stone and exhibit refined Afghan architectural features. The palace is an engineering feat of the 15th century, featuring a sophisticated 'water-cooling' system where air was passed over the surrounding lakes to act as natural air conditioning. It contains two star-shaped swimming pools and a complex network of spiral aqueducts that filtered rainwater for the palace residents. Mandu was once known as 'Shadiabad' (The City of Joy), and its architecture served as a direct prototype for the tomb of I’timād-ud-Daulah and the Taj Mahal. The 'Ship Palace' is uniquely designed with no defensive walls, as it was built purely for aesthetic pleasure and royal retreats.Jahaj Mahal is the venue of the annual colorful festival of the Phool Walon Ki Sair (means a procession of the florists) or 'Sair-i-Gulfaroshan' held in October. A procession of flower bedecked pankhas (fans) made and carried by the flower vendors starts from Mehrauli at the overflow outlet of the Hauz-i-Shamsi tank, called 'Jharna', stops at the Yogmaya Temple for the first offering of the flower fan as mark of reverence, moves to the Jahaj Mahal and finally ends at the famous dargah of Hazrat Qutbuddin Bakhtiar Kaki for the presentation of the fans and chaddar at Kaki's dargha. It marks the syncretic Hindu-Muslim composite culture. The festival was started by Emperor Akbar Shah II in 1820. It was popularised by Emperor Bahadur Shah II. It was discontinued from 1942 for a time during the British period but was restarted in 1961 at the initiative of Pandit Jawaharlal Nehru, the first Prime Minister of India. The three-day festival is held at the Jahaj Mahal where elaborate cultural programmes are organised. Cultural troupes from several States of India perform dances, drama programmes and hold musical soirees (particularly Qawwalis), in their colourful regional costumes and aspire for honours recognising their talent.",
    images: [jahaz1, jahaz2, jahaz3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Mahakaleshwar Temple - Ujjain",
    description:
      "One of the 12 Jyotirlingas, its history dates back to the prehistoric period, but the current structure was rebuilt by the Marathas in the 18th century. It is the only Jyotirlinga that faces south (Dakshinmukhi). The temple complex was famously destroyed by Iltutmish in 1234 AD and lay in ruins for centuries. The temple is unique because the idol of Omkareshwar is consecrated above the Mahakal shrine, and the idol of Nagchandreshwar is on the third floor, opened for public viewing only once a year during Nag Panchami. Historical coins from the 4th century BC found in Ujjain already featured the image of Lord Shiva, proving the temple’s ancient roots. The current structure exhibits a rare 'Bhumija' architectural style, characterized by a star-shaped plan and a tapering spire. It serves as the spiritual heart of the city, which was once the Prime Meridian for ancient Indian astronomers and geographers. According to the Puranas, the city of Ujjain was called Avantika and was famous for its beauty and its status as a devotional epicenter. It was also one of the primary cities where students went to study holy scriptures. According to legend, there was a ruler of Ujjain called Chandrasena, who was a pious devotee of Shiva and worshiped him all the time. One day, a farmer's boy named Shrikhar was walking on the grounds of the palace and heard the King chanting Shiva's name and rushed to the temple to start praying with him. However, the guards removed him by force and sent him to the outskirts of the city near the river Kshipra. Rivals of Ujjain, primarily King Ripudamana and King Singhaditya of the neighboring kingdoms decided to attack the Kingdom and take over its treasures around this time. Hearing this, Shrikhar started to pray and the news spread to a priest named Vridhi. He was shocked to hear this and upon the urgent pleas of his sons, started to pray to Shiva at the river Kshipra. The Kings chose to attack and were successful; with the help of the powerful demon Dushan, who was blessed by Brahma to be invisible, they plundered the city and attacked all the devotees of Lord Shiva. Ujjain is the only Jyotirlinga where the sacred Bhasma Aarti is performed on the Shiv Lingam.",
    images: [ujjain1, ujjain2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Omkareshwar Temple",
    description:
      "It is a Hindu temple dedicated to Shiva, located in Mandhata, nearby Khandwa city in Khandwa district of the Indian state of Madhya Pradesh. It is one of the 12 revered Jyotirlinga shrines of Shiva.[1] It is on an island called Mandhata, near Khandwa city in the Narmada River at Khandwa district in Madhya Pradesh, India; the shape of the island is said to be like the Devanagari ॐ symbol. There are two main temples of Shiva here, one to Omkareshwar (whose name means 'Lord of Omkara or the Lord of the Om sound') located in the island and one to Mamleshwar (Amaleshwar) (whose name means 'Immortal Lord' or 'lord of the Immortals or Devas') located on the southern bank of the Narmada River on the mainland. Madhya Pradesh has two Jyotirlingas, the second one, Mahakaleshwar Jyotirlinga, is situated about 140 km north of Omkareshwar Jyotirlinga. The idol of Mahakaleshwar is Dakshinamurti, meaning it faces south. This is a unique feature, upheld by the tantric shivnetra tradition to be found only in Mahakaleshwar among the 12 Jyotirlingas. The idol of Omkareshwar Mahadevji is consecrated in the sanctum above the Mahakal shrine. The images of Ganesh, Parvati and Karttikeya are installed in the west, north, and east of the sanctum sanctorum. To the south is the image of Nandi, the vehicle of Shiva. The idol of Nagchandreshwar on the third storey is open for darshan only on the day of Nag Panchami. The temple has five levels, one of which is underground. The temple itself is located in a spacious courtyard surrounded by massive walls near a lake. The shikhar or the spire is adorned with sculptural finery. Brass lamps light the way to the underground sanctum. It is believed that prasada (holy offering) offered here to the deity can be re-offered unlike all other shrines.",
    images: [omkareshwar1, omkareshwar2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Asirgarh Fort - Burhanpur",
    description:
      "Built by Asa Ahir of the Ahir dynasty in the 14th century, it was known as the 'Gateway to the Deccan'. It is perched on the Satpura Range. The fort was captured by Akbar in 1601 after a long siege. It houses a unique 10th-century Shiva temple and several Mughal-era structures. Known as the 'Key to the Deccan', the fort’s three-layered defense (Asirgarh, Kamargarh, and Malaygarh) made it practically invincible to direct military assault. It is home to the 10th-century Gupteshwar Mahadev Temple, where local legend claims Ashwatthama from the Mahabharata still offers fresh flowers to Shiva every morning. The fort also features a massive 'Jami Masjid' built by the Faruqi dynasty, which has unique Sanskrit inscriptions alongside Arabic ones. Even the British were so impressed by its location that they maintained a garrison here until the early 20th century. The architecture of the fort is mainly influenced by the Indian architecture, some parts also show Faroqi and Mughal architecture, an amalgamation of Islamic, Persian, Turkish and Indian styles. There are three man made ponds to provide a water supply. There is a temple known as Gupteshwar Mahadev Mandir, dedicated to the Hindu deity Shiva. There is a local legend that Ashwatthama, a character in the Indian epic Mahābhārata, used to come to this temple to worship and offer flowers each morning to Lord Shiva. There is a ruined mosque of faroqi era with minarets known as Asir Masjid inside the Fort. Apart from the Hindu and Muslim architecture, some ruins are of British origin and there are also British graves. This fort has been deserted following the departure of the British.",
    images: [asirgarh1, asirgarh2, asirgarh3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Jahangir Mahal (Orchha) - Nihari",
    description:
      "Built by Raja Bir Singh Deo in the 17th century to welcome Mughal Emperor Jahangir. It is a classic example of Bundela architecture combined with Mughal influence. The palace has 136 rooms and numerous courtyards. It was formed using local stone and lime, featuring delicate latticework and domes. This palace is a masterpiece of 'Bundela' architecture, defined by its massive stone domes (chhatris) and delicate turquoise tilework that still shimmers today. The building is perfectly symmetrical, with 136 rooms arranged around a central square courtyard that was once filled with fountains and music. It was built using a robust lime-based mortar that has kept the structure sound for over 400 years with very little restoration. The palace’s entrance is flanked by two large stone elephants, symbolizing the royal hospitality of Raja Bir Singh Deo for his friend, Emperor Jahangir. The ruler of the region Vir Singh Deo built the structure as a symbol of warm reception of the Mughal Emperor Jahangir, during the latter’s first visit to the city. The entrance of the palace is marked by an artistic and traditional gateway. The front wall of the structure faces to the east and is covered with turquoise tiles. Jahangir Mahal is a three-storied structure that is marked by stylishly hanging balconies, porches, and apartments. The domes of the Jahangir Mahal, were built according to Timurid customs; its grand Iwans are large enough to accommodate the entry of war elephants, and its high position over the landscape allowed cannons superior range.",
    images: [jahangir1, jahangir2],
    source: "(src: wikipedia)",
  },
  {
    name: "Rajwada Palace - Indore",
    description:
      "Built by the Holkars of the Maratha Empire over 200 years ago. It is a unique seven-story structure; the lower three floors are stone, and the upper four are wood. It represents a fusion of Maratha, Mughal, and French styles. It has survived three major fires, the most recent being in 1984. The palace is a rare example of a 'living' royal residence that has been rebuilt multiple times, blending Maratha architectural strength with French interior elegance. Its seven-story 'Gopuram-style' entrance is the tallest in the state and features a central courtyard with a beautiful Maratha-arched Ganesha hall. The palace faces a lush garden named 'Ahilya Vatika', featuring a statue of the legendary Queen Ahilya Bai Holkar. Despite the upper floors being made of wood, the palace has survived major historical fires, becoming a symbol of Indore's resilience and heritage. The structure comprises two parts with one near the center of the city and the other in an older section. Both parts utilize Maratha architectural styles. The entrance itself is marked with a large wooden door, supported by iron studs. Inside the entryway, there is a courtyard that consists of a Maratha arched Ganesha hall and a number of balconies, windows, and corridors that link to galleried rooms. The lower three floors are made of stone and the upper floors are made of wood.",
    images: [rajwada1, rajwada2],
    source: "(src: wikipedia)",
  },
  {
    name: "Heliodorus Pillar - Vidisha",
    description:
      "A stone column erected around 113 BC by Heliodorus, a Greek ambassador to the court of King Bhagabhadra. It is locally known as Khamba Baba. It is historically significant because it proves the early Greek connection to Vaishnavism. It was rediscovered by Alexander Cunningham in 1877. This pillar is the first archaeological evidence of a foreigner (a Greek ambassador) becoming a devotee of Vishnu, marking a major milestone in global religious history. The pillar is carved from a single piece of pinkish-brown sandstone and features ornamental bands of pigeons and floral festoons that are distinct from Mauryan art. Excavations in the 1960s revealed that the pillar was originally part of a massive temple complex with an elliptical plan, a rare shape in ancient Indian architecture. Locally called 'Khamba Baba', it is still worshipped by local farmers today as a protector of their crops. The Heliodorus Pillar is a stone column, which was constructed in about 150 BCE. This stone column was erected by the Greek ambassador of the Indo-Greek King Antialcidas, who came to the court of Bhagabhadra, a possible Sunga king. Dedicated to Lord Vāsudeva, this column was constructed in front of the temple of Vāsudeva. The pillar is situated about four kilometers away from the city on Vidisha-Ganj Basoda SH-14, located on the northern bank of the Vais River. It is a 20 feet and 7 inches tall stone pillar, commonly called Kham Baba. The script used in the inscription is Brahmi but the language is Prakrit, recording that Heliodorus erected the pillar as a Garuda Stambha to pay homage to Lord Vasudeva, who was later integrated as a manifestation of Lord Vishnu.",
    images: [khamba1, khamba2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Badal Mahal Gate - Ashoknagar",
    description:
      "Located in Chanderi, it was built by Sultan Mehmood Shah Khilji in the 15th century. It is not a palace but a standalone ceremonial gateway. The gate features intricate carvings and double arches. It is a landmark of the Malwa Sultanate's architectural prowess. The Badal Mahal Gate is a 'triumphal arch' that stands 50 feet high, featuring two tapering minarets and a double-arched entrance that creates a beautiful framing effect. It is a prime example of the 'Malwa Sultanate' style, which avoided the heavy carvings of the North in favor of clean lines and elegant geometric proportions. The gate was strategically placed to overlook the Chanderi fort, serving as a landmark for travelers entering the city from the hills. Today, the gate’s image is so famous that it is often used as a background for Chanderi’s world-renowned silk weaving industry. This imposing gate has a height of 100 feet, and bears intricate designs and netted windows that portray inferences of Mughal architecture. The upper portion of the gate shows four beautifully carved windows, each with a different design motif. On the other side of the gate is a hanging balcony where the musicians used to sit to entertain guests. This balcony was also used to shower flower petals on the guests as they passed under. At best, Badal Mahal is a facade, which looks stunning against the backdrop of a hill and the Kirti Durg Fort.",
    images: [badal1, badal2, badal3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Saraafa Bazaar - Indore",
    description:
      "Sarafa Bazaar is a jewellery market and night street food court located in central Indore, India. Sarafa is one of the market in India which remains as a jewellery marketplace at daytime and converts itself into a street food court at night. The market consists of two sub-markets namely Bada Sarafa Bazaar and Chhota Sarafa Bazaar. Indore's Sarafa Bazaar is a popular tourist place because of its diverse cuisine and night lifestyle. The market originated as the central jewellery market in the city of Indore. Located 2 Kilometres from Indore's central marketplace Rajwada, Sarafa was the central trading point for jewellery, artefacts and ornaments. Due to its location and a large number of commuters and tourists, street food vendors started putting stalls and selling fast-food, snacks and chaat.[4] Eventually, street food vendors were allowed to put stalls after 8 PM (after jewellery market closes) until morning.[5] Sarafa is also the place of origin of Bada Sarafa Cotton Association, Indore and Madhya Pradesh Sarafa Association. Some popular vendors include Joshi Ke Dahi Bade (since 1977) (Joshi's Dahi Bade), Nagori Ki Shikanji (Nagori's Shikanjvi) and Rajhans ka Daal Bafla (Rajhans' Daal Baati). The most famous and must-try cuisines in Saraafa Bazaar are - Bhutte ka Kees, Jalebi, Ratalu, Khopra Pattice, Garadu, Poha-Jalebi, Malpua, Rabri, Vijay chat house Kachori, Kulfi, Mawa Baati, Malai Rabdi, Coconut Crush",
    images: [sarafa1, sarafa2, sarafa3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Chappan Dukaan - Indore",
    description:
      "Chappan Dukan, (also written as 56 Dukan), is a food and shopping street located in Indore, Madhya Pradesh, India. It is known for its active street food scene and variety of shops, establishing itself as a notable landmark for residents and visitors alike. Chappan Dukan accommodates 56 food shops within a distance of approximately 200 meters, situated in the upscale Palasia area of Indore. Between the 1980s and 1990s, the Chappan Dukan area became synonymous with Indore and earned the moniker '56 Dukan'. In 2000, a major transformation took place which made widespread recognition across Madhya Pradesh and the nation. The market's popularity attracted celebrities, officials, and leaders, who frequently included it in their Indore visits, sometimes accompanied by their families. Chappan Dukan has its own radio station, which was launched in 2022, catering to both shopkeepers and visitors. This marks the first instance of its kind in Madhya Pradesh, where 56 shops have their individual radio stations—a concept previously seen in malls of Mumbai, Bengaluru, and Hyderabad. The Times of India reported in 2019 that the food shops at Chappan Dukan have reportedly contributed approximately 40% (estimated based on shopkeepers' statements) to the city's annual food market turnover of ₹5,000 crore. In September 2021, Chappan Dukan received an award from Food Safety and Standards Authority of India (FSSAI) for being a 'Clean Street Food' hub in Indore. It a FSSAI certified street food hub. In April 2022, Indore Smart City Development was awarded the First Prize for Chappan Dukan in the Built Environment category in the Smart Cities Conference held in Gujarat. Popular dishes to try include Johny Hot Dog, Vijay Chaat House (for khopra patties), various chaats, momos, rabdi, and shakes.",
    images: [chappan1, chappan2, chappan3, chappan4],
    source: "(src: Wikipedia, Tripadvisor)",
  },
];

const facts = [
  "Madhya Pradesh is the only place in India where you can find both the Royal Bengal Tiger and the newly reintroduced Cheetahs (at Kuno National Park). It has the highest tiger population in the country, earning it the official title of the Tiger State.",
  "MP is the only state in India that produces diamonds. The Panna Diamond Mines are famous worldwide, and every year, people still find high-quality diamonds in the shallow mines there.",
  "Geographically, the exact center point of undivided India is located in the Katni district (Karondi village). If you look at a map, MP sits perfectly in the middle, balancing the north, south, east, and west of the country.",
  "Indore has been ranked as India’s Cleanest City for seven consecutive years (as of 2024-2025). This is a massive achievement in urban data management and civic sense.",
  "The Bhimbetka Rock Shelters contain paintings that are over 30,000 years old. These are some of the oldest records of human life in the world, showing that people were singing, dancing, and hunting in MP since the Stone Age.",
  "The famous story of Mowgli in 'The Jungle Book' by Rudyard Kipling was inspired by the real forests and landscapes of Pench National Park and Seoni in Madhya Pradesh.",
  "Ujjain was historically the 'Prime Meridian' for Hindu geographers, used for time calculations long before Greenwich.",
  "Gwalior is recognized by UNESCO as a 'City of Music' due to its deep-rooted history with the Gwalior Gharana and Tansen.",
  "While Madhya Pradesh is the 'Tiger State', it holds a more specific distinction: Rewa is the ancestral home of all known White Tigers in the world. The first white tiger, named Mohan, was captured here in 1951, and almost every white tiger in captivity today is a descendant of the Rewa line.",
  "The Singrauli district is not just the energy capital of India; it houses the Jhingurda coal seam, which is the second thickest in the world and the thickest in Asia. From a resource management perspective, this single area powers a massive portion of the Indian national grid.",
  "Beyond being a time-keeping hub, Ujjain is home to the Sandipani Ashram. According to ancient texts, this is where Lord Krishna and Sudama received their education. This makes the city one of the oldest recorded 'educational hubs' in human history.",
  "The Narmada Valley is one of the few places in the world where you can find dinosaur fossils and eggs in abundance. The Rajasaurus narmadensis (the 'Princely Lizard of the Narmada') was a species of carnivorous dinosaur that roamed this specific region millions of years ago.",
  "The Gol Gumbaz style isn't the only place with unique acoustics. The Jami Masjid in Mandu is built in such a way that it has incredible sound echoing properties. Furthermore, the Hoshang Shah’s Tomb in Mandu is India’s first marble structure; it was so influential that it reportedly served as a template for the designers of the Taj Mahal.",
  "The Great Stupa at Sanchi is the oldest stone structure in India. Originally commissioned by Emperor Ashoka in the 3rd century BCE, its design (a hemispherical dome) actually represents the curve of the universe in ancient cosmology.",
  "The Dharmarajeshwar temple in Mandsaur is often compared to the famous Kailasa Temple at Ellora. It is a massive structure carved out of a single solid natural rock, moving from top to bottom, showcasing incredible ancient precision engineering.",
];

const artGallery = [
  {
    title: "Rajwada Palace",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Located in Indore",
    image: gRajwada,
  },
  {
    title: "Inside Lal Bagh Palace",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Located in Indore",
    image: gLalbagh,
  },
  {
    title: "Chappan Dukan",
    emoji: "🍚",
    color: "#E8733A",
    desc: "Chappan (56) food stalls located in Indore",
    image: gChappan,
  },
  {
    title: "Taj-ul-Masajid",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "One of the largest mosques of India, located in Bhopal",
    image: gTaj,
  },
  {
    title: "Bhojtal - Bhopal",
    emoji: "🥐",
    color: "#F4E884",
    desc: "Famous lake of Bhopal, also known as Upper lake/Bada Talab",
    image: gBhojtal,
  },
  {
    title: "Poha Jalebi",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "very famous breakfast in MP, especially Indore",
    image: gPoha,
  },
  {
    title: "Dal Bafla",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "Traditional main dish of MP",
    image: gDalbafla,
  },
  {
    title: "Bhutte ka Kees",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "Unique sweet + spicy taste, Common street food of MP",
    image: gBhuttakees,
  },
  {
    title: "Bhedaghat (Marble Rocks)",
    emoji: "🥭",
    color: "#F8C840",
    desc: "Very popular tourist spot in MP, located in Jabalpur",
    image: gBedaghat,
  },
  {
    title: "Dhuandhar Falls",
    emoji: "🌿",
    color: "#F4B830",
    desc: "Powerful waterfall on the Narmada River, famous for its smoky mist (“dhuan”) effect.",
    image: gDhuandhar,
  },
  {
    title: "Matki Dance",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "Traditional folk dance where women balance pots (matkis) on their heads while performing graceful movements.",
    image: gMatki,
  },
  {
    title: "Bhedaghat Marble Rocks",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "Stunning white marble cliffs along the Narmada River, famous for scenic boat rides.",
    image: gBedaghatrocks,
  },
  {
    title: "Bengal Tiger",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "They are India’s national animal and a powerful big cat widely found in Madhya Pradesh’s forests.",
    image: gBengaltiger,
  },
  {
    title: "Barasingha",
    emoji: "💃",
    color: "#E88844",
    desc: "It is a rare Indian deer known for its many-branched antlers and found in grasslands of Madhya Pradesh.",
    image: gBarasingha,
  },
  {
    title: "Dahi Bade",
    emoji: "💃",
    color: "#E88844",
    desc: "Most famous Joshi ji ke Dahi Bade of Sarafa Baazar",
    image: gDahibade,
  },
  {
    title: "Chole Tikiya",
    emoji: "💃",
    color: "#E88844",
    desc: "Very famous food of Sarafa Baazar",
    image: gCholetikiya,
  },
  {
    title: "Garaadu",
    emoji: "💃",
    color: "#E88844",
    desc: "Very popular winter snack / dish.",
    image: gGaraadu,
  },
  {
    title: "Gajar ka Halwa and Gulab Jamun with Rasmalai",
    emoji: "💃",
    color: "#E88844",
    desc: "Gajar ka Halwa (bottom) - Very popular sweet dish of winters; Gulab Jamun with Rasmalai (top).",
    image: gGajarhalwa,
  },
];