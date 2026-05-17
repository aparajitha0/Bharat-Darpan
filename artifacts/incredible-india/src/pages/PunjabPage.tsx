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
import punjabMap from "@assets/punjabMap.jpg";
const lohri1 = "https://i.postimg.cc/Gt12ckgn/image.png";
const lohri2 = "https://i.postimg.cc/Mprpckr2/image.png";
const lohri3 = "https://i.postimg.cc/C1bh6RhX/image.png";
const lohri4 = "https://i.postimg.cc/nc3H5bxj/image.png";
const baisakhi1 = "https://i.postimg.cc/YC4wsv89/image.png";
const baisakhi2 = "https://i.postimg.cc/mkZvNktt/image.png";
const holamoh1 = "https://i.postimg.cc/Nj2WxWfd/image.png";
const holamoh2 = "https://i.postimg.cc/50bTby5B/image.png";
const holamoh3 = "https://i.postimg.cc/Wz4yqyHg/image.png";
const holamoh4 = "https://i.postimg.cc/X7phVT5T/image.png";
const gurupurab1 = "https://i.postimg.cc/FKgCWmt0/image.png";
const gurupurab2 = "https://i.postimg.cc/cHF9WmLn/image.png";
const gurupurab3 = "https://i.postimg.cc/28bcpnRV/image.png";
const teej1 = "https://i.postimg.cc/KYFJgVK5/image.png";
const teej2 = "https://i.postimg.cc/tTv5w4Bt/image.png";
const teej3 = "https://i.postimg.cc/sxtJf0dy/image.png";
const bandi1 = "https://i.postimg.cc/TYD9NGgY/image.png";
const bandi2 = "https://i.postimg.cc/YCNxk3Xv/image.png";
const shaheedi1 = "https://i.postimg.cc/x8bKZyJd/image.png";
const rakhi1 = "https://i.postimg.cc/bw3dPSjz/image.png";
const rakhi2 = "https://i.postimg.cc/CK21By5Y/image.png";
const maghi1 = "https://i.postimg.cc/XqSYLwwV/image.png";
const maghi2 = "https://i.postimg.cc/02CyGKjw/image.png";
const karva1 = "https://i.postimg.cc/VkGspyj9/image.png";
const karva2 = "https://i.postimg.cc/Pq0XfmVw/image.png";
const golden1 = "https://i.postimg.cc/520bwPDZ/image.png";
const golden2 = "https://i.postimg.cc/9M32HczZ/image.png";
const golden3 = "https://i.postimg.cc/Kjxy4QPc/image.png";
const jallian1 = "https://i.postimg.cc/pXVHHGVD/image.png";
const jallian2 = "https://i.postimg.cc/7ZfrC52H/image.png";
const jallian3 = "https://i.postimg.cc/rp46J7g0/image.png";
const wagah1 = "https://i.postimg.cc/J72qrtMp/image.png";
const wagah2 = "https://i.postimg.cc/265QmNtH/image.png";
const wagah3 = "https://i.postimg.cc/nVg485G1/image.png";
const wagah4 = "https://i.postimg.cc/3RWvVC4r/image.png";
const qila1 = "https://i.postimg.cc/SxqgXstW/image.png";
const qila2 = "https://i.postimg.cc/KYpfs5cg/image.png";
const qila3 = "https://i.postimg.cc/NFmxFq68/image.png";
const ranjit1 = "https://i.postimg.cc/kgXx3tpZ/image.png";
const ranjit2 = "https://i.postimg.cc/PJjw6LDc/image.png";
const ranjit3 = "https://i.postimg.cc/bJXDJGmq/image.png";
const gobindgarh1 = "https://i.postimg.cc/3N1dntYQ/image.png";
const gobindgarh2 = "https://i.postimg.cc/0256b10w/image.png";
const anandpur1 = "https://i.postimg.cc/wBNMSqgV/image.png";
const anandpur2 = "https://i.postimg.cc/nztrxyLv/image.png";
const partition1 = "https://i.postimg.cc/CM75y6py/image.png";
const partition2 = "https://i.postimg.cc/xTFd8JCQ/image.png";
const partition3 = "https://i.postimg.cc/FRmr80P7/image.png";
const guru1 = "https://i.postimg.cc/SQgS12cy/image.png";
const guru2 = "https://i.postimg.cc/yxGz1RTw/image.png";
const guru3 = "https://i.postimg.cc/85P8L4Kr/image.png";
const durgiana1 = "https://i.postimg.cc/MZLkjyyP/image.png";
const durgiana2 = "https://i.postimg.cc/Sx0wgk16/image.png";
const durgiana3 = "https://i.postimg.cc/QMmwN58j/image.png";
const akaltakht1 = "https://i.postimg.cc/CMsN3YKd/image.png";
const akaltakht2 = "https://i.postimg.cc/kXMc9Z63/image.png";
const akaltakht3 = "https://i.postimg.cc/bNM2MF1j/image.png";
const jang1 = "https://i.postimg.cc/rp2Ry0h3/image.png";
const jang2 = "https://i.postimg.cc/nrrCSvzY/image.png";
const jang3 = "https://i.postimg.cc/3rfy4bS2/image.png";
const gJutti = "https://i.postimg.cc/tCLYDnHd/image.png";
const gBhangra = "https://i.postimg.cc/hG0vSCQx/image.png";
const gPhulkari = "https://i.postimg.cc/yxD8ysQn/image.png";
const gGiddha = "https://i.postimg.cc/65GQ76GK/image.png";
const gFields1 = "https://i.postimg.cc/66FvbmrQ/image.png";
const gFields2 = "https://i.postimg.cc/nhJQp9wJ/image.png";
const gSarson = "https://i.postimg.cc/kXxB1XMv/image.png";
const gKulcha = "https://i.postimg.cc/mrrkgY3b/image.png";
const gLassi = "https://i.postimg.cc/KzkYnmsd/image.png";
const gAlooparatha = "https://i.postimg.cc/QCcxy0DK/image.png";
const gBharwamirch = "https://i.postimg.cc/8PBzdKwH/image.png";
const gButterchicken = "https://i.postimg.cc/zBgJy0Vt/image.png";
const gCholebhature = "https://i.postimg.cc/Y2QrkDct/image.png";
const gDalmakhni = "https://i.postimg.cc/cJVWGwXt/image.png";
const gThali = "https://i.postimg.cc/NfpwfWp3/image.png";
const gFishfry = "https://i.postimg.cc/0QgTBxyY/image.png";
const gParandha = "https://i.postimg.cc/qq49pLnB/image.png";

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
export default function PunjabPage() {
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
                Punjab
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Bread Basket of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Chandigarh" },
                  { label: "Population", value: "2.77 Crore" },
                  { label: "Area", value: "50,362 sq km" },
                  { label: "Founded", value: "1 November 1966" },
                  { label: "Language", value: "Punjabi" },
                  { label: "Districts", value: "23 Districts" },
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
              Chandigarh
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Punjab — City Beautiful
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Punjab" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(punjabMap, "Map of Punjab")}
            >
              <img
                src={punjabMap}
                alt="Map of Punjab"
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
              Punjab is a state in northwestern India. Forming part of the
              larger Punjab region of the Indian subcontinent, the state is
              bordered by the Indian states and union territories of Himachal
              Pradesh to the north and northeast, Haryana to the south and
              southeast, Rajasthan to the southwest, Jammu and Kashmir to the
              north and Chandigarh — which is also its state capital that it
              shares with the neighbouring state of Haryana — to the east. To
              the west, it shares an international border with the identically
              named Pakistani province of Punjab. The state covers an area of
              50,362 square kilometres (19,445 square miles), which is 1.53% of
              India's total geographical area.
            </p>
            <p className="text-foreground">
              Punjabi, written in the Gurmukhi script, is the most widely spoken
              and the official language of the state. The main ethnic group are
              the Punjabis, with Sikhs (57.7%) and Hindus (38.5%) forming the
              dominant religious groups. Three of the five traditional Punjab
              rivers — the Sutlej, Beas, and Ravi — flow through the state.
            </p>
            <p className="text-foreground">
              Punjab was enriched during the height of the Vedic period, but
              declined in predominance with the rise of the Mahajanapadas. The
              region formed the frontier of initial empires during antiquity
              including Alexander's and the Maurya empires. It was subsequently
              conquered by the Kushan Empire, Gupta Empire, and then Harsha's
              Empire. Punjab came under Muslim rule c. 1000 CE, and was part of
              the Delhi Sultanate and the Mughal Empire.
            </p>
            <p className="text-foreground">
              Sikhism, based on the teachings of Sikh Gurus, emerged between the
              15th and 17th centuries. Conflicts between the Mughals and the
              later Sikh Gurus precipitated a militarisation of the Sikhs,
              resulting in the formation of a confederacy after the weakening of
              the Mughal Empire, which competed for control with the larger
              Durrani Empire. This confederacy was united in 1801 by Maharaja
              Ranjit Singh, forming the Sikh Empire.
            </p>
            <p className="text-foreground">
              The Punjab region is noted as the site of one of the earliest
              urban societies, the Indus Valley Civilisation that flourished
              from about 3000 B.C. and declined rapidly 1,000 years later,
              following the Indo-Aryan migrations that overran the region in
              waves between 1500 and 500 B.C. The rise of kingdoms and dynasties
              in Punjab is chronicled in the ancient Hindu epics, particularly
              the Mahabharata. The epic battles described in the Mahabharata are
              chronicled as being fought in what is now the state of Haryana and
              historic Punjab. The Gandharas, Kambojas, Trigartas, Andhra,
              Pauravas, Bahlikas (Bactrian settlers of the Punjab), Yaudheyas,
              and others sided with the Kauravas in the great battle fought at
              Kurukshetra. The bulk of the Rigveda was composed in the Punjab
              region between circa 1500 and 1200 BC.
            </p>
            <p className="text-foreground">
              A significant event in the late 15th century Punjab was the
              formation of Sikhism by Guru Nanak. The hymns composed by Guru
              Nanak were later collected in the Guru Granth Sahib, the central
              religious scripture of the Sikhs. The religion developed and
              evolved in times of religious persecution, gaining converts from
              both Hinduism and Islam. Mughal rulers of India tortured and
              executed two of the Sikh gurus—Guru Arjan (1563–1605) and Guru
              Tegh Bahadur (1621–1675)—after they refused to convert to Islam.
              The persecution of Sikhs triggered the founding of the Khalsa by
              Guru Gobind Singh in 1699 as an order to protect the freedom of
              conscience and religion, with members expressing the qualities of
              a Sant-Sipāhī ('saint-soldier').
            </p>
            <p className="text-foreground">
              The Sikh Empire spanned a total of over 200,000 sq mi (520,000
              km2) at its zenith. After Ranjit Singh's death in 1839, the empire
              was severely weakened by internal divisions and political
              mismanagement. This opportunity was used by the East India Company
              to launch the First and Second Anglo-Sikh Wars. The country was
              finally annexed and dissolved at the end of the Second Anglo-Sikh
              War in 1849 into separate princely states and the province of
              Punjab. Eventually, a Lieutenant Governorship was established in
              Lahore as a direct representative of the Crown.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is regarded as the "Land of Five Rivers" and is known as the
              "Granary of India" due to its high agricultural fertility. It is
              widely celebrated as the sword arm of India and a land of brave
              warriors, holding a reputation for a vibrant culture, energetic
              music (bhangra), and immense hospitality.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Punjab, mapsofindia.com)
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
        <Section title="Facts about Punjab" icon="💡">
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
            Scroll horizontally to explore Punjab's iconic foods, crafts, dance,
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
    name: "Lohri",
    tagline: "The Harvest Festival of Punjab",
    description:
      "Lohri is a midwinter folk and harvest festival that marks the passing of the winter solstice and the end of winter. It is a traditional welcome of longer days and the sun's journey to the Northern Hemisphere. It is one of the Indian harvest festivals observed on or near Makar Sankranti (in the month of Magha in the Indian calendar) and falls on the night before Maghi (in the month of Magh in the Punjabi calendar) which commonly falls on 13 January every year. A popular folklore in the Punjab region links Lohri to the tale of Dulla Bhatti. The central theme of many Lohri songs is the legend of Dulla Bhatti (Rai Abdullah Bhatti) whose father was a zamindar who lived in Punjab during the reign of Mughal Emperor Akbar. He was regarded as a hero in Punjab, for rescuing girls from being forcibly taken to be sold in slave markets of the Middle East. Among those he saved were two girls Sundri and Mundri, who gradually became a theme of Punjabi folklore. As a part of Lohri celebrations, children go around homes singing the traditional folk songs of Lohri with the 'Dulla Bhatti' name included. One person sings, while others end each line with a loud 'Ho!' sung in unison. After the song ends, the adult of the home is expected to give snacks and money to the singing troupe of youngsters. Lohri also marks the beginning of the harvest season and sunny days. The festival is celebrated by lighting bonfires, eating festive food, dancing and collecting gifts. In houses that have recently had a marriage or childbirth, Lohri celebrations will reach a higher pitch of excitement. In Punjab, people wear their brightest clothes and come to dance the bhangra and giddha to the beat of the dhol. Punjabi songs are sung, and everybody rejoices. Sarson da saag with makki di roti is usually served as the main course at a Lohri dinner. Lohri holds great importance for farmers. The bonfire is lit at sunset in the main village square. People toss sesame seeds, jaggery, sugar-candy and rewaries on the bonfire, sit around it, sing and dance till the fire dies out. Some people perform a prayer and go around the fire. This is to show respect to the natural element of fire, a tradition common in winter solstice celebrations. It is traditional to offer guests til, gajak, jaggery, peanuts and puffed rice or popcorn. Milk and water are also poured around the bonfire by Hindus to thank the Sun God and seek his continued protection.",
    images: [lohri1, lohri2, lohri3, lohri4],
    source: "(src: Wikipedia, Getty images)",
  },
  {
    name: "Baisakhi",
    tagline: "Spring harvest festival of Punjab",
    description:
      "Also called Mesadi or Basoa, marks the first day of the month of Vaisakh and is traditionally celebrated annually on 13 April or 14 April. It is seen as a spring harvest celebration primarily in Punjab and Northern India. Whilst it is culturally significant in many parts of India as a festival of harvest, Vaisakhi is also the date for the Indian Solar New Year. Historically, the festival of Vaisakhi was north India’s most important annual market. Although Vaisakhi began as a grain harvest festival for Hindus and its observance predates the creation of Sikhism, it gained historical association with the Sikhs following the inauguration of the Khalsa. People start the day with a holy bath in rivers, followed by special prayers and kirtans (hymns) at Gurdwaras. Key festivities include Nagar Kirtan processions, vibrant Bhangra/Giddha dances, and community feasts (langar). For Sikhs, in addition to its significance as the harvest festival, during which Sikhs hold kirtans, visit local gurdwaras, community fairs, hold nagar kirtan processions, raise the Nishan Sahib flag, and gather to socialize and share festive foods, Vaisakhi observes major events in the history of Sikhism and the Indian subcontinent that happened in the Punjab region. Vaisakhi as a major Sikh festival marks the birth of the Khalsa order by Guru Gobind Singh, the tenth Guru of Sikhism, on 13 April 1699. Later, Ranjit Singh was proclaimed as Maharaja of the Sikh Empire on 12 April 1801 (to coincide with Vaisakhi), creating a unified political state. Vaisakhi was also the day when British Indian Army officer Reginald Dyer ordered his troops to shoot into a protesting crowd in Amritsar, an event which would come to be known the Jallianwala Bagh massacre; the massacre proved influential to the history of the Indian independence movement.",
    images: [baisakhi1, baisakhi2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Hola Mohalla",
    tagline: "Commemorates the martial spirit of the Sikh community.",
    description:
      "It is also called Hola, is a three-day long Sikh festival which normally falls in March. It takes place on the second day of the lunar month of Chett, usually a day after the Hindu spring festival Holi, but sometimes coincides with it. Hola Mohalla is a big festive event for Sikhs around the world. The fair held during Holi and Hola at Anandpur Sahib is traditionally a three-day event but participants attend Anandpur Sahib for a week, camping out and enjoying various displays of fighting prowess and bravery, and listening to kirtan, music and poetry. For meals, which is an integral part of the Sikh institution (Gurdwara), visitors sit together in Pangats (Queues) and eat lacto-vegetarian food of the Langars. The event concludes on the day of Hola Mohalla with a long, 'military-style' procession near Takht Kesgarh Sahib, one of the five seats of temporal authority (referred as 'Panj Takht') of the Sikhs. Guru Gobind Singh, the tenth Sikh Guru built upon the story of Prahlad and founded the festival of Hola Mohalla.  Guru Gobind Singh summoned his followers to attend Anandpur on Holi when he introduced a new rally in 1680 to coincide with Holi where his followers could practice manoeuvres and combat training. However, Guru Gobind Singh organised the first procession accompanied by drums in Anandpur on 22 February 1701 A.D. The new tradition of overseeing mock battles and poetry contests at Lohgarh Fort has since spread from the town of Anandpur Sahib to nearby Kiratpur Sahib and the foothills of the Shivaliks, and to other Gurdwaras around the world. The Guru made Hola Mahalla an occasion for the Sikhs to demonstrate their martial skills in simulated battles. This was probably done to forestall a grimmer struggle against the imperial power and channeling people's energy into a more useful activity. Hola Mahalla became an annual event held in an open ground near Holgarh, a fort across the rivulet Charan Ganga, northwest of Anandpur sahib. The popularity of this festival may be judged from the fact that out of five Sikh public holidays requested by the Khalsa Diwan, of Lahore in 1889, the Government approved only two - Hola Mahalla and the birth anniversary of Guru Nanak. Hola Mahalla is presently the biggest festival at Anandpur. The Nihang are the members of the Khalsa Army known for their distinctive blue traditional robes and dumala, which are often embellished. They are prominent at the Hola Mahalla festival.",
    images: [holamoh1, holamoh2, holamoh3, holamoh4],
    source: "(src: wikipedia)",
  },
  {
    name: "Gurupurab (Guru Nanak Jayanti)",
    tagline: "Celebrates the birth of the first Sikh guru, Guru Nanak",
    description:
      "One of the most celebrated and important Sikh gurus and the founder of Sikhism, Guru Nanak is highly revered by the Sikh community. This is one of the most sacred festivals in Sikhism, or Sikhi. The festivities in the Sikh religion revolve around the anniversaries of the 10 Sikh Gurus. These Gurus were responsible for shaping the beliefs of the Sikhs. Their birthdays, known as Gurpurab, are occasions for celebration and prayer among the Sikhs. Guru Nanak, the founder of Sikhism, was born on Puranmashi of Kattak in 1469, according to the Vikram Samvat calendar in Rai-Bhoi-di Talwandi in the present Shekhupura District of Pakistan, now Nankana Sahib. It is a Gazetted holiday in India. The celebrations usually commence with Prabhat Pheris. Prabhat Pheris are early morning processions that begin at the Gurudwaras and proceed around the localities singing hymns. Generally, two days before the birthday, Akhand Path (a forty-eight-hour non-stop reading of the Guru Granth Sahib, the holy book of the Sikhs) is held in the Gurdwaras. The day prior to the birthday, a procession, referred to as Nagarkirtan, is organised. This procession is led by the Panj Pyaras (Five Beloved Ones).They head the procession carrying the Sikh flag, known as the Nishan Sahib and the Palki (Palanquin) of Guru Granth Sahib. They are followed by teams of singers singing hymns and devotees sing the chorus. There are brass bands playing different tunes and 'Gatka' teams display their swordsmanship through various martial arts and as mock battles using traditional weapons. The procession pours into the streets of the town. The passage is covered with banners and gates are decorated flags and flowers, for this special occasion. The leaders spreading the message of Guru Nanak. On the day of the Gurpurab, the celebrations commence/begin early in the morning at about 4 to 5 a.m. This time of the day is referred to as Amrit Vela. The congregation starts singing Gurbani at about 1:20 a.m., which is the actual time of birth of Guru Nanak. The celebrations culminate at around 2 a.m. The festival promotes equality, selfless service (seva), and devotion, marked by Nagar Kirtan processions and Langar. Also commemorates his teachings of 'Ik Onkar' (one God), universal brotherhood, and equality. There is also Akhand Path: 48-hour continuous reading of the Guru Granth Sahib in Gurdwaras.",
    images: [gurupurab1, gurupurab2, gurupurab3],
    source: "(src: wikipedia.com, www.sikhpa.com)",
  },
  {
    name: "Teej (Teeyan)",
    tagline: "Celebrates the onset of monsoon",
    description:
      "It is a festival celebrated throughout Punjab which is dedicated to the onset of the monsoon and focuses on daughters sisters, and mothers. The festival is celebrated during the monsoon season from the third day of the lunar month of Sawan on the bright half, up to the full moon of Sawan (about 13 days), by women. Married women go to their maternal house to participate in the festivities. In the past, it was traditional for women to spend the whole month of Sawan with their parents. Whether or not a married woman goes to her parents, brothers take a gift set to their sisters called a 'sandhara'. A sandhara includes a Punjabi Suit/sari, laddoo, bangles, mehndi (henna) and a swing.",
    images: [teej1, teej2, teej3],
    source: "(src: wikipedia)",
  },
  {
    name: "Bandi chorr divas",
    tagline:
      "Celebrated alongside Diwali to commemorate the release ofthe sixth Guru, Guru Hargobind Sahib Ji.",
    description:
      "Also known as Bandi Chhor Dihara, is a Sikh celebration of Diwali commemorating the day when the sixth Guru of Sikhs, Guru Hargobind were released from Gwalior Fort, whom Sikhs believe also freed fifty-two Rajput rajas of the Hill Chieftainships alongside him, who had been imprisoned by Mughal Emperor Jahangir. The Bandi Chhor Divas is celebrated by the lighting up of homes and Gurdwaras, celebratory processions (nagar kirtan) and langar (community kitchen). It is an important Sikh celebration along with Vaisakhi, Hola Mohalla and Gurpurab. It is one of three Sikh celebrations still calculated using the traditional Bikrami calendar, alongside Vaisakhi and Guru Nanak Gurpurab. Bandi Chhor Divas was celebrated when Guru Hargobind was released from Gwalior prison with 52 prisoners and princes holding on to his robe or cape with 52 ropes. The guru led all 52 innocent rulers to safety without any signs of war or battle. In addition to Nagar keertan (a street procession) and an Akhand paath (a continuous reading of Guru Granth Sahib), Bandi Chhor (Shodh) Divas is celebrated with a fireworks display. The Sri Harmandir Sahib, as well as the whole complex, is festooned with thousands of shimmering lights. The gurdwara organizes continuous kirtan singing and special musicians. Sikhs consider this occasion as an important time to visit Gurdwaras and spend time with their families.",
    images: [bandi1, bandi2],
    source: "(src: utsav.gov.in, Wikipedia)",
  },
  {
    name: "Shaheedi Divas",
    tagline: "Also known as Guru Tegh Bahadur martyrdom",
    description:
      "Guru Tegh bahadur was the ninth of ten gurus who founded the Sikh religion and was the leader of Sikhs from 1665 until his beheading in 1675. He was born in Amritsar, Punjab, India in 1621 and was the youngest son of Guru Hargobind, the sixth Sikh guru. Considered a principled and fearless warrior, he was a learned spiritual scholar and a poet whose 115 hymns are included in the Guru Granth Sahib, which is the main text of Sikhism. He was the founder of Anandpur Sahib in 1664. Guru Tegh Bahadur was executed on the orders of Aurangzeb, the sixth Mughal emperor, in Delhi, India. Sikh holy premises Gurudwara Sis Ganj Sahib and Gurdwara Rakab Ganj Sahib in Delhi mark the places of execution and cremation of Guru Tegh Bahadur. His day of martyrdom (Shaheedi Divas) is commemorated in India every year on 24 November. Devotees hold special Diwans (congregations) and read from the Guru Granth Sahib. Prayers are offered at Delhi’s Gurudwara Sis Ganj Sahib (site of execution) and Gurudwara Rakab Ganj Sahib (site of cremation). The celebrations include Nagar Kirtans (street processions), Langar (community meals), and kirtan singing, particularly the 'Bachittar Natak' composed by his son, Guru Gobind Singh.",
    images: [shaheedi1],
    source: "(src: wikipedia)",
  },
  {
    name: "Raksha Bandhan",
    tagline: "Also called as Rakhri / Rakhrya",
    description:
      "It is celebrated on the Shravan Purnima (full moon) day, strengthening sibling bonds through the tying of a sacred thread. Sisters tie a Rakhri (thread) on their brothers' wrists, praying for long life and well-being, while brothers offer gifts and protection. Historically, the term 'Rakhi' was used by the Sikh Khalsa Army to symbolize their promise to protect farmers and their lands. Sisters may travel to their natal homes (Pehka) to celebrate. The festival is marked by sweets, new clothes, and family gatherings. An annual fair called Rakhar Punya is held at Baba Bakala in the district of Amritsar on the occasion of Raksha Bandhan. This fair has a connection with an important event in the history of the Sikh faith. It is at this holy shrine at Baba Bakala that the famous trader Makhan Shah Lubana declared from the rooftop that he had finally found the true Guru. Guru Harkrishn while on his deathbed in Delhi clumsily uttered “Baba Bakale”. The Sikhs of the time interpreted that the Guru had predicted that his successor would be found in Baba Bakale which was earlier known as Bakkan-Wala. The trader Makhan Shah Lubana made efforts to find the true Guru as he wanted to keep his promise to donate 500 dinars to the true Guru for saving his life from the great storm. His trick to find the true Guru at Baba Bakale worked. He then started shouting from the rooftop 'Guru Ladho Rae', meaning the Guru has been found. This historic event made Baba Bakala a place of pilgrimage for the Sikhs from across the globe. And, it also made Baba Bakala the venue of the annual fair of Rakhar Punya on the festival of Raksha Bandhan. The fair brings people of diverse faiths and religions from across the country together.",
    images: [rakhi1, rakhi2],
    source: "(sec: Wikipedia)",
  },
  {
    name: "Maghi",
    tagline: "Indian harvest festival celebrated on winter solstice",
    description:
      "Maghi is a Punjabi cultural festival, the Indian harvest festival celebrated on winter solstice. Maghi falls on the first day of the month of Magh and is celebrated in Punjab, Haryana, Jammu and Himachal Pradesh. It follows on the heels of the mid-winter festival of Lohri which is marked by bonfires in North Indian fields and yards. The next morning is seen as an auspicious occasion for ritual bathing in ponds and rivers. In the ancient Indian epic the Mahabharata, it was on Maghi (Makar Sankranti) that Bhishma attained mukti (liberation) after having heard discourses about the mysteries of life and death since Kartik Purnima during the Mahabharata War. For Sikhs it is a community gathering to commemorate martyrdom of forty Sikhs (Chalis Mukte) who once had deserted the tenth and last human Guru of Sikhism, Guru Gobind Singh at Anandpur Sahib, but later rejoined the Guru and died while fighting the Mughal Empire army led by Wazir Khan in 1705. Sikhs make a pilgrimage to the site of the war, and take a holy dip in the sacred water pond of Gurdwara Sri Tootti Ganddi Sahib in Muktsar. A fair (mela) is held at Muktsar every year and called the Mela Maghi which is held in memory of the forty Sikh martyrs. Before this tradition started to commemorate the Sikh martyrs who gave their lives to protect the tenth Guru, the festival was observed and mentioned by Guru Amar Das, the third Guru of Sikhism. In Punjab, Maghi is celebrated by eating kheer such as rauh di kheer which is an old dish where rice is cooked in sugarcane juice. The dish is prepared in the evening before Maghi and is kept to cool. It is served cold next morning on Maghi with red-chili mixed curd. In some parts of Punjab, India, it is also traditional practice to eat khichdi mixed with lentils, consume raw sugarcane and jaggery, Fairs are held at many places in Punjab on Maghi. Maghi is observed across Punjab as - The beginning of the new agricultural year; A time for settling land leases and accounts; A marker of seasonal transition and renewed labour.",
    images: [maghi1, maghi2],
    source: "(src: wikipedia, incredibleindia.com)",
  },
  {
    name: "Karva Chauth",
    tagline: "Encapsulates the essence of Indian marital bonds",
    description:
      "It is a prominent, one-day festival where married women fast from sunrise to moonrise, praying for their husbands' longevity and prosperity. Traditions include pre-dawn sargi (meals), applying mehndi, dressing in red/bridal attire, listening to Katha, and breaking the fast by viewing the moon through a sieve. The day begins before dawn with a traditional meal sent by the mother-in-law, called Sargi, typically including pheni (vermicelli), sweets, fruits, and dry fruits. Women observe Strict, water-less (nir-jala) fast for the whole day starting after dawn till the moon is observed. Women dress in traditional, often bridal, red outfits, apply intricate mehndi (henna), and wear red glass bangles. In the evening, women gather to hear the traditional Karva Chauth story (Katha). They exchange baya (gifts, sweets, and pottery) with their mothers-in-law. The fast is broken at night after viewing the moon and the husband through a sieve (channi), offering water (Arghya) to the moon.",
    images: [karva1, karva2],
    source: "(src: wikipedia)",
  },
  {
    name: "",
    tagline: "",
    description:
      "Other Important festivals that are celebrated in Punjab are – Krishna Janmashtami, Mahashivratri, Sanjhi, Ram Navami, Dussehra, Diwali.",
    images: [],
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "Golden Temple",
    description:
      "The Golden Temple / Sri Harmandir Sahib is a Gurdwara located in Amritsar, Punjab. It is the pre-eminent spiritual site of Sikhism and is one of its holiest sites, alongside the Gurdwara Darbar Sahib in Kartarpur and the Gurdwara Janam Asthan in Nankana Sahib, both in Punjab, Pakistan. The sarovar (holy pool) on the site of the gurdwara was completed by the fourth Sikh Guru, Guru Ram Das, in 1577. In 1604, Guru Arjan, the fifth Sikh Guru, placed a copy of the Adi Granth in the Golden Temple and played a prominent role in its development. The gurdwara was repeatedly rebuilt by the Sikhs after they became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies. Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, and overlaid the sanctum with 24-karat gold leaf in 1830. This has led to the name the Golden Temple. Over 500 kg of gold was used during its 19th-century restoration and subsequent renovations in the 1990s. In 1984, Prime Minister Indira Gandhi sent in the Indian Army as part of Operation Blue Star, leading to the deaths of thousands of soldiers, militants and civilians, as well as causing significant damage to the gurdwara and the destruction of the nearby Akal Takht — the prime seat of authority for the Sikhs. The gurdwara complex was again rebuilt after the 1984 attack. The Golden Temple is an open house of worship for all people, from all walks of life and faiths. It has a square plan with four entrances, and a circumambulation path around the pool. The four entrances of the gurdwara symbolise the Sikh belief in equality and the Sikh view that people from all groups, castes and ethnicities are welcome at their holy place. Harmandir Sahib complex has a langar, a community-run free kitchen and dining hall. It is attached to the east side of the courtyard near the Dukh Bhanjani Ber, outside of the entrance. Food is served here to all visitors who want it, regardless of faith, gender or economic background. Vegetarian food is served and all people eat together as equals. Everyone sits on the floor in rows, which is called sangat. The meal is served by volunteers as part of their kar seva ethos. Over 100,000 meals are served at the langar every day. The gurdwara complex has been nominated as a UNESCO World Heritage Site, and its application is pending on the tentative list of UNESCO.",
    images: [golden1, golden2, golden3],
    source: "(src: Wikipedia, tripadvisor)",
  },
  {
    name: "Jallianwala Bagh",
    description:
      "It is a historic garden and memorial of national importance close to the Golden Temple complex in Amritsar, Punjab, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre that took place on the site on the festival of Baisakhi Day, 13 April 1919. The 7-acre (28,000 m2) site houses a museum, gallery and several memorial structures. The Bagh was founded by Sardar Himmat Singh Bains, Jagirdar of Alawalpur, Dhogri and other villages in the area, as well as additional villages in Gurdaspur, Multan, Kohat, and Peshawar amounting to an annual income of RS 3,00,000. Jallianwala Bagh Massacare - In 1919, in response to excluding Mahatma Gandhi from visiting Punjab, the secret deportation of Saifuddin Kitchlew and Satyapal on 10 April and the reactions to the Rowlatt Act, Punjab had witnessed attempts of Indians to gather and protest. On the morning of Baisakhi, 13 April 1919, to the sound of military drums by the cities town criers, Punjab Brigadier General R.E.H. Dyer's new rules were proclaimed. He had placed restrictions on leaving the city without a permit, banned all 'processions of any kind' and any congregation of more than four people, and announced around the city that 'any person found in the streets after 8 pm will be shot'. The announcements came at a time of noise and unusual heat, and missed key locations around the city, so that they were not widely disseminated. Dyer was subsequently informed at 12.40 pm that day that a political gathering was to be held at Jallianwala Bagh. By the time Dyer arrived with 90 Sikh, Gurkha, Baloch, Rajput troops from 2-9th Gurkhas, the 54th Sikhs and the 59th Sind Rifles, there was a crowd of 20,000; a mix of speakers, listeners, picnic-makers, men, women and children of all ages, including Hindus, Sikhs, Muslims and Christians. Dyer then ordered his troops to fire at the crowds. Approximately 1,650 rounds were fired and the number, killing and injuring many; the numbers are disputed.",
    images: [jallian1, jallian2, jallian3],
    source: "(src: wikipedia)",
  },
  {
    name: "Wagh Border",
    description:
      "The ceremony at the Attari–Wagah border is a daily ceremony that the security forces of India (Border Security Force) and Pakistan (Pakistan Rangers) have jointly followed since 1959. The drill is characterized by elaborate and rapid dance-like manoeuvres and raising legs as high as possible. It is symbolic of the brotherhood as well as the rivalry that these two nations share. The border troops exchange sweets with the opposing side during the Muslim holidays of Eid and Hindu holiday of Diwali. The flag lowering ceremony at the village of Wagah is held each evening immediately before sunset. The ceremony begins with battle calls from both sides in the form of loud screaming by the border guards. This is followed by a series of organized high kicks, stomps, and dance moves during which the opposing forces stare each other down. The event ends with a handshake of good faith being exchanged by the head guards along with the lowering of the flags. It has been a peaceful gathering with the exception of the 2014 Wagah border suicide attack claimed by three outlawed rival Islamist groups in which 60 people were killed and over 110 people were left injured. It has also been cancelled on occasion such as when Pakistan returned Wing Commander Abhinandan Varthaman back to India after his plane was shot down by the Pakistan Air Force (PAF) during the 2019 India–Pakistan standoff. It was also stalled for several days from 8 May 2025 due to the 2025 Pahalgam terrorist attack which killed 26 civilians.",
    images: [wagah1, wagah2, wagah3, wagah4],
    source: "(src: wikipedia)",
  },
  {
    name: "Qila Mubarak",
    description:
      "Qila Mubarak is a fortress of Sikh architecture in Patiala, Punjab, India. It was the residential palace of the Maharaja of Patiala. Much of the fortress is closed-off to public access, including its Shish Mahal. However, there is public access to the Darbar Hall (now a museum), Sarad Khana, Jalau Khana, and cannon-barrels on-display. Qila Mubarak was first built as a 'Kachigarhi' (Mud fortress) by Sidhu Jat ruler Baba Ala Singh in 1763, who was the founder of the Patiala branch of the Phulkian dynasty. Later, it was reconstructed in baked bricks. It is said that the original fort created in 1763 was an extension built on top of an already existing Mughal fortress built by governor Hussain Khan in Patiala. The interior portion of Qila, which is known as Qila Androon is built by Maharaja Amar Singh. Qila Mubarak was first built as a 'Kachigarhi' (Mud fortress) by Sidhu Jat ruler Baba Ala Singh in 1763, who was the founder of the Patiala branch of the Phulkian dynasty. Later, it was reconstructed in baked bricks. It is said that the original fort created in 1763 was an extension built on top of an already existing Mughal fortress built by governor Hussain Khan in Patiala. The interior portion of Qila, which is known as Qila Androon is built by Maharaja Amar Singh.",
    images: [qila1, qila2, qila3],
    source: "(src: wikipedia)",
  },
  {
    name: "Maharaja Ranjit Singh War Museum",
    description:
      "The largest city in the state of Punjab, Ludhiana boasts of housing one of the most popular places to see in the state – Maharaja Ranjit Singh War Museum. Spreading across four acres in area, this museum came into existence in the year 1999. The Punjab Government constructed the museum as a gesture of tribute to the courageous soldiers who struggled and laid their lives during various wars and battles that have been fought so far. Keeping up the museum with the International standards was the prime focus of the Government of Punjab. A majestic statue of Maharaja Ranjit Singh sitting proudly on a throne welcomes you as you enter the museum. It has 12 galleries with exhibits of different divisions like the Ancient History Gallery, Post Independence History Gallery, War Hero Gallery, Air Force and Navy Gallery etc. The main hall displays pictures of the various Chakra winners, Chief Marshals, Generals and Admirals of Punjab. Two glorious lawns exhibit trophies of the Navy, Army and Air Force. A major attraction of this museum is the light and sound show which narrates the story of war of independence and the role of the gallant soldiers of Punjab in it. The show also creates a sense of nationalism among the people. You can also have a look at the number of battle tanks, Anti-aircraft guns, an old Sukhoi and an INS Vikrant model placed around the museum for the visitors to see. The Government of Punjab has been spending a good amount of money for the maintenance of the Maharaja Ranjit Singh War Museum to immortalize the memories of independence. This conscientious effort definitely calls for a visit to this honorable museum.",
    images: [ranjit1, ranjit2, ranjit3],
    source: "(src: wikipedia, Incredible India)",
  },
  {
    name: "Gobindgarh Fort",
    description:
      "Gobindgarh Fort is a historic military fort located in the center of the city of Amritsar in the Indian state of Punjab. The Fort was until recently under the Indian Army, but was opened to the public on 10 February 2017. Today the fort is being developed as a museum and theme park, as a repository of Punjab’s history. Popularly known as the Bhangian da Killa (fort of the Bhangis) after its 18th- century founder belonging to Bhangi Misl of Dhillon Jats rulers. Maharaja Ranjit Singh renamed it in the early 19th-century after the 10th Sikh guru, Guru Gobind Singh. Gobindgarh Fort is located on the south west fringe of Amritsar, in a square pattern, with a perimeter of 1,000 m and made up entirely of bricks and lime. The fort had 25 cannons mounted on its ramparts and it remained with the Bhangi rulers till 1805. From the middle of the 19th century until Indian independence in 1947, it was occupied by the British army who made numerous defensive improvements to the fort to take account of technological advances in weaponry. The fort was originally built by Dhillon Jat Misldar (militia chief) Gujjar Singh Banghi of Bhangi Misl, the local chieftain in the 18th century. Bhangi Misl was conquered and enhanced in the early 19th century by Maharaja Ranjit Singh who renamed it after the 10th Sikh guru, Guru Gobind Singh. It is made of bricks and lime and is laid out in a square. Each of its corners has a parapet and two doors. It had 25 cannons mounted on its ramparts and has four bastions. The main entrance, Nalwa Gate, is named after Hari Singh Nalwa. Keller Gate is the back entrance. A tunnel runs towards Lahore. There were 25 cannons, originally, in the fort. The three bastions connected through a rampart depict positive values in the structure of a common thread. These include the spiritual basis for martial traditions, a multi-cultural ethos, progressive, creative and pragmatic perspective, resistance to tyranny and protection to weak.",
    images: [gobindgarh1, gobindgarh2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Anandpur Sahib",
    description:
      "Anandpur Sahib, also referred simply as Anandpur (lit. 'city of bliss'), is a city on the edge of the Shivalik Hills, in the Rupnagar district (Ropar) of Punjab, India. Located near the Sutlej River, the city is one of the most sacred religious places in Sikhism, being the place where the last two Sikh Gurus, Guru Tegh Bahadur and Guru Gobind Singh, lived. It is also the place where Guru Gobind Singh founded the Khalsa Panth in 1699. The city is home to Takhat Sri Kesgarh Sahib, the third of the five Takhts in Sikhism. The town was founded by the ninth Sikh guru, Guru Tegh Bahadur. The city is a pilgrimage site in Sikhism. It is the venue of the largest annual Sikh gathering and festivities during the Hola Mohalla in the spring season. Anandpur Sahib was founded in June 1665 by the ninth Sikh Guru, Guru Tegh Bahadur. Gurinder Singh Mann states that Guru Tegh Bahadur established Anandpur in 1684. He previously lived in Kiratpur, but given the disputes with Ram Rai – the elder son of Guru Har Rai and other sects of Sikhism, he moved to village in Makhoval. He named it Chakk Nanaki after his mother, and became a prominent Dharamshal (Gurdwara plus self-sufficient village), consisting of tent encampments, vernacular clay/adobe straw-thatched round hutments (Bunga) and small orchards and gardens in between the heavily forested hilly area and besides a stream and waterfall, (located in the area currently marked by Gurdwara Bhora Sahib). In 1675, Guru Tegh Bahadur was tortured and beheaded for refusing to convert to Islam under the orders of the Mughal Emperor Aurangzeb, a martyrdom that led Sikhs to rename the town to Anandpur and crown his son Gobind Das as per his orders (also known as Gobind Rai) as his successor and famous as Guru Gobind Singh. On the Vaisakhi day of 1699, the Guru sent out invitations across the land to distant and nearby Sikh congregations to convene at Anandpur for the upcoming festival. It was normal for the Guru to celebrate Vaisakhi at Anandpur with Sikh congregations annually but this time much more importance was placed on attendance than usual and more stringently. Guru Gobind Singh founded the Khalsa Panth in Anandpur on the day of the 1699 Vaisakhi festival after an elaborate ceremony and gathered a large armed militia.",
    images: [anandpur1, anandpur2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Partition Museum",
    description:
      "The Partition Museum is a public museum located in the town hall of Amritsar, Punjab, India. The museum aims to become the central repository of stories, materials, and documents related to the post-partition riots that followed the division of British India into two independent dominions: India and Pakistan. The museum also focuses on the history of the “anti-colonial movement, the Jallianwala Bagh massacre, the Komagata Maru incident, the All India Muslim League and the Indian National Congress, and the journey of resilience and recuperation for women”. The building wherein the museum is located in Amritsar was also “once the British headquarters and a jail”. The museum was inaugurated on 25 August 2017. In 1947, British India was divided into India and Pakistan. The partition lines, drawn on a map by the British lawyer Cyril Radcliffe, divided the province of Punjab and Bengal into two parts on the basis of religion. As a result, millions of people found themselves on the wrong side of the border overnight. According to various estimates, more than 800,000 Muslims, Hindus, and Sikhs were killed in the riots that followed the partition between August 1947 to January 1948. Additionally, more than 1,400,000 people became refugees. The Government of Punjab founded this museum with The Arts and Cultural Heritage Trust of the United Kingdom as a way to memorialize those who were affected by the partition. Therefore, the museum documents the catastrophic history of migration, loss of life and livelihood through testimonies of the first-generation partition survivors and their lived experiences. Based on extensive oral testimonies from individuals who witnessed the partition, the experiences of their family members, and material memories (the various objects that individuals managed to migrate with - be it jewelleries, clothes, or cooking utensils), the museum provides a platform for the younger generations to know the aftermath of what has been dubbed as one of the cataclysmic events in the recent history of the Indian subcontinent.",
    images: [partition1, partition2, partition3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Guru ke Mahal",
    description:
      "Nestled in the heart of Amritsar, just a short distance from the iconic Golden Temple lies Gurudwara Guru Ka Mahal – a treasure trove of Sikh history and spiritual significance. Step inside this revered shrine and embark on a journey through the lives of the Gurus. Built in 1573 AD by Guru Ram Das Ji, the fourth Sikh Guru, Gurudwara Guru Ka Mahal, was originally a humble dwelling. This historic site served not only as the residence of Guru Ram Das Ji, the founder of Amritsar but also witnessed several pivotal moments in Sikh history. Here, Guru Arjan Dev Ji, the fifth Guru, was married and later appointed as the spiritual leader. This very place also holds the distinction of being the birthplace of Baba Atal Rai and Guru Tegh Bahadur Ji, the ninth Guru. Over time, the residence was expanded and transformed into the revered Gurudwara we see today, a testament to the enduring legacy of the Gurus. More than just a historical site, Gurudwara Guru Ka Mahal is a vibrant hub of faith and community. Observe the daily rituals, or join in the special divan (religious gatherings) and langar (community kitchen) held on the first Sunday of every Bikrami month. The gurudwara also commemorates the birth anniversary of Guru Tegh Bahadur Ji with great enthusiasm on Baisakhi, a lively harvest festival. These community activities make the gurudwara a place of shared faith and celebration, fostering a sense of belonging and unity.",
    images: [guru1, guru2, guru3],
    source: "(src: Wikipedia, NDTV)",
  },
  {
    name: "Shri Durgiana Temple",
    description:
      "Durgiana Temple or Shri Durgiana Mandir is a Hindu temple situated in the city of Amritsar in Punjab, India. Though a Hindu temple, its architecture is similar to the Sikh Harmandir Sahib (Golden Temple). The temple derives its name from the Goddess Durga, the chief Goddess who is worshipped here. Murtis of Lakshmi and Vishnu are also located and worshipped in the temple. Although it is believed that Durgiana Mandir was built in 1921, the temple existed before it was rebuilt in 1921. It is confirmed by record in Amritsar District Gazetteer of 1893, which spoke about the Durgiana Sarovar and 'Devi dwara' surrounding it which was visited by Hindu pilgrims. The architecture of Sri Durgiana Temple is similar to Shri Harmandir Sahib. It was built in 1921 by Guru Harsai Mal Kapoor in the architectural style of the Sikh Shri Harmandir Sahib (Golden Temple). Harsai Mal was a descendant of Prithi Chand and hence Guru Ram Das. The grandchildren of Harsai Mal Kapoor is currently living in amritsar and one of caretakers of the idol of Harsai mal Kapoor. The temple is built in the middle of a sacred lake, which measures 160 metres (520 ft) × 130 metres (430 ft). Its dome and canopies are similar to that of the Golden temple of Sikh religion, also located in Amritsar. A bridge provides the approach to the temple. The dome of the temple is gilded. Marble is used extensively in the temple's features. The dome is illuminated with colourful lights. The temple is sometimes called Silver temple because of its large exquisitely designed silver doors. It has a rich collection of Hindu scriptures. The temple complex also has some historic subsidiary temples such as Seetla Mata and Bara Hanuman.",
    images: [durgiana1, durgiana2, durgiana3],
    source: "(src: wikipedia, shri durgiana tirth(amitsar))",
  },
  {
    name: "Sri Akal Takht Sahib",
    description:
      "Akal Takht means ‘Throne of the Timeless’, also historically known as ‘Akal Bunga’, is the most prominent of the five takhts (seats of authority) of the Sikhs. Located within the Darbar Sahib (Golden Temple) complex in Amritsar, Punjab, India, it was established by Guru Hargobind in 1606 as a place to uphold justice and address temporal matters. The Akal Takht represents the highest seat of earthly authority for the Khalsa, the collective body of initiated Sikhs and serves as the official seat of the jathedar, the supreme spokesperson and head of the Sikhs worldwide. The position of the jathedar is currently disputed between two factions. The Shiromani Gurdwara Parbandhak Committee (SGPC) appointed Giani Kuldip Singh Gargaj as the acting jathedar in 2025. However, the Sarbat Khalsa, organised by several Sikh organisations in 2015, had earlier declared Jagtar Singh Hawara as the jathedar. Originally known as the Akal Bunga,[7] the building directly opposite the Harmandir Sahib was founded by the sixth Sikh Guru, Guru Hargobind, as a symbol of political sovereignty, and where the spiritual and temporal concerns of the Sikh people could be addressed. Along with Baba Buddha and Bhai Gurdas, the sixth Sikh Guru built a 9-foot-high concrete slab. When Guru Hargobind revealed the platform on 15 June 1606, he put on two swords: one indicated his spiritual authority (piri) and the other, his temporal authority (miri). According to Kanwarjit Singh Kang, the platform raised by Guru Hargobind was built in 1609, a later dating.",
    images: [akaltakht1, akaltakht2, akaltakht3],
    source: "(src: wikipedia)",
  },
  {
    name: "Jang-e-aazadi memorial",
    description:
      "Jang-e-Azadi Memorial (lit. 'Battle for Freedom Memorial') is a memorial and museum in Kartarpur town (near the city of Jalandhar) in Jalandhar district of Punjab, India, in memory of contribution and sacrifices made by the Punjabi community in Indian independence movement. The memorial was built over an area of 25 acres at the cost of ₹300 crore. Punjab chief minister Parkash Singh Badal laid the foundation stone of the Jang-e-Azadi memorial on 19 October 2014, and actual work started on 26 March 2015. A committee of historians, journalists and intellectuals was constituted to finalize the action plan and concept of the memorial to be built up.",
    images: [jang1, jang2, jang3],
    source: "(src: Wikipedia)",
  },
];

const facts = [
  "It is the 19th-largest Indian state by area out of 28 Indian states.",
  "Punjab is the 16th-largest Indian state by population, comprising 23 districts.",
  "At present, the economy of Punjab is the 15th-largest state economy in India with ₹8.02 trillion (US$95 billion) in gross domestic product and a per capita GDP of ₹264,000 (US$3,100), ranking 17th among Indian states.",
  "It is the ninth-highest ranking among Indian states in human development index.",
  "Punjabi is the native and sole official language of Punjab and, as of the 2011 census, was spoken as a first language by 24.9 million people, or roughly 90% of the state's population.[2] Hindi is spoken by 2.18 million, or 7.9% of the population, Bagri has 234,000 speakers (or 0.8%), while the remaining 413,000 (or 1.5%) spoke other languages.",
  "The largest cultivated crop is wheat. Other important crops are rice, cotton, sugarcane, pearl millet, maize, barley and fruit.",
  "Punjab makes up for about 15–20% of India's wheat production, around 12% of its rice production, and around 5% of its milk production, being known as India's breadbasket.",
  "The state has been awarded the National Productivity Award for agriculture extension services for ten years, from 1991 to 1992 to 1998–99 and from 2001 to 2003–04.",
  "The city of Amritsar is home to the craft of brass and copper metalwork done by the Thatheras of Jandiala Guru, which is enlisted on the UNESCO's List of Intangible Cultural Heritage.",
  "Punjab, known as the 'Land of Five Rivers' (Sutlej, Beas, Ravi, Chenab, and Jhelum).",
  "Chandigarh is the joint capital of Punjab and Haryana.",
  "Kapurthala is known for its historic, European-style architecture, often referred to as the 'Paris of Punjab'.",
  "The city of Ludhiana is a major hub for the bicycle industry and is often called the 'Manchester of India'.",
  "The Harike Wetland is a significant Ramsar site, providing a home to many bird species, including the endangered Siberian crane.",
  "In the Rig-Veda, Punjab was referred to as Sapta Sindhu (Land of Seven Rivers).",
];

const artGallery = [
  {
    title: "Jutti",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Traditional Footwear",
    image: gJutti,
  },
  {
    title: "Bhangra",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Folk Dance",
    image: gBhangra,
  },
  {
    title: "Phulkari Dupatta",
    emoji: "🍚",
    color: "#E8733A",
    desc: "Traditional wear",
    image: gPhulkari,
  },
  {
    title: "Giddha Dance",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "A Folk dance",
    image: gGiddha,
  },
  {
    title: "Fields of Punjab",
    emoji: "🥐",
    color: "#F4E884",
    desc: "",
    image: gFields1,
  },
  {
    title: "Fields of Punjab",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "Cold dessert drink with milk, almond gum, ice cream",
    image: gFields2,
  },
  {
    title: "Sarson da saag, Makki di roti",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "A traditional Punjabi dish featuring spiced mustard greens (saag) and flatbread made from maize flour (roti)",
    image: gSarson,
  },
  {
    title: "Amritsari Kulcha",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "It is crisp as well as soft leavened bread which is stuffed with boiled and mashed potatoes and spices",
    image: gKulcha,
  },
  {
    title: "Amritsari lassi",
    emoji: "🥭",
    color: "#F8C840",
    desc: "It is a thick, creamy, and refreshing yogurt-based drink from Punjab, served chilled, often garnished with saffron and chopped nuts",
    image: gLassi,
  },
  {
    title: "Aloo Paratha",
    emoji: "🌿",
    color: "#F4B830",
    desc: "",
    image: gAlooparatha,
  },
  {
    title: "Bharwa Shimla Mirch",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "Consists of whole green bell peppers (capsicums) stuffed with a savory, spiced filling—commonly mashed potatoes (aloo), paneer, or minced meat—and then pan-fried or roasted until tender",
    image: gBharwamirch,
  },
  {
    title: "Butter Chicken",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "",
    image: gButterchicken,
  },
  {
    title: "Chole Bhature",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "",
    image: gCholebhature,
  },
  {
    title: "Dal Makhni",
    emoji: "💃",
    color: "#E88844",
    desc: "Modern variation of traditional lentil dishes, it is made with urad dal (black beans) and other pulses, and includes butter and cream (makhani is a Punjabi word for butter",
    image: gDalmakhni,
  },
  {
    title: "Punjabi Thali",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "",
    image: gThali,
  },
  {
    title: "Amritsari Fish Fry",
    emoji: "🍲",
    color: "#F4D89C",
    desc: "",
    image: gFishfry,
  },
  {
    title: "Parandha",
    emoji: "🥣",
    color: "#D4884A",
    desc: "It is a traditional hair accessory from Punjab—often made of silk threads, beads, and tassels—that is braided into the end of a long plait to add length, volume, and decoration. It acts as a colorful, decorative hair extension worn during weddings, festivals, and folk dances",
    image: gParandha,
  },
];
