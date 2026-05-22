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
import gujaratMap from "@assets/gujaratMap.jpg";
const Nava1 = "https://i.postimg.cc/0ys9yQLx/image.png";
const Nava2 = "https://i.postimg.cc/4dmgShh9/image.png";
const Nava3 = "https://i.postimg.cc/BbFGq9pP/image.png";
const Nava4 = "https://i.postimg.cc/gkvPQpnd/image.png";
const Ran1 = "https://i.postimg.cc/mr6xC26c/image.png";
const Ran2 = "https://i.postimg.cc/150LMKY2/image.png";
const Uttarayan1 = "https://i.postimg.cc/wvsrN5mn/image.png";
const Uttaryan2 = "https://i.postimg.cc/bNRB1wZ8/image.png";
const Uttarayan3 = "https://i.postimg.cc/y8QprphL/image.png";
const som1 = "https://i.postimg.cc/25gcCqKG/image.png";
const som2 = "https://i.postimg.cc/tJN2dBCk/image.png";
const som3 = "https://i.postimg.cc/MKzsZJ9q/image.png";
const beach1 = "https://i.postimg.cc/cLbTcg08/image.png";
const beach2 = "https://i.postimg.cc/KznNF0LD/image.png";
const beach3 = "https://i.postimg.cc/Y2z3syM1/image.png";
const beach4 = "https://i.postimg.cc/6pgLvkfr/image.png";
const megh1 = "https://i.postimg.cc/3NqWqTRB/image.png";
const megh2 = "https://i.postimg.cc/j2nRLJxQ/image.png";
const megh3 = "https://i.postimg.cc/zDyhnt3B/image.png";
const Fair1 = "https://i.postimg.cc/YCHmBtRm/image.png";
const Fair = "https://i.postimg.cc/tTYsNJqr/image.png";
const modhera1 = "https://i.postimg.cc/d3CDgfTz/image.png";
const modhera2 = "https://i.postimg.cc/RVcNRjm0/image.png";
const modhera3 = "https://i.postimg.cc/0yPrHc5L/image.png";
const sham1 = "https://i.postimg.cc/Jhh0R0kP/image.png";
const sham2 = "https://i.postimg.cc/85JCrYw5/image.png";
const sham3 = "https://i.postimg.cc/kGWXTtkH/image.png";
const Tar1 = "https://i.postimg.cc/qvJMGqjH/image.png";
const Tar2 = "https://i.postimg.cc/Xvhj38WQ/image.png";
const Hriday1 = "https://i.postimg.cc/FzXhkH7p/image.png";
const Hriday2 = "https://i.postimg.cc/T2ndMg4J/image.png";
const Lothal1 = "https://i.postimg.cc/VLRz511F/image.png";
const Lothal2 = "https://i.postimg.cc/1zgSWqFY/image.png";
const Rani1 = "https://i.postimg.cc/NG8cPYKW/image.png";
const Rani2 = "https://i.postimg.cc/cLCGHnFx/image.png";
const step1 = "https://i.postimg.cc/DZV9BYF9/image.png";
const step2 = "https://i.postimg.cc/ncV6Rmb1/image.png";
const step3 = "https://i.postimg.cc/13fbPZz3/image.png";
const Roza1 = "https://i.postimg.cc/xCy4gf6L/image.png";
const Roza2 = "https://i.postimg.cc/7hKQ8B8J/image.png";
const Mohabbat1 = "https://i.postimg.cc/TYHHtHJ7/image.png";
const Mohabbat2 = "https://i.postimg.cc/qvPDThYy/image.png";
const Dhol1 = "https://i.postimg.cc/76DBCvqf/image.png";
const Dhol2 = "https://i.postimg.cc/4y2wFmVr/image.png";
const Sun1 = "https://i.postimg.cc/kXZfQRn5/image.png";
const Sun2 = "https://i.postimg.cc/kXZfQRn5/image.png";
const park1 = "https://i.postimg.cc/3wZXckHj/image.png";
const park2 = "https://i.postimg.cc/CxTbMGhk/image.png";
const Gandhi1 = "https://i.postimg.cc/g0GR8G6P/image.png";
const Gandhi2 = "https://i.postimg.cc/3RRvf9Bc/image.png";
const gPatola = "https://i.postimg.cc/vTx6bBpF/image.png";
const gKutchi = "https://i.postimg.cc/mZKmMFL5/image.png";
const gBandhani = "https://i.postimg.cc/pdVCxfC9/image.png";
const gUndhiyu = "https://i.postimg.cc/pTpB5Pg5/image.png";
const gDhokla = "https://i.postimg.cc/HW82psw2/image.png";
const gFafdaJalebi = "https://i.postimg.cc/jdVhC0vW/image.png";
const gThepla = "https://i.postimg.cc/Dwnddrtx/image.png";
const gAjrakh = "https://i.postimg.cc/T30jkyx9/image.png";

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
export default function gujaratPage() {
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
                West India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Gujarat
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Jewel of Western India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: " Gandhinagar" },
                  { label: "Population", value: "6.04 Crore" },
                  { label: "Area", value: "1,96,024 sq km" },
                  { label: "Founded", value: "1 May 1960" },
                  { label: "Language", value: "Gujarati" },
                  { label: "Districts", value: "34 Districts" },
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
              Gandhinagar
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Gujarat - Echoes of the Mahatma, Vision of the Future.
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Gujarat" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(gujaratMap, "Map of Tamil Nadu")}
            >
              <img
                src={gujaratMap}
                alt="Map of Gujarat"
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
              Gujarat is a state along the western coast of India. Gujarat is
              the fifth largest sate by area, covering some 196,024 km2 (75,685
              mi2); and the ninth-most populous state, with a population of 60.4
              million in 2011. It is bordered by Rajasthan to the northeast,
              Dadra and Nagar Haveli and Daman and Diu to the south, Maharashtra
              to the southeast, Madhya Pradesh to the east, and the Arabian Sea
              and the Pakistani province of Sindh to the west. The Gujaratis are
              indigenous to the state, and their language, Gujarati, is the
              state's official language.
            </p>
            <p className="text-foreground">
              Gujarat state encompasses 23 sites of the ancient Indus Valley
              Civilisation (more than any other state). The most important sites
              are Lothal (the world's first dry dock), Dholavira (the fifth
              largest site), and Gola Dhoro (where five uncommon seals were
              found). Lothal is believed to have been one of the world's first
              seaports. Gujarat's coastal cities, chiefly Bharuch and Khambhat,
              served as ports and trading centres during the Maurya and Gupta
              empires, and during the succession of royal Saka dynasties in the
              Western Satraps era. Along with Bihar, Mizoram and Nagaland,
              Gujarat is one of four Indian states to prohibit the sale of
              alcohol. The Gir National Park in Gujarat is home to the only wild
              population of the Asiatic lion in the world.
            </p>
            <p className="text-foreground">
              Gujarat is regarded as one of the most industrialised states and
              has a low unemployment rate. The economy of Gujarat is the
              fifth-largest in India, with a gross state domestic product (GSDP)
              of ₹16.55 trillion (equivalent to ₹19 trillion or US$200 billion
              in 2023) and has the country's 10th-highest GSDP per capita of
              ₹215,000 (US$2,300). Gujarat has the highest exports of all
              states, accounting for around one-third of national exports. It
              ranks 21st among Indian states and union territories in human
              development index. The world's largest data centre will also be
              built in Jamnagar, Gujarat, by Reliance Industries. The state has
              one of the lowest crime rates, with Ahmedabad, Vadodara and Surat
              crowned among the five safest cities in India.
            </p>
            <p className="text-foreground">
              The term Gujarat is originally derived from the Sanskrit word
              Gurjar-Rashtra, and its literal meaning is "the country of the
              Gurjars or Gujars". In old Sanskrit records and inscriptions, the
              name of the state is mentioned as Gurjar Mandal and Gurjar-Desh,
              which means "land of the Gujjars". In the 9th or 10th century, its
              name was changed to Gujarat.
            </p>
            <p className="text-foreground">
              It is generally believed that Gujarat is derived from the Gurjars,
              who ruled Gujarat in the 8th and 9th centuries CE. Parts of modern
              Rajasthan and Gujarat were known as Gurjarat or Gurjarabhumi for
              centuries before the Mughal period.
            </p>
            <p className="text-foreground">
              Gujarat played a pivotal role in India’s independence movement.
              Mahatma Gandhi, the father of the nation, was born in Porbandar,
              Gujarat. Sardar Vallabhbhai Patel, the ‘Iron Man of India’ who
              unified the Indian princely states, was also from Gujarat. The
              state was formed on 1 May 1960 when the bilingual Bombay State was
              split into separate states of Maharashtra and Gujarat.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Today, Gujarat is one of India’s most industrially advanced and
              prosperous states. Known as the “Jewel of Western India”, it is a
              leading producer of cotton, groundnuts, tobacco, and dairy
              products. It is home to largest petrochemical complex in India and
              one of the most active for maritime trade.
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
        <Section title="Facts about Gujarat" icon="💡">
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
            Scroll horizontally to explore Gujarat's iconic foods, crafts,
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
    name: "Navratri",
    tagline: "",
    description:
      'Navratri in Gujarat is a monumental cultural spectacle that transcends the boundaries of a simple religious observance, evolving into what is widely regarded as the world’s longest and most expansive dance festival. For nine consecutive nights, the entire state vibrates with a singular energy, as the lines between the secular and the divine blur under the glow of lanterns and the rhythmic beat of the dhol. At its spiritual core, the festival is a deep-lived expression of "Shakti" worship, dedicated to the various forms of the Mother Goddess. Each evening commences with the sthapana of a Garbo—a beautifully decorated earthen pot containing a lit lamp—which serves as a metaphor for the universe and the primordial light within the womb. This sacred center becomes the axis around which the entire community rotates, quite literally, as they perform the Aarti and begin the night’s festivities.The physical manifestation of this devotion is the Garba, a dance form that is as much a spiritual meditation as it is a social celebration. Thousands of participants, dressed in a riot of colors, form massive concentric circles that expand and contract with the music. The women wear Chaniya Cholis that are masterpieces of craftsmanship, featuring intricate hand-embroidery, mirror work, and heavy silver jewelry that jingles in time with their steps. The men match this vibrancy in their Kediyu tunics and turbans, often performing more athletic maneuvers that showcase the vigor of the culture. As the tempo of the music increases, the synchronized clapping and swirling movements create a hypnotic effect, a visual representation of the cyclical nature of time and the universe. The transition from the fluid Garba to the rhythmic, percussive Dandiya Raas—where dancers use polished wooden sticks to mimic the sword fight between Goddess Durga and the demon Mahishasura—adds another layer of intensity to the night.The geographical diversity of the celebration adds distinct flavors to the experience, making Navratri a multifaceted journey across the state. In Vadodara, the cultural heart of Gujarat, the focus remains on traditional purity and massive, ground-shaking circles that prioritize folk authenticity. Meanwhile, Ahmedabad offers a more contemporary flair, where massive club grounds feature high-fidelity sound systems, celebrity singers, and elaborate light shows that rival major international music festivals. In the rural belts of Saurashtra, the "Tran Taali" Garba—characterized by a specific three-clap rhythm—retains a raw, earthy energy that has remained unchanged for centuries. Each city becomes a 24-hour ecosystem; while the nights are for dancing, the days are spent in preparation, ritual fasting, and social visits.The festival also dictates a unique culinary and social calendar that defines the Gujarati lifestyle during this period. Because many participants observe strict "Vrat" (fasting), a specialized "Farali" cuisine takes center stage, featuring dishes like Sabudana Wada, Moraiya Khichdi, and Shrikhand that are as delicious as they are ritualistically compliant. As the dancing often extends well past midnight, the street food culture of Gujarat reaches its zenith. Markets like Manek Chowk become nocturnal hubs where weary dancers gather at 3:00 AM to feast on Fafda-Jalebi and various local delicacies, extending the celebration into the dawn. This social cohesion is bolstered by a remarkable sense of public safety and communal harmony, where the streets feel like an extension of one’s own home.Looking ahead to the 2026 season, which spans from October 11 to October 19, the anticipation is already building for a year that promises to blend these ancient roots with modern organizational scale. The festival will culminate on October 20 with Dussehra, marked by the traditional consumption of Fafda and Jalebi across every household. Navratri in Gujarat is ultimately more than just a series of events; it is a collective heartbeat. It is a time when the modern world pauses to honor the ancient, where the sweat of the dance floor is seen as an offering, and where the spirit of "Asatoma Sadgamaya"—moving from the darkness of ignorance to the light of knowledge—is performed by millions of feet moving in perfect, rhythmic unison. ',
    images: [Nava1, Nava2, Nava3, Nava4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Rann Utsav",
    tagline: "",
    description:
      "The Rann Utsav is so much more than just a festival on a calendar; it’s like the entire soul of Kutch wakes up and decides to throw a party in the middle of nowhere. Imagine standing on a horizon that is perfectly, blindingly white—not from snow, but from a thick crust of salt that feels like walking on another planet. For most of the year, this place is a silent, submerged marsh, but from late October all the way through March, it transforms into this sprawling 'Tent City' near Dhordo. It’s a bit of a surreal contrast because you have the harsh, quiet emptiness of the desert meeting this explosion of neon lights, traditional music, and the smell of fresh thepla and garlic chutney wafting through the air.If you’ve never seen the Rann on a full moon night, it’s honestly hard to put into words without sounding like a poet. The salt reflects the moonlight so perfectly that the ground literally glows silver, making it impossible to tell where the earth ends and the sky begins. You’ll see people hopping onto camel carts, wrapped in heavy shawls against the desert chill, just heading out into the emptiness to sit and listen to the silence. It’s one of those rare places where you can actually hear yourself think, right before the distant sound of a Bhorindo (a local clay flute) pulls you back into the festivities. It’s a very grounding, almost spiritual experience that hits you differently than a standard city vacation.The 'human' side of the Utsav is found in the local artisans who travel from tiny, remote villages to show off what they’ve made by hand. You’ll meet families who have been doing Rogan art or intricate Kutchi embroidery for centuries. These aren't just souvenirs; they are pieces of history that these people have kept alive through sheer grit. Walking through the stalls, you’ll see the famous mirror-work that catches the sun, and if you’re lucky, you can sit with the craftsmen and watch them work. It’s the warmth of these people—their stories and their pride in their land—that really gives the festival its heartbeat. They treat every visitor like a guest in their own home, which is saying something when home is a desert.As the nights get colder, the energy actually heats up. There’s something special about sitting around a campfire under a sky so clear you can see every single star, watching the Siddi community perform their high-energy dances or listening to folk singers belt out stories of ancient heroes. For the 2026 season, which is already in full swing as we head toward the warmer months, the Utsav has blended this old-world charm with things like paramotoring and stargazing hubs. It’s a wild mix of the ancient and the modern, proving that you don't need a lush forest or a mountain range to find beauty. Sometimes, all you need is a massive patch of salt, the incredible hospitality of the people of Kutch to realize how beautiful the middle of nowhere can be.",
    images: [Ran1, Ran2],
    source: "",
  },
  {
    name: "Uttarayan",
    tagline: "",
    description:
      "The International Kite Festival, or Uttarayan, is far more than just a date on the calendar in Gujarat; it is a state-wide fever dream that effectively brings the entire region to a standstill every January. While the official events on the Sabarmati Riverfront in Ahmedabad draw professional kite fliers from across the globe with their massive, high-tech inflatable kites, the real magic happens in the 'Poles' of the old cities and on the millions of private rooftops. Weeks before the festival even begins, the air changes—you start seeing colorful threads stretched across neighborhood lanes as the Manjha makers coat cotton strings with a mixture of glue and crushed glass to give them a razor-sharp edge. There is a deep, artisanal pride in this preparation; every flyer has their favorite 'thread guy' whose secret recipe for the Manjha is believed to be the key to dominance in the sky.When the day finally arrives, usually on January 14th, the transition from the quiet of dawn to the chaos of the morning is instantaneous. By 6:00 AM, the first kites are already up, and by noon, the sky is so densely packed with paper and plastic that the blue of the atmosphere is almost entirely obscured by a fluttering, multi-colored mosaic. The 'human' element of Uttarayan is the sheer, unbridled vocal energy of it all. The moment a kite is cut, a collective, thunderous roar of 'Kaypo Che!' (I have cut it!) or 'Ae Lapet!' (Wind it in!) erupts from the rooftops, echoing through the streets like a stadium chant. It is an adrenaline-fueled aerial war, yet it remains the ultimate social glue. On those terraces, there is no hierarchy; the CEO of a company might be standing next to his driver, both of them shouting at the neighbor across the street as they try to outmaneuver a rival kite.The culinary traditions of the day are just as vital as the kites themselves. Because nobody wants to leave the roof and miss a second of the action, the kitchen essentially moves upstairs. Trays of Undhiyu—a complex, slow-cooked winter vegetable casserole that is the pride of Gujarati cuisine—are served alongside piping hot Puri and sweet Jalebis. There’s a constant supply of Chikki (brittle made from peanuts and sesame) and fresh sugarcane to keep everyone’s energy up. It’s a sensory experience that defines 'home' for every Gujarati; the smell of the glass-coated thread, the spicy aroma of the Undhiyu, and the sound of whistles and music systems blasting everything from traditional folk to the latest Bollywood hits. The festival creates a rare sense of communal intimacy, where families spend fourteen hours together under the sun, sharing food, laughter, and the shared frustration of a snapped line.As the sun begins to set, the energy shifts from the competitive to the cinematic. The sky, which was once a battlefield of paper kites, transforms into a field of stars as thousands of Tukkals (paper lanterns) are released. These lanterns float silently into the night, creating a glowing, golden canopy that stretches as far as the eye can see. Looking at the celebrations from earlier this year in 2026, the festival has managed to retain this raw, grassroots soul even as it becomes a global tourist attraction. It remains a testament to the Gujarati spirit—a mix of fierce competition, entrepreneurial prep work, and an unbreakable commitment to enjoying life. It’s a day where everyone, regardless of age or background, rediscovers the simple, neck-craning joy of looking up and chasing a dream in the wind.",
    images: [Uttarayan1, Uttaryan2, Uttarayan3],
  },
  {
    name: "	Somnath Mahashivratri Parv",
    tagline: "",
    description:
      "Mahashivratri at Somnath is not merely a religious festival; it is a seismic spiritual event that feels as though the entire coastline of Gujarat is vibrating in resonance with the cosmic dance of Lord Shiva. As the first of the twelve holy Jyotirlingas, Somnath holds a position of unparalleled sanctity, and during the 'Mahashivratri Parv,' the temple transforms into a beacon of light against the dark, crashing waves of the Arabian Sea. The atmosphere is thick with a sense of 'Aadi' and 'Anant'—the beginning and the end—as the salt spray from the ocean mingles with the smoke of hundreds of lamps and the scent of fresh Bilva leaves. During the most recent celebrations in February 2026, the temple remained open for a staggering 44 consecutive hours, allowing a never-ending river of humanity to flow through its corridors, each person seeking a moment of connection with the 'Lord of the Moon.'The true human pulse of the festival is found in the grueling yet beautiful rituals of the Char Prahar Puja. These are four distinct prayer ceremonies conducted throughout the night, each lasting several hours and representing the different stages of human existence. To witness this is to see the raw endurance of faith. You will see elderly pilgrims who have traveled hundreds of miles on foot or by bus, standing in line for hours without a hint of complaint, their faces lit by the golden glow of the temple’s illumination. There is a profound sense of communal intimacy in these crowds; strangers help one another find a place to sit, share their limited water, or join in spontaneous chants of 'Har Har Mahadev' that ripple through the queues like a physical wave. The Palki Yatra, a grand procession where the deity is carried in a silver palanquin through the streets of Prabhas Patan, is a moment of pure, unbridled joy where the barrier between the sacred and the mundane completely dissolves.The cultural scale of the Parv has grown significantly in recent years, turning the temple precincts into a massive stage for the arts. In 2026, the festival featured a 'Kala Mahakumbh,' where world-class classical dancers and folk musicians performed under the stars, their rhythms syncing with the natural percussion of the tide hitting the temple walls. It’s a surreal experience to sit on the cold stone floor at 3:00 AM, surrounded by thousands of fellow seekers, listening to the deep, resonant vibrations of a damru or the soulful strains of a bhajan that has been sung for a millennium. This is where you see the 'living' history of India—a temple that was destroyed and rebuilt seven times, standing today not just as a structure of sandstone, but as a testament to the indestructible spirit of the people who refused to let its flame go out.Beyond the grand scale, it is the small, quiet moments that stay with you long after the festival ends. It’s the sight of a young child being taught how to pour milk over a small Shivalinga for the first time, or the tireless work of local volunteers who distribute 'Prasad' and hot tea to the cold and weary pilgrims in the pre-dawn hours. There is no hierarchy here; the billionaire and the beggar both stand barefoot on the same wet sand, looking up at the same towering spire. As the final Maha Aarti concludes and the sun begins to rise over the horizon of the Arabian Sea, painting the temple in hues of saffron and gold, there is a collective sense of catharsis. People don't just leave Somnath after Mahashivratri; they carry a piece of its thundering silence and its eternal resilience back home with them, reminded that even after the darkest night, the light—and the dance—always continues.",
    images: [som1, som2, som3],
    source: "",
  },
  {
    name: "	Mandvi Beach Festival",
    tagline: "",
    description:
      "The Mandvi Beach Festival is where the rugged, desert charm of Kutch meets the cooling embrace of the Arabian Sea, creating a coastal celebration that feels like a hidden gem compared to the vastness of the nearby White Rann. Held annually during the breezy winter days—with the most recent major edition lighting up the shoreline from December 21 to December 31, 2025—this festival transforms the golden sands of Mandvi Windfarm Beach into a kaleidoscopic carnival. It is a place where the air smells of salt and roasting corn, and where the rhythmic sound of the waves is punctuated by the laughter of families and the distant thrum of folk music. Unlike the more formal religious festivals, Mandvi is all about the joy of the outdoors; you’ll see children chasing seagulls, artists sculpting intricate stories into the sand, and the sky dotted with kites that dance alongside the towering, modern windmills that line the coast like silent sentinels.What really humanizes the Mandvi experience is the seamless blend of the town’s deep-rooted maritime history with its modern-day festive spirit. You aren't just visiting a beach; you’re stepping into a town that has been building massive wooden ships by hand for over 400 years at the nearby Rukmavati riverbank. During the festival, you can wander from high-energy 'adventure zones'—where people are testing their nerves with parasailing, ATV biking, or zorbing—to the quiet, majestic shadow of the Vijay Vilas Palace, a royal retreat that has hosted many a Bollywood film set. There’s a beautiful, unhurried pace to life here; visitors often spend their mornings on a boat hoping for a glimpse of a dolphin, and their afternoons tucked into a corner of the beach market, watching local artisans perfect their Bandhani or Ajrakh fabrics.The heart of the festival truly beats at sunset, when the entire beach turns into a golden stage. As the sun dips below the horizon, the focus shifts to the evening cultural programs where local Kutchi musicians and 'Rising Star' bands bring the desert's soulful folk traditions to the sea's edge. It’s the perfect time to grab a plate of Kutchi Dabeli—the local spicy potato burger that was famously invented right here in Mandvi—and find a spot in the sand to watch the laser shows or join a stargazing session. With over 120 food stalls offering everything from traditional Gujarati thalis to coastal street food, the social experience is one of shared flavors and ocean breezes.For many who visit, the Mandvi Beach Festival acts as the perfect, relaxing bookend to the high-intensity energy of the Rann Utsav or the spiritual weight of Somnath. It is a reminder that Gujarat’s beauty isn't just in its grand monuments or vast salt deserts, but in these moments of simple, seaside happiness. Whether you are participating in a sand art competition, warming up by a bonfire with strangers, or simply watching the wind turbines spin against a purple sky, the festival captures that rare feeling of a community at peace with its heritage and its environment. It proves that even in a region known for its dry deserts, life can bloom with incredible colour and spirit as long as there is a bit of wind and a lot of heart.",
    images: [beach1, beach2, beach3, beach4],
    source: "",
  },
  {
    name: "	Megh Malhar Parv Saputara",
    tagline: "",
    description:
      "The Megh Malhar Parv transforms Saputara, Gujarat’s only hill station, into a mystical, cloud-kissed paradise that feels entirely removed from the scorching heat of the plains. Held during the peak monsoon months—typically from late July through mid-August—this month-long festival is a profound celebration of the rains. It is a time when the Sahyadri mountain range, draped in lush, velvet green, becomes a living theater of nature. The 'human' magic of Saputara during this time is found in the deep, ancestral connection the local Dangi tribes share with the earth. As the mist rolls over the hills, the air is filled with the resonance of traditional Dangi drums and the sight of acrobatic dancers moving in perfect, fluid rhythm, celebrating the life-giving rains that sustain their agriculture and folklore. It is a festival where the rain isn't seen as an inconvenience, but as an invited guest of honor and a symbol of prosperity, turning the entire landscape into a resplendent greenland.What makes the Megh Malhar Parv so special is the atmosphere of 'slow travel' it encourages, inviting visitors to pause and breathe in the mountain air. You’ll see families and young travellers walking through the rain-soaked Governor’s Hill—also known as Table Top—or sitting by the Saputara Lake as the fog descends so thick it creates a cocoon of privacy. The 2026 season, which is set to run from July 26 to August 17, is already generating excitement for its grand Cultural Carnival. This parade features themed floats, giant puppets, and folk dancers from across the country under the theme of 'Ek Bharat Shreshtha Bharat.' Beyond the spectacle, there are deeply human moments like the 'Rain Run' marathon on August 15th, where hundreds of people sprint through the misty trails to celebrate Independence Day in the most natural setting possible. The festival serves as a massive platform for the 'Artist Village,' where you can participate in Warli painting workshops, terracotta moulding, or watch bamboo craft being shaped by hand, ensuring that the economic benefits reach the grassroots level.The culinary and social experience during Megh Malhar is like a warm, comforting hug against the chilly monsoon dampness. There is nothing quite like holding a steaming cup of masala chai while eating spicy Nagli (ragi) rotlas—a local staple—prepared by Dangi women over wood-fired stoves. The smokiness of the fire and the earthy taste of the mountain grain create a memory that is as much about the connection to the land as it is about the flavour. The town itself becomes a vibrant hub of Adivasi heritage, where the sound of wind instruments and brass bands echoes through the valley. In 2026, special events like the Dahi Handi competition during Janmashtami add a layer of spiritual energy to the natural beauty, making the town feel like a vibrant, high-altitude neighbourhood where the sacred and the natural are intertwined.As the light dims behind a heavy curtain of rain, the evening stage at the big white dome near the main circle comes alive with folk fusion concerts, magic shows, and tribal storytelling sessions led by village elders. It’s a time when strangers huddle under shared umbrellas, swapping travel stories and watching the fountain’s-coloured lights dance in the fog. For many, the Megh Malhar Parv is a reminder of the simpler, essential joys: the smell of wet earth, the distant roar of the Gira Falls, and the warmth of a community that knows how to dance through the storm. It is a soulful, green escape that proves Gujarat’s beauty is as diverse as the seasons themselves, offering a quiet, rain-drenched sanctuary for anyone looking to reconnect with the rhythm of the hills and the timeless traditions of the Dangs.",
    images: [megh1, megh2, megh3],
    source: "",
  },
  {
    name: "Madhavpur Fair",
    tagline: "",
    description:
      "The Madhavpur Fair is a monumental cultural bridge that spans the entire width of India, turning a quiet coastal village in Porbandar into a living symbol of national unity. While many festivals are localized, the Madhavpur Ghed Mela is an epic 'cross-country wedding' that commemorates the divine marriage of Lord Krishna and Princess Rukmini. What makes this event so profoundly human is its unique connection to the Northeast; according to ancient lore and the traditions of the Mishmi tribe, Rukmini was a princess from Bhismaknagar in present-day Arunachal Pradesh. Every year, during the month of Chaitra—most recently celebrated with immense grandeur from March 27 to March 31, 2026—thousands of people travel over 3,000 kilometers from the peaks of the Himalayas to the shores of the Arabian Sea to play the role of the 'bride's side,' while the locals of Gujarat welcome them as the 'grooms side.'The five-day festival is a sensory explosion where the 'Ek Bharat Shreshtha Bharat' initiative truly comes to life. The heart of the celebration is the Shobha Yatra, a magnificent wedding procession where a gold-adorned chariot carrying the idols of Krishna and Rukmini winds through the village lanes. The air is thick with a rhythmic fusion that you won't hear anywhere else on earth—the deep, earthy thrum of the Gujarati dhol alternating with the high-pitched, melodic pepas and flutes of Assam and Manipur. Over 1,200 artists from across the country gather here, turning the sands into a stage for everything from the energetic Garba of Saurashtra to the delicate, storytelling dance-dramas of Rukmini-Haran performed by troupes from the Northeast. It is a rare moment of cultural alchemy where strangers from opposite ends of the continent embrace as in-laws, sharing stories and songs that have survived for millennia.The festival grounds themselves are a massive, sprawling ecosystem of heritage and modern adventure. The 2026 fair saw the beach front transformed into an arena for traditional and coastal sports, featuring everything from coconut-throwing competitions and beach volleyball to a 100-meter 'Sand Run' that draws local youth and visitors alike. Parallel to the spiritual rituals like the Mandap Ropan and the late-night Ratri Lagan (the actual wedding ceremony), there is a massive 'Vocal for Local' exhibition. Here, one can wander from stalls showcasing intricate Mishmi handlooms and organic Northeastern teas to those serving steaming plates of Kutchi Dabeli and Fafda-Jalebi. The inclusion of sand art displays—where master artists carve 20-foot tall sculptures of Krishna and Rukmini into the shoreline—adds a contemporary, visual awe to the ancient proceedings.What truly elevates the Madhavpur Fair is the sheer resilience of the legend and the hospitality of the people. The village itself, whose name 'Madhavpur Ghed' refers to the bowl-shaped coastal terrain that fills with water during the monsoons, treats the festival as a sacred duty. You’ll see local police providing an 'honor guard' for the deity's soul during the rituals, and volunteers working tirelessly to ensure that every guest from the Northeast feels at home in the West. As the sun dips below the horizon, painting the 15th-century Madhavrai Temple in shades of crimson and violet, multimedia light shows narrate the journey of Rukmini, making the ancient myth feel as immediate and urgent as a modern love story. It is a celebration that proves India’s diversity isn't just a political concept, but a lived, breathing reality found in the shared joy of a wedding that refuses to end, even after five thousand years.",
    images: [Fair1, Fair],
    source: "",
  },
  {
    name: "	Modhera Dance Festival",
    tagline: "",
    description:
      "The Modhera Dance Festival, formally known as Uttarardh Mahotsav, is a magnificent three-day tribute to the classical arts, staged against the monumental backdrop of the 11th-century Sun Temple in Modhera. Held every January following the festival of Uttarayan—with the 2026 edition most recently captivating audiences from January 17 to January 19—this festival is timed to mark the sun’s celestial transition into the northern hemisphere. What makes this event so profoundly human is the way it effectively breathes life into ancient stone. The temple, a masterpiece of Solanki-era architecture, features thousands of intricate carvings of deities and dancers; when the sun sets and the floodlights illuminate the sandstone, the silent, carved figures on the temple walls seem to wake up, their frozen poses mirrored by the living, breathing artists performing on the stage below.The festival serves as one of India's most prestigious platforms for classical dance, drawing world-renowned exponents of Bharatanatyam, Kathak, Odissi, Kuchipudi, and Mohiniyattam to this rural corner of Mehsana. To witness these performances is to see the raw, disciplined beauty of a heritage that refuses to age. You will see dancers whose expressions tell stories of ancient epics, their rhythmic footwork echoing against the walls of the Sabha Mandap (the Hall of Assembly), while the night air is filled with the soulful vibrations of the flute and the mridangam. The atmosphere is one of intense, shared reverence; the audience sits in a natural amphitheater, often in absolute silence, as the storytelling transcends language and time. This 'human' connection—the exchange between an artist performing a thousand-year-old dance and a spectator watching it in a thousand-year-old temple—creates a spiritual gravity that is impossible to find in a modern auditorium.Beyond the high-art performances, the Modhera Dance Festival is a deep dive into the cultural heart of North Gujarat. The local community becomes an integral part of the experience, with the nearby town of Patan showcasing its world-famous double-ikot Patola weaving and the region's unique wood-carving traditions. In 2026, the experience was further elevated by a cutting-edge 3D projection mapping show on the temple’s facade, which narrated the history of the sun-worshipping dynasty and the temple's survival through various invasions. This blend of ancient architectural grandeur and modern technology makes the history feel accessible and urgent, ensuring that the younger generation feels a visceral connection to their ancestors' artistic brilliance. The food stalls nearby offer a sensory warm-up to the night, serving authentic regional delicacies like sukhadi and spicy khichu that provide comfort against the sharp winter chill.The true climax of the experience occurs in the quiet moments between the performances, when the temple is reflected in the perfectly still waters of the Surya Kund, the magnificent stepped tank with its 108 miniature shrines. As the music fades and the final bell of the Ghungroo rings out, a profound peace settles over the grounds. It is a reminder that the sun, which the temple was built to honor, has witnessed this same devotion and artistic passion for ten centuries. For every visitor, the Modhera Dance Festival is more than a cultural showcase; it is a moment where time itself seems to fold. It is an opportunity to stand at the intersection of history and rhythm, realizing that while empires may fall and stone may weather, the human desire to express the divine through movement and light remains eternal.",
    images: [modhera1, modhera2, modhera3],
  },
  {
    name: "Shamlaji Melo",
    tagline: "",
    description:
      "The Shamlaji Melo is a deeply evocative and sprawling tribal fair that transforms the sacred town of Shamlaji in the Aravalli district into a confluence of faith, commerce, and ancient tradition. Dedicated to Lord Vishnu—revered here as Gadadhar or Shaksi Gopal—the festival is uniquely defined by the devotion of the Bhil and Garasia tribal communities, who affectionately address the deity as 'Kaliyo Bavji' or 'Kaliyo Dev' (the Dark Divinity). While the festival spans nearly three weeks in November, its spiritual crescendo occurs on Kartik Purnima, the night of the full moon. As we look toward the 2026 season, the fair is scheduled to reach its peak between November 20 and November 24, drawing over two hundred thousand pilgrims from the hills of both Gujarat and Rajasthan.What humanizes this massive gathering is the sight of thousands of devotees traveling on foot, in camel carts, or in colorful trucks, singing devotional songs and carrying tall, vibrant religious banners across the valley. The ritual begins not at the temple gates, but at the banks of the sacred Meshwo River. Here, pilgrims take a 'holy dip' to cleanse themselves before entering the shrine, a practice that has remained unchanged for centuries. The Shamlaji temple itself is an architectural marvel of white sandstone and brick, its two stories supported by pillars carved with scenes from the Ramayana and Mahabharata. There is a palpable energy in the air as the sound of the nagada drums and the chanting of 'Jai Shri Krishna' echo through the valley, bridging the gap between the modern traveler and the ancient seeker.The fair is also a vital economic lifeline for the region, acting as a massive open-air market where the craftsmanship of the tribal belt is on full display. Visitors can spend hours wandering through rows of stalls selling traditional silver ornaments—often heavy and intricately designed for tribal wear—metalware, and hand-woven textiles. It’s a place where you can see a Bhil artisan bartering for household goods while just a few feet away, a modern tourist is marveling at the same silverwork. For the 2026 celebrations, the 'Shamlaji Mahotsav' has also evolved to include large-scale cultural programs featuring renowned Gujarati folk singers like Osman Mir and Kinjal Dave, who perform on the temple premises under the starlit sky, blending traditional 'Lok Dayro' with the spiritual fervor of the mela.Ultimately, the Shamlaji Melo is a testament to the secular and inclusive spirit of rural India. It is a space where caste and creed distinctions dissolve in the shared reverence for 'Kaliyo Thakar.' Whether it is the aroma of local homegrown cuisines wafting through the cool November air, the thrill of the carnival rides, or the quiet meditation of a thousand flickering diyas on the riverbank, the fair offers a profound look into the heart of Gujarat’s tribal heritage. It remains a 'spiritual oasis' where the past and present coexist, reminding every visitor that faith is most beautiful when it is shared in the open air, amidst the dust, the drums, and the divine. ",
    images: [sham1, sham2, sham3],
    source: "",
  },
  {
    name: "Tarnetar Fair",
    tagline: "",
    description:
      "The Tarnetar Fair is a vivid, high-energy explosion of folklore and romance that turns a small village in the Surendranagar district into the most famous 'matchmaking' hub in India. Locally known as the Trinetreshwar Mahadev Mela, the festival is traditionally held during the first week of the Hindu month of Bhadrapada—with the 2026 celebrations set to run from September 14 to September 16. While it is technically a religious gathering centered around the ancient Trinetreshwar Mahadev Temple, its true soul lies in the legendary 'Swayamvar' tradition. It is believed that this very spot is where the archer Arjuna famously pierced the eye of a rotating fish to win the hand of Princess Draupadi, and for centuries, the tribal youth of Saurashtra have gathered here to re-enact that spirit of courtship in the most colorful way imaginable.The 'human' spectacle of Tarnetar is defined by the sight of young men from the Koli, Bharwad, and Rabari tribes standing under massive, exquisitely embroidered umbrellas. These aren't just ordinary accessories; a bachelor will spend over a year hand-stitching his umbrella with intricate mirror-work, beadwork, and vibrant patchwork specifically to catch the eye of a potential bride. The umbrellas act as a silent advertisement of the man’s patience, skill, and artistic taste. Meanwhile, the women arrive in their finest ethnic attire—their marital status signaled by the color of their skirts, with red often indicating they are single and seeking a partner. It is a world of subtle glances and rhythmic traditional dances like the Hudo and Rasada, where hundreds of women move in a single, mesmerizing circle to the beat of four drums and the haunting melodies of the Jodia Pava (double flutes).Beyond the romance, the fairgrounds are a sprawling celebration of rural Gujarat’s resilience and talent. You’ll see 'Rural Olympics' featuring bullock cart races and camel shows, alongside endless rows of stalls selling everything from silver amulets and deity statues to the famous embroidered fabrics of the region. The atmosphere is thick with the sound of Bhajan Mandlis singing late into the night and the smell of local street food like Ganthiya and Chai. In 2026, the fair continues to bridge the gap between the ancient and the modern, attracting global photographers and travelers who come to witness a way of life that still prioritizes the touch of a hand and the beauty of a handmade thread over digital connections.What truly makes Tarnetar special is the spiritual weight that anchors all the festivities. Devotees believe that a dip in the temple’s Papanshu reservoir is as holy as a dip in the Ganges, and the fair officially begins only when a massive, colorful flag is hoisted atop the temple dome by the Mahant of Paliyad. As the sun sets over the dusty plains of Saurashtra, the thousands of mirrors on the umbrellas and costumes catch the final light, creating a shimmering, golden aura around the crowds. It is a place where tradition isn't something kept in a museum, but something lived out on the dance floor and under the shade of a hand-stitched umbrella—a reminder that even in a fast-changing world, the quest for love and the pride of heritage remain the most powerful human drivers.",
    images: [Tar1, Tar2],
  },
];

const historicalPlaces = [
  {
    name: "1)	Hriday Kunj",
    description:
      "Hriday Kunj stands as the silent, beating heart of the Sabarmati Ashram in Ahmedabad, serving as one of the most historically significant residential structures in the world. This modest, white-washed cottage was the home of Mahatma Gandhi and his wife, Kasturba, from 1918 to 1930—a period that arguably defined the trajectory of modern India. Named 'Hriday Kunj' (the Abode of the Heart) by the philosopher Kakasaheb Kalelkar, the house is a physical manifestation of the Gandhian philosophy of 'plain living and high thinking.' It was within these sparse, sun-drenched rooms that Gandhi formulated the principles of Satyagraha, conducted his famous experiments with truth, and hosted a global stream of poets, politicians, and peasants. The cottage gained its most profound historical weight in 1930, when Gandhi stepped out of its doors to lead the Dandi March, vowing that he would not return to the ashram until India had achieved Purna Swaraj (total independence)—a vow that lent a tragic, sacred air to the home after his assassination in 1948.The architecture of Hriday Kunj is intentionally devoid of any ornament, reflecting a rejection of material excess that was radical for its time and remains challenging today. The structure consists of six small rooms—a kitchen, a guest room, a store room, and the personal living quarters of Gandhi and Kasturba—all arranged around a central courtyard that allowed for communal interaction and natural light. Walking through the house today, visitors are struck by the preserved artifacts that seem to wait for their owner’s return: the iconic spinning wheel (Charkha), his low writing desk, a pair of wooden sandals, and the simple floor mats where he sat to write a significant portion of his autobiography. It is a space that demands a certain level of physical and spiritual humility; you cannot move through Hriday Kunj without feeling the weight of the massive decisions made here—decisions that would eventually lead to the collapse of the British Empire without the firing of a single bullet.What humanizes Hriday Kunj beyond its role as a museum is its history as a 'living laboratory' for social equality. This was not just a home for a leader; it was a communal hub where the residents were required to practice 'bread labour,' which included everything from weaving their own cloth to the daily cleaning of the ashram’s sanitation facilities—a task Gandhi insisted upon to dismantle the deep-seated prejudices of the caste system. As of early 2026, the site is being managed with an even deeper focus on historical preservation, using traditional materials like lime mortar and Morbi clay tiles to maintain the cottage's original structural integrity. The surrounding Upasana Mandir, an open-air prayer ground overlooking the Sabarmati River, continues to hold daily sessions where the same hymns that Gandhi loved are still sung. Standing on the veranda where Gandhi once meditated, watching the river flow by, you realize that Hriday Kunj is more than a monument; it is a quiet, stubborn reminder that the most powerful revolutions often begin in the smallest of rooms with the simplest of daily choices.",
    images: [Hriday1, Hriday2],
  },
  {
    name: "	Lothal ",
    description:
      "Lothal is not just an archaeological site; it is a portal into the birth of global trade and maritime engineering, located in the Bhal region of Gujarat. Often called the 'Mound of the Dead,' it served as the southernmost outpost of the Indus Valley Civilization (IVC) nearly 4,500 years ago. What makes Lothal truly extraordinary is its tidal dockyard—widely recognized as the world's earliest known artificial dock. This rectangular basin, engineered with a sophisticated lock system to manage tides, allowed Harappan ships to sail from the Sabarmati River into the Gulf of Khambhat and onward to the Persian Gulf. Standing at the site today, you can see the remnants of this massive brick structure, which once buzzed with the sounds of merchants bartering beads, ivory, and gemstones with traders from as far away as Mesopotamia and Egypt.The human side of Lothal is most evident in its remarkably modern urban planning and its bustling 'Lower Town.' Walking through the ruins, you can still trace the organized grid of streets, the advanced drainage systems, and the foundations of a massive bead-making factory. Harappan artisans were world-renowned for their micro-cylindrical beads made of steatite and carnelian, and the sheer volume of raw materials found here—like lapis lazuli and agate—paints a picture of a city that was as much an industrial powerhouse as it was a port. The 'Upper Town' or Citadel, built on high mud-brick platforms to protect against the frequent flooding of the Sabarmati, shows the administrative foresight of its leaders. It’s a place that reminds you that thousands of years ago, people were already solving the same urban problems we face today—flood management, waste disposal, and international logistics.As of early 2026, Lothal is experiencing a massive historical and infrastructural revival. After more than 60 years, the Archaeological Survey of India (ASI) resumed excavations in 2025, uncovering fresh evidence that the city thrived much longer than previously thought. Archaeologists have recently discovered new furnaces, bead-making tools, and even tiny gold particles that suggest the port didn't just decline but evolved into a different cultural phase. Simultaneously, the skyline of Lothal is changing with the construction of the National Maritime Heritage Complex (NMHC). This ₹4,500-crore project is set to become one of the world's largest maritime museums. Phase 1, which includes an 'experiential museum' with AR/VR recreations of the ancient dockyard and a township, is fast-tracking toward a July 2026 completion.For a visitor today, the experience is a blend of quiet reflection at the ancient mounds and anticipation for this new global centre. The on-site museum houses fascinating artifacts like 'twin burials'—where pairs of skeletons were found together—and intricate seals featuring bulls and composite animals used for trade identification. Whether you are looking at the smallest-known decimal divisions on an ancient ivory scale or standing by the dockyard where sailors once prepared for months-long voyages, Lothal feels like the cradle of India's seafaring spirit. It is a testament to human ingenuity and resilience, proving that our drive to connect with the rest of the world is as old as the very bricks of this ancient port.",
    Image: [Lothal1, Lothal2],
  },
  {
    name: "	Rani ki Vav",
    description:
      "Rani ki Vav, or the 'Queen’s Stepwell,' is a staggering architectural achievement that turns the traditional concept of a monument upside down—quite literally. Located in Patan on the banks of the Saraswati River, this UNESCO World Heritage Site was commissioned in the 11th century by Queen Udayamati as a profound memorial to her husband, King Bhimdev I. Unlike the Taj Mahal, which reaches for the heavens, Rani ki Vav plunges seven levels deep into the earth, designed as an 'inverted temple' that honours the sanctity of water in an arid landscape. What makes its story so humanly compelling is its accidental preservation; for nearly seven centuries, the entire structure lay buried under layers of silt after the Saraswati River flooded and shifted its course. This layer of mud acted as a protective time capsule, shielding the thousands of delicate carvings from the ravages of time, weather, and invaders until it was painstakingly excavated by the Archaeological Survey of India in the late 20th century.The sheer scale of the Vav is breathtaking, measuring approximately 64 meters long, 20 meters wide, and 27 meters deep. As you descend the stairs, the air becomes noticeably cooler, and you find yourself surrounded by a subterranean gallery of over 500 principal sculptures and a thousand minor ones. The artistic theme centres on the 'Dashavatara,' or the ten incarnations of Lord Vishnu, including a magnificent carving of Vishnu reclining on the thousand-headed serpent, Sheshnag. But the 'heartbeat' of the Vav is found in the depictions of the 'Apsaras' or celestial dancers. These figures are carved with such incredible realism that you can see them applying tilak to their foreheads, braiding their hair, or adjusting their anklets. These sculptures reflect the 'Solah Shringar' (sixteen traditional adornments), creating a vivid link to the daily lives and aesthetic rituals of the women who once gathered at this well to escape the relentless Gujarati sun and share the news of the day.The engineering of the stepwell is as impressive as its art. Each of the seven levels is supported by intricately carved pillars and beams that manage the immense pressure of the surrounding earth. At the very bottom, beneath the final step, lies a small gate that leads to a 30-kilometer-long tunnel (now blocked) which once served as an escape route to the town of Sidhpur for the royals during times of war. As of 2026, Rani ki Vav has become a centrepiece of India’s cultural pride, recognized globally not just through its UNESCO status but as the iconic image featured on the lavender ₹100 banknote. Modern visitors are often awestruck by the 'Patola' connection; many of the geometric patterns found in the stone carvings are identical to the designs found in the world-famous Patan Patola silk sarees, proving that the artistic language of the 11th century is still a living, breathing tradition in the looms of Patan today.Visiting Rani ki Vav today is a multisensory journey through history and devotion. The site is now equipped with advanced lighting and digital kiosks that allow you to explore 3D recreations of the sections that remain inaccessible for safety reasons. However, no digital screen can replace the feeling of standing at the lowest level, looking up at the towering, carved walls and realizing that this entire masterpiece was built to serve a basic human necessity: water. It stands as a testament to Queen Udayamati’s vision—that a gift to the public could also be a work of eternal beauty. It is a place where architecture, engineering, and mythology collide, reminding every traveller that even in the depths of the earth, one can find a masterpiece that shines as bright as any palace in the sun.",
    images: [Rani1, Rani2],
  },
  {
    name: "Adalaj Stepwell",
    description:
      "The Adalaj Stepwell, or Adalaj ni Vav, is an architectural marvel that stands as a hauntingly beautiful monument to love, sacrifice, and the complex intersection of cultures. Located just outside Ahmedabad, this five-story deep subterranean structure was completed in 1498, but its origin story is one of the most poignant legends in Gujarat. It was begun by the Hindu ruler Rana Veer Singh for his queen, Rani Roopba, to provide relief to their people from the parched landscape. However, before it could be finished, the kingdom was invaded by the Sultan Mahmud Begada, and the Rana was killed in battle. The Sultan, struck by the beauty of the widowed queen, proposed marriage. Roopba agreed on one condition: that he first finish the stepwell her husband had started. Once the final stone was laid and the water was reached, the Queen, having fulfilled her duty to her people and her husband’s legacy, circumambulated the well and threw herself into its waters, choosing devotion over a new throne.The 'human' side of Adalaj is felt in the incredible temperature drop and the hushed silence that greets you as you descend. Built in the Solanki style with significant Islamic architectural influences, the stepwell is a masterpiece of 'Indo-Saracenic' fusion. As you walk down the grand stairs, you are surrounded by a world of intricate carvings—elephants, birds, and flowers blend with geometric patterns and calligraphic motifs. Unlike Rani ki Vav, which is a gallery of deities, Adalaj feels like a communal living room. The octagonal openings at the top allow light and air to filter down, creating a natural ventilation system that keeps the lower levels nearly 6°C cooler than the surface. You can almost see the ghosts of travellers and local women who once spent their afternoons on these cool stone ledges, escaping the relentless heat to share stories and draw water.The engineering of the Vav is a testament to the sophisticated understanding of hydraulics and soil pressure in the 15th century. Each of its five levels is supported by intricately carved pillars that become more delicate as you move deeper. The stepwell was designed not just to store rainwater, but to tap into the groundwater, ensuring a year-round supply for the thirsty caravans traveling the trade routes. As of May 2026, the site is managed with a focus on heritage conservation, with the surrounding gardens meticulously maintained to provide a peaceful buffer against the growing urban sprawl of nearby Gandhinagar. Standing at the edge of the deep, turquoise pool at the bottom, looking up through the stacked balconies toward the square of blue sky, you realize that Adalaj is a bridge across time—a structure built by an invader, finished for a queen, and preserved by a culture that values the sacredness of every drop of water.What makes Adalaj particularly special to visit today is the way it captures the light. At noon, the sun shines directly down the central shaft, illuminating the intricate carvings of the 'Kalpavriksha' (the tree of life) and the friezes depicting daily life, from musicians to women churning butter. It remains a place of quiet pilgrimage for those who know the Queen’s story; even today, many visitors leave small offerings of flowers at the shrine of the well. It is a structure that serves as a reminder that even in the midst of war and shifting empires, the human need for beauty, water, and honor remains constant. Adalaj isn't just a well; it is a five-story deep poem carved in sandstone, standing as a silent witness to a queen who gave her life to ensure her people never went thirsty.",
    images: [step1, step2, step3],
  },
  {
    name: "Sarkhej Roza",
    description:
      "Sarkhej Roza is a place where the grandeur of an imperial tomb meets the quiet reflection of a desert retreat, often described as the 'Acropolis of Ahmedabad.' Located in the village of Makarba, it is a vast complex of tombs, mosques, and palaces built around a massive man-made lake. Unlike the crowded, bustling energy of the city's other monuments, Sarkhej has a distinct, melancholic beauty that comes from its sheer scale and its unique 'Indo-Saracenic' architecture. It was originally the home and retreat of the revered Sufi saint Sheikh Ahmed Ganj Baksh, a spiritual advisor to Sultan Ahmed Shah. When the saint passed away in 1445, the Sultan commissioned a magnificent mausoleum in his honor, and eventually, the complex expanded to become the final resting place for the royalty of the Gujarat Sultanate, including the legendary Mahmud Begada.The 'human' soul of Sarkhej Roza lies in its incredible design, which manages to feel both monumental and intimate. Architects often point to this site as one of the finest examples of the fusion of Persian and Hindu architectural styles. You’ll see the heavy, ornate stone carvings and pillared halls typical of Hindu temples seamlessly blended with the soaring arches and geometric lattice work of Islamic tradition. One of the most moving parts of the complex is the central courtyard and the massive tank, which was once filled with water to provide a cooling effect for the entire site. Walking through the pillared pavilions that overlook the lake, you can imagine the Sultan and his court coming here to seek spiritual guidance from the saint or to escape the political pressures of the capital. It was a place where the sacred and the royal lived side-by-side.As of early 2026, Sarkhej Roza has become a hub for the cultural revival of Ahmedabad’s heritage. Because of its stunning acoustics and dramatic stone backdrops, it frequently hosts Sufi music festivals and classical dance performances that bring the 'Roza' to life under the moonlight. The complex is currently part of a long-term conservation project aimed at restoring the water-retaining capacity of the central lake and stabilizing the delicate stone jalis (lattice screens) that filter the sunlight into beautiful, shifting patterns on the floors. Even for those who aren't history buffs, the site offers a rare sense of peace; it’s a favorite spot for local artists and photographers who come to capture the play of light through the colonnades or to watch the sunset turn the sandstone into a deep, glowing amber.What stays with you about Sarkhej Roza is the feeling of 'deserted majesty.' While many of Ahmedabad's monuments have been swallowed by the city, the Roza still feels like a quiet island of history. When Le Corbusier, the famous modern architect, visited Ahmedabad, he was reportedly captivated by the proportions and the 'purity' of Sarkhej, comparing its layout to the Parthenon in Athens. It remains a testament to a time when architecture was used to create a bridge between the physical and the spiritual worlds. Standing by the saint’s tomb, surrounded by the silence of the massive stone arches, you realize that Sarkhej Roza isn't just a graveyard for kings; it is a monument to a Sufi spirit of peace that continues to watch over the city centuries later.",
    images: [Roza1, Roza2],
  },
  {
    name: "Mohabbat Maqbara",
    description:
      "The Mahabat Maqbara is one of India's most visually arresting and architecturally defiant monuments, standing as a testament to the eclectic tastes of the Junagadh Nawabs. Located in the heart of Junagadh city, this 19th-century mausoleum is a dizzying fusion of Gothic, Islamic, and Hindu architectural styles that shouldn't work together on paper, yet create a masterpiece of 'Indo-Saracenic' art in reality. Commissioned by Nawab Mahabat Khan II in 1878 and completed by his successor in 1892, the complex houses the tombs of Mahabat Khan II and his vizier, Bahauddin Hussain Bhar. What makes it so humanly fascinating is its unapologetic 'more is more' philosophy—it feels less like a somber graveyard and more like a fever dream of a world traveler who wanted to combine every beautiful thing he had ever seen into a single structure.The 'wow' factor of the Mahabat Maqbara lies in its verticality and its whimsical details, particularly the four minarets that flank the vizier’s tomb, known as the Bahauddin Maqbara. These minarets are wrapped in winding, spiral staircases that climb toward the sky, a feature so unique and photogenic that it has made the site a global sensation for historians and travelers alike. The facades are a riot of stone carvings, featuring Gothic-style pointed arches and French-inspired windows alongside traditional Islamic domes and Hindu-style ornate pillars. Walking through the complex, you realize that this wasn't just a funerary site; it was a statement of power and cultural openness, built at a time when Junagadh was a princely state navigating the influences of the British Raj and its own deep-seated traditions.As of May 2026, the Mahabat Maqbara remains a centerpiece of Junagadh’s historical tourism, often visited alongside the nearby Uparkot Fort. While parts of the complex show the weathering of over a century, there is a hauntingly beautiful 'ruin' quality to the yellowing sandstone that only adds to its atmosphere. It is a favorite spot for local residents who walk through the grounds in the late afternoon, and for photographers who wait for the specific hour when the sun hits the spiral staircases, casting dramatic, swirling shadows across the courtyard. Unlike the Taj Mahal, which is defined by its perfect symmetry and white marble purity, the Mahabat Maqbara is defined by its complexity, its yellow-warm stone, and its stubborn refusal to fit into any single architectural box.What stays with you about this site is the sheer audacity of its design. In an era where most religious or royal architecture followed strict codes, the Nawabs of Junagadh chose to build something that looked like it belonged in a fairy tale. Standing between the towering minarets and looking up at the intricate stone 'jalis' and the onion-shaped domes, you feel a sense of the eccentric, vibrant history of the Saurashtra region. It is a monument that reminds every visitor that beauty doesn't always come from rules; sometimes, it comes from the courage to mix the old with the new, the East with the West, and the sacred with the spectacular. It remains one of Gujarat’s most iconic silhouettes, a stone-carved poem to a time of grand visions and unbridled imagination.",
    images: [Mohabbat1, Mohabbat2],
    source: "",
  },
  {
    name: "Dholavira",
    description:
      "Dholavira is a colossal testament to human ingenuity, standing as one of the most remarkable metropolitan cities of the Indus Valley Civilization. Located on Khadir Bet island in the Great Rann of Kutch, this UNESCO World Heritage Site dates back to roughly 2500 BCE. While other Harappan sites like Lothal were maritime hubs, Dholavira was a fortified masterpiece of stone architecture and water management. What makes it profoundly 'human' is how its ancient inhabitants turned a harsh, salt-crusted desert into a thriving oasis. Unlike the mud-brick cities of the Indus plains, Dholavira was built almost entirely of sun-baked bricks and exquisitely polished stones, reflecting a level of craftsmanship and urban pride that still resonates today.The soul of Dholavira lies in its groundbreaking mastery of water—a survival skill that feels incredibly modern in our era of climate change. Living in an area with no perennial rivers, the Dholavirans engineered a sophisticated network of 16 massive reservoirs. They harvested every drop of rain and diverted water from two seasonal streams, the Mansar and Manhar, into stone-cut channels. Walking through the ruins today, you can see the deep, stepped tanks that could hold enough water to sustain a population of 20,000 for years. It is a humbling experience to stand at the edge of these 4,500-year-old 'grand dams' and realize that these people had mastered hydraulic engineering long before the rise of the Roman Empire.The city's layout reveals a highly organized and perhaps even democratic social structure. It is divided into three distinct parts: the Citadel (the high-ranking administrative heart), the Middle Town, and the Lower Town. The most iconic find here is the 'Signboard'—ten large Indus script characters made of white gypsum. While the script remains undeciphered, the sheer scale of the letters (each about 15 inches high) suggests it was once mounted over a majestic gateway to welcome travelers and merchants. It acts as a haunting greeting from the past, a silent reminder that these people had a name, a language, and a message they wanted the world to see.As of early 2026, Dholavira has become much more accessible thanks to the completion of the 'Road to Heaven,'' a stunning 30-kilometer highway that cuts directly through the white salt desert of the Rann. This road has transformed the journey from a grueling trek into a breathtaking drive, where the turquoise waters of the Rann meet the white salt flats. The site is now a focal point for the National Maritime Heritage project, with enhanced visitor facilities and 3D digital tours that help visitors visualize the towering walls and bustling markets that once stood here.Visiting Dholavira is a journey into the very roots of Indian civilization. Whether you are examining the world’s oldest known stadium—a massive tiered ground used for festivals or sports—or looking at the intricate jewelry made of gold, copper, and shell, you feel a deep connection to these ancient urbanites. They weren't just survivors; they were planners, artists, and engineers who built a 'Smart City in the middle of a desert. As the wind whistles through the stone gateways of the Citadel, Dholavira stands as a magnificent proof that human brilliance can flourish in the most challenging environments on Earth.",
    images: [Dhol1, Dhol2],
  },
  {
    name: "Modhera Sun Temple",
    description:
      "The Modhera Sun Temple is a breathtaking architectural hymn to the solar deity, standing as the crowning achievement of the Solanki dynasty’s 'Golden Age' in Gujarat. Built in 1026-27 CE by King Bhimdev I on the banks of the Pushpavati River, this temple is not just a place of worship but a monumental astronomical instrument carved in sandstone. What makes it profoundly 'human' is its resilience; despite being despoiled by invaders and weathered by a millennium of sun and wind, the temple continues to command a sense of solar majesty. Its design ensures that during the equinoxes, the first rays of the rising sun would strike the diamond-studded crown of the deity once housed in the inner sanctum, perfectly bridging the gap between celestial mechanics and earthly devotion.The complex is divided into three distinct but harmoniously linked sections, each a masterpiece of geometry. First is the Surya Kund, an enormous, rectangular stepped tank that served as a reservoir for ritual cleansing. It is a stunning visual maze of 108 miniature shrines and geometrically perfect stairs that lead down to the water, creating a rhythmic pattern that looks like a stone-carved ripple. Next is the Sabha Mandap (Assembly Hall), an open-pillared structure that is perhaps one of the most intricately carved buildings in India. Its 52 pillars—representing the 52 weeks of the year—are a riot of carvings depicting scenes from the Ramayana, Mahabharata, and the daily lives of the people, from musicians to dancers. Finally, the Guda Mandap (Sanctum Sanctorum) stands on a plinth designed like an inverted lotus, its exterior walls featuring the twelve different forms of the Sun God (Adityas) corresponding to the twelve months of the year.The artistic detail at Modhera is so dense that it feels as though the stone itself has been embroidered. Every inch of the facade is covered with life-sized figures, celestial nymphs, and floral motifs that capture the vibrancy of 11th-century life. As you walk through the Sabha Mandap, the interplay of light and shadow through the pillars creates a cinematic effect, making the carved dancers appear as though they are mid-movement. This 'human' element—the celebration of dance, music, and the seasons—shows that the temple was as much a community cultural center as it was a religious shrine. In January, this tradition is reborn during the Uttarardh Mahotsav, where classical dancers perform against the illuminated temple, proving that the rhythm of the stone and the rhythm of the human feet are one and the same.As of May 2026, Modhera has achieved a new global milestone: it is India's first 24x7 solar-powered village. This is a beautiful historical irony—a town built a thousand years ago to honor the sun is now entirely fueled by it through modern solar panels and battery storage. Visitors today can experience a high-tech 3D projection mapping show every evening, which narrates the temple’s history in a symphony of light and sound. The temple is also wheelchair accessible and features modern visitor facilities that blend into the landscape. Standing by the Surya Kund at sunset, as the sandstone glows a deep, fiery orange and reflects in the still water, you realize that Modhera is more than a ruin; it is a timeless celebration of the light that sustains all life, captured in a masterpiece that refuses to fade.",
    images: [Sun1, Sun2],
  },
  {
    name: "Champaner-Pavagadh Archaeological Park",
    description:
      "Champaner-Pavagadh Archaeological Park is a breathtaking 'frozen city' that captures a unique moment in history where a grand capital was built, thrived, and was then abandoned to the forest, leaving behind a pristine architectural time capsule. Located in the Panchmahal district, this UNESCO World Heritage Site is a sprawling landscape where the 800-meter-high Pavagadh Hill—a volcanic formation topped by the sacred Kalika Mata Temple—meets the royal ruins of Champaner at its base. Founded by Vanraj Chavda and later transformed into a magnificent capital by Sultan Mahmud Begada in the 15th century, the site is a rare example of a pre-Mughal Islamic city that remains almost entirely intact in its original layout. What makes it so humanly compelling is the 'lost world' atmosphere; it is a place where nature and stone are in a constant, beautiful embrace, with ancient gateways and mosques emerging suddenly from thick greenery.The architectural heart of Champaner lies in its mosques, which represent the pinnacle of the 'Indo-Saracenic' style—a seamless blend of Islamic structural forms and Hindu-Jain decorative arts. The Jami Masjid is the undisputed masterpiece of the complex, often cited as one of the finest mosques in Western India. As you walk through its massive carved entrance, you are greeted by an expansive courtyard and a prayer hall supported by 172 pillars. The stone 'jalis' (lattice screens) here are so delicate they look like lace, and the ornate 'minbars' and domes feature traditional Hindu floral motifs, like the lotus and the vine. This fusion tells a story of a time when the best craftsmen from different faiths worked together to create a new aesthetic language. Beyond the mosques, the city’s sophisticated urban planning is visible in its massive fortifications, granaries, and an incredibly advanced water system of 'hauz' (tanks) and stepwells like the Helical Stepwell, which descends in a dramatic, spiraling curve.The experience of Champaner is defined by its verticality, bridging the earthly royal city with the spiritual heights of Pavagadh Hill. For centuries, pilgrims have climbed the thousands of steps—or taken the modern ropeway—to reach the Kalika Mata Temple at the summit, which is considered one of the 51 Shakti Peethas. In early 2026, the temple continues to be a vibrant center of faith, especially during Navratri, when the hill echoes with the sounds of bells and chanting. The juxtaposition is striking: at the top, you have the eternal, living energy of the temple, while at the bottom, you have the quiet, haunting majesty of the abandoned palaces and the Saher ki Masjid, which was once the private mosque for the royal family. It is a site that invites exploration, where you can wander from a 10th-century Hindu fortress to a 15th-century royal bath within a single afternoon.As of May 2026, Champaner is benefitting from a massive 'Heritage Circuit' initiative, which has improved trekking trails and added eco-friendly electric shuttles to ferry visitors between the widely scattered monuments. The site has also become a premier destination for 'heritage photography' and night-sky viewing, as the lack of urban light pollution makes the silhouette of the Jami Masjid against the Milky Way a spectacular sight. Whether you are standing in the silent, sun-dappled corridors of the Kevada Masjid or looking out over the plains from the ancient 'Saat Kaman' (Seven Arches) gateway on the hillside, Champaner feels like a place where time has been suspended. It is a monument to the ambition of kings and the endurance of faith, standing as a reminder that even the grandest cities eventually return to the earth, leaving only their beauty behind to tell their story.",
    images: [park1, park2],
  },
  {
    name: "Sabarmati Ashram",
    description:
      "The Sabarmati Ashram, nestled on the quiet banks of the Sabarmati River in Ahmedabad, is far more than a historical site; it is the spiritual and ideological birthplace of modern India. Established by Mahatma Gandhi in 1917, it served as his primary residence and 'laboratory for truth' for thirteen pivotal years. The ashram was founded on the site of an ancient ashram of Sage Dadhichi, who famously donated his bones for a righteous cause—a symbolism that Gandhi embraced as he prepared his followers for the ultimate sacrifice in the pursuit of Ahimsa (non-violence) and Satyagraha. Walking through the shaded, tranquil grounds today, you aren't just visiting a museum; you are stepping into a space that was designed to dismantle the ego and build a nation through the power of simple living and communal labor.The 'human' essence of Sabarmati is found in its profound austerity. The ashram was a self-sustaining community where every resident, from the lowliest volunteer to Gandhi himself, followed a rigorous code of conduct known as the 'Ashram Observances.' This included vows of truth, non-stealing, and the rejection of untouchability. The heart of this experience is Hriday Kunj, the small, white-washed cottage where Gandhi lived with his wife, Kasturba. To see his spinning wheel (Charkha), his wooden clogs, and his writing desk is to realize that the movement that toppled an empire was managed from a floor mat. The ashram was a place where global history was shaped over bowls of simple dal and hand-spun khadi, proving that moral authority does not require a throne.As of May 2026, the Sabarmati Ashram is at the center of a significant and carefully debated ₹1,200-crore Gandhi Ashram Memorial and Precinct Development Project. This massive undertaking aims to restore the ashram to its original 120-acre expanse, which had shrunk to just 5 acres over the decades due to urban encroachment. The project involves the meticulous restoration of nearly 63 original heritage buildings—including the school, the press, and the communal workshops—using traditional materials like lime, timber, and handmade tiles. The goal is to create a world-class memorial that provides visitors with a more immersive, 'village-like' experience of how the ashram operated in the 1920s, ensuring that the message of Gandhi remains accessible to a new generation of global seekers.A visit today offers a multi-layered experience. You can sit at the Upasana Mandir, the open-air prayer ground where Gandhi held morning and evening discourses, watching the river flow by just as he did. The Charles Correa-designed museum, a masterpiece of modern Indian architecture, houses thousands of letters, photographs, and manuscripts that document the salt march and the struggle for freedom. Whether you are participating in a spinning demonstration or walking the quiet paths under the neem trees, the Sabarmati Ashram leaves you with a sense of 'active peace.' It remains a stubborn, beautiful reminder that the most enduring changes in the world don't come from noise and violence, but from the quiet, persistent strength of a well-lived life.",
    images: [Gandhi1, Gandhi2],
  },
];

const facts = [
  "Gujarat has the longest sea shore compared to any other Indian state.",
  "It is locally known as Jewel of the West.",
  "Gujarat has the highest number of vegetarian people compared to any other state in India.",
  "Gandhinagar is the greenest capital city in whole Asia.",
  "Gujarat has seventeen airports, making it the state with the highest number of operating airports in India.",
  "Gujarat is the safest state in India with a crime rate of 8.2, the least in India.",
  "Gujarat has the least crime against women among all Indian states after Goa.",
  "The oil refinery at Jamnagar is the world's largest grass-roots refinery.",
  "The world's third largest denim manufacturer is Ahmedabad's Arvind Mills.",
  "The world's first pure vegetarian Subway and Domino's outlet was opened in Ahmedabad.",
  "Over 60% of Indian population in North America is Gujarati.",
  "Gujarat is the only home of Asiatic Lions.",
  "Amul – Anand Milk Co-operative Federation products are well known all over India, and it is Asia's biggest dairy.",
  "The British East India Company set its first footsteps in Surat in 1818.",
  "Gujarat is derived from Sanskrit (Gurjar-Rashtra), meaning the Gurjar nation. It was known as Gurjaratra (country ruled by the Gurjars) or Gurjarabhumi (land of the Gurjars) for centuries prior to the Mughal period.",
];

const artGallery = [
  {
    title: "Patola Saree",
    emoji: "🥻",
    color: "#C0392B",
    desc: "Iconic double ikat silk saree from Patan",
    image: gPatola,
  },
  {
    title: "Kutchi Embroidery",
    emoji: "🧵",
    color: "#E67E22",
    desc: "Vibrant mirror-work embroidery from Kutch",
    image: gKutchi,
  },
  {
    title: "Bandhani",
    emoji: "🎨",
    color: "#8E44AD",
    desc: "Traditional tie-dye textile art of Gujarat",
    image: gBandhani,
  },
  {
    title: "Undhiyu",
    emoji: "🫕",
    color: "#27AE60",
    desc: "Classic slow-cooked winter vegetable dish",
    image: gUndhiyu,
  },
  {
    title: "Dhokla",
    emoji: "🍰",
    color: "#F1C40F",
    desc: "Fluffy steamed fermented chickpea snack",
    image: gDhokla,
  },
  {
    title: "Fafda-Jalebi",
    emoji: "🥨",
    color: "#E8A020",
    desc: "Beloved crispy and sweet breakfast combo",
    image: gFafdaJalebi,
  },
  {
    title: "Thepla",
    emoji: "🫓",
    color: "#D4AC0D",
    desc: "Spiced flatbread made with fenugreek leaves",
    image: gThepla,
  },
  {
    title: "Ajrakh Print",
    emoji: "🖼️",
    color: "#1A5276",
    desc: "Ancient block-print textile from Kutch",
    image: gAjrakh,
  },
];
