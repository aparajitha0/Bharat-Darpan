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
import rajasthanMap from "@assets/rajasthanMap.jpg";

// Festivals
const pushkarfair1 = "https://i.postimg.cc/ZKwJPvYP/image.png";
const gangaur1 = "https://i.postimg.cc/Gm9dX3HB/image.png";
const desert1 = "https://i.postimg.cc/HLyHCSw6/image.png";
const teej1 = "https://i.postimg.cc/D02KLntp/image.png";
const makar1 = "https://i.postimg.cc/WzXc7xV7/image.png";
const makar2 = "https://i.postimg.cc/SN1pY0Vg/image.png";
const makar3 = "https://i.postimg.cc/SKC0Pnqy/image.png";
const marwar1 = "https://i.postimg.cc/7PXFj8vD/image.png";
const marwar2 = "https://i.postimg.cc/ZR4QDjVC/image.png";
const marwar3 = "https://i.postimg.cc/rszQvHWQ/image.png";
const bkc1 = "https://i.postimg.cc/T2S9KCnM/image.png";
const bkc2 = "https://i.postimg.cc/ThMgCNcd/image.png";
const bkc3 = "https://i.postimg.cc/wvnwYVVp/image.png";
const bkc4 = "https://i.postimg.cc/yxqybN1B/image.png";
const bkc5 = "https://i.postimg.cc/v8qQf6md/image.png";

// Monuments / Historical Places
const jfort1 = "https://i.postimg.cc/CKngGvdm/image.png";
const ajmer1 = "https://i.postimg.cc/wxQdQRxP/image.png";
const banswara1 = "https://i.postimg.cc/526dJP5F/image.png";
const jodhpur1 = "https://i.postimg.cc/jj7pwLFx/image.png";
const jaipur1 = "https://i.postimg.cc/rm9YxWGJ/image.png";
const udaipur1 = "https://i.postimg.cc/2j2K5QSj/image.png";
const bikaner1 = "https://i.postimg.cc/3JNb0kk1/image.png";
const pushkar1 = "https://i.postimg.cc/RZnsG2Qq/image.png";
const meh1 = "https://i.postimg.cc/ZqtfQjVV/image.png";
const meh2 = "https://i.postimg.cc/q7smHnFJ/image.png";
const meh3 = "https://i.postimg.cc/zBqxzvmk/image.png";
const ran1 = "https://i.postimg.cc/SsVDJ4kh/image.png";
const ran2 = "https://i.postimg.cc/wMvFNrjD/image.png";
const ran3 = "https://i.postimg.cc/MZP9wz9M/image.png";
const dil1 = "https://i.postimg.cc/L6JN6GWV/image.png";
const dil2 = "https://i.postimg.cc/zX4pL0ZZ/image.png";
const jm1 = "https://i.postimg.cc/FHcp03NL/image.png";
const jm2 = "https://i.postimg.cc/Tw2c8smn/image.png";
const chit1 = "https://i.postimg.cc/kGBFGtTM/image.png";
const chit2 = "https://i.postimg.cc/sfN48w2Z/image.png";
const chit3 = "https://i.postimg.cc/GhTx1GBg/image.png";
const chit4 = "https://i.postimg.cc/K8XrcjBR/image.png";
const chand1 = "https://i.postimg.cc/wjh51zQG/image.png";
const chand2 = "https://i.postimg.cc/xdnvHZsD/image.png";

// Art Gallery — Dance Forms
const gGhoomarDance = "https://i.postimg.cc/MHN24Vc2/image.png";
const gKalbeliaDance = "https://i.postimg.cc/rw62NGXZ/image.png";
const gBhavaiDance = "https://i.postimg.cc/HLzGmfJb/image.png";
const gKachhiGhodiDance = "https://i.postimg.cc/76tpG0n2/image.png";
const gChariDance = "https://i.postimg.cc/2yqg4y0K/image.png";
const gGairDance = "https://i.postimg.cc/D0tH5hD7/image.png";

// Art Gallery — Cuisines
const gDalBaatiChurma = "https://i.postimg.cc/8k32Td5s/image.png";
const gGatteKiSabzi = "https://i.postimg.cc/mgWKHbC8/image.png";
const gKerSangri = "https://i.postimg.cc/N0gVdpNb/image.png";
const gBajraRoti = "https://i.postimg.cc/76RWYDqd/image.png";
const gLaalMaas = "https://i.postimg.cc/J7fRpCjc/image.png";

// Art Gallery — Image Gallery
const gHawaMahal = "https://i.postimg.cc/CKx0RhVR/image.png";
const gWomenDress = "https://i.postimg.cc/pT9tBsTc/image.png";
const gCamelSafari = "https://i.postimg.cc/VvnQx5X7/image.png";
const gAmerFort = "https://i.postimg.cc/sDPCKQj1/image.png";
const gCityPalaceUdaipur = "https://i.postimg.cc/Y0cTzkT2/image.png";
const gFamousFoods = "https://i.postimg.cc/N0SnQBsb/image.png";
const gPhadPainting = "https://i.postimg.cc/xCL6YmFM/image.png";
const gMaandSinging  = "https://i.postimg.cc/9MPYshrZ/image.png";
const gLacBangles = "https://i.postimg.cc/L56L7gcx/image.png";
const gMorjis = "https://i.postimg.cc/3rmw5w8m/image.png";
const gGotaPatti = "https://i.postimg.cc/qMcgnvWz/image.png";


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
export default function RajasthanPage() {
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
                Rajasthan
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Kings
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Jaipur" },
                  { label: "Population", value: "6.86 Crore" },
                  { label: "Area", value: "3,42,239 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                  { label: "Language", value: "Hindi, Rajasthani" },
                  { label: "Districts", value: "50 Districts" },
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
              Jaipur
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Rajasthan — Pink City
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Rajasthan" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(rajasthanMap, "Map of Rajasthan")}
            >
              <img
                src={rajasthanMap}
                alt="Map of Rajasthan"
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
              Rajasthan is a  state in northwestern India . It is the largest Indian state by area and the seventh largest by population. It covers 342,239 square kilometres (132,139 mi2) or 10.4 per cent of India's total geographical area. It is on India's northwestern side, where it comprises most of the wide and inhospitable Thar Desert (also known as the Great Indian Desert) and shares a border with the Pakistani provinces of Punjab to the northwest and Sindh to the west, along the Sutlej-Indus River valley. It is bordered by five other Indian states: Punjab to the north; Haryana and Uttar Pradesh to the northeast; Madhya Pradesh to the southeast; and Gujarat to the southwest.
            </p>
            <p className="text-foreground">
              The geographic features of Rajasthan are the Thar Desert and the Aravalli Range, which runs through the state from southwest to northeast, almost from one end to the other, for more than 850 kilometres (530 mi). Mount Abu lies at the southwestern end of the range, separated from the main ranges by the West Banas River. Although a series of broken ridges continues into Haryana in the direction of Delhi where it can be seen as outcrops in the form of the Raisina Hill and the ridges farther north. About three-fifths of Rajasthan lies northwest of the Aravallis, leaving two-fifths on the east and south direction.
            </p>
            <p className="text-foreground">
             The Aravalli Range runs across the state from the southwest peak Guru Shikhar (Mount Abu), which is 1,722 metres (5,650 ft) in height, to Khetri in the northeast. This range divides the state into 60% in the northwest of the range and 40% in the southeast. The northwestern portion of Rajasthan is generally sandy and dry. Most of this region is covered by the Thar Desert which extends into adjoining portions of Pakistan.
            </p>
            <p className="text-foreground">
              The Northwestern thorn scrub forests lie in a band around the Thar Desert, between the desert and the Aravallis. This region receives less than 400  mm of rain annually. Temperatures can sometimes exceed 45 °C in the summer months and drop below freezing point in the winter. The Godwar, Marwar, and Shekhawati regions lie in the thorn scrub forest zone, along with the city of Jodhpur. 
            </p>
            <p className="text-foreground">
              The Luni River and its tributaries are the major river system of Godwar and Marwar regions, draining the western slopes of the Aravallis and emptying southwest into the great Rann of Kutch wetland in neighbouring Gujarat. This river is saline in the lower reaches and remains potable only up to Balotara in Barmer district. The Ghaggar River, which originates in Haryana, is an intermittent stream that disappears into the sands of the Thar Desert in the northern corner of the state and is seen as a remnant of the primitive Sarasvati river. 
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Rajasthan, the "Land of Kings," is India's largest state by area, located in the northwestern part of the country. It is largely defined by the expansive Thar Desert and is internationally celebrated for its rich Rajput heritage, magnificent forts, and vibrant culture.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Rajasthan, mapsofindia.com)
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
        <Section title="Facts about Rajasthan" icon="💡">
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
            Scroll horizontally to explore Rajasthan's iconic foods, crafts,
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
    name: "Pushkar Fair",
    tagline: "",
    description:
      "The Pushkar Fair, also called the Pushkar Camel Fair or locally as Kartik Mela or Pushkar ka Mela is an annual multi-day livestock fair and cultural fête held in the town of Pushkar near Ajmer city in Ajmer district in (Rajasthan, India). The fair starts with the Hindu calendar month of Kartik and ends on the Kartik Purnima, which typically overlaps with late October and early November in the Gregorian calendar. In 1998, over 1 million visitors came to Pushkar throughout the year. The Pushkar fair alone attracts over 200,000 visitors. The Pushkar fair is one of India's largest camel, horse and cattle fairs. Apart from the trading of livestock, it is an important pilgrimage season for Hindus to the Pushkar lake. Pushkar fair has also become a significant tourist attraction for domestic and international travellers, given the cooler season, the abundance of colourful cultural themes. Cultural events and competitions include dances, tug of war between women teams as well as men teams, the 'matka phod', 'longest moustache' competition, bridal competition, camel races and others. Thousands of people go to the banks of the Pushkar Lake where the fair takes place. Men trade their livestock, which includes camels, horses, cows, sheep and goats. Rural families shop at the handicraft stalls full of bracelets, clothes, textiles and fabrics. A camel race starts off the festival, with music, songs and exhibitions to follow. Between these events, the most waited for is the test of how the camel is able to bring the items. In order to demonstrate, the men go up on the group of camels one after another.",
    images: [pushkarfair1],
    source: "(src:Footloose holidays)",
  },
  {
    name: "Gangaur",
    tagline:
      "",
    description:
      "Gangaur is a Hindu festival celebrated in the Indian states of Rajasthan, Haryana, Fazilka District of Punjab, the regions of Malwa, Nimar (Manawar, Barwani, Khargone, Khandwa) of Madhya Pradesh and the Braj and Bundelkhand regions of Uttar Pradesh. It is also celebrated in some parts of Gujarat and West Bengal. A variation of the same festival known as Chaitra Gauri Vrat is observed on the same day in the states of Maharashtra and northern Karnataka. Another variation called Saubhagya Gauri Vratam is observed in the states of Telangana and Andhra Pradesh. Gangaur is a colourful festival which is one of the most important celebrations of the people of Rajasthan and the Fazilka district of Punjab. It is observed throughout the state with great fervor and devotion by Hindu womenfolk who worship the goddess Gauri (Parvati), the consort of Shiva during the Hindu month of Chaitra (March–April). It is the celebration of spring, harvest, marital fidelity, conjugal blessedness, and childbearing. Unmarried women worship the goddess in hopes of being blessed with a good husband, while married women do so for the welfare, health, and long life of their husbands",
    images: [gangaur1],
    source: "(src: wikipedia)",
  },
  {
    name: "Jaisalmer Desert Festival",
    tagline:
      "",
    description:
      "The Jaisalmer Desert Festival is a vibrant, annual cultural event that takes place in the heart of the Thar Desert, Rajasthan, usually in February. Celebrating the rich heritage of the region, the festival spans over three days, transforming the golden sands into a colorful extravaganza. Visitors can witness traditional Rajasthani folk music and dance performances, including the mesmerizing Ghoomar and Kalbeliya dances. One of the highlights is the camel parade, showcasing beautifully adorned camels in a lively procession. The festival also features unique competitions such as the turban-tying contest, mustache competition, and camel races, which draw significant attention. The event concludes with a breathtaking display of fireworks, lighting up the desert sky. The Jaisalmer Desert Festival is a true spectacle of Rajasthani culture, offering a captivating experience for both domestic and international tourists, making it a must-visit event for anyone traveling to Rajasthan.",
    images: [desert1],
    source: "(src: desertfestivaljaisalmer.com)",
  },
  {
    name: "Teej Festival",
    tagline:
      "",
    description:
      "Teej is a collective term for three Hindu festivals dedicated to the goddess Parvati and her consort Shiva. It is mainly celebrated by married women and unmarried girls, especially in Nepal and North India, to pray for the long life of their husband or future husband and to welcome the arrival of the monsoon through singing, swinging, dancing, joyous celebration, pūjā, and often fasting. Tīja collectively refers to three festivals: Haryālī Tīja, Kajari Tīja, and Hartālikā Tīja. Haryālī Tīja (literally, green Tīja), also known as Sindhārā Tīja, Chhotti Tīja, Śrāvaṇa Tīja, or Sāvana Tīja, falls on the third day after the new moon in the month of Śrāvaṇa. It marks the day when Śiva consented to Pārvatī’s wish to marry him. Women visit their parental homes, prepare swings, and celebrate with song and dance. Kajari Tīja (literally, dark Tīja), also known as Baṛī Tīja, is celebrated 15 days after Haryālī Tīja during the dark (waning) phase of the moon. Hartālikā Tīja falls one lunar month after Haryālī Tīja on the third day after the new moon in the month of Bhādrapada. It commemorates the occasion when Pārvatī encouraged her friends to abduct her to avoid marriage with Viṣṇu, which her father Himālaya had arranged. Married women observe nirjala vrata (a fast without water) on this day for the well-being of their husbands.",
    images: [teej1],
    source: "(src: shutterstock)",
  },
  {
    name: "Makar Sankranti",
    tagline:
      "The sky turns into a battlefield of colour as thousands of kites fill the air.",
    description:
      "In Rajasthan, Makar Sankranti is a spectacularly vibrant harvest festival celebrated every January, where the state's iconic blue winter skies transform into a colorful canvas of thousands of competing paper kites (Patang Bazi). Entire families gather on their rooftops from dawn to dusk, enjoying lively music, engaging in playful friendly rivalries to cut down passing kites, and lighting up the night sky with paper lanterns called tukals. Beyond the soaring kites, the festival is deeply rooted in local hospitality and spirituality; people start the day with holy dips in sacred waters like the Pushkar Lake, engage in Gau Seva (feeding cows), and practice anonymous charity (Gupt Daan). No Rajasthani Sankranti is complete without indulgence in local winter delicacies made of sesame and jaggery—such as til ke laddoo and gajak—alongside regional specialties like the thread-like sweet feeni and spicy dal pakodis, making it a sensory celebration of community, warmth, and the arrival of brighter, longer days.",
    images: [makar1, makar2, makar3],
    source: "(src: news,cgtn.com, dzyfurnitures.com, rajasthantourplanner.com)",
  },
  {
    name: "Marwar Festival",
    tagline:
      "Relive the Chivalry, Dance to the Legends!",
    description:
      "The Marwar Festival takes place over two days during the spectacular full moon of Sharad Purnima, usually falling in September or October in the city of Jodhpur. Originally known as the Maand Festival, this grand event is dedicated entirely to honoring the courage, chivalry, and folklore of Rajasthan's historic rulers and local warriors. Iconic heritage monuments like the majestic Mehrangarh Fort and the sprawling lawns of Umaid Bhawan Palace serve as dramatic backdrops for powerful artistic showcases. Renowned desert musicians sing legendary ballads of ancient heroes, while folk dancers perform complex, swirling routines like the Ghoomar and the rhythmic Dandi Gair. The festival also features lively community competitions, including competitive turban-tying, mustache-growing contests, and dramatic camel tattoo shows that keep the regional legacy alive.",
    images: [marwar1, marwar2, marwar3],
    source: "(src: firstpots, travelogyindia.com, pixels.com)",
  },
  {
    name: "Bikaner Camel Festival",
    tagline:
      "Where Desert Ships Dance and Traditions Shine!",
    description:
      "The Bikaner Camel Festival is a vibrant annual event organized by the Department of Tourism in January, dedicated solely to celebrating the 'ship of the desert' for its centuries of service in commerce and military defense. The celebration starts with a spectacular royal procession from the historic Junagarh Fort, where hundreds of majestic camels parade in heavy silver necklaces, colorful embroidered bridles, and jingling anklets. Handlers spend months preparing for the festival’s unique competitions, which include camel races, synchronized camel dances, and an incredible camel fur-cutting contest where intricate geometric art is shaved directly into the animal's coat. The days wrap up on the sand dunes with mesmerizing fire dances performed over glowing charcoal beds, perfectly encapsulating the fiery and enduring spirit of Rajasthan.",
    images: [bkc1, bkc2, bkc3, bkc4, bkc5],
    source: "(src: theindia.co, wikipedia,mediaindia.com, matadornetwork, indiavviajes.com)",
  },
];

const historicalPlaces = [
  {
    name: "Jaisalmer Fort",
    description:
      "Built in 1156 by King Rawal Jaisal, Jaisalmer Fort dominates the countryside in the northwestern corner of Rajasthan. The fort once overlooked busy trade routes, and over 3,000 people continue to live and do business within its walls. This continued use, particularly the introduction of modern plumbing, has accelerated the complex’s deterioration.  As tourism increased and homes were converted into guest houses in the twentieth century, water drainage became a problem for the fort. The growing water usage at a site built for a dry climate led to water seepage into the soil under the fort, causing 87 of its 469 structures to collapse. Stronger and more frequent monsoons exacerbated this damage. After two bastions and a large section of the fort’s pitching wall collapsed during an intense rainstorm in 1999, WMF and the Archaeological Survey of India (ASI) signed a memorandum of understanding to prepare a conservation plan and study how to stabilize the fort. These studies revealed that water seepage was dangerously destabilizing the clay-rich soils underneath the complex. The team’s findings highlighted the vital importance of creating a comprehensive water management system that included separate storm water and sewage lines. Building on WMF’s structural studies, the government of Rajasthan and Asia Development Bank launched the Rajasthan Urban Infrastructure Program to upgrade the complex’s drainage systems. An earthquake struck Rajasthan in April 2009, causing cracking and deformation in the King’s Palace. The tremor exacerbated the building’s already-poor condition, leaving it vulnerable to a potentially catastrophic collapse. In 2010, WMF supported the emergency stabilization of the structure to safeguard this iconic part of the complex.",
    images: [jfort1],
    source: "(src: Wtrawell.in)",
  },
  {
    name: "Ajmer",
    description:
      "Ajmer, city, central Rajasthan state, northwestern India. The city is on the lower slopes of Taragarh Hill, on the summit of which stands a fortress.Ajmer was founded by Ajayadeva, an 11th-century Rajput ruler. It was annexed to the Delhi sultanate’s Slave dynasty in 1193. Upon payment of tribute it was returned to its Rajput rulers, but it was taken in 1556 by the Mughal emperor Akbar (reigned 1556–1605). In 1770 it was annexed by the Marathas, after which the area was a continual Rajput-Maratha battleground until it was ceded to the British in 1818. In 1878 the region of Ajmer was constituted as a chief commissioner’s province known as Ajmer-Merwara and was divided into two separate tracts. The larger of these comprised Ajmer and Merwara subdivisions; the smaller, to the southeast, comprised Kekri subdivision. Ajmer became a part of the state of Rajasthan in 1956. Ajmer lies in a hilly region that forms part of the Aravalli Range and its outliers and is drained by headstreams of the Luni River flowing southwestward and by tributaries of the Banas River flowing eastward. Architectural monuments include an ancient Jaina temple (converted c. 1200 into a mosque), the white marble tomb complex of the Muslim saint Muʿīh-al-Dīn Chishtī (died 1236), and the palace of Akbar, now a museum. The city was a Muslim military base used in operations against the Rajputs—the warrior people who ruled the historic region of Rajputana. To the north lies Ana Sagar, a lake created in the 11th century, on the shores of which stand marble pavilions built by the Mughal emperor Shah Jahān.",
    images: [ajmer1],
    source: "(src: wikimedia.org)",
  },
  {
    name: "Banswara",
    description:
      "Banswara is a city in the Banswara district in southern Rajasthan, India. The name, Banswara, came from king 'Bansiya Bhil'. Banswara is also known as 'City of a Hundred Islands', 'The Green City', which is often referred to as 'Cherrapunji of Rajasthan', because it receives the most rain in Rajasthan, as well as for the numerous islands in the Mahi River, often referred to as 'Mahati', an alternate name for Mahi River, in Vayu Purana text, which flows through the city. ",
    images: [banswara1],
    source: "(src: Shutterstock)",
  },
  {
    name: "Jodhpur",
    description:
      "Jodhpur is the second-largest city of the north-western Indian state of Rajasthan, after its capital Jaipur. As of 2025, the city has a population of 1.6 million. It serves as the administrative headquarters of the Jodhpur district and Jodhpur division. It is the historic capital of the Kingdom of Marwar, founded in 1459 by Rao Jodha, a Rajput chief of the Rathore clan On 11 August 1947, 4 days prior to the Indian independence, Maharaja Hanwant Singh the last ruler of Jodhpur state signed the Instrument of Accession and merged his state in Union of India. On 30 March 1949, it became part of the newly formed state of Rajasthan, which was created after merging the states of the erstwhile Rajputana. Jodhpur is a famous tourist spot with a palace, fort, and temples, set in the stark landscape of the Thar Desert. It is also known as the 'Blue City' due to the dominant color scheme of its buildings in the old town. The old city circles the Mehrangarh Fort and is bounded by a wall with several gates. Jodhpur lies near the geographic centre of the Rajasthan state, which makes it a convenient base for travel in a region much frequented by tourists.",
    images: [jodhpur1],
    source: "(src: Alamy)",
  },
  {
    name: "Jaipur",
    description:
      "Jaipur is the capital and the largest city of the north-western Indian state of Rajasthan. As of 2011, the city had a population of 3.1 million, making it the tenth most populous city in the country. Located 268 km (167 miles) from the national capital New Delhi, Jaipur is also known as the Pink City due to the dominant colour scheme of its buildings in the old city. Jaipur was founded in 1727 by Sawai Jai Singh II, the Kachhwaha Rajput ruler of Amer, after whom the city is named. It is one of the earliest planned cities of modern India, designed by Vidyadhar Bhattacharya. During the British colonial period, the city served as the capital of Jaipur State. After Indian independence in 1947, Jaipur became the capital of the newly formed state of Rajasthan in 1949. Jaipur is a popular tourist destination in India, forming a part of the Western Golden Triangle tourist circuit along with Delhi and Agra. The city serves as a gateway to other tourist destinations in Rajasthan, such as Jodhpur, Jaisalmer, Bikaner, Udaipur, Bundi, Kota, and Mount Abu; it has two World heritage sites, Amer Fort, Hawa Mahal and Jantar Mantar. On 6 July 2019, the city was placed on the World Heritage Cities list. It is also known as the Paris of India. Due to its beauty, C.V. Raman called it the 'Island of Glory'.",
    images: [jaipur1],
    source: "(src: wikipedia)",
  },
  {
    name: "Udaipur",
    description:
      "Udaipur also known as the 'City of Lakes' is a major city, municipal corporation and the administrative headquarters of the Udaipur district in the Indian state of Rajasthan. It is the historic capital of the kingdom of Mewar in the former Rajputana Agency. It was founded in 1559 by Maharana Udai Singh II of the Sisodia clan of Rajput, when he shifted his capital from the city of Chittorgarh to Udaipur after Chittorgarh was besieged by Akbar. It remained as the capital city till 1818 when it became a British princely state and thereafter the Mewar province became a part of Rajasthan when India gained independence in 1947. Udaipur is a popular tourist destination and is known for its history, culture, scenic locations and the Rajput-era palaces. It is popularly known as the 'City of Lakes'  because of its sophisticated lake system. It has seven lakes surrounding the city. Five of the major lakes, namely Fateh Sagar Lake, Lake Pichola, Swaroop Sagar Lake, Rangsagar and Doodh Talai Lake have been included under the restoration project of the National Lake Conservation Plan (NLCP) of the Government of India.[8] Besides lakes, Udaipur is also popular for its massive historic forts and palaces, museums, galleries, natural locations and gardens, architectural temples, as well as traditional fairs, festivals and structures..",
    images: [udaipur1],
    source: "(src: unsplash.com)",
  },
  {
    name: "Bikaner",
    description:
      "Bikaner is located in the northwestern state of Rajasthan, India. It lies in the Thar Desert region, also known as the Great Indian Desert. Bikaner has a rich and storied history that dates back several centuries. The earlier name was ‘Jungladesh’ or the kingdom of jungles. Bikaner has long been a major hub for trade and business, mostly because of its advantageous location along the caravan routes that link India and Central Asia. The city flourished as a centre for the camel trade and was essential in enabling trade between Indian merchants and traders from other countries. Bikaner’s current name is owed to Rao Bika, a Rajput prince and the son of Rao Jodha, the founder of Jodhpur, who founded it in 1488. Today, Bikaner is renowned for its rich cultural heritage, historical landmarks, and vibrant traditions. The city is famous for its majestic forts, opulent palaces, intricately carved temples, and bustling markets. The city is also known for its delectable cuisine, especially its mouthwatering snacks like bhujia and rasgulla.",
    images: [bikaner1],
    source: "(src: shikhar travels)",
  },
  {
    name: "Pushkar",
    description:
      "Pushkar is an ancient temple town located on the shore of Pushkar Lake near Ajmer City and headquarters of Pushkar tehsil in the Ajmer district in the Indian state of Rajasthan. It is situated about 10 km (6.2 mi) northwest of Ajmer and about 150 km (93 mi) southwest of Jaipur. The town lies at an elevation of about 510 metres (1,670 ft) and is surrounded by hills on three sides, with Nag Pahar (Snake Mountain) forming a natural boundary between Ajmer and Pushkar. Pushkar is among the oldest existing cities in India. According to Hindu tradition, Lord Brahma, regarded as the creator of the universe, dropped a lotus flower on the ground, which led to the formation of a lake. The place where the lotus fell came to be known as Pushkar, after the Sanskrit word for lotus. The town is home to one of the few temples dedicated to Brahma, and a pilgrimage to Pushkar is considered highly meritorious within Hinduism. According to Hindu scriptures, Pushkar Lake is regarded as Tirtha Raj, or the 'king of pilgrimage sites'. It is believed that no pilgrimage is complete without bathing in its sacred waters. The lake is semi-circular in shape, with an estimated depth of 8–10 metres (26–33 ft), and is surrounded by 52 ghats. About 400 blue-colored temples surround the holy lake. It makes the atmosphere more spiritual and divine as one can listen to magical chants from temples along its perimeter. ",
    images: [pushkar1],
    source: "(src: Rajasthan Tourism)",
  },
  {
    name: "Merhrangharh Fort",
    description:
      "Mehrangarh Fort is a massive 15th-century hilltop fortress overlooking Jodhpur, Rajasthan, India. Rising about 400 feet (120 m) above the city, it exemplifies Rajput military architecture and remains one of India’s best-preserved and most visited forts, offering sweeping views of Jodhpur’s “Blue City” below. Rao Jodha, founder of Jodhpur and ruler of the Rathore dynasty, built Mehrangarh on the rocky hill Bhakur-cheeria (“Mountain of Birds”) in 1459 to establish a secure new capital. Legends recount the hill’s resident hermit Cheeria Nathji cursing the site with drought after eviction; to counter it, a man named Raja Ram Meghwal was buried alive in the foundation as a ritual offering . Successive rulers expanded the fort over 500 years, blending Rajput architecture and Mughal-era influences. The fort’s red-sandstone ramparts rise 6 – 36 m thick, merging with the underlying rock . Inside lie ornate palaces: Moti Mahal (Pearl Palace), Phool Mahal (Flower Palace), Sheesh Mahal (Mirror Palace), and Takhat Vilas, all showcasing carved jharokhas, gilded ceilings, and mirrorwork . The seven historic gates—most notably Jai Pol and Loha Pol (still bearing sati handprints)—mark victories and dynastic events. The Mehrangarh Museum displays palanquins, elephant howdahs, miniature paintings, royal costumes, weapons, and the Turban Gallery. Adjacent is the Chamunda Mataji Temple, the royal family’s patron shrine . The fort also hosts the Rajasthan International Folk Festival and offers adventure zip-lining by Flying Fox. Accessible by road or a steep walk from Jodhpur’s old city, the site includes cafés, audio guides, and elevators for visitors. Typical entry fees are about ₹200 for Indians and ₹600 for foreign tourists . The best time to visit is October to Ma Declared a National Geological Monument by the Geological Survey of India, the hill represents the region’s ancient igneous formations . From its ramparts, Mehrangarh commands one of the most iconic panoramas in Rajasthan—Jodhpur’s indigo-washed houses spreading across the Thar Desert.rch, when the weather is pleasant and the sunsets cast a golden glow on the battlements.",
    images: [meh1, meh2, meh3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Ranthambore Fort & Tiger Reserve",
    description:
      "Ranthambore Fort is a historic hill fort located inside Ranthambore National Park near Sawai Madhopur. It is one of the six Hill Forts of Rajasthan inscribed as a UNESCO World Heritage Site. The fort’s commanding position over dense forest made it a critical stronghold in medieval North India. Constructed around the 10th century CE, Ranthambore Fort was initially associated with the Nagil Jat rulers and later became the seat of the Chauhan dynasty under rulers such as Rao Hammir Deo Chauhan. Its strategic hilltop location made it a center of resistance against several Delhi Sultanate invasions, including those by Alauddin Khalji in the 13th century. The fort spans roughly 4 square kilometers and features massive stone walls, gateways, stepwells, and temples built from local sandstone. Its design blends Rajput military architecture with natural defenses provided by cliffs and dense forest. The Trinetra Ganesh Temple within the fort remains an active pilgrimage site. Surrounded by the dry deciduous forests of Ranthambore National Park, the fort overlooks tiger-inhabited valleys and lakes such as Padam Talab. The combination of heritage architecture and wildlife habitat exemplifies Rajasthan’s synthesis of nature and history. Ranthambore Fort attracts historians, devotees, and wildlife tourists alike. Its UNESCO designation recognizes its architectural merit and role in illustrating Rajput military prowess. Managed by the Archaeological Survey of India, it remains a prominent symbol of Rajasthan’s medieval heritage and conservation landscape.",
    images: [ran1, ran2, ran3],
    source: "(src: wikipedia, ancientorigins, wikipedia commons)",
  },
  {
    name: "Dilwara Temples",
    description:
      "The Dilwara Temples are a group of five intricately carved Jain temples located near Mount Abu in Rajasthan, India. Built between the 11th and 13th centuries, they are celebrated for their exquisite marble craftsmanship and serve as a major center of pilgrimage for the Jain community. The temples exemplify the Māru-Gurjara style, featuring intricately carved ceilings, domes, and pillars. Each temple—Vimal Vasahi, Luna Vasahi, Pithalhar, Khartar Vasahi, and Mahavir Swami—is crafted from pure white marble. The detailing includes floral motifs, mythological scenes, and finely sculpted figures, reflecting exceptional artistry and devotion. Commissioned by Jain ministers and merchants of the Solanki dynasty in Gujarat and Rajasthan, the temples demonstrate the community’s prosperity and faith during the medieval period. Vimal Vasahi, the oldest (1031 CE), honors the first Tirthankara, Adinatha, while Luna Vasahi (1230 CE) is dedicated to Neminatha and known for its ornate ceilings. The Dilwara Temples remain a major pilgrimage site for Jains and a symbol of India’s medieval artistic achievement. They also attract visitors of varied faiths for their architectural perfection, serene environment, and historical importance within Jainism’s heritage. Managed by the Jain community, the temples are maintained under heritage protection. Photography is restricted inside to preserve the delicate marble work. The complex continues to be both an active place of worship and a monument of national artistic importance.",
    images: [dil1, dil2],
    source: "(src: )traveltringles.com, wikipedia)",
  },
  {
    name: "Jantar Mantar",
    description:
      "Jantar Mantar in Jaipur, Rajasthan, is an 18th-century astronomical observatory built by Maharaja Sawai Jai Singh II. It is the largest and best-preserved of his five observatories across northern India and is designated a UNESCO World Heritage Site for its scientific and architectural significance. The complex demonstrates the fusion of art, science, and religion in pre-modern India’s study of celestial motion. Constructed between 1727 and 1734, the observatory reflects Jai Singh II’s ambition to refine astronomical data and calendar calculations. A learned astronomer himself, he synthesized Hindu, Islamic, Persian, and European techniques. His instruments corrected existing zij (tables) under the Mughal emperor Muhammad Shah. Jaipur’s Jantar Mantar, the most extensive, continues to serve as a teaching site for positional astronomy. The observatory contains 19 large geometric instruments built from stone and marble to measure time, predict eclipses, and observe celestial bodies. Its most famous structure, the Samrat Yantra, is the world’s largest stone sundial and can measure time with remarkable accuracy. Other important instruments, such as the Jai Prakash Yantra and Ram Yantra, were designed to study planetary positions and celestial coordinates. These structures were precisely aligned with Jaipur’s latitude, reflecting the advanced astronomical knowledge of the 18th century. Jantar Mantar exemplifies the sophistication of Indian observational astronomy before modern telescopes. It bridges scientific inquiry and royal patronage, illustrating how empirical measurement served astrology and governance. Restored in the 20th century by the Archaeological Survey of India and the Government of Rajasthan, it now functions as a museum and cultural attraction adjoining the City Palace, Jaipur and Hawa Mahal. Located in Jaipur’s Pink City (Gangori Bazaar area), the site is accessible via auto-rickshaw or taxi. Entry costs ≈ INR 50 for Indian visitors and INR 200 for foreign tourists. The best visiting months are October to March to avoid summer heat; guided tours and evening light-and-sound shows enhance the experience.",
    images: [jm1, jm2],
    source: "(src: Wikiedpia, alightindia.com)",
  },
  {
    name: "Chittorgrah Fort",
    description:
      "Chittorgarh Fort is a UNESCO World Heritage Site and one of India’s largest and most storied hill forts, located in Chittorgarh, Rajasthan. Perched on a 180-meter hill and sprawling across about 700 acres, it epitomizes Rajput valor, resistance, and architectural grandeur. The fort is central to the legacy of the Mewar dynasty and remains a symbol of Rajputana pride and sacrifice. The fort’s origins trace to the 7th century, with major contributions by the Maurya and Sisodia rulers of Mewar. It endured three historic sieges—by Alauddin Khilji (1303 CE), Bahadur Shah of Gujarat (1535 CE), and Akbar (1568 CE)—each followed by acts of Jauhar, mass self-immolation by Rajput women to preserve honor. These events enshrined Chittorgarh as a sacred emblem of courage and sacrifice in Rajput folklore. Chittorgarh Fort is protected by seven massive gates, known as pols, built along the approach road for strong defense. The fort contains several important monuments, including the Vijay Stambh, a 37-meter-high nine-storied Tower of Victory built by Rana Kumbha in the 15th century to celebrate his victory over Malwa. Another notable structure is the Kirti Stambh, a 12th-century Jain tower dedicated to Adinatha. The Rana Kumbha Palace, the largest palace complex inside the fort, is believed to be the birthplace of Maharana Pratap. The fort also includes Rani Padmini’s Palace, associated with the legendary story of Queen Padmini and Alauddin Khilji’s siege. Temples such as the Meera Temple and Kalika Mata Temple reflect the spiritual importance of the fort, while the Gaumukh Reservoir, a sacred spring-fed water tank, highlights the fort’s advanced self-sustaining design. Chittorgarh Fort remains a living archive of Rajput ethos—its ruins, temples, and commemorative towers narrate stories of heroism, devotion, and artistry that continue to shape Rajasthan’s identity and draw visitors from around the world.",
    images: [chit1, chit2, chit3, chit4],
    source: "(src: holidify.com, theprakritihistory.com, windows10spotlight.com, dreamstime.com)",
  },
  {
    name: "Chand Baori",
    description:
      "Chand Baori is a monumental stepwell located in the village of Abhaneri, Rajasthan, India. Built over a thousand years ago, it is one of the deepest and most architecturally striking stepwells in the world, showcasing the ingenuity of ancient Indian water-harvesting systems and design. The stepwell descends 13 stories in a precise, symmetrical arrangement of triangular steps forming a mesmerizing geometric pattern. Three sides are lined with descending flights of steps, while the fourth side features a multi-storied pavilion with carved jharokhas (balconies), galleries, and a resting area for royalty. The design allowed easy access to groundwater during arid seasons and served as a communal gathering place. Built during the reign of King Chanda between the 8th and 9th centuries, Chand Baori reflects the importance of water conservation in Rajasthan’s semi-arid environment. It also served a social and religious role, often associated with the nearby Harshat Mata Temple, dedicated to the goddess of joy and happiness. The stepwell’s cool, shaded depths made it a respite from the desert heat. Today, Chand Baori is protected under the Archaeological Survey of India and is a prominent tourist attraction. Visitors are drawn to its intricate geometry and well-preserved condition. It has also featured in several films and documentaries, highlighting its status as an architectural marvel of early medieval India.",
    images: [chand1, chand2],
    source: "(src: wikipedia, wendywutours.co.uk)",
  },
];

const facts = [
  "The Thar Desert covers approximately 61% to 62% of Rajasthan's total geographical area. It accounts for the vast majority of the state's western landscape.",
  "It is the largest state by area.",
  "Traditional Rajasthani attire is colorful to contrast with the desert landscape.",
  "Jaipur (The Pink City): Practically all buildings in the historic core are painted in terracotta pink, a tradition started in 1876 to welcome Britain's Prince Albert.",
  "Jodhpur (The Blue City): Houses surrounding the massive Mehrangarh Fort are painted striking shades of indigo blue to keep interiors cool and deter termites.",
  "Udaipur (The White City): Renowned for its dazzling white marble palaces gleaming across a network of beautiful artificial lakes.",
  "Jaisalmer (The Golden City): Built entirely out of yellow sandstone, the city radiates a brilliant golden hue against the backdrop of the Thar Desert.",
  "The perimeter wall of the magnificent Kumbhalgarh Fort extends over 36 kilometers. It is the longest continuous wall on Earth, second only to the Great Wall of China.",
  "Local folklore strongly suggests that Mandodari, the chief queen of the mythological king Ravana from the Hindu epic Ramayana, was born in Mandore, Rajasthan",
  "The distinct Karni Mata Temple in Deshnoke houses more than 25,000 revered black rats. Spotting a rare white rat among the crowds is considered an omen of extreme good fortune.",
  "The ancient village of Kuldhara near Jaisalmer has sat completely abandoned since the 19th century. Legend says its entire population vanished in a single night to escape an oppressive minister, leaving behind a curse that prevents anyone from ever resettling it.",
];

const artGallery = [
{
    title: "Ghoomar Dance",
    emoji: "💃",
    color: "#C2185B",
    desc: "Graceful twirling dance performed by Rajasthani women in swirling skirts during royal ceremonies and festivals",
    image: gGhoomarDance,
  },
  {
    title: "Kalbelia Dance",
    emoji: "🐍",
    color: "#4527A0",
    desc: "Sensuous snake-charmer dance of the Kalbelia tribe, recognized by UNESCO as Intangible Cultural Heritage",
    image: gKalbeliaDance,
  },
  {
    title: "Bhavai Dance",
    emoji: "🏺",
    color: "#E65100",
    desc: "Breathtaking pot-balancing dance where performers balance multiple brass pots on their heads while dancing on sword tips",
    image: gBhavaiDance,
  },
  {
    title: "Kachhi Ghodi Dance",
    emoji: "🐴",
    color: "#1565C0",
    desc: "Colorful folk dance from Shekhawati where performers ride decorated dummy horses and enact warrior tales",
    image: gKachhiGhodiDance,
  },
  {
    title: "Chari Dance",
    emoji: "🔥",
    color: "#BF360C",
    desc: "Graceful dance of the Gujjar community performed with lit brass pots balanced on the head, symbolizing water-fetching traditions",
    image: gChariDance,
  },
  {
    title: "Gair Folk Dance",
    emoji: "🥁",
    color: "#2E7D32",
    desc: "Vigorous circular folk dance performed by men during Holi using decorated sticks in rhythmic synchronized patterns",
    image: gGairDance,
  },
  {
    title: "Dal Baati Churma",
    emoji: "🫓",
    color: "#F57F17",
    desc: "Iconic Rajasthani dish of baked wheat balls served with lentil curry and sweet crumbled bread",
    image: gDalBaatiChurma,
  },
  {
    title: "Gatte ki Sabzi",
    emoji: "🍛",
    color: "#E64A19",
    desc: "Spiced gram flour dumplings cooked in a tangy yogurt-based gravy, a staple of Rajasthani home cooking",
    image: gGatteKiSabzi,
  },
  {
    title: "Ker Sangri",
    emoji: "🌿",
    color: "#558B2F",
    desc: "Traditional desert dish made from dried ker berries and sangri beans tempered with Rajasthani spices",
    image: gKerSangri,
  },
  {
    title: "Bajra Roti & Lahsun Chutney",
    emoji: "🫔",
    color: "#6D4C41",
    desc: "Rustic pearl millet flatbread served with fiery garlic chutney, a staple of Rajasthan's rural households",
    image: gBajraRoti,
  },
  {
    title: "Laal Maas",
    emoji: "🍖",
    color: "#B71C1C",
    desc: "Fiery red mutton curry cooked with Mathania chilies and aromatic spices, the pride of Rajasthani non-veg cuisine",
    image: gLaalMaas,
  },
  {
    title: "Hawa Mahal",
    emoji: "🏯",
    color: "#E64A19",
    desc: "Iconic pink sandstone 'Palace of Winds' in Jaipur with 953 small windows for royal women to observe street life",
    image: gHawaMahal,
  },
  {
    title: "Women Dress Style",
    emoji: "👗",
    color: "#AD1457",
    desc: "Vibrant Rajasthani traditional attire featuring colorful lehengas, bandhani dupattas, and heavy silver jewellery",
    image: gWomenDress,
  },
  {
    title: "Camel Safari",
    emoji: "🐪",
    color: "#F9A825",
    desc: "Classic desert experience of riding camels across the golden Thar Desert dunes at sunrise and sunset",
    image: gCamelSafari,
  },
  {
    title: "Amer Fort",
    emoji: "🏰",
    color: "#5D4037",
    desc: "Magnificent UNESCO-listed hilltop fort in Jaipur blending Rajput and Mughal architecture with a stunning lake view",
    image: gAmerFort,
  },
  {
    title: "City Palace Udaipur",
    emoji: "🕌",
    color: "#1565C0",
    desc: "Grand royal palace complex on the banks of Lake Pichola, showcasing centuries of Mewar dynasty's artistic heritage",
    image: gCityPalaceUdaipur,
  },
  {
    title: "12 Famous Foods",
    emoji: "🍽️",
    color: "#E65100",
    desc: "A vibrant spread of Rajasthan's most iconic dishes from dal baati churma to ghevar and laal maas",
    image: gFamousFoods,
  },
  {
    title: "Phad Scroll Paintings",
    emoji: "🖼️",
    color: "#6A1B9A",
    desc: "Large-scale narrative scroll paintings depicting tales of folk deities, traditionally performed by Bhopa priests of Rajasthan",
    image: gPhadPainting,
  },
  {
    title: "Maand Singing",
    emoji: "🎤",
    color: "#00695C",
    desc: "Soulful classical folk music genre of Rajasthan rooted in the royal courts, known for its haunting melodic depth",
    image: gMaandSinging,
  },
  {
    title: "Lac Bangles of Jaipur",
    emoji: "💛",
    color: "#F57F17",
    desc: "Handcrafted lacquer bangles from Jaipur's Maniharon ka Rasta, embellished with mirrors, stones, and gold foil",
    image: gLacBangles,
  },
  {
    title: "Gota Patti",
    emoji: "✨",
    color: "#C62828",
    desc: "Traditional Rajasthani embroidery using ribbons of gold and silver woven into fabric for bridal and festive wear",
    image: gGotaPatti,
  },
  {
    title: "Morjis",
    emoji: "✨",
    color: "#C62828",
    desc: "Traditional Rajasthani footwearr",
    image: gMorjis,
  },
];      