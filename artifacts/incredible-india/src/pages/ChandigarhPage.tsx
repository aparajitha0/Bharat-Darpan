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
const chandigarhMap = "https://i.postimg.cc/7LmVgQxQ/image.png";
const rose1 = "https://i.postimg.cc/ZnMqw1TQ/image.png";
const rose2 = "https://i.postimg.cc/HsrnrszT/image.png";
const carnival1 = "https://i.postimg.cc/25DS9dDq/image.png";
const crafts1 = "https://i.postimg.cc/85kPN1sg/image.png";
const crafts2 = "https://i.postimg.cc/TYbG8yQb/image.png";
const teej1 = "https://i.postimg.cc/KYGyg0b5/image.png";
const teej2 = "https://i.postimg.cc/j59VmK73/image.png";
const mango1 = "https://i.postimg.cc/MX2CZDt1/image.png";
const Chrysanthemum1 = "https://i.postimg.cc/MK1T73CV/image.png";
const Chrysanthemum2 = "https://i.postimg.cc/2Sm52FmD/image.png";
const plaza1 = "https://i.postimg.cc/jSXS9wdH/image.png";
const plaza2 = "https://i.postimg.cc/rpwwLVDq/image.png";
const lohri1 = "https://i.postimg.cc/0Q65bVGL/image.png";
const baisakhi1 = "https://i.postimg.cc/L6F48BJC/image.png";
const baisakhi2 = "https://i.postimg.cc/6p99dWLw/image.png";
const gurupurab1 = "https://i.postimg.cc/SKPkFW04/image.png";
const gurupurab2 = "https://i.postimg.cc/KzgFZRxh/image.png";
const openhand1 = "https://i.postimg.cc/MKwxS6LD/image.png";
const openhand2 = "https://i.postimg.cc/wjTp1WgD/image.png";
const secratariat1 = "https://i.postimg.cc/mrPWwtcc/image.png";
const secratariat2 = "https://i.postimg.cc/5yVcbgsW/image.png";
const assembly1 = "https://i.postimg.cc/wxX80KB0/image.png";
const assembly2 = "https://i.postimg.cc/RVGrxcKM/image.png";
const court1 = "https://i.postimg.cc/T3HZpftB/image.png";
const rock1 = "https://i.postimg.cc/XvCDqFGL/image.png";
const rock2 = "https://i.postimg.cc/761sMknc/image.png";
const tower1 = "https://i.postimg.cc/D02CxMCr/image.png";
const martyr1 = "https://i.postimg.cc/WpnYds3n/image.png";
const gandhi1 = "https://i.postimg.cc/MK3sYt15/image.png";
const center1 = "https://i.postimg.cc/43VBsgqK/image.png";
const corbusier1 = "https://i.postimg.cc/V6w4NhcP/image.png";
const gChandigarh = "https://i.postimg.cc/pVqk2kGf/image.png";
const gPanchkula = "https://i.postimg.cc/PxdzH810/image.png";
const gChole = "https://i.postimg.cc/KzQ78vNM/image.png";
const gButter = "https://i.postimg.cc/L5XtYKQF/image.png";
const gBhangra = "https://i.postimg.cc/HWZ4Gnjm/image.png";
const gGiddha = "https://i.postimg.cc/28gQ6t4d/image.png";
const gBlackbuck = "https://i.postimg.cc/nh7vQ12X/image.png";
const gPeafowl = "https://i.postimg.cc/Y92gZBwT/image.png";
const gSukhna = "https://i.postimg.cc/hvfm48vs/image.png";

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
export default function ChandigarhPage() {
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
                Chandigarh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The City Beautiful
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "" },
                  { label: "Population", value: "10.55 Crore" },
                  { label: "Area", value: "114 sq km" },
                  { label: "Founded", value: "1 November 1966" },
                  { label: "Language", value: "Punjabi, Hindi" },
                  { label: "Districts", value: " Districts" },
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
              Chandigarh
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Chandigarh — The City Beautiful
            </p>
          </div>
        </Section>

        {/* Map of Chandigarh — click to enlarge */}
        <Section title="Map of Chandigarh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(chandigarhMap, "Map of Chandigarh")}
            >
              <img
                src={chandigarhMap}
                alt="Map of Chandigarh"
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
              Chandigarh, famously known as the "City Beautiful," stands as a
              hallmark of modern urban planning and post-independence Indian
              architecture, nestled elegantly at the picturesque foothills of
              the Shivalik range. The unique history of this union territory
              began right after the traumatic partition of India in 1947, when
              the prosperous province of Punjab was split, and its historic
              capital, Lahore, became a part of Pakistan. Left without an
              administrative center, the government of East Punjab, with the
              passionate backing of India’s first Prime Minister, Pandit
              Jawaharlal Nehru, envisioned a new, vanguard capital that would
              symbolize a modern nation unfettered by past traditions.
            </p>
            <p className="text-foreground">
              Originally, American planner Albert Mayer and architect Matthew
              Nowicki were commissioned to design the city, but after Nowicki’s
              tragic death in 1950, the monumental responsibility was handed
              over to the legendary Swiss-French architect Le Corbusier. Working
              alongside prominent British architects Jane Drew and Maxwell Fry,
              as well as Pierre Jeanneret and a brilliant cohort of young Indian
              architects, Le Corbusier designed a highly structured, grid-based
              master plan that divided the city into self-sufficient sectors.
              The name of this historic metropolis was derived from the ancient
              "Chandi Mandir" temple, a shrine dedicated to the Hindu goddess of
              power, Chandi, combined with "Garh," meaning fortress, located
              near the chosen site.
            </p>
            <p className="text-foreground">
              Chandigarh maintained its sole identity as the capital of Punjab
              until November 1, 1966, when the state was reorganized on a
              linguistic basis, leading to the creation of the Hindi-speaking
              state of Haryana and the modern Punjabi-speaking state of Punjab.
              To resolve the intense rivalry over who would claim the
              magnificent city, the Central Government declared Chandigarh a
              Union Territory under its direct administration, serving uniquely
              as the joint capital for both states.
            </p>
            <p className="text-foreground">
              Culturally and linguistically, Chandigarh represents a vibrant,
              cosmopolitan melting pot, harmoniously blending traditional
              Punjabi fervor with Haryanvi warmth and modern, urban
              sensibilities. Hindi and Punjabi are the most widely spoken
              languages across the city, used seamlessly in daily commerce,
              homes, and public interactions, while English serves as the
              dominant language for official administrative work and higher
              education. The demographic landscape is highly diverse, hosting
              thousands of government officials, defense personnel, migrants,
              and young students, which fosters a progressive, highly literate,
              and inclusive civic community.
            </p>
            <p className="text-foreground">
              Today, Chandigarh continues to thrive as one of India's most
              successful, clean, and economically robust cities, boasting an
              exceptionally high Human Development Index and one of the highest
              per capita incomes in the nation. It has evolved past its image as
              a quiet bureaucratic town into a dynamic economic hub, heavily
              supported by the IT sector, high-end commercial enterprises, and
              its proximity to satellite cities like Mohali and Panchkula.
              However, its strategic geopolitical position means it regularly
              mirrors regional sociopolitical dynamics; for instance, its
              borders frequently witness peaceful assemblies and marches by
              local agrarian unions demanding minimum support price guarantees
              and legislative amendments regarding river water disputes.
            </p>
            <p className="text-foreground">
              The civic administration remains heavily invested in advanced
              digital infrastructure, utilizing e-governance to streamline
              public utilities and aggressively implementing solar energy
              initiatives to preserve its massive, lush green cover. Iconic
              landmarks like the Capitol Complex—now a UNESCO World Heritage
              site—the sprawling serene waters of Sukhna Lake, and Nek Chand’s
              imaginative Rock Garden continue to attract global tourists,
              cementing Chandigarh's dual identity as a historical marvel and a
              peaceful, forward-looking metropolis.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Designed by the legendary Swiss-French architect Le Corbusier, it
              is internationally celebrated as a masterstroke of 20th-century
              urban planning and modernist architecture.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: Chandigarh Administration, mapsofindia.com)
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
        <Section title="Facts about   Chandigarh" icon="💡">
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
            Scroll horizontally to explore Chandigarh's iconic foods, crafts,
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
    name: "Chandigarh Rose Festival",
    tagline:
      "Most celebrated and iconic annual event held in the heart of the city at the Zakir Hussain Rose Garden in Sector 16",
    description:
      "Organized by the Chandigarh Administration during the last weekend of February, this majestic three-day extravaganza transforms the city into a vibrant paradise of colors and sweet fragrances. The primary objective of the festival is to showcase the breathtaking beauty of over 1,600 exotic varieties of roses, attracting nature lovers, botanists, and tourists from all over the globe. Beyond the floral grandeur, the festival is packed with highly competitive events such as the Rose Prince and Princess pageants, photography contests, and elaborate flower arrangement competitions. The entire garden comes alive with colorful folk-dance performances, puppet shows, and a massive amusement park that offers high-energy entertainment for families and young children. As the sun sets, the focus shifts to the legendary Mega Musical Nites, where thousands gather under the open sky to witness spectacular live musical concerts by renowned national artists and Bollywood playback singers. The festival grounds also feature a massive array of food stalls serving delicious Punjabi and continental cuisines alongside handicraft exhibitions displaying unique regional arts and crafts. Ultimately, the Chandigarh Rose Festival serves as a beautiful tribute to the city’s green heritage, perfectly encapsulating the community spirit, joy, and environmental consciousness that define the modern lifestyle of the proud residents of Chandigarh.",
    images: [rose1, rose2],
    source: "(src: Times of India)",
  },
  {
    name: "Chandigarh Carnival",
    tagline:
      "Highly anticipated three-day cultural extravaganza celebrated annually in the second or third week of November at the scenic Leisure Valley in Sector 10.",
    description:
      "Conceived with the core vision of fostering creativity, artistic expression, and unity among the residents, this grand carnival officially kicks off with an exceptionally vibrant and grand street parade. The parade features magnificent, artistically constructed floats, beautifully decorated hop-on-hop-off tourist buses, and enthusiastic participants dressed up in creative characters, which instantly infuses the entire city with a festive, high-energy holiday vibe. Students from various local art institutions and schools play an active role in designing these unique floats, showcasing the immense young talent hidden within the region. The carnival grounds are divided into multiple bustling zones that cater to all age groups, including an enormous amusement park packed with thrilling rides like the giant Ferris Wheel, Columbus boat, and high-speed bumper cars. Art galleries and open-air exhibition stalls are set up for local painters, sculptors, and graphic designers to showcase and sell their innovative work directly to art collectors and tourists. Foodies are treated to a magnificent culinary experience at the vast food courts, which offer everything from authentic, spicy North Indian street food to modern international delicacies. Every evening, the festival climaxes with the Punjabi Musical Evening, where top-tier regional pop and Sufi singers deliver mesmerizing live musical performances that keep the massive crowds dancing late into the night.",
    images: [carnival1],
    source: "(src: The indian express)",
  },
  {
    name: "National Crafts Mela",
    tagline:
      "It is a spectacular ten-day cultural phenomenon held annually at the Kalagram complex, organized collaboratively by the Chandigarh Administration and the North Zone Cultural Centre",
    description:
      "This highly prestigious event is explicitly designed to preserve, promote, and celebrate India’s rich, diverse, and vanishing traditional arts, crafts, and heritage by providing a direct marketplace for rural artisans. Craftsmen, weavers, potters, and national award-winning artists from every single state and union territory across India travel to Chandigarh to exhibit their unique, hand-crafted masterpieces. Visitors can explore hundreds of rustic stalls filled with exquisite items like hand-woven pashmina shawls, intricate brassware, traditional pottery, terracotta artifacts, tribal paintings, and stunning ethnic jewelry. The atmosphere inside Kalagram is modeled after a traditional Indian village, giving urban residents a refreshing and authentic taste of rural Indian life and hospitality. In addition to shopping, the Mela is a paradise for performing arts, featuring daily live stages where folk dancers and musicians showcase rare regional art forms like Bhangra, Ghoomar, Chhau, and Lavani. Food enthusiasts can indulge in a remarkable culinary journey at the designated food court, which features authentic traditional cuisines cooked by regional experts, ranging from Rajasthani Dal Baati Churma to Punjabi Makki di Roti and Sarson da Saag. The National Crafts Mela successfully bridges the gap between rural artisans and urban consumers, fostering deep cultural pride and making it a massive success every single year.",
    images: [crafts1, crafts2],
    source: "(src: North zone cultural centre official website)",
  },
  {
    name: "Teej Festival",
    tagline:
      "It is a deeply cherished, traditional monsoon celebration held with immense grandeur and cultural fervor at the world-famous Rock Garden in Chandigarh",
    description:
      "Dedicated to celebrating the arrival of the life-giving monsoon rains and honoring the eternal bond of marriage, the festival is predominantly centered around women who dress up in their finest, most colorful Punjabi traditional attire. The entire stone landscape of the Rock Garden is beautifully transformed with traditional decorations, creating a striking contrast between the rustic waste-to-art sculptures and the vivid colors of the festival. Massive wooden swings are beautifully adorned with fresh marigold flowers and hung from the branches of large mango trees, where girls and women take turns swinging high while singing melodious traditional Teej folk songs. Professional and amateur artists perform the highly energetic Gidha, a traditional folk dance of Punjab, filling the air with rhythmic clapping, vibrant energy, and joyful laughter. The festival also highlights the beautiful art of Mehndi, with numerous stalls set up across the venue where intricate henna designs are painstakingly applied onto the palms of visiting women. Traditional sweet treats, particularly the mouth-watering, syrup-soaked Ghewar and sweet fried mathris, are prepared in abundance and distributed among families as a symbol of prosperity and happiness. The administration actively supports this event to keep the youth connected to their ancestral Punjabi roots, turning the historic Rock Garden into a lively hub of laughter, sisterhood, and cultural pride.",
    images: [teej1, teej2],
    source: "(src: Hindustan Times)",
  },
  {
    name: "Mango Festival",
    tagline:
      "It is a highly popular and mouth-watering summer event organized in June by the Chandigarh Tourism Department in collaboration with neighboring state tourism boards at the historic Pinjore Gardens.",
    description:
      "Celebrated as a joyful tribute to the 'King of Fruits', this unique two-day festival provides a magnificent platform for mango growers from all over India to display their finest agricultural yields. Over 2,000 distinct varieties of mangoes, including famous names like Alphanso, Dasheri, Langra, Chausa, and Amrapali, alongside rare, hybrid varieties, are carefully displayed in massive, air-conditioned exhibition halls for the public to admire. Agricultural scientists and mango enthusiasts gather to judge competitions for the best quality fruit, encouraging farmers to adopt innovative, sustainable organic farming techniques. For the general public, the festival is an absolute paradise, offering a rare opportunity to taste and purchase premium, farm-fresh mango varieties that are otherwise hard to find in local urban markets. The festival also features a dazzling array of mango-based commercial products, such as freshly squeezed mango juices, artisanal mango squashes, sweet jams, spicy pickles, and delectable aam papad manufactured by regional agro-industries. To keep the atmosphere lively and engaging, the organizers host a variety of fun-filled mango-eating competitions for children and adults, alongside vibrant evening cultural programs featuring local folk music and dance.",
    images: [mango1],
    source: "(src: Haryana Tourism portal)",
  },
  {
    name: "Chrysanthemum Show",
    tagline:
      "It is a visually spectacular and highly soothing winter flower exhibition held annually in the month of December at the beautifully landscaped Terrace Garden in Sector 33",
    description:
      "This iconic three-day event is passionately organized by the Municipal Corporation of Chandigarh and serves as a major winter attraction for thousands of environmentalists, avid gardeners, and photography enthusiasts. The entire garden is meticulously arranged with hundreds of unique varieties and thousands of pots of blooming Chrysanthemums, creating a breathtaking, multi-colored carpet of natural floral beauty. Expert civic gardeners and local institutional participants fiercely compete in dozens of distinct categories, showcasing creatively shaped floral structures like animals, birds, peace towers, and abstract geometric patterns made entirely out of living flowers. The show plays a crucial role in raising public awareness about urban gardening, green living, and environmental conservation, with educational stalls offering premium seeds, organic fertilizers, and expert advice on domestic plant care. Visitors can stroll through the crisp winter air, enjoying the incredible sight of rare Chrysanthemum varieties that vary drastically in size, color shades, and intricate petal formations. The peaceful, serene environment is further enhanced by subtle background instrumental music, making it a perfect, tranquil sanctuary for senior citizens, families, and morning walkers during the chilly Chandigarh winter.",
    images: [Chrysanthemum1, Chrysanthemum2],
    source: "(src: Municipal Corporation Chandigarh Event Board)",
  },
  {
    name: "Plaza Carnival",
    tagline: "",
    description:
      "The Plaza Carnival is a unique, highly popular weekly cultural event that takes place every Saturday evening on a massive open-air stage in the central plaza of Sector 17, Chandigarh's legendary commercial hub. Designed to breathe vibrant cultural life into the heart of the city's shopping district, this three-hour evening show is completely free for the general public and consistently draws immense, enthusiastic crowds. The primary vision behind the Plaza Carnival is to provide a highly visible and encouraging platform for local artists, musicians, dancers, and stage performers to showcase their talents directly to the masses. The entertainment lineup changes dramatically every single week, ensuring that the show remains incredibly fresh and exciting, featuring everything from high-energy rock bands and classical music recitals to magic shows and stand-up comedy. Theater groups frequently use the open plaza stage to perform thought-provoking street plays and hilarious mimicry acts that highlight important social issues or provide light-hearted commentary on modern urban lifestyle. Local painters, sculptors, and sketch artists often set up temporary easels around the perimeter of the plaza, creating live artwork and offering quick, affordable portraits for passing shoppers. The Plaza Carnival has successfully transformed Sector 17 from a standard commercial marketplace into a lively, democratic cultural space where community bonding, artistic freedom, and public entertainment seamlessly coexist every single weekend.",
    images: [plaza1, plaza2],
    source: "(src: Official website of Chandigarh Administration)",
  },
  {
    name: "Lohri Festival",
    tagline: "",
    description:
      "Lohri is a deeply passionate, high-energy cultural festival celebrated on the 13th of January every year with unmatched enthusiasm across every single residential sector and community hub in Chandigarh. Marking the official end of the brutal peak winter season and the joyous arrival of the longer, warmer days of spring, Lohri holds immense agricultural and social significance for the region's population. As dusk falls, massive community bonfires are lit in public parks, residential colonies, and the courtyards of homes, around which families and neighbors gather in large numbers to socialize. People offer prayers to the sacred fire deity for continuous prosperity, traditional harvest offerings like crunchy sesame seeds, sweet jaggery, popcorn, and roasted peanuts directly into the blazing flames while chanting ancient folk songs. The rhythmic, thunderous beats of the traditional dhol echo through the clean streets of Chandigarh as men and women enthusiastically perform the highly energetic Bhangra and Gidha dances around the warm bonfires. Lohri holds an incredibly special significance for families that have recently celebrated a wedding or welcomed a newborn baby, marked by grand, lavish parties, gift exchanges, and generous charity to the less fortunate. The festival concludes with a delicious, heavy traditional winter feast featuring steaming hot Makki di Roti, rich Sarson da Saag, and sweet homemade til laddoos, beautifully strengthening neighborhood bonds and keeping ancient Punjabi traditions alive.",
    images: [lohri1],
    source: "(src: Punjab tourism)",
  },
  {
    name: "Baisakhi",
    tagline: "",
    description:
      "Baisakhi is a highly auspicious and vibrant Punjabi festival celebrated on the 13th or 14th of April with immense joy, religious devotion, and massive cultural parades throughout the city of Chandigarh. It serves a double significance as it marks the joyful harvest of the golden rabi crops for farmers and commemorates the historic formation of the sacred Khalsa Panth by Guru Gobind Singh Ji in 1699. The city's magnificent Gurdwaras, particularly the famous Gurdwara Shahpur in Sector 38, are beautifully illuminated with thousands of fairy lights and witness an immense influx of devotees seeking spiritual blessings. The holy day begins with early morning prayers, continuous chanting of sacred hymns, and the distribution of smooth, sweet Karah Parshad among all visitors regardless of their caste or background. Massive, community-driven Langars (free community kitchens) are organized across the city, where volunteers work tirelessly to serve hot, nutritious meals to thousands of residents in a beautiful display of equality and humility. Spectacular Nagar Kirtan processions move gracefully through the main avenues of Chandigarh, led by the saffron-clad Panj Pyaras and featuring breathtaking martial arts displays known as Gatka by trained Sikh youths. Cultural academies host grand public events featuring high-octane Bhangra performances, loud folk music, and traditional fairs, turning Baisakhi into a massive, city-wide celebration of freedom, gratitude, and rich agricultural heritage.",
    images: [baisakhi1, baisakhi2],
    source: "(src: wikimedia)",
  },
  {
    name: "Gurupurab",
    tagline: "Marks the birth anniversaries of the holy Sikh Gurus",
    description:
      "Celebrated with immense solemnity, peace, and deep devotion across Chandigarh. The most prominent among these are the birth anniversaries of Guru Nanak Dev Ji in November and Guru Gobind Singh Ji in January, transforming the entire city into a serene sanctuary of lights and prayers. Days before the main event, early morning religious processions called Prabhat Pheris wander through the quiet residential neighborhoods of Chandigarh, with devotees singing beautiful devotional hymns to awaken the city. Gurdwaras are magnificently decorated with spectacular floral arrangements and dazzling arrays of lights, hosting non-stop, 48-hour readings of the holy scripture, the Guru Granth Sahib, known as Akhand Path. On the main day, the atmosphere is incredibly peaceful yet grand, as thousands of citizens stand in long, disciplined queues to pay their respects, listen to moving spiritual discourses, and participate in community service. The grand Langar served on Gurpurab is a massive operation where wealthy entrepreneurs, students, and working-class citizens sit side-by-side on the floor, epitomizing Guru Nanak’s core philosophy of universal brotherhood and selfless humanity. As night falls, the sky above Chandigarh’s Gurdwaras is lit up with dazzling displays of fireworks, while thousands of traditional oil lamps are lit around water sarovars, creating a deeply moving, unforgettable spiritual experience.",
    images: [gurupurab1, gurupurab2],
    source: "(src: Shutterstock)",
  },
];

const historicalPlaces = [
  {
    name: "The Open Hand Monument",
    description:
      "The Open Hand Monument stands proudly as the most iconic and defining symbol of Chandigarh, embodying the very soul, philosophy, and architectural genius of its creator, the legendary Swiss-French architect Le Corbusier. Erected majestically within the Capitol Complex in Sector 1, this colossal structure is not merely a piece of public art but a profound philosophical statement cast in metal, meticulously designed to convey a message of global peace, prosperity, and unity. Standing at an impressive total height of 85 feet from its concrete base, the hand itself is a massive, elegant sheet-metal structure that measures approximately 46 feet in height and weighs a staggering 50 tons. What makes this monument an engineering marvel is that despite its immense weight and scale, the hand is perfectly balanced on a rotating pivot, allowing it to turn fluidly with the direction of the wind, much like a giant, metallic weather vane. This intentional dynamic movement symbolizes the ever-changing nature of life and the continuous flow of time, energy, and human progress. Le Corbusier conceived the idea of the Open Hand long before Chandigarh was even mapped out, seeing it as a recurring motif in his personal artwork, but it was in this city that his vision finally found its permanent, grandest physical manifestation. The core philosophy behind the monument is beautifully simple yet deeply profound: it represents a hand that is 'open to give and open to receive', urging mankind to share its wealth, knowledge, and resources generously while remaining receptive to new ideas, cultures, and progress. It was Le Corbusier’s earnest prayer for a newly independent India, a country he hoped would break free from the rigid shackles of past dogmas and embrace a forward-looking, inclusive future. The monument is set against the dramatic backdrop of the Shivalik hills, which enhances its stark, powerful silhouette when viewed against the changing colors of the sky at sunrise and sunset. To give the monument a sense of contemplative isolation and grandeur, it is situated inside a sunken concrete plaza known as the 'Trench of Contemplation', which was designed by Le Corbusier as an outdoor amphitheater for public debate, thought, and civic interaction. This sunken design ensures that visitors look up at the soaring hand, creating a sense of awe and encouraging introspection about humanity's role in creating a peaceful world. Over the decades, the Open Hand has transcended its physical form to become the official emblem of the Chandigarh Administration, featured on everything from government seals to local souvenirs. It serves as a constant reminder to residents and tourists alike of the city's founding principles: openness, modernity, egalitarianism, and a structural harmony with the natural elements. Today, as part of the Capitol Complex, it enjoys the prestigious status of being a UNESCO World Heritage Site, drawing architecture enthusiasts, historians, and travelers from all corners of the globe who come to marvel at how a simple human gesture was transformed into an immortal architectural masterpiece.",
    images: [openhand1, openhand2],
    source: "(src: Wikimedia, National Geographic)",
  },
  {
    name: "The Secretariat Building",
    description:
      "The Secretariat Building is a monumental feat of modernist architecture and the bureaucratic powerhouse of Chandigarh, serving as the joint administrative headquarters for the state governments of both Punjab and Haryana. Located in Sector 1 as a key component of Le Corbusier’s world-renowned Capitol Complex, this massive structure is the largest of all the buildings erected in the civic center, stretching an astonishing 800 feet in length. Designed in the early 1950s, the Secretariat is a premier example of 'Brutalist' architecture, characterized by its extensive, raw, and unadorned use of exposed reinforced concrete, which Le Corbusier favored for its honesty, durability, and sculptural malleability. The building is divided into six distinct blocks that rise to a height of eight stories, creating a imposing, linear facade that dominates the local landscape while running parallel to the Shivalik hill range in the distance. One of the most striking architectural features of the Secretariat is its innovative use of brise-soleil (concrete sun-breakers), which form a complex, undulating grid across the building's exterior. These sun-breakers are not merely decorative; they were meticulously calculated by Le Corbusier to shield the massive glass windows from the harsh, scorching Indian summer sun while allowing natural light and cool breeze to penetrate deep into the office corridors. The building's facade is further broken up by a dramatic, centrally located cafeteria block that projects outward like a sculpted cloud, offering a beautiful visual contrast to the rigid, geometric lines of the main structure. Inside, the Secretariat houses hundreds of government offices, interconnected by a fascinating network of long, open-air corridors, interior ramps, and grand staircases that promote a sense of fluid movement and transparency. Le Corbusier rejected the traditional use of enclosed, dark corridors, choosing instead to create bright, well-ventilated pathways that look out onto the city and the mountains, thereby connecting the government workers with the natural world outside. The rooftop of the Secretariat is another masterpiece of urban design, featuring a vast, landscaped terrace with sculptural concrete structures that serve as ventilation shafts, observation points, and recreational spaces for employees. From this elevated vantage point, one can enjoy an unparalleled, panoramic view of the entire Capitol Complex, the grid-iron layout of Chandigarh, and the majestic hills beyond. In 2016, the Secretariat, along with the rest of the Capitol Complex, was officially inscribed as a UNESCO World Heritage Site, recognizing its outstanding universal value to human history and architectural evolution. It stands today not just as a functional hub of political decision-making, but as an enduring monument to post-independence India’s determination to embrace modernity, scientific temper, and bold, revolutionary design.",
    images: [secratariat1, secratariat2],
    source: "(src: UNESCO world heritage)",
  },
  {
    name: "The Palace of Assembly (Legislative Assembly)",
    description:
      "The Legislative Assembly, also known as the Palace of Assembly, is an architectural tour de force that stands as the philosophical and visual anchor of Le Corbusier's Capitol Complex in Sector 1. Facing the Secretariat across a vast, majestic concrete plaza, this building houses the democratic legislative bodies of both Punjab and Haryana, making it a living monument to Indian democracy and governance. The exterior of the Palace of Assembly is instantly recognizable by its dramatic, sweeping portico, which features a massive, upward-curving concrete roof inspired by the horns of Indian cattle and the sleek, aerodynamic hulls of ships. This monumental canopy acts as a colossal sunshade, creating a deep, cool shadow over the main entrance and protecting the glass-walled interior from the intense heat of the northern Indian plains. The most radical and awe-inspiring feature of the building, however, is its unique roofline, which is dominated by a giant, hyperbola-shaped cooling tower and a prominent concrete pyramid. The cooling tower sits directly above the main legislative chamber, a design choice inspired by the industrial cooling towers Le Corbusier observed in power stations, which he poetically repurposed to symbolize the generation of democratic power and intellectual debate. Inside the main assembly hall, the space is circular and soaring, completely bathed in an ethereal, dramatic play of natural light that streams down from a circular opening at the top of the tower, functioning much like an architectural sundial. This skylight was meticulously engineered to cast a beam of direct sunlight onto the speaker’s chair on specific historic days, such as the opening of the legislative session, bridging the gap between cosmos, nature, and human governance. The interior walls of the chamber are adorned with acoustic panels painted in vibrant, bold primary colors and abstract shapes, which break the monotony of the gray concrete and enhance the vocal clarity of the debating lawmakers. Another legendary feature of the building is the monumental ceremonial doorway, which features a massive steel door gifted to Chandigarh by the government of France, adorned with hand-painted enamel murals by Le Corbusier himself. These colorful murals depict a complex tapestry of cosmic symbols, including the sun, the moon, the turning of the seasons, and the mathematical 'Modulor' scale of human proportions, illustrating the harmony that should exist between human laws and the laws of the universe. The building is surrounded by a large, tranquil reflecting pool on one side, which perfectly mirrors its stark concrete geometries, making the massive structure appear as if it is floating gracefully on the water's surface. As a designated UNESCO World Heritage Site, the Palace of Assembly remains an unparalleled pilgrimage site for architects and travelers worldwide, representing a fearless, poetic, and cosmic interpretation of civic space.",
    images: [assembly1, assembly2],
    source: "(src: Wikimedia)",
  },
  {
    name: "The High Court (Palace of Justice)",
    description:
      "The Palace of Justice, universally known as the Punjab and Haryana High Court, is the first grand monument completed by Le Corbusier within the Capitol Complex, standing as a brilliant testament to the rule of law and judicial majesty. Completed in 1954, this breathtaking structure forms the eastern flank of the complex and is designed to reflect the weight, dignity, and transparency that is essential to the delivery of public justice. The most spectacular and instantly memorable feature of the High Court is its monumental, double-layered roof, which consists of a massive, overarching concrete canopy that sits above the actual flat roof of the building. This ingenious 'roof over a roof' design acts as a giant umbrella, creating a continuous channel of cooling air that flows between the two layers, significantly lowering the indoor temperature during the scorching summer months without the need for artificial air conditioning. The front facade of the building is dominated by three colossal, vibrant concrete pillars that soar from the ground to the very top of the roof, painted in brilliant shades of primary red, yellow, and deep blue. These monumental pillars are not merely structural supports; they create a grand, open-air entrance hall that symbolizes the openness and accessibility of justice to the common citizen, breaking away from the dark, intimidating courthouse designs of the colonial era. The building houses the main courtroom of the Chief Justice along with several smaller, flanking courtrooms, all of which are fronted by a complex, beautifully patterned grid of concrete sun-breakers (brise-soleil) that filter the intense sunlight into a soft, scholarly glow. Inside the courtrooms, Le Corbusier collaborated with his cousin Pierre Jeanneret to design the interior spaces, ensuring that every piece of furniture, from the judicial benches to the wooden chairs, conformed to a unified, modernist aesthetic. To solve the intense acoustic challenges posed by the raw concrete walls, Le Corbusier designed a series of enormous, hand-woven wool tapestries that cover the entire back wall of each courtroom. These tapestries, woven by local Indian craftsmen based on abstract geometric designs drawn by Le Corbusier, feature bold patterns that symbolize law, order, nature, and weight of justice, while effectively absorbing sound to ensure perfect clarity during legal arguments. The High Court is separated from the other Capitol buildings by expansive green lawns and paved plazas, allowing visitors to approach the temple of justice with a sense of peace, calm, and reverence. Now recognized globally as a UNESCO World Heritage Site, the High Court continues to function as an active, bustling center of legal life, demonstrating how radical architectural forms can perfectly serve the daily, practical needs of society.",
    images: [court1],
    source: "(src: Punjab & Haryana high court official)",
  },
  {
    name: "The Rock Garden of Nek Chand",
    description:
      "The Rock Garden of Nek Chand is a world-famous, miraculous monument of human imagination, artistic resilience, and environmental sustainability, located hidden away in Sector 1 near Sukhna Lake. Unlike the grand, meticulously planned concrete structures of Le Corbusier, the Rock Garden is a whimsical, organic wonderland that was built entirely in secrecy by a humble government road inspector named Nek Chand Saini. Starting in 1958, Nek Chand began clearing a small patch of jungle land near a gorge, collecting discarded waste materials, broken pottery, and unique rocks from the demolition sites of the old villages that were cleared to build Chandigarh. For over fifteen years, he worked quietly under the cover of night, using his creative genius to transform urban garbage into a sprawling, magical kingdom populated by thousands of unique sculptures. When his unauthorized creation was finally discovered by the city authorities in 1975, it faced the threat of immediate demolition, but the citizens of Chandigarh fell in love with its unparalleled beauty, forcing the administration to recognize it and open it to the public as a grand civic park. Today, the Rock Garden has expanded into a massive 40-acre complex, divided into distinct, interconnected phases that lead visitors through a labyrinth of narrow pathways, deep gorges, and low-roofed tunnels designed to evoke a sense of mystery and discovery. The garden is home to an army of life-sized sculptures representing musicians, dancers, soldiers, monkeys, birds, and village women, all meticulously crafted out of broken glass bangles, discarded porcelain electrical plugs, cracked toilet bowls, broken ceramic tiles, and industrial slag. Visitors walk past grand, man-made waterfalls, terraced amphitheatres, and massive courtyard walls lined with abstract mosaics that rival the works of Antoni Gaudí. One of the most spectacular areas is the grand swing courtyard, where massive swings are suspended from high concrete arches, inviting adults and children alike to engage in playful joy. The entire monument stands as a powerful, pioneering masterpiece of eco-art and recycling, built decades before environmental sustainability became a global buzzword. It represents the perfect, romantic counterpoint to the rigid, geometric planning of the rest of Chandigarh, showing that raw human imagination can find beauty in the most discarded and forgotten remnants of society. The Rock Garden attracts thousands of international and domestic tourists every day, cementing its status as one of India's most visited and deeply loved cultural landmarks.",
    images: [rock1, rock2],
    source: "(src: Chandigarh tourism, Wikimedia)",
  },
  {
    name: "Geometric Hill and Tower of Shadows",
    description:
      "The Geometric Hill and the Tower of Shadows are two closely linked, avant-garde architectural monuments located in the central plaza of the Capitol Complex in Sector 1, designed by Le Corbusier to showcase his mastery over light, shadow, and cosmic orientation. The Tower of Shadows is an open-sided, multi-story concrete pavilion that was constructed as a scientific and artistic experiment to track and tame the solar cycle of northern India. Le Corbusier designed this structure with a complex system of deep, heavy concrete louvers and sun-breakers arranged at precise mathematical angles based on the movement of the earth around the sun. The primary goal of this fascinating monument was to prove that a building can be kept completely cool and shaded from the inside on all sides, even during the hottest days of the year, purely through correct orientation and geometric structural design. When you step inside the Tower of Shadows during the peak of a scorching summer noon, you will find yourself standing in a surprisingly cool, dark, and tranquil sanctuary, with the harsh sunlight completely blocked by the concrete fins. Conversely, during the cold winter months, the angled louvers allow the low winter sun to penetrate deep into the structure, warming the space naturally. This monument is a pure manifestation of Le Corbusier's 'solar architecture', showing that buildings do not need to fight against nature but can instead dance in harmony with it. Directly adjacent to this structure lies the Geometric Hill, a massive, artificial earthen mound covered in a smooth layer of concrete, with its surface painted or etched with large, abstract geometric patterns. This hill was engineered using the excess soil excavated during the construction of the Secretariat and Assembly buildings, showcasing a brilliant early example of sustainable landscape management. The surface of the hill features a massive, stylized relief representing the path of the sun, divided into two distinct halves: one symbolizing the summer solstice and the other the winter solstice. The hill serves as a monumental visual backdrop that breaks the flat monotony of the massive concrete plaza, creating a dialogue between the earth, the sky, and the surrounding buildings. Together, the Tower of Shadows and the Geometric Hill function as a giant, open-air cosmic laboratory, reminding visitors of the ancient Indian architectural tradition of connecting human structures with astronomical movements, updated beautifully for the modern age.",
    images: [tower1],
    source: "(src: ResearchGate)",
  },
  {
    name: "Martyr's Memorial",
    description:
      "The Martyr's Memorial is a solemn, deeply moving monument located within the Capitol Complex in Sector 1, dedicated to honoring the eternal memory and sacrifices of the martyrs who laid down their lives during the historic partition of India in 1947. Designed by Le Corbusier, this monument is a masterful exercise in minimalist, symbolic architecture, using raw materials and abstract forms to evoke deep feelings of grief, remembrance, honor, and national pride. The memorial consists of a massive, square concrete enclosure that is completely open to the sky, creating a quiet, cloistered sanctuary of peace away from the busy administrative hustle of the surrounding government buildings. Within this stark, contemplative plaza sits a large, deeply symbolic concrete sculpture representing an abstract, fallen crown or a broken architectural form, which signifies the painful fracturing of the nation and the tragic loss of human life during the partition. Next to this central sculpture stands a tall, slender concrete obelisk that pierces the sky, representing the unyielding spirit of survival, freedom, and the soaring aspirations of a newly independent India. The walls of the enclosure are adorned with beautifully stylized, low-relief concrete carvings and inscriptions that depict allegorical figures, historical emblems, and symbols of peace, unity, and sacrifice. Le Corbusier purposefully designed the approach to the Martyr's Memorial via a long, sunken pathway, forcing visitors to descend slightly below ground level as they walk toward the sanctuary. This intentional architectural descent creates a powerful psychological transition, encouraging visitors to leave behind their daily distractions, lower their voices, and enter a state of deep respect and quiet meditation. The open-roof design ensures that the monument is constantly interacting with the natural elements; the changing patterns of sunlight and shadow throughout the day give the gray concrete walls a shifting, living quality, while the monsoons wash over the structures like tears of remembrance. For decades, the Martyr's Memorial has served as the sacred site for official state ceremonies on national holidays like Independence Day and Republic Day, where leaders lay wreaths in honor of the fallen. It remains a crucial historical anchor within Chandigarh, ensuring that while the city looks boldly toward a prosperous, modern future, it never forgets the immense human cost and the foundations of sacrifice upon which the modern nation was built.",
    images: [martyr1],
    source: "(src: Ministry of Culture Portal)",
  },
  {
    name: "Gandhi Bhawan",
    description:
      "Gandhi Bhawan is a breathtakingly beautiful, architectural masterpiece and an intellectual monument located at the heart of the Panjab University campus in Sector 14, dedicated to the study of the life, philosophy, and teachings of Mahatma Gandhi. Designed by the celebrated Swiss architect Pierre Jeanneret—who was Le Corbusier’s cousin and the unsung hero who oversaw the daily building of Chandigarh—this monument is widely considered one of the finest examples of mid-century modern campus architecture in the world. Completed in 1962, Gandhi Bhawan is instantly recognizable by its dramatic, organic shape, which resembles a three-petaled lotus blossom floating gracefully in the middle of a vast, shimmering blue reflecting pool. The stark white concrete walls of the building rise sharply from the water at sharp, sculptural angles, creating a stunning visual contrast with the deep blue sky and the surrounding lush green lawns of the university. Jeanneret intentionally chose a clean, brilliant white finish for the exterior walls to symbolize the purity, simplicity, and truth that were the core tenets of Mahatma Gandhi’s philosophy of Satyagraha. The building is approached by a narrow, elegant concrete bridge that spans across the reflecting pool, forcing visitors to walk single file, a design that encourages a quiet, mindful, and reverent approach to the shrine of knowledge. Inside, the three wings of the lotus blossom house a specialized library filled with thousands of books on Gandhian thought, a peaceful seminar room for academic discussions, and a central, serene auditorium for lectures and public screenings. The interior spaces are bathed in a soft, diffused natural light that enters through narrow, vertical slits in the concrete walls and a spectacular skylight at the apex of the roof, eliminating the need for harsh artificial lighting and creating a perfect environment for study and meditation. The gentle sound of water rippling against the base of the building outside permeates the interior, enhancing the sense of profound stillness, tranquility, and intellectual focus. Gandhi Bhawan is not just a static museum; it remains a vibrant, living center of student life, social activism, and intellectual debate, hosting regular seminars on peace, rural development, and non-violence. It stands as a magnificent monument to how modern, abstract architecture can successfully capture and communicate the deeply spiritual and humble essence of India's Father of the Nation.",
    images: [gandhi1],
    source: "(src: Punjab university)",
  },
  {
    name: "Sector 17 Plaza (The City Centre)",
    description:
      "The Sector 17 Plaza is the grand commercial, cultural, and social monument of Chandigarh, designed by Le Corbusier and Pierre Jeanneret to serve as the energetic, beating heart of the city’s civic life. Conceived as a pedestrian paradise, this massive, multi-acre open-air plaza is a revolutionary departure from traditional, congested Indian bazaars, reflecting the ultimate ideals of modern urban planning and community integration. The architecture of Sector 17 is characterized by its uniform, four-story concrete buildings arranged in a grand, spacious grid, featuring deep, covered pedestrian arcades that shelter shoppers from both the torrential monsoon rains and the blazing summer sun. These monumental concrete facades are designed with strict geometric symmetry, utilizing a uniform rhythm of windows and structural pillars that give the entire commercial district a sense of grand, classical order, yet executed in a thoroughly modern idiom. The true genius of the Plaza lies in its complete exclusion of vehicular traffic; all cars and public transport are relegated to peripheral parking lots and ring roads, leaving the vast central concrete courtyards entirely free for pedestrians, children, and street performers. The Plaza is dotted with beautifully designed public amenities, including giant concrete fountains, landscaped green islands, rows of shady trees, and elegant public seating areas where citizens can sit, relax, and socialize. Over the decades, Sector 17 has evolved into Chandigarh’s premier public square, acting as a giant open-air theater where the city celebrates cultural festivals, national holidays, musical concerts, and political rallies. At night, the monument undergoes a spectacular transformation as the buildings are illuminated by vibrant neon signs and the central fountains come alive with choreographed musical light shows, drawing thousands of families, students, and tourists who come to enjoy the cool evening breeze. It represents the successful materialization of Le Corbusier’s vision of the city as a living organism, where Sector 17 acts as the vital 'center of vitality and commerce', balancing the administrative gravity of Sector 1. Today, even with the rise of modern, enclosed shopping malls, the historic Sector 17 Plaza remains an irreplaceable cultural monument and the ultimate symbol of Chandigarh’s vibrant, democratic, and celebratory public life.",
    images: [center1],
    source: "(src: Municipal Corporation Chandigarh Portal)",
  },
  {
    name: "Le Corbusier Centre",
    description:
      "The Le Corbusier Centre, located in Sector 19, is a priceless historical monument and a living archive dedicated to documenting, preserving, and celebrating the fascinating story of the creation and building of Chandigarh. The building that houses the center is a historic monument in its own right; it was one of the very first structures erected in Chandigarh in the early 1950s, serving originally as the old Old Architect’s Office where Le Corbusier, Pierre Jeanneret, Jane Drew, Maxwell Fry, and their team of young Indian architects spent years brainstorming, drawing, and execution planning for the entire city. Designed by Pierre Jeanneret, the building is a beautiful, modest example of climate-responsive, low-cost regional modernism, constructed using locally sourced red bricks, rough concrete, and large wooden-framed windows designed to maximize natural cross-ventilation. In 2008, on the occasion of Le Corbusier's 121st birth anniversary, the administration carefully restored this historic office and converted it into a state-of-the-art museum and research center. As you walk through its long, nostalgic corridors and high-ceilinged rooms, you are transported back in time to the birth of the city, surrounded by a treasure trove of original hand-drawn maps, blueprints, archival photographs, and official letters exchanged between Le Corbusier and Prime Minister Jawaharlal Nehru. The center showcases the meticulous thought process that went into planning every single aspect of Chandigarh, from the micro-level design of manhole covers and street lamps to the macro-level planning of the unique sector grid system and the city’s massive green lungs. One of the most fascinating exhibits is the collection of original mid-century furniture designed by Pierre Jeanneret, including his iconic V-legged teakwood chairs, desks, and lounge sofas, which were crafted out of local materials to populate the city's government offices. The walls of the center still feature some of the original sketches, notes, and color palettes scribbled by the master architects as they worked out the acoustics of the High Court or the curves of the Assembly roof. The Le Corbusier Centre serves not only as a nostalgic museum for tourists but also as an active research institution for architects, urban planners, and historians from across the globe who come to study the genetic code of the 'City Beautiful'. It stands as an indispensable monument that honors the collaborative human effort, visionary leadership, and artistic passion that transformed a blank canvas of agricultural fields into one of the world's greatest experiments in modern living.",
    images: [corbusier1],
    source: "(src: Chandigarh official tourism directories)",
  },
];

const facts = [
  "Designed with Human Anatomy in Mind: The city’s Swiss-French architect, Le Corbusier, envisioned Chandigarh’s master plan as analogous to a human body. The Capitol Complex represents the head, Sector 17 acts as the heart, the Leisure Valley serves as the lungs, and the network of roads functions as the circulatory system.",
  "A Capital for Two Different States: Chandigarh holds the rare political distinction of serving as the joint capital city for both Punjab and Haryana. However, to maintain administrative neutrality, the city itself belongs to neither state and is governed directly by the central government as a Union Territory.",
  "Originally Lacked a Sector 13: When the city was first designed, it skipped the number 13 entirely, jumping straight from Sector 12 to Sector 14 because Le Corbusier considered 13 an inauspicious number. This superstition persisted for over half a century until the historic neighborhood of Manimajra was officially renamed Sector 13 in recent years. ",
  "Built Completely Out of Waste: The world-famous Rock Garden in Chandigarh is a sprawling, 40-acre sculpture park crafted entirely from industrial and domestic waste material. Its visionary creator, Nek Chand, spent decades secretly using broken bangles, discarded tiles, wires, and scrap porcelain to build thousands of incredible statues.",
  "A Strict 'No Statues' Edict: Le Corbusier prescribed an official 'Edict of Chandigarh' to guide the city's growth, which included a strict ban on erecting personal statues in public spaces. The rule was established to ensure that the urban focus remained purely on architectural harmony and modern design rather than political or historical figures.",
  "The Giant Rotating Open Hand: The city's official emblem is the Open Hand Monument, a massive 14-meter-tall, 50-ton metal structure that stands for peace, unity, and the philosophy of being 'open to receive and open to give'. Remarkably, the entire metal hand is engineered to rotate like a weather vane, turning naturally with the direction of the wind.",
  "The Smart '7Vs' Road Network: Traffic in Chandigarh flows through a uniquely structured hierarchy known as the '7Vs' (Les Sept Voies) system. Roads are divided into seven specific categories ranging from V1 (arterial highways) to V7 (pedestrian pathways), completely isolating fast-moving traffic from quiet residential lanes.",
  "Home to Asia’s Largest Rose Garden: The Zakir Hussain Rose Garden covers over 30 massive acres and is recognized as one of the largest botanical rose gardens on the continent. It hosts more than 1,600 distinct varieties of roses alongside an abundance of rare medicinal plants and trees.",
  "Formed on an Ancient Lakebed: Geological studies and fossil discoveries show that the flat terrain on which modern Chandigarh stands was once a vast prehistoric lake ringed by marshes. This rich landscape later became home to the ancient Harappan (Indus Valley) civilization roughly 8,000 years ago.",
  "Known as the 'Pensioner’s Paradise': Because Chandigarh houses the active government headquarters of Punjab, Haryana, and its own central administration, it has an incredibly high density of government employees. This peaceful environment, combined with its high quality of life, has traditionally made it the preferred retirement haven for retired civil servants.",
];

const artGallery = [
  {
    title: "Chandigarh",
    emoji: "🍛",
    color: "#D4883A",
    desc: "The well-planned capital city known for its modern architecture, gardens, and clean environment",
    image: gChandigarh,
  },
  {
    title: "Panchkula",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "A nearby beautiful city famous for its parks, hills, and peaceful residential areas",
    image: gPanchkula,
  },
  {
    title: "Chole Bhature",
    emoji: "🍚",
    color: "#E8733A",
    desc: "A famous Punjabi dish made with spicy chickpeas and fluffy deep-fried bread, loved as a hearty breakfast and lunch",
    image: gChole,
  },
  {
    title: "Butter Chicken",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "A rich and creamy chicken curry cooked with butter, tomatoes, and aromatic spices, widely enjoyed across Chandigarh",
    image: gButter,
  },
  {
    title: "Bhangra",
    emoji: "🥐",
    color: "#F4E884",
    desc: "A lively and energetic folk dance performed to the beat of dhol during festivals and celebrations",
    image: gBhangra,
  },
  {
    title: "Giddha",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "A colorful folk dance performed by women with graceful movements, claps, and traditional songs",
    image: gGiddha,
  },
  {
    title: "Blackbuck",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "A graceful antelope known for its spiral horns and fast running speed, often seen in nearby wildlife reserves",
    image: gBlackbuck,
  },
  {
    title: "Indian Peafowl",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "The colorful national bird of India, admired for its beautiful feathers and elegant dance during the rainy season",
    image: gPeafowl,
  },
  {
    title: "Sukhna Lake",
    emoji: "🥭",
    color: "#F8C840",
    desc: "A beautiful man-made lake popular for boating, walking, and enjoying peaceful sunset views",
    image: gSukhna,
  },
];
