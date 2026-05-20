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
const biharMap = "https://i.postimg.cc/P5Jf204h/image.png";
const Puja1 = "https://i.postimg.cc/KvQd6Hb1/image.png";
const Puja2 = "https://i.postimg.cc/yN3tS6ZX/image.png";
const Puja3 = "https://i.postimg.cc/Pxm726Kp/image.png";
const Mela1 = "https://i.postimg.cc/02Ntw2gm/image.png";
const Mela2 = "https://i.postimg.cc/pTxCXPQ1/image.png";
const Mela3 = "https://i.postimg.cc/QCdq1Syw/image.png";
const Art1 = "https://i.postimg.cc/MTW0Jdqn/image.png";
const Art2 = "https://i.postimg.cc/vZf51pm6/image.png";
const Mahotsav1 = "https://i.postimg.cc/RV99tY4M/image.png";
const Mahotsav2 = "https://i.postimg.cc/25PNSc05/image.png";
const Mahotsav3 = "https://i.postimg.cc/gjHC4Ymr/image.png";
const Bihula1 = "https://i.postimg.cc/pTN3H9dv/image.png";
const Bihula2 = "https://i.postimg.cc/gjm5xf8z/image.png";
const Sama1 = "https://i.postimg.cc/3JL6wfwS/image.png";
const Sama2 = "https://i.postimg.cc/FHMTfMXZ/image.png";
const Sama3 = "https://i.postimg.cc/DwXgKx45/image.png";
const Madhushravani1 = "https://i.postimg.cc/jdGHvy3z/image.png";
const Madhushravani2 = "https://i.postimg.cc/jq1Pdzbp/image.png";
const Madhushravani3 = "https://i.postimg.cc/htWmVch8/image.png";
const Malmas1 = "https://i.postimg.cc/Y99LtSD5/image.png";
const Malmas2 = "https://i.postimg.cc/FzkfJB4D/image.png";
const Malmas3 = "https://i.postimg.cc/dDMhRjQZ/image.png";
const Jitiya1 = "https://i.postimg.cc/8zSHNhRt/image.png";
const Jitiya2 = "https://i.postimg.cc/3wrFDYbS/image.png";
const Sabha1 = "https://i.postimg.cc/ydkhvnK3/image.png";
const Sabha2 = "https://i.postimg.cc/vHWrq4RR/image.png";
const Sabha3 = "https://i.postimg.cc/jjkPwNfJ/image.png";
const Gaya1 = "https://i.postimg.cc/XvXybJPM/image.png";
const Gaya2 = "https://i.postimg.cc/VsX012Kf/image.png";
const Gaya3 = "https://i.postimg.cc/4N5KHVCD/image.png";
const vishnupad1 = "https://i.postimg.cc/k5VDHHV7/image.png";
const vishnupad2 = "https://i.postimg.cc/wMkBJ8rL/image.png";
const Nalanda1 = "https://i.postimg.cc/PJKtJbLv/image.png";
const Nalanda2 = "https://i.postimg.cc/vT8sJ1PD/image.png";
const Nalanda3 = "https://i.postimg.cc/sfKypcX6/image.png";
const Nalanda4 = "https://i.postimg.cc/sgGrCCJN/image.png";
const Tomb1 = "https://i.postimg.cc/PxyGQXtm/image.png";
const Tomb2 = "https://i.postimg.cc/rsZv7fR8/image.png";
const Tomb3 = "https://i.postimg.cc/PrB7ZpmC/image.png";
const Caves1 = "https://i.postimg.cc/KY5pd0CH/image.png";
const Caves2 = "https://i.postimg.cc/VkQ75y8X/image.png";
const Caves3 = "https://i.postimg.cc/633cFtrx/image.png";
const Fort1 = "https://i.postimg.cc/MZhk0Fwd/image.png";
const Fort2 = "https://i.postimg.cc/k5MLXrNP/image.png";
const Fort3 = "https://i.postimg.cc/yxRbr7KW/image.png";
const Golghar1 = "https://i.postimg.cc/wBBbYXHp/image.png";
const Golghar2 = "https://i.postimg.cc/SR46k48z/image.png";
const Golghar3 = "https://i.postimg.cc/L85zHNYR/image.png";
const Pillar1 = "https://i.postimg.cc/QCjTvbG0/image.png";
const Pillar2 = "https://i.postimg.cc/QdvWjsZN/image.png";
const Pillar3 = "https://i.postimg.cc/tTN1dxZd/image.png";
const Pillar4 = "https://i.postimg.cc/TY4KcGwm/image.png";
const Stupa1 = "https://i.postimg.cc/9MbMwHKP/image.png";
const Stupa2 = "https://i.postimg.cc/nVdrHZvc/image.png";
const Stupa3 = "https://i.postimg.cc/k5dXj5dK/image.png";
const Stupa4 = "https://i.postimg.cc/3Rt8JCD5/image.png";
const Stupa5 = "https://i.postimg.cc/NFVQRs4N/image.png";
const University1 = "https://i.postimg.cc/vBZyjg2T/image.png";
const University2 = "https://i.postimg.cc/GtZ1HML7/image.png";
const University3 = "https://i.postimg.cc/Gpqwk33c/image.png";
const Kesariya1 = "https://i.postimg.cc/mD5v5dH4/image.png";
const Kesariya2 = "https://i.postimg.cc/FzkM5jyJ/image.png";
const Kesariya3 = "https://i.postimg.cc/L4q56wvJ/image.png";
const gLittiChokha = "https://i.postimg.cc/Hx8mdDHM/image.png";
const gBihariFish = "https://i.postimg.cc/j50gwGPW/image.png";
const gMalpua = "https://i.postimg.cc/6QLRcSFG/image.png";
const gSilaoKhaja = "https://i.postimg.cc/HWKJwdjN/image.png";
const gAnarsa = "https://i.postimg.cc/bvBGmh3X/image.png";
const gThekua = "https://i.postimg.cc/BQ4vcb4B/image.png";
const gSattuDrink = "https://i.postimg.cc/bwM8MwcR/image.png";
const gShahiLitchi = "https://i.postimg.cc/hvSqxJT9/image.png";
const gJardaluMango = "https://i.postimg.cc/4N2T7xdV/image.png";
const gBhagalpuriSilk = "https://i.postimg.cc/9MCkg6My/image.png";
const gDhotiGamchha = "https://i.postimg.cc/mkq84Jb6/image.png";
const gMadhubani1 = "https://i.postimg.cc/1t3HqsXC/image.png";
const gManjushaArt = "https://i.postimg.cc/SxG12ZVC/image.png";
const gSujini = "https://i.postimg.cc/MpzdS7xp/image.png";
const gJatJatin = "https://i.postimg.cc/yxFyqdbD/image.png";
const gBideshiya = "https://i.postimg.cc/7Ynnm57C/image.png";
const gJhijhiya = "https://i.postimg.cc/3rgXxktr/image.png";
const gSikkiGrass = "https://i.postimg.cc/8CRp6gxQ/image.png";
const gBihariThali = "https://i.postimg.cc/B6hGTSg5/image.png";

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
export default function BiharPage() {
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
                Eastern India
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Bihar
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Cradle of Civilizations
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Bihar" },
                  { label: "Population", value: "10.41 Crore" },
                  { label: "Area", value: "94,163 sq km" },
                  { label: "Founded", value: "22 March 1912" },
                  {
                    label: "Language",
                    value: "Bhojpuri,Hindi,Maithili,Magahi",
                  },
                  { label: "Districts", value: "38 Districts" },
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
              Patna
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Bihar — The Cradle of Empires
            </p>
          </div>
        </Section>

        {/* Map of Bihar — click to enlarge */}
        <Section title="Map of Bihar" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(biharMap, "Map of Bihar")}
            >
              <img
                src={biharMap}
                alt="Map of Bihar"
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
              Bihar, a state in Eastern India, is a land where antiquity meets a
              modern struggle for transformation. Bordered by Nepal to the north
              and the states of Uttar Pradesh, West Bengal, and Jharkhand, it is
              physically defined by the fertile Ganges river, which splits the
              state into two distinct regions. Its name is derived from the
              Sanskrit word Vihara, meaning "abode," reflecting its deep-rooted
              history as a sanctuary for Buddhist monks.
            </p>
            <p className="text-foreground">
              Historically, Bihar was the epicenter of Indian power and culture
              for over a millennium. It was the cradle of the Maurya Empire,
              India’s first great empire, and the Gupta Empire, often called the
              "Golden Age of India." This region birthed two of the world’s
              major religions: Buddhism and Jainism. Gautama Buddha attained
              enlightenment under a pipal tree in Bodh Gaya, while Lord Mahavira
              revived Jainism in the same fertile plains. Ancient learning
              centers like Nalanda Mahavihara and Vikramashila attracted
              scholars from across the globe, making Bihar a beacon of
              intellectualism in the ancient world.
            </p>
            <p className="text-foreground">
              In the modern era, Bihar presents a complex narrative of
              demographic strength and economic challenges. It is the
              second-most populous state in India, with a staggering population
              of over 130 million as per the 2023 census. Notably, it possesses
              one of the youngest populations in India, with nearly 58% of its
              citizens under the age of 25. This "demographic dividend" is both
              a challenge and an opportunity for the state’s development. While
              it has historically faced hurdles in industrialization—partly due
              to colonial-era policies like the Permanent Settlement and
              post-independence freight equalization—the last two decades have
              seen a significant push toward infrastructure and governance.
            </p>
            <p className="text-foreground">
              The economy remains primarily agrarian, with about 80% of the
              workforce employed in the sector. Bihar is a leading producer of
              vegetables and unique fruits like the Shahi Litchi and Zardalu
              Mango, and it famously produces 90% of the world's makhana (fox
              nuts). However, the state is also seeing a rise in industrial
              activity in cities like Begusarai and Patna, and a burgeoning
              startup ecosystem supported by the Bihar Startup Policy 2022.
            </p>
            <p className="text-foreground">
              Culturally, Bihar is incredibly rich. The state is home to unique
              art forms like Mithila (Madhubani) painting, which has gained
              international acclaim. Festivals like Chhath Puja, dedicated to
              the Sun God, are celebrated with unparalleled fervor and have
              become a symbol of Bihari identity worldwide. Despite the
              challenges of urbanization and migration, Bihar continues to be a
              vital contributor to India’s administrative and intellectual
              landscape, consistently producing a high number of civil servants
              and scholars. Today, the state stands at a crossroads, balancing
              its majestic past with a determined march toward a more
              prosperous, industrialized future.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Bihar: The Land of Monasteries and Historical Resurgence"
              encapsulates both the state's ancient identity and its modern-day
              trajectory.The very name "Bihar" is a testament to its spiritual
              history. It is derived from the Sanskrit and Pali word Vihara,
              which means "abode" or "monastery.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: Wikipedia, mapsofindia.com)
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
        <Section title="Facts about Bihar" icon="💡">
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
            Scroll horizontally to explore Bihar's iconic foods, crafts, dance,
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
    name: "Chhath Puja",
    tagline: "Purity, Prayer, and the Power of the Sun.",
    description:
      'The most iconic festival of Bihar, dedicated to the Sun God (Surya) and celebrated with rigorous fasting and offerings at riverbanks. It is unique because it honors both the setting and the rising sun, symbolizing the cycle of life and death. Chhath Puja is arguably the most eco-friendly festival in India, emphasizing the preservation of water bodies and the worship of nature in its purest form. The four-day ritual begins with Nahay-Khay, where devotees purify themselves, followed by Kharna, involving a day-long fast broken with a special offering of jaggery kheer. The core of the festival is the Arghya, where thousands gather at riverbanks or ponds at sunset and sunrise. It is a unique social leveler; regardless of caste or status, everyone stands together in the water, offering "Thekua" (a traditional wheat-based dessert) to the Sun. The festival is dedicated to Lord Surya and his sister Chhathi Maiya, seeking their blessings for health and longevity. Unlike many festivals, Chhath is characterized by a complete absence of idol worship, focusing instead on the energy that sustains life. The folk songs sung by women during this period, often passed down through generations, create a hauntingly beautiful atmosphere across Bihar. It is also scientifically noted for its connection to solar therapy, as devotees absorb the soft UV rays of the rising and setting sun. The logistical coordination is a community feat, with neighborhoods coming together to clean roads leading to the ghats. Today, Chhath has become a global phenomenon, celebrated by the Bihari diaspora from the United States to Mauritius. ',
    images: [Puja1, Puja2, Puja3],
    source: "(src: Wikipedia,adobe stock)",
  },
  {
    name: "Sonepur Mela (Saran) ",
    tagline: "A Spectacle of Shadows, Silks, and Steeds",
    description:
      "One of Asia's largest cattle fairs, held at the confluence of the Ganges and Gandak rivers during Kartik Purnima. Historically, it was a major hub for trading elephants and horses, attracting traders from as far as Central Asia. The Sonepur Mela, held at the meeting point of the Ganges and Gandak, is a historical marvel that feels like a step back into the era of empires. Originally, it was the site where Chandragupta Maurya used to buy elephants and horses for his army, and that grand scale is still palpable today. The fair begins on Kartik Purnima, a day considered holiest for a ritual bath, drawing millions of pilgrims. While modern laws have restricted the sale of some animals, the cattle market remains one of the largest in the world, featuring high-breed cows, buffaloes, and goats. The fair is not just about commerce; it is a massive cultural exchange where local theater groups perform traditional plays and 'Nautankis' throughout the night. Stalls sell everything from agricultural equipment to intricate wooden furniture and Bihar's famous silk products. The 'Chidiya Bazaar' (bird market) and the spectacle of the decorated elephants (now mostly for display and ritual) remain major highlights. It serves as a vital economic engine for the Saran district, providing a platform for rural artisans to reach a massive audience. The fair’s sprawling grounds become a temporary city, complete with circuses, amusement park rides, and food stalls serving local delicacies like Litti Chokha. It represents the chaotic, vibrant, and resilient heart of Bihar's rural economy. ",
    images: [Mela1, Mela2, Mela3],
    source: " saran district official site,Wikipedia Commons,Adobe Stock",
  },
  {
    name: "Mithila Art Festival (Madhubani)",
    tagline: "Painting the Soul of Madhubani.",
    description:
      "A celebration of the world-famous Madhubani paintings, where local women showcase intricate geometric patterns and mythological themes. The festival preserves the ancient 'Kanchani' and 'Bharni' styles that were originally used to decorate the walls of mud huts.This festival is a dedicated celebration of the Madhubani school of painting, which is one of the world's oldest and most recognizable folk art forms. Rooted in the Mithilanchal region, the festival showcases the transformation of domestic murals into a global aesthetic. Traditionally, women painted these intricate designs on the mud walls of their homes to mark births and weddings, using twigs, fingers, and matchsticks. The festival highlights five distinct styles: Bharni, Katchni, Tantrik, Godna, and Kohbar, each with its own symbolic meaning and community history. Themes are largely mythological, depicting scenes from the Ramayana or the 'Raas-Leela' of Krishna, but they also incorporate elements of nature like the sun, moon, and sacred plants. The use of natural dyes derived from turmeric, indigo, and sandalwood is a key focus of the festival workshops. It provides a crucial space for female artists to gain financial independence and recognition for their intellectual property. Visitors can witness 'live painting' sessions where artists create masterpieces without any preliminary sketching. The festival has been instrumental in keeping the 'Kohbar' (wedding chamber art) tradition alive, which is believed to bless the couple with fertility. It is a colorful testament to how a community can preserve its identity through visual storytelling. ",
    images: [Art1, Art2],
    source: "(src: Adobe stock,Wikipedia Commons)",
  },
  {
    name: "Rajgir Mahotsav (Nalanda)",
    tagline: "Celebrating the Confluence of Faith and Heritage.",
    description:
      "An annual three-day extravaganza of classical dance and music held amidst the ancient hills of Rajgir. It provides a platform for top Indian artists to perform against the backdrop of one of the world's oldest inhabited cities. The Rajgir Mahotsav is a prestigious three-day cultural event that bridges the gap between Bihar's glorious ancient past and its contemporary artistic talent. Hosted by the Department of Tourism, the festival takes place in the valley of Rajgir, a city that served as the first capital of the Magadha Empire. The venue is often the Qila Maidan, surrounded by the ruins of the Cyclopean Wall and the hills that once echoed with the sermons of Buddha and Mahavira. It brings together the 'best of the best' in Indian classical music, including sarod players, sitarists, and vocalists of international repute. Classical dance forms like Kathak, Bharatanatyam, and Odissi are performed on grand stages with the illuminated hills as a backdrop. Beyond the high arts, the festival includes a 'Gram Shree Mela,' showcasing rural handicrafts and local cuisine to promote tourism. Traditional sports competitions, particularly wrestling and archery, are organized to keep the spirit of ancient Magadhan martial arts alive. The festival also highlights the 'Shanti Stupa' and the various Buddhist monasteries, emphasizing Rajgir as a global hub for peace. For three days, the town is transformed into a vibrant cultural capital, attracting tourists from across the globe. It is a powerful reminder that Bihar was once the intellectual and spiritual center of the Indian subcontinent.",
    images: [Mahotsav1, Mahotsav2, Mahotsav3],
    source: "(src:Bihar tourism,Wikipedia Commons)",
  },
  {
    name: "Bihula Festival (Bhagalpur) ",
    tagline: "A Saga of Devotion and Victory over Venom.",
    description:
      'A prominent festival in the Anga region, centered around the legend of Mansa Devi and the bravery of a devotee named Bihula. It features vibrant Manjusha art, a unique scroll-painting style that is one of the oldest folk traditions in the state. The Bihula Festival is the cultural signature of the Bhagalpur region (ancient Anga Desh), centered on a narrative of extraordinary female courage and devotion. It celebrates the story of Bihula, a woman who challenged the goddess of snakes, Mansa Devi, to save her husband Lakshminder from a divine curse. The festival is deeply tied to the Manjusha Art form, which is used to tell this story on scrolls and bamboo boxes. Manjusha is unique because it uses a specific color palette (Pink, Yellow, Green) and follows strict iconographic rules, such as drawing characters without ears. During the festival, devotees create "Manjushas" (decorated structures) and carry them in processions while singing folk ballads that recount Bihula journey on a raft. It is celebrated during the month of Shravan, coinciding with the monsoon, when snakes are most active, adding a layer of protective ritual to the worship. The art form, which was nearly lost, has seen a massive revival through this festival, empowering local artisans. It showcases a different facet of Bihar s heritage—one that is gritty, folk-driven, and centered on the triumph of the human spirit over divine whim. The festival is a communal affair where people from all walks of life participate in the decoration and ritualistic immersion of the bamboo structures. ',
    images: [Bihula1, Bihula2],
    source: "Bhagalpur District,Wikipedia commons",
  },
  {
    name: "Sama Chakeva (The Sibling Bond of Mithila)",
    tagline: "A Winter Tale of Sibling Love..",
    description:
      "Sama Chakeva is a tender folk festival celebrated in the Mithila region during the winter month of Kartik, focusing on the affection between brothers and sisters. It is based on a story from the Skanda Purana where Krishna’s daughter, Sama, was falsely accused of an affair and turned into a bird by her father’s wrath. Her brother, Chakeva, performed intense penance to bring her back to human form, symbolizing the protective role of a brother. During the festival, young girls make clay idols of birds, brothers, sisters, and the 'Chugla'(the gossip-monger). These idols are beautifully painted and carried in baskets as the girls sing traditional songs in the evenings. The festival lasts for nine days, during which the girls mock the 'Chugla' by symbolically burning his mustache. On the final day, the clay idols are immersed in a local pond or field, representing the sibling's farewell. It is a festival that strengthens community ties and teaches moral lessons through folklore. The songs of Sama Chakeva are some of the most melodious in the Maithili language, often reflecting the pangs of separation. It remains a vibrant tradition that keeps the youth connected to their agrarian roots and family values. ",
    images: [Sama1, Sama2, Sama3],
    source:
      "(src:Testbook - Festivals of Bihar Resource, Mithila Heritage Portal)",
  },
  {
    name: "Madhushravani (The Monsoon Vow) ",
    description:
      "Madhushravani is a fascinating 15-day ritual celebrated by newlywed women in the Mithila region during the Hindu month of Shravan. The festival is designed to pray for the longevity of the husband and the prosperity of the new household through the worship of Gauri and the Snake Gods. For two weeks, the bride eats only one vegetarian meal a day and listens to a series of mythological stories narrated by elderly women. These stories cover a wide range, from the birth of the Ganges to the trials of Parvati and the bravery of Bihula. The festival is famous for its vibrant use of Madhubani art, as special 'Kohbars' are painted for the occasion. On the final day, a unique ritual called 'Temi' is performed, where a small burn mark is made on the bride’s knee with a cotton wick to test her devotion and patience. Though controversial in modern times, it is seen by traditionalists as a mark of a woman’s resilience. The bride wears her wedding finery and jewelry throughout the period, making it a visually stunning domestic festival. It serves as an informal 'school' where the cultural history of the region is passed down from mother-in-law to daughter-in-law.",
    images: [Madhushravani1, Madhushravani2, Madhushravani3],
    source: "9src: Wikipedia Commons)",
  },
  {
    name: "Malmas Mela (The Divine Gathering at Rajgir) ",
    tagline: "The Celestial Transit in the Land of Hot Springs.",
    description:
      "The Malmas Mela is a rare and massive religious congregation that occurs every three years in Rajgir during the 'Adhik Maas' or leap month of the Hindu calendar. According to Vedic tradition, this extra month is considered 'unclean' for regular rituals, but Rajgir becomes the holiest place on Earth during this time. It is believed that all 330 million Hindu gods and goddesses reside in the hot springs of Rajgir for these thirty days. Millions of devotees arrive from across India to take a dip in the Brahmakund, a sulfur-rich hot spring believed to have miraculous healing powers. The mela transforms the town of Rajgir into a sea of saffron-clad pilgrims and wandering ascetics. Temporary markets, religious discourses (Kathas), and massive community kitchens (Bhandaras) are set up to accommodate the crowd. The atmosphere is thick with the scent of incense and the sound of bells ringing from the dozens of temples surrounding the hills. For the local economy, this mela is a windfall, as pilgrims buy local stone carvings and handicrafts. It is a spectacle of faith that has been recorded in ancient texts for over two thousand years. The event is so large that the state government sets up a temporary city with its own police stations and hospitals.",
    images: [Malmas1, Malmas2, Malmas3],
    source: "(src: Wikipedia,Bihar Torurism)",
  },
  {
    name: "Jitiya ",
    tagline: "The Mother's Ultimate Fast.",
    description:
      "Jitiya, or Jivitputrika Vrat, is perhaps the most difficult fast observed by mothers in Bihar for the safety and prosperity of their children. It falls on the eighth day of the waning moon in the month of Ashwin and involves a continuous 36 to 48-hour fast without a drop of water. The festival honors Jimutvahan, a king of the Vidyadharas who sacrificed himself to save a serpent from the mythical bird Garuda. Mothers begin the ritual with Nahay-Khay and follow it with a rigorous night of prayer where they listen to the Jitiya Vrat Katha. The story emphasizes that maternal love can overcome even the most powerful of divine forces. Small clay or dung figurines of eagles and jackals are worshipped, symbolizing the creatures that traditionally kept the fast in the legends. On the day of the fast, mothers do not even swallow their own saliva, demonstrating an incredible feat of physical and mental endurance. The fast is broken only the next morning after offering prayers to the sun. Jitiya is a profound display of the central role mothers play in the spiritual and emotional fabric of a Bihari household. It is celebrated with equal fervor in both rural villages and bustling cities. ",
    images: [Jitiya1, Jitiya2],
    source: "(src: Adobe Stock,Wikipedia Commons)",
  },
  {
    name: "Saurath Sabha ",
    tagline: "The Ancient Assembly of Knowledge and Kinship.",
    description:
      "Saurath Sabha is a unique social and cultural gathering held annually in the village of Saurath in Madhubani, serving as a traditional marriage market for the Maithil Brahmin community. Established centuries ago, it is a fascinating example of how a community manages its lineage and social harmony without modern technology. The fair takes place in a vast mango orchard, where families bring the horoscopes of their marriageable sons and daughters. The key figures are the Panjikars, professional genealogists who maintain palm-leaf manuscripts containing family records dating back dozens of generations. No marriage is finalized until the Panjikar verifies that the two families are not related within prohibited degrees of kinship. This ensure genetic diversity and maintains the integrity of the community's ancestral lines. Thousands of people gather under the trees to discuss proposals, negotiate dowries (historically), and finalize alliances in a public setting. While the number of attendees has dwindled with the rise of matrimonial websites, the 'Sabha' remains a prestigious cultural institution. It is a living relic of the medieval social structure of the Mithila region. The fair also features local folk music and markets selling traditional Mithila wares, making it a complete community experience.",
    images: [Sabha1, Sabha2, Sabha3],
    source: "(src: Wikipdeia Commons)",
  },
];

const historicalPlaces = [
  {
    name: "Mahabodhi Temple",
    description:
      "A UNESCO World Heritage site, this temple was built at the location where Prince Siddhartha attained enlightenment in the 6th century BC. The current structure, featuring a 55-meter high spire, was extensively restored by the British and Indian archaeologists in the 19th century. It represents the pinnacle of early brick architecture in India and houses the sacred Bodhi tree, a direct descendant of the original. The temple architecture is a masterpiece of the Gupta period, symbolizing the four stages of Buddha's life through intricate stone carvings.The central tower rises to 55 meters and is surrounded by four smaller towers, a design that influenced later Southeast Asian temple architecture. Beyond the main shrine, the complex houses the sacred Bodhi Tree—a direct descendant of the original tree under which Buddha sat—and the Vajrasana (Diamond Throne), the sandstone slab marking the exact point of enlightenment. The stone railings surrounding the temple are among the earliest archaeological remains, featuring carvings that represent the early evolution of Indian sculptural art. The city's cultural significance began with the dynasty founded by Sisunaga, who exercised power over Patna and Gaya around 600 BCE. Bimbisara, fifth king of the dynasty, who lived and ruled around 519 BCE, had projected Gaya to the outer world. Having attained an important place in the history of civilisation, the area experienced the influence of Gautama Buddha and Bhagwan Mahavir during the reign of Bimbisara. After a brief period under the Nanda dynasty (345–321 BCE), Gaya and the entire Magadha region came under Mauryan rule. Mauryan Emperor Ashoka (272–232 BCE) embraced and promoted Buddhism. He visited Gaya, and built the first temple at Bodh Gaya to commemorate the Buddha's attainment of supreme enlightenment. ",
    images: [Gaya1, Gaya2, Gaya3],
    source: "(src: Wikipedia Commons,MP Tourism/Buddhist circuit-Bodh Gaya)",
  },
  {
    name: "Vishnupad Temple ",
    description:
      "Hindu temple dedicated to Vishnu in Gaya, Bihar, India, located on the banks of Phalgu river. The temple is believed to be built upon the site where Vishnu had purportedly killed the demon Gayasura or pinned him underground. The temple features a 40-cm footprint purported to be of Vishnu incised into a block of basalt, known as Dharmasila which was retained when the deity stepped on Gayasura's chest before pinning him underground. The construction date of temple is unknown and it is believed that Rama along with Sita had visited this place. The present day structure was rebuilt by Devi Ahilya Bai Holkar, the ruler of Indore, in 1787, on the banks of the Falgu river. Ahilyabai Holkar had crafted the temple, sent her officers to inspect and find the best stone for the temple in whole region, and they finally found munger black stone as the best choice in Jaynagar. Since there was no proper road and the mountains were very far from Gaya, the officers found another mountain where they can carve and easily bring the stone to Gaya the place was near Bathani (a small village in Gaya district). The officers brought the craftsmen from Rajasthan. They started carving the temple in Patharkatti (a village and also a tourist place in Bihar). The final temple was assembled in Gaya near Vishnupad temple site. After the completing the construction of temple many craftsmen returned to their native places, but some of them settled-down in Pattharkatti village itself. Bihar government has marked this place as one of the prominent tourist spots of Bihar. The 1000 stone steps leading to the top of the Brahmajuni hill on southwest of the Vishnupad mandir gives the view of Gaya city and the Vishnupad temple, which is a tourist spot. There are also many small temples near this temple.",
    images: [vishnupad1, vishnupad2],
    source:
      "(src: Wikipedia Commons,Gaya District Administration-Vishnupad Temple Gallery)",
  },
  {
    name: "Nalanda University",
    description:
      "Established in the 5th century AD, Nalanda was the world's first residential university, hosting over 10,000 students and 2,000 teachers. The red-brick ruins span 23 hectares, featuring massive monasteries (viharas), temples, and a library so large it allegedly burned for months. It was excavated by the Archaeological Survey of India, revealing sophisticated urban planning with advanced drainage and cooling systems. The site remains a symbol of India's 'Golden Age,'showcasing the global exchange of data and philosophy during the first millennium.The site’s planning was revolutionary: it featured a linear alignment of monasteries (viharas) on one side and temples (chaityas) on the other, an axis that would later be adopted by many similar institutions in Southeast Asia. The most famous structure is the Sariputra Stupa, noted for its tiered levels and stucco statues. Legend speaks of its massive library, Dharmaganja, which consisted of three buildings—one of which was nine stories high—and allegedly burned for months after the university was sacked in the 13th century.  On 28 March 2006 the eleventh President of India A. P. J. Abdul Kalam proposed the idea while addressing the Joint Session of the Bihar Vidhan Mandal for the revival of Nalanda University. In 2007 the Bihar Legislative Assembly passed a bill for the creation of a new university.The Nalanda University Bill, 2010 was passed on 21 August 2010 in Rajya Sabha and 26 August 2010 in Lok Sabha. The bill received Presidential assent on 21 September 2010 thereby becoming an Act. The university came into existence on 25 November 2010, when the Act was implemented.The university's visitor is the President of India. The chancellor and chairperson of the governing board is Prof. Arvind Panagariya. The interim vice-chancellor was Prof. Abhay Kumar Singh. The current Vice Chancellor is Professor Sachin Chaturvedi. The governing board comprises the chancellor, vice-chancellor, representative from member countries, a secretary, two representatives from the Government of Bihar, a representative from the Ministry of Human Resource Development, and three persons in the category of 'Renowned Academician or Educationist', Arvind Sharma, Lokesh Chandra and Arvind Panagariya.The first chancellor of the university was Amartya Sen, followed by former Singapore Minister for Foreign Affairs George Yeo. They left citing concerns about autonomy and political interference in academic matters. Vijay Pandurang Bhatkar has been appointed the new chancellor on 25 January 2017 by President Pranab Mukherjee, in his capacity as Visitor to Nalanda University. In 2017, Interim Vice-Chancellor Pankaj Mohan handed over charge to Professor Sunaina Singh. ",
    images: [Nalanda1, Nalanda2, Nalanda3, Nalanda4],
    source:
      "(src:Archarological Survey Of India(ASI)-Nalanda,Wikipedia Commons,Adobs stock,timesofindia.indiatimes.com)",
  },
  {
    name: "Tomb of Sher Shah Suri",
    description:
      "This magnificent sandstone mausoleum was built in 1545 AD to honor the Afghan emperor who defeated the Mughals and built the Grand Trunk Road. Known as the 'Second Taj Mahal,' it stands in the middle of a large artificial lake, creating a stunning octagonal reflection on the water. The tomb's Indo-Islamic architecture, with its 22-meter dome, served as a direct prototype for later Mughal monuments across North India. Engineering-wise, it was designed with a sophisticated floating appearance, using massive stone platforms to withstand the pressure of the surrounding water.The structure is octagonal, topped by a grand 22-meter dome that was, at its time, the second largest in the world. This tomb served as a vital transition point between the Lodi style of Delhi and the later refined Mughal architecture. Its engineering is particularly impressive; the lake not only adds to its aesthetic beauty but also acted as a natural cooling system, while the stone bridge connecting it to the mainland was a feat of strategic design.The tomb was commissioned by Sher Shah during his lifetime, possibly in 1542. Three months before the completion of the tomb, Sher Shah died on 22 May 1545 in an accidental gunpowder explosion outside Kalinjar Fort whose siege he had been leading at the time. Construction continued during the reign of Islam Shah Suri, and the tomb was completed on 16 August 1545. At the time of its completion, it was the largest mausoleum in all of India. Local tradition identifies Mir Muhammad Aliwal Khan as the architect of the tomb.In 1778, William Hodges became among the first British landscape painters to visit India. While there, he made careful observations of the art and architecture he encountered. He published an illustrated book about his travels in India in 1794. In his book, he described the Tomb of Sher Shah Suri in detail ",
    images: [Tomb1, Tomb2, Tomb3],
    source: "(src: MP Tourism-Sasaram Landmarks,Pinterest.com)",
  },
  {
    name: "Barabar Caves",
    description:
      "Dating back to the Mauryan Empire (3rd century BC), these are the oldest surviving rock-cut caves in India, commissioned by Emperor Ashoka. The caves are famous for their 'Mauryan Polish,' a glass-like finish on the granite walls that remains reflective after 2,300 years. The Lomas Rishi Cave features an intricate facade carved to look like a wooden hut, marking the beginning of Indian cave architecture. Scientists still study the perfect acoustics of these caves, which were carved with such precision they create a unique echo for chanting.The caves are famous for their 'Mauryan Polish,' a technical marvel where the granite walls were polished to a mirror-like sheen that remains reflective over two millennia later. This polish isn't just for show; it contributes to unique acoustic properties within the chambers. The interior vaulted ceilings create a pronounced echo, amplifying sound in a way that likely facilitated ritual chanting. The Lomas Rishi Cave is particularly notable for its arch-like facade, which meticulously imitates contemporary timber architecture in stone.The caves were used by ascetics from the Ajivika sect, founded by Makkhali Gosala, a contemporary of Gautama Buddha, the founder of Buddhism, and of Mahavira, the last and 24th Tirthankara of Jainism. The Ajivikas had many similarities with Buddhism as well as Jainism. Also present at the site are several rock-cut Buddhist and Hindu sculptures and inscriptions from later periods. ",
    images: [Caves1, Caves2, Caves3],
    source: "(src: Wikipedia Commons,ASI,Adobe stock)",
  },
  {
    name: "Rohtasgarh Fort",
    description:
      "Perched on a hill in the Kaimur Range, this massive fort is one of the largest and most invincible hilltop citadels in India. Its foundations date back to the legendary King Harishchandra, but it was heavily fortified by Sher Shah Suri in the 16th century. The fort complex houses several palaces, temples, and the 'Hathi Pol' (Elephant Gate), featuring intricate carvings of war elephants and floral motifs. It served as a strategic military outpost for the Mughals and later the British, offering a panoramic view of the Son River valley.The early history of Rohtas is obscure. According to the local legends, the Rohtas hill was named after the Rohitāśva, the son of a legendary king Harishchandra. However, the legends about Rohitāśva make no mention of this area, and no pre-7th century ruins have been found at the site. The oldest record at Rohtas is a short inscription of 'Mahasamanta Shashanka-dava', whom John Faithfull Fleet identified with the Gauda king Shashanka. The Chandra and Tunga dynasties, which ruled in Bengal and Odisha regions respectively, traced their origin to a place called Rohitagiri, which may possibly be modern Rohtas. However, no evidence has been found at Rohtas to confirm this theory.",
    images: [Fort1, Fort2, Fort3],
    source:
      "(src: Rohtas District Administration - Fort Gallery ,Wikimedia Commons - Hathi Pol Rohtas,Bihar Tourism - Rohtasgarh Fort)",
  },
  {
    name: "Golghar",
    description:
      "This beehive-shaped granary was built by Captain John Garstin in 1786 to prevent famines like the Great Bengal Famine of 1770. The structure is unique because it was designed without any internal pillars, relying on its dome shape to support the weight of 140,000 tons of grain. Two spiral staircases with 145 steps lead to the top, providing a breathtaking view of the city and the flowing Ganges River. Although the doors were designed to open inward, a major engineering oversight meant they couldn't be opened when the granary was full.The Golghar is architecturally unique for its pillarless dome, which has a wall thickness of 3.6 meters at the base to support the massive internal weight. Two spiral staircases with 145 steps wind around the exterior, designed so that workers could carry grain up one side, pour it through a hole at the top, and descend the other side. A famous engineering flaw is that the doors were designed to open inward; if the granary were ever filled to capacity, the internal pressure of the grain would prevent the doors from being opened. According to a contemporary inscription at its base, the Golghar in Patna was intended to be just the first of a series of huge grain stores. In the end, however, no others were ever built. The granary was part of a general plan … for the perpetual prevention of famine in these provinces. Built in the Stupa architecture, the building has a height of 29 m. It is pillar-less with a wall of thickness of 3.6 m at the base. One can climb to the top of the Golghar via its 145-step spiral stairway. The spiral staircase was designed to facilitate the passage of the workers who loaded and unloaded the grain in the granary, who had to carry grain-bags up one flight, deliver their load through a hole at the top, and descend the other stairs. The top of the Golghar presents a panoramic view of the city and the Ganges.Golghar has never been filled to its maximum capacity and there are no plans to do so. Some have claimed that the reason for this is a flaw whereby the doors are designed to open inwards; thus, if it is filled to its maximum capacity, then the doors will not open.[3] However, visitors have found that the doors open outwards.[1] Presently renovation of this historical monument is underway. ",
    images: [Golghar1, Golghar2, Golghar3],
    source:
      "(src:Patna District Administration - Golghar Photo ,Adobe Stock,Wikipedia)",
  },
  {
    name: "Ashokan Pillar",
    description:
      "Located at Kolhua, this 18.3-meter pillar was erected by Emperor Ashoka to commemorate the location of Buddha’s last sermon. It is carved from a single piece of polished red sandstone and is topped by a life-sized lion facing the north. Unlike other Ashokan pillars, this one is not inscribed, which scholars believe indicates it is one of the earliest examples of his pillars. The surrounding complex includes a brick stupa and a coronation tank where the Lichchhavi kings were anointed before taking power.Vaishali holds the distinction of being the first republic in the world, governed by an elected assembly of the Lichchhavis. The Ashokan Pillar at Kolhua is one of the few that remains standing in its original position. It was erected to commemorate the site of Buddha’s last sermon. Unlike many other pillars, this one is not inscribed and is topped by a single lion capital facing north—the direction Buddha took for his final journey. The site also includes the Abhishek Pushkarni, a coronation tank where elected representatives were bathed before being sworn in. The pillars have four component parts in two pieces: the three sections of the capitals are made in a single piece, often of a different stone to that of the monolithic shaft to which they are attached by a large metal dowel. The shafts are always plain and smooth, circular in cross-section, slightly tapering upwards and always chiselled out of a single piece of stone. There is no distinct base at the bottom of the shaft. The lower parts of the capitals have the shape and appearance of a gently arched bell formed of lotus petals. The abaci are of two types: square and plain and circular and decorated and these are of different proportions. The crowning animals are masterpieces of Mauryan art, shown either seated or standing, always in the round and chiselled as a single piece with the abaci. Presumably all or most of the other columns that now lack them once had capitals and animals. They are also used to commemorate the events of the Buddha's life ",
    images: [Pillar1, Pillar2, Pillar3, Pillar4],
    source: "(src:Vaishali District Official Site - Kolhua, Wikipedia)",
  },
  {
    name: "Vishwa Shanti Stupa",
    description:
      "Perched on the Ratnagiri Hill, this massive white marble pagoda was built by Japanese Buddhists in 1969 to promote global peace. It features four golden statues of Lord Buddha representing the key milestones of his life: birth, enlightenment, teaching, and death. The stupa is accessible via a ropeway (aerial chairlift), which provides an bird's-eye view of the historic Gridhakuta Hill and Rajgir valley. Rajgir was the first capital of the Magadha Empire and served as a frequent retreat for Buddha during the rainy season. ('World Peace Stupa') is a large white Peace Pagoda in Rajgir, Nalanda District, Bihar, near Gitai Mandir. Statues of the Buddha are mounted on the stupa in four directions. It also has a small Japanese Buddhist temple with a large park. There is a temple near the stupa where prayers are conducted for universal peace. The initial pagoda was completed in 1969. New initiatives in 1993 resulted in the present form. It is one of around 80 Peace Pagodas which have been built around the world by the neo-Buddhist organisation Nipponzan Myohoji. This was a dream of Nichidatsu Fujii, inspired by Mohandas K. Gandhi, as a reaction to the atomic bombing of Japan, the first, and more well known, Vishwa Shanti stupa, being built on Ratnagiri Hill in Rajgir.Located on about the top of the 400 m high Rajgir Hills in the lush-green valley of Rajgir, the white stupa stands 120 ft tall with a total diameter of 103 ft. The stupa is studded with four gold gilded statues of Buddha, showing four important events of his life. This stupa was constructed by Mackintosh Burn Limited, a renowned PSU construction company under the Government of West Bengal. ",
    images: [Stupa1, Stupa2, Stupa3, Stupa4, Stupa5],
    source: "(src: Wikipedia)",
  },
  {
    name: "Vikramshila University",
    description:
      "Established by King Dharmapala of the Pala dynasty in the 8th century, Vikramshila was a premier center for Buddhist Tantric learning. The excavated site features a central cruciform stupa surrounded by 52 smaller shrines and numerous monastic cells for residential students. It was the main rival to Nalanda and produced many great scholars who traveled to Tibet to spread Buddhist teachings and texts. The site’s architecture highlights the transition to later medieval styles, with terracotta plaques depicting scenes of daily life and mythological figures.Vikramshila University , Bhagalpur A number of monasteries grew up during the Pāla period in medieval Bengal and Magadha. According to Tibetan sources, five great Mahaviharas stood out: Vikramashila, the premier university of the era; Nalanda, past its prime but still illustrious, Somapura, Odantapura, and Jagaddala.The five monasteries formed a network; 'all of them were under state supervision' and there existed 'a system of co-ordination among them. It seems from the evidence that the different seats of Buddhist learning that functioned in eastern India under the Pāla were regarded together as forming a network, an interlinked group of institutions,' and it was common for great scholars to move easily from position to position among them.Vikramashila was founded by Pāla king Dharmapala in the late 8th or early 9th century. It prospered for about four centuries before it was destroyed by Bakhtiyar Khilji along with the other major centres of Buddhism in Eastern India around 1193.Vikramashila is known to us mainly through Tibetan sources, especially the writings of Tāranātha, the Tibetan monk historian of the 16th–17th centuries. ",
    images: [University1, University2, University3],
    source:
      "(src: Archaeological Survey of India - Vikramshila , Wikimedia Commons - Vikramshila Ruins)",
  },
  {
    name: "Kesariya Stupa",
    description:
      "Standing at 104 feet, Kesariya is officially the tallest Buddhist stupa in the world, even taller than the Borobudur in Indonesia. It was rediscovered in 1998 and is believed to date back to the era of the Licchavis, later expanded by the Mauryan and Kushan rulers. The stupa is designed in several polygonal tiers, with each level containing niches that once held life-sized statues of the Buddha. Local legends claim that Buddha stayed here for a night before his final journey to Kushinagar, leaving his alms bowl with the local people.The site's exploration began in the 19th century, from its discovery by Colin Mackenzie in 1814 to Alexander Cunningham’s proper excavation in 1861–62. An excavation was conducted by archaeologist K. K. Muhammed of the Archaeological Survey of India (ASI) in 1998.] The original Kesariya stupa probably dates to the time of Ashoka (circa 250 BCE), as the remains of a capital of a Pillar of Ashoka were discovered there.The stupa may even have been inaugurated earlier, as it corresponds in many respects to the description of the stupa erected by the Licchavis of Vaishali shortly after the death of the Buddha to house the alms bowl he gave them. The current structure dates to the Pala period. The ASI has declared the stupa a protected monument of national importance. Despite being a popular tourist attraction, Kesariya has yet to be developed and a large part of the stupa remains under vegetation",
    images: [Kesariya1, Kesariya2, Kesariya3],
    source:
      "(src:East Champaran District Administration ,East Champaran District Administration ,Archaeological Survey of India - Kesariya)",
  },
];

const facts = [
  "Bihar is the birthplace of Buddhism and Jainism — Lord Buddha attained enlightenment at Bodh Gaya, and Lord Mahavira was born in Vaishali.",
  "The Barabar Caves in Bihar, dating back to the 3rd century BCE, are India’s oldest surviving rock-cut caves with a unique mirror-like Mauryan polish.",
  "Kesariya Stupa in East Champaran is the tallest Buddhist stupa in the world, even higher than Indonesia’s Borobudur.",
  "Bihar’s Rohtas district holds nearly 95% of India’s pyrite reserves, vital for fertilizer production.",
  "Kanwar Lake (Kabartal) in Begusarai is Asia’s largest oxbow lake and Bihar’s only Ramsar site, attracting thousands of migratory birds.",
  "Vaishali in Bihar is considered the world’s first republic, dating back to the 6th century BCE.",
  "Nalanda University, established in the 5th century CE, was one of the world’s earliest residential universities, attracting scholars from across Asia.",
  "The Saurath Sabha in Madhubani is a centuries-old genealogical fair where marriages are arranged after verifying family records.",
  "Bihar is famous for Madhubani paintings, a traditional art form practiced for centuries in the Mithila region.",
  "The state is known for its vibrant festivals like Chhath Puja, which is celebrated with great devotion to the Sun God.",
];

const artGallery = [
  {
    title: "Litti Chokha",
    emoji: "🧆",
    color: "#D4985A",
    desc: "Iconic baked sattu-stuffed wheat balls served with mashed vegetables & ghee",
    image: gLittiChokha,
  },
  {
    title: "Bihari Fish Curry",
    emoji: "🐟",
    color: "#D4683A",
    desc: "Famous mustard-paste based fish curry, usually enjoyed with rice",
    image: gBihariFish,
  },
  {
    title: "Malpua",
    emoji: "🥞",
    color: "#F4D884",
    desc: "Traditional sweet, deep-fried pancakes soaked in sugar syrup",
    image: gMalpua,
  },
  {
    title: "Khaja",
    emoji: "🥮",
    color: "#F4C894",
    desc: "Crispy, multi-layered sweet pastry from Silao, Nalanda",
    image: gSilaoKhaja,
  },
  {
    title: "Anarsa",
    emoji: "🧆",
    color: "#A8784A",
    desc: "Rice flour and jaggery sweet coated with sesame seeds",
    image: gAnarsa,
  },
  {
    title: "Thekua",
    emoji: "🍪",
    color: "#C8783A",
    desc: "Crispy, deep-fried sweet offering made with wheat flour and jaggery for Chhath Puja",
    image: gThekua,
  },
  {
    title: "Sattu Drink",
    emoji: "🥤",
    color: "#E8D094",
    desc: "Nutritious, cooling roasted gram flour drink — Bihar's natural energy booster",
    image: gSattuDrink,
  },
  {
    title: "Shahi Litchi (Muzaffarpur)",
    emoji: "🍒",
    color: "#E84855",
    desc: "GI-tagged, sweet and juicy litchis grown in Muzaffarpur",
    image: gShahiLitchi,
  },
  {
    title: "Jardalu Mango (Bhagalpur)",
    emoji: "🥭",
    color: "#F8C830",
    desc: "Famous GI-tagged mango variety known for its distinct aroma",
    image: gJardaluMango,
  },
  {
    title: "Bhagalpuri Silk Saree",
    emoji: "🥻",
    color: "#D4B488",
    desc: "Known as the 'Tussar Silk' capital, famous for its texture and natural sheen",
    image: gBhagalpuriSilk,
  },
  {
    title: "Dhoti-Kurta & Gamchha",
    emoji: "🧣",
    color: "#E8F4F8",
    desc: "Traditional attire for men, completed with the iconic cotton Gamchha",
    image: gDhotiGamchha,
  },
  {
    title: "Madhubani Painting",
    emoji: "🎨",
    color: "#F4A460",
    desc: "Mithila art featuring striking geometrical patterns made with fingers, twigs, and matchsticks",
    image: gMadhubani1,
  },
  {
    title: "Manjusha Art",
    emoji: "🐍",
    color: "#F4E860",
    desc: "Ancient scroll painting form from Anga region, focusing on snake motifs and folk tales",
    image: gManjushaArt,
  },
  {
    title: "Sujini Embroidery",
    emoji: "🧵",
    color: "#D4C8C8",
    desc: "Traditional quilt embroidery art depicting narrative social themes",
    image: gSujini,
  },
  {
    title: "Jat-Jatin Dance",
    emoji: "💃",
    color: "#E8A8B4",
    desc: "Popular folk dance depicting the love and tiffs of a married couple",
    image: gJatJatin,
  },
  {
    title: "Bideshiya",
    emoji: "🎭",
    color: "#D4884A",
    desc: "Folk theatre form created by Bhikhari Thakur, focusing on migration and social issues",
    image: gBideshiya,
  },
  {
    title: "Jhijhiya Dance",
    emoji: "🏺",
    color: "#A8B4D4",
    desc: "Cultural ritual dance performed during Navratri, balancing a perforated clay lantern on the head",
    image: gJhijhiya,
  },
  {
    title: "Sikki Grass Crafts",
    emoji: "🧺",
    color: "#D4C888",
    desc: "Handcrafted golden grass baskets and toys unique to North Bihar",
    image: gSikkiGrass,
  },
  {
    title: "Bihari Thali",
    emoji: "🍛",
    color: "#A8C888",
    desc: "Grand meal consisting of rice, dal, bhujia, litti, chokha, bachka, and chutneys",
    image: gBihariThali,
  },
];
