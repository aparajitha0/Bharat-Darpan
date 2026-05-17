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
import tnMap from "@assets/TN_map_1776628923935.jpg";
import pongal1 from "@assets/image_1776788355951.png";
import pongal2 from "@assets/image_1776788364481.png";
import pongal3 from "@assets/image_1776788370635.png";
import pongal4 from "@assets/image_1776788376290.png";
import pongal5 from "@assets/image_1776788390385.png";
import jalli1 from "@assets/image_1776788400543.png";
import jalli2 from "@assets/image_1776788406884.png";
import chith1 from "@assets/image_1776788416217.png";
import chith2 from "@assets/image_1776788422339.png";
import puth1 from "@assets/image_1776788430140.png";
import puth2 from "@assets/image_1776788437438.png";
import adi1 from "@assets/image_1776788476146.png";
import adi2 from "@assets/image_1776788482041.png";
import dance1 from "@assets/image_1776788764847.png";
import dance2 from "@assets/image_1776788772553.png";
import navar1 from "@assets/image_1776788788721.png";
import navar2 from "@assets/image_1776788797545.png";
import karth1 from "@assets/image_1776788805779.png";
import karth2 from "@assets/image_1776788811412.png";
import karth3 from "@assets/image_1776788817244.png";
import karad1 from "@assets/image_1776788825797.png";
import karad2 from "@assets/image_1776788831894.png";
import sixAbodes from "@assets/image_1776788840602.png";
import thiruparankundram from "@assets/image_1776788847901.png";
import thiruchendur from "@assets/image_1776788856768.png";
import palani1 from "@assets/image_1776788865143.png";
import palani2 from "@assets/image_1776788870905.png";
import swamimalai from "@assets/image_1776788878018.png";
import thiruttani from "@assets/image_1776788887081.png";
import pazhamudir from "@assets/image_1776788895857.png";
import bhumiLingam from "@assets/image_1776788902350.png";
import jambuLingam from "@assets/image_1776788909064.png";
import jyothiLingam from "@assets/image_1776788916164.png";
import akashaLingam from "@assets/image_1776789530181.png";
import meenakshi1 from "@assets/image_1776789548589.png";
import meenakshi2 from "@assets/image_1776789554420.png";
import meenakshi3 from "@assets/image_1776789558971.png";
import meenakshi4 from "@assets/image_1776789565292.png";
import rames1 from "@assets/image_1776789575242.png";
import rames2 from "@assets/image_1776789580153.png";
import rames3 from "@assets/image_1776789590790.png";
import dhanush1 from "@assets/image_1776789610085.png";
import dhanush2 from "@assets/image_1776789615338.png";
import pamban1 from "@assets/image_1776789624415.png";
import pamban2 from "@assets/image_1776789631296.png";
import pamban3 from "@assets/image_1776789638782.png";
import chola1 from "@assets/download_1777100508255.png";
import chola2 from "@assets/download_1777100514323.png";
import chola3 from "@assets/download_1777100516025.png";
import velan1 from "@assets/download_1777100518481.png";
import velan2 from "@assets/download_1777100520664.png";
import velan3 from "@assets/download_1777100523842.png";
import velanFest1 from "@assets/image_1777102241686.png";
import velanFest2 from "@assets/image_1777102257711.png";
import thiruv1 from "@assets/download_1777100525385.png";
import thiruv2 from "@assets/download_1777100526870.png";
import vive1 from "@assets/download_1777100529380.png";
import vive2 from "@assets/download_1777100531237.png";
import vive3 from "@assets/download_1777100532535.png";
import mahab1 from "@assets/download_1777100537305.png";
import mahab2 from "@assets/download_1777100539158.png";
import mahab3 from "@assets/download_1777100541720.png";
import mahab4 from "@assets/download_1777100543112.png";
import nilgiri1 from "@assets/download_1777100544581.png";
import nilgiri2 from "@assets/download_1777100547931.png";
import malai1 from "@assets/download_1777100551195.png";
import malai2 from "@assets/download_1777100558868.png";
import sri1 from "@assets/image_1777100897996.png";
import sri2 from "@assets/image_1777100906255.png";
import sri3 from "@assets/image_1777100911861.png";
import gAmbur from "@assets/image_1777100917162.png";
import gTirunelveliHalva from "@assets/image_1777100921467.png";
import gDindigul from "@assets/image_1777100927953.png";
import gMalli from "@assets/image_1777100932602.png";
import gButterBun from "@assets/image_1777100937948.png";
import gJigarthanda from "@assets/image_1777100946447.png";
import gUthukuli from "@assets/image_1777100950953.png";
import gMuthu from "@assets/image_1777100955650.png";
import gSalemMango from "@assets/image_1777100960783.png";
import gErodeTurmeric from "@assets/image_1777100965689.png";
import gTiruppur from "@assets/image_1777100975810.png";
import gKanchiSilk from "@assets/image_1777100982364.png";
import gSungdi from "@assets/image_1777100987731.png";
import gBharatanatyam from "@assets/image_1777100994118.png";
import gDosaIdli from "@assets/image_1777101000988.png";
import gVenPongal from "@assets/image_1777101005896.png";
import gVadaSambar from "@assets/image_1777101012951.png";
import gRasam from "@assets/image_1777101457846.png";
import gPanniyaram from "@assets/image_1777101463186.png";
import gNeyiAppam from "@assets/image_1777101468204.png";
import gPoiKaal from "@assets/image_1777101472285.png";
import gKaragattam from "@assets/image_1777101478099.png";
import gThanjavur1 from "@assets/image_1777101487729.png";
import gThanjavur2 from "@assets/image_1777101493885.png";
import gSilambattam from "@assets/image_1777101502689.png";
import gThalaiyaati from "@assets/image_1777101507013.png";
import gFeast from "@assets/image_1777101512605.png";

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
export default function TamilNaduPage() {
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
                Tamil Nadu
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Temples
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Chennai" },
                  { label: "Population", value: "7.21 Crore" },
                  { label: "Area", value: "1,30,060 sq km" },
                  { label: "Founded", value: "26 January 1950" },
                  { label: "Language", value: "Tamil" },
                  { label: "Districts", value: "32 Districts" },
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
              Chennai
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Tamil Nadu — The Detroit of Asia
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Tamil Nadu" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(tnMap, "Map of Tamil Nadu")}
            >
              <img
                src={tnMap}
                alt="Map of Tamil Nadu"
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
              The State of Tamil Nadu has a hoary antiquity. Though
              early sangam classics throw historical references, we pass to
              recorded history only from the Pallavas.
            </p>
            <p className="text-foreground">
              The southern states of India were under the hegemony of the
              Cholas, the Cheras and the Pandyas for centuries. The Pallavas
              held supremacy from about the second quarter of the fourth century
              A.D. They were the originators of the famous Dravidian style of
              temple architecture. The last Pallava ruler was Aparajita, in
              whose reign the later Cholas under Vijayalaya and Aditya asserted
              themselves by about the 10th century. At the end of the
              11th century, Tamil Nadu was ruled by several dynasties like the
              Chalukyas, Cholas and Pandyas. In the two centuries that followed,
              the imperial Cholas gained paramountcy over South India.
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
              Even during the period of the tumultuous confusion that followed
              the battle of Talikota, European commercial interest had appeared
              as rivals in the area of South India. The Portuguese, the Dutch,
              the French and the English came in quick succession and
              established trading centres known as 'Factories'. East India
              Company, which had established its factory at Masulipatnam (now in
              Andhra Pradesh) in 1611, gradually annexed territories by
              encouraging enmity among the native rulers. Tamil Nadu was one of
              the first of British settlements in India. The State is the
              successor to the old Madras Presidency, which covered the bulk of
              the southern peninsula in 1901. The composite Madras State was
              later reorganised, and the present Tamil Nadu was formed.
            </p>
            <p className="text-foreground">
              Tamil Nadu is bounded on north by Andhra Pradesh and Karnataka, on
              the west by Kerala, on the east by the Bay of Bengal, and on the
              south by the Indian Ocean.
            </p>
            <p className="text-foreground">
              Tamil Nadu covers total land area of 130,060 km2 and is divided
              into 32 districts which are: Ariyalur, Chennai, Coimbatore,
              Cuddalore, Dharmapuri, Dindigul, Erode, Kancheepuram, Kanyakumari,
              Karur, Krishnagiri, Madurai, Nagapattinam, Namakkal, Perambalur,
              Pudukkottai, Ramanathapuram, Salem, Sivaganga, Thanjavur, The
              Nilgiris, Theni, Thiruvallur, Thiruvannamalai, Thiruvarur,
              Tirunelveli, Tirupur, Tiruchirappalli(Trichy),
              Tuticorin(Thoothukoodi), Vellore, Villupuram and Virudhunagar.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is regarded as the cradle of Dravidian culture with its
              cultural paraphernalia speckled all across the state in the form
              of magnificent temples, gateways, intricate carvings, and the
              society seeped in tradition.
            </p>
            <p className="text-xs text-muted-foreground">
              (src: govt of TN, mapsofindia.com)
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
        <Section title="Facts about Tamil Nadu" icon="💡">
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
    name: "Pongal",
    tagline: "The Harvest Festival of Tamil Nadu",
    description:
      'Pongal is the harvest festival celebrated by the farmers in January to worship the sun, the earth and the cattle as thanks giving for a bounteous harvest. It is followed by the Jallikattu. - Tamil Nadu celebrates a four day harvesting festival annually during the month of January, popularly known as “Pongal”. The celebration is held to praise the Sun God for nourishing the crops throughout the year. The four day celebration involves; Bhogi, Surya Pongal, Mattu Pongal and Kaanum Pongal.  The third day of the festival is Mattu Pongal, which features a significant ancient sport known as Jallikattu - the bull taming sport. Bhogi marks the first day of the Pongal festivities and is celebrated on the last day of the Tamil calendar month Marghazhi.On this day people discard old belongings and celebrate new possessions. The people assemble and light a bonfire in order to burn the heaps of discards. Houses are cleaned, painted and decorated to give a festive look. Thai Pongal is the main festive day, celebrated on the next day of Bhogi.[10][11] It is observed on the first day of the Tamil calendar month of Thai, and usually falls on 14 or 15 January. It is dedicated to the Sun deity Surya and corresponds to Makar Sankranti. According to tradition, the festival marks the end of winter solstice, and the start of the sun\'s six-month-long journey northwards when the sun enters the Capricorn, also called as Uttarayana. Dedicated to Surya, it is celebrated with family and friends with new clothes worn and the preparation of the traditional pongal dish in an earthen pot. The pot is typically decorated by tying a turmeric plant or flower garland and placed in the sun along with sugarcane stalks. The homes are decorated with banana and mango leaves, decorative florals and kolams. Relatives and friends are invited and when the pongal starts to boil and overflow out of the vessel,they blow a conch or make sounds while shouting "Pongalo Pongal" ("may this rice boil over"). In rural areas, people sing traditional songs while the pongal dish is cooking. The Pongal dish is first offered to Surya and Lord Ganesha, and then shared with the gathered friends and family. Mattu Pongal ("Madu" meaning cow in Tamil) is the third day of the festival meant for the celebration of cattle. The cattle is regarded as sources of wealth as it is a means for dairy products and fertilizers, used for transportation and agriculture. The cattle are bathed, their horns are polished and painted in bright colors with garlands of flowers placed around their necks and taken for processions. Kaanum Pongal, the fourth and final day of the Tamil harvest festival, signifies familial unity, social bonding, and gratitude towards nature. ‘Kanu Pidi’ is a ritual where women and young girls place leftover colored rice (often cooked from previous days), sugarcane, and vegetables on turmeric leaves in the open for birds, particularly crows (regarded as ancestors). They pray for the health and prosperity of their brothers and family. (src:Wikipedia)',
    images: [pongal1, pongal2, pongal3, pongal4, pongal5],
    source: "(src: Wikipedia)",
  },
  {
    name: "Jallikattu — Bull Fight",
    tagline:
      "In some parts of southern Tamil Nadu. Alanganallur in Tamil Nadu is internationally famous for Jallikattu.",
    description:
      "Jallikattu-Bull fight, in some parts of southern Tamil Nadu. Alanganallur in Tamil Nadu is internationally famous for Jallikattu. - In ancient times, ‘Yeru thazhuvuthal’ or embracing the bull, was connected in displaying the men’s pride and victory for winning over a girl for marriage. The sport has prevailed in Tamil culture for over 2000 years now.   Manju Virattu is conducted every year in various regions of the state including Madurai, Sivagangai and Pudukottai. The event begins as the bulls are released to the arena via a small entrance known as “ Vaadi Vaasal”. The male players known to be bull tamers, amid loud whistles, applauses and cheers wait nearby to the entrance and try to grab the bull's hump, which needs a lot of courage and prudence. The person who clutches the hump and takes the pouch containing cash or presents without falling off the bull is deemed the winner. Besides being identified as a conquering sport, it is also associated with the good motive of preserving pure-breeding of native bulls which were bred exclusively for the purpose of mating. The native Kangayam, Pulikulam, Umbalachery , Bargur and Malai Maadu are the combative breeds which compete highly in this sport. The sport has become the emotion of Tamilians with its long rooted historical and cultural significance. Madurai and Jallikattu The festival of cattle-worship is much delighted in Madurai and its sub regions. The sport is considered as a celebration in these areas. Preparations for this festival start months before the day of the event. The invites are sent to various villages about the celebration where the bulls are registered to enter the arena after a physical health check up. The district administration, Public works department, Police department along with local event organizers work together to maintain the integrity and dignity of the sport. Every year the regions of Avaniyapuram, Alanganallur and Palamedu attract around 700 native breeds of bulls and about 300 bull tamers from all around the state for this competition. The event also attracts a swarm of people, both locally and globally, visiting these areas to watch this magnificent sport. The bull taming sport in these regions are also telecasted on National Television every year.",
    images: [jalli1, jalli2],
    source: "",
  },
  {
    name: "Chithirai Festival, Madurai",
    tagline:
      "Brings a spectacular re-enactment of the marriage of the Pandiyan princess Meenakshi to Lord Sundareswarar.",
    description:
      "Chithirai festival, Madurai brings a spectacular re-enactment of the marriage of the Pandiyan princess Meenakshi to Lord Sundareswarar. - A famous Vishnu Temple dedicated to Lord Alagar is located 21 kilometres north of Madurai. The temple is set on a hill with breathtaking views. Alagarkoil is the name of the shrine, and Solaimalai is the name of the hill. The temple also has some lovely carvings, making it a worthwhile visit. The Hill is home to Palamudirsolai, one of Lord Subramaniya's six abodes.       Chithirai Festival, also known as Chithirai Thiruvizha, Meenakshi Kalyanam or Meenakshi Thirukalyanam, is an annual Tamil Hindu celebration in the city of Madurai during the month of April. The festival, celebrated during the Tamil month of Chithirai, is associated with the Meenakshi Temple, dedicated to the goddess Meenakshi, a form of Parvati and her consort Sundareshwar, a form of Shiva. The festival lasts for one month. The first 15 days mark the celebrations of the coronation of Meenakshi as the divine ruler of Madurai and her marriage to Sundareshwar. The next 15 days mark the celebrations of the journey of Kallalagar or Alagar (a form of the god Vishnu) from his temple in Alagar Koyil to Madurai. (src:utsav.gov.in)",
    images: [chith1, chith2],
    source: "(src: utsav.gov.in)",
  },
  {
    name: "Tamizh Puttandu — Tamil New Year",
    tagline:
      "Meaning 'Tamil New Year' — the first day of year on the Tamil calendar.",
    description:
      "Tamizh Puttandu  - meaning ‘Tamil new year’. is the first day of year on the Tamil calendar that is traditionally celebrated as a festival by Tamils. The festival date is set with the solar cycle of the solar Hindu calendar, as the first day of the month of Chittirai. It falls on or about 14 April every year. Households clean up the house, prepare a tray with fruits, flowers and auspicious items, light up the family puja altar and visit their local temples. People wear new clothes and children go to elders to pay their respects and seek their blessings, then the family sits down to a feast. On the eve of Puthandu, a tray is arranged with three fruits (mango, banana and jack fruit), betel leaves and arecanut, gold/silver jewellery, coins/money, flowers and a mirror. This is similar to the Vishu new year festival ceremonial tray in Kerala. According to the Tamil tradition, this festive tray is auspicious as the first sight upon waking on the new year day and is called ‘kani’. Home entrances are decorated elaborately with colored rice powder. These designs are called kolams. As soon as they wake up, they walk to the kani with their eyes closed and see it as the first scene of the year. This tradition is significant in both regions and is believed to bring good luck and prosperity for the coming year.",
    images: [puth1, puth2],
    source: "(src: boldskytamil.com)",
  },
  {
    name: "Adipperukku",
    tagline:
      "The festival of Padhinettam Perukku, also known as 'Aadi Perukku', held on the 18th day of the Tamil month of Aadi.",
    description:
      'Adipperukku - The festival of Padhinettam Perukku also known as "Aadi Perukku" is held on the 18th day of the Tamil month of Aadi. "Perukku" means "raising" in Tamil. This festival is a reflection of the River Kaveri\'s rise due to the monsoon rains. - The Tamil calendar month of Aadi is marked by festivities and fervour honouring Water and other natural resources. Prayers and pujas are performed throughout this month to express gratitude to the mighty Goddesses for abundant natural resources. The River Palar flows through the village of Kodaiyanchi near the Vaniyambadi town of Thirupathur district. The banks of the river are home to a 1000-year-old temple dedicated to Lord Shiva- Arulmigu Kasi Viswanathar Temple and Lord Murugan - Arulmigu Murugan Temple. Hundreds of devotees gather on the day of “Padhinettam Perukku” to celebrate the occasion by offering sweet Pongal to the deity. Mulaipari, also known as the sprouting or germination of nine grains (Navadhanyam) in clay mud pots, is a crucial ceremony that is performed in the temples during this occasion. Nine different varieties of cultivated grains are packed in the earthen pots that the procession devotees carry on their heads as they move towards the river where the grains are dissolved. The newly wedded couples from the surrounding villages come to this festival to replace their "mangalya thread" tied on the day of their marriage with a new one along with gold coins and trinkets. Women make a lamp using rice and jaggery, set it upon plantain leaves, and let it float along the River Palar.',
    images: [adi1, adi2],
    source: "",
  },
  {
    name: "Dance Festival, Mamallapuram",
    tagline: "Set before an open-air stage created 13 centuries ago.",
    description:
      "Dance Festival, Mamallapuram, which is set before an open air stage, created 13 centuries ago the incredible monolithic rock sculptures of the Pallavas, next to the sea in this ancient city of Mamallapuram. Bharatha Natyam, Kuchipudi, Kathakali, and Odissi are some dance forms presented by the very best exponents of the art besides folk dances. The Mamallapuram Dance Festival is organised by the Department of Tourism, Tamil Nadu, and is a 30-day festival held annually between December and January. Professional classical dance artists from all around the nation come together for this grand event to showcase their mesmerising performances in traditional dance forms like Bharathanattiyam, Kuchipudi, Kathakali, Mohini Attam, Assami Dance, Odissi, and Kathak. Also, folk dancers add to the festival's vibrant atmosphere with their spirited performances.Every year, the picturesque shore town of Mamallapuram hosts the “Indian Dance Festival” - A Festival of Our Culture and Tradition. The venue for the Mamallapuram- Indian Dance Festival is the front lawn of the Shore Temple. The artists perform on an open-air stage, which provides the finest ambience for the dancers to perform their best during the festival. Some of the most prominent classical dancers in the country perform at the event. This event is a vivid reminder of the ancient connection between people and the arts. This festival not only provides an amazing chance to become acquainted with many traditional dance styles of India, but it also serves as a networking opportunity for artists, dancers, musicians, and theatre professionals. The spectacular architecture, historic ambience, and enthralling performances entice tourists from all over the world to experience the festival.",
    images: [dance1, dance2],
    source: "(src: utsav.gov.in, Wikipedia)",
  },
  {
    name: "Velankanni Festival",
    tagline:
      "Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",
    description:
      "The Velankanni festival attracts thousands, clad in orange robes to the sacred spot where the ship landed. Equally famous are the Virgin Mary's miraculous healing powers, earning for the church the name 'Lourdes of the East'.  ",
    images: [velanFest1, velanFest2],
    source: "",
  },
  {
    name: "Navarathiri Festival — Kolu",
    tagline: "Literally means the festival of 'nine nights'.",
    description:
      "The Navarathiri Festival, literally means the festival of 'nine nights', taking unique and different forms in different states of India, all to propitiate the goddess Sakthi, for power, wealth and knowledge. - Celebrated in Tamil Nadu, Karnataka, and Andhra Pradesh, the festival includes placing dolls of a multitude of gods, goddesses, men, animals, and children on a steps-like set-up. In Tamil it is known as ‘Bommai Golu’. The Navratri Golu depicts scenes from ancient times – celebrated Indian stories that have been passed on from generation to generation like the Ramayana, Puranas, and the Dashavataram. This is the time of the year that you revisit those precious lessons from timeless, age-old stories. The steps may also be interpreted as the evolution ladder that we are all traversing in the journey of life. The dolls are placed on multiple steps in the house – in odd numbers. The numbers could vary from one to 11 depending on the number of dolls available for display. Many families place nine steps, each step representing the nine days of Navratri. Some keep three, five or seven steps as well. The steps are covered with a decorative cloth, and the dolls are placed on it. The first step is decorated with a kalash (ceremonial jar). The water-filled jar is decorated with a coronet of mango leaves, and a coconut is placed on top of it. It is considered to represent Goddess Durga. Idols of deities are placed on both sides of the kalash. According to tradition, the dolls of Goddesses Durga, Lakshmi, Saraswati and the wooden dolls called the Marapachi Bommai are always a part of the arrangement. The next few steps have idols of saints and heroes of the country. One of the steps represents human activities – depicting functions such as marriage, temples, and an orchestra or music band. Business is usually represented by the Chettiar set of dolls, with shop items and the Marapachi couple dressed in colorful clothes. It is a custom to add at least one new doll every year. The Golu could be a mode of telling ancient stories such as Ramayana or Bhagavad Gita or it could simply depict the evolution of life from animals to the sages and seers. On the tenth and last day, Vijayadasami, the day of victory, is celebrated. This is considered the most auspicious day of all – to start new ventures and journeys, and a day to start learning new skills. On this day, the Golu dolls are symbolically put to sleep, and then, packed the day after. Till they are brought out of their boxes the following year. Most people light lamps, draw colorful kolams (rangoli or floor decoration), perform aarti, recite shlokas (holy chants), and offer special dishes, especially a protein-rich dish called sundal (made of legumes), with some sweets and fruits every day. During the Golu set-up, women invite other women and honor them by gifting betel leaves, coconuts, fruits, flowers, bangles, turmeric, kumkum (vermilion powder) and prasadam (devotional offering of food made for the Divine and then distributed among people). It is an ideal time for families to display their creativity.",
    images: [navar1, navar2],
    source: "(Wikipedia)",
  },
  {
    name: "Karthigai Deepam",
    tagline: "An enchanting festival that illuminates the heart of Tamil Nadu.",
    description:
      "Karthigai Deepam is an enchanting festival that illuminates the heart of Tamil Nadu, with little clay lamps twinkling wherever you look like a million stars. The three-day festival, celebrated with great enthusiasm, is an integral part of Tamil culture. Devoted to Lord Karthikeya (also known as Lord Muruga), the lights of Karthigai Deepam are said to ward off darkness and evil spirits, spreading prosperity and joy. - As per ancient Hindu scriptures, the two great deities Lord Vishnu and Lord Brahma once started arguing with each other about who is superior. Each one claimed to be stronger than the other. At that point, Lord Shiva appeared to quell the fight. He took the shape of a huge fire and challenged the two Gods to find the end of the fire from the top and bottom. Lord Vishnu took the form of a boar and tried to reach the end of the fire beneath the earth, but he couldn’t and came back to Lord Shiva saying that he was unable to find it. Lord Brahma on the other hand, took the shape of a swan and flew to find the beginning of the fire on top. But his search too was in vain as he was unable to find the top of the fire. Thus, Lord Shiva proved his supremacy over the two Gods and managed to stop the fight. He then appeared in the form of a hill in Thiruvannamalai. A temple dedicated to Lord Shiva stands on the hill, where Karthigai Deepam celebrations include the lighting of a big fire. The Maha Deepam , which is lit on the hill as the culmination of the 10-day festival at the Arunachaleswarar Temple in Tiruvannamalai, is very famous.  This festival is celebrated during the months of November - December (Karthigai month) {src:incredibleindia.com}",
    images: [karth1, karth2, karth3],
    source: "(src: kalkionline.com, incredibleindia.com, tirthyatra.com)",
  },
  {
    name: "Karadaiya Nombu",
    tagline: "Marking the transition from the Tamil month of Maasi to Panguni.",
    description:
      "Karadaiya Nombu - marking the transition from the Tamil month of Maasi to Panguni. It is a significant festival where married women and young girls fast and pray to Goddess Kamakshi/Gowri for their husbands' longevity and prosperity, inspired by the story of Savitri and Satyavan. Celebrates the dedication of Savitri, who brought her husband back from Yama, embodying love and commitment. According to the legend, Savitri was a devoted princess who used her wit and devotion to reclaim the life of her husband, Satyavan, from Yama, the god of death. When Satyavan's destined time to die arrived, Savitri followed Yama as he carried her husband's soul away. Impressed by her persistence and eloquent arguments, Yama offered her several boons, excluding the life of her husband. For her final wish, Savitri requested that she be blessed with a hundred sons. When Yama granted the wish, Savitri pointed out that she could not fulfill this blessing without her husband being alive. Bound by his own word, Yama was forced to restore Satyavan to life. Women fast, and prepare special sweet and savory rice cakes called \"Karadai\" or \"Adai,\" served with butter.  Women tie a sacred yellow thread, often with a small flower piece, around their neck, symbolizing their prayer for their husband's long life.",
    images: [karad1, karad2],
    source: "(src: kannan's kitchen, veenas vegnation)",
  },
];

const historicalPlaces = [
  {
    name: "Six Abodes of Murugan (Arupadai Veedu)",
    description:
      "Six abodes of murgan -- The Six Abodes of Murugan, known as ‘Arupadai Veedu’, are sacred temples in Tamil Nadu, India, celebrating different stages of Lord Murugan's life, victories, and legends. ",
    images: [sixAbodes],
    subPlaces: [
      {
        name: "Subramaniyaswamy Temple – Thiruparankundram",
        location: "Madurai district",
        description:
          "Subramaniyaswamy Temple – Thiruparankundram, Madurai district – Located on a hillock, it is first of the Aarupadaiveedu. Murugan's marriage with Deivanai took place here.",
        images: [thiruparankundram],
        source: "(src: Tumblr)",
      },
      {
        name: "Arulmigu Senthilnathar Temple – Tiruchendur",
        location: "Thoothukudi district",
        description:
          "Arulmigu Senthilnathar Temple – Tiruchendur, Thoothukudi district - Located along the coast of Bay of Bengal, the temple commemorates the place where Murugan won a victory over the demon Surapadman. ",
        images: [thiruchendur],
        source: "(src: cottage9)",
      },
      {
        name: "Arulmigu Dandayudhapani Temple – Palani",
        location: "Dindigul district",
        description:
          "Arulmigu Dandayudhapani Temple – Palani, Dindigul district - Located at the foothills of a hillock, the deity known as 'Kulanthai Velayuthaswami' is depicted as a young form of Murugan, and said to have been worshipped by the goddess Lakshmi. In the temple on the hilltop where 'Dhandayuthapani' is the main deity, Murugan is depicted as a hermit carrying a staff ('danda'). This is the place where Murugan is said to have arrived after his feud with his family over a divine fruit. Divine story of how and why Murugan came to Palani ----  Once upon a time, the revered sage Devrishi Narad paid a visit to Lord Shiva and Maa Parvati. During his visit, he presented Maa Parvati with a unique mango, claiming that whoever consumed it would gain extraordinary qualities and powers. Being the loving mother she is, Mata Parvati wished to share this special fruit between her two sons, Lord Ganesha and Lord Kartikeya. Devarishi Narad proposed that the mango could only be consumed by one person, prompting them to organize a contest between the two brothers. The challenge was set: each had to complete three rounds of the world, and the one who returned first would be declared the winner. Eager to claim the mango, Lord Kartikeya swiftly mounted his peacock and soared into the skies to complete the three rounds. Meanwhile, Lord Ganesha, without a flying mount, contemplated his approach. Undeterred, he began walking around his seated parents, Lord Shiva and Maa Parvati, completing three rounds. When Lord Ganesha finished, he humbly claimed his reward. Perplexed, Lord Shiva and Maa Parvati reminded him that the competition was to encircle the entire world three times. In response, Ganesha, with a wise smile, declared that his parents are his world, and by encircling them, he had indeed completed three rounds of his world. Thus, he emerged as the true victor in the competition of devotion and wisdom.Upon Lord Kartikeya’s triumphant return, expectations of victory filled the air. With his peacock Vahana, he had swiftly traversed the world, confident of securing the divine mango. However, as he approached Lord Shiva and Maa Parvati, the atmosphere shifted. The revelation that Lord Ganesha was declared the winner, not due to physical prowess, but through a profound display of devotion. Due to this, Lord Murugan feeling betrayed and angry at his parents leaves to Palani. ",
        images: [palani1, palani2],
        source: "(src: Cottage9, southern travels)",
      },
      {
        name: "Swaminatha Swamy Temple – Swamimalai",
        location: "Thanjavur district",
        description:
          'Swaminatha Swamy Temple – Swamimalai, Thanjavur district - Located atop a small hillock, the temple commemorates the incident where Murugan is regarded to have explained the essence of the Pranava mantra "Om" to his father Shiva. Story ---- Once Brahma, the Lord of all creation, disrespected Murugan when he was visiting Mount Kailash. Then, the ever-playful Murugan boldly asked Brahma the meaning of the Pranava Mantra “OM”. Failing to answer the question, Brahma admitted his ignorance. Murugan knocked his forehead, and imprisoned Brahma, bringing the whole of creation to a standstill. The demigods prayed to Lord Shiva for the release of Brahma. But Murugan insisted the imprisonment was a just punishment for Brahma\'s ignorance. Lord Shiva then asked Murugan whether he Himself knew the meaning of Pranava “Aum”. Murugan said he knew its meaning, but would only explain it if Lord Shiva accepted him as a guru and listened to him as a devoted disciple. Shiva accepted the request, and the son became the teacher. He then imparted upon the father the meaning of the sacred Pranava mantra “Aum” and the divine father, proud of understanding the significance, conferred respect to Murugan for his wisdom. You will see in the main shrine in the temple complex in Swamimalai that Murugan is depicted as a teacher and Shiva is listening as a disciple and, in this temple, the son is on a higher pedestal than the father.',
        images: [swamimalai],
        source: "(src: casual walker)",
      },
      {
        name: "Subramanya Swamy Temple – Tiruttani",
        location: "Thiruvallur district",
        description:
          'Subramanya Swamy Temple - Tiruttani, Thiruvallur district - Located atop a hill, Murugan is said to have reclaimed his inner peace after winning a war over the Surapadman and married Valli here. Story ---- After the intensity of the war in Tiruchendur, Murugan needed a place to subdue his anger and seek inner peace, making Tiruttani a place of tranquility. Thanigai in Tamil means "to pacify" or "to calm down," which is why the hill and town are named Tiruttani, where the deity grants mental peace and relieves devotees of anger and stress. Because he came to this spot for peace, the idol of Murugan here is often seen holding a Vajra Vel (thunderbolt weapon) rather than the standard spear, and he is often depicted with a calmer expression and has an elephant mount (vahana)instead of his usual peacock. Valli, a mortal daughter of a tribal chieftain (Kuravas) in Tamil Nadu, was born of a doe and destined to marry Lord Murugan. Valli, from a young age, fell in love with a divine figure (Murugan) and desired to marry him, avoiding all human suitors. Lord Murugan, attracted by her devotion, visited her in the millet fields. He approached her first as a hunter, then with the help of his brother Ganesha (appearing as a wild elephant), he frightened her into accepting his hand in marriage.',
        images: [thiruttani],
        source: "(src: Wikipedia)",
      },
      {
        name: "Solaimalai Murugan Temple – Pazhamudircholai",
        location: "Madurai district",
        description:
          'Solaimalai Murugan Temple - Pazhamudircholai, Madurai district – Located on a hillock near a stream called "Nupura Gangai", Murugan is seen here with both his consorts, Deivanai and Valli. - Story ---- Avvaiyar was a renowned and legendary Tamil poetess and a name behind one of the most famous and appreciated works ever written in Hindu folklore. Her exceptional vocabulary and dexterity in the language made her works stand apart, in the list of even the greatest of the poets. This had started to make her audacious over her abilities. According to the pages drenched in the antiquity of the Hindu folklore, Lord Murugan who was well-versed with his devotee wanted to teach her a lesson and took the shape of a ten-year-old boy in here in Solaimalai. After having achieved everything in her life, Avviayar was resting under a Naaval tree, trying to figure out what lied next for her. A small boy appeared out of nowhere and stood on the tree. The boy asked Avviayar if she would like some fruits. Driven by hunger and thirst, she agreed instantly. The boy asked if she wanted a hot fruit or a cold one, which confused Avviayar but was tired to argue and opted for the cold one. Smilingly, the boy shook the tree, as many fruits fell, all of which were collected by her. The fruits were coated with the sand, so Avviayar blew them to remove it. The boy asked innocently, why was she trying to cool down the fruit blowing, which was already cold. This incident left Avviayar humbled by the clever wordplay and the poetic knowledge of the little boy. However, She was skeptical of the boy’s true identity which was revealed to her as Lord Murugan himself. She bowed to the almighty and requested him to bestow her with his bountiful knowledge, for she had realized the power of infinite learning. She sought Lord Murugan’s blessings and embarked on her quest for endless knowledge.',
        images: [pazhamudir],
        source: "(src: TemplePurohit)",
      },
    ],
  },
  {
    name: "Pancha Bhootam Temples",
    description:
      "The Pancha Bhoota Stalam refers to five sacred Shiva temples in South India, each representing a natural element: Earth, Water, Fire, Air, and Ether (Space). Out of 5, 4 of these temples are  located in Tamil Nadu and 1 Is in Andhra Pradesh, embodying the Hindu philosophy that nature's elements are manifestations of Shiva. In the temples, Shiva is said to have manifested himself in the respective forms of the five elements.",
    hasImage: false,
    subPlaces: [
      {
        name: "Earth – Bhumi Lingam – Ekambareshwar Temple",
        location: "Kanchipuram",
        description:
          "Earth – Bhumi Lingam – Ekambareshwar Temple – Kanchipuram - Shiva is worshipped as Ekambareswarar or Ekambaranathar, and is represented by the lingam, with his idol referred to as Prithvi (earth) lingam. The temple complex covers 25 acres and is one of the largest in India. It houses four gateway towers known as gopurams. The tallest is the southern tower, with 11 stories and a height of 58.5216 metres (192 ft), making it one of the tallest temple towers in India. The temple complex houses many halls; the most notable is the thousand-pillared hall built during the Vijayanagara period. Legend has it that once Parvati, the consort of Shiva, wanted to expiate herself from sin by doing penance under the temple's ancient Mango tree near the Vegavati river. She created the lingam out of wet soil. This lingam is now covered with silver. ",
        images: [bhumiLingam],
        source: "",
      },
      {
        name: "Water – Varuna/Jambu Lingam – Jambukeshwarar Temple",
        location: "Thiruvanaikaval, near Trichy",
        description:
          "Water – Varuna/Jambu lingam – Jambukeshwarar Temple – Thiruvanaikaval, near Trichy - The sanctum of Jambukeswara has the copper plated lingam and an underground water stream, and despite draining the water out, it is always filled with water. Once, Parvati mocked Shiva's penance for the betterment of the world. Shiva wanted to condemn her act and banished her to the earth from Mount Kailash (Shiva's heavenly abode) to do penance. Parvati, in the form of Akhilandeshwari as per Shiva's wish, found the Jambu forest to conduct her penance. She made a lingam out of water of the river Kaveri (also called as river Ponni) under the Venn Naaval tree (the jambu tree on top of the saint Jambu) and commenced her worship. The lingam is known as Appu Lingam or Jala Lingam (Water Lingam). There are five enclosures inside the temple. The massive outer wall covering the fifth precinct, known as the Vibhuti Prakara, stretches over a mile and is two feet thick and over 25 feet high. Legend maintains that the wall was built by Shiva working with the labourers.[10] The fourth precinct contains a hall with 796 pillars and measures 2436 feet by 1493.",
        images: [jambuLingam],
        source: "",
      },
      {
        name: "Fire – Agni/Jyothi Lingam – Annamalaiyar Temple",
        location: "Thiruvannamalai",
        description:
          "Fire – Agni/Jyothi Lingam – Annamalaiyar Temple – Thiruvannamalai - Shiva is worshipped as Annamalaiyar or Arunachaleshwar, and is represented by a silver plated lingam, with his idol referred to as Agni lingam. The sanctum inside is always lit by fire lamps. The 9th-century Shaiva saint poet Manikkavacakar composed the Tiruvempaavai here. The temple complex covers 10 hectares and is one of the largest in India. It houses four gateway towers known as gopurams. The tallest is the eastern tower, with 11 stories and a height of 66 metres (217 ft), making it one of the tallest temple towers in India built by Sevappa Nayakar (Nayakar dynasty). The temple complex houses many halls; the most notable is the thousand-pillared hall built during the Vijayanagar period. The Karthika Deepam festival is celebrated during the day of the full moon between November and December, and a huge beacon is lit atop the nearby Annamalai hill. It can be seen from miles around, and symbolises the Shiva lingam of fire joining the sky. The event is witnessed by three million pilgrims. On the day preceding each full moon, pilgrims circumnavigate the temple base and the Annamalai hills in a worship called Girivalam, a practice carried out by one million pilgrims yearly. ",
        images: [jyothiLingam],
        source: "",
      },
      {
        name: "Ether/Space – Indra/Akasha Lingam – Thillai Natarajar Temple",
        location: "Chidambaram",
        description:
          'Ether/ Space – Indra/Akasha Lingam – Thillai Natarajar Temple – Chidambaram - Chidambaram, the name of the city and the temple, literally means "atmosphere of wisdom" or "clothed in consciousness"; the temple architecture symbolises the connection between the arts and spirituality, creative activity and the divine.The temple wall carvings display all the 108 karanas from the Natya Shastra by Bharata Muni, and these postures form a foundation of Bharatanatyam, a classical Indian dance. The present temple was built in the 10th century when Chidambaram was the capital of the Chola dynasty, making it one of the oldest surviving active temple complexes in South India. After its 10th-century consecration by the Cholas who considered Nataraja as their family deity, Shiva himself is idolised in three forms, as a crystal lingam, as a formless space covered by curtains (Chidambaram rahasyam), and as the Nataraja performing the Ananda Tandava ("Dance of Delight") in the golden hall of the shrine Pon Ambalam. The temple is one of the five elemental lingas in the Shaivism pilgrimage tradition, and considered the subtlest of all Shiva temples (Kovil) in Hinduism. It is also a site for performance arts, including the annual Natyanjali dance festival on Maha Shivaratri.',
        images: [akashaLingam],
        source: "",
      },
      {
        name: "Air – Vayu Lingam – Srikalahasti Temple",
        location: "Srikalahasti, Andhra Pradesh",
        description:
          "The one Pancha Bhootam temple located outside Tamil Nadu. Shiva is worshipped as Srikalahastishvara — the lord of Vayu (wind). A lighted lamp inside the sanctum always flickers as if in a breeze, even though there is no air moving, symbolising the presence of Vayu (Air). It is one of the most celebrated Shiva temples in South India.",
        hasImage: false,
        source: "",
      },
    ],
  },
  {
    name: "1000-Pillar Temple — Madurai Meenakshi Temple",
    description:
      'Meenakshi Temple, also known as Meenakshi Sundareswarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu, India. It is dedicated to Meenakshi, a form of Parvati, and her consort Sundareswarar (Shiva). Built around 1569 by Ariyanatha Mudaliyar, the minister of the Nayak dynasty, the hall is known for its structural beauty and detailed carvings. It is called the 1000-pillar temple because it houses a massive, 16th-century hall known as the Aayiram Kaal Mandapam, which contains a vast, intricately carved forest of pillars. Though often referred to as "1000," the hall actually holds 985, not 1000, granite pillars arranged in rows. While the Sangam literature mentions the temple city of Madurai, the existence of a temple is first referenced in the Tamil texts from 6th century CE. It is one of the Paadal Petra Sthalams, Shiva temples that are revered in the Tevaram verses composed by the Nayanars between the 6th and 11th century CE. The early structures of the temple were built during the reign of the Pandyas in the 12th to 13th century CE. It was later rebuilt by the Vijayanagara Empire in the 14th century CE, after its destruction by the armies of the Delhi Sultanate. The temple complex was later expanded extensively by the Madurai Nayaks in the 16th and 17th centuries. While a few structural improvements were made during the 18th and 19th centuries CE, the temple condition degraded due to negligence during the British Raj. After the Indian independence in the mid 20th century, the temple was restored with donations collected from people. Further restoration and kumbhabhishekam of the temple was conducted in 1974, 1995, and 2009. The temple conducts six pujas everyday, each comprising four rituals namely abhisheka (sacred bath), alankaram (decoration), naivedanam (food offerings) and deepa aradanai (lamp ceremony) for both Meenakshi and Sundareswarar. The rituals and festivals are accompanied with music from instruments such as nadhaswaram (pipe instrument), davandai and tavil (percussion instrument), often along with the recitation of the Vedas. The Hindus circumambulate the shrines clockwise before entering the shrine for a darshana. The Meenakshi shrine is typically visited before the Sundareswarar shrine by the pilgrims, as she is considered the primary deity of the complex. The Meenakshi temple hosts a festival in each month of the Tamil calendar. The Meenakshi thirukalyanam, which celebrates the wedding of Meenakshi and Sundareswarar, is celebrated over 15 days, and is the most attended festival. The festival, celebrated during the month of Chithirai, is part of the ‘Chithirai Thiruvizha’. The festivities include number of events such as the ‘Ther Thiruvizha’ (temple car festival) and ‘Theppa Thiruvizha’ (float festival). The wedding of the divine couple is regarded as an instance of a South Indian wedding with matrilineal emphasis, an arrangement referred as "Madurai marriage", which is in contrast with the "Chidambaram marriage", with patrilineal emphasis, named after the rituals at the Nataraja temple at Chidambaram. The festival includes the wedding ritual, where Alagar (Vishnu) gives away his sister Meenakshi, the royal bride, in marriage to Shiva, and a procession, where the idols of Meenakshi and Sundareswarar are taken in a temple car, pulled by volunteering devotees.',
    images: [meenakshi1, meenakshi2, meenakshi3, meenakshi4],
    source: "(src: Wikipedia, National Geographic)",
  },
  {
    name: "Rameshwaram Temple",
    description:
      "Ramanathaswamy Temple (Rāmanātasvāmi Kōyil) is a Hindu temple dedicated to the Hindu god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is one of the twelve Jyotirlinga temples. According to tradition, the lingam (an aniconic form of Shiva) of the Ramanathaswamy Temple was established and worshipped by Rama before he crossed the bridge called Rama Setu to the island kingdom of Lanka, identified with Sri Lanka. It is one of the Char Dham pilgrimage sites. In the Yuddha Kanda of the Ramayana, on their journey back to Ayodhya, Rama narrates to Sita the appearance and worship of Shiva in the form of a lingam on the island of Rameswaram before the construction of his bridge to Lanka. He describes the spot to be supremely sacred and capable of expiating major sins. In the Shiva Purana, Rama propitiates Shiva on the shore of Rameswaram in the form of a lingam by the repetition of mantras, meditation, and dancing. Pleased, the deity appeared before Rama and granted his requested boon of victory over Ravana. Rama then requested the deity to remain on the island to sanctify the world and offer his grace to all people. There are sixty-four Tīrthas (holy water bodies) in and around the island of Rameswaram, Tamil Nadu, India. According to Skānda Purāṇa, twenty-four of them are important. Bathing in these Tīrthas is a major aspect of the pilgrimage to Rameswaram and is considered equivalent to penance. Twenty-two of the Tīrthas are within the Rāmanāthasvāmī Temple. The number 22 indicates the 22 arrows in Rama's quiver. is famous for its massive corridor, which features 1,212 intricately carved, symmetrical pillars. These sandstone pillars, standing approximately 30 feet tall, form the world's longest temple corridor. Some reports suggest the overall temple complex may have up to 4,000 pillars in total.",
    images: [rames1, rames2, rames3],
    source: "(src: Famous Tamil Nadu Temples, Wikimedia Commons, Intermiles)",
  },
  {
    name: "Dhanushkodi",
    description:
      "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is south-east of Pamban and is about 24 kilometres (15 mi) west of Talaimannar in Sri Lanka. The town was destroyed during the 1964 Rameswaram cyclone and remains uninhabited in the aftermath. Although devoid of inhabitants, Dhanushkodi remains a tourist attraction due to its historical and mythological relevance. An estimated 1,800 people died in the cyclonic storm on 22 December 1964 including 115 passengers on board the Pamban-Dhanushkodi passenger train. The entire town was marooned and the Government of Madras declared Dhanushkodi as a ghost town, unfit for living. Around the 40th anniversary of the deadly cyclone, the sea around Dhanushkodi receded about 500 metres (1,600 ft) from the coastline, briefly exposing the submerged part of the town before massive tsunami waves struck the coast on 26 December 2004. The name Dhanushkodi means \"end of the bow\".It is significant for its deep mythological roots to the Ramayana, having served as the site where Lord Rama is believed to have marked the starting point of the Ram Setu bridge to Lanka. It serves as the starting point for the legendary Ram Setu, a 50 km long chain of limestone shoals connecting India's Rameswaram Island to Sri Lanka's Mannar Island.",
    images: [dhanush1, dhanush2],
    source: "(src: Kiomoi Travels, Tusk Travels)",
  },
  {
    name: "Pamban Bridge",
    description:
      "Pamban bridge was a railway bridge that connected the town of Rameswaram on Pamban Island with Mandapam in mainland India. Opened on 24 February 1914, it was India's first sea bridge. The Pamban bridge was the only surface transport link that connected Rameswaram to the mainland India until 1988, when a road bridge was constructed parallel to the railway bridge. In 2020, construction of a new bridge closer to the existing one began which was planned to eventually replace the existing bridge. The New Pamban Bridge was completed in 2024 and was opened for traffic in April 2025.",
    images: [pamban1, pamban2, pamban3],
    source: "",
  },
  {
    name: "The Great Chola Temples (UNESCO World Heritage Site)",
    description:
      "The Great Living Chola Temples were built by kings of the Chola Empire, which stretched over all of south India and the neighbouring islands. The site includes three great 11th- and 12th-century Temples: the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram and the Airavatesvara Temple at Darasuram. The Temple of Gangaikondacholisvaram, built by Rajendra I, was completed in 1035. Its 53-m vimana (sanctum tower) has recessed corners and a graceful upward curving movement, contrasting with the straight and severe tower at Thanjavur. The Airavatesvara temple complex, built by Rajaraja II, at Darasuram features a 24-m vimana and a stone image of Shiva. The temples testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting.. The Thanjavur temple is also variously known as Thanjai Periya Kovil, the Thanjavur Big Temple or Rajarajeshwaram, temple of the God of Rajaraja. It is one of the largest Hindu temples and an exemplar of Tamil architecture. Rajaraja himself referred to his temple as Dakshina Meru or the southern abode of Lord Shiva. Construction of the temple began in about 1003-1004 CE, and it was consecrated by Rajaraja in 1010 CE. The Chola kingdom was economically prosperous – they not only controlled every important trading port in south India, but they also had a monopoly over production of the gold mines of Kolar, the pearl fisheries in the Gulf of Mannar, the diamond mines that lay between the rivers Krishna and Pennar on the Deccan plateau (the Golconda mines) and the gem production of Ceylon as well. They are recognized as one of the 44 unesco world heritage sites of india because of the following 4 criterias-\n\nCriterion (i): The three Chola temples of Southern India represent an outstanding creative achievement in the architectural conception of the pure form of the dravida type of temple.\n\nCriterion (ii): The Brihadisvara Temple at Thanjavur became the first great example of the Chola temples, followed by a development of which the other two properties also bear witness.\n\nCriterion (iii): The three Great Chola Temples are an exceptional and the most outstanding testimony to the development of the architecture of the Chola Empire and the Tamil civilisation in Southern India.\n\nCriterion (iv): The Great Chola temples at Thanjavur, at Gangaikondacholapuram and Darasuram are outstanding examples of the architecture and the representation of the Chola ideology.",
    images: [chola1, chola2, chola3],
    source: "(src: Moneycontrol, Incredible India)",
  },
  {
    name: "Velankanni Church",
    description:
      "The Basilica of Our Lady of Good Health, also known as Sanctuary of Our Lady of Velankanni, is a Christian shrine located at the town of Velankanni, Tamil Nadu, India. The shrine is dedicated to the Blessed Virgin Mary. The devotion has existed since the mid-sixteenth century, it is attributed to three separate events which occurred at the site: The apparition of the Madonna and Child to a slumbering shepherd boy, the miraculous healing of a handicapped buttermilk vendor and the rescue of Portuguese sailors from a deadly sea storm. The basilica is built in the Gothic style of architecture. The southern side was extended in 1928 and the northern in 1933. The Shrine Basilica contains three chapels, as well as Our Lady's Tank, Church Museum, Priests' Residence, Offering Center, Stations of the Cross, mysteries of the rosary, Shrine Mega Mahal and Velankanni Beach. The building is painted in white, except for the roof that is made of red tiles. For Goan and Konkani people, she is called \"Shantadurga\" (most compassionate one). A major event is the procession, where only women are allowed to pull the first car and a statue of Mary is in the last and most decorated one. People of other religions also take part. The pilgrims sometimes shave their heads as an offering and perform ear-piercing ceremonies, both being Hindu traditions. Another ritual considered sacred is dipping oneself in the pond. There is a holy flag which is lowered to signal the end of the festival.",
    images: [velan1, velan2, velan3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Thiruvalluvar Statue, Kanyakumari",
    description:
      "The Thiruvalluvar Statue, or Valluvar Statue, is a 40.6-metre-tall (133 ft) stone sculpture of Tamil poet and philosopher Valluvar, known as Thiruvalluvar, the author of the Thirukkural, an ancient Tamil work on morality. It is atop a small island near the town of Kanniyakumari on the southernmost point of the Indian peninsula in the state of Tamil Nadu, India, where the Bay of Bengal, the Arabian Sea and the Indian Ocean meet. It is currently the 25th tallest statue in India. During its silver jubilee celebrations on January 1, 2025, the Government of Tamil Nadu declared the statue as the “Statue of Wisdom”. The combined height of the statue and pedestal is 133 feet (41 metres), denoting the 133 chapters of the Thirukkural. This includes a 95-foot (29-metre) sculpture of Valluvar standing upon a 38-foot (12-metre) pedestal that represents the 38 chapters of Virtue, the first of the three books of the Kural text. The statue itself represents the second and third books of the Kural text, namely, Wealth and Love. The whole design signifies that wealth and love be earned and enjoyed on the foundation of solid virtue.[3] The right hand of the statue with three fingers pointing skywards signifies the three cantos of the Kural text, namely, Aram, Porul, and Inbam (Virtue, Wealth, and Love, respectively), combined.[4] The head of the statue stands at a height of 61 metres (200 ft) above the sea level. There is a glass bridge viz., Kanyakumari Glass bridge also called as Kanyakumari Glass fibre footover bridge, an footover bridge built for pedestrians to cross the sea connecting Thiruvalluvar Statue and Vivekananda Rock Memorial in Kanyakumari which was inaugurated on 30 December 2024. he monument was hit by the Indian Ocean tsunami on 26 December 2004 but stood unaffected. The statue is designed to survive earthquakes of unexpected magnitude, such as magnitude 6 on the Richter Scale occurring within 100 kilometres (62 mi). This is far beyond that of any event recorded in the regional history because the bedrock in the region is ancient and without known local faults.",
    images: [thiruv1, thiruv2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Vivekananda Rock Memorial",
    description:
      "Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the two rocks located about 500 meters off mainland of Vavathurai, Tamil Nadu. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock. According to legends, it was on this rock that Goddess Kanyakumari (Parvathi) performed tapas in devotion of lord Shiva. A meditation hall known as Dhyana Mandapam is also attached to the memorial for visitors to meditate. The design of the mandapa incorporates different styles of temple architecture from all over India. The rocks are surrounded by the Laccadive Sea where the three oceans Bay of Bengal, the Indian Ocean and the Arabian Sea meets. The memorial consists of two main structures, the Vivekananda Mandapam and the Shripada Mandapam. The establishment of Vivekananda Kendra—the Living Memorial alongside the stone structure of the Rock Memorial—was mentioned in 1964. After the groundwork of about nine years, Vivekananda Kendra was officially founded on 7 January 1972 (the 108th birth anniversary of Swami Vivekananda by the Hindu calendar). On that day, as the sun rose, a saffron flag with Om inscribed on it was unfurled on the Vivekananda Rock Memorial to celebrate the founding of the Vivekananda Kendra: a spiritually oriented service mission of a non-monastic order.",
    images: [vive1, vive2, vive3],
    source: "(src: Wikipedia)",
  },
  {
    name: "Group of Monuments at Mahabalipuram (UNESCO World Heritage Site)",
    description:
      "This group of sanctuaries, founded by the Pallava kings, was carved out of rock along the Coromandel coast in the 7th and 8th centuries. It is known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), giant open-air reliefs such as the famous 'Descent of the Ganges', and the temple of Rivage, with thousands of sculptures to the glory of Shiva. It is on the Coromandel Coast of the Bay of Bengal, about 60 kilometres (37 mi) south of Chennai. The site has 40 ancient monuments and Hindu temples, including one of the largest open-air rock reliefs in the world: the Descent of the Ganges or Arjuna's Penance. The monuments were built during the rule of the Pallava dynasty.\n\nThe ratha temples, in southern Mahabalipuram, are carved in the shape of chariots. Their artists used naturally occurring blocks of diorite and granite in sand, carving legends in stone. The best-known are the five monolithic structures projecting above the beach, known as the Five Rathas or the Pandava Rathas. In the Mahabharata, the Pandavas are five brothers with a common wife, Draupadi. Although the symbolism and grouping of the temples have led to these popular names, they are neither true rathas nor dedicated to the Pandavas. The Dharmaraja ratha has a square floor plan within a rectangular frame (26.75 ft x 20.67 ft), and is 35.67 feet high. It has an open porch supported by pillars. The temple's pyramidal tower consists of a vimana of shrinking squares, capped by an octagonal shikhara. There is evidence that it had (or was intended to have) a finial. Its pillars have seated lions at the base. It has three levels; the lowest is solid (probably never carved out), and the upper two have shrines. The two upper levels are connected by stairs carved into the stone. The middle level has two shrines, and the uppermost has one. The ratha walls have carvings and inscriptions, one mentioning Narasimhavarman I. Bhima Ratha (next to the Dharmaraja Ratha) is massive and has a roof resembling a vaulted barrel, reminiscent of woodwork. The ratha is 46 feet (14 m) long, about 25 feet (7.6 m) high and about 25 feet wide. Its incomplete interior was probably intended to house a reclining Vishnu (anantasayana). Unlike the other rathas, the temple has no inscriptions or sculptures. Its vimana is intricately carved on both sides of the roof. The cornice has seven pairs of kudus (Sanskrit: gavaksha). Above it are alternating salas and kutas (types of aediculae), forming thirteen small vimanas. Above this layer are five grivas (necks, clerestory) carved into the shrine, like a niche flanked by small pilasters. The two on each side are the same size, and the middle one is larger. There is structural evidence on the top of eighteen original kalashas and two tridents. Arjuna Ratha, adjacent to Bhima Ratha, is also incomplete. One of the larger monuments, it is about six times smaller in area than the Dharmaraja Ratha. The unfinished Nakula Sahadeva Ratha is an apsidal temple, a relatively-uncommon Hindu design found in Aihole and elsewhere in India.",
    images: [mahab1, mahab2, mahab3, mahab4],
    source: "(src: Mahabalipuram, Alamy, Wikipedia, NDTV)",
  },
  {
    name: "Mountain Railways of India — Nilgiri Mountain Railway (UNESCO World Heritage Site)",
    description:
      "The Nilgiri Mountain Railway (NMR) in Tamil Nadu is a UNESCO World Heritage Site (added in 2005) and a premier mountain railway in India. Built by the British in 1908, this 46-km, meter-gauge line connects Mettupalayam to the hill station of Udhagamandalam (Ooty) via Coonoor. It is renowned for being the only rack-and-pinion railway in India, navigating steep slopes with a 1 in 12.5 gradient, and features 16 tunnels and over 250 bridges. The construction of the Nilgiri Mountain Railway, a 46-km long metre-gauge single-track railway in Tamil Nadu State was first proposed in 1854, but due to the difficulty of the mountainous location the work only started in 1891 and was completed in 1908. This railway, scaling an elevation of 326 m to 2,203 m, represented the latest technology of the time. The uphill journey takes around 290 minutes (4.8 hours), and the downhill journey takes 215 minutes (3.6 hours). It has the steepest track in Asia with a maximum gradient of 8.33%.[3] During Meter Gauge era in 1990s, The Nilgiri Express used to run between Chennai(then Madras) & Udhagamandalam(then Ooty) directly. Timings were:- Madras 21.00; Ooty 10.20 & in return:- Ooty 16.30; Madras 05.50.But it was stopped after NMR got UNESCO World Heritage Tag in 1994. As of 2007, a daily train crosses the rack section, which starts from Mettupalayam at 07:10 and reaches Udhagamandalam at noon. The return train starts from Udhagamandalam at 14:00, and reaches at 17:35. The train is scheduled to connect to the Nilgiri Express, which travels from Mettupalayam to Chennai via Coimbatore. A summer special service runs in April and May, starting from Mettupalayam at 09:30 am and from Udhagamandalam at 12:15 pm. Between Coonoor and Udagamandalam, four daily trains run each way.\n\nEven though the NMR supplies networked computerized ticketing systems for onward journeys, it still issues Edmondson style manual tickets for the Udhagamandalam-Mettupalayam journey to preserve its 'World Heritage Site' status. Ticket booking is similar to conventional trains and can be done via the Indian Railway website. It is advisable to book tickets well in advance, especially during peak season. Stations – Mettupalayam 9MTP), Kallar(QLR), Adderly (ADY), Hillgrove(HLG), Runneyemede(RME), Coonoor(ONR), Wellington(WEL), Aravankadu(AVK), Ketti(KXT), Lovedale(LOV), Fern hill(FER), Udhanagmandalam(UAM)/Ooty.",
    images: [nilgiri1, nilgiri2],
    source: "",
  },
  {
    name: "Trichy Malaikottai (Rockfort)",
    description:
      "Malaikottai, better known as Rockfort, is a living record of Tamil Nadu's past glory and its historical heritage. Founded at the heart of Tiruchirappalli (Trichy), the very old fortification built on a colossus immature rock mass is over 3.8 billion years old; one of the oldest geological buildings in the world. Standing very high above the city, Malaikottai is a history, religion, and culture-telling monument as well. The past of Malaikottai was inextricably linked with the emergence and decline of South Indian dynasties. Its strategic position made it an extremely valuable fort to be held by one or another, starting from the Pallavas right up to the Nayaks and Marathas. Initially, the Pallavas hewed temples out of the ancient rock, and later in the latter part in the Nayak period the fort was fortified and expanded to its present size. The fort played an important role in the Carnatic Wars of the 18th century, when it was fought for hard by the British and French forces. Capturing it was crucial for the control of the region, which resulted in a series of minor battles and fights. It was finally the British who captured the fort and it later became a major stronghold of theirs in the great wars. One of the most impressive things about the fort is that it extends over the natural rock formations with man-made constructions. The fort, situated on a 273-feet rock, offers magnificent views of Trichy and the plains surrounding it. Aside from this, Ucchi Pillayar Temple, which is the temple of Lord Ganesha, is the main attraction of fortification areas. It is believed that Lord Ganesha found refuge at the top of this hillock when he left Srirangam after setting up the idol of Ranganathan. Buried deep within the rock is the Thayumanavar Temple, a beautiful temple of Shiva, as much celebrated in stories as for beauty with Dravidian architecture. This temple comes under this category because the mythology tells us Lord Shiva assumed the guise of a mother (Thayumanavar) so that he could help a woman give birth when she was in labor. There are wall sculptures and inscriptions of Hindu mythology stories around it, adding cultural and religious heritage. But the summit is reached after climbing nearly 400 steps. During the ascent to the summit, visitors are treated to gigantic views of the city below and the green pastures, and the Kaveri River flowing its way down the plains.",
    images: [malai1, malai2],
    source: "(src: TripAdvisor)",
  },
  {
    name: "Srirangam Ranganathaswamy Temple",
    description:
      "The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganathar (a form of Vishnu) and his consort Ranganayaki (a form of Lakshmi). The temple is located in Srirangam, Tiruchirapalli, Tamil Nadu, India. The Srirangam temple stands as the largest religious complex in the world in active worship with a continuous historical presence as a Hindu temple. The temple complex has been nominated as a UNESCO World Heritage Site, and is in UNESCO's tentative list.[4] In 2017, the temple won the UNESCO Asia Pacific Award of Merit 2017 for cultural heritage conservation, making it the first temple in Tamil Nadu to receive the award from the UNESCO. The annual 21-day festival conducted during the Tamil month of Margazhi (December–January) attracts 1 million visitors. The Ranganathaswamy Temple town has over 800 inscriptions, of which nearly 640 are on temple walls and monuments. Many of these relate to gifts and grants by rulers or the elite, while others relate to the temple's management, scholars, dedication and general operation. The inscriptions have been a source of information about South Indian history, culture, economy and social role.[76] These range from the late 9th century to the rule of Aditya Chola I, to the last historical ones from the 16th century. Others are from the times of Cholas, Nayakas, Pandyas, Hoysalas and the Vijayanagara era. The historic inscriptions at the Ranganathaswamy Temple are in six major Indian languages: Tamil, Sanskrit, Kannada, Telugu, Marathi and Odia. The annual temple chariot festival, called Rathothsavam is celebrated during the Tamil month of thai (January–February) and the processional deity, utsavar is taken round the temple in the temple car. The Lord rests on the five-headed snake, Adisesha, representing serene, conscious sleep (Yoga Nidra). The deity lies on an east-west axis, with the head facing west and the feet facing east, yet with the idol facing towards the south, looking toward Lanka. It is a large, historically significant idol carved from black stone measuring roughly 24 feet. The reclining posture is so grand that the entire idol cannot be seen at once, often requiring specific viewing points to see. The temple is revered as Bhooloka Vaikuntham (Vaikuntha on Earth), and the deity is treated as a living emperor who requires a \"waking ceremony\" (Visvaroopa Seva) each morning.",
    images: [sri1, sri2, sri3],
    source: "(src: Wikipedia, cottage9)",
  },
];

const facts = [
  "Tamil Nadu is home to one of the world's oldest civilizations, with the Tamil language being one of the longest-surviving and the first recognized classical language.",
  "It is the 11th largest state by area",
  "It is the 2nd largest economy in India with a GSDP of over $280 billion.",
  "The state contributes significantly to India's manufacturing, producing 60% of the country's matches and acting as a hub for automobile manufacturing.",
  "It is the 6th most populated state in India, with a high literacy rate of around 80.09%.",
  "The state is the birthplace of legendary mathematician Srinivasa Ramanujan and former President APJ Abdul Kalam.",
  "Archaeological evidence indicates that the Tamil Nadu region could have been inhabited more than 385,000 years ago by archaic humans.",
  "It has the country's 9th-highest GSDP per capita of ₹315,220 (US$3,700) and ranks 11th in human development index.",
  "Tamil Nadu is one of the most industrialised states, with the manufacturing sector accounting for nearly one-third of the state's GDP.",
  "The state has three biosphere reserves, mangrove forests, five National Parks, 18 wildlife sanctuaries and 17 bird sanctuaries.",
  "The Sangam literature historically known as 'the poetry of the noble ones’ connotes the early classical Tamil literature and is the earliest known literature of South India. This collection contains 2381 poems in Tamil composed by 473 poets, some 102 anonymous.",
  "Silappathikaram or Silappatikaram is the earliest Tamil epic. It is a poem of 5,730 lines in almost entirely akaval (aciriyam) meter. The epic is a tragic love story of an ordinary couple, Kaṇṇaki and her husband Kōvalaṉ.",
  "Thirukural is an ancient Tamil language moral literature . It is a collection of eighteen books in the Sangam literary classification , known as the “Pathinenkeezhkanakku” , and consists of 1,330 couplets. It is essentially a book of life. It explains the basic qualities that humans need to live well in their inner and outer lives. The book is considered one of the world's best works on morality. It is known for its generality and secular nature. Its author is known as Thiruvalluvar . The time of this book is variously estimated to be from 300 BCE to the 5th century CE.",
  "Tamilnadu has the third largest urbanized population in the country after maharashtra and Uttar Pradesh.",
  "The key industries of the state are heavy engineering and manufacturing-based companies and textiles.",
  "There are a number of rivers in Tamil Nadu, but some of the major ones include Kaveri River, Vaigai River, Palar River, Noyyal River, Bhavani River, Cheyyar River, and Thamirabarani River.",
  "Major Industries in the State are cotton, heavy commercial vehicles, auto components, railway coaches, power pumps, leather tanning industries, cement, sugar, paper, automobiles and safety matches.",
  "Main mineral wealth of the state is granite, lignite and limestone.",
  "The state is an important exporter of tanned skin and leather goods, yarn, tea, coffee, spices, engineering goods, tobacco, handicrafts and black granite. Tamil Nadu contributes to 60 per cent of the tannery industry in India.",
  "Over 70% of all firecrackers used during Diwali come from the town of Sivakasi in Tamil Nadu.",
];

const artGallery = [
  {
    title: "Ambur Biriyani",
    emoji: "🍛",
    color: "#D4883A",
    desc: "Famous biriyani from Ambur, Vellore",
    image: gAmbur,
  },
  {
    title: "Tirunelveli Halva",
    emoji: "🍮",
    color: "#F4A84A",
    desc: "Iconic wheat halva from Tirunelveli",
    image: gTirunelveliHalva,
  },
  {
    title: "Dindigul Talapakatti Biriyani",
    emoji: "🍚",
    color: "#E8733A",
    desc: "Famous seeraga samba biriyani",
    image: gDindigul,
  },
  {
    title: "Madurai Malli",
    emoji: "🌸",
    color: "#F4D8E8",
    desc: "Famous jasmine flowers of Madurai",
    image: gMalli,
  },
  {
    title: "Madurai Butter Bun",
    emoji: "🥐",
    color: "#F4E884",
    desc: "Iconic local bun with butter",
    image: gButterBun,
  },
  {
    title: "Madurai Jigurthanda",
    emoji: "🍨",
    color: "#E8C8E8",
    desc: "Cold dessert drink with milk, almond gum, ice cream",
    image: gJigarthanda,
  },
  {
    title: "Uthukuli Venne (Butter)",
    emoji: "🧈",
    color: "#F8F0C4",
    desc: "Pure white butter from Uthukuli, Erode",
    image: gUthukuli,
  },
  {
    title: "Thoothukoodi Muthu (Pearl)",
    emoji: "🔮",
    color: "#E8F4F8",
    desc: "Famous pearls from Thoothukudi coast",
    image: gMuthu,
  },
  {
    title: "Salem Mango (Malgova)",
    emoji: "🥭",
    color: "#F8C840",
    desc: "Giant Malgova mangoes from Salem",
    image: gSalemMango,
  },
  {
    title: "Erode Turmeric",
    emoji: "🌿",
    color: "#F4B830",
    desc: "Erode — the largest turmeric market in the world",
    image: gErodeTurmeric,
  },
  {
    title: "Tiruppur Garments",
    emoji: "👕",
    color: "#B4D8E8",
    desc: "Knitwear capital of India",
    image: gTiruppur,
  },
  {
    title: "Kanchipuram Silk Sarees",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "Famous gold-bordered silk sarees",
    image: gKanchiSilk,
  },
  {
    title: "Madurai Sungdi Sarees",
    emoji: "🧣",
    color: "#E8A8C8",
    desc: "Traditional cotton sarees of Madurai",
    image: gSungdi,
  },
  {
    title: "Bharatanatyam",
    emoji: "💃",
    color: "#E88844",
    desc: "Classical Indian dance form from Tamil Nadu",
    image: gBharatanatyam,
  },
  {
    title: "Dosa & Idli",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "Iconic South Indian breakfast",
    image: gDosaIdli,
  },
  {
    title: "Ven Pongal",
    emoji: "🍲",
    color: "#F4D89C",
    desc: "Savoury rice & lentil dish — breakfast staple",
    image: gVenPongal,
  },
  {
    title: "Vada Sambar",
    emoji: "🥣",
    color: "#D4884A",
    desc: "Crispy lentil fritters with spiced lentil soup",
    image: gVadaSambar,
  },
  {
    title: "Rasam",
    emoji: "🥣",
    color: "#C84830",
    desc: "Thin, tangy tamarind soup — digestive staple",
    image: gRasam,
  },
  {
    title: "Panniyaram",
    emoji: "🍡",
    color: "#D4A864",
    desc: "Crispy or soft rice batter balls",
    image: gPanniyaram,
  },
  {
    title: "Neyi Appam",
    emoji: "🍩",
    color: "#D4884A",
    desc: "Deep-fried ghee sweet rice cakes",
    image: gNeyiAppam,
  },
  {
    title: "Poi Kaal Kudurai",
    emoji: "🐎",
    color: "#D4C8B4",
    desc: "Means 'False-leg horse' — a village folk dance",
    image: gPoiKaal,
  },
  {
    title: "Karagaattam",
    emoji: "🏺",
    color: "#A8D4B4",
    desc: "'Pot dance' — folk dance balancing pot on head while dancing",
    image: gKaragattam,
  },
  {
    title: "Thanjavur Paintings",
    emoji: "🖼️",
    color: "#F4D870",
    desc: "Made with thin gold foils/sheets — classical art form",
    image: gThanjavur1,
  },
  {
    title: "Thanjavur Paintings — Radha Krishna",
    emoji: "🖼️",
    color: "#E8C870",
    desc: "Classical Thanjavur work depicting Radha & Krishna with gold foil & gem inlay",
    image: gThanjavur2,
  },
  {
    title: "Silambattam",
    emoji: "🥋",
    color: "#D4A8A8",
    desc: "Ancient Tamil weapon-based martial art merging fighting and dance-like fluidity",
    image: gSilambattam,
  },
  {
    title: "Thanjavur Thalaiyaati Bommai",
    emoji: "🪆",
    color: "#E8B488",
    desc: "Iconic Thanjavur dancing dolls with bobbing heads — GI-tagged craft",
    image: gThalaiyaati,
  },
  {
    title: "Tamil Nadu Sappadu (Feast)",
    emoji: "🍛",
    color: "#A8C878",
    desc: "Traditional banana-leaf meal — rice, sambar, rasam, poriyal, kootu, payasam",
    image: gFeast,
  },
];
