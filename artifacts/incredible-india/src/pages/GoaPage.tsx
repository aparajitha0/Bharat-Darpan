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
import goaMap from "@assets/goa_images/goaMap.jpg";
import goacarnival1 from "@assets/goa_images/goacarnival1.jpg";
import goacarnival2 from "@assets/goa_images/goacarnival2.jpg";
import goacarnival3 from "@assets/goa_images/goacarnival3.jpg";
import FeastXavier1 from "@assets/goa_images/FeastXavier1.jpg";
import FeastXavier2 from "@assets/goa_images/FeastXavier2.jpg";
import sunburn1 from "@assets/goa_images/sunburn1.jpg";
import sunburn2 from "@assets/goa_images/sunburn2.jpg";
import saojoao1 from "@assets/goa_images/saojoao1.jpg";
import saojoao2 from "@assets/goa_images/saojoao2.jpg";
import saojoao3 from "@assets/goa_images/saojoao3.jpg";
import shigmo1 from "@assets/goa_images/shigmo1.png";
import shigmo2 from "@assets/goa_images/shigmo2.jpg";
import shigmo3 from "@assets/goa_images/shigmo3.jpg";
import shigmo4 from "@assets/goa_images/shigmo4.jpg";
import chovoth1 from "@assets/goa_images/chovoth1.jpg";
import chovoth2 from "@assets/goa_images/chovoth2.jpg";
import bonderam1 from "@assets/goa_images/bonderam1.jpg";
import bonderam2 from "@assets/goa_images/bonderam2.jpg";
import bonderam3 from "@assets/goa_images/bonderam3.jpg";
import basilica1 from "@assets/goa_images/basilica1.jpg";
import basilica2 from "@assets/goa_images/basilica2.jpg";
import basilica3 from "@assets/goa_images/basilica3.jpg";
import chapelcatherine1 from "@assets/goa_images/chapelcatherine1.jpg";
import assissi1 from "@assets/goa_images/assissi1.jpg";
import assissi2 from "@assets/goa_images/assissi2.jpg";
import assissi3 from "@assets/goa_images/assissi3.jpg";
import rosary1 from "@assets/goa_images/rosary1.jpg";
import rosary2 from "@assets/goa_images/rosary2.jpg";
import rosary3 from "@assets/goa_images/rosary3.jpg";
import rosary4 from "@assets/goa_images/rosary4.jpg";
import cathedral1 from "@assets/goa_images/cathedral1.jpg";
import cathedral2 from "@assets/goa_images/cathedra2.jpg";
import cathedral3 from "@assets/goa_images/cathedral3.jpg";
import cathedral4 from "@assets/goa_images/cathedral4.jpg";
import augustine1 from "@assets/goa_images/augustine1.jpg";
import augustine2 from "@assets/goa_images/augustine2.jpg";
import cajetan1 from "@assets/goa_images/cajetan1.jpg";
import cajetan2 from "@assets/goa_images/cajetan2.jpg";
import cajetan3 from "@assets/goa_images/cajetan3.jpg";
import dudhsagar1 from "@assets/goa_images/dudhsagar1.jpg";
import dudhsagar2 from "@assets/goa_images/dudhsagar2.jpg";
import dudhsagar3 from "@assets/goa_images/dudhsagar3.jpg";
import chapora1 from "@assets/goa_images/chapora1.jpg";
import chapora2 from "@assets/goa_images/chapora2.jpg";
import chapora3 from "@assets/goa_images/chapora3.jpg";
const aguada1 = "https://i.postimg.cc/WzdWSk6B/aguada1-jpg.jpg";
import aguada2 from "@assets/goa_images/aguada2.jpg";
import aguada3 from "@assets/goa_images/aguada3.jpg";
import aguada4 from "@assets/goa_images/aguada4.jpg";
import anjuna1 from "@assets/goa_images/anjuna1.jpg";
import anjuna2 from "@assets/goa_images/anjuna2.png";
import anjuna3 from "@assets/goa_images/anjuna3.jpg";
import anjuna4 from "@assets/goa_images/anjuna4.jpg";
import fontainhas1 from "@assets/goa_images/fontainhas1.jpg";
import fontainhas2 from "@assets/goa_images/fontainhas2.jpg";
import fontainhas3 from "@assets/goa_images/fontainhas3.jpg";
import fontainhas4 from "@assets/goa_images/fontainhas4.jpg";
import calanguate1 from "@assets/goa_images/calanguate1.jpg";
import calanguate2 from "@assets/goa_images/calanguate2.jpg";
import beach1 from "@assets/goa_images/beach1.jpg";
import beach2 from "@assets/goa_images/beach2.jpg";
import beach3 from "@assets/goa_images/beach3.jpg";
import beach4 from "@assets/goa_images/beach4.jpg";
import gAlsanyache from "@assets/goa_images/gAlsanyache.jpg";
import gAmbot from "@assets/goa_images/gAmbot.jpg";
import gBalchao from "@assets/goa_images/gBalchao.jpg";
import gBiyaam from "@assets/goa_images/gbiyaam.jpg";
import gCafreal from "@assets/goa_images/gCafreal.jpg";
import gCrabxacuti from "@assets/goa_images/gcrabxacuti.jpg";
import gKismur from "@assets/goa_images/gKismur.jpg";
import gFishcurry from "@assets/goa_images/gFishcurry.jpg";
import gPorkvindaloo from "@assets/goa_images/gPorkvindaloo.jpg";
import gNarasimhatemple from "@assets/goa_images/gNarasimhatemple.jpg";
import gSpicesanjuna from "@assets/goa_images/gSpicesanjuna.jpg";
import gPalolem from "@assets/goa_images/gPalolem.jpg";
import gCalanguate from "@assets/goa_images/gCalanguate.jpg";
import gAnjunabeach from "@assets/goa_images/gAnjuna.jpg";
import gColabeach from "@assets/goa_images/gCola.jpg";

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
export default function GoaPage() {
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
                Goa
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Pearl of the Orient
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Panaji" },
                  { label: "Population", value: "14.58 Lakh" },
                  { label: "Area", value: "3,702 sq km" },
                  { label: "Founded", value: "30 May 1987" },
                  {
                    label: "Language",
                    value: "Konkani, Marathi, English, Portuguese",
                  },
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
              Panaji
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Goa — Rome of the East
            </p>
          </div>
        </Section>

        {/* Map of Goa — click to enlarge */}
        <Section title="Map of Goa" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(goaMap, "Map of Goa")}
            >
              <img
                src={goaMap}
                alt="Map of Goa"
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
              Goa is a state on the southwestern coast of India within the
              Konkan region. It is geographically separated from the Deccan
              highlands by the Western Ghats. It is bordered by the Indian
              states of Maharashtra to the north and Karnataka to the east and
              south, with the Arabian Sea forming its western coastline. It was
              the capital of the eastern Portuguese empire until 1961. Panaji
              (Panjim) is the state's capital, while Vasco da Gama is its
              largest city by population. The state's official language is
              Konkani, spoken by the majority of its inhabitants.
            </p>
            <p className="text-foreground">
              The Portuguese, who first voyaged to the subcontinent in the early
              16th century as merchants, conquered it on request of Timoji
              shortly thereafter. Goa became an overseas territory of the
              Portuguese Empire and part of what was then known as Portuguese
              India, remaining under Portuguese rule for approximately 451 years
              until its annexation by India in December 1961. The historic city
              of Margão (Madgaon) still reflects the cultural legacy of
              colonisation.
            </p>
            <p className="text-foreground">
              Goa encompasses an area of 3,702 km2 (1,429 sq mi). The highest
              point is the Sonsogor Peak, with an altitude of 1,026 m (3,366
              ft). Goa has a coastline of 160 km (99 mi). Goa's seven major
              rivers are the Mandovi, Zuari, Terekhol, Chapora, Galgibag,
              Cumbarjua canal, Talpona, and the Sal. The Zuari and the Mandovi
              are the most important rivers, interspaced by the Cumbarjua canal,
              forming a major estuarine complex. These rivers are fed by the
              Southwest monsoon rain and their basin covers 69% of the state's
              geographical area. These rivers are some of the busiest in India.
            </p>
            <p className="text-foreground">
              The state is divided into two administrative districts—North Goa
              and South Goa. Panaji (Panjim) is the headquarters of North Goa
              district and is also the capital of Goa. North Goa is further
              divided into three subdivisions—Panaji, Mapusa, and Bicholim; and
              five talukas (subdistricts)—Tiswadi (Panaji), Bardez (Mapusa),
              Pernem, Bicholim, and Sattari (Valpoi). Margao (Madgaon) is the
              headquarters of the South Goa district. It is also the cultural
              and commercial capital of Goa. South Goa is further divided into
              five subdivisions—Ponda, Mormugao-Vasco, Margao, Quepem, and
              Dharbandora; and seven talukas—Ponda, Mormugao, Salcete (Margao),
              Quepem, and Canacona (Chaudi), Sanguem, and Dharbandora.Goa has a
              total number of 334 villages.
            </p>
            <p className="text-foreground">
              Tamil Nadu is bounded on north by Andhra Pradesh and Karnataka, on
              the west by Kerala, on the east by the Bay of Bengal, and on the
              south by the Indian Ocean.
            </p>
            <p className="text-foreground">
              In ancient literature, Goa was known by many names, such as
              Gomanchala, Gopakapattana, Gopakapattam, Gopakapuri, Govapuri,
              Govem, and Gomantak. Other historical names for Goa are Sindapur,
              Sandabur, and Mahassapatam.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Goa is widely regarded as the "Beach Capital of India" and a
              premier "Party Capital" due to its vibrant nightlife, sandy
              coastlines, and laid-back atmosphere. As India's smallest state,
              it is recognized for its unique blend of Portuguese-Indian
              culture, rich heritage, and high quality of life.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: wikipedia, mapsofindia.com)
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
        <Section title="Facts about Goa" icon="💡">
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
            Scroll horizontally to explore Goa's iconic foods, crafts, dance,
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
    name: "Viva Carnaval",
    tagline: "The annual carnival of Goa (aka Entrado)",
    description:
      "The Goa Carnival is the largest in India and one of the few traditional celebrations of the Western Christian holiday in Asia. The current version of the Goa Carnival was modelled after the Rio Carnival by a local Goan musician named Timoteo Fernandes and imposed in 1965 to attract tourists. It has since turned into a major tourist attraction for the state. The urban parade includes floats from local villages, commercial entities, and cultural groups. It is still organised in a very traditional manner, including by the staging of streetside local plays called Khell tiatrs, in various villages, especially in the taluka of Salcete. Live bands play traditional Konkani, Latin, and EDM music throughout the festivities. Streets become open dance floors, where locals and visitors groove to the beat of lively tunes. The traditional mask dances and performances by local artists also add to the celebration. Beyond the parades, street performances, including acrobatics and fire-breathing shows are also held. According to the Government of Goa's Department of Tourism, the carnival is Goa's most famous festival and has been celebrated since the 18th century. The Carnival usually starts off on Fat Saturday (known as Sabado Gordo) and concludes on Fat Tuesday (known as Shrove Tuesday), just before Ash Wednesday and the first day of the Western Christian season of Lent, observed by Christians of the Roman Catholic, Lutheran and Anglican denominations, among others. In Panjim, the capital of Goa, the festival is complemented by Grape Escapade, a local wine festival, and a dance at Samba Square in the centrally located Garden of Garcia da Orta. According to local tradition, during Carnival Goa is taken over by King Momo, usually a local resident who presides over the festival during the four-day span. King Momo traditionally proclaims the Konkani message (English: 'Eat, drink and make merry').",
    images: [goacarnival1, goacarnival2, goacarnival3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Feast of St. Francis Xavier",
    tagline:
      "Honors the 16th-century Spanish Jesuit missionary and co-founder of the Society of Jesus known as the 'Apostle of the Indies' for his extensive efforts in spreading Christianity across Asia",
    description:
      "The Feast of St. Francis Xavier is one of Goa’s most significant religious festivals, celebrated annually on December 3rd to honour the patron saint of the region. Held at the Basilica of Bom Jesus in Old Goa, where the saint's relics are enshrined, this event draws thousands of pilgrims and tourists from around the world. During this decennial event, the saint’s relics are displayed for public veneration, offering a unique spiritual experience. The celebration includes masses, processions, and novenas leading up to the feast day, creating a deep sense of faith and community. This festival, especially during an exposition year, is a profound way to experience Goa’s rich religious and cultural heritage. He is considered the protector of Goa, and the feast transcends religious boundaries, with many locals participating. Nine days of prayer (novena) precede the feast on December 3, attracting pilgrims who participate in a walking pilgrimage. A massive fair occurs concurrently, featuring local food, sweets, and handicrafts, making it a crucial social event.",
    images: [FeastXavier1, FeastXavier2],
    source: "(src: Wikipedia)",
  },
  {
    name: "The Sunburn Festival",
    tagline: "Asia's largest three-day Electronic Dance Music (EDM) festival.",
    description:
      "The Sunburn Festival is Asia's largest electronic dance music (EDM) festival and a globally renowned beach festival in Goa. Known for its electrifying performances by top international DJs, immersive stage designs, and vibrant coastal atmosphere, it attracts music enthusiasts from across the world. With its fusion of music, dance, and the quintessential Goan beach vibe, the Sunburn Festival is a must-attend event for anyone looking to experience Goa’s energetic nightlife and festive spirit. The festival drives massive growth in hospitality, including hotels, guesthouses, and restaurants. Sunburn has evolved into a significant experiential event offering workshops (puppets, kite making) and nightlife experiences. It was held annually in Vagator, Goa from 2007 to 2015, and shifted to Pune, Maharashtra in 2016. In 2019, the festival returned to Vagator, Goa. According to a 2014 International Music Summit report, Sunburn was 'as big as Tomorrowland and Ultra'. It was ranked by CNN in 2009 as one of the Top 10 Festivals in the world.",
    images: [sunburn1, sunburn2],
    source: "(src: hindustantimes, sunburn.in)",
  },
  {
    name: "São João",
    tagline: "Festival honouring St.John - the Baptist.",
    description:
      "is an annual Catholic religious festival celebrated on 24 June in Goa, India. According to tradition, after attending Mass, young Goan Catholics leap into and swim in local wells, streams, and ponds as a tribute to Saint John the Baptist. The feast of São João is a celebration of the birth anniversary of Saint John the Baptist. Saint John was the son of Saint Elizabeth, a relative of Mary, mother of Jesus. One day, when Mary visited Elizabeth, the baby Saint John 'leapt' in her womb upon hearing Mary's greeting (Luke 1:44) When Jesus was thirty years old, he was baptised by Saint John in the Jordan River. The Nativity of John the Baptist is known to be one of the oldest festivals of the Christian church, and records show that it was celebrated as a big feast in 506 AD. The feast of São João in Goa coincides with the time of the year when the monsoon in Goa has usually commenced, there are fresh greenery and flowers in the surroundings, and wells and other water bodies are full. Consequently, the celebration of the birth of Saint John in Goa apparently evolved to incorporate elements of celebration of the rainy season. Jumping in wells and ponds is symbolic of the baby Saint John leaping in the womb, and of the baptism of Jesus in the river Jordan. People wear kopels (transl. crowns) made of flowers and a creeper known locally as sanjuachi vaal (transl. creeper of São João). The creeper is found growing in wells during the early monsoons. It also has small red flowers that add to the beauty of the kopel. Some believe that the creeper was worn by Saint John himself. While the São João celebrations are 'centuries old', a more recent tradition is followed in the village of Siolim, in Bardez taluka, featuring colourful floats on boats. These festivities date back 175 years, when São João revellers from Chapora and Zhor villages of Anjuna, Badem in Assagao, and Siolim would come in boats to the chapel of São João in Pereira Vaddo, Siolim, every year, to pay homage to the saint. São João is also a celebration of thanksgiving for newly-weds, and for families with babies born during the preceding year. It is thus referred to as Zanvoiamchem fest (transl. - son-in-law's feast) locally. The newly married son-in-law is invited for lunch by his mother-in-law, following which the son-in-law is warmly welcomed with the bursting of firecrackers. This is meant to signify that a marriage is not just between two families but between two villages.",
    images: [saojoao1, saojoao2, saojoao3],
    source: "(src: stayvista.com, wikipedia, scroll.in)",
  },
  {
    name: "Shigmo",
    tagline: "The spring festival of Goa (aka-Shishirotsava).",
    description:
      "It is one of the major festivals of the Hindu community. It is also celebrated by Konkani diaspora and Indian festival of Holi is part of it. It is Goa's vibrant 14-day Hindu spring festival, held annually in March or April to welcome spring and celebrate the harvest. It features spectacular, colorful street parades across Goa—particularly in Ponda, Panaji, and Margao—showcasing folk dances, traditional music, and massive, illuminated floats depicting Hindu mythology. Large crowds witness the spectacular performances. A float parade winds its way down the streets once the sun sets and the lights come on.The music is typically dhol, taasha and kasale. Usually the festivities revolve around the village Mand. The Mand-dev and folk dieties are an essential part of the traditions. Goa observes two varieties of Shigmo: Dhakla (younger) and Thorla (Elder). The first is celebrated in Tiswadi, Ponda, Calangute and Quepem while the other in Bardez, Sattari, Bicholim and Pernem. In dance, the rombat form is popular. Here groups of dancers join in dressed in colourful attire. The elaborate attire and variety of instruments make this form special.Historic and comic elements combine to impart a rich and unique flavor to this festival.. Both these elements are evident in the different dance forms like Veeramel, Gade, Ghodemodni that highlight the heroic aspect. The comic aspects come through in the Zagor, Ranmalyem, Khele and Romat.Given its nature worship, the dance is dedicated to the gods and goddesses Shantaguru-Kuti, Santeri, Ravalnath, Shantadurga-Damodar and others. The festival also showcases the varied cultural aspects of Goa. Most of these dances are performed at the various Shigmo parades in towns across Goa. It’s a wonderful experience to witness these first hand as Goa’s traditions come alive. All these celebrations culminate at the frenzied climax of Holi, the festival of colours.",
    images: [shigmo1, shigmo2, shigmo3, shigmo4],
    source: "(src: ItsGoa, Incredible Goa, NDTV, TOI)",
  },
  {
    name: "Chovoth",
    tagline: "Ganesh Chaturthi of Goa.",
    description:
      "The most important and almost the national festival for Goan’s is the Ganesh Chaturthi known as ‘Chovoth’. The festivities run into several days, but minimum at least for one and half days, when puja of Gouri and Mahadev along with Ganapati, is performed. On the Chovoth day, in the morning or evening, a clay idol of Ganapati is brought home. Before that a matov (a small pandal above the place where the idol is place) is prepared with bunches of betel nut, coconut, bananas and branches of mango-trees being necessary ingredients of it. The puja of Ganapati goes on until mid-day. The puja is performed with the help of the pandit. On the second day, in the evening or at night, after performing the uttar puja of the image of Ganapati, it is taken in procession and immersed into a water body be it the sea, creek, river, lake or well. Before the idol is removed from its stand for immersion, it is besought for the welfare of the household and its members. The villages of Cumbharjua, Marcel and St Estevan enjoy a just reputation for their giant images of Ganapati made from different raw materials.While the festival is celebrated for one-and-a-half days in most houses, it can stretch upto 11 days. In community celebrations, the idol is worshipped for 9 to 21 days.",
    images: [chovoth1, chovoth2],
    source: "(src: ItsGoa, Wikipedia)",
  },
  {
    name: "Bonderam Festival",
    tagline:
      "Commemorates a historical protest against Portuguese territorial flags.",
    description:
      "The Bonderam Festival takes place on the fourth Saturday of August each year on Divar Island, which lies about 10 kilometres from Panaji. Known for its rich blend of tradition, history, and creativity, Bonderam is celebrated with flag parades, colourful floats, and cultural performances. While the main festival is usually held in the last week of August, Malar kicks off the Bonderam celebrations a week earlier. It is popularly known as the “Festival of Flags” and is one of Goa’s most unique cultural events. It combines historical remembrance, traditional music, dance, and community spirit, transforming the peaceful island of Divar into a vibrant centre of festivity. The Bonderam Festival has its roots in the Portuguese colonial period in Goa. Historically, the villagers of Divar Island often engaged in disputes over land ownership and territorial boundaries between different wards (locally called vaddos). To resolve these conflicts, the Portuguese authorities introduced a system of placing flags to demarcate boundaries between properties. However, the villagers were dissatisfied with this imposed system and began protesting by knocking down or defacing the flags. Over time, these acts of resistance evolved into a symbolic and festive event. The word ‘Bonderam’ is derived from the Portuguese word bandeira, meaning “flag.” What began as a protest against colonial land demarcation eventually transformed into a joyful celebration of local unity and identity. The highlight of the festival is the ceremonial flag parade. Villagers from different vaddos (wards) of Divar Island carry bright, colourful flags and march through the village streets, re-enacting the historical protest against Portuguese rule in a cheerful and symbolic manner. There are also Float Parade, Mock fights and games, Music-Dance, Cuisine and Community gatherings.",
    images: [bonderam1, bonderam2, bonderam3],
    source: "(src: Goan Festival, Goa tourism, Boldsky)",
  },
];

const historicalPlaces = [
  {
    name: "Churches amd Convents of Goa (UNESCO World Heritage Site)",
    description:
      "The Churches and Convents of Goa is a serial property located in the former capital of the Portuguese Indies, which is on the west coast of India about 10 km east of the state capital Panjim. These seven monuments exerted great influence in the 16th to 18th centuries on the development of architecture, sculpture, and painting by spreading forms of Manueline, Mannerist, and Baroque art and architecture throughout the countries of Asia where Catholic missions were established. The surviving churches and convents in Goa are the Chapel of St. Catherine (1510); the Church and Convent of St. Francis of Assisi (1517, rebuilt in 1521 and 1661); the Church of Our Lady of Rosary (1549); Sé Cathedral (1652); the Church of St. Augustine (1602; the Basilica of Bom Jesus (1605); and the Chapel of St. Cajetan (1661).",
    images: [],
    subPlaces: [
      {
        name: "Basilica of Bom Jesus",
        location: "Old Goa",
        description:
          "The Basilica of Bom Jesus is a Catholic basilica in Goa, in the Konkan region of India. The church is a pilgrimage centre and recognised by UNESCO as a World Heritage Site.  It is located in Old Goa, the former capital of Portuguese India, and holds the body of St Francis Xavier. It is one of the Seven Wonders of Portuguese Origin in the World. Construction work on the church began in 1594. The church was consecrated in May 1605 by the archbishop, Aleixo de Menezes. This world heritage monument has emerged as a landmark in the history of Christianity.",
        images: [basilica1, basilica2, basilica3],
        source: "(src: wikipedia)",
      },
      {
        name: "Chapel of St. Catherine",
        location: "Old Goa",
        description:
          "The Chapel of St. Catherine (Portuguese: Capela de Santa Catarina) is a UNESCO World Heritage Site located in Old Goa in the same compound as Se Cathedral and the Church and Convent of St. Francis of Assisi. It is the first catholic church built in Goa. It was built in 1510 in the Baroque architectural style, and has a brown and white facade. It faces the Mandovi River and is part of the World Heritage Site, Churches and convents of Goa. The chapel is not functional. It was erected by Afonso de Albuquerque, Portuguese conqueror, in 1510 to commemorate his victorious entry to the city of Goa on St Catherine's Day. Pope Paul III granted it status of cathedral in 1534 and it was rebuilt. The chapel was expanded in 1550 at the order of the governor Jorge Cabral, and a new altarpiece was installed as well..",
        images: [chapelcatherine1],
        source: "(src: wikipedia)",
      },
      {
        name: "Church and Convent of St. Francis of Assissi",
        location: "Old Goa",
        description:
          "The Church of St. Francis of Assisi was built in 1661 by the Portuguese in the Portuguese Viceroyalty of India. The Church of St. Francis of Assisi, together with a convent, was established by eight Portuguese Franciscan friars who landed in Goa in 1517. It stands on the site of the principal mosque of the Adil Shahi city, later demolished. It is part of the UNESCO World Heritage Site, Churches and convents of Goa. The original shrine, constructed by the Fransican monks in 1521 and subsequently enlarged, was showing signs of decay, so a new church was constructed and dedicated to the Holy Spirit. Built in 1665, it retained the portal of the old structure which was in the Portuguese–Manueline style. It is a unique architectural specimen, of this style in the country.The façade of the church is built in the Tuscan style of architecture with only the portal being Manueline since it is a relic from the older structure. The façade is also distinctive in that it is flanked by octagonal towers. In 1517, eight Franciscan monks landed in Goa. They immediately set to work and built themselves a small chapel. This chapel was completed in 1521 and dedicated to the Holy Ghost. This building was later expanded upon and later consecrated as a church in 1602. However, it was not in good repair and it was later torn down and reconstructed in 1665.The church is built of laterite blocks, covered with lime plaster. The original Manueline entrance way is flanked by two octagonal towers. The façade of the church is three tiered and has a small niche which houses the statue of Our Lady of Miracles which was brought from Jaffna in Sri Lanka. In contrast to the simple outer façade the interiors of the church are unabashedly and lavishly decorated in the Baroque style using Corinthian influences. The highlight is the main altar, which has fine examples of this kind of work.The altar is dedicated to St. Francis of Assisi and has above it a huge statue of the saint, and another of Jesus. These statues display excellent features and attention to detail. Flanking the altar are superb paintings on wood depicting scenes from the life of St. Francis of Assisi and the history of the Seraphic Order.Although this church is not as large as the illustrious Se Cathedral, it is beautiful nonetheless. It is a single-nave church with three small chapels on either side of the nave. There are two altars besides the main one, which is dedicated to St. Francis of Assisi. Behind the altar are rooms which form the sacristy and there is a belfry to the north of the altar. The chapels and the gallery which runs around the top of the church are separated by internal buttresses. The main altar is carved and gilded, and beneath the statues of St. Francis of Assisi and Jesus is inscribed the vows of the saint “poverty, humility and obedience”. Beneath the main vault, is a richly carved niche containing the tabernacle, used for the repose of the Blessed Sacrament. The tabernacle is supported by sculptures of the Four Evangelists, Matthew, Mark, Luke and John.",
        images: [assissi1, assissi2, assissi3],
        source: "(src: wikipedia)",
      },
      {
        name: "The Church of Our Lady of Rosary",
        location: "Old Goa",
        description:
          "The Church of Our Lady of the Rosary is a Catholic church built between 1544 and 1547, in Old Goa, State of Goa, India. This church is part of the collection belonging to the World Heritage Site of churches and convents of Goa. According to the Portuguese historian Gaspar Correia, the Portuguese nobleman Afonso de Albuquerque ordered a small chapel to be built in honor of Our Lady of the Rosary on the spot where he was standing, when he had received the confirmation that his soldiers had completed the Portuguese conquest of Goa in 1510 and defeated the Sultan of Bijapur. The church of Our Lady of the Rosary is considered to be one of the oldest preserved buildings in Old Goa. Also, it is the only building that still has a (mainly) Renaissance construction and architectural elements. Gothic style and Manueline style are present in the exterior and interior. The church is an early testimony of the Christianization of Goa. Since it was located far outside the city centre, it was not subjected to any modernization. Other buildings from the same time period were eventually massively overbuilt and reshaped. The facade of the church has three floors and a two-storied portico flanked by cylindrical buttresses and cylindrical towers, each tower with cupolas crowned with crosses. The high windows, near the roof, give the impression of a fortress church with a cruciform plan. In addition, manual Indian designs are visible elements on the facade. Large cords are located at the cornice as well as the individual towers. The southern tower has a turning staircase to get to the upper choir on the second floor of the tower‑facade and the rood screen. The church's baptismal font is located on the ground floor of the northern tower. On the highest floor of the tower façade, there are light graceful columns in the corners, with window openings on all sides, and suspended bells. The church has two chapels and consists of only one nave with a main altar and two side altars. The main altar is dedicated to Our Lady of Rosary, with the influence of Gothic style seen in the rib vault of the Manueline style portico. The side chapels and the altar are arranged by a leaf-vein vault in the shape of a star.",
        images: [rosary1, rosary2, rosary3, rosary4],
        source: "(src: wikipedia)",
      },
      {
        name: "Sé Cathedral ",
        location: "Old Goa",
        description:
          "The Sé Catedral de Santa Catarina, known as Se Cathedral, is the cathedral of the Latin Church Archdiocese of Goa and Daman and the seat of the Patriarch of the East Indies. It is part of the World Heritage Site, Churches and convents of Goa located in Old Goa, India. The Se Cathedral was built to commemorate the victory of the Portuguese under Afonso de Albuquerque over a Muslim army, leading to the capture of the city of Goa in 1510. Since the day of the victory happened to be on the feast of Saint Catherine, the cathedral was dedicated to her. It was commissioned by Governor George Cabral to be enlarged in 1552 on the remains of an earlier structure. Construction of the church began in 1562 in the reign of King Dom Sebastião. The cathedral was completed in 1619 and was consecrated in 1640. It had two towers, but one collapsed in 1776 and was never rebuilt. In 1953, the cathedral was presented with 'The Golden Rose' by Venerable Pope Pius XII. The Golden Rose is a gold ornament, which the Popes of the Catholic Church have traditionally blessed and conferred as a token of reverence or affection. It is placed on the tomb of St. Francis Xavier.",
        images: [cathedral1, cathedral2, cathedral3, cathedral4],
        source: "(src: Wikipedia)",
      },
      {
        name: "The Church of St. Augustine",
        location: "Old Goa",
        description:
          "Church of St. Augustine is a ruined church complex located in Old Goa. The church was completed in 1602 and is part of the World Heritage Site, Churches and convents of Goa. The church was built on top of the Monte Santo (Holy Hill), between 1597 and 1602 by Augustinian friars who landed in Goa in 1587. The church was considered one of the three great Augustinian churches in the Iberian world along with El Escorial and the Monastery of São Vicente de Fora. The church was abandoned in 1835 after the Portuguese government of Goa began evicting many religious orders in Goa under its new repressive policies. The subsequent neglect caused the vault of the church to collapse in 1842. The body collapsed soon after and by 1871, the bell was moved from the tower to Our Lady of the Immaculate Conception Church in Panjim, where it remains to date. In 1931, the facade of the church and half the tower collapsed and by 1938, most of the other parts had also collapsed. Currently only half the tower remains, and it is one of the most visited tourist destinations in Goa. The ruins were featured in the song ‘Gumnaam Hai Koi’ from the 1965 suspense thriller movie Gumnaam and 'Saathiya' from the Bollywood hit Singham.",
        images: [augustine1, augustine2],
        source: "(src: wikipedia)",
      },
      {
        name: "G)	The Chapel of St. Cajetan",
        location: "Old Goa",
        description:
          "St. Cajetan Church, also known as the Church of Divine Providence, is a church of the Roman Catholic Archdiocese of Goa and Daman located in Old Goa. The church was completed in 1661 and is part of the World Heritage Site, Churches and convents of Goa. Three Italian priests of the Theatine order arrived in India to preach Christianity in 1639. In 1643, they began work on a hospital, but were banished by the Portuguese viceroy Filipe Mascarenhas. However, the leader of the Italian priests, Pedro Avitabili, went to Portugal and convinced king John IV of Portugal that their working with the Portuguese priests in Goa would be in the interests of Christianity. The king permitted the construction of the hospital in 1650, and in 1655 they also managed to obtain permission for setting up the church and a small convent near it. The church's construction was under the supervision of Italian architects, Carlo Ferrarini and Francesco Maria Milazzo. The church is in the form of a Greek cross and has a large dome with Latin inscriptions from the Gospel of Matthew on its inside. The Corinthian style facade of the church has four granite statues of Saints Peter, Paul, John the Evangelist and Matthew. The church has seven altars, with the main altar dedicated to Our Lady of Providence. The main altar is based on the one at Church of San Nicolo, Verona, and was ordered in 1713 by the Theatines under the patronage of Cosimo III de' Medici, Grand Duke of Tuscany. There are three altars on each side of the entrance, with the altar to Saint Cajetan is located on the right. Underneath the cupola on a raised square platform is a well, which is currently covered. The presence of the well has led to the belief that the site once had a Hindu temple. The cemetery below the altar was in 1842 converted into a vault for the bodies of dead Portuguese soldiers, before dispatching them to Lisbon.",
        images: [cajetan1, cajetan2, cajetan3],
        source: "(src: wikipedia)",
      },
    ],
  },
  {
    name: "Dudhsagar Falls",
    description:
      "Dudhsagar Falls (lit. 'Sea of Milk') is a four-tiered waterfall on the Mahadayi River in the Indian state of Goa. It is 60km from Panaji by road and is located on the Belagavi–Vasco Da Gama rail route about 46km east of Madgaon and 80km south of Belagavi . Dudhsagar Falls is perched at the top of a crescent shaped valley and surrounded by pristine forests, and it is amongst India's tallest waterfalls with a height of 310 m (1017 feet) and an average width of 30 metres (100 feet). The falls are located in the Bhagwan Mahaveer Sanctuary and Mollem National Park among the Western Ghats. The falls are a punctuation mark in the journey of the Mandovi River from the Western Ghats to Panjim, where it meets the Arabian Sea. The area is surrounded by deciduous forests with rich biodiversity. There are two routes to reach the falls. One is starting the trek from Kulem and following the jeep trail until the bottom of the waterfall. The second option is via the railway track which is roughly around 11 km. This trek is not allowed by the Government of Goa (Forest Department) as it is very risky being on a railway track with minimum safety. Anyone trekking along the Railway trek can be heavily fined and can even land you in jail.",
    images: [dudhsagar1, dudhsagar2, dudhsagar3],
    source: "(src: Wikipedia, Goa tourism)",
  },
  {
    name: "Chapora Fort",
    description:
      "It is located in Bardez, Goa, rises high above the Chapora River. The site is the location of a fort built by Adil Shahi dynasty ruler Adil Shah and called Shahpoora, whose name was altered to Shapora (chapora) by Malvankar on the request of the Portuguese. Malvankars were naval army of Shivaji, who remained in the surrounding villages. It is now a popular tourist spot and offers a view north across the Chapora River to Morjim. Trying to end the Portuguese rule in Goa, the Marathas in 1683 and made this place his base camp. The Chapora fort [3] sits on a prominent position which commands views in all directions. It also has steep slopes on all sides. The fort follows the outline of the higher slopes. This forms an irregular outer wall that uses the natural form to add defensive height to the fortifications. This offers an advantage over dry ditches being dug. At the top of the steep approach track, the main gate is small and unpretentious, but narrow and deep. Depending on defense requirements, the positions of bastions are irregularly spaced with enormous embrasures for cannon. Each bastion has a cylindrical turret offering a special character to the fort. Inside the fort, the church, once dedicated to St. Anthony, has disappeared and inside only a few signs exist of the barracks and housing that once filled this vast area. The wide expanse of open space is only a tumble of stones, where a few herds of goats graze and cashew bushes grow. A natural valley to the beach protected by rocky promontories provides an excellent natural access to the sea. There is a very interesting story told about Sambhaji’s conquest of this fort. Since the fort is built using the natural slopes of the terrain, it was thought that the enemies of the fort would be unable to scale its walls. However, the shrewd and canny Maratha leader had his men cling to 1.5m long monitor lizards and so easily breached the forts walls. It is said that the Portuguese general in charge of the fort was so taken aback and reluctantly impressed, that he surrendered the fortification without firing a single shot. The Fort of Chapora got popularized by the movie “Dil Chahta Hai” (Starring Amir Khan, Saif Ali Khan, and Akshaye Khanna) and is now a prime attraction of Goa.",
    images: [chapora1, chapora2, chapora3],
    source: "(src: Wikipedia, ItsGoa)",
  },
  {
    name: "Fort Aguada",
    description:
      "Fort Aguada is a seventeenth-century Portuguese-era fort, built in 1612, along with a lighthouse, standing in Goa, India, on Sinquerim Beach, overlooking the Arabian Sea. It is an ASI protected Monument of National Importance in Goa. Aguada fort was originally constructed in 1612 to guard against the Dutch. It was a reference point for the vessels coming from Europe at that time. This old Portuguese fort stands on the beach south of Candolim, at the shore of the Mandovi River. It was initially tasked with defense of shipping and the nearby Bardez sub-district. A freshwater spring within the fort provided water supply to the ships that used to stop by. This is how the fort got its name: Aguada, meaning watery in the Portuguese language. Crews of passing ships would often visit to replenish their freshwater stores. Fort Aguada is a typical example of Portuguese military architecture. Built of durable laterite stone, so easily available all over Goa, its massive bulwarks which stand fully 5 metres high and 1.3 metres thick, have stood the test of time, lashed as they are by fierce monsoon storms and winds. The fort covers the entirety of the peninsula, and was built using the natural terrain in order to make it more difficult for its walls to be breached. In addition to an enormous cistern in which over 2,000,000 gallons of water was be stored, the fort also contained a formidable citadel, secret passageways and the capacity for up to 200 canons. The Aguada Fort Lighthouse erected in 1864 is the oldest of its kind in Asia. Built in 1612, it was once the grandstand of 79 cannons. It has the capacity of storing 2,376,000 gallons of water, one of the biggest freshwater storage of the time in whole of Asia. This fort is divided in two segments: the upper part acted as fort and watering station, while the lower part served as a safe berth for Portuguese ships. The jail is a part of the fort and was the largest prison in Goa until 2015. The 17th-century Portuguese-era structure has been renovated by the Goa Tourism Development Corporation along with the Goa Heritage Action Group and Goa's freedom fighters and opened for tourists as a Freedom Struggle Museum to showcase Goa's freedom struggle and be a true tribute to the heroic deeds and glorious sacrifices of all those who took part in Goa's Liberation and who fought against the Portuguese rule and British rule for the freedom of India and were jailed there. It was inaugurated on December 19, 2021 by PM Narendra Modi.",
    images: [aguada1, aguada2, aguada3, aguada4],
    source: "(src: Goa tourism, wikipedia, incredible india)",
  },
  {
    name: "Anjuna Flea Market",
    description:
      "Anjuna Flea Market, located on the scenic Anjuna Beach in Goa, is one of the most famous and colourful markets in India. Established in the 1960s by the hippie community, it has since evolved into a vibrant hub for travellers, locals, and shopaholics seeking unique treasures. Open every Wednesday, this bustling bazaar captures the true essence of Goa’s free-spirited vibe and cultural diversity. The market is a treasure trove of items ranging from bohemian clothing, handmade jewellery, and beachwear to handicrafts, souvenirs, and home décor. Stalls run by local Goan vendors, as well as traders from Rajasthan, Gujarat, Kashmir, and Tibet, bring a wide variety of products, making it a melting pot of cultures and creativity. Beyond shopping, the market offers live music, street performances, and food stalls serving global cuisines, adding to its festive atmosphere. What makes Anjuna Flea Market truly special is its blend of commerce and culture. It is not just a place to buy things, but also to experience the laid-back Goan lifestyle.",
    images: [anjuna1, anjuna2, anjuna3, anjuna4],
    source: "(src: ItsGoa, Wikipedia)",
  },
  {
    name: "Fontainhas",
    description:
      "Fontainhas (Portuguese: Bairro das Fontainhas) is an old Latin quarter in Panjim, capital city of the state of Goa, India. It maintains its Portuguese influence, particularly through its architecture, which includes narrow and picturesque winding streets like those found in many European cities, old villas and buildings with projecting balconies painted in the traditional tones of pale yellow, green, or blue, and roofs made of red coloured tiles. Fontainhas' heritage ambience represents the traditional Portuguese influence in the area.\nIn the late eighteenth century, a Goan expatriate named António João de Sequeira (nicknamed Mossmikar), who had made his wealth while working in Mozambique, established Fontainhas. The name came from a spring at the foot of the hill which began to sprout around 1770, and it is patterned along the lines of Lisbon's Bairro Alto. In 1844, a government administrator, who had restored a some order in Goa, directed that even the people of the lower strata of society should appear properly dressed in public. He built an elegant street with a parapet called the Rua Nova d’Ouremsea on the seaward side of the Fontainhas Bairro (Quarter). In the same area, he also created the Phenis fountain, with a façade and porch. The Fontainhas had a high population density. The rich lived on Panjim hill in large bungalows, while the less affluent lived at the foot and the east of the hill, hemmed in between the hill and the small tidal creek, which remains dry and emits a foul smell during the low flow season. William Dalrymple calls Fontainhas a 'small chunk of Portugal washed up on the shores of the Indian Ocean'.It is the only area in Goa where Portuguese is still the main spoken language.",
    images: [fontainhas1, fontainhas2, fontainhas3, fontainhas4],
    source: "",
  },
  {
    name: "Calanguate Beach",
    description:
      "A 7-kilometre-long beach, Calangute Beach, situated along the Goan coastline, is a vibrant and captivating destination that beckons travellers from across the globe. One of the most popular beaches, not just in Goa but across the country, the beach witnesses huge crowds and is often the first destination for travellers arriving in Goa. Known as the “Queen of Beaches”, Calangute offers a delightful blend of natural beauty, historical significance, and modern-day allure. It is known for water sports like parasailing and jet-skiing. Numerous beach shacks provide sunset cocktails, fresh seafood, and candlelight dinners, with pubs offering a lively nightlife scene.",
    images: [calanguate1, calanguate2],
    source: "(src: Moneycontrol, Incredible India)",
  },
  {
    name: "Beaches",
    description:
      "1) Agonda Beach: A long, wide, and very quiet beach ideal for relaxation.\n2) Palolem Beach: Famous for its crescent-shaped bay, calm waters, and local market.\n3) Butterfly Beach: A secluded, rocky cove with white sand, often accessed by boat.\n4) Patnem Beach: A small, peaceful alternative to Palolem, popular for yoga.\n5) Varca & Cavelossim Beach: Known for luxury resorts and peaceful white-sand stretches.\n6) Benaulim Beach: A peaceful spot popular for early morning walks and fishing.\n7) Arambol Beach: Known for its lively, bohemian scene and scenic beauty.\n8) Morjim Beach: Famous for its relaxed vibe and known as 'Little Russia'.\n9) Baga & Calangute: The bustling heart of North Goa with high-energy nightlife and water sports.",
    images: [beach1, beach2, beach3, beach4],
    source: "(src: Wikipedia, Goa Tourism)",
  },
];

const facts = [
  "It is India's smallest state by area and fourth-smallest by population.",
  "Panaji (Panjim) is the state's capital, while Vasco da Gama is its largest city by population.",
  "The Eleventh Finance Commission of India named Goa the best-placed state in terms of infrastructure, while India's National Commission on Population ranked it as having the highest quality of life in the country.",
  "Goa is one of India’s most developed small states and has the second-highest GDP per capita among all Indian states, more than twice the national average GDP per capita.",
  "Goa has more than 40 estuarine, eight marine, and about 90 riverine islands. The total navigable length of Goa's rivers is 253 km (157 mi).",
  "Mormugao Harbour, at the mouth of the Zuari River, is considered one of the best natural harbours in South Asia.",
  "Goa stands 6th in the Top 10 Nightlife cities in the world in National Geographic Travel.",
  "Around 20% of the land in Goa falls into the beautiful Western Ghats of India, a vast mountain range and a treasure house of biodiversity. The forests here are teeming with exotic wildlife, including Indian giant squirrels, mongoose, Slender Loris, Indian macaques and sloth bears.",
  "Goa celebrates two independence days – India became an independent country, free from British rule, on 15th August 1947, but the Portuguese refused to release control of Goa. Goa’s struggle for independence was fought both from within Goa as well as outside, and on 17th December 1961, the Indian Army, air force and naval forces invaded Goa and overpowered the under-prepared Portuguese army. On 18th December, the Portuguese governor officially surrendered, and the next day, Goa officially became a part of India! Goa celebrates this second independence day on 19th December every year.",
  "Geologists claim that evidence of human inhabitants in Goa can be traced back to the Stone Age :- Some of the oldest rocks in India are found in Goa between Molem and Anmod. Classified as Trondjemeitic Gneiss, these rocks are over 3,600 million years old!.",
  "The state has a literacy rate of 88.70%.",
  "Asia’s only naval museum – It is located in Bogmalo and comprises thirteen aircraft. All of those aircraft have been decommissioned.",
  "Country’s first printing press – the machines and missionaries were all brought into the state by the Portuguese upon their arrival in India.",
  "Country’s first medical school – The school is situated in Panjim, the capital city. It is not only the first medical school in the country but also in Asia.",
];

const artGallery = [
  {
    title: "Alsanyache Tonak",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Black eyed beans cooked in Tonak Masala Recipe.",
    image: gAlsanyache,
  },
  {
    title: "Ambot Tik",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Ambot which means tangy/sour & tik which means hot/spicy in Konkani. So as the name suggests, its a hot and tangy curry, made mostly using fish, prawns or even calamari.",
    image: gAmbot,
  },
  {
    title: "Balchao",
    emoji: "🍚",
    color: "#E8733A",
    desc: "A pickle-like blend of ingredients, usually incorporates Goa’s other passion, feni, a potent alcoholic brew made from either cashew nuts or palm fruit.",
    image: gBalchao,
  },
  {
    title: "Biyaam Tondak",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "It is a mild spicy coconut based gravy and is served as a vegetarian delicacy in goan weddings and parties along with Phulkas, Jeera Rice and a Salad.",
    image: gBiyaam,
  },
  {
    title: "Chicken Cafreal",
    emoji: "🥐",
    color: "#F4E884",
    desc: "It is tender chicken cooked in tangy and spicy thick green coloured gravy made of coriander leaves, spices, lime juice, vinegar, chilies, garlic and ginger.",
    image: gCafreal,
  },
  {
    title: "Crab Xacuti",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "It is a traditional and delicious Goan Crab Curry or Goan Crab Masala. This Goan recipe is prepared with seafood and even chicken as a main ingredients.",
    image: gCrabxacuti,
  },
  {
    title: "Kismur",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "It is a dry salad and can be made with dry prawns or shrimp, mackerel, shark, surmai (king fish) etc.",
    image: gKismur,
  },
  {
    title: "Goan Fish Curry",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "It is a vibrant, tangy, and coconut-based dish featuring fish—typically kingfish, mackerel, or pomfret—marinated in turmeric and salt. Also known as – Xitt Codi.",
    image: gFishcurry,
  },
  {
    title: "Goan Pork Vindaloo",
    emoji: "🥭",
    color: "#F8C840",
    desc: "It is a tangy, spicy curry made by marinating pork (shoulder/belly) in a vibrant paste of red chilies, garlic, ginger, spices, and vinegar.",
    image: gPorkvindaloo,
  },
  {
    title: "Shri Lakshmi Narasimha Temple",
    emoji: "🌿",
    color: "#F4B830",
    desc: "Located in Velinga, Goa",
    image: gNarasimhatemple,
  },
  {
    title: "Spices of Anjuna Flea Market",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "",
    image: gSpicesanjuna,
  },
  {
    title: "Sunset at Palolem Beach",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "",
    image: gPalolem,
  },
  {
    title: "Calanguate Beach, North Goa",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "",
    image: gCalanguate,
  },
  {
    title: "Anjuna Beach, North Goa",
    emoji: "💃",
    color: "#E88844",
    desc: "",
    image: gAnjunabeach,
  },
  {
    title: "Cola Beach, South Goa",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "",
    image: gColabeach,
  },
];
