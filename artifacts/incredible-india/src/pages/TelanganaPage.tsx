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
import telanganaMap from "@assets/telanganaMap.jpg";
const Bathukamma1 = "https://i.postimg.cc/bwBYbhZK/image.png";
const Bathukamma2 = "https://i.postimg.cc/wBRqQGJy/image.png";
const Bathukamma3 = "https://i.postimg.cc/KzXZqDrq/image.png";
const Bonalu1 = "https://i.postimg.cc/D0n7FfNm/image.png";
const Bonalu2 = "https://i.postimg.cc/mkjBrfx0/image.png";
const Bonalu3 = "https://i.postimg.cc/rwKMqPfg/image.png";
const Bonalu4 = "https://i.postimg.cc/pdjvFnb8/image.png";
const Jathara1 = "https://i.postimg.cc/wjy8CsBS/image.png";
const Jathara2 = "https://i.postimg.cc/Jn8fH65p/image.png";
const Jathara3 = "https://i.postimg.cc/x8TBtXhD/image.png";
const Jathara4 = "https://i.postimg.cc/Y2b5jxLr/image.png";
const Sankranti1 = "https://i.postimg.cc/Hk7RZDZx/image.png";
const Sankranti2 = "https://i.postimg.cc/6QrSKVNJ/image.png";
const Sankranti3 = "https://i.postimg.cc/qRQ5hkRx/image.png";
const Sankranti4 = "https://i.postimg.cc/4NYSyRTd/image.png";
const Sankranti5 = "https://i.postimg.cc/bwbV00rX/image.png";
const Ugadi1 = "https://i.postimg.cc/0NsWV6KV/image.png";
const Ugadi2 = "https://i.postimg.cc/k5vjznxn/image.png";
const Deepavali1 = "https://i.postimg.cc/zBDd19jK/image.png";
const Deepavali2 = "https://i.postimg.cc/xCs6jtxg/image.png";
const Deepavali3 = "https://i.postimg.cc/gjnNx81Y/image.png";
const Deepavali4 = "https://i.postimg.cc/v8N0p2xC/image.png";
const Deepavali5 = "https://i.postimg.cc/3J0t7jgg/image.png";
const Dasara1 = "https://i.postimg.cc/wjTcMhNk/image.png";
const Dasara2 = "https://i.postimg.cc/j5NymvVW/image.png";
const Dasara3 = "https://i.postimg.cc/xT9LpK68/image.png";
const Charminar1 = "https://i.postimg.cc/k5NnHtj1/image.png";
const Charminar2 = "https://i.postimg.cc/br58n0Jt/image.png";
const Charminar3 = "https://i.postimg.cc/Dfp7Rhgc/image.png";
const Charminar4 = "https://i.postimg.cc/NfWBfxZF/image.png";
const GolcondaFort1 = "https://i.postimg.cc/Dzhh1wv3/image.png";
const GolcondaFort2 = "https://i.postimg.cc/0Q2qHXKw/image.png";
const GolcondaFort3 = "https://i.postimg.cc/cCvGdKmQ/image.png";
const GolcondaFort4 = "https://i.postimg.cc/x1DVS1bH/image.png";
const GolcondaFort5 = "https://i.postimg.cc/W4sRhY8v/image.png";
const Chowmahallapalace1 = "https://i.postimg.cc/wvBSktnD/image.png";
const Chowmahallapalace2 = "https://i.postimg.cc/hj3NZDBc/image.png";
const Chowmahallapalace3 = "https://i.postimg.cc/gjXQfCz8/image.png";
const Chowmahallapalace4 = "https://i.postimg.cc/kX8XSZQn/image.png";
const RamappaTemple1 = "https://i.postimg.cc/9fxWVjhb/image.png";
const RamappaTemple2 = "https://i.postimg.cc/xChnJyqX/image.png";
const WarangalFort1 = "https://i.postimg.cc/T1bGrLDT/image.png";
const WarangalFort2 = "https://i.postimg.cc/hPFKKrkt/image.png";
const WarangalFort3 = "https://i.postimg.cc/XvvbsDCF/image.png";
const WarangalFort4 = "https://i.postimg.cc/44cT2cmr/image.png";
const ThousandPillarTemple1 = "https://i.postimg.cc/VkKy0BV6/image.png";
const ThousandPillarTemple2 = "https://i.postimg.cc/8CYqtkGq/image.png";
const LaknavaramLake1 = "https://i.postimg.cc/SQCwfpvD/image.png";
const LaknavaramLake2 = "https://i.postimg.cc/vHvkCtM9/image.png";
const KuntalaWaterfalls1 = "https://i.postimg.cc/4xNqGHx3/image.png";
const KuntalaWaterfalls2 = "https://i.postimg.cc/s2MLQFWH/image.png";
const BasaraSaraswathiTemple1 = "https://i.postimg.cc/DwMjKCN4/image.png";
const BasaraSaraswathiTemple2 = "https://i.postimg.cc/R0JPC7rp/image.png";
const BasaraSaraswathiTemple3 = "https://i.postimg.cc/hjF2XXcc/image.png";
const NirmalFort1 = "https://i.postimg.cc/C1jmkwx4/image.png";
const yadagiriguttatemple1 = "https://i.postimg.cc/rFyQRXXz/image.png";
const yadagiriguttatemple2 = "https://i.postimg.cc/4xmPw63H/image.png";
const BhongirFort1 = "https://i.postimg.cc/cJ3mGdYb/image.png";
const BhongirFort2 = "https://i.postimg.cc/vBdvQCtD/image.png";
const Pillalamarri1 = "https://i.postimg.cc/pTYJyk0b/image.png";
const BhadrachalamTemple1 = "https://i.postimg.cc/Kcf52qkz/image.png";
const BhadrachalamTemple2 = "https://i.postimg.cc/52hB3DT1/image.png";
const BhadrachalamTemple3 = "https://i.postimg.cc/mDRQxCTc/image.png";
const BhadrachalamTemple4 = "https://i.postimg.cc/tT5F9JTQ/image.png";
const NagarjunaSagarDam1 = "https://i.postimg.cc/bvLvJtQ9/image.png";
const NagarjunaSagarDam2 = "https://i.postimg.cc/tTMCdGvp/image.png";
const NagarjunaSagarDam3 = "https://i.postimg.cc/c1PfZpxp/image.png";
const gHyderabadiBiryani = "https://i.postimg.cc/Z5Wk3ytN/image.png";
const gSarvaPindi = "https://i.postimg.cc/nc5RyRgB/image.png";
const gSakinalu = "https://i.postimg.cc/3NzXc6Nm/image.png";
const gOgguKatha = "https://i.postimg.cc/7ZFk4vKL/image.png";
const gDappu = "https://i.postimg.cc/FHHSxNDn/image.png";
const gNadaswaram = "https://i.postimg.cc/L6TffnB6/image.png";
const gPochampallyIkat = "https://i.postimg.cc/wxR0hc7j/image.png";
const gGadwalSaree = "https://i.postimg.cc/1XDGbBqw/image.png";
const gLangaVoni = "https://i.postimg.cc/q7g8p4KR/image.png";
const gDhotiKurta = "https://i.postimg.cc/1RDDmW8c/image.png";
const gPerini = "https://i.postimg.cc/BvjXYGt7/image.png";
const gLambadi = "https://i.postimg.cc/Z5MqyDV4/image.png";
const gCheriyal = "https://i.postimg.cc/Xq4NbM7B/image.png";
const gNirmal = "https://i.postimg.cc/yY66pzbT/image.png";

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
export default function TelanganaPage() {
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
                Telangana
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The KohiNoor of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Hyderabad" },
                  { label: "Population", value: "3.52 Crore"},
                  { label: "Area", value: "1,12,077 sq km" },
                  { label: "Founded", value: "2 June 2014" },
                  { label: "Language", value: "Telugu, Urdu" },
                  { label: "Districts", value: "33 Districts" },
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
              Hyderabad
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Telangana — The City of Nawabs
            </p>
          </div>
        </Section>

        {/* Map of Telangana — click to enlarge */}
        <Section title="Map of Telangana" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(telanganaMap, "Map of Telangana")}
            >
              <img
                src={telanganaMap}
                alt="Map of Telangana"
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
              Telangana is a state in Southern India on the Deccan Plateau bordering Maharashtra, Chhattisgarh to the north and Andhra Pradesh, Karnataka to the south. Telangana is the country's eleventh largest and twelfth most populated state. 
            </p>
            <p className="text-foreground">
             The state is governed from its capital, Hyderabad, where Telugu serves as the primary official language alongside Urdu as the second official language. This cultural landscape is further enriched by several tribal languages such as Gondi and Lambadi. Economically, Telangana has risen to hold the eighth-highest GDP among Indian states, driven largely by its role as a major hub for IT, industry, and the services sector. Furthermore, it serves as a critical administrative center for India's defense and aerospace research, hosting prominent institutions like the DRDO and Bharat Dynamics Limited. 
            </p>
            <p className="text-foreground">
              The name "Telangana" is traditionally linked to "Trilinga desha," the land of three sacred Shaivite shrines, though historian Jayadheer Tirumala Rao argues for a 2,000-year-old Gondi origin meaning "south." Historical references appear as early as the 14th century with Malik Maqbul Tilangani and in 16th-century accounts describing the region as a prosperous global trade hub. Ultimately, the term "Telangana" emerged to distinguish the Telugu-speaking regions of the Hyderabad State from Marathi-speaking areas, a name that persisted even after the Seemandhra region was ceded to the British. 
            </p>
            <p className="text-foreground">
              Throughout antiquity and the Middle Ages, Telangana was governed by several major Indian empires, including the Mauryas, Satavahanas, Chalukyas, and the Kakatiyas, before coming under the rule of various Sultanates and later the Mughals and the Nizams of Hyderabad. In 1823, the Nizams ceded coastal and inland territories to the British, transforming Hyderabad into a landlocked princely state. After Indian Independence in 1947, the state joined the Union of India following police action in 1948 and was eventually merged with Andhra State in 1956 to form Andhra Pradesh. 
            </p>
            <p className="text-foreground">
              Despite this merger, a persistent peasant-driven movement for separation began in the early 1950s, finally resulting in the achievement of statehood on 2 June 2014. Historically, the region is also famous for the city of Golconda, which served as the world’s premier diamond trading center until the late 19th century. This legacy made "Golconda Diamonds" globally synonymous with the finest gems, underscoring the region's long-standing economic and historical significance. 
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It stands as the vibrant bridge between the North and South, where the rugged grandeur of the Deccan meets a legacy of royal sophistication. Its landscape is adorned with the architectural marvels of the Kakatiyas, the regal splendor of the Nizams, and the spiritual serenity of ancient Buddhist sites, all woven into a society that celebrates a seamless fusion of diverse cultures and languages.
            </p>
            <p className="text-xs text-muted-foreground">
              (src:mapsofindia.com)
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
        <Section title="Facts about Telangana" icon="💡">
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
            Scroll horizontally to explore Telangana's iconic foods, crafts,
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
    name: "Bathukamma",
    tagline: "Celebrating the Spirit of Womanhood.",
    description:
      "Bathukamma is a vibrant nine-day floral festival celebrated primarily by the Hindu women of Telangana, symbolizing 'Mother Goddess come alive.'' Occurring annually during September and October, the festivities begin on Mahalaya Amavasya and run concurrently with Sharad Navratri, culminating in the grand 'Saddula Bathukamma'. The festival marks the transition between seasons, following the 7-day Boddemma festival which ends the monsoon, while Bathukamma heralds the beginning of autumn.The hallmark of the celebration is the creation of the Bathukamma itself—a magnificent flower stack arranged in seven concentric layers to resemble a temple gopuram. These stacks consist of unique seasonal flowers, many of which possess medicinal properties. Traditionally, brothers gather these flowers and bring them home for their mothers and sisters to arrange. The festival serves as a profound celebration of femininity and life in the Deccan region, with women and young girls dressing in traditional saris and Langa-Onis to showcase the cultural grace of the attire. Each of the nine nights carries a distinct name and ritual: Day 1: Engili pula Bathukamma . Day 2: Atukula Bathukamma . Day 3: Muddapappu Bathukamma . Day 4: Nanabiyyam Bathukamma . Day 5: Atla Bathukamma . Day 6: Aligina Bathukamma . Day 7: Vepakayala Bathukamma . Day 8: Vennela muddala Bathukamma  . Day 9: Saddhula Bathukamma . Beyond its religious significance, Bathukamma represents the cultural spirit and regional pride of Telangana. Along with Bonalu and the Sammakka Saralamma Jatara, it became a powerful symbol of a separate cultural identity during the Telangana movement, gaining even greater prominence and state-wide recognition after the formation of the state in 2014.",
    images: [Bathukamma1,Bathukamma2,Bathukamma3],
    source: "(src: Wikipedia,nripulse.com)",
  },
  {
    name: "Bonalu",
    tagline:
      "The Thanksgiving Festival of Telangana",
    description:
      "Bonalu is a traditional Hindu festival dedicated to Goddess Mahakali, celebrated with immense fervor in Hyderabad, Secunderabad, and across Telangana. The word Bonam comes from the Sanskrit Bhojanam, meaning feast or meal, symbolizing the food offering made to the Mother Goddess. The festival traces back to 1813, when a deadly plague struck Hyderabad. A military battalion stationed in Ujjain prayed to Goddess Mahakali, promising to install her idol if the plague ended. When the plague subsided, they fulfilled their vow by installing the idol of Ujjaini Mahakali in Secunderabad, marking the beginning of Bonalu. The central ritual involves women preparing offerings in earthen or brass pots filled with cooked rice, milk, jaggery, and sometimes curd. These pots are adorned with neem leaves, turmeric, vermilion, and a small lamp, then carried in procession to temples as a gesture of gratitude. Key figures include Pothuraju, regarded as the Goddess’s brother, who dances energetically to drumbeats while clearing the path for the deity’s spirit. Another highlight is the Ghatam, a decorated copper pot symbolizing the Goddess, carried in a grand procession often accompanied by an elephant. Rituals also feature Rangam, where a woman in trance delivers prophecies, and Thottelu, colorful bamboo-and-paper structures resembling temple towers offered to the Goddess. In 2014, Bonalu was declared a State Festival of Telangana. It is celebrated during the Hindu lunar month of Ashada (July–August), with major festivities at Golconda Fort, Ujjaini Mahakali Temple in Secunderabad, and the Old City of Hyderabad.",
    images: [Bonalu1,Bonalu2,Bonalu3,Bonalu4],
    source: "(src: doingsociology.com,newsd.in,The times of India,india Tv news)",
  },
  {
    name: "Sammakka Saralamma Jathara",
    tagline:
      "Medaram Jathara",
    description:
      "The Sammakka Saralamma Jathara also known as the- Medaram Jathara is one of the world's largest tribal religious congregations. Often called the 'Kumbh Mela of the South,' it is a biennial festival celebrated in the remote forest village of Medaram in the Mulugu district of Telangana, India. Unlike many mainstream festivals, it does not involve stone idols or permanent temples. Instead, it honors the bravery and sacrifice of a mother and daughter duo who fought against the unjust taxes of the Kakatiya rulers in the 13th century.The festival commemorates a 13th-century rebellion led by Sammakka and her daughter Saralamma. According to Koya tribal lore, Sammakka was a woman of extraordinary courage who married a local chieftain. When the Kakatiya rulers imposed unjust taxes during a period of severe drought, Sammakka’s family chose to fight rather than submit. After her family fell in battle, a wounded Sammakka retreated into the forest and disappeared near Chilukalagutta, leaving behind only a casket of vermilion. To the devotees, she did not die; she became a guardian goddess of the people. No Idols, Only Nature: The goddesses are represented by bamboo sticks decorated with turmeric and vermilion. There are no Vedic priests; the rituals are conducted entirely by Koya tribal priests.Offering 'Gold' (Jaggery): A unique tradition involves offering jaggery, referred to as Bangaram (Gold). Devotees often offer a quantity of jaggery equal to their own body weight to the goddesses as a sign of gratitude. Holy Dip in Jampanna Vagu: Before visiting the deities, pilgrims bathe in the Jampanna Vagu stream. This act is believed to wash away sins and heal various ailments. Edurukolla Ghattam: This is a spectacular event where the deity Sammakka is welcomed with traditional music, drums, and official government honors (including a ceremonial gunshot into the air by the Superintendent of Police). Sammakka Saralamma Jathara was declared a State Festival of Telangana to honor its historical importance and its celebration of women’s empowerment, bravery, and the enduring bond between the people and the forest.",
    images: [Jathara1,Jathara2,Jathara3,Jathara4],
    source: "(src: wikipedia,hellotravel,newsmeter,ABP news)",
  },
  {
    name: "Sankranti",
    tagline:
      "Harvesting Hopes, Celebrating Heritage.",
    description:
      "In Telangana, Sankranti or Makara Sankranti is much more than a harvest festival, it is a three-day celebration of nature, lineage, and the unique agrarian spirit of the Deccan plateau. While it shares some similarities with other South Indian states, Telangana adds its own distinct flavor through local customs and culinary traditions.The Three Days of Celebration: Bhogi: The festivities begin with the Bhogi Mantalu (ritual bonfires) at dawn. Families gather to burn old wooden items and clothes, symbolizing the discarding of past negativity to make room for new beginnings. A heartwarming tradition on this day is Bhogi Pallu, where seasonal fruits like jujubes (Regu Pallu), flower petals, and coins are showered over children to bless them and ward off the 'evil eye.'Sankranti: The main day is dedicated to the Sun God. Homes are decorated with elaborate Muggulu (rangoli) in the courtyards, often featuring Gobbemmalu—small balls of cow dung decorated with turmeric, vermilion, and flowers. This day is about family reunions and the flying of kites, which fill the skies of Hyderabad and other towns with vibrant colors.Kanuma: This day is focused on cattle, the backbone of farming. In Telangana, Kanuma is celebrated with immense fervor. Farmers bathe their bulls and cows, decorate their horns with bright colors, and offer them special prayers.The Iconic Figures of the Festival Two figures are synonymous with a traditional Telangana Sankranti:The Haridasu: Moving through the streets with a copper vessel (Akshaya Patram) on his head, the Haridasu sings devotional songs of Lord Vishnu. It is a tradition for households to offer him rice or grains as he passes, never stopping to ask but accepting what is given.The Gangireddu: These are beautifully decorated bulls led by performers who play the Nadaswaram. The bulls are trained to perform tricks and 'nod' in blessing to the households, symbolizing prosperity and a good harvest.The Telangana Menu: From Sweets to Savorie.The food in Telangana during Sankranti is a mix of tradition and indulgence. Ariselu (sweet cakes made of rice flour and jaggery) are the staple sweet, alongside Gareealu (savory lentil donuts). A unique aspect of the Telangana celebration occurs on Kanuma or the day after, known as Mukkanu. While the first two days are typically vegetarian, this day often features a grand non-vegetarian feast. It is a local custom to prepare spicy meat dishes, often enjoyed in the agricultural fields or cattle sheds, marking a joyful end to the harvest rituals.",
    images: [Sankranti1,Sankranti2,Sankranti3,Sankranti4,Sankranti5],
    source: "(src:Tha hans india,flickr,prokerala,Hyderabad mail,Times food)",
  },
  {
    name: "Ugadi",
    tagline:
      "Telugu New Year",
    description:
      'In Telangana, Ugadi marks the beginning of the Telugu New Year and is celebrated with a blend of spiritual reflection and culinary symbolism. It falls on the first day of the month of Chaitra, representing the start of the spring season and the rejuvenation of nature. The Symbolism of Ugadi Pachadi : The most defining element of the festival is Ugadi Pachadi, a unique chutney that combines six distinct flavors. Each ingredient represents a different emotion or experience that one will encounter in the coming year: 1.Neem Buds (Bitterness): For the difficulties and sadness in life. 2.Jaggery (Sweetness): For happiness and joy. 3.Green Chili (Piquancy): For moments of anger. 4.Salt (Saltiness): For fear or the "spice" of life. 5.Tamarind (Sourness): For the unpleasant or sour challenges. 6.Raw Mango (Tanginess): For surprise and new beginnings. By consuming this mixture, people symbolically accept that the upcoming year will be a mix of all these experiences, encouraging a balanced and resilient outlook. Panchanga Sravanam: A significant communal event in Telangana is the Panchanga Sravanam, or the reading of the new almanac. Families gather at temples or social centers to hear a priest or scholar predict the year ahead. These readings cover everything from general social trends and weather patterns for agriculture to individual astrological forecasts based on moon signs (Rasis). It is a moment of shared curiosity and hope for the community. Traditions and Festive Food: The day begins with a ritual oil bath, followed by decorating the entrance of the house with Mango leaves (Thoranalu) and colorful Muggulu (rangoli). Mango leaves are considered highly auspicious and represent a fruitful harvest. In terms of food, while the Pachadi is the ritual starter, the star of the Telangana Ugadi meal is often Bhakshalu (also known as Polelu or Bobbatlu). These are sweet flatbreads stuffed with a mixture of lentils and jaggery, served warm with a generous amount of ghee. Kavi Sammelanam: In cities like Hyderabad and across various districts, Ugadi is also a day for celebrating the Telugu language. Kavi Sammelanams (poetry recitals) are organized where poets gather to share new works, often blending traditional themes with contemporary social commentary. This keeps the literary heritage of the region alive and vibrant as the new year begins. ',
    images: [Ugadi1,Ugadi2],
    source: "(src: outlook india)",
  },
  {
    name: "Deepavali",
    tagline: "Festival of Lights",
    description:
      "Deepavali (Diwali) in Telangana is a vibrant festival that combines traditional Vedic rituals with unique local flavors and community bonding. While it shares the core theme of the victory of light over darkness, the Telangana celebration has several distinct elements.   Harathulu (Morning Blessings): The festival often starts very early in the morning. After a ritual oil bath, family members (particularly children) receive Harathulu—a traditional blessing with a camphor flame—from the elders.Naraka Chaturdashi: Many in the state place great importance on the day before the main Diwali, celebrating the victory of Lord Krishna and Satyabhama over the demon Narakasura. It is common to burst a few crackers at dawn on this day to symbolize the end of evil. Lakshmi Puja: On the main night, homes are illuminated with dozens of earthen diyas (clay lamps) and elaborate Muggulu (rangoli) patterns at the entrance to welcome Goddess Lakshmi, the bringer of prosperity.Traditional Food & Sweets 1.Garijalu: These are the quintessential Telangana Diwali sweets. They are crescent-shaped, deep-fried dumplings made of flour and stuffed with a delicious mixture of sugar, dry coconut, poppy seeds, and cardamom. 2.Pheni: A very popular local tradition involves eating Pheni—fine, thread-like circles of fried dough. It is typically served by crushing it into a bowl, sprinkling powdered sugar, and pouring warm milk over it.3.Murukulu & Chekkalu: For a savory crunch, households prepare Murukulu (spiral rice snacks) and Chekkalu (spicy rice crackers flavored with ginger and curry leaves).4.Ariselu: Often made during the harvest season, these jaggery-based rice cakes are a staple for festive celebrations in many homes. Games & Community Events: 1.Vaikuntapali (Snakes and Ladders): This ancient Indian board game (originally Moksha Patam) is a classic choice for families to play late into the night during the festival. 2.Ashta Chamma: A traditional board game similar to Ludo, played with shells (Gidde) instead of dice, which remains a favorite in rural and semi-urban Telangana.Kite Flying: While the main kite season is Sankranti, many in Hyderabad and surrounding districts start flying kites during the Diwali break as the skies clear up post-monsoon.Community Firework Displays: In many colonies, families gather in a central spot to watch collective firework displays, sharing sweets and greeting one another. ",
    images: [Deepavali1,Deepavali2,Deepavali3,Deepavali4,Deepavali5],
    source: "(src:Wikipedia,indiafacts.org,pinterest,99acres.com,Apartment therapy)",
  },
  {
    name: "Dasara",
    tagline:
      "Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",
    description:
      "Dasara (Vijayadashami) in Telangana is perhaps the most significant festival for the region, celebrated as a day of 'Victory' (Vijaya). It marks the culmination of the nine-day Navaratri and the grand Bathukamma festival.The Unique Ritual: Jammi Chettu & 'Gold'.Jammi Pooja: People flock to local temples or open grounds to worship the Jammi Chettu (Prosopis cineraria). According to legend, the Pandavas hid their divine weapons in this tree during their exile.Exchanging 'Gold': After the prayer, people pluck the leaves of the Jammi tree and exchange them with friends and elders. These leaves are referred to as 'Bangaram'(Gold). Alai Balai: This is a beautiful social custom where people hug each other (Alai Balai) while exchanging the Jammi leaves, symbolizing the burying of old grievances and the start of new friendships.Ayudha Puja (Worship of Tools) :  Professional Respect: Farmers clean their plows and tractors, drivers decorate their vehicles with flower garlands and lime, and professionals (like engineers or tailors) worship their laptops or machines.Decoration: Items are smeared with turmeric and vermilion dots, and pumpkins (Gummadikaya) are often broken in front of vehicles to ward off evil.The feast on Dasara is usually grand and often marks the return to non-vegetarian food after the nine days of Navaratri: Non-Veg Feast: Many households prepare Spicy Mutton Curry or Natukodi Pulusu (country chicken gravy) served with Gareealu (savory lentil donuts). Polelu/Bhakshalu: These sweet flatbreads stuffed with lentils and jaggery remain a staple for the vegetarian part of the meal.Pulagam: A simple yet ritualistic dish made of rice and green gram, often offered as Prasadam.Festive Games & Events .Pala Pitta Spotting: It is considered extremely lucky to spot a Pala Pitta (Indian Roller bird) on Dasara day. People often head to the outskirts of towns just to get a glimpse of this 'blue bird of victory.'Shami Pooja Processions: In many villages, the local deity is taken out in a grand palanquin procession (Utsavam) to the outskirts for the 'hunting' ritual (Paruveta).Effigy Burning: While the burning of Ravana effigies is common in cities like Hyderabad, the rural tradition focuses more on the Jammi ritual and the communal Alai Balai. ",
    images: [Dasara1,Dasara2,Dasara3],
    source: "(src: vidaatha,Namasthe telangana,namstegod.com,pinterest)",
  },
];

const historicalPlaces = [
  {
    name: "Charminar",
    description:
      "The Charminar, built in 1591 by Sultan Muhammad Quli Qutb Shah, is the iconic symbol of Hyderabad and a masterpiece of Indo-Islamic architecture. It was constructed as a monument of gratitude after the end of a deadly plague and designed by Iranian architect Mir Momin Astarabadi at the heart of the new city, with roads radiating in four directions. The square structure, measuring 20 meters on each side, features four grand arches and four towering minarets rising to 48.7 meters, each adorned with intricate carvings and crowned with bulbous domes. The top floor houses Hyderabad’s oldest mosque with 45 prayer spaces and a central fountain, while large clocks added in 1889 continue to mark time for the city. Legends speak of a secret tunnel linking Charminar to Golconda Fort, though its location remains a mystery. Surrounding the monument is a vibrant cultural hub: the historic Makkah Masjid, the bustling Laad Bazaar famous for bangles and pearls, and the regal Chowmahalla Palace. For over four centuries, Charminar has stood as the beating heart of Hyderabad, blending history, spirituality, and commerce into one enduring landmark.",
    images: [Charminar1,Charminar2,Charminar3,Charminar4],
  },
  {
    name: "Golconda Fort",
    description:
      'The Golconda Fort, situated about 11 kilometers from Hyderabad, is one of the grandest fortresses in India, embodying centuries of history, architectural brilliance, and legendary wealth. Originally built in the 13th century by the Kakatiya rulers, it was later expanded and fortified by the Qutb Shahi dynasty, who made it their capital. The fort sprawls across 11 kilometers, with massive ramparts, bastions, and gateways that showcase a blend of Persian, Turkish, and Indian architectural styles. Its most fascinating feature is the ingenious acoustic system: a clap at the Fateh Darwaza (Victory Gate) can be heard clearly at the Bala Hissar pavilion, nearly a kilometer away, serving as a warning system against intruders. Golconda was also the hub of the world-famous diamond trade, producing gems like the Koh-i-Noor, Hope Diamond, and the Regent Diamond, which adorned royal treasuries across the globe. Within its walls lie royal apartments, grand halls, intricate carvings, and advanced water supply systems, along with secret passages that add to its mystique. The fort’s strategic design made it nearly impregnable, with strong defenses and elevated vantage points. Today, Golconda Fort is not only a historical monument but also a cultural landmark, hosting the popular evening sound-and-light show that narrates its glorious past. Surrounded by legends and stories of valor, wealth, and architectural genius, Golconda Fort stands as a timeless symbol of Hyderabad’s rich heritage, drawing visitors from around the world to marvel at its grandeur and history.',
    images: [GolcondaFort1,GolcondaFort2,GolcondaFort3,GolcondaFort4,GolcondaFort5],
    source: "(src: Wikipedia)",
  },
  {
    name: "Chowmahalla palace",
    description:
      "The Chowmahalla Palace, located near Charminar in Hyderabad, is the current palace complex that once served as the official seat of the Asaf Jahi dynasty, the Nizams of Hyderabad. Spanning nearly 12 acres, it is a stunning example of architectural grandeur, blending Persian, Indo-Saracenic, and European styles. The palace name itself means “Four Palaces,” and true to its title, the complex is divided into four distinct palaces: Afzal Mahal, Mahtab Mahal, Tahniyat Mahal, and Aftab Mahal. At its heart lies the grand Khilwat Mubarak, the ceremonial hall where the Nizams held court and important state functions. This hall, with its ornate chandeliers, marble flooring, and intricately carved pillars, reflects the opulence of the Nizams’ reign. The palace also houses a clock tower, fountains, lush gardens, and a collection of vintage cars, arms, costumes, and artifacts that narrate the rich history of Hyderabad’s rulers. Built in the 18th century by Nizam Salabat Jung, Chowmahalla was modeled after the Shah of Iran’s palace in Tehran, symbolizing the Nizams’ aspiration to match global royalty in magnificence. The palace was the center of political and cultural life, hosting dignitaries, royal ceremonies, and lavish gatherings. Today, Chowmahalla Palace stands restored and open to the public, offering a glimpse into the regal lifestyle of the Nizams. It has been recognized with the UNESCO Asia Pacific Merit Award for cultural heritage conservation, underscoring its importance as a preserved monument. Visitors are captivated by its blend of architectural brilliance, historical artifacts, and serene courtyards, making it not just a palace but a living museum of Hyderabad’s royal past. In essence, Chowmahalla Palace continues to embody the grandeur, elegance, and legacy of the Nizams, serving as a proud reminder of the city’s rich cultural heritage and its place in history. ",
    images: [Chowmahallapalace1,Chowmahallapalace2,Chowmahallapalace3,Chowmahallapalace4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Ramappa Temple - (UNESCO World Heritage Site)",
    description:
      "The Ramappa Temple, officially known as the Rudreshwara Temple, is a UNESCO World Heritage Site located in Palampet village, Mulugu district of Telangana. Built in 1213 CE during the reign of the Kakatiya dynasty by General Recherla Rudra, it is dedicated to Lord Shiva and stands as a remarkable example of Kakatiya architecture and craftsmanship. The temple is named after its chief sculptor, Ramappa, which is unique since most temples are named after deities or patrons. Constructed with red sandstone and black basalt, the temple’s most striking feature is its lightweight floating bricks used in the roof, which reduce the weight of the structure and showcase advanced engineering of the time. The sanctum houses a majestic Shiva Lingam, while the hall and pillars are adorned with intricate carvings depicting gods, dancers, musicians, and mythical animals. The temple’s sculptures reflect a high degree of artistic excellence, with detailed depictions of women, dancers, and warriors that highlight the cultural richness of the Kakatiya era. The Nandi statue facing the sanctum is another highlight, carved with precision and grandeur. Surrounding the temple are subsidiary shrines and a ruined fortification that hint at its historic significance. The temple also demonstrates advanced drainage and foundation techniques, ensuring its survival through centuries of natural calamities. Recognized by UNESCO in 2021, the Ramappa Temple is celebrated not only for its architectural brilliance but also for its cultural importance, symbolizing the zenith of Kakatiya art and devotion. Today, it continues to attract scholars, historians, and tourists from across the world, standing as a timeless monument of Telangana’s heritage and India’s spiritual legacy.",
    images: [RamappaTemple1, RamappaTemple2],
    source: "(src:Wikipedia,educba.com)",
  },
  {
    name: "Warangal Fort",
    description:
      "The Warangal Fort, located in Warangal city of Telangana, is a monumental reminder of the glorious Kakatiya dynasty and its architectural brilliance. Built in the 13th century by King Ganapati Deva and later completed by his daughter, Queen Rudrama Devi, the fort once served as the capital of the Kakatiya rulers. Spread across 19 kilometers, the fort is renowned for its massive stone gateways known as Kirti Toranas, intricately carved with lotus motifs and mythological figures, which stand as iconic symbols of Telangana’s heritage. The fort originally had four grand gateways facing the cardinal directions, leading into a fortified city with temples, gardens, and royal residences. At its center lies the Swayambhu Temple, dedicated to Lord Shiva, which was the spiritual heart of the Kakatiya capital. The fort also housed a large stone throne platform, believed to be the seat of the Kakatiya kings. Surrounding the fort are defensive walls, bastions, and a moat that highlight the strategic military planning of the era. Though much of the fort was destroyed during invasions by the Delhi Sultanate in the 14th century, its ruins still convey the grandeur of the Kakatiya empire. The fort complex also includes remnants of palaces, audience halls, and sculptures that reflect the dynasty’s patronage of art and architecture. Today, Warangal Fort is a protected monument under the Archaeological Survey of India and continues to attract historians, archaeologists, and tourists. Its surviving gateways, temples, and sculptures stand as testimony to the cultural richness, resilience, and architectural mastery of the Kakatiyas. The fort is not just a historical site but a symbol of Telangana’s pride, embodying centuries of heritage and the enduring legacy of one of South India’s most powerful dynasties.",
    images: [WarangalFort1,WarangalFort2,WarangalFort3,WarangalFort4],
    source: "(src: Wikipedia)",
  },
  {
    name: "Thousand Pillar Temple",
    description:
      "The Thousand Pillar Temple, located in Hanamkonda near Warangal in Telangana, is one of the finest examples of Kakatiya architecture and devotion. Built in the 12th century by King Rudra Deva, the temple is dedicated to Lord Shiva, Lord Vishnu, and Lord Surya, symbolizing the harmony of different deities within one sacred space. True to its name, the temple is supported by intricately carved pillars, each adorned with detailed sculptures of gods, goddesses, dancers, and mythical creatures, reflecting the artistic brilliance of the Kakatiya dynasty. The temple’s star-shaped structure, built on a raised platform, showcases advanced engineering and aesthetic design, with the sanctum sanctorum housing the presiding deities. One of its most striking features is the massive monolithic Nandi statue, carved from black basalt, which faces the shrine of Lord Shiva and is celebrated for its exquisite craftsmanship. The temple also incorporates finely carved mandapas, perforated screens, and richly decorated ceilings, all of which highlight the dynasty’s mastery in stonework. Though the temple suffered damage during invasions in later centuries, it still retains its grandeur and continues to be a revered site for devotees and a marvel for historians and architects. The Thousand Pillar Temple is not only a place of worship but also a cultural landmark, representing the zenith of Kakatiya art, spirituality, and architectural innovation. Today, it stands as a protected monument under the Archaeological Survey of India and remains a major attraction for visitors, embodying Telangana’s rich heritage and the enduring legacy of its rulers.",
    images: [ThousandPillarTemple1,ThousandPillarTemple2],
    source: "(src:wikipedia)",
  },
  {
    name: "Laknavaram Lake",
    description:
      "The Laknavaram Lake, located in Mulugu district of Telangana, is one of the most picturesque and serene destinations in the state, often referred to as the “hidden gem” of the region. Spread across nearly 10,000 acres, this man-made lake was constructed during the reign of the Kakatiya dynasty and is surrounded by lush green forests and scenic hills, making it a perfect blend of history and natural beauty. The lake is formed by joining several small streams and is dotted with 13 tiny islands, each adding to its charm. One of its most striking features is the suspension bridge, stretching over 160 meters, which connects three islands and offers breathtaking views of the shimmering waters and dense forests. The lake’s calm waters reflect the surrounding greenery, creating a tranquil atmosphere that attracts tourists, nature lovers, and photographers alike. Apart from its scenic appeal, Laknavaram Lake also plays a vital role in irrigation, supporting agriculture in nearby villages. Visitors can enjoy boating facilities, explore the islands, and experience the peaceful environment away from the bustle of city life. The lake is especially enchanting during the monsoon season, when the water levels rise and the surrounding forests come alive with vibrant colors. With its combination of historical significance, ecological importance, and natural splendor, Laknavaram Lake stands as a symbol of Telangana’s rich heritage and environmental beauty. Today, it is not only a tourist hotspot but also a reminder of the engineering brilliance of the Kakatiya rulers, offering a perfect retreat for those seeking relaxation, adventure, and cultural connection in one destination.",
    images: [ LaknavaramLake1, LaknavaramLake2],
    source: "(src:Wikipedia,makemytrip.com)",
  },
  {
    name: "Kuntala Waterfalls",
    description:
      "The Kuntala Waterfall, located in Adilabad district of Telangana, is the highest waterfall in the state and one of its most breathtaking natural wonders. Cascading from a height of about 200 feet, it originates from the Kadam River, a tributary of the Godavari, and is nestled amidst dense forests of the Sahyadri mountain range. The waterfall is named after Shakuntala, the legendary wife of King Dushyanta from the Mahabharata, and local lore adds a romantic charm to its natural beauty. Surrounded by lush greenery, rocky terrain, and rich biodiversity, Kuntala offers a serene escape for nature lovers, trekkers, and photographers. The approach to the waterfall involves descending nearly 400 steps, which adds adventure to the journey and rewards visitors with spectacular views of the cascading waters. During the monsoon season, the waterfall is at its most majestic, with roaring waters and mist creating a magical atmosphere, while in summer it becomes gentler, allowing visitors to enjoy its calm beauty. The area around Kuntala is also home to tribal communities, whose traditions and culture enrich the experience of visiting this site. Nearby attractions include the Pochera Waterfalls and the Kadam Dam, making the region a hub for eco-tourism. The Telangana Tourism Department has developed facilities such as viewpoints, rest areas, and safety measures to ensure a comfortable visit, though the natural terrain still retains its raw charm. Kuntala Waterfall is not only a scenic spot but also an ecological treasure, supporting diverse flora and fauna and playing a vital role in the local environment. For travelers, it represents a perfect blend of adventure, relaxation, and cultural immersion. Whether one seeks the thrill of trekking, the tranquility of nature, or the joy of exploring local legends, Kuntala Waterfall offers it all. Today, it stands as a proud symbol of Telangana’s natural heritage, drawing visitors from across India and beyond to witness its grandeur and to connect with the timeless beauty of the land.",
    images: [KuntalaWaterfalls1,KuntalaWaterfalls2],
    source: "(src:distictinfo.com)",
  },
  {
    name: "Basara Saraswathi Temple",
    description:
      "The Basara Saraswathi Temple, located on the banks of the Godavari River in Nirmal district of Telangana, is one of the most revered shrines in South India and holds immense cultural, spiritual, and historical significance. Dedicated to Goddess Saraswathi, the deity of wisdom and learning, it is one of the very few temples in India where Saraswathi is worshipped, making it a unique pilgrimage site. According to legend, the sage Vyasa, along with his disciples, chose Basara as a place of penance after the Kurukshetra war. He is believed to have installed three deities—Saraswathi, Lakshmi, and Kali—using sand from the river, thus giving the temple its sacred identity. The temple is especially popular among families who bring their children here for the Aksharabhyasam ceremony, a ritual where toddlers are formally introduced to education by writing their first letters in rice or sand before the goddess. Architecturally, the temple is simple yet spiritually powerful, with a sanctum housing the idol of Saraswathi adorned with ornaments and flowers. The surrounding complex includes shrines for Lakshmi and Kali, reinforcing the temple’s significance as a center of divine feminine energy. Festivals such as Vasant Panchami and Navaratri are celebrated with great devotion, drawing thousands of devotees from across the country. The temple also has strong associations with the Kakatiya dynasty, who patronized it during their reign, ensuring its prominence in the region’s spiritual landscape. Beyond its religious importance, Basara Temple is a cultural hub, symbolizing the deep-rooted tradition of valuing knowledge and wisdom in Indian society. The serene environment of the temple, with the Godavari flowing nearby and lush greenery surrounding it, enhances the spiritual experience for pilgrims. Today, it is managed by the Endowments Department of Telangana, with facilities for devotees including guest houses, dining halls, and ritual arrangements. The temple continues to inspire generations, not only as a place of worship but also as a reminder of the timeless connection between spirituality and education. In essence, the Basara Saraswathi Temple stands as a beacon of learning, devotion, and cultural heritage, making it one of Telangana’s most treasured landmarks and a must-visit destination for seekers of wisdom and peace.",
    images: [BasaraSaraswathiTemple1,BasaraSaraswathiTemple2,BasaraSaraswathiTemple3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Nirmal Fort",
    description:
      "The Nirmal Fort, located in Nirmal town of Telangana, is a historic structure that reflects the region’s rich cultural and military heritage. Built during the reign of the Kakatiya dynasty and later strengthened under the rule of the Nizams, the fort served as a strategic defense post and a symbol of authority. Perched on a hill, it offers a commanding view of the surrounding plains, which made it an ideal location for monitoring enemy movements. The fort is constructed with large stone blocks and features bastions, gateways, and fortified walls that highlight the architectural style of medieval Deccan. Within its premises, remnants of old palaces, storage rooms, and military installations can still be seen, giving visitors a glimpse into its glorious past. The fort was also a cultural hub, as Nirmal town became famous for its artisans who created the renowned Nirmal paintings and toys, a tradition that continues to this day. Over centuries, the fort witnessed battles, political shifts, and the rise and fall of dynasties, yet it has retained its historical significance. Today, though much of the fort lies in ruins, it remains a popular tourist attraction and a proud reminder of Telangana’s heritage. Visitors are drawn not only to its historical importance but also to the panoramic views it offers of Nirmal town and the surrounding landscape. The fort stands as a testament to the resilience of the region, embodying both its martial history and artistic legacy. In essence, Nirmal Fort is more than just a military stronghold—it is a cultural landmark that connects the past with the present, symbolizing the enduring spirit of Telangana’s traditions and history.",
    images: [NirmalFort1],
    source: "(src: photos.com)",
  },
  {
    name: "Yadagirigutta temple",
    description:
      "The Yadagirigutta Temple, officially known as the Sri Lakshmi Narasimha Swamy Temple, is one of the most prominent pilgrimage centers in Telangana, located about 60 kilometers from Hyderabad in Yadadri Bhuvanagiri district. Dedicated to Lord Narasimha, an incarnation of Lord Vishnu, the temple is perched on a hillock and has been a revered spiritual destination for centuries. According to legend, sage Yadava meditated here, and Lord Narasimha appeared before him, blessing the site with divine presence. The temple is unique because it enshrines the deity in five forms—Jwala Narasimha, Gandabherunda Narasimha, Yogananda Narasimha, Ugra Narasimha, and Lakshmi Narasimha—making it a rare and powerful center of worship. Architecturally, the temple has undergone a massive transformation in recent years, with the Telangana government undertaking a grand reconstruction project to expand and beautify the complex. The new design blends traditional temple architecture with modern facilities, featuring intricately carved gopurams, spacious mandapas, and a majestic sanctum that reflects the grandeur of South Indian temple art. The temple complex also includes facilities for devotees such as accommodation, dining halls, and ritual spaces, ensuring a comfortable pilgrimage experience. Festivals like Brahmotsavam, Vaikunta Ekadashi, and Narasimha Jayanti are celebrated with great devotion, drawing thousands of devotees from across India. The temple is also significant for the ritual of Satyanarayana Vratam, performed by devotees seeking blessings for prosperity and well-being. Beyond its religious importance, Yadagirigutta Temple has become a cultural and spiritual hub, symbolizing the deep-rooted faith of Telangana’s people. The serene hill surroundings, combined with the temple’s divine aura, create an atmosphere of peace and devotion. Today, Yadagirigutta stands not only as a sacred shrine but also as a monumental example of heritage preservation and modern temple development, embodying both tradition and progress. It continues to inspire millions of devotees, scholars, and visitors, serving as a beacon of spirituality, cultural pride, and architectural brilliance in Telangana.",
    images: [yadagiriguttatemple1,yadagiriguttatemple2],
    source: "(src: Wikipedia,ar.inspiredpencil.com)",
  },
  {
    name: "Bhongir Fort",
    description:
      "The Bhongir Fort, also known as Bhuvanagiri Fort, is one of the most striking historical monuments in Telangana, built in the 10th century by the Western Chalukya ruler Tribhuvanamalla Vikramaditya VI. Rising majestically atop a monolithic rock hill nearly 500 feet high, the fort was constructed as a strategic military stronghold to safeguard the kingdom and monitor enemy movements across the Deccan plateau. Its location was chosen for its natural defensive advantage, as the massive rock formation made it nearly impregnable and provided a commanding view of the surrounding plains. The fort’s architecture reflects a blend of Chalukyan and later Qutb Shahi influences, with strong ramparts, bastions, and gateways designed to withstand invasions. Inside the fort are remnants of palaces, armories, wells, and secret passages, which highlight its role as both a defensive citadel and a royal residence. The fort also housed a large moat and underground chambers, believed to have been used for storing food and weapons during sieges. Legends suggest that the fort was connected to Golconda through hidden tunnels, adding to its mystique. Over centuries, Bhongir Fort witnessed battles and political transitions, including its capture by the Qutb Shahis and later the Mughals, before coming under the Nizams of Hyderabad. Despite partial ruin today, the fort retains its grandeur and continues to be a symbol of Telangana’s martial heritage. Visitors are drawn to its steep climb, which involves trekking up stone steps carved into the rock, leading to panoramic views of the surrounding countryside. The fort also features inscriptions in Kannada and Telugu, testifying to its historical significance and cultural diversity. Today, Bhongir Fort is a protected monument under the Archaeological Survey of India and serves as a popular tourist destination, combining adventure, history, and architectural wonder. It stands as a proud reminder of the vision of Tribhuvanamalla Vikramaditya VI, who built it not only as a fortress of defense but also as a beacon of power and resilience for his dynasty. In essence, Bhongir Fort embodies the spirit of Telangana’s past—its valor, artistry, and enduring legacy—making it one of the most remarkable landmarks in the region.",
    images: [BhongirFort1,BhongirFort2],
    source: "(src:Wikipedia,telangana360.com)",
  },
  {
    name: "Pillalamarri (Big Banyan Tree)",
    description:
      "The Pillalamarri, also known as the Big Banyan Tree, is one of the most remarkable natural wonders of Telangana, located in Mahabubnagar district. This ancient banyan tree is believed to be over 700 years old and spreads across nearly 3 acres, making it a living marvel of nature. Its sprawling branches and aerial roots form a vast canopy that resembles a forest, providing shade and shelter to thousands of visitors. The name “Pillalamarri” translates to “children’s banyan tree,” symbolizing the nurturing and protective nature of this giant tree. Beneath its shade lies a small shrine dedicated to Lord Shiva, adding a spiritual dimension to its natural beauty. The site has long been a popular tourist attraction, drawing pilgrims, nature lovers, and historians alike. The tree’s unique structure, with its interconnected roots and branches, creates natural pathways and chambers, making it feel like a maze of greenery. Over the years, the Telangana government has developed the area with facilities such as a science museum, mini-zoo, and an aquarium to enhance the visitor experience. Pillalamarri is not only a symbol of ecological heritage but also a reminder of the deep cultural connection between nature and spirituality in Indian tradition. Despite challenges like fungal infections that threatened its survival in recent years, conservation efforts have been undertaken to preserve this majestic tree for future generations. Today, Pillalamarri continues to stand as a testament to resilience, longevity, and the harmonious bond between humans and nature, making it one of the most treasured landmarks of Telangana.",
    images: [Pillalamarri1],
    source: "(src: sannidhiemerald.com)",
  },
  {
    name: "Bhadrachalam Temple",
    description:
      "The Bhadrachalam Temple, officially known as the Sri Sita Ramachandra Swamy Temple, is one of the most revered pilgrimage centers in Telangana, located on the banks of the Godavari River in Bhadradri Kothagudem district. Dedicated to Lord Rama, the temple is deeply rooted in legend and devotion, earning it the title “Dakshina Ayodhya” (Ayodhya of the South). According to mythology, this is the place where Lord Rama, Sita, and Lakshmana stayed during their exile, and it is also associated with the devotee Kancharla Gopanna, popularly known as Bhakta Ramadasu. In the 17th century, Ramadasu, who was a revenue officer under the Qutb Shahi rulers, diverted state funds to construct the temple. For this act, he was imprisoned, but legend says Lord Rama and Lakshmana appeared in the Sultan’s dream, repaid the money with golden coins, and secured Ramadasu’s release. This story adds immense spiritual significance to the temple, making it a symbol of unwavering devotion and divine intervention.Architecturally, the temple is a fine example of South Indian style, with a towering Rajagopuram, intricately carved mandapas, and sanctums dedicated to Lord Rama, Sita, and Lakshmana. The temple complex also houses shrines for Hanuman and other deities, reinforcing its spiritual aura. The annual Sri Rama Navami festival is the grandest celebration here, marked by the celestial wedding of Rama and Sita, which attracts thousands of devotees from across India. The temple is also known for its musical heritage, as the devotional songs composed by Bhakta Ramadasu continue to be sung during rituals and festivals.Beyond its religious importance, Bhadrachalam Temple is a cultural and historical landmark, symbolizing the synthesis of devotion, art, and architecture. The serene setting on the Godavari River enhances its spiritual atmosphere, offering pilgrims peace and solace. Today, the temple is managed by the Endowments Department of Telangana and remains a major destination for devotees, scholars, and tourists alike. In essence, Bhadrachalam Temple is not just a shrine but a living embodiment of faith, history, and cultural pride, standing as one of the most treasured spiritual centers in South India.",
    images: [BhadrachalamTemple1,BhadrachalamTemple2,BhadrachalamTemple3,BhadrachalamTemple4],
    source: "(src: Wikipedia,ar.inspiredpencil.com",
  },
   {
    name: "Nagarjuna Sagar Dam",
    description:
      "The Nagarjuna Sagar Dam, located on the Krishna River at the border of Nalgonda district in Telangana and Guntur district in Andhra Pradesh, is one of the largest masonry dams in the world and a monumental achievement of modern India. Constructed in the 1960s, the dam was named after the great Buddhist scholar Nagarjuna, reflecting the region’s rich cultural heritage. Rising to a height of about 124 meters and stretching over 1.6 kilometers, the dam creates a massive reservoir known as Nagarjuna Sagar Lake, which has a storage capacity of nearly 11,472 million cubic meters. This reservoir not only provides irrigation to millions of acres of farmland across Telangana and Andhra Pradesh but also serves as a crucial source of drinking water for nearby towns and cities. The dam has been instrumental in transforming the semi-arid landscape into fertile agricultural land, supporting crops like paddy, cotton, and sugarcane. Beyond irrigation, it also generates hydroelectric power, contributing significantly to the region’s energy supply. The scenic beauty of the dam and its surroundings, with lush greenery and the vast expanse of water, makes it a popular tourist destination. Nearby attractions include the Nagarjuna Konda island, which houses ancient Buddhist relics, adding historical depth to the site. Symbolizing engineering brilliance and socio-economic progress, the Nagarjuna Sagar Dam stands as a testament to India’s vision of harnessing rivers for development while preserving cultural heritage.",
    images: [NagarjunaSagarDam1,NagarjunaSagarDam2,NagarjunaSagarDam3],
    source: "(src: Wikipedia )",
  },
];

const facts = [
  "Seed Bowl of India: Telangana is often called the 'Seed Bowl of India' because it produces a huge percentage of the country’s agricultural seeds, especially for rice, maize, and cotton.",
"The Pharma Hub: Hyderabad, the capital, is known as the 'Vaccine Capital of the World' and a global hub for life sciences. It produces nearly one-third of all global vaccines.",
"The state has one of India’s largest populations of sheep and goat rearing, making it important for rural livelihoods.",
"Telangana has many artificial lakes and tanks built during the Kakatiya period for water conservation—an early example of smart water management.",
"Urdu is widely spoken along with Telugu, especially in cities like Hyderabad, reflecting the region’s cultural diversity.",
"Telangana cuisine is known for its spicy and millet-based dishes, such as jowar roti and sarva pindi.",
"Telangana is famous for Pochampally Ikat, a traditional weaving technique where threads are dyed before weaving to create patterns. ",
];

const artGallery = [
  {
    title: "Hyderabadi Biryani",
    emoji: "🍛",
    color: "#D4883A",
    desc: "World-famous aromatic rice dish cooked with spices and meat",
    image: gHyderabadiBiryani,
  },
  {
    title: "Sarva Pindi",
    emoji: "🥘",
    color: "#E8A84A",
    desc: "Spicy rice flour pancake with peanuts and traditional spices",
    image: gSarvaPindi,
  },
  {
    title: "Sakinalu",
    emoji: "🥨",
    color: "#F4D89C",
    desc: "Crispy deep-fried snack traditionally made during festivals",
    image: gSakinalu,
  },
  {
    title: "Oggu Katha",
    emoji: "📜",
    color: "#D4A4E8",
    desc: "Musical storytelling tradition narrating legends of gods and heroes",
    image: gOgguKatha,
  },
  {
    title: "Dappu",
    emoji: "🥁",
    color: "#C84830",
    desc: "Percussion instrument used in energetic folk dances and festivals",
    image: gDappu,
  },
  {
    title: "Nadaswaram",
    emoji: "🎺",
    color: "#D4A864",
    desc: "Traditional wind instrument played during auspicious ceremonies",
    image: gNadaswaram,
  },
  {
    title: "Pochampally Ikat",
    emoji: "🧵",
    color: "#E8A8C8",
    desc: "Famous tie-and-dye weaving technique creating geometric patterns",
    image: gPochampallyIkat,
  },
  {
    title: "Gadwal Saree",
    emoji: "🥻",
    color: "#A8D4B4",
    desc: "Lightweight saree featuring rich borders and silk-cotton blend",
    image: gGadwalSaree,
  },
  {
    title: "Langa Voni",
    emoji: "👗",
    color: "#F4D8E8",
    desc: "Traditional half-saree worn by young women in Telangana",
    image: gLangaVoni,
  },
  {
    title: "Dhoti Kurta",
    emoji: "👔",
    color: "#B4D8E8",
    desc: "Classic outfit worn by men during festivals and functions",
    image: gDhotiKurta,
  },
  {
    title: "Perini Shivatandavam",
    emoji: "👔",
    color: "#B4D8E8",
    desc: "A vigorous dance performed by warriors to invoke Lord Shiva before battle",
    image: gPerini,
  },
  {
    title: "Lambadi Dance",
    emoji: "👔",
    color: "#B4D8E8",
    desc: "A colorful tribal dance performed by Banjara tribe women with rhythmic movements",
    image: gLambadi,
  },
  {
    title: "Cheriyal Scroll painting",
    emoji: "👔",
    color: "#B4D8E8",
    desc: "GI-tagged, traditional storytelling art using painted scrolls to narrate folklore",
    image: gCheriyal,
  },
  {
    title: "Nirmal painting",
    emoji: "👔",
    color: "#B4D8E8",
    desc: "Decorative paintings known for golden backgrounds and mythological themes, originating from Nirmal district of Telangana",
    image: gNirmal,
  },
];