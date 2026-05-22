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
import nagalandMap from "@assets/nagalandMap.jpg";
const hornbill1 = "https://i.postimg.cc/J0QG52Hm/image.png";
const moatsu1 = "https://i.postimg.cc/63r3Bm0R/image.png";
const sekrenyi1 = "https://i.postimg.cc/TYYwXQWX/image.png";
const aoleang1 = "https://i.postimg.cc/13b5wQ79/image.png";
const tokhu1 = "https://i.postimg.cc/9fTXBnsv/image.png";
const metumnyo1 = "https://i.postimg.cc/C1ghr4gR/image.png";
const luira1 = "https://i.postimg.cc/MHZWqKHP/image.png";
const monyu1 = "https://i.postimg.cc/xjgfgHpF/image.png";
const kohimawar1 = "https://i.postimg.cc/wjR96rxm/image.png";
const kisama1 = "https://i.postimg.cc/7LgDzT2r/image.png";
const dhanush1 = "https://i.postimg.cc/cCJNP954/image.png";
const dimapur1 = "https://i.postimg.cc/KYrSjS6y/image.png";
const mokokchung1 = "https://i.postimg.cc/Vvv3KSdL/image.png";
const japfu1 = "https://i.postimg.cc/3JyspDsc/image.png";
const ntangki1 = "https://i.postimg.cc/LsSwrQnT/image.png";
const pulie1 = "https://i.postimg.cc/LsSwrQnT/image.png";
const longwa1 = "https://i.postimg.cc/hvX59H5c/image.png";
const tuophema = "https://i.postimg.cc/SRHtVDBD/image.png";
const nChangLo = "https://i.postimg.cc/tCVc7G6v/image.png";
const nZeliang = "https://i.postimg.cc/qvV53DXg/image.png";
const nFolkDance = "https://i.postimg.cc/6QzjFWsK/image.png";
const nSmokedPork = "https://i.postimg.cc/633jXkwc/image.png";
const nAxone = "https://i.postimg.cc/wMRwtD1Q/image.png";
const nGalho = "https://i.postimg.cc/WpQv5n6n/image.png";
const nAnishi = "https://i.postimg.cc/52JMV2rS/image.png";
const nChutney = "https://i.postimg.cc/d1pzSsdh/image.png";
const nMokokchung = "https://i.postimg.cc/xTKWtSdj/image.png";
const nHornbill = "https://i.postimg.cc/mrrJLzyh/image.png";
const nKohima = "https://i.postimg.cc/DzYD8vx9/image.png";
const nDzukou = "https://i.postimg.cc/8520myQh/image.png";
const nAttire = "https://i.postimg.cc/SNpPXtfH/image.png";

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
export default function NagalandPage() {
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
                Nagaland
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Festivals
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Kohima" },
                  { label: "Population", value: "19.87 Lakhs" },
                  { label: "Area", value: "16,579 sq km" },
                  { label: "Founded", value: "1 December 1963" },
                  { label: "Language", value: "Nagamese, English" },
                  { label: "Districts", value: "17 Districts" },
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
              Kohima
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Nagaland — Stalingrad of the East
            </p>
          </div>
        </Section>

        {/* Map of Nagaland — click to enlarge */}
        <Section title="Map of Nagaland" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(nagalandMap, "Map of Nagaland")}
            >
              <img
                src={nagalandMap}
                alt="Map of Nagaland"
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
              Nagaland, known as the “Land of Festivals,” is a northeastern state famous for its hills, tribes, and vibrant traditions. It became a state on 1 December 1963 and today has 16 districts, with Kohima as its capital. Dimapur serves as an important business center. 
            </p>
            <p className="text-foreground">
              Nagaland is renowned for its colorful festivals, especially the Hornbill Festival, which showcases the culture of all Naga tribes. The state has a warrior history, reflected in its crafts and folklore. Dzukou Valley, called the “valley of flowers,” adds to its natural charm. Kohima War Cemetery commemorates soldiers of World War II.
            </p>
            <p className="text-foreground">
              Kisama Heritage Village preserves tribal traditions. Nagaland’s cuisine includes smoked pork, Axone, and fiery chutneys. The people are known for their hospitality and strong community bonds. Each tribe has its own language, dress, and customs. Festivals like Moatsu and Sekrenyi highlight agricultural cycles and purification rituals. Dance forms like Chang Lo and Zeliang enrich its cultural fabric. Nagaland’s landscapes are dotted with rivers like Doyang and Dhansiri
            </p>
            <p className="text-foreground italic text-primary font-medium">
              The state is admired for its resilience and creativity. Its crafts, music, and dances reflect tribal pride. Nagaland remains a land of culture, nature, and history. It continues to thrive as a unique destination in Northeast India.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Nagaland, mapsofindia.com)
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
        <Section title="Facts about Nagaland" icon="💡">
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
            Scroll horizontally to explore Nagaland's iconic foods, crafts,
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
    name: "Hornbill Festival",
    tagline: "The biggest festival of Nagaland, held in December. It includes dances, songs, traditional food, and crafts from many tribes",
    description:
      "The Hornbill Festival, held annually in Kisama, is called the “Festival of Festivals.” It brings together all Naga tribes. The festival includes dances, songs, and rituals. Traditional costumes are worn during celebrations. Hornbill reflects Nagaland’s cultural diversity. It promotes unity and identity. Visitors enjoy colorful performances and local food. The festival attracts tourists worldwide. Hornbill remains a highlight of Nagaland’s traditions. It educates people about heritage. The festival embodies joy and community spirit. Hornbill continues to thrive as a cultural landmark.",
    images: [hornbill1],
    source: "(src: TheTravelShots)",
  },
  {
    name: "Moatsu Festival (Ao tribe)",
    tagline:
      "Celebrated after sowing season with singing, dancing, and feasts.",
    description:
      "Moatsu Festival is celebrated by the Ao tribe in May. It marks the completion of sowing season. The festival includes dances, songs, and feasts. Elders bless seeds for prosperity. Moatsu reflects agricultural traditions. It promotes unity and community spirit. Visitors enjoy cultural performances and local food. The festival remains a highlight of Ao culture. Moatsu educates people about traditions. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [moatsu1],
    source: "(src: Outlook Traveller)",
  },
  {
    name: "Sekrenyi Festival (Angami tribe)",
    tagline:
      "A festival linked to purification and community celebration, with traditional events and folk songs",
    description:
      "Sekrenyi Festival is celebrated by the Angami tribe in February. It is a purification and sanctification ritual. The festival includes rituals, dances, and feasts. Elders bless participants for prosperity. Sekrenyi reflects tribal traditions and beliefs. It promotes unity and community spirit. Visitors enjoy colorful performances and local food. The festival remains a highlight of Angami culture. Sekrenyi educates people about traditions. It embodies resilience and spirituality. The festival continues to thrive as a cultural landmark",
    images: [sekrenyi1],
    source: "(src: india-tours.com)",
  },
  {
    name: "Aoleang Festival",
    tagline:
      "",
    description:
      "Aoleang Festival is celebrated by the Konyak tribe in April. It marks the arrival of spring and the new year. The festival includes dances, songs, and rituals. Traditional costumes are worn during celebrations. Aoleang reflects Konyak traditions. It promotes unity and identity. Visitors enjoy colorful performances and feasts. The festival remains a highlight of Nagaland’s culture. Aoleang educates people about traditions. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [aoleang1],
    source: "(src: tribune.net.ph)",
  },
  {
    name: "Tokhü Emong",
    tagline:
      "",
    description:
      "Tokhü Emong is celebrated by the Lotha tribe in November. It marks the harvest season. The festival includes dances, songs, and feasts. Elders bless harvests for prosperity. Tokhü Emong reflects agricultural traditions. It promotes unity and community spirit. Visitors enjoy cultural performances and local food. The festival remains a highlight of Lotha culture. Tokhü Emong educates people about traditions. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [tokhu1],
    source: "(src: screamingpiston.blogspot.com)",
  },
  {
    name: "Metümnyo",
    tagline: "",
    description:
      "Metümnyo Festival is celebrated by the Yimkhiung tribe in August. It is a festival of friendship and bonding. The festival includes dances, songs, and feasts. Elders bless participants for prosperity. Metümnyo reflects tribal traditions. It promotes unity and community spirit. Visitors enjoy colorful performances and local food. The festival remains a highlight of Yimkhiung culture. Metümnyo educates people about traditions. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [metumnyo1],
    source: "(src: Nagaland-DIPR)",
  },
  {
    name: "Luira Phanit",
    tagline:
      "",
    description:
      "Luira Phanit is celebrated by the Tangkhul tribe in February/March. It marks the seed sowing season. The festival includes rituals, dances, and feasts. Elders bless seeds for prosperity. Luira Phanit reflects agricultural traditions. It promotes unity and community spirit. Visitors enjoy colorful performances and local food. The festival remains a highlight of Tangkhul culture. Luira Phanit educates people about traditions. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [luira1],
    source: "(src: e-pao.net)",
  },
  {
    name: "Monyü",
    tagline: "",
    description:
      "Monyü Festival is celebrated by the Phom tribe of Nagaland in April. It marks the arrival of spring and the beginning of the new agricultural cycle. The festival includes rituals, dances, and community feasts. Elders bless seeds and harvests for prosperity. Traditional costumes and ornaments are worn during celebrations. Monyü reflects the Phom tribe’s cultural identity. It promotes unity and community bonding. Visitors enjoy colorful performances and local food. The festival remains a highlight of Phom traditions. Monyü educates people about agricultural heritage. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [monyu1],
    source: "(src: tourmyindia.com)",
  },
];

const historicalPlaces = [
  {
    name: "Kohima War Cemetery",
    description:
      "Kohima War Cemetery is a memorial for soldiers who died in the Battle of Kohima during World War II. It is maintained by war graves authorities. The cemetery has rows of graves with inscriptions. It honors the bravery of Allied soldiers. The site is peaceful and solemn. Visitors pay respects to the fallen heroes. The cemetery reflects Nagaland’s historical significance. It is a symbol of sacrifice and resilience. The memorial attracts tourists and researchers. Kohima War Cemetery is a cultural landmark. It preserves the memory of wartime struggles. The site inspires respect and reflection. It remains a pride of Kohima city. The cemetery highlights Nagaland’s global connections. It is a testimony to courage and history.",
    images: [kohimawar1],
    source: "(src: Indianotravel.com)",
  },
  {
    name: "Kisama Heritage Village",
    description:
      "Kisama Heritage Village, located near Kohima, is a cultural site developed to preserve and showcase Naga traditions. It is best known as the venue of the Hornbill Festival, which brings together all Naga tribes in a grand celebration. The village displays traditional huts, crafts, and artifacts representing different tribes. Visitors can experience dances, songs, and rituals during festivals. Kisama was created by the state government to promote cultural tourism. It serves as a living museum of Naga heritage. The Hornbill Festival attracts thousands of tourists annually. The village highlights the diversity and unity of Nagaland. Handicrafts and local food stalls add to the experience. Kisama is a hub of cultural pride and identity. It educates visitors about tribal customs. The site is eco friendly and scenic. Kisama Heritage Village remains a symbol of Nagaland’s traditions. It is a cultural landmark of the state. The village continues to thrive as a center of heritage and tourism.",
    images: [kisama1],
    source: "(src: dreamstime.com)",
  },
  {
    name: "Dzukou Valley",
    description:
      "Dzukou Valley, located near Kohima and bordering Manipur, is a breathtaking natural destination. It is often called the “valley of flowers” of the northeast. The valley is famous for its seasonal blooms, especially the Dzukou lily. Trekking trails lead through lush forests and meadows. The valley offers panoramic views of hills and rivers. It is a paradise for nature lovers and adventurers. Dzukou is rich in biodiversity, with rare plants and birds. The serene environment makes it a peaceful retreat. The valley is linked to local folklore and traditions. It attracts trekkers from across India. Camping in Dzukou is a popular activity. The valley changes colors with seasons. It is a symbol of Nagaland’s natural wealth. Dzukou remains a highlight of northeast tourism. It embodies the harmony of nature and culture",
    images: [dhanush1],
    source: "(src: lostwithpurpose.com)",
  },
  {
    name: "Dimapur (Kachari Ruins)",
    description:
      "Dimapur, the commercial hub of Nagaland, is also home to the ancient Kachari ruins. These ruins date back to the medieval period, linked to the Dimasa Kachari kingdom. The site has monoliths and stone structures with unique carvings. It reflects the architectural skills of the Kachari rulers. The ruins are historically significant for the region. They attract tourists and researchers interested in archaeology. Dimapur is a blend of modern city life and ancient heritage. The ruins are located near the city center. They are considered sacred by locals. The site highlights Nagaland’s medieval past. Conservation efforts aim to preserve the structures. The ruins inspire respect for history. They remain a cultural landmark of Dimapur. The site educates visitors about ancient traditions. The Kachari ruins are a pride of Nagaland’s heritage.",
    images: [dimapur1],
    source: "(src: gosahin.com)",
  },
  {
    name: "Mokokchung",
    description:
      "Mokokchung, located in central Nagaland, is a cultural center of the Ao Naga tribe. The town is known for its traditions, festivals, and community life. It is surrounded by scenic hills and villages. Mokokchung reflects the hospitality of the Ao people. The town hosts cultural programs and events. It is a hub of education and administration. Traditional dances and songs are performed during festivals. The Ao tribe’s customs are preserved here. Mokokchung attracts tourists for its cultural richness. The town is linked to local folklore. It is a symbol of tribal pride and identity. Handicrafts and textiles are produced here. Mokokchung remains a highlight of Nagaland’s culture. It embodies the harmony of tradition and modernity. The town continues to thrive as a cultural landmark.",
    images: [mokokchung1],
    source: "(src: solitarytraveller)",
  },
  {
    name: "Japfu Peak ",
    description:
      "Japfu Peak, near Kohima, is one of the highest peaks in Nagaland. It is famous for trekking and adventure activities. The peak offers panoramic views of valleys. It is covered with lush forests and rare plants. Japfu is linked to local folklore. The site attracts nature lovers and adventurers. Japfu reflects Nagaland’s natural wealth. Visitors enjoy camping and photography. The peak remains a highlight of tourism. Japfu educates visitors about ecology. It embodies serenity and tradition. Japfu continues to thrive as a natural landmark.",
    images: [japfu1],
    source: "(src: facebook)",
  },
  {
    name: "Ntangki National Park",
    description:
      "Ntangki National Park, located in Peren district, is a wildlife sanctuary. It covers lush forests and hills. The park is home to diverse flora and fauna. Rare species like hoolock gibbons are found here. Ntangki reflects Nagaland’s ecological wealth. The park attracts tourists and researchers. Visitors enjoy trekking and birdwatching. Ntangki remains a highlight of Nagaland’s tourism. The site educates visitors about conservation. It embodies the harmony of ecology and culture. Ntangki continues to thrive as a natural landmark.",
    images: [ntangki1],
    source: "(src: Times Now)",
  },
  {
    name: "Pulie Badze Wildlife Sanctuary",
    description:
      "Pulie Badze Wildlife Sanctuary, located near Kohima, is a scenic trekking destination and ecological hotspot. The sanctuary is covered with lush forests and rolling hills. It is home to diverse flora and fauna, including rare orchids and birds. Trekking trails lead to Pulie Badze peak, offering panoramic views of Kohima town. The site is linked to local folklore and traditions. Pulie Badze reflects Nagaland’s ecological wealth. Visitors enjoy camping, birdwatching, and photography. The sanctuary inspires respect for nature. It remains a highlight of Nagaland’s tourism. Pulie Badze educates visitors about conservation. The site embodies the harmony of ecology and culture. It continues to thrive as a natural landmark.",
    images: [pulie1],
    source: "(src: Incredible India)",
  },
  {
    name: "Longwa Village (Mon District)",
    description:
      "Longwa Village, located in Mon district, is unique as it straddles the India–Myanmar border. The village is home to the Konyak tribe. Traditional longhouses reflect tribal architecture. The Angh (chief) of Longwa rules both sides of the border. The village is linked to warrior traditions. It reflects Nagaland’s cultural diversity. Visitors experience tribal customs and hospitality. Longwa remains a highlight of Nagaland’s heritage. The site educates visitors about traditions. It embodies resilience and community spirit. Longwa continues to thrive as a cultural landmark.",
    images: [longwa1],
    source: "(src: gosahin.com)",
  },
  {
    name: "Tuophema Village",
    description:
      "Tuophema Village, located near Kohima, is a preserved heritage site. It showcases Angami tribal traditions. The village has traditional huts and handicrafts. Visitors experience dances, songs, and rituals. Tuophema reflects Nagaland’s cultural wealth. It promotes community tourism. The site attracts tourists and researchers. Tuophema remains a highlight of Nagaland’s heritage. The village educates visitors about traditions. It embodies resilience and community spirit. Tuophema continues to thrive as a cultural landmark.",
    images: [tuophema],
    source: "(src: myvillage.in)",
  },
];

const facts = [
  "Nagaland has many tribes, each with its own language and traditional dress.",
  "The Hornbill Festival is called the 'Festival of Festivals'.",
  "Nagaland is famous for strong flavors and smoked foods.",
  "Dzukou Valley is known for its rare seasonal flowers.",
  " English is the official state language, and the population boasts a high literacy rate of roughly 80%.",
  "The official state animal is the Mithun (a large bovine) and the state bird is the endangered Blyth's tragopan.",
  "Nagaland is estimated to have unexploited crude oil reserves of 600 million metric tons, alongside significant coal and limestone deposits.",
  "It is a bio-diversity hotspot with over 650 medicinal plants and 46 bamboo species, the state is renowned for its mega-biodiversity.",
  "The highest point in the state stands at an altitude of 3,826 meters in the Kiphire district, right along the Myanmar border.",
  "Nagaland is the native home of the Bhut Jolokia (Ghost Pepper). Once recognized by Guinness World Records as the hottest chili pepper in the world, it is roughly 400 times hotter than Tabasco sauce.",
  "The state is famously known as the 'Falcon Capital of the World' due to the massive migratory flocks of Amur falcons that pass through the region every autumn.",
  "Khonoma Village transformed itself from a land of fierce warriors to a global pioneer in community-led eco-conservation, being officially declared as India's first 'Green Village' in 2005.",
  "Kohima is recognized in national reports as one of the safest cities in India for women, boasting strong community support and women-friendly environments.",
  "During World War II in 1944, the fierce Battle of Kohima was fought here between Allied and Japanese forces. Often dubbed the turning point of the war in Asia, the British National Army Museum voted this and the Battle of Imphal as 'Britain's Greatest Battle'.",
];

const artGallery = [
  { title: "Chang Lo Dance", emoji: "💃", color: "#8B4513", desc: "Traditional war dance of the Chang Naga tribe", image: nChangLo },
  { title: "Zeliang Dance", emoji: "🎶", color: "#C0392B", desc: "Vibrant folk dance of the Zeliang Naga tribe", image: nZeliang },
  { title: "Naga Folk Dance", emoji: "🥁", color: "#6D4C41", desc: "Energetic group tribal dance at Hornbill Festival", image: nFolkDance },
  { title: "Smoked Pork & Bamboo Shoot", emoji: "🥩", color: "#922B21", desc: "Iconic Naga dish of smoked pork with bamboo shoots", image: nSmokedPork },
  { title: "Axone", emoji: "🫙", color: "#1E8449", desc: "Fermented soybean dish unique to Naga cuisine", image: nAxone },
  { title: "Galho", emoji: "🍚", color: "#D4AC0D", desc: "Hearty Naga rice and meat stew", image: nGalho },
  { title: "Anishi", emoji: "🥬", color: "#117A65", desc: "Traditional fermented yam leaves delicacy", image: nAnishi },
  { title: "Naga Chilli Chutney", emoji: "🌶️", color: "#CB4335", desc: "Fiery chutney made from the world's hottest chilli", image: nChutney },
  { title: "Mokokchung Village", emoji: "🏡", color: "#784212", desc: "Cultural heart of the Ao Naga tribal community", image: nMokokchung },
  { title: "Hornbill Festival", emoji: "🎊", color: "#8E44AD", desc: "Grand festival uniting all Naga tribes in Kisama", image: nHornbill },
  { title: "Kohima War Cemetery", emoji: "🕊️", color: "#1A5276", desc: "Solemn WWII memorial honoring Allied soldiers", image: nKohima },
  { title: "Dzukou Valley Flowers", emoji: "🌸", color: "#76448A", desc: "Rare seasonal blooms in the valley of flowers", image: nDzukou },
  { title: "Naga Tribal Attire", emoji: "🥻", color: "#E67E22", desc: "Distinctive handwoven traditional dress of Naga tribes", image: nAttire },
];