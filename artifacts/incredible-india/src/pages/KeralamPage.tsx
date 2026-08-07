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
const keralamMap = "https://i.postimg.cc/qMJ2GxFp/image.png";
const onam1 = "https://postimg.cc/XZW00Z1k";
const onam2 = "https://postimg.cc/wRpNXQwm";
const onam3 = "https://postimg.cc/4Hf6C1Vv";
const onam4 = "https://postimg.cc/vgQgDZTL";
const onam5 = "https://postimg.cc/xXv1HVWp";
const vishu1 = "https://postimg.cc/Z042Ktcm";
const vishu2 = "https://postimg.cc/xkVgxMpY";
const vishu3 = "https://postimg.cc/nMNmGZwS";
const vishu4 = "https://postimg.cc/N51K8XX1";
const thrissur1 = "https://postimg.cc/KRrY32X7";
const thrissur2 = "https://postimg.cc/q6cpK8Fd";
const thrissur3 = "https://postimg.cc/zLL57mQ4";
const vallam1 = "https://postimg.cc/ts8RLCFR";
const vallam2 = "https://postimg.cc/jWVKM3rb";
const vallam3 = "https://postimg.cc/G8KChcTL";
const theyyam1 = "https://postimg.cc/PP9kqVJ6";
const theyyam2 = "https://postimg.cc/nsY80Hkw";
const theyyam3 = "https://postimg.cc/p5rgWKtc";
const theyyam4 = "https://postimg.cc/GHBZ6PK3";
const attukal1 = "https://postimg.cc/1gS2gkQw";
const attukal2 = "https://postimg.cc/TL744hWr";
const attukal3 = "https://postimg.cc/F166bdv1";
const padma1 = "https://postimg.cc/4mC5NzZR";
const padma2 = "https://postimg.cc/WdTw0Thy";
const kovalam1 = "https://postimg.cc/xkdGF5G7";
const kovalam2 = "https://postimg.cc/phhfPd6G";
const poovar1 = "https://postimg.cc/kBFxJzT9";
const poovar2 = "https://postimg.cc/5Hjvm01p";
const jatayu1 = "https://postimg.cc/NyVXCcj7";
const cashtamudi1 = "https://postimg.cc/CZZBqQsR";
const munroe1 = "https://postimg.cc/5Yd0FNty";
const munroe2 = "https://postimg.cc/grb4qfth";
const sabarimala1 = "https://postimg.cc/7fmV4bHR";
const sabarimala2 = "https://postimg.cc/QBWkcbpY";
const sabarimala3 = "https://postimg.cc/CBGGQxrX";
const aranmula1 = "https://postimg.cc/Jt8cBjtp";
const aranmula2 = "https://postimg.cc/D8yrxFrR";
const ambal1 = "https://postimg.cc/xXBLjzWP";
const ambal2 = "https://postimg.cc/BL0DHGZ1";
const ambal3 = "https://postimg.cc/t79WgymB";
const ambal4 = "https://postimg.cc/V54MrTxj";
const alappuzha1 = "https://postimg.cc/75JTRLf9";
const alappuzha2 = "https://postimg.cc/PpTpNzKp";
const alappuzha3 = "https://postimg.cc/bSvZ9y7t";
const kumarakom1 = "https://postimg.cc/mhdz2998";
const kumarakom2 = "https://postimg.cc/vck45d3D";
const kumarakon3 = "https://postimg.cc/5jtyGtrJ";
const illikkal1 = "https://postimg.cc/jLpjL4ST";
const illikkal2 = "https://postimg.cc/v1MHv8nj";
const marmala1= "https://postimg.cc/CBxhWvmm";
const idukki1 = "https://postimg.cc/BL7Ssxzx";
const idukki2 = "https://postimg.cc/Lh79b3fD";
const munnar1 = "https://postimg.cc/9DPcz3ks";
const munnar2 = "https://postimg.cc/YG07XvS7";
const meesapulimala1 = "https://postimg.cc/NLyYm2VF";
const meesapulimala2= "https://postimg.cc/56LVkdfC";
const marine1 = "https://postimg.cc/TyYvwKgL";
const marine2 = "https://postimg.cc/CZPTfw4T";
const kochi1 = "https://postimg.cc/XB5Thd6n";
const kochi2 = "https://postimg.cc/WhMBwG7s";
const mattancherry1 = "https://postimg.cc/VSN2w3PV";
const silent1= "https://postimg.cc/njj5jBzB";
const silent2= "https://postimg.cc/QV7wjQw0";
const silent3= "https://postimg.cc/9rtk7WW0";
const silent4 = "https://postimg.cc/fVzr76LK";
const malampuzha1 = "https://postimg.cc/Hr6P6B87";
const malampuzha2 = "https://postimg.cc/WDtYCg0W";
const malampuzha3 = "https://postimg.cc/FdLWsvW1";
const palakkad1 = "https://postimg.cc/mh7Xvb1q";
const palakkad2 = "https://postimg.cc/bsT6v3TQ";
const vadakkunnathan1 = "https://postimg.cc/3kfnXNzm";
const vadakkunnathan2 = "https://postimg.cc/NyWDnVsw";
const vadakkunnathan3 = "https://postimg.cc/gLpDzZ6b";
const athirappily1 = "https://postimg.cc/8sVQJXhY";
const edakkal1 = "https://postimg.cc/bsz7LGV4";
const edakkal2 = "https://postimg.cc/TK1ZMz6W";
const edakkal3 = "https://postimg.cc/rdt3z5zw";
const gKathakali= "https://postimg.cc/m1T5dqj3";
const gKoodiyattam = "https://postimg.cc/G9jNBL3s";
const gMohiniyattam = "https://postimg.cc/PPr7YgPj";
const gOttamthullal = "https://postimg.cc/ZC7Mcwd3";
const gSadya = "https://postimg.cc/bZZFF1xK";
const gAppam = "https://postimg.cc/gXWSJ5f7";
const gPuttu = "https://postimg.cc/V0sK9tsb";
const gFishcurry = "https://postimg.cc/SjVTSgVc";
const gFalooda = "https://postimg.cc/PLGK39fB";
const gChenda = "https://postimg.cc/ZB4HZNdf";
const gMaddalam = "https://postimg.cc/Th204rGK";
const gIdakka = "https://postimg.cc/5XzSCg5r";
const gKasavu = "https://postimg.cc/cKM7DJbm";
const gMundum = "https://postimg.cc/0MVYsBxY";
const gMundu = "https://postimg.cc/vDm7zbL2";




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
export default function KeralamPage() {
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
                Keralam
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                God's Own Country
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Thiruvananthapuram" },
                  { label: "Population", value: "3.34 Crore" },
                  { label: "Area", value: "38,852 sq km" },
                  { label: "Founded", value: "1 November 1956" },
                  { label: "Language", value: "Malayalam" },
                  { label: "Districts", value: "14 Districts" },
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
              Thiruvananthapuram
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Keralam — Evergreen City of India
            </p>
          </div>
        </Section>

        {/* Map of Keralam — click to enlarge */}
        <Section title="Map of Keralam" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(keralamMap, "Map of Keralam")}
            >
              <img
                src={keralamMap}
                alt="Map of Keralam"
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
              Keralam, located in the southwest corner of India, is known as the "Land of coconut" due to its abundant coconut palms. It is bordered by the Arabian Sea to the west and the Western Ghats to the east, featuring a unique landscape of lush greenery and interconnected rivers.
            </p>
            <p className="text-foreground">
              The state is defined by its unique geography, wedged between the mist-covered peaks of the Western Ghats and the turquoise waters of the Arabian Sea. This narrow strip of land is world-renowned for its palm-fringed backwaters—a sprawling network of interconnected canals and lagoons that serve as the lifeline for local communities and a sanctuary for travelers. Historically, Keralam was the gateway of the Spice Coast, attracting seafaring traders from Rome, Arabia, and China, which fostered a remarkable pluralistic culture where various religions and customs have coexisted harmoniously for centuries. The state’s cultural identity is deeply rooted in its classical arts, most notably Kathakali, a stylized dance-drama characterized by intricate makeup and vivid costumes, and Kalaripayattu, widely regarded as the mother of all martial arts.
            </p>
            <p className="text-foreground">
              Beyond its aesthetic beauty, Kerala stands as a beacon of social development in India, boasting the nation’s highest literacy rate and a unique "Kerala Model" of development that prioritizes healthcare and education. From the aromatic tea plantations of Munnar to the rhythmic beats of the Chenda Melam during the Onam harvest festival, every corner of the state offers a sensory celebration. Whether it is the healing touch of authentic Ayurveda or the flavors of a traditional Sadhya served on a banana leaf, Keralam represents a perfect equilibrium between preserving heritage and embracing the future.
            </p>
            <p className="text-foreground">
              According to Hindu mythology, the land of Keralam is believed to have been created by Parashurama, who threw his axe into the sea, causing the waters to recede and reveal land from Gokarna to Kanyakumari. This region came to be known as Parashurama Kshetram (the Land of Parashurama). The newly formed land was initially saline and unfit for habitation, but the serpent king Vasuki purified it, making it fertile and suitable for settlement. These legends were later recorded in texts like the Keralolpathi, which also links them to the origin of Keralam’s early social and administrative systems. 
Another important legend is that of Mahabali, a just and powerful ruler associated with Keralam. After he defeated the devas, Vishnu took the form of Vamana and sent him to the netherworld. It is believed that Mahabali returns to Keralam once every year, an event celebrated as the Onam. Additionally, the Matsya Purana associates the region with the story of Matsya, the first avatar of Vishnu, and King Manu, linking Keralam to early mythological traditions.
            </p>
            <p className="text-foreground">
              Before the lush green state we know today existed, the land was a patchwork of different administrations. In the early 20th century, the region was split into the princely states of Travancore and Cochin in the south and center, while the Malabar region in the north was a district under the British-run Madras Presidency. Despite these political borders, the people were tied together by a common thread: the Malayalam language. This shared identity sparked the Aikya Kerala (United Kerala) movement, a passionate campaign led by thinkers, writers, and students who dreamed of a single home for all Malayalis.
            </p>
            <p className="text-foreground">
              The first major breakthrough happened shortly after India’s independence. On July 1, 1949, the two princely states merged to form Thiru-Kochi, proving that unification was possible. However, the dream wasn't complete until the central government passed the States Reorganisation Act of 1956. This law aimed to redraw India’s internal boundaries based on linguistic lines. Through this process, the Malabar district and the Kasaragod area were integrated with Thiru-Kochi, while some Tamil-speaking areas in the south were moved to what is now Tamil Nadu.                      </p>
            <p className="text-foreground italic text-primary font-medium">
              On November 1, 1956, the modern state of Kerala was officially born. This day is now celebrated globally by the Malayali community as Kerala Piravi. The state immediately stood out on the world stage, not just for its beauty, but for its political boldness; in 1957, it became one of the first places in the world to democratically elect a Communist government. From a collection of divided territories to a global model for education and healthcare, Kerala’s formation remains a powerful example of how a common culture can unite a people.
            </p>
            <p className="text-xs text-muted-foreground">
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
        <Section title="Facts about Keralam" icon="💡">
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
            Scroll horizontally to explore Keralam's iconic foods, crafts,
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
    name: "Onam",
    tagline: "The Harvest Festival of Keralam",
    description:
      "Observed in the Malayalam month of Chingam (August–September), it marks both the Malayali New Year and the legendary homecoming of King Mahabali, symbolizing prosperity, equality, and gratitude for the harvest. The Onam story centers on Mahabali, a benevolent Asura king beloved for his just rule. According to Hindu mythology, the gods feared his growing power, and Vishnu appeared as the dwarf Brahmin Vamana to test him. Granted three paces of land, Vamana covered heaven and earth in two steps; Mahabali offered his head for the third, displaying supreme humility. Moved by this devotion, Vishnu allowed the king to visit his people once a year—an event joyously celebrated as Onam.The festival begins with Atham and culminates on Thiruvonam. Homes are adorned with Pookalams—floral carpets laid daily to welcome Mahabali—and families prepare the lavish vegetarian Onam Sadya feast on banana leaves, featuring dishes like avial, olan, and payasam. Major attractions include Vallamkali (snake boat races), Pulikali (tiger dance), Kaikottikali (women’s dance), and the grand Athachamayam procession.Onam coincides with Kerala’s harvest season, celebrating abundance and communal unity after the monsoon. It transcends caste and religion, embodying shared cultural pride and harmony. Declared Kerala’s official festival in 1961, Onam remains a defining symbol of Malayali identity—an annual expression of renewal, generosity, and joy.",
    images: [onam1, onam2, onam3, onam4, onam5],
    source: "(src: Dreamstime, pinterest, istockphoto,Wikipedia)",
  },
  {
    name: "Vishu",
    tagline:
      "Hindu festival marking the traditional New Year in the Indian state of Keralam",
    description:
      "Falling around April 14–15, it celebrates the sun’s transit into the first zodiac sign, Aries, symbolizing renewal, prosperity, and the cosmic balance of spring. Central to Vishu is the Vishukkani, an arranged tableau of prosperity viewed at dawn. It includes rice, fruits, vegetables, mirror, gold ornaments, the Konna flower (Cassia fistula), and a lamp before an image of Lord Krishna. Seeing this display first thing in the morning is believed to bring good fortune for the year ahead.The day begins before sunrise when family members, eyes closed, are guided to view the kani. Homes are decorated, people wear new clothes (Puthukodi), and temples such as Guruvayur and Sabarimala host special rituals. Firing of crackers and sharing of Vishu Sadya—a grand meal served on banana leaves—add to the festivities. Vishu holds deep agricultural and astrological meaning, aligning with harvest and equinox cycles. It embodies hope, abundance, and the reaffirmation of family and social bonds. While rooted in Kerala’s Hindu tradition, its themes of renewal and prosperity resonate across South Indian and diaspora communities.",
    images: [vishu1, vishu2, vishu3, vishu4],
    source: "(src: Astrolagam, istockphoto, wikipedia)",
  },
  {
    name: "Thrissur Pooram",
    tagline:
      "Thrissur Pooram is Keralam’s grandest temple festival, held annually at the Vadakkunnathan Temple.",
    description:
      "Celebrated in April–May (Malayalam month of Medam), it unites ten temples around Thrissur in a spectacular display of devotion, music, and artistry. The event attracts hundreds of thousands of devotees and tourists, symbolizing the state’s cultural vibrancy and communal harmony. Thrissur Pooram began after temples from Thrissur were once excluded from the older Arattupuzha Pooram due to heavy rains. Sakthan Thampuran instituted a new, inclusive celebration centered on Lord Shiva at Vadakkunnathan Temple. The festival soon eclipsed its predecessors, earning the title “Mother of all Poorams.” Processions of elaborately adorned elephants—up to fifteen per temple group—march to the temple grounds, accompanied by traditional percussion ensembles such as Panchavadyam and Ilanjithara Melam. The rhythmic drumming and wind instruments create an immersive soundscape unique to Kerala’s temple tradition.The most anticipated moments are Kudamattam—the synchronized exchange of colorful parasols atop elephants between Paramekkavu and Thiruvambadi teams—and Vedikettu, a midnight fireworks contest illuminating the Thrissur skyline. These friendly rivalries embody both aesthetic mastery and communal joy. Beyond ritual devotion, Thrissur Pooram represents Kerala’s ethos of unity across faiths and communities. Muslim artisans craft decorative canopies, and Christian groups contribute materials, reflecting shared cultural participation. UNESCO has lauded the festival as among the world’s most spectacular cultural gatherings.",
    images: [thrissur1, thrissur2, thrissur3],
    source: "(src: wikipedia, youtube, scroll)",
  },
  {
    name: "Vallam Kali",
    tagline:
      "Boat race festival of India",
    description:
      "Celebrated mainly during the Onam season. It features long, narrow “snake boats” (chundan vallams) powered by synchronized rowing teams, combining athletic competition, cultural display, and religious devotion. The event is a major tourist attraction and symbol of Kerala’s vibrant water-based heritage. Vallam Kali’s roots trace back to the 13th century when local kings organized boat races as naval training exercises and religious offerings. The races often honor temple deities, and each boat is linked to a village or community. The festival evolved from a ritual act into a competitive sport retaining deep spiritual and communal significance.Each chundan vallam measures up to 100–120 feet and carries around 100 rowers, including oarsmen, singers, and a helmsman. The synchronized paddling, accompanied by rhythmic boat songs (vanchipattu), creates a spectacle of speed and coordination. Major races such as the Nehru Trophy and Aranmula regatta draw thousands of spectators and national television coverage. Kali expresses Kerala’s bond with its waterways and showcases cooperation among diverse communities. The boats are often built and maintained through collective village effort, symbolizing harmony and pride. The event’s inclusion in tourism promotions and films has helped make it an emblem of Kerala’s identity worldwide.While preserving tradition, Vallam Kali has embraced modern organization, safety measures, and international participation. The Kerala government and local tourism boards now schedule annual league-style competitions, blending heritage with contemporary sports management and expanding its reach to global audiences.",
    images: [vallam1, vallam2, vallam3],
    source: "(src: wikipedia, kalavoor)",
  },
  {
    name: "Theyyam",
    tagline:
      "Ritual art form native to the North Malabar region of Keralam.",
    description:
      "Combining dance, music, and mime, it serves as a living tradition of ancestor and deity worship. Each performance transforms the dancer into a divine presence, making Theyyam both a spiritual ceremony and a cultural spectacle. Theyyam derives from the Sanskrit word Daivam (God) and is believed to embody pre-Aryan Dravidian and tribal traditions. Historically linked to village shrines called kavus, the ritual invokes local deities, ancestral spirits, and heroes who became gods. Performers undergo spiritual discipline before embodying the divine, blurring the boundary between human and supernatural realms. Each Theyyam, called kolam, has unique songs (thottam), makeup, and costume patterns. Brilliant colors—red, orange, yellow, and black—dominate face and body painting, often taking hours to complete. Towering headgear (mudi), palm-leaf skirts, and jewelry enhance the otherworldly effect. Drums (chenda), cymbals (elathalam), and pipes provide rhythmic accompaniment as the performer enters trance, offering blessings and oracles to devotees. Theyyam reflects Kerala’s complex social fabric. Traditionally performed by lower-caste communities, it reverses caste hierarchies when performers become embodiments of gods worshiped by all. The ritual sustains oral traditions, local myths, and ecological practices tied to sacred groves. As a vibrant link between religion and folk culture, Theyyam continues to be celebrated across Malabar, drawing pilgrims, scholars, and tourists each year.",
    images: [theyyam1, theyyam2, theyyam3, theyyam4],
    source: "(src: wikipedia)",
  },
  {
    name: "Attukal Pongala",
    tagline: "Celebrated at the Attukal Bhagavathy Temple in Keralam",
    description:
      "It is renowned as one of the world’s largest gatherings of women, who come together to offer a sweet rice dish (pongala) to the goddess Attukal Bhagavathy, an incarnation of the Mother Goddess.The festival is rooted in local legends connected to Goddess Kannaki, the central figure of the Tamil epic Silappathikaram. Attukal Bhagavathy is believed to have visited this temple site on her way to Kodungallur after avenging her husband’s death. The event symbolizes devotion, purity, and the divine feminine power, celebrating the goddess’s compassion and strength. The central ritual, pongala, involves women cooking a mixture of rice, jaggery, coconut, and banana in clay pots on temporary hearths along the streets surrounding the temple. The offering is made after the chief priest blesses the fires from the temple hearth. Only women participate in the cooking, while men assist in logistical and support roles.Attukal Pongala attracts millions of women from across Kerala and beyond, transforming Thiruvananthapuram into a vast temple town. The event has become a symbol of women’s solidarity and devotion, blending faith with cultural identity. It also reflects Kerala’s matrilineal and inclusive spiritual traditions. Recognized by Guinness World Records for female participation.",
    images: [attukal1, attukal2, attukal3],
    source: "(src: english.janmatv.com, Wikipedia)",
  },
];

const historicalPlaces = [
  {
    name: "Sree Padmanabhaswamy Temple: The Golden Abode of Lord Vishnu",
    description:
      "Located in the heart of Thiruvananthapuram, Keralam, the Sree Padmanabhaswamy Temple is not only a spiritual powerhouse but also a masterpiece of history, architecture, and mystery. Often cited as the wealthiest place of worship in the world, it serves as a stunning bridge between Kerala’s heritage and Dravidian artistry. The temple is one of the 108 Divya Desams (holy abodes of Vishnu). The presiding deity is Lord Padmanabha, depicted in the Ananthasayanam posture—an eternal yogic sleep upon the thousand-headed serpent, Adishesha. A 18-foot marvel made from Katusarkara Yogam (a medicinal herb mix) and 12,008 sacred Salagrama stones.The Three-Door View: To see the full form of the Lord, devotees must look through three consecutive doors:Door 1: The face of the Lord and a Shiva Lingam.Door 2: Lord Brahma emerging from a lotus in the navel.Door 3: The sacred feet of the Lord. The temple is a rare architectural fusion of Kerala style (woodwork and sloped roofs) and Dravidian style (towering stone structures). The Eastern Gopuram: A 100-foot-tall, seven-tier gateway tower decorated with intricate carvings. The Kulasekhara Mandapam: A stone hall famous for its 'Musical Pillars', which emit different musical notes when tapped. The 365-Pillar Corridor: A grand stone walkway (Sreebalippura) featuring 365 and a quarter granite pillars, each unique and hand-carved. In 2011, the world watched as five of the temple's six subterranean vaults (Kallaras) were opened. The discovery included: Solid gold idols and coconut shells made of pure gold; Napoleonic era coins and Roman gold; Diamonds, rubies, and emeralds by the kilogram; Vault B (The Mystery): This vault remains unopened. Legend says it is sealed by a 'Naga Bandham' (divine serpent lock) and can only be opened by a high priest chanting the Garuda Mantra. The temple maintains very strict traditions and protocols that all visitors must follow to gain entry - Entry Restrictions: Entry is traditionally restricted to those of the Hindu faith; Dress Code: There is a strict traditional dress code. Men must wear a mundu (dhoti) and are not allowed to wear shirts or vests in the inner sanctum. Women must wear a saree, set-mundu, or long skirt and blouse; Prohibited Items: Mobile phones, cameras, and all electronic devices are strictly prohibited inside and must be stored in the cloakroom.",
    images: [padma1, padma2],
    source: "(src: Pragyata, Itenarydiary)",
  },
  {
    name: "Kovalam Beach",
    description:
      "Kovalam Beach, located about 16 km from Thiruvananthapuram in Kerala, is one of India’s most well-known beach destinations. It is not a single beach but a group of three crescent-shaped beaches—Lighthouse Beach, Hawa Beach, and Samudra Beach—each offering a slightly different experience, from lively tourist activity to quieter, more peaceful surroundings. Lighthouse Beach: The largest and southernmost beach, featuring a 35-meter-high striped lighthouse that offers panoramic views,making it major attraction; Hawa Beach: Known as Eve's Beach, it is known for its high-density tourism and stunning sunrise/sunset views; Samudra Beach: The northernmost part, known for being quieter and less crowded, offering a more serene experience. The beach is popular for swimming due to its relatively shallow waters, and it also attracts visitors for activities like surfing,sunbathing and relaxing Ayurvedic treatments, which Kerala is famous for. Kovalam is also known for its delicious seafood delicacies and local flavors. The best time to visit is from October to March when the weather is pleasant, while the monsoon season is less suitable for beach activities. Historically, Kovalam gained international attention in the 1970s when it became popular among foreign travelers, and it has since developed into a major tourist hub known for its natural beauty and coastal charm.",
    images: [kovalam1, kovalam2],
    source: "(src: Kerala toursim, IncredibleIndia)",
  },
  {
    name: "Poovar Island",
    description:
      "Poovar Island is a tranquil coastal destination located about 27 km from Thiruvananthapuram in Kerala. It is known for its unique geographical setting where the Neyyar River meets the Arabian Sea, creating a rare landscape of backwaters, river, sea, and a narrow stretch of golden sand beach. The island is primarily accessible by boat, making the journey an integral part of the experience. Poovar is popular for its backwater cruises through mangroves, floating cottages, and peaceful natural surroundings. The area supports rich biodiversity, including various bird species and aquatic life. The best time to visit is from October to March when the weather is pleasant, while the monsoon season brings heavy rainfall. Overall, Poovar Island is valued for its calm atmosphere, scenic beauty, and distinctive coastal ecosystem.",
    images: [poovar1, poovar2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Jatayu Earth's center",
    description:
      "Jatayu Earth's Center is a unique eco-tourism and adventure destination located in the Kollam district of Kerala. It is best known for having one of the world’s largest bird sculptures, representing Jatayu, a character from the Ramayana who is believed to have fought to protect Sita. The site is built on a hilltop at Chadayamangalam and offers stunning panoramic views of the surrounding landscape. Visitors can reach the top either by trekking or using a cable car facility. Along with the sculpture, the center features adventure activities such as rock climbing, zip-lining, and rappelling, making it popular among young travelers. It also promotes themes of women’s safety and courage, inspired by the story of Jatayu. The best time to visit is from October to March when the weather is more comfortable. Overall, Jatayu Earth's Center combines mythology, adventure, and scenic beauty into a single tourist experience.",
    images: [jatayu1],
    source: "(src: mybestplace)",
  },
  {
    name: "Ashtamudi Lake",
    description:
      "Ashtamudi Lake is one of the largest and most important backwater lakes in Kerala, located in the Kollam district. The name Ashtamudi means eight coned or eight branches, referring to its unique topography of eight interlinked arms, resembling an octopus, which makes it central to Kerala’s inland waterway network. It is a popular destination for backwater tourism, offering houseboat cruises between Kollam and Alappuzha, along with canoe rides and sunset tours. Visitors can experience rural Kerala life, coconut-lined shores, and traditional Chinese fishing nets along the banks. The lake also hosts the annual President’s Trophy Boat Race on November 1, attracting large crowds. Ashtamudi supports rich biodiversity, including mangrove forests, over 40 wetland-dependent bird species, and diverse aquatic life, including endangered plant species such as Syzygium travancoricum and Calamus rotang. It also plays an important ecological role as a natural flood buffer and supports local livelihoods through fishing and clam harvesting.",
    images: [cashtamudi1],
    source: "(src: blogspot.com)",
  },
  {
    name: "Munroe Island",
    description:
      "Munroe Island, also known as Munrothuruthu or Munroe Thuruth, is a scenic cluster of eight small islets in Kollam district, India. Situated where the Ashtamudi Lake meets the Kallada River, it is famed for tranquil backwaters, lush mangroves, and authentic village life. Named after British administrator Colonel John Munroe, it represents a serene microcosm of Kerala’s rural and ecological heritage. Munroe Island lies within Kerala’s vast backwater ecosystem. Its crisscrossing network of canals, lagoons, and coconut groves connects to Ashtamudi Lake, a Ramsar-recognized wetland.Munroe Island’s small villages depend on coir making, fishing, and coconut farming. Visitors can observe coir weaving, prawn cultivation, and sustainable agrarian practices that define Kerala’s traditional livelihoods.",
    images: [munroe1, munroe2],
    source: "(src: Noblehousetours.com, greenchromide.com)",
  },
  {
    name: "Sabarimala Sri Dharmasastha Temple",
    description:
      "Sabarimala Sree Dharma Sastha Temple is located atop the Sabarimala hill in Pathanamthitta district, Kerala, surrounded by 18 hills within the Periyar Tiger Reserve. The temple is dedicated to Lord Ayyappa, also known as Hariharaputra, the son of Shiva and Mohini (Vishnu’s female avatar), symbolizing the unity of divine energies. It is one of the largest annual pilgrimage sites in the world, with an estimated 10–15 million devotees visiting each year. According to Hindu mythology, Ayyappa was born to defeat the demoness Mahishi, who could only be killed by a child born of Shiva and Vishnu. The child, Manikandan, was raised by the Pandalam royal family. After fulfilling his divine mission, he instructed the king to build a temple at Sabarimala, where he would reside in the form of a deity. The temple also honors Malikapurathamma, a devotee associated with Ayyappa, and Vavar Swami, a Muslim warrior and close companion of Ayyappa, reflecting religious harmony. Sabarimala is linked to the legend of Shabari from the Ramayana, and the temple’s name literally means 'The hill of Sabari’. The temple features the Pathinettam Padi (18 sacred steps), which pilgrims climb as part of their spiritual journey. Each step symbolizes human senses, emotions, and virtues, representing the path to self-realization. Devotees carry the Irumudi Kettu, a twin-compartment offering bag, and observe a 41-day vratham of celibacy, abstinence from non-vegetarian food, and spiritual discipline before the pilgrimage. The main sanctum houses a Panchaloha idol of Lord Ayyappa, while shrines for Malikapurathamma, Vavar, Kadutha Swami, and Karuppaswamy are located nearby. Rituals include Neyyabhishekam, Ganapathi Homam, Usha Pooja, Deeparadhana and harivarasanam. First five days of each Malayalam month,Pilgrims traditionally start from Pamba River, taking ritual baths before trekking through forested paths to the temple. The trek is considered a purification process, with routes from Erumeli, Chalakkayam, and Vandiperiyar. Historically, women of reproductive age (10–50 years) were not permitted to enter Sabarimala temple, though the Supreme Court of India lifted this ban in 2018, allowing women of all ages to visit the temple. Sabarimala emphasizes equality, discipline, and devotion, welcoming devotees of all religions and castes. The temple’s traditions, including the 41-day vratham and communal chanting, foster spiritual unity. The Makara Jyothi, a celestial light appearing during Makaravilakku, is a central symbol of faith.",
    images: [sabarimala1, sabarimala2, sabarimala3],
    source: "(src: India.com, Wikipedia)",
  },
  {
    name: "Aranmula Parthasarathy Temple",
    description:
      "Aranmula Parthasarathy Temple is an ancient and highly revered Hindu temple located on the banks of the Pamba River in Pathanamthitta district of Kerala. The temple is dedicated to Lord Krishna in the form of Parthasarathy, which means the charioteer of Arjuna from the Mahabharata. It is one of the 108 Divya Desams, making it an important pilgrimage site for devotees of Lord Vishnu. The temple has deep historical and mythological significance. According to legend, Arjuna, one of the Pandavas, is believed to have established the temple as an act of repentance after the Kurukshetra war. The name “Aranmula” is said to have originated from “six bamboo poles,” referring to the raft used to bring the idol of the deity to this place. Architecturally, the temple reflects the traditional Kerala style, featuring sloping roofs, detailed wooden carvings, and mural paintings that depict scenes from epics like the Ramayana and Mahabharata. The temple complex includes a circular sanctum (sreekovil) and is surrounded by a peaceful natural setting along the river, adding to its spiritual atmosphere. The temple is also famous for its unique rituals and cultural traditions. One of the most notable is the Vallasadya, a grand ritual feast with a wide variety of traditional vegetarian dishes served to devotees. Another major event is the Aranmula Boat Race (Vallamkali), held during the Onam festival, which attracts large crowds and showcases Kerala’s rich cultural heritage. Additionally, the temple plays an important role in the pilgrimage to Sabarimala Temple, as sacred ornaments of Lord Ayyappa are ceremonially connected with this temple. Aranmula is also known for the traditional craft of the Aranmula metal mirror, reflecting the region’s cultural and artistic heritage. Overall, the temple is not only a place of worship but also a center of history, culture, and living traditions in Kerala. Aranmula Parthasarathy Temple is an ancient and highly revered Hindu temple located on the banks of the Pamba River in Pathanamthitta district of Kerala. The temple is dedicated to Lord Krishna in the form of Parthasarathy, which means the charioteer of Arjuna from the Mahabharata. It is one of the 108 Divya Desams, making it an important pilgrimage site for devotees of Lord Vishnu. The temple has deep historical and mythological significance. According to legend, Arjuna, one of the Pandavas, is believed to have established the temple as an act of repentance after the Kurukshetra war. The name “Aranmula” is said to have originated from “six bamboo poles,” referring to the raft used to bring the idol of the deity to this place.",
    images: [aranmula1, aranmula2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Ambalappuzha Sree Krishna temple",
    description:
      "Ambalappuzha Sree Krishna Temple is a historic and highly revered Hindu temple located in Alappuzha district of Kerala, dedicated to Lord Krishna in his Parthasarathy (charioteer) form. Believed to have been built between the 15th and 17th centuries by the Chembakasserry rulers, the temple is an important center of Vaishnavite worship and cultural heritage in Kerala. It is widely known for its traditional Kerala-style architecture, featuring sloping tiled roofs, detailed wooden carvings, and mural paintings that depict stories from Hindu epics. The temple is especially famous for its unique offering called Palpayasam, a sweet milk porridge that is distributed to devotees as prasadam and is considered one of the most iconic temple offerings in Kerala. According to a popular legend, Lord Krishna appeared in disguise and challenged the king to a game of chess, which led to the origin of this offering tradition that continues to this day.The temple also holds strong cultural significance, hosting festivals such as the Ambalappuzha Arattu Festival, along with celebrations like Krishna Janmashtami and Vishu. Traditional art forms, including Ottan Thullal, are closely associated with the temple, reflecting Kerala’s rich artistic heritage. Located near Alappuzha, the temple attracts both devotees and tourists for its spiritual importance, historical value, and cultural traditions.",
    images: [ambal1, ambal2, ambal3, ambal4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Alappuzha Beach",
    description:
      "Alappuzha Beach, also known as Alleppey Beach, is one of the most popular coastal attractions in Alappuzha, Kerala. Facing the Arabian Sea, the beach is well known for its wide stretch of golden sand, scenic sunsets, and historic charm. A major highlight is the century-old pier, originally built in 1862, which stands as a reminder of the town’s past as an important port for trade in coir, spices, and other goods. The nearby Alappuzha Lighthouse adds to the historical importance of the area and offers panoramic views of the sea and coastline. The beach also features attractions like Vijaya Beach Park and Sea View Park, making it suitable for both relaxation and family visits. Visitors can enjoy activities such as beach walks, photography, and water sports, while the calm surroundings make it ideal for leisure. Alappuzha Beach also hosts events like the annual Beach Festival and the International Sand Art Festival, attracting tourists from different parts of the country. Located close to the town center and well connected by road and rail, it serves as an easy and important destination that combines natural beauty, history, and cultural activities.",
    images: [alappuzha1, alappuzha2, alappuzha3],
    source: "(src: alappuzha.com, tripadvisor.com)",
  },
  {
    name: "Kumarakom Back waters and Bird Sanctuary",
    description:
      "Kumarakom Bird Sanctuary is a well-known bird sanctuary located on the banks of Vembanad Lake in Kottayam district of Kerala. Spread over about 14 hectares, it is one of the most famous birdwatching destinations in South India and forms an important part of Kerala’s backwater ecosystem. The sanctuary developed from a wooded estate established in the 19th century and later evolved into a protected area due to its rich natural habitat. The sanctuary is home to a wide variety of bird species, including herons, egrets, kingfishers, darters, and brahminy kites. During the migratory season, birds from distant regions such as Siberia and the Himalayas visit this area, making it especially significant for bird conservation and study. The presence of mangroves, coconut groves, and shallow lagoons provides ideal conditions for feeding, nesting, and breeding, supporting both resident and migratory birds.Visitors can explore the sanctuary through a walking trail of about 2 kilometers that passes through dense vegetation and canals, leading to viewpoints overlooking the lake.Boating facilities on Vembanad Lake offer an additional way to observe birds and enjoy the surrounding scenery. The best time to visit is from November to February for migratory birds, while June to August is suitable for observing local breeding activities.Kumarakom Bird Sanctuary is not only a major tourist attraction but also an important ecological site that helps maintain the balance of wetland biodiversity. It supports eco-tourism while promoting conservation awareness and sustaining local livelihoods connected to the backwaters.",
    images: [kumarakom1, kumarakom2, kumarakon3],
    source: "(src: IncredibleIndia, Muhamma.com, Wikipedia)",
  },
  {
    name: "Illikkal Kallu",
    description:
      "Illikkal Kallu is a striking hilltop rock formation located in the Western Ghats near Teekoy in Kottayam district of Kerala. Situated at an elevation of about 3,400 feet (around 1,050 meters) above sea level, it is one of the most popular viewpoints in the region, known for its panoramic landscapes, cool climate, and adventurous trekking routes. The formation lies on Illikkal Mala and originally consisted of three large rock structures, though only one remains prominent today due to natural erosion over time. The site offers expansive views of the surrounding valleys, forested hills, and, on clear days, even distant lowlands and parts of the Arabian Sea. The area is often covered in mist, especially during early mornings and evenings, creating a dramatic and scenic atmosphere that attracts photographers and nature enthusiasts. The location is accessible by road up to a certain point, after which visitors must walk a short distance to reach the main viewpoint, where safety railings and designated paths have been provided. Illikkal Kallu is also known for its natural surroundings, which include diverse plant species and rich biodiversity typical of the Western Ghats. Local traditions associate the region with medicinal plants and folklore, adding cultural value to its natural beauty. The best time to visit is from September to February when the weather is pleasant and visibility is clearer, while the monsoon season can make the terrain slippery and foggy. Overall, Illikkal Kallu is valued for its scenic views, trekking experience, and unique geological formation, making it an important natural attraction in Kottayam district.",
    images: [illikkal1, illikkal2],
    source: "(src: Wikipedia, tripoto.com)",
  },
  {
    name: "Marmala Waterfalls",
    description:
      "Marmala Waterfalls is one of the most scenic natural attractions in Kottayam district of Kerala, located near Erattupetta along the eastern slopes of the Western Ghats. The waterfall originates from the Meenachil River and cascades from a height of about 60 meters (around 200 feet), forming a striking flow of water surrounded by dense forest and rocky terrain.The site is known for its untouched natural setting, with thick vegetation, hills, and a cool, refreshing atmosphere that attracts nature lovers and trekkers. Visitors usually reach the waterfall by walking a short distance through a forest path, which adds an element of adventure to the experience. The pool formed at the base of the falls enhances its beauty, though caution is advised due to slippery rocks and strong currents, especially during the monsoon season.Marmala Waterfalls is particularly popular during and after the monsoon months when the water flow is at its peak, creating a powerful and visually impressive cascade. However, the best time to visit is from September to February when the surroundings are lush and the weather is safer for travel and exploration. Overall, the waterfall is valued for its natural beauty, peaceful environment, and trekking appeal, making it a notable destination in the region.",
    images: [marmala1],
    source: "(src: Holidify.com)",
  },
  {
    name: "Idukki Dam",
    description:
      "Idukki Dam is a major hydroelectric project located in Idukki district of Kerala, built across the Periyar River. It is a double-curvature arch dam constructed between the Kuravan and Kurathi hills and stands at a height of about 168.91 meters, making it one of the highest arch dams in Asia. The dam is a key part of Kerala’s power infrastructure and is operated by the Kerala State Electricity Board.Completed in 1973 and commissioned for power generation in 1975–1976, the dam is known for its advanced engineering design, which allows it to withstand high water pressure using a relatively thin concrete structure. It was developed with technical and financial assistance from the Government of Canada. Along with the nearby Cheruthoni Dam and Kulamavu Dam, it forms a large reservoir system that supports the underground Moolamattom Powerhouse, which has a power generation capacity of about 780 MW and supplies electricity across the state.The dam is also associated with local history and folklore, including stories about the Kuravan and Kurathi hills. It was officially inaugurated by Indira Gandhi in 1976. Surrounded by the forests and hills of the Western Ghats, the area offers scenic viewpoints such as Hill View Park and Calvary Mount. While direct access to the dam structure is limited and regulated, nearby viewpoints and the reservoir area attract visitors for their natural beauty and panoramic views.",
    images: [idukki1, idukki2],
    source: "(src: livekerala.com, wallpapercave.com)",
  },
  {
    name: "Munnar",
    description:
      "Munnar is a famous hill station located in Idukki district of Kerala, known for its cool climate, mist-covered hills, and vast tea plantations. Situated in the Western Ghats at an elevation of around 1,500–1,600 meters above sea level, it is one of the most popular tourist destinations in South India. The name “Munnar” means “three rivers,” referring to the confluence of the Muthirapuzha, Nallathanni, and Kundala rivers. The region is widely recognized for its rolling hills covered with tea estates that were developed during the British colonial period. The pleasant weather, combined with lush greenery and scenic landscapes, makes it an ideal destination for nature tourism. Munnar is also known for its biodiversity, with nearby attractions like Eravikulam National Park, which is home to the endangered Nilgiri Tahr. Other important places include Mattupetty Dam, popular for boating, and Top Station, which offers panoramic views of the surrounding valleys. Munnar is also famous for the rare blooming of the Neelakurinji flower, which occurs once every 12 years and covers the hills in a blue-purple shade. The area supports activities such as trekking, wildlife observation, and plantation visits, making it a well-rounded destination for both relaxation and exploration. The best time to visit is from September to March when the weather is cool and suitable for sightseeing. Overall, Munnar is valued for its natural beauty, ecological importance, and role as a major hill tourism center in Kerala.",
    images: [munnar1, munnar2],
    source: "(src: civitatis.com, revv.co.in)",
  },
  {
    name: "Meesapulimala",
    description:
      "Meesapulimala is a major mountain peak in Idukki district of Keralam, with a height of about 2,640 meters, making it the second-highest peak in the Western Ghats. Located near Munnar, it is well known for trekking and panoramic views of hills and valleys. The trekking route passes through grasslands, tea plantations, and forest areas, offering a scenic experience. Meesapulimala is famous for sunrise views also. The region is part of a biodiversity-rich area and is home to species like the Nilgiri Tahr. The best time to visit is from October to March when the weather is suitable for trekking.",
    images: [meesapulimala1, meesapulimala2],
    source: "(src: tripinic.com. mircf.behance.net)",
  },
  {
    name: "Marine Drive",
    description:
      "Marine Drive is a well-known waterfront promenade located in the city of Kochi, overlooking the scenic backwaters connected to Vembanad Lake. Stretching for about 3 kilometers, it is one of the most popular public spaces in Ernakulam and serves as a major leisure and social hub for both residents and tourists. Developed by the Greater Cochin Development Authority as part of urban development initiatives, Marine Drive features a wide pedestrian walkway lined with trees, seating areas, and open spaces for relaxation. It connects key points in the city, including the High Court Junction and the Ernakulam Boat Jetty, and is easily accessible by road and water transport. One of the main attractions of Marine Drive is its series of iconic bridges, such as the Rainbow Bridge, Chinese Fishing Net Bridge, and Houseboat Bridge, which reflect the maritime identity of Kochi. The area also includes shopping complexes, cafés, and access to boat services, allowing visitors to explore the backwaters. Marine Drive is especially popular during the evenings, offering panoramic views of the water and the city skyline, along with well-known sunset views. It is commonly used for walking, recreation, and public gatherings, and also hosts local events and celebrations. Overall, it is an important urban landmark that combines natural scenery with city life, making it a key attraction in Ernakulam district.",
    images: [marine1, marine2],
    source: "(src: live.staticflickr.com, pinimg.com)",
  },
  {
    name: "Fort Kochi",
    description:
      "Fort Kochi is a historic coastal area in Kochi, Kerala, known for its strong colonial influence and cultural heritage. It developed as a major trading center in the early 16th century when the Kingdom of Cochin allowed the Portuguese to establish a settlement and build Fort Emmanuel, marking the beginning of European presence in the region. Later, the area came under Dutch and then British control, each leaving a lasting impact on its architecture and culture. Fort Kochi is famous for its colonial-era buildings, narrow streets, and waterfront views along the Arabian Sea. One of its most iconic features is the traditional Chinese fishing nets, which are still used today and reflect centuries-old fishing techniques. Important landmarks in the area include St. Francis Church, one of the oldest European churches in India, and Santa Cruz Basilica, known for its architectural beauty and historical importance. The region is also a cultural hub, hosting the Kochi-Muziris Biennale, which is one of India’s largest contemporary art festivals. Fort Kochi’s streets are lined with art galleries, cafés, and heritage buildings, creating a blend of history and modern culture. Visitors can explore the area on foot, enjoy seaside views, and experience local traditions, making it one of the most important tourist destinations in Ernakulam district.",
    images: [kochi1, kochi2],
    source: "(src: static2.tripoto.com, traveltriangle.com)",
  },
  {
    name: "Mattancherry Palace",
    description:
      "Mattancherry is a historic and culturally rich area located in Kochi,Erankulam district of  Keralam, known for its strong colonial influence and vibrant trading history. It developed as an important commercial center where traders from different parts of the world, including Arabs, Jews, and Europeans, settled over time, creating a unique blend of cultures and traditions.One of the major attractions in Mattancherry is the Mattancherry Palace, also known as the Dutch Palace, originally built by the Portuguese and later renovated by the Dutch. The palace is famous for its well-preserved Kerala murals depicting scenes from epics like the Ramayana and Mahabharata, along with exhibits related to the Kochi royal family. Another significant landmark is the Paradesi Synagogue, one of the oldest active synagogues in the Commonwealth, located in the historic Jew Town area. Mattancherry is also known for its spice markets and traditional trading streets, where commodities like pepper, cardamom, and other spices have been traded for centuries. The narrow lanes of Jew Town are lined with antique shops, handicrafts, and heritage buildings, reflecting the area’s rich past. Overall, Mattancherry stands as an important cultural and historical center in Kochi, offering a blend of architecture, trade history, and diverse cultural influences.",
    images: [mattancherry1],
    source: "(src: exploreyoga.in)",
  },
  {
    name: "Silent Valley National Park",
    description:
      "Silent Valley National Park is a protected tropical rainforest located in Palakkad district of Keralam, within the Western Ghats. It is one of the most ecologically important regions in India and forms part of the Nilgiri Biosphere Reserve. The area is globally significant because the Western Ghats is recognized as a UNESCO World Heritage Site, highlighting its rich biodiversity and environmental value.The park is known for its dense evergreen forests, largely untouched by human activity, which makes it a rare example of a preserved tropical ecosystem. The Kunthi River flows through the valley, supporting a wide range of plant and animal life. Silent Valley is especially famous for being home to the endangered Lion-tailed macaque, along with many other species of mammals, birds, reptiles, and insects.Due to its ecological sensitivity, tourism is strictly regulated, and entry is controlled to protect the natural habitat. Visitors can explore the park through guided eco-tourism programs, which focus on conservation awareness and sustainable travel. The best time to visit is from December to April when the weather is relatively dry and suitable for exploration.Silent Valley National Park is valued for its untouched natural beauty, scientific importance, and role in preserving biodiversity, making it one of the most important natural heritage sites in Kerala.",
    images: [silent1, silent2, silent3, silent4],
    source: "(src: keralatourism, wikipedia)",
  },
  {
    name: "Malampuzha Dam",
    description:
      "Malampuzha Dam is the largest reservoir in Keralam, located near the foothills of the Western Ghats in Palakkad district. Built across the Malampuzha River, a tributary of the Bharathapuzha, the dam was completed in 1955 and plays an important role in irrigation and water supply in the region. The dam is widely known not only for its functional importance but also as a major tourist destination. The surrounding area is developed into Malampuzha Gardens, one of the most visited parks in Kerala, featuring landscaped lawns, fountains, and walking paths. A major attraction here is the famous Yakshi sculpture, created by renowned artist Kanayi Kunhiraman, which adds artistic value to the site. Visitors can also enjoy a ropeway ride that offers panoramic views of the dam, gardens, and reservoir, making it one of the few ropeway experiences in Keralam. Boating facilities are available in the reservoir, and the area also includes attractions like an aquarium, snake park, and children’s park, making it suitable for all age groups.Malampuzha Dam is valued for its combination of engineering importance, natural scenery, and recreational facilities, making it one of the most popular tourist spots in Palakkad district.w",
    images: [malampuzha1, malampuzha2, malampuzha3],
    source: "(src: keralatourism)",
  },
  {
    name: "Palakkad Fort",
    description:
      "Palakkad Fort, also known as Tipu’s Fort, is one of the best-preserved forts in Keralam, located in the heart of Palakkad town. It was originally built in 1766 by Hyder Ali, the ruler of the Kingdom of Mysore, and later came under the control of his son Tipu Sultan, after whom it is commonly named.Constructed using strong granite stones, the fort is known for its impressive architecture, including thick defensive walls, bastions, and a wide moat surrounding the structure, which was designed to protect it from enemy attacks. Its strategic location at the Palakkad Gap made it an important military base, controlling movement between Kerala and Tamil Nadu during historical times. Today, the fort is maintained by the Archaeological Survey of India and serves as a major historical and tourist attraction. The interior of the fort includes open grounds, gardens, and walking paths, making it a popular spot for visitors and locals. It also houses a Hanuman temple and a small museum area, reflecting both cultural and historical significance.Palakkad Fort stands as an important symbol of the region’s colonial and military history, combining architectural strength with historical value, and remains one of the key heritage landmarks in Palakkad district.",
    images: [palakkad1, palakkad2],
    source: "(src: indiatourism.in, billiontrips.com)",
  },
  {
    name: "Vadakkunnathan Temple",
    description:
      "Vadakkunnathan Temple is an ancient and important Shiva temple located in Thrissur, Kerala. It is known for its traditional Kerala-style architecture, with sloping roofs, wooden carvings, and mural paintings depicting scenes from the Mahabharata. The temple complex is situated at the center of the city, surrounded by the large open ground called Thekkinkadu Maidan.The temple is believed to have been established by sage Parashurama and has remained an important center of worship for centuries. It is closely associated with the famous Thrissur Pooram, one of the most celebrated festivals in Kerala, known for its grand processions and cultural events held around the temple grounds. Vadakkunnathan Temple is also recognized for its historical and architectural significance and is included in the UNESCO tentative list. It continues to be a major religious and cultural landmark in Kerala.",
    images: [vadakkunnathan1, vadakkunnathan2, vadakkunnathan3],
    source: "(src: wikipedia)",
  },
  {
    name: "Athirappilly Waterfalls",
    description:
      "Athirapilly Waterfalls is the largest waterfall in Kerala, located on the Chalakudy River in the lush forests of the Western Ghats. Often called the “Niagara of India,” the waterfall drops from a height of about 24 meters (80 feet) and is one of the most popular natural attractions in the state.Surrounded by dense rainforest, Athirappilly is known for its scenic beauty, rich biodiversity, and powerful flow of water, especially during the monsoon season. The area supports various species of birds and wildlife, making it ecologically significant. Visitors can view the waterfall from both the top and the base, with a short trek leading to the lower viewpoint.The site is well connected by road and is located near Chalakudy town. It is also close to other attractions like Vazhachal Waterfalls, which is often visited together with Athirappilly. The best time to visit is from September to February when the weather is pleasant and the water flow remains strong. Athirappilly Waterfalls is valued for its natural beauty, tourism importance, and role as a major eco-tourism destination in Kerala.",
    images: [athirappily1],
    source: "(src: wikipedia)",
  },
  {
    name: "Kozhikode Beach",
    description:
      "Kozhikode Beach, also known as Calicut Beach, is a historic seaside destination located in Kozhikode along the Malabar Coast, facing the Arabian Sea. It is one of the most popular landmarks in the city, known for its scenic sunsets, coastal views, and cultural importance. The beach has long been associated with maritime trade and played a key role in Kozhikode’s history as an important port city.The beach features wide sandy shores lined with palm trees and includes old piers extending into the sea, reflecting its historical connection to trade. A nearby lighthouse, built in the early 20th century, adds to its coastal charm. Attractions such as Dolphin’s Point, Lion’s Park, and an aquarium make it suitable for visitors of all ages. The beach area is also a lively social space, especially during evenings. Kozhikode Beach holds historical significance as it is near the region where Vasco da Gama arrived in 1498, marking the beginning of European trade connections with India. Over time, it became a center of trade under local rulers and continues to represent the city’s identity.Today, the beach is known for its vibrant atmosphere, with food stalls offering local Malabar dishes such as seafood, banana chips, and traditional drinks. Visitors often come here for walking, relaxation, and enjoying sunset views. Overall, Kozhikode Beach is valued for its blend of history, culture, and natural beauty, making it a key attraction in the district.",
    images: [athirappily1],
    source: "(src: wikipedia)",
  },
  {
    name: "Edakkal caves",
    description:
      "Edakkal Caves are prehistoric rock shelters located on the Ambukuthi Hills in Wayanad district of Kerala. These caves are well known for their ancient petroglyphs (rock carvings), which are estimated to date back to around 6,000–3,000 BCE, making them one of the most important archaeological sites in South India.Unlike typical caves, Edakkal is a natural rock formation created by a split in a large boulder, forming a sheltered space. The walls of the cave contain carvings of human figures, animals, tools, and symbols, offering valuable insights into early human life, communication, and culture. Some of these markings are believed to have similarities with ancient scripts, indicating early forms of expression. The caves were discovered in 1890 by Fred Fawcett and are located at an elevation of about 1,200 meters above sea level. Visitors can reach the site through a short but steep trek of around 3 km, passing through hills and plantations, which adds to the experience.Today, Edakkal Caves are protected by the Kerala State Archaeology Department and attract tourists, historians, and researchers. Due to the historical importance of the carvings, access is regulated to ensure preservation. Overall, Edakkal Caves are valued for their archaeological significance, natural setting, and role in understanding prehistoric human life.",
    images: [edakkal1, edakkal2, edakkal3],
    source: "(src: sterlingholidays.com, treebo.com, sahapedia,org)",
  },
];

const facts = [
  "Keralam is often called “God’s Own Country”, a name popularized by tourism campaigns.",
  "Keralam is the 13th-most populous state in India.",
  "Keralam has the highest Human Development Index, at 0.784 in 2018; the highest literacy rate, 96.2% in 2018; the highest life expectancy, at 77.3 years; and the highest sex ratio, with 1,084 women per 1,000 men and the lowest positive population growth rate in India (3.44%).",
  "It is the least impoverished and the second-most urbanised state in the country.",
  "Keralam has a long history of international trade, and was a major center for the spice trade attracting Arabs, Chinese, and Europeans.",
  "Keralam has one of the best healthcare systems in India and high life expectancy.",
  "The state has witnessed significant emigration, particularly to the Arab states of the Persian Gulf during the Gulf Boom of the 1970s and early 1980s, and its economy relies heavily on remittances from a large Malayali expatriate population.",
  "Kathakali is a famous dance form known for its colorful makeup and storytelling.",
  "Onam celebrates the return of King Mahabali and is the biggest festival of the state.",
  "Keralam receives heavy monsoon rainfall, making it one of the greenest regions in India.",
  "Keralam cuisine is known for using coconut, rice, and spices, reflecting its tropical environment.",
  "Periyar River (244 km):The longest river in Kerala, often called the 'Lifeline of Keralam', flowing through Idukki and Ernakulam districts before emptying into the Vembanad Lake.",
  "Keralam is a global center for Ayurveda, attracting medical tourism from around the world.",
  "Keralam played a key role in the global spice trade, especially black pepper, which was once called 'Black Gold'.",
  "Kalaripayattu, practiced in Kerala, is considered one of the oldest martial arts in the world. Many people believe that Chinese Kung Fu actually has its roots in this ancient Indian art.",
  "Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is one of the prominent tourist destinations of India, with coconut-lined sandy beaches, backwaters, hill stations, Ayurvedic tourism and tropical greenery as its major attractions.",
];

const artGallery = [
  {
    title: "Kathakali",
    emoji: "🍛",
    color: "#D4883A",
    desc: "A classical dance-drama known for elaborate makeup, costumes, and storytelling",
    image: gKathakali,
  },
  {
    title: "Koodiyattam",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "One of the oldest surviving Sanskrit theatre tradition in the world",
    image: gKoodiyattam,
  },
  {
    title: "Mohiniyattam",
    emoji: "🍚",
    color: "#E8733A",
    desc: "A graceful classical dance performed by women with gentle movements",
    image: gMohiniyattam,
  },
  {
    title: "Ottamthullal",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "A solo dance with storytelling, humor, and expressive gestures",
    image: gOttamthullal,
  },
  {
    title: "Sadya",
    emoji: "🥐",
    color: "#F4E884",
    desc: "A vegetarian feast served on a banana leaf with multiple dishes",
    image: gSadya,
  },
  {
    title: "Appam",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "A soft, bowl-shaped rice pancake often eaten with curry",
    image: gAppam,
  },
  {
    title: "Puttu",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "A steamed rice and coconut dish commonly eaten for breakfast",
    image: gPuttu,
  },
  {
    title: "Fish curry",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "A spicy and tangy fish curry cooked with coconut and tamarind",
    image: gFishcurry,
  },
  {
    title: "Thalassery Falooda",
    emoji: "🥭",
    color: "#F8C840",
    desc: "A cocktail of Fruit salad, Dry fruits, Cashew-nuts, Takmania rose syrup, milk, vanilla icecream",
    image: gFalooda,
  },
  {
    title: "Chenda",
    emoji: "🌿",
    color: "#F4B830",
    desc: "A cylindrical drum played in temples and festivals with loud rhythms",
    image: gChenda,
  },
  {
    title: "Maddalam",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "A drum used in classical performances like Kathakali",
    image: gMaddalam,
  },
  {
    title: "Idakka",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "A small drum capable of producing melodic sounds",
    image: gIdakka,
  },
  {
    title: "Kasavu",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "A cream-colored fabric with golden borders used in traditional attire",
    image: gKasavu,
  },
  {
    title: "Mundum Neriyathum",
    emoji: "💃",
    color: "#E88844",
    desc: "Traditional two-piece dress worn by women with gold borders",
    image: gMundum,
  },
  {
    title: "Mundu",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "A white garment worn by men, similar to a dhoti",
    image: gMundu,
  },
];
