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
const ladakhMap = "https://i.postimg.cc/4yB70j0T/image.png";
const losar1 = "https://postimg.cc/zbSYxTCn";
const hemis1 = "https://postimg.cc/3dwQZ4W6";
const sakadawa1 = "https://postimg.cc/XrGMTRfm";
const dosmochey1 = "https://postimg.cc/94Z6fyNS";
const galdan1 = "https://postimg.cc/PP0V8PZG";
const stupa1 = "https://postimg.cc/mcymqjnr";
const pangong1 = "https://postimg.cc/LgnvJp8d";
const khardung1 = "https://postimg.cc/Th4CZpt3";
const khardung2 = "https://postimg.cc/JyL4QNvM";
const nubra1 = "https://postimg.cc/qg5JFVS5";
const magnetic1 = "https://postimg.cc/mPQThcDv";
const lamayuru1 = "https://postimg.cc/R6bB2KsT";
const lamayuru2 = "https://postimg.cc/F18vZbJt";
const tsomoriri1 = "https://postimg.cc/18cZsL76";
const hanle1 = "https://postimg.cc/2bts0my7";
const hanle2 = "https://postimg.cc/KRB6D626";
const gJabro = "https://postimg.cc/k2FDzYxT";
const gCham = "https://postimg.cc/mcLhs3jD";
const gTukhstanmo = "https://postimg.cc/0MrQ68Lg";
const gLoshon = "https://postimg.cc/G98tdmFB";
const gPhyang = "https://postimg.cc/RW9Z71jm";
const gShon = "https://postimg.cc/xkpjVwq3";
const gMomos = "https://postimg.cc/D4L7sm6q";
const gThukpa = "https://postimg.cc/QFXj98T7";
const gSkyu = "https://postimg.cc/R3YmDwbX";
const gChhutag = "https://postimg.cc/w7zpZqF4";


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
export default function LadakhPage() {
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
                Ladakh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Land of High Passes
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Leh" },
                  { label: "Population", value: "2.74 Crore" },
                  { label: "Area", value: "59,146 sq km" },
                  { label: "Founded", value: "31 October 2019" },
                  { label: "Language", value: "Ladakhi, Hindi, Urdu" },
                  { label: "Districts", value: "7 Districts" },
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
              Leh
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Ladakh — Little Tibet
            </p>
          </div>
        </Section>

        {/* Map of Ladakh — click to enlarge */}
        <Section title="Map of Ladakh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(ladakhMap, "Map of Ladakh")}
            >
              <img
                src={ladakhMap}
                alt="Map of Ladakh"
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
              Ladakh was established as a union territory of India on 31 October 2019, following the passage of the Jammu and Kashmir Reorganisation Act. Prior to that, it was part of the Jammu and Kashmir state.
            </p>
            <p className="text-foreground">
              Ladakh was established as a union territory of India on 31 October 2019, following the passage of the Jammu and Kashmir Reorganisation Act. Prior to that, it was part of the Jammu and Kashmir state.
            </p>
            <p className="text-foreground">
              Its culture and history are closely related to those of Tibet. As Ladakh is strategically important, the Indian military maintains a strong presence in the region.
            </p>
            <p className="text-foreground">
              In the past, Ladakh gained importance from its strategic location at the crossroads of important trade routes, but as Chinese authorities closed the borders between Tibet Autonomous Region and Ladakh in the 1960s, international trade dwindled. Since 1974, the Government of India has encouraged tourism in Ladakh. Ladakh was established as a union territory of India on 31 October 2019, following the passage of the Jammu and Kashmir Reorganisation Act. Prior to that, it was part of the Jammu and Kashmir state.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is also regarded as the - Little Tibet: Due to its strong cultural, historical, and religious connections to Tibet, including its Tibetan Buddhist population.The Cold Desert: Because of its high altitude (mostly over 3,000m), extremely low rainfall, and arid, cold climate.The Moon Land: Owing to its unique and barren landscapes that resemble the surface of the moon, particularly in areas like Lamayuru. Khapa-chan: A local name meaning 'Land of Snow'.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: Ladakh.gov.in, mapsofindia.com)
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
        <Section title="Facts about Ladakh" icon="💡">
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
            Scroll horizontally to explore Ladakh's iconic foods, crafts,
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
    tagline: "Tibetan Buddhist New Year",
    description:
      "While it often coincides with the Chinese/Mongolian New Year, the Ladakhi celebration has unique traditions rooted in the 17th century, when King Jamyang Namgyal moved it two months early. The festival traditionally spans 15 days, with the first three being the most significant. A 'fire procession' held on the eve, where people carry torches through streets, chanting and driving away evil spirits. Prayers for a bumper crop are offered, along with special religious ceremonies in monasteries. Special dishes like Ghutuk (a soup with nine ingredients) and beverages like Chang (barley beer) and sweet tea are consumed.  Kitchen walls are painted with lucky signs using flour, and dough models of the sun, moon, and ibex are displayed.",
    images: [losar1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Hemis",
    tagline:
      "",
    description:
      "Lamas (monks) perform slow, rhythmic dances wearing vibrant masks and elaborate brocade robes, representing deities, demons, and guardians that fight evil spirits. The festival commemorates the founder of Tibetan Tantric Buddhism, who is believed to have brought Buddhism to the region. A massive, sacred Thangka (religious scroll painting) of Padmasambhava is exhibited, usually once every 12 years. The Hemis Monastery is packed with devotees and tourists, accompanied by music from traditional horns, drums, and cymbals.  As one of the most famous festivals in Ladakh, it offers a deep dive into the spiritual traditions of the Dugpa Order. Hemis Monastery, the largest and wealthiest monastery in Ladakh. Usually occurs over two days in June or July according to the Tibetan calendar.  The festival brings large crowds, so planning accommodation in Leh and transportation to Hemis in advance is essential.",
    images: [hemis1],
    source: "",
  },
  {
    name: "Saka Dawa",
    tagline:
      "",
    description:
      "It is considered the most sacred time, believed to multiply the karmic results of good deeds by millions. Followers visit monasteries, chant mantras, light butter lamps, and perform the Bhumskor procession (circumambulation). Many pilgrims refrain from eating meat, set captive animals free, and offer donations to the poor and monks, according to. As detailed on, the festival highlights include masked dances (Cham), prayer, and vibrant displays of Buddhist culture in Leh. The 15th day of the 4th Tibetan month is the main event.",
    images: [sakadawa1],
    source: "",
  },
  {
    name: "Dosmochey",
    tagline:
      "",
    description:
      "Dosmochey Festival, held annually in February in Leh, Ladakh, is a two-day spiritual celebration marking the end of the Tibetan New Year. Celebrates the victory of good over evil, offering prayers for prosperity and a good agricultural season. Monks craft intricate 'Dosmo' (thread crosses) to trap negative energy, which are then burned to purge evil spirits. Cham dance (mask dance) performed by monks in the Leh Palace courtyard. The streets of Leh fill with stalls, music, and colorful festivities, attracting tourists and locals alike.  Started by the Ladakhi royal family as a festival of unity and spiritual cleansing. The festival serves as a cultural spectacle that brings together the community to welcome the onset of spring.",
    images: [dosmochey1],
    source: "",
  },
  {
    name: "Galdan Namchot",
    tagline:
      "The festival of Padhinettam Perukku, also known as 'Aadi Perukku', held on the 18th day of the Tamil month of Aadi.",
    description:
      "Galdan Namchot is a significant festival in Ladakh, typically held in December, celebrating the birth, enlightenment, and parinirvana of Je Tsongkhapa, the founder of the Gelugpa school of Tibetan Buddhism. It commemorates the 14th-century saint-scholar Je Tsongkhapa, who initiated massive monastic reforms in Tibetan Buddhism. Monasteries (like Thiksey, Spituk, Hemis), public buildings, and houses are lit up with thousands of butter lamps. t falls on the 25th day of the 10th month of the Tibetan lunar calendar, usually in December.",
    images: [galdan1],
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "Stupa Shanti",
    description:
      "The stupa is perched atop a small hill in Leh, the capital town of Ladakh. Shanti Stupa offers a stunning panoramic view of the city and the surrounding villages. The stupa was built in 1991 by Japanese Buddhist Bhikshu, Gyomyo Nakamura as a mark of the successful completion of 2500 years of Buddhism and a part of the peace pagoda mission. It holds the relics of the Buddha at its base that were enshrined by the 14th Dalai Lama. The stupa is a two-level structure, on the first, there is a Dharmachakra with deer on each side and a central golden coloured Buddha image sitting on a platform. On the other, there are reliefs depicting the birth and death of Buddha and his defeating devils while meditating. One can witness the devotees circumambulating the stupa in a clockwise direction. Shanti Stupa is a must go for every tourist.",
    images: [stupa1],
    source: "",
  },
  {
    name: "Pangong Tso (Lake)",
    description:
      "Pangong Tso(lake) is situated at a height of 14,270ft above sea level and is said to be one of the highest brackish water lakes in the world. The lake is almost 5km wide and 134km long, with one-third of it lying in India and the other two-thirds in China. The beauty is adorned with furry milky clouds and the overlooking stern mountains making an artistic impression reflecting in the water. The lake is also a breeding ground for different types of birds during the summer season. Bar-headed geese, Brahminy ducks, black necked cranes and seagulls are commonly spotted here. The most gripping fact about this lake is that it changes color appearing blue, grey-green, and red at varied points in time. During winter, the lake freezes completely despite being saline water.",
    images: [pangong1],
    source: "",
  },
  {
    name: "Khardung La (Pass)",
    description:
      "The second highest motor-able pass in the world after Umling la(pass). Umling-la is the highest motor-able road in the world, which also happens to be in the Union Territory of Ladakh and was recently accomplished by BRO (Border Road Organisation). Khardung la is the gateway to Shyok and Nubra valleys and it leads to endless scenic vistas. Positioned on the Ladakh range, Khardung la is 40km(s) from Leh at an altitude of 18,379ft (5602m). The fluttering Buddhist traditional colourful flags on the top and the chilly winds make one enjoy the hot servings at the highest cafeteria in the world at Khardung-la top, a little more. Tourists should keep in mind the effects of high altitude while travelling to Khardung La.",
    images: [khardung1, khardung2],
    source: "",
  },
  {
    name: "Nubra Valley",
    description:
      "Situated about 120km north from Leh town, NubraValley is known as the orchard of Ladakh and was originally called ‘Ldumra’ which means the valley of flowers. Its scenic vistas, Bactrian camels (double humped camels) at Hundar sand dunes, majestic monasteries and indeed the orchards leave everyone spellbound. The valley is connected to Leh by Khardungla (one of the highest motorable passes in the world). Panamik hot spring, double humped camel safari, river rafting, trekking and sunbath in the dunes of Hunder. Diskit town is the largest and the main town of the region however the main attraction is the 108ft tall Statue of Maitreya Buddha. The Siachen Glacier, located on the eastern Karakoram Range, is the highest battlefield and one of the most inhospitable terrains on Earth. It is also the second largest glacier outside the polar region. Siachen Glacier lies way up in the Nubra Valley and has been thrown open for domestic tourists recently but only until the base camp. Turtuk is an offbeat village where tourists have the chance to enjoy tribal tourism while interacting with the locals narrating valiant memoirs of when the region was under Pakistani occupation until the war of 1971. The labyrinth of small streets in the village takes you back to a middle-aged time, with no motor roads in the heart of the village, yet when you walk in the streets, an unwavering joy walks just beside you. The village famous for its buckwheat, is the last outpost of India.",
    images: [nubra1],
    source: "",
  },
  {
    name: "Magnetic Hill",
    description:
      "Magnetic hill that is believed to defy gravity is located at a distance of 30km(s) from Leh on the Leh-Kargil Highway. It is said that there is a mysterious magnetic force emanating from the hill that pulls stationary vehicles within its range and makes them move uphill, though some contests that it is a mere optical illusion. The strange occurrence has been experienced and testified by travellers from all across the world. The Indus River flowing to the east of Magnetic Hill makes the surroundings a picture-perfect frame.",
    images: [magnetic1],
    source: "",
  },
  {
    name: "Lamayuru (The Moonscape for Tourist)",
    description:
      "It is known as the Moonland of Ladakh and situated at a distance of 115 km(s) from Leh, one can easily cover Lamayuru in a day return trip from Leh. With its moonlike landscape, sometimes called the moonscape, Lamayuru is captivating and divine. Lamayuru is known for its 11th century monastery situated at a height of 3510 metres but the rugged landscape, odd geographical formations and picturesque views make Lamayuru a unique destination for tourists. The annual festival known as Yuru Kabgyat is the major attraction of Lamayuru monastery.",
    images: [lamayuru1, lamayuru2],
    source: "",
  },
  {
    name: "Tsomoriri Lake",
    description:
      "It is one of the surreal places to explore in Ladakh, located in Changthang plateau at about 4000metres above sea level and is about 19 km long and up to 8km wide with barren hills decked with snow on the top all around, beautiful migratory birds and other rare fauna make the sight simply astonishing. This beautiful blue pallet lake is also now a part of the wetland reserve under the Ramsar site, known as Tsomoriri Wetland Conservation Reserve, it is the highest Ramsar site in the world. The attribute of being a lesser-known lake vis-a-vis Pangong Lake makes it less crowded where various kinds of species like bar-headed goose, brown headed gull, the great crested grebe and Himalayan hares are found here in large numbers. Being surrounded by elevated peaks it is relatively isolated from the outer world making it a peaceful scenic place.",
    images: [tsomoriri1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Hanle",
    description:
      "Hanle is a remote village in Ladakh, 260 km(approx.) away from Leh, situated at an altitude of about 4,500 meters. Known for its clear skies and minimal light pollution, it offers an ideal location for astronomical observations. Hanle is home to the Indian Astronomical Observatory, one of the highest observatories in the world. The village is known for its pristine landscapes, offering a unique blend of natural beauty and astronomical wonders. Clear night skies make Hanle a haven for stargazing and astrophotography enthusiasts and Changthang Wildlife Sanctuary, shelters diverse flora and fauna, including the Tibetan Wild Ass (Kiang), marmots, and numerous rare bird species.",
    images: [hanle1, hanle2],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "Ladakh is home to the world's highest natural ice hockey rink (Karzoo), the highest bridge (Bailey Bridge), and one of the highest astronomical observatories (Hanle).",
  "The region is home to rare twin-humped Bactrian camels in the Nubra Valley, as well as snow leopards, Himalayan ibex, and the black-necked crane.",
 "It has the highest bridge in the world - Located between the meandering Dras and Suru rivers, the Bailey Bridge is the highest in the world. It was originally made by the military to migrate quickly through the rivers during wartime. A hydro-electric dam is situated to the left of the bridge while there is a lake on the right.",
  "It is a land of the rare twin-humped Bactrian camels - When in Ladakh, be ready to be greeted by numerous rare twin-humped Bactrian camels flocking the fascinating Nubra valley. These twin-humped Bactrian camels are a native of the Gobi desert. Another interesting thing about these camels is that they can survive in up to the lowest temperature as nearly as -40 degrees.",
  "It is a land of peculiar practices - Do you know that if you blow conch or seashells in Ladakh, you can call as many as 120 lamas at once? As an interesting response to the conch call, these lamas assemble every day at the Karsha Monastery for lunch! If a monk has to call his fellow monks for the morning prayer, he would simply blow a conch signifying the start for the prayer time.",
  "It has the highest natural ice hockey rink - The Karzoo Ice Hockey Rink in Ladakh is the world’s highest natural ice hockey rink. This rink comes to life during winters when the subzero temperatures are superior throughout the day. Winter sports are popular on a wide scale on this naturally built rink. Whereas the history of this sport in Ladakh dates back to the early 70s.",
  "It is the land of the fascinating Kung Fu nuns - When you visit the Drukpa monastery, the Kung Fu nuns dress up in pajamas and yellow sashes to sing for you. This is a thousand-year-old tradition among them. They also have various activities; one of them being Eco Pad Yatra which is usually 400+ miles on foot as they pick up litter and aware the locals about the environment.",
  " It has a monastery on the moon - Ever fancied landing on the moon but can’t figure out the rocket science behind it?! The exquisite village of Lamayuru, situated around 130kms away from Leh replicates exactly the white surface of the moon! This spectacular landscape with an enchanting Buddhist monastery on the top is indeed a treat to the eyes. Two annually celebrated festivals are grand.",
];

const artGallery = [
  {
    title: "Jabro",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Famous Dance form",
    image: gJabro,
  },
  {
    title: "Cham dance performance",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "",
    image: gCham,
  },
  {
    title: "Tukhstanmo Dance",
    emoji: "🍚",
    color: "#E8733A",
    desc: "",
    image: gTukhstanmo,
  },
  {
    title: "Loshon Dancing",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "",
    image: gLoshon,
  },
  {
    title: "Phyang Tsedup",
    emoji: "🥐",
    color: "#F4E884",
    desc: "",
    image: gPhyang,
  },
  {
    title: "The Shon Royal Dance",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "",
    image: gShon,
  },
  {
    title: "Momos",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "",
    image: gMomos,
  },
  {
    title: "Thukpa",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "",
    image: gThukpa,
  },
  {
    title: "Skyu",
    emoji: "🥭",
    color: "#F8C840",
    desc: "",
    image: gSkyu,
  },
  {
    title: "Chhutag",
    emoji: "🌿",
    color: "#F4B830",
    desc: "",
    image: gChhutag,
  },
];