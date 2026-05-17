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
const tripuraMap = "@assets/tripuraMap.jpg";
const KharchiPuja1 = "https://i.postimg.cc/pdzQkBjd/Picture2.jpg";
const KharchiPuja2 = "https://i.postimg.cc/6QJn7GmM/Picture3.jpg";
const GariaPuja1 = "https://i.postimg.cc/zDbhk7Ys/Picture4.jpg";
const GariaPuja2 = "https://i.postimg.cc/DzRvfqpw/Picture5.jpg";
const KerPuja1 = "https://i.postimg.cc/JnQ2Y8k9/Picture6.jpg";
const KerPuja2 = "https://i.postimg.cc/zfCt3N0W/Picture7.jpg";
const KerPuja3 = "https://i.postimg.cc/136MYPhs/Picture8.jpg";
const DurgaPuja1 = "https://i.postimg.cc/kXyxpyf2/image.png";
const DurgaPuja2 = "https://i.postimg.cc/hvsfp2cW/Picture10.jpg";
const Diwali1 = "https://i.postimg.cc/gJPjpC06/Picture11.jpg";
const Diwali2 = "https://i.postimg.cc/sXcjr18t/Picture12.jpg";
const AshokastamiFestival1 = "https://i.postimg.cc/L4QS3dM1/Picture13.jpg";
const AshokastamiFestival2 = "https://i.postimg.cc/02KTGbn8/Picture14.jpg";
const AshokastamiFestival3 = "https://i.postimg.cc/zXWJzd9T/Picture15.jpg";
const BuddhaPurnima1 = "https://i.postimg.cc/vTZVRJPg/Picture16.jpg";
const BuddhaPurnima2 = "https://i.postimg.cc/7hhftg67/Picture17.jpg";
const LongtharaiMandir = "https://i.postimg.cc/WtRTmrJj/picture-18-mandir.jpg";
const DumboorLake1 = "https://i.postimg.cc/L8Y0K77G/image.png";
const DumboorLake2 = "https://i.postimg.cc/wjXLmQsc/image.png";
const Udaipur1 = "https://i.postimg.cc/L82BvWSk/OIP.jpg";
const Udaipur2 = "https://i.postimg.cc/HL5Yx6Jv/image.png";
const Udaipur3 = "https://i.postimg.cc/HsVCn6Rj/image.png";
const NupilalMemorialComplex =
  "https://i.postimg.cc/1tjJjrHL/nupi-len-feature-image-1-e1559130783821.jpg";
const Neermahal1 = "https://i.postimg.cc/tCh8Y8Ds/Neermahal-in-tripura.webp";
const Neermahal2 = "https://i.postimg.cc/2StdmSvg/image.png";
const KasbaKaliTemple1 =
  "https://i.postimg.cc/9fFfxdzZ/kasba-kali-tample-popular-sakti-shirne-temple-besides-international-border-india-bangladesh-tripura.webp";
const KasbaKaliTemple2 = "https://i.postimg.cc/MpzZT77C/kasba-kali-2.jpg";
const UjjayantaPalace1 = "";
const UjjayantaPalace2 = "";
const UnakotiHeritageSite1 = "https://i.postimg.cc/zBrxZfZT/unakoti1.jpg";
const UnakotiHeritageSite2 = "https://i.postimg.cc/3wHXWbSW/unakoti2.jpg";
const UnakotiHeritageSite3 = "https://i.postimg.cc/sx8SznG5/unakoti3.jpg";
const UnakotiHeritageSite4 = "https://i.postimg.cc/9XSqrnz3/unakoti4.jpg";
const UnakotiHeritageSite5 = "https://i.postimg.cc/BnfLCPxk/unakoti6.jpg";
const UdayanBuddhaBihar = "https://i.postimg.cc/zByKQZ3s/buddha.jpg";
const Vanghmun1 = "https://i.postimg.cc/wxcjd4Ld/city1.jpg";
const Vanghmun2 = "https://i.postimg.cc/nhsxM3sw/city2.jpg";
const Kalibaritemple =
  "https://i.postimg.cc/CLkddMWr/Kali-Bari-Temple-Shimla.jpg";
const Borderhaat1 = "https://i.postimg.cc/TYgSsBD3/border-haat1.jpg";
const Borderhaat2 = "https://i.postimg.cc/YCtXs07R/border-haat2.jpg";
const BharatBanglaMaitreeUddyan1 = "https://i.postimg.cc/j5WKnvkC/uddyan1.jpg";
const BharatBanglaMaitreeUddyan2 = "https://i.postimg.cc/WbmVZdSf/uddyan2.jpg";
const JagannathTemple =
  "https://i.postimg.cc/Gtr7nmYr/1522822584-Jagannath-Temple-Agartala3.jpg";
const gBhangui = "";
const gMuiBorok = "https://i.postimg.cc/tTdkkGfb/mui-borok.png";
const gBerma = "https://i.postimg.cc/fbmfWhMY/berma.jpg";
const gGudok = "https://i.postimg.cc/05MD9snT/gudok.jpg";
const gWahanMosdeng = "https://i.postimg.cc/RhLMvhDQ/wahan-2.jpg";
const gChikhvi = "https://i.postimg.cc/6540bZFM/image.png";
const gMuyaAwandru = "https://i.postimg.cc/rwCHVbMr/muya-awandru.jpg";
const gMachBhat = "https://i.postimg.cc/cJLFsLFc/maach-baat.jpg";
const gWakBahan = "https://i.postimg.cc/9f0Y6Nfk/WAK-BAHAN.png";
const gModsengSerma = "https://i.postimg.cc/Qd4pJkq4/mosdeng-serma.jpg";
const gMatabariPera = "https://i.postimg.cc/FRQ1y7wb/image.png";
const gBambooPickle = "https://i.postimg.cc/KzZxcL6G/image.png";
const gQueenPineapple =
  "https://i.postimg.cc/Gt8Nbmmn/queen-pineapple-annies-farm.webp";
const gRisa = "https://i.postimg.cc/6QHt3Tt9/risa.jpg";
const gRignaiPachra = "https://i.postimg.cc/5yLhwtd8/rignai.png";
const gBambooCane = "https://i.postimg.cc/mrP6Yr7c/image.png";
const gSilverJewellery = "https://i.postimg.cc/P5PMcRJS/silver.jpg";
const gBlackPottery = "https://i.postimg.cc/tTXn0sDb/black-pottery.jpg";
const gWoodCarving = "https://i.postimg.cc/hjPvyHP9/image.png";
const gJamatiaBasket = "https://i.postimg.cc/J7SJ0zzJ/basket.jpg";
const gTribalJewellery = "https://i.postimg.cc/x1p9jc0d/image.png";
const gHojagiri = "https://i.postimg.cc/mrqZjhqX/hojgari.jpg";
const gGariaDance = "https://i.postimg.cc/rpgxwGD0/image.png";
const gLebangDance = "https://i.postimg.cc/Kv4pDc6q/image.png";
const gBizhuDance = "https://i.postimg.cc/k4Fzzjw4/image.png";
const gChongpreng = "https://i.postimg.cc/hG42hS13/image.png";
const gSumui = "https://i.postimg.cc/7LLNwKqW/sumui-64d480b1b419e.jpg";
const gSarinda = "https://i.postimg.cc/fThjJzwv/sarinda.jpg";
const gTribalDrum = "https://i.postimg.cc/cJybpfYd/tripura-tribal-drum.jpg";

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
          style={{ fontFamily: "'Lora', serif" }}
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
          style={{ fontFamily: "'Lora', serif" }}
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
export default function Tripurapage() {
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
                Tripura
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Land of Fourteen Gods
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Agartala" },
                  { label: "Population", value: "36.7 lakhs" },
                  { label: "Area", value: "10,491 sq km" },
                  { label: "Founded", value: "21 January 1972" },
                  { label: "Language", value: "Bengali , Kokborok" },
                  { label: "Districts", value: "8 Districts" },
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
              Agartala
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Tripura - Gateway to the northeast
            </p>
          </div>
        </Section>

        {/*Map of tripura — click to enlarge */}
        <Section title="Map of Tripura" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(tripuraMap, "Map of Tripura")}
            >
              <img
                src={tripuraMap}
                alt="Map of Tripura"
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
            style={{ fontFamily: "'Lora', serif" }}
          >
            <p className="text-foreground">
              Tripura, India's third-smallest state, derives its name from the
              goddess Tripura Sundari or the Kokborok words tüi (water) and pra
              (near).Tripura is a northeastern Indian state known as the "Land
              of Water" or "Land of Two Gods." One of the Seven Sister States,
              it shares a sibling identity with Arunachal Pradesh, Assam,
              Manipur, Meghalaya, Mizoram, and Nagaland due to their shared
              geographical isolation and cultural synergy under the historic
              Manikya Dynasty.
            </p>
            <p className="text-foreground">
              Following Indian independence, it merged with the Union of India
              in 1949, initially as a union territory before achieving full
              statehood in 1972. The post-independence period was characterized
              by significant demographic changes due to refugee influxes from
              East Pakistan, which led to decades of ethnic tension and
              insurgency that have since largely stabilized.
            </p>
            <p className="text-foreground">
              The state's geography is defined by its landlocked position,
              bordered on three sides by Bangladesh. Its topography is dominated
              by five major anticlinal hill ranges running north to
              south—including the Jampui Hills, home to the state's highest
              peak, Betlingchhip—separated by fertile alluvial valleys known as
              lungas. Tripura experiences a tropical savanna climate with heavy
              monsoon rains that support a rich biological diversity. Over half
              the state is forested, featuring a unique mix of bamboo, cane, and
              moist deciduous trees. It is notably home to the highest number of
              primate species in India and several protected areas like the
              Sipahijola and Trishna Wildlife Sanctuaries.
            </p>
            <p className="text-foreground">
              Administratively, Tripura is divided into eight districts, with
              Agartala serving as the capital and primary urban center. The
              economy remains predominantly agrarian, with more than half the
              population engaged in farming. While rice is the staple crop, the
              state is a major producer of natural rubber and possesses
              significant natural gas reserves, which have recently enabled it
              to become a power-surplus state. Despite these resources, the
              economy faces challenges related to geographical isolation and
              infrastructure bottlenecks, though it maintains one of the highest
              literacy rates in India at over 87%.
            </p>
            <p className="text-foreground">
              Tripura is administratively divided into eight districts, each
              serving as a vital unit for governance and regional development.
              These districts—West Tripura, Sepahijala, Khowai, Gomati, South
              Tripura, Unakoti, North Tripura, and Dhalai—are diverse in their
              geography and cultural makeup. For instance, West Tripura is home
              to the capital, Agartala, and serves as the state's political and
              commercial center. In contrast, Dhalai is the largest district by
              area and is known for its dense forest cover and hilly terrain,
              while Unakoti is world-famous for its ancient rock-cut carvings.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              Tripura is a vibrant tapestry of royal legacy and indigenous
              spirit, where the majestic Neermahal and Ujjayanta Palace meet the
              ancient rock-cut wonders of Unakoti. It is a land defined by its
              nineteen tribes, storied princely history, and a society where
              sacred traditions and exquisite craftsmanship flourish amidst lush
              hills.
            </p>
            <p className="text-xs text-muted-foreground">
              (src:Wikipedia, mapsofindia.com)
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
        <Section title="Facts about Tripura" icon="💡">
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
            Scroll horizontally to explore Tripura's iconic foods, crafts,
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
    name: "Kharchi Puja",
    description:
      "Kharchi Puja is a significant week-long Hindu festival celebrated in Agartala, Tripura, primarily during July or August. The word 'Kharchi' is derived from 'Khya', meaning 'Earth', as the festival is dedicated to worshipping Mother Earth and the fourteen dynasty deities of the Tripuri people.The celebration follows a unique mythological background centered on the cleansing of the Earth after 'Ama Pechi' (the menstruation of the mother goddess). To begin the rituals, the fourteen deities are carried by the Chantai to the Saidra River, where they are bathed in holy water before being returned to the temple and decorated with flowers and vermillion. The festivities involve both tribal and non-tribal communities and are characterized by animal sacrifices, traditional offerings, and a large fair featuring various cultural programs.. (src:Wikipedia)",
    images: [KharchiPuja1, KharchiPuja2],
    source: "(src:adivasilivesmatter.com)",
  },
  {
    name: "Garia Puja",
    description:
      "Garia Puja is celebrated by the tribal communities to seek blessings from the deity Garia for a good harvest and prosperity. It is observed after sowing seeds. People celebrate it with traditional dances, folk songs, bamboo rituals, and offerings like rice beer. The celebrations continue for several days with joy and festivity. This festival is important as it reflects the agricultural lifestyle and strengthens community bonding.In Garia puja devotees sacrifice chicken for ritual purpose in Tripuri community.All kokborok speaking tribes and Halam tribes worship their supreme God Baba Garia for prosperity and well-being. Jamatia Tribe have a unique mass celebration of Garia puja at State level. It is a seven day festival to honour the deity Baba Garia is held annually on the first day of Tripuri calendar/Bengali calendar month of Boishakh. It is mainly celebrated in tribal regions such as Dhalai district, Gomati district, and North Tripura district.",
    images: [GariaPuja1, GariaPuja2],
    source: "adivasilivesmatter.com,india-tours",
  },
  {
    name: "Ker Puja",
    description:
      "Ker puja is a festival held in Tripura, India. Performance of the puja, which is typically held in August,benefits the people and the state. The celebration occurs two weeks after the Kharchi Puja to honor Ker, the guardian deity of Vastu Devata. It includes offerings, sacrifices, and a prescribed boundary which both safeguards people from calamities and saves them from external aggression.The puja was initiated by the Tripura rajas. Participation in the puja is required for the Halam tribe. For 2.5 days during the festival, entrances to the capital are closed, and participants, including the reigning sovereign, are not allowed to wear shoes, light a fire, dance, or sing. (src:wikipedia)",
    images: [KerPuja1, KerPuja2, KerPuja3],
    source: "(src:hindu-blog, safarmentor.com, northeastlivetv.com )",
  },
  {
    name: "Durga Puja",
    description:
      "Durga Puja, also known as Durgotsava or Sharodotsava, is an annual Hindu festival originating in the Indian subcontinent which reveres and pays homage to the Hindu goddess Durga and is also celebrated because of Durga victory over Mahishasur. The over 500 years old Durga Puja, initiated by the then royal dynasty and sponsored by the Tripura government for the past over seven decades, continues to draw devotees from different parts of India and the neighbouring countries, including Bangladesh. Tripura, governed by the Left and non-Left parties since it merged with the Indian union 73 years ago, is possibly the only state in India where the government continues to sponsor an over five century-old Durga Puja, that is also closely overseen by the erstwhile royal family.With ‘Maha Sasthi’ or ‘Bodhan’-the welcoming of the Durga idols - the puja began on saturday at the famed Durgabari temple, located in front of the 121 year old ujjayanta palace , one of the biggest royal mansions in estern India. Jayanta Bhattacharjee (57) , the head priest of Durgabari temple , said a few years after the beginning of the royal era in Tripura, the kings started Durga puja over 500 years ago.",
    images: [DurgaPuja1, DurgaPuja2],
    source: "(src: src : tripuratourism.gov)",
  },
  {
    name: "Diwali",
    description:
      "Diwali signifies the victory of light over darkness and good over evil. People celebrate it by lighting diyas, decorating homes, bursting firecrackers, and worshipping Goddess Lakshmi. Sweets are shared among family and friends. It is important because it spreads happiness and strengthens social bonds.This festival is observed in Tripura Sundari Temple, Matabari, Udaipur, Gomati district. This is one of the fifty-one Hindu pithas of India which is recognised as a holy and sacred place in Tripura. Devotees from both tribals and non-tribals observe this festival with great enthusiasm and take bath in the lake of the temple paying their homage to Mother Kali. A grand fair is also organised during this festival for two days at the festive month October/ November. Diwali is celebrated throughout Tripura, especially in cities like Agartala and other towns and villages across the state.",
    images: [Diwali1, Diwali2],
    source: "dailyexcelsior.com,countryandpolitics.in",
  },
  {
    name: "Ashokastami Festival",
    tagline: "Ashokastami: Where Tripura’s History Meets Devotion.",
    description:
      "The Ashokastami Festival is one of the most significant and spiritually charged events in Tripura, celebrated with immense fervor during the month of Chaitra (typically March or April). While the festival is observed across India, its heart in Tripura lies at Unakoti, a historic Shaivite pilgrimage site famous for its colossal rock-cut carvings and waterfalls.Thousands of devotees from across the region gather at Unakoti to take a ritualistic holy dip in the Ashtami Kunda, a sacred water tank. It is widely believed that bathing in these waters during the auspicious tithi cleanses one of sins and brings spiritual merit. Following the ritual bath, pilgrims offer prayers to the massive stone images of Lord Shiva, known locally as Unakotiswara Kal Bhairava, and other deities carved into the hillistic landscape.The celebration is characterized by a vibrant mela (fair) that surrounds the archaeological site. The atmosphere is a blend of solemn devotion and festive joy, featuring traditional folk music, local handicrafts, and stalls offering regional delicacies. For the people of Tripura, Ashokastami is not merely a religious ritual but a profound cultural gathering that honors the state’s ancient heritage and the timeless legends associated with the sacred hills of Unakoti.",
    images: [AshokastamiFestival1, AshokastamiFestival2, AshokastamiFestival3],
    source: "(src:: pinterest.com,specialholidays.com)",
  },
  {
    name: "Buddha Purnima",
    tagline:
      "A Sacred Celebration of Peace, Enlightenment, and Universal Compassion.",
    description:
      "Buddha Purnima marks the birth, enlightenment, and death of Lord Buddha. It is celebrated by visiting monasteries, offering prayers, lighting lamps, and conducting peaceful processions. Acts of charity are also performed. This festival is important because it spreads peace, compassion, and moral values. It is mainly celebrated in areas with Buddhist populations such as South Tripura district and parts of North Tripura district.",
    images: [BuddhaPurnima1, BuddhaPurnima2],
    source: " wikipedia.com,dailymotion.com",
  },
];

const historicalPlaces = [
  {
    name: "Longtharai Mandir",
    description:
      "The Longtharai Mandir is the most revered temple in the Dhalai district. Longtharai is the Kokborok name of Lord Shiva. The temple lies about 102 kilometres away from Agartala. It is believed that while Lord Shiva was travelling from Mount Kailash, his home, he rested in this area. Since he is believed to have stepped foot here, this area became famous and a temple was soon constructed. Today the temple and the adjoining hill area are highly regarded and people from all over visit the Longtharai Mandir. The word Longtharai also has another meaning—deep valley. Khumpi is a local flower that blooms on the roadside leading to the temple. Not only is the temple a pious place, but the area around the temple is worth a visit too. The enchanting natural beauty that seems to be tucked away from the world of commercialisation and rat race is definitely a must visit.",
    images: [LongtharaiMandir],
    source: "nativeplanet.com",
  },
  {
    name: "Dumboor Lake",
    description:
      "Dumboor Lake is a charming water body located in amarpur Sub Division 120 Km. away from Agartala. The look of the lake is like tabour shaped small drum, “Dumboor” of Lord Shiva from which the name “Dumboor” originates. A massive and breathtaking water body of 41 sq.km. with an unending spell of luxuriant green vegetation all around stands majestic for her exceedingly charming beauty and 48 islands in the midst of the lake. Migratory birds and water sports facilities are additional attractions. There is a Hydel Project near the lake from where River Gomati originates and this is called Tirthamukh where on 14th January every year famous ‘Pous Sankranti Mela’ takes place. The lake is the confluence of rivers Raima and Sarma. Various species of migratory birds are visible in the winter and it has rich reservoir of natural and cultured fishes. In one of the island “Narkel Kunja” has been developed.",
    images: [DumboorLake1, DumboorLake2],
    source: "hindustanpioneer.com",
  },
  {
    name: "Udaipur",
    description:
      "Udaipur, located in the Gomati district of Tripura, is a historic city often called the 'Lake City' or the 'City of Temples.' It was the former capital of the Tripura Kingdom and is primarily famous for its deep-rooted religious significance and architectural heritage. In tripura one of the most prominent temple is Tripura Sundari Temple.Tripura Sundari Temple is a Hindu temple of the Goddess Tripura Sundari, better known locally as Devi Tripureshwari the third mahavidya and main form of Parvati. The temple is situated in the ancient city of Udaipur, about 55 km from Agartala, Tripura and can be reached by train and road from Agartala. It is believed to be one of the holiest Hindu shrines in this part of the country and witnesses the highest number of visitors for a temple in North-East India, after Kamakhya Temple in Assam. The state of Tripura is named after this temple. Popularly known as Matabari, the shrine is set upon a small hillock that resembles the hump of a tortoise (Kurma). This shape called Kurmapṛṣṭhākṛti is considered the holiest possible site for a Shakti temple, hence also bestowing the name of Kurma Pīṭha.[1] The Goddess is served by traditional Brahmin priests.The temple is one of the 51 Shakta pithas; legend says that a part of the right foot (Dakshin Charan) of Sati including the big toe fell here. Here, Shakti is worshipped as Tripurasundarī and the accompanying Bhairava is Tripuresh. The main shrine, a cubical edifice with a three-tier roof with a finial, erected by Maharaja of Tripura Dhanya Manikya in 1501 CE, is constructed in the Bengali Ek-ratna style.",
    images: [Udaipur1, Udaipur2, Udaipur3],
    source: "(src: talesof2backpackers.com )",
  },
  {
    name: "Nupilal Memorial Complex ",
    description:
      "This is one of the most significant historical markers in the district. It commemorates the 'Manipur Women’s War' of 1939, honoring the Manipuri women who fought against exploitation and artificial famine during the British era. It features a notable statue known as the Manipur Women War Statue.",
    images: [NupilalMemorialComplex],
    source: "(src: forwardpress.in)",
  },
  {
    name: "Neermahal",
    description:
      "Neermahal (নীরমহল) (meaning “Water Palace”) is a former royal palace built by King Bir Bikram Kishore Manikya Bahadur of the erstwhile Kingdom of Tripura, India in the middle of the lake Rudrasagar in 1930 and was completed by 1938. It is situated in Melaghar, 53 kilometers away from the Agartala, the capital of Tripura. The palace is situated in the middle of Rudrasagar Lake and assimilates Hindu and Muslim architectural styles.The palace is the largest of its kind in India and the only one in Eastern India. There are only two water palace in India another one is the Jal Mahal in Rajasthan.Known as ‘lake palace’ of Tripura, Neer-Mahal was constructed as a summer residence. It was Maharaja Bir Bikram Manikya Bahadur’s idea to build a palace in the beautiful Rudrasagar lake and in 1921 he accredited the British company Martin and Burns to construct the palace for him. The company took nine years to complete the work. Maharaja Bir Bikram Manikya Bahadur belonged to the ‘Manikya Dynasty’ which is supposed to be the second from a single line in the world today.The palace is the establishment of Maharaja’s great taste and his fascinating idea of blending Hindu and Muslim traditions and cultures.The palace is divided into two parts. The western side of the palace is known as Andar Mahal. It was made for the royal family. The eastern side is an open-air theatre where drama, theatre, dance and other cultural events were organized for the enjoyment of Maharajas and their royal families. The palace has 24 rooms in total.Neer-Mahal has two stairways inside leading down to a landing on the water of Rudrasagar Lake. Maharajas used to go to the palace by hand powered boat from ‘Rajghat’.",
    images: [Neermahal1, Neermahal2],
    source: "(src:cdn.s3waas.gov.in, taleof2backpackers)",
  },
  {
    name: "Kasba Kali Temple",
    description:
      "Kamalasagar Kali Temple, was built on a hill-top by Maharaja Dhanya Manikya in the late 15th century. It is situated just deside the Bangladesh border, The lake in front of this temple rightly enhances its beauty.The large ‘Kamala Sagar’ lake dug by king Dhanya Manikya (1490-1520) and the two wavy blue water lakes in front of the ‘Ujjayanta palace’, abode of Tripura’s erstwhile princely rulers in the heart of capital Agartala will form inevitable itinerary of trourists fond of waterscape. Princely Tripura’s erstwhile capital and present headquarter of south Tripura District, Udaipur is also known as a ‘lake-town’ because of the surfeit of large lakes, dug by different princely rulers, that dot the town. These lakes coupled with the river Gomati that flows by Udaipur will enthuse tourists to have a pleasant outing.",
    images: [KasbaKaliTemple1, KasbaKaliTemple2],
    source: "thumbs.dreamstime.com,",
  },
  {
    name: "Unakoti Heritage Site - UNESCO world heritage site",
    description:
      "It is ‘Shaiba’ (Saivite) pilgrimage and dates back to 7th – 9th centuries if not earlier. The marvellous rock carvings, murals with their primitive beauty, waterfalls are not to be missed. Unakoti means one less than a crore and it is said that these many rock cut carvings are available here. As per Hindu mythology, when Lord Shiva was going to Kashi along with one crore gods and goddesses he made a night halt at this location. He asked all the gods and goddesses to wake up before sun rise and proceed for Kashi.It is said that in the morning, except Shiva himself, no one else could get up so Lord Shiva set out for Kashi himself cursing the others to become stone images. As a result we have one less than a crore stone images and carvings at Unakoti. These carvings are located at a beautifully landscaped forest area with green vegetation all around which add to the beauty of the carvings. The images found at Unakoti are of two types, namely rock-carved figures and stone images.Among the rock cut carvings, the central Shiva head and gigantic Ganesha figures deserve special mention. The central Shiva head known as ‘Unakotiswara Kal Bhairava’ is about 30 feet high including an embroidered head-dress which itself is 10 feet high. On each side of the head-dress of the central Shiva, there are two full size female figures – one of Durga standing on a lion and another female figure on the other side. In addition three enormous images of Nandi Bull are found half buried in the ground. There are various other stone as well as rock cut images at Unakoti. Every year a big fair popularly known as ‘Ashokastami Mela’ is held in the month of April which is visited by thousands of pilgrims.",
    images: [
      UnakotiHeritageSite1,
      UnakotiHeritageSite2,
      UnakotiHeritageSite3,
      UnakotiHeritageSite4,
      UnakotiHeritageSite5,
    ],
    source: "(src:etvbharatimages.akamaized.net,thefloatingpebbles.com,)",
  },
  {
    name: " Udayan Buddha Bihar",
    description:
      "Situated at Pecharthal market place adjacent to National Highway NH44. Established in the year 1933. The idol is made of “Osto Dhatu” 8 types of metals, 4.5 ft. height and weighs 300 Kg. Hundreds of devotees from nearby land assembles in the time Buddha Jayanti in Buddha Purnima in the month April/May.Location : At Pecharthal, 33 Km from District Head Quarter Kailashahar.",
    images: [UdayanBuddhaBihar],
    source: "(src:cdn.s3waas.gov.in)",
  },
  {
    name: "VANGHMUN – THE CLEANEST VILLAGE IN TRIPURA",
    description:
      "Vanghmun Village, perched atop the lush Jampui Hills in North Tripura, stands as a testament to community-driven cleanliness and environmental stewardship. Frequently recognized as the cleanest village in the entire state, it offers a serene escape characterized by its cool, temperate climate and impeccable civic organization. Situated at a high altitude, the village provides visitors with breathtaking panoramic views of the surrounding valleys and the distant misty hills of Mizoram. The local Mizo community, known for their warm hospitality and vibrant cultural heritage, plays a pivotal role in maintaining the village’s pristine condition through collective voluntary efforts.The region is also celebrated for its sprawling orange orchards; during the peak harvest season, the landscape is transformed by vibrant shades of orange, attracting nature lovers and agro-tourists alike. Beyond its aesthetic appeal, Vanghmun serves as a vital cultural hub where traditional music and dance thrive. Its well-maintained gardens, plastic-free streets, and disciplined lifestyle make it a model for sustainable rural tourism in Northeast India. Whether you are interested in trekking through the verdant trails of the Jampui Hills or simply experiencing a peaceful mountain retreat, Vanghmun offers a unique blend of natural beauty and social harmony that is rare to find.",
    images: [Vanghmun1, Vanghmun2],
    source: "(src:tse4.mm.bing.net/)",
  },
  {
    name: "Kalibari temple",
    description:
      "The **Dharmanagar Kalibari**, situated in the North Tripura district, stands as a premier spiritual landmark and a cornerstone of the region's cultural heritage. Dedicated to Goddess Kali, this historic temple in Dharmanagar town draws numerous devotees who come to seek blessings and experience its serene atmosphere. The temple's architecture reflects traditional Bengali and Tripuri influences, featuring a vibrant sanctum and a spacious courtyard that hosts various religious ceremonies. It gains immense significance during **Kali Puja** and **Diwali**, when the entire complex is illuminated, and grand rituals are performed throughout the night. Beyond its religious role, the Kalibari serves as a vital community hub, often organizing social welfare programs and festive fairs that bring together people from diverse backgrounds. Its proximity to the Dharmanagar railway station makes it an accessible and essential stop for anyone exploring the rich architectural and spiritual landscape of North Tripura.",
    images: [Kalibaritemple],
    source: "(src:honeymoonbug.com,)",
  },
  {
    name: "Border haat",
    description:
      "Border Haat, is a special market place located exactly on the Zero line between India and Bangladesh, where both Indian and Bangladeshi citizens of nearby area can visit and purchase the goods from vendors, who are also from both countries in equal numbers. All the transactions here are Tax free. Both Bangladeshi and Indian currencies are in circulation in the market. Buyers can only purchase in reasonable family consumption quantities.Border Haat in South Tripura is located at Srinagar in Poang Bari Block of Sabroom Sub-Divison. Market is open on all Tuesdays from 10 A.M. to 3.30 P.M. commodities like Kitchen Utensil (steel), spices, tea leafs, vegetables, fruits, biscuits, bakery items, dry fish, plastics, onion garlic, pulses, addible oil etc. are available in the market.",
    images: [Borderhaat1, Borderhaat2],
    source: "(src:cdn.s3waas.gov.in)",
  },
  {
    name: "Bharat Bangla Maitree Uddyan",
    description:
      "India Bangla Moitree Udyan has been established in 2017. In the war of liberation of 1971, this beautiful garden was created to commemorate the victory of the brave soldiers of Bangladesh under the leadership of Sheikh Mujibur Rahman, the brave soldiers of Bangladesh and the brave courage of the Indian brave army led by the then Indian Prime Minister Smt. Indira Gandhi. Here the statue of the Liberation War has been established.",
    images: [BharatBanglaMaitreeUddyan1, BharatBanglaMaitreeUddyan2],
    source: "tse1.mm.bing.net,tripadvisor.com",
  },
  {
    name: "Ujjayanta Palace",
    description:
      "This royal house, which stands in the Capital city Agartala covering one sq.Km. area was built by Maharaja Radha Kishore Manikya during 1899-1901.It is a two storied mansion, having a mixed type of architecture with three high domes, the central one being 86′ high. The magnificent tile floor, curved wooden ceiling and beautifully crafted doors are particularly notable. The palace is set with huge Mughal style gardens,beautified by pools and gardens and tiled floors. Flood lighting and fountains have also added to its beauty.The magnificent tiles floors, ceiling of the Chinese room crafted by artisans brought from China, of the palace which now houses the State Legislative Assembly, may give some idea of the opulence and splendor of the original setting of the building. It has recently been adorned with a spectacular musical fountain at its fore yard.",
    images: [UjjayantaPalace1, UjjayantaPalace2],
    source: "(src:tse1.mm.bing.net)",
  },
  {
    name: "Jagannath Temple",
    description:
      "The Jagannath Temple in Agartala, Tripura, is a stunning architectural landmark that serves as a vital spiritual hub in Northeast India. Built by the Maharaja of Tripura in the 19th century, the temple is renowned for its unique structural design, featuring a distinct octagonal base and an impressive pradakshina path (circumambulation path) surrounding the inner sanctum. The exterior is characterized by pillars crowned with square and pyramidal cones, blending traditional aesthetics with intricate craftsmanship.Beyond its architectural significance, the temple is a major center for pilgrims, particularly during the vibrant Rath Yatra festival, which draws thousands of devotees. Located near the Ujjayanta Palace, the temple's bright orange and white facade creates a striking visual against the city skyline. It stands not only as a place of worship dedicated to Lord Jagannath, Balabhadra, and Subhadra but also as a testament to the rich cultural and royal heritage of the Tripura kingdom.",
    images: [JagannathTemple],
    source: "(src:alamy.com,gosahin.com)",
  },
];

const facts = [
  "1.	The Oldest Continuous Dynasty: Before joining the Indian Union in 1949, Tripura was ruled by the Manikya Dynasty for several centuries. It is considered one of the longest-unbroken ruling lineages in the world.",
  "2.	A 'Garland of Kings': Tripura has its own royal chronicle called the Rajmala. It is a unique historical record written in verse that lists 184 kings, blending myth with recorded history starting from the 15th century.",
  "3.	The Tripurabda Era: Tripura has its own calendar era called Tring, which started in 590 CE. It is three years older than the Bengali calendar and is still celebrated every December 21st.",
  "4.	Mahabharata Connection: Ancient texts and the Rajmala claim that the name 'Tripura' comes from King Tripur, a descendant of the Lunar Dynasty mentioned in the Mahabharata, making the state's heritage thousands of years old.",
  "5.	The 'Water Palace' of the East: Neermahal is one of only two water palaces in all of India (the other is in Rajasthan). Built in the middle of Lake Rudrasagar, it blends Hindu and Islamic architectural styles.",
  "6.	 Chabimura’s Vertical Art: At Chabimura, giant images of deities like Durga are carved directly onto the steep vertical walls overlooking the Gomati River, accessible only by boat.",
  "7.The Buddhist Corridor: While predominantly Hindu and Muslim, Tripura’s Pilak site reveals a 8th–12th century civilization where Hinduism and Buddhism flourished together, evidenced by unique terracotta plaques.",
  "8.The Primate Capital: Tripura has the highest concentration of primate species in India. It is the only place where you can find the Spectacled Monkey (Phayre’s Leaf Monkey) in its natural habitat.",
  "9.Land of Bamboo: Bamboo is so central to Tripura that it is often called the 'Green Gold' of the state. They have developed a 'Bamboo Mission' that produces everything from high-end furniture to eco-friendly water bottles.",
  "10.The 'Eternal Spring Hills: Jampui Hills, the highest range in the state, is famous for its Orange Festival'and a climate that feels like spring all year round.",
  "11.Floating Migration: Every winter, the Rudrasagar Lake becomes a massive hub for migratory birds from Siberia and Europe, turning the Water Palace into a birdwatcher’s paradise.",
  "12.Literacy Leader: Despite its remote location, Tripura has consistently ranked among the states with the highest literacy rates in India, often surpassing even Kerala in certain census years.",
  "13.The Queen Pineapple: The state produces a specific variety called the Queen Pineapple, which is so unique in flavor and sweetness that it has been granted a Geographical Indication (GI) tag.",
  "14.Rubber Giant: Tripura is the second-largest rubber producer in India after Kerala, a fact that surprises many who associate the Northeast only with tea.",
  "15.A Blend of Languages: While Bengali is widely spoken, the native Kokborok language belongs to the Tibeto-Burman family, giving the state a linguistic flavor entirely different from mainland India.",
  "16.The 14 Goddesses: The Kharchi Puja is a unique festival where 14 deities are worshipped. Interestingly, the royal family's priest (Chantai) performs the rituals, even though the festival is now a major public event.",
  "17.Hojagiri Grace: The Hojagiri dance of the Reang tribe is a world-class feat of balance where dancers perform intricate movements while standing on earthen pitchers with bottles balanced on their heads.",
  "International Connectivity: Because it is surrounded on three sides by Bangladesh, the state capital, Agartala, is one of the few Indian cities where the international border is just a few kilometers from the city center, making it a vital gateway for Southeast Asian trade.",
];
const artGallery = [
  // ── FOODS ──────────────────────────────────────────────────────────────
  {
    title: "Mui Borok",
    emoji: "🐟",
    color: "#C87848",
    desc: "Signature Tripuri dish — smoked fish, vegetables & fermented berma fish slow-cooked together",
    image: gMuiBorok,
  },
  {
    title: "Berma (Fermented Fish)",
    emoji: "🫙",
    color: "#A86840",
    desc: "Fermented dried puthi fish — the soul ingredient of almost every Tripuri dish",
    image: gBerma,
  },
  {
    title: "Gudok",
    emoji: "🍲",
    color: "#B87848",
    desc: "Beloved tribal dish of fermented fish, beans & potato — a centrepiece at community feasts",
    image: gGudok,
  },
  {
    title: "Wahan Mosdeng",
    emoji: "🥩",
    color: "#C84830",
    desc: "Spicy smoked pork/chicken marinated with garlic, ginger, turmeric & mustard oil — ancient Tripuri recipe",
    image: gWahanMosdeng,
  },
  {
    title: "Chikhvi",
    emoji: "🎋",
    color: "#88A868",
    desc: "Bamboo shoot curry slow-cooked with aromatic spices — a Tripuri culinary treasure",
    image: gChikhvi,
  },
  {
    title: "Bhangui (Bangui)",
    emoji: "🍌",
    color: "#E8C84A",
    desc: "Sun-dried rice with ginger, onion & ghee, steamed in banana leaf — a beloved comfort dish",
    image: gBhangui,
  },
  {
    title: "Muya Awandru",
    emoji: "🎍",
    color: "#A8C870",
    desc: "Bamboo shoot cooked with rice flour & berma — earthy, tangy and uniquely Tripuri",
    image: gMuyaAwandru,
  },
  {
    title: "Mach Bhat",
    emoji: "🐠",
    color: "#7098B8",
    desc: "Fish and rice — the quintessential everyday meal of Tripura",
    image: gMachBhat,
  },
  {
    title: "Wak Bahan",
    emoji: "🐗",
    color: "#D4804A",
    desc: "Pork cooked with bamboo shoots, raw papaya & jackfruit — bold tribal flavours",
    image: gWakBahan,
  },
  {
    title: "Mosdeng Serma",
    emoji: "🌶️",
    color: "#C83828",
    desc: "Small fish marinated in red chilli paste, turmeric & mustard oil — a fiery Tripuri classic",
    image: gModsengSerma,
  },
  {
    title: "Matabari Pera",
    emoji: "🍮",
    color: "#F4D890",
    desc: "GI-tagged dairy-based sweet confection — traditional prasad of Tripurasundari temple, Matabari",
    image: gMatabariPera,
  },
  {
    title: "Bamboo Shoot Pickle",
    emoji: "🫙",
    color: "#C8C870",
    desc: "Tangy fermented bamboo shoot pickle — iconic condiment sold at every Tripura market",
    image: gBambooPickle,
  },

  // ── GI-TAGGED PRODUCTS & REGIONAL PRODUCE ─────────────────────────────
  {
    title: "Queen Pineapple (Tripura)",
    emoji: "🍍",
    color: "#F4C030",
    desc: "GI-tagged exceptionally sweet & fragrant pineapple variety grown in Tripura's hills",
    image: gQueenPineapple,
  },
  {
    title: "Risa (GI-tagged Fabric)",
    emoji: "🧣",
    color: "#E8A8D0",
    desc: "GI-tagged (2024) traditional handwoven scarf/cloth of Tripuri women — worn as shawl or headwear",
    image: gRisa,
  },
  {
    title: "Rignai Pachra (GI-tagged)",
    emoji: "🥻",
    color: "#D4709C",
    desc: "GI-tagged traditional wraparound skirt-cloth of tribal women — vibrant horizontal stripes",
    image: gRignaiPachra,
  },

  // ── TEXTILES & CRAFTS ──────────────────────────────────────────────────
  {
    title: "Bamboo & Cane Crafts",
    emoji: "🎋",
    color: "#A8C870",
    desc: "Tripura's most iconic craft — 16–18 bamboo species used to weave baskets, mats, lamps, furniture & jewellery",
    image: gBambooCane,
  },
  {
    title: "Traditional Silver Jewellery",
    emoji: "💍",
    color: "#E8E8F0",
    desc: "Intricate tribal silver ornaments — necklaces, earrings & bangles crafted by Tripuri artisans",
    image: gSilverJewellery,
  },
  {
    title: "Black Pottery",
    emoji: "🏺",
    color: "#484840",
    desc: "Unique black-glazed pottery fired with special clay — smooth finish; makes pots, bowls, lamps & figurines",
    image: gBlackPottery,
  },
  {
    title: "Wood Carving",
    emoji: "🪵",
    color: "#B87840",
    desc: "Intricate sculptures, masks & decorative panels depicting mythological figures — traditional tribal art form",
    image: gWoodCarving,
  },
  {
    title: "Jamatia Firewood Basket",
    emoji: "🧺",
    color: "#C8A870",
    desc: "Hand-woven cane carrying basket made by the Jamatia tribe — sturdy & functional tribal craft",
    image: gJamatiaBasket,
  },
  {
    title: "Tripura Tribal Jewellery (Okra)",
    emoji: "🌾",
    color: "#E8D890",
    desc: "Traditional beaded & metalwork jewellery worn by tribal communities during festivals & ceremonies",
    image: gTribalJewellery,
  },

  // ── DANCE & PERFORMING ARTS ────────────────────────────────────────────
  {
    title: "Hojagiri Dance",
    emoji: "🏺",
    color: "#E8B870",
    desc: "Extraordinary balancing dance of Reang (Bru) women — performed standing atop earthen pitchers",
    image: gHojagiri,
  },
  {
    title: "Garia Dance",
    emoji: "💃",
    color: "#90C870",
    desc: "Tripuri harvest dance dedicated to Lord Garia — celebrated during Garia Puja in April",
    image: gGariaDance,
  },
  {
    title: "Lebang Dance",
    emoji: "🦗",
    color: "#78B858",
    desc: "Folk dance inspired by insect (lebang bug) hunting — performed with colourful costumes & synchronized steps",
    image: gLebangDance,
  },
  {
    title: "Bizhu Dance (Chakma)",
    emoji: "🎉",
    color: "#F4C860",
    desc: "Energetic dance of the Chakma tribe performed during Bizhu festival — last day of Chaitra month",
    image: gBizhuDance,
  },

  // ── MUSIC & INSTRUMENTS ────────────────────────────────────────────────
  {
    title: "Chongpreng",
    emoji: "🎸",
    color: "#C8A860",
    desc: "Traditional bamboo string instrument of Tripura — hollow bamboo with attached strings, similar to a guitar",
    image: gChongpreng,
  },
  {
    title: "Sumui (Bamboo Flute)",
    emoji: "🎵",
    color: "#90B870",
    desc: "Traditional bamboo flute played by Tripuri tribal communities during festivals and folk performances",
    image: gSumui,
  },
  {
    title: "Sarinda",
    emoji: "🎻",
    color: "#B87840",
    desc: "Traditional string instrument of Tripura — bowed fiddle used in tribal folk music",
    image: gSarinda,
  },
  {
    title: "Tripuri Tribal Drum",
    emoji: "🥁",
    color: "#A87848",
    desc: "Barrel-shaped drum with goat-skin membranes — essential percussion in every Tripuri ceremony and dance",
    image: gTribalDrum,
  },
];
