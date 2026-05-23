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
import odishaMap from "https://i.postimg.cc/8CwxNKBb/image.png";
const rath1 = "https://i.postimg.cc/BQ93hzhC/image.png";
const durga1 = "https://i.postimg.cc/FHGQHHhB/image.png";
const nuakhai1 = "https://i.postimg.cc/SsY0dLCv/image.png";
const jagannath1 = "https://i.postimg.cc/Qx3LgTtc/image.png";
const konark1 = "https://i.postimg.cc/253gjdc1/image.png";
const lingaraj = "https://i.postimg.cc/wvmPLqd8/image.png";
const dhauli1 = "https://i.postimg.cc/fy7rq8Lm/image.png";
const mukteswar1 = "https://i.postimg.cc/jdK9nYgJ/image.png";
const vchilika1 = "https://i.postimg.cc/zGGcpS13/image.png";
const daringbadi1 = "https://i.postimg.cc/SKXtbSRJ/image.png";
const udaygiri1 = "https://i.postimg.cc/wMkwQ3fc/image.png";
const gOdissiDance = "https://i.postimg.cc/qRTcD4CY/image.png";
const gChhauDance = "https://i.postimg.cc/zGQ0js7r/image.png";
const gChaitiGhoda = "https://i.postimg.cc/4dkwCpj0/image.png";
const gDandaNata = "https://i.postimg.cc/NFbxrSF8/image.png";
const gPakhalaBhata = "https://i.postimg.cc/pXXCtW1y/image.png";
const gDalma = "https://i.postimg.cc/zXBCcdVY/image.png";
const gDahibaraAludam = "https://i.postimg.cc/Kc9LBnJm/image.png";
const gChakuliPitha = "https://i.postimg.cc/9Q9q6s2S/image.png";
const gPattachitra = "https://i.postimg.cc/HL48x5Vt/image.png";
const gSambalpuriSaree = "https://i.postimg.cc/tJ7s2MDt/image.png";

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
export default function OdishaPage() {
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
                East India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Odisha
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Soul of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Bhubaneshwar" },
                  { label: "Population", value: "4.20 Crore" },
                  { label: "Area", value: "1,55,707 sq km" },
                  { label: "Founded", value: "26 January 1950" },
                  { label: "Language", value: "Odia" },
                  { label: "Districts", value: "30 Districts" },
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
              Bhubaneshwar
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Odisha — The Temple City of India
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Odisha" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(odishaMap, "Map of Odisha")}
            >
              <img
                src={odishaMap}
                alt="Map of Odisha"
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
              Odisha , spelled Orissa until 2011, is a state located in eastern
              India. It is the eighth-largest state by area, and the
              eleventh-largest by population, with over 41 million inhabitants.
              The state also has the third-largest population of Scheduled
              Tribes in India. It neighbours the states of Jharkhand and West
              Bengal to the north, Chhattisgarh to the west, and Andhra Pradesh
              to the south. Odisha has a coastline of 485 kilometres (301 mi)
              along the Bay of Bengal in the Indian Ocean. The region is also
              known as Utkaḷa and is mentioned by this name in India's national
              anthem, Jana Gana Mana.
            </p>
            <p className="text-foreground">
              The ancient kingdom of Kalinga, which was invaded by the Mauryan
              Emperor Ashoka in 261 BCE resulting in the Kalinga War, coincides
              with the borders of modern-day Odisha. The modern boundaries of
              Odisha were demarcated by the British Indian government, the
              Orissa Province was established on 1 April 1936, consisting of the
              Odia-speaking districts of Bihar and Orissa Province, Madras
              Presidency and Central Provinces. Utkala Divas (lit. 'Odisha Day')
              is celebrated on 1 April. Cuttack was made the capital of the
              region by Anantavarman Chodaganga in c. 1135, after which the city
              was used as the capital by many rulers, through the British era
              until 1948. Thereafter, Bhubaneswar became the capital of Odisha.
            </p>
            <p className="text-foreground">
              Odisha lies between the latitudes 17.780N and 22.730N, and between
              longitudes 81.37E and 87.53E. The state has an area of 155,707
              km2, which is 4.87% of total area of India, and a coastline of 450
              km. In the eastern part of the state lies the coastal plain. It
              extends from the Subarnarekha River in the north to the Rushikulya
              River in the south. The lake Chilika is part of the coastal
              plains. The plains are rich in fertile silt deposited by the six
              major rivers flowing into the Bay of Bengal: Subarnarekha,
              Budhabalanga, Baitarani, Brahmani, Mahanadi, and Rushikulya.
            </p>
            <p className="text-foreground">
              The National Rice Research Institute (NRRI), a Food and
              Agriculture Organization-recognised rice gene bank and research
              institute, is situated on the banks of Mahanadi in Cuttack. The
              stretch between Puri and Bhadrak in Odisha juts out a little into
              the sea, making it vulnerable to any cyclonic activity.
            </p>
            <p className="text-foreground">
              Three-quarters of the state is covered in mountain ranges. Deep
              and broad valleys have been made in them by rivers. These valleys
              have fertile soil and are densely populated. Odisha also has
              plateaus and rolling uplands, which have lower elevation than the
              plateaus. The highest point in the state is Deomali at 1,672
              metres in Koraput district. Some other high peaks are: Sinkaram
              (1,620 m), Golikoda (1,617 m), and Yendrika (1,582 metres).
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is a state located in eastern India on the Bay of Bengal, known
              for its rich history, tribal culture, and ancient temples
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Odisha, mapsofindia.com)
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
        <Section title="Facts about Odisha" icon="💡">
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
            Scroll horizontally to explore Odisha's iconic foods, crafts, dance,
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
    name: "Jagannath Rath Yatra",
    tagline: "",
    description:
      "The Ratha Yatra of Puri, also rendered as the Ratha Jatra ,is considered the oldest and largest Hindu chariot festival celebrated annually, on the bright half of the lunar month of Ashadh (June–July). The Ratha Yatra is held at the city of Puri, in the state of Odisha, India and associated with the deity Jagannath (a form of Vishnu or Krishna). During the festival, three deities (Jagannath, his brother Balabhadra and sister Subhadra) are drawn by a multitude of devotees in three massive, wooden chariots on bada danda (the grand avenue) to Gundicha Temple whereby they reside there for a week and then return to the Jagnannath temple. This return trip is referred to as the Bahuda Yatra. On their way back from the Gundicha Temple, the three deities stop for a while near the Mausi Maa Temple (Aunt's abode) and have an offering of the Poda Pitha, which is a special type of pancake supposed to be the deity's favourite. After a stay of seven days, the deities return to their abode. The three chariots of Jagannath, Balabhadra and Subhadra are newly constructed every year with wood of specified trees like phassi, dhausa, etc. They are customarily brought from the ex-princely state of Dasapalla by a specialist team of carpenters who have hereditary rights and privileges for the same. The logs are traditionally set afloat as rafts in the river Mahanadi. These are collected near Puri and then transported by road. The three chariots are decorated as per the unique scheme prescribed and followed for centuries stand on the Bada Danda, the Grand Avenue. The chariots are lined across the wide avenue in front of the temple close to its eastern entrance, which is also known as the Singhadwara or the Lion's Gate.Around each of the chariots are nine Parsva devatas, painted wooden images representing different deities on the chariots' sides. Each chariot has a charioteer (Sarathi) and four horses.",
    images: [rath1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Durga Puja",
    tagline: "",
    description:
      "Odisha is a state of religious people; predominantly at this locus enormous volume of Hindu people about 80% of total population is living. As we know in Hindu culture they celebrate so many festivals throughout the year, the cult of Shakti (source of energy) worshiped in a festival that is popularly known as Durga Puja or Dussahara. Here in this festival devotees worship Maa Durga in Mahalaya, Shashthi, Maha Saptami, Maha Ashtami, Maha Navami and in Vijayadashami. This is a festival of joy and happiness. People of India in almost all states love to celebrate this Durga Puja festival. Waste Bengal, Kolkata is known as the place where top class Durga Puja celebrated in all over the world. Maa Durga worshiped in Odisha in the Tantric and non-Tantric forms, among the whole Odia community greatly admired of Durga Puja Festival with jubilation. The spirit of holiness and sanctity during this festival is outstanding in Odisha. In most of the districts, cities and villages of Odisha devotees celebrate Durga Puja.      Legend behind the Durga Puja festival is ‘victory of Goddess Durga over the evil buffalo demon Mahishasura’ so people celebrated this festival every year to remember that always divines is wins from evilness. In the month of Ashwin from sixth to tenth day of bright lunar fortnight or the shukla paksha in Hindi, this period is celebrated as great Durga Puja and in the final tenth day on the destroyer of evil and the protector of her devotees Maa Durga is worshiped. Festivals are the perfect occasion to know about the any destination, during festivals people are very happy and they decorate their houses, villages and Puja Mandap with light, flower and with many other decorative items. Idols of Maa Durga are placed in big Mandaps (Stages) and worshiped with mantras. The atmosphere and environment during Puja becomes spiritual and tourist love to participate in it. Also the decoration, local market, food stalls, handicrafts and handloom stalls are other attractions of Durga Puja in Odisha. Thousands of tourists from different states of Odisha also from different foreign countries prefer to visit Odisha during Durga Puja Festivals.",
    images: [durga1],
    source: "(src: pragyata)",
  },
  {
    name: "Nuakhai",
    tagline: "",
    description:
      "Nuakhai is an agricultural festival mainly observed by people of Western Odisha in India. Nuakhai is observed to welcome the new rice of the season. According to the calendar it is observed on panchami tithi (the fifth day) of the lunar fortnight of the month of Bhadrapada or Bhadraba (August–September), the day after the Ganesh Chaturthi festival. This is the most important social festival of Western Odisha and Chhattishgarh also adjoining areas of Simdega in Jharkhand, where the culture of Western Odisha is much predominant. Nuakhai is also called Nuakhai Parab or Nuakhai Bhetghat. It is also known as Navakhai Parv in Chhattisgarh. The word nua means new and khai means food, so the name means the farmers are in possession of the newly harvested rice. The festival is seen as a new ray of hope, held the day after the Ganesh Chaturthi festival. It has a big significance for farmers and the agricultural community. The festival celebrated at a particular time of day which is called lagan. Aersaa Pithaa is prepared to celebrate this festival. When the lagan comes, the people first remember their village god or goddess and then have their khai.",
    images: [nuakhai1],
    source: "(src: odishabytes)",
  },
];

const historicalPlaces = [
  {
    name: "Jagannath Temple",
    description:
      "The Jagannath Temple is a Hindu temple dedicated to Jagannath, a form of Vishnu. It is located in Puri, Odisha, on the eastern coast of India. As per temple records, King Indradyumna of Avanti built the main temple. The present temple complex was rebuilt from the eleventh century onwards on the site of the earlier shrines, excluding the main Jagannath temple, and was begun by Anantavarman Chodaganga, the first ruler of the Eastern Ganga dynasty. Many of the temple rituals are based on Shabari Tantras which are evolved from tribal beliefs respectively.[7] The local legends link the idols with Nilamadhaba deva worshipped by tribala and the daitapatis (servitors) claim to be descendants of the tribes. The temple is one of the 108 Abhimana Kshethram of the Sri Vaishnavite tradition. The temple is renowned for its annual Ratha Yatra, chariot festival, which honors the three deities - Jagannath, Balabhadra and Subhadra During the festival, the three principal deities are pulled on large and elaborately decorated raths, or temple cars. The worship is performed by the Bhil Sabar tribal priests, as well as priests of other communities in the temple. Unlike the stone or metal icons found in most Hindu temples, the image of Jagannath is carved from margosa wood and is ceremoniously replaced every 12 or 19 years with an identical replica, with an elaborate month long ceremony called nabakalebar. The temple is one of the Char Dham pilgrimage sites. It is also famous because many legends believe that Krishna's heart was placed here, and it is the true Jagannath within the wooden idol. Since wood deteriorates, they have to change it every several years. Non-Hindus (excluding Jains, Sikhs, Buddhists) and foreigners are not permitted to enter the temple. Such a rule is believed to have existed since the temple was built, and at present, it often becomes a subject to controversy and debates that have lasted for several decades. According to Ganeshi Lal, the former Governor of Odisha, foreigners can enter the temple only if he/she can meet the Gajapati servitors and the Shankaracharya, then he/she could also be allowed to witness Jagannath. But, this theory has not wielded influence yet, and continues to be a subject of longstanding debate. The temple is open everyday from 5:00 am to 10:30 pm. Many renowned acharyas, including Madhvacharya, are believed to have visited this kshetra. Adi Shankaracharya established the Govardhan Math here. Guru Nanak had visited this place with his disciples Bala and Mardana. Chaitanya Mahaprabhu the founder of Gaudiya Vaishnavism resided here for 24 years and taught that the love of God can be spread by chanting the Hare Krishna mantra. Vallabha is traditionally believed to have visited the temple, where he performed a seven-day recitation of the Srimad Bhagavata. His sitting place, known as his baithakji, (literally 'seat') remains a notable site and is regarded as evidence of his visit to Puri. Some of the pandits who participated in the recitation said to become jealous of the young Vallabha and sought to test him. The following day was Ekadashi, a fasting observance during which devotees abstain from grains. The pandits offered Vallabha rice prasad of Lord Jagannath, for which the temple remains renowned. Accepting it would break his vow of fasting, while refusing it would have been seen as disrespectful to Jagannath. Vallabha, with due honor and respect, accepted the prasad in his hand. He remained in the temple, spending the rest of the day and night explaining the shlokas that extolled the greatness of prasad, and consumed it the following morning after sunrise.",
    images: [jagannath1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Konark Sun Temple",
    description:
      "Konark Sun Temple is a 13th-century CE Hindu Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasingha Deva I of the Eastern Ganga dynasty about 1250 CE. Dedicated to the Hindu Sun-god Surya, it reflects the pinnacle of kalingan architecture and artistic excellence, what remains of the temple complex has the appearance of a 100-foot (30 m) high chariot with immense wheels and horses, all carved from stone. Once over 200 feet (61 m) high, much of the temple is now in ruins, in particular the large shikara tower over the sanctuary; at one time this rose much higher than the mandapa that remains. The structures and elements that have survived are famed for their intricate artwork, iconography, and themes, including erotic kama and mithuna scenes. Also called the Surya Devalaya, it is a classic illustration of the Odisha style of Architecture or Kalinga architecture. The cause of the destruction of the Konark temple is unclear and still remains a source of controversy. Theories range from natural damage to deliberate destruction of the temple in the course of being sacked several times by Muslim armies between the 15th and 17th centuries. This temple was called the 'Black Pagoda' in European sailor accounts as early as 1676 because it looked like a great tiered tower which appeared black. Similarly, the Jagannath Temple in Puri was called the 'White Pagoda'. Both temples served as important landmarks for sailors in the Bay of Bengal. The temple that exists today was partially restored by the conservation efforts of British India-era archaeological teams. Declared a UNESCO World Heritage Site in 1984, it remains a major pilgrimage site for Hindus, who gather here every year for the Chandrabhaga Mela around the month of February. Konark Sun Temple is depicted on the reverse side of the Indian currency note of 10 rupees to signify its importance to Indian cultural heritage.",
    images: [konark1],
    source: "(src: wikipedia)",
  },
  {
    name: "Lingaraj Temple",
    description:
      "Lingaraja Temple is a Hindu temple dedicated to Shiva and is one of the oldest temples in Bhubaneswar, the capital of the Indian state of Odisha, India. The temple is the most prominent landmark of Bhubaneswar city and one of the major tourist attractions of the state. Shiva's consort and the temple's presiding Goddess, Parvati, is referred to as Annapurna or Girija. The Lingaraja temple is the largest temple in Bhubaneswar. The central tower of the temple is 180 ft (55 m) tall. The temple represents the quintessence of the Kalinga architecture and culminating the medieval stages of the architectural tradition at Bhubaneswar. The temple is believed to be built by the kings from the Somavamsi dynasty, with later additions from the Ganga rulers. The temple is built in the Deula style that has four components namely, vimana (structure containing the sanctum), jagamohana (assembly hall), natamandira (festival hall) and bhoga-mandapa (hall of offerings), each increasing in the height to its predecessor. The temple complex has 108 other shrines and is enclosed by a large compound wall. Bhubaneswar is called the Ekamra Kshetra as the deity of Lingaraja was originally under a mango tree (Ekamra) as noted in Ekamra Purana, a 13th-century Sanskrit treatise. The temple is active in worship practices, unlike most other temples in Bhubaneswar. The temple has images of Vishnu, possibly because of the rising prominence of Jagannath sect emanating from the Ganga rulers who built the Jagannath Temple in Puri in the 12th century. The central deity of the temple, Lingaraja, is worshipped as Shiva. Lingaraja temple is maintained by the Temple Trust Board and the Archaeological Survey of India (ASI). The temple has an average of 6,000 visitors per day and receives hundreds of thousands of visitors during festivals. Shivaratri festival is the major festival celebrated in the temple and event during 2012 witnessed 200,000 visitors. The temple compound is not open to non-Hindus, but there is a viewing platform beside the wall offering a good view of the main exteriors. This was originally erected for a visit by Lord Curzon, the then Viceroy.",
    images: [lingaraj],
    source: "(src: wikipedia)",
  },
  {
    name: "Dhauli Shanti Stupa",
    description:
      "Shanti Stupa of Dhauligiri is also known as the Peace Pagda. Dhauligiri lies at a distance of 7 Km from Bhubaneswar. As one travels from Bhubaneswar to Puri, one finds Shanti Stupa. The word 'shanti' in the name itself suggests peace. Since King Ashoka adopted the path of peace and tranquility and resorted to Buddhism, he laid the foundation of Dhauligiri Shanti Stupa at a place which is known for the end of Kalinga War. Here, one finds the edict of Lord Budddha which is visited by numerous Buddhist devotees.The construction of Shanti Stupa of Dhauligiri was assisted by Fuji Guruji and therefore, the place became the place of devotion and worship for various people belonging to different generations. One can also spot a number of stupas, chaityas as well as pillars whose foundation was laid by King Ashoka. There also exist a number of edicts that display King Ashoka's intention to promote joy, peace and contentment all through the world. And over the edicts, you come across a rock cut elephant that is considered to be the earliest Buddhist sculpture in Orissa. The overall structure of the stupa is in the shape of a dome. One can spot the Buddha footprints as well as the Bodhi tree over the stone panels. Over the panels, one also spots the image of Ashoka who keeps his sword of war in front of Lord Buddha suggesting that he had given up the idea of war completely. In the vicinity of this stupa, there lays a monastery named as the Saddharma Vihar Monastery, which is much visited by the Buddhist devotees. And at a short distance from the Shanti Stupa, you find the temple of Dhavaleshwar that was renovated in the year 1972 and is much frequented by Hindu as well as Buddhist devotees. Therefore, do make it a point to visit Dhauligiri and explore various Buddhist attractions that add to the sacred significance of Dhauligiri in Orissa.",
    images: [dhauli1],
    source: "(src: wikipedia)",
  },
  {
    name: "Mukteswar Temple",
    description:
      "Mukteshwara Temple is a 10th-century Hindu temple dedicated to Shiva located in Bhubaneswar, Odisha, India. The temple dates back to 950–975 CEand is a monument of importance in the study of the development of Hindu temples in Odisha. The stylistic development of the Mukteswara Temple marks the culmination of all earlier developments, and initiates a period of experiment which continues for an entire century, as seen in such temples as the Rajarani Temple and Lingaraj temple, both located in Bhubaneswar. It is one of the prominent tourist attractions of the city. The Mukteshvara Temple is found to be the earliest work from the Somavamshi period. Most scholars believe that the temple is the successor to Parashurameshvara Temple and was built earlier to the Brahmeswara Temple (1060 CE). Percy Brown puts the date of construction of the temple to 950 CE. The presence of a torana, which is not part of any other temple in the region, makes this temple unique and some of the representations indicate the builders were starters of a new culture. K.C. Panigrahi places the temple to be built during 966 CE and postulates that the Somavamshi king Yayati I built the temple. He also associates the legend of Kirtivassa to this temple, but the postulation is not accepted as Kirtivasa is associated with Lingaraja, though both were built at the same time for the same deity, Shiva. There is no historic evidence to conclude that Yayati had built the temple. This architecture is one of the basic reasons why Mukteshvara Temple is also known as the 'Gem of Odisha architecture' or 'Kalinga Architecture'. The temple faces west and is constructed in a lower basement amidst a group of temples. The pyramidal roof to the jagamohana present in the temple was the first of its kind over the conventional two tier structure. The temple is a small one compared to other larger temples in Bhubaneswar. The temples is enclosed within an octagonal compound wall with elaborate carvings on it. It is believed that the experiment of newer pattern in the temple showed a mature phase compared to its predecessors and culminated the beginning of replication of similar pattern in the later temples in the city. The temple has a porch, called torana, which acts as the gateway to the octagonal compound. The temple has two structures namely, the vimana (structure above the sanctum) and a mukhasala, the leading hall, both of which are built on a raised platform. The temple is the earliest to be built in pithadeula type.",
    images: [mukteswar1],
    source: "(src: wikipedia)",
  },
  {
    name: "Chilika Lake",
    description:
      "Chilika Lake is the largest brackish water lagoon with estuarine character that sprawls along the east coast of Indian sub-continent in Asia and second largest coastal lagoon in the world, covering an area between 900 to 11,165 sq km during summers and monsoon respectively.It is spread over the Puri, Khordha and Ganjam districts of Odisha state on the east coast of India, at the mouth of the Daya River, flowing into the Bay of Bengal. It is one of the first two wetlands in India to be designated as a Ramsar site, receiving this recognition in 1981. It has been listed as a tentative UNESCO World Heritage site. Its salinity varies by region, from freshwater where rivers flow in, to oceanic salinity levels due to tidal influx. Chilika is recognised as one of the best-managed Ramsar sites in Asia and received the Ramsar Wetland Conservation Award in 2002. The lagoon supports extraordinary biodiversity including over 225 bird species, the endangered Irrawaddy dolphin, and numerous fish, invertebrate, and aquatic plant species. It provides livelihoods to approximately 200,000 fisherfolk from over 130 villages around its shores. Chilika Lake is also a globally significant wintering ground for migratory waterbirds. ",
    images: [vchilika1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Daringbadi",
    description:
      "Odisha is normally famous for its temples and sea beaches but off-late a beautiful hill station in the state has become the new crowning glory of Odisha. The name of this precious diamond of Odisha is Daringbadi. The place is named after a British officer named Mr.Daring who was in control of the place. And ‘badi’ means village in the local language. Daringbadi is fondly referred to as the Kashmir of Odisha. Daringbadi is called the Kashmir of Odisha due to a similar climate and high altitude. The new darling of Odisha is rapidly gaining stardom among tourists. Many travelers flock to Daringbadi from different corners of the country for its stellar natural beauty. This beautiful hill station is spotted with thick and graceful pine forests and cascading waterfalls. Daringbadi is in Phulbani which has quite a few famous hilly destinations in the state of Odisha. It lies in the district of Kandhamal in Odisha. It is located at a height of approximately 3000 feet above sea-level. Daringbadi has many gushing rivers and pepper and coffee plantations. This place is wreathed in scenic plateaus and wavy valleys. There is also an eclectic mix of various cultures in Daringbadi. “Kutia Kondhas”, one of the oldest tribes in India live here. During winter, the temperature touches zero degrees centigrade. In December 2019, Daringbadi experienced snowfall. However, please be informed that there is no occurrence of heavy snowfall in Daringbadi. It’s light to moderate. It is normally sunny during the day but after sunset, the temperature plummets drastically making it biting cold. The best time to visit Daringbadi is during the winter months. The winter months last from September to May.",
    images: [daringbadi1],
    source: "(src: Wikipedia)",
  },
  {
    name: "Udayagiri and Khandagiri Caves",
    description:
      "Udayagiri and Khandagiri caves, formerly called Kattaka Gumpha or Cuttack caves, are partly natural and partly artificial caves of archaeological, historical and religious importance 3 km south of the city of Bhubaneswar in Odisha, India. The caves are situated on two adjacent hills, Udayagiri and Khandagiri mentioned as Kumari Parvata in the Hathigumpha inscription. They have a number of finely and ornately carved caves built during the 1st century BCE. It is believed that most of these caves were carved out as residential blocks for Jain monks during the reign of King Kharavela. Udayagiri means 'Sunrise Hill' and has 18 caves while Khandagiri has 15 caves. The caves of Udayagiri and Khandagiri, called lena or leṇa in the inscriptions, were taken out mostly during the reign of Kharavela for the abode of Jain ascetics. The most importance of this group was Ranigumpha in Udayagiri which is a double storeyed monastery. Other important caves include Hathi Gumpha, Ananta Gumpha, Ganesha Gumpha, Jaya Vijaya Gumpha, Mancapuri Gumpha, Bagha/Byaghra/Vyaghra Gumpha and Sarpa Gumpha.The Archaeological Survey of India (ASI) has listed that Udayagiri and Khandagiri Caves be in the list of 'Must See' Indian Heritage. The Udayagiri and Khandagiri Caves are listed as one of the Adarsh Smarak Monument by ASI. based on a reading of line 14 of the Hathi Gumpha inscription, declared that a total of 117 caves were excavated by Kharavela and others on the Kumari hill (Udayagiri). Marshall has counted more than 35 caves in both the hills, while M.M. Ganguli has enumerated only 27 caves. The number of existing caves at Udayagiri is 18, while Khandagiri has 15. The local names of the existing caves are listed below, numbered according to the enumeration of the Archaeological Survey of India. In Udayagiri, Hathi Gumpha (cave 14) and Ganesha Gumpha (cave 10) are especially well known for their historically important sculptures and reliefs. Raninka Na'ara (Queen's Palace Cave, Cave 1) is also an extensively carved cave and elaborately embellished with sculptural friezes. Khandagiri offers a fine view back over Bhubaneswar from its summit. The Ananta Cave (Cave 3) depicts carved figures of women, elephants, athletes, and geese carrying flowers.",
    images: [udaygiri1],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "Simlipal National Park is famous for tigers and waterfalls.",
  "The state is historically famous as ancient Kalinga. The brutal Kalinga War in 261 BC caused Emperor Ashoka to renounce violence and embrace Buddhism.",
  "The state has beautiful beaches like Puri Beach and Gopalpur Beach.",
  "The iconic 12th-century shrine in Puri is one of the 'Char Dham' pilgrimage sites and features the world's largest temple kitchen, which can feed up to 10,000 people daily.",
  "Chandipur Beach is famous worldwide for its unique phenomenon where the seawater naturally recedes by up to 5 kilometers (3 miles) during low tide, allowing visitors to walk on the seabed.",
  "Bhitarkanika National Park is famous for its vast mangrove ecosystems and giant saltwater crocodiles, while Gahirmatha Beach is the world's largest known nesting ground for the endangered Olive Ridley sea turtle.",
  "Located in Huma near Sambalpur, it is one of the only known leaning temples in the world",
  "Celebrated in Bargarh, this 11-day open-air theatrical performance based on the mythological stories of Lord Krishna is recognized as the world’s largest open-air theater.",
  "The Hirakud Dam in Sambalpur is the longest earthen dam in Asia and the fourth largest in the world.",
  "Known as the 'Mineral Heart of India', Odisha boasts vast reserves of iron ore, coal, bauxite, and chromite, making it a major industrial and mining hub for companies.",
  " The state government of Odisha made history by becoming the official sponsor of the Indian national field hockey teams (both men's and women's).",
];
const artGallery = [
  {
    title: "Odissi Dance",
    emoji: "💃",
    color: "#9B2D8A",
    desc: "Classical dance form of Odisha known for graceful postures and devotional expressions",
    image: gOdissiDance,
  },
  {
    title: "Chhau Dance",
    emoji: "🎭",
    color: "#C0522A",
    desc: "Vibrant semi-classical dance form using elaborate masks and martial art movements",
    image: gChhauDance,
  },
  {
    title: "Chaiti Ghoda",
    emoji: "🐴",
    color: "#D4A017",
    desc: "Ritualistic folk dance of coastal Odisha performed with a mock horse structure",
    image: gChaitiGhoda,
  },
  {
    title: "Danda Nata",
    emoji: "🕺",
    color: "#B5341A",
    desc: "Ancient ritualistic dance performed during the Danda festival as a form of devotion",
    image: gDandaNata,
  },
  {
    title: "Pakhala Bhata",
    emoji: "🍚",
    color: "#6B8E4E",
    desc: "Iconic Odia dish of fermented rice soaked in water — a staple summer comfort food",
    image: gPakhalaBhata,
  },
  {
    title: "Dalma",
    emoji: "🍲",
    color: "#E8A44A",
    desc: "Traditional Odia dish of lentils cooked with vegetables, offered to Lord Jagannath",
    image: gDalma,
  },
  {
    title: "Dahibara Aludam",
    emoji: "🥣",
    color: "#4A6E8A",
    desc: "Famous Odia street food of lentil dumplings in yogurt topped with spiced potato curry",
    image: gDahibaraAludam,
  },
  {
    title: "Chakuli Pitha",
    emoji: "🫓",
    color: "#8B7355",
    desc: "Traditional Odia rice crepe prepared during festivals and served with coconut chutney",
    image: gChakuliPitha,
  },
  {
    title: "Pattachitra",
    emoji: "🖼️",
    color: "#D4822A",
    desc: "Ancient cloth-based scroll painting depicting mythological stories with bold outlines",
    image: gPattachitra,
  },
  {
    title: "Sambalpuri Saree",
    emoji: "🧵",
    color: "#7B1E8A",
    desc: "Iconic handwoven ikat saree of Odisha with vibrant geometric patterns and rich borders",
    image: gSambalpuriSaree,
  },
];
