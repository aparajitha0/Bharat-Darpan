import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, MapPin, ChevronRight, CheckCircle, X, ZoomIn } from "lucide-react";
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

/* ─── Lightbox ──────────────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
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
function DocxImage({ label, source, color = "#D45A3A" }: { label: string; source?: string; color?: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-border my-4"
      style={{ background: color + "12" }}
    >
      <div className="flex items-center justify-center py-10 gap-3" style={{ borderBottom: `2px solid ${color}22` }}>
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
function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Cinzel', serif" }}>{title}</h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

/* ─── Image grid (shared) ────────────────────────────────────────────────── */
function ImageGrid({
  images, alt, onImageClick,
}: { images: string[]; alt: string; onImageClick: (src: string, alt: string) => void }) {
  const cols = images.length === 1
    ? "grid-cols-1"
    : images.length >= 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${cols}`}>
      {images.map((src, idx) => (
        <button
          key={idx}
          onClick={() => onImageClick(src, `${alt}${images.length > 1 ? ` — image ${idx + 1}` : ""}`)}
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
  number, name, tagline, description, source, hasImage, imageLabel, images,
  onImageClick,
}: {
  number: number; name: string; tagline?: string; description: string;
  source?: string; hasImage?: boolean; imageLabel?: string;
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
          <h3 className="font-bold text-foreground text-base" style={{ fontFamily: "'Cinzel', serif" }}>{name}</h3>
          {tagline && <p className="text-muted-foreground text-xs italic mt-0.5">{tagline}</p>}
        </div>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p className="text-sm text-foreground leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{description}</p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage label={imageLabel ?? name} source={source} color="#D45A3A" />
        )}
        {source && !hasImage && !images && <p className="text-xs text-muted-foreground">{source}</p>}
        {source && images && <p className="text-xs text-muted-foreground">{source}</p>}
      </div>
    </div>
  );
}

/* ─── Historical place card ──────────────────────────────────────────────── */
function HistoricalPlaceCard({
  number, name, description, source, hasImage, imageLabel,
  subPlaces,
  images,
  onImageClick,
}: {
  number: number; name: string; description: string; source?: string;
  hasImage?: boolean; imageLabel?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
  subPlaces?: {
    name: string; location?: string; description: string;
    source?: string; hasImage?: boolean; imageLabel?: string;
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
        <h3 className="font-bold text-foreground text-base pt-1" style={{ fontFamily: "'Cinzel', serif" }}>{name}</h3>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line" style={{ fontFamily: "'Lora', serif" }}>{description}</p>
        {images && images.length > 0 && (
          <ImageGrid images={images} alt={name} onImageClick={onImageClick} />
        )}
        {hasImage && !images && (
          <DocxImage label={imageLabel ?? name} source={source} color="#3A8A5A" />
        )}
        {source && (!hasImage || images) && <p className="text-xs text-muted-foreground">{source}</p>}

        {subPlaces && subPlaces.length > 0 && (
          <div className="space-y-5">
            {subPlaces.map((sub, idx) => (
              <div key={idx} className="border border-border/60 rounded-xl p-4 bg-muted/30">
                <div className="flex items-start gap-2 mb-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{sub.name}</p>
                    {sub.location && <p className="text-xs text-muted-foreground">{sub.location}</p>}
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed pl-6" style={{ fontFamily: "'Lora', serif" }}>{sub.description}</p>
                {sub.images && sub.images.length > 0 && (
                  <div className="pl-6 mt-3">
                    <ImageGrid images={sub.images} alt={sub.name} onImageClick={onImageClick} />
                  </div>
                )}
                {sub.hasImage && !sub.images && (
                  <div className="pl-6">
                    <DocxImage label={sub.imageLabel ?? sub.name} source={sub.source} color="#3A7AAA" />
                  </div>
                )}
                {sub.source && (!sub.hasImage || sub.images) && (
                  <p className="text-xs text-muted-foreground mt-2 pl-6">{sub.source}</p>
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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const openLightbox = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <div className="min-h-screen bg-background">
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #D45A3A 0%, #C03020 40%, #4CAF84 100%)" }}
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
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
                Tamil Nadu
              </h1>
              <p className="text-white/80 text-xl italic" style={{ fontFamily: "'Lora', serif" }}>
                The Land of Temples
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Quick Facts</h3>
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
                      <span className="text-white text-xs font-medium">{value}</span>
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
        <Section title="Capital — Chennai" icon="🏛️">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 border border-red-100 dark:border-red-900/30 text-center">
            <div className="text-5xl mb-3">🌆</div>
            <h3 className="text-2xl font-bold text-foreground mb-1" style={{ fontFamily: "'Cinzel', serif" }}>Chennai</h3>
            <p className="text-muted-foreground text-sm">Capital of Tamil Nadu — The Detroit of Asia</p>
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
            <p className="text-xs text-muted-foreground">(src: mapsofindia.com) — Click the map to view full size</p>
          </div>
        </Section>

        {/* Brief Introduction */}
        <Section title="Brief Introduction" icon="📜">
          <div className="space-y-4 text-base leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            <p className="text-foreground">
              The State of Tamil Nadu has a hoary antiquity. Though early sangam classics throw historical references, we pass to recorded history only from the Pallavas.
            </p>
            <p className="text-foreground">
              The southern states of India were under the hegemony of the Cholas, the Cheras and the Pandyas for centuries. The Pallavas held supremacy from about the second quarter of the fourth century A.D. They were the originators of the famous Dravidian style of temple architecture. The last Pallava ruler was Aparajita, in whose reign the later Cholas under Vijayalaya and Aditya asserted themselves by about the 10th century. At the end of the 11th century, Tamil Nadu was ruled by several dynasties.
            </p>
            <p className="text-foreground">
              Muslims gradually strengthened their position, which led to the establishment of the Bahamani Sultanate, by the middle of the 14th century. At the same time, the Vijayanagar Kingdom quickly consolidated itself and extended its sway over the whole of South India, and at the close of the century, Vijayanagar became the supreme power in South. However, it crumbled at the battle of Talikota in 1564 to the confederate forces of the Deccan Sultans.
            </p>
            <p className="text-foreground">
              Even during the period of the tumultuous confusion that followed the battle of Talikota, European commercial interest had appeared as rivals in the area of South India. The Portuguese, the Dutch, the French and the English came in quick succession and established trading centres known as 'Factories'. The East India Company, which had established its factory at Masulipatnam in 1611, gradually annexed territories by encouraging enmity among the native rulers. Tamil Nadu was a major centre of the Indian independence movement.
            </p>
            <p className="text-foreground">
              Tamil Nadu is bounded on north by Andhra Pradesh and Karnataka, on the west by Kerala, on the east by the Bay of Bengal, and on the south by the Indian Ocean. Tamil Nadu covers a total land area of 130,060 km² and is divided into 32 districts: Ariyalur, Chennai, Coimbatore, Cuddalore, Dharmapuri, Dindigul, Erode, Kancheepuram, Kanyakumari, Karur, Krishnagiri, Madurai, Nagapattinam, Namakkal, Perambalur, Pudukkottai, Ramanathapuram, Salem, Sivaganga, Thanjavur, The Nilgiris, Theni, Thiruvallur, Thiruvannamalai, Thiruvarur, Tirunelveli, Tirupur, Tiruchirappalli (Trichy), Tuticorin (Thoothukoodi), Vellore, Villupuram and Virudhunagar.
            </p>
            <p className="text-foreground italic text-primary font-medium">
              It is regarded as the cradle of Dravidian culture with its cultural paraphernalia speckled all across the state in the form of magnificent temples, gateways, intricate carvings, and the society seeped in tradition.
            </p>
            <p className="text-xs text-muted-foreground">(src: govt of TN, mapsofindia.com)</p>
          </div>
        </Section>

        {/* Festivals */}
        <Section title="Festivals / Culture / Traditions" icon="🎉">
          <div className="space-y-8">
            {festivals.map((f, i) => (
              <FestivalCard key={i} number={i + 1} {...f} onImageClick={openLightbox} />
            ))}
          </div>
        </Section>

        {/* Historical Places */}
        <Section title="Historical Places / Monuments" icon="🏯">
          <div className="space-y-10">
            {historicalPlaces.map((p, i) => (
              <HistoricalPlaceCard key={i} number={i + 1} {...p} onImageClick={openLightbox} />
            ))}
          </div>
        </Section>

        {/* Facts */}
        <Section title="Facts about Tamil Nadu" icon="💡">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {facts.map((fact, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>{fact}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Art Gallery */}
        <Section title="Art Gallery" icon="🎨">
          <p className="text-muted-foreground text-sm mb-4">Scroll horizontally to explore Tamil Nadu's iconic foods, crafts, dance, and traditions.</p>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4" style={{ minWidth: "max-content" }}>
              {artGallery.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-44 rounded-xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div
                    className="h-36 flex flex-col items-center justify-center text-4xl"
                    style={{ backgroundColor: item.color + "33", borderBottom: `2px solid ${item.color}44` }}
                  >
                    <span>{item.emoji}</span>
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-xs text-foreground leading-tight">{item.title}</p>
                    {item.desc && (
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">{item.desc}</p>
                    )}
                  </div>
                </div>
              ))}
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
          <button onClick={() => setLocation("/")} className="text-primary font-semibold hover:underline text-sm">
            ← Incredible India
          </button>
          <p className="text-xs text-muted-foreground mt-2">Preserving India's rich cultural legacy for generations to come</p>
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
      "Pongal is the harvest festival celebrated by the farmers in January to worship the sun, the earth and the cattle as thanks giving for a bounteous harvest. It is followed by the Jallikattu. Tamil Nadu celebrates a four-day harvesting festival annually during the month of January, popularly known as 'Pongal'. The celebration is held to praise the Sun God for nourishing the crops throughout the year. The four-day celebration involves: Bhogi, Surya Pongal, Mattu Pongal and Kaanum Pongal. On the day of Surya Pongal (the second day), the boiling of fresh rice with milk, in a vessel, symbolises the prosperity of the harvest. When the rice and milk overflow from the pot, it is considered a good omen.",
    images: [pongal1, pongal2, pongal3, pongal4, pongal5],
    source: "",
  },
  {
    name: "Jallikattu — Bull Fight",
    tagline: "In some parts of southern Tamil Nadu. Alanganallur in Tamil Nadu is internationally famous for Jallikattu.",
    description:
      "In ancient times, 'Yeru thazhuvuthal' or embracing the bull, was connected in displaying the men's pride and victory for winning over a girl for marriage. The sport has prevailed in Tamil culture for over 2000 years now. Manju Virattu is conducted every year in various regions of the state including Madurai, Sivagangai and Pudukottai. The event is celebrated on the second day of Pongal (Thai Pongal), which falls between the 14th and 16th of January every year.",
    images: [jalli1, jalli2],
    source: "",
  },
  {
    name: "Chithirai Festival, Madurai",
    tagline: "Brings a spectacular re-enactment of the marriage of the Pandiyan princess Meenakshi to Lord Sundareswarar.",
    description:
      "A famous Vishnu Temple dedicated to Lord Alagar is located 21 kilometres north of Madurai. The temple is set on a hill with breathtaking views. Alagarkoil is the name of the shrine, and Solaimalai is the name of the hill. The temple also has some lovely carvings, making it a worthwhile visit. The Hill is home to Palamudirsolai, one of Lord Subramaniya's six abodes. Chithirai Festival is celebrated grandly at the Meenakshi Amman Temple in Madurai during April–May, commemorating the cosmic wedding of Goddess Meenakshi with Lord Sundareswarar (Shiva).",
    images: [chith1, chith2],
    source: "",
  },
  {
    name: "Tamizh Puttandu — Tamil New Year",
    tagline: "Meaning 'Tamil New Year' — the first day of year on the Tamil calendar.",
    description:
      "Traditionally celebrated as a festival by Tamils, the festival date is set with the solar cycle of the solar Hindu calendar, as the first day of the month of Chittirai. It falls on or about 14 April every year. Households clean up the house, prepare a tray with fruits, flowers and auspicious items, light up the family puja altar and visit their local temples. People wear new clothes, exchange greetings, distribute sweets and give gifts, especially money, to children and the needy.",
    images: [puth1, puth2],
    source: "(src: boldskytamil.com)",
  },
  {
    name: "Adipperukku",
    tagline: "The festival of Padhinettam Perukku, also known as 'Aadi Perukku', held on the 18th day of the Tamil month of Aadi.",
    description:
      "'Perukku' means 'raising' in Tamil. This festival is a reflection of the River Kaveri's rise due to the monsoon rains. The Tamil calendar month of Aadi is marked by festivities and fervour honouring Water and other natural resources. Prayers and pujas are performed throughout this month to express gratitude to the mighty Goddesses for abundant natural resources. Women and girls decorate the steps with flowers and incense, and prepare offerings to propitiate the river goddess.",
    images: [adi1, adi2],
    source: "",
  },
  {
    name: "Dance Festival, Mamallapuram",
    tagline: "Set before an open-air stage created 13 centuries ago.",
    description:
      "The incredible monolithic rock sculptures of the Pallavas, next to the sea in the ancient city of Mamallapuram, form the spectacular backdrop to this festival. Bharatha Natyam, Kuchipudi, Kathakali, and Odissi are some dance forms presented by the very best exponents of the art besides folk dances. The Mamallapuram Dance Festival is organised by the Department of Tourism, Tamil Nadu, and is a 30-day festival held annually between December and January.",
    images: [dance1, dance2],
    source: "(src: utsav.gov.in, Wikipedia)",
  },
  {
    name: "Velankanni Festival",
    tagline: "Attracts thousands, clad in orange robes, to the sacred spot where the ship landed.",
    description:
      "Equally famous are the Virgin Mary's miraculous healing powers, earning for the church the name 'Lourdes of the East'. The annual feast of Our Lady of Health at Velankanni is celebrated for nine days from August 29 to September 8. Pilgrims travel from across India and abroad to seek the blessings of Our Lady at this famous basilica on the Coromandel Coast.",
    hasImage: false,
    source: "",
  },
  {
    name: "Navarathiri Festival — Kolu",
    tagline: "Literally means the festival of 'nine nights'.",
    description:
      "Taking unique and different forms in different states of India, all to propitiate the goddess Sakthi, for power, wealth and knowledge. Celebrated in Tamil Nadu, Karnataka, and Andhra Pradesh, the festival includes placing dolls of a multitude of gods, goddesses, men, animals, and children on a steps-like set-up. In Tamil it is known as 'Bommai Golu'. The Navratri Golu depicts scenes from ancient times, epics, village life and other aspects of Hindu mythology.",
    images: [navar1, navar2],
    source: "(Wikipedia)",
  },
  {
    name: "Karthigai Deepam",
    tagline: "An enchanting festival that illuminates the heart of Tamil Nadu.",
    description:
      "With little clay lamps twinkling wherever you look like a million stars, the three-day festival, celebrated with great enthusiasm, is an integral part of Tamil culture. Devoted to Lord Karthikeya (also known as Lord Muruga), the lights of Karthigai Deepam are said to ward off darkness and evil spirits, spreading prosperity and joy. As per ancient Hindu scriptures, the two great deities Lord Vishnu and Brahma had a disagreement about who was greater. To resolve the argument, Lord Shiva appeared in the form of an enormous fire column — an Agni Lingam — that had no beginning and no end. The beacon at Thiruvannamalai, lit on top of the Annamalai hill on this auspicious day, is visible for miles around.",
    images: [karth1, karth2, karth3],
    source: "(src: kalkionline.com, incredibleindia.com, tirthyatra.com)",
  },
  {
    name: "Karadaiya Nombu",
    tagline: "Marking the transition from the Tamil month of Maasi to Panguni.",
    description:
      "It is a significant festival where married women and young girls fast and pray to Goddess Kamakshi/Gowri for their husbands' longevity and prosperity, inspired by the story of Savitri and Satyavan. The festival celebrates the dedication of Savitri, who brought her husband back from Yama, embodying love and commitment. According to the legend, Savitri was a devoted princess who used her wit and devotion to reclaim her husband's life from the god of death. Women prepare the traditional 'Karadai' — a dish made of rice and black-eyed peas — and offer it to the goddess.",
    images: [karad1, karad2],
    source: "(src: kannan's kitchen, veenas vegnation)",
  },
  {
    name: "Surasamharam / Kalazhagar Athula",
    tagline: "Celebrating Lord Murugan's victory over the demon Surapadman.",
    description:
      "Surasamharam is celebrated on the sixth day of Skanda Sashti (in the Tamil month of Aippasi/October–November) at the Tiruchendur Murugan Temple and other Murugan shrines across Tamil Nadu. It commemorates the epic battle of Lord Murugan against the demon Surapadman and his army. Kalazhagar Athula is celebrated at Madurai's Alagarkoil during the Chithirai festival, when the deity Lord Alagar (Vishnu) enters the Vaigai River in a grand procession.",
    hasImage: false,
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "Six Abodes of Murugan (Arupadai Veedu)",
    description:
      "The Six Abodes of Murugan, known as 'Arupadai Veedu', are sacred temples in Tamil Nadu, India, celebrating different stages of Lord Murugan's life, victories, and legends.",
    images: [sixAbodes],
    subPlaces: [
      {
        name: "Subramaniyaswamy Temple – Thiruparankundram",
        location: "Madurai district",
        description:
          "Located on a hillock, it is the first of the Aarupadaiveedu. Murugan's marriage with Deivanai took place here.",
        images: [thiruparankundram],
        source: "(src: Tumblr)",
      },
      {
        name: "Arulmigu Senthilnathar Temple – Tiruchendur",
        location: "Thoothukudi district",
        description:
          "Located along the coast of Bay of Bengal, the temple commemorates the place where Murugan won a victory over the demon Surapadman.",
        images: [thiruchendur],
        source: "(src: cottage9)",
      },
      {
        name: "Arulmigu Dandayudhapani Temple – Palani",
        location: "Dindigul district",
        description:
          "Located at the foothills of a hillock, the deity known as 'Kulanthai Velayuthaswami' is depicted as a young form of Murugan, and said to have been worshipped by the goddess Lakshmi. In the temple on the hilltop where 'Dhandayuthapani' is the main deity, Murugan is depicted as a hermit carrying a staff ('danda'). This is the place where Murugan is said to have arrived after his feud with his family over a divine fruit.",
        images: [palani1, palani2],
        source: "(src: Cottage9, southern travels)",
      },
      {
        name: "Swaminatha Swamy Temple – Swamimalai",
        location: "Thanjavur district",
        description:
          "Located atop a small hillock, the temple commemorates the incident where Murugan is regarded to have explained the essence of the Pranava mantra 'Om' to his father Shiva. Once, Brahma disrespected Murugan when he was visiting Mount Kailash. Murugan boldly asked Brahma the meaning of 'OM'. Failing to answer, Brahma admitted his ignorance. Murugan then imprisoned Brahma and took over his role of creation. Shiva intervened and asked Murugan to release Brahma, to which Murugan agreed only after teaching Brahma the meaning of OM. Since Murugan taught Shiva, his father, the essence of the Pranava Mantra, he is called Swaminatha — meaning 'the teacher of Shiva'.",
        images: [swamimalai],
        source: "(src: casual walker)",
      },
      {
        name: "Subramanya Swamy Temple – Tiruttani",
        location: "Thiruvallur district",
        description:
          "Located atop a hill, Murugan is said to have reclaimed his inner peace after winning a war over the Surapadman and married Valli here. After the intensity of the war in Tiruchendur, Murugan needed a place to subdue his anger and seek inner peace, making Tiruttani a place of tranquility. 'Thanigai' in Tamil means 'to pacify' or 'to calm down', which is why the hill and town are named Tiruttani.",
        images: [thiruttani],
        source: "(src: Wikipedia)",
      },
      {
        name: "Solaimalai Murugan Temple – Pazhamudircholai",
        location: "Madurai district",
        description:
          "Located on a hillock near a stream called 'Nupura Gangai', Murugan is seen here with both his consorts, Deivanai and Valli. The temple is associated with the legendary Tamil poetess Avvaiyar, who found Murugan disguised as a boy eating fruits. She requested some, and he asked if she wanted hot or cold fruits. She said cold, and he blew on them — revealing them to be hot roasted ones. Embarrassed, Avvaiyar remarked that she had blown on the fruits to cool them. This episode gave us the timeless saying: 'Learned people know they know nothing.'",
        images: [pazhamudir],
        source: "(src: TemplePurohit)",
      },
    ],
  },
  {
    name: "Pancha Bhootam Temples",
    description:
      "The Pancha Bhoota Stalam refers to five sacred Shiva temples in South India, each representing a natural element: Earth, Water, Fire, Air, and Ether (Space). Out of 5, four of these temples are located in Tamil Nadu and one is in Andhra Pradesh, embodying the Hindu philosophy that nature's elements are manifestations of Shiva. In the temples, Shiva is said to have manifested himself in the respective forms of the five elements.",
    hasImage: false,
    subPlaces: [
      {
        name: "Earth – Bhumi Lingam – Ekambareshwar Temple",
        location: "Kanchipuram",
        description:
          "Shiva is worshipped as Ekambareswarar or Ekambaranathar, represented by the Prithvi (earth) lingam. The temple complex covers 25 acres and is one of the largest in India. It houses four gateway towers known as gopurams. The tallest is the southern tower, with 11 stories and a height of 58.5 metres (192 ft), making it one of the tallest temple towers in India. The temple has a mango tree believed to be 3,500 years old, under which Parvati worshipped Shiva as the earth lingam.",
        images: [bhumiLingam],
        source: "",
      },
      {
        name: "Water – Varuna/Jambu Lingam – Jambukeshwarar Temple",
        location: "Thiruvanaikaval, near Trichy",
        description:
          "The sanctum of Jambukeswara has the copper-plated lingam and an underground water stream, and despite draining the water out, it is always filled with water. Once, Parvati mocked Shiva's penance for the betterment of the world. Shiva wanted to condemn her act and banished her to the earth from Mount Kailash to do penance. Parvati, in the form of Akhilandeshwari, as per the instruction of Shiva, worshipped Shiva in the form of an Appu lingam (water lingam). As a result, Shiva forgave her and rewarded her by sharing his half body, thus becoming Ardhanarishvara.",
        images: [jambuLingam],
        source: "",
      },
      {
        name: "Fire – Agni/Jyothi Lingam – Annamalaiyar Temple",
        location: "Thiruvannamalai",
        description:
          "Shiva is worshipped as Annamalaiyar or Arunachaleshwar, represented by a silver-plated lingam referred to as Agni lingam. The sanctum inside is always lit by fire lamps. The 9th-century Shaiva saint poet Manikkavacakar composed the Tiruvempaavai here. The temple complex covers 10 hectares and is one of the largest in India. The tallest gopuram rises to 66 metres (217 ft), making it the 3rd tallest temple tower in India. The Karthigai Deepam beacon lit atop Annamalai hill is visible for miles around.",
        images: [jyothiLingam],
        source: "",
      },
      {
        name: "Ether/Space – Indra/Akasha Lingam – Thillai Natarajar Temple",
        location: "Chidambaram",
        description:
          "Chidambaram, the name of the city and the temple, literally means 'atmosphere of wisdom' or 'clothed in consciousness'. The temple wall carvings display all the 108 karanas from the Natya Shastra by Bharata Muni — these postures form a foundation of Bharatanatyam. The present temple was built in the 10th century when Chidambaram was the capital of the Chola dynasty, making it one of the oldest surviving active temple complexes in South India. Shiva is idolised in three forms: as a crystal lingam, as a formless space covered by curtains (the Chidambaram Rahasyam), and as the Nataraja performing the Ananda Tandava ('Dance of Delight') in the golden hall known as Pon Ambalam.",
        hasImage: true,
        imageLabel: "Thillai Natarajar Temple – Chidambaram (Ether/Space element)",
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
      "Meenakshi Temple, also known as Meenakshi Sundareswarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. It is dedicated to Meenakshi, a form of Parvati, and her consort Sundareswarar (Shiva). Built around 1569 by Ariyanatha Mudaliyar, the minister of the Nayak dynasty, the hall is known for its structural beauty and detailed carvings. It is called the 1000-pillar temple because it houses a massive 16th-century hall known as the Aayiram Kaal Mandapam, which contains a vast, intricately carved forest of pillars — actually 985 granite pillars arranged in rows. While the Sangam literature mentions the temple city of Madurai, the existence of a temple is first referenced in Tamil texts from the 6th century CE. The temple conducts six pujas every day, comprising four rituals: abhisheka (sacred bath), alankaram (decoration), naivedanam (food offerings) and deepa aradanai (lamp ceremony) for both Meenakshi and Sundareswarar.",
    hasImage: true,
    imageLabel: "Madurai Meenakshi Sundareswarar Temple — 1000-pillar hall",
    source: "(src: Wikipedia, National Geographic)",
  },
  {
    name: "Rameshwaram Temple",
    description:
      "Ramanathaswamy Temple is a Hindu temple dedicated to Lord Shiva, located on Rameswaram island in Tamil Nadu. It is one of the twelve Jyotirlinga temples. According to tradition, the lingam was established and worshipped by Rama before he crossed the bridge called Rama Setu to the island kingdom of Lanka. It is one of the Char Dham pilgrimage sites. There are sixty-four Tīrthas (holy water bodies) in and around the island, and bathing in them is a major aspect of the pilgrimage. The temple is famous for its massive corridor with 1,212 intricately carved, symmetrical sandstone pillars standing approximately 30 feet tall — forming the world's longest temple corridor. Some reports suggest the overall temple complex may have up to 4,000 pillars in total.",
    hasImage: true,
    imageLabel: "Ramanathaswamy Temple – Rameshwaram — world's longest temple corridor",
    source: "(src: Famous Tamil Nadu Temples, Wikimedia Commons, Intermiles)",
  },
  {
    name: "Dhanushkodi",
    description:
      "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of Tamil Nadu. The town was destroyed during the 1964 Rameswaram cyclone and remains uninhabited. An estimated 1,800 people died in the cyclonic storm on 22 December 1964, including 115 passengers on board the Pamban-Dhanushkodi passenger train. The Government of Madras declared Dhanushkodi a ghost town, unfit for living. The name Dhanushkodi means 'end of the bow'. It is significant for its deep mythological roots to the Ramayana, having served as the site where Lord Rama is believed to have marked the starting point of the Ram Setu bridge to Lanka — a 50 km long chain of limestone shoals connecting India's Rameswaram Island to Sri Lanka's Mannar Island.",
    hasImage: true,
    imageLabel: "Dhanushkodi — abandoned ghost town at the tip of Pamban Island",
    source: "(src: Kiomoi Travels, Tusk Travels)",
  },
  {
    name: "Pamban Bridge",
    description:
      "Pamban Bridge was a railway bridge that connected the town of Rameswaram on Pamban Island with Mandapam in mainland India. Opened on 24 February 1914, it was India's first sea bridge. The Pamban bridge was the only surface transport link connecting Rameswaram to mainland India until 1988, when a road bridge was constructed parallel to the railway bridge. In 2020, construction of a new bridge closer to the existing one began. The New Pamban Bridge was completed in 2024 and opened for traffic in April 2025.",
    hasImage: true,
    imageLabel: "Pamban Bridge — India's first sea bridge, Rameswaram",
    source: "",
  },
  {
    name: "The Great Chola Temples (UNESCO World Heritage Site)",
    description:
      "The Great Living Chola Temples were built by kings of the Chola Empire, which stretched over all of south India and the neighbouring islands. The site includes three great 11th- and 12th-century temples: the Brihadisvara Temple at Thanjavur, the Brihadisvara Temple at Gangaikondacholisvaram, and the Airavatesvara Temple at Darasuram. The Thanjavur Brihadeeswara temple, also variously known as Thanjai Periya Kovil, the Thanjavur Big Temple or Rajarajeshwaram, is one of the largest Hindu temples and an exemplar of Tamil architecture. Construction began around 1003–1004 CE and was consecrated by Rajaraja in 1010 CE. The temples testify to the brilliant achievements of the Chola in architecture, sculpture, painting and bronze casting.\n\nCriteria for UNESCO recognition:\n• (i) Outstanding creative achievement in the architectural conception of the pure Dravida temple form.\n• (ii) The Brihadisvara at Thanjavur became the first great example of Chola temples.\n• (iii) An exceptional testimony to the architecture of the Chola Empire and Tamil civilisation.\n• (iv) Outstanding examples of the architecture and Chola ideology.",
    hasImage: true,
    imageLabel: "Brihadeeswara Temple – Thanjavur (UNESCO World Heritage Site)",
    source: "(src: Moneycontrol, Incredible India)",
  },
  {
    name: "Velankanni Church",
    description:
      "The Basilica of Our Lady of Good Health, also known as the Sanctuary of Our Lady of Velankanni, is a Christian shrine at the town of Velankanni, Tamil Nadu. The devotion has existed since the mid-16th century, attributed to three separate events: the apparition of the Madonna and Child to a slumbering shepherd boy, the miraculous healing of a handicapped buttermilk vendor, and the rescue of Portuguese sailors from a deadly sea storm. The basilica is built in the Gothic style of architecture. The Shrine Basilica contains three chapels, Our Lady's Tank, Church Museum, and Velankanni Beach. Pilgrims sometimes shave their heads as an offering and perform ear-piercing ceremonies — both being Hindu traditions adopted at this sacred site. It is known as the 'Lourdes of the East' for its reputed miraculous healing powers.",
    hasImage: true,
    imageLabel: "Basilica of Our Lady of Good Health – Velankanni",
    source: "(src: Wikipedia)",
  },
  {
    name: "Thiruvalluvar Statue, Kanyakumari",
    description:
      "The Thiruvalluvar Statue is a 40.6-metre-tall (133 ft) stone sculpture of Tamil poet and philosopher Thiruvalluvar, the author of the Thirukkural, atop a small island near Kanniyakumari at the southernmost point of the Indian peninsula — where the Bay of Bengal, the Arabian Sea and the Indian Ocean meet. During its silver jubilee celebrations on January 1, 2025, the Government of Tamil Nadu declared the statue as the 'Statue of Wisdom'. The combined height of 133 feet denotes the 133 chapters of the Thirukkural. The pedestal of 38 feet represents the 38 chapters of Virtue. The right hand of the statue with three fingers pointing skywards signifies the three cantos of the Kural text: Aram (Virtue), Porul (Wealth), and Inbam (Love). A glass bridge now connects the statue to the Vivekananda Rock Memorial, inaugurated on 30 December 2024.",
    hasImage: true,
    imageLabel: "Thiruvalluvar Statue – Kanyakumari (133 ft)",
    source: "(src: Wikipedia)",
  },
  {
    name: "Vivekananda Rock Memorial",
    description:
      "Vivekananda Rock Memorial is a monument and popular tourist attraction at Kanyakumari, India's southernmost tip. The memorial stands on one of two rocks located about 500 meters off the mainland of Vavathurai, Tamil Nadu. It was built in 1970 in honour of Swami Vivekananda, who is said to have attained enlightenment on the rock. According to legends, it was on this rock that Goddess Kanyakumari (Parvathi) performed tapas in devotion of Lord Shiva. A meditation hall known as Dhyana Mandapam is attached to the memorial. The design of the mandapa incorporates different styles of temple architecture from all over India. The rocks are surrounded by the Laccadive Sea where the three oceans — Bay of Bengal, the Indian Ocean and the Arabian Sea — meet.",
    hasImage: true,
    imageLabel: "Vivekananda Rock Memorial – Kanyakumari, where three oceans meet",
    source: "(src: Wikipedia)",
  },
  {
    name: "Group of Monuments at Mahabalipuram (UNESCO World Heritage Site)",
    description:
      "This group of sanctuaries, founded by the Pallava kings, was carved out of rock along the Coromandel coast in the 7th and 8th centuries. Known especially for its rathas (temples in the form of chariots), mandapas (cave sanctuaries), giant open-air reliefs such as the famous 'Descent of the Ganges', and the Temple of Rivage with thousands of sculptures to the glory of Shiva. The site, about 60 km south of Chennai, has 40 ancient monuments and Hindu temples, including one of the largest open-air rock reliefs in the world: the Descent of the Ganges or Arjuna's Penance. The ratha temples are carved from naturally occurring blocks of diorite and granite in sand. The best-known are the five monolithic structures known as the Pandava Rathas or Five Rathas.",
    hasImage: true,
    imageLabel: "Group of Monuments at Mahabalipuram — Pandava Rathas (UNESCO)",
    source: "(src: Mahabalipuram, Alamy, Wikipedia, NDTV)",
  },
  {
    name: "Mountain Railways of India — Nilgiri Mountain Railway (UNESCO World Heritage Site)",
    description:
      "The Nilgiri Mountain Railway (NMR) in Tamil Nadu is a UNESCO World Heritage Site (added in 2005) and a premier mountain railway in India. Built by the British in 1908, this 46-km, metre-gauge line connects Mettupalayam to the hill station of Udhagamandalam (Ooty) via Coonoor. It is renowned for being the only rack-and-pinion railway in India, navigating steep slopes with a gradient of 1 in 12.5, and features 16 tunnels and over 250 bridges. Construction was first proposed in 1854, but due to the mountainous terrain it only started in 1891 and was completed in 1908. This railway scales an elevation from 326 m to 2,203 m. The uphill journey takes around 290 minutes (4.8 hours), and the downhill journey takes 215 minutes. It has the steepest track in Asia with a maximum gradient of 8.33%.\n\nStations: Mettupalayam → Kallar → Adderly → Hillgrove → Runneyemede → Coonoor → Wellington → Aravankadu → Ketti → Lovedale → Fern Hill → Udhagamandalam (Ooty).",
    hasImage: true,
    imageLabel: "Nilgiri Mountain Railway — UNESCO rack-and-pinion train to Ooty",
    source: "",
  },
  {
    name: "Trichy Malaikottai (Rockfort)",
    description:
      "Malaikottai, better known as Rockfort, is a living record of Tamil Nadu's past glory and historical heritage. Founded at the heart of Tiruchirappalli (Trichy), this very old fortification is built on a colossal rock mass over 3.8 billion years old — one of the oldest geological formations in the world. Standing high above the city, Malaikottai tells stories of history, religion, and culture. Its past was inextricably linked with the emergence and decline of South Indian dynasties — the Pallavas initially hewed temples out of the ancient rock, and later in the Nayak period the fort was fortified and expanded. The fort played an important role in the Carnatic Wars of the 18th century, fought hard by British and French forces. One of the most impressive things about the fort is its blend of natural rock formations with man-made constructions. The fort, situated on a 273-foot rock, offers magnificent views of Trichy. The Ucchi Pillayar Temple (Lord Ganesha) is the main attraction atop the fortification.",
    hasImage: true,
    imageLabel: "Trichy Malaikottai (Rockfort) — 3.8-billion-year-old rock fortress",
    source: "(src: TripAdvisor)",
  },
  {
    name: "Srirangam Ranganathaswamy Temple",
    description:
      "The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganathar (a form of Vishnu) located in Srirangam, Tiruchirapalli. The Srirangam temple stands as the largest religious complex in the world in active worship with a continuous historical presence as a Hindu temple. The temple complex has been nominated as a UNESCO World Heritage Site and is in UNESCO's tentative list. In 2017, the temple won the UNESCO Asia Pacific Award of Merit for cultural heritage conservation — the first temple in Tamil Nadu to receive this UNESCO award. The annual 21-day festival during the Tamil month of Margazhi (December–January) attracts 1 million visitors. The temple town has over 800 inscriptions in six major Indian languages: Tamil, Sanskrit, Kannada, Telugu, Marathi and Odia. The Lord rests on the five-headed snake Adisesha, representing serene, conscious sleep (Yoga Nidra), lying on an east-west axis with the deity facing south towards Lanka.",
    hasImage: true,
    imageLabel: "Srirangam Ranganathaswamy Temple — world's largest active Hindu temple complex",
    source: "(src: Wikipedia, cottage9)",
  },
];

const facts = [
  "Tamil Nadu is home to one of the world's oldest civilizations, with the Tamil language being one of the longest-surviving and the first recognized classical language.",
  "It is the 11th largest state by area.",
  "It is the 2nd largest economy in India with a GSDP of over $280 billion.",
  "The state contributes significantly to India's manufacturing, producing 60% of the country's matches and acting as a hub for automobile manufacturing.",
  "It is the 6th most populated state in India, with a high literacy rate of around 80.09%.",
  "The state is the birthplace of legendary mathematician Srinivasa Ramanujan and former President APJ Abdul Kalam.",
  "Archaeological evidence indicates that the Tamil Nadu region could have been inhabited more than 385,000 years ago by archaic humans.",
  "It has the country's 9th-highest GSDP per capita of ₹3,15,220 (US$3,700) and ranks 11th in Human Development Index.",
  "Tamil Nadu is one of the most industrialised states, with the manufacturing sector accounting for nearly one-third of the state's GDP.",
  "The state has three biosphere reserves, mangrove forests, five National Parks, 18 wildlife sanctuaries and 17 bird sanctuaries.",
  "The Sangam literature, historically known as 'the poetry of the noble ones', is the earliest known literature of South India — a collection of 2381 poems in Tamil composed by 473 poets, with 102 anonymous.",
  "Silappathikaram (Silappatikaram) is the earliest Tamil epic — a poem of 5,730 lines, a tragic love story of Kaṇṇaki and her husband Kōvalaṉ.",
  "Thirukural is an ancient Tamil moral literature consisting of 1,330 couplets. It is a book of life considered one of the world's best works on morality. Its author is known as Thiruvalluvar.",
  "Tamil Nadu has the third largest urbanised population in the country after Maharashtra and Uttar Pradesh.",
  "There are a number of rivers in Tamil Nadu, including Kaveri, Vaigai, Palar, Noyyal, Bhavani, Cheyyar, and Thamirabarani.",
  "Major industries include cotton, heavy commercial vehicles, auto components, railway coaches, leather tanning industries, cement, sugar, paper, automobiles and safety matches.",
  "Main mineral wealth of the state is granite, lignite and limestone.",
  "The state is an important exporter of tanned skin and leather goods, yarn, tea, coffee, spices, engineering goods, tobacco, handicrafts and black granite. Tamil Nadu contributes 60% of the tannery industry in India.",
];

const artGallery = [
  { title: "Ambur Biriyani", emoji: "🍛", color: "#D4883A", desc: "Famous biriyani from Ambur, Vellore" },
  { title: "Tirunelveli Halva", emoji: "🍮", color: "#F4A84A", desc: "Iconic wheat halva from Tirunelveli" },
  { title: "Dindigul Talapakatti Biriyani", emoji: "🍚", color: "#E8733A", desc: "Famous seeraga samba biriyani" },
  { title: "Madurai Malli", emoji: "🌸", color: "#F4D8E8", desc: "Famous jasmine flowers of Madurai" },
  { title: "Madurai Butter Bun", emoji: "🥐", color: "#F4E884", desc: "Iconic local bun with butter" },
  { title: "Madurai Jigurthanda", emoji: "🍨", color: "#E8C8E8", desc: "Cold dessert drink with milk, almond gum, ice cream" },
  { title: "Uthukuli Venne (Butter)", emoji: "🧈", color: "#F8F0C4", desc: "Pure white butter from Uthukuli, Erode" },
  { title: "Thoothukoodi Muthu (Pearl)", emoji: "🔮", color: "#E8F4F8", desc: "Famous pearls from Thoothukudi coast" },
  { title: "Salem Mango (Malgova)", emoji: "🥭", color: "#F8C840", desc: "Giant Malgova mangoes from Salem" },
  { title: "Erode Turmeric", emoji: "🌿", color: "#F4B830", desc: "Erode — the largest turmeric market in the world" },
  { title: "Tiruppur Garments", emoji: "👕", color: "#B4D8E8", desc: "Knitwear capital of India" },
  { title: "Kanchipuram Silk Sarees", emoji: "🥻", color: "#D4A4E8", desc: "Famous gold-bordered silk sarees" },
  { title: "Madurai Sungdi Sarees", emoji: "🧣", color: "#E8A8C8", desc: "Traditional cotton sarees of Madurai" },
  { title: "Bharatanatyam", emoji: "💃", color: "#E88844", desc: "Classical Indian dance form from Tamil Nadu" },
  { title: "Dosa & Idli", emoji: "🥞", color: "#F4E8C8", desc: "Iconic South Indian breakfast" },
  { title: "Ven Pongal", emoji: "🍲", color: "#F4D89C", desc: "Savoury rice & lentil dish — breakfast staple" },
  { title: "Vada Sambar", emoji: "🥣", color: "#D4884A", desc: "Crispy lentil fritters with spiced lentil soup" },
  { title: "Rasam", emoji: "🥣", color: "#C84830", desc: "Thin, tangy tamarind soup — digestive staple" },
  { title: "Panniyaram", emoji: "🍡", color: "#D4A864", desc: "Crispy or soft rice batter balls" },
  { title: "Neyi Appam", emoji: "🍩", color: "#D4884A", desc: "Deep-fried ghee sweet rice cakes" },
  { title: "Poi Kaal Kudurai", emoji: "🐎", color: "#D4C8B4", desc: "Means 'False-leg horse' — a village folk dance" },
  { title: "Karagaattam", emoji: "🏺", color: "#A8D4B4", desc: "'Pot dance' — folk dance balancing pot on head while dancing" },
  { title: "Thanjavur Paintings", emoji: "🖼️", color: "#F4D870", desc: "Made with thin gold foils/sheets — classical art form" },
  { title: "Silambattam", emoji: "🥋", color: "#D4A8A8", desc: "Ancient Tamil weapon-based martial art merging fighting and dance-like fluidity" },
  { title: "Thanjavur Thalaiyaati Bommai", emoji: "🪆", color: "#F4C870", desc: "Traditional head-nodding clay doll — iconic Tamil craft" },
  { title: "Typical Tamil Wedding Feast", emoji: "🍽️", color: "#E8A84A", desc: "Typical Tamil wedding feast served on banana leaf" },
];

import React from "react";
