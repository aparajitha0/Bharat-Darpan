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
const arunachalMap = "https://i.postimg.cc/KcV0qVnX/image.png";
const losar1 = "https://i.postimg.cc/d3SgWPZQ/image.png";
const losar2 = "https://i.postimg.cc/hPfkXjNh/image.png";
const solung1 = "https://i.postimg.cc/BvGk7CbG/image.png";
const solung2 = "https://i.postimg.cc/DZpChQvg/image.png";
const dree1 = "https://i.postimg.cc/WpJKVKkQ/image.png";
const dree2 = "https://i.postimg.cc/L6tbY1vN/image.png";      
const nyokum1 = "https://i.postimg.cc/0QKt8Mz1/image.png";
const nyokum2 = "https://i.postimg.cc/7hgm2F1R/image.png";
const mopin1 = "https://i.postimg.cc/28708f8H/image.png";
const mopin2 = "https://i.postimg.cc/Jz7PsdsN/image.png";
const ziro1 = "https://i.postimg.cc/rm49BBPJ/image.png";
const ziro2 = "https://i.postimg.cc/mkGSBdxB/image.png";
const donyi1 = "https://i.postimg.cc/gjqHJvd1/image.png";
const donyi2 = "https://i.postimg.cc/HsdtNP4z/image.png";
const reh1 = "https://i.postimg.cc/RVdTxQgN/image.png";
const reh2 = "https://i.postimg.cc/zGPSVDmc/image.png";
const chalo1 = "https://i.postimg.cc/cHfQ9Qv5/image.png";
const chalo2 = "https://i.postimg.cc/VsBqXWQt/image.png";
const torgya1 = "https://i.postimg.cc/hthVWFJb/image.png";
const torgya2 = "https://i.postimg.cc/MT0Qbq4S/image.png";
const Itafort1 = "https://i.postimg.cc/76bLbD4y/image.png";
const Itafort2 = "https://i.postimg.cc/mhWZdHH2/image.png";
const mon1 = "https://i.postimg.cc/mZJwSNmF/image.png";
const mon2 = "https://i.postimg.cc/RVtTp6YX/image.png";
const bhimasankar1 = "https://i.postimg.cc/bwH9pXpG/image.png";
const bhimasankar2 = "https://i.postimg.cc/DzvdzCzF/image.png";
const malinithan1 = "https://i.postimg.cc/RFq77NfP/image.png";
const malinithan2 = "https://i.postimg.cc/QN9gVKjr/image.png";
const jaswant1 = "https://i.postimg.cc/T3Gnkkgx/image.png";
const jaswant2 = "https://i.postimg.cc/DzwLh8CZ/image.png";
const pagoda1 = "https://i.postimg.cc/021SQttJ/image.png";
const pagoda2 = "https://i.postimg.cc/rFGrtS3M/image.png";
const parshuram1 = "https://i.postimg.cc/W12Jmdc8/image.png";
const parshuram2 = "https://i.postimg.cc/cJzgNTg8/image.png";
const gorsam1 = "https://i.postimg.cc/tJ3YWjrs/image.png";
const gorsam2 = "https://i.postimg.cc/c1wKVRsh/image.png";
const thembang1 = "https://i.postimg.cc/52N6YD8Y/image.png";
const thembang2 = "https://i.postimg.cc/8Cx5Y59s/image.png";
const dirang1 = "https://i.postimg.cc/zvrfJQJX/image.png";
const dirang2 = "https://i.postimg.cc/RC7FPvR6/image.png";
const gTawang = "https://i.postimg.cc/HskyXGtj/image.png";
const gItanagar = "https://i.postimg.cc/tgWZp99Z/image.png";
const gThukpa = "https://i.postimg.cc/9MBDw1RX/image.png";
const gMomos = "https://i.postimg.cc/nrRM0z1C/image.png";
const gButterBun = "https://i.postimg.cc/W1DSmq7c/image.png";
const gPonung = "https://i.postimg.cc/280X7DR4/image.png";
const gNuranang = "https://i.postimg.cc/Bbk4j1gD/image.png";
const gNadampha = "https://i.postimg.cc/J0fCrCr7/image.png";
const gPanda = "https://i.postimg.cc/xTmSs85Z/image.png";
const gMithun = "https://i.postimg.cc/B6dJ6KND/image.png";
const gTawangMonastery = "https://i.postimg.cc/3Jj38WG3/image.png";
const gBamboo = "https://i.postimg.cc/2ymX2jSh/image.png";

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
export default function ArunachalPradeshPage() {
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
                Arunachal Pradesh
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of the Rising Sun
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Itanagar" },
                  { label: "Population", value: "13.83 Lakhs" },
                  { label: "Area", value: "83,743 sq km" },
                  { label: "Founded", value: "20 February 1987" },
                  { label: "Language", value: "English, Nyishi, Adi, Bengali" },
                  { label: "Districts", value: "28 Districts" },
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
              Itanagar
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Arunachal Pradesh — Mini India
            </p>
          </div>
        </Section>

        {/* Map of Arunachal Pradesh — click to enlarge */}
        <Section title="Map of Arunachal Pradesh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(arunachalMap, "Map of Arunachal Pradesh")}
            >
              <img
                src={arunachalMap}
                alt="Map of Arunachal Pradesh"
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
              Arunachal Pradesh, often referred to as the "Land of the Rising Sun," is a state of immense strategic and cultural significance located in the far northeastern corner of India. Its history is a complex tapestry of indigenous tribal heritage and colonial boundary disputes. Historically, the region was mentioned in ancient Hindu texts like the Kalika Purana, where it is associated with the Prabhu Mountains. For centuries, the area was inhabited by various independent tribes, each maintaining its own distinct social structures and traditions. During the British Raj, the territory was loosely managed and became known as the North-East Frontier Tracts.
            </p>
            <p className="text-foreground">
              Following India's independence, it was renamed the North-East Frontier Agency (NEFA) in 1954 and was constitutionally part of Assam. The region gained significant global attention during the 1962 Sino-Indian War, which led to a permanent shift in how the Indian government managed its borders. It was converted into a Union Territory in 1972 and finally attained full statehood on February 20, 1987. Today, it remains a sensitive geopolitical zone, sharing borders with Bhutan, Myanmar, and the Tibetan region of China.
            </p>
            <p className="text-foreground">
              Culturally, Arunachal Pradesh is one of the most diverse regions in Asia, home to over 26 major tribes and numerous sub-tribes. Because of this immense diversity, there is no single "Arunachali" language. Instead, the population speaks a variety of Tibeto-Burman languages such as Nyishi, Apatani, Adi, Mishmi, and Monpa. Interestingly, English serves as the official language and acts as a vital bridge between the different communities. Hindi is also widely spoken and understood, serving as a common lingua franca in markets and urban centers.
            </p>
            <p className="text-foreground">
              The current situation in the state is one of rapid modernization and infrastructure development. The government is heavily investing in "Trans-Arunachal Highways," bridges, and tunnels—like the Sela Tunnel—to improve all-weather connectivity. These projects are crucial for both civilian ease of travel and military logistics. Hydropower is another major focus, with the state often called the "Powerhouse of India" due to its massive potential for hydroelectric energy.
            </p>
            <p className="text-foreground">
              Tourism is currently seeing a significant boost as the state promotes its "hidden" gems, like the Tawang Monastery and the Ziro Valley. However, this growth comes with challenges, including the need to balance ecological preservation with industrial progress. Environmentalists and local communities often debate the impact of large dams on the pristine Himalayan ecosystem. Additionally, the Inner Line Permit (ILP) system remains in place to regulate entry, ensuring the protection of indigenous tribal cultures and security in the border regions.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              In recent years, there has been a push toward digital literacy and improving educational facilities in remote areas. While urban centers like Itanagar are growing quickly, reaching the nomadic tribes in the higher altitudes remains a logistical hurdle. Despite these challenges, Arunachal Pradesh is evolving into a vibrant, strategically vital state that blends ancient tribal wisdom with 21st-century aspirations.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Arunachal Pradesh, mapsofindia.com)
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
        <Section title="Facts about Arunachal Pradesh" icon="💡">
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
    name: "Losar",
    tagline: "Tibetan New Year",
    description:
      "The Losar festival is the pinnacle of the liturgical calendar for the Monpa community, primarily residing in the Tawang and West Kameng districts. Marking the onset of the Tibetan New Year, it is a period of profound spiritual renewal and communal cleansing. The festivities begin well before the actual date, as families engage in 'Guthuk', a ritualistic house cleaning meant to sweep away the misfortunes and 'evil eye' of the previous year. As the new year dawns, the air in Tawang is filled with the scent of incense and the sound of monastic horns. The most striking feature of Losar is the 'Cham' dance performed by monks at the Tawang Monastery. These masked dances are not mere performances but sacred tantric rituals where dancers embody protective deities to subdue demonic forces. Families gather to hoist new prayer flags (Dar-shing), believing the wind will carry their prayers for peace and prosperity across the Himalayas. Traditional dishes like Kapse (fried biscuits) and Chang (barley beer) are shared generously, reinforcing the bonds of kinship and the shared Buddhist heritage that defines this high-altitude region.",
    images: [losar1, losar2],
    source: "(src: Wikimedia commons, Tawang monastery official archive)",
  },
  {
    name: "Solung",
    tagline:
      "",
    description:
      "Solung is the most celebrated festival of the Adi tribe, representing their deep-seated reverence for the Earth and their dependence on agriculture. Spanning seven days in early September, it is a post-sowing festival divided into three main parts: Sopi-Yekpi (the sacrificial part), Binnyat (the ritual for the Goddess of crops), and Ekop (the ritual for protection against evil). The festival centers on the sacrifice of the Mithun, an animal of immense socio-economic and religious value to the Adis. The blood of the sacrifice is offered to the deities to ensure a bumper harvest and to keep the 'shades of the dead' at bay. During Solung, the village common ground becomes a stage for the Ponung dance, where young women move in a rhythmic circle, led by a Miri (shaman) who chants the 'Abang'—the oral history of the Adi people, detailing the origin of life and the journey of their ancestors. This oral tradition is vital, as it passes down the tribe’s cosmology and ethics to the younger generation in a celebratory atmosphere of rice beer and communal feasting.",
    images: [solung1, solung2],
    source: "(src: East siang district, Wikmedia Commons)",
  },
  {
    name: "Dree Festival",
    tagline:
      "",
    description:
      "The Dree Festival is a fascinating window into the unique agricultural practices of the Apatani tribe, who are world-renowned for their sophisticated irrigation and paddy-cum-fish culture in the Ziro Valley. Held annually on July 5, Dree is essentially a collective prayer to appease the four main deities—Tamu, Metti, Danyi, and Harinyag—to prevent famine and protect the standing crops from pests. Unlike many other festivals that focus on the harvest, Dree is a 'rite of protection' held during the peak of the monsoon when the crops are most vulnerable. A signature tradition of Dree is the distribution of cucumbers to guests and community members; the cucumber symbolizes the freshness of the greens and the success of the agricultural season. The festival also features traditional sports like wrestling and high jumping, alongside the Daminda folk song, which celebrates the beauty of the valley. It serves as a crucial social glue for the Apatanis, blending the solemnity of ancient shamanic rituals with a vibrant display of the tribe’s distinct facial tattoos and nose plugs, which remain iconic symbols of their identity.",
    images: [dree1, dree2],
    source: "(src: Lower subansiri district, Ziro valley heritage portal)",
  },
  {
    name: "Nyokum Yullo",
    tagline: "",
    description:
      "For the Nyishi, the largest ethnic group in the state, Nyokum Yullo is a grand invocation of the spirits to ensure the harmony of the 'Nyok' (land). The festival is a spectacular display of Nyishi pride, with men donning their traditional headgear (Bopia) topped with hornbill beaks and women wearing heavy beaded necklaces and silver ornaments. The focal point of the ritual is the Tamla, a beautifully decorated bamboo altar where the priest (Nyibu) performs animal sacrifices and chants to invite the Goddess of Nature. The Nyishi believe that all natural calamities and illnesses are caused by the displeasure of the spirits; thus, Nyokum is a time to restore the balance between man and the supernatural. The energy of the festival is infectious, characterized by the Rikham Pada dance and the rhythmic chanting that echoes through the hills. It is a time when the boundaries between villages dissolve, as thousands gather at the main festival grounds to share Opo (millet beer) and celebrate the collective strength of the tribe, ensuring that the coming year is free from the shadows of conflict or hunger.",
    images: [nyokum1, nyokum2],
    source: "(src: Papum pare district administration, Incredible India)",
  },
  {
    name: "Mopin",
    tagline:
      "",
    description:
      "Mopin is often called the 'Festival of Happiness' for the Galo tribe, and its atmosphere certainly justifies the name. Celebrated in April to mark the beginning of the Galo New Year, it is dedicated to Mopin Ane, a goddess of great benevolence who bestows wealth and fertility. The most visually striking aspect of Mopin is the application of Ette, a white paste made from ground rice, which participants smear on each other’s faces. This act is a blessing of purity and peace, very much resembling the spirit of Holi but with a sacred agricultural undertone. The women, dressed in elegant white traditional handwoven sarongs with black geometric patterns, perform the Popir dance. The dance is graceful and slow, symbolizing the gentle arrival of the goddess into the village. Participants also consume large quantities of Apong (locally brewed liquor) and meat during the communal feast. For the Galo people, Mopin is a way to cast off the gloom of the past year and welcome a season of abundance, ensuring that their granaries remain full and their families remain healthy through the grace of the divine mother.",
    images: [mopin1, mopin2],
    source: "(src: West siang district, Wikimedia Commons)",
  },
  {
    name: "Ziro Festival of Music",
    tagline: "Set before an open-air stage created 13 centuries ago.",
    description:
      "While significantly younger than the ancient tribal rites, the Ziro Festival of Music has rapidly become a cultural phenomenon that bridges the gap between indigenous heritage and global modernity. Set in the breathtaking Ziro Valley, the festival is hosted by the Apatani community, who ensure that the event adheres to strict eco-friendly principles. The stages are constructed entirely from locally sourced bamboo, and the festival promotes a 'leave no trace' policy, reflecting the tribe's inherent respect for nature. It provides a global platform where independent musicians from Tokyo to London perform alongside local folk singers, creating a unique sonic landscape. For the Apatanis, the festival is an opportunity to showcase their hospitality and the UNESCO-listed landscape of their ancestors to the world. It has transformed the quiet valley into a hub of cultural exchange, where traditional rice beer is served in bamboo mugs to visitors from across the globe, proving that ancient traditions can coexist beautifully with contemporary art and tourism.",
    images: [ziro1, ziro2],
    source: "(src: Ziro festival of music official portal, Adobe stock)",
  },
  {
    name: "Si-Donyi",
    tagline:
      "",
    description:
      "The Si-Donyi festival is the most significant spiritual event for the Tagin tribe, representing their monotheistic-leaning belief in the Sun (Donyi) and the Earth (Si) as the supreme creators. Held in January, the festival is a deep expression of the 'Donyi-Polo' faith. The Tagins believe that every aspect of human life is governed by these two celestial forces; hence, the festival involves elaborate propitiation rituals led by a priest to ensure that no malevolent spirits (Uyu) disturb the peace of the tribe. The rituals are intense and highly symbolic, often involving the sacrifice of a Mithun to appease the deities. The festival is also a showcase of Tagin aesthetics, with participants wearing intricate hand-loomed fabrics and heavy brass jewelry. The communal dances, such as the Chungne and Konyi Bokar, are performed with great fervor to the beat of traditional drums. For the Tagin people, Si-Donyi is not just a holiday; it is a vital cosmic negotiation to ensure that the sun continues to shine on their crops and the earth remains fertile for their children.",
    images: [donyi1, donyi2],
    source: "(src: Upper subansiri District, Arunchal observer media)",
  },
  {
    name: "Reh Festival",
    tagline: "",
    description:
      "The Reh Festival is perhaps one of the most demanding and elaborate celebrations in Arunachal Pradesh, reflecting the resilient spirit of the Idu Mishmi tribe. Dedicated to the Divine Mother 'Nanyi Inyitaya', the festival is an appeal for her blessings upon the community. What makes Reh unique is the immense preparation it requires; a family or village may spend years accumulating the wealth, livestock, and food necessary to host the feast, as the goddess is said to only be pleased by genuine abundance and generosity. The festival spans three days, featuring the Igu dance, where the tribal shaman, dressed in special ritualistic attire, performs trances to communicate with the spirit world. The Idu Mishmis are known for their distinctive hairstyles and exceptional weaving skills, both of which are proudly displayed during Reh. It is a time of strict taboos and sacred offerings, where the tribe reinforces its social hierarchy and kinship bonds through the sharing of smoked meat and rice wine, ensuring that the ancient lineage of the Mishmi remains protected by their ancestral mother.",
    images: [reh1, reh2],
    source: "(src: Lower Dibang Valley, Wikimedia commons)",
  },
  {
    name: "Chalo Loku",
    tagline: "",
    description:
      "The Nocte tribe of the Tirap district celebrates Chalo Loku as a grand farewell to the old season and a welcome to the new. The name itself translates to 'driving out the old', and the festival occurs just after the harvest when the granaries are full. One of the most critical components of Chalo Loku is the Chamkat ritual. This is a rite of passage where young men who have come of age are formally initiated into the Paang (the village council or bachelor’s dormitory). This transition marks their entry into adulthood and village governance, highlighting the festival's role in maintaining the tribe's social and political structure. The celebration is filled with the thunderous sound of log drums and traditional war dances that recall the Nocte’s history as a warrior tribe. Despite the modern influence of Christianity and other faiths in the region, Chalo Loku remains a powerful cultural anchor, reminding the Nocte people of their roots, their land, and the communal responsibility they owe to their village.",
    images: [chalo1, chalo2],
    source: "(src: Tirap District, Arunachal State Gazette)",
  },
  {
    name: "Torgya",
    tagline: "",
    description:
      "Torgya is a three-day monastic festival held at the majestic Tawang Monastery, specifically aimed at warding off natural disasters and external threats. It follows the lunar calendar and is a deeply esoteric Buddhist celebration. The core of the festival is the burning of the 'Torgya'—a large, pyramid-shaped ritual cake made of flour and butter—which symbolizes the destruction of all evil forces. The monks perform the Sha-Cham, a series of highly choreographed dances where they wear vibrant, sometimes frightening masks representing various protective deities, animals, and spirits. Each movement in the dance is a form of meditation and a symbolic battle against the 'Kleshas (mental obstructions) like anger and greed. For the Monpa laypeople, attending Torgya is a way to earn spiritual merit and seek protection for the coming year. The cold January air of Tawang is transformed by the warmth of thousands of butter lamps and the colorful costumes of the pilgrims, creating a scene of timeless devotion that has remained largely unchanged for centuries.",
    images: [torgya1, torgya2],
    source: "(src: tawang district, incredible india)",
  },
];

const historicalPlaces = [
  {
    name: "Ita Fort (The Brick Fortess)",
    description:
      "Ita Fort, historically known as the 'Fort of Bricks', stands as one of the most significant archaeological sites in Arunachal Pradesh and serves as the namesake for the state capital, Itanagar. Constructed primarily between the 14th and 15th centuries, the fortress is an architectural anomaly in a region where traditional structures were typically built using wood, bamboo, and thatch. It is attributed to the kings of the Jitari Dynasty, specifically King Ramachandra, representing the peak of the Chutiya Kingdom's influence. Unlike the typical circular or square forts of the plains, Ita Fort possesses an irregular shape, skillfully designed to follow the natural contours of the hilly terrain, making it a masterpiece of medieval strategic planning. The sheer scale of the construction is staggering, as it is estimated that approximately 8 million bricks were used to build the ramparts. These bricks are notable for their unique craftsmanship; they are thin, flat, and remarkably durable, varying in size but maintaining a consistent quality that has survived centuries of monsoon rains and seismic activity. The fortress was designed with three distinct entrances—the Western, Eastern, and Southern gates—each strategically placed to monitor the valley and mountain passes. The total length of the brick walls exceeds 1,600 meters, with some sections reaching heights of up to 5 meters and widths of nearly 2 meters, creating a formidable barrier against invading forces from the plains. Archaeological excavations at the site have unearthed more than just defensive walls; they have revealed a sophisticated lifestyle. Finds include pottery shards, terracotta figurines, and stone carvings that suggest the fort was not merely a military outpost but a thriving administrative and cultural hub. The mortar used to bind the bricks was a specialized mixture of crushed stone, lime, and organic binders, which allowed the structure to withstand the heavy vibrations of the earthquake-prone Eastern Himalayas. Today, much of the fort has been reclaimed by the dense green foliage of the region, but the visible ruins of the Eastern and Western gates remain powerful symbols of a lost era of hill-fortification. The historical narrative of Ita Fort is deeply intertwined with the folklore of the local tribes, who view the ruins with a sense of ancestral reverence. It serves as a tangible link to the medieval history of Northeast India, a period often overshadowed by the history of the mainland. Walking through the remains of the fortress, one can see the precision with which the bricks were laid, reflecting a level of engineering sophistication that was far ahead of its time for such a remote location. As a protected monument under the Archaeological Survey of India, the fort continues to be a focal point for researchers and tourists alike, offering a silent testimony to the grit and vision of the rulers who once carved a brick empire out of the wild, mountainous rainforest.",
    images: [Itafort1, Itafort2],
    source: "(src: Wikimedia commons, Itanagar Wildlife sanctuary)",
  },
  {
    name: "Tawang Monastery",
    description:
      "Known formally as Galden Namgey Lhatse or the 'Celestial Paradise in a Clear Night', stands as a monumental fortress of faith perched at 10,000 feet in the Himalayan heights of Arunachal Pradesh. Founded in 1681 by Merak Lama Lodre Gyatso at the behest of the 5th Dalai Lama, it remains the largest monastery in India and the second largest in the world. The site selection is steeped in legend, as it is said that Merak Lama’s horse wandered off and was found standing on this specific hilltop, signaling it as the auspicious location for the spiritual center. Today, the complex is enclosed by a massive 925-foot long compound wall, protecting a sprawling village of over 60 residential buildings and a majestic three-story assembly hall. Inside the Dukhang, or the main assembly hall, visitors are greeted by an overwhelming sense of divinity centered around a 26-foot-tall gilded statue of Lord Buddha. This hall is an architectural marvel, adorned with intricate thangkas, hand-painted murals, and silk draperies that tell the stories of Buddhist cosmology. The monastery serves as a vital repository of ancient wisdom, housing a massive library that contains rare gold-lettered manuscripts of the Kangyur and Tengyur scriptures. As a center for monastic education, it supports nearly 500 monks who dedicate their lives to the study of Buddhist philosophy, logic, and traditional arts within its hallowed halls. The atmosphere of the monastery is defined by a rhythmic cycle of rituals, where the low drone of monastic chanting and the sounding of long brass horns echo across the Tawang Valley. During the Torgya festival, the quietude is transformed into a vibrant spectacle of 'Chham' dances, where monks in elaborate masks perform sacred movements to ward off evil spirits. Beyond its religious role, the monastery is a cultural anchor for the Monpa people, bridging the gap between the ancient traditions of Tibet and the modern identity of the Indian Northeast. Wrapped in frequent mountain mists and surrounded by snow-capped peaks, Tawang Monastery truly lives up to its name as a celestial abode, offering a profound sense of peace to all who make the arduous trek through the Sela Pass to its gates.",
    images: [mon1, mon2],
    source: "(src: Tawang district administration, Incredible India)",
  },
  {
    name: "Bhismaknagar Fort: The Ancient Citadel of the Lower Dibang Valley",
    description:
      "The Bhismaknagar Fort stands as a profound testament to the ancient roots of Arunachal Pradesh, serving as a rare archaeological bridge between the classical epics of India and the tribal history of the Northeast. Located in the Lower Dibang Valley near Roing, this 8th-century citadel is widely believed to have been the capital of King Bhismaka, a powerful ruler of the Chutia Kingdom and the father of Rukmini, the consort of Lord Krishna. The fort is an architectural marvel of its era, constructed primarily of burnt bricks and stone, spanning an area of roughly 10 square kilometers. Unlike the temporary structures of many hill tribes, the permanent nature of Bhismaknagar indicates a highly organized and settled civilization. The fort's defensive layout is particularly impressive, featuring a semi-circular wall that protected the city on three sides, while the rugged hills provided a natural barrier on the fourth. Archaeological excavations have revealed that the walls were reinforced with earthen ramparts and deep ditches, a sophisticated military design intended to withstand prolonged sieges. Within the ruins, researchers have discovered a wealth of artifacts, including terracotta plaques decorated with floral patterns, animal motifs, and geometric designs, which point to a flourishing artistic tradition that blended indigenous styles with influences from the Brahmaputra Valley. The structural integrity of the fort is equally fascinating, as the bricks were fired to a hardness that has allowed them to survive centuries of heavy monsoon rains and high seismic activity in the Himalayan foothills. The discovery of advanced drainage systems and large water storage tanks suggests that the inhabitants possessed a deep understanding of urban planning and hydraulic engineering. Historically, Bhismaknagar acted as a vital outpost, controlling the trade routes that connected the mountains of the Mishmi hills to the fertile plains of Assam. This strategic location allowed the Chutia kings to maintain a prosperous economy based on both agriculture and the exchange of forest products like musk, medicinal herbs, and ivory. For the local Idu Mishmi tribe, the fort is not merely a ruin but a sacred symbol of their ancestral identity, often mentioned in their oral traditions and folk songs. The legend of Rukmini’s abduction by Lord Krishna, known as 'Rukmini Haran', remains one of the most popular tales in the region, drawing a direct cultural thread from this remote corner of Arunachal to the heart of Indian mythology. In modern times, the site serves as a vital historical monument under the protection of the Archaeological Survey of India. The thick, overgrown jungles that once hid the fort for centuries have been partially cleared, revealing the scale of the palace complex and the central assembly hall where the king once held court. Visitors to the site can still see the foundational layouts of various rooms, which hint at a hierarchy of living spaces and a complex court life. The presence of pottery fragments and iron implements suggests a society that was proficient in metallurgy and craft. Efforts to preserve Bhismaknagar are ongoing, as it represents one of the earliest examples of urban civilization in the easternmost part of the Indian subcontinent. It stands as a reminder that the history of Arunachal Pradesh is not just a collection of isolated tribal stories, but a significant chapter in the broader history of South Asian kingdoms. The atmosphere at the fort is one of quiet majesty, where the red brick ruins contrast sharply against the emerald green of the surrounding forests, inviting both historians and travelers to reflect on the rise and fall of a forgotten empire. Today, Bhismaknagar remains a source of immense pride for the people of the state, proving that the 'Land of the Rising Sun' has always been a beacon of culture and strength.",
    images: [bhimasankar1, bhimasankar2],
    source: "(src: Lower dibang valley district, Archaeological survey of India)",
  },
  {
    name: "Malinithan Temple: The Exquisite Stone Sanctuary of the Foothills",
    description:
      "Malinithan stands as a magnificent archaeological jewel in the Lower Siang district of Arunachal Pradesh, representing one of the most significant sites of stone architecture in the entire Northeastern region of India. Situated on the northern bank of the Brahmaputra River at the foot of the Siang hills, this 13th-century temple site is a rare example of the Aryan-style stone temple architecture flourishing in a region primarily known for wooden and bamboo structures. Historically, Malinithan is believed to have been constructed during the reign of the Chutia kings, who were great patrons of art and religion, and it showcases a stunning blend of the Orissan school of architecture with local artistic sensibilities. The site is shrouded in a beautiful legend: it is said that after Lord Krishna eloped with Rukmini from Bhismaknagar, they stopped at this site on their way to Dwarka. They were greeted by Goddess Parvati, who presented them with exquisite garlands of flowers. Krishna was so moved by her hospitality that he addressed her as 'Malini, meaning 'the mistress of the garden', and hence the place became known as Malinithan. Today, the ruins are a 'museum under the open sky', where visitors can witness the remnants of five major temple basements that were once towering structures of granite. The structural remains at Malinithan are famed for their intricate and sophisticated carvings, which are remarkably well-preserved despite the passage of centuries and the region's high seismic activity. Archaeologists have unearthed a treasure trove of granite sculptures, including masterfully carved icons of Hindu deities such as Indra seated on his elephant Airavata, Surya in his celestial chariot, a massive Nandi bull, and various forms of Ganesha and Kartikeya. The precision of the floral motifs, geometric patterns, and dancing figures (Apsaras) carved into the heavy stone blocks suggests that the craftsmen possessed an advanced understanding of geometry and stone masonry, likely influenced by the Kalinga style of Odisha. The temples were primarily dedicated to 'Shakti' or the Divine Mother, reflecting the strong Tantric traditions that permeated the region during the medieval period. The sheer weight and scale of the granite blocks used in the construction indicate a massive logistical effort, as granite is not locally available in the immediate vicinity and had to be transported from great distances. Walking through the site today, one can see the massive plinths and shattered columns that hint at the grandeur of the original temple complex, which was likely destroyed by a catastrophic earthquake in the past. Despite its ruinous state, Malinithan remains a vibrant center of worship, especially during the Basanti Puja and the annual Malinithan Mela, which attracts thousands of devotees from across Arunachal Pradesh and Assam. The site serves as a vital historical bridge, demonstrating that the foothills of the Himalayas were a melting pot of cultural exchange where the artistic traditions of the Indian heartland met the indigenous cultures of the hills. The preservation efforts at Malinithan have turned it into a major destination for researchers, historians, and pilgrims alike, who come to marvel at the 'Stone Sanctuary' that has withstood the test of time. The contrast between the ancient, dark granite ruins and the lush, green tropical forest creates an atmosphere of timeless spirituality, making Malinithan not just a monument of stone, but a living testament to the enduring faith and artistic genius of the people of Arunachal Pradesh.",
    images: [malinithan1, malinithan2],
    source: "(src: Lower siang district administration, Wikimedia commons)",
  },
  {
    name: "Jaswant Garh War Memorial: The Eternal Sentinel of Sela Pass",
    description:
      "The Jaswant Garh War Memorial stands as a poignant and deeply revered monument to valor, located at a staggering altitude of 12,000 feet near the Sela Pass in the Tawang district. Unlike the ancient stone temples or medieval forts of Arunachal Pradesh, this site is a 'living' memorial dedicated to the modern military history of India and the extraordinary heroism of Rifleman Jaswant Singh Rawat of the 4th Garhwal Rifles. During the Sino-Indian War of 1962, specifically during the Battle of Nuranang, Jaswant Singh displayed a level of bravery that has since passed into the realm of legend. As the Chinese forces advanced, Singh refused to retreat, choosing instead to hold a strategic position alone after his comrades had fallen or been reassigned. For 72 harrowing hours, he managed to stall the progress of an entire battalion of the People's Liberation Army. Local folklore tells of how he was assisted by two Monpa girls, Sela and Nura, who helped him set up firing positions at different spots to create the illusion that the post was manned by a large force. By the time he was finally overwhelmed, he had reportedly neutralized over 300 enemy soldiers, making a final stand that secured his name in the annals of Indian military greatness. What makes Jaswant Garh truly unique is the 'living' status accorded to the fallen soldier by the Indian Army and the local population. Even though he was posthumously awarded the Maha Vir Chakra, India’s second-highest military decoration, the army continues to treat him as if he were still on active duty. He has been given periodic promotions over the decades, currently holding a high honorary rank. A dedicated team of soldiers is stationed at the memorial to maintain his 'quarters'; they polish his boots every morning, make his bed, and serve him meals at the designated times. It is widely believed by the soldiers and locals alike that his spirit continues to guard the pass, often appearing in dreams or as a spectral figure to warn sentries of impending danger or to reprimand those who fall asleep on duty. The memorial complex itself is a serene, white-walled structure housing a brass bust of the hero, surrounded by captured enemy weapons, personal effects, and the original bunkers where the battle took place. The atmosphere at Jaswant Garh is one of solemn pride and hushed respect, standing in stark contrast to the harsh, windswept, and often snow-covered landscape of the high Himalayas. Every traveler moving towards Tawang makes it a point to stop at the memorial to pay their respects, often receiving a hot cup of tea served by the army personnel stationed there—a tradition of hospitality that has become synonymous with the site. The memorial is not just a reminder of the 1962 conflict but a symbol of the unbreakable bond between the Indian armed forces and the indigenous people of Arunachal Pradesh, who view Jaswant Singh as a guardian deity of their land. The nearby Sela Pass and Nuranang Falls are named after the two brave women who aided him, further weaving the story of his sacrifice into the very geography of the state. Jaswant Garh serves as a constant vigil over the border, embodying the spirit of 'Duty, Honor, Country' against the backdrop of the rugged mountains, ensuring that the sacrifice made in the cold winters of 1962 is never forgotten by the generations that follow.",
    images: [jaswant1, jaswant2],
    source: "(src: Tawang district official portal, Indian Army-Northern command archives)",
  },
  {
    name: "Golden Pagoda: The Shimmering Jewel of Kongmu Kham",
    description:
      "The Golden Pagoda, known locally as Kongmu Kham, is a radiant masterpiece of Burmese-style Buddhist architecture that has transformed the town of Namsai into a premier spiritual destination in Northeast India. Opened in 2010, this monument is a relatively modern addition to the state’s cultural landscape, yet it carries the weight of centuries of Theravada Buddhist tradition practiced by the Tai-Khamti and Singpho tribes. The structure is perched on a plateau overlooking the Tengapani River, spanning a lush 20-hectare complex designed to provide a sense of divine tranquility. Its most striking feature is the central gilded dome, which is crowned with a traditional multi-tiered umbrella (hti) that glitters brilliantly under the tropical sun, visible from miles away. The architecture is characterized by its intricate wood carvings, golden filigree work, and four main entrance gates that lead to a central sanctum. Inside, a serene bronze statue of the Buddha, cast in the style of the famous Mahamuni Buddha of Myanmar, serves as the spiritual heart of the shrine. The interior walls are often adorned with vibrant murals and inscriptions that depict the various Jataka tales, providing a visual narrative of the Buddha's previous lives and his path to enlightenment. Beyond its physical beauty, the Golden Pagoda serves as a vibrant cultural and educational hub for the region. It houses a library, a meditation hall, and a monastery where young monks are trained in the Pali language and Buddhist scriptures. The complex comes alive during the Sangken festival, the traditional New Year of the Tai-Khamti people, where the statue of the Buddha is ritually brought out and bathed with scented water by devotees in a joyous display of faith and community spirit. The pagoda’s construction was a collaborative effort involving master craftsmen from Myanmar and local artisans, symbolizing a cultural bridge between India and Southeast Asia. The surrounding gardens are meticulously landscaped, featuring Bodhi trees, lotus ponds, and smaller stupas that create an atmosphere of 'Nirvana on Earth'. It is not just a place of worship but a symbol of the socio-religious identity of the Theravada Buddhist communities in Arunachal Pradesh, who have preserved their distinct script, language, and customs for generations. In recent years, the monument has gained international recognition, attracting tourists and spiritual seekers who find solace in its quiet, meditative environment. The pagoda is especially breathtaking at night when it is illuminated by thousands of lights, reflecting its golden silhouette in the nearby water bodies. Its presence has spurred significant economic growth in the Namsai district, leading to improved infrastructure and a rise in cultural tourism. For the visitor, the experience of walking through the Golden Pagoda is one of sensory delight—from the smell of incense and fresh flowers to the rhythmic chanting of the monks and the soft tinkling of the bells at the top of the spire. It stands as a testament to the fact that monuments in Arunachal Pradesh are not just relics of the distant past but are also evolving symbols of contemporary faith and artistic excellence. The Golden Pagoda remains a 'Shimmering Shrine' that illuminates the path of peace and serves as a beacon of the rich, multi-layered heritage of the 'Land of the Rising Sun.'",
    images: [pagoda1, pagoda2],
    source: "(src: Namsai district administration, Incredible india)",
  },
  {
    name: "Parshuram Kund: The Sacred Waters of the Lohit River",
    description:
      "Parshuram Kund is a natural monument of profound spiritual and mythological significance, nestled in the lower reaches of the Lohit River in the Lohit district of Arunachal Pradesh. This sacred site is one of the most important Hindu pilgrimage destinations in Northeast India, drawing its name and sanctity from the legendary sage Parshuram, the sixth avatar of Lord Vishnu. According to the ancient Puranas and the Kalika Purana, Parshuram committed the grave sin of matricide at his father’s command. Distraught and seeking redemption, he traveled across the land with his axe stuck to his hand as a mark of his crime. It was only when he arrived at this specific spot on the Lohit River and bathed in its pristine waters that the axe finally fell away, signifying that his sins had been washed clean. Since that mythical era, the 'Kund' (basin) has been considered a site of miraculous purification. Every year, during the festival of Makar Sankranti in mid-January, tens of thousands of devotees from across India and Nepal undertake a grueling journey to this remote location to take a holy dip in the freezing waters, believing that a single bath here can cleanse a lifetime of transgressions. The physical setting of Parshuram Kund is as dramatic as the legends that surround it. The river Lohit, a major tributary of the Brahmaputra, emerges here from the steep Himalayan gorges and spreads out into the plains, creating a breathtaking landscape of turquoise water framed by towering, jungle-clad cliffs. Historically, the site was marked by ancient stone steps leading down to the water, but the catastrophic Great Assam Earthquake of 1950 significantly altered the topography, causing large boulders to shift and burying many of the original structures. In recent years, the Government of India has initiated a massive redevelopment project to transform the area into a world-class pilgrimage site, which includes the installation of a towering 51-foot bronze statue of Sage Parshuram that now overlooks the valley. The project also aims to improve the 'Parikrama' path, guest houses, and bathing ghats to accommodate the ever-growing number of visitors. Despite these modern interventions, the core of the Kund remains a wild and untamed natural wonder, where the sound of the rushing river and the cold mountain air create an atmosphere of raw, elemental spirituality. Beyond its religious importance, Parshuram Kund serves as a vital ecological and cultural gateway. It is situated near the Kamlang Wildlife Sanctuary, home to diverse flora and fauna, including the elusive Hoolock Gibbon. For the local Mishmi and Khamti tribes, the site holds deep ancestral value, and they have long served as the traditional guardians of the river. The annual Mela (fair) held at the Kund is not just a religious gathering but a vibrant socio-economic event where hill tribes exchange forest produce, handicrafts, and traditional medicines with people from the plains. The journey to the Kund itself—winding through the lush forests of the Tezu region and crossing the magnificent Dr. Bhupen Hazarika Setu—is an integral part of the experience, offering a glimpse into the rugged beauty and strategic importance of eastern Arunachal. Parshuram Kund stands as a powerful symbol of the mythological threads that weave the remote Northeast into the broader fabric of Indian civilization, remaining an eternal 'Holy Basin' where nature and divinity meet in a spectacular display of faith and scenery.",
    images: [parshuram1, parshuram2],
    source: "(src: WLohit district administration, Arunachal tourism)",
  },
  {
    name: "Gorsam Chorten: The Great Stupa of the Zemithang Valley",
    description:
      "The Gorsam Chorten stands as a colossal sentinel of faith in the remote Zemithang Valley, located approximately 90 kilometers from Tawang near the border of Bhutan and Tibet. Standing at a magnificent height of nearly 100 feet, it is the largest stupa in the region and is modeled directly after the famous Boudhanath Stupa in Kathmandu, Nepal. Historically, it is believed to have been constructed in the 12th century by a local monk named Lama Pradhar, who sought to create a spiritual sanctuary that would protect the valley from evil spirits and natural disasters. The architecture of the Chorten is deeply symbolic; it features a massive hemispherical dome resting on a three-tiered plinth, with four smaller stupas at each corner. On the square capital of the main structure, the serene 'all-seeing eyes' of the Buddha are painted in the four cardinal directions, signifying his omnipresence and compassionate watch over humanity. The base of the stupa is lined with hundreds of prayer wheels and small niches housing clay lamps, which are lit by pilgrims as they perform 'Kora' (ritual circumambulation) around the structure. The spiritual significance of Gorsam Chorten is most visible during the Gorsam Kora festival, held every twelve years, which draws thousands of Monpa devotees and Buddhist monks from across the Himalayas. During this rare event, sacred relics preserved within the Chorten are displayed, and the valley echoes with the sound of longhorns and rhythmic chanting. The monument is not just an architectural feat but a 'living' repository of Monpa culture, representing a time when Zemithang was a vital crossroads for trade and religious exchange between Lhasa and the Himalayan foothills. Its construction using local stone, without the use of modern cement, is a testament to the enduring craftsmanship of medieval artisans. Today, the Chorten remains a site of profound stillness, surrounded by the towering peaks of the Eastern Himalayas and the rushing waters of the Nammchu River. For the traveler, it offers a glimpse into a world where ancient Buddhist traditions remain untouched by time, serving as a powerful 'Great Stupa' that binds the local community to their ancestral heritage.",
    images: [gorsam1, gorsam2],
    source: "(src: Tawang district administration, Wikimedia commons)",
  },
  {
    name: "Thembang Fortified Village: The Living History of the Monpas",
    description:
      "Thembang is an extraordinary ancient village that functions as a 'living monument', perched on a mountain ridge at an altitude of 2,300 meters in the West Kameng district. Recognizing its immense historical value, UNESCO has placed it on its tentative list of World Heritage Sites, as it represents a rare surviving example of a fortified citadel (Dzong) in the Himalayan region. The village is unique because its entire layout was designed for defense; it is enclosed by a massive dry-stone wall with two monumental gates—the 'Northern Gate' and the 'Southern Gate'—which were traditionally locked at night to protect the inhabitants from invasions by neighboring tribes or northern marauders. The architecture within the village follows a strict medieval Monpa pattern, where houses are built using locally sourced stone and wood without the use of mortar or iron nails. The villagers have preserved their traditional way of life, including their distinct dialect, social hierarchy, and agricultural practices, making the village a 'living museum' of Himalayan ethnography. Historically, Thembang was the seat of a powerful local chief (Bapu) and served as a crucial administrative hub along the ancient trade route between Tibet and the plains of Assam. The village is dotted with ancient religious structures, including a 'Mane' (prayer wall) and several small shrines that house centuries-old scriptures and thangkas. The presence of these monuments indicates a high level of cultural and spiritual sophistication that flourished despite the rugged terrain. In 1962, the village also became a silent witness to modern history, as significant battles were fought in its vicinity during the Sino-Indian War. Today, Thembang is a pioneer in community-based ecotourism, where the local Monpa people allow visitors to stay in their traditional homes, providing an authentic experience of their medieval heritage. The village stands as a symbol of resilience, showcasing how an indigenous community can adapt to the 21st century while keeping the physical walls and cultural spirit of their 'Living History' intact.",
    images: [thembang1, thembang2],
    source: "(src: Unesco world heritage centre-Thembang tentative list, West Kameng district)",
  },
  {
    name: "Dirang Dzong: The Valley Guardian and Stone Fortress",
    description:
      "Dirang Dzong is a majestic 17th-century fortress that overlooks the picturesque Dirang Valley, serving as both a historical landmark and a functional residential complex for the local Monpa people. Built atop a strategic hill to provide a 360-degree view of the valley below, the Dzong was originally constructed to act as a regional administrative center and a defensive stronghold against tribal incursions. The architecture of the fort is a masterclass in Himalayan stonework; the walls are four feet thick and constructed from locally hewn stone, providing excellent insulation against the freezing winters and structural strength against earthquakes. The most distinctive feature of Dirang Dzong is that it is a 'living fort', where traditional stone houses with beautifully carved wooden balconies and windows are still inhabited by families whose lineages go back hundreds of years. The narrow, winding stone alleys of the Dzong create a labyrinthine atmosphere that transports visitors back to a time of feudal Himalayan kingdoms. Beyond its defensive utility, the Dzong has served various roles throughout history, including functioning as a granary for the village, a local jail, and a center for tax collection. The central courtyard often hosts community gatherings and religious ceremonies, maintaining the fort’s status as the heart of the village. The architecture seamlessly blends Tibetan influences with indigenous tribal styles, seen in the vibrant colors of the door frames and the traditional slanted roofs. From its ramparts, one can see the Dirang River snaking through the lush green valley, dotted with apple and kiwi orchards. The preservation of Dirang Dzong is a point of immense pride for the state, as it highlights the architectural ingenuity of a people who built lasting monuments in one of the most challenging terrains on earth. As the 'Valley Guardian', the Dzong continues to watch over the people of West Kameng, standing as a sturdy and beautiful reminder of the region’s rich political and social history.",
    images: [dirang1, dirang2],
    source: "(src: West kameng district administration, Incredible india)",
  },
];

const facts = [
  "Arunachal Pradesh is the easternmost state of India, specifically at a small village called Dong, which receives the first sunrise in the country. Because of this, it is poetically known as the 'Land of the Rising Sun' in the Indian context. ",
  "The Tawang Monastery is the largest monastery in India and the second largest in the world (after the Potala Palace in Tibet). Built in the 17th century, it sits at an elevation of about 10,000 feet and houses over 700 monks. ",
  "It has the lowest population density of any Indian state, with only about 17 people per square kilometer. Huge stretches of the state remain pristine, uninhabited wilderness dominated by the Great Himalayas. ",
  "Arunachal is the only state in India where you can find all four major feline species in one place: the Tiger, Leopard, Clouded Leopard, and Snow Leopard. This is possible due to the state's extreme altitudinal range, from tropical jungles to alpine peaks.",
  "The state is home to over 600 species of orchids, which is nearly half of all orchid species found in India. There is an exclusive Orchid Research and Development Centre at Tipi that showcases these exotic blooms.",
  "It is one of the most linguistically diverse regions in the world, with over 30-50 distinct languages and dialects spoken by various tribes. Interestingly, despite this diversity, English is the official state language to facilitate communication between different groups. ",
  "The Urgelling Monastery in Tawang is the birthplace of Tsangyang Gyatso, the 6th Dalai Lama. He is particularly remembered for his beautiful poetry and his unconventional lifestyle compared to other Dalai Lamas. ",
  "The Dhola-Sadiya Bridge (Bhupen Hazarika Setu) connects Assam to Arunachal Pradesh and is the longest bridge in India over water. It spans 9.15 km across the Lohit River, significantly reducing travel time to the state's remote borders.",
  "While many residents follow Buddhism or Christianity, a significant population practices Donyi-Polo, an indigenous animistic religion. They worship the Sun (Donyi) and the Moon (Polo), reflecting a deep-rooted spiritual connection to nature. ",
  "Namdapha is the only park in the world to span an elevation range from 200 to over 4,500 meters. It is so dense and unexplored that scientists believe there are still many plant and animal species within its borders yet to be discovered by modern science.",
];

const artGallery = [
  {
    title: "Tawang",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Famous for its breathtaking monasteries, snowy mountains, and rich Monpa culture.",
    image: gTawang,
  },
  {
    title: "Itanagar",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "The capital city of Arunachal Pradesh, known for Ita Fort, beautiful hills, and modern cultural attractions",
    image: gItanagar,
  },
  {
    title: "Thukpa",
    emoji: "🍚",
    color: "#E8733A",
    desc: "A hot noodle soup filled with vegetables and meat, popular in the cold Himalayan regions.",
    image: gThukpa,
  },
  {
    title: "Momos",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "Soft steamed dumplings stuffed with vegetables or meat, loved across the state",
    image: gMomos,
  },
  {
    title: "Aji Lhamu Dance",
    emoji: "🥐",
    color: "#F4E884",
    desc: "A colorful folk dance-drama performed by the Monpa tribe during festivals",
    image: gButterBun,
  },
  {
    title: "Ponung Dance",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "A graceful group dance performed by Adi women with traditional songs and music",
    image: gPonung,
  },
  {
    title: "Nuranang Falls",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "A stunning waterfall near Tawang famous for its scenic beauty and powerful flow.",
    image: gNuranang,
  },
  {
    title: "Namdapha National Park",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "One of India’s richest wildlife parks, home to rare animals and dense forests.",
    image: gNadampha,
  },
  {
    title: "Red Panda",
    emoji: "🥭",
    color: "#F8C840",
    desc: "A rare and adorable animal found in the forests of Arunachal Pradesh.",
    image: gPanda,
  },
  {
    title: "Mithun",
    emoji: "🌿",
    color: "#F4B830",
    desc: "A large semi-domesticated bovine considered a symbol of wealth and pride.",
    image: gMithun,
  },
  {
    title: "Tawang Monastery",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "The biggest monastery in India and a major center of Buddhist culture.",
    image: gTawangMonastery,
  },
  {
    title: "Bamboo Handicrafts",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "Beautiful handmade bamboo products showcasing the artistic skills of tribal communities.",
    image: gBamboo,
  },
];