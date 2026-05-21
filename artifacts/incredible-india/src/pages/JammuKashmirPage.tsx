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
import jammuMap from "@assets/jammuMap.jpg";
const eid1 = "https://i.postimg.cc/6QRL6zgH/image.png";
const navratri1 = "https://i.postimg.cc/wvQXLM6X/image.png";
const tulip1 = "https://i.postimg.cc/G3zPp4gc/image.png";
const amarnath1 = "https://i.postimg.cc/15jppLQ1/image.png";
const hemis1 = "https://i.postimg.cc/cJQwGCt5/image.png";
const baisakhi1 = "https://i.postimg.cc/gJshr7DC/image.png";
const lohri1 = "https://i.postimg.cc/CLz8Lmfc/image.png";
const navroz1 = "https://i.postimg.cc/g0qXB7fp/image.png";
const vaishno1 = "https://i.postimg.cc/NMdyQHGB/image.png";
const amar1 = "https://i.postimg.cc/HWPJKXPn/image.png";
const dal1 = "https://i.postimg.cc/cJmCcnnm/image.png";
const mughal1 = "https://i.postimg.cc/59G0p168/image.png";
const gulmarg1 = "https://i.postimg.cc/cLGJym7R/image.png";
const martand1 = "https://i.postimg.cc/BvMZFfrD/image.png";
const avantipur1 = "https://i.postimg.cc/V6hY7BLC/image.png";
const hari1 = "https://i.postimg.cc/z3ZqNzhz/image.png";
const shankaracharya1 = "https://i.postimg.cc/9FZ77zJD/image.png";
const pari1 = "https://i.postimg.cc/9f8Rh9F6/image.png";
const gWazwaan = "https://i.postimg.cc/JzKtNXJy/image.png";
const gRoghanJosh = "https://i.postimg.cc/NFh0skhx/image.png";
const gKashmiriPhiran = "https://i.postimg.cc/XNFJ2md3/image.png";
const gDogriAttire = "https://i.postimg.cc/fbpzCfbL/image.png";
const gRoofDance = "https://i.postimg.cc/NfBgdMQ8/image.png";
const gChhakri = "https://i.postimg.cc/C1bgNyt8/image.png";
const gSantoor = "https://i.postimg.cc/NfdwbkNn/image.png";
const gDumhalDance = "https://i.postimg.cc/d12bC2kf/image.png";
const gKashmiriKahwa = "https://i.postimg.cc/nL7g84kV/image.png";
const gModurPulao = "https://i.postimg.cc/J7KgW4bY/image.png";

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
export default function JammuKashmirPage() {
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
                Jammu & Kashmir
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Paradise on Earth
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  {
                    label: "Capital",
                    value: "Srinagar (Summer), Jammu (Winter)",
                  },
                  { label: "Population", value: "1.25 Crore" },
                  { label: "Area", value: "42,241 sq km" },
                  { label: "Founded", value: "31 October 2019" },
                  { label: "Language", value: "Kashmiri, Dogri, Urdu, Hindi" },
                  { label: "Districts", value: "20 Districts" },
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
              Srinagar (Summer), Jammu (Winter)
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Jammu & Kashmir — India's Crown, City of Temples
            </p>
          </div>
        </Section>

        {/* Map of `Jammu & Kashmir — click to enlarge */}
        <Section title="Map of Jammu & Kashmir" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(jammuMap, "Map of Jammu & Kashmir")}
            >
              <img
                src={jammuMap}
                alt="Map of Jammu & Kashmir"
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
              Jammu and Kashmir, often called the “Paradise on Earth,” is one of
              India’s most enchanting regions, celebrated for its snow clad
              mountains, lush valleys, and serene lakes. Historically, it was a
              vital hub on ancient trade routes, which brought diverse
              influences into its culture.
            </p>
            <p className="text-foreground">
              The union territory was reorganized on 31 October 2019, and today
              it consists of 20 districts with Srinagar as the summer capital
              and Jammu as the winter capital. Srinagar is famous for Dal Lake,
              houseboats, and Mughal gardens, while Jammu is renowned for its
              temples and pilgrimage sites. The region’s culture blends
              Kashmiri, Dogra, and Ladakhi traditions, creating a rich mosaic of
              languages, crafts, and festivals. Its handicrafts, especially
              pashmina shawls and papier mâché items, are admired worldwide.
              Agriculture thrives on saffron fields in Pampore and apple
              orchards across the valley.
            </p>
            <p className="text-foreground">
              The Jhelum River flows as a lifeline, sustaining communities and
              farmlands. Tourism is a major industry, with destinations like
              Gulmarg, Pahalgam, and Sonamarg attracting visitors year round.
              The natural beauty is complemented by spiritual sites such as
              Vaishno Devi and Amarnath. Festivals like Eid ul Fitr, Navratri,
              and the Tulip Festival showcase its diversity. Traditional dances
              like Rouf and Dumhal enrich its cultural fabric. Kashmiri cuisine,
              with dishes like Rogan Josh and Kahwa, adds flavor to its
              identity.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Overall, Jammu and Kashmir remains a jewel in India’s crown,
              offering a blend of spirituality, adventure, and breathtaking
              landscapes.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Jammu&Kashmir, mapsofindia.com)
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
        <Section title="Facts about Jammu & Kashmir" icon="💡">
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
            Scroll horizontally to explore Jammu & Kashmir's iconic foods,
            crafts, dance, and traditions.
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
    name: "Eid-ul-Fitr",
    tagline:
      "Celebrated by Muslims after the month of Ramadan. People offer prayers, share sweets, and visit family and friends",
    description:
      "Eid ul Fitr is one of the most important festivals celebrated in Jammu and Kashmir, marking the end of the holy month of Ramadan. The festival begins with special prayers at mosques and Eidgahs, where thousands gather in unity. Devotees wear new clothes and greet each other with “Eid Mubarak.” Families prepare traditional dishes like biryani, kebabs, and sheer khurma. The day is filled with joy, charity, and community bonding. Zakat and Fitr donations are given to the needy, reflecting compassion and generosity. Eid ul Fitr strengthens social ties across communities. In Srinagar, the Hazratbal Shrine and Jama Masjid witness large congregations. Markets are decorated with festive lights and stalls. Children receive gifts and Eidi from elders. The festival symbolizes gratitude, renewal, and spiritual fulfillment. It remains a highlight of Kashmir’s cultural calendar. Eid ul Fitr embodies the harmony of faith and community. It continues to thrive as a symbol of joy and devotion.",
    images: [eid1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Navratri",
    tagline:
      "Celebrated widely in Jammu region, especially by the Dogra community. Temples are decorated and people perform prayers and cultural events",
    description:
      "Navratri is a major Hindu festival celebrated in Jammu, dedicated to Goddess Durga. It spans nine nights of devotion, rituals, and fasting. Temples like Raghunath Temple in Jammu are adorned with lights and flowers. Devotees perform aarti and chant hymns daily. Each day honors a different form of the goddess. Fasting and prayers symbolize purification and discipline. Cultural programs and dances are organized during the festival. Community feasts are held at temples. Navratri reflects spiritual strength and devotion. It promotes unity and cultural identity. The festival attracts devotees from across the region. It remains a highlight of Jammu’s religious life. Navratri educates visitors about Hindu traditions. It embodies the harmony of faith and celebration. The festival continues to thrive as a symbol of resilience and spirituality.",
    images: [navratri1],
    source: "(src: theQuint.com)",
  },
  {
    name: "Tulip Festival",
    tagline:
      "Held in Srinagar at the Indira Gandhi Memorial Tulip Garden. It celebrates spring with colorful tulips and attracts many tourists",
    description:
      "The Tulip Festival in Srinagar is held at the Indira Gandhi Memorial Tulip Garden. Thousands of tulips bloom in vivid colors. The festival attracts tourists globally. It symbolizes renewal after winter. Cultural programs are held during the event. Local crafts are displayed. The festival promotes tourism and economy. It reflects Kashmir’s natural charm. Visitors enjoy photography and walks. The garden is near Dal Lake. The festival is linked to global tulip traditions. It remains a highlight of Srinagar’s tourism. Tulip Festival embodies joy and community spirit. It continues to thrive as a symbol of spring.",
    images: [tulip1],
    source: "(src: The Gulf Indians)",
  },
  {
    name: "Amarnath Yatra",
    tagline: "",
    description:
      "The Amarnath Yatra is an annual pilgrimage to the Amarnath Cave. Devotees trek through challenging terrain. The journey symbolizes devotion and endurance. The cave houses the ice lingam of Lord Shiva. Pilgrims chant hymns along the route. Facilities support the yatra. The festival attracts thousands of devotees. It reflects Kashmir’s spiritual heritage. The yatra inspires faith and resilience. It remains a highlight of religious life. The event educates visitors about traditions. Amarnath Yatra embodies devotion and sacrifice. It continues to thrive as a sacred landmark.",
    images: [amarnath1],
    source: "(src: LatestLY)",
  },
  {
    name: "Hemis Festival",
    tagline: "Buddhist monastery festival in Ladakh region",
    description:
      "The Hemis Festival, celebrated in Ladakh, honors Guru Padmasambhava. It is held at Hemis Monastery. Monks perform Cham dances in colorful masks. The festival reflects Buddhist traditions. It promotes faith and spirituality. Visitors enjoy cultural performances. Hemis attracts tourists worldwide. The festival inspires peace and devotion. It remains a highlight of Ladakh’s culture. The event educates visitors about Buddhism. Hemis embodies harmony of faith and art. It continues to thrive as a cultural landmark.",
    images: [hemis1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Baisakhi",
    tagline: "Harvest festival in Jammu",
    description:
      "Baisakhi, celebrated in Jammu and other parts of the region, marks the harvest season and the beginning of the new year in the traditional calendar. It is especially significant for the Sikh community, commemorating the formation of the Khalsa by Guru Gobind Singh in 1699. Devotees visit gurdwaras for prayers and kirtans. Community feasts, called langars, are organized to serve food to all. The festival includes traditional dances like Bhangra and Gidda. Farmers celebrate the ripening of crops with joy. Baisakhi reflects agricultural prosperity and spiritual devotion. It promotes unity and community bonding. Visitors enjoy cultural performances and fairs. The festival attracts devotees and tourists alike. It remains a highlight of Jammu’s cultural calendar. Baisakhi educates visitors about Sikh traditions. It embodies the harmony of faith and agriculture. The festival continues to thrive as a symbol of joy and resilience.",
    images: [baisakhi1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Lohri & Makar Sankranti (winter fire festivals)",
    tagline: "",
    description:
      "Lohri and Makar Sankranti are winter festivals celebrated in Jammu and Kashmir. Lohri marks the passing of the winter solstice and the arrival of longer days. Bonfires are lit, and people gather to sing and dance around them. Traditional foods like sesame seeds, jaggery, and peanuts are shared. Makar Sankranti celebrates the sun’s entry into Capricorn. Kite flying is a popular activity during this time. The festivals symbolize warmth, renewal, and community spirit. They are linked to agricultural cycles and harvests. Families come together to celebrate with joy. Lohri and Sankranti reflect cultural diversity in the region. They attract tourists for their vibrancy. The festivals remain highlights of winter traditions. They embody the harmony of nature and culture. Lohri and Sankranti continue to thrive as symbols of hope and renewal.",
    images: [lohri1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Navroz",
    tagline: "Persian New Year celebrated by Kashmiri Pandits",
    description:
      "Navroz, the Persian New Year, is celebrated by Kashmiri Pandits and other communities in Jammu and Kashmir. It marks the arrival of spring and new beginnings. The festival includes prayers, rituals, and feasts. Families prepare traditional dishes and sweets. Navroz reflects Persian cultural influence in Kashmir. It promotes unity and joy among communities. The festival is linked to agricultural cycles. Visitors enjoy cultural performances and gatherings. Navroz remains a highlight of Kashmir’s traditions. It educates people about heritage and history. The festival embodies renewal and prosperity. It continues to thrive as a cultural landmark. Navroz inspires hope and positivity. It remains a pride of Kashmir’s identity.",
    images: [navroz1],
    source: "(src: Wikipedia)",
  },
];

const historicalPlaces = [
  {
    name: "Vaishno Devi Temple",
    description:
      "The Vaishno Devi Temple, located in Katra in the Reasi district, is one of India’s most revered pilgrimage sites. Millions of devotees visit annually to seek blessings from Mata Vaishno Devi. The shrine is situated in the Trikuta Hills, requiring a trek of about 13 kilometers, which adds to the spiritual experience. Its origins are ancient, with legends tracing back to centuries of worship. The temple complex has been developed and is now managed by the Shri Mata Vaishno Devi Shrine Board. Pilgrims believe that Mata Vaishno Devi fulfills the wishes of those who visit with devotion. The Bhawan, or main sanctum, houses the holy cave where the goddess is worshipped in the form of pindis. Along the route, facilities like rest houses, food stalls, and medical aid centers support visitors. The journey itself is considered symbolic of faith and endurance. During Navratri, the temple witnesses an extraordinary influx of devotees. Helicopter services and ponies are available for those unable to walk the entire distance. The temple’s aura is heightened by chants and hymns echoing through the hills. It is not just a religious site but also a cultural landmark of Jammu. The temple contributes significantly to tourism and the local economy. Its spiritual significance makes it a cornerstone of Jammu and Kashmir’s identity.",
    images: [vaishno1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Amarnath Cave Temple",
    description:
      "The Amarnath Cave Temple, near Pahalgam in Anantnag district, is a sacred shrine dedicated to Lord Shiva. It is famous for the naturally formed ice Shivling, which appears annually during the summer months. Pilgrims undertake the Amarnath Yatra, a challenging trek through rugged terrain and high altitudes. The cave is located at an elevation of about 3,888 meters, making the journey both spiritual and adventurous. Legends state that Lord Shiva revealed the secrets of immortality to Goddess Parvati here. The shrine has been worshipped for centuries, with references in ancient texts and folklore. The yatra is organized annually, attracting thousands of devotees from across India. Security and medical arrangements are made to ensure the safety of pilgrims. The trek passes through breathtaking landscapes, including glaciers and alpine meadows. Baltal and Pahalgam are the two main routes to the cave. The experience is considered a test of devotion and endurance. The ice Shivling gradually forms and melts, symbolizing the cycle of creation and dissolution. The cave’s atmosphere is filled with chants of “Har Har Mahadev.” The Amarnath Yatra is not only a religious journey but also a cultural event. It strengthens the spiritual heritage of Jammu and Kashmir. The temple remains one of the most iconic symbols of Hindu devotion in the Himalayas.",
    images: [amar1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Dal Lake",
    description:
      "Dal Lake, located in Srinagar, is often called the “Jewel of Srinagar” and is one of the most iconic attractions of Jammu and Kashmir. This natural lake is famous for its shimmering waters, surrounded by snow capped mountains and lush gardens. Houseboats anchored on the lake provide a unique experience, allowing visitors to stay on water like in floating hotels. Shikaras, the traditional wooden boats, glide across the lake, offering scenic rides to tourists. The floating gardens, locally known as “Rad,” add to the charm with their vibrant flowers and vegetables. Dal Lake has been a cultural symbol, inspiring poets, painters, and filmmakers for centuries. It plays a vital role in Srinagar’s economy, supporting tourism and local livelihoods. During winter, parts of the lake freeze, creating a magical landscape. The Mughal emperors admired its beauty and often visited the area. Today, Dal Lake remains a centerpiece of Kashmir’s tourism industry. Its calm waters reflect the surrounding hills, creating postcard perfect views. Visitors can shop at floating markets where vendors sell handicrafts and saffron. The lake is also a hub for water sports like kayaking and canoeing. Its timeless beauty makes it a must visit destination. Dal Lake embodies the essence of Kashmir’s natural and cultural heritage.",
    images: [dal1],
    source: "(src: Adobe Stock)",
  },
  {
    name: "Mughal Gardens",
    description:
      "The Mughal Gardens of Srinagar, particularly Shalimar Bagh and Nishat Bagh, are masterpieces of Persian style landscaping built during the Mughal era. Shalimar Bagh was commissioned by Emperor Jahangir in the 17th century as a gift for his wife, Nur Jahan. Nishat Bagh, designed by Asif Khan, Nur Jahan’s brother, is equally magnificent, overlooking Dal Lake. These gardens are laid out in terraced levels, with flowing water channels, fountains, and lush flowerbeds. The Mughal emperors used them as retreats, enjoying the serene atmosphere and breathtaking views. The gardens reflect the grandeur of Mughal architecture combined with Kashmir’s natural beauty. Chinar trees line the pathways, adding vibrant colors in autumn. Visitors are enchanted by the symmetry and artistry of the layouts. The gardens are often compared to paradise, symbolizing Mughal sophistication. Today, they are popular tourist attractions, drawing thousands of visitors annually. UNESCO has considered them for World Heritage status due to their cultural significance. The gardens also host seasonal festivals, showcasing tulips and other blooms. They remain a living testimony to the Mughal love for art and nature. Shalimar and Nishat Bagh continue to be jewels of Srinagar’s landscape, blending history, culture, and beauty",
    images: [mughal1],
    source: "(src: Kashmir Observer)",
  },
  {
    name: "Gulmarg",
    description:
      "Gulmarg, located in Baramulla district, is one of India’s most famous hill stations and ski resorts. Surrounded by snow covered peaks and meadows, it is often referred to as the “Meadow of Flowers.” Gulmarg attracts tourists year round, offering skiing, snowboarding, and trekking opportunities. The Gulmarg Gondola, one of the highest cable cars in the world, takes visitors to breathtaking heights. In summer, the meadows bloom with wildflowers, creating a colorful carpet. British officers once developed Gulmarg as a holiday retreat during colonial times. Today, it is a hub for adventure tourism in Kashmir. The town also has a golf course, considered one of the highest in the world. Winter sports festivals are organized here, drawing athletes and enthusiasts. The natural beauty of Gulmarg has made it a favorite filming location for Bollywood movies. Local culture and hospitality add warmth to the experience. The area is also a gateway for treks to nearby peaks and valleys. Gulmarg’s charm lies in its ability to offer both relaxation and adventure. It remains a symbol of Kashmir’s tourism potential. Visitors leave with unforgettable memories of snow, flowers, and mountain vistas. Gulmarg truly embodies the spirit of Himalayan beauty.",
    images: [gulmarg1],
    source: "(src: Wikimedia)",
  },
  {
    name: "Martand Sun Temple",
    description:
      "The Martand Sun Temple, near Anantnag, was built in the 8th century by King Lalitaditya. Dedicated to the Sun God, it is a masterpiece of Kashmiri stone architecture. Though in ruins, its grandeur is evident in massive pillars. The temple blends Gandhara, Gupta, and Kashmiri styles. It once symbolized Kashmir’s spiritual richness. The site offers panoramic valley views. Archaeologists regard it as a medieval marvel. Visitors are drawn to its serene aura. The ruins inspire respect for ancient craftsmanship. Martand remains a pride of Kashmir’s heritage. It educates visitors about history. The temple embodies resilience and artistry. It continues to thrive as a cultural landmark.",
    images: [martand1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Avantipur Ruins (Pulwama)",
    description:
      "Avantipur Ruins, near Pulwama, are remnants of temples built in the 9th century. Dedicated to Lord Vishnu and Shiva, they showcase early Kashmiri architecture. Though partially destroyed, carvings and stone blocks remain. The site reflects medieval grandeur. Avantipur was once a thriving town. The temples are surrounded by scenic landscapes. Archaeologists regard them as heritage sites. Visitors are drawn to their historical aura. The ruins inspire respect for craftsmanship. They remain a highlight of Kashmir’s heritage. Avantipur educates visitors about traditions. The site embodies resilience and artistry. It continues to thrive as a cultural landmark.",
    images: [avantipur1],
    source: "(src: Backpack)",
  },
  {
    name: "Hari Parbat Fort (Srinagar)",
    description:
      "Hari Parbat Fort, overlooking Srinagar, was built under Emperor Akbar. The fort offers panoramic views of Dal Lake. It is surrounded by gardens and shrines. The site reflects Mughal military architecture. Hari Parbat is linked to local legends. It is sacred to Hindus, Muslims, and Sikhs. Temples and shrines are within its complex. The fort attracts tourists and pilgrims. It symbolizes Srinagar’s cultural diversity. The site educates visitors about history. Hari Parbat embodies harmony of faith and heritage. It continues to thrive as a landmark.",
    images: [hari1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Shankaracharya Temple (Srinagar)",
    description:
      "Shankaracharya Temple, located on a hill in Srinagar, is dedicated to Lord Shiva. It dates back to the 9th century. The temple offers panoramic views of the city. It is linked to Adi Shankaracharya’s visit. The site is sacred to Hindus. It reflects ancient Kashmiri architecture. Visitors climb steps to reach the shrine. The temple inspires devotion and peace. It remains a highlight of Srinagar’s heritage. The site educates visitors about history. Shankaracharya embodies resilience and faith. It continues to thrive as a spiritual landmar.",
    images: [shankaracharya1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Pari Mahal (Srinagar)",
    description:
      "Pari Mahal, also called the “Palace of Fairies,” is a Mughal garden and observatory. Built by Dara Shikoh in the 17th century, it overlooks Dal Lake. The site blends Islamic architecture with Persian gardens. It was used for astronomy and learning. Pari Mahal is surrounded by terraces and flowers. It reflects Mughal sophistication. Visitors enjoy panoramic views of Srinagar. The site is linked to local legends. Pari Mahal inspires awe and wonder. It remains a highlight of Kashmir’s heritage. The site educates visitors about history. Pari Mahal embodies harmony of art and science. It continues to thrive as a cultural landmark.",
    images: [pari1],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "Srinagar is famous for houseboats where people can stay like hotels and they are called 'Shikaras'",
  "Kashmir is known worldwide for its fine pashmina shawls.",
  "Saffron grown in Kashmir (Pampore) is among the best in the world.",
  "Gulmarg has one of the highest cable cars in the world (Gulmarg Gondola).",
  "The Jhelum River is a lifeline for the Kashmir Valley.",
  "Dal Lake and Wular Lake are prominent features here; Wular is one of the largest freshwater lakes in Asia",
  "The territory features three distinct regions. Jammu is known as the 'City of Temples', the Kashmir Valley features a temperate climate with world-famous Mughal gardens, and the region is bound by towering glaciers and peaks like Mount Nun (7,135 meters).",
  "The world-famous Kashmir Valley is nestled between the Pir Panjal Range and the main Himalayas, known for its pristine natural beauty.",
  "The iconic arched steel bridge soaring over the Chenab River is uniquely designed to withstand temperatures as low as -20 degree celsius.",
  "It is India's largest producer of Apples.",
  " The Pampore region is famed globally for producing premium saffron, while the famous Pashmina wool is woven from the fleece of the Changthangi Himalayan goat.",
  "Srinagar's Dal Lake houses the world's only floating post office, a charming remnant of the region's unique heritage.",
  "Over 70% of India's prized saffron is cultivated in the fertile fields of Pampore in the Kashmir valley, making it a cornerstone of the local cultural and agricultural heritage.",
];

const artGallery = [
  {
    title: "Wazwaan Feast",
    emoji: "🍖",
    color: "#C8503A",
    desc: "A grand ceremonial multi-course meal of 36 dishes, the pride of Kashmiri cuisine served at weddings and celebrations",
    image: gWazwaan,
  },
  {
    title: "Rogan Josh",
    emoji: "🍛",
    color: "#D4603A",
    desc: "Slow-cooked aromatic lamb curry with Kashmiri chilli and whole spices — the most iconic dish of the valley",
    image: gRoghanJosh,
  },
  {
    title: "Kashmiri Kahwa",
    emoji: "🍵",
    color: "#C89840",
    desc: "A fragrant green tea brewed with saffron, cardamom, cinnamon and crushed almonds, served in a traditional samovar",
    image: gKashmiriKahwa,
  },
  {
    title: "Modur Pulao",
    emoji: "🍚",
    color: "#D4A848",
    desc: "A rich sweet rice dish made with saffron, dry fruits, sugar and ghee — a festive Kashmiri delicacy",
    image: gModurPulao,
  },
  {
    title: "Kashmiri Phiran",
    emoji: "👘",
    color: "#6878C8",
    desc: "The traditional long woollen cloak worn by both men and women in Kashmir, often intricately embroidered and worn over a kangri",
    image: gKashmiriPhiran,
  },
  {
    title: "Dogri Attire",
    emoji: "🥻",
    color: "#9858A8",
    desc: "Traditional costume of the Dogra people — women in vibrant salwar suits with distinctive Dogri embroidery from the Jammu region",
    image: gDogriAttire,
  },
  {
    title: "Rouf Dance",
    emoji: "💃",
    color: "#48A878",
    desc: "A graceful traditional dance of Kashmiri women performed during Eid and spring festivals, with interlocking footwork in two facing rows",
    image: gRoofDance,
  },
  {
    title: "Dumhal Dance",
    emoji: "🎭",
    color: "#4878A8",
    desc: "A rare and sacred dance of the Wattal tribe — men carry a tall decorated banner and dance in a procession during specific seasonal occasions",
    image: gDumhalDance,
  },
  {
    title: "Chhakri Music",
    emoji: "🎶",
    color: "#C86848",
    desc: "The most beloved folk music tradition of Kashmir — sung in groups with the Rabab, Tumbaknari and Noot, filling the valley during harvest seasons",
    image: gChhakri,
  },
  {
    title: "Santoor",
    emoji: "🎵",
    color: "#A87838",
    desc: "Kashmir's iconic 100-stringed trapezoidal instrument struck with light wooden mallets — the heartbeat of classical Kashmiri Sufiana music",
    image: gSantoor,
  },
];
