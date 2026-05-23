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
const ukMap = "https://i.postimg.cc/ydvm6NjZ/image.png";

// Festivals
const gan1 = "https://i.postimg.cc/T3MD6mxc/image.png";
const ku = "https://i.postimg.cc/mZKwPPRp/image.png";
const pho1 = "https://i.postimg.cc/3r0jQ3pW/image.png";
const har1 = "https://i.postimg.cc/tgm68c4z/image.png";
const kd = "https://i.postimg.cc/T3t5Wsm9/image.png";
const hill1 = "https://i.postimg.cc/L4jqV5Lt/image.png";
const jan1 = "https://i.postimg.cc/nLsr9hnM/image.png";

// Monuments / Historical Places
const ba1 = "https://i.postimg.cc/2St8YNnp/image.png";
const ked = "https://i.postimg.cc/Prrt854f/image.png";
const ganga = "https://i.postimg.cc/wMxdJwDr/image.png";
const yam1 = "https://i.postimg.cc/3wgMcs15/image.png";
const rish1 = "https://i.postimg.cc/4x9jYDrd/image.png";
const mus1 = "https://i.postimg.cc/DfpNBfh7/image.png";
const pa = "https://i.postimg.cc/dQfWGWRr/image.png";

// Art Gallery
const gAipan = "https://i.postimg.cc/c4YVCqpV/image.png";
const gRingal = "https://i.postimg.cc/WbMHjGrj/image.png";
const gPahadiCuisine = "https://i.postimg.cc/nLsKVx5P/image.png";
const gLangvirNritya = "https://i.postimg.cc/3Rt3LMr8/image.png";
const gKedarnath = "https://i.postimg.cc/7PpZjk1j/image.png";
const gGarhwaliPainting = "https://i.postimg.cc/yYBwDp7W/image.png";
const gCholiaDance = "https://i.postimg.cc/QdFSCcKc/image.png";
const gWoollenCrafts = "https://i.postimg.cc/jjdfCb1d/image.png";
const gBalMithai = "https://i.postimg.cc/J0c7byy3/image.png";
const gJhoraDance = "https://i.postimg.cc/Y9Bwbrw2/image.png";

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
export default function UttarakhandPage() {
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
                Uttarakhand
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
                  { label: "Capital", value: "Dehradun" },
                  { label: "Population", value: "1.01 Crore" },
                  { label: "Area", value: "53,483 sq km" },
                  { label: "Founded", value: "9 November 2000" },
                  { label: "Language", value: "Hindi, Garhwali, Kumaoni" },
                  { label: "Districts", value: "13 Districts" },
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
        <Section title="Capital — Dehradun" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Dehradun
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Uttarakhand - The heart of Garhwal
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Uttarakhand" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(ukMap, "Map of Tamil Nadu")}
            >
              <img
                src={ukMap}
                alt="Map of Uttarakhand"
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
              Uttarakhand , also known as Uttaranchal , is a sate in northern
              India. The state is bordered by Himachal Pradesh to the northwest,
              Tibet to the north, Nepal to the east and Uttar Pradesh to the
              south. Uttarakhand has a total area of 53,483 km2 (20,650 sq mi),
              equal to 1.6% of the total area of India. Dehradun serves as the
              state winter capital, with Bhararisain being the summer capital
              and Nainital being the judicial capital. The state is divided into
              two divisions, Garhwal and Kumaon, with a total of 13 districts.
              The forest cover in the state is 45.4% of the state's geographical
              area. The cultivable area is 16% of the total geographical area.
            </p>
            <p className="text-foreground">
              The two major rivers of the state, the Ganges and its tributary
              Yamuna, originate from the Gangotri and Yamunotri glaciers
              respectively. Ranked 6th among the Top 10 Greenest States in India
              with Best AQI.
            </p>
            <p className="text-foreground">
              Uttarakhand's history dates back to prehistoric times, with
              archaeological evidence showcasing human habitation. It was part
              of the ancient Kuru and the Panchal kingdoms during the Vedic age,
              and later saw the rise of dynasties like the Kunindas and
              influence of Buddhism as evidenced by Ashokan edicts. Though
              primarily driven by agriculture and hydropower, the state's
              economy is now dominated by the service industry. The service
              sector comprises primarily travel, tourism, and hotel industry.
              The Gross State Domestic Product (GSDP) of Uttarakhand is ₹3.78
              lakh crore . The state contributes five seats to the lower house
              Lok Sabha and three seats to the upper house Rajya Sabha.
            </p>
            <p className="text-foreground">
              Inhabitants of the state are called either Garhwali or Kumaoni
              depending on their region of origin. Hinduism is practised by more
              than three-fourths of the population, with Islam being the
              next-largest religious group. Hindi is the most widely spoken
              language and is also the official language of the state, along
              with native regional languages include Garhwali, Jaunsari, Rongpo,
              Bhotia, Gurjari and Kumaoni. The state is often referred to as the
              "Devabhumi", due to its religious significance and numerous Hindu
              temples and pilgrimage centres found throughout the state. Along
              with several historical, natural and religious tourist
              destinations, including Char Dham, Haridwar, Rishikesh, Panch
              Kedar, Himalayas, and Sapta Badri. Uttarakhand is also home to two
              World Heritage sites.
            </p>
            <p className="text-foreground">
              A major section of the people in Uttarakhand are Hindus. However,
              the state maintains a secular ambience with significant number of
              people belonging to other faiths like Islam, Sikhism, Buddhism and
              Christianity. According to the census conducted in 2011, there
              were Hinduism about 82.97% of the total population of Uttarakhand,
              whereas people following Islam were 13.95% and those following
              Sikhism were 2.34%, Christianity (0.37%), Buddhism (0.15%), and
              Jainism (0.09%).
            </p>
            <p className="text-foreground">
              The land of Uttarakhand is full of artisans and variety of art and
              craft. Both the rural and urban people indulge in
              producing/manufacturing some incredible crafts that are worth
              witnessing. Woodwork is a significant art form that the locals of
              Uttarakhand practise, apart from it, paintings from Garhwal School
              of Paintings and murals like Aipan demonstrate skills of the
              natives. The Ringaal Handicraft that is practised by a backward
              community named the same, is quite appreciable. The Rambaan
              Handicraft done by using Jute and Hemp also reflects the rich art
              and craft of Uttarakhand. Apart from it the woollen knitted wear
              and embroidered cushion covers, carpets, bedsheets and curtains by
              the rural women or urban women groups are a must buy from
              Uttarakhand. The candle making skills in the state are also at par
              excellence, there is an entire market in Nainital that is
              dedicated to this art.
            </p>
            <p className="text-foreground">
              The lifestyle in Uttarakhand is heterogenous and one can mark the
              difference between the urban and rural life in the state. Since
              Uttarakhand comprises of both hilly and plain terrains that
              eventually demarcate the lifestyle in the state, and then there
              are areas in the hill that are remote and difficult to access,
              where obviously the way of life is entirely different.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Uttarakhand is largely dependent on its agriculture for the
              revenue. Basmati rice, wheat, soybeans, groundnuts, coarse
              cereals, pulses, and oil seeds are the most widely grown crops in
              the state. There are also fruits like apples, oranges, pears,
              peaches, litchis, and plums that are widely grown in the state and
              bring a good amount of revenue
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
        <Section title="Facts about Uttarakhand" icon="💡">
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
            Scroll horizontally to explore Uttarakhand's iconic foods, crafts,
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
    name: "Ganga Aarti",
    tagline: "The Harvest Festival of Punjab",
    description:
      "Har Ki Pauri is a sacred ghat on the banks of the Ganges River in the Hindu holy city of Haridwar, in the Indian state of Uttarakhand. It is believed to be the place where the Ganges leaves the mountains and enters the plains. Vishnu is believed to have visited the Brahmakund in Har Ki Pauri in the Vedic times. The name Har Ki Pauri translates to 'the feet of Vishnu' (Hari). Har Ki Pauri is also an important pilgrimage site for religious festivals like the Kumbha Mela, which takes place every twelve years, the Ardh Kumbh Mela, which takes place every six years and the Punjabi festival of Vaisakhi, a harvest festival that occurs every April, The ghat is located on the west bank of Ganga canal through which the Ganga is diverted just to the north. King Vikramaditya is said to have built it in 1st century BC in the memory of his brother, Bharthari who had come to meditate here on the bank of the Ganges. An area within Har Ki Pauri, where the evening Ganga Aarti takes places and which is considered most sacred is known as Brahmakund  It is considered to be the spot where the drops of Amrit fell over from the sky, while being carried in a pitcher by the celestial bird, Garuda after the Samudra Manthan.In 1819 the ghat was described as a narrow passage. During the Kumbh mela festival in 1819, 430 people died from crush injuries that resulted from thousands of people pushing to get to the Ganges to bathe. As a result, the ghat was expanded to 100 feet (30 metres) and 60 steps were added by the British government. The extension of the ghats took place in 1938 (done by Hargyan Singh Katara, a Zamindar from Agra in Uttar Pradesh), and then again in 1986. It's landmark clock tower was erected in 1938. Each evening at sunset, the priests of Har ki Pauri perform the – Ganga Aarti – over an old tradition. [ Lights are set on the water to drift downstream. A large number of people gather on both banks of the ganga river to sing Ganga Aarti praises. At that time the priests hold large Fire Bowls in their hands, rungs bells at the temples situated at the ghat and chants are chanted by the priests. People flick Diya (made of leaves and flowers) into the river Ganges as a symbol of hopes and wishes. However, on some special cases, like on the occurrence of eclipses, the time of the Ganga Aarti is be altered accordingly Every year generally on the night of Dussehra the waters in the Ganga Canal in Rishav Haridwar are partially dried to do the job of cleaning the riverbed and undertake the repairing of the ghats. The waters are generally restored on the night of Diwali. But the Ganga Aarti is held every day as usual. It is believed that Maa Ganga visits her paternal house on the day of Dussehra and returns on the day of Bhai Dooj or Bhai Phota",
    images: [gan1],
    source: "(src:Holidify )",
  },
  {
    name: "Kumbh Mela",
    tagline: "Spring harvest festival of Punjab",
    description:
      "Kumbh Mela is a Hindu pilgrimage, celebrated every four or twelve years, correlated with the partial or full revolution of Jupiter. These are held at four locations–Prayagraj, Haridwar, Nashik, and Ujjain, with varying time intervals. As per the Puranas, these sites are considered to have received the drops of the divine nectar during the Samudra Manthana . The Kumbh Mela lasts between one and three months, with the Amavasya day attracting the largest crowds. The festival attracts millions of people, with the largest gathering recorded at Prayag. About 660 million attended the Kumbh Mela in 2025,  and 200 million in 2019, making it one of the largest gatherings in the world. It has been inscribed on the UNESCO Representative List of Intangible Cultural Heritage of Humanity. The Kumbh Mela is observed cycle at each site approximately once every 12 yearsbased on the Hindu luni-solar calendar and the relative positions of Jupiter, the Sun, and the Moon. As per Hindu astrology, specific alignments of the Jupiter, the Sun, and the Moon only occur at the four Kumbh locations in a 12-year cycle. The Prayag and Haridwar festivals are held with a six year gap in between, and feature a Maha (major) and Ardha (half) Kumbh Melas. The Kumbh Melas at Ujjain and Nashik are observed in the same year or one year apart, typically about three years after the Prayag Kumbh Mela. The festival is held at the confluence of major rivers, and people take a ritual dip in the waters, believed to be a means of prāyaścitta (atonement) for the past mistakes, and cleansing of their sins. Various fairs, educational events, religious discourses, mass gatherings of monks, and entertainment are also conducted during the festivities. Before 1858, the name 'Kumbh' was applied only to the 12th occurrence of an annual mela in Haridwar during the Vaishakha month. As mentioned in Hindu texts such as Ramcharitmanas, an annual Magh Mela was held in Prayag during the month of Pausha. The Haridwar mela had seen clashes between rival groups in the past, which had resulted in multiple deaths in 1796. After the Indian Rebellion of 1857 had been suppressed by the British Raj, the Pragwals (traditional priest castes) in Allahabad proposed the idea of an organised pilgrimage at Prayag under the surveillance of the British. The first Kumbh Mela at Prayag was organised in 1870 In other parts of India, similar but smaller community pilgrimage and bathing festivals are held. These Magha or Makar melas that have been called Kumbh Mela include those held in Kumbakonam, Kurukshetra, Panauti, Rajim, and Sonipat. These are also generally held at water bodies with various time intervals, and attracts a large gathering. For example, the Mahamaham is held in Kumbakonam once every twelve years, at the Mahamaham tank, near the Kaveri river.",
    images: [ku],
    source: "(src:India Today)",
  },
  {
    name: "Phool Dei",
    tagline: "Commemorates the martial spirit of the Sikh community.",
    description:
      "Phool Dei festival of Uttarakhand is a propitious society celebration which respects the spring season in the state. The celebration is praised on the primary day of the Hindu month, Chaitra. Phool Dei is about blossoms and springtime. In a few places, the celebration is praised as jubilee and the festival continues for multi month. The term 'Dei' alludes to a formal pudding which is the key sustenance in this celebration that is produced using jaggery. White flour and curd are likewise offered to everybody.Young ladies assemble and go to each house in their town/towns with plates loaded with rice, jaggery, coconut, green leaves, and blossoms. In addition, these young ladies set forward their desires for the success and prosperity of family units while singing Phool Dei, Chamma Dei, Deno Dwar, Bhur Bhakar. The wishing and gift part likewise incorporate putting blooms and rice on the doorsteps of the houses by the young ladies. Individuals of town sing and move on their people melodies to commend the celebration of spring alongside trading wishes for prosperity and success of their family and relatives.Phool Dei festival is commended on the primary day of the period of Chaitra in mid March. On this day, young ladies direct the vast majority of the functions. In a few places this celebration is commended during the time with the appearance of spring. Amid this celebration young ladies go to every one of the houses in the muhalla or the town with plates brimming with rice, jaggery, coconut, green leaves and blooms. They offer their great wishes for the success of the family unit and are given gifts and introduces (desserts, gur, cash and so on) consequently.speciality of the Festival After festivals of Basant in numerous parts of the nation comes an exceptionally uncommon festivals in Uttarakhand to stamp the principal day of the long stretch of Chaitra. This is the celebration known as Phool Dei festival of Uttarakhand. It's being commended in the slopes and dales of the state on Tuesday. In nowadays of environmental change and a dangerous atmospheric devation, such celebrations associated with the core of nature have obtained new centrality and ought to be saved and esteemed.There is something exceptionally captivating and special about this celebration of blooms and springtime. On this day, young ladies complete the vast majority of the ceremonies and they are the most enthusiastic members. In a few places however, this celebration resembles a jubilee and the festivals go ahead consistently. Dei, an extraordinary formal pudding made of Jaggery (gur), white flour and curd is offered to everybody. young ladies go to each house in their town with plates brimming with rice, jaggery, coconut, green leaves and blossoms.",
    images: [pho1],
    source: "(src:Tour My India)",
  },
  {
    name: "Harela",
    tagline: "Celebrates the birth of the first Sikh guru, Guru Nanak",
    description:
      "Harela is a Hindu festival celebrated in the Indian state of Uttarakhand and mainly in Mahasu region of Himachal Pradesh. This festival is very popular in the Kumaon region of Uttarakhand, and is celebrated by the name Harela. This name is used in some places of Garhwal but, it is not commonly used, as the festival is celebrated as Mol-Sankranti or as Rai-Sagrān .It is called Hariyali/Rihyali in Kangra, Shimla and Sirmaur districts, and Dakhrain in Jubbal and Kinnaur district of Himachal Pradesh. This festival is celebrated on the first day of Shravan-Maas , as per the Hindu Luni-Solar calendar. This festival marks the onset of the Rainy-Season. They pray for a good harvest and prosperity. Harela means 'Day of Green', and Agriculture-based communities in the region consider it highly auspicious, as it marks the beginning of the sowing cycle in their fields. Multiple Kauthigs/Thols/Melas Harela has a great significance in Kumaon. This symbolizes a new harvest and the rainy season. It has become a common practice to attribute the slogan of – 'Save The Environment' to Harela. Schools in Uttarakhand often encourage their students to plant saplings either at home, school or with the support of local officials. In Kumaun, the two celebrations during Navrati – first during Chaitra Navrati in the month of Chaitra, and second during Sharad Navratri in the month of Ashwin, is also considered to be connected to Harela. This is followed by Bhaitauli or Bhitauli wherein gifts are given to girls of the family. The Shravan Harela is celebrated as the first day of the Hindu calendar month of Shravan .Ten days before the due date, 5 or 7 types of seeds are sown in buckets by the head of every family. Water is then sprinkled over them. After the due time, but before the actual celebration, a mock wedding is done by young ones. It is also marked by playing 'Gedi'. It is a game where small children mount on bamboo sticks and walk around farms. The harvested herbs are taken as God's blessings. Elders of the home put harela on the heads of others, touching the harela from their head to feet. A blessing verse is also chanted while putting harela. This is the symbol for the rainy season and the new harvest. People also eat the seeds of the new harvest after heating them. People meet their relatives, and enjoy the festival. Some people also sow the seeds of new plants in the soil or fields and join their hands in the form of 'Pranam' for saving the environment. Harela symbolizes the new harvest of the rainy season every year. are also organized at this festival.",
    images: [har1],
    source: "(src: wikipedia.com)",
  },
  {
    name: "Kandali Festival",
    tagline: "Celebrates the onset of monsoon",
    description:
      "The festivals celebrated in the Kumaon region of Uttarakhand have their own charm and spell over its tourists. Talking about one such festival that is celebrated in the Pithoragarh District is Kangdali. This festival falls between the months of August and October and is celebrated in the Chaundas Valley every 12 years along with the blooming of the Kangdali plant. The ones who anticipate for this auspicious festival the most are the Rung Tribals of Pithoragarh District. This local festival was last held in 2011 where the tribes commemorate the defeat of Zorawar Singh's army which attacked the area in the late 19th Century.One may find several mythologies that follow the celebration of this propitious festival. The one that is popularly heard and enacted in the festival is that when the villages nearby Pithoragarh were being robbed by the soldiers who were on their way adjacent to the Kali River, they found a rescue spot in the Kangdali plants. When the women belonging to the village tried to repel the soldiers, the same plants ended up being destroyed and uprooted. The rituals that are followed in the festival are that the women start the cavalcade where they uproot the plants grown over the period with rills along with men and children carrying swords. The plants are taken back home as the mars of war. A festival with such a great history is incomplete without the spellbinding sound of folk music and dance, and hence the tribes perform their special dance upon the destructions of the plants blossoming every 12 years in the area. Travellers from across the country are accompanied by the locals from other villages to make the festival more extravagant and to keep traditions and customs together for the coming ages. Kangdali Festival is one of the important festivals of Kumaon Region and is celebrated once every 12 years in the Pithoragarh District.The women of the Rung Tribals of Chaundas Valley begin the procession where they uproot the plants with rills followed by the men and children carrying their swords.The uprooted plants are taken back as the mars of the war.The villagers celebrate by enjoying to the folk music and performing a special dance upon destructions of the plants blossoming every 12 years.",
    images: [kd],
    source: "(src: Tour my India)",
  },
  {
    name: "Hilljatra",
    tagline:
      "Celebrated alongside Diwali to commemorate the release ofthe sixth Guru, Guru Hargobind Sahib Ji.",
    description:
      "Hilljatra is amongst the traditional festivals celebrated in the state of Uttarakhand, especially in Pithoragarh district of Kumaon Region. The festival is celebrated mainly by the people associated with farming in the state. The origin of this festival is believed to be from the Sorar Region of West Nepal to the Sor Valley and was initially introduced in Kumaour village. Later, it was also observed by the people of Bajethi and other villages of Pithoragarh district. Along with that, Kanalichhina and Askot regions also accepted the festival as 'Hiran Chital' with some modifications. During the festival, a white-clothed deer is worshipped as a regional god. The festivity takes place in three phase, and in the first phase sacrifice of goat is made with all the rituals, whereas in the second phase, dramas are performed for public and in the third and final phase, songs are sung and dance is performed.This festival in Uttarakhand is celebrated in the remembrance of Champawat Rulers as it is connected with their victory. However, the major connection of the festival is with the plantation of paddy along with agricultural and pastoral labourers of the rainy season. Another belief behind this festival is that Chand Dynasty King Kuru once went to Sorar to participate in Hilljatra Festival and sacrificed a buffalo with horns covering the neck. This made the people happy and they decided to bestow the King with gifts. The King Kuru then decided to introduce the festival in Sor Valley and asked for four masks; Halwaha, two bullocks, one implement - the Nepali plough, and Lakhiabhoot as a gift. Thus, the festival of Hilljatra was introduced in the state of Uttarakhand.",
    images: [hill1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Janopunya & Bagwal fair",
    tagline: "Also known as Guru Tegh Bahadur martyrdom",
    description:
      "Devidhura is a small village in Champawat district of Uttarakhand. The nearest rail-head, Kathgodam station in 100 odd kilometers and can be reached via bus or sharing taxi in 4-5 hrs.On the Poornima(full moon day) of Shravan month of Hindu Calender, when the entire nation is celebrating the festival of Brothers & Sisters, Raksha Bandhan, people here in Devidhura celebrate the festival of Bagwal in which they pelt stones at each other to make them bleed to please their local deity, Maa Varahi Devi.According to locals, people used to do Nar Bali(Human Male Sacrifice) in ancient times to please their Goddess. One day a woman denies to give her only grandson for the Bali. Then Goddess appeared in the dream of the temple's priest and ask if people can offer blood equivalent of one adult then she can relinquish the Bali. Since then people gather here in the compound of Maa Varahi Temple in Devidhura and pelt stones on each other to shed the required amount of blood. Bagwal is played between four different groups of people. These groups are called 'Khams'. These Khams are- Lamgariya Kham, Valig kham, Chamyal Kham and Garahwal Kham. Only people of these Khams can take part in this Bagwal . At around 12:30-1 pm one by one all the four Khams enter the compound and do the Parikrama of the compound with the Jai Kara. After each Kham has done the parikrama , each Kham place themselves to each corner of the compound and on the signal of Shankh(Conch Horn) Sound given by the priest of the temple they start the fight by throwing stones and fruits on other people, while some people also bring a wooden shield known as Farra locally to protect themselves. Then the Priest again give signal by blowing Shankh to stop the fight. Fighters of each Kham then hug each other and then with the sound of the 'Jai Maa Varahi' bagwal fights end.",
    images: [jan1],
    source: "(src: The Times of India)",
  },
];

const historicalPlaces = [
  {
    name: "Badrinath",
    description:
      "Badarinath Temple, also known as Badarinarayana Temple, is a Hindu temple dedicated to Vishnu. It is located in the town of Badrinath in Chamoli district of Uttarakhand, India. The temple is one of the 108 Divya Desams, sacred to Vaishnavism, where Vishnu is worshipped as Badrinath. Due to extreme weather conditions in the Himalayas, the temple is open for six months each year, from late April to early November. It is one of the most visited pilgrimage centers of India, having recorded 2.8 million (28 lakh) visits in just 2 months in 2022. It is one of the Char Dham pilgrimage sites. The image of the presiding deity worshipped in the temple is a 1 ft (0.30 m), the black granite deity of Vishnu in the form of Badrinarayan. The deity is considered by many Hindus to be one of eight svayam vyakta kshetras, or self-manifested deities of Vishnu. The temple was included in the Uttar Pradesh state government Act No. 30/1948 as Act no. 16,1939, which later came to be known as 'Shri Badarinath and Shri Kedarnath Mandir Act'. The committee nominated by the state government administers both the temples and has seventeen members on its board.Devotees at the Badrinath Temple in October 2022The temple is mentioned in ancient religious texts like Vishnu Purana and Skanda Purana. It is glorified in the Naalayira Divya Prabandham, an early medieval Tamil canon of the Alvar saints from the 6th–9th centuries CE.According to local tradition, the image of Badrinarayan was first served by Narada; later when the region became Buddhist, the Buddhists had Badrinarayan removed from the temple and thrown into the Tapt Kund. Later, Adi Shankara expelled all the Buddhists in the region, recovered Badrinarayan from the Tapt Kund, and reestablished the temple with the help of the Parmar ruler king Kanak Pal. The hereditary successors of the king governed the temple and endowed villages to meet its expenses. The income from a set of villages on the route to the temple was used to feed and accommodate pilgrims. The Parmar rulers held the title Bolanda Badrinath', meaning speaking Badrinath. They had other titles, including Shri 108 Basdrishcharyaparayan Garharaj Mahimahendra, Dharmabibhab, and Dharamarakshak Sigamani. According to another traditional story, Badrinarayan was removed from the temple and put into the Tapt Kund by the pujari who was forced to close the temple due to lack of pilgrims and revenue. When Ramanuja was in the Pandukeshwar temple, the Garhwali god Ghanta Karna possessed a person and told Ramanuja, who promptly went to Badrinath and reinstalled the deity. The throne of Badrinath was named after the presiding deity; the king enjoyed ritual obeisance by the devotees before proceeding to the shrine. The practice was continued until the late 19th century. During the 16th century, the King of Garhwal moved the murti to the present temple. When the state of Garhwal was divided, the Badrinath temple came under British rule but the king of Garhwal continued as the chairman of the management committee. The selection of priest is done after consultation between Garhwal and Travancore royal families. According to the Chaurasi Baithak ,Vallabha visited the Badrinath temple on a fasting day and sought fruit, but finding none Badrinath ordered him to break the fasting rules and eat grain. There exists a baithak of Vallabha at the foot of the temple hill. Tulsidas praises Nara-Narayana and Badarikashrama in his Vinaya Patrika The temple has undergone several major renovations due to its age and damage by an avalanche. In the 17th century, the temple was expanded by the Kings of Garhwal. After significant damage during the great 1803 Garhwal earthquake, it was largely rebuilt by the King of Jaipur. It was still under renovation as late as the 1870s but these were completed by the time of the First World War. At that time, the town was still small, consisting of only the 20-odd huts housing the temple's staff, but the number of pilgrims was usually between seven and ten thousand. The Kumbh Mela festival held every twelve years raised the number of visitors to 50,000. The temple also enjoyed revenue from the rents owed to it by various villages bequeathed by various rajas. During 2006, the state government announced the area around Badrinath as a no construction zone to curb illegal encroachment. ",
    images: [ba1],
    source: "(src:Travel Vaidya)",
  },
  {
    name: "Kedarnath",
    description:
      "Kedarnath Temple is a Hindu Temple, one of the twelve Jyotirlinga of Siva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India. Due to extreme weather conditions, the temple is open to the general public only between the months of April (Akshaya Tritiya) and November (Karthika Purnamie, the autumn full moon). During the winters, the vigraha (deity) of the temple is carried down to Ukhimath to be worshiped for the next six months. Kedaranth seen as a homogeneous form of Śiva, the 'Lord of Kedaranth the historical name of the region.The temple is not directly accessible by road and has to be reached by a 17 kilometres (11 mi) uphill trek from Gaurikuṇḍa. According to Hindu legends, the temple was initially built by the Pāṇḍavas, and is one of the twelve Jyotirlingas, the holiest Hindu shrines of Śiva. The Pāṇḍava were supposed to have pleased Śiva by doing penance in Kedarnath. The temple is one of the four major sites in India's Chota Char Dham pilgrimage of Northern Himalayas and is the first of the panca Kedara pilgrimage sites. This temple is the highest among the 12 Jyotirlingas. It is one of the 275 paadal petra sthalams expounded in the Tevaram his temple is sung of by Tirugnāṇasambandar, Appar, Sundarar and Sekkizhar in their  Tevaram texts. Kedarnath was the worst affected area during the 2013 flash flood in North India. The temple complex, surrounding areas, and Kedarnath town suffered extensive damage, but the temple structure did not suffer any major damage. A large rock among the debris acted as a barrier, protecting the temple from the flood. At a height of 3,583 m (11,755 ft), 223 km (139 mi) from Rishikesh, on the shores of Mandakini river, a tributary of Ganga, is a stone edifice of unknown date. One of the earliest references to Kedarnath occurs in the Skanda Purana (c. 7th-8th century), which contains a story describing the origin of the Ganges river. The text names Kedar (Kedarnath) as the place where Shiva released the holy water from his matted hair.According to the hagiographies based on Madhava's Sankshepa-shankara-vijaya, the 8th century philosopher Adi Shankara died at the mountains near Kedarnath; although other hagiographies, based on Anandagiri's Prachina-Shankara-Vijaya, state that he died at Kanchipuram. The ruins of a monument marking the purported death place of Shankara are located at Kedarnath. Kedarnath was definitely a prominent pilgrimage centre by the 12th century, when it is mentioned in Kritya Kalpataru written by the Gahadavala minister Bhatta Lakshmidhara. Adi Shankara was believed to have revived this temple, along with Badrinath and other temples of Uttarakhand; he is believed to have attained Mahasamadhi at Kedarnath.",
    images: [ked],
    source: "(src: wikipedia)",
  },
  {
    name: "Gangotri",
    description:
      "Gangotri Temple, nestled in the serene town of Gangotri in Uttarkashi district of Uttarakhand, is one of the most revered shrines in India and an integral part of the Char Dham pilgrimage. Situated at an altitude of around 3,100 meters in the Garhwal Himalayas, the temple is dedicated to Goddess Ganga, the personification of the sacred river Ganges. According to Hindu mythology, it is believed that King Bhagirath performed penance here to bring the river Ganga down to earth to cleanse the sins of his ancestors. The temple, built in the early 18th century by Amar Singh Thapa, stands as a beautiful white granite structure surrounded by snow-clad peaks, lush deodar trees, and the gushing Bhagirathi River. The sanctum houses the idol of Goddess Ganga, which is carried back to Mukhba village during the harsh winter months when the temple remains closed due to heavy snowfall. The temple opens every year on Akshaya Tritiya in April–May and closes on Diwali in October–November, attracting thousands of devotees and tourists who seek spiritual solace and breathtaking natural beauty. The atmosphere around the temple is filled with chants, bells, and the sound of the river, creating a divine aura that leaves visitors mesmerized. Apart from its religious significance, Gangotri is also the gateway to several trekking routes, including the trek to Gaumukh, the origin of the Ganga, which lies about 19 kilometers away. Pilgrims often combine their visit with other Char Dham shrines—Yamunotri, Kedarnath, and Badrinath—making it a journey of immense spiritual importance. The temple not only symbolizes faith and devotion but also reflects the deep cultural and mythological heritage of India. Surrounded by pristine landscapes, Gangotri Temple offers a unique blend of spirituality and adventure, making it a must-visit destination for seekers of both divine blessings and Himalayan grandeur.",
    images: [ganga],
    source: "(src: wikipedia)",
  },
  {
    name: "Yamunotri",
    description:
      "Yamunotri, located in the Uttarkashi district of Uttarakhand, is one of the four sacred shrines of the Char Dham pilgrimage and holds immense spiritual significance for Hindus. Perched at an altitude of about 3,293 meters in the Garhwal Himalayas, Yamunotri is dedicated to Goddess Yamuna, the divine embodiment of the Yamuna River. According to Hindu mythology, Yamuna is the daughter of Surya, the Sun God, and the sister of Yama, the God of Death. It is believed that bathing in the holy waters of Yamunotri protects devotees from untimely death and grants liberation. The temple was originally constructed by Maharaja Pratap Shah of Tehri Garhwal and is a modest yet beautiful shrine surrounded by snow-covered peaks, dense forests, and the gushing Yamuna River. The idol of Goddess Yamuna, made of black marble, is enshrined in the sanctum. A unique feature of Yamunotri is its natural hot springs, especially the Surya Kund, where pilgrims cook rice and potatoes tied in cloth, which are later offered as prasad. Another sacred spot nearby is Divya Shila, a rock pillar worshipped before entering the temple. The temple opens every year on Akshaya Tritiya in April–May and closes on Diwali in October–November, as the region becomes inaccessible due to heavy snowfall. The trek to Yamunotri is itself a spiritual journey, with a 6-kilometer trail from Janki Chatti offering breathtaking views of the Himalayas, waterfalls, and lush valleys. Pilgrims often combine their visit to Yamunotri with the other Char Dham shrines—Gangotri, Kedarnath, and Badrinath—making it a vital part of the sacred circuit. Beyond its religious importance, Yamunotri captivates visitors with its pristine natural beauty, serene atmosphere, and the divine aura that surrounds the temple. It is not just a destination of faith but also a place where spirituality and nature blend seamlessly, offering peace, devotion, and a profound connection to the Himalayas.",
    images: [yam1],
    source: "(src: wikipedia)",
  },
  {
    name: "Rishikesh",
    description:
      "Rishikesh, often referred to as the “Yoga Capital of the World,” is a spiritual town located in the foothills of the Himalayas along the banks of the sacred Ganga River in Uttarakhand. Known for its serene atmosphere, ancient temples, and vibrant ashrams, Rishikesh attracts pilgrims, seekers, and travelers from across the globe. The town holds immense religious significance as it is believed that meditation and penance performed here lead to liberation. It is also the gateway to the Char Dham pilgrimage—Yamunotri, Gangotri, Kedarnath, and Badrinath—making it a vital stop for devotees. The iconic suspension bridges, Lakshman Jhula and Ram Jhula, are landmarks that connect the town across the river and are steeped in mythology, with legends linking them to the epic Ramayana. Rishikesh is also renowned for its yoga and meditation centers, where practitioners immerse themselves in spiritual learning and holistic healing. The annual International Yoga Festival draws participants from around the world, reinforcing its global reputation. Beyond spirituality, Rishikesh offers adventure activities such as river rafting, trekking, and camping, making it a unique blend of devotion and thrill. The evening Ganga Aarti at Triveni Ghat is a mesmerizing experience, with chants, lamps, and the flowing river creating a divine ambiance. The town is dotted with temples like Bharat Mandir, Neelkanth Mahadev, and Parmarth Niketan Ashram, each adding to its cultural richness. Vegetarianism is strictly observed here, and the town is free of alcohol, reflecting its sacred character. Rishikesh has also been a hub for saints, sages, and philosophers for centuries, and even the Beatles visited in the 1960s to learn meditation at the Maharishi Mahesh Yogi Ashram, which today stands as a popular attraction. Surrounded by lush hills, waterfalls, and the ever-flowing Ganga, Rishikesh offers a perfect retreat for those seeking peace, spirituality, and adventure. It is not just a destination but an experience that harmonizes body, mind, and soul, making it one of the most cherished places in Uttarakhand.",
    images: [rish1],
    source: "(src: Incredible India)",
  },
  {
    name: "Mussoorie",
    description:
      "Mussoorie, fondly known as the “Queen of Hills,” is a charming hill station located in the Dehradun district of Uttarakhand. Nestled in the foothills of the Garhwal Himalayas at an altitude of about 2,000 meters, Mussoorie is a popular tourist destination that offers breathtaking views of the snow-clad Himalayan ranges and the sprawling Doon Valley. Established during the British era in 1823, the town still retains its colonial charm with old churches, heritage buildings, and quaint streets. The Mall Road, lined with shops, cafes, and restaurants, is the heart of Mussoorie and a favorite spot for visitors to stroll and soak in the lively atmosphere. Landmarks such as Gun Hill, the second-highest point in Mussoorie, provide panoramic views of the surrounding mountains, while Kempty Falls, located a short drive away, is a picturesque waterfall that attracts families and nature lovers alike. Mussoorie is also home to Lal Tibba, the highest point in the town, offering stunning vistas of peaks like Kedarnath and Badrinath on clear days. The town is dotted with lush gardens, colonial-era schools, and scenic walking trails that make it a perfect retreat for relaxation and rejuvenation. Beyond its natural beauty, Mussoorie has a rich cultural and literary heritage, being the home of renowned author Ruskin Bond, whose stories capture the essence of life in the hills. The pleasant climate, cool breeze, and misty mornings make Mussoorie an ideal getaway throughout the year, especially during summer when it serves as a refreshing escape from the heat of the plains. With its blend of scenic landscapes, historical charm, and vibrant local culture, Mussoorie continues to enchant travelers, offering them a delightful mix of tranquility, adventure, and nostalgia in the lap of the Himalayas.",
    images: [mus1],
    source: "(src:Char Dham Yatra)",
  },
  {
    name: "Patal Bhuvaneshwar",
    description:
      "Patal Bhuvaneshwar, located in the Pithoragarh district of Uttarakhand, is a mystical cave temple that holds immense religious and spiritual significance. Situated at an altitude of about 1,350 meters in the Kumaon Himalayas, this ancient site is dedicated to Lord Shiva and is believed to be as sacred as the Char Dham shrines. The cave, which extends about 160 meters in length and 90 feet deep, is a natural wonder filled with stalactites and stalagmites that form fascinating shapes resembling various deities and mythological symbols. According to legend, Adi Shankaracharya discovered this cave in the 8th century, and it has since been revered as a place where the divine presence of 33 crore Hindu gods and goddesses resides. Inside the cave, devotees can witness formations that are said to represent Lord Shiva’s matted locks, Sheshnag, Kalabhairav, and even the tongue of Goddess Kali. The atmosphere within is mystical, with narrow passages, dimly lit interiors, and the echo of chants creating a deeply spiritual experience. The cave is also believed to be the site where the Pandavas from the Mahabharata performed penance and where several mythological events took place. Managed by priests of the Bhandari family for generations, the temple continues to be a living symbol of faith and devotion. The journey to Patal Bhuvaneshwar itself is enchanting, surrounded by dense forests of deodar and pine, offering breathtaking views of the majestic Himalayas. Unlike other temples, this shrine is unique because it is not just a place of worship but also a natural marvel that blends geology with mythology. Pilgrims visiting here often feel a profound connection to the divine, as the cave is said to represent the very womb of Mother Earth. Patal Bhuvaneshwar is thus not only a destination of religious importance but also a site that showcases the mystical charm and cultural richness of Uttarakhand, making it a must-visit for seekers of spirituality and wonder.",
    images: [pa],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "Uttarakhand is known as the 'Land of Gods' because of its many famous temples and pilgrimage sites.",
  "The capital cities of Uttarakhand are Dehradun (winter) and Gairsain (summer).",
  "The state was formed on 9 November 2000 after separating from Uttar Pradesh.",
  "Kedarnath Temple and Badrinath Temple are among the most important Hindu pilgrimage sites in India.",
  "Uttarakhand is home to part of the Himalayas and has many snow-covered peaks.",
  "The famous Ganges river originates from the Gangotri Glacier in Uttarakhand.",
  "Jim Corbett National Park is India's oldest national park and is famous for Bengal tigers.",
];
const artGallery = [
  {
    title: "Aipan Art",
    emoji: "🎨",
    color: "#C62828",
    desc: "Traditional folk art made with rice paste on red ochre background, drawn during festivals and rituals",
    image: gAipan,
  },
  {
    title: "Ringal Craft",
    emoji: "🪵",
    color: "#2E7D32",
    desc: "Intricate basketry and utility items woven from ringal bamboo by skilled artisans of the hills",
    image: gRingal,
  },
  {
    title: "Pahadi Cuisine",
    emoji: "🍲",
    color: "#E65100",
    desc: "Traditional mountain food including Kafuli, Chainsoo, and Mandua Ki Roti using local grains and greens",
    image: gPahadiCuisine,
  },
  {
    title: "Langvir Nritya",
    emoji: "💃",
    color: "#6A1B9A",
    desc: "Acrobatic folk dance performed by men balancing on bamboo poles during fairs and festivals",
    image: gLangvirNritya,
  },
  {
    title: "Kedarnath Temple",
    emoji: "🛕",
    color: "#4E342E",
    desc: "Ancient stone temple nestled in the Himalayas at 3,583 meters, one of the twelve sacred Jyotirlingas",
    image: gKedarnath,
  },
  {
    title: "Garhwali Painting",
    emoji: "🖼️",
    color: "#AD1457",
    desc: "Classical miniature painting style from the Garhwal region depicting court life, nature, and mythology",
    image: gGarhwaliPainting,
  },
  {
    title: "Cholia Dance",
    emoji: "🥁",
    color: "#00695C",
    desc: "Vigorous sword dance performed by Kumaoni warriors during weddings and festive processions",
    image: gCholiaDance,
  },
  {
    title: "Woollen Crafts",
    emoji: "🧶",
    color: "#1565C0",
    desc: "Hand-woven shawls, carpets, and pankhi fans crafted from fine local wool using traditional looms",
    image: gWoollenCrafts,
  },
  {
    title: "Bal Mithai",
    emoji: "🍬",
    color: "#F9A825",
    desc: "Iconic Kumaoni fudge made from roasted khoya coated with white sugar balls, a signature sweet of the hills",
    image: gBalMithai,
  },
  {
    title: "Jhora Dance",
    emoji: "🎶",
    color: "#37474F",
    desc: "Communal circle dance performed by men and women together during harvest season and local celebrations",
    image: gJhoraDance,
  },
];
