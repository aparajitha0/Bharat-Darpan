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
import hpMap from "https://i.postimg.cc/fRf2CQYN/image.png";
const kullu1 = "https://i.postimg.cc/wv7w9tZv/image.png";
const kullu2 = "https://i.postimg.cc/Y0F8m5pk/image.png";
const mandi1 = "https://i.postimg.cc/02gVqyfm/image.png";
const mandi2 = "https://i.postimg.cc/htssxbqX/image.png";
const losar1 = "https://i.postimg.cc/ZRBx1GvN/image.png";
const losar2 = "https://i.postimg.cc/Xq9cv98v/image.png";
const minjair1 = "https://i.postimg.cc/jdQ40Q2f/image.png";
const minjair2 = "https://i.postimg.cc/Bnm5tSxj/image.png";
const doongri1 = "https://i.postimg.cc/fbFxj8qJ/image.png";
const doongri2 = "https://i.postimg.cc/9XyGZtd3/image.png";
const doongri3 = "https://i.postimg.cc/9FVypRbx/image.png";
const lavi1 = "https://i.postimg.cc/Mp3RqsSf/image.png";
const lavi2 = "https://i.postimg.cc/KYKTznGC/image.png";
const lavi3 = "https://i.postimg.cc/GpZysH9k/image.png";
const kangra1 = "https://i.postimg.cc/SsCzLkMq/image.png";
const kangra2 = "https://i.postimg.cc/kMNbBMC9/image.png";
const niwas1 = "https://i.postimg.cc/qMj6xmzN/image.png";
const niwas2 = "https://i.postimg.cc/MpLchv7R/image.png";
const amsrur1 = "https://i.postimg.cc/CKfZYSJf/image.png";
const masrur2 = "https://i.postimg.cc/FRy7dpMH/image.png";
const tabo1 = "https://i.postimg.cc/PfMCd6by/image.png";
const tabo2 = "https://i.postimg.cc/sgbXTbzw/image.png";
const tabo3 = "https://i.postimg.cc/kGMXVmNv/image.png";
const baijinath1 = "https://i.postimg.cc/Y0SMrxkN/image.png";
const baijinath2 = "https://i.postimg.cc/wjNHjMKh/image.png";
const naggar1 = "https://i.postimg.cc/pTWtCBmB/image.png";
const naggar2 = "https://i.postimg.cc/7YF8d4C1/image.png";
const naggar3 = "https://i.postimg.cc/25xs1B0g/image.png";
const gDham = "https://i.postimg.cc/rFxM8z25/image.png";
const gSidu = "https://i.postimg.cc/0Qh1v1Wb/image.png";
const gPattuShawl = "https://i.postimg.cc/zBb40Pzm/image.png";
const gKulluCap = "https://i.postimg.cc/7hSdyGJV/image.png";
const gKinnauriWeave = "https://i.postimg.cc/52sG1MjM/image.png";
const gChambaRumal = "https://i.postimg.cc/x8VpgfpQ/image.png";
const gKangraPainting = "https://i.postimg.cc/YCCndyRh/image.png";
const gNarasinga = "https://i.postimg.cc/Yqb8Lz7r/image.png";

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
export default function HimachalPradeshPage() {
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
                Himachal Pradesh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Dev Bhoomi — The Land of Gods
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Shimla" },
                  { label: "Population", value: "68.64 Lakh" },
                  { label: "Area", value: "55,673 sq km" },
                  { label: "Founded", value: "25 January 1971" },
                  { label: "Language", value: "Hindi, Pahari" },
                  { label: "Districts", value: "12 Districts" },
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
              Shimla
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Himachal Pradesh — Queen of Hills
            </p>
          </div>
        </Section>

        {/* Map of Himachal Pradesh — click to enlarge */}
        <Section title="Map of Himachal Pradesh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(hpMap, "Map of Himachal Pradesh")}
            >
              <img
                src={hpMap}
                alt="Map of Himachal Pradesh"
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
              Himachal Pradesh is a beautiful mountainous state located in the
              northern part of India in the western Himalayan region. The state
              is widely known for its snow-covered mountains, deep valleys,
              forests, rivers, pleasant climate, and rich cultural traditions.
              The word “Himachal” is derived from Sanskrit, where Hima means
              snow and Anchal means lap or abode, together meaning “the land in
              the lap of snow.”
            </p>
            <p className="text-foreground">
              The region has a long historical background and was once ruled by
              several small princely hill kingdoms before India gained
              independence in 1947. After independence, the Government of India
              integrated around thirty princely hill states and formed Himachal
              Pradesh on 15 April 1948 as a Chief Commissioner’s Province.
              Initially, the region had limited administrative powers, but over
              time it underwent several political and territorial changes that
              strengthened its identity as a separate state.
            </p>
            <p className="text-foreground">
              In 1950, Himachal Pradesh became a Part ‘C’ state of India, and
              later in 1956 it was declared a Union Territory. A major change
              occurred in 1966 when some hilly areas of Punjab, including
              Kangra, Kullu, Lahaul-Spiti, and Shimla regions, were merged with
              Himachal Pradesh after the reorganization of Punjab. This
              significantly increased the area, population, and cultural
              diversity of the region. Finally, on 25 January 1971, Himachal
              Pradesh officially became the 18th state of India under the
              Himachal Pradesh State Act passed by the Indian Parliament. Since
              then, the state has developed rapidly in sectors such as tourism,
              agriculture, education, hydropower, and horticulture. Apple
              cultivation became one of the major economic activities and
              transformed the rural economy of the state.
            </p>
            <p className="text-foreground">
              The capital city, Shimla, holds great historical importance
              because it served as the summer capital of British India during
              colonial rule. Today, Shimla remains an important administrative,
              educational, and tourist center. Himachal Pradesh is also famous
              for its scenic hill stations, temples, monasteries, traditional
              handicrafts, folk music, and colorful festivals. The state shares
              its borders with Punjab, Haryana, Uttarakhand, Jammu and Kashmir,
              and the country of China.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Due to its natural beauty, peaceful environment, and cultural
              richness, Himachal Pradesh is often referred to as the “Dev
              Bhoomi” or “Land of Gods.”
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of TN, mapsofindia.com)
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
        <Section title="Facts about Himachal Pradesh" icon="💡">
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
            Scroll horizontally to explore Himachal Pradesh's iconic foods,
            crafts, dance, and traditions.
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
    name: "Kullu Dussehra (Kullu Valley)",
    tagline: "",
    description:
      "Kullu Dussehra is a week-long cultural and religious festival held each October in Kullu, Himachal Pradesh, India. Recognized internationally, it uniquely begins when Dussehra celebrations conclude elsewhere in the country, symbolizing the region’s devotion to Lord Raghunath and its living heritage of local deities and traditions. The festival traces its roots to the 17th century when Raja Jagat Singh installed the idol of Lord Raghunath, brought from Ayodhya, on his throne as penance and declared him the ruler of Kullu. This act transformed the region’s Dussehra into a celebration of divine sovereignty and community unity. The event honors the victory of good over evil and reinforces Kullu’s identity as the “Valley of Gods.”The festivities begin with the grand Rath Yatra (chariot procession) of Lord Raghunath, accompanied by over 300 local deities carried on palanquins from across the valley. Processions, folk music, and the traditional Nati dance fill Dhalpur Maidan with color and sound. Cultural troupes from India and abroad perform, while exhibitions, craft fairs, and local cuisine reflect Himachal’s artistry and hospitality. Animal sacrifices once part of the ritual were discontinued after court orders in 2014. Kullu Dussehra serves as both a pilgrimage and a cultural exposition. It draws thousands of visitors annually and sustains regional crafts, music, and oral traditions. The convergence of deities—each considered a “living god”—and their followers fosters communal harmony across villages, making it a powerful symbol of Himachali faith and identity.Kullu is accessible via the Kullu-Manali Airport at Bhuntar (about 10 km away), by road from Chandigarh or Shimla, and by nearby railway stations at Chandigarh or Joginder Nagar. Accommodations range from state-run hotels to local homestays that offer immersive cultural experiences during the festival week.",
    images: [kullu1, kullu2],
    source: "(src: indiatours.com, india.com)",
  },
  {
    name: "Mandi International Shivaratri Fair (Mandi)",
    tagline: "",
    description:
      "The Mandi International Shivaratri Fair is a spectacular seven-day cultural and religious extravaganza held annually in February or March in the historic town of Mandi, beautifully positioned along the banks of the Beas River. Mandi itself is deeply sacred, packed with eighty-one ancient stone temples that have earned it the famous titles of 'Chhoti Kashi' and the 'Varanasi of the Hills'. The legendary fair officially dates back to 1526, when Raja Ajbar Sen established the town and built the central Bhootnath Temple after following a divine dream directing him to unearth a sacred Shiva Linga. The festival took on an entirely unique, royal dynamic in the early 18th century under Raja Suraj Sen; having lost all his children, the heartbroken king dedicated his entire kingdom to the protector deity Lord Madho Rai (a silver idol form of Lord Vishnu/Krishna), decreeing that all future human kings would merely rule as his servants.This fascinating convergence of Shaivite and Vaishnavite traditions turns Mandi into an incredible 'confluence of the gods' that draws over two hundred local village deities from remote mountain shrines across the district. Carried on the shoulders of devotees in beautifully draped, swinging wooden palanquins, the deities travel for days to gather at the historic Paddal Ground. The celebration officially begins with a grand, highly animated royal procession called the Jaleb, where the deities first pay their respectful obeisance to the state's divine ruler, Madho Rai, before heading to the Bhootnath Temple to honor Lord Shiva. Led by the highly revered rain deity Rishi Kamru Nag, who watches over the entire week's proceedings from the hilltop Tarna Devi Temple, the fair blends deep spiritual rituals with rhythmic drumming on traditional brass horns, vibrant local folk dances, and a bustling mountain marketplace where high-altitude artisans trade authentic Himachali wool, raw honey, and handcrafted goods.",
    images: [mandi1, mandi2],
    source: "(src: livelaw.in, wikipedia)",
  },
  {
    name: "Losar Festival (Lahaul-Spiti & Kinnaur)",
    tagline: "",
    description:
      "The Losar Festival is a highly vibrant and deeply spiritual celebration that marks the arrival of the Tibetan New Year across the high-altitude, snow-bound districts of Lahaul-Spiti and Kinnaur. The word 'Losar' is derived from the Tibetan words 'Lo' meaning year and 'Sar' meaning new, and the festival usually falls between late January and early March, signaling the much-awaited end of the harsh, isolating Himalayan winter. Rooted in an ancient pre-Buddhist agrarian tradition called the Jamyang Festival, it originally focused on offering incense to local spirits to ensure a successful harvest, but it later evolved into a profound Buddhist holiday when the great scholar Padmasambhava integrated local rituals with monastic Buddhism. For the tribal communities of these cold desert valleys, the festival serves as a vital period of social bonding, family reunions, and deep spiritual renewal when the entire region comes alive against a stark backdrop of frozen mountains. The multi-day celebrations are characterized by a beautiful mix of elaborate monastic rituals and joyful household traditions. In the days leading up to the New Year, families perform a rigorous spring cleaning of their homes to sweep away the bad luck and negative energies of the past year, decorating their walls with auspicious symbols drawn in flour, such as the sun, moon, or the endless knot. On the eve of Losar, communities gather to eat Guthuk, a special noodle soup containing hidden ingredients like a piece of charcoal, wool, or chili inside the dough balls, which playfully reveal the personality traits of the person who finds them. The absolute highlight of the festival takes place at ancient, iconic monasteries like Tabo, Key, and Dhankar, where Buddhist monks (Lamas) dress in magnificent, elaborate silk costumes and heavy wooden masks to perform the sacred Cham Dance, a stylized, rhythmic dance that visually dramatizes the triumph of good over evil and blesses the spectators for the coming year.",
    images: [losar1, losar2],
    source: "(src: tourmyindia.com)",
  },
  {
    name: "Minjair Fair (Chamba Valley)",
    tagline: "",
    description:
      "The Minjar Fair is a highly vibrant, week-long state festival celebrated every year on the last Sunday of July in the historic town of Chamba, nestled beautifully in the scenic Chamba Valley. The fair gets its unique name from Minjar, which refers to the golden, silken tassels that represent the blossoming shoots of maize and paddy crops during the monsoon season. Rooted deeply in local history and agrarian tradition, the festival's origin dates back to the 10th century when Raja Sahil Varman won a historic battle against the ruler of Trigarta (modern-day Kangra). Upon his victorious return, the joyful people of Chamba welcomed their king by presenting him with bundles of freshly bloomed maize shoots and paddy as a symbol of prosperity and victory, establishing a grand tradition that has thrived for over a thousand years. The entire celebration turns the historic Chowgan, a sprawling green ground in the center of Chamba town, into a bustling hub of cultural events, sports competitions, and traditional markets. Throughout the week, locals dress up in their finest traditional attire and pin delicate silken Minjar tassels made of red and gold threads onto their clothing as a badge of celebration. The spectacular festival reaches its grand, emotional climax on the final Sunday with a massive royal procession called the Shahi Jaleb, where the chief deity of the valley, Lord Raghuvira, is carried in a beautifully decorated palanquin alongside a long train of local village gods, traditional musicians playing booming brass horns, and police contingents. The procession winds its way down to the banks of the roaring Ravi River, where thousands of devotees gather to toss their Minjar tassels, along with fresh coconuts and seasonal fruits, into the fast-flowing water as a sacred offering to Varuna, the God of Rain, praying for a bountiful harvest and protection from floods.",
    images: [minjair1, minjair2],
    source: "(src: festivalsofindia.com, wikipedia)",
  },
  {
    name: "Doongri Fair (Manali)",
    tagline: "",
    description:
      "The Doongri Fair, widely known as the Dhungri Mela or the Hadimba Devi Fair, is a highly popular three-day cultural extravaganza celebrated annually from May 14 to 16 in the popular hill station of Manali. The festival takes place directly within the dense, towering deodar woods of the Dhungri Van Vihar forest at the historic, four-tiered wooden Hadimba Devi Temple, which was constructed in 1533 by Raja Bahadur Singh. Held specifically to celebrate the birthday of Goddess Hadimba, the patron deity of the Kullu royals and the legendary wife of Bhima from the Indian epic Mahabharata, this vibrant spring fair acts as a grand welcoming of the pleasant mountain spring season after months of harsh, freezing winters. For students looking into regional epics, this fair provides a direct living link to ancient mythology, honoring a figure who retired to these exact forests for rigorous meditation and spiritual devotion until she was revered as a protecting goddess by her subjects. The fair acts as a beautiful mirror to the collective lifestyle and community spirit of the Kullu Valley, drawing hundreds of villagers from neighboring mountain hamlets in grand, musical processions. Devotees carry the idols of their own local gods and goddesses in beautifully carved, wooden chariots or Raths draped in fine silk and floral garlands to greet Goddess Hadimba at her forest shrine. The entire woodland clearing transforms into a colorful carnival filled with standard mountain games like kite flying, local food stalls offering authentic Himachali delicacies, and markets displaying handmade woolens and wooden carvings. The sensory highlight of the fair is its music and dance, where local musicians play dramatic ceremonial tunes on massive, long brass trumpets known as Karnals while massive circles of performers execute the rhythmic movements of the traditional Kullu Natti folk dance, making it an unmissable and highly scannable snippet of Himalayan culture.",
    images: [doongri1, doongri2, doongri3],
    source: "(src: culturetravel.in)",
  },
  {
    name: "Lavi Fair (Rampur Bushahr)",
    tagline: "",
    description:
      "The Lavi Fair is a highly historic, four-day commercial and cultural event held annually from November 11 to 14 in the town of Rampur Bushahr, situated along the banks of the Sutlej River in the Shimla district. It holds a distinct place in Himalayan history as the oldest trade fair in the region, tracing its origins back over three hundred years to the late 17th century during the rule of Raja Kehari Singh of the erstwhile Bushahr State. The fair was officially established following a historic trade and peace treaty signed between the Bushahr kingdom and Tibet, which opened up free, duty-free trade corridors across the high mountain passes. For centuries, this grand winter gathering served as a vital international marketplace where traders from Tibet, Kinnaur, Lahaul-Spiti, and the lower plains of India met just before the heavy winter snows blocked the rugged caravan routes.Today, the Lavi Fair continues to thrive as a massive, colorful exhibition of Himalayan rural economy and cultural heritage, drawing thousands of farmers, high-altitude shepherds, and buyers from across north India. The bustling stalls are famous for showcasing authentic, high-quality mountain products, most notably fine Pashmina wool, hand-woven Kinnauri shawls, traditional caps, and distinct local blankets called Gudmas. Beyond textiles, it remains a premier market for pure mountain commodities like dried apricots, chilgoza (rare pine nuts), local walnuts, and valuable medicinal herbs collected from high alpine ridges. The fair also retains its old-world charm through the trading of sturdy Chamurthi horses, a rare and highly prized breed of mountain ponies from the Spiti valley. As dusk falls, the commercial buzz seamlessly transitions into a lively cultural festival, featuring performances by regional folk artists and massive community circles dancing the traditional Natti to the echo of roaring brass trumpets.",
    images: [lavi1, lavi2, lavi3],
    source: "(src: Wikipedia, jokta academy, youtube)",
  },
];

const historicalPlaces = [
  {
    name: "Kangra Fort",
    description:
      "Standing as a massive, towering sentinel over the Banganga and Manjhi rivers, the legendary Kangra Fort is officially recognized as the largest fort in the entire Himalayan region and arguably the oldest dated fort in India. Its origins trace back over thousands of years to the ancient Katoch Rajput dynasty, which connects directly to the Trigarta Kingdom mentioned in the epic Mahabharata. Known historically as Nagarkot, this colossal stone fortress was considered virtually impregnable, making it the ultimate prize for invaders who sought to plunder the legendary treasures stored inside its hidden temple vaults. Over the centuries, it withstood fierce sieges and witnessed monumental power shifts, falling successively under the control of prominent historical figures like Mahmud Ghazni, the Mughal Emperor Jahangir, Maharaja Sansar Chand, and eventually the British Raj. Today, walking through its grand, massive stone gateways, past structural ruins heavily damaged by a catastrophic earthquake in 1905, gives students an unmissable lesson in ancient warfare, architectural engineering, and the enduring resilience of Indian royalty.",
    images: [kangra1, kangra2],
    source: "(src: timesofindia.indiatimes.com, seawatersports.com)",
  },
  {
    name: "Rashtrapati Niwas / Viceregal Lodge (Shimla)",
    description:
      "Perched elegantly atop the scenic Observatory Hill in the capital city of Shimla, the Rashtrapati Niwas, originally known as the Viceregal Lodge, is a masterpiece of British colonial architecture. Designed by the acclaimed British architect Henry Irwin and completed in 1888, this grand, multi-story structure was built in the striking Jacobethan style using local light blue-grey sandstone and fine internal teakwood. For decades, it served as the elite summer residence of the Viceroy of India, meaning that some of the most critical geopolitical decisions shaping modern South Asian history—including the foundational discussions for the Partition of India—took place within these very walls. Following India's independence, the palace was handed over to the President of India before being transitioned under Dr. S. Radhakrishnan into the headquarters for the Indian Institute of Advanced Study. Surrounded by beautifully manicured botanical lawns and pine woods, this monument offers an extraordinary, living educational reference for students studying modern Indian history, global politics, and classic European design elements.",
    images: [niwas1, niwas2],
    source: "(src: fineartamerica.com, needpix.com)",
  },
  {
    name: "Masrur Rock-Cut Temple",
    description:
      "Often hailed by historians as the 'Ellora of the North', the Masrur Rock-Cut Temples form an extraordinary complex of fifteen monolithic shrines carved directly out of a single, solid sandstone ridge during the early 8th century. Located in the serene Kangra Valley, this architectural wonder showcases the intricate, classical Nagara style of North Indian temple design, featuring towering shikharas (spires), elaborate decorative arches, and deeply detailed wall reliefs depicting various major Hindu deities. Legend connects these rock structures directly to the Pandava brothers from the Mahabharata, who are believed to have begun carving the temples during their secret period of exile. What makes Masrur so scientifically and historically fascinating for students is the sheer precision of its monolithic construction, where ancient artisans carved top-down into the bedrock rather than building piece-by-piece. The main temple faces a massive, pristine, man-made stone water tank that mirrors the dramatic spires perfectly, creating a visually stunning backdrop that highlights the genius of early Indian master builders. ",
    images: [amsrur1, masrur2],
    source: "(src: detechter.com, tripadvisor.com)",
  },
  {
    name: "Tabo Monastery",
    description:
      "Tucked away in the stark, high-altitude cold desert of the Spiti Valley, Tabo Monastery stands proudly as the oldest continuously functional Buddhist monastery complex in both India and the entire Himalayan belt. Founded in the year 996 AD by the legendary Tibetan Buddhist translator Rinchen Zangpo under the patronage of the Western Himalayan Kingdom of Guge, this ancient compound has stood firmly for over a thousand years. Often referred to by global art historians as the 'Ajanta of the Himalayas', the exterior consists of modest, weather-worn mud-brick walls built to survive the extreme, freezing high-altitude elements. However, the interior houses a breathtaking treasure trove of ancient Indian and Tibetan art, including extraordinarily preserved wall frescoes, stucco clay statues of various Bodhisattvas, and invaluable ancient manuscripts. Tabo holds immense educational value as a protected UNESCO World Heritage Site, demonstrating a thousands-year-old living link of cross-border trade, spiritual learning, and the preservation of ancient culture.",
    images: [tabo1, tabo2, tabo3],
    source: "(src: vargiskhan.com, indianholiday.com, shutterstock.com)",
  },
  {
    name: "Baijinath Temple",
    description:
      "Situated along the national highway in the shadow of the spectacular, snow-clad Dhauladhar mountain range, the Baijnath Temple is one of India's most architecturally perfect and spiritually revered monuments dedicated to Lord Shiva. Constructed in 1204 AD by two wealthy local merchants named Ahuka and Manyuka, the temple is an exquisite, fully intact survival of the classic early medieval Nagara architecture. The structure is deeply celebrated for its phenomenal stone carvings, featuring highly detailed sculptures of celestial musicians, dwarapalas (gatekeepers), and various iconic depictions of Puranic mythology integrated smoothly into the exterior walls. For students researching local folklore, Baijnath features a fascinating connection to the Ramayana, as it is believed to be the exact spot where the demon king Ravana placed down his heavy Shiva Linga while traveling to Lanka, causing it to become permanently rooted into the earth. The site remains a monumental asset for studying medieval Indian society, showing how local commerce, art, and spirituality closely intertwined to fund lasting architectural legacies.",
    images: [baijinath1, baijinath2],
    source: "(src: blogspot.com, himtimes.com)",
  },
  {
    name: "Naggar Castle",
    description:
      "Overlooking the rushing waters of the Beas River from its high vantage point in the historic town of Naggar, Naggar Castle is a magnificent, ancient palace-fortress built around 1460 AD by Raja Sidh Singh of Kullu. This monument is exceptionally famous for its unique construction method known as 'Kath-Kuni', a traditional Himalayan architectural technique that relies entirely on alternating layers of thick local timber beams and split river stones without the use of any iron nails or mortar. This ingenious structural engineering makes the entire castle highly flexible, allowing it to easily withstand the massive earthquakes that frequently rock the volatile Himalayan region. Serving as the primary seat of power for the Kullu rulers for over two centuries, the castle blends defensive battlements with graceful wooden verandas that showcase beautiful, intricate carvings. It serves as an excellent, scannable case study for students to explore indigenous green architecture, historic mountain defense tactics, and the unique artistic traditions of the upper hills. ",
    images: [naggar1, naggar2, naggar3],
    source:
      "(src: travel.india.com, travelandleisureasia.com, zeenews.india.com)",
  },
];

const facts = [
  "The First Vote: Shyam Saran Negi from Kinnaur became the first person to cast a vote in independent India during the early elections of October 1951.",
  "Highest Post Office: The village of Hikkim in the Spiti Valley houses the world's highest functional post office at an altitude of 14,567 feet.",
  "UNESCO Toy Train: The historic Kalka-Shimla Railway is an engineering marvel that navigates steep slopes through 102 active tunnels and over 800 bridges.",
  "Oldest Democracy: The isolated village of Malana runs an independent, centuries-old democratic system and considers its people descendants of Alexander the Great.",
  "Highest Cricket Ground: Built by the Maharaja of Patiala in 1893, the Chail Cricket Ground is the highest in the world at 8,018 feet above sea level.",
  "Fruit Bowl of India: The state's diverse climate allows it to produce the vast majority of India's commercial apples, cherries, and high-altitude stone fruits.",
  "Natural Ice-Skating Rink: Shimla hosts South Asia's only completely natural, open-air ice-skating rink, which freezes naturally using chilly winter night temperatures.",
  "The 500-Year-Old Mummy: The remote village of Geu houses the naturally self-mummified body of a 15th-century Buddhist monk named Sangha Tenzin.",
  "The Fossil Village: Sitting high in the Spiti Valley, the village of Langza is famous for marine fossils that prove the Himalayas once lay beneath the ancient Tethys Ocean.",
  "Eco-Friendly Laws: Himachal Pradesh was the first Indian state to legally ban plastic bags and achieve a fully smoke-free status in public spaces.",
];

const artGallery = [
  {
    title: "Dham",
    emoji: "🍛",
    color: "#C0522A",
    desc: "Traditional festive meal of Himachal served on leaf plates during celebrations",
    image: gDham,
  },
  {
    title: "Sidu",
    emoji: "🫓",
    color: "#D4A017",
    desc: "Famous steamed wheat bread stuffed with poppy seeds and walnut paste",
    image: gSidu,
  },
  {
    title: "Pattu Shawl",
    emoji: "🧣",
    color: "#7B3F8A",
    desc: "Traditional handwoven woolen shawl of Himachal worn during festivals and winters",
    image: gPattuShawl,
  },
  {
    title: "Kullu Cap",
    emoji: "🧢",
    color: "#B5341A",
    desc: "Iconic traditional cap of Kullu worn by Himachali men as cultural identity",
    image: gKulluCap,
  },
  {
    title: "Kinnauri Weave",
    emoji: "🪡",
    color: "#4A6E8A",
    desc: "Distinctive geometric patterned textile from Kinnaur woven with wool and silk",
    image: gKinnauriWeave,
  },
  {
    title: "Chamba Rumal",
    emoji: "🎨",
    color: "#D4822A",
    desc: "Famous double-satin embroidery craft of Chamba depicting mythological scenes",
    image: gChambaRumal,
  },
  {
    title: "Kangra Painting",
    emoji: "🖼️",
    color: "#6B8E4E",
    desc: "Classical miniature painting style from Kangra valley known for delicate brushwork",
    image: gKangraPainting,
  },
  {
    title: "Narasinga",
    emoji: "🎺",
    color: "#B8922A",
    desc: "Traditional long brass trumpet of Himachal played during religious ceremonies and festivals",
    image: gNarasinga,
  },
];
