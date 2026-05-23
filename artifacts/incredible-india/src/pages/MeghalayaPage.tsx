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
const meghalayaMap = "https://i.postimg.cc/rmNsMn4z/image.png";
const WangalaFestival1 = "https://i.postimg.cc/TYJxb81C/image.png";
const WangalaFestival2 = "https://i.postimg.cc/gkZ9hwSb/image.png";
const WangalaFestival3 = "https://i.postimg.cc/cHbjgZfL/image.png";
const ShadSukMynsiem1 = "https://i.postimg.cc/6QhW2HWr/image.png";
const ShadSukMynsiem2 = "https://i.postimg.cc/2SRrHpVR/image.png";
const ShillongWinterFestival = "https://i.postimg.cc/pV3mt6pX/image.png";
const StrawberryFestival = "https://i.postimg.cc/qRzvPsrS/image.png";
const DurgaPuja1 = "https://i.postimg.cc/g2scrSkC/image.png";
const DurgaPuja2 = "https://i.postimg.cc/FsgNnWcs/image.png";
const Behdeinkhlam1 = "https://i.postimg.cc/CKZyYmZM/image.png";
const Behdeinkhlam2 ="https://i.postimg.cc/LXzb672c/image.png";
const Behdeinkhlam3 = "https://i.postimg.cc/9FXnCJK2/image.png";
const LahoDanceFestival = "https://i.postimg.cc/q7KmjYh5/image.png";
const Mono1 = "https://i.postimg.cc/Pq8yDpKL/image.png";
const Mono2 = "https://i.postimg.cc/J7QqjW33/image.png";
const Mono3 = "https://i.postimg.cc/jjtsBN9T/image.png";
const Mono4 = "https://i.postimg.cc/FKr4TvdY/image.png";
const Megalithic1 = "https://i.postimg.cc/jj2ssKsF/image.png";
const Megalithic2 = "https://i.postimg.cc/4y6G8x5v/image.png";
const Bridge = "https://i.postimg.cc/X7g3dXXW/image.png";
const Caves1 = "https://i.postimg.cc/k5LdqbYg/image.png";
const Caves2 = "https://i.postimg.cc/Y0HKmwH7/image.png";
const Syndai1 = "https://i.postimg.cc/mgDx9w0H/image.png";
const Syndai2 = "https://i.postimg.cc/xdwBWSq7/image.png";
const Root1 = "https://i.postimg.cc/7hVcGG9g/image.png";
const Root2 = "https://i.postimg.cc/8PZ9TvjS/image.png";
const Root3 = "https://i.postimg.cc/FKLBbnGV/image.png";
const Kiang1 = "https://i.postimg.cc/L68QQsvb/image.png";
const Kiang2 = "https://i.postimg.cc/4xKLZFDr/image.png";
const Kiang3 = "https://i.postimg.cc/Y9x8bcFm/image.png";
const Kiang4 = "https://i.postimg.cc/zBqFLdQJ/image.png";
const Memorial = "https://i.postimg.cc/QCyQyjdj/image.png";
const Sangma1 = "https://i.postimg.cc/rwW1fX63/image.png";
const Sangma2 = "https://i.postimg.cc/ZRfpWJ3s/image.png";
const Temple1 = "https://i.postimg.cc/1tTr3DLY/image.png";
const Temple2 = "https://i.postimg.cc/RF3wyNN4/image.png";
const Lake1 = "https://i.postimg.cc/CxFkYvzv/image.png";
const Lake2 = "https://i.postimg.cc/BnYL3JW6/image.png";
const Cathedral1 = "https://i.postimg.cc/Bb4QDz9J/image.png";
const Cathedral2 = "https://i.postimg.cc/XYmjxqSL/image.png";
const Cathedral3 = "https://i.postimg.cc/x86YmT3R/image.png";
const Don1 = "https://i.postimg.cc/SKfPR1rW/image.png";
const Don2 = "https://i.postimg.cc/Y0ZnZ5rq/image.png";
const Don3 = "https://i.postimg.cc/QtMft8VL/image.png";
const Ward1 = "https://i.postimg.cc/G3W6MDHp/image.png";
const Ward2 = "https://i.postimg.cc/JhY2jDfy/image.png";
const Ward3 = "https://i.postimg.cc/3rmtxcxW/image.png";
const gPumaloi = "";
const gLakadongTurmeric = "https://i.postimg.cc/L8CTWdxK/image.png";
const gLarnaiPottery = "https://i.postimg.cc/J0LcXRz1/image.png";
const gDakmanda = "https://i.postimg.cc/xTgykDDb/image.png";
const gChubitchi = "https://i.postimg.cc/d3wr1n5d/image.png";
const gJadoh = "https://i.postimg.cc/GmHYH4jw/image.png";
const gDohneiiong = "https://i.postimg.cc/tJBZgb18/image.png";
const gTungrymbai= "https://i.postimg.cc/vBzDPyvv/image.png";
const gNakhamBitchi = "https://i.postimg.cc/XNspdVJH/image.png";
const gNongkrem = "https://i.postimg.cc/MGJTqHPK/image.png";
const gBambooCane = "https://i.postimg.cc/X7y4q3yh/image.png";
const gKhasiUmbrella = "https://i.postimg.cc/zvHZyS3R/image.png";
const gEriSilk = "https://i.postimg.cc/jdN29yvV/image.png";
const gForestHoney = "https://i.postimg.cc/63y5hZTm/image.png";
const gShillongCafe = "https://i.postimg.cc/4NCNzmG8/image.png";
const gBetelNut = "https://i.postimg.cc/bv44KSmj/image.png";
const gBlackRice = "https://i.postimg.cc/zXp6qcxc/image.png";


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
export default function MeghalayaPage() {
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
                Meghalaya
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
               The Abode of Clouds
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Shillong" },
                  { label: "Population", value: "34.47 lakhs" },
                  { label: "Area", value: "22,429 sq km" },
                  { label: "Founded", value: "21 January 1972" },
                  { label: "Language", value: "Khasi, Garo" },
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
              Shillong
            </h3>
            <p className="text-muted-foreground text-sm">
             Shillong - 'Scotland of the East'
            </p>
          </div>
        </Section>

        {/* Map of Meghalaya — click to enlarge */}
        <Section title="Map of Meghalaya" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(meghalayaMap, "Map of Meghalaya")}
            >
              <img
                src={meghalayaMap}
                alt="Map of Meghalaya"
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
              Meghalaya, a state in Northeast India, is a land of profound natural beauty and cultural heritage. Its name, an etymology derived from the Sanskrit words megha and alaya, translates literally to the "abode of clouds." This title is a direct reflection of its geography and climate; as a mountainous plateau primarily composed of Archean rock formations, it is the wettest region on Earth. The towns of Mawsynram and Cherrapunji hold world records for annual rainfall, creating a landscape defined by deep gorges, dramatic waterfalls, and a persistent mist.
            </p>
            <p className="text-foreground">
              The state’s history is deeply rooted in its indigenous tribes—the Khasis, Garos, and Jaintias. These groups maintained independent kingdoms until coming under British administration in the 19th century. Originally part of Assam, Meghalaya achieved full statehood on January 21, 1972. This historical backdrop has preserved a unique religion and social structure; while about 75% of the population is Christian, many still practice indigenous faiths like Niamtre and Songsarek. Furthermore, the state is famous for its matrilineal system, where lineage and inheritance are traced through the mother.
            </p>
            <p className="text-foreground">
             Meghalaya's moisture-rich environment supports a spectacular array of flora and fauna. Approximately 70% of the state is forested, including dense subtropical forests and "sacred groves" preserved by local communities. It is home to the rare Clouded leopard, the Hoolock gibbon, and the endemic insect-eating pitcher plant.
            </p>
            <p className="text-foreground">
          Economy remains predominantly agrarian, with nearly two-thirds of the workforce engaged in agriculture. While rice is the staple food grain, the state is a significant producer of cash crops like pineapples, bananas, and high-quality The turmeric. Though rich in minerals like coal and limestone, industrial development is limited, with the state increasingly focusing on ecotourism and its vast hydroelectric potential. While English is the official language, Khasi and Garo remain the most widely spoken tongues, embodying the enduring spirit of the "abode of clouds”.   
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Meghalaya, mapsofindia.com)
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
        <Section title="Facts about Meghalaya" icon="💡">
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
            Scroll horizontally to explore Meghalaya's iconic foods, crafts,
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
    name: "Wangala Festival",
    tagline: "The Festival of the Hundred Drums",
    description:
      "The Wangala Festival, also known as the Festival of the Hundred Drums, is the most significant harvest celebration for the Garo people of Meghalaya, Assam, and Bangladesh. Held annually between September and December, it is a thanksgiving ceremony dedicated to Misi Saljong, the Sun God, to acknowledge a bountiful harvest. The celebration begins with sacred rituals like Rugala, where rice beer is poured, and Cha·chat So·a, the burning of incense by the village priest (Kamal). The highlight of the festival is the synchronized beating of 100 long drums (Dama), accompanied by the melodic sounds of flutes and brass instruments. Men and women dress in vibrant traditional attire—the Dakmanda and Gando—adorned with feathered headgear called do’me. They perform energetic folk dances, including the Chambil Mesaa (Pomelo Dance) and rhythmic 'rapping' known as Katta Doka. While traditionally a religious event for the Songsarek (animistic) community, the modern 100 Drums Festival in Asanag has become a major cultural landmark, attracting global tourists to witness the preservation of Garo heritage.",
    images: [WangalaFestival1,WangalaFestival2, WangalaFestival3],
    source: "(src: Wikipedia)",
  },
  {
    name: " Shad Suk Mynsiem",
    tagline:
      "The heart of kasi culture",
    description:
      "The Shad Suk Mynsiem festival is celebrated by the Khasi tribe in Meghalaya in April. The festival is a celebration of the harvest season and is dedicated to nature. The main attraction of the festival is the Shad Suk Mynsiem dance, which is performed by young Khasi women wearing traditional attire and holding parasols. The dance is believed to invoke the blessings of the gods for a bountiful harvest. The festival is a colorful and vibrant event that showcases the unique cultural heritage of the Khasi tribe in Meghalaya.",
    images: [ShadSukMynsiem1,ShadSukMynsiem2],
    source: "(src: tse3.mm.bing.net)",
  },
  {
    name: "Shillong Winter Festival",
    tagline:
      "Winter tales",
    description:
      "The Shillong Winter Festival is a vibrant annual event held in December that celebrates the rich cultural heritage of Meghalaya. Organized by the Meghalaya Tourism Development Corporation, the festival transforms the 'Abode of Clouds' into a hub of festivity. It features a diverse array of activities, including traditional dance performances, live music, and adventure sports. Visitors can explore various food stalls offering local delicacies or shop for indigenous crafts. This festival provides a unique opportunity to experience the warmth of Khasi traditions and the scenic beauty of Shillong during the crisp winter season.",
    images: [ShillongWinterFestival],
    source: "(src:tse.mm.bing.net)",
  },
  {
    name: "Strawberry Festival",
    tagline:
      "From Farm to Feast",
    description:
      "The Strawberry Festival is an annual festival celebrated in the town of Sohra (Cherrapunji) in Meghalaya in February. The festival is a celebration of the harvest season of strawberries in the region, which is known for its high-quality strawberries. The festival is marked by various events and activities, including strawberry picking, traditional dance performances, food stalls, and adventure sports. The festival provides an opportunity for visitors to taste and buy the fresh strawberries from the local farmers.The festival is a popular event that attracts visitors from all over the world who are interested in experiencing the unique flavor of the locally grown strawberries. The festival also provides a platform for local farmers to showcase their produce and promote eco-tourism in the region. The Strawberry Festival is a testament to the diverse cultural heritage of Meghalaya and is a must-visit destination for anyone interested in exploring the state’s unique customs and traditions.",
    images: [StrawberryFestival],
    source: "(src: tse1.mm.bing.net)",
  },
  {
    name: "Durga Puja",
    tagline:
      "",
    description:
      "In Meghalaya, Durga Puja is a vibrant testament to the state’s cultural diversity, where tradition meets the serene beauty of the hills. While the festival is celebrated with grandiosity across India, Meghalaya’s observance is uniquely characterized by its hilly terrain and communal harmony. Unlike the massive, crowded metropolitan celebrations, Puja here is defined by over 250 community pandals scattered across the Khasi, Jaintia, and Garo Hills, where the cool mountain air adds a distinct, tranquil atmosphere to the festivities.What sets this state apart is the seamless integration of local tribal culture and urban traditions. In the capital city of Shillong, the celebrations are exceptionally inclusive, often seeing participation from various ethnic communities, making it a 'People’s Festival' rather than just a religious one. The Central Puja Committee coordinates these efforts to ensure peace and environmental consciousness, often emphasizing eco-friendly idols. The immersion processions are particularly striking; instead of vast riverbanks, the idols are carried through narrow, winding mountain roads to local immersion points, creating a picturesque and intimate farewell to the Goddess that is truly unlike any other state in the country.",
    images: [DurgaPuja1,DurgaPuja2],
    source: "(src: tse3.mm.bing.net)",
  },
  {
    name: "Behdeinkhlam",
    tagline: "Derived from the Pnar words 'behdein' (to drive away) and 'khlam' (plague or disease), ",
    description:
      "Behdienkhlam is the most significant cultural and harvest festival of the Pnar people in Meghalaya, India, primarily celebrated in the Jaintia Hills. The name itself is deeply symbolic, derived from the Pnar words 'behdein'(to drive away) and 'khlam' (plague or disease), reflecting its historical roots as a ritual to ward off cholera and evil spirits. Held annually in July after the sowing season, the festivities serve as a powerful invocation for a bountiful harvest and the collective well-being of the community.The celebration is marked by vibrant rituals and traditional sports. Men symbolically drive away negative energies by beating house roofs with bamboo poles, while elaborate, tall structures known as Rots are paraded through the streets and eventually submerged in the sacred mud pool of Aitnar. A central highlight is a unique game called Dad-lawakor, similar to football but played with a wooden ball, and the Iatan-Bhang, a spirited tug-of-war over a stripped wooden log. While the men engage in rhythmic dancing to the beat of drums and flutes, women play a crucial role by offering sacrificial food to honor their ancestors. This festival beautifully intertwines spiritual devotion with community bonding and cultural preservation.",
    images: [Behdeinkhlam1,Behdeinkhlam2,Behdeinkhlam3],
    source: "(src: tse3.mm.bing.net,tse4.mm.bing.net,tse2.mm.bing.net)",
  },
  {
    name: "Laho Dance Festival",
    tagline:"The Joyful Pulse of Behdienkhlam - Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",        
    description:
      "The Laho Dance of Meghalaya is a profound cultural tradition of the Pnar community, primarily celebrated during the Behdienkhlam festival. This social dance serves as a vibrant expression of communal unity and gratitude for a successful harvest. Distinguishing itself from many Indian folk traditions, the Laho Dance is performed without any musical instruments; instead, it relies on the rhythmic recitation of witty and satirical couplets that set the pace for the performers. The choreography typically features a woman linked between two men, moving in synchronized harmony to the melodic verses. Dancers are adorned in colorful traditional Khasi-Pnar attire, with women wearing elaborate gold and silver jewelry. Despite its significance, the dance faces modern challenges such as urbanization and a lack of institutional support.",
    images: [LahoDanceFestival],
    source: "(src: auchitya.com)",
  },

];

const historicalPlaces = [
  {
    name: "Nartiang Monoliths (Jaintia Hills)",
    description:
      "The Nartiang Monoliths, located in the West Jaintia Hills of Meghalaya, represent one of the most significant archaeological and cultural landmarks in Northeast India. This site serves as a profound testament to the Jaintia Kings' legacy, featuring the largest collection of monoliths found in a single area within the Khasi and Jaintia Hills. These megalithic structures were erected between the 15th and 18th centuries to commemorate the glorious reigns and military triumphs of the Jaintia rulers.The site is distinguished by two types of stones: the Mawlyngknot (horizontal flat stones) and the Mawnam (vertical upright stones). The most striking feature of the garden is the world’s tallest monolith, an impressive structure reaching approximately 8 meters in height. Beyond their architectural grandeur, the monoliths hold deep spiritual and historical value for the local tribes, symbolizing the enduring strength of ancestral traditions. Tucked away near the Nartiang market, the site offers a quiet, contemplative atmosphere for visitors looking to explore the ancient megalithic culture and the intriguing history of the Jaintia tribal kingdom.",
    images: [Mono1,Mono2,Mono3,Mono4],
    src: "(src: tripxl.com)"
  },
  {
    name: "Megalithic Bridge on the Um-Nyankanah",
    description:
      "The Megalithic Bridge at Thlumuwi is a remarkable 18th-century structure located in the West Jaintia Hills of Meghalaya, India. Spanning across the Um-Nyakanah (or Um-Nyankanah) River, this ancient engineering marvel was constructed using massive, single-stone slabs supported by tall, sturdy stone pillars. According to local history, it was built by Mar Phalangki and U Luh Lyngskor Lamare under the directive of a Jaintia King to facilitate travel after the capital was shifted from Sutnga to Nartiang.The bridge exemplifies the region's rich megalithic culture, where stone was not just a building material but a medium of historical record and utility. Designed to withstand the heavy monsoon rains of the Khasi-Jaintia Hills, the bridge remains a Monuments of National Importance under the protection of the Archaeological Survey of India. Its primitive yet effective design highlights the sophisticated architectural knowledge of the Jaintia people long before modern construction techniques.",
    images: [Megalithic1,Megalithic2],
    source: "(src: tusktravel.com)",
  },
  {
    name: "Megalithic Bridge on the Um-Kumbeh",
    description:
      "Built using colossal stone slabs, this megalithic bridge across Um-Kumbeh River is said to be constructed by Mar Phalangki and U Luh Lyngskor Lamare as per the local tradition. It was supposedly built by order of the Jaintia king when he shifted his capital to Nartiang in order to carry out trade between the new capital and his old capital of Sutnga. The stones used are dated to be from the 18th century CE.",
    images: [Bridge],
    source: "(src: asiguwhaticircle.gov.in)",
  },
  {
    name: "Caves of Meghalaya",
    description:
      "The Caves of Meghalaya comprise a large number of caves in the Jaintia, Khasi Hills, and Garo Hills districts in the Indian state of Meghalaya, and are amongst the longest caves in the world. Of the ten longest and deepest caves in India, the first nine are in Meghalaya, while the tenth is in Mizoram. The longest is Krem Liat Prah in the Jaintia Hills, which is 30,957 m (101,600 ft) long. The word 'Krem' means cave in the local Khasi language. The exploration of the Caves of Meghalaya is currently undertaken for both scientific and recreational pursuits,) and there are still many unexplored and partially explored caves in the state. The annual caving expeditions organized by Meghalaya Adventurers Association (MAA) are known as the 'Caving in the Abode of the Clouds Project'. Because they are located primarily in limestone formations, the caves continue to come under threat from the limestone mining industry.",
    images: [Caves1,Caves2],
    source: "(src:Wikipedia.com)",
  },
  {
    name: "Syndai Caves",
    description:
      "The Syndai Caves, located in the West Jaintia Hills of Meghalaya near the Bangladesh border, are a captivating blend of geological splendor and tribal history. Carved over millennia within the region's limestone terrain, these caverns are renowned for their stunning interior chambers filled with intricate stalactites and stalagmites. Beyond their natural beauty, the caves hold significant historical weight; they served as strategic hideouts and shelters for Jaintia warriors during ancient tribal wars and resistance against colonial forces.One of the most distinctive features is the entrance, which is framed by ancient stone carvings believed to date back to the reign of the Jaintia Kings. Inside, the cave system stretches for approximately 970 meters, featuring a labyrinth of narrow tunnels that open into vast, cathedral-like halls. Some formations within have even gained religious importance, with natural limestone shapes being worshipped as Shiva Lingams. Tucked away near Syndai village, the caves offer a rugged, authentic exploration experience for those looking to uncover the underground secrets of Meghalaya.",
    images: [Syndai1,Syndai2],
    source: "(src: gosahin.com)",
  },
  {
    name: "Nongriat Living Root Bridge",
    description:
      "The Double Decker Living Root Bridge in Nongriat, Meghalaya, is a masterpiece of ancient bioengineering, uniquely characterized by its two functional levels of intertwined tree roots. Crafted by the indigenous Khasi people, these bridges are grown rather than built, using the aerial roots of the Ficus elastica (rubber tree). Over several decades, roots are painstakingly guided across the Umshiang River until they take hold on the opposite bank, creating a structure that actually grows stronger as it ages.The bridge is renowned for its incredible durability, capable of supporting dozens of people and withstanding the intense monsoons of one of the wettest places on earth. Surrounded by vibrant subtropical rainforests and turquoise natural pools, it represents a perfect harmony between human utility and nature. Reaching this site requires a challenging trek of roughly 3,500 stone steps from Tyrna village, making it a symbol of both endurance and the sustainable ingenuity of Meghalaya’s mountain communities.",
    images: [Root1,Root2,Root3],
    source: "(src: gosomewhere.in,lostwithpurpose.com,cntraveller.in)",
  },
  {
    name: "Kiang Nongbah Monument (Jowai)",
    description:
      "The Kiang Nangbah Monument in Jowai, Meghalaya, stands as a profound tribute to U Kiang Nangbah, a legendary Jaintia freedom fighter who led an armed rebellion against British colonial expansion in the 19th century. Located in the picturesque West Jaintia Hills district, the monument is situated on the banks of the Myntdu River in a serene area known as Syntu Ksiar.The structure itself is an elegant, hollow tower-like monument designed with traditional Jaintia architectural aesthetics. It serves as a symbolic reminder of Nangbah’s courage and his ultimate sacrifice; he was hanged by the British on December 30, 1862. According to local lore, his last words prophesied that if his head turned toward the east when he died, his country would eventually regain its freedom. Today, the memorial is a major historical landmark, drawing visitors who wish to honor the martyr’s legacy amidst the tranquil natural beauty of the Jaintia Hills.",
    images: [Kiang1,Kiang2,Kiang3,Kiang4],
    source: "(src:team-bhp.com,facebook.com,seawatersports.com,solitarytraveller.com)",
  },
  {
    name: "U Tirot Sing Memorial (Mairang)",
    description:
      "The U Tirot Sing Memorial serves as a profound tribute to one of India’s most valiant freedom fighters, U Tirot Sing Syiem, a Khasi chief who led a fierce resistance against British colonial expansion in the early 19th century. While his legacy is deeply rooted in the soil of Meghalaya, his memorial presence has expanded significantly in recent years, symbolizing a bridge of shared history between India and Bangladesh. A major landmark is the memorial located at the Indira Gandhi Cultural Centre (IGCC) in Dhaka, inaugurated in February 2024. This site features a prominent bust of the 'Hero of the Khasi Hills,' commemorating the location where he breathed his last in 1835 after years of imprisonment.Back in his homeland, the Madan Mot Tirot in Mairang, Meghalaya, stands as a central site of pilgrimage and pride. Its foundation stone was laid in 1952, and it continues to host annual floral tributes and state ceremonies every July 17th to mark his death anniversary. Newer additions to his honors include a 25-foot tall statue unveiled in Laitarted in 2025, emphasizing his enduring stature in the collective memory of the Northeast. These monuments do more than just mark a spot; they celebrate Tirot Sing’s refusal to submit to foreign rule, ensuring that his sacrifice for tribal sovereignty and national dignity inspires future generations.",
    images: [Memorial],
    source: "(src:highlandpost.com)",
  },
  {
    name: "Pa Togan Sangma Memorial",
    description:
      "Pa Togan Nengminza Sangma stands as one of the most revered figures in the history of Northeast India, embodying the fierce spirit of resistance against colonial subjugation. A legendary military leader of the Garo (A·chik) people, he is primarily remembered for his valiant role in the Battle of Matcha Rongkrek in 1872. During this period, the British Empire sought to expand its administrative grip over the Garo Hills, met by the staunch defiance of tribal leaders who viewed the foreign intrusion as a direct threat to their sovereignty, customary laws, and ancestral lands. Pa Togan, characterized by his imposing physical stature and tactical brilliance, rose to the occasion, organizing local warriors to defend their territory with traditional weaponry against an adversary equipped with superior modern firearms.The defining moment of his legacy occurred in the early hours of December 12, 1872. While the British troops were encamped at Chisobibra, near the banks of the Simsang River, Pa Togan led a daring surprise attack. Legend tells of his incredible bravery and the psychological warfare he employed; it is said that he and his men used large wooden shields (Danil) to deflect the initial volleys of British fire, believing they could withstand the bullets. Despite the sheer disparity in technology, the Garo warriors fought with unmatched ferocity. However, the advanced weaponry of the British eventually took its toll. Pa Togan Sangma fell on the battlefield that day, attaining martyrdom alongside many of his brave companions. His sacrifice marked a pivotal chapter in the resistance movement, signaling that the Garo people would rather perish than live under the yoke of foreign rule.Today, the Pa Togan Sangma Memorial at Chisobibra serves as a solemn site of pilgrimage and pride for the people of Meghalaya. A towering statue commemorates his heroism, overlooking the lands he fought to protect. The Government of Meghalaya observes December 12th as a state-wide tribute to his memory, ensuring that his story is passed down through generations. Beyond his military exploits, Pa Togan is celebrated as a symbol of cultural identity and land rights, reminding the world of the indigenous struggle for self-governance. His life remains a testament to the fact that the spirit of freedom cannot be extinguished by force, making him an eternal icon of the Indian freedom struggle in the Northeast.",
    images: [Sangma1,Sangma2],
    source: "(src:syllad.com,hubnetwork.in)",
  },
  {
    name: "Nartiang Durga Temple",
    description:
      "The Nartiang Durga Temple, located in the West Jaintia Hills of Meghalaya, is a 600-year-old structure revered as one of the 51 Shakta Pithas. It is believed to be the site where Goddess Sati’s left thigh fell, earning her the local name Jainteshwari. Historically, the temple served as a spiritual hub for the Jaintia Kings, particularly after King Jaso Manik embraced Shaktism under the influence of his wife, Lakshmi Narayana.What makes this temple truly distinct is its fusion of Hinduism and Khasi-Jaintia traditions. In accordance with local customs that avoid figurine images, Goddess Durga is represented by a banana trunk adorned with marigolds. During the annual Durga Puja, the most significant festival here, the rituals culminate in the ceremonial immersion of this plant in the Myntdu River. Nearby, an ancient Shiva temple houses historic cannons, further highlighting the site's royal heritage. Today, the temple remains a vital pilgrimage site, managed by the Central Puja Committee and recognized for its cultural and historical significance.",
    images: [Temple1,Temple2],
    source: "(src: Wikipedia,alightindia.com)",
  },
  {
    name: "Thadlaskein Lake",
    description:
      "Thadlaskein Lake, also known as Pung Sajar Nangli, is a significant man-made historical landmark situated in the West Jaintia Hills of Meghalaya, India. Located conveniently along National Highway 6 near the village of Mukhla, the lake serves as a serene retreat for travelers and locals alike. Its origin is steeped in fascinating local folklore, attributed to a medieval chieftain named Sajar Nangli. Legend tells that Nangli and his loyal followers dug the lake using the ends of their bows to commemorate their departure from the Kingdom of Jaintiapur, creating a lasting legacy in the landscape. Today, the lake is a popular picnic spot characterized by its calm, emerald waters and the surrounding lush greenery of pine groves. It is revered by the local community as a sacred site, embodying the rich cultural heritage and oral traditions of the Jaintia people while providing a peaceful natural escape.",
    images: [Lake1,Lake2],
    source: "(src: Wikipedia,trawell.com)",
  },
  {
    name: "All Saints' Cathedral (Shillong)",
    description:
      "All Saints' Cathedral stands as a serene testament to colonial-era architecture and spiritual heritage in the heart of Meghalaya. Located near Barik Point and opposite the State Central Library, it is widely recognized as the oldest church in Shillong. The original structure, dating back to the British Raj, was unfortunately destroyed during the devastating earthquake of 1897. However, it was meticulously rebuilt in 1902, adopting a distinct wooden-framed style specifically designed to withstand the seismic activity of the region.The cathedral's aesthetic is characterized by its elegant timber-heavy design and classic colonial finesse, featuring beautiful stained-glass windows that filter soft light into its tranquil interior. Surrounded by towering pine trees and well-manicured gardens, the church offers a peaceful escape from the bustling atmosphere of the nearby Police Bazaar. As a prominent Anglican place of worship under the Church of North India, it remains a vital center for the local community, especially during its vibrant Sunday masses. Its historical significance and picturesque charm make it a must-visit landmark for those exploring the cultural landscape of Northeast India.",
    images: [Cathedral1,Cathedral2,Cathedral3],
    source: "(src: incredibleindia.gov.in,kiomoi.com,makemytip.com)",
  },
  {
    name: "Don Bosco Museum (Shillong)",
    description:
      "The Don Bosco Centre for Indigenous Cultures in Shillong, Meghalaya, stands as a premier architectural and cultural landmark dedicated to the preservation of North East India's rich heritage. Often referred to as the Don Bosco Museum, this seven-story hexagonal structure features seventeen specialized galleries that provide an immersive journey through the diverse traditions, languages, and lifestyles of the region’s indigenous tribes. Visitors can explore a vast collection of artifacts, including traditional attire, weaponry, musical instruments, and rare photographs, all meticulously curated to highlight the unique identity of the 'Seven Sister States' and neighboring regions. Beyond its ethnographic displays, the museum serves as a vibrant research hub through the North Eastern Institute for Research in Anthropology. One of its most captivating features is the Skywalk at the summit, offering a breathtaking panoramic view of Shillong’s verdant landscape. Open Monday through Saturday, the museum is widely regarded as a 'mirror of the North East,'bridging the gap between ancient tribal history and modern scholarship, making it an essential destination for students, historians, and tourists seeking to understand India’s cultural mosaic.",
    images: [Don1,Don2,Don3],
    source: "(src: dbcic.com,alamy.com,hoidify.com)",
  },
  {
    name:"Ward’s Lake (Shillong)",
    description:  "Ward's Lake, an iconic landmark nestled in the heart of Shillong, Meghalaya, is a mesmerizing artificial water body that serves as a tranquil escape for locals and tourists alike. Locally known as Nan Polok or Pollock Lake, it was established in 1894 by Sir William Ward and designed by Fitzwilliam Thomas Pollok. The lake is uniquely horse-shoe-shaped and is famously centered around a charming, white-painted wooden bridge that offers panoramic views of the shimmering water and the lush greenery surrounding it. A meticulously maintained botanical garden encircles the lake, featuring a vibrant collection of orchids and diverse floral species, all accessible via winding cobblestone footpaths. Visitors can enjoy leisurely boating on the calm waters, watch the graceful swans and ducks, or relax at the lakeside cafeteria. Often praised for its serene atmosphere, the site is especially breathtaking during the autumn months when cherry blossoms paint the landscape in soft pink hues. Whether for a peaceful morning walk or a romantic evening stroll, the lake remains a quintessential part of the Shillong experience.",
    images:[Ward1, Ward2, Ward3],
    src: "(src: Wikipedia,kajaawa.com,trawell.com)",
  },  
];

const facts = [ 
"A Matrilineal Society: Unlike most of India, the dominant tribes (Khasi, Garo, and Jaintia) follow a matrilineal system. Lineage and inheritance are traced through women, and the youngest daughter typically inherits the family wealth and cares for the parents.",
"Living Root Bridges: Meghalaya is world-famous for its 'Living Root Bridges.' These are handmade from the aerial roots of Ficus elastica trees by the Khasi and Jaintia people. They can take decades to 'grow'but last for centuries.",
"Cleanest Village in Asia: Mawlynnong, a small village in the East Khasi Hills, was awarded the title of the cleanest village in Asia. It is a model for community-based eco-tourism and sanitation.",
"The Scotland of the East: During British rule, the capital city Shillong was nicknamed the 'Scotland of the East' because the rolling hills reminded European settlers of the Scottish Highlands.",
"India’s Highest Plunge Waterfall: Nohkalikai Falls, located near Cherrapunji, is the tallest plunge waterfall in India, dropping from a height of approximately 340 meters (1,115 feet).",
"The Cave Capital: Meghalaya has over 1,500 caves, including the longest (Krem Liat Prah) and the deepest in the Indian subcontinent. Many of these are still being explored by international cavers.",
"Whistling Village: In the village of Kongthong, mothers compose a unique tune (a 'musical name') for each child. This tradition is known as Jingrwai Iawbei, and villagers communicate across hills using these whistles.", 
"Giant Monoliths: The town of Nartiang houses a collection of ancient monoliths (giant upright stones) erected by Jaintia kings centuries ago to mark their victories and important events.", 
"Crystal Clear Rivers: The Umngot River in Dawki is so clear during the winter months that boats floating on it often look like they are hovering in mid-air." ,
"The 'Meghalayan Age': Geologists recently named a specific stage in Earth's history the 'Meghalayan Age' (starting 4,200 years ago) based on stalagmite samples found in Mawmluh Cave.",
"Asia's Largest River Island (Shared History): While Majuli is in Assam, the Garo hills share deep historical and ecological ties with the Brahmaputra basin, contributing significantly to the region's riverine culture.",
"High Literacy Rates: Meghalaya has a consistently high literacy rate (around 75%), with a significant focus on English-medium education, making its workforce highly skilled in service sectors." ,
"Organic Powerhouse: The state is a major producer of Lakadong Turmeric, which is world-renowned for having the highest curcumin content, making it a valuable export for India’s spice market.",
"Mineral Resources: Meghalaya is rich in limestone and coal. It supplies a massive portion of the limestone used by cement industries across Eastern and North-Eastern India." ,
"Power Generation: With its numerous rivers and high rainfall, the state has immense hydroelectric potential, contributing to the power grid of the North-Eastern region.",
"Agricultural Quality: Meghalaya contributes high-value organic produce like Lakadong turmeric, ginger, and pineapples to India’s agricultural exports",
"Laitlum Canyons: Often called the 'End of the Hills,' offering breathtaking views of deep gorges and valleys." ,
"Umiam Lake: A massive, picturesque man-made reservoir often compared to the lakes of Switzerland." ,
"Elephant Falls: A three-step waterfall in Shillong that is easily accessible and stunning.",
"Krang Suri Falls: Known for its magical turquoise blue water, located in the Jaintia Hills." ,
];

const artGallery = [
  {
    title: "Lakadong Turmeric",
    emoji: "🌿",
    color: "#F4C430",
    desc: "GI-tagged turmeric from Jaintia Hills — highest curcumin content in the world",
    image: gLakadongTurmeric,
  },
  {
    title: "Larnai Pottery",
    emoji: "🏺",
    color: "#3A2A1A",
    desc: "GI-tagged black clay pottery from Larnai, made with serpentine stone — ancient craft",
    image: gLarnaiPottery,
  },
  {
    title: "Garo Dakmanda (Textile)",
    emoji: "🥻",
    color: "#C84848",
    desc: "GI-tagged Garo wraparound skirt woven from long-staple khidig cotton",
    image: gDakmanda,
  },
  {
    title: "Chubitchi (Rice Beer)",
    emoji: "🍺",
    color: "#F4F0C8",
    desc: "GI-tagged traditional Garo home-brewed rice beer — integral to festivals & rituals",
    image: gChubitchi,
  },
  {
    title: "Jadoh",
    emoji: "🍛",
    color: "#D4884A",
    desc: "Iconic Khasi one-pot rice cooked with pork blood and spices — festive staple",
    image: gJadoh,
  },
  {
    title: "Dohneiiong",
    emoji: "🍖",
    color: "#4A2A18",
    desc: "Khasi pork curry cooked with black sesame — a signature Meghalayan dish",
    image: gDohneiiong,
  },
  {
    title: "Tungrymbai",
    emoji: "🫘",
    color: "#8A6A40",
    desc: "Fermented soybean paste — a pungent winter staple of the Khasi people",
    image: gTungrymbai,
  },
  {
    title: "Pumaloi",
    emoji: "🍚",
    color: "#F4ECD8",
    desc: "Powdered rice steamed in earthen pot (Khiew Ranei) — traditional Khasi dish",
    image: gPumaloi,
  },
  {
    title: "Nakham Bitchi",
    emoji: "🐟",
    color: "#B8A870",
    desc: "Dried fish chutney — a pungent condiment beloved across Meghalayan tribes",
    image: gNakhamBitchi,
  },
  {
    title: "Nongkrem Dance",
    emoji: "💃",
    color: "#D4A8E8",
    desc: "Sacred Khasi dance festival — women in silver crowns & silk robes give thanks to God",
    image: gNongkrem,
  },
  {
    title: "Bamboo & Cane Crafts",
    emoji: "🧺",
    color: "#A8C870",
    desc: "Intricate baskets, hats, mats & furniture — prime craft of all three Meghalayan tribes",
    image: gBambooCane,
  },
  {
    title: "Khasi Umbrella",
    emoji: "☂️",
    color: "#E8D8A8",
    desc: "Traditional bamboo & cane Khasi umbrella — iconic handcrafted utility item",
    image: gKhasiUmbrella,
  },
  {
    title: "Eri Silk",
    emoji: "🧵",
    color: "#F4E8D4",
    desc: "Peace silk from Meghalaya — woven without harming the silkworm, an Eri weaving tradition",
    image: gEriSilk,
  },
  {
    title: "Wild Forest Honey",
    emoji: "🍯",
    color: "#D4880A",
    desc: "Raw honey harvested from Meghalaya's dense forests — prized for purity and richness",
    image: gForestHoney,
  },
  {
    title: "Shillong Café Culture",
    emoji: "☕",
    color: "#C8A888",
    desc: "Shillong's vibrant café & rock music scene — the 'Scotland of the East' blend of British & tribal culture",
    image: gShillongCafe,
  },
  {
    title: "Ka Shad Mastieh (Betel Nut)",
    emoji: "🌰",
    color: "#A85A38",
    desc: "Betel nut offering — an important social & ceremonial gesture in Khasi and Jaintia culture",
    image: gBetelNut,
  },
  {
    title: "Meghalaya Black Rice",
    emoji: "🍚",
    color: "#3A2850",
    desc: "Nutritious heirloom black rice grown in Meghalaya's hills — rich in antioxidants",
    image: gBlackRice,
  },
];