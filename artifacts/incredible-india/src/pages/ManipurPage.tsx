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
import manipurMap from "@assets/manipurMap.jpg";
const yaoshang1 = "https://i.postimg.cc/FKsWRHY5/image.png";
const ningol1 = "https://i.postimg.cc/Pq368nDz/image.png";
const haraoba1 = "https://i.postimg.cc/zB400w0r/image.png";
const gang1 = "https://i.postimg.cc/sfZn18gg/image.png";
const lui1 = "https://i.postimg.cc/pdTCvc6S/image.png";
const kut1 = "https://i.postimg.cc/XqwcLRry/image.png";
const chumpha1 = "https://i.postimg.cc/m2sSkgnn/image.png";
const cheiraoba1 = "https://i.postimg.cc/7ZPM1Qw2/image.png";
const loktak1 = "https://i.postimg.cc/zGfKHbFK/image.png";
const keibul1 = "https://i.postimg.cc/7LGzXFcH/image.png";
const kangla1 = "https://i.postimg.cc/C1bqpjwD/image.png";
const govindajee1 = "https://i.postimg.cc/1RcqWcWV/image.png";
const ima1 = "https://i.postimg.cc/CLcf0MpJ/image.png";
const shaheed1 = "https://i.postimg.cc/tTGskYF0/image.png";
const museum1 = "https://i.postimg.cc/g08JxmQD/image.png";
const ina1 = "https://i.postimg.cc/QtqdqSX1/image.png";
const kanglasha1 = "https://i.postimg.cc/1XCRktVV/image.png";
const khoonghampat1 = "https://i.postimg.cc/SQTyNnjb/image.png";
const gEromba = "https://i.postimg.cc/26Hf6tkQ/image.png";
const gSingju = "https://i.postimg.cc/q7kY3G5p/image.png";
const gChandraki = "https://i.postimg.cc/LsLbwbg3/image.png";
const gMeiteiPotloi = "https://i.postimg.cc/9fn6H7Lj/image.png";
const gKabui = "https://i.postimg.cc/B6FVWw8p/image.png";
const gRaslila = "https://i.postimg.cc/QNkfp71R/image.png";
const gThangTa = "https://i.postimg.cc/hGdrhQKy/image.png";
const gPung = "https://i.postimg.cc/m2pNwykf/image.png";
const gKanglaFort = "https://i.postimg.cc/L6JZHK9W/image.png";
const gSangaiDeer = "https://i.postimg.cc/9Mxrh1vh/image.png";
const gLoktak = "https://i.postimg.cc/KzsvVjMz/image.png";
const gMoirangphee = "https://i.postimg.cc/HxJVTbH5/image.png";
const gNataSankirtana = "https://i.postimg.cc/nh0z73hL/image.png";

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
export default function ManipurPage() {
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
                Manipur
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Jewel of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Imphal" },
                  { label: "Population", value: "28.55 Lakhs" },
                  { label: "Area", value: "22,327 sq km" },
                  { label: "Founded", value: "21 January 1972" },
                  { label: "Language", value: "Meitei, English" },
                  { label: "Districts", value: "16 Districts" },
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
              Imphal
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Manipur — Switzerland of India
            </p>
          </div>
        </Section>

        {/* Map of Manipur — click to enlarge */}
        <Section title="Map of Manipur" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(manipurMap, "Map of Manipur")}
            >
              <img
                src={manipurMap}
                alt="Map of Manipur"
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
              Manipur, often called the “Jewel of India,” is a northeastern
              state known for its lush green hills, fertile valleys, and vibrant
              traditions. It became a full state on 21 January 1972 and today
              has 16 districts, with Imphal as its capital.
            </p>
            <p className="text-foreground">
              The state is famous for Loktak Lake, the largest freshwater lake
              in Northeast India, and the unique floating islands called
              phumdis. Manipur’s culture blends classical dance, indigenous
              sports, and rich folklore. The Manipuri Ras Lila is one of India’s
              major classical dance forms, deeply rooted in Vaishnav traditions.
              The state has a long history of local kingdoms, with Kangla Fort
              symbolizing its royal heritage.
            </p>
            <p className="text-foreground">
              Festivals like Yaoshang, Ningol Chakouba, and Lai Haraoba showcase
              its community spirit and devotion to deities. Polo, believed to
              have originated here as Sagol Kangjei, adds to its global cultural
              significance. The cuisine includes dishes like Eromba, Singju, and
              Chak hao kheer made from black rice. Women play a central role in
              society, exemplified by Ima Keithel, Asia’s largest women run
              market. The Sangai deer, also called the “Dancing Deer,” is the
              state animal and lives in Keibul Lamjao National Park, the world’s
              only floating national park.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Manipur’s landscape is dotted with hills, rivers, and valleys that
              make it a paradise for nature lovers. Its traditions, dances, and
              crafts reflect resilience and creativity. The people are known for
              their hospitality and strong community bonds. Manipur remains a
              land of natural beauty, cultural richness, and historical depth.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Manipur, mapsofindia.com)
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
        <Section title="Facts about Manipur" icon="💡">
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
            Scroll horizontally to explore Tamil Nadu's iconic foods, crafts,
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
    name: "Yaoshang",
    tagline:
      "A spring festival similar to Holi, celebrated with colors, sports, and community events",
    description:
      "Yaoshang is Manipur’s version of Holi, celebrated with unique local traditions. It begins on the full moon day of Lamta (February/March). Children go door to door collecting donations called “Nakatheng.” Sports events are organized across villages and towns. The festival includes dances, music, and cultural performances. People smear colors on each other joyfully. Thabal Chongba, a traditional moonlight dance, is the highlight of Yaoshang. The festival promotes unity and community spirit. It reflects Manipur’s blend of Hindu and indigenous traditions. Visitors enjoy the vibrant atmosphere. Yaoshang remains a highlight of Manipur’s cultural calendar. It educates people about heritage. The festival embodies joy and renewal. Yaoshang continues to thrive as a symbol of community bonding.",
    images: [yaoshang1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Ningol Chakouba",
    tagline:
      "A special festival where married women are invited to their parental homes for a feast and gifts",
    description:
      "Ningol Chakouba is a family festival celebrated in November. Married women (Ningol) are invited to their parental homes for a grand feast. The festival strengthens family bonds and relationships. Traditional dishes are prepared and shared. Gifts are exchanged between families. Ningol Chakouba reflects Manipuri social traditions. It promotes love and respect among relatives. Visitors enjoy the festive meals and hospitality. The festival remains a highlight of Manipur’s culture. It educates people about family values. Ningol Chakouba embodies unity and affection. It continues to thrive as a cultural landmark. The festival inspires joy and togetherness. It remains a pride of Manipur’s identity.",
    images: [ningol1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Lai Haraoba",
    tagline:
      "A traditional festival with rituals, dance, and music, celebrating local deities and cultural stories",
    description:
      "Lai Haraoba, meaning “merrymaking of the gods,” is one of the most important traditional festivals of Manipur. It is celebrated to honor the local deities, known as Umang Lai, who are believed to protect villages and communities. The festival involves elaborate rituals performed by Maibis (priestesses) and Maibas (priests). Sacred dances and songs narrate the creation of the universe and the origin of life. Rituals include offerings, processions, and symbolic reenactments of myths. Lai Haraoba reflects the deep spiritual connection between people and nature. It promotes cultural identity and continuity of traditions. The festival is celebrated in different forms by various communities across Manipur. Visitors witness vibrant dances, music, and rituals. It remains a highlight of Manipur’s cultural calendar. Lai Haraoba educates people about indigenous beliefs. The festival embodies harmony of faith, folklore, and community. It continues to thrive as a symbol of Manipur’s spiritual heritage.",
    images: [haraoba1],
    source: "(src: Alamy)",
  },
  {
    name: "Gang-Ngai",
    tagline: "Kabui Naga festival in December/January",
    description:
      "Gang Ngai is a traditional festival of the Kabui Naga tribe in Manipur. Celebrated in December or January, it marks the end of the year. The festival includes rituals, dances, and feasts. It is a time of community bonding and joy. Young people participate in cultural performances. Elders conduct rituals to honor ancestors. The festival reflects tribal traditions and beliefs. It promotes unity and identity among the Kabui people. Visitors enjoy the colorful dances and music. Gang Ngai is linked to agricultural cycles. It remains a highlight of Manipur’s tribal culture. The festival attracts tourists and researchers. It embodies the harmony of tradition and community. Gang Ngai continues to thrive as a cultural landmark.",
    images: [gang1],
    source: "(src: e-pao.net)",
  },
  {
    name: "Lui-Ngai-Ni",
    tagline: "Naga seed sowing festival in February",
    description:
      "Lui Ngai Ni is a seed sowing festival celebrated by Naga tribes in Manipur. It is held in February to mark the beginning of the agricultural season. The festival includes rituals, dances, and feasts. Elders bless seeds for prosperity. Young people participate in cultural performances. The festival reflects tribal traditions and beliefs. It promotes unity among Naga tribes. Visitors enjoy colorful dances and music. Lui Ngai Ni is linked to farming cycles. It remains a highlight of Manipur’s tribal culture. The festival attracts tourists and researchers. It embodies the harmony of agriculture and community. Lui Ngai Ni continues to thrive as a cultural landmark.",
    images: [lui1],
    source: "(src: facebook)",
  },
  {
    name: "Kut Festival",
    tagline: "Harvest festival of Kuki tribe",
    description:
      "Kut Festival is celebrated by the Kuki tribe of Manipur. It marks the harvest season and thanksgiving. The festival includes dances, songs, and feasts. Elders bless harvests for prosperity. Young people participate in cultural performances. Kut reflects agricultural traditions and beliefs. It promotes unity and community spirit. Visitors enjoy colorful performances and local food. Kut is linked to farming cycles. It remains a highlight of Manipur’s culture. The festival attracts tourists and researchers. It embodies the harmony of agriculture and community. Kut continues to thrive as a cultural landmark.",
    images: [kut1],
    source: "(src: mountainecho.in)",
  },
  {
    name: "Chumpha Festival",
    tagline: "Tangkhul Naga festival",
    description:
      "Chumpha Festival is celebrated by the Tangkhul Naga tribe in Manipur. It marks the harvest season and thanksgiving. The festival includes rituals, dances, and feasts. Elders bless harvests for prosperity. Young people participate in cultural performances. Chumpha reflects tribal traditions and beliefs. It promotes unity and community spirit. Visitors enjoy colorful performances and local food. Chumpha is linked to farming cycles. It remains a highlight of Manipur’s culture. The festival attracts tourists and researchers. It embodies the harmony of agriculture and community. Chumpha continues to thrive as a cultural landmark.",
    images: [chumpha1],
    source: "(src: india-tours.ca)",
  },
  {
    name: "Cheiraoba",
    tagline: "Manipuri New Year festival",
    description:
      "Cheiraoba is the Manipuri New Year festival. It is celebrated in April with rituals and feasts. Families clean and decorate their homes. Offerings are made to deities for prosperity. Traditional dishes are prepared and shared. People climb nearby hills as a ritual. Cheiraoba reflects renewal and hope. It promotes unity and joy among communities. Visitors enjoy cultural performances and gatherings. The festival remains a highlight of Manipur’s traditions. It educates people about heritage. Cheiraoba embodies renewal and prosperity. It continues to thrive as a cultural landmark.",
    images: [cheiraoba1],
    source: "(src: humansofnortheast.com)",
  },
];

const historicalPlaces = [
  {
    name: "Loktak Lake",
    description:
      "Loktak Lake, located in Bishnupur district, is the largest freshwater lake in Northeast India. It is famous for its floating phumdis, which are masses of vegetation, soil, and organic matter. These phumdis create unique floating islands that support local communities. The lake is a lifeline for thousands of people, providing water, fish, and transport. Loktak is also home to Keibul Lamjao National Park, the only floating national park in the world. The Sangai deer, Manipur’s state animal, thrives here. Fishermen live in huts built on phumdis, creating a distinctive lifestyle. The lake’s beauty attracts tourists, photographers, and researchers. It plays a vital role in Manipur’s ecology and economy. Loktak Hydroelectric Project uses its waters for power generation. The lake changes with seasons, offering different scenic views. It is a symbol of Manipur’s natural heritage. Conservation efforts are ongoing to protect its fragile ecosystem. Loktak remains a jewel of Northeast India, blending nature, culture, and livelihood.",
    images: [loktak1],
    source: "(src: travelwiseguide.com)",
  },
  {
    name: "Keibul Lamjao National Park",
    description:
      "Keibul Lamjao National Park, located on Loktak Lake, is the only floating national park in the world. It was declared a national park in 1977 and covers an area of about 40 square kilometers. The park is famous as the last natural habitat of the endangered Sangai deer. The Sangai is called the “Dancing Deer” because of its graceful movements. The park’s terrain consists of floating phumdis, making it unique. It is a biodiversity hotspot with rich flora and fauna. Birds, reptiles, and aquatic species thrive here. The park is a symbol of Manipur’s ecological wealth. It attracts tourists, wildlife enthusiasts, and researchers. Conservation programs aim to protect the Sangai and its habitat. The park is also culturally significant, as the Sangai is revered in local traditions. Boat rides allow visitors to explore its floating landscapes. The serene environment makes it a peaceful retreat. Keibul Lamjao is a global treasure, combining ecology and culture. It remains a pride of Manipur’s natural heritage.",
    images: [keibul1],
    source: "(src: tripnetra.com)",
  },
  {
    name: "Kangla Fort",
    description:
      "Kangla Fort, located in Imphal, is an ancient fort and palace complex that symbolizes Manipur’s royal history. It was the seat of Manipur’s kings for centuries. The fort has temples, palaces, and ceremonial grounds. It reflects the architectural and cultural heritage of the Meitei rulers. Kangla was a center of administration and spirituality. The fort has witnessed battles, rituals, and royal ceremonies. It is associated with legends and folklore of Manipur. British forces occupied it during colonial times. Today, it is a heritage site open to visitors. The fort’s ruins tell stories of resilience and history. Statues and shrines inside highlight local traditions. Kangla Fort is considered sacred by the people of Manipur. Restoration efforts are ongoing to preserve its legacy. It is a cultural landmark and tourist attraction. Kangla Fort remains a symbol of Manipur’s glorious past.",
    images: [kangla1],
    source: "(src: dreamstime.com)",
  },
  {
    name: "Shri Govindajee Temple",
    description:
      "Shri Govindajee Temple, located in Imphal, is one of Manipur’s most important Vaishnav temples. It was built under royal patronage in the 19th century. The temple is dedicated to Lord Krishna and Radha. Its architecture reflects traditional styles with a simple yet elegant design. The temple has twin domes and a large courtyard. Devotees gather here for prayers and festivals. Ras Lila performances are held in the temple premises. It is a spiritual center for Vaishnav followers in Manipur. The temple has survived damage and was rebuilt over time. It remains a symbol of devotion and resilience. Festivals like Janmashtami are celebrated with grandeur. The temple attracts pilgrims and tourists alike. Its serene atmosphere inspires peace and faith. Shri Govindajee Temple is a cornerstone of Manipur’s religious life. It continues to uphold the spiritual traditions of the state.",
    images: [govindajee1],
    source: "(src: Incredible India)",
  },
  {
    name: "Ima Keithel (Mother’s Market)",
    description:
      "Ima Keithel, also known as Mother’s Market, is a unique marketplace in Imphal run entirely by women. It is one of the largest women run markets in Asia. The market has existed for centuries, reflecting women’s central role in Manipur’s economy. Thousands of women vendors sell vegetables, textiles, handicrafts, and traditional items. The market is divided into sections for different goods. It is not just a commercial hub but also a cultural symbol. Ima Keithel empowers women and showcases their resilience. The market attracts tourists for its uniqueness. It is a vibrant place full of colors and activity. Bargaining and social interaction make it lively. The market reflects Manipur’s community spirit. It is a heritage site recognized for its social importance. Ima Keithel is a testimony to women’s leadership in society. It remains a pride of Manipur’s identity. The market continues to thrive as a symbol of empowerment and tradition.",
    images: [ima1],
    source: "(src: The Indian Express)",
  },
  {
    name: "Shaheed Minar: Memorial for Manipuri martyrs",
    description:
      "Shaheed Minar, located in Imphal, is a memorial dedicated to Manipuri martyrs. It honors those who fought against British colonial rule. The monument stands tall as a symbol of courage and sacrifice. It is situated in the heart of Imphal city. The site attracts visitors and patriots alike. Shaheed Minar reflects Manipur’s struggle for freedom. It is linked to historical events and revolts. The monument inspires respect and remembrance. It is a cultural landmark of Imphal. Ceremonies are held here on important days. The site educates visitors about history. Shaheed Minar remains a pride of Manipur. It embodies resilience and patriotism. The monument continues to thrive as a heritage site.",
    images: [shaheed1],
    source: "(src: Manipur tourism)",
  },
  {
    name: "Manipur State Museum",
    description:
      "The Manipur State Museum, located in Imphal, preserves the cultural and historical heritage of the state. It houses artifacts, manuscripts, and tribal costumes. The museum educates visitors about Manipur’s traditions. It reflects the diversity of local communities. Exhibits include weapons, ornaments, and crafts. The museum attracts tourists and researchers. It remains a highlight of Imphal’s culture. The site inspires respect for heritage. It embodies resilience and tradition. The museum continues to thrive as a cultural landmark.",
    images: [museum1],
    source: "(src: Echoes of Edifice)",
  },
  {
    name: "INA Memorial",
    description:
      "The INA Memorial, located in Moirang, commemorates the Indian National Army’s role in India’s freedom struggle. It marks the site where the INA hoisted its flag in 1944. The memorial honors soldiers who fought against colonial rule. It is a symbol of courage and patriotism. The site includes a museum with artifacts and photographs. Visitors learn about Subhas Chandra Bose and the INA. The memorial attracts tourists and researchers. It remains a pride of Manipur’s heritage. Ceremonies are held here on important days. The site educates visitors about history. INA Memorial embodies resilience and sacrifice. It continues to thrive as a cultural landmark.",
    images: [ina1],
    source: "(src: TripInvites)",
  },
  {
    name: "Kangla Sha",
    description:
      "Kangla Sha are sacred dragon statues located at Kangla Fort in Imphal. They symbolize protection and strength in Manipuri tradition. The statues are considered guardians of the fort. Kangla Sha reflects ancient Meitei beliefs. They are linked to local folklore and legends. The statues inspire awe and reverence. Visitors admire their artistry and symbolism. Kangla Sha remains a highlight of Kangla Fort’s heritage. The site educates visitors about traditions. The statues embody resilience and spirituality. They continue to thrive as cultural landmarks. Kangla Sha reflects the harmony of faith and art. The guardians remain a pride of Manipur’s identity.",
    images: [kanglasha1],
    source: "(src: Wikimapia.org)",
  },
  {
    name: "Khonghampat Orchidarium",
    description:
      "Khonghampat Orchidarium, located near Imphal, is a botanical treasure of Manipur. It is managed by the Forest Department and houses hundreds of orchid species. The orchidarium is spread across lush gardens and greenhouses. Rare and endangered orchids are preserved here. It reflects Manipur’s rich biodiversity. The site attracts tourists, researchers, and botanists. Seasonal blooms create a colorful spectacle. The orchidarium educates visitors about conservation. It is linked to local traditions and folklore. Khonghampat inspires respect for nature. It remains a highlight of Manipur’s ecological heritage. The site embodies the harmony of science and culture. Visitors enjoy photography and guided tours. Khonghampat continues to thrive as a natural landmark.",
    images: [khoonghampat1],
    source: "(src: stylesatlife.com)",
  },
];

const facts = [
  "Manipuri dance is one of the eight major classical dance forms of India, known for its themes based on the love story of Radha and Krishna.",
  "Keibul Lamjao is the only floating national park in the world.",
  "Polo is believed to have origins in Manipur (traditional game: Sagol Kangjei).",
  "Ima Keithel is one of the largest women-run markets in Asia.",
  "The Sangai deer is called the “Dancing Deer” and is Manipur’s state animal.",
  "Meitei (or Manipuri) is the official language and lingua franca. The state is also home to various Naga and Kuki-Zo tribal communities who speak various Tibeto-Burman dialects.",
  "Handloom weaving is the largest cottage industry in the state, with the famous Phanek (sarong) and Moirang Phee being highly sought after.",
  "The population is diverse, with Hinduism and Christianity as the two primary religions practiced, along with significant Muslim and indigenous Snamahi faith populations.",
  "Manipur's cuisine is a delightful fusion of indigenous ingredients and culinary techniques influenced by neighbouring Myanmar, China, and Bhutan.",
  "In Manipur all the villages still follow the custom of having a common Townhall for all the major events of the village . And also there is a community pond in each village.",
  "Black stone pottery - crockery, cutlery, and utensils. It is indigenous to Ukhrul in Manipur. The black stone its made of is only found in Ukhrul and most families of Ukhrul are self-employed in the making of these black pottery items.",
];
const artGallery = [
  {
    title: "Eromba",
    emoji: "🍲",
    color: "#C84838",
    desc: "A hearty Meitei dish of boiled vegetables and fermented fish (ngari) mashed together — the most essential dish on every Manipuri table",
    image: gEromba,
  },
  {
    title: "Singju",
    emoji: "🥗",
    color: "#78A838",
    desc: "A tangy Manipuri salad of finely shredded raw vegetables, lotus stem and fermented fish tossed with chilli and herbs — a street food favourite",
    image: gSingju,
  },
  {
    title: "Chamthong (Kangshoi)",
    emoji: "🍵",
    color: "#4898A8",
    desc: "A light and wholesome Meitei vegetable stew seasoned with ngari and green onions — a comforting everyday staple of Manipuri households",
    image: gChandraki,
  },
  {
    title: "Meitei Potloi",
    emoji: "🥻",
    color: "#C858A8",
    desc: "The elaborate traditional bridal costume of Meitei women — a cylindrical skirt of silk with rich gold threadwork worn during Raslila and weddings",
    image: gMeiteiPotloi,
  },
  {
    title: "Kabui Naga Attire",
    emoji: "👘",
    color: "#A84838",
    desc: "Vibrant handwoven shawls and skirts of the Kabui Naga tribe, featuring bold geometric patterns in red, black and white — each design carrying tribal identity",
    image: gKabui,
  },
  {
    title: "Raslila Dance",
    emoji: "💃",
    color: "#8858C8",
    desc: "A devotional classical dance depicting the love of Radha and Krishna — the crowning glory of Meitei performing arts, performed in elaborate Potloi costume",
    image: gRaslila,
  },
  {
    title: "Thang-Ta",
    emoji: "⚔️",
    color: "#C87838",
    desc: "Manipur's ancient martial art combining sword and spear combat — practiced for centuries by the Meitei warriors and now a graceful performance art form",
    image: gThangTa,
  },
  {
    title: "Pung (Mridanga)",
    emoji: "🥁",
    color: "#3878C8",
    desc: "The barrel-shaped classical drum of Manipur — the soul of Meitei music, played with bare hands in the Pung Cholom dance where drummers perform acrobatic beats",
    image: gPung,
  },
  {
    title: "Kangla Fort",
    emoji: "🏯",
    color: "#A89838",
    desc: "The sacred ancient seat of Meitei kings in Imphal — a historical and spiritual landmark that was the political and religious heart of Manipur for centuries",
    image: gKanglaFort,
  },
  {
    title: "Sangai Deer",
    emoji: "🦌",
    color: "#8B6914",
    desc: "Manipur's state animal and one of the rarest deer on earth — the brow-antlered Sangai survives only on the floating phumdis of Loktak Lake, critically endangered with fewer than 300 left",
    image: gSangaiDeer,
  },
  {
    title: "Loktak Lake & Phumdis",
    emoji: "🌿",
    color: "#3A7A4A",
    desc: "Northeast India's largest freshwater lake, home to unique floating biomass islands called phumdis — rapidly shrinking due to pollution, water hyacinth invasion and rising siltation",
    image: gLoktak,
  },
  {
    title: "Moirangphee Weave",
    emoji: "🧵",
    color: "#C84878",
    desc: "A rare traditional handloom textile from Moirang woven with intricate patterns passed down through generations — dying out as fewer than a handful of weavers still practice this centuries-old craft",
    image: gMoirangphee,
  },
  {
    title: "Nata Sankirtana",
    emoji: "🎼",
    color: "#6848C8",
    desc: "A UNESCO-inscribed devotional music and drum performance of the Meitei — at serious risk as the number of trained practitioners dwindles and younger generations move away from the tradition",
    image: gNataSankirtana,
  },
];
