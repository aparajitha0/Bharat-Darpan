import { useState } from "react"; /////////////
import { useLocation } from "wouter";
import {
  ArrowLeft,
  MapPin,
  ChevronRight,
  CheckCircle,
  X,
  ZoomIn,
} from "lucide-react";
const assamMap = "https://i.postimg.cc/DZ3fnFJR/image.png";
const bihu1 = "https://i.postimg.cc/g2fmHdDh/image.png";
const bihu2 = "https://i.postimg.cc/kG1d6dGv/image.png";
const bihu3 = "https://i.postimg.cc/bvcf2gyR/image.png";
const bihu4 = "https://i.postimg.cc/63ckgNdv/image.png";
const bihu5 = "https://i.postimg.cc/GtSZ3Jg8/image.png";
const mela1 = "https://i.postimg.cc/dtpzz6yY/image.png";
const mela2 = "https://i.postimg.cc/fLzFxg6R/image.png";
const mela3 = "https://i.postimg.cc/44FM9PwG/image.png";
const mela4 = "https://i.postimg.cc/dtbxW0b1/image.png";
const mela5 = "https://i.postimg.cc/Bvg7QBXW/image.png";
const ali1 = "https://i.postimg.cc/DZpC1fQZ/image.png";
const ali2 = "https://i.postimg.cc/59G700N7/image.png";
const ali3 = "https://i.postimg.cc/8C1w3ftG/image.png";
const ali4 = "https://i.postimg.cc/MTgFhKnF/image.png";
const ali5 = "https://i.postimg.cc/15hdBXhV/image.png";
const bai1 = "https://i.postimg.cc/6pz1Bh7Z/image.png";
const bai2 = "https://i.postimg.cc/RhrggsYG/image.png";
const bai3 = "https://i.postimg.cc/GhCMYfGv/image.png";
const bai4 = "https://i.postimg.cc/g2M4Ck5L/image.png";
const me1 = "https://i.postimg.cc/Bvkpv7JZ/image.png";
const me2 = "https://i.postimg.cc/7hMnmx0T/image.png";
const me3 = "https://i.postimg.cc/65chZpBm/image.png";
const me4 = "https://i.postimg.cc/QM9gvg1w/image.png";
const me5 = "https://i.postimg.cc/fLYcRwH1/image.png";
const majulir1 = "https://i.postimg.cc/jj7NMxY8/image.png";
const majulir2 = "https://i.postimg.cc/pTQjtsT1/image.png";
const majulir3 = "https://i.postimg.cc/25R38nPp/image.png";
const majulir4 = "https://i.postimg.cc/NFMjPDrR/image.png";
const jon1 = "https://i.postimg.cc/85n7GxGX/image.png";
const jon2 = "https://i.postimg.cc/HWRzHkpY/image.png";
const jon3 = "https://i.postimg.cc/RFq15j8j/image.png";
const jon4 = "https://i.postimg.cc/9X6dKgpC/image.png";
const deh1 = "https://i.postimg.cc/7ZVSCHrj/image.png";
const deh2 = "https://i.postimg.cc/259vw06J/image.png";
const deh3 = "https://i.postimg.cc/LXqP0jg5/image.png";
const deh4 = "https://i.postimg.cc/MKJBdMWg/image.png";
const Karam1 = "https://i.postimg.cc/ZqQB30sK/image.png";
const Karam2 = "https://i.postimg.cc/135fjDLy/image.png";
const Karam3 = "https://i.postimg.cc/TP52z000/image.png";
const tea1 = "https://i.postimg.cc/DfxVcsdc/image.png";
const tea2 = "https://i.postimg.cc/BbVVfTMY/image.png";
const tea3 = "https://i.postimg.cc/YCcdNqVL/image.png";
const tea4 = "https://i.postimg.cc/FKNGqCht/image.png";
const tea5 = "https://i.postimg.cc/ZY2Ggm2b/image.png";
const kama1 = "https://i.postimg.cc/DZFZ1sQB/image.png";
const park1 = "https://i.postimg.cc/7htZvRvY/image.png";
const manas1 = "https://i.postimg.cc/kXZgfLF8/image.png";
const manas2 = "https://i.postimg.cc/Lsk445dt/image.png";
const manas3 = "https://i.postimg.cc/nz0H7Wh4/image.png";
const temp1 = "https://i.postimg.cc/XN1jYtPh/image.png";
const majuli1 = "https://i.postimg.cc/Fst9S09W/image.png";
const majuli2 = "https://i.postimg.cc/VNHwkCGJ/image.png";
const rang1 = "https://i.postimg.cc/nrqf2wHM/image.png";
const rang2 = "https://i.postimg.cc/jdrb2KXh/image.png";
const tal1 = "https://i.postimg.cc/2S0R0Wfg/image.png";
const tal2 = "https://i.postimg.cc/2S0R0Wfg/image.png";
const siva1 = "https://i.postimg.cc/ydSM6rSz/image.png";
const siva2 = "https://i.postimg.cc/sxYb7QcW/image.png";
const agni = "https://i.postimg.cc/28YsmGkt/image.png";
const mahab1 = "https://i.postimg.cc/SxT36pWT/image.png";
const mahab2 = "https://i.postimg.cc/qRnFHh97/image.png";
const haf1 = "https://i.postimg.cc/1RGdWFGD/image.png";
const haf2 = "https://i.postimg.cc/gk4TpPBm/image.png";
const surya1 = "https://i.postimg.cc/Qdtnxn23/image.png";
const satra1 = "https://i.postimg.cc/hjFCs4hZ/image.png";
const satra2 = "https://i.postimg.cc/9QrJjw9j/image.png";
const gAssamTea = "https://i.postimg.cc/HxjNZvt2/image.png";
const gKhar = "https://i.postimg.cc/MHQFxcNX/image.png";
const gMasorTenga = "https://i.postimg.cc/mZvnjw1C/image.png";
const gPitha = "https://i.postimg.cc/sgyNdgJL/image.png";
const gDuckMeatCurry = "https://i.postimg.cc/HnDtw6vr/image.png";
const gAlooPitika = "https://i.postimg.cc/jjB6T8bc/image.png";
const gXaakBhaji = "https://i.postimg.cc/9XdP3tN2/image.png";
const gBambooPickle = "https://i.postimg.cc/SNm6m2w8/image.png";
const gJolpan = "https://i.postimg.cc/m2VQkZ42/image.png";
const gPayas = "https://i.postimg.cc/bJXnWsxZ/image.png";

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
export default function AssamPage() {
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
                Assam
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of the Red River and the Blue Hill
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Dispur" },
                  { label: "Population", value: "3.12 Crore" },
                  { label: "Area", value: "78,438 sq km" },
                  { label: "Founded", value: "26 January 1950" },
                  { label: "Language", value: "Assamese, Bengali, Bodo" },
                  { label: "Districts", value: "32 Districts" },
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
              Dispur
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Assam - The Gateway to the North-East's Heritage
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Assam" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(assamMap, "Map of Assam")}
            >
              <img
                src={assamMap}
                alt="Map of Assam"
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
              Assam is a beautiful state in northeastern India, known for its
              natural beauty, cultural richness, and economic importance. Its
              capital is Dispur, located within the city of Guwahati, which is
              also the largest and most developed city in the region. Assam
              serves as a gateway to the northeastern states and plays a
              significant role in connecting them with the rest of India.
            </p>
            <p className="text-foreground">
              The geography of Assam is dominated by the mighty Brahmaputra
              River, which flows across the state and creates fertile plains.
              The region is blessed with lush greenery, rolling hills, and
              abundant rainfall, making it ideal for agriculture. Assam is also
              home to rich biodiversity, including famous wildlife sanctuaries
              like Kaziranga National Park, which is globally known for
              protecting the endangered one-horned rhinoceros.
            </p>
            <p className="text-foreground">
              Assam has a diverse cultural heritage influenced by various ethnic
              groups, tribes, and communities. The primary language spoken is
              Assamese, but many other languages such as Bodo and Bengali are
              also used. The most important festival of the state is Bihu, which
              is celebrated with great enthusiasm and reflects the agricultural
              traditions of the people through music, dance, and feasting.
              Economically, Assam is famous worldwide for its tea production,
              especially Assam tea, which is known for its strong flavor and
              quality.
            </p>
            <p className="text-foreground">
              Apart from tea, the state is rich in natural resources like oil,
              natural gas, and coal, making it one of the oldest oil-producing
              regions in Asia. Agriculture and handloom industries, particularly
              silk weaving like Muga silk, also contribute significantly to the
              state’s economy. Tourism in Assam attracts visitors from around
              the world due to its scenic beauty, wildlife, and historical
              sites. Places like Majuli, one of the largest river islands in the
              world, and Sivasagar, known for its Ahom-era monuments, highlight
              the cultural and historical importance of the state. Overall,
              Assam is a unique blend of nature, tradition, and development.
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
        <Section title="Facts about Assam" icon="💡">
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
            Scroll horizontally to explore Assam's iconic foods, crafts, dance,
            and traditions.
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
    name: "Bihu",
    description:
      "Bihu is the most important festival of Assam and holds a special place in the lives of the Assamese people. It is closely linked with farming, seasons, and the cultural identity of the state. Bihu is actually celebrated in three forms, but the most famous is Bohag Bihu, also known as Rangali Bihu, which marks the Assamese New Year and the arrival of spring in April. The festival is celebrated to welcome a new agricultural cycle, thank nature for a good harvest, and pray for peace, prosperity, and happiness in the coming year. It shows the deep connection between the people of Assam and agriculture, especially rice farming, which has been central to their way of life for generations. During Bihu, people clean their homes, wear traditional clothes, prepare special dishes like pitha, laru, and chira, and visit relatives and elders to seek blessings. The festival creates a joyful atmosphere filled with music, dance, and togetherness. A very important part of Bihu is the Bihu dance and Bihu songs, which are performed with great energy and excitement. These performances are usually accompanied by traditional instruments such as the dhol, pepa, and taal, which give the celebration its lively rhythm. Young men and women often take part in group dances in open fields or community spaces, making the festival a social and cultural event as well as a religious and seasonal one. Bihu also brings people together across different communities and backgrounds, which is one reason it is so loved throughout Assam. In some forms of Bihu, especially Magh Bihu, people light bonfires called meji and offer prayers, feasts, and thanks for a successful harvest. The festival is not only about enjoyment but also about gratitude, renewal, and hope. It preserves Assamese traditions, language, music, dress, and customs, and it remains a powerful symbol of pride and unity for the people of Assam.",
    images: [bihu1, bihu2, bihu3, bihu4, bihu5],
    source:
      "(src: Assamese community,assamtourism.gov,assam.awazthevoice,Assamese Community)",
  },
  {
    name: "Ambubachi Mela",
    description:
      "Ambubachi Mela is a famous religious festival celebrated at the Kamakhya Temple in Guwahati, Assam. It is one of the most important spiritual events in the region and attracts thousands of devotees every year. The festival is usually held in June during the monsoon season and is linked to the annual menstruation of Goddess Kamakhya, who is worshipped as a powerful form of Shakti, or divine feminine energy. People celebrate it because they believe it represents fertility, creation, and the natural cycle of life. In this tradition, menstruation is not seen as something impure, but as a sacred and powerful process connected with Mother Earth and the goddess’s creative strength. This gives the festival deep religious and cultural significance. During Ambubachi Mela, the Kamakhya Temple remains closed for a few days, symbolizing the goddess’s period of rest. After this sacred phase ends, the temple reopens and devotees gather in large numbers for prayers, blessings, and darshan. Many pilgrims also spend time outside the temple complex singing, chanting, meditating, and waiting for the reopening with great devotion. The festival brings together saints, devotees, tantrics, and visitors from different parts of India, making it a major spiritual gathering. Ambubachi Mela is not just a ritual event; it is also a celebration of faith, nature, renewal, and the reverence of feminine power.",
    images: [mela1, mela2, mela3, mela4, mela5],
    source:
      "bharatvarshayatra,Kamakhya Temple,hindustantimes,telegraphindia,wikipedia",
  },
  {
    name: "Ali-Ai-Ligang",
    description:
      "Ali-Ai-Ligang is a traditional agricultural festival celebrated by the Mising or Mishing tribe of Assam. It marks the beginning of the sowing season, especially the start of paddy cultivation, and is observed in the month of February, usually on the first Wednesday of Fagun in the Assamese calendar. The name of the festival reflects its farming roots, with “Ali” meaning seeds or legumes, “Aye” meaning fruit or seed, and “Ligang” meaning sowing. It is celebrated to pray for a good harvest, prosperity, and the well-being of the community. The festival shows how closely the Mising people’s life is connected to agriculture and nature. It is both a cultural celebration and a ritual of gratitude to the deities for fertile land and abundant crops. During Ali-Ai-Ligang, the community comes together in a joyful atmosphere with traditional food, music, dance, and rituals. The famous Gumraag Soman dance is performed by young people, along with folk songs called oi-nitom, which add energy and color to the celebration. The first day of the festival usually begins with the ceremonial sowing of seeds, while activities like ploughing, tree cutting, and burning are avoided during the festive period. A community feast is an important part of the celebration, and people enjoy dishes such as fish, meat, rice beer, and other traditional foods. The festival is not only about farming but also about preserving the identity, unity, and cultural heritage of the Mising tribe.",
    images: [ali1, ali2, ali3, ali4, ali5],
    source: "(src: sentinelassam,tourmyindia,utsav.gov,prokerala,hellotravel)",
  },
  {
    name: "Baishagu",
    description:
      "Baishagu is a major traditional festival celebrated by the Bodo community in Assam. It is a spring and New Year festival that usually falls in mid-April, around the time of Bohag or Baisakh, and it marks the beginning of a new agricultural cycle. The festival is celebrated to welcome the new year, seek blessings for a good harvest, and pray for prosperity, health, and happiness for the community. It also reflects the close connection between the Bodo people and farming, nature, and their ancestral traditions. On the first day, cows are worshipped, showing the importance of cattle in rural life and agriculture. On the next day, younger people show respect to their elders by bowing to them and taking blessings. The festival is also dedicated to Bathou, the supreme deity of the Bodos, who is often identified with Lord Shiva. During Baishagu, the community celebrates with great joy through music, dance, rituals, and feasting. One of the most famous features of the festival is the Bagurumba dance, also called the butterfly dance, which is performed by women in colorful traditional dress. Folk songs and traditional instruments create a lively atmosphere, and people come together to enjoy special foods and share happiness with family and neighbors. The festival usually ends with prayers at a common place of worship called Garja Sali, where the community offers devotion and thanks. Baishagu is not only a religious and agricultural festival but also an important symbol of Bodo identity, culture, and unity.",
    images: [bai1, bai2, bai3, bai4],
    source: "(src: caleidoscope,voanews,sentinelassam,tourmyindia",
  },
  {
    name: "Me-Dam-Me-Phi",
    description:
      "Me-Dam-Me-Phi is an important traditional festival of the Tai-Ahom community in Assam. It is celebrated to honour ancestors and to seek their blessings for the welfare, peace, and prosperity of the family and community. The words of the festival itself show its meaning: “Me” means offerings, “Dam” means ancestors, and “Phi” means gods. This makes the festival a sacred ritual of remembrance and gratitude, where the Ahom people pray for the souls of their forefathers and express respect for their heritage. It is usually observed on January 31 every year and is recognized as a significant cultural and religious occasion in Assam. The festival is especially important because it preserves the ancient beliefs, customs, and identity of the Ahom community. During Me-Dam-Me-Phi, people gather at temples or community places to offer food, prayers, and rituals to the ancestors and deities. Traditional ceremonies are performed with devotion, and in many places the community also organizes cultural programs, feasts, and meetings. The festival brings people together and strengthens unity among the Tai-Ahom people. It is not only a religious observance but also a reminder of the community’s history, values, and respect for the dead. Through this festival, the Ahoms continue to keep their ancestral traditions alive and pass them on to younger generations.",
    images: [me1, me2, me3, me4, me5],
    source: "happenings.lpu,bananivista,thehillstimes,guwahatiplus",
  },
  {
    name: "Majuli Raas Mahotsav",
    description:
      "Majuli Raas Mahotsav is a famous cultural and religious festival celebrated on Majuli, the world’s largest river island in Assam. It is mainly dedicated to Lord Krishna and is one of the most important traditions of Assam’s Vaishnavite culture. The festival is celebrated on the full moon day of the Assamese month of Aghun, usually in November, and it continues for several days with great devotion and excitement. It is observed to remember and portray the life, teachings, and divine play of Lord Krishna through dance, drama, music, and religious performances. The festival reflects the deep influence of Neo-Vaishnavism in Majuli and the long association of the island with satras, or monastic institutions, that preserve Assamese spiritual and artistic traditions. It is also celebrated to bring the community together in devotion, culture, and shared heritage. During the Majuli Raas Mahotsav, people stage Bhaona, which are religious plays based on scenes from Krishna’s life. These performances include episodes such as his birth, childhood mischief, victory over evil, and interactions with the gopis. The festival is marked by colorful costumes, masks, folk songs, devotional music, and traditional dance, creating a powerful spiritual atmosphere. Different satras and local communities take part in the celebration, and many visitors come to witness the event, making it an important cultural attraction as well. The making of masks, pottery, and other traditional arts is also closely associated with the festival. Majuli Raas Mahotsav is not only a religious observance but also a living expression of Assamese art, faith, and identity.",
    images: [majulir1, majulir2, majulir3, majulir4],
    source: "exporemajuli,news.abplive,festivalsofindia,adotrip",
  },
  {
    name: "Jonbeel Mela",
    description:
      "Jonbeel Mela is a unique traditional fair celebrated in Assam, mainly by the Tiwa community, and it is known for preserving the old barter system. It is held every year near Jagiroad at Dayang Belguri, beside the Jonbeel wetland, usually around Magh Bihu in January, and it is one of the most historic community fairs in Northeast India. The name comes from Assamese, where “Jon” means moon and “Beel” means wetland, referring to the crescent-shaped water body near which the fair takes place. The mela is celebrated to promote harmony, brotherhood, and cultural exchange between the hill and plain communities of Assam and Meghalaya. Tribes such as the Tiwa, Karbi, Khasi, and Jaintia come together to trade their goods, often through barter rather than money, which makes the fair especially special in modern times. Before the fair begins, people perform agni puja, or fire worship, for the well-being of humanity. A very important part of Jonbeel Mela is the participation of the Tiwa king, known as the Gobha Raja, who visits the fair with his courtiers and collects taxes from his subjects in a traditional way. Along with trade, the fair includes traditional dances, music, community gatherings, and local food, creating a lively cultural atmosphere. Jonbeel Mela is not just a market; it is a living example of mutual trust, indigenous tradition, and community bonding.",
    images: [jon1, jon2, jon3, jon4],
    source: "assamtribune,clubmahindra",
  },
  {
    name: "Dehing Patkai Festival",
    description:
      "Dehing Patkai Festival is a well-known cultural and tourism festival celebrated in Assam, especially at Lekhapani in Tinsukia district. It is named after the Dehing River and the Patkai range, both of which are closely linked to the natural beauty and identity of Upper Assam. The festival was started by the Government of Assam in 2002 to promote tourism, highlight tribal culture, and showcase the scenic charm of the region. It is usually held in January, when the weather is pleasant and the landscape is at its best. The festival attracts visitors because it combines nature, culture, adventure, and local traditions in one celebration. During Dehing Patkai Festival, people can enjoy tea garden tours, tribal fairs, traditional dances, music, adventure sports, wildlife trips, and local food. Different indigenous communities of Assam take part and present their customs, dress, and performances, which makes the festival a rich cultural experience. Activities like jungle treks, visits to ethnic villages, car rallies, and other outdoor events are also part of the celebration. The festival is important because it helps preserve tribal heritage while also encouraging tourism and economic activity in the region. It is both a celebration of Assam’s natural beauty and a showcase of its diverse cultural life.",
    images: [deh1, deh2, deh3, deh4],
    source:
      "(src: assamtourism.gov,excurse.netlify,team-bhp,discoverindiabycar)",
  },
  {
    name: "Karam Puja",
    description:
      "Karam Puja is one of the important traditional festivals celebrated in Assam, especially among the tea tribe communities and Adivasi groups living in the state. The festival is mainly observed by communities such as Oraon, Munda, Santhal, and other tribal groups who have preserved their rich cultural heritage for generations. Karam Puja is generally celebrated during the month of August or September on the eleventh day of the full moon. The festival is associated with agriculture, prosperity, fertility, and brotherhood. It reflects the close relationship between humans and nature. The word “Karam” refers to the Karam tree, which is considered sacred by the tribal communities. During the festival, branches of the Karam tree are brought ceremonially to the village or community gathering place. The branches are worshipped with great devotion as symbols of prosperity, good luck, and protection. People believe that the Karam deity blesses families with happiness, healthy crops, wealth, and peace. The festival is celebrated to seek the blessings of nature and to ensure a successful harvest season. Karam Puja is also celebrated to honor hard work, unity, and social harmony within the community. According to traditional beliefs, worshipping the Karam deity protects people from difficulties and brings progress in life. Young boys and girls actively participate in the celebrations and perform traditional dances and songs throughout the night. The songs usually describe nature, village life, love, farming, and cultural traditions. The rhythmic beats of drums and folk music create a joyful atmosphere. Women observe fasting during the day and later participate in the worship rituals. Priests or village elders conduct the puja by offering flowers, grains, milk, fruits, and rice beer to the sacred Karam branch. After the rituals, cultural programs and community feasts are organized. Traditional tribal dresses and ornaments add beauty to the celebrations. Dancing in groups around the Karam branch is one of the main attractions of the festival. Karam Puja plays an important role in preserving the tribal identity and cultural traditions of Assam. It teaches respect for nature and highlights the importance of trees and agriculture in human life. The festival also strengthens social bonding among community members. In Assam, Karam Puja is not only a religious celebration but also a symbol of cultural unity, faith, and gratitude toward nature.",
    images: [Karam1, Karam2, Karam3],
    source: "(src: pratidintime,sentinelassam,mediafocusweb.wordpress)",
  },
  {
    name: "Assam Tea Festival",
    description:
      "The Assam Tea Festival is one of the most popular cultural and tourism festivals celebrated in Assam. The festival highlights the rich tea heritage, culture, traditions, and natural beauty of the state. Assam is world famous for producing high-quality tea, especially strong black tea with a unique flavor and aroma. The tea industry plays a very important role in the economy and identity of Assam. The festival is organized mainly to promote Assam tea, tourism, and the cultural diversity of the region. The Assam Tea Festival is celebrated in different tea-growing areas of the state such as Jorhat, Dibrugarh, and nearby tea garden regions. It usually attracts tourists, tea experts, business people, artists, and visitors from different parts of India and abroad. The festival showcases the history and importance of tea cultivation in Assam. It also provides an opportunity for visitors to experience the lifestyle and traditions of tea garden communities. One of the main attractions of the festival is tea tasting sessions where visitors can taste different varieties of Assam tea. Tea plantation tours are also organized to show how tea leaves are grown, plucked, processed, and packed. Visitors can walk through beautiful green tea gardens and learn about tea production from workers and experts. Cultural programs including traditional Assamese dances, folk music, fashion shows, and drama performances are held during the festival. Bihu dance performances are especially popular among tourists. The Assam Tea Festival is celebrated to honor the contribution of the tea industry to the state’s development and economy. It also helps in promoting Assam tea in national and international markets. The festival encourages tourism and provides employment opportunities to local people. Handicraft exhibitions, local food stalls, adventure activities, and photography events are also organized during the celebration. The festival reflects the beauty of Assam’s culture, hospitality, and natural environment. Tea gardens decorated with lights and cultural events create a joyful atmosphere. The festival also spreads awareness about the hard work of tea garden workers and the importance of preserving Assam’s tea heritage. Overall, the Assam Tea Festival is not only a celebration of tea but also a celebration of the traditions, culture, and economic strength of Assam.",
    images: [tea1, tea2, tea3, tea4, tea5],
    source:
      "(src:easeindiatrip, indulgeexpress,nativeplanet,oddessemania,theteashelf)",
  },
];

const historicalPlaces = [
  {
    name: "Kamakhya Temple",
    description:
      "The Kamakhya Temple is one of the oldest and most important temples in India, located on the Nilachal Hill in the city of Guwahati, on the southern bank of the Brahmaputra River. It is dedicated to Goddess Kamakhya, a powerful form of Shakti, and is a major center of Tantric worship in Hinduism. The temple has ancient origins, and though the exact date of its first construction is not clearly known, it is believed to have existed since early medieval times. The original structure was destroyed during invasions. The present temple was rebuilt in the 16th century (around 1565 AD) by the Koch king Nara Narayana, along with his brother Chilarai. Their reconstruction gave the temple its current architectural form, which combines local Assamese and North Indian styles. According to mythology, the temple is closely linked to the story of Sati and Lord Shiva. It is believed that when Sati’s body was dismembered, her yoni (womb) fell at this spot, making it one of the 51 sacred Shakti Peethas. This symbolizes fertility, creation, and divine feminine energy, which is why the temple holds immense religious significance. Unlike most temples, Kamakhya Temple does not have an idol of the goddess. Instead, worship is offered to a natural stone inside a cave, which is continuously moistened by an underground spring. This unique feature represents the life-giving power of the goddess and makes the temple distinct from other Hindu shrines. The temple is also famous for the annual Ambubachi Mela, celebrated in June. During this time, it is believed that the goddess undergoes her menstrual cycle, and the temple remains closed for three days. After reopening, thousands of devotees visit to seek blessings and collect sacred offerings. Surrounded by scenic hills and overlooking the Brahmaputra River, Kamakhya Temple is not only a religious site but also a historical and cultural landmark of Assam. It attracts pilgrims, historians, and tourists from across the world and stands as a symbol of devotion, tradition, and ancient heritage.",
    images: [kama1],
  },
  {
    name: "Kaziranga national park",
    description:
      "Kaziranga National Park is one of the most प्रसिद्ध wildlife sanctuaries in Assam and is globally recognized as a UNESCO World Heritage Site. Established in 1905 and declared a national park in 1974, it is especially famous for conserving the endangered Indian one-horned rhinoceros, with the largest population found here. The park reflects India’s strong commitment to wildlife conservation. Situated along the fertile floodplains of the Brahmaputra River, Kaziranga features a diverse landscape of tall elephant grass, marshlands, and dense forests. This rich habitat supports a wide variety of wildlife including elephants, wild water buffalo, swamp deer, and even tigers, due to which it is also recognized as a Tiger Reserve. The park is also a hotspot for birdwatchers, hosting numerous migratory and resident bird species. Kaziranga National Park is a major tourist attraction, offering jeep safaris and elephant rides that allow visitors to explore its natural beauty closely. The best time to visit is between November and April, as the park remains closed during the monsoon season because of flooding. Overall, Kaziranga stands as a symbol of successful conservation and plays a crucial role in maintaining ecological balance.",
    images: [park1],
  },
  {
    name: "Manas National Park",
    description:
      "Manas National Park is one of the most important wildlife reserves in India and is located in the state of Assam near the foothills of the Himalayas. The park is situated along the border of Bhutan and is connected to the Royal Manas National Park of Bhutan. It is named after the Manas River, which flows through the park and adds great natural beauty to the region. The area was first declared a reserved forest in 1907 to protect its rich wildlife and forest resources. Later, in 1928, it became a wildlife sanctuary. Due to its large population of tigers and other rare animals, the Government of India included it under Project Tiger in 1973. In 1990, Manas was officially declared a national park. Because of its outstanding biodiversity and scenic beauty, UNESCO declared it a World Heritage Site in 1985. It is also recognized as a biosphere reserve, an elephant reserve, and an important bird area. During the Assam insurgency in the late 1980s and 1990s, the park faced severe destruction. Many forest camps were damaged, and poaching activities increased, leading to a decline in wildlife populations. Due to this damage, UNESCO placed the park on the list of World Heritage Sites in Danger in 1992. However, with the efforts of the government, forest officials, and local communities, the park slowly recovered. Conservation programs helped restore wildlife and improve forest protection. In 2011, UNESCO removed Manas National Park from the danger list because of its successful recovery. Today, the park spreads over nearly 950 square kilometers and is home to many endangered animals such as the Bengal tiger, Indian elephant, one-horned rhinoceros, wild buffalo, golden langur, pygmy hog, and clouded leopard. More than 450 species of birds are also found here, making it a paradise for bird lovers and nature photographers. The park’s grasslands, dense forests, and river ecosystems make it one of the richest biodiversity areas in India. Tourists from all over the world visit Manas National Park for jeep safaris, elephant rides, and wildlife photography. It remains a symbol of successful wildlife conservation and natural heritage in India.",
    images: [manas1, manas2, manas3],
    source: "(src: bolgspot.com,)",
  },
  {
    name: "Umananda Temple",
    description:
      "Umananda Temple is a famous Hindu temple located on Peacock Island in the middle of the Brahmaputra River in Guwahati. It is one of the most well-known religious sites in Assam and is dedicated to Lord Shiva. The name “Umananda” comes from two words — “Uma,” another name for Goddess Parvati, and “Ananda,” meaning happiness, which together mean “the joy of Uma.” According to Hindu mythology, Lord Shiva once meditated on this island, making it a sacred place for devotees. It is believed that Lord Shiva burned Kamadeva, the god of love, at this spot with his third eye, and because of this, the island is also known as Bhasmachal, meaning “hill of ashes.” The temple was built in 1694 AD by the Ahom king Gadadhar Singha during the Ahom rule in Assam. The Ahom dynasty greatly contributed to the construction of temples and preservation of Hindu culture in the region. The temple was later damaged by a strong earthquake in 1897, but it was rebuilt by a local wealthy merchant. The architecture of the temple reflects a blend of traditional Assamese and Hindu styles. The temple complex contains carvings and sculptures of Hindu gods and goddesses, adding to its artistic beauty. Peacock Island, where the temple is situated, is considered the smallest inhabited river island in the world. Visitors can reach the temple by ferry boats from the banks of the Brahmaputra River in Guwahati. The surrounding natural beauty of the river and hills makes the temple a peaceful and attractive tourist destination. Thousands of devotees visit the temple, especially during the festival of Maha Shivaratri, when grand celebrations and prayers are held. The temple is not only an important religious center but also a symbol of Assam’s cultural and historical heritage. Today, Umananda Temple attracts pilgrims, tourists, historians, and nature lovers from different parts of India and the world.",
    images: [temp1],
    source: "(src: Kiomoi Travels, Tusk Travels)",
  },
  {
    name: "Majuli",
    description:
      "Majuli is one of the most famous cultural and natural attractions of Assam and is known as the world’s largest river island. It is located in the middle of the mighty Brahmaputra River and lies mainly in the Majuli district of Assam. The island is around 20 kilometers away from the city of Jorhat and can be reached by ferry services across the river. Majuli is famous for its scenic beauty, green landscapes, traditional villages, and rich Assamese culture. The island has great historical and religious importance because it became the center of Neo-Vaishnavite culture introduced by the great Assamese saint and social reformer Srimanta Sankardeva in the 15th century. He established several “Satras,” which are Vaishnavite monasteries that spread spiritual teachings, art, music, dance, and Assamese culture. Majuli is home to many famous Satras such as Auniati Satra, Dakhinpat Satra, and Kamalabari Satra, which preserve ancient traditions and religious practices. These Satras are important centers for classical dance, drama, mask-making, and manuscript preservation. The island is also known for its unique tribal culture, as different communities like the Mishing tribe live there peacefully and maintain their traditional lifestyle, dress, and festivals. Majuli has rich biodiversity with many migratory birds visiting the island during winter, making it a beautiful place for bird watchers and nature lovers. However, the island has faced severe erosion and flooding over the years due to the changing course of the Brahmaputra River, which has reduced its size significantly. Despite these challenges, Majuli continues to remain a symbol of Assamese heritage and spirituality. In 2016, Majuli was officially declared a district of Assam, making it the first island district in India. Tourists from all over the world visit Majuli to experience its peaceful environment, traditional culture, festivals, and natural beauty. Today, Majuli is considered one of the most important cultural centers of Northeast India and a treasure of Assamese civilization.",
    images: [majuli1, majuli2],
    source: "tourmyodisha.com,travelandleisureasia.com",
  },
  {
    name: "Rang Ghar",
    description:
      "Rang Ghar is one of the most famous historical monuments of Assam and is considered the oldest surviving amphitheater in Asia. It is located in the town of Sivasagar, which was once the capital of the Ahom Kingdom. Rang Ghar was built during the rule of the Ahom dynasty, which governed Assam for nearly six hundred years. The structure was constructed in 1746 AD by the Ahom king Pramatta Singha. It was mainly built as a royal sports pavilion where the king and members of the royal family used to sit and watch various games, cultural programs, buffalo fights, wrestling matches, and celebrations during festivals like Bihu. The name “Rang Ghar” means “House of Entertainment” because it was used for enjoyment and public performances. The building reflects the excellent architectural skills of the Ahom rulers. It was constructed using bricks, a special type of mortar made from rice paste, eggs, and lime, without using iron rods or cement. The structure has a two-storied design with a roof shaped like an inverted boat, which is inspired by traditional Assamese architecture. The upper floor was reserved for the royal family, while the lower area was used by attendants and officials. Rang Ghar stands near the historic Talatal Ghar and other monuments of Sivasagar, showing the rich cultural heritage of Assam. Although the monument suffered some damage due to natural disasters like earthquakes, it still remains an important symbol of Assamese history and architecture. The surrounding open grounds once served as playgrounds and event areas during the Ahom period. Today, Rang Ghar is maintained by the Archaeological Survey of India and attracts many tourists, historians, and researchers from different parts of the country. It represents the glory, creativity, and cultural richness of the Ahom kingdom and is considered one of the pride monuments of Assam.",
    images: [rang1, rang2],
    source: "(src:tripinvites.com,holidify.com)",
  },
  {
    name: "Talatal Ghar",
    description:
      "Talatal Ghar is one of the largest and most remarkable historical monuments of Assam. It is located in the town of Sivasagar, which was once the capital of the powerful Ahom Kingdom. Talatal Ghar is famous for its unique architecture, underground tunnels, and historical importance. The monument was originally built by the Ahom king Rudra Singha in the late 17th century as a military base and palace. Later, it was expanded and improved by King Rajeswar Singha in the 18th century. The name “Talatal Ghar” means “underground house” because the structure contains secret underground floors and tunnels used for military purposes and escape routes during wars. Talatal Ghar originally had seven stories, including three underground floors and four above-ground floors. The upper floors were called “Kareng Ghar,” while the lower underground sections were known as “Talatal Ghar.” The palace was mainly used by the Ahom kings and soldiers during battles and important administrative activities. It is believed that the underground tunnels connected the palace to the Dikhow River and nearby forests, helping the royal family escape during enemy attacks. The monument was built using bricks and a special mixture of rice paste, eggs, lime, and other natural materials instead of cement, showing the advanced engineering skills of the Ahoms. The architecture of Talatal Ghar reflects a blend of Assamese and Mughal styles. The palace contains beautiful arches, large halls, hidden passages, and strong walls that demonstrate the artistic and military planning of the Ahom dynasty. It is considered one of the grandest examples of Ahom architecture and engineering in Assam. The underground tunnels and hidden chambers were specially designed for protection during enemy attacks and secret movement of soldiers. According to historians, some tunnels were long enough to connect distant places around the palace area, though many of them are now closed for safety reasons. The palace complex was surrounded by open grounds, gardens, and defensive structures that added to its beauty and security. The upper floors of the palace were used as royal living quarters, meeting halls, and administrative rooms where important discussions and ceremonies took place. The palace also contained watch towers and guard rooms for monitoring enemy movement. The Ahom kings were known for their advanced knowledge of architecture and construction, and Talatal Ghar is one of the best examples of their skill. Although parts of the structure were damaged by earthquakes and the passage of time, much of the monument still stands proudly today. It is protected and maintained by the Archaeological Survey of India. Talatal Ghar is closely connected with other historical monuments of Sivasagar such as Rang Ghar and Kareng Ghar, forming an important historical region of the old Ahom capital. Every year, many tourists, students, historians, and researchers visit the site to learn about Assam’s glorious past. Today, Talatal Ghar stands as a symbol of Assam’s historical pride and showcases the rich cultural heritage of Northeast India.",
    images: [tal1, tal2],
    source: "(src:holidify.com,travelobiz.com)",
  },
  {
    name: "Sivadol Temple",
    description:
      "Sivadol Temple is one of the most famous and tallest Shiva temples in Assam. It is located on the banks of the beautiful Sivasagar Tank in the town of Sivasagar, which was once the capital of the Ahom Kingdom. The temple is dedicated to Lord Shiva and is considered one of the most important religious and historical sites of Assam. Sivadol was built in 1734 AD by the Ahom queen Bar Raja Ambika, the wife of Ahom king Siva Singha. The temple was constructed during the Ahom rule, which greatly promoted art, architecture, and Hindu culture in Assam. The word “Sivadol” comes from two words — “Siva,” meaning Lord Shiva, and “Dol,” meaning temple. The temple is known for its magnificent architecture and tall golden dome. It stands at a height of about 104 feet, making it one of the tallest Shiva temples in India. The structure reflects a blend of traditional Assamese and Hindu temple architectural styles. The temple complex also includes two other temples dedicated to Lord Vishnu and Goddess Durga, known as Vishnudol and Devidol. These temples together form an important religious center for devotees. In front of the temple lies the large man-made Sivasagar Tank, which was excavated during the Ahom period and adds beauty to the surroundings. The temple attracts thousands of pilgrims and tourists every year, especially during the festival of Maha Shivaratri, when grand prayers and celebrations take place. Devotees from different parts of India visit the temple to offer prayers to Lord Shiva. The temple also reflects the religious devotion and architectural excellence of the Ahom dynasty. Despite natural disasters like earthquakes over the years, Sivadol still stands strong and remains a symbol of Assam’s rich cultural and spiritual heritage. Today, it is maintained as an important historical monument and continues to be one of the major tourist attractions in Assam.",
    images: [siva1, siva2],
    source: "(src:tourtravelworld.com,sanatani.life )",
  },
  {
    name: "Agni Garh",
    description:
      "Agni garh is one of the most famous historical and mythological tourist attractions in Assam. It is located in the city of Tezpur on a hill beside the mighty Brahmaputra River. The name “Agni garh” means “Hill of Fire,” as the word “Agni” means fire and “Garh” means fortress. According to Hindu mythology, this place is closely connected with the legendary love story of Princess Usha and Prince Aniruddha. Usha was the daughter of King Banasura, a powerful ruler and devotee of Lord Shiva. It is believed that King Banasura built a fortress surrounded by fire on this hill to keep his daughter away from all men and protect her from outsiders. However, Usha fell in love with Aniruddha, the grandson of Lord Krishna, after seeing him in a dream. With the help of her friend Chitralekha, Aniruddha was brought secretly to Agni garh. When King Banasura discovered their relationship, a great battle took place between Lord Krishna and Banasura. According to mythology, the battle ended with peace, and Usha married Aniruddha. Because of this romantic legend, Agni garh is often called a symbol of eternal love and is compared to famous love-story monuments of India. Today, Agni garh is a popular tourist destination known for its scenic beauty, gardens, sculptures, and viewpoints overlooking the Brahmaputra River and Tezpur town. Beautiful sculptures depicting the love story of Usha and Aniruddha have been installed around the hill, attracting visitors and photographers. The site also has stairways, sitting areas, and parks that make it a peaceful place for tourists and families. The hilltop offers a breathtaking view of sunsets and the surrounding landscape. Agni garh reflects the rich mythological heritage and cultural traditions of Assam and remains one of the most visited attractions in Tezpur. Today, it stands as an important symbol of love, history, and Assamese folklore.",
    images: [agni],
    source: "(src: traveltriangle.com)",
  },
  {
    name: "Mahabhairab Temple",
    description:
      "Mahabhairab Temple is one of the oldest and most sacred Shiva temples in Assam. It is located in the historic city of Tezpur on a small hill that offers a peaceful and spiritual atmosphere. The temple is dedicated to Lord Shiva, who is worshipped here in the form of Mahabhairab. According to ancient legends and local beliefs, the original temple was established by the mythological king Banasura, who was a great devotee of Lord Shiva. It is believed that King Banasura regularly worshipped Lord Shiva at this place, making the temple an important religious site from ancient times. The temple has great historical and cultural importance in Assam. Over the centuries, the original structure suffered damage due to natural disasters and the passage of time. Later, the temple was renovated and rebuilt by local rulers and devotees to preserve its religious significance. The present structure reflects traditional Assamese temple architecture along with modern reconstruction work. One of the main attractions of the temple is its massive Shiva Lingamhich is considered one of the largest Shiva Lingams in India. Devotees from different parts of the country visit the temple to offer prayers and seek blessings from Lord Shiva. Mahabhairab Temple becomes especially crowded during the festival of Maha Shivaratri, when thousands of devotees gather to perform special prayers and rituals. The temple complex also contains smaller shrines dedicated to other Hindu gods and goddesses. The peaceful environment, ancient beliefs, and spiritual atmosphere make the temple an important pilgrimage destination. From the hilltop, visitors can enjoy beautiful views of Tezpur town and the surrounding natural scenery. The temple is not only a religious center but also a symbol of Assam’s rich mythological and cultural heritage. Today, Mahabhairab Temple remains one of the most visited and respected temples in Assam and continues to attract pilgrims, tourists, and historians throughout the year.",
    images: [mahab1, mahab2],
    source: "(src: - tourtravelworld.com,thesevensister.com)",
  },
  {
    name: "Haflong Lake",
    description:
      "Haflong Lake is one of the most beautiful natural attractions in Assam and is located in the hill town of Haflong, which is the headquarters of the Dima Hasao district. Haflong is popularly known as the “Switzerland of Assam” because of its scenic hills, cool climate, and breathtaking landscapes. Haflong Lake lies at the center of the town and is surrounded by green hills, trees, and beautiful gardens, making it one of the most peaceful tourist destinations in Northeast India. The lake is an important part of the natural beauty and identity of Haflong town. The lake is famous for its calm environment and attractive scenery, which draw tourists, photographers, and nature lovers throughout the year. The water of the lake reflects the surrounding hills and sky, creating a very picturesque view. Many migratory birds visit the lake during winter, making it an excellent place for bird watching. Boating facilities are also available, allowing visitors to enjoy the beauty of the lake closely. The cool climate and fresh air around the lake make it an ideal place for relaxation and sightseeing. Haflong Lake is also culturally important because the town is home to different tribal communities such as the Dimasa, Zeme Naga, and Hmar tribes, who maintain their traditional customs and lifestyle. Festivals and cultural programs organized near the lake attract many visitors and showcase the rich heritage of the region. The lake area has been developed with parks, pathways, and seating arrangements to improve tourism and provide comfort to visitors. Apart from its beauty, Haflong Lake plays an important role in the local ecosystem and tourism economy of the region. Tourists visiting Haflong often explore nearby hills, viewpoints, waterfalls, and traditional villages along with the lake. The peaceful atmosphere and natural surroundings make it one of the most attractive destinations in Assam. Today, Haflong Lake stands as a symbol of the natural beauty, cultural diversity, and tourism potential of Northeast India.",
    images: [haf1, haf2],
    source: "Native planet",
  },
  {
    name: "Sri Surya Pahar",
    description:
      "Sri Surya Pahar is one of the most important historical and archaeological sites in Assam. It is located near the town of Goalpara on a scenic hill surrounded by natural beauty and greenery. The name “Sri Surya Pahar” means “Hill of the Sun,” and it is believed that the place was once an important center for sun worship in ancient times. The site is famous for its ancient rock-cut sculptures, temples, caves, and inscriptions that reflect the rich cultural and religious history of Assam. Historians believe that the monuments at Sri Surya Pahar were built between the 8th and 12th centuries during the rule of different regional dynasties. Sri Surya Pahar is unique because it represents the coexistence of three major religions — Hinduism, Buddhism, and Jainism. Archaeologists have discovered many stone carvings and remains related to these religions, showing that the place was once a major spiritual and cultural center. One of the most famous attractions of the site is the large number of Shiva Lingas carved on rocks. According to local belief, there were originally 99999 Shiva Lingas at the site, and one more was needed to complete one lakh. The hill also contains beautiful carvings of Hindu gods and goddesses such as Surya, Vishnu, and Durga. Apart from Hindu sculptures, several Buddhist stupas and Jain statues have also been found here, proving the religious harmony that existed in ancient Assam. The caves and stone carvings display excellent artistic and architectural skills of ancient craftsmen. Sri Surya Pahar is maintained by the Archaeological Survey of India because of its historical importance. Tourists, historians, archaeologists, and pilgrims visit the site to explore its ancient remains and peaceful atmosphere. The hilltop offers beautiful views of the surrounding landscape and creates a calm environment for visitors. The site is also important for studying the history and development of religion and art in Northeast India. Today, Sri Surya Pahar stands as a symbol of Assam’s rich archaeological heritage, religious harmony, and ancient civilization.",
    images: [surya1],
    source: "(src: TripAdvisor)",
  },
  {
    name: "Barpeta Satra",
    description:
      "Barpeta Satra is one of the most famous and important Vaishnavite monasteries in Assam. It is located in the town of Barpeta and is considered a major center of Assamese culture, religion, and spirituality. The satra was established in the 16th century by the great Assamese saint, social reformer, and disciple of Srimanta Sankardeva, named Madhavdeva. Barpeta Satra played a very important role in spreading Neo-Vaishnavism, a religious movement started by Sankardeva that promoted devotion to Lord Krishna, equality, peace, and social harmony. The satra became a major religious and cultural institution where people gathered for prayers, education, music, dance, and spiritual discussions. The architecture of Barpeta Satra reflects traditional Assamese style with large prayer halls, open courtyards, and simple yet beautiful structures. The main prayer hall, known as the “Kirtanghar,” is the central place where devotees sing devotional songs and perform religious rituals. The satra also preserves ancient manuscripts, religious texts, and traditional Assamese art forms. Barpeta Satra is especially famous for its religious festivals such as Doul Utsav (Holi), Raas Festival, and Kirtan performances, which attract thousands of devotees and tourists every year. During these celebrations, the entire area becomes vibrant with devotional music, prayers, dramas, and cultural activities. The satra also helped in preserving classical Assamese traditions like Bhaona, a traditional form of religious drama introduced by Sankardeva. The peaceful environment and spiritual atmosphere make Barpeta Satra an important pilgrimage destination in Assam. Over the centuries, it has become a symbol of Assamese identity, unity, and cultural heritage. The institution continues to teach values of discipline, devotion, simplicity, and humanity. Today, Barpeta Satra remains one of the most respected religious centers in Northeast India and attracts historians, researchers, pilgrims, and tourists from different parts of the country.",
    images: [satra1, satra2],
    source: "(src: transindiatravels.com,villagesquare.in)",
  },
];

const facts = [
  "Majuli is the world's largest inhabited river island.",
  "Assam produces more than half of India's total tea.",
  "The Brahmaputra River is one of the few rivers in India with a masculine name.",
  "Kaziranga National Park is home to the endangered one-horned rhinoceros.",
  "The Ahom dynasty ruled Assam for nearly 600 years.",
  "Digboi Refinery is one of the oldest oil refineries in the world.",
  "Assam is known as the 'Gateway to Northeast India.'",
  "Assam is the only place in the world that produces golden Muga silk.",
  "Kamakhya Temple is one of the most important Shakti Peethas in India.",
  "Bihu is celebrated three times every year in Assam.",
  "Assam has rich wildlife including elephants, tigers, rhinos, and river dolphins.",
  "The tea gardens of Assam are among the largest in the world.",
  "Assam is famous for its traditional Bihu dance and music.",
  "Hajo is known for ancient temples and bell metal crafts.",
  "The rare golden langur is mainly found in Assam and Bhutan.",
  "Assamese cuisine uses very mild spices compared to other Indian cuisines.",
  "The 1950 Assam earthquake was one of the strongest earthquakes in India's history.",
  "Majuli is also famous for preserving Assamese satra culture and art.",
  "Assam has many wetlands that attract migratory birds every year.",
  "The name 'Assam' is believed to have come from the Ahom kingdom.",
];
const artGallery = [
  {
    title: "Assam Tea",
    emoji: "🍵",
    color: "#6F4E37",
    desc: "Famous worldwide for its strong flavor, grown in the tea gardens of Upper Assam",
    image: gAssamTea,
  },
  {
    title: "Khar",
    emoji: "🍲",
    color: "#8B7355",
    desc: "Traditional Assamese dish with a unique alkaline taste made using banana peel ash",
    image: gKhar,
  },
  {
    title: "Masor Tenga",
    emoji: "🐟",
    color: "#E8A44A",
    desc: "A tangy fish curry famous for its light and refreshing sour flavor",
    image: gMasorTenga,
  },
  {
    title: "Pitha",
    emoji: "🍡",
    color: "#D4A017",
    desc: "Traditional rice cake prepared during Bihu festivals, famous for its sweet taste",
    image: gPitha,
  },
  {
    title: "Duck Meat Curry",
    emoji: "🍛",
    color: "#C0522A",
    desc: "Popular in rural Assam, cooked with ash gourd or sesame seeds on special occasions",
    image: gDuckMeatCurry,
  },
  {
    title: "Aloo Pitika",
    emoji: "🥔",
    color: "#B5A642",
    desc: "Mashed potato dish famous for its smoky flavor and mustard oil seasoning",
    image: gAlooPitika,
  },
  {
    title: "Xaak aru Bhaji",
    emoji: "🥬",
    color: "#4A7C59",
    desc: "Leafy vegetable dishes famous for their healthy preparation with very few spices",
    image: gXaakBhaji,
  },
  {
    title: "Bamboo Shoot Pickle",
    emoji: "🎋",
    color: "#7B9E4E",
    desc: "A tribal delicacy famous for its strong aroma and unique fermented flavor",
    image: gBambooPickle,
  },
  {
    title: "Jolpan",
    emoji: "🍚",
    color: "#C9A96E",
    desc: "Traditional Assamese breakfast with flattened rice, curd, and jaggery",
    image: gJolpan,
  },
  {
    title: "Payas",
    emoji: "🍮",
    color: "#E8D5B7",
    desc: "Sweet rice pudding prepared during Assamese festivals, rich in milk and rice flavor",
    image: gPayas,
  },
];
