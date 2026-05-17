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
const ddMap = "https://i.postimg.cc/rFsxs9R6/image.png";
// Festivals
const Garba1 = "https://i.postimg.cc/vmFVPFPq/image.png";
const Garba2 = "https://i.postimg.cc/xjxNwbx1/image.png";
const NaraliPurnima1 = "https://i.postimg.cc/SNnYkN3t/image.png";
const NaraliPurnima2 = "https://i.postimg.cc/R0BW71hz/image.png";
const Fair1 = "https://i.postimg.cc/mDdhW0Sn/image.png";

// Historical Places
const MotiDamanFort1 = "https://i.postimg.cc/PfRN3nJb/image.png";
const MotiDamanFort2 = "https://i.postimg.cc/6psqKVdT/image.png";
const MotiDamanFort3 = "https://i.postimg.cc/Bnx6n8gY/image.png";
const MotiDamanFort4 = "https://i.postimg.cc/jjtjws3T/image.png";
const CathedralofBomJesus1 = "https://i.postimg.cc/9fbQyvsY/image.png";
const CathedralofBomJesus2 = "https://i.postimg.cc/XJv7Ls0L/image.png";
const CathedralofBomJesus3 = "https://i.postimg.cc/KzscHtG3/image.png";
const CathedralofBomJesus4 = "https://i.postimg.cc/zvbDZ3vw/image.png";
const DominicanMonastery1 = "https://i.postimg.cc/sxkjVyZF/image.png";
const DominicanMonastery2 = "https://i.postimg.cc/ry3FGGZC/image.png";
const DominicanMonastery3 = "https://i.postimg.cc/28Wj0qPf/image.png";
const DominicanMonastery4 = "https://i.postimg.cc/3w8KrtWj/image.png";
const DominicanMonastery5 = "https://i.postimg.cc/cLMxNpxP/image.png";
const DominicanMonastery6 = "https://i.postimg.cc/85sNMsR8/image.png";
const NaniDamanFort1 = "https://i.postimg.cc/0Q3xfxnw/image.png";
const NaniDamanFort2 = "https://i.postimg.cc/wMmz4P4G/image.png";
const SomnathMahadevTemple1 = "https://i.postimg.cc/Thv6z9Z3/image.png";
const SomnathMahadevTemple2 = "https://i.postimg.cc/FFMkFQvK/image.png";
const SomnathMahadevTemple3 = "https://i.postimg.cc/VLXrdHsW/image.png";
const Panikotha1 = "https://i.postimg.cc/y8BJ9XWr/image.png";
const Panikotha2 = "https://i.postimg.cc/13H8Knqs/image.png";
const ZampaGateway1 = "https://i.postimg.cc/k5YDk0w9/image.png";
const ZampaGateway2 = "https://i.postimg.cc/MTcXx9rQ/image.png";
const temple1 = "https://i.postimg.cc/4yVdHmgr/image.png";
const temple2 = "https://i.postimg.cc/zXwvJbpQ/image.png";
const temple3 = "https://i.postimg.cc/13Jzqkkz/image.png";
const temple4 = "https://i.postimg.cc/mg8rHvvS/image.png";
const vive1 = "https://i.postimg.cc/bvrwH68c/image.png";
const vive2 = "https://i.postimg.cc/9fkFxGFV/image.png";


// Art Gallery
const gDamanFishCurry = "https://i.postimg.cc/Qdt3RHzH/image.png";
const gWarliArt = "https://i.postimg.cc/W3RcFS1F/image.png";
const gTarpaDance = "https://i.postimg.cc/tRNGJ3Qt/image.png";
const gTribalAttire = "https://i.postimg.cc/FFZwNh31/image.png";
const gBambooCraft = "https://i.postimg.cc/hvyCxP1M/image.png";
const gToddy = "https://i.postimg.cc/tJKx8Kq4/image.png";
const gHokaTrees = "https://i.postimg.cc/pdHBmFtz/image.png";

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
export default function DadraandNagarHaveliandDamanandDiu() {
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
               Western India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Dadra & Nagar Haveli and Daman & Diu
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Coastal Charm of Western India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Daman" },
                  { label: "Population", value: "5.86 lakhs" },
                  { label: "Area", value: "603 sq km" },
                  { label: "Founded", value: "26 January 2020" },
                  { label: "Language", value: "Gujarati, Hindi, Konkani" },
                  { label: "Districts", value: "3 Districts" },
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
             Daman
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Dadra & Nagar Haveli and Daman & Diu — Where Tribal Roots Meet Colonial Routes
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of DadraanadNagarHaveliandDamanandDiu" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(ddMap, "Map of Dadra & Nagar Haveli and Daman & Diu")}
            >
              <img
                src={ddMap}
                alt="Map of DadraanadNagarHaveliandDamanandDiu"
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
             Located on India’s western coast, the Union Territory of Dadra and Nagar Haveli and Daman and Diu is a fascinating administrative region that blends deep-rooted tribal traditions with a unique Portuguese colonial legacy. Geographically, the territory is divided into three distinct enclaves: Daman and Diu are coastal pockets located on the shores of the Arabian Sea, bordered by the state of Gujarat, while Dadra and Nagar Haveli is situated further inland, nestled between the borders of Gujarat and Maharashtra. This specific placement makes it a vital bridge between two of India’s most industrialized states. The territory in its unified form is relatively new, having been officially formed on January 26, 2020, through a merger intended to streamline governance and optimize resource allocation across the separate enclaves. 
            </p>
            <p className="text-foreground">
              The status of a Union Territory (UT) makes this region special compared to a traditional state. Unlike states, which possess their own elected legislative assemblies and the autonomy to govern local affairs like land and policing, a UT is governed directly by the Central Government of India through an appointed Administrator. This direct federal oversight is particularly crucial for smaller regions that have strategic coastal importance or unique historical backgrounds that require specialized preservation and administrative focus. This governance model allows for faster implementation of central schemes and direct funding, which has been instrumental in the region's rapid transformation into an industrial powerhouse.
            </p>
            <p className="text-foreground">
             The history of the region is a tapestry of maritime influence and resistance. For over four centuries, these lands were under Portuguese control, serving as key trading posts. While most of India gained independence in 1947, Dadra and Nagar Haveli were liberated by local citizens in 1954, and Daman and Diu remained Portuguese until 1961, when they were integrated into India following "Operation Vijay." This long European presence is still visible in the massive stone forts of Moti Daman and the Mediterranean-style white-washed churches. This historical depth is complemented by the natural landscape, specifically the Daman Ganga River, which flows through the heart of the territory, providing the necessary water resources for both the lush forests of the interior and the heavy industries of the coast.
            </p>
            <p className="text-foreground">
             Linguistically, the territory is a melting pot. Gujarati and Hindi are the most widely spoken languages, reflecting the surrounding regional influences, while Marathi is common in areas bordering Maharashtra. The capital is Daman and the largest city is Silvassa. A small community still preserves a Portuguese-based creole, a rare linguistic artifact of its colonial past. Today, the UT is defined by its intense development. It has evolved from a collection of quiet fishing villages and tribal hamlets into one of India’s most significant manufacturing hubs, particularly in sectors like textiles, plastics, and electronics.
            </p>
            <p className="text-foreground">
             Recent developmental strides have seen the territory embrace the "Smart City" mission, resulting in modernized seafront promenades in Daman and improved urban infrastructure in Silvassa. The government has focused on balancing this industrial growth with environmental conservation, promoting eco-tourism in the verdant, hilly tracts of Nagar Haveli. With its tax-friendly environment and strategic proximity to Mumbai and Surat, the territory has seen a massive influx of investment. It now stands as a modern, thriving entity that successfully manages to honor its complex history while driving forward as a model of efficient, centralized development. Its unique position on the map and its administrative agility make it a small but mighty contributor to the national economy. 
            </p>
            <p className="text-foreground italic text-primary font-medium">
              The cradle of Varli tradition,where ancient art is speckeld acroos the landscape in a vibrant display of communal heritage
            </p>
            <p className="text-xs text-muted-foreground">
              (src: mapsofindia.com)
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
        <Section title="Facts about Dadra and Nagar Haveli and Daman and Diu" icon="💡">
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
            Scroll horizontally to explore Dadra and Nagar Haveli and Daman and Diu's iconic foods, crafts,
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
    name: "Garba",
    tagline: "The Soulful Dance of the Goddess Maa Amba",
    description:
      "In Daman and Diu, the celebration of Garba is a magnificent nine-day spectacle that serves as a cornerstone of the region’s cultural identity. Held during the auspicious month of Ashwin to honor the goddess Maa Amba, the festival is a vivid reflection of the territory's deep-rooted connection to neighboring Gujarati traditions, yet it carries its own coastal charm. As the sun sets over the Arabian Sea, the quiet streets transform into vibrant hubs of activity. The atmosphere is thick with the scent of incense and the sound of traditional music, as the community gathers to perform rhythmic folk dances around a central lamp or a beautifully decorated statue of the goddess.The visual appeal of the Garba festival is unparalleled; participants don elaborate traditional attire, with women in heavily embroidered chaniya cholis and men in kediyus, often adorned with intricate mirror work and shells that catch the light during the high-energy movements. Unlike more commercialized celebrations, the Daman and Diu festivals maintain a soulful, community-driven spirit. The dance begins with slow, synchronized steps that gradually increase in tempo, mirroring the rising spiritual fervor of the participants. This Garba Mahotsav is not merely a social event but a reverent ritual where every clap and turn is an act of devotion.The celebrations are also a significant draw for tourism, with Navratri events featuring professional troupes and local competitions that showcase the evolution of the dance form from traditional roots to modern variations like Dandiya Raas. Beyond the dance, the festival is a sensory feast, with local food stalls offering seasonal delicacies that fuel the dancers late into the night. It is a time when the boundaries of age and background dissolve, as everyone from young children to the elderly joins the circle, moving in harmony. This nine-day Garba celebration ultimately serves as a powerful symbol of unity, blending faith, art, and communal joy into a singular, unforgettable experience that captures the heart of the coastal spirit in Daman and Diu.",
    images: [Garba1,Garba2],
    source: "(src: ftd.travel,youtube.com)",
  },
  {
    name: "Narali Purnima",
    tagline:
      "The Vibrant Festival of the Waves and Coconuts",
    description:
      "Narali Purnima, or the Coconut Festival, is a major celebration in Dadra and Nagar Haveli and Daman and Diu that signals the end of the monsoon and the start of a new fishing season. Observed on the full moon day of the Hindu month of Shravan, the festival focuses on honoring Lord Varuna, the God of the Sea, to seek protection and a bountiful catch for the coming year. During the festivities, members of the fishing community and local devotees gather at shores like Devka Beach to offer golden-painted or fresh coconuts to the Arabian Sea as a gesture of gratitude. This ritual is accompanied by the blessing of boats, which are freshly painted and decorated before heading back into the water. Beyond the religious rites, the atmosphere is enriched by local fairs, traditional folk dances, and the preparation of coconut-based delicacies such as Narali Bhaat, making it a vital cultural event that unites the coastal population.",
    images: [NaraliPurnima1,NaraliPurnima2],
    source: "ritiwaz.com,hellotravel.com",
  },
  {
    name: "Gangaji Fair",
    tagline:
      "Honoring Lord Shiva at the Ancient Somnath Mahadev Temple",
    description:
      "The Gangaji Fair is one of the most culturally significant and spiritually vibrant events in the Union Territory of Dadra and Nagar Haveli and Daman and Diu. Celebrated annually in the village of Dabhel, typically during the month of March, the fair is primarily centered around the Somnath Mahadev Temple. This ancient temple, dedicated to Lord Shiva, serves as the focal point for thousands of devotees who travel from across the region—and neighboring states like Gujarat and Maharashtra—to partake in the festivities. The celebration is characterized by a deep sense of devotion and communal harmony, beginning with a ritualistic holy bath in the sacred tank (kund) located near the temple. This act of purification is believed to cleanse the soul and is followed by elaborate prayers and offerings to Lord Shiva, whom many locals revere as the Creator of the Universe.The celebration of the fair is a sensory experience that blends religious solemnity with the joy of a rural carnival. The banks of the Sakartod River and the temple precincts transform into a bustling hub of activity. Colorful stalls are erected, offering everything from traditional handicrafts and local snacks to toys and household items. Folk performances, including traditional music and dance, provide a rhythmic backdrop to the event, showcasing the unique cultural heritage of the Damanese people. Families gather to enjoy giant wheels and local entertainment, making it a social highlight of the year.The importance of the Gangaji Fair lies in its role as a bridge between the spiritual and the social. Religiously, it reinforces the deep-seated faith in the cleansing power of holy water and the protective grace of Lord Shiva. It is a moment where the mundane is set aside in favor of the divine. Socially, the fair serves as a vital gathering point for various communities, fostering a sense of unity and shared identity in a geographically small but culturally diverse territory. It also provides a significant economic boost to local artisans and vendors who rely on the massive footfall. By preserving centuries-old rituals and oral traditions, the Gangaji Fair ensures that the cultural legacy of Dadra and Nagar Haveli and Daman and Diu remains vibrant and relevant for future generations, acting as a living testament to the region's enduring spiritual roots.",
    images: [Fair1],
    source: "(src: hellotravel.com)",
  },
  {
    name: "Christmas",
    tagline:
      "A Grand Fusion of Portuguese Heritage and Coastal Traditions",
    description:
      "Christmas in the Union Territory of Dadra & Nagar Haveli and Daman & Diu (DNH & DD) is a magnificent spectacle that reflects the region’s unique colonial history and vibrant multi-cultural fabric. Deeply influenced by centuries of Portuguese rule, the celebrations here offer a distinct flavor compared to the rest of India, blending European Catholic traditions with local tribal customs and modern Indian festivities.The heart of the celebration lies in the historic churches, particularly in Daman and Diu. Iconic structures like the Church of Bom Jesus and the Church of Our Lady of Remembrance become the focal points of the season. On Christmas Eve, these architectural marvels are bathed in elaborate lighting, and thousands of residents and tourists gather for the Midnight Mass. The air is filled with the soulful resonance of traditional Portuguese hymns and local carols, creating a spiritual atmosphere that is both solemn and joyous.A defining characteristic of Christmas in DNH & DD is the Nativity Scene or 'Crib.' Almost every household and parish constructs detailed displays depicting the birth of Jesus. In Daman, the festivities often spill out into the streets with lively processions and public fairs. Local traditions also incorporate folk dances; it is not uncommon to see tribal groups performing traditional dances alongside classic Christmas festivities, symbolizing the melting pot of cultures that defines the territory.The culinary landscape during this period is equally captivating. Traditional families prepare a feast that bridges continents. You will find Portuguese-influenced delicacies like Pork Vindaloo and Bebinca (a multi-layered sweet) sharing the table with local seafood specialties and Indian sweets. Community feasting is a core pillar of the holiday, where doors are opened to neighbors of all faiths, reinforcing the 'communion' aspect of the season.In modern times, the urban centers of Silvassa and Daman have embraced contemporary trends, featuring massive public light installations, beachside parties, and Christmas markets. The beaches of Diu and Daman become popular hubs for tourists seeking a festive getaway. Despite this modernization, the essence of Christmas remains rooted in the spirit of togetherness and peace. From the ringing bells of ancient cathedrals to the shimmering lights reflected on the Arabian Sea, Christmas in Dadra & Nagar Haveli and Daman & Diu is an immersive cultural experience that celebrates both heritage and harmony.",
    images: [],
    source: "(src)",
  },
];

const historicalPlaces = [
  {
    name: "Moti Daman Fort",
    description:
      "The Moti Daman Fort, often referred to as the 'Big Daman Fort,' stands as a massive stone sentinel at the mouth of the Damanganga River, embodying over four centuries of Portuguese colonial history. Construction of this formidable structure began in 1559 and spanned more than two decades, concluding in 1581. It was designed primarily as a defensive stronghold to protect the Portuguese enclave from the advancing Mughal and Maratha forces. Spread over an expansive area of approximately 30,000 square meters, the fort is characterized by its high, weathered stone walls and ten massive bastions that still house beautifully carved cannons, serving as a reminder of its once-active military past.The architecture is a blend of European military engineering and local influences, featuring a polygonal layout that integrates seamlessly with the surrounding landscape. One enters the fort through massive gateways, most notably the Land Gate and the Sea Gate, which are adorned with inscriptions and heraldic symbols of the Portuguese monarchy. Inside the ramparts, the atmosphere shifts from the ruggedness of a military outpost to a charming, quiet settlement. The interior is a living museum, housing government offices, secretariats, and narrow streets lined with old colonial-style houses.One of the most significant landmarks within the fort is the Cathedral of Bom Jesus, completed in 1603. It is renowned for its intricate wood carvings and a stunning gold-plated altar, showcasing the artistic heights of the Portuguese Baroque style. Nearby lies the Chapel of Our Lady of the Rosary, another architectural gem featuring exquisite floral motifs and religious iconography. These structures, along with the Dominican Monastery, highlight the fort’s role as not just a military center, but a cultural and religious hub for the Portuguese administration in India.Today, the Moti Daman Fort is a major tourist attraction in the Union Territory of Daman and Diu. Visitors can walk along the broad ramparts, which offer panoramic views of the Arabian Sea on one side and the bustling town of Nani Daman across the river on the other. During the monsoon season, the grey stones of the fort contrast beautifully with the lush greenery and the turbulent grey-blue sea, making it a favorite spot for photographers and history enthusiasts alike. It remains a silent witness to the shift of power in the region, preserving the echoes of the past within its enduring stone embrace.",
    images: [MotiDamanFort1,MotiDamanFort2,MotiDamanFort3,MotiDamanFort4],
  },
  {
    name: "Cathedral of Bom Jesus ",
    description:
      'The Church of Bom Jesus in Moti Daman stands as a premier example of Portuguese colonial architecture and spiritual heritage in India. Completed in 1603, after construction began in 1559, this cathedral-style structure is a testament to the intricate craftsmanship and engineering artistry of the 16th and 17th centuries. The church is dedicated to "Bom Jesus," which translates to "Good Jesus" or "Infant Jesus," and it remains a central pillar of Catholic worship in the region.From an architectural standpoint, the church is celebrated for its stunning Baroque influences and Maniuerist style. The exterior features an impressively carved main gateway, but the true splendor lies within its walls. Upon entering, visitors are greeted by a soaring ceiling and a grand altar that is widely considered one of the finest examples of wooden artistry in the country. The altar is elaborately gilded and adorned with intricate carvings of various saints, showcasing the high level of detail typical of the Portuguese Renaissance. The use of vibrant colors and gold leafing on the wooden statues provides a sense of celestial grandeur that has remarkably withstood the test of time and the coastal humidity.The church layout follows a traditional longitudinal plan, with a focus on the ornate high altar and several side altars that are equally impressive in their craftsmanship. The interior is also characterized by its artistic wooden pulpit and the six statues of saints that are exquisitely carved. Beyond its aesthetic value, the Church of Bom Jesus serves as a historical repository; it reflects the era when Daman was a vital religious hub for Portuguese priests and missionaries.Even after centuries, the building maintains a serene and holy atmosphere, drawing both pilgrims and history enthusiasts. The thick stone walls and massive teak doors represent the durability of colonial construction. Today, it stands not just as a place of prayer, but as a monument to the cultural fusion of European design and Indian execution. Whether one is admiring the facade’s weathered stone or the inner sanctum’s golden glow, the Cathedral of Bom Jesus remains an indispensable landmark of Daman’s rich, multicultural past.',
    images: [CathedralofBomJesus1,CathedralofBomJesus2,CathedralofBomJesus3,CathedralofBomJesus4],
    source: "(src:ddd.gov.in)",
  },
  {
    name: "Dominican Monastery",
    description:
      "Ramanathaswamy Temple (Rāmanātasvāmi Kōyil) is a Hindu temple dedicated to the Hindu god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is one of the twelve Jyotirlinga temples. According to tradition, the lingam (an aniconic form of Shiva) of the Ramanathaswamy Temple was established and worshipped by Rama before he crossed the bridge called Rama Setu to the island kingdom of Lanka, identified with Sri Lanka. It is one of the Char Dham pilgrimage sites. In the Yuddha Kanda of the Ramayana, on their journey back to Ayodhya, Rama narrates to Sita the appearance and worship of Shiva in the form of a lingam on the island of Rameswaram before the construction of his bridge to Lanka. He describes the spot to be supremely sacred and capable of expiating major sins. In the Shiva Purana, Rama propitiates Shiva on the shore of Rameswaram in the form of a lingam by the repetition of mantras, meditation, and dancing. Pleased, the deity appeared before Rama and granted his requested boon of victory over Ravana. Rama then requested the deity to remain on the island to sanctify the world and offer his grace to all people. There are sixty-four Tīrthas (holy water bodies) in and around the island of Rameswaram, Tamil Nadu, India. According to Skānda Purāṇa, twenty-four of them are important. Bathing in these Tīrthas is a major aspect of the pilgrimage to Rameswaram and is considered equivalent to penance. Twenty-two of the Tīrthas are within the Rāmanāthasvāmī Temple. The number 22 indicates the 22 arrows in Rama's quiver. is famous for its massive corridor, which features 1,212 intricately carved, symmetrical pillars. These sandstone pillars, standing approximately 30 feet tall, form the world's longest temple corridor. Some reports suggest the overall temple complex may have up to 4,000 pillars in total.",
    images:[DominicanMonastery1,DominicanMonastery2,DominicanMonastery3,DominicanMonastery4,DominicanMonastery5,DominicanMonastery6],
    source: "(src:ddd.gov.in)",
  },
  {
    name: "Nani Daman Fort (St. Jerome Fort)",
    description:
      "The Fort of St. Jerome, commonly referred to as the Nani Daman Fort, is a poignant architectural relic of the Portuguese colonial era situated on the northern bank of the Daman Ganga River. Spanning an area of approximately 12,250 square meters, the fort is characterized by its robust and elegant stone walls that have weathered centuries of maritime history. Construction began in 1615 under the Portuguese regime and was completed in 1627, primarily serving as a strategic military outpost to monitor naval movements and defend against Mughal and Maratha invasions. Its proximity to the Daman bus stand and the local fish market makes it one of the most accessible and popular landmarks in the Union Territory of Dadra and Nagar Haveli and Daman and Diu.The architecture of the fort is a classic example of Portuguese defensive design, featuring high stone walls, three prominent bastions, and two massive gateways. The most striking feature is the magnificent gateway that faces the river, adorned with a large statue of St. Jerome, one of the most eminent fathers of the Catholic Church. Flanking this religious icon are two large human figurines that stand as silent guardians over the entrance. Within the fort’s enclosure lies the Church of Our Lady of the Sea, known for its exquisite wooden altar and serene atmosphere, reflecting the blend of military and religious life during the colonial period.Today, the fort offers visitors more than just a history lesson. A walk along the high ramparts provides a sweeping panoramic view of the Daman Ganga river meeting the Arabian Sea, often filled with colorful fishing boats. The interior also houses a Portuguese-era cemetery, adding to the site's solemn historical weight. Whether you are exploring the Fort of St. Jerome for its architectural details, its military significance, or simply to enjoy the cool sea breeze from the bastions, the site remains a vibrant bridge between Daman’s colonial past and its bustling present. It stands as a testament to the region's diverse heritage, drawing history enthusiasts and casual travelers alike to its weathered, majestic gates.",
    images: [NaniDamanFort1,NaniDamanFort2],
    source: "(src: mysimplesojourn.com,flaxtravel.blogspot.com)",
  },
  {
    name: "Somnath Mahadev Temple (Daman)",
    description:
      "The Somnath Mahadev Temple, located in Prabhas Patan near Veraval in Gujarat, stands as a premier symbol of Indian spiritual heritage and architectural resilience. Known as the first among the twelve Jyotirlinga shrines of Lord Shiva, it occupies a sacred position at the confluence of three rivers—the Kapila, Hiran, and Saraswati—at the edge of the Arabian Sea. Often referred to as 'The Eternal Shrine,' the temple's history is a testament to the power of faith over destruction. According to legend, the first temple was built in gold by the Moon God (Soma) to show gratitude to Lord Shiva for curing him of a curse; subsequently, it was said to be rebuilt in silver by Ravana, in wood by Krishna, and in stone by the Solanki kings. In the historical era, the temple was targeted and destroyed by various invaders, including Mahmud of Ghazni in 1024, and later by the Khiljis and Aurangzeb. However, it was rebuilt each time, with the current structure being completed in 1951 under the guidance of Sardar Vallabhbhai Patel.The temple is constructed in the Kailash Mahameru Prasad style, a refined form of Chalukyan architecture. Its towering Shikhar (spire) reaches a height of approximately 155 feet, topped by a flag and a heavy Kalash. The intricate stone carvings on the exterior walls depict various deities, celestial beings, and motifs from Hindu mythology. The temple complex is divided into several main parts, including the Garbhagriha (inner sanctum), the Sabha Mandap (assembly hall), and the Nritya Mandap. A fascinating feature of the temple is the Baan Stambh (Arrow Pillar) located on the sea-protection wall, which contains an inscription stating that a straight line from that point to the South Pole encounters no landmass. Today, the temple remains a vibrant center of pilgrimage, recently hosting a historic Kumbhabhishek ceremony for its spire in May 2026. Every evening, a sound and light show titled 'Jai Somnath'narrates the temple's glorious past, ensuring that its legacy continues to inspire millions of devotees who visit the official Somnath site each year.",
    images: [SomnathMahadevTemple1,SomnathMahadevTemple2,SomnathMahadevTemple3],
    source: "worldtalentorg.com,pinterest.com,wallpapercave.com",
  },
  {
    name: "Panikotha ",
    description:
      "Panikotha, also known as Fortim-do-Mar (Fort of the Sea), is a striking historical maritime structure located about one nautical mile off the coast of Diu, India. Situated at the mouth of the creek in the Arabian Sea, this magnificent white stone fortress resembles a ship anchored in the ocean, creating a visual spectacle that has captivated travelers for centuries. Its architecture is a blend of strategic military design and Portuguese aesthetic, characterized by its sturdy walls, circular bastions, and a prominent lighthouse that continues to guide vessels through the waters. Historically, the fort was built during the era of Muslim rule by Malik Aiyaz to serve as a vital entry post to monitor and control the movement of merchant ships and naval fleets entering Diu for trade. When the Portuguese gained control, they enhanced the structure, utilizing it both as a defensive outpost and, at various times, as a high-security prison—earning it the local nickname 'Pani Kotha,' which literally translates to 'Water Jailhouse.'The interior of the fort houses several significant landmarks, including a small chapel dedicated to Our Lady of the Sea, which reflects the religious devotion of the Portuguese sailors. The structure also features a lighthouse that adds to its picturesque silhouette against the horizon. Reaching Panikotha is an adventure in itself, as the fort is accessible only by motorboat or traditional canoe from the Diu jetty, offering visitors a unique perspective of the coastline as they approach. Once there, the panoramic views of the vast Arabian Sea and the distant Diu Fort are unparalleled. The fort is particularly mesmerizing during the evening hours when it is illuminated, appearing like a glowing jewel in the middle of the dark waters. Beyond its physical beauty, Panikotha stands as a silent witness to the turbulent colonial history of the region, symbolizing the shift of power between Indian rulers and European colonizers. Today, it remains one of Diu’s most iconic tourist attractions, drawing history buffs, photographers, and nature lovers who seek to explore its rugged charm and peaceful isolation. Whether viewed from the shore or explored from within its stone corridors, Panikotha offers a profound sense of timelessness, bridging the gap between the modern Union Territory of Diu and its storied, seafaring past.",
    images: [Panikotha1,Panikotha2],
    source: "(src:exploreourindia.com,exploreourindia.com)",
  },
  {
    name: "Zampa Gateway",
    description:
      "The Zampa Gateway serves as one of the most iconic and visually striking landmarks in the Union Territory of Diu, India. Historically significant and architecturally unique, this majestic structure marks the entrance to the fortified medieval township of Diu. Painted in a vivid, eye-catching shade of red, the gateway stands as a testament to the Portuguese colonial era, blending European aesthetic sensibilities with the rugged, defensive requirements of a 16th-century island stronghold. It is located on the western path leading toward the famous Naida Caves, acting as a ceremonial threshold that separates the modern expansion of the town from its historic, walled heart.The architecture of the Zampa Gateway is characterized by its intricate carvings and symbolic ornamentation. Upon close inspection, the bright facade reveals detailed workmanship, including figures of angels, lions, and a priest, which reflect the religious and royal influences of the Portuguese governors who commissioned its construction. Unlike many other military gateways that prioritize pure functionality, the Zampa Gateway incorporates an artistic elegance that has made it a favorite subject for photographers and history enthusiasts alike. Inside the gateway, there is a small chapel featuring an inscription dating back to 1702, further anchoring the site in the timeline of Diu’s colonial evolution.Beyond its aesthetic appeal, the gateway holds immense historical weight. It was part of the massive fortification project designed to protect the island from invaders, including the Mughals and various European rivals. During the medieval period, this gate was a vital checkpoint for trade and military movement. Today, it remains a 'living' monument; while it is a protected heritage site, it continues to serve as a functional passage for locals and travelers entering the historic district.Visiting the Zampa Gateway provides a sensory bridge between the past and present. The contrast of the crimson walls against the blue Diu sky, combined with the nearby artificial greenery and the proximity to the ancient city walls, creates a picturesque atmosphere. It is often cited as a 'must-visit' landmark because it encapsulates the spirit of Diu—a blend of peaceful island vibes and a complex, layered history of global maritime power. Whether viewed as a piece of military engineering or a work of colonial art, the gateway remains the symbolic 'pulse' of Diu's heritage.",
    images: [ZampaGateway1,ZampaGateway2],
    source: "(src:seawatersports.com,incredibleindia.gov.in)",
  },
  {
    name: "Gangeshwar Mahadev Temple (Diu)",
    description:
      "The Gangeshwar Mahadev Temple is a remarkable Hindu shrine located on the serene coastline of Fudam village, just 3 km from Diu in the Union Territory of Dadra and Nagar Haveli and Daman and Diu. Often referred to as the 'Seashore Temple,'it is uniquely positioned where the rocky cliffs meet the Arabian Sea, offering a spiritual experience deeply intertwined with the natural elements. This ancient site is steeped in the lore of the Mahabharata, with local tradition holding that the temple was established by the Pandava brothers during their period of exile. It is said that while living in anonymity, the brothers sought a place to perform their daily worship of Lord Shiva and subsequently installed five shivalingas of varying sizes, each corresponding to the physical stature of the brothers; the largest linga is attributed to Bhima, known for his legendary strength. The name 'Gangeshwar' itself carries deep significance, derived from 'Ganga' (the holy river) and 'Ishwar' (Lord), referring to Lord Shiva as the one who captured the celestial river in his matted hair to protect the Earth from her powerful descent. Unlike traditional temples with towering spires, Gangeshwar Mahadev is a cave temple carved directly into the seaside rocks, featuring the five shivalingas on the floor at the very edge of the sea. The temple is famous for its 'living' rituals performed by the ocean itself, as the sea waves enter the cave during high tide and completely submerge the lingas, a phenomenon viewed by devotees as a divine abhishekam or ritual bathing. Consequently, the lingas are generally visible only during low tide, making the timing of a visit crucial for pilgrims. Before reaching the main shrine, visitors pass through the cave where they can see idols of Lord Ganesha, Lord Vishnu, and Goddess Lakshmi, while a carving of the Seshanag (the divine serpent) looks down from the rocks above to guard the deities. The atmosphere is defined by the constant roar of the Arabian Sea and the salty mist, creating a meditative environment that stands as a testament to the ancient Indian practice of honoring the divine through the raw power of the natural landscape. Though its current structural elements are modern, the temple is believed by devotees to be over 5,000 years old, remaining a vital site for Shaivism and a primary destination within the Diu district tourism circuit.",
    images: [temple1,temple2,temple3,temple4],
    source: "(src:exploreourindia.com,vida-digna.org,picxy.comdreamstime.com)",
  },
  {
    name: "BAPS Shri Swaminarayan Temple (Silvassa)",
    description:
      "The BAPS Shri Swaminarayan Mandir in Silvassa stands as a magnificent tribute to traditional Hindu temple architecture and spiritual heritage in the capital of Dadra and Nagar Haveli. Constructed from intricate pink sandstone and meticulously carved marble, the mandir is an architectural marvel that reflects the timeless beauty of the ancient Shilpa Shastras. Its exterior is adorned with towering pinnacles (shikhars), ornate domes, and thousands of hand-carved figures depicting deities, musicians, and floral motifs that capture the light at different hours of the day, creating a serene and ethereal atmosphere.As a prominent cultural and spiritual landmark, the temple serves as more than just a place of worship; it is a center for peace and community service. Upon entering the main sanctum, visitors are greeted by the exquisitely adorned murtis (sacred images) of Bhagwan Swaminarayan and other Hindu deities, which are the focal point of the daily rituals. The interior craftsmanship is equally breathtaking, featuring vaulted ceilings and marble pillars that showcase the pinnacle of Indian craftsmanship. The atmosphere within the complex is one of profound stillness, offering a sanctuary for meditation and reflection away from the bustle of urban life.Beyond its physical beauty, the mandir is a vibrant hub for seasonal festivals and cultural celebrations. It regularly hosts major events such as Diwali and Annakut, where thousands of food items are offered to the deities in a spectacular display of devotion. The temple also organizes the Hindola Festival and various Yuva Shibirs (youth conventions), focusing on character building and moral values. Surrounded by manicured gardens and maintained with impeccable cleanliness, the mandir grounds provide an inviting space for families and tourists alike. Whether one is drawn by religious faith or an appreciation for fine art, the BAPS Mandir in Silvassa offers a transformative experience that bridges the gap between the material and the divine, making it a must-visit destination in the region.",
    images: [vive1, vive2, ],
    source: "(src: baps.org)",
  },
];

const facts = [
  "Dadra and Nagar Haveli and Daman and Diu became a single Union Territory on January 26, 2020, following the merger of two separate UTs.",
  "The Union Territory is composed of four distinct areas: Dadra, Nagar Haveli, Daman, and the island of Diu.",
  "Daman and Diu were under Portuguese colonial rule for over 450 years, only being liberated and incorporated into India in 1961.",
  "The administrative headquarters and capital of the merged Union Territory is the city of Daman.",
  "The territory has a unique linguistic profile where Gujarati, Hindi, and English are widely spoken, alongside remains of Portuguese influence.",
  "Daman is divided by the Daman Ganga River into two parts: Moti Daman (Big Daman) and Nani Daman (Small Daman).",
  "The Diu Fort, built by the Portuguese in 1535, is a massive sea-facing structure and one of the most visited historical landmarks in the region.",
  "The Union Territory is a major industrial hub, particularly in sectors like plastics, pharmaceuticals, and textiles due to favorable tax policies.",
  "Nagar Haveli is landlocked between Maharashtra and Gujarat, while Dadra is an enclave lying entirely within the state of Gujarat.",
  "The Vanganga Lake Garden in Silvassa is a popular tourist attraction, featuring Japanese-style bridges and lush greenery over 7 hectares.",
  "The Warli tribe is the primary indigenous group in Dadra and Nagar Haveli, famous for their distinct and ancient form of wall painting.",
  "Diu is home to the Gangeshwar Mahadev Temple, where five Shiva Lingas are located on the seashore and are washed by the tidal waves of the Arabian Sea.",
  "The Naida Caves in Diu are a network of interconnected hewn caves that offer a unique natural rock formation and light play for explorers.",
  "The territory enjoys a high literacy rate, significantly exceeding the national average at approximately 81.22%.",
  "Silvassa, the largest city in the Dadra and Nagar Haveli district, was once known as Vila de Paço d'Arcos during the Portuguese era.",
  "The regional economy is heavily supported by tourism, given its extensive coastline in Daman and Diu and forest-covered hills in Nagar Haveli.",
  "The territory celebrates the 'Tarpa Festival,' which showcases the traditional dance and music of the local tribal communities.",
  "Daman is famous for its historical churches, such as the Cathedral of Bom Jesus, which features intricate wood carvings and Portuguese architecture.",
  "The Union Territory is governed directly by the Central Government of India through an appointed Administrator.",
  "Unlike many other parts of India, the region has a distinct legal history, having transitioned from the Portuguese Civil Code after its integration.",
];

const artGallery = [
  {
    title: "Daman Fish Curry",
    emoji: "🐟",
    color: "#E8733A",
    desc: "Spicy and tangy seafood specialty influenced by Portuguese flavors",
    image: gDamanFishCurry,
  },
  {
    title: "Warli Painting",
    emoji: "🎨",
    color: "#8B4513",
    desc: "Ancient tribal wall art from Dadra and Nagar Haveli using geometric shapes",
    image: gWarliArt,
  },
  {
    title: "Tarpa Dance",
    emoji: "💃",
    color: "#D4A864",
    desc: "Vibrant tribal folk dance performed to the tunes of the Tarpa instrument",
    image: gTarpaDance,
  },
  {
    title: "Dhotri and Lugdu",
    emoji: "👘",
    color: "#E8A8C8",
    desc: "Traditional attire of the tribal communities in the region",
    image: gTribalAttire,
  },
  {
    title: "Bamboo Crafts",
    emoji: "🎋",
    color: "#F4E884",
    desc: "Handcrafted mats and baskets made by the Dhodia and Varli tribes",
    image: gBambooCraft,
  },
  {
    title: "Toddy (Palm Wine)",
    emoji: "🥥",
    color: "#F8F0C4",
    desc: "Freshly tapped sap from palm trees, a staple local beverage",
    image: gToddy,
  },
  {
    title: "Hoka Trees",
    emoji: "🌴",
    color: "#A8D4B4",
    desc: "Rare branching palms found in Diu, originally from Africa",
    image: gHokaTrees,
  },
];