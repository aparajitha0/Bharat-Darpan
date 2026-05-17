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
import chattisgarhMap from "@assets/chattisgarhMap.jpg";
const bastar1 = "https://i.postimg.cc/bvFsBcCF/image.png";
const bastar2 = "https://i.postimg.cc/Qt1hkR2r/image.png";
const bastar3 = "https://i.postimg.cc/7hN4jSPn/image.png";
const madai1 = "https://i.postimg.cc/jS1TVxTX/image.png";
const madai2 = "https://i.postimg.cc/KzSyz0Rr/image.png";
const madai3 = "https://i.postimg.cc/gj49gd4L/image.png";
const hareli1 = "https://i.postimg.cc/J0pgbx4p/image.png";
const hareli2 = "https://i.postimg.cc/Gpv5Mdmx/image.png";
const rajim1 = "https://i.postimg.cc/BQt7rxvq/image.png";
const rajim2 = "https://i.postimg.cc/cCcKTKVP/image.png";
const rajim3 = "https://i.postimg.cc/50d6VqJh/image.png";
const teej1 = "https://i.postimg.cc/bwZJSFwh/image.png";
const teej2 = "https://i.postimg.cc/zvPNJ8Wh/image.png";
const pola1 = "https://i.postimg.cc/yNXzDF9j/image.png";
const pola2 = "https://i.postimg.cc/PJ7ggKsX/image.png";
const pola3 = "https://i.postimg.cc/gkXFV98H/image.png";
const cherchera1 = "https://i.postimg.cc/8P28wybD/image.png";
const cherchera2 = "https://i.postimg.cc/Vknxhj7b/image.png";
const goncha1 = "https://i.postimg.cc/q7G9JpV1/image.png";
const goncha2 = "https://i.postimg.cc/gJSQh40g/image.png";
const goncha3 = "https://i.postimg.cc/cCPz9Hwt/image.png";
const chakradhar1 = "https://i.postimg.cc/BZzRQhkL/image.png";
const bhootni1 = "https://i.postimg.cc/t43ck9Tq/image.png";
const bhootni2 = "https://i.postimg.cc/LXX0mfVB/image.png";
const mahasamund1 = "https://i.postimg.cc/VkF86qX2/image.png";
const mahasamund2 = "https://i.postimg.cc/LXJKNGwD/image.png";
const mahasamund3 = "https://i.postimg.cc/3NpMHmKc/image.png";
const bhoramdeo1 = "https://i.postimg.cc/qMsfbsD6/image.png";
const bhoramdeo2 = "https://i.postimg.cc/rwjBc8kT/image.png";
const bhoramdeo3 = "https://i.postimg.cc/yNr2gvxL/image.png";
const tala1 = "https://i.postimg.cc/7Pzjh1kj/image.png";
const tala2 = "https://i.postimg.cc/KvrVrZ4F/image.png";
const tala3 = "https://i.postimg.cc/0yk4VLJm/image.png";
const danteshwari1 = "https://i.postimg.cc/Z5wM2Vrg/image.png";
const danteshwari2 = "https://i.postimg.cc/VN5V8ngv/image.png";
const danteshwari3 = "https://i.postimg.cc/6qVH0065/image.png";
const ratanpur1 = "https://i.postimg.cc/pdgqM7pH/image.png";
const ratanpur2 = "https://i.postimg.cc/wT02j37X/image.png";
const ratanpur3 = "https://i.postimg.cc/2StxnJdV/image.png";
const kutumsar1 = "https://i.postimg.cc/PxszRwRh/image.png";
const kutumsar2 = "https://i.postimg.cc/kG7Nnd97/image.png";
const kutumsar3 = "https://i.postimg.cc/qBGX1gX4/image.png";
const gariaband1 = "https://i.postimg.cc/L6CkM7bc/image.png";
const gariaband2 = "https://i.postimg.cc/d0dGr0tb/image.png";
const kondagaon1 = "https://i.postimg.cc/fyWdGjjL/image.png";
const kondagaon2 = "https://i.postimg.cc/jqvPzmKG/image.png";
const surguja1 = "https://i.postimg.cc/MKTRt5p5/image.png";
const surguja2 = "https://i.postimg.cc/254B3X0f/image.png";
const kanger1 = "https://i.postimg.cc/Hnjx0S4q/image.png";
const kanger2 = "https://i.postimg.cc/q7LMPfmg/image.png";
const kanger3 = "https://i.postimg.cc/L5q9gJmV/image.png";
const gRaipur = "https://i.postimg.cc/nhKHmbf2/image.png";
const gJagdalpur = "https://i.postimg.cc/Bn3jkCqC/image.png";
const gChitrakoot = "https://i.postimg.cc/BbDvwjkR/image.png";
const gChilla = "https://i.postimg.cc/wTXvXsh1/image.png";
const gFara = "https://i.postimg.cc/vZXZjF2s/image.png";
const gPanthi = "https://i.postimg.cc/nr8F7Hr0/image.png";
const gThali = "https://i.postimg.cc/rsLTsQYk/image.png";
const gRaut = "https://i.postimg.cc/c4S1L4V8/image.png";
const gAngakar = "https://i.postimg.cc/rwYLx8Yt/image.png";
const gMuthia = "https://i.postimg.cc/YqrcP45F/image.png";
const gDubki = "https://i.postimg.cc/1zNbFDqv/image.png";

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
export default function ChhattisgarhPage() {
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
                Chhattisgarh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Tribal Heart of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Raipur" },
                  { label: "Population", value: "2.56 Crore" },
                  { label: "Area", value: "1,35,192 sq km" },
                  { label: "Founded", value: "1 November 2000" },
                  { label: "Language", value: "Hindi, Chattisgarhi" },
                  { label: "Districts", value: "33 Districts" },
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
              Raipur
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Chattisgarh — Rice Bowl of India
            </p>
          </div>
        </Section>

        {/* Map of Chhattisgarh — click to enlarge */}
        <Section title="Map of Chhattisgarh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(chattisgarhMap, "Map of Chhattisgarh")}
            >
              <img
                src={chattisgarhMap}
                alt="Map of Chhattisgarh"
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
              Chhattisgarh, known as the "Rice Bowl of India," was carved out of Madhya Pradesh on November 1, 2000, becoming the 26th state of the Union. In ancient times, this lush region was known as Dakshin-Kausal and is significantly mentioned in the Ramayana and Mahabharata. Hindi is the principal language, while Chhattisgarhi is widely spoken by the local population across its vibrant districts.
            </p>
            <p className="text-foreground">
              The region has been a stronghold for various dynasties, including the Kalchuris, who ruled for over eight centuries until 1791 AD. Chhattisgarh acts as a central geographical link, bordered by seven states and sitting in the heart of the Indian subcontinent. From the ancient red-brick temples of Sirpur to the modern industrial hubs like Bhilai, the state is a unique mix of tribal heritage and rapid growth. The landscape is defined by the Mahanadi River, the dense forests of Bastar, and the rugged hill plateaus of the Maikal range. Whether it is the spiritual aura of Rajim or the raw power of Chitrakote Falls, every corner tells a story of tribal pride and natural wonder.
            </p>
            <p className="text-foreground">
              Chhattisgarh is far more than just a historical footnote; it is a living archaeological museum where the past and future overlap in ways that are scientifically fascinating. While its links to the Ramayana are well-known, the state’s documented history actually begins much earlier, with Mauryan and Nanda period coins found in the Surguja and Bilaspur districts, proving its role in ancient Indian trade networks long before the medieval era. The region is home to the Sitabenga Caves, which house one of the world's oldest amphitheaters—a 3rd-century BCE rock-cut theater that predates most European counterparts. Historically, the land was a mosaic of powerful, lesser-known dynasties like the Sharabhpuriyas, the Nalas, and the Panduvanshis, who transformed the capital of Sirpur into a global center for religious pluralism; recent excavations there have uncovered an entire 6th-century market, an advanced underground drainage system, and massive Buddhist Viharas that once hosted scholars from across Asia. 
            </p>
            <p className="text-foreground">
              Beyond the brick temples, the state’s geography hides prehistoric secrets, such as the rock paintings of Raigarh and the Jogimara Caves, which contain the oldest known paintings in India and inscriptions that read like ancient love letters. Geologically, Chhattisgarh is a marvel, featuring the Kutumsar Caves where evolution has produced unique species of blind, albino fish that exist nowhere else on Earth. Even its name has a deeper academic debate—while many believe it refers to 36 forts (Chhattis Garh), some historians argue it is a corruption of "Chedisgarh," representing the ancient Chedi Empire of the Puranas.
            </p>
            <p className="text-foreground">
              Today, this legacy of innovation continues with Nava Raipur, India’s first greenfield integrated "Smart City," and the "Millet Mission," which uses modern data science to revive ancient, climate-resilient grains. From the 75-day Bastar Dusshera—the longest festival in the world—to the Dhokra metal art that has remained unchanged for 4,000 years, Chhattisgarh remains a state where ancient tribal pride fuels a very modern rapid growth. 
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Chattisgarh, mapsofindia.com)
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
        <Section title="Facts about Chattisgarh" icon="💡">
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
            Scroll horizontally to explore Chattisgarh's iconic foods, crafts,
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
    name: "Bastar Dussehra (Jagdalpur)",
    tagline: "Recognized as the longest festival in the world, spanning 75 days, it pays homage to the local deity Goddess Danteshwari Devi",
    description:
      "Unlike other parts of India, it does not celebrate the victory of Rama over Ravana but focuses on tribal rituals and massive chariot pulling.The 75-day long celebration of Bastar Dussehra is a profound manifestation of tribal autonomy and spiritual heritage, dating back to the 13th-century reign of King Purushottam Dev. While the rest of India burns effigies of Ravana, the people of Bastar gather to honor the divine sovereignty of Goddess Danteshwari, the family deity of the Kakatiya dynasty. The festival is characterized by complex, age-old rituals such as Pata Jatra (the worship of wood) and Deri Gadhai (installation of the pillars), which involve various tribal groups assigned specific hereditary roles. The most iconic spectacle is the massive, double-decker wooden chariot, handcrafted by local artisans using traditional tools without a single iron nail. Thousands of tribal devotees from the deepest reaches of the forest pull this heavy structure through the streets of Jagdalpur in a display of collective strength and faith. Another unique element is the Muria Durbar, a traditional town hall meeting where the local administration listens to the grievances of tribal village heads. The festival concludes with the emotional Ohadi ceremony, where the deities are bid a grand farewell. It is less of a religious holiday and more of a massive socio-political gathering that reinforces the bond between the former royalty, the gods, and the tribal subjects.",
    images: [bastar1, bastar2, bastar3],
    source: "(src: Jagdalpur district, Adobe stock, Bastar Dussehra Archive)",
  },
  {
    name: "Madai Festival (Gond Tribes)",
    tagline:
      "An important harvest festival celebrated by the Gond and other tribal communities to thank the gods for a prosperous crop season",
    description:
      "It features elaborate rituals, traditional dances like Karma and Saila, and vibrant fairs where tribes from different regions bond. The Madai Festival is a traveling carnival of culture that moves from one village to another across the Bastar and Kanker regions, peaking between December and March. Central to the festivities is the worship of the local deity, Anga Deo, who is carried on a palanquin decorated with peacock feathers and bells. The festival serves as a vital social bridge, allowing Gond tribes from remote hills to converge, trade goods, and arrange marriages through traditional negotiations. The atmosphere is electric with the rhythmic beats of the Mandhar (drum) as dancers perform the Karma and Saila, their movements mimicking the swaying of trees and the flow of water. Beyond the spiritual thanks given for the harvest, Madai is a marketplace of tribal craftsmanship, featuring bell-metal art, terracotta, and intricate bamboo work. Food plays a significant role, with stalls serving local delicacies like Mahua liquor and snacks made from forest produce. The arrival of the 'Shaman' or local priest is a highlight, as they enter a trance-like state to bless the community and predict the coming year’s fortunes. It remains a vibrant testament to the Gond people's resilience and their deep-seated connection to the natural world.",
    images: [madai1, madai2, madai3],
    source: "(src: wikimedia)",
  },
  {
    name: "Hareli Festival",
    tagline:
      "Marks the beginning of the agricultural season",
    description:
      "Farmers worship their tools and cattle to seek a bountiful harvest. The celebration is deeply rooted in agrarian culture, with people pinning neem branches to their doors to ward off diseases. As the first festival of the lunar calendar in Chhattisgarh, Hareli (derived from 'Haryali' or greenery) marks the transformation of the landscape into a lush green carpet during the Shravan month. This is essentially a 'Thanksgiving for Tools', where farmers stop all field work to wash, decorate, and worship their plows, shovels, and hoes with rice paste and flowers. The festival emphasizes the sacredness of the Earth, as no one is permitted to prick the soil on this day, giving the land a moment of rest. Cattle are also given special treatment; they are fed Londi (medicinal balls made of wheat and salt) to ensure their health for the grueling farming season ahead. To ward off evil spirits and seasonal diseases, villagers place neem leaves at their doorsteps and draw charcoal crosses on their walls. For the youth, the day is filled with the excitement of Gedi—walking on tall bamboo stilts to navigate the muddy monsoon terrain, a tradition that has evolved into a competitive sport. Women prepare Muthiya and Cheela, traditional rice-based snacks, to share with neighbors and relatives. It is a festival that beautifully captures the simplicity of agrarian life and the profound respect Chhattisgarhi people have for the elements that sustain them.",
    images: [hareli1, hareli2],
    source: "(src: adobe stock, hareli celebration)",
  },
  {
    name: "Rajim Kumbh Mela (Rajim)",
    tagline:
      "Meaning 'Tamil New Year' — the first day of year on the Tamil calendar.",
    description:
      "Held at the 'Prayag of Chhattisgarh,' the confluence of the Mahanadi, Pairi, and Sondur rivers, it attracts thousands of devotees. The festival is a major spiritual gathering where pilgrims take holy dips and visit the ancient Rajiv Lochan temple nearby. Known as the 'Kumbh of the East,' this massive pilgrimage takes place at the Triveni Sangam, where the three holy rivers meet, creating a site of immense spiritual energy. The festival begins on Magh Purnima and lasts for fifteen days, drawing Naga Sadhus, saints, and devotees from across the country who live in sprawling tent cities along the riverbanks. The ritual of Shahi Snan (royal bath) is the focal point, as thousands plunge into the waters at dawn, believing the rivers possess the power to wash away lifetimes of karma. The skyline is dominated by the ancient Rajiv Lochan Temple, a masterpiece of Mahakoshal architecture dedicated to Lord Vishnu, which remains the spiritual anchor of the Mela. Evenings are transformed by the Ganga Aarti style ceremonies, where hundreds of oil lamps are floated down the river, creating a shimmering reflection of light. Cultural stages host folk singers performing Pandwani (tales from the Mahabharata) and Bharthari, keeping the state’s oral traditions alive for the younger generation. The Mela is not just a religious event but a massive cultural exchange that showcases the deep Vedantic and tribal roots of Central India. It serves as a reminder of Rajim's historical importance as a major center of civilization and trade since the 7th century.",
    images: [rajim1, rajim2, rajim3],
    source: "(src: wikipedia)",
  },
  {
    name: "Teej",
    tagline:
      "Dedicated to Goddess Parvati",
    description:
      "This festival sees women observing a strict day-long fast for the well-being and long life of their husbands. The state is filled with colorful processions, traditional songs, and cultural fairs, reflecting the strong social fabric of Chhattisgarh. Teeja, or Haritalika Teej, is a festival of immense emotional and social significance for the women of Chhattisgarh, characterized by the tradition of Beti-Aura (daughters returning to their parental homes). The celebration begins with Karhu Bhat, a final meal taken before a rigorous 24-hour fast where women abstain from even a drop of water (Nirjala). This fast is observed with the hope of mirroring the devotion of Goddess Parvati, who performed penance to win the heart of Lord Shiva. The streets come alive with women dressed in vibrant red and green sarees, their hands decorated with intricate henna designs, as they carry clay idols of Shiva and Parvati to the local ponds. Folk songs like Sua Nacha (the parrot dance) are performed, where women move in circles, clapping and singing about their joys, sorrows, and longing for their husbands. The parental home becomes a sanctuary of pampering, where brothers and fathers ensure the 'daughter of the house' is honored with gifts of new clothes and jewelry. The fast is broken only after a morning puja the following day, followed by a feast of Gulgula and Puri. It is a powerful display of sisterhood and the enduring strength of the familial bond in Chhattisgarhi culture.",
    images: [teej1, teej2],
    source: "(src: Wikipedia, Chattisgarh state tourism portal)",
  },
  {
    name: "Pola Festival",
    tagline: "Celebrated State-wide",
    description:
      "The Pola Festival is an agrarian celebration held primarily by farmers to express deep gratitude toward their bulls and oxen, which are the backbone of traditional farming. Celebrated on the new moon day of the Shravan month, the festival recognizes that without these animals, a successful harvest would be impossible. The day begins with farmers bathing and decorating their cattle with bells, flowers, and colorful ornaments. A unique tradition involves children playing with small, clay-made bullocks called Nandi Bail, which helps instill agricultural values from a young age. Interestingly, the bulls are given a day of rest from all field work and are fed a special meal of khichdi and grain. The atmosphere is filled with joy as villages organize bullock races and processions through the streets. Women prepare traditional delicacies like thethari and khurmi to mark the occasion. The festival serves as a beautiful reminder of the symbiotic relationship between humans and animals. It also marks the transition period when the crops begin to mature in the fields. Ultimately, Pola is a celebration of hard work, animal welfare, and the hope for a future filled with prosperity.",
    images: [pola1, pola2, pola3],
    source: "(src: Adobe Stock, Wikipedia)",
  },
  {
    name: "Cherchera Festival",
    tagline:
      "Honors Goddess Annapurna",
    description:
      "Celebrated on the full moon night of the Paush Hindu month, Cherchera is the 'Festival of Giving' that marks the joy of a successful paddy harvest. The name is derived from the chants of children who go door-to-door, shouting 'Cher-Chera, Koti ke dhaan la her hera', asking for donations of grain. This tradition promotes the spirit of charity and ensures that the bounty of the harvest is shared with every member of the community, regardless of status. Homeowners generously donate handfuls of newly harvested rice or vegetables to these visiting groups. It is a day where social barriers dissolve, and the entire village participates in a communal exchange of food and goodwill. The streets come alive with folk songs and spontaneous dances as people celebrate the filling of their granaries. Special traditional sweets made from rice flour and jaggery are prepared in every household. Beyond the fun, the festival has a deep spiritual root, as it is believed to honor the Goddess Annapurna, the deity of food. It reflects the core Chhattisgarhi value that wealth is only meaningful when it is shared with the needy. The day concludes with massive community feasts where the collected grains are often used to feed the entire village.",
    images: [cherchera1, cherchera2],
    source: "(src: Raipur municipal corporation)",
  },
  {
    name: "Goncha Festival",
    tagline: "Celebrated in Bastar region",
    description:
      "The Goncha Festival is a unique version of the Rath Yatra (Chariot Festival) celebrated with immense fervor by the tribal communities of Bastar. It coincides with the world-famous Puri Rath Yatra but features distinct local elements that make it a centerpiece of Jagdalpur’s culture. The central ritual involves the symbolic 'mock shooting' of the deities using a Goncha—a traditional bamboo pistol that fires small fruit pellets. This quirky and energetic tradition is meant to grab the attention of the gods and show the devotees' playful devotion. Three massive wooden chariots carrying Lord Jagannath, Balabhadra, and Subhadra are pulled through the streets by thousands of tribal participants. The air is thick with the sound of traditional drums and the sight of vibrant tribal attire. Legend says the festival was started by the Chalukya King Purushottam Dev after his pilgrimage to Jagannath Puri centuries ago. It serves as a powerful bridge between mainstream Hindu traditions and indigenous tribal customs. The festival lasts for several days, during which the town of Jagdalpur turns into a massive cultural fair. It is a time for social reunions, where tribes from remote forest areas come together to witness the grand procession.",
    images: [goncha1, goncha2, goncha3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Chakradhar Samaroh",
    tagline: "Celebrated in Raigarh district",
    description:
      "Chakradhar Samaroh is a prestigious ten-day performing arts festival held in Raigarh to honor the memory of Maharaja Chakradhar Singh. The Maharaja was a legendary patron of the arts and a scholar of Kathak dance and classical music, turning Raigarh into a cultural hub. During Ganesh Chaturthi, the city transforms into a stage for the finest classical dancers, musicians, and singers from across India. It is not just a local event but a national platform where legends and rising stars perform under the open sky. The festival features a mesmerizing blend of Kathak, Bharatnatyam, and Odissi dances alongside soulful Hindustani vocal and instrumental performances. It serves as a testament to Chhattisgarh’s rich history of supporting high art and intellectualism alongside its folk traditions. Local folk artists also get a chance to showcase their talent, ensuring that the 'Raigarh Gharana' of music remains vibrant. Thousands of art lovers flock to the city, creating an atmosphere of intense creative energy and refinement. The event concludes with a grand tribute to the Maharaja, whose compositions are still taught in music schools today. It is a sophisticated celebration that highlights the 'classical' side of the state’s diverse cultural identity.",
    images: [chakradhar1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Bhootni (Bhoojariya) Festival",
    tagline: "Celebrated State-wide",
    description:
      "The Bhoojariya festival is a poignant and visually stunning celebration of friendship and the cycle of life, usually occurring a day after Raksha Bandhan. A few days before the festival, women and girls sow wheat or golden-yellow grain seeds in small bamboo baskets filled with rich soil. These seedlings, known as Bhoojariya, are nurtured in the dark until they grow into delicate, pale-yellow shoots. On the day of the festival, women carry these baskets on their heads in a grand, singing procession toward a local river or pond. After performing rituals and offering prayers for the prosperity of their families, the seedlings are submerged in the water. Participants then exchange the vibrant yellow shoots with one another, tucking them behind the ears of friends and elders as a sign of eternal brotherhood and respect. This act of 'Bhoojariya Bhent' is a formal way of sealing friendships and forgiving past grievances. The festival beautifully captures the agrarian spirit, symbolizing the hope that just as these seeds sprouted, the upcoming crops will also flourish. It is a day defined by emotional reunions, traditional folk songs, and the strengthening of the social fabric. For the people of Chhattisgarh, it is a reminder that life, like the grain, is a gift to be nurtured and shared.",
    images: [bhootni1, bhootni2],
    source: "(src: Wikipedia)",
  },
];

const historicalPlaces = [
  {
    name: "Mahasamund (Sirpur Group of Monuments)",
    description:
      "Sirpur was the ancient capital of the Sharbhapuriya and Somavamshi kings and was a major center of Hindu, Buddhist, and Jain learning between the 5th and 12th centuries. The site is home to the famous Lakshmana Temple, one of the finest brick temples in India, built around 595-605 CE by Queen Vasata. Archaeological excavations have revealed over 100 temples and 100 monasteries, proving its status as a massive urban center visited by the pilgrim Hiuen Tsang. The city was once a significant bronze-working hub, producing exquisite sculptures that are now considered among the finest early medieval artworks in the country. Sirpur, also referred to as Shripur and Sripura (lit. 'city of auspiciousness, abundance, Lakshmi') in ancient Indian texts and inscriptions, is a village on the Mahanadi River 78 kilometres (48 mi) east of Raipur. Allahabad Pillar inscription dated 4th century CE mentions Sirpur as Sripura. In the second half of the 1st millennium CE, it was the capital city with major commercial and religious significance for the Dakshina Kosala kingdom. The earliest documented evidence states that it was first a capital of Sharabhapuriya dynasty, followed by Panduvamshi dynasty.] The Sharabhapuriya dynasty itself is dated to the late 5th century CE, but inscriptions mention its first capital to be Sharabhapura, as yet an unknown site. The abundant inscriptions of the mid-6th century CE in the region mention the Hindu Shaiva king Teevardeva and 8th-century king Shivagupta Balarjuna establishing temples and monasteries for Hindus, Buddhists and Jains in his kingdom. The Chinese pilgrim and traveller Huen T'sang mentions visiting Sirpur in 639 CE in his memoirs. He wrote that the king was a Kshatriya and benevolent to the Buddhists, the region was prosperous. According to his memoir, some 10,000 Mahayana Buddhist bhikshus (monks) lived here in some 100 monasteries, and there were over 100 temples.",
    images: [mahasamund1, mahasamund2, mahasamund3],
    source: "(src: Wikipedia, ASI)",
  },
  {
    name: "Kabirdham (Bhoramdeo Temple)",
    description:
      "Often called the 'Khajuraho of Chhattisgarh', this temple was built during the 11th century by the Phani Nagvanshi dynasty. The temple is dedicated to Lord Shiva and is renowned for its Nagara style of architecture, featuring intricate carvings of deities and erotic sculptures. It is situated amidst the scenic Maikal hills and reflected in a large pond, creating a tranquil atmosphere for visitors and pilgrims alike. The complex also includes the Madwa Mahal, a temple built like a marriage mandap to commemorate a royal union between different dynasties. The temple complex, rich in history and archeological details, is dated to the Kalachuri period (10th-12th centuries, one ruling over areas in Central India in east Madhya Pradesh, Rajasthan and were called Chedi or Haihaya (Heyheya) (northern branch)) with close identity with the sculptures found in nearby archeological sites such as Janjgir, Kalachuri, Narayanpur and Ratanpur sites. The brick temples were built during the rule of Pandus and are similar to those built in Kharod, Palari, Rajim and Sirpur in the state. The Temple was built by Laxman Dev Rai & Gopal Dev of Faninagvansh Dynasty.The temple complex, highlighted as a 'scintillating poetry in stone', is credited to Naga kings of Chakrakota who practiced tantrism and who ruled in the then Southern Koshal region, which is now the state of Chhattisgarh. Its construction is dated between the 7th and 12th centuries.[6] As the Gond Tribals of the area worshiped Lord Shiva whom they called Bhoramdeo, the temple was also named Bhoramdeo with the Shiva Linga in it.",
    images: [bhoramdeo1, bhoramdeo2, bhoramdeo3],
    source: "(src: Adobe Stock, Wikimedia Commons)",
  },
  {
    name: "Devrani-Jethani Temples, Tala (Bilaspur)",
    description:
      "Located on the banks of the Maniari River, these temples date back to the 5th or 6th century and are famous for their unique sculpture work. The site is most renowned for a unique statue of Rudra Shiva, which features various animal and human faces integrated into the deity's body parts. Discovered in 1873 by J.D. Beglar, the temples showcase the prosperity and high artistic standards of the early Panduvamshi rulers. The Devrani temple remains relatively intact, while the Jethani temple is in ruins, yet both display sophisticated stone carvings and structural pillars. Due to the lack of a foundation inscription or other epigraphical evidence regarding its construction, the dating of the temple complex is based upon the architectural style. Historian of Indian art Donald Stadtner dates both the temples to around the same time, approximately 525–550 CE. Others have dated both temples to the late 6th century, during the reign of the Sharabhapuriya dynasty. Indologist Hans Bakker argues that the Jethani temple was built at an earlier date than the Devrani temple, ascertained due to the fact that the Jethani temple has a somewhat unconventional and experimental structure and may have collapsed under its own weight. This view is also supported by the fact that the reliefs on the entrance of the Devrani temple are more refined. The temples were excavated in the 20th century by the Archaeological Survey of India. In the course of the excavations, the scattered fragments of the Jethani temple were studied, and some were placed in the Bilaspur museum. In 1988, the massive Rudra Shiva sculpture was unearthed from beneath the Devrani temple, which is now placed in situ.",
    images: [tala1, tala2, tala3],
    source: "(src: Wikimedia commons, ASI, Anuradha Goyal-Tala Bilaspur Exploration)",
  },
  {
    name: "Danteshwari Temple (Dantewada)",
    description:
      "Dating back to the 14th century, this temple is one of the 51 Shakti Peethas in India, where the 'Dant' (tooth) of Goddess Sati is believed to have fallen. It was constructed by the Kakatiya rulers of Bastar in a unique South Indian style combined with local tribal architecture. The temple is situated at the holy confluence of the Shankini and Dhankini rivers, which are famous for their distinctly different water colors. Every year, it serves as the spiritual epicenter for the Bastar Dussehra, where thousands of tribal devotees gather to honor the goddess. The Danteshwari temple was built in the 14th Century. The idol of Danteshwari Mai is chiseled out of black stone. The temple is divided into four parts such as Garbh Griha, Maha Mandap, Mukhya Mandap and Sabha Mandap. Garbha Griha and Maha Mandap were constructed with stone pieces. There is a Garuda Pillar in front of the entrance of the temple. The temple itself is located in a spacious courtyard surrounded by massive walls. The shikhara is adorned with sculptural finery.",
    images: [danteshwari1, danteshwari2, danteshwari3],
    source: "(src: Dantewada district administration, wikimedia commons, MP tourism)",
  },
  {
    name: "Ratanpur Fort & Mahamaya Temple (Bilaspur)",
    description:
      "Ratanpur was the ancient capital of the Kalchuri kings, and its fort stands as a symbol of their 800-year-long reign over the region. The Mahamaya Temple, built by King Ratnadeva I in 1050 AD, is a stunning example of the Nagara style, featuring a dual idol of Goddesses Saraswati and Lakshmi. The fort is known for its majestic 'Hathi Pol' (Elephant Gate) and numerous ancient stone carvings that depict the socio-religious life of the medieval era. The town is often called 'Chaturyugi Nagri' because it is believed to have existed throughout all four mythological eras of Hindu tradition. Built in the 12–13th century, the temple is dedicated to the Goddess Mahamaya.[1] It was built during the reign of Kalachuris of Ratnapura. It is said to be located at the spot where king Ratnadeva had a darshan of goddess Kali. Originally the temple was for three goddesses viz Maha Kali, Maha Lakshmi and Maha Saraswati. Later, Maha Kali left the old temple. Still later, a new (current) temple was built by king Bahar Sai which was for goddess Maha Lakshmi and goddess Maha Saraswati. This temple was built in vikram samvat 1552 (1492 CE). There are ponds near the temple. There are also temples of Shiva and Hanuman within the campus. Traditionally Mahamaya is the Kuldevi of Ratanpur state. The temple has been renovated by the architecture department. Mahamaya temple is situated at Ratanpur, 25 km from district headquarters Bilaspur, Chhattisgarh.",
    images: [ratanpur1, ratanpur2, ratanpur3],
    source: "(src: Bilaspur distrit administration, Official Ratanpur mahamaya temple portal, Wikimedia commons)",
  },
  {
    name: "Kutumsar Caves & Prehistoric Rock Art (Bastar)",
    description:
      "Kotumsar Cave is a limestone cave located near Jagdalpur in the Indian state of Chhattisgarh. It is situated on the Kanger limestone belt close to the bank of the Kanger River and lies within Kanger Valley National Park. The cave contains a main tunnel of approximately 200 metres with several lateral and downward passages. It is the longest cave present in Indian subcontinent. The cave is subject to seasonal flooding during the monsoon, typically from mid-June to mid-October or early November; the authorities close the cave to visitors during the high water period. Several permanent and seasonal pools occur within the cave system. Kotumsar Cave is located within the historic and legendary forest region of Dandakaranya, which holds significant cultural and mythological importance in Indian traditions and texts such as the Ramayana. The cave was recorded during the colonial (British) period, but more systematic exploration and scientific study began in the mid 20th century. In the 1950s, Dr. Shankar Tiwari conducted early exploratory visits and in the 1980s, Jayant Biswas (then a doctoral student) produced the first systematic map of the cave; this mapping was carried out with guidance from an experienced international caver and was later published in academic outlets.",
    images: [kutumsar1, kutumsar2, kutumsar3],
    source: "(src: Wikimedia commons, MP tourism, Jagadalpur district administration)",
  },
  {
    name: "Rajim Group of Monuments (Gariaband)",
    description:
      "Rajim is a town which is proposed to be in Raipur district but officially in Gariaband district, Chhattisgarh, India. Rajim is named after Rajiv Lochan Mandir which is the main Hindu pilgrimage temple of Rajim dedicated to Vishnu. There is also the ancient Kuleshwar Mahadev Mandir dedicated to Shiva at the Triveni Sangam. The town hosts the Triveni Sangam of Mahanadi, Pairi (physically) and Sondor (virtually). Being of such importance, Rajim is also called the Prayag of Chhattisgarh. It was also the centre of work of freedom fighter and social reformer Pt. Sundarlal Sharma. Rajim Kumbh is celebrated every year during mid-February to March spread over a span of 15 days. Rajim Kumbh attracts thousands of naga sadhus, saints, mahatmas, rishis, munis and Margdarshak gurus from across India and beyond. The Rajim Kumbh is arranged at the confluence of three rivers in Rajim also known as Triveni Sangam. Within the same festival, an event Rajim Lochan Mahotsav is held between 16 February and 1 March. The various music and dance performances conducted in the fair display the rich culture of Rajim.It is located at an elevation of 281 m above MSL. The temple pillars are famous for their exquisite carvings of 'Salabhanjikas' (tree goddesses) and various incarnations of Vishnu, representing some of the most refined stone craftsmanship in Central India. The holy confluence of three rivers Mahanadi (Chitrotpala), Pairi and Sondur, called Triveni Sangam is at Rajim. Rajim is also known as the 'Prayag of the Chhattisgarh'.",
    images: [gariaband1, gariaband2],
    source: "(src: Wikimedia commons, MP Tourism)",
  },
  {
    name: "Kondagaon, Garh Dhanora",
    description:
      "Garhdhanora is a small Village/hamlet in Keshkal Tehsil in Bastar District of Chattisgarh State, India. It comes under Garhdhanora Panchayath. It is located 114 KM towards North from District head quarters Jagdalpur. 160 KM from State capital Raipur. Garhdhanora Pin code is 494334 and postal head office is Kanker. Garhdhanora is surrounded by Baderajpur Tehsil towards East , Pharasgaon Tehsil towards South , Kanker Tehsil towards North , Narharpur Tehsil towards North. A massive complex of nearly 20 temples and mounds are located in the forest. Excavations suggest this was a major administrative and religious center during the 5th and 6th centuries CE under the Nala dynasty. The site is particularly famous for its Vishnu and Shiva temples which utilize a primitive yet sturdy stone-stacking technique. It provides a missing link in understanding how temple architecture moved from simple rock structures to the complex 'poetry in stone' seen at Bhoramdeo.",
    images: [kondagaon1, kondagaon2],
    source: "(src: Kondagaon district administration, Chattisgarh tourism)",
  },
  {
    name: "Surguja (Ramgarh Hill – Sitabenga & Jogimara Caves)",
    description:
      "This site is a blend of natural landscape and man-made monumental architecture, housing some of the oldest heritage in the country.Located atop the Ramgarh Hill, these caves are ancient rock-cut structures. The Sitabenga Cave is recognized as the oldest amphitheater in the world, dating back to the 3rd century BCE (Mauryan Period). It was used for theatrical performances and poetry recitations. The adjacent Jogimara Cave contains the oldest documented paintings in India (predating Ajanta) and an inscription in Brahmi script that is considered one of the earliest examples of a non-religious, romantic inscription in Indian history. The Sitabenga and Jogimara Caves, sometimes referred to either as Sitabenga Cave or Jogimara Cave, are ancient cave monuments nested in the north side of Ramgarh hills in Puta village, Chhattisgarh, India. Dated between the 3rd-century BCE to 1st-century BCE, they are notable for their non-religious inscriptions in Brahmi script and Magadhi language, and one of the oldest colored frescoes in Asia.[1] Some scholars state that the Sitabengra cave is the oldest performance theatre on the Indian subcontinent,[2] but others question whether it was indeed a theatre and suggest that it may have been a resting place (dharmashala) along an ancient trade route.[3] The inscription at the Jogimara cave is equally disputed, with one translation interpreting it as a love-graffiti by a girl and a boy, while another translation interpreting it as a female dancer and a male sculptor-painter creating the two caves together to serve others.[4] The inscription is also the oldest known mention of the word 'devadasi', but this seems just a name and it is unlikely that this was related to any ancient Indian temple since the site and nearby area has no evidence of any Buddhist, Hindu or Jain temple built between the 3rd-century BCE and 8th-century CE. The caves are partly natural and partly sculpted. The regional tradition associates it with the epic of Ramayana, one where Sita, Rama and Lakshmana came at the start of their exile. The oldest ruins and temple artwork found here relate to the Ramayana, all likely from the 8th to 12th-century based on their iconographic features.",
    images: [surguja1, surguja2],
    source: "(src: Wikimedia commons, MP tourism)",
  },
  {
    name: "Kanger Valley National Park",
    description:
      "Kanger Valley National Park (also known as Kanger Ghati National Park) is a national park in the Bastar region of Chhattisgarh state in India. It came into existence in July 1982 and covers an area of approximately 200 square kilometres (77 sq mi). The park extends from the Teerathagarh waterfalls in the west to the Kolab river (Odisha state boundary) in the east, spanning an average length of 33.5 km (20.8 mi) and an average width of 6 km (3.7 mi) from north to south. It derives its name from the Kanger river, which flows centrally through it. Situated at a distance of 30 km (19 mi) southeast of Jagdalpur city, it is one of India's densest national parks and is known for its biodiversity, landscape, waterfalls, and subterranean geomorphologic limestone caves. It is also the home to the Bastar hill myna, the state bird of Chhattisgarh.[1] In 2025, the national park was included to the tentative list of UNESCO. The park is noted for its highly heterogeneous land formations, from low, flat areas to steep slopes, plateaus, valleys, and stream courses. Its vast, undulating terrain harbours habitats for diverse flora and fauna. It has a significant tribal population, and is a popular destination for hikers, wildlife enthusiasts and researchers. According to the survey done by the Botanical Survey of India and other research organizations, the national park has 553 floral species out of which 12 species are new to Chhattisgarh; 43 species are reported rare.",
    images: [kanger1, kanger2, kanger3],
    source: "(src: Wikimedia commons, Trip advisor)",
  },
];

const facts = [
  "The name 'Chhattisgarh' loosely translates to 'thirty-six forts', referencing the thirty-six ancient principalities of the historic Ratanpur Kingdom",
  "Rice Germplasm Hub: Chhattisgarh hosts one of the biggest collections of rice varieties in the world, supporting its 'Rice Bowl' title.",
  "First in Coal Production: The state ranks first in India for coal production, leveraging massive deposits in the Surguja and Raigarh districts.",
  "Longest Festival: Bastar Dussehra holds a global record for its 75-day duration, maintaining tribal traditions for over 600 years.",
  "Mineral Powerhouse: It is the only state in India that produces tin and holds 9th place in the country for total geographical area.",
  "Human Development Award: Chhattisgarh received a UNDP Award in 2007 for using IT for citizen betterment through its Human Development Report.",
  "Ancient Kousal: The region is historically linked to the mother of Lord Rama, Queen Kaushalya, making it a key site for spiritual heritage.",
  "Bhilai Steel Plant: Home to India's first and main producer of steel rails, acting as a backbone for the nation's railway infrastructure.",
  "Sirpur is a hidden archaeological treasure that was once a major center of Buddhist and Hindu learning, predating even Nalanda. ",
  "The state houses one of the longest limestone caves in the world, the Kotumsar Caves, located deep within Kanger Valley National Park. ",
  "The Niagara of India (Chitrakote Falls): Chhattisgarh is home to the widest waterfall in India, the Chitrakote Falls, which stretches nearly 300 meters across the Indravati River.",
  "It also has the third largest forest cover in the country after Madhya Pradesh and Arunachal Pradesh with over 41.21% of the state covered by forests.",
  "Known as the 'Power Hub of India', it boasts vast reserves of coal, iron ore, dolomite, and bauxite, producing roughly 20% of the nation's cement and 18% of its coal.",
  "It is the ninth largest state by area.",
  "It is the seventeenth most populous state of India",
];

const artGallery = [
  {
    title: "Raipur",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Capital & Commercial hub",
    image: gRaipur,
  },
  {
    title: "Jagdalpur",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Tribal & Natural Capital",
    image: gJagdalpur,
  },
  {
    title: "Chitrakote Waterfalls",
    emoji: "🍚",
    color: "#E8733A",
    desc: "Also known as Chitrakoot Waterfalls",
    image: gChitrakoot,
  },
  {
    title: "Chilla",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "A healthy rice-based pancake that is a common and traditional breakfast in Chhattisgarh",
    image: gChilla,
  },
  {
    title: "Fara (Farra)",
    emoji: "🥐",
    color: "#F4E884",
    desc: "A steamed, oil-free snack made from rice flour, loved for being simple and nutritious",
    image: gFara,
  },
  {
    title: "Panthi Dance",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "A spiritual dance of the Satnami community known for energetic moves and devotion",
    image: gPanthi,
  },
  {
    title: "Chattisgarhi Thali",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "",
    image: gThali,
  },
  {
    title: "Raut Nacha",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "A vibrant folk dance performed during Diwali by the cowherd community to honor Lord Krishna",
    image: gRaut,
  },
  {
    title: "Angakar Roti",
    emoji: "🥭",
    color: "#F8C840",
    desc: "It is a traditional, rustic rice flatbread from Chhattisgarh",
    image: gAngakar,
  },
  {
    title: "Muthia",
    emoji: "🌿",
    color: "#F4B830",
    desc: "Dumplings cooked in the traditional style of the Chhattisgarh state and is prepared with the rice batter which is seasoned with various spices. The dish is not fried but is steamed.",
    image: gMuthia,
  },
  {
    title: "Dubki Kadi",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "A dish of Chhattisgarh which makes it into the lunch plates of the people of the state. Dubki Kadi is a pulse-like dish which is mainly cooked with the curd. ",
    image: gDubki,
  },
];