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
const haryanaMap = "https://i.postimg.cc/cJrYD6HP/image.png";
const gita1 = "https://i.postimg.cc/jdc7tyn7/image.png";
const gita2 = "https://i.postimg.cc/Nj0rML1j/image.png";
const surajkund1 = "https://i.postimg.cc/6Q22rSjD/image.png";
const surajkund2 = "https://i.postimg.cc/bJ1ZMnjL/image.png";
const teej1 = "https://i.postimg.cc/fWj3fYKG/image.png";
const teej2 = "https://i.postimg.cc/JztG8vLD/image.png";
const dhulandi1 = "https://i.postimg.cc/0QGNZqpf/image.png";
const baisakhi1 = "https://i.postimg.cc/bwGNWnxp/image.png";
const baisakhi2 = "https://i.postimg.cc/yNc6YzpG/image.png";
const gugga1 = "https://i.postimg.cc/xCQfXFWg/image.png";
const gugga2 = "https://i.postimg.cc/vTHGzx8b/image.png";
const kartik1 = "https://i.postimg.cc/c1XxJhT4/image.png";
const kartik2 = "https://i.postimg.cc/CL2wGK3g/image.png";
const lohri1 = "https://i.postimg.cc/mrfRn52s/image.png";
const lohri2 = "https://i.postimg.cc/L5bF3y0b/image.png";
const gangore1 = "https://i.postimg.cc/hj4FWWFq/image.png";
const gangore2 = "https://i.postimg.cc/pr73FmpQ/image.png";
const sanjhi1 = "https://i.postimg.cc/5NYhMSRn/image.png";
const surajkunddiwali1 = "https://i.postimg.cc/qv2WNM0S/image.png";
const surajkunddiwali2 = "https://i.postimg.cc/CKNt4PRs/image.png";
const reservoir1 = "https://i.postimg.cc/mrJdjvbk/image.png";
const reservoir2 = "https://i.postimg.cc/50zsRs0q/image.png";
const chilli1 = "https://i.postimg.cc/8cBt1sLt/image.png";
const chilli2 = "https://i.postimg.cc/MpGdS6Hv/image.png";
const asirgarh1 = "https://i.postimg.cc/pdwZzKZ9/image.png";
const asirgarh2 = "https://i.postimg.cc/FR0xZ1Wq/image.png";
const firoz1 = "https://i.postimg.cc/8cHB29VY/image.png";
const firoz2 = "https://i.postimg.cc/ncF14F4b/image.png";
const jal1 = "https://i.postimg.cc/L8hBWxQP/image.png";
const jal2 = "https://i.postimg.cc/k5bNJBm7/image.png";
const panipat1 = "https://i.postimg.cc/G2PkDV9m/image.png";
const panipat2 = "https://i.postimg.cc/x8tMxmK3/image.png";
const kabuli1 = "https://i.postimg.cc/BQnx8h3Z/image.png";
const kabuli2 = "https://i.postimg.cc/nzxmn227/image.png";
const khwaja1 = "https://i.postimg.cc/J04Bkh9x/image.png";
const khwaja2 = "https://i.postimg.cc/3rnGHgvD/image.png";
const chor1 = "https://i.postimg.cc/ncrDVCKL/image.png";
const chor2 = "https://i.postimg.cc/zGRHW6Pn/image.png";
const bhiwani1 = "https://i.postimg.cc/N0q9xD3q/image.png";
const bhiwani2 = "https://i.postimg.cc/PqWLVZH4/image.png";
const gBajraKhichdi = "https://i.postimg.cc/qv0HXC19/image.png";
const gKadhiPakora = "https://i.postimg.cc/0Nygh1RD/image.png";
const gGhevar = "https://i.postimg.cc/bvVXhVqD/image.png";
const gKurukshetra = "https://i.postimg.cc/Hn5FbpXY/image.png";
const gPhagDance = "https://i.postimg.cc/Nfq3BHv0/image.png";
const gRagini = "https://i.postimg.cc/Nf6WMjgv/image.png";
const gPhulkari = "https://i.postimg.cc/vmNKj1vb/image.png";
const gSanjhiArt = "https://i.postimg.cc/5ycR4ZTx/image.png";
const gGurugram = "https://i.postimg.cc/G3Yf7mTb/image.png";
const gSultanpurPark = "https://i.postimg.cc/vHsNpw5q/image.png";
const gChhapiaWaterfall = "https://i.postimg.cc/FHFnHbWH/image.png";
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
export default function HaryanaPage() {
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
                Haryana
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Heroes
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Chandigarh" },
                  { label: "Population", value: "2.54 Crore" },
                  { label: "Area", value: "44,212 sq km" },
                  { label: "Founded", value: "1 November 1966" },
                  { label: "Language", value: "Hindi, Haryanvi" },
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
              Capital of Haryana — The City Beautiful
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Haryana" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(haryanaMap, "Map of Haryana")}
            >
              <img
                src={haryanaMap}
                alt="Map of Haryana"
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
              Haryana, carved out of the state of Punjab on November 1, 1966,
              holds a position of profound historical and cultural significance
              in the northern part of India. The very name "Haryana" is often
              interpreted as the "Abode of God," blending the words Hari (Lord
              Vishnu) and Ayana (home), or alternatively signifying the lush
              green expanse (Haryali) that defines its fertile plains.
              Geographically, it is bordered by Punjab and Himachal Pradesh to
              the north, Rajasthan to the west and south, and Uttar Pradesh to
              the east, enveloping the national capital of New Delhi on three
              sides. This strategic location has made the region a central
              theater for Indian history since antiquity, acting as a gateway to
              the Gangetic plains and a crossroads for diverse civilizations,
              migrations, and turning points.
            </p>
            <p className="text-foreground">
              Historically, Haryana is deeply rooted in ancient Vedic
              civilization and epic lore, boasting archaeological sites like
              Rakhigarhi, which stands as one of the largest and oldest urban
              settlements of the ancient Indus Valley Civilization. The sacred
              region of Kurukshetra within Haryana is celebrated as the historic
              battlefield of the great Mahabharata war, where Lord Krishna is
              believed to have delivered the immortal spiritual discourse of the
              Bhagavad Gita to the warrior Arjuna. Over the centuries, the
              strategic plains of Panipat witnessed three monumental battles in
              1526, 1556, and 1761 that decisively altered the course of Indian
              history, shaping the rise and fall of the Mughal Empire and the
              subsequent transition of power on the subcontinent.
            </p>
            <p className="text-foreground">
              Muslims gradually strengthened their position, which led to the
              establishment of the Bahamani Sultanate, by the middle of the
              14th century. At the same time, the Vijayanagar Kingdom quickly
              consolidated itself and extended its sway over the whole of South
              India, and at the close of the century, Vijayanagar became the
              supreme power in South. However, it crumbled at the battle of
              Talikota in 1564 to the confederate forces of the Deccan Sultans.
            </p>
            <p className="text-foreground">
              The cultural fabric of Haryana is a beautiful reflection of its
              rugged, agrarian lifestyle, characterized by simplicity,
              straightforwardness, and a deep-rooted respect for community
              traditions. Folk music, vibrant dance forms, and oral storytelling
              traditions are central to celebrations, with dynamic dances like
              the Dhamal, Phag, and Loor performed enthusiastically during
              seasonal festivals like Holi and Teej to celebrate good harvests.
              The traditional theater art form known as Saang or Swang,
              featuring musical plays and open-air performances, serves as a
              vital medium for preserving historical legends, folklore, and
              moral teachings across generations. Haryanvi attire mirrors this
              rustic charm, with men traditionally wearing a white cotton dhoti,
              kurta, and a protective pagri (turban), while women wear a
              colorful ghagra (skirt), chameez (shirt), and a decorated odhnni
              (veil).
            </p>
            <p className="text-foreground">
              Linguistically, Hindi serves as the official language of the state
              and is widely used for administrative, commercial, and formal
              educational purposes across all major districts. However, the true
              soul of the region lies in Haryanvi, a vibrant, expressive dialect
              of Hindi belonging to the Western Hindi cluster, closely related
              to Braj Bhasha and Khariboli. Haryanvi is known for its
              distinctively bold, direct, and humorous cadence, and it contains
              several sub-dialects like Bangru, Mewati, and Ahirwati spoken
              across different geographic regions. Along with Haryanvi and
              Hindi, Punjabi is also spoken extensively, particularly in the
              northern districts bordering Punjab, due to historical migrations
              and shared regional ties.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Concurrently, the state has undergone rapid modern transformation,
              with cities like Gurugram evolving into premier global IT hubs and
              financial centers, beautifully blending an ancient, rich heritage
              with futuristic urban development.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of Haryana, mapsofindia.com)
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
        <Section title="Facts about Haryana" icon="💡">
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
            Scroll horizontally to explore Haryana's iconic foods, crafts,
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
    name: "International Gita Mahotsav (Kurukshetra)",
    tagline: "",
    description:
      "The International Gita Mahotsav stands as Haryana's premier socio-religious and philosophical congregation, celebrated with grand global participation in the holy city of Kurukshetra during the months of November or December. This massive festival commemorates Gita Jayanti, the auspicious day when Lord Krishna delivered the immortal spiritual sermon of the Srimad Bhagavad Gita to the warrior prince Arjuna amidst the horn blasts and clashing shields of the Kurukshetra battlefield. The core of this mega event centers around the sprawling banks of the historic Brahma Sarovar and Sannihit Sarovar, which transform into vast spiritual arenas hosting saints, scholars, pilgrims, and artists from all over the world. Over several days, the atmosphere resonates with the rhythmic chanting of all 700 verses of the Gita, mass recitations by thousands of school children, high-level philosophical seminars led by prominent scholars, and elaborate multi-media exhibitions detailing the historical and cultural impact of the epic Mahabharata. A highly anticipated highlight of the Mahotsav is the breathtaking Deepdan ceremony held on the final evening, during which hundreds of thousands of traditional clay lamps (diyas) are lit and set afloat on the sacred water tanks, turning the dark surface into a mirror of flickering light. Parallelly, a sprawling cultural fair features traditional craftsmen, sand artists, and folk theater performers who bring the ancient heritage of northern India to life. The state government actively collaborates with international partner countries and Indian partner states each year, expanding the scope of the festival to promote the Gita's timeless message of selfless duty (Nishkama Karma) to modern audiences globally.",
    images: [gita1, gita2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Surajkund International Crafts Mela (Faridabad)t",
    tagline: "",
    description:
      "The globally renowned Surajkund International Crafts Mela, held annually during the first fortnight of February in Faridabad, is a spectacular celebration of international craftsmanship, rural Indian handlooms, and live folk performances. Established in 1987 by Haryana Tourism to showcase the skilled artisans of rural India who were losing their traditional markets to industrialization, this massive festival is set against the backdrop of the ancient 10th-century Tomar-era reservoir. The mela grounds are designed to look like a traditional Indian village, featuring winding dirt paths, thatched-roof mud huts, and vibrant decorative motifs painted on the walls using natural dyes. Every year, the festival features a specific 'Theme State' of India and an 'International Partner Nation', which heavily influences the architectural design of the main entrance gates, the decoration of the central stages, and the culinary offerings in the massive food courts. Millions of domestic and international tourists walk through the sprawling venue to interact directly with master weavers, woodcarvers, terracotta potters, and metal smiths who have been awarded national honors for preserving rare heritage crafts. Throughout the day, the air is filled with the energetic beats of traditional drums, as folk dance troupes from across India’s states and global continents perform impromptu routines along the pathways and on open-air stages. As evening falls, the central open-air amphitheater hosts mega cultural nights where classical musicians, fusion bands, and international dance groups deliver world-class performances under the open sky.",
    images: [surajkund1, surajkund2],
    source: "(src: wikipedia)",
  },
  {
    name: "Teej / Sawan Utsav",
    tagline: "",
    description:
      "Teej, also celebrated as Sawan Utsav, is an exceptionally joyous and deeply personal festival observed in July or August that welcomes the arrival of the life-giving monsoon rains after months of intense summer heat across the plains of Haryana. The festival is dedicated to the celebration of nature's rebirth and the divine union of Goddess Parvati and Lord Shiva, symbolizing marital devotion, family abundance, and the enduring strength of womanhood. Across rural and urban Haryana, the landscape changes as women and young girls dress in their finest traditional attire—predominantly in shades of vibrant green to mirror the newly lush fields—and apply intricate henna (mehndi) designs to their palms. The social heart of Teej beats around the village commons and household courtyards, where massive wooden swings (jhoolas) are securely hung from the branches of ancient banyan, neem, and mango trees, decorated beautifully with seasonal flowers and leaves. Women gather in large circles to swing high into the air, singing traditional Haryanvi folk songs that narrate old romantic legends, the beauty of the rainy season, and the bittersweet feelings of leaving one's parental home after marriage. A deeply cherished family custom associated with Teej is the exchange of Kothli or Baya, a traditional gift bundle packed with love by parents and sent to their married daughters' homes, containing traditional sweets like Ghewar, handmade clothes, glass bangles, and henna. On this day, kitchens across the state fill with the rich aroma of traditional Haryanvi delicacies like puda, kheer, and sweet gulgulas, making Teej a multi-sensory celebration of community harmony, seasonal rhythm, and timeless family bonds.",
    images: [teej1, teej2],
    source: "(src: wikipedia)",
  },
  {
    name: "Dhulandi Holi & Phag (The Haryanvi Holi)",
    tagline: "",
    description:
      "Holi is celebrated with a distinct, high-energy local flavor across Haryana known as Dhulandi Holi and Phag, where the festival of colors becomes an arena for celebrating playful family relationships and deep community bonds. While the first evening begins with the traditional, solemn ritual of Holika Dahan to mark the victory of good over evil, the following day erupts into a lively celebration that focuses on the Bhabhi-Devar (sister-in-law and brother-in-law) relationship. According to this unique Haryanvi custom, sisters-in-law claim a playful right to mock-punish their brothers-in-law in retaliation for months of lighthearted teasing and for being splashed with colored water. The women roll up long, twisted strips of cloth called kolras, dip them in water, and chase the men through the village streets in a series of highly energetic and laughter-filled mock battles. The men defend themselves using only shields of water, making the entire event a grand, chaotic neighborhood spectacle that breaks down social barriers and brings communities closer together. In the public squares, large crowds gather to cheer on teams of young men who form human pyramids, climbing over one another to break an earthen pot filled with fresh buttermilk hung high between buildings, mimicking the mischievous antics of the young Lord Krishna. As the wet and colorful chaos settles by late afternoon, the community transitions into Phag, where people dress in clean clothes, visit the homes of elders to seek blessings, exchange traditional sweets like guhiya, and participate in community folk dances accompanied by the heavy, booming beats of the traditional Nagada drum.",
    images: [dhulandi1],
    source: "(src: wikipedia)",
  },
  {
    name: "Baisakhi (Pinjore)",
    tagline: "",
    description:
      "Celebrated with immense pride and color on April 13th or 14th each year, Baisakhi marks the official beginning of the joyous solar new year and serves as a massive thanksgiving festival for the agrarian communities of Haryana. The festival holds deep economic and physical significance for farmers, as it marks the successful completion of the winter agricultural cycle and the formal launch of the golden harvest for the Rabi crops, particularly wheat. For the state's significant Sikh population, Baisakhi carries a deep spiritual weight, commemorating the historic year 1699 when Guru Gobind Singh created the Khalsa Panth (the collective body of initiated Sikhs) at Anandpur Sahib, establishing a legacy of righteousness and courage. The state government hosts its grandest official Baisakhi celebrations within the historic, multi-terraced Pinjore (Yadavindra) Gardens, transforming the Mughal-era palace complex into a lively hub of Punjabi and Haryanvi folk culture. The entire garden area is decorated with bright yellow and orange marigold flowers, echoing the colors of the ripe wheat fields that blanket the surrounding countryside. Visitors flock to the venue to witness high-energy, acrobatic Bhangra and Giddha performances, enjoy martial arts displays like Gatka, and listen to traditional folk balladeers who sing of regional heroes. The festival grounds feature massive food bazaars serving authentic, heavy winter-harvest dishes like Makki di Roti and Sarson ka Saag, alongside stalls selling traditional crafts, making Baisakhi a grand celebration of hard work, community prosperity, and cultural pride.",
    images: [baisakhi1, baisakhi2],
    source: "(src: wikipedia)",
  },
  {
    name: "Gugga Naumi",
    tagline: "",
    description:
      "Gugga Naumi is a deeply rooted, fascinating folk festival celebrated across Haryana in August or September (the ninth day of the waning moon in the month of Bhadrapada) to honor the legendary warrior-saint Gugga Pir, also known as Zahir Pir. Gugga Pir is revered across religious lines by both Hindus and Muslims as a powerful folk deity who possesses the divine authority to protect his faithful devotees from venomous snake bites and skin ailments. The festival is highly unique due to its distinct, nomadic religious processions where a group of dedicated devotees, known as Bhagats, travel from village to village carrying the Gugga ki Chhari—a massive, 30-foot-tall bamboo pole beautifully wrapped in multi-colored cloths, peacock feathers, and heavy coconut shells. As the procession enters a village, the air fills with the deep, echoing beats of large copper drums called Derus, while the devotees sing intense folk ballads recounting the miraculous life, military victories, and spiritual powers of the Pir. Devotees gather around the sacred bamboo staff to offer clarified butter (ghee), jaggery, flour, and homemade sweets, praying for the safety of their families and livestock during the active monsoon months when snakes are common in fields. Many worshippers visit the saint's permanent shrines (Gugga Marhis) to perform ritual prostrations, tie sacred threads for protection, and witness the intense, trance-like spiritual dances performed by the chief priests. Gugga Naumi stands as a premier example of the rich, unwritten folk traditions of rural Haryana, demonstrating how ancient legends continue to guide the community's spiritual life and relationship with nature.",
    images: [gugga1, gugga2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Kartik Cultural Festival (Ballabgarh, Faridabad)",
    tagline: "",
    description:
      "The Kartik Cultural Festival is a premium, highly aesthetic event held in November that turns the historic town of Ballabgarh in Faridabad into a premier national center for classical Indian performing arts and architectural heritage. Initiated by the Haryana Tourism Department in cooperation with the Union Ministry of Culture, the festival was specifically designed to promote India’s classical vocal traditions, instrumental music, and traditional dance forms, while simultaneously breathing new life into historical monuments. The physical venue for this cultural gathering is the beautifully restored 18th-century Nahar Singh Mahal, a historic fort-palace built by the ancestors of the legendary King Nahar Singh, who fought valiantly during the 1857 uprising against British colonial rule. During the festival nights, the palace's grand courtyards, carved sandstone archways, and royal balconies are lit by thousands of decorative lights and traditional lamps, creating a magical atmosphere that blends history with art. India’s finest classical dancers, including exponents of Kathak, Bharatanatyam, Odissi, and Manipuri, perform on the main open-air stage, alongside celebrated classical vocalists and master instrumentalists playing the sitar, sarod, and flute. The festival grounds also feature an attached crafts bazaar showcasing rare, high-end traditional arts like shadow puppetry, miniature painting, and wood inlay work from different corners of the country. By providing a royal stage for the nation's finest artistic talents, the Kartik Cultural Festival successfully links the protection of historical architecture with the preservation of classical performing arts, making it a primary destination for art critics, historians, and elite travelers.",
    images: [kartik1, kartik2],
    source: "(src: wikipedia)",
  },
  {
    name: "Lohri",
    tagline: "",
    description:
      "Lohri is a highly vibrant and deeply cherished winter harvest festival celebrated with immense energy across Haryana on January 13th every year, marking the official end of the cold winter solstice and welcoming longer, warmer days. The festival is deeply tied to the agricultural calendar of northern India, as it occurs when the crucial winter crops are maturing in the fields, giving farmers a brief, well-deserved period of rest and celebration before the hard work of harvesting begins. As dusk falls on cold winter evenings, communities, extended families, and neighbors gather in large open courtyards to light a massive central bonfire made of logs and dry cow-dung cakes, which represents the sun god and the element of cosmic energy. Worshippers walk in circles around the roaring flames, throwing offerings of sesame seeds (til), jaggery (gur), peanuts, popcorn, and puffed rice into the fire while chanting traditional prayers for prosperity, family health, and abundant future crop yields. The celebration is amplified by the singing of traditional Lohri folk songs, most notably those honoring Dulla Bhatti, a legendary medieval Robin Hood figure who famously rescued poor village girls from kidnappers and arranged their marriages, making him an enduring hero of regional folklore. Lohri holds an especially sacred and joyous place in households that have experienced a major milestone in the preceding year, such as the birth of a newborn child (Nutan Jeevan) or the arrival of a new bride, as the entire community gathers to shower them with gifts, cash, and blessings. The evening concludes with a heavy, traditional community feast featuring winter favorites like Makki ki Roti, Sarson ka Saag, and Til-Chikki, followed by late-night folk dancing that showcases the warm hospitality of the state.",
    images: [lohri1, lohri2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Gangore (Sirsa & Western Districts)",
    tagline: "",
    description:
      "Observed with deep devotion and artistic flair in March or April, Gangore is a beautiful spring festival celebrated primarily across the western districts of Haryana, such as Sirsa and Hisar, which share close historical and cultural ties with neighboring Rajasthan. The festival is dedicated to the worship of Goddess Gauri, the divine manifestation of Parvati, who represents the highest ideals of marital fidelity, domestic abundance, spring rebirth, and spiritual grace. Lasting over several days, the festival is observed by unmarried girls who fast and pray to be blessed with a compassionate and protective life partner, as well as married women who pray for the long life, health, and prosperity of their husbands. The most distinct artistic element of Gangore is the creation and decoration of beautifully carved wooden or clay idols of Ishar (representing Lord Shiva) and Gangore (Goddess Parvati), which are dressed by women in fine, miniature silk saris and decorated with tiny, hand-painted jewelry and fresh flower garlands. Every afternoon, women carry these sacred idols on their heads in grand, colorful neighborhood processions through the streets, singing gentle folk songs that describe Parvati’s journey to her husband's home and her blessings upon the lands. The festival concludes on the final evening with a moving ceremony where the community gathers at a local lake, river, or stepwell to perform final prayers before gently immersing the clay idols in the water, symbolizing the return of the goddess to her divine home. Gangore serves as a magnificent showcase of women's creative arts, textile heritage, and deep spiritual traditions, providing a colorful and peaceful highlight to Haryana's spring calendar.",
    images: [gangore1, gangore2],
    source: "(src: wikipedia)",
  },
  {
    name: "Sanjhi Festival",
    tagline: "",
    description:
      "The Sanjhi Festival is a highly unique, ancient folk-art and harvest celebration observed by young, unmarried girls in rural Haryana during the nine days of autumn Navratri in September or October. The festival is a beautiful expression of rural creativity and community spirit, focused entirely on the worship of Goddess Sanjhi, a traditional folk deity who represents cosmic energy, agricultural protection, and the fulfillment of deep personal wishes. On the first morning of Navratri, groups of young girls gather to collect clean, soft clay and fresh cow dung, which they use to meticulously mold individual icons, stars, and geometric shapes directly onto the front mud walls of their homes. These clay shapes are arranged to form a grand, stylized image of the Goddess Sanjhi, which is then painted with natural dyes and decorated with colorful fabrics, broken pieces of glass, star-shaped mirrors, and gold threads. Every evening, all the young girls of the village walk together from house to house, standing in front of these decorated walls to light clay lamps, offer traditional sweets, and sing Sanjhi ke Geet—a collection of ancient, orally passed folk hymns praying for family health, timely rains, and good life partners. On the final afternoon of Dussehra, the clay icons are carefully removed from the walls and placed into earthen pots with small lamps inside, which the girls carry to the local village pond for a gentle immersion ceremony that marks the end of the festival. The Sanjhi Festival remains an invaluable living archive of rural clay art, oral folklore, and independent female-led community traditions, showing how ancient artistic skills continue to survive across generations in rural Haryana.",
    images: [sanjhi1],
    source: "(src: wikipedia)",
  },
  {
    name: "Surajkund Diwali Festival (Deepawali Utsav)",
    tagline: "",
    description:
      "While Diwali is celebrated within individual homes across the nation, Haryana hosts a magnificent, grand state-level cultural celebration known as the Surajkund Diwali Festival at the historic mela grounds in Faridabad during October or November. Initiated to replicate the massive success of the traditional February Crafts Mela, this autumn festival transforms the sprawling, rocky region into a luminous wonderland illuminated by hundreds of thousands of traditional earthen lamps and modern lighting displays. The primary goal of the festival is to provide a massive commercial platform for regional potters, clay artists, and traditional toy makers who rely heavily on festive markets to support their rural businesses. The venue features hundreds of handloom and craft stalls, alongside a dedicated culinary section where visitors can experience authentic, historic Haryanvi sweets and festive foods prepared by traditional sweet makers. Every evening, the central open-air amphitheater hosts mega cultural nights where folk artists from across Haryana perform traditional regional dances, including the high-energy Loor dance and the rhythmic Ghummar, accompanied by traditional musical instruments like the Been and Ghara. The festival grounds also host grand shadow puppetry shows, traditional storytelling sessions narrating scenes from the Ramayana, and interactive craft workshops for children, making it a spectacular family destination. By blending ancient religious devotion with modern cultural tourism, the Surajkund Diwali Festival stands as a brilliant showcase of Haryana’s ability to honor its deep-rooted traditions while creating vibrant spaces for modern public celebration.",
    images: [surajkunddiwali1, surajkunddiwali2],
    source: "(src: faridabad)",
  },
];

const historicalPlaces = [
  {
    name: "Surajkund Masonry Reservoir (Faridabad)",
    description:
      "The ancient masonry reservoir of Surajkund represents one of the finest surviving examples of pre-Islamic water engineering in northern India, dating back to the 10th century CE during a period when the Tomar dynasty was consolidating its political grip over the regions flanking Delhi and Haryana. Commissioned by King Surajpal, whose lineage is directly linked to the legendary founder of Delhi, Anangpal Tomar, this structural marvel was intentionally engineered to serve a dual purpose: providing an uninterrupted water supply to the nearby early medieval settlement of Anangpur and honoring the sun god, Surya, who was the primary deity of the royal house. Nestled strategically within the semi-arid, rugged folds of the ancient Aravalli hill range, the engineering of the reservoir demonstrates an advanced understanding of local hydrology, as it was designed to capture the heavy seasonal rainwater torrents flowing down the natural slopes and rocky catchments of the hills. Local historical traditions and fragmented lithic records strongly indicate that a grand, meticulously carved temple dedicated to the Sun stood proudly on the western embankment of the pool, providing a spiritual center where pilgrims could perform sacred ablutions before entering the temple precinct. Although the temple itself was destroyed during later centuries of military instability and political transitions in the Delhi Sultanate era, the massive stone reservoir managed to survive intact, largely due to its robust construction and heavy stone-and-iron structural tiebacks. The reservoir is defined by its dramatic semi-circular shape, which resembles a grand classical amphitheater, built entirely with large, locally quarried quartzite stone blocks held together by a combination of interlocking joints and traditional indigenous lime-and-rubble mortar. The stone steps descend in a uniform, concentric pattern down to the central pool, deliberately mimicking the geometric rays of a rising sun, which creates a powerful visual effect when viewed from the upper terraces. To handle the violent flash floods common to the Aravallis, early engineers incorporated specialized silt-traps, a massive stone-paved ramp for royal cattle and elephants, and integrated sluice channels to safely divert excess water away from the main structural retaining walls. Today, this historical marvel has transitioned from a critical water source to an international cultural landmark, serving as the physical backdrop for the annual Surajkund International Crafts Mela, where millions of visitors gather to experience traditional crafts amidst ancient engineering.",
    images: [reservoir1, reservoir2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Sheikh Chilli's Tomb (Kurukshetra)",
    description:
      "Perched gracefully on a high architectural mound in the historical town of Thanesar within Kurukshetra, the 17th-century mausoleum complex of Sheikh Chilli stands as an enduring testament to the peak of Mughal architectural refinement and the deeply rooted history of Sufism in northern India. This grand structure is the final resting place of the celebrated Sufi saint and scholar Abd-ur-Rahim Abdul-Karim Abd-ul-Razak, affectionately known by the public as Sheikh Chilli, who was revered for his deep spiritual insights, vast literary knowledge, and his role as the chief spiritual preceptor to Prince Dara Shikoh. Dara Shikoh, the brilliant, pluralistic, and ill-fated eldest son of Emperor Shah Jahan, was heavily influenced by the saint's mystical philosophies and subsequently ordered the construction of this grand tomb complex to honor his mentor's memory after his passing. The architectural layout represents a masterful synthesis of classical Persian garden principles and late-era Mughal symmetry, earning it the popular regional title of the 'Taj of Haryana' because of its pristine materials and balanced proportions. The entire mausoleum sits on a towering, raised octagonal terrace made of deep red sandstone, which isolates the sacred tomb from the surrounding landscape and creates an immediate sense of grand scale. The central tomb chamber is crowned by a high, bulbous, double-layered dome constructed entirely of pure white marble, flanked by detailed marble jali windows that filter natural light into the inner sanctum where the ornate grave cenotaph sits. Below the main platform lies a perfectly preserved Charbagh garden, a classic Persian four-quadrant design featuring narrow water channels and central fountains that represent the rivers of paradise described in Islamic texts. Directly adjoining the main tomb is a massive, double-story madrasa featuring a spacious central courtyard surrounded by individual arched cells where students and religious scholars lived, studied, and transcribed ancient philosophical works. Today, the complex is preserved by the Archaeological Survey of India and includes an onsite museum filled with rare terracotta figurines, coins, and historic pottery excavated from the nearby ancient mound of Harsh-ka-Tila.",
    images: [chilli1, chilli2],
    source: "(src: wikipedia)",
  },
  {
    name: "Asigarh Fort / Prithviraj Chauhan's Fort (Hansi, Hisar)",
    description:
      "Sprawling over an immense, elevated 30-acre earthen mound in the ancient town of Hansi, Asigarh Fort stands as one of the oldest, most strategically vital, and battle-tested military strongholds in the entire northern plains of the Indian subcontinent. While archeological layers suggest the site was used for defense since ancient times, it was comprehensively rebuilt, expanded, and heavily fortified in the 12th century by the legendary Rajput warrior king, Prithviraj Chauhan, who recognized Hansi as the perfect frontline shield to protect the prosperous trade routes and paths leading directly to Delhi from foreign invasions. Over the subsequent centuries, the fort became a highly prized strategic asset, causing its control to change hands violently across eras, falling sequentially to the Ghurids, the sultans of the Delhi Sultanate, the Mughals, and eventually into the hands of the famous Irish adventurer George Thomas, who established an independent kingdom here in the late 18th century before the British East India Company assumed control. The physical structure of the fort is incredibly imposing, utilizing thick, sloped defensive walls constructed from a mixture of heavy kiln-baked bricks, rubble masonry, and dense lime-kankar mortars designed to absorb the direct impact of medieval catapults and early gunpowder artillery. The most iconic remaining architectural feature of the fort is the magnificent Barsi Gate, an enormous and beautifully preserved gateway built in 1302 CE during the reign of Sultan Alauddin Khalji, which serves as a spectacular example of early sultanate defense architecture. The Barsi Gate stands over 30 feet tall and features a deep, pointed Islamic arch framed by traditional Indian motifs, decorative rosees, and heavy stone battlements equipped with arrow slits and machicolations for pouring boiling oil onto invading forces. Inside the crumbling perimeter of the fort, field researchers can still map out the foundations of vast underground granaries, secret ammunition depots, royal stables, and defensive guardrooms that allowed a garrison to withstand months of isolation during a siege. Today, Asigarh Fort is recognized as a monument of national importance, drawing tourists and historians who come to walk through its multi-layered ruins and view the architectural signatures left behind by Hindu, Islamic, and colonial rulers over a span of eight centuries.",
    images: [asirgarh1, asirgarh2],
    source: "(src: wikipedia, aroundus travek directory)",
  },
  {
    name: "Firoz Shah Palace & Gujri Mahal Complex (Hisar)",
    description:
      "In the year 1354 CE, Sultan Firoz Shah Tughlaq of the Delhi Sultanate founded the strategically located, fortified city of Hisar-e-Firoza, which modern generations know as Hisar, and constructed a massive, sprawling palace complex at its core to function as both a powerful military outpost and a luxurious royal residence. Within this vast fortress of dark stone, the Sultan ordered the creation of a separate, architecturally distinct palace known as the Gujri Mahal, built exclusively for his beloved queen, Gujri, a local woman from the area who captured his heart during a hunting expedition. According to well-documented historical legends, Gujri agreed to accept the Sultan's marriage proposal only on the strict condition that she would not be forced to abandon her native homeland for the crowded capital of Delhi, which prompted Firoz Shah Tughlaq to build this magnificent palace directly in Hisar so she could maintain her ties to her people while living in royal splendor. The entire palace complex serves as a premier, textbook example of Tughlaq-era architecture, which famously prioritized immense structural strength, thick sloping batter walls, and functional minimalism over the delicate, intricate stone carvings seen in later Mughal designs. The Gujri Mahal itself is elevated on a massive stone plinth and features an extensive, labyrinthine network of underground ventilation chambers called tehkhanas, which were engineered with thick stone walls and hidden air shafts to provide a cool retreat during the oppressive summer heat of the northern plains. The construction materials of the palace are visually unique, consisting heavily of dark lapis-colored stone and architectural pieces repurposed from older regional structures, giving the entire complex a heavy, fortress-like aesthetic. The complex also houses the historic Lat ki Masjid, a beautiful mosque featuring a thick, ancient iron-and-sandstone pillar in its open courtyard that contains historical inscriptions from the Ashokan era, demonstrating how different rulers reused sacred artifacts across centuries. Today, the palace ruins remain open to the public as a protected historical park, providing visitors with a window into the domestic lives, romantic legends, and defense strategies of the Tughlaq sultans.",
    images: [firoz1, firoz2],
    source: "(src: wikipedia)",
  },
  {
    name: "Jal Mahal (Narnaul)",
    description:
      "The breathtaking Jal Mahal, or Water Palace, situated in the historic town of Narnaul, stands as a brilliant architectural relic from the golden age of the Mughal Empire, built in 1591 CE during the reign of Emperor Akbar. This luxurious pleasure pavilion was commissioned by Shah Quli Khan, the highly influential and wealthy Mughal governor of the Narnaul district, who is immortalized in Indian history for his battlefield exploits, most notably for inflicting the critical wound upon Hemu, the last Hindu king of Delhi, during the Second Battle of Panipat in 1556 CE. Shah Quli Khan envisioned this grand palace as a private sanctuary where he and his inner circle could escape the dust and heat of the region, entertain visiting royal dignitaries, and relax surrounded by a vast sheet of water. The architecture of the Jal Mahal is a magnificent example of a medieval water pavilion, seamlessly blending classical Persian imperial design principles with regional Indian artistic elements to create a balanced structure. The primary two-story pavilion is built directly within the center of an enormous, square artificial reservoir known historically as the Khan Sarovar, creating the illusion that the entire marble and sandstone palace is floating effortlessly upon the water's surface. Access to this central island pavilion is provided by a long, narrow masonry causeway supported by a series of heavy stone arches that span the water, allowing visitors to walk from the outer shore directly into the palace entry. The roofline of the pavilion is adorned with a grand central dome that is flanked by four octagonal chhatris supported by slender stone pillars, which breaks up the square silhouette of the building and adds a light quality to the heavy masonry. Inside, the walls are finished with fine lime plaster, intricate relief work, and historical Persian inscriptions that praise the governor’s military achievements and the beauty of the gardens. Today, the Jal Mahal stands as one of the most complete and visually striking examples of secular Mughal architecture in Haryana, serving as a primary site for heritage enthusiasts, photographers, and historians studying historical water management and luxury design.",
    images: [jal1, jal2],
    source: "(src: Mahendragarh district portal)",
  },
  {
    name: "Ibrahim Lodi’s Tomb (Panipat)",
    description:
      "The stark, solemn historical monument of Ibrahim Lodi's Tomb in Panipat stands as an important marker in the history of the Indian subcontinent, representing the end of the Delhi Sultanate and the rise of the Mughal Empire. This simple tomb holds the remains of Sultan Ibrahim Lodi, the last ruler of the Lodi dynasty, who met his death on April 21, 1526, during the First Battle of Panipat when his massive army was defeated by the superior tactics and modern artillery of Babur, the founder of the Mughal dynasty. Lodi was killed directly on the field of battle alongside thousands of his loyal warriors, and in an act of respect for his royal status, the victorious Babur ordered that the fallen Sultan be buried at the exact spot where he died, creating a permanent landmark for this major historical transition. In stark contrast to the grand, decorative tombs built by the Mughal emperors who followed him, Ibrahim Lodi’s final resting place is a masterclass in minimalist Lodi-style architecture, reflecting the urgent and somber circumstances of its creation. The monument consists of a high, rectangular platform constructed entirely of small, red-toned Lakhauri bricks held together with traditional lime plaster, creating an unadorned structure that emphasizes historical gravity over artistic flourish. The grave itself sits open to the elements on top of this brick platform, with no grand dome, overhead canopy, or defensive walls shielding it from the sky, which adds to the solemn atmosphere of the site. In the year 1867, during the British colonial administration, local district authorities renovated the historical site, adding a simple stone inscription that records the date of the historic battle and commemorates the fallen Sultan. Located near the local administrative offices in modern Panipat, this tomb remains an essential stop for travelers, historians, and students of military history who wish to stand at the exact geographic point where the political fate of India shifted from the Afghan sultans to the Mughal line.",
    images: [panipat1, panipat2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Kabuli Bagh Mosque (Panipat)",
    description:
      "Directly connected to the historic events surrounding Ibrahim Lodi’s tomb, the grand Kabuli Bagh Mosque in Panipat was constructed in 1527 CE by the victorious Mughal Emperor Babur to celebrate his historic triumph at the First Battle of Panipat. Built just one year after his victory, Babur commissioned this monumental religious structure to serve as a symbol of his new imperial authority in Hindustan and to honor his wife, Kabuli Begum, after whom the mosque and its surrounding gardens were named. The monument holds a position of immense importance in architectural history as the very first formal mosque constructed by the Mughals in India, serving as the stylistic blueprint and structural prototype for the grand religious buildings later erected by his descendants, including Akbar, Shah Jahan, and Aurangzeb. The mosque showcases the early Timurid-Persian architectural styles that Babur brought with him from his ancestral lands in Central Asia, adapted slightly to utilize local Indian masonry techniques and materials. The main prayer hall is a massive structure featuring a dominant central dome, which is balanced on either side by a series of smaller subsidiary domes and arched side chambers that create a symmetric facade. The exterior of the mosque is constructed of fine plastered brickwork, displaying large arched entryways and delicate stone inscriptions written in elegant Arabic script along the upper cornices of the main hall. A massive open courtyard sits directly in front of the primary prayer structure, featuring a large central masonry tank that was engineered for performing wudu, the ritual cleansing before daily prayers. Years later, Babur's son, Emperor Humayun, defeated the Suri dynasty and added a stone platform called the Chabutra-I-Fatehpur to the complex to commemorate his own subsequent victories, adding another layer of history to the site. Today, managed by the Archaeological Survey of India, the Kabuli Bagh Mosque stands as a historic site that allows visitors to explore the earliest beginnings of Mughal artistic expression in India.",
    images: [kabuli1, kabuli2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Tomb of Khwaja Khizr (Sonipat)",
    description:
      "Built between the years 1522 and 1524 CE, the beautiful and well-preserved Tomb of Khwaja Khizr in Sonipat was commissioned during the final years of the Lodi dynasty under the rule of Ibrahim Lodi, just before the Mughal conquest. This monument was constructed to honor Khwaja Khizr, a highly revered local saint and noble who held significant spiritual influence and administrative power within the Sonipat region during the early 16th century. The funding and construction of the mausoleum were overseen by Darya Khan, a high-ranking official in the Lodi royal court who was a devout disciple of the saint and wished to create a permanent monument to his spiritual legacy. The tomb is widely praised by architectural historians for its excellent preservation and its striking color palette, which combines deep red sandstone with light-colored kankar blocks to create a visually distinct exterior. The primary structure is square in shape, topped by a large, perfectly hemispherical dome that rests neatly on an octagonal drum, a classic feature of late sultanate architecture. The exterior walls are decorated with arched niches, deep stone alcoves, and intricate floral plasterwork along the roofline, while the interior ceiling of the main burial chamber features multicolored floral motifs painted directly onto the lime plaster. The main entrance gateway is accessed via a flight of wide stone steps that lead through an arched portal framed by decorative rosettes and geometric patterns carved into the sandstone. Today, the Tomb of Khwaja Khizr sits within a protected green garden patch in Sonipat, serving as a peaceful site for local historians, architecture students, and tourists who want to explore the detailed art styles of the late pre-Mughal Sultanate period.",
    images: [khwaja1, khwaja2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Chor Gumbad (Narnaul)",
    description:
      "The mysterious and imposing structure of the Chor Gumbad, known widely as the 'Signpost of Narnaul', is a prominent historical landmark that has dominated the skyline of this ancient town since its construction in the 14th century during the rule of the Tughlaq dynasty. The monument was originally built by Jamal Khan, an influential Afghan noble who served the regional rulers of the time, intending for the massive building to serve as his own future tomb and a monument to his family's high status in the district. However, the building's history took a strange turn during later centuries when it sat completely isolated on a large, rocky hill well outside the town's primary defensive walls and main residential settlements. Because of its isolated position, thick walls, and confusing internal layout, it became a notorious hideout for bandits, highway robbers, and outlaws during the late Mughal and British colonial periods, leading locals to permanently name it the Chor Gumbad, or 'Thief's Dome'. The architecture of the monument is a powerful example of early Afghan and Tughlaq-influenced design, prioritizing massive structural strength and acoustic properties over delicate surface decorations. It features a low, wide dome that spans the entire square central hall without the support of any internal pillars or columns, demonstrating a high level of medieval structural engineering. The corner walls are built with sloping buttresses and finished with small minarets that give the building the appearance of a military fortress rather than a peaceful tomb. The interior is famous for its unique layout, featuring a hidden, wrap-around gallery built directly within the thickness of the upper walls, which created echoing chambers that helped outlaws hear the approaching footsteps of soldiers from far away. Today, the monument has been restored and lit by the state archaeology department, standing as a fascinating site for travelers interested in regional Afghan architecture and the legends of old-world outlaws.",
    images: [chor1, chor2],
    source: "(src: haryana tourism, wikimedia commons)",
  },
  {
    name: "Star Monument (Bhiwani)",
    description:
      "Located within the peaceful complex at Dinod near the town of Bhiwani, the Star Monument is a spectacular contemporary architectural marvel constructed in the late 20th century, standing out as a unique entry on this list of ancient heritage sites. This modern structure functions as the Samadhi Sthal, or memorial shrine, of the revered spiritual saint Shri Param Sant Tarachandji Maharaj, affectionately known by his thousands of followers as Bade Maharaj Ji. Built under the direct guidance and execution of his spiritual successor within the Radhasoami sect, the monument was designed to reflect the saint's universal teachings on inner peace, meditation, and spiritual clarity through geometric harmony. The building is a striking, 88-foot-tall hexagonal structure that takes the exact physical shape of a six-pointed star, creating a powerful visual impact against the flat rural landscape of Bhiwani. Its most incredible engineering achievement is that the massive star-shaped roof is supported entirely by its thick outer load-bearing walls, meaning the interior prayer hall contains absolutely no traditional concrete pillars or supporting columns to block the view. The exterior walls are clad in high-quality white and gray Italian marble, which catches and reflects the changing sunlight at different angles throughout the day, making the building appear to glow during dawn and dusk. The internal meditation hall is spacious, uncluttered, and designed specifically to maximize natural light and acoustics for silent contemplation and large spiritual gatherings. The monument is surrounded by a beautifully landscaped star-shaped garden path that features fountains, walkways, and colorful seasonal flowerbeds that match the geometry of the main building, creating a unified artistic experience. Today, the Star Monument functions as a major spiritual destination, drawing thousands of devotees and tourists every week who come to see how modern, column-free engineering can create a unique and sacred architectural space.",
    images: [bhiwani1, bhiwani2],
    source: "(src: haryana tourism, district bhiwani portal)",
  },
];

const facts = [
  "Despite making up less than 2% of India's population, Haryana produces a massive share of the nation's Olympic and international sports medals. It is universally recognized as India's wrestling, boxing, and javelin capital, breeding iconic world champions like Neeraj Chopra.",
  "Haryana is the sacred land where the ancient Indus Valley Civilization flourished and the foundational roots of Vedic culture were written. The holy city of Kurukshetra is the historic site where Lord Krishna delivered the immortal message of the Bhagavad Gita.",
  "The city of Panipat in Haryana served as the strategic theater for three massive, historic battles that completely rewrote India's destiny. These turning points led to the establishment, consolidation, and eventual decline of the Mughal Empire in the subcontinent.",
  "Haryana is a massive agricultural heavyweight, often referred to as the 'Bread Basket of India' due to its rich soil. The district of Karnal is known as the 'Rice Bowl of India', leading the world in exporting premium, aromatic Basmati rice.",
  "The state is world-famous for its elite livestock, particularly the indigenous Murrah breed of buffalo, which is nicknamed 'Black Gold'. These highly prized animals are exported globally because of their exceptionally high milk yield and massive structural frame.",
  "Until the late 1970s, Gurugram was a quiet, rural agricultural village before undergoing one of the fastest economic transformations in Asia. Today, it stands as a futuristic tech and financial hub that houses over 250 of the world's Fortune 500 companies.",
  "Haryana holds a deeply proud tradition of national defense, boasting one of the highest per-capita representations in the Indian Armed Forces. In many rural districts like Rohtak and Jhajjar, nearly every household has at least one family member serving the military.",
  "Haryana was a major pioneer in modern Indian infrastructure development and rural welfare. Way back in 1970, it became the very first state in the country to successfully bring electricity to 100% of its rural villages.",
  "The ancient Asigarh Fort in Hansi was so strategically powerful that a legendary Irish adventurer named George Thomas carved out his own independent kingdom there. In the late 18th century, he refortified the castle and established a functional mint that cast its own currency.",
];

const artGallery = [
  {
    title: "Bajra Khichdi",
    emoji: "🍚",
    color: "#C9A96E",
    desc: "Nutritious traditional dish made with pearl millet and rice, served with ghee and curd",
    image: gBajraKhichdi,
  },
  {
    title: "Kadhi Pakora",
    emoji: "🍲",
    color: "#E8A44A",
    desc: "Delicious yogurt-based curry with gram flour fritters, widely loved in Haryana homes",
    image: gKadhiPakora,
  },
  {
    title: "Ghevar",
    emoji: "🍯",
    color: "#D4A017",
    desc: "Traditional disc-shaped sweet made from flour and ghee, popular during Teej and Raksha Bandhan",
    image: gGhevar,
  },
  {
    title: "Kurukshetra",
    emoji: "🛕",
    color: "#8B4513",
    desc: "Historic spiritual city of the Mahabharata battlefield, famous for temples and sacred lakes",
    image: gKurukshetra,
  },
  {
    title: "Phag Dance",
    emoji: "💃",
    color: "#D4456A",
    desc: "Lively folk dance performed during Holi with energetic movements and traditional music",
    image: gPhagDance,
  },
  {
    title: "Ragini",
    emoji: "🎤",
    color: "#4A6E8A",
    desc: "Traditional folk singing style of Haryana known for storytelling and powerful vocal performances",
    image: gRagini,
  },
  {
    title: "Phulkari Embroidery",
    emoji: "🌸",
    color: "#9B2D8A",
    desc: "Colorful traditional embroidery art on shawls and dupattas using bright floral patterns",
    image: gPhulkari,
  },
  {
    title: "Sanjhi Art",
    emoji: "🎨",
    color: "#C0522A",
    desc: "Beautiful folk art made with intricate paper stencils and decorative patterns for festivals",
    image: gSanjhiArt,
  },
  {
    title: "Gurugram",
    emoji: "🏙️",
    color: "#2E6B8A",
    desc: "Modern city famous for IT companies, skyscrapers, shopping malls, and global business hubs",
    image: gGurugram,
  },
  {
    title: "Sultanpur National Park",
    emoji: "🦅",
    color: "#4A7C59",
    desc: "Famous bird sanctuary known for migratory birds, wetlands, and nature photography",
    image: gSultanpurPark,
  },
  {
    title: "Chhapia Waterfall",
    emoji: "💧",
    color: "#1A6B8A",
    desc: "Scenic seasonal waterfall surrounded by hills and greenery, popular during the monsoon season",
    image: gChhapiaWaterfall,
  },
];
