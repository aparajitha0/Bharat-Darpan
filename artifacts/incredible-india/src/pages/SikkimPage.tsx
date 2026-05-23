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
const sikkimMap = "https://i.postimg.cc/kXy30qwR/image.png";
const losar1 = "https://i.postimg.cc/KcDQRcpz/image.png";
const saga1 = "https://i.postimg.cc/Cxz4PGh1/image.png";
const pang1 = "https://i.postimg.cc/ZqNxZJyT/image.png";
const bumchu1 = "https://i.postimg.cc/4dbv7w52/image.png";
const losoong1 = "https://i.postimg.cc/gjgv4J1Q/image.png";
const maghe1 = "https://i.postimg.cc/kXhQb2QG/image.png";
const sonam1 = "https://i.postimg.cc/FRm3434S/image.png";
const rumtek1 = "https://i.postimg.cc/sfTSkM0S/image.png";
const tsomgo1 = "https://i.postimg.cc/KvVTYdbm/image.png";
const nathula1 = "https://i.postimg.cc/9MJRHkb6/image.png";
const pemayangtse1 = "https://i.postimg.cc/NfyyZpXF/image.png";
const char1 = "https://i.postimg.cc/k4XGsc9J/image.png";
const tashiding1 = "https://i.postimg.cc/FsJRT1tf/image.png";
const phodong1 = "https://i.postimg.cc/FHyKQqHr/image.png";
const rabdentse1 = "https://i.postimg.cc/3RRrmxj6/image.png";
const chorten1 = "https://i.postimg.cc/Vv0YZZVB/image.png";
const namgyal1 = "https://i.postimg.cc/CMRkVhyC/image.png";
const sThangka = "https://i.postimg.cc/FHVJx1c1/image.png";
const sMomos = "https://i.postimg.cc/MH1GKrmw/image.png";
const sPhagshapa = "https://i.postimg.cc/3x8wY14g/image.png";
const sGundruk = "https://i.postimg.cc/3NQK6FQK/image.png";
const sSinki = "https://i.postimg.cc/9XyX9KyP/image.png";
const sChhang = "https://i.postimg.cc/K88mdYwD/image.png";
const sDamfu = "https://i.postimg.cc/nrxJTVqs/image.png";
const sTingsha = "https://i.postimg.cc/3JKhvR8M/image.png";
const sGyaling = "https://i.postimg.cc/XYP6mk9L/image.png";
const sPangden = "https://i.postimg.cc/zBZZXDts/image.png";

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
export default function SikkimPage() {
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
                Sikkim
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                A Flower Blooming in the Himalayas
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Gangtok" },
                  { label: "Population", value: "6.10 Lakh" },
                  { label: "Area", value: "7,096 sq km" },
                  { label: "Founded", value: "16 May 1975" },
                  { label: "Language", value: "Nepali, Sikkimese, Lepcha" },
                  { label: "Districts", value: "6 Districts" },
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
              Gangtok
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Sikkim — Gateway to the Himalayas
            </p>
          </div>
        </Section>

        {/* Map of TSikkim — click to enlarge */}
        <Section title="Map of Sikkim" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(sikkimMap, "Map of Sikkim")}
            >
              <img
                src={sikkimMap}
                alt="Map of Sikkim
                "
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
              Sikkim, often called the “Land of Mystical Mountains,” is a small Himalayan state known for its snow covered peaks, monasteries, and clean surroundings. It became a state of India on 16 May 1975 and today has 6 districts, with Gangtok as its capital.
            </p>
            <p className="text-foreground">
              The state is famous for Kanchenjunga, the third highest mountain in the world, visible from many places in Sikkim. Its culture blends Lepcha, Bhutia, and Nepali traditions, creating a rich mosaic of customs and festivals. Buddhism plays a central role, with monasteries like Rumtek and Pemayangtse serving as spiritual centers. Tsomgo Lake and Nathula Pass are popular tourist destinations, offering natural beauty and historical significance.
            </p>
            <p className="text-foreground">
             Char Dham in Namchi is a modern pilgrimage complex attracting devotees. Festivals like Losar, Saga Dawa, and Pang Lhabsol highlight Sikkim’s spiritual and cultural diversity. Dance forms such as Cham, Maruni, and Tamang Selo enrich its traditions. The cuisine includes momos, thukpa, and sel roti, reflecting Tibetan and Nepali influences. Rivers like Teesta and Rangeet flow through its valleys, sustaining agriculture and communities. 
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Sikkim is admired for its eco friendly policies and cleanliness. It is one of India’s greenest states, with a focus on organic farming. The people are known for their hospitality and discipline. Sikkim’s landscapes attract trekkers, pilgrims, and nature lovers. The state remains a jewel of the Himalayas, offering a blend of spirituality, adventure, and natural beauty.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Sikkim, mapsofindia.com)
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
        <Section title="Facts about Sikkim" icon="💡">
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
            Scroll horizontally to explore Sikkim's iconic foods, crafts,
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
    name: "Losar",
    tagline: "Tibetan Buddhist New Year celebrated with prayers, monastery rituals, and family gatherings. ",
    description:
      "Losar is the Tibetan New Year festival celebrated in Sikkim. It falls in February or March. The festival includes rituals, dances, and feasts. Families clean and decorate their homes. Offerings are made to deities for prosperity. Monks perform prayers and ceremonies. Losar reflects renewal and hope. It promotes unity and joy among communities. Visitors enjoy cultural performances and gatherings. The festival remains a highlight of Sikkim’s traditions. Losar educates people about heritage. It embodies resilience and prosperity. The festival continues to thrive as a cultural landmark.",
    images: [losar1],
    source: "(src: eatmy.news)",
  },
  {
    name: "Saga Dawa",
    tagline:
      "A festival that marks important events in Buddha’s life. People visit monasteries and do prayers and charity",
    description:
      "Saga Dawa is one of the most sacred Buddhist festivals celebrated in Sikkim. It commemorates the birth, enlightenment, and death of Lord Buddha. The festival is observed on the full moon day of the fourth lunar month. Monks and devotees gather in monasteries for prayers and rituals. Sacred texts are recited, and butter lamps are lit. Processions carrying holy scriptures move through towns. Saga Dawa reflects deep spiritual devotion. It promotes compassion and mindfulness. Visitors witness vibrant ceremonies and chants. The festival remains a highlight of Sikkim’s spiritual calendar. Saga Dawa educates people about Buddhist teachings. It embodies harmony of faith and community. The festival continues to thrive as a cultural landmark.",
    images: [saga1],
    source: "(src: ktr.guru)",
  },
  {
    name: "Pang Lhabsol",
    tagline:
      "A unique festival of Sikkim that honors Mount Kanchenjunga as a guardian deity, with masked dances.",
    description:
      "Pang Lhabsol is a unique festival of Sikkim celebrated to honor Mount Kanchenjunga, the guardian deity of the land. It is held annually in August or September. The festival includes rituals, dances, and prayers. Monks perform masked Cham dances symbolizing protection. Pang Lhabsol reflects Sikkim’s spiritual heritage. It promotes unity and respect for nature. Visitors enjoy colorful performances and ceremonies. The festival remains a highlight of Sikkim’s culture. Pang Lhabsol educates people about traditions. It embodies resilience and spirituality. The festival continues to thrive as a cultural landmark.",
    images: [pang1],
    source: "(src: taleof2backpackers.com)",
  },
  {
    name: "Bumchu Festival",
    tagline:
      "",
    description:
      "Bumchu Festival is celebrated at Tashiding Monastery. It is held in February or March. The festival involves opening a sacred vessel of water. The water is believed to predict the future. Monks perform rituals and prayers. Devotees gather in large numbers. Bumchu reflects Buddhist traditions. It promotes faith and spirituality. Visitors enjoy cultural performances. The festival remains a highlight of Sikkim’s spiritual life. Bumchu educates people about heritage. It embodies harmony of faith and community. The festival continues to thrive as a cultural landmark.",
    images: [bumchu1],
    source: "(src: adotrip.com)",
  },
  {
    name: "Losoong/Namsoong",
    tagline:
      "",
    description:
      "Losoong, also called Namsoong, is a harvest festival celebrated in December or January. It marks the end of the agricultural year. The festival includes dances, rituals, and feasts. Monasteries host Cham dances. Losoong reflects Sikkim’s traditions. It promotes unity and community spirit. Visitors enjoy colorful performances. The festival remains a highlight of Sikkim’s culture. Losoong educates people about heritage. It embodies resilience and joy. The festival continues to thrive as a cultural landmark.",
    images: [losoong1],
    source: "(src: adotrip.com)",
  },
  {
    name: "Maghe Sankranti",
    tagline: "",
    description:
      "Maghe Sankranti is celebrated in January by the Nepali community of Sikkim. It marks the sun’s entry into Capricorn. The festival includes rituals, feasts, and fairs. Families prepare traditional dishes. Maghe Sankranti reflects agricultural traditions. It promotes unity and joy. Visitors enjoy cultural performances. The festival remains a highlight of Sikkim’s culture. Maghe Sankranti educates people about heritage. It embodies renewal and prosperity. The festival continues to thrive as a cultural landmark.",
    images: [maghe1],
    source: "(src: nepalminute.com)",
  },
  {
    name: "Sonam Lochar",
    tagline:
      "",
    description:
      "Sonam Lochar is celebrated by the Tamang community of Sikkim. It marks the Tamang New Year. The festival includes rituals, dances, and feasts. Elders bless families for prosperity. Sonam Lochar reflects community traditions. It promotes unity and joy. Visitors enjoy colorful performances. The festival remains a highlight of Sikkim’s culture. Sonam Lochar educates people about heritage. It embodies resilience and renewal. The festival continues to thrive as a cultural landmark.",
    images: [sonam1],
    source: "(src: travel-india.com)",
  },
];

const historicalPlaces = [
  {
    name: "Rumtek Monastery",
    description:
      "Rumtek Monastery, located near Gangtok, is one of the most important Buddhist monasteries in Sikkim. It was built in the 1960s by the 16th Karmapa. The monastery is a center of Buddhist teachings and rituals. Its architecture reflects Tibetan styles. The site has prayer halls, shrines, and murals. Rumtek attracts pilgrims and tourists alike. It is a hub of spiritual learning. The monastery hosts festivals and ceremonies. It preserves Buddhist traditions and culture. The serene environment inspires peace. Rumtek is linked to local folklore. It is a symbol of Sikkim’s spiritual heritage. The monastery remains a highlight of Gangtok. It embodies the harmony of faith and architecture. Rumtek continues to thrive as a spiritual landmark.",
    images: [rumtek1],
    source: "(src: TimesTravel)",
  },
  {
    name: "Tsomgo (Changu) Lake",
    description:
      "Tsomgo Lake, also called Changu Lake, is a glacial lake located in East Sikkim. It is surrounded by snow covered peaks. The lake changes colors with seasons. It is a popular tourist destination near Gangtok. Tsomgo is considered sacred by locals. The site attracts pilgrims and visitors alike. Yak rides are offered around the lake. The area is rich in biodiversity. Migratory birds visit the lake. Tsomgo reflects Sikkim’s natural beauty. It is a symbol of purity and serenity. The lake is linked to local legends. It remains a highlight of Sikkim’s tourism. Tsomgo embodies the harmony of nature and culture. It continues to enchant visitors year round.",
    images: [tsomgo1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Nathula Pass",
    description:
      "Nathula Pass, located in East Sikkim, is a high mountain pass on the India–China border. It was part of ancient trade routes. The pass is surrounded by snowy peaks. It is a popular tourist destination. Nathula reflects Sikkim’s strategic importance. The site attracts adventurers and history lovers. It is linked to local folklore. The pass offers panoramic views. It is a symbol of resilience and history. Nathula remains a highlight of Sikkim’s tourism. The area is rich in biodiversity. Seasonal changes add to its charm. The pass is a cultural landmark. It embodies the harmony of nature and history. Nathula continues to thrive as a tourist attraction.",
    images: [nathula1],
    source: "(src: citybit.in)",
  },
  {
    name: "Pemayangtse Monastery",
    description:
      "Pemayangtse Monastery, located near Pelling in West Sikkim, is one of the oldest and most respected monasteries in the state. Founded in the early 18th century, it was established under royal patronage by Buddhist lamas. The monastery is a center of Nyingma tradition, one of the oldest schools of Tibetan Buddhism. Its architecture reflects traditional styles, with intricate woodwork and murals. The monastery houses sacred relics and statues. It is famous for the annual Cham dance, performed by monks in colorful masks. The site offers panoramic views of Kanchenjunga. Pilgrims and tourists visit to experience its spiritual aura. The monastery preserves Buddhist teachings and rituals. It is a hub of cultural and spiritual learning. Pemayangtse is linked to local folklore and legends. The serene environment inspires peace and devotion. It remains a highlight of Sikkim’s heritage. The monastery embodies the harmony of faith and tradition. Pemayangtse continues to thrive as a spiritual landmark.",
    images: [pemayangtse1],
    source: "(src: TripInvites)",
  },
  {
    name: "Charm Dham (Siddheshwara Dham)",
    description:
      "Char Dham, also called Siddheshwara Dham, is a modern pilgrimage complex located in Namchi, South Sikkim. It was developed in the 2010s with support from the state government. The site features replicas of India’s famous Char Dham temples — Badrinath, Dwarka, Puri, and Rameshwaram. At its center stands a towering statue of Lord Shiva. The complex attracts devotees from across India. It is a symbol of spiritual unity and devotion. The site blends modern architecture with religious significance. Festivals and rituals are celebrated here with grandeur. Char Dham has become a major tourist attraction in Sikkim. It educates visitors about Hindu traditions. The complex is surrounded by scenic hills. It reflects Sikkim’s cultural inclusivity. Char Dham remains a pride of Namchi town. It embodies the harmony of faith and modernity. The site continues to thrive as a spiritual and cultural landmark.",
    images: [char1],
    source: "(src: punjabkesari.com)",
  },
  {
    name: "Tashiding Monastery",
    description:
      "Tashiding Monastery, located in West Sikkim, is one of the holiest Buddhist sites. It was built in the 17th century under royal patronage. The monastery is famous for the Bumchu Festival. Sacred relics and scriptures are preserved here. The site is surrounded by scenic hills and forests. Tashiding reflects Sikkim’s spiritual heritage. Pilgrims gather here for rituals and prayers. The monastery attracts tourists and researchers. It remains a hub of Buddhist learning. Tashiding is linked to local folklore. The site educates visitors about faith. It embodies resilience and spirituality. Tashiding continues to thrive as a cultural landmark.",
    images: [tashiding1],
    source: "(src: Adotrip)",
  },
  {
    name: "Phodong Monastery",
    description:
      "Phodong Monastery, located in North Sikkim, is an important Buddhist site. Built in the 18th century, it belongs to the Kagyu sect. The monastery houses sacred relics and statues. Its architecture reflects traditional styles. Festivals and rituals are celebrated here. Phodong preserves Buddhist teachings and traditions. It attracts pilgrims and tourists alike. The site is linked to local folklore. Phodong remains a highlight of Sikkim’s heritage. The monastery educates visitors about faith. It embodies resilience and spirituality. Phodong continues to thrive as a spiritual landmark.",
    images: [phodong1],
    source: "(src: TripInvites)",
  },
  {
    name: "Rabdentse Ruins",
    description:
      "Rabdentse Ruins, located near Pelling, are remains of Sikkim’s ancient capital. The site dates back to the 17th century. Stone structures and walls reflect medieval architecture. Rabdentse is surrounded by scenic forests. It is linked to local folklore and history. The ruins attract tourists and researchers. Rabdentse inspires respect for heritage. It remains a highlight of Sikkim’s culture. The site educates visitors about history. Rabdentse embodies resilience and tradition. It continues to thrive as a heritage landmark.",
    images: [rabdentse1],
    source: "(src: istockphoto.com)",
  },
  {
    name: "Do Drul Chorten",
    description:
      "Do Drul Chorten, located in Gangtok, is a major Buddhist stupa. It was built in 1945 under the guidance of Trulshik Rinpoche. The stupa houses sacred relics and scriptures. Prayer wheels surround the structure. Devotees gather here for rituals and prayers. Do Drul Chorten reflects Sikkim’s spiritual heritage. It attracts pilgrims and tourists alike. The site is linked to local folklore. Do Drul Chorten remains a highlight of Gangtok’s culture. The stupa educates visitors about faith. It embodies resilience and spirituality. Do Drul Chorten continues to thrive as a spiritual landmark.",
    images: [chorten1],
    source: "(src: dreamstime.com)",
  },
  {
    name: "Namgyal Institute of Tibetology",
    description:
      "The Namgyal Institute of Tibetology, located in Gangtok, is a center of Buddhist learning. It preserves manuscripts, relics, and artifacts. The institute reflects Sikkim’s cultural heritage. Researchers study Tibetan Buddhism here. The site attracts tourists and scholars alike. Exhibits include thangkas, statues, and scriptures. The institute educates visitors about traditions. It remains a hub of spiritual and cultural learning. Namgyal embodies resilience and scholarship. It continues to thrive as a cultural landmark.",
    images: [namgyal1],
    source: "(src: treasuryoflives.org)",
  },
];

const facts = [
  "Sikkim is one of the cleanest and greenest states in India.",
  "Kanchenjunga is the third-highest mountain in the world and is visible from many places in Sikkim.",
  "Sikkim became the 22nd state of India in 1975.",
  "Sikkim has many beautiful monasteries and a strong Buddhist cultural influence.",
  "The Teesta River is one of the most important rivers flowing through Sikkim.",
  " The terrain shifts drastically from roughly 225 meters (750 feet) in river valleys to 8,586 meters (28,169 feet) at the summit of Kanchenjunga.",
  "It is the least populous state in India. The population is highly diverse, primarily consisting of Nepalese descent, alongside indigenous Lepcha, Bhutia, and Limbu communities.",
  " Often called the 'Land of Monasteries', it features deeply revered Buddhist sites like Rumtek and Pemayangtse monasteries.",
  "In 2016, Sikkim became the first state in the world to implement fully organic farming, entirely banning chemical fertilizers and pesticides.",
  "It was the first Indian state to become Open Defecation Free (ODF) in 2008 and has strict regulations against single-use plastics and polystyrene products.",
  "Roughly 35% of the state is protected within the Khangchendzonga National Park, a designated UNESCO World Heritage Site.",
  "It is home to over 600 species of orchids and is globally famous for its diverse rhododendrons and alpine vegetation.",
  "A historic mountain pass on the ancient Silk Road, situated at over 4,300 meters (14,140 feet), which connects Sikkim to Tibet.",
  "Sikkim houses some of the highest lakes in India, including the sacred Gurudongmar Lake, located at over 17,000 feet.",
];

const artGallery = [
  { title: "Thangka Painting", emoji: "🎨", color: "#8B0000", desc: "Sacred Buddhist scroll painting of Sikkim", image: sThangka },
  { title: "Momos", emoji: "🥟", color: "#2E86C1", desc: "Beloved steamed dumplings, soul food of Sikkim", image: sMomos },
  { title: "Phagshapa", emoji: "🥩", color: "#922B21", desc: "Traditional pork and radish stew of Sikkim", image: sPhagshapa },
  { title: "Gundruk", emoji: "🥬", color: "#1E8449", desc: "Fermented leafy greens, a Sikkimese staple", image: sGundruk },
  { title: "Sinki", emoji: "🫙", color: "#D4AC0D", desc: "Fermented radish taproot traditional delicacy", image: sSinki },
  { title: "Chhang", emoji: "🍺", color: "#784212", desc: "Traditional millet beer of the Himalayan people", image: sChhang },
  { title: "Damfu", emoji: "🥁", color: "#6E2F1A", desc: "Single-headed drum central to Limboo folk music", image: sDamfu },
  { title: "Tingsha", emoji: "🎵", color: "#1A5276", desc: "Tibetan ritual cymbals used in Buddhist ceremonies", image: sTingsha },
  { title: "Gyaling", emoji: "🎺", color: "#117A65", desc: "Traditional Tibetan oboe played at monasteries", image: sGyaling },
  { title: "Pangden", emoji: "🧣", color: "#76448A", desc: "Striped apron worn by married Tibetan women", image: sPangden },
];