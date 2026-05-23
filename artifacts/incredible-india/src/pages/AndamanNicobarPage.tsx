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
const andamanMap = "https://i.postimg.cc/qv8CPk7h/image.png";
const island1 = "https://i.postimg.cc/PxFLWJ6N/image.png";
const subhash1 = "https://i.postimg.cc/j2pL19YK/image.png";
const subhash2 = "https://i.postimg.cc/SN9X9yC5/image.png";
const beach1 = "https://i.postimg.cc/2yZ5nwbx/image.png";
const durga1 = "https://i.postimg.cc/13ZHTRSR/image.png";
const sri1 = "https://i.postimg.cc/GpLjLM9W/image.png";
const sri2 = "https://i.postimg.cc/ZR0F3C8s/image.png";
const sri3 = "https://i.postimg.cc/c1pMg1rn/image.png";
const jail1 = "https://i.postimg.cc/mgwQ5QVF/image.png";
const jail2 = "https://i.postimg.cc/KY8nSRHS/image.png";
const netaji1 = "https://i.postimg.cc/wvtLMnzC/image.png";
const netaji2 = "https://i.postimg.cc/nrBmY7C2/image.png";
const viper1 = "https://i.postimg.cc/N02jHtyj/image.png";
const viper2 = "https://i.postimg.cc/x8nfhb6J/image.png";
const radha1 = "https://i.postimg.cc/RVPSphK0/image.png";
const radha2 = "https://i.postimg.cc/0yF8x4tJ/image.png";
const ross1 = "https://i.postimg.cc/bNv8nPMW/image.png";
const baratang1 = "https://i.postimg.cc/MTD2c3Y0/image.png";
const baratang2 = "https://i.postimg.cc/05V1P3Qn/image.png";
const saddle1 = "https://i.postimg.cc/xdvB7phP/image.png";
const saddle2 = "https://i.postimg.cc/6q3S8W3m/image.png";
const barren1 = "https://i.postimg.cc/TYBSPXX0/image.png";
const indira1 = "https://i.postimg.cc/d0jSnkTw/image.png";
const campbell1 = "https://i.postimg.cc/90r8WL8L/image.png";
const campbell2 = "https://i.postimg.cc/pr40yK3Y/image.png";
const chatham1 = "https://i.postimg.cc/yY3QtrSn/image.png";
const murugan1 = "https://i.postimg.cc/4xz8N7P6/image.png";
const gFishCurryRice = "https://i.postimg.cc/mkzjxth9/image.png";
const gCoconutPrawnFry = "https://i.postimg.cc/7ZMptQpN/image.png";
const gNicobariDress = "https://i.postimg.cc/qBPSJTrK/image.png";
const gOngeTribalWear = "https://i.postimg.cc/L8Tb3g1T/image.png";
const gCaneBambooCraft = "https://i.postimg.cc/GpggZ0zj/image.png";
const gShellCraft = "https://i.postimg.cc/zDg2Pchk/image.png";
const gNicobariHutModel = "https://i.postimg.cc/NjpdHqh0/image.png";
const gDaflaDrum = "https://i.postimg.cc/tJ35R8tq/image.png";


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
export default function AndamanNicobarPage() {
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
                Andaman & Nicobar Islands
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Emerald Islands of the Bay of Bengal
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Port Blair" },
                  { label: "Population", value: "3.97 Lakhs" },
                  { label: "Area", value: "8,249 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                  { label: "Language", value: "Hindi, English, Bengali, Tamil, Telugu" },
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
              Port Blair / Sri Vijaya Puram
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Tamil Nadu — Gateway to the Andaman Archipelago
            </p>
          </div>
        </Section>

        {/* Map of Andaman & Nicobar — click to enlarge */}
        <Section title="Map of Andaman & Nicobar Islands" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(andamanMap, "Map of Andaman & Nicobar Islands")}
            >
              <img
                src={andamanMap}
                alt="Map of Andaman & Nicobar Islands"
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
              The Andaman and Nicobar Islands are a group of islands located in the Bay of Bengal and form a Union Territory of India. Geologically, these islands were formed millions of years ago due to tectonic movements and volcanic activity caused by the collision of the Indian Plate with the Burmese Plate. This process created an underwater mountain chain, and the visible peaks of this submerged range became the Andaman and Nicobar Islands. The islands are therefore volcanic and tectonic in origin, and the region still experiences seismic activity. The territory is also home to Barren Island, India’s only active volcano.
            </p>
            <p className="text-foreground">
              The islands officially became a Union Territory of India on 1 November 1956. The island chain consists of around 572 islands, islets, and rocky outcrops, of which only a few are inhabited. They are divided into two groups—the Andaman Islands in the north and the Nicobar Islands in the south—separated by the Ten Degree Channel. The islands are covered with dense tropical forests and surrounded by rich coral reefs, making them one of the most ecologically diverse regions of India.
            </p>
            <p className="text-foreground">
              Historically, the islands gained importance during British colonial rule when the British established the famous Cellular Jail, also known as “Kala Pani,” where many Indian freedom fighters were imprisoned. The islands are also home to indigenous tribes such as the Jarwa, Sentinelese, Onge, Great Andamanese, and Nicobarese, some of whom still live in isolation from the modern world. As it is located near vital sea lanes of the Indian Ocean, the islands serve as a crucial outpost for India’s defense and maritime security. .The territory also aids India’s engagement with Southeast Asia under the “Act East” policy. Agriculture, fisheries, and small-scale handicrafts support livelihoods. Infrastructure development is balanced with environmental conservation due to the islands’ ecological sensitivity.
            </p>
            <p className="text-foreground">
              It is also known as- Handuman: The ancient Malay pronunciation of the Hindu deity Hanuman, which gradually evolved over centuries into the name "Andaman."; Agadaemon: The specific name used by the famous Greek geographer Ptolemy to map the island cluster during the 2nd century CE; Angamanian: The unique name recorded by the legendary Italian traveler Marco Polo in his 13th-century global travelogues.; Nakkavaram: Meaning "land of the naked" in Tamil, this name was inscribed by the Chola Empire in the 11th century and later corrupted into "Nicobar".
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Today, the Andaman and Nicobar Islands are known for their natural beauty, strategic location, marine biodiversity, adventure tourism, and historical significance.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Andaman & Nicobar Islands, mapsofindia.com)
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
        <Section title="Facts about Andaman & Nicobar Islands" icon="💡">
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
            Scroll horizontally to explore Andaman & Nicobar Islands's iconic foods, crafts,
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
    name: "ISLAND TOURISM FESTIVAL",
    tagline: "",
    description:
      "The Island Tourism Festival is the premier, flagship cultural event organized annually by the Andaman and Nicobar Administration to showcase the archipelago's rich heritage and boost its winter tourism. Originally started under the title 'Island on the March' and held in April, the festival was officially renamed in 1994 and moved to the winter months, typically running for 5 to 15 days between December and January. While the energetic epicenter of the carnival is the ITF Ground (and occasionally Marina Park) in Port Blair, the administration intentionally branches out smaller programs to outlying islands like Swaraj Dweep (Havelock), Shaheed Dweep (Neil), Diglipur, and Car Nicobar to ensure wide local participation. The festival perfectly mirrors the island's unique 'Mini India' identity by bringing together diverse cultural performances from local islanders alongside renowned classical, folk, and Bollywood artists flown in from the Indian mainland through regional Zonal Cultural Centers. Beyond the music and mega-concerts, the festival serves as a critical economic and developmental platform for local artisans and entrepreneurs. Visitors can explore sprawling government and private pavilions packed with hand-carved wooden artifacts, bamboo furniture, shell accessories, coconut shell lamps, and rare pearl jewelry. The festival also hosts a variety of interactive events including traditional dog shows, puppet theater, sand art contests, and a dedicated food court featuring famous floating restaurants serving authentic regional seafood. Adding a distinct local sports flavor to the carnival, the event features thrill-seeking activities like parasailing, scuba diving demonstrations, and the highly anticipated 'Nicobari Hodi Race'—a traditional, high-stakes water canoe competition organized by the indigenous Nicobarese tribe that draws massive crowds to the coastlines. ",
    images: [island1],
    source: "(src: swantour.com)",
  },
  {
    name: "Subahash Mela",
    tagline:
      "",
    description:
      "The Subhash Mela is a prominent, week-long cultural and patriotic festival celebrated annually in the Andaman and Nicobar Islands to commemorate the birth anniversary of the legendary freedom fighter Netaji Subhas Chandra Bose on January 23rd. The festival holds profound historical significance for the archipelago, tracing back to December 1943 when Netaji visited Port Blair during World War II, hoisted the Indian tricolor for the first time on liberated Indian soil at the Cellular Jail, and declared the islands free from British colonial rule under the Azad Hind government. To preserve this powerful historical connection, the local population and the island administration initiated the Subhash Mela, which has grown into a major socio-cultural event. While the core commemorative ceremonies take place at Netaji Stadium and the ITF Ground in the capital city of Sri Vijaya Puram (formerly Port Blair), the most famous and energetic public celebrations are traditionally hosted at Swaraj Dweep (Havelock Island) near the beaches of Shyam Nagar and Krishna Nagar. The festival kicks off with formal flag-hoisting ceremonies and floral tributes to Netaji, quickly transitioning into a vibrant, festive carnival that unites locals and tourists alike. The fair features sprawling exhibition stalls set up by various government departments, local artisans, and self-help groups, showcasing unique island handicrafts, shell jewelry, and bamboo work. Local school children and regional cultural troupes perform a series of high-energy patriotic dramas, folk dances, and music concerts detailing the history of India's struggle for independence. Adding to the lively atmosphere, the event hosts amusement rides, magic shows, local sports tournaments, and a bustling food court serving a rich blend of mainland and authentic coastal seafood. Because it aligns perfectly with the peak winter tourist season and the nationwide celebration of Parakram Diwas, the Subhash Mela serves as both a beautiful tribute to national pride and a key platform for promoting eco-tourism across the islands.",
    images: [subhash1,subhash2],
    source: "(src: hellotravel.com, theunstumbled.com)",
  },
  {
    name: "BEACH FESTIVAL",
    tagline:
      "Sands of Joy, Waves of Culture",
    description:
      "The Beach Festival is an energetic, multi-day summer carnival organized by the Department of Tourism and the Andaman and Nicobar Administration to promote the archipelago's pristine shorelines and thriving eco-tourism. Typically held over three to five days during the months of April or May, the festival is strategically spread across some of the islands' most picturesque coastal locations, including Corbyn’s Cove Beach and Chidiyatapu in Sri Vijaya Puram (Port Blair), as well as popular stretches on Swaraj Dweep (Havelock Island). The primary objective of the event is to provide wholesome entertainment for both domestic and international tourists while giving local youth and entrepreneurs a platform to showcase their skills. During the festival, the beaches are transformed into lively hubs decorated with eco-friendly lights and bamboo structures, creating a scenic backdrop that blends natural coastal beauty with high-energy celebrations.The festival schedule is packed with a diverse mix of sports, arts, and entertainment. Daytime activities feature highly competitive beach volleyball, beach kabaddi, and tug-of-war tournaments that draw enthusiastic local crowds, alongside creative sand-sculpting competitions where professional and amateur artists carve intricate designs out of the white island sand. The festival also highlights thrilling water sports demonstrations, including jet-skiing and windsurfing, alongside organized island boat races. As the sun sets, the focus shifts to vibrant cultural evenings featuring live musical concerts, beachside fashion shows showcasing sustainable regional textiles, and dynamic folk dance performances by local troupes. Visitors can also explore a sprawling night bazaar lined with stalls selling handmade shell crafts, coconut-wood artifacts, and an array of local food stalls serving fresh, authentic coastal seafood delicacies.",
    images: [beach1],
    source: "(src:andamanworldtravels.com)",
  },
  {
    name: "Rhythm of the Rains",
    tagline:
      "",
    description:
      "The Monsoon Music Festival (officially celebrated as part of the broader Monsoon Tourism Festival) is a lively, two-day cultural initiative organized by the Directorate of Information, Publicity, and Tourism in association with the Department of Art and Culture. Held annually during the peak of the rainy season in mid-July, the event is strategically designed to combat off-season slumps and promote the archipelago as a vibrant, 365-day tourist destination. The festival kicks off with a massive, high-energy promotional roadshow, featuring a car and bike rally that snakes through historic vantage points in the capital city of Sri Vijaya Puram (Port Blair), including the Clock Tower, Cellular Jail, and Flag Point. The main festivities unfold at the scenic Corbyn’s Cove Beach and the Marina Park Arena, where the lush, rain-washed tropical landscape provides a dramatic backdrop for locals and tourists to celebrate the unique rhythms of the rainy season.True to its musical focus, the festival features a stellar lineup of live indoor and outdoor concerts, bringing together local island orchestras and popular fusion, folk, and contemporary bands flown in from the Indian mainland. Beyond the musical stages, the event is packed with community-driven activities, including friendly beachside volleyball and tug-of-war matches, thrilling water sports demonstrations like jet-skiing and kayaking, and an energetic, dedicated rain-dance arena. The festival grounds host a bustling night bazaar where local small-scale entrepreneurs and self-help groups set up stalls to sell handmade island artifacts, shell jewelry, and bamboo crafts. Food lovers are drawn to the vibrant gastronomy counters that fill the air with the aroma of hot, savory snacks and fresh coastal seafood delicacies, perfectly complementing the cool, rainy atmosphere.",
  },
  {
    name: "Panguni Uthiram",
    tagline:
      "A Spectacular Journey of Faith, Devotion, and Celestial Unions",
    description:
      "Panguni Uthiram is the largest, most significant religious festival celebrated by the Tamil community settled across the Andaman and Nicobar Islands. Observed annually on the full moon day of the Tamil month of Panguni (falling between March and April), the festival honors Lord Murugan (Karthikeyan) and commemorates the divine celestial marriages of major Hindu deities, including Shiva and Parvati, as well as Murugan and Deivanai. The spiritual and geographic center for this grand celebration is the historic Sri Vetrimalai Murugan Temple in Port Blair, a majestic Dravidian-style shrine originally built by British rulers on Ross Island in 1926 to win the loyalty of Tamil administrative staff, and later relocated to the capital city after independence. The festival draws thousands of pilgrims and spectators from various religious and cultural backgrounds, temporarily transforming the island capital into a vibrant hub of deep spiritual devotion and ancient traditions.The celebrations begin at dawn with special, elaborate Vedic rituals and Ab अभिषेक (sacred baths) where the idol of Lord Murugan is anointed with milk, coconut water, honey, and turmeric paste. The ultimate highlight of the festival is a massive, high-energy street procession where beautifully adorned idols are carried on the shoulders of devotees through the main thoroughfares of Port Blair, accompanied by the hypnotic rhythms of traditional drums and soulful devotional hymns. To fulfill holy vows and express profound gratitude for answered prayers, hundreds of bare-chested devotees participate in Kavadi Attam, an intense ceremonial dance where they carry heavy, decorated wooden or metal arches on their shoulders. Demonstrating extraordinary feats of faith and self-discipline, many pilgrims perform strict fasts and even walk barefoot across beds of glowing embers in fire-walking rituals, making Panguni Uthiram a powerful and visually striking celebration of the islands' rich cultural diversity.",
  },
  {
    name: "Durga puja and kali puja",
    tagline: "Divine Devotion by the Deep Blue Sea",
    description:
      "Durga Puja and Kali Puja are celebrated with immense fervor, grandeur, and devotion across the Andaman and Nicobar Islands, primarily driven by the large Bengali settler population that calls the archipelago home. Celebrated during the autumn months of October and November, these twin festivals beautifully transform the tropical islands into a vibrant extension of Bengal, earning the region its famous nickname, 'Mini India'. To ensure complete cultural authenticity, local committees and prominent socio-cultural organizations, such as the historic Atul Smriti Samiti (Bengali Club) in Sri Vijaya Puram (Port Blair), commission skilled clay artisans directly from Kumartuli in Kolkata to craft the traditional, majestic idols of Goddess Durga and Goddess Kali. The celebrations heavily involve the entire island community, cutting across all regional, linguistic, and religious lines to participate in the week-long festivities. During Durga Puja, the capital city and major towns like Rangat, Diglipur, and Mayabunder come alive with sprawling, elaborately illuminated community pandals (temporary decorative shrines) erected at iconic venues like Junglighat, Haddo, and Prem Nagar. The atmosphere is filled with the rhythmic, traditional beats of dhak drums, the aroma of burning camphor, and cultural stages hosting evening dramas and musical performances. Food stalls lining the streets offer a delightful culinary experience featuring authentic Bengali sweets like rasgullas alongside savory coastal dishes. The festivities culminate on Vijayadashami with Sindoor Khela, a joyous ritual where married women smear red vermilion on each other, followed by a unique and deeply moving Visarjan (idol immersion) ceremony. Unlike mainland cities, the idols here are carried to the edge of the Indian Ocean, where they are immersed into the sea against a serene backdrop of crashing waves and sunset, creating an unforgettable blend of deep religious tradition and breathtaking island beauty. ",
    images: [durga1],
    source: "(src: swantour.com)",
  },
  {
    name: "Sri Mariamman Thiruvizha",
    tagline:
      "Where Sacred Devotion Shields the Distant Isles",
    description:
      "Sri Mariamman Thiruvizha stands proudly as the second-largest Hindu religious festival in the Andaman and Nicobar Islands, celebrated with massive devotion every year in the month of February. The festival is entirely dedicated to Goddess Arulmigu Sri Mariamman, an ancient South Indian deity revered as the supreme protector against diseases, epidemics, and misfortunes, while bringing timely rains and safety to the land. The magnificent epicenter of this grand event is the historic Sri Mariamman Temple located in Austinabad village, situated about 6 kilometers from Sri Vijaya Puram (Port Blair) along the scenic Chidiya Tapu route. What makes this festival incredibly special to the archipelago is its cosmopolitan spirit; it completely transcends regional boundaries, bringing together not just the island's vast Tamil population, but devotees of all faiths, including mainland tourists and international visitors, who deeply believe the Goddess watches over and shields these remote islands from natural calamities.The festival carries a fascinating piece of local history and folklore that solidifies its spiritual status among islanders. According to local lore, during the challenging construction of the Dhanikhari Dam—a critical fresh-water reservoir for the islands—the contractor faced constant failures and structural cracks that brought the project to a standstill. Defeated, the contractor prayed intensely to Goddess Mariamman, who supposedly appeared in his dream, encouraging him to persist with unwavering patience. The dam was subsequently completed with absolute success, and in deep gratitude, the contractor constructed the grand Austinabad temple and dedicated massive donations in her honor. Today, the annual Thiruvizha sees the entire temple complex brilliantly decked out in hundreds of colorful lamps, flags, and banners. The high-energy festivities feature elaborate daily rituals, vibrant musical artis, and a spectacular street procession. The ultimate test of faith occurs during the highly anticipated fire-walking ritual, where hundreds of strictly fasted devotees confidently walk barefoot across beds of glowing red embers to fulfill sacred vows, showcase their profound devotion, and seek the lifelong blessings of the deity.",
    images: [sri1, sri2, sri3],
    source: "(src: swastikholiday.com, thrillophilla.com, pinterest.com)",
  },
  {
    name: "Ossuary Feast(Pig Festival)",
    tagline: "Honoring the Departed Amidst the Rhythms of the Nicobar",
    description:
      "The Ossuary Feast, popularly known across the archipelago as the Nicobari Pig Festival, is the most sacred and deeply revered traditional tribal festival celebrated by the indigenous, semi-isolated Nicobarese people. Rather than a standard seasonal harvest fair, this unique event is an profound, ancestral memorial ritual that reflects the community's spiritual beliefs regarding life, death, and the afterlife. The festival is not tied to a fixed calendar date; instead, it is organized once every few years by a village chief or an extended family cluster when they accumulate enough resources, typically revolving around the abundance of the local pig population, which serves as a symbol of wealth and prosperity in Nicobarese culture. The primary objective of the feast is to pay ultimate respects to departed family members, ensure their souls find eternal peace in the spirit world, and seek their ancestral blessings to protect the village from diseases and bad luck.The festival is divided into distinct, highly emotional phases that stretch across several days, blending deep grief with vibrant community bonding. The initial phase involves the sacred ritual of exhumation, where family members carefully unearth the bones of their deceased relatives from the village burial grounds. The bones are gently cleaned, anointed with pure coconut oil, wrapped in expensive, colorful pieces of traditional cloth, and brought into the main stilt houses where they are lovingly kept for a brief period to symbolize the ancestor's temporary return to the family. This is followed by a massive, high-energy community carnival filled with traditional sports and artistic expressions. The absolute highlight of the public celebrations is the thrilling, high-stakes wild pig fighting tournament, where young men showcase their bravery and strength by wrestling aggressive boars inside large bamboo cages, followed by a grand communal banquet. The festival reaches its dramatic climax at midnight with a series of hypnotic folk dances performed around large bonfires, accompanied by the chanting of ancient, rhythmic dirges. Once the celebrations conclude, the ancestral bones are carefully reburied in a common village ossuary, solidifying the eternal bond between the living and the dead.",
  },
];

const historicalPlaces = [
  {
    name: "Cellular Jail National Memorial",
    description:
      "The Cellular Jail National Memorial in Port Blair, Andaman and Nicobar Islands, India, is a historic colonial-era prison built by the British between 1896 and 1906. Known as “Kala Pani,” it symbolizes the sufferings and resilience of Indian freedom fighters exiled for their role in the independence movement. Today, it stands as a national monument and museum dedicated to their memory. Built to suppress nationalist uprisings after the 1857 rebellion, the Cellular Jail formed the core of the British penal settlement in the Andaman Islands. It was designed for solitary confinement and constructed by convicts themselves. Freedom fighters such as Vinayak Damodar Savarkar and Batukeshwar Dutt were imprisoned here. The facility became infamous for brutal punishments and forced labor, earning its grim nickname, “Kala Pani.” Built to suppress nationalist uprisings after the 1857 rebellion, the Cellular Jail formed the core of the British penal settlement in the Andaman Islands. It was designed for solitary confinement and constructed by convicts themselves. Freedom fighters such as Vinayak Damodar Savarkar and Batukeshwar Dutt were imprisoned here. The facility became infamous for brutal punishments and forced labor, earning its grim nickname, “Kala Pani.” Following independence, surviving former inmates campaigned to preserve the structure. In 1979, the Government of India designated it a National Memorial. The complex now includes a museum, art and photo galleries, a “Swatantrya Jyot” eternal flame, and the gallows. It also hosts a multilingual light-and-sound show that recounts the prison’s history each evening. Today, the Cellular Jail stands as one of India’s most powerful symbols of sacrifice and endurance. Recognized on UNESCO’s Tentative List, it continues to educate visitors about colonial repression and the spirit of India’s freedom movement, drawing both domestic and international tourists year-round.",
    images: [jail1, jail2],
    source: "(src:bontravel.com, godigit.cok)",
  },
  {
    name: "NETAJI SUBHASH CHANDRABOSE ISLAND (FORMELY ROSS LAND)",
    description:
      "Netaji Subhash Chandra Bose Island, formerly known as Ross Island, is a small yet historically significant island near Port Blair in the Andaman and Nicobar Islands, India. Once the administrative capital of the British in the Andamans, it now stands as a site of colonial ruins intertwined with tropical vegetation and deep freedom-movement associations.Originally surveyed in 1789 by Lt. Archibald Blair and named after Sir Daniel Ross, the island became the seat of British authority after the 1857 Revolt. It housed the Chief Commissioner’s residence, a church, barracks, and other colonial buildings before a 1941 earthquake and subsequent Japanese occupation reduced much of it to ruins. During World War II, Netaji Subhas Chandra Bose visited the island in 1943 and hoisted the Indian tricolor there, a symbolic act of defiance that inspired its modern name .Today, the island is known for the atmospheric remains of British-era structures partly reclaimed by banyan roots, the Smritika Museum curated by the Indian Navy, and a solar-powered lighthouse overlooking the sea. A state-of-the-art sound-and-light show dramatizes episodes of colonial rule, Japanese occupation, and India’s independence struggle .Nature has overrun much of the island, creating a unique blend of heritage and forest. Herds of spotted deer—introduced by the British—along with peacocks and rabbits roam freely. Their expanding population now requires ecological management to preserve the island’s vegetation .Ranked among the top attractions in Port Blair, the island offers scenic walks, guided tours, and panoramic harbor views. Ferries operate from morning until mid-afternoon, making it a favored half-day excursion. Its combination of historical resonance, natural beauty, and tranquil ambiance renders it one of India’s most evocative heritage sites.",
    images: [netaji1, netaji2],
    source: "(src: Thrillintravel.in, holidays.tripfactory.com)",
  },
  {
    name: "Viper Island Penal Ruins",
    description:
      "Viper Island is a small but historically significant island near Port Blair in the Andaman and Nicobar Islands. Known for the ruins of a colonial-era jail built by the British in 1867, it was an early penal settlement before the construction of the larger Cellular Jail. The island today stands as a poignant reminder of India’s freedom struggle, blending tragic history with natural serenity. The British established Viper Island Jail following the 1858 penal settlement at Port Blair. It confined both convicts and political prisoners under harsh conditions—solitary cells, whipping posts, and chain gangs earned it the grim title “Viper Chain Gang Jail.” Notable inmates included Sher Ali, who was executed here in 1872 for assassinating Viceroy Lord Mayo. After the Cellular Jail opened in 1906, Viper Island’s prison was abandoned. The jail’s red-brick remnants still occupy the island’s hillock, crowned by the gallows where executions took place. Though much of the structure has crumbled, visitors can trace the outlines of cell blocks and the guardhouse amid thick vegetation. The site contrasts the surrounding blue waters of the Bay of Bengal, creating a striking juxtaposition of natural calm and historical pain. Reaching the island involves a short boat ride offering views of Port Blair harbor, Ross Island, and North Bay. Guided tours highlight the island’s role in colonial punishment and the early phases of India’s penal system. There are no shops or eateries, and visitors are advised to carry water and sun protection. Entry is often included in harbor cruise packages.Today, Viper Island functions as an open-air heritage site. Nearby attractions include Ross Island (now Netaji Subhash Chandra Bose Island), the Cellular Jail, and Mahatma Gandhi Marine National Park. Although mostly tranquil, the island’s ruins continue to evoke the sacrifices endured during India’s struggle for independence.",
    images: [viper1, viper2],
    source: "(src: Pinterest, Andaman islands)",
  },
  {
    name: "Radhanagar Beach (Swaraj Dweep / Havelock Island)",
    description:
      "Radhanagar Beach, locally situated on Swaraj Dweep (popularly known as Havelock Island), is globally celebrated as one of the most magnificent and pristine coastlines in the world. Its international fame peaked in 2004 when Time Magazine officially crowned it the 'Best Beach in Asia', a title it continues to uphold through strict local environmental conservation and eco-tourism practices. Visually stunning, the beach stretches across an expansive, crescent-shaped curve of powdery, brilliant white sand that contrasts beautifully against the sparkling turquoise waters of the Andaman Sea. Bordered by a thick canopy of ancient, majestic Mahua trees and lush tropical greenery rather than commercial concrete resorts, the beach offers an untouched, natural landscape that makes it a prime subject for photography and nature studies.The beach is particularly famous for its remarkably calm, gentle waves and the complete absence of sharp coral reefs near the shore, making its shallow waters an incredibly safe and popular spot for swimming. Because it faces directly toward the west, the location draws thousands of travelers and student groups every evening who gather along the wide shoreline to witness its legendary, unobstructed tropical sunsets that paint the sky in vibrant shades of gold, orange, and crimson. To maintain its pristine ecosystem, the local administration has designated Radhanagar as a plastic-free zone, utilizing eco-friendly bamboo dustbins, open-air freshwater showers, and log-cabin changing rooms that blend seamlessly into the forest border. It stands as a perfect example of how global tourism can successfully coexist with raw, protected natural beauty.",
    images: [radha1, radha2],
    source: "(src: stock.adobe.com)",
  },
  {
    name: "Ross & Smith Islands (Diglipur)",
    description:
      "Ross and Smith Islands, located a short 20-minute boat ride from Aerial Bay Jetty in Diglipur, form one of the most visually spectacular geographical marvels in the North and Middle Andaman district. Known colloquially as the 'Twin Islands', they consist of two separate, densely forested tropical landmasses—larger Smith Island and smaller, uninhabited Ross Island—that are permanently connected by a majestic, crescent-shaped natural white sandbar. This unique geological bridge creates a dynamic marine environment that changes entirely with the tides. During low tide, the pristine sandbar stands fully exposed, allowing students and travelers to effortlessly walk from one island to the other right through the middle of the ocean. As high tide sets in, the rising seawater slowly flows over the center of the bridge, temporarily separating the islands while creating two distinct, crystalline swimming lagoons with striking turquoise and emerald hues on either side. Each island offers a completely different ecosystem for exploration and environmental study. Smith Island is the more developed of the two, featuring eco-friendly bamboo gazebos, changing rooms, resting sheds, and a beautifully maintained marine sanctuary trail that introduces visitors to the region's diverse coastal flora. It is also home to a protected turtle nesting site where green sea turtles crawl ashore to lay eggs during the winter months. In contrast, Ross Island is left entirely wild and rugged, covered in a dense, untamed jungle canopy that is ideal for nature walks and bird watching. The clear, shallow waters flanking the connecting sandbar are packed with vibrant coral gardens and colorful tropical fish, providing a safe, reef-free shoreline for swimming and shallow snorkeling. Managed strictly as an eco-tourism zone by the forest department, the twin islands require entry permits and stand as a brilliant example of pristine, undisturbed island geography.",
    images: [ross1],
    source: "(src: experienceandamans.com)",
  },
  {
    name: "Baratang island limestone caves",
    description:
      "The Limestone Cave BaratangClick to open side panel for more information, nestled within the dense mangrove forests of Middle Andaman, stands as one of the most remarkable geological monuments in the entire archipelago. Unlike the surrounding volcanic landscapes, these subterranean formations are sedimentary wonders millions of years in the making. The journey to the caves is an adventure in itself, requiring a boat ride through a network of tight, canopy-covered mangrove creeks where saltwater crocodiles can occasionally be spotted. Once ashore, visitors embark on a short trek through a rustic wooden boardwalk that cuts directly through tropical forest terrain, opening up into a massive, shadowy underground world that serves as a live classroom for students studying earth sciences and mineralogy.Inside the chambers, the landscape is defined by jaw-dropping stalactite and stalagmite formations hanging from the ceilings and rising from the floor. These structures are formed by a slow, continuous chemical process where rainwater mixes with carbon dioxide to dissolve the calcium carbonate in the limestone rock, leaving behind tiny mineral deposits as it drips. Over hundreds of thousands of years, these deposits have fused into colossal, glittering pillars and abstract shapes that resemble everything from elephant trunks to ancient architecture. Because the caves are dynamic and continually evolving with the water flow, the local administration treats the area as a highly protected eco-tourism zone, requiring guided tours to ensure the fragile limestone structures remain undisturbed for future generations.",
    images: [baratang1, baratang2],
    source: "(src: so.city, andamanisland.in)",
  },
  {
    name: "Saddlepeak national park",
    description:
      "Saddle Peak National ParkClick to open side panel for more information, located near Diglipur in North Andaman, is a majestic biodiversity reserve that holds the proud title of encompassing the highest geographic point in the entire Bay of Bengal. Rising steeply from the edge of the blue ocean, the park spans over 85 square kilometers of lush, untouched wilderness centered around Saddle Peak, which towers at an impressive 732 meters above sea level. This unique coastal-mountain ecosystem creates a dramatic tropical landscape where the misty, rain-washed ridges look down over sweeping panoramic views of the distant shorelines and dense green valleys, making it a dream destination for student trekkers, researchers, and nature enthusiasts looking to explore the wilder side of the islands.The park is universally celebrated as a critical sanctuary for rare, endemic wildlife and ancient plant species that cannot be found anywhere else on the planet. Its unique humid climate supports thick, layered forests ranging from stunted evergreen vegetation at the breezy summits to massive tropical rainforest trees wrapped in thick lianas at the foothills. As students hike along the rugged, 8-kilometer nature trail that leads up to the peak, they cross clear, freshwater streams like the Kalpong River—the only perennial river in the Andamans. Along the way, the forest canopy echoes with the calls of rare island birds, including the Andaman Imperial Pigeon, the cheeky Andaman Hill Myna, and the endangered Andaman Horseshoe Bat, offering a vivid, live textbook experience of island biogeography and ecological conservation.",
    images: [saddle1, saddle2],
    source: "(src: adotrip.com, tusktravel.com)",
  },
  {
    name: "Barren island volcano",
    description:
      "Barren Island Volcano, rising starkly out of the deep waters of the Andaman Sea, is a monumental geological marvel that holds the proud title of being the only active volcano in South Asia. Located about 138 kilometers northeast of the capital city, this uninhabited island is part of a dynamic volcanic arc that stretches between Sumatra and Myanmar. The landscape is a striking, dramatic contrast of elements, featuring a massive, dark central volcanic cone that frequently vents plumes of ash and steam, surrounded by stark, jet-black lava fields that cut directly through the deep blue ocean water. It stands as an incredible, real-world science laboratory for students studying plate tectonics, igneous rock formations, and the fiery forces that shape our planet. True to its name, the island is entirely devoid of human settlement due to safety regulations and its rugged, inhospitable terrain. After lying dormant for nearly 150 years, the volcano woke up spectacularly in 1991, with its most recent bursts of activity occurring in 2017 and early 2022, coating the island's ridges in fresh layers of basaltic lava. While setting foot on the island is strictly prohibited by the government, student groups and travelers can book special live-aboard vessels or chartered cruise boats to view the smoking caldera from a safe distance. Interestingly, the waters surrounding this volcanic island are world-renowned for scuba diving, where underwater visibility is completely unmatched and divers can explore dramatic, submerged lava walls packed with thriving marine life.",
    images: [barren1],
    source: "(src:andamandiaries.com)",
  },
  {
    name: "Indira Point",
    description:
      "Indira Point, located on the tip of Great Nicobar Island, is a monumental geographic landmark that holds the proud distinction of being the absolute southernmost point of India. Situated closer to the Indonesian island of Sumatra than to the Indian mainland, this highly strategic coastal outpost represents the physical boundary where the Andaman Sea meets the vast Indian Ocean. The landscape is defined by its rugged coastal beauty, wild ocean waves, and the towering, historic Nicobar LighthouseClick to open side panel for more information, whose striking red-and-white striped spiral structure stands as a lone guardian watching over one of the busiest maritime shipping lanes in the world.Originally named Pygmalion Point during the colonial era, the site was officially renamed in October 1984 in honor of former Indian Prime Minister Indira Gandhi. The location carries a powerful geological legacy linked directly to the historic 2004 Indian Ocean Tsunami. The tectonic forces of the massive earthquake caused the entire coastal crust of Great Nicobar to subside, causing the ocean floor to drop and permanently submerging the base of the lighthouse platform under four feet of seawater. Because it sits within a heavily protected tribal reserve and a critically sensitive national security zone, access to Indira Point is highly restricted, requiring special government permits. For students, it stands as a legendary symbol of national geography, resilience, and the awesome, changing power of our planet.",
    images: [indira1],
    source: "",
  },
  {
    name: "Campbell Bay National Park",
    description:
      "Campbell Bay National ParkClick to open side panel for more information, tucked away on the ultra-remote Great Nicobar Island, is a magnificent ecological sanctuary that protects some of the most pristine equatorial rainforests on Earth. Spanning over 420 square kilometers, this expansive park forms a critical northern zone of the Great Nicobar Biosphere Reserve. The landscape is a breathtaking, untamed expanse of dense, multi-layered jungle canopies, winding freshwater streams, and hidden coastal ridges that face out toward the deep blue waters of the Indian Ocean. Because it is located thousands of kilometers away from the industrial mainland, the park functions as a virtually undisturbed evolutionary island, offering a priceless real-world laboratory for students studying environmental conservation, evolutionary biology, and complex forest ecosystems.The park is globally celebrated for its incredible richness of rare, endemic flora and fauna that cannot be found anywhere else on the planet. Its thick vegetation is packed with unique plant life, including massive tree ferns, rare wild orchids, and ancient tropical hardwood trees. As a strictly guarded wildlife sanctuary, it provides a safe haven for extraordinary island creatures, such as the unique Nicobar Megapode—a bird that builds giant mound nests on the forest floor—alongside the Crab-eating Macaque and the legendary Giant Robber Crab, which is the largest land-living arthropod in the world. Due to its highly sensitive location near international borders and its role in protecting the traditional territories of indigenous tribes, access to the park is heavily restricted and requires special government clearances, making it a legendary symbol of pure, untouched natural heritage.",
    images: [campbell1, campbell2],
    source: "(src: shutterstock.com, tourmitra.com)",
  },
  {
    name: "Chatham Sri Pillaiyar Temple (Chatham Island)",
    description:
      "The Chatham Sri Pillaiyar Temple, located on the historic Chatham Island just a short bridge-crossing away from Sri Vijaya Puram (Port Blair), is a deeply revered spiritual landmark that carries immense historical value tied to the industrial heritage of the Andaman and Nicobar Islands. Dedicated to Lord Ganesha, who is traditionally invoked as the remover of obstacles, this beautifully maintained temple sits directly adjacent to the famous Chatham Saw Mill—Asia’s oldest and largest operational sawmill, established by the British in 1883. The temple serves as a unique cultural anchor, illustrating how early immigrant communities brought their faith to these remote islands and seamlessly integrated it into their tough, industrial daily lives.The shrine was originally established by the early technical workers, engineers, and wood-loggers who arrived from the Indian mainland to work at the booming sawmill. Over the decades, it evolved from a simple workspace shrine into a gorgeous, permanent structure featuring vibrant traditional South Indian architectural details and beautifully painted relief sculptures depicting scenes from sacred lore. Because of its deep roots among the working-class settlers, a fascinating local tradition has emerged: almost all islanders, truck drivers, and local sailors make it a point to visit this specific temple to seek blessings before starting a new business venture, operating heavy machinery, or embarking on long cargo voyages across the open sea. During the annual Ganesh Chaturthi festival, the temple transforms into a high-energy community hub, decorated in elaborate floral arrangements and bright lights, offering student researchers a perfect look at how industrial history and living spiritual traditions merge in the archipelago.",
    images: [chatham1],
    source: "(src: gettyimages.com)",
  },
  {
    name: "Sri Vetrimalai Murugan Temple",
    description:
      "The Sri Vetrimalai Murugan Temple, located proudly in the heart of Sri Vijaya Puram (Port Blair), stands as the oldest and one of the most culturally significant Hindu shrines in the Andaman and Nicobar Islands. Dedicated to Lord Murugan, the revered Tamil deity of war, victory, and wisdom, this temple is a spectacular showcase of traditional Dravidian architecture, immediately recognizable by its towering, multi-tiered Gopuram (entrance gateway) that features hundreds of intricately sculpted and brightly painted figures of gods, goddesses, and celestial beings. The temple serves as a beautiful, living monument to the island's unique 'Mini India' identity, drawing thousands of devotees, students, and travelers every year who come to admire its artistic beauty and experience its serene spiritual atmosphere. The temple carries a fascinating history that ties directly into the colonial development of the islands. It was established in 1926 by the British administration, who funded and constructed the shrine specifically to win the goodwill and loyalty of the vast numbers of Tamil laborers and technical staff brought over to build the capital's early roads, buildings, and the nearby Chatham Saw Mill. Over the past century, it has grown from a humble colonial-era shrine into the premier cultural epicenter for the island's South Indian diaspora. The spacious interior is lined with smooth, beautifully carved stone pillars and vibrant ceiling murals that depict sacred stories. The temple reaches its absolute peak of excitement during the annual Panguni Uthiram festival, a massive, high-energy event where the streets of Port Blair fill with color, traditional music, and dramatic processions of devotees carrying elaborate Kavadis (decorated canopies) to fulfill their sacred vows.",
    images: [murugan1],
    source: "(src: andamanisland.in)",
  },
];

const facts = [
  "Barren Island is home to India’s only active volcano",
  "The Andaman and Nicobar Islands consist of around 572 islands, islets, and rocky outcrops, but only a few are inhabited. ",
  "The islands are located closer to Myanmar and Indonesia than mainland India.",
  "The indigenous Sentinelese tribe is among the most isolated communities in the world and avoids contact with outsiders.",
  "Subhas Chandra Bose hoisted the Indian national flag in the islands in 1943 during the freedom struggle. ",
  "The official state animal of Andaman and Nicobar is the Dugong, a large, gentle marine mammal often called the 'sea cow'. These peaceful vegetarians graze on underwater seagrass beds and can be spotted around Ritchie's Archipelago.",
  "More than 80% of the islands are covered with forests, making them rich in biodiversity.",
  "The islands are famous for their coral reefs and marine life, attracting scuba divers from around the world. ",
  "The Andaman and Nicobar Islands lie in a seismically active zone and were affected by the 2004 Indian Ocean tsunami. ",
  "The only commercial airport in the islands is the Veer Savarkar International Airport.",
  "During World War II, the Andaman and Nicobar Islands were actually occupied by the Japanese military for three years (from 1942 to 1945). Remnants of Japanese bunkers, pillboxes, and structures can still be found scattered across the coastlines of Port Blair and Ross Island today.",
  "During British rule, the islands were used as a penal colony because of their remote location.",
  "The waters around the islands are ideal for snorkeling, scuba diving, and sea walking. ",
  "Saltwater crocodiles found in the islands are among the largest reptiles in the world. ",
  "Many indigenous communities traditionally depend on hunting, fishing, and forest resources for survival.",
];

const artGallery = [
  {
    title: "Fish Curry Rice",
    emoji: "🐟",
    color: "#1A6B8A",
    desc: "Staple meal of Andaman made with fresh local fish cooked in coconut-based curry",
    image: gFishCurryRice,
  },
  {
    title: "Coconut Prawn Fry",
    emoji: "🦐",
    color: "#C0522A",
    desc: "Popular coastal delicacy of fresh prawns tossed in coconut and island spices",
    image: gCoconutPrawnFry,
  },
  {
    title: "Nicobari Dress",
    emoji: "👘",
    color: "#2E8B57",
    desc: "Traditional attire of Nicobari tribe featuring wraparound cloth with floral patterns",
    image: gNicobariDress,
  },
  {
    title: "Onge Tribal Wear",
    emoji: "🩱",
    color: "#8B4513",
    desc: "Minimalist body paint and natural fiber clothing of the indigenous Onge tribe",
    image: gOngeTribalWear,
  },
  {
    title: "Cane & Bamboo Craft",
    emoji: "🎋",
    color: "#6B8E23",
    desc: "Traditional island craft of weaving baskets, mats and furniture from local cane",
    image: gCaneBambooCraft,
  },
  {
    title: "Shell Craft",
    emoji: "🐚",
    color: "#4A90A4",
    desc: "Iconic Andaman art of crafting jewellery and showpieces from rare sea shells",
    image: gShellCraft,
  },
  {
    title: "Nicobari Hut Model",
    emoji: "🏚️",
    color: "#A0522D",
    desc: "Traditional stilt house craft unique to Nicobar islands built to resist tidal waves",
    image: gNicobariHutModel,
  },
  {
    title: "Dafla Drum",
    emoji: "🥁",
    color: "#7B3F8A",
    desc: "Traditional tribal drum of Andaman used during ritual dances and community ceremonies",
    image: gDaflaDrum,
  },
];