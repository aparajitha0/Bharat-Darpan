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
import bengalMap from "@assets/bengalMap.jpg";
const Durga1 = "https://i.postimg.cc/XqgcWzTm/image.png";
const rash = "https://i.postimg.cc/4NBbFjvT/image.png";
const Ganga1 = "https://i.postimg.cc/HxDQymmq/image.png";
const Bish1 = "https://i.postimg.cc/kMyxBLp2/image.png";
const victorial1 = "https://i.postimg.cc/X7LS1NDK/image.png";
const hazarduari1 = "https://i.postimg.cc/KYK6YPcs/image.png";
const shaheedi1 = "https://i.postimg.cc/HntKN33Y/image.png";
const howrah1 = "https://i.postimg.cc/8zc3yR6Y/image.png";
const dakshineshwar1 = "https://i.postimg.cc/cHR5KTpw/image.png";
const dhr1 = "https://i.postimg.cc/zXXPBC0z/image.png";
const santiniketan1 = "https://i.postimg.cc/qRT1dyN6/image.png";
const rasmancha1 = "https://i.postimg.cc/qv6whjnT/image.png";
const cooch1 = "https://i.postimg.cc/QCngVTd5/image.png";
const sunderban1 = "https://i.postimg.cc/nLt4sZpS/image.png";
const wChhau = "https://i.postimg.cc/43tcZ0cz/image.png";
const wBaul = "https://i.postimg.cc/fLf0S0Bd/image.png";
const wGambhira = "https://i.postimg.cc/y6nZVcDQ/image.png";
const wSanthali = "https://i.postimg.cc/pX65jvYy/image.png";
const wRaibenshe = "https://i.postimg.cc/0Ng6tC4y/image.png";
const wJhumur = "https://i.postimg.cc/j5tDTStb/image.png";
const wIlish = "https://i.postimg.cc/zX63Bj8w/image.png";
const wChingri = "https://i.postimg.cc/MG8T0pcR/image.png";
const wMacherJhol = "https://i.postimg.cc/4dWxTvWy/image.png";
const wAlooPosto = "https://i.postimg.cc/mZ6gXwz2/image.png";
const wShukto = "https://i.postimg.cc/rFBFcw9c/image.png";
const wStreetFood = "https://i.postimg.cc/63btPWQD/image.png";
const wTrain = "https://i.postimg.cc/XY63mDnQ/image.png";
const wKumortuli = "https://i.postimg.cc/9fJh4my3/image.png";
const wJewellery = "https://i.postimg.cc/RC3Wzyzt/image.png";
const wKalighat = "https://i.postimg.cc/qRNv4hWk/image.png";
const wAttire = "https://i.postimg.cc/tgMV3jjb/image.png";
const wBridal = "https://i.postimg.cc/02YmLFp0/image.png";

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
export default function WestBengalPage() {
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
                West Bengal
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Cultural Capital of India
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Kolkata" },
                  { label: "Population", value: "9.13 Crore" },
                  { label: "Area", value: " 88,752 sq km" },
                  { label: "Founded", value: "26 January 1950" },
                  { label: "Language", value: "Bengali" },
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
             Kolkata
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of West Bengal  — City of Joy
            </p>
          </div>
        </Section>

        {/* Map of West Bengal — click to enlarge */}
        <Section title="Map of West Bengal" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(bengalMap, "Map of West Bengal")}
            >
              <img
                src={bengalMap}
                alt="Map of West Bengal"
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
              West Bengal is a state in the eastern portion of India. It is situated along the Bay of Bengal. It had a population of over 91 million inhabitants within an area of 88,752 km2 (34,267 sq mi) as of 2011. The population estimate as of 2023 is 99,723,000. West Bengal is the fourth-most populous and thirteenth-largest state by area in India, as well as the eighth-most populous country subdivision of the world. As a part of the Bengal region of the Indian subcontinent, it borders Bangladesh in the east, and Nepal and Bhutan in the north. It also borders the Indian states of Jharkhand, Odisha, Bihar, Sikkim and Assam. The state capital is Kolkata, the third-largest metropolis, and seventh largest city by population in India. West Bengal includes the Darjeeling Himalayan hill region, the Ganges delta, the Rarh region, the coastal Sundarbans and the Bay of Bengal. The state's main ethnic group are the Bengalis. 
            </p>
            <p className="text-foreground">
              Stone Age tools dating back 20,000 years have been excavated in the state, According to the Indian epic Mahabharata the region was part of the Vanga kingdom. Several Vedic realms were present in the Bengal region, including Vanga, Rarh, Pundravardhana and the Suhma kingdom. One of the earliest foreign references to Bengal is a mention by the Ancient Greeks around 100 BCE of a land named Gangaridai located at the mouths of the Ganges. Bengal had overseas trade relations with Suvarnabhumi (Burma, Lower Thailand, the Lower Malay Peninsula and Sumatra). According to the Sri Lankan chronicle Mahavamsa, Prince Vijaya (c. 543 – c. 505 BCE), a Vanga kingdom prince, conquered Lanka (modern-day Sri Lanka) and named the country Sinhala kingdom.
            </p>
            <p className="text-foreground">
              Two kingdoms—Vanga or Samatata, and Gauda—are said in some texts to have appeared after the end of the Gupta Empire although details of their ascendancy are uncertain. The first recorded independent king of Bengal was Shashanka, who reigned in the early 7th century. Shashanka is often recorded in Buddhist annals as an intolerant Hindu ruler noted for his persecution of the Buddhists. He murdered Rajyavardhana, the Buddhist king of Thanesar, and is noted for destroying the Bodhi tree at Bodhgaya, and replacing Buddha statues with Shiva lingams. After a period of anarchy,   the Pala dynasty ruled the region for four hundred years beginning in the 8th century. A shorter reign of the Hindu Sena dynasty followed.  Rajendra Chola I of the Chola dynasty invaded some areas of Bengal between 1021 and 1023.  
            </p>
            <p className="text-foreground">
              Islam was introduced through trade with the Abbasid Caliphate. Following the Ghurid conquests led by Muhammad bin Bakhtiyar Khalji and the establishment of the Delhi Sultanate, it spread across the entire Bengal region. Mosques, madrasas and khanqahs were built throughout these stages. During the Islamic Bengal Sultanate, founded in 1352, Bengal was a major world trading nation and was often referred by the Europeans as the richest country with which to trade. Later, in 1576, it was absorbed into the Mughal Empire. 
            </p>
            <p className="text-foreground">
             Subsequent Muslim conquests helped spread Islam throughout the region. It was ruled by dynasties of the Bengal Sultanate and feudal lords under the Delhi Sultanate for the next few hundred years. The Bengal Sultanate was interrupted for twenty years by a Hindu uprising under Raja Ganesha. In the 16th century, Mughal general Islam Khan conquered Bengal. Administration by governors appointed by the court of the Mughal Empire gave way to semi-independence under the Nawabs of Murshidabad, who nominally respected the sovereignty of the Mughals in Delhi. Several independent Hindu states were established in Bengal during the Mughal period, including those of Pratapaditya of Jessore District and Raja Sitaram Ray of Bardhaman. Following the death of Emperor Aurangzeb and the Governor of Bengal, Shaista Khan, the proto-industrialised Mughal Bengal became a semi-independent state under the Nawabs of Bengal, and showed signs of the world's first Industrial Revolution. The Koch dynasty in northern Bengal flourished during the 16th and 17th centuries; it weathered the Mughals and survived until the advent of the British colonial era.  
            </p>
            <p className="text-xs text-muted-foreground">
              (src: Govt of West Bengal, mapsofindia.com)
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
        <Section title="Facts about West Bengal" icon="💡">
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
            Scroll horizontally to explore West Bengal's iconic foods, crafts,
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
    name: "Durga puja",
    description:
      "Durga Puja ,also known as Durgotsava or Sharadotsava, is a major Hindu festival honouring the goddess Durga and commemorating her victory over Mahishasura. It is the biggest festival among Bengali people living in India, and is also celebrated by the Hindus in Bangladesh and the Maithili community of Bihar. In 2021, 'Durga Puja in Kolkata' was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. The festival is observed in the Indian calendar in the month of Ashvin (September–October) on the Hindu luni-solar calendar. It lasts ten days, with the final five being most prominent. Even though Durga Puja and Navaratri are both dedicated to the Hindu goddess Durga and are observed simultaneously, they are not the same festival. The puja is performed in homes and public spaces with temporary structures (known as pandals), religious recitations, cultural performances, visiting, feasting, and processions; it is central to the Shaktism tradition.Scriptures portray Durga's defeat of Mahishasura, often interpreted as the triumph of good over evil; some traditions also link the festival with post-monsoon harvest themes. Durga Puja coincides with Navaratri and Dussehra celebrations observed by other traditions of Hinduism.Alongside Durga, devotees commonly venerate Lakshmi, Saraswati, Ganesha and Kartikeya. Major public celebrations run from Mahalaya to Vijayadashami and conclude with immersion of the images; practices vary by region .Durga Puja is an old tradition with medieval textual references on Shaktism and detailed manuals from at least the 14th century; elite and community forms expanded under early modern and colonial patronage.",
    images: [Durga1],
  },
  {
    name: "Rash mela ",
    description:
      "The exact date of inauguration of the carnival is not known but is widely accepted that it began during the rule of the 17th King of Koch Bihar, i.e. Maharaja Harendra Narayan, during 1783-1839. The evidence of this was found in the book Rajyopakhyan.The event was first held in Bhetaguri (formerly known as Vetaguri) after which it was organised in the complex of the Madan Mohan temple. Since 1912, it is being organised in the Rash Mela Ground. The festival was conducted elsewhere within a small scale in 1912 due to the cholera outbreak but it continued to be celebrated annually then after except in 2020. The carnival was also conducted after the theft of the idol of Sri Sri Madan Mohan from the temple in 1994. The event is currently organised by the Cooch Behar Municipality and the Debuttor Trust Board which is the temple trust.Rash Purnima is also celebrated with great joy in Nabadwip but unlike Nabadwip only Sri Krishna, the deity of the royal Koch kingdom is worshipped as Sri Sri Madan Mohan instead of the dual idol of Radha Krishna. People of all religions and backgrounds are welcomed in the event. The symbolic Rash Chakra is also constructed in the temple complex by a Muslim family from numerous generations which is rotated by people for seeking fortune and good luck. The chakra is made of bamboo and paper with floral designs and pictures of Lord Krishna.The main prayer and rituals are conducted in the Madan Mohan temple. The temple hosts the Rash Chakra along with a statue of Putana, a rakshasi (demoness) being killed by infant Krishna which is visited by thousands throughout the course of the event. Numerous kirtans and theatre plays called Jatra are organised during the night.A fair is organised in the ground which hosts amusement rides like ferris wheel, mini-roller coasters among others. Along with this food stalls, handicraft stores, book stalls, household goods stalls, clothing stores and street game setups are organised. Traders from Bangladesh, Nepal, Bhutan and nearby Indian states also visit the event. Apart from these a concert stage is set up in the middle of the ground which hosts numerous artists from around the region. ",
    images: [rash],
    source: "",
  },
  {
    name: "Gangasagar Mela",
    description:
      "Gangasagar Mela is a mela and festival in Hinduism, held every year at Gangasagar, West Bengal, India. The confluence of the Ganges and the Bay of Bengal is called the Gangasagar, the fair is held every year on Makar Sankranti at Kapilmuni's ashram located on the Gangasagar. The mela is celebrated on 14 or 15 January every year. Gangasagar Mela is the second largest Hindu fair (after Kumbh Mela). Many people from different states of India come here every year to take a holy bath on Makar Sankranti day. The Gangasagar is mentioned in the Mahabharata's Vana Parva, which provides proof of the existence of the pilgrimage site in 1500–2000 BC. According to the Mahabharata, the Pandavas traveled from the banks of the river Kaushik and reached the Gangesagarasangam, Confluence of Ganges and Sagara (Sea). According to Hinduism, the 'Gangasagarasangam' mentioned in the Mahabharata is Gangasagar in Sagardwip, situated at the estuary of the Bhagirathi-Hooghly rivers – one of the two main branches of the Ganges– on the sea coast of West Bengal. Legend has it that Kapilmuni, the progenitor of Samkhya philosophy, had an ashram at Gangasagara. Sixty thousand sons of Sagara King were consumed by Kapilmuni's wrath and their Ātmans (souls) were thrown into Naraka (hell). Bhagiratha, the grandson of the Sagara king, brought the Ganga from Svarga (heaven) to wash the remains of the Sagara's sons and free their Ātmans. Pilgrims from different states of India arrive on the occasion of Ganga bath and the Gangasagar Mela. Most of the pilgrims first arrive at Kolkata to visit Gangasagar. Transit camps are established in Kolkata every year for the convenience of pilgrims. All kinds of civic facilities are provided to these camps. A temporary jetty built on the occasion of the fair, and a crowd of pilgrims. The biggest obstacle to reaching Sagar Dwip is the Muri Ganga River; Pilgrims have to cross this river on their journey. However, due to the low navigability of the river, it is not possible to cross the river without tide. Every year, dredging is carried out in the river for uninterrupted ferry operation. Ferry services are operated between Kakdwip and Kachuberia, Sagar Dwip on the occasion of fairs and Ganga bath. Several temporary jetties were constructed for faster and more pilgrim transport. All vessels and buses can be monitored from a central control room. GPS and NAVIC (Navigation with Indian Constellation) technology is used in all the transport vehicles of Sagar Dwip for surveillance. Vessels are also provided with navigation lights to prevent visibility problems due to fog.",
    images: [Ganga1],
  },
  {
    name: "Bishnupur music festival",
    description:
      "The Bishnupur Gharana of Hindustani Classical Music, the only specialist method of Indian Classical Music of Bengal, originated in the 13th Century following the Dhrupad tradition. Once the domain of the Malla Kings who owed allegiance to the Mughal Empire, Bishnupur has historically been the cultural capital of Eastern India. Bishnupur Music Festival, an unique initiative of West Bengal Tourism Department, pays homage to the pioneers of the tradition and keeps the rich cultural tradition alive. The Bishnupur gharana remains the only vocal gharana of West Bengal. Today, the Bishnupur Music Festival, a unique initiative of the West Bengal Tourism Department, pays homage to those long-ago pioneers, and keeps the rich cultural heritage of the land of the Malla kings alive. At par with the Khajuraho or Konark Dance Festivals in terms of popularity and reach, the festival draws some of the finest names in contemporary Hindustani classical music.The gharana originated in Bishnupur, West Bengal, India in the late 18th century with its roots dating back to the 13th-14th centuries CE. The name of the town means 'city of Vishnu' in Bengali. In the ancient past, this area, known as Mallabhum was the abode of Malla Kings who were vassals to the Mughal Empire and were devotees of Vishnu and patrons of music. Historians suggest that 'Mallabhum' had once been the cultural centre of Eastern India. It also has the distinction of being the only vocal gharana in West Bengal. Entrance to the remains of the Palace of Bishnupur Kings . In the 17th century, during the reign of Mughal emperor Aurangazeb, many musicians moved to the court of the Maharaja of Bishnupur who was a known patron of the arts.[4] The dhrupad singer Bahadur Khan of the Senia gharana, descendant of Tansen, fled to Bishnupur and made his gharana popular and sought refuge in the court. Bahadur Khan was not only a vocalist but could also play the Veena, the rabab, and the surshringar. The king, Raghunath Singh Deo II, accepted him as a court singer. In time, a good number of students became the disciples of Bahadur Khan.Historical evidence points to Ramasharan Bhattacharya, a disciple of Bahadur Khan as the founder of the gharana. Bishnupur Gharana therefore has a strong link to Betiya Gharana through this unbroken relationship. However, this view is contradicted by some historians, who claim that Bahadur Khan could not have attended the Durbar of King Raghunath Singh Deo II because of anachronism, as there is a gap of at least 50 years (2 generations) between them. In practice, Bishnupur Gharana has got some characteristic features in the improvisations of some Ragas which are different from the practice of the Betiya school of the Seniya gharana.",
    images: [Bish1],
  },

];

const historicalPlaces = [
  {
    name: "Victorial Memorial",
    description:
      "Victoria Memorial, a majestic white marble edifice situated in the middle of 64 acres (25 ha) of sprawling gardens, dominating the centre of the Kolkata, India. Architecturally, it seems to reflect contemporary British civic classicism, but there are deliberate Eastern references as well. The Victoria Memorial was conceived by Lord Curzon as a fitting monument to Queen Victoria of the United Kingdom following her death in 1901. He organized funding for the project from within India and commissioned William Emerson, one of the leading British architects of the day, to design the edifice for the centre of the city that was then the capital of British India. The prince of Wales (later King George V) laid the cornerstone on January 4, 1906, and, after lengthy construction work, the building was formally opened on December 28, 1921. The marble used to construct the building comes from the same Makrana quarries in Rajasthan that were used for the construction of the Taj Mahal, and the corner domes are faintly Mughal in style. The whole composition is crowned by a bronze statue of the Angel of Victory that stands 16 feet (4.9 m) high; though not a true weather vane, it rotates when the wind is strong enough. The sides of the memorial are linked by open colonnades and in the south entrance, approached through a triumphal archway commemorating King Edward VII, there is a statue of Lord Curzon himself. The entrance hall contains bronze busts and marble statues of royal figures, and the walls are decorated with murals showing scenes from Queen Victoria’s life and texts from her imperial proclamations. The interior rooms display important collections of paintings, sculpture, artifacts, books, and manuscripts, all relating to royalty and empire.",
    images: [victorial1],
    source: "",
  },
  {
    name: "Hazarduari Palace",
    description:
      "Hazarduari Palace is one of the most impressive heritage places. The architecture itself is grand, and the “Palace of a Thousand Doors” name really adds to the charm when you’re walking through the huge corridors and halls. Inside, the museum collection is fascinating, especially if you love historical objects. The display of old weapons and instruments is a highlight, with swords (talwar), guns, and other royal-era items that make you imagine the Nawabi period in Murshidabad. The famous mirror setup and the overall “royal court” vibe are genuinely magical to experience. The garden in front of the palace is also very nice for relaxing and taking photos, and the whole complex feels like a proper time-travel moment. It’s located in the Kila Nizamat area near other major landmarks, so you can cover multiple spots in one trip. Hazarduari Palace is truly a gem of Murshidabad. The architecture is stunning, and every corner of the palace reflects its rich Nawabi history. The museum inside is well-maintained and showcases an incredible collection of weapons, paintings, manuscripts, and royal artifacts",
    images: [hazarduari1],
    source: "",
  },
  {
    name: "Shaheed Minar",
    description:
      "The Shaheed Minar, formerly known as the Ochterlony Monument, is a monument in Kolkata that was erected in 1828 in memory of Major-general Sir David Ochterlony, commander of the British East India Company, to commemorate both his successful defense of Delhi against the Marathas in 1804 and the victory of the East India Company’s armed forces over the Gurkhas in the Anglo-Nepalese War, also known as the Gurkha War. The monument was designed by J. P. Parker and paid for from public funds. On 9 August 1969, it was rededicated to the memory of the martyrs of the Indian freedom movement and renamed the 'Shaheed Minar', which means 'martyrs' monument' in both Bengali and Hindustani, by the then United Front Government in memory of the martyrs of the Indian independence movement. The presentgovernment has decided to illuminate the tower during evenings and allow visitors to the top. The lastpeople to have been up there were former governor Gopal Krishna Gandhi and his family.",
    images: [shaheedi1],
    source: "",
  },
  {
    name: "Howrah Bridge",
    description:
      "The Howrah Bridge is a balanced steel bridge over the Hooghly River in West Bengal, India. Commissioned in 1943, the bridge was originally named the New Howrah Bridge, because it replaced a pontoon bridge at the same location linking both sides of Kolkata. Burrabazar is connected with Howrah rail terminal because of this bridge. On 14 June 1965, it was renamed Rabindra Setu after the Bengali poet Rabindranath Tagore, who was the first Indian and Asian Nobel laureate. It is still popularly known as the Howrah Bridge. The bridge is one of four on the Hooghly River and is a famous symbol of Kolkata and West Bengal. The other bridges are the Vidyasagar Setu (popularly called the Second Hooghly Bridge), the Vivekananda Setu and the relatively new Nivedita Setu. It carries a daily traffic of approximately 100,000 vehiclesand possibly more than 150,000 pedestrians, easily making it the busiest cantilever bridge in the world. The third-longest cantilever bridge at the time of its construction, the Howrah Bridge is currently the sixth-longest bridge of its type in the world.",
    images: [howrah1],
    source: "",
  },
  {
    name: "Dakshineswar Kali temple",
    description:
      "Dakshineswar Kali Temple or Dakshineswar Kalibari is a Hindu navaratna style temple in Dakshineswar, Kolkata, West Bengal, India, on the eastern bank of the Hooghly River. The presiding deity of the temple is Bhavatarini (Kali), a form of Mahadevi or Parashakti Adya Kali, otherwise known as Adishakti Kalika. The temple was built in 1855 by Rani Rashmoni, a zamindar (feudal lord), and a devotee of Kali. The temple is associated with avatar Sri Ramakrishna and Sarada Devi, his wife and devotee mystic, both of 19th century Bengal. The main temple was inspired by Radhakanta temple in Tollygunge, built by Babu Ramnath Mondal of the Bawali Raj family. The temple compound, apart from the nine-spired main temple, contains a large courtyard surrounding the temple, with rooms along the boundary walls. Along the riverfront, there are twelve shrines dedicated to Shiva, Kali's consort, a temple to Radha–Krishna, a bathing ghat at the river, and a shrine dedicated to Rani Rashmoni. The 'Nahabat', or 'music tower', northeast and beyond the last of the Shiva temples, is where Maa Sarada spent a considerable part of her life. Sri Ramakrishna's room is in the northwest corner of the courtyard, with a semicircular verandah facing the river.",
    images: [dakshineshwar1],
    source: "",
  },
  {
    name: "Darjeeling Himalayan railway",
    description:
      "The Darjeeling Himalayan Railway, also known as the DHR or the Toy Train, is a 610 mm (2 ft) gauge railway that runs between New Jalpaiguri and Darjeeling in the Indian state of West Bengal. Built between 1879 and 1881, it is about 88 km (55 mi) long. It climbs from about 100 m (330 ft) above sea level at New Jalpaiguri to about 2,200 m (7,200 ft) at Darjeeling, using six zig zags and three loops (originally five) to gain altitude. Ghum station is situated at an altitude of 2,258 metres (7,407 ft). Six diesel locomotives handle most of the scheduled service, with daily tourist trains from Darjeeling to Ghum – India's highest railway station – and the steam-hauled Red Panda service from Darjeeling to Kurseong. Steam-enthusiast specials are hauled by vintage British-built B-Class steam locomotives. The railway's headquarters are at Kurseong. On 5 December 1999, UNESCO declared the DHR a World Heritage Site. Following the COVID-19 pandemic in the country, the service was stopped for 18 months from March 2020 to August 2021. In 1934, a major earthquake in Bihar shook all of Northeast India. Many buildings in Darjeeling were heavily damaged and the railway was also affected, although it soon recovered and played a vital role in transporting repair materials. During World War II, the DHR transported military personnel and supplies to the camps around Ghum and Darjeeling.In 1951, the railway was purchased by the Indian government and absorbed into the government railway organisation before it was managed by the Assam Railway.. On 25 August 2021, the service was restarted from New Jalpaiguri to Darjeeling with the new vistadome coaches for the tourists.",
    images: [dhr1],
    source: "",
  },
  {
    name: "Santiniketan",
    description:
      "Shantiniketan is a neighbourhood of Bolpur town in the Bolpur subdivision of Birbhum district in West Bengal, India, approximately 152 km north of Kolkata. It was established by Debendranath Tagore, and later expanded by his son, Rabindranath Tagore whose vision became what is now a university town with the creation of Visva-Bharati. It is also the birthplace of Indian Nobel Laureate Amartya Sen, who was also an alumnus of the school. It was inscribed on the UNESCO World Heritage List by the World Heritage Committee in 2023. In 1863, Debendranath Tagore took on permanent lease 20 acres (81,000 m2) of land, with two chhatim trees, at an annual payment of Rs. 5, from Bhuban Mohan Sinha, the talukdar in Raipur, Birbhum. He built a guest house there and named it Shantiniketan (the abode of peace). Gradually, the whole area came to be known as Shantiniketan. Upasana Griha is the glass prayer hall Devendranath built.",
    images: [santiniketan1],
    source: "",
  },
  {
    name: "Rasmancha Bishnupur",
    description:
      "It was commissioned by Mallabhum king Hambir Malla Dev (Bir Hambir) in 1600 CE. Length and breadth of this temple is 24.5 meter and the height is 12.5 meter. The base of the temple is made of laterite stone and upper part is made with bricks.Built on a laterite plinth, it is an impressive square building with a small shrine in the centre and three-corridor galleries with vaulted roofs enclosing it. The building is used for putting up idols from other temples on the occasion of Ras festival. During the Vaishnava Ras festival, all the Radha Krishna idols of Bishnupur town used to be brought here to be worshipped by the citizens. The annual festival was held in Rasmancha till 1932. Rasmancha temple of Bishnupur is on the UNESCO World Heritage Site's Tentative list. The Temples are designated as Monuments of National importance by ASI. Bishnupur, the temple town in the Bankura district of West Bengal is welcoming you with its lavish heritage, proud culture, brilliant architecture and tales of terracotta. Adi Malla established the Malla dynasty. Jagat Malla, the 10th Malla king shifted his kingdom to Bishnupur. Due to short supply of stone in Bengal, burnt clay bricks came as a substitute and architects of Bengal found the new way of a beautiful craft known as ‘Terracotta’. During the seventeenth century, the art of terracotta reached its highest peak. Raja Jagat Malla and his descendants built numerous temples made of terracotta and stone art.",
    images: [rasmancha1],
    source: "",
  },
  {
    name: "Cooch Behar Palace",
    description:
      "The Cooch Behar Palace is noted for its elegance and grandeur. It is a brick-built double-story structure in the Classical Italian architecture covering an area of 51,309 square feet (4,766.8 m2). The whole structure is 395 feet (120 m) long and 296 feet (90 m) wide and is on rests 4 feet 9 inches (1.45 m) above the ground. The Palace is fronted on the ground and first floors by a series of arcaded verandahs with their piers arranged alternately in single and double rows.At the southern and northern ends, the Palace projects slightly and in the center is a projected porch providing an entrance to the Durbar Hall. The Hall has an elegantly shaped metal dome which is topped by a cylindrical louver type ventilator. This is 124 feet (38 m) high from the ground and is in the style of the Renaissance architecture. The intros of the dome is carved in stepped patterns and Corinthian columns support the base of the cupola. This adds variegated colors and designs to the entire surface. There are various halls in the palace and rooms that include the grand Durbar Hall or the hall of audience, Drawing Rooms, Dining Hall, Billiard Room, Library, Bed Rooms, Toshakhana, Ladies Gallery and Vestibules. The artifact and precious objects that these rooms and halls used to contain are now lost.",
    images: [cooch1],
    source: "",
  },
  {
    name: "Sunderbans National Park",
    description:
      "Sundarbans National Park is a national park in West Bengal, India, and core part of tiger reserve and biosphere reserve. It is part of the Sundarbans on the Ganges Delta and adjacent to the Sundarban Reserve Forest in Bangladesh. It is located to south-west of Bangladesh. The delta is densely covered by mangrove forests, and is one of the largest reserves for the Bengal tiger. It is also home to a variety of bird, reptile and invertebrate species, including the salt-water crocodile. The present Sundarban National Park was declared as the core area of Sundarban Tiger Reserve in 1973 and a wildlife sanctuary in 1977. On 4 May 1984 it was declared a national park. It is a UNESCO World Heritage Site inscribed in 1987, and it has been designated as a Ramsar site since 2019. It is considered as a World Network of Biosphere Reserve from 10 November 2001. The park receives financial aid from the state government as well as the Ministry of Environment and Forests under various plan and non-plan budgets. Additional funding is received under the Project Tiger from the Central Government. In 2001, a grant of US$20,000 was received as preparatory assistance for promotion between India and Bangladesh from the World Heritage Fund.The estimation of tiger population in Sunderban, as a part of the all India tiger estimation using the refined methodology, could not be carried out owing to the unique habitat and obliteration of evidences due to high and low tides. Phase-I data collection has been completed and process is on for tiger estimation using a combination of radio telemetry and pugmark deposition rate from known tigers. A 2022 survey by the National Tiger Conservation Authority photographed 100 unique tigers.",
    images: [sunderban1],
    source: "",
  },
];

const facts = [
  "West Bengal is one of India’s major rice and fish-producing states.",
  "Spoken by over 250 million people, Bengali is the fifth most spoken language in the world. In a UNESCO international poll, it was celebrated as the 'sweetest language in the world'.",
  "Native to the Indian subcontinent, these iconic big cats are famous for their magnificent coats and incredible swimming abilities. They are primarily found in the Sundarbans, the largest contiguous mangrove forest in the world, which stretches across the Bay of Bengal.",
  "Bengal is renowned for its dairy-based sweets, particularly the spongy Rasgulla (or Roshogolla). While there is a historic rivalry over its exact origin, the modern spongy version was invented in Kolkata in the 1860s by confectioner Nobin Chandra Das.",
  "The region has been an immense intellectual hub, producing key figures like Rabindranath Tagore—the first non-European to win the Nobel Prize in Literature—and physicist C.V. Raman, who won the Nobel Prize for the Raman Effect.",
  "Kolkata (the capital of West Bengal) is home to India's very first operational underground rapid transit system, the Kolkata Metro, which officially opened in 1984.",
  "The Darjeeling Himalayan Railway, affectionately known as the 'Toy Train', climbs up the steep Himalayan foothills to Darjeeling. It is a UNESCO World Heritage site and famously operates on narrow-gauge tracks",
  "West Bengal is the fourth-most populous and thirteenth-largest state by area in India, as well as the eighth-most populous country subdivision of the world.",
  "During the Bengal Sultanate, the territory was a major trading nation in the world, and was often referred by the Europeans as the 'richest country to trade with'.",
  "Kolkata was once the capital of British India until 1911.",
  "West Bengal is one of India’s major rice and fish-producing states.",
];

const artGallery = [
  { title: "Chhau Dance", emoji: "💃", color: "#8B0000", desc: "Vibrant martial folk dance with ornate masks", image: wChhau },
  { title: "Baul Dance", emoji: "🎶", color: "#C0392B", desc: "Mystic folk tradition of Bengal's wandering minstrels", image: wBaul },
  { title: "Gambhira Dance", emoji: "🥁", color: "#784212", desc: "Devotional folk dance of the Malda region", image: wGambhira },
  { title: "Santhali Dance", emoji: "🌿", color: "#1E8449", desc: "Vibrant tribal dance of the Santhal community", image: wSanthali },
  { title: "Raibenshe Dance", emoji: "⚔️", color: "#6D4C41", desc: "Athletic martial folk dance of rural Bengal", image: wRaibenshe },
  { title: "Jhumur Dance", emoji: "🎵", color: "#8E44AD", desc: "Rhythmic folk dance of tea garden communities", image: wJhumur },
  { title: "Shorshe Ilish", emoji: "🐟", color: "#D4AC0D", desc: "Hilsa fish cooked in mustard sauce, Bengal's pride", image: wIlish },
  { title: "Chingri Macher Malaikari", emoji: "🍤", color: "#E67E22", desc: "Creamy prawn curry cooked in coconut milk", image: wChingri },
  { title: "Macher Jhol", emoji: "🍛", color: "#CB4335", desc: "Light and aromatic Bengali fish curry", image: wMacherJhol },
  { title: "Aloo Posto", emoji: "🥔", color: "#F1C40F", desc: "Potatoes cooked in poppy seed paste", image: wAlooPosto },
  { title: "Shukto", emoji: "🥬", color: "#117A65", desc: "Traditional bitter-sweet mixed vegetable medley", image: wShukto },
  { title: "Phuchka & Mughlai Paratha", emoji: "🫓", color: "#922B21", desc: "Iconic street food duo of Kolkata's lanes", image: wStreetFood },
  { title: "Darjeeling Toy Train", emoji: "🚂", color: "#1A5276", desc: "UNESCO heritage narrow-gauge mountain railway", image: wTrain },
  { title: "Kumortuli", emoji: "🏺", color: "#E8A020", desc: "Famous potters' quarter crafting Durga Puja idols", image: wKumortuli },
  { title: "Bengali Jewellery", emoji: "💍", color: "#76448A", desc: "Exquisite traditional gold jewellery of Bengal", image: wJewellery },
  { title: "Kalighat Painting", emoji: "🎨", color: "#C0392B", desc: "Traditional scroll painting from Kalighat, Kolkata", image: wKalighat },
  { title: "Bengali Saree & Attire", emoji: "🥻", color: "#8E44AD", desc: "Elegant white and red Bengali traditional dress", image: wAttire },
  { title: "Bengali Bridal Look", emoji: "👰", color: "#E8A020", desc: "Iconic bridal makeup with shankha pola and alta", image: wBridal },
];