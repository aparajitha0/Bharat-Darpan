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
const lakshadweepMap = "https://i.postimg.cc/3RhkxKMz/image.png";
const eid1 = "https://i.postimg.cc/3J8Ld8SB/image.png";
const minicoy1 = "https://i.postimg.cc/PqwyBPJX/image.png";
const urja1 = "https://i.postimg.cc/JnTsxQ8t/image.png";
const bangaram1 = "https://i.postimg.cc/1tg8Wq30/image.png";
const minicoyisland1 = "https://i.postimg.cc/v8JVN399/image.png";
const kalpeni1 = "https://i.postimg.cc/SstKCNLd/image.png";
const kavaratti1 = "https://i.postimg.cc/cH6xxGq4/image.png";
const hazrat1 = "";
const gKolkali = "https://i.postimg.cc/XNfjn8my/image.png";
const gParichakali = "https://i.postimg.cc/C1y0gB4f/image.png";
const gDuff = "https://i.postimg.cc/BQndRB0P/image.png";
const gChenda = "https://i.postimg.cc/tJMDKP3g/image.png";
const gTunaCurry = "https://i.postimg.cc/nzTD5J4f/image.png";
const gOctopusFry = "https://i.postimg.cc/T1Fq7xxm/image.png";
const gAgatti = "https://i.postimg.cc/pdsjcvY9/image.png";
const gMundu = "https://i.postimg.cc/nL3SJCfG/image.png";

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
export default function LakshadweepPage() {
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
                South India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Lakshadweep
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Hundred Thousand Islands
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Kavaratti" },
                  { label: "Population", value: "64 Thousand" },
                  { label: "Area", value: "32 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                    { label: "Language", value: "Malayalan, English" },
                  { label: "Districts", value: "1 Districts" },
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
              Kavaratti
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Lakshadweep — The Coral Jewel of Lakshadweep
            </p>
          </div>
        </Section>

        {/* Map of Lakshadweep — click to enlarge */}
        <Section title="Map of Lakshadweep" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(lakshadweepMap, "Map of Lakshadweep")}
            >
              <img
                src={lakshadweepMap}
                alt="Map of Lakshadweep"
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
              Lakshadweep is a union territory of India. It is an archipelago of 36 islands[b] divided into three island subgroups: the Amindivi Islands in the north, the Laccadive Islands (separated from Amindivi roughly by the 11th parallel north), and the atoll of Minicoy to the south of the Nine Degree Channel. The islands are located between the Arabian Sea to the west and the Laccadive Sea to the east, about 220–440 km (140–270 mi) off the Malabar Coast of mainland India.
            </p>
            <p className="text-foreground">
              The islands occupy a total land area of approximately 32.62 km2 (12.59 sq mi) with a population of 64,473 as per the 2011 census across the ten inhabited islands. There is a 132 km (82 mi) long coastline with a lagoon area of 4,200 km2 (1,600 sq mi), territorial waters of 20,000 km2 (7,700 sq mi) and an exclusive economic zone of 400,000 km2 (150,000 sq mi). Lakshadweep is the northernmost island group of the exposed undersea mountain range, the Chagos-Lakshadweep Ridge. The entire union territory is administered as a single district with Kavaratti as its capital.
            </p>
            <p className="text-foreground">
              Archaeological evidence from Kalpeni indicates human settlement in the region from at least 1500 BCE with early reference to the islands in the Buddhist Jataka tales from the 3rd century BCE and the Tamil Sangam literature Patiṟṟuppattu. The region was controlled by the Cheras in the Sangam period (3rd century BCE to 3rd century CE) and later by the Pallavas. Islam is presumed to have been brought in the 7th century by the arrival of Muslims. In the 11th century CE, the region was under influence of the Chola kingdom and formed a part of the trade route that connected the Middle East with South Asia. It came under the influence of the Portuguese briefly in the late 15th century CE before being ruled by the Arakkal kingdom, who were vassals of the Kolathiri Rajas of Kannur. The region was under the influence of the Mysore kingdom in the late 18th century and was later annexed to the British Empire in 1799 CE. The islands became part of the Dominion of India following the Indian Independence in 1947 and was incorporated as a union territory in 1956.
            </p>
            <p className="text-foreground">
              The name Lakshadweep literally means "one hundred thousand islands" in Malayalam and Sanskrit. English is the designated official language while Jeseri, a dialect of Malayalam, is the widely spoken native language. Dhivehi is the most spoken language in the Minicoy Island. The region comes under the judicial jurisdiction of the Kerala High Court. Fishing and agriculture are the major occupations in the islands.
            </p>
            <p className="text-foreground">
             The early human migration from Africa to the Andaman Islands through India was thought by scientists to include Lakshadweep because of its location between Africa and the southwestern region of India. However, later genetic studies indicated that the majority of human ancestry in the islands derived from South Asia. Archaeological evidence from Kalpeni indicate the existence of human settlements in the region from at least 1500 BCE. The islands are mentioned in the Buddhist Jataka tales, dated to 3rd century CE. Archeological evidence indicates the spread of Buddhism to the islands during the time of Sanghmitra, the daughter of emperor Ashoka, presumed to have visited the island. Tamil Sangam literature Patiṟṟuppattu mentions that the region was ruled by the Cheras, one of the three kingdoms of ancient Tamilakam, in the Sangam period (3rd century BCE to 3rd century CE). 
            </p>
            <p className="text-foreground">
The islands have been known to sailors since at least 1st century CE, as indicated in the Periplus of the Erythraean Sea. It contains an anonymous reference to the islands off the coast of Damirica as a source of a turtle shell. In 2nd century CE, Greek geographer Ptolemy mentions 1378 islands located opposite to Taprobane (Sri Lanka) with the names of some of the islands given as Kanathara (Kavaratti), Argidion (Agatti), Ammine (Amini), and Monache (Minicoy). The islands later became part of a trade route with the Roman Empire, with archeological evidence from as early as 2nd century CE obtained from Kadamath and Androth islands. Other travelers and historians such as Ammianus Marcellinus (4th century CE), Faxian (5th century CE), and Cosmas (6th century CE) mention the islands in their writings.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Lakshadweep is officially India's smallest Union Territory, located in the Arabian Sea about 220 to 440 km off the coast of Kerala. It is widely regarded as India's premier coral archipelago and is celebrated as a "snorkeler's heaven" for its rich marine biodiversity.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Lakshadweep, mapsofindia.com)
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
        <Section title="Facts about Lakshadweep" icon="💡">
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
            Scroll horizontally to explore Lakshadweep's iconic foods, crafts,
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
    name: "Eid-Ul-fitr",
    tagline: "",
    description:
      "Eid al-Fitr is the first of the two main festivals in Islam, the other being Eid al-Adha. The holiday falls on the first day of Shawwal, the tenth month of the Islamic calendar. One of the most important Islamic celebrations, Eid al-Fitr is celebrated by Muslims worldwide as it marks the end of the  during Ramadan. The holiday is known under various other names in different languages and countries around the world. Eid al-Fitr begins with a communal prayer and is followed by visits to relatives, giving gifts, and sharing meals. It has a particular salah that consists of two rakats generally performed in an open field or large hall. It may only be performed in congregation  and features six additional Takbirs (raising of the hands to the ears whilst reciting the Takbir, saying 'Allāhu ʾAkbar', meaning 'God is the greatest'. In the Hanafi school of Sunni Islam, there are three Takbirs at the start of the first rakat and three just before rukūʿ in the second rakat. Other Sunni schools usually have 12 Takbirs, similarly split in groups of seven and five. In Shia Islam, the salat has six Takbirs in the first rakat at the end of Tilawa, before rukūʿ, and five in the second. Depending on the juristic opinion of the locality, this salat is either farḍ or mustaḥabb  After the salat, Muslims celebrate the Eid al-Fitr in various ways with food being a central theme, which also gives the holiday the nickname 'Sweet Eid' or 'Sugar Feast'. In many parts of the world, Eid al-Fitr is also characterized by distinctive local customs that reflect regional cultures. Communities often mark the occasion with large family visits, public celebrations, and the sharing of traditional foods and sweets prepared specifically for the holiday. Markets and neighborhoods in several countries become especially lively as people buy new clothing, gifts, and festive meals, while charitable giving and community gatherings remain central elements of the celebration. Despite cultural differences, the festival commonly emphasizes social connection, generosity, and the strengthening of family and community ties.",
    images: [eid1],
    source: "",
  },
  {
    name: "Minicoy Festival",
    tagline:
      "",
    description:
      "The Minicoy Festival is a vibrant celebration that embodies the essence of the Maldivian influence on the culture of Minicoy Island, the southernmost of the Lakshadweep Islands in India. Understanding the history of the Minicoy Festival is crucial for appreciating its cultural significance and the rich tapestry of traditions that it represents. This festival not only showcases the local heritage but also highlights the unique blend of mythology, history, and communal spirit that characterizes life on this beautiful island. In this article, we will delve into the ancient origins, mythological stories, historical evolution, and regional variations associated with the Minicoy Festival. The Minicoy Festival traces its roots back to ancient times, with its origins linked to the island's historical connections with the Maldives. It is believed to have started as a harvest festival, celebrating the bountiful maritime resources and agricultural produce of the island. The festival typically takes place during the month of October, coinciding with the end of the monsoon season and the beginning of the harvest period. The community comes together to express gratitude for the plentiful harvest and to seek blessings for the forthcoming season. During this time, the local fishermen honor the sea, which has been both a provider and a protector. The island’s strategic location along trading routes has also contributed to the intermingling of cultures, leading to the festival adopting various elements from the diverse traditions that have passed through the region. This blending of influences has made the Minicoy Festival a unique reflection of the island's historical legacy. Over the centuries, the Minicoy Festival has evolved, reflecting the changing tides of history and cultural influences. Initially celebrated as a simple harvest festival, it has transformed into a grand event that showcases the island’s rich cultural heritage. The arrival of various dynasties and colonial powers has left a mark on the festival, introducing new customs, rituals, and art forms. During the British colonial period, the festival gained prominence, as it attracted attention from travelers and anthropologists interested in the unique customs of the island. The festival began to incorporate elements from other regional celebrations, creating a more diverse and inclusive atmosphere. This evolution has led to the incorporation of various art forms, including traditional music, dance, and handicrafts, making the Minicoy Festival a vibrant showcase of local talent and creativity.",
    images: [minicoy1],
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "Ujra Mosque",
    description:
      "Built by Sheikh Mohammad Qasim in the 17th century, the mosque showcases the exceptional craftsmanship of skilled artisans from its time. Prepare to be mesmerised by the ornately carved pillars, each boasting unique and exquisite designs. Gaze upwards at the mosque's ornate ceiling, said to be a single piece of driftwood! The elaborately designed verandah belongs completes this picture of grandeur. But the true marvel lies within. Ujra Mosque isn't just a place of worship; it's a serene sanctuary for quiet reflection. Here, devotees come to meditate, seeking solace amidst the intricate beauty. The absence of regular prayers is reflected in the mosque's design, creating a tranquil space unlike any other. Contrary to popular belief, the intricate wooden carvings adorning Ujra Mosque were not made entirely out of driftwood; rather they came directly from the mainland. Wood from Mangalore, an active trading hub, bears witness to the efforts of skilled navigators and sailors known as Mukris. Legend has it that these master craftsmen would dedicate themselves to their craft even while sailing the open seas, turning ordinary pieces of wood into exquisite works of art. Thanks to them, intricately carved pillars and ceilings bring life into Ujra Mosque as visitors immerse themselves in its vibrant symphony of craftsmanship. At the back of the Ujra Mosque lie two mystifying wells and tanks, each seemingly filled with mysterious waters believed to possess miraculous healing properties. These draw visitors from all around who come seeking solace from ailments or relief from various stresses in life. Ujra Mosque transforms every Monday and Friday night after the last prayer has been offered into an experience of spirituality as the Rathib ritual takes place. This sacred tradition adds an ethereal atmosphere, infusing the air with profound devotional feelings. Local community members come together, feeling deeply touched by melodic chants and prayers echoing throughout the night, creating an unparalleled spiritual bond. The Ujra Mosque plays host each year to the Urs of Sheikh Mohammed Qasim, an esteemed Sufi saint renowned for his life and teachings. Devotees from far and wide come on pilgrimages of devotion in honour of Sheikh Mohammed Qasim's spiritual legacy, which resonates through its corridors. The Ujra Mosque offers peace and artistic magnificence, where spirituality meets craftsmanship in a tranquil setting.",
    images: [urja1],
    source: "",
  },
  {
    name: "Bangaram Island",
    description:
      "The roughly rectangular atoll is 8.1 km in length with a maximum width of 4.2 km and with a lagoon area of 36 km2 (14 sq mi). It is located over 352 km (219 mi) off Kannur, 382 km (237 mi) off Kozhikode, 400 km (250 mi) off Kochi, and 525 km (326 mi) from Kollam Port in the Indian Ocean. Bangaram atoll is about 7 km (4.3 mi) northeast of the island of Agatti and 25 km (16 mi) to the southeast of Perumal Par, in the western Lakshadweep archipelago at 10°56′N 72°17′E. Bangaram atoll is connected to the reef of Agatti through a shallow submarine ridge. The island belongs to the township of Agatti Island of Kavaratti Tehsil. The Bangaram Island Beach Resort opened to tourism in 1974, but the lack of commercial flights made access difficult. Tourism took off after the Agatti Aerodrome on the nearby Agatti island was commissioned and regular commercial flights from Kochi were established The resort had 60 cottages. Current alcohol regulations in Lakshadweep allow consumption of alcoholic drinks only on Bangaram Atoll. The new Thinnakara is owned by locals from Agatti. It will offer numerous adventure activities, including scuba diving, snorkelling, deep sea fishing beside white sand beaches, a calm lagoon and a sparkling, clear coral reef.",
    images: [bangaram1],
    source: "",
  },
  {
    name: "Minicoy Island",
    description:
      "The Minicoy Island is the southern-most island of Lakshadweep, situated at a distance of 398 km (215 nautical miles) south-west of Kochi between 8° 15′ and 8° 20′ N latitude and 73° 01′ and 73° OS’ E longitude, having an area of 4.80 sq km. This island lies near the 9 0 Channel, which is one of the busiest shipping routes and is about 130 km from the northern-most island of Maldives. It has a very large lagoon on the western side, measuring about 6 km across the two entrances, one on the west and the other on the northern-most point. The lagoon area is 30.60 sq km. The island is about 2 m above the mean sea level on the western side and about 3 to 4 m on the eastern side, and is 11 km long. The Light house of the island is one of the oldest and was constructed in 1885. This island is part of Coral Reef and Swaying Palm packages. It is the second largest and southern most island in Lakshadweep, crescent shaped and has one of the largest lagoons. Viringli is the small islet that you see on the south. Minicoy is set apart from the Northern group of islands by its culture. The closest land to Minicoy is Thuraakunu Island in the Republic of the Maldives about 100 km to the south across the Vangaaru Channel.",
    images: [minicoyisland1],
    source: ""
  },
  {
    name: "Kalpeni",
    description:
      "The Kalpeni Island lies between 10° 03′ and 10° 07′ N latitude and 73° 37′ and 73° 39’E longitude, having on area of 2.79 sq km. The Island is located at a distance of 287 km (155 nautical miles) from Kochi and located south-east of Kavaratti Island and midway between Andrott and Minicoy. It has a very large lagoon measuring about 2.8 km at the point of maximum width. The Island is aligned in the north-south direction. One of the most beautiful islands of Lakshadweep , the Kalpeni island is situated at a distance of sixty three kilometers from Androth. An important place of tourist destination, Kalpeni offers the tourists with a wonderful opportunity to explore their sporting skills and sportsman spirit through the various water sports of the region. For those who want a harmonious blend of fun mixed with an equal amount of adventure, Kalpeni islands presents them with a plethora of adventurous water sports. Endowed with the best gift of natural and scenic beauty, the Kalpeni islands is a perfect blend of traditional culture and modern infrastructural amenities. Representing the varied ecology of the region, the Kalpeni island is blessed with a wide variety of flora and fauna along with many rare biological species of plants, animals and aquatic life. The golden sandy beaches, crystal clear water of the Arabian Sea and the coral reefs of the Kalpeni island enthralls and enchants the tourists with its bewitching natural beauty. The splendid surrounding of the Kalpeni islands casts a magical spell on the tourists and captures the imagination of the poet. The indigenous population of the Kalpeni island strictly adheres to the social norms and codes of conduct. The Kalpeni island boasts of a place of peaceful human existence. Signifying the cultural heritage of the region, the womenfolk of the Kalpeni island beautifully dress in the traditional attire of wrap around skirts, which are locally known as the Sarongs. The colorful and attractive folk dances of Kolkali and Parichakkali of the Kalpeni island portrays the artistic skill of the indigenous population.",
    images: [kalpeni1],
    source: "",
  },
  {
    name: "Kavartti Island",
    description:
      "The Kavaratti is the capital of the Union Territory Lakshadweep in India.The Island of Kavaratti lies 360Km of the coast of the State of Kerala at 10.57°N 72.64°E. is the closest major city on the Indian mainland at a distance of 404 km (218 nmi). It has a lagoon area of 3.46 sq mi.Karavatti has been selected as one of the hundred Indian cities to be developed as asmart city under PM Narendra Modi’s flagship Smart Cities Mission. The Kavaratti Island is the headquarters of the Union Territory of Lakshadweep. This island is at a distance of 404 km (218 nautical miles) from Kochi and is located between Agatti Island on the west and Andrott Island on the east. It lies between 10o 32′ and 10o 35′ N latitude and 72o 35′ and 72o 40′ E longitude, having an area of 4.22 sq km. Maximum length of the island is 5.8 km and width is 1.6 km. It has a lagoon having a length of about 6 km and an area of 4.96 sq km. The island is 2 to 5 m above the mean sea level on the western side and 2 to 3 m on the eastern side.It is located in the centre of Lakshadweep archipelago. Strangely Kavaratti has a small inland lake at its Northern end. The island itself is stretched over an area of slightly more than 4 sq kms and has the maximum percentage of non – islanders as residents. As is the case with other islands of Lakshadweep, Kavaratti has warm sandy veaches where toursits can unwind themselves. Though the beaches are narrow, the lagoons around Kavratti are fabulous with star fish, anemones, sea cucumers, countless multi- hued fishes astounding corals. Located to the west of the Island the lagoon is best suited for swimming, kayaking, wind surfing and canoeing. To the South of the Island lies Chicken Neck point which is an absolutely fantastic place for water sports including scuba diving and snorkelling. A glass bottom boat ride offers tourists and opportunity to view the rich marine life and an array of extraordinary corals.",
    images: [kavaratti1],
    source: "",
  },
  {
    name: "Hazrat Ubaidullah",
    description:
      "The name Ubaidullah is an indirect Quranic name that means 'little servant of God'. Ubaid is the diminutive form of the word Abd (servant) and is formed from Ubaid (little servant) and Allah (God), -u- being the case marking for the nominative (in construct state). Nothing is known about his early life except his lineage which is traced to Caliph Abu Bakr, the first Rashidun Caliph, to whom he is believed to be closely related. Tradition says that once while praying in the Prophet's mosque in Medina Ubaidullah fell asleep and saw a dream in which he saw Muhammad who told him to go to distant lands east of Jeddah to preach Islam to the people. He interpreted the dream as a divine vision from God for his salvation and the people of those distant lands, so he proceeded to Jeddah where he travelled across the ocean for accomplishing his mission. According to legend, on his journey his vessel capsized in a storm and he had to continue his journey by drifting on a plank till he reached Amini in AH 41 (663 AD). He started his act of preaching from Amini and was able to convert the Pondambelli family despite the initial linguistic challenges. After facing opposition there he left Amini with some of his new Muslim fellows and moved to Andrott where he got significantly high conversions. He then went to Kavaratti and Agatti, preaching there and then came back to Amini. This time unlike his first arrival in Amini, he was welcomed and via his preaching could successfully influence and convert almost the whole of population to Islam. At last stage of his life, he travelled to Andrott where he lived the rest of his life preaching and teaching. Ubaidullah never went back to his home land of Hijaz and devoted his life for dawah. Sheikh Ubaidullah advanced Islam in Lakshadweep (now in India) Islands by delivering sermons before the islanders.",
    images: [hazrat1],
    source: "",
  },
];

const facts = [
  "Lakshadweep is India’s smallest Union Territory by area.",
  "It is made up of 36 beautiful coral islands in the Arabian Sea.",
  "Only about 10 islands in Lakshadweep are inhabited by people.",
  "The name “Lakshadweep” means “one lakh islands” in Sanskrit.",
  "The islands are famous for crystal-clear blue water and white sandy beaches.",
  "Coconut farming and fishing are the main occupations of the people.",
  "Tuna fish from Lakshadweep is popular across India.",
  "Scuba diving and snorkeling are major tourist attractions there.",
  "Lakshadweep has one of the cleanest and least polluted environments in India.",
  "The islands are connected mainly by ships and flights from Kochi.",
  "The literacy rate in Lakshadweep is among the highest in India.",
  "Tourism in Lakshadweep is controlled to protect its fragile ecosystem.",
  " Lakshadweep is a restricted area, and all visitors (including Indian citizens) require an official entry permit from the administration",
  "Despite being surrounded by water, the islands have no natural rivers or lakes. The population relies entirely on rainwater harvesting and modern desalination plants for freshwater.",
  "The territory is an eco-pioneer, with Agatti Island famously becoming India's first solar-powered Union Territory to help reduce its carbon footprint.",
  " Lakshadweep boasts excellent social indicators, notably having recorded some of the highest female birth ratios and literacy rates in the country, maintaining a peaceful, low-crime environment.",
];
   const artGallery = [
  // Dance forms
  {
    title: "Kolkali",
    emoji: "🥁",
    color: "#1D9E75",
    desc: "Rhythmic stick dance performed in circles to devotional songs",
    image: gKolkali,
  },
  {
    title: "Parichakali",
    emoji: "⚔️",
    color: "#378ADD",
    desc: "Martial art dance with swords and shields tied to Islamic tradition",
    image: gParichakali,
  },

  // Instruments
  {
    title: "Duff",
    emoji: "🪘",
    color: "#BA7517",
    desc: "Frame drum central to all religious and festive music in the islands",
    image: gDuff,
  },
  {
    title: "Chenda",
    emoji: "🥁",
    color: "#D85A30",
    desc: "Cylindrical percussion drum used during Kolkali and folk ceremonies",
    image: gChenda,
  },

  // Famous food
  {
    title: "Tuna Mas Curry",
    emoji: "🐟",
    color: "#E8733A",
    desc: "Spiced coconut-milk tuna curry, the signature dish of Lakshadweep",
    image: gTunaCurry,
  },
  {
    title: "Octopus Fry",
    emoji: "🦑",
    color: "#993C1D",
    desc: "Sun-dried octopus fried with island spices, a coastal delicacy",
    image: gOctopusFry,
  },

  // Beaches
  {
    title: "Agatti Beach",
    emoji: "🏖️",
    color: "#185FA5",
    desc: "Pristine lagoon beach with turquoise waters and coral reef entry point",
    image: gAgatti,
  },

  // Traditional attire
  {
    title: "Mundu & Neriyathu",
    emoji: "👘",
    color: "#7F77DD",
    desc: "White cotton wraparound with golden border worn by island women",
    image: gMundu,
  },

];