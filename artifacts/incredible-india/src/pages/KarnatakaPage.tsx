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
const KarnatakaMap = "https://i.postimg.cc/52Lq2grJ/image.png";
const Dasara1 = "https://i.postimg.cc/G2hkzCmH/image.png";
const Dasara2 = "https://i.postimg.cc/ryHSG76f/image.png";
const Dasara3 = "https://i.postimg.cc/YC6YH94L/image.png";
const Dasara4 = "https://i.postimg.cc/V5y0yQmB/image.png";
const Ugadi1 = "https://i.postimg.cc/jSbvNBP5/image.png";
const Ugadi2 = "https://i.postimg.cc/mDtSB4fF/image.png";
const Ugadi3 = "https://i.postimg.cc/xTK30g75/image.png";
const Ugadi4 = "https://i.postimg.cc/zDhnj0JT/image.png";
const Makar1 = "https://i.postimg.cc/mrh9FSXG/image.png";
const Makar2 = "https://i.postimg.cc/br0SjVJ9/image.png";
const Makar3 = "https://i.postimg.cc/X73ygW1N/image.png";
const Makar4 = "https://i.postimg.cc/mgpzRHbp/image.png";
const Makar5 = "https://i.postimg.cc/P5JJ65mQ/image.png";
const kan1 = "https://i.postimg.cc/763ZCGkC/image.png";
const kan2 = "https://i.postimg.cc/FHwrDgFN/image.png";
const kan3 = "https://i.postimg.cc/zBFqzsCJ/image.png";
const Hampi1 = "https://i.postimg.cc/dt1JFSLY/image.png";
const Hampi2 = "https://i.postimg.cc/L6b28B1B/image.png";
const Hampi3 = "https://i.postimg.cc/g2LdXXyk/image.png";
const Kambala1 = "https://i.postimg.cc/Jh3fZbsL/image.png";
const Kambala2 = "https://i.postimg.cc/sxLqsmNv/image.png";
const Karaga1 = "https://i.postimg.cc/VknpPjBs/image.png";
const Karaga2 = "https://i.postimg.cc/fLTrd14T/image.png";
const Karaga3 = "https://i.postimg.cc/X7yD9wPQ/image.png";
const Abhi1 = "https://i.postimg.cc/CKJvwJZR/image.png";
const Abhi2 = "https://i.postimg.cc/gr9sgT7w/image.png";
const Sirsi1 ="https://i.postimg.cc/43FSzBXM/image.png";
const Sirsi2 = "https://i.postimg.cc/cLx92VHw/image.png";
const Sirsi3 = "https://i.postimg.cc/KzBDRNjf/image.png";
const Kallu = "https://i.postimg.cc/W1zmMjzf/image.png";
const Cave1 = "https://i.postimg.cc/nz4qHhS9/image.png";
const Cave2 = "https://i.postimg.cc/J0KJkdL3/image.png";
const HampiH1 = "https://i.postimg.cc/vmLmTxM6/image.png";
const HampiH2 = "https://i.postimg.cc/90SmKGPY/image.png";
const Dam1 = "https://i.postimg.cc/65k6hfp6/image.png";
const Dam2 = "https://i.postimg.cc/6Q09tsLy/image.png";
const Daroji1 = "https://i.postimg.cc/9XScWYTN/image.png";
const Falls1 = "https://i.postimg.cc/CMfxn2Fw/image.png";
const Falls2 = "https://i.postimg.cc/tgTXqSrc/image.png";
const Fort1 = "https://i.postimg.cc/rs6c98q5/image.png";
const Fort2 = "https://i.postimg.cc/44tXxh5G/image.png";
const Jhira1 = "https://i.postimg.cc/Kvxhcpjj/image.png";
const Bidar1 = "https://i.postimg.cc/k4KLqWds/image.png";
const Bidar2 = "https://i.postimg.cc/D0cDbF0x/image.png";
const Bandi1 = "https://i.postimg.cc/6pPPZMWY/image.png";
const Bandi2 = "https://i.postimg.cc/LXtQrRzv/image.png";
const Hills = "https://i.postimg.cc/fWvgCzWV/image.png";
const Nandi1 = "https://i.postimg.cc/x1Xx9Lvt/image.png";
const Nandi2 = "https://i.postimg.cc/wvp05PSc/image.png";
const Bhoga1 = "https://i.postimg.cc/pr0CHdyj/image.png";
const Bhoga2 = "https://i.postimg.cc/qv6LP4rm/image.png";
const Baba1 = "https://i.postimg.cc/rmMNR4rB/image.png";
const Baba2 = "https://i.postimg.cc/J7T5tG4x/image.png";
const Giri1 = "https://i.postimg.cc/L8PtyDBd/image.png";
const Chitradurga1 = "https://i.postimg.cc/G2XGB5rr/image.png";
const Chitradurga2 = "https://i.postimg.cc/XND94mQg/image.png";
const Kateel1 = "https://i.postimg.cc/NMjrwkTc/image.png";
const Kateel2 = "https://i.postimg.cc/Fz2f3t61/image.png";
const Kudroli1 = "https://i.postimg.cc/Jz3yD254/image.png";
const Kudroli2 = "https://i.postimg.cc/DZNm3kn5/image.png";
const Belur1 = "https://i.postimg.cc/MHRBsKVf/image.png";
const Belur2 = "https://i.postimg.cc/vZXV2Kg5/image.png";
const Pura1 = "https://i.postimg.cc/LXggX6yQ/image.png";
const Pura2 = "https://i.postimg.cc/c4StxWff/image.png";
const Shravan1 = "https://i.postimg.cc/sgnM4ZqT/image.png";
const Shravan2 = "https://i.postimg.cc/brHJDG15/image.png";
const Basava1 = "https://i.postimg.cc/yNg8hpFk/image.png";
const Basava2 = "https://i.postimg.cc/qqLJBPdc/image.png";
const Nawaz1 = "https://i.postimg.cc/bNmy7fgR/image.png";
const Nawaz2 = "https://i.postimg.cc/3wv304TR/image.png";
const Tala1 = "https://i.postimg.cc/Y23MFBJN/image.png";
const Tala2 = "https://i.postimg.cc/G2RnBXKf/image.png";
const Koti1 = "https://i.postimg.cc/pVqMTYFC/image.png";
const Avani = "https://i.postimg.cc/sx28Sqh9/image.png";
const Site1 = "https://i.postimg.cc/fbB1LM3L/image.png";
const Site2 = "https://i.postimg.cc/8sQ0353z/image.png";
const Site3 = "https://i.postimg.cc/bw2Qrgsd/image.png";
const Viru1 = "https://i.postimg.cc/j5JVkG52/image.png";
const Anjanadri = "https://i.postimg.cc/prTjHYwF/image.png";
const Anegundi1 = "https://i.postimg.cc/Y2ngxZF3/image.png";
const Anegundi2 = "https://i.postimg.cc/rpktmk6F/image.png";
const nava1 = "https://i.postimg.cc/FRPfDkY5/image.png";
const nava2 = "https://i.postimg.cc/BbLxFBmn/image.png";
const Sri1 = "https://i.postimg.cc/YqF6q84Q/image.png";
const Sri2 = "https://i.postimg.cc/vZL55Bty/image.png";
const Samudra1 = "https://i.postimg.cc/XJXFMgSq/image.png";
const Samudra2 = "https://i.postimg.cc/MXJjQ2c7/image.png";
const mysuru1 = "https://i.postimg.cc/ZY22CTHm/image.png";
const mysuru2 = "https://i.postimg.cc/rwLHNQ7Y/image.png";
const mysuru3 = "https://i.postimg.cc/6QW1DTWV/image.png";
const mysuru4 = "https://i.postimg.cc/LsgZ436w/image.png";
const mysuru5 = "https://i.postimg.cc/5Nk0HQGF/image.png";
const mysuru6 = "https://i.postimg.cc/rswVsqN5/image.png";
const Chamundi1 = "https://i.postimg.cc/VkCYdGn4/image.png";
const Chamundi2 = "https://i.postimg.cc/cHsZkdjc/image.png";
const Chamundi3 = "https://i.postimg.cc/T1s6PgPs/image.png";
const Rai1 = "https://i.postimg.cc/ydY4Xvgn/image.png";
const Ram1 = "https://i.postimg.cc/cCrpPCct/image.png";
const Ram2 = "https://i.postimg.cc/Pf7sYbXk/image.png";
const jog1 = "https://i.postimg.cc/BbLzMyqH/image.png";
const jog2 = "https://i.postimg.cc/yY91NpFt/image.png";
const mutt1 = "https://i.postimg.cc/XJp36sjy/image.png";
const mutt2 = "https://i.postimg.cc/GmdCmL3C/image.png";
const madhugiri = "https://i.postimg.cc/0NHRn7Yx/image.png";
const krishna1 = "https://i.postimg.cc/J0ZfRg9X/image.png";
const krishna2 = "https://i.postimg.cc/rwQvy5Yv/image.png";
const krishna3 = "https://i.postimg.cc/LXZ7Vw4W/image.png";
const Ghati1 = "https://i.postimg.cc/FKwC1pbx/image.png";
const iskcon1 = "https://i.postimg.cc/J4h3VJZM/image.png";
const iskcon2 = "https://i.postimg.cc/LXRfyZm4/image.png";
const iskcon3 = "https://i.postimg.cc/6qbv5jnx/image.png";
const Vidhan1 = "https://i.postimg.cc/ZqzyRyB4/image.png";
const Vidhan2 = "https://i.postimg.cc/nVSjmW9f/image.png";
const Deva1 = "https://i.postimg.cc/BvPMWDW3/image.png";
const Deva2 = "https://i.postimg.cc/SRdGLf9g/image.png";
const Deva3 = "https://i.postimg.cc/bN6TsLpy/image.png";
const Eshwar1 = "https://i.postimg.cc/sfLxxZbd/image.png";
const Eshwar2 = "https://i.postimg.cc/XqBVdQtM/Murudeshwara-raja-gopura-HDR-Jul-2012.jpg";
const Eshwar3 = "https://i.postimg.cc/SxfznxWM/Murudeshwar-Full-view.jpg";
const Eshwar4 = "https://i.postimg.cc/V6r6WfC1/Lord-Shiva-statue-at-Murudeshwara.jpg";
const Eshwar5 = "https://i.postimg.cc/QdfdL9gh/image.png";
const Yana1 = "https://i.postimg.cc/1X190pSD/image.png";
const Yana2 = "https://i.postimg.cc/x1pnprQp/image.png";
const Yana3 = "https://i.postimg.cc/vTysxb77/image.png";
const Gokarna1 = "https://i.postimg.cc/zX0r3my7/image.png";
const Gokarna2 = "https://i.postimg.cc/nLQbdC0v/image.png";
const Gokarna3 = "https://i.postimg.cc/T2c8H8qH/image.png";
// Art Gallery Placeholders

const gMysorePak = "https://i.postimg.cc/nzYW577c/image.png";
const gDharwadPedha = "https://i.postimg.cc/qMZ59ptY/image.pn";
const gMaddurVada = "https://i.postimg.cc/xdLpJH67/image.png";
const gChannapatnaToys = "https://i.postimg.cc/6qbMJhQh/image.png";
const gBidriware = "https://i.postimg.cc/CLtccJtt/image.png";
const gMysoreSilk = "https://i.postimg.cc/cHshvzgT/image.png";
const gIlkalSaree = "https://i.postimg.cc/9FvBd0Rs/image.png";
const gKasuti = "https://i.postimg.cc/0Q2GkJFS/image.png";
const gRosewoodInlay = "https://i.postimg.cc/2SR4qtgW/image.png";
const gGanjifaCards = "https://i.postimg.cc/L4GyTNr6/image.png";
const gNavalgundDurries = "https://i.postimg.cc/8kf4jLsd/image.png";
const gYakshagana = "https://i.postimg.cc/43Fv33gW/image.png";
const gDolluKunitha = "https://i.postimg.cc/8CsWxV6f/image.png";
const gBisiBeleBath = "https://i.postimg.cc/vTwV1gSN/image.png";
const gMysoreDosa = "https://i.postimg.cc/m2wHDrNf/image.png";
const gNeerDosa = "https://i.postimg.cc/zBKL1DXy/image.png";
const gRagiMudde = "https://i.postimg.cc/Y9K98cfH/image.png";
const gUdupiIdli = "https://i.postimg.cc/PJdqsm7H/image.png";
const gObbattu = "https://i.postimg.cc/dVhVYQ51/image.png";
const gSandalSoap = "https://i.postimg.cc/9QwCk8f9/image.png";
const gMysorePeta = "https://i.postimg.cc/26GDWgHD/image.png";
const gTogaluGombeyaata = "https://i.postimg.cc/W46LRQc4/image.png";
const gVeeragase = "https://i.postimg.cc/SK43GDYn/image.png";
const gKamsale = "https://i.postimg.cc/m2Fnf0Qz/image.png";
const gMridangam = "https://i.postimg.cc/LsvC3RMk/image.png";
const gTamburi = "https://i.postimg.cc/tChLnK72/image.png";
const gNadaswaram = "https://i.postimg.cc/fLGrJCN1/image.png";

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
export default function KarnatakaPage() {
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
                Karnataka
              </h1>
              <p
                className="text-white/80 text-xl italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                The Land of Sandalwood (Gandhada Gudi)
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">
                Quick Facts
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Capital", value: "Bangalore" },
                  { label: "Population", value: "6.91 Crore" },
                  { label: "Area", value: "191,791 sq km" },
                  { label: "Founded", value: "1 November 1973" },
                  { label: "Language", value: "Kannada" },
                  { label: "Districts", value: "31 Districts" },
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
              Bangalore
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Karnataka — The Silicon Valley of India
            </p>
          </div>
        </Section>

        {/* Map of Tamil Nadu — click to enlarge */}
        <Section title="Map of Karnataka" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <div
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-xl transition-shadow"
              style={{ maxWidth: 520 }}
              onClick={() => openLightbox(KarnatakaMap, "Map of Karnataka")}
            >
              <img
                src={KarnatakaMap}
                alt="Map of Karnataka"
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
              Karnataka is a state in the southwestern region of India. It was formed as Mysore State on 1 November 1956, with the passage of the States Reorganisation Act, and renamed Karnataka in 1973. The state is bordered by the Lakshadweep Sea to the west, Goa to the northwest, Maharashtra to the north, Telangana to the northeast, Andhra Pradesh to the east, Tamil Nadu to the southeast, and Kerala to the southwest. With 61,130,704 inhabitants at the 2011 census, Karnataka is the eighth-largest state by population, comprising 31 districts. With 15,257,000 residents, the state capital Bengaluru is the largest city of Karnataka. 
            </p>
            <p className="text-foreground">
             The capital of the state, Bengaluru, is known as the Silicon Valley of India, for its immense contributions to the country's information technology sector. A total of 1,973 companies in the state were found to have been involved in the IT sector as of 2007. 
            </p>
            <p className="text-foreground">
             Karnataka is the only southern state to have land borders with all of the other four southern Indian sister states. The state covers an area of 191,791 km2 (74,051 mi2), or 5.83 per cent of the total geographical area of India. It is the sixth-largest Indian state by area. Kannada, one of the classical languages of India, is the most widely spoken and official language of the state. Other minority languages spoken include Urdu, Konkani, Marathi, Tulu, Tamil, Telugu, Malayalam, Kodava and Beary. Karnataka also contains some of the only villages in India where Sanskrit is primarily spoken. 
            </p>
            <p className="text-foreground">
              The most important earlier name is Mysore State, which was the official name from 1956 until 1973. It was named after the princely state of Mysuru, which was a major cultural and political center. In 1973, the name was changed to “Karnataka” to better represent all regions and people of the state, not just Mysuru. 
            </p>
            <p className="text-foreground">
               Karnataka is derived from the Kannada words karu and nādu, meaning "elevated land". Karu Nadu may also be read as karu, meaning "black" and nadu, meaning "region", as a reference to the black cotton soil found in the Bayalu Seeme region of the state. The British used the word Carnatic, sometimes Karnatak, to describe both sides of peninsular India, south of the Krishna. With an antiquity that dates to the Paleolithic, Karnataka has been home to some of the most powerful empires of ancient and medieval India. The philosophers and musical bards patronised by these empires launched socio-religious and literary movements which have endured to the present day. Karnataka has contributed significantly to both forms of Indian classical music, the Carnatic and Hindustani traditions. 
            </p>
            <p className="text-foreground">
               Karnataka is derived from the Kannada words karu and nādu, meaning "elevated land". Karu Nadu may also be read as karu, meaning "black" and nadu, meaning "region", as a reference to the black cotton soil found in the Bayalu Seeme region of the state. The British used the word Carnatic, sometimes Karnatak, to describe both sides of peninsular India, south of the Krishna. With an antiquity that dates to the Paleolithic, Karnataka has been home to some of the most powerful empires of ancient and medieval India. The philosophers and musical bards patronised by these empires launched socio-religious and literary movements which have endured to the present day. Karnataka has contributed significantly to both forms of Indian classical music, the Carnatic and Hindustani traditions. After India gained independence in 1947, the process of reorganizing states began to bring together regions with similar languages and cultures. As a result, on 1 November 1956, Kannada-speaking regions from different parts of India were unified under the States Reorganisation Act to form a single state called Mysore State. This included areas from former provinces such as Bombay, Hyderabad, and Madras, as well as the old princely Mysore State. To reflect the broader identity of all Kannada-speaking people, the state was officially renamed Karnataka in 1973.Since its formation, Karnataka has grown into an important cultural and economic region of India. It has preserved its historical legacy while also emerging as a modern hub for education, industry, and especially information technology, with Bengaluru leading this transformation 
            </p>
            <p className="text-foreground italic text-primary font-medium">
             Karnataka is home to several important rivers that support agriculture, water supply, and power generation. The most significant river is the Krishna River, which flows through the northern part of the state and is one of the major rivers of India. Its important tributaries in Karnataka include the Tungabhadra River and the Bhima River, both of which play a key role in irrigation and farming.Another major river is the Kaveri River (also called Cauvery), which originates in the Western Ghats and flows through southern Karnataka. It is extremely important for agriculture and drinking water, especially for cities like Bengaluru and Mysuru.The Sharavathi River is also notable, mainly because it forms the famous Jog Falls, one of the highest waterfalls in India, and is used for hydroelectric power generation.Other important rivers include the Hemavati River, Kabini River, and Malaprabha River, which contribute to irrigation and water resources across different regions of the state. 
            </p>
            <p className="text-xs text-muted-foreground">
              (src: mapsofindia.com)
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
            Scroll horizontally to explore Karnataka's iconic foods, crafts,
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
    name: "Mysore Dasara",
    tagline: "Nada Habba",
    description:
      'Mysore Dasara, known proudly as the "Nada Habba" or state festival of Karnataka, is a magnificent ten-day celebration steeped in centuries of royal history and deep spiritual devotion. The festival honors the grand victory of Goddess Chamundeshwari, an avatar of Durga, who defeated the fierce, buffalo-headed demon Mahishasura on the Chamundi Hills after a relentless ten-day battle. This legendary triumph of light over darkness gives the host city of Mysuru its very name, and the goddess is revered as the divine protector of the region. Historically, the grand tradition of this festival dates back to the 14th-century Vijayanagara Empire, where it was celebrated as a showcase of martial skill and state pride. Following the fall of the empire, the Wodeyar dynasty adopted the tradition in the year 1610 under King Raja Wodeyar I, later introducing the iconic special palace court, or durbar, and the majestic elephant-led parade. Today, the festival seamlessly blends its historic royal legacy with a massive state-sponsored cultural celebration that attracts visitors from all over the world. The stunning epicenter of the festivities is the Mysore Palace, which is illuminated every single evening of the festival by approximately 100,000 brilliant light bulbs, creating a breathtaking golden glow against the night sky. Families across the state participate by setting up Bomme Habba, an intricate, multi-tiered display of traditional dolls that honors the deities, while the ninth day is dedicated to Ayudha Pooja, where people worship the tools, instruments, and vehicles used in their daily lives. The spectacular grand finale takes place on the tenth day, known as Vijayadashami, with the world-famous Jamboo Savari procession. During this stunning parade, a majestic, caparisoned elephant carries a solid gold howdah weighing around 750 kilograms, which holds the revered idol of Goddess Chamundeshwari. This grand march travels from the glowing gates of the Mysore Palace to the Bannimantap grounds, accompanied by vibrant folk dancers, classical music bands, decorated horses, and colorful cultural floats, culminating in a historic torchlight parade that beautifully seals the spectacular celebration. ',
    images: [Dasara1,Dasara2,Dasara3,Dasara4],
    source: "(src:pinterest ,theunstumbled.com,english.mathrubhumi.com,travelogyindia.com  )",
  },
  {
    name: "Ugadi",
    tagline:
      "Traditional New Year",
    description:
      "Ugadi is the vibrant, joyous festival that marks the traditional New Year for the people of Karnataka, arriving with the fresh energy of spring in the Hindu lunar month of Chaitra, which usually falls in late March or early April. The name itself is derived from the Sanskrit words yuga, meaning age, and adi, meaning beginning, perfectly capturing the essence of a fresh start. On this auspicious morning, families wake up before dawn for a ritualistic oil bath, after which they dress in their finest new traditional clothes. Homes are thoroughly cleaned and beautifully decorated with colorful rangoli patterns on the floor and fresh mango leaves hung across doorways. These vibrant green leaves are highly symbolic, representing prosperity, fertility, and a warm welcome to good fortune for the upcoming year.The true culinary and philosophical heart of Ugadi lies in the preparation of a unique, traditional dish known as Bevu-Bella. This preparation is a delicate mix of neem leaves, which carry a sharp bitterness, and sweet jaggery, often combined with tangy raw mango, spicy chili, and a pinch of salt. When family members share this symbolic mixture, it serves as a beautiful reminder that the upcoming year will bring a natural blend of joy and sorrow, success and challenges, all of which should be accepted with grace, patience, and equanimity. Following this ritual, families often visit local temples to seek blessings for health and prosperity, and they gather together to listen to the Panchanga Shravanam. During this special ritual, a priest or an elder reads aloud the astrological predictions for the new year, offering a fascinating glimpse into what the future holds for rain, agriculture, and general well-being. ",
    images: [Ugadi1,Ugadi2,Ugadi3,Ugadi4],
    source: "vidhyashomecooking.com ,sssmediacenter.org,ar.inspiredpencil.com  ",
  },
  {
    name: "Makar Sankranti",
    tagline:
      "Harvesting Gratitude, Sweetening Bonds",
    description:
      "Makar Sankranti is one of the most auspicious and joyfully celebrated harvest festivals in Karnataka, marking the sun's transition into the zodiac sign of Makara (Capricorn) and the arrival of longer, warmer days. Falling annually in mid-January, this vibrant festival is a time of immense gratitude, especially among farming communities who celebrate the bountiful yield of the winter crops. Preparation begins days in advance with households clearing away the old to make way for the new, culminating on the festival morning when families dress in traditional attire and decorate their front courtyards with elaborate, colorful rangoli designs. A signature ritual deeply rooted in Karnataka's agrarian culture is the decoration of cattle, where cows and bulls are bathed, their horns are painted in bright hues, and they are adorned with colorful garlands to honor their hard work in the fields.At the heart of the festival's social and culinary tradition is the exchange of Ellu-Bella, a specially prepared sweet mixture made of white sesame seeds, fried groundnuts, finely cut dry coconut, pieces of jaggery, and roasted chana dal. People visit the homes of relatives, friends, and neighbors to share this treat along with pieces of sugarcane, uttering the famous Kannada phrase, 'Ellu bella thindu olle maathadi,' which translates to 'Eat sesame and jaggery and speak only sweet words.'This beautiful ritual is meant to sweeten relationships, resolve past differences, and usher in goodwill for the year ahead. As evening falls, rural communities gather for the thrilling and dramatic ritual of Kichchu Hayisuvudu, where farmers guide their decorated herds to leap over a small, controlled bonfire. This ancient practice is believed to ward off evil spirits, protect the livestock from disease, and bring good fortune and prosperity to the entire village.",
    images: [Makar1,Makar2,Makar3,Makar4,Makar5],
    source: "(src:sarasyummyrecipes.com,Pratap.j,pinterest.com,pinterest.com,vegecipiesofkarnataka.com )",
  },
  {
    name: "Kannada Rajyostsava",
    tagline:
      "Celebrating the Lofty Land of Kannada Pride",
    description:
      "Kannada Rajyotsava, celebrated with immense pride and energy every year on November 1st, is the official statehood day of Karnataka. The festival commemorates the historic unification of all Kannada-speaking regions of South India under a single administration. Before this monumental unification, the Kannada-speaking population was fragmented across different territories, including the princely state of Mysore, the Hyderabad Nizam's territory, and the Madras and Bombay Presidencies. Decades of dedicated efforts by visionary leaders and literary icons through the Karnataka Ekikarana (Unification) Movement culminated on November 1, 1956, when these scattered regions were officially merged under the States Reorganisation Act to form a unified entity initially called Mysore State. To honor the linguistic identity and cultural roots of the entire region, the state was officially renamed Karnataka on November 1, 1973, under the leadership of Chief Minister D. Devaraj Aras, drawing from the ancient word 'Karunadu,' which beautifully translates to 'lofty land.' On this vibrant day, the entire state transforms into a sea of red and yellow, which are the iconic colors of the unofficial state flag, symbolizing courage and peace. The grandest official celebrations take place in Bengaluru at the Kanteerava Stadium, where the Chief Minister hoists the state flag and delivers an inspiring address, followed by the collective chanting of the state anthem, 'Jaya Bharatha Jananiya Tanujate.' A major highlight of the state-sponsored festivities is the announcement and presentation of the prestigious Rajyotsava Awards, the second-highest civilian honor in the state, which recognizes individuals who have made outstanding contributions to fields like literature, science, arts, sports, and social service. Across cities and villages, the atmosphere is electric with local community groups, schools, and commercial hubs organizing vibrant cultural programs, street processions, motorcycle rallies, and traditional folk dance performances like Dollu Kunitha and Yakshagana, uniting people of all backgrounds in a joyful celebration of Kannada heritage, language, and shared identity.  ",
    images: [kan1,kan2,kan3],
    source: "(src:kararnatakatourism.com,oneindia.com,indainexpress.com   )",
  },
  {
    name: "Hampi Festival",
    tagline:
      "Vijaya Utsav",
    description:
      "The Hampi Festival, popularly known as the Vijaya Utsav, is a magnificent three-day cultural extravaganza celebrated annually amidst the breathtaking ruins of Hampi, a UNESCO World Heritage Site in Karnataka. Historically rooted in the glorious era of the Vijayanagara Empire, this festival was originally celebrated as 'Vasantotsava' to honor royal victories and promote the  rich artistic traditions under the patronage of rulers like Emperor Krishnadevaraya. Organized entirely by the Government of Karnataka as a 'Nada Utsava' (State Festival), the grand event serves as a vibrant bridge between the past and present, successfully recreating the opulence of the medieval golden age. During the festival, the ancient stone monuments, temples, and rugged boulder landscapes are brilliantly illuminated at night, creating a magical backdrop for performances by renowned classical musicians, dancers, and folk artists from across India. The celebrations kick off with a grand cultural procession called the 'Jambu Savari,' featuring beautifully adorned elephants, horses, and performers dressed in traditional military attire, marching alongside the famous 'Janapada Kalavahini'—a massive parade showcasing the diverse folk dances and songs of Karnataka. Visitors can witness spectacular light-and-sound shows detailing the empire's history, traditional puppet shows, exciting rural sports like traditional wrestling (Kusti), and thrilling adventure activities like rock climbing and water sports on the Tungabhadra River. The festival also highlights local heritage through bustling handicraft exhibitions and food courts serving authentic regional cuisine. Held typically between November and February depending on dates announced by the government, the Vijaya Utsav requires no entry fee for visitors, making it one of the largest and most accessible heritage carnivals in South India.",
    images: [Hampi1,Hampi2,Hampi3],
    source: "clubmahindra.com ,bharattravelguru.com ,cultureheritage.com ",
  },
  {
    name: "Kambala festival",
    tagline: "Thundering Hooves, Muddy Tracks, Timeless Tradition",
    description:
      "The Kambala Festival is an exhilarating, centuries-old traditional buffalo racing event celebrated primarily by the farming community in the coastal districts of Karnataka, including Dakshina Kannada and Udupi, a region collectively known as Tulu Nadu. Held annually between November and March after the paddy harvest, this vibrant rural spectacle serves as a profound gesture of gratitude to Lord Kadri Manjunatha (an incarnation of Lord Shiva) for a bountiful crop and to pray for the good health and protection of the farm animals. Historically, some roots of the festival are also traced back to the Hoysala period, when kings supposedly used the races to test the speed and strength of buffaloes for potential military use. Unlike regular festivals, Kambala is structured as a series of highly competitive weekend events organized across nearly 45 different villages, drawing massive, passionate crowds of over 20,000 spectators who gather to cheer on their local champions. The heart-pounding action unfolds on parallel, 140-meter-long tracks filled with thick, slushy mud and water, where professionally trained and heavily pampered pairs of buffaloes sprint at breathtaking speeds of up to 50 kilometers per hour. A highly athletic, barefoot jockey runs alongside or stands precariously behind the massive beasts on a specially designed wooden plank called a halage. The competitions are rigorously organized into distinct categories based on experience and equipment, ranging from Negilu (for entry-level buffaloes using a light wooden plow) to Kene Halage, an elite senior category where the winner is determined by the sheer height of the muddy water forced upward through holes in the wooden plank as they speed through the track. While historically the winners were rewarded with coconuts and bananas, modern-day champions compete for prestigious gold and silver coins, cash prizes, and immense community honor. Following strict guidelines from the Supreme Court of India to ensure animal welfare and prevent cruelty, contemporary Kambala races are closely monitored to protect the buffaloes, successfully preserving this electrifying slice of South Canara's rich agricultural heritage.  ",
    images: [Kambala1,Kambala2,],
    source: "(src: oneindia.com,kaleidoscope.in)",
  },
  {
    name: "Bengaluru karaga",
    tagline:
      "A Tapestry of Faith: Uniting Souls in Sacred Harmony",
    description:
      "The Bengaluru Karaga is one of the oldest, most vibrant, and continuous folk festivals celebrated in the heart of Karnataka's capital. Spanning 11 days, the grand event is deeply rooted in the epic Mahabharata and revolves around the worship of Draupadi, who is revered by devotees as an incarnation of Adishakti (the Goddess of supreme power). According to local mythology, toward the end of her earthly journey, Draupadi created an army of brave soldiers called Veerakumaras to defeat a demon named Timirasura. When she later ascended to heaven, she promised these loyal warriors that she would return to earth once a year, an event commemorated by the festival's main procession on the full moon night of the Hindu month of Chaitra (typically March or April). The custodians of this ancient tradition are the Thigala community, a group historically skilled in agriculture and horticulture who migrated to the region centuries ago and have meticulously preserved the festival's complex rituals for generations. The spiritual and geographic epicenter of the festivities is the historic Sri Dharmaraya Swamy Temple in Thigalarapete, central Bengaluru. The ultimate highlight of the entire festival occurs at midnight on the final night, when the chief temple priest—undergoing rigorous physical and spiritual preparation, and dressed traditionally in female bridal attire to embody the Goddess—emerges from the sanctum bearing the Karaga. The Karaga is a sacred, unbaked mud pot filled with water and intricately covered with a massive, pyramidal structure of fresh jasmine flowers, which the priest must balance perfectly on his head without touching it with his hands. Escorted by hundreds of bare-chested Veerakumaras wielding gleaming swords, the priest leads a spectacular, night-long procession that dances through the old, narrow streets of Bengaluru. In a beautiful display of communal harmony and an unbroken historic tradition, the procession halts at the Hazrat Tawakkal Mastan Dargah, a Sufi shrine, where prayers are exchanged before returning to the temple at sunrise. Beyond its deep spiritual significance, the Bengaluru Karaga also celebrates nature and the city’s historic water body network, ensuring that the ancient socio-cultural landscape of old Bangalore remains alive amid the modern metropolis.    ",
    images: [Karaga1,Karaga2,Karaga3],
    source: "careerindia.com ,imvoyager.com",
  },
  {
    name: "Mahamastakabhisheka",
    tagline: "Pouring Devotion Upon the Eternal Monolith",
    description:
      "The Mahamastakabhisheka is a magnificent, deeply sacred Jain festival held once every 12 years in the historic town of Shravanabelagola, Karnataka. The grand event centers around the ritual bathing and anointment of the colossal, 57-foot-tall monolithic statue of Lord Bahubali (also known as Gommateshwara), which was carved out of a single granite block atop the Vindhyagiri Hill under the patronage of Chavundaraya, a general of the Western Ganga Dynasty, in 981 CE. Lord Bahubali is revered in Jainism as the first ascetic to achieve liberation (moksha) in this cosmic age, symbolizing ultimate peace, selflessness, and non-violence (ahimsa). The festival attracts millions of devotees, monks, and spiritual seekers from across the globe, transforming the quiet town into a major international pilgrimage center for several weeks.To conduct the ritual, a massive, specially engineered scaffolding is erected behind the ancient statue so that priests and devotees can access the top of the monument. The high point of the festival is the spectacular, multi-day anointment process, where hundreds of holy pots (kalashas) containing sacred water, fresh milk, sugarcane juice, tender coconut water, and rice flour are poured over the head of the deity. As the liquids cascade down the monolithic structure, the statue is further bathed in vibrant pastes of sandalwood, saffron, and turmeric, followed by a shower of precious stones, gold coins, and millions of flower petals. Each substance poured during the ceremony carries deep symbolic meaning, representing the purification of the soul, the washing away of worldly attachments, and the celebration of inner peace. Because it occurs only once over a span of more than a decade, the Mahamastakabhisheka stands as one of the rarest, most visually stunning, and spiritually profound heritage celebrations in India. ",
    images: [Abhi1,Abhi2,],
    source: "(Ar.inspiredpencil.com,nriol.com )",
  },
  {
    name: "Sirsi Marikamba Jatre",
    tagline: "South India's grandest spectacle of faith and culture..",
    description:
      "The **Sirsi Marikamba Jatre** is one of the largest and most vibrant bi-annual temple fairs in South India, celebrated with immense grandiosity in the town of Sirsi, Karnataka. Dedicated to Goddess Marikamba, a powerful manifestation of Goddess Durga, this highly revered festival draws millions of devotees from across Karnataka and neighboring states like Goa, Maharashtra, and Tamil Nadu. The festival is celebrated to honor the deity and seek her divine protection, blessings for prosperity, and deliverance from diseases and evil forces. Historically rooted in local tradition, the *jatre* serves as a massive cultural and spiritual congregation, symbolizing the triumph of good over evil and fostering a deep sense of community and generational faith.The celebration spans over several days and transforms the entire town into a kaleidoscope of colors, music, and devotion. The festivities begin with elaborate pre-festival rituals, after which the magnificent, 7-foot-tall wooden idol of Goddess Marikamba is beautifully adorned and placed on a massive, intricately decorated chariot (rath). The crowning highlight of the *jatre* is the spectacular **Rathotsava** (chariot procession), where thousands of ecstatic devotees pull the chariot through the main streets of Sirsi amidst the resounding beats of traditional drums, folk music, and vibrant dances like *Dollu Kunitha*. The streets come alive with bustling fairs, local food stalls, amusement rides, and diverse cultural programs showcasing Karnataka's rich heritage. Devotees patiently wait in long lines for *darshan* to offer special pujas, coconuts, and traditional sarees to the deity. The grand carnival-like atmosphere seamlessly blends solemn religious devotion with joyous social celebration, making the Sirsi Jatre an unforgettable celebration of faith, unity, and timeless cultural tradition.",
    images: [Sirsi1,Sirsi2,Sirsi3,],
    source: "(Ar.inspiredpencil.com,nriol.com )",
  },
];

const historicalPlaces = [
  {
    name: " Pattadakal (UNESCO Site)",
    description:
      "Pattadakal (Pattadakallu), also called Raktapura, is a complex of 7th and 8th century CE Hindu and Jain temples in northern Karnataka, India. Located on the west bank of the Malaprabha River in Bagalkot district, this UNESCO World Heritage Site is 23 kilometres (14 mi) from Badami and about 9.7 kilometres (6 mi) from Aihole, both of which are historically significant centres of Chalukya monuments. The monument is a protected site under Indian law and is managed by the Archaeological Survey of India (ASI) UNESCO has described Pattadakal as 'a harmonious blend of architectural forms from northern and southern India' and an illustration of 'eclectic art' at its height.[2] The Hindu temples are generally dedicated to Shiva, but elements of Vaishnavism and Shaktism theology and legends are also featured. The friezes in the Hindu temples display various Vedic and Puranic concepts, depict stories from the Ramayana, the Mahabharata, the Bhagavata Purana, as well as elements of other Hindu texts, such as the Panchatantra and the Kirātārjunīya. The Jain temple is only dedicated to a single Jina. The most sophisticated temples, with complex friezes and a fusion of Northern and Southern styles, are found in the Papanatha and Virupaksha temples.[8][9] The Virupaksha temple is an active house of Hindu worship.The Malaprabha River, a tributary of the Krishna River cutting across the valley of mountains surrounded and the plains has great importance and place in this history of south India. The origin of this river is from Kanakumbi, Belagavi district, in the western ghats region flows towards the eastern side. Just one kilometre (0.62 mi) before reaching Pattadakal it starts flowing from south to north. As per the Hindu tradition, a river that flows in the north direction is also called Uttarvahini Ganga.  ",
    images: [Kallu],
  },
  {
    name: "BADAMI CAVE TEMPLES",
    description:
      "The Badami cave temples are a complex of Buddhist, Hindu and Jain cave temples located in Badami, a town in the Bagalkot district in northern part of Karnataka, India. The caves are important examples of Indian rock-cut architecture, especially Badami Chalukya architecture, and the earliest date from the 6th century. Badami is a modern name and was previously known as 'Vataapi', the capital of the early Chalukya dynasty, which ruled much of Karnataka from the 6th to the 8th century. Badami is situated on the west bank of a man-made lake ringed by an earthen wall with stone steps; it is surrounded on the north and south by forts built during Early Chalukya and in later times. The Badami cave temples represent some of the earliest known examples of Hindu temples in the Deccan region. They along with the temples in Aihole transformed the Mallaprabha River valley into a cradle of temple architecture that influenced the components of later Hindu temples elsewhere in India.The 4 caves are all in the escarpment of the hill in soft Badami sandstone formation, to the south-east of the town. In Cave 1, among various sculptures of Hindu divinities and themes, a prominent carving is of the dancing Shiva as Nataraja. Cave 2 is mostly similar to Cave 1 in terms of its layout and dimensions, featuring Hindu subjects of which the Hari Hara, Ardhanari shiva, Mahishamardini, Dwi Bahu Ganesha and Skanda in a separate antichamber on extended cave at western side-next to great Nataraja sculpture. Cave 2 has premier images of relief of Vishnu as Trivikrama is the largest. The largest cave is Cave 3, featuring Vishnu as Ananta seated on coiled serpent, Varaha with Bhudevi, Harihara, Narasimha in standing posture, great image of Trivikrama and Virata Vishnu. The cave has fine carvings exhibiting matured stage of Karnataka ancient art. Cave 4 is dedicated to revered figures of Jainism. Around the lake, Badami has additional caves of which one may be a Buddhist cave. Another Cave like gallery known as Arali Tirtha has around twenty seven carvings. ",
    images:[Cave1,Cave2],
    src:"Wikipedia.com",
  },
  {
    name: "Hampi",
    description:
      "Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in the town of Hampi in Vijayanagara district, east-central Karnataka, India. Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra. Hampi continues as a religious centre, with the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city. Hampi or Hampe, also referred to as the Group of Monuments at Hampi, is a UNESCO World Heritage Site located in the town of Hampi in Vijayanagara district, east-central Karnataka, India. Hampi predates the Vijayanagara Empire; it is mentioned in the Ramayana and the Puranas of Hinduism as Pampa Devi Tirtha Kshetra. Hampi continues as a religious centre, with the Virupaksha Temple, an active Adi Shankara-linked monastery and various monuments belonging to the old city. Situated in Karnataka, close to the contemporary town of Hampi with the city of Hosapete 13 kilometres (8.1 miles) away, Hampi's ruins are spread over 4,100 hectares (16 sq mi) and it has been described by UNESCO as an 'austere, grandiose site' of more than 1,600 surviving remains of the last great Hindu kingdom in South India that includes forts, riverside features, royal and sacred complexes, temples, shrines, pillared halls, mandapas, memorial structures, water structures and others social utilities such as stepwell water tanks with artistic carvings near major temples.",
    images: [HampiH1,HampiH2,],
    source: "(src: Wikipedia)",
  },
  {
    name: "Thungabhadra Dam",
    description:
      "The Tungabhadra Dam, also known as Pampa Sagar, is a water reservoir constructed across the Tungabhadra River in the Hosapete-Koppal confluence in Karnataka, India. It is a multipurpose dam serving irrigation, electricity generation, flood control, etc. for the state. It is India's largest stone masonry dam and one of the only two[citation needed] non-cement dams in the country, the other being the Mullaperiyar Dam in Kerala. The dam is built of surki mortar, a combination of mud and limestone, commonly used at the time of its construction.The dam was a joint project undertaken in 1949 by the erstwhile Kingdom of Hyderabad and Madras Presidency when the construction began, later, after India's constitution into a republic in 1950, it became a joint project between the governments of Madras and Hyderabad states. The construction was completed in 1953. The Tungabhadra Dam has withstood the test of time for over 70 years and is expected to well cross many more decades. The chief architects of the dam were Vepa Krishnamurthy and Pallimalli Papaiah of Hyderabad and M. S. Tirumale Iyengar of Madras. They envisioned it as being built with a large contingent of material and manual labour, as best suited to Indian labour availability and employment at that time. The chief contractor for the dam was Venkat Reddy Mulamalla from Konour, a village in Mahabubnagar, Telangana. The northern canal on the Hyderabad side (now Telangana) takes off from the combined irrigation and power sluices. The first 19 miles of the canal is in a rugged terrain cutting through three ranges of hills and is held up by three reservoirs at miles 8, 14 and 16 respectively. The canal negotiates the last range of hills by means of a tunnel, named as Papaiah Tunnel, and enters open country. ",
    images: [Dam1,Dam2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Daroji Sloth Bear Sanctuary",
    description:
      "Daroji Sloth Bear Sanctuary is located in Ballari district in Karnataka. This is Asia's first sloth bear sanctuary. It is spread over 82.72 km2 (31.94 sq mi). The sanctuary was created exclusively for the conservation of the sloth bear. It is about 50 km from Ballari and about 15 km from the World Heritage Site Hampi. The area between Daroji in Sandur taluka and Ramasagar of Hospet Taluk is host to numerous sloth bears. In October 1994, the Government of Karnataka, declared 5587.30 hectares of the Bilikallu Forest Reserve as Daroji Bear Sanctuary.15 years later, in October 2009, the government added 2685.50 hectares of the Bukkasagara Forest Reserve to the sanctuary. This resulted in the overall area to increase from 5587.3 hectares to 8272.8 hectares.The sanctuary is open between 14:00 and 18:00 every day. There is a watchtower within the sanctuary, opposite Karadikallu Gudda, that provides a vantage point to view the bears descending from the adjacent hillocks during evening hours. Kishkindha, the historical kingdom of Sugriva described in the Ramayana, is believed to be located on the bank of the Tungabhadra River. In the war against Ravana, Kishkinda, the monkey kingdom of Sugriva, was Rama’s ally. When Rama’s army crossed Hampi en route to Lanka, they met Jambavantha, a bear who joined the army. ",
    images: [Daroji1],
  },
  {
    name: "Mahalakshmi Temple ",
    description:
      "The Mahalakshmi Temple in Belagavi, Karnataka, India, is a revered Hindu pilgrimage site dedicated to Goddess Mahalakshmi, the consort of Lord Vishnu and goddess of prosperity. Known for its Dravidian-style architecture and historic significance, the temple attracts devotees year-round, especially during Navaratri and Diwali festivals. The Mahalakshmi Temple of Belagavi dates back several centuries and is among the region’s most venerated shrines. Though not as ancient as the Kolhapur Mahalakshmi Temple, it has long served as a cultural and spiritual hub for the surrounding community. Its sanctum houses a finely sculpted idol of Goddess Mahalakshmi, traditionally believed to grant wealth and well-being.Built primarily in stone, the temple exhibits a blend of early Chalukyan and later South Indian architectural features. The gopuram (tower) is adorned with carvings of deities, floral motifs, and mythological scenes. The sanctum (garbhagriha) enshrines the idol of Mahalakshmi, typically depicted seated on a lotus. Smaller shrines within the complex are dedicated to Vishnu, Ganapati, and other deities. The temple serves as a focal point of devotion during Navaratri when thousands of pilgrims visit for darshan and special pujas. It also plays a vital role in regional traditions that celebrate female divinity and prosperity. Local festivals and rituals blend Sanskritic and Kannada practices, reflecting Belagavi’s composite cultural heritage. ",
    images: [ ],
    source: "",
  },
  {
    name: "Gokak Waterfalls",
    description:
      "Gokak Falls is a dramatic waterfall on the Ghataprabha River near Gokak town in the Belagavi district of Karnataka, India. Often called the “Niagara of Karnataka,” it is known for its horseshoe-shaped crest, reddish sandstone cliffs, and scenic monsoon torrents. The site combines natural grandeur with historical and industrial significance.The Ghataprabha River meanders through rugged terrain before plunging over a sandstone cliff into the Gokak gorge. The surrounding valley is characterized by red laterite hills and dense vegetation. The falls reach their fullest volume during the southwest monsoon (June–September), when mist and spray envelop the gorge. Gokak Falls holds a special place in India’s industrial history—electricity was first generated here in 1887 through a pioneering hydroelectric station established during the British era. Nearby are temples dedicated to Lord Mahalingeshwara, Goddess Durga, and Lord Shanmukha, reflecting late Chalukya architecture with intricate carvings and stone sanctum.A 200-meter-long hanging bridge suspended 14 meters above the river offers striking panoramic views of the cascade. Ropeway access to the old power station adds to the adventure. The area is best visited between July and October, while swimming is discouraged due to strong currents. Nearby attractions include Godachinmalki Falls and Yellamma Temple.  ",
    images: [Falls1,Falls2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Yellur Fort",
    description:
      "Yellur Fort originated under the Ratta dynasty as a sentinel outpost for the Belagavi Fort. Its hilltop site allowed early detection of enemy movements from Goa and Karwar. Control later passed among the Yadavas, Bahmanis, Adil Shahis, Marathas, and British. During colonial rule about 100 soldiers were stationed there, supplied via Belagavi. Local legend speaks of a secret tunnel linking the two forts.The compact fort reflects medieval Indian military design—robust granite ramparts, bastions with peepholes, and arched gateways laid out in the Gomukhi (cow-face) pattern. Inside stand an ancient Lord Shiva temple, a sweet-water well, and small exit passages once used during sieges. Traces of Persian-influenced masonry by Asad Khan Lari of Bijapur survive from later renovations.Encircled by rice fields and forested slopes, Rajhansgad commands 360-degree views of Belagavi city and neighboring villages. It hosts Monday worship at the hilltop Shiva temple and community-funded upkeep by nearby settlements. A 50-foot statue of Chhatrapati Shivaji Maharaj, inaugurated in 2024, honors the Maratha heritage and crowns the summit as a civic landmark. ",
    images: [Fort1,Fort2],
    source: "(src: Wikipedia)",
  },
  {
    name: "NARASIMHA JHIRA CAVE ",
    description:
      "The Narasimha Jhira Cave Temple is a Hindu pilgrimage site near Bidar, Karnataka, India, dedicated to Lord Narasimha, an incarnation of Vishnu. The temple is distinctive for its subterranean setting, where devotees wade through a natural water stream to reach the sanctum, symbolizing purification and devotion.The temple lies within a 300-meter-long natural cave carved through laterite rock. Pilgrims must walk waist-deep through water that flows continuously through the cave to reach the shrine. The water, believed to originate from an underground spring, remains at a steady level year-round and is considered sacred .The shrine enshrines an idol of Lord Narasimha said to have self-manifested (swayambhu). According to legend, the deity appeared to save his devotee Prahlada by slaying the demon Hiranyakashipu. The act is commemorated through ritual worship, drawing devotees especially during Narasimha Jayanti and Kartika Deepotsava festivals.Visiting the temple is viewed as both a physical and spiritual journey. Devotees chant hymns while wading through the cool, dark cave, an act symbolizing passage through ignorance into divine illumination. Offerings include flowers, coconuts, and lamps floated on the water near the sanctum. The Narasimha Jhira Cave Temple forms part of Bidar’s rich religious landscape, alongside historical sites like the Bidar Fort and Gurudwara Nanak Jhira Sahib. It exemplifies the region’s syncretic heritage and is a notable example of Karnataka’s enduring cave temple tradition.  ",
    images: [Jhira1],
    source: "(src:blog.yatradham.org)",
  },
  {
    name: "Bidar Fort",
    description:
      "Bidar Fort is a massive medieval citadel located in Bidar, Karnataka, India. Built in the 15th century under the Bahmani Sultanate, it represents a blend of Persian, Turkish, and local Deccan architectural styles. The fort is renowned for its defensive design, ornate palaces, and the role it played as a capital of medieval southern India.Bidar became the capital of the Bahmani Kingdom when Sultan Ahmad Shah I shifted his court from Gulbarga to Bidar around 1427. The fort’s site was earlier used by the Western Chalukya dynasty and rebuilt into an imposing citadel of laterite stone with a triple moat and high ramparts. It served as an administrative and cultural hub through Bahmani, Barid Shahi, Mughal, and Nizam rule.The fort is laid out on a rhombic plateau edge, encircled by three miles of walls and moats. Its gateways—Sharza Darwaza, Gumbad Darwaza, and others—combine engineering precision with aesthetic grandeur. Inside are palaces such as Rangeen Mahal, Takht Mahal, and Gagan Mahal; the vast Solah Khamba Mosque; the royal bath (Shahi Hammam); and audience halls (Diwan-i-Am, Diwan-i-Khas). Intricate tile mosaics, mother-of-pearl inlay, and Persian floral motifs reflect the Bahmani court’s artistry.Bidar Fort anchors the city’s identity as “The City of Whispering Monuments.” It showcases Deccan’s fusion of Persian and Indian aesthetics and remains central to regional tourism. The fort complex includes over 30 Islamic monuments and offers panoramic views of Bidar. It is also near notable sites like the Bahmani Tombs (Ashtur) and Guru Nanak Jhira Sahib.  ",
    images: [Bidar1,Bidar2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Bandipur National Park",
    description:
      "Bandipur National Park, in the Chamarajanagar district of southern India, is one of the country’s best-known wildlife reserves and a core part of the Nilgiri Biosphere Reserve. Established in 1974 under Project Tiger, it safeguards tigers, elephants, and rich biodiversity across 874 km² of protected forest. Its scenic setting in the Western Ghats makes it a prime eco-tourism and conservation destination. Originally the Mysore Kingdom maharajas’ private hunting ground, Bandipur evolved into the Venugopala Wildlife Park in 1931 before its upgrade to national park status in 1974. It lies along the Mysore–Ooty Highway at altitudes from 680 to 1,450 m, forming wildlife corridors that link the Nilgiri Hills across three states. The park’s terrain mixes gentle hills, teak and sandalwood forests, and watercourses fed by the Kabini River. Bandipur hosts more than 35 mammal species and over 200 birds. Flagship animals include the Bengal tiger, Asiatic elephant, leopard, gaur (Indian bison), dhole (wild dog), sambar, and sloth bear. Reptiles such as the Indian python and marsh crocodile thrive near water bodies. Teak, rosewood, bamboo, and sandalwood dominate its vegetation, supporting a layered food web that sustains the park’s predators and herbivores. Safaris—by jeep or bus—run at dawn and dusk under forest-department supervision. Himavad Gopalaswamy Betta, the park’s highest hill crowned with a mist-cloaked Krishna temple, offers panoramic views and frequent elephant sightings. Additional attractions include the Moyar Gorge Viewpoint, birdwatching trails, and interpretation centers near the reception area.  ",
    images: [Bandi1,Bandi2],
    source: "(src: Wikipedia)",
  },
  {
    name: "Male Mahadeshwara Hills ",
    description:
      "Male Mahadeshwara Hills, or MM Hills, is a sacred hill range and pilgrimage site located in Hanur taluk, Chamarajanagar district, Karnataka, India. Centered on the ancient Sri Male Mahadeshwara Temple dedicated to Lord Shiva, it is both a major Shaiva spiritual destination and a biodiversity-rich forest landscape forming part of the Male Mahadeshwara Wildlife Sanctuary.Situated at the confluence of the Eastern and Western Ghats, the hills act as a natural bridge between the ranges. The Kaveri River bounds them to the northeast and the Palar River to the south. The terrain includes seven principal peaks—Anemale, Jenumale, Kadumale, Kanumale, Ponnachimale, Pavalamale, and Pachchemale—covered in dry and moist deciduous forests with patches of evergreen vegetation.The site honors the saint Male Mahadeshwara Swamy, believed to be a 15th-century incarnation of Lord Shiva. According to legend, he rode a tiger, performed miracles, and spread teachings of non-violence. The self-manifested (Swayambhu) Linga in the temple’s garbha gudi (sanctum) is central to worship. Annual festivals such as Maha Shivaratri and Deepavali draw lakhs of pilgrims, accompanied by “Kamsale,” a devotional folk dance using bronze cymbals. ",
    images: [Hills],
    source: "Wikipedia",
  },
  {
    name: "Nandi Hills ",
    description:
      "Nandi Hills, also known as , is a scenic hill station and historical fortress located in the Chikkaballapur district of Karnataka, India, about 60 km north of Bengaluru. Rising to 1,478 m (4,851 ft) above sea level, it offers panoramic views, a cool climate, and rich cultural heritage, making it one of southern India’s most popular weekend getaways.Nandi Hills, also known as , is a scenic hill station and historical fortress located in the Chikkaballapur district of Karnataka, India, about 60 km north of Bengaluru. Rising to 1,478 m (4,851 ft) above sea level, it offers panoramic views, a cool climate, and rich cultural heritage, making it one of southern India’s most popular weekend getaways.Nandi Hills, also known as , is a scenic hill station and historical fortress located in the Chikkaballapur district of Karnataka, India, about 60 km north of Bengaluru. Rising to 1,478 m (4,851 ft) above sea level, it offers panoramic views, a cool climate, and rich cultural heritage, making it one of southern India’s most popular weekend getaways.Nandi Hills attracts trekkers, cyclists, and paragliders. The sunrise viewpoint near the summit—nicknamed “Gateway to Heaven”—is among the most photographed in Karnataka. Visitors also explore the Brahmashram Cave, where sage Ramakrishna Paramahamsa is believed to have meditated, and the landscaped gardens created during British rule.Blending spirituality, ecology, and history, Nandi Hills remains an enduring symbol of Karnataka’s natural beauty and cultural depth—offering both adventure and tranquility within easy reach of the state’s capital. ",
    images: [Nandi1,Nandi2],
    source: "(src:Wikipedia)",
  },
  {
    name: "Bhoga Nandeeshwara Temple",
    description:
      "Bhoga Nandeeshwara Temple is an ancient Hindu complex at the base of Nandi Hills in Chikkaballapur district, Karnataka, India. Dedicated to Lord Shiva, it is among the oldest surviving temples in the state and a significant example of early Dravidian architecture. The site is protected by the Archaeological Survey of India for its historical and cultural importance.Inscriptions date the temple to around 806–810 CE, under the Nolamba dynasty and Rashtrakuta Empire. Tradition attributes its foundation to Queen Ratnavali, consort of the Bana king Vidyadhara. Over the centuries, the Western Ganga dynasty, Chola dynasty, Hoysala Empire, and Vijayanagara Empire added distinctive architectural elements. Later, it came under Mysore rulers before British rule.The complex represents a fusion of dynastic styles within a Dravidian layout. It consists of twin shrines—Arunachaleshwara in the south (Ganga period) and Bhoga Nandeeshwara in the north (Chola period)—with a smaller Uma Maheshwara shrine between them built by the Hoysalas. The Uma Maheshwara Kalyana Mandapa, supported by finely carved black-stone pillars, depicts divine couples such as Shiva-Parvati and Vishnu-Lakshmi. A massive stepped tank, Shringi Theertha, believed to be the source of the South Pinakini River, completes the ensemble.The temple symbolizes three life stages of Shiva—childhood (Arunachaleshwara), youth (Bhoga Nandeeshwara), and marriage (Uma Maheshwara)—while the mountaintop Yoga Nandeeshwara Temple represents renunciation. It remains an active place of worship, particularly during Maha Shivaratri, and is popular among newly married couples seeking divine blessings. ",
    images: [Bhoga1,Bhoga2],
    source: "(src: Wikipedia, )",
  },
 {
    name: "Baba Budangiri",
    description:
      "Baba Budangiri is a mountain range and revered pilgrimage site in the Chikkamagaluru district of Karnataka, India. Part of the Western Ghats, it is named after the 17th-century Sufi saint Baba Budan and holds deep religious and ecological significance.Baba Budangiri forms part of the larger Mullayanagiri–Kemmangundi range in the Western Ghats. The region features rolling grasslands, shola forests, and numerous trekking routes. It is known for its mist-covered peaks, caves, and waterfalls such as Manikyadhara Falls. The area is a biodiversity hotspot and supports coffee plantations that are integral to the local economy. The site houses the shrine of Sufi saint Baba Budan, who is traditionally believed to have introduced coffee cultivation to India by bringing beans from Yemen. It is also revered by Hindus as the abode of the sage Dattatreya, making it a unique symbol of syncretic worship. Annual urs and jatra festivals attract pilgrims from both faiths.The range is a popular trekking and sightseeing destination, offering panoramic views of the Western Ghats. Treks often link Baba Budangiri to nearby Mullayanagiri, the highest peak in Karnataka. Visitors also explore surrounding coffee estates and scenic viewpoints accessible by road from Chikkamagaluru town.Due to its ecological sensitivity and cultural diversity, Baba Budangiri has been the focus of conservation efforts balancing tourism, pilgrimage, and environmental preservation. The area remains a symbol of Karnataka’s natural beauty and interfaith heritage.  ",
    images: [Baba1,Baba2],
    source: "(src: Wikipedia, )",
  },
 {
    name: "Mullayanagiri",
    description:
      "Mullayanagiri is the highest peak in Karnataka, India, rising within the Chikkamagaluru district of the Western Ghats. Standing at about 1,930 meters (6,330 feet) above sea level, it is one of South India’s most popular trekking and pilgrimage destinations, known for panoramic views and a hilltop Shiva temple.Located about 20 km from Chikkamagaluru town, Mullayanagiri forms part of the Baba Budangiri range of the Western Ghats. The region features rolling grasslands, rugged cliffs, and shola (montane forest) patches that support rich biodiversity. Its altitude provides cooler temperatures and misty conditions for much of the year. At the summit stands a small temple dedicated to Lord Shiva, locally known as Mullappa Swamy Temple. The peak is considered sacred by devotees who undertake pilgrimages, often climbing a steep stairway carved into the rock. The area is also associated with the nearby Baba Budangiri hills, revered in both Hindu and Sufi traditions.Mullayanagiri is a major trekking hub in Karnataka, offering trails of varying difficulty from Sarpadhari to the summit. The route provides panoramic views of the Chikkamagaluru valley and adjacent peaks like Seethalayyanagiri. The terrain’s mix of grassland slopes and rocky ridges makes it ideal for adventure tourism and photography. The region experiences a tropical highland climate, with heavy monsoon rains from June to August. Visitors typically prefer the post-monsoon months for clearer skies and cooler temperatures. Mullayanagiri is accessible by road from Chikkamagaluru and attracts both local pilgrims and nature enthusiasts year-round.   ",
    images: [Giri1],
    source: "(src: Wikipedia, )",
  },
   {
    name: "Chitradurga Fort ",
    description:
      "Chitradurga Fort, locally known as Elusuttina Kote (“Fort of Seven Circles”), is a vast hill fortress in the Chitradurga district of Karnataka, India. Built atop granite hills, it exemplifies South India’s medieval military architecture and regional legends of valor. Once a stronghold of the Nayakas, it later fell to Hyder Ali and then the British.Archaeological evidence shows occupation since the 3rd century BCE, including minor edicts of Emperor Ashoka. The fort gained prominence under the Nayakas of Chitradurga, who expanded it from a Vijayanagara outpost into a formidable citadel by the 17th century. In 1779, it was captured by Hyder Ali of the Kingdom of Mysore and later garrisoned by the British as “Chitaldoorg.” The fortress spans seven concentric stone walls climbing the rugged Chinmuladri hills, connected by zigzagging paths that confound attackers. Its 19 gateways, 38 postern doors, and 4 secret passages demonstrate strategic ingenuity. Ingenious rainwater-harvesting tanks—such as Akka and Thangi Honda—collected monsoon water in cascades, ensuring year-round supply during sieges. Numerous shrines, including the ancient Hidimbeshwara, Ekanatheshwari, and Gopalaswamy temples, blend Vijayanagara and Dravidian styles. The site is linked to the Mahabharata legend of Bhima and the demon Hidimbasura, commemorated at the Hidimbeshwara temple. A celebrated episode of resistance is that of Onake Obavva, the guard’s wife who slew invading soldiers with a pestle through a narrow crevice, immortalizing her courage in Karnataka’s folklore. Now maintained by the Archaeological Survey of India, Chitradurga Fort remains a major heritage attraction for its blend of myth, history, and engineering. Visitors explore its ramparts, granaries, temples, and lookout towers for sweeping views of the Deccan landscape—an enduring monument to Karnataka’s martial and cultural heritage.  ",
    images: [Chitradurga1,Chitradurga2],
    source: "(src: Wikipedia, )",
  },
   {
    name: "Kateel Durga Parameshwari Temple ",
    description:
      "Kateel Durga Parameshwari Temple is a renowned Hindu temple situated in the town of Kateel, Karnataka, India. Dedicated to Goddess Durga Parameshwari, it is a major pilgrimage center in the coastal region, notable for its serene setting on an islet formed by the Nandini River. According to legend, the temple marks the spot where Goddess Durga Parameshwari slew the demon Arunasura, restoring fertility to the land. The goddess is believed to reside here to bless devotees and protect the region. The temple’s sanctum, located on a small rock island, symbolizes the divine energy balancing earth and water. The temple exhibits traditional South Canara architecture, with carved wooden ceilings, vibrant murals, and a distinct sanctum (garbhagriha) surrounded by flowing river waters. A bridge connects the islet to the mainland, allowing visitors year-round access despite monsoon conditions. Kateel Temple is known for its elaborate Navaratri celebrations and annual chariot festival (Rathotsava). Yakshagana, a local folk theatre form, is performed regularly under the temple’s patronage, making it a cultural hub as well as a spiritual destination.The temple attracts thousands of devotees daily from Karnataka and neighboring states. Its combination of natural beauty, legend, and ritual vitality has made it a central site of Shakti worship in the Tulunadu region, symbolizing the harmony of nature and divinity.  ",
    images: [Kateel1,Kateel2],
    source: "(src: myholidayhappiness.com )",
  },
   {
    name: "Kudroli Gokarnath Temple ",
    description:
      "Kudroli Gokarnath Temple, also known as Gokarnanatheshwara Temple, is a prominent Hindu shrine in Mangaluru, Karnataka, India. Dedicated to Lord Shiva in his Gokarnanatha form, it is celebrated for its golden gopuram, inclusive history, and vibrant Mangalore Dasara festival that attracts devotees and tourists alike. The temple was consecrated in 1912 by social reformer Narayana Guru, who envisioned a place of worship open to all castes—a revolutionary idea in early 20th-century India. Built through the initiative of community leader Adhyaksha Hoige Bazar Koragappa and the Billava community, it became a symbol of social equality and unity, echoing Narayana Guru’s credo: “One Caste, One Religion, One God.”  The complex showcases traditional Dravidian architecture blended with modern ornamentation. Its 60-foot golden gopuram is adorned with vivid sculptures of deities and mythological scenes. Inside are shrines for Ganapati, Subramanya, Annapoorneshwari, Navagrahas, and Krishna, surrounded by marble courtyards and landscaped gardens. A temple pond with statues of Shiva and Durga hosts the weekend “Gangavatara” fountain show. Kudroli is the epicenter of Mangalore Dasara, renowned for grand Navaratri celebrations featuring processions of life-size Nava Durga idols, music, and illuminated tableaux. Other key festivals include Maha Shivaratri, Ganesh Chaturthi, Deepavali, and Sri Narayana Jayanthi. These events reinforce the temple’s dual role as a spiritual and cultural hub for the coastal region.   ",
    images: [Kudroli1,Kudroli2],
    source: "(src: Wikipedia, )",
  },
   {
    name: "Belur Temple",
    description:
      " The Belur Temple, formally known as the Chennakeshava Temple, is a 12th-century Hindu temple complex in Belur, Hassan district, Karnataka, India. Celebrated as a masterpiece of Hoysala architecture, it was commissioned by King Vishnuvardhana to commemorate his victory over the Cholas and remains an active center of worship dedicated to Lord Vishnu.Belur, historically called Velapuri, served as an early capital of the Hoysala Empire before Halebidu. The temple took over a century to complete, under three generations of rulers. It became a focal point for art, culture, and devotion during the Hoysala era and is today a cornerstone of Karnataka’s heritage tourism circuit, along with Hoysaleswara Temple and Keshava Temple. The temple’s star-shaped platform (jagati) supports intricately carved walls depicting scenes from the Ramayana, Mahabharata, and Puranas. Its 48 polished pillars display unique designs, while the famed Madanikas or celestial maidens—including the “Darpana Sundari” (Lady with the Mirror)—embody the pinnacle of Hoysala artistry. The outer friezes portray rows of elephants, lions, and horses symbolizing strength, courage, and speed. Soapstone enabled the exceptionally fine detailing that resembles metalwork. The Chennakeshava Temple remains a living shrine where rituals are performed daily. Its annual Hoysala Mahotsava, featuring classical dance and music, honors the dynasty’s cultural legacy. Pilgrims and visitors alike view it as “Dakshina Varanasi” (the Varanasi of the South) for its spiritual and artistic grandeur.  ",
    images: [Belur1,Belur2],
    source: "(src: Wikipedia, )",
  },
   {
    name: "Sakelshpur",
    description:
      "Sakleshpur is a hill station and taluk headquarters in Karnataka, India, situated in the Western Ghats along National Highway 75 between Mangaluru and Bengaluru. Known for its lush coffee and spice plantations, cool climate, and scenic mountain views, it’s a popular getaway for eco-tourism and trekking enthusiasts. Nestled in the Western Ghats, Sakleshpur features rolling hills, dense forests, and cascading streams. The region’s terrain makes it part of India’s biodiversity hotspots. Its moderate elevation contributes to a temperate climate favorable for plantation crops such as coffee, cardamom, and pepper. The town takes its name from the ancient Sakleshwara Temple, a Hoysala-era temple dedicated to Lord Shiva on the banks of the Hemavathi River. Architectural relics and inscriptions link the area to the 11th–14th centuries, reflecting the Hoysala dynasty’s influence in southern Karnataka.Sakleshpur attracts travelers for its nature trails and adventure activities. Notable attractions include the star-shaped Manjarabad Fort, the Bisle Ghat viewpoint, Jenukal Gudda peak, and nearby waterfalls such as Magajahalli and Manjehalli. Plantation stays and trekking along railway lines or forest paths are especially popular among domestic tourists.   ",
    images: [Pura1,Pura2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Shravanabelagola",
    description:
      "Shravanabelagola is a historic Jain pilgrimage town in the Hassan district of Karnataka, India. It is best known for the colossal 10th-century monolithic statue of Bahubali (Gommateshwara) that crowns Vindhyagiri Hill, symbolizing peace, renunciation, and spiritual triumph. The site is among the most sacred centers of Digambara Jainism and a major cultural heritage landmark. Shravanabelagola’s recorded history spans over two millennia. It gained prominence when the Mauryan emperor Chandragupta Maurya renounced his throne under the guidance of Jain monk Bhadrabahu and attained sallekhana (ritual fasting) on Chandragiri Hill. The region flourished under successive dynasties—the Ganga, Hoysala, and Vijayanagara—which left hundreds of rock inscriptions and temples (Basadis).Carved from a single granite block, the 58-foot standing figure depicts Bahubali in kayotsarga (meditative stillness) with vines encircling his limbs, signifying detachment from worldly life. It remains one of the largest monolithic statues in the world. The statue and its surrounding colonnades exhibit exceptional artistry characteristic of the late-Ganga period.The twin hills form the heart of the sacred landscape. Vindhyagiri hosts the Bahubali statue and temples such as Odegal Basadi and Tyagada Brahmadeva Kamba. Chandragiri, opposite it, houses ancient shrines and memorials including Chandragupta Basadi, the Cave of Bhadrabahu, and numerous medieval inscriptions documenting Jain monastic life.Mahamastakabhisheka festival held once every twelve years, this grand anointment ritual covers the Bahubali statue with consecrated substances—milk, saffron, turmeric, sandal paste, and flowers—poured from hundreds of ceremonial vessels (kalashas). The festival attracts pilgrims and visitors from across India and abroad and is among Jainism’s most significant religious events.  ",
    images: [Shravan1,Shravan2],
    source: "(src: Wikipedia Commons, )",
  },
  {
    name: "Sharana Basaveshwara Temple",
    description:
      "Sharana Basaveshwara Temple is a revered 18th-century shrine located in Kalaburagi, Karnataka, India. Dedicated to the saint-philosopher Sharana Basaveshwara, it is a major center of devotion for followers of the Lingayat faith and a cultural landmark of northern Karnataka. The temple was constructed in honor of Sharana Basaveshwara, a 17th–18th century Lingayat saint and social reformer known for his teachings on equality and spiritual devotion through service. It was commissioned by devotees to enshrine his samadhi (final resting place), transforming the site into both a spiritual and cultural nucleus for Kalaburagi.Sharana Basaveshwara Temple is one of the most important Lingayat pilgrimage destinations in northern Karnataka. The saint’s teachings—centered on humility, service, and community welfare—continue to influence religious and social life in the region. The temple attracts visitors across faiths for its inclusive ethos.The Sharana Basaveshwara Jatra, held annually during March or April, commemorates the saint’s Car Festival (Rathotsava). Thousands of devotees gather for processions, cultural programs, and charitable activities, making it one of Kalaburagi’s largest public events and a vibrant expression of regional devotion.  ",
    images: [Basava1,Basava2,],
    source: "(src: Wikipedia,thi.thgim.com )",
  },
  {
    name: "Khwaja Bande Nawaz Dargah",
    description:
      "The Khwaja Bande Nawaz Dargah in Kalaburagi (formerly Gulbarga), Karnataka, India, is the mausoleum of the 14th–15th century Sufi saint Hazrat Khwaja Syed Mohammed Gesu Daraz, also known as Khwaja Bande Nawaz. Revered across faiths, it serves as a major spiritual and cultural landmark of the Deccan region and a symbol of interfaith harmony. Built during the reign of Bahmani ruler Ahmad Shah Wali, the shrine commemorates Khwaja Bande Nawaz Gesu Daraz (1321–1422), a disciple of Delhi’s Sufi master Hazrat Nasiruddin Chiragh Dehlavi. After the Mongol invasion of Delhi in 1398, Gesu Daraz migrated south and was invited to Gulbarga by Sultan Taj ud-Din Firuz Shah, spreading the Chishti order’s message of love, tolerance, and unity across the Deccan.The shrine attracts pilgrims from across India, transcending religious lines. Its annual Urs—the saint’s death anniversary—draws thousands for qawwali performances, prayers, and processions celebrating the saint’s life. Locals regard the neem tree near the saint’s daughter’s tomb as having curative powers. The Dargah remains open daily (typically 6 AM – 10 PM) with no entry fee. Modest attire and silence are expected. The site lies about 2 km from Gulbarga Fort and 3 km from Jama Masjid, making it part of a wider heritage circuit within Kalaburagi. ",
    images: [Nawaz1,Nawaz2],
    source: "(src:i.pinimg.com, hblimg.mmtcdn.com )",
  },
  {
    name: "Talakaveri",
    description:
      "Talakaveri is a revered pilgrimage site and scenic destination in Kodagu district, Karnataka, India. Situated in the Brahmagiri Hills, it is traditionally regarded as the birthplace of the River Kaveri, one of South India’s seven sacred rivers. The site draws both devotees and travelers for its religious importance and panoramic natural beauty.A small spring, called the Brahma Kundike or Tirtha Kundike, is venerated as the river’s source. The water is said to flow underground before re-emerging as the Kaveri. Bathing in the spring during auspicious days is believed to purify sins. The adjoining temple, dedicated to Kaveriamma (Mother Kaveri), was renovated by the state government in 2007 and remains a center of devotion for Kodavas and South Indian pilgrims. According to Hindu lore, the river’s origin is linked to Sage Agastya and his wife Lopamudra—an incarnation of Kaveri, daughter of King Kavera. When Agastya inadvertently confined her in his holy vessel, Lord Ganesha, disguised as a crow, tipped it over, releasing her to flow as a river for the welfare of humanity. This myth explains her sanctity and association with compassion and fertility.During Tula Sankramana, thousands of devotees gather to witness the Theerthodbhava—a moment when water symbolically wells up from the spring, signifying Kaveri’s emergence. The event is marked by elaborate rituals, processions, and cultural celebrations in nearby Bhagamandala. ",
    images: [Tala1,Tala2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Kotilingeshwara Temple",
    description:
      "Kotilingeshwara Temple is a prominent Hindu pilgrimage site located in Kammasandra village near Kolar, Karnataka, India. It is renowned for housing one of the largest collections of Shiva lingas in the world, symbolizing devotion to Lord Shiva and attracting visitors for both spiritual and cultural reasons.Kotilingeshwara Temple was founded in the 1980s by Swami Sambha Shiva Murthy with the vision of installing one crore (ten million) Shiva lingas. The project began on a modest scale and expanded steadily through community participation and pilgrim contributions. The temple complex now spans several acres, with lingas ranging in size from a few inches to massive stone monoliths. At the center stands a towering Shiva linga about 33 meters (108 feet) high, accompanied by a giant Nandi (bull) statue facing it. The temple grounds feature countless smaller lingas neatly arranged in rows, creating a striking visual expanse. Shrines dedicated to other Hindu deities, such as Lord Vishnu and Goddess Annapoorneshwari, complement the main sanctum. The site’s name—“Kotilingeshwara”—literally means “Lord of a crore lingas.” Devotees believe that installing a linga here brings blessings and spiritual merit. The temple is a focal point during Maha Shivaratri, when thousands of pilgrims perform rituals, offer prayers, and participate in mass abhishekam (ceremonial bathing of the deity).    ",
    images: [Koti1],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Avani",
    description:
      "Avani is a village and pilgrimage site located in the Kolar district of Karnataka, India. Known for its ancient temples and mythological associations, it is a significant heritage and religious destination in South India. The site attracts devotees and history enthusiasts for its unique architecture and cultural importance. According to legend, Avani is believed to be the place where Sita, wife of Lord Rama, gave birth to her twin sons, Lava and Kusha. The site is said to have been visited by sage Valmiki, who provided shelter to Sita during her exile. This connection makes Avani a revered destination for devotees of the Ramayana tradition. Avani hosts the Ramalingeshwara Temple complex, a group of shrines dedicated to Rama, Lakshmana, Bharata, and Shatrughna. The temples date back to the Nolamba dynasty (8th–10th century CE) and feature Dravidian architectural style with intricate carvings, stone pillars, and a serene hill backdrop. The village is situated about 30 kilometers from Kolar and 90 kilometers from Bengaluru. Surrounded by rocky hills and dry deciduous landscape, it offers scenic views and hiking opportunities, especially to the Sita Parvata hilltop temple. Avani’s quiet terrain and preserved structures make it both a spiritual and archaeological site of note.  ",
    images: [Avani],
    source: "(src: gosahn.com, )",
  },
  {
    name: "Hampi",
    description:
      "Hampi is an archaeological and religious site of ruined temples, palaces, markets, and fortifications in Karnataka, India. Once the capital of the Vijayanagara, it is now a UNESCO World Heritage Site famed for its dramatic boulder-strewn landscape and dense concentration of monuments.Hampi predates the Vijayanagara Empire and appears in Hindu mythology as Pampa Kshetra, associated with stories from the Ramayana. It became the imperial capital of Vijayanagara in the 14th century, growing into one of the world’s largest and richest cities by 1500, attracting traders from Persia and Europe. The city was devastated after defeat by a coalition of Deccan sultanates in 1565 and gradually fell into ruin.The site stretches across granite hills, banana plantations, and the banks of the Tungabhadra, with temples and structures integrated into massive boulders. Architecture is primarily Dravidian, enriched by Hoysala influences in ornate pillars and ceilings, and occasional Indo-Islamic elements in structures like the Queen’s Bath and Elephant Stables, reflecting a cosmopolitan, multi-religious society.Today Hampi is both a spiritual center and a major heritage tourism destination promoted by Karnataka tourism authorities. Visitors explore the ruins on foot, bicycle, or scooter, often watching sunrise from Matanga or Hemakuta hills and sunset over the Tungabhadra.    ",
    images: [Site1,Site2,Site3],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Virupaksha temple",
    description:
      " The Virupaksha Temple in Hampi, Karnataka, is one of the most revered and historically significant temples in India, dedicated to Lord Shiva in his form as Virupaksha. Dating back to the 7th century CE, it began as a small shrine and was later expanded under the Vijayanagara rulers, particularly during the reign of Deva Raya II and Krishnadevaraya. Despite the destruction of Hampi in 1565, the temple survived and continues to function as a living place of worship, making it unique among the ruins of the Vijayanagara Empire. Architecturally, the temple is a masterpiece of the Vijayanagara style, featuring a towering eastern gopuram that rises nearly 50 meters high, intricately carved pillars, and richly decorated ceilings with mythological frescoes. The sanctum houses Lord Virupaksha, while shrines dedicated to Goddess Pampa and Bhuvaneshwari add to its spiritual significance. The temple complex also demonstrates mathematical precision in its design, with fractal-like patterns symbolizing infinity and divine order. As a vibrant religious center, it hosts grand festivals such as the annual chariot procession and the marriage of Virupaksha and Pampa, drawing thousands of devotees. Beyond its religious importance, the temple stands as a cultural and architectural icon, embodying the resilience of Hampi’s heritage and offering visitors a glimpse into the grandeur of South Indian temple traditions. ",
    images: [Viru1],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Anjanadri Hill",
    description:
      "Anjanadri Hill is a prominent spiritual and scenic hill located near Anegundi in the Vijayanagara district of Karnataka, India. Revered in Hindu tradition as the birthplace of the deity Hanuman, it is a major pilgrimage destination and a vantage point overlooking the Tungabhadra River and the ruins of Hampi. The hill combines mythological significance with panoramic natural beauty, drawing both devotees and tourists.According to the Ramayana and regional lore, Anjanadri Hill is named after Anjana, the mother of Hanuman. It is said that Hanuman was born here, making the site sacred to devotees of Rama and Hanuman alike. The hilltop temple enshrines an idol of Hanuman, worshipped daily by pilgrims who climb its steps as an act of devotion. The hill lies within the rugged granite terrain of the Hampi–Anegundi region, part of the larger UNESCO World Heritage landscape of the Vijayanagara ruins. From the summit, visitors can view the Tungabhadra River winding through the boulder-strewn plains, ancient temples, and remnants of the Vijayanagara Empire. Anjanadri Hill is accessible via a well-marked stairway that ascends through a series of viewpoints and shrines. Early morning and sunset visits are popular for the striking views of the river valley. The nearest transport hub is Hospet, about 35 kilometers away, with local roads connecting Anegundi and Hampi.   ",
    images: [Anjanadri],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Anegundi",
    description:
      "Baba Budangiri is a mountain range and revered pilgrimage site in the Chikkamagaluru district of Karnataka, India. Part of the Western Ghats, it is named after the 17th-century Sufi saint Baba Budan and holds deep religious and ecological significance.Baba Budangiri forms part of the larger Mullayanagiri–Kemmangundi range in the Western Ghats. The region features rolling grasslands, shola forests, and numerous trekking routes. It is known for its mist-covered peaks, caves, and waterfalls such as Manikyadhara Falls. The area is a biodiversity hotspot and supports coffee plantations that are integral to the local economy. The site houses the shrine of Sufi saint Baba Budan, who is traditionally believed to have introduced coffee cultivation to India by bringing beans from Yemen. It is also revered by Hindus as the abode of the sage Dattatreya, making it a unique symbol of syncretic worship. Annual urs and jatra festivals attract pilgrims from both faiths.The range is a popular trekking and sightseeing destination, offering panoramic views of the Western Ghats. Treks often link Baba Budangiri to nearby Mullayanagiri, the highest peak in Karnataka. Visitors also explore surrounding coffee estates and scenic viewpoints accessible by road from Chikkamagaluru town.Due to its ecological sensitivity and cultural diversity, Baba Budangiri has been the focus of conservation efforts balancing tourism, pilgrimage, and environmental preservation. The area remains a symbol of Karnataka’s natural beauty and interfaith heritage.  ",
    images: [Anegundi1,Anegundi2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Navabrindavana",
    description:
      "Navabrindavana is a sacred island located near Anegundi in the Koppal district of Karnataka, India. It holds the samadhis (tombs) of nine revered Hindu saints from the Dvaita Vedanta tradition established by Madhvacharya. The site is an important pilgrimage destination for followers of the Madhva sect and is set amid scenic surroundings on the Tungabhadra River.Navabrindavana is deeply rooted in the Madhva philosophical tradition, commemorating nine pontiffs who attained Brindavana pravesha (final rest) at this island. Among them are Vyasaraja Tirtha, Raghunatha Tirtha, and Srinivasa Tirtha, each a key figure in propagating the Dvaita school. Their samadhis are arranged in a circular pattern, symbolizing spiritual unity.The island lies amid the Tungabhadra River, opposite Anegundi, and is accessible by small boats during most of the year. During monsoon, the water level often rises, submerging the approach and limiting visitation. The surrounding region, close to Hampi, is notable for its boulder-strewn landscapes and historic Vijayanagara-era heritage.Navabrindavana attracts devotees year-round, especially on the aradhanas (death anniversaries) of the nine saints, when special rituals and recitations are held. Pilgrims also visit nearby shrines dedicated to Prajna Tirtha and other disciples. The serene setting and devotional atmosphere make it a central site for Dvaita adherents across South India.",
    images: [nava1,nava2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Sri Ranganathaswamy Temple",
    description:
      "The Sri Ranganathaswamy Temple in Srirangapatna, Mandya district, Karnataka, is a major Hindu pilgrimage center dedicated to Lord Ranganatha, a reclining form of Vishnu. Situated on an island formed by the river Kaveri, it is the first of the five sacred Ranganatha temples along the river’s course, known collectively as the Pancharanga Kshetrams.The temple’s origins trace back to the Ganga dynasty in the 9th century, with later contributions from the Cholas, Hoysalas, Vijayanagara rulers, and the Wodeyars of Mysore. Its sanctity is mentioned in early Vaishnava texts and Tamil hymns of the Alvars. Srirangapatna itself served as the capital of several South Indian dynasties, enhancing the temple’s prominence.Sri Ranganathaswamy Temple is a vital Vaishnava shrine, drawing thousands of devotees during festivals such as Vaikuntha Ekadashi. It symbolizes the starting point of the Pancharanga pilgrimage, preceding other Ranganatha temples like those at Shivanasamudra and Srirangam. The temple’s rituals follow the traditional South Indian Vaishnava Agama system.Managed by the Hindu Religious and Charitable Endowments Department of Karnataka, the temple remains active for daily worship and attracts pilgrims and tourists year-round. Its setting amid Srirangapatna’s historic fort and riverine landscape makes it both a spiritual and architectural landmark of southern India.",
    images: [Sri1,Sri2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Shivanasamudra Falls",
    description:
      "Shivanasamudra Falls is a segmented waterfall on the Kaveri River located in Mandya, India. It is one of the country’s oldest hydroelectric power sites and a popular scenic destination known for its twin cascades—Gaganachukki and Barachukki—surrounded by forested hills.The Kaveri River divides around the rocky island of Shivanasamudra, forming two parallel waterfalls—Gaganachukki to the western side and Barachukki to the eastern. The surrounding terrain consists of rugged granite outcrops and forested ravines within the Cauvery Wildlife Sanctuary, offering striking views during the monsoon months (July–October).Established in 1902, the Shivanasamudra Hydroelectric Station is among Asia’s earliest hydroelectric plants. It initially supplied power to the Kolar Gold Fields mines and the city of Bengaluru, marking a milestone in India’s industrial development. Shivanasamudra is about 130 kilometers from Bengaluru and 80 kilometers from Mysuru. Visitors can reach viewpoints overlooking both cascades, with Barachukki offering closer access and seasonal coracle rides when water flow permits. The site’s accessibility and proximity to other attractions like Talakadu and Somnathpur Temple make it a popular day-trip destination. ",
    images: [Samudra1,Samudra2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Mysore Palace",
    description:
      "Mysore Palace, also known as Amba Vilas Palace, is a grand royal residence in the heart of Mysuru, Karnataka, India. Once the seat of the Wadiyar dynasty, rulers of the Kingdom of Mysore, it is among India’s most visited heritage attractions and a masterpiece of Indo-Saracenic architecture blending Hindu, Muslim, Rajput, and Gothic styles.The first palace on this site was built in the 14th century by Yaduraya Wodeyar. After several reconstructions and a fire in 1897 during a royal wedding, the current edifice was commissioned by Maharaja Krishnaraja Wadiyar IV and completed in 1912. It cost about ₹4.5 million and replaced earlier wooden structures destroyed by fire. The Wadiyars continued to reside here until the integration of Mysore State into the Indian Union in 1947.Constructed mainly of gray granite with deep pink marble domes, the three-story palace features four cardinal entrances and a central tower capped with a gilded dome. Notable interiors include the Durbar Hall, famed for turquoise-and-gold colonnades; the octagonal Kalyana Mantapa with a Belgian-stained-glass ceiling; and the Ambavilasa private audience hall. The complex also houses the Gombe Thotti (Dolls’ Pavilion), royal armoury, and several temples dating from the 14th to the 20th centuries.Mysore Palace is the focal point of the annual Mysore Dasara, when the Golden Throne is displayed and the building glows with thousands of lights. It also hosts a nightly sound-and-light show recounting Mysuru’s 400-year history. ",
    images: [mysuru1,mysuru2,mysuru3,mysuru4,mysuru5,mysuru6],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Chamundi Hills",
    description:
      "Chamundi Hills is a prominent hill range located on the outskirts of Mysuru (Mysore), Karnataka, India. Rising about 1,000 meters (3,300 feet) above sea level, it is one of the region’s most recognizable landmarks and a major pilgrimage destination, known for its historic temples, panoramic city views, and cultural significance.The hills derive their name from the goddess Chamundeshwari, an incarnation of Durga revered as the patron deity of the Mysuru royal family. TChamundeshwari Temple atop the hill dates back to the 12th century and exemplifies Dravidian architectural style. Devotees climb the 1,008 steps to offer prayers, especially during festivals like Navaratri, when the temple and the entire hill are illuminated.Along the ascent stands a colossal monolithic statue of Nandi (the bull vehicle of Lord Shiva), carved in the 17th century from a single granite block. The temple’s tall gopuram (tower) and intricate carvings showcase South Indian temple craftsmanship. The site reflects Mysuru’s deep association with Hindu mythology and royal patronage through centuries.",
    images: [Chamundi1,Chamundi2,Chamundi3],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Raichur Fort",
    description:
      "Raichur Fort is a medieval hill fort in Raichur, India, built in 1294 CE by the Kakatiya dynasty. Over centuries it was expanded by rulers of the Bahmani, Vijayanagara, Adil Shahi, and Mughal empires, reflecting a blend of Hindu and Indo-Islamic architecture. Today it stands as a major heritage landmark of northern Karnataka. The earliest fortification is attributed to the Kalyani Chalukyas, later rebuilt by King Vithala on the orders of Queen Rudramadevi of Warangal’s Kakatiya dynasty. Krishnadevaraya of the Vijayanagara Empire later added the northern gateway to commemorate his victory over the Bahmani rulers. Control of the fort shifted repeatedly, symbolizing the strategic rivalry between southern dynasties and Deccan sultanates. Raichur Fort rises atop a granite hill roughly 88 m high and is encircled by double defensive walls. The inner ramparts of dressed stone were assembled without any binding material. Key gates include the Sailani and Sikandari Darwazas on the inner wall and five outer gates such as Mecca and Kati Darwazas. Within lie remnants of palaces, mosques, and tanks; notable are inscriptions in Persian, Arabic, and Telugu. The Bala Hisar (citadel) crowns the summit, offering panoramic views of the Raichur plain.The fort’s inscriptions and mixed religious architecture—such as the Daftkari and Kali mosques alongside Chalukyan-style pillars—illustrate the coexistence of Hindu and Islamic artistic traditions. Its 41-foot stone slab depicting buffalo-drawn carts hauling materials up the hill is a celebrated archaeological feature.",
    images: [Rai1],
    source: "(src: gosahin.com, )",
  },
  {
    name: "Ramadevara Betta Vulture sanctuary ",
    description:
      "Ramadevara Betta is a granitic hill and popular trekking and pilgrimage site located near Ramanagara, about 50 kilometers southwest of Bengaluru. Known for its scenic vistas, ancient temple, and ecological importance, it combines natural beauty with cultural and cinematic heritage. Ramadevara Betta is part of the rocky terrain that defines the Ramanagara landscape, characterized by massive granite outcrops and boulder formations. The hill lies within the Ramanagara Vulture Sanctuary, India’s first sanctuary established specifically to protect vultures such as the endangered long-billed and Egyptian species. Its dry deciduous forest supports varied flora and fauna unique to the Deccan plateau.Atop the hill stands the ancient Sri Pattabhirama Swamy Temple, believed to date back several centuries and associated with legends from the Ramayana. Pilgrims visit the site especially during Rama Navami. The climb to the temple involves around 400 steps, and the summit offers panoramic views of the surrounding countryside.Ramadevara Betta gained national fame as the filming location for the cult classic Sholay, where it doubled as the fictional village of Ramgarh. This connection continues to attract film enthusiasts alongside trekkers and devotees. The site is a favored weekend destination for visitors from Bengaluru, offering moderate hiking trails, birdwatching, and photography opportunities.The area is managed by the Karnataka Forest Department to balance tourism with wildlife conservation. Entry may require permission, as it falls under a protected zone. Visitors are encouraged to follow eco-friendly practices to preserve the hill’s ecological and spiritual value.",
    images: [Ram1,Ram2],
    source: "(src:trawell.in, Wikipedia, )",
  },
  {
    name: "Jog Falls",
    description:
      "Jog Falls, also known as Gersoppa Falls or Jogada Gundi, is a towering natural waterfall on the Sharavathi River in Sagara taluk, Shivamogga district, India. Plunging 253 meters (830 feet), it is India’s second-highest plunge waterfall and a centerpiece of the Western Ghats landscape. Its monsoon-fed cascades make it one of Karnataka’s most celebrated scenic attractions. Jog Falls is created where the Sharavathi River drops abruptly into a deep gorge without touching the underlying rock face, producing a true plunge waterfall. The water divides into four parallel cascades: Raja, the tallest and most powerful; Rani, gentle and silvery; Roarer, [gs1.1]thunderous; and Rocket, a narrow jet-like drop. During the dry season, the flow is regulated by the Linganamakki Dam, part of the Sharavathi Hydroelectric Project. Visitors can view the falls from designated platforms near the main viewpoint or descend roughly 1,400 steps to its base for an immersive perspective. The roar of water, misty spray, and rainbows during monsoon create a dramatic atmosphere. Early mornings and late evenings offer photogenic light and cooler air.Set amid dense evergreen forests, Jog Falls lies within a biodiversity-rich region adjoining the Sharavathi Valley Wildlife Sanctuary. The area supports endemic flora, diverse birdlife, and eco-tourism activities such as trekking, birdwatching, and boating. Nearby attractions include Honnemaradu, Sigandur, and the historic temples of Keladi and Ikkeri.Jog Falls is about 100 km from Shivamogga city and 400 km from Bengaluru. The nearest railhead is Talaguppa (20 km), and the closest major airport is Mangalore International Airport, roughly 220 km away. Karnataka Tourism maintains viewpoints and accommodations such as the KSTDC Mayura Gerusoppa Hotel and Sharavathi Adventure Camp.",
    images: [jog1,jog2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Siddaganga Mutt",
    description:
      "Siddaganga Mutt, also known as Shree Siddaganga Matha, is a renowned Lingayat monastery and pilgrimage center located near Tumakuru, Karnataka, India. Established in the 15th century, it is revered for combining spirituality with social welfare, particularly through large-scale educational and charitable initiatives.The mutt traces its origins to Sri Gosala Siddeshwara Swamiji and later flourished under seers such as Sri Uddana Swamiji and Dr. Sri Sri Sri Shivakumara Swamiji (1907–2019), affectionately known as the “Walking God.” It follows the Lingayat philosophy emphasizing Kayaka (work as worship) and Dasoha (selfless sharing). A temple dedicated to Sri Siddhalingeshwara sits atop a rocky hill, attracting thousands of pilgrims.Siddaganga Mutt is a major educational hub in Karnataka, operating over 128 institutions ranging from primary schools to professional colleges in engineering, medicine, and the arts. It provides free education, food, and accommodation to more than 8,000 students irrespective of caste or creed. The Anna Dasoha (free meal) program serves thousands of devotees and travelers daily.The mutt plays a central role in Karnataka’s cultural and spiritual life, hosting mass prayers, agricultural fairs, and community outreach programs. Its serene environment and ethos of inclusivity make it both a spiritual retreat and a center of social transformation. Visitors often regard the site as a living embodiment of service and humility.",
    images: [mutt1,mutt2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Madhugiri Fort",
    description:
      "Madhugiri Fort is a 17th-century hill fort located in Madhugiri, India. Rising atop one of Asia’s largest monolithic rocks, it exemplifies the defensive ingenuity and architectural prowess of the Vijayanagara Empire. Today it is a popular trekking and heritage site offering panoramic views of the Deccan Plateau.Built entirely of granite, the fort features seven concentric defensive walls, bastions, gateways, and watchtowers ascending the monolithic hill. The monumental entrance—known locally as Diddibagilu (“Gate of Hell”)—once stored ammunition and provisions and contained a secret escape passage. Within the upper precinct stands a temple dedicated to Lord Gopalakrishna and stone cisterns fed by an ancient rain-harvesting system still visible today .The 3.5 km trail to the summit passes through three major gateways and takes about 2–3 hours round-trip. It is graded moderately difficult due to steep granite slopes but rewards climbers with commanding views of the surrounding Thimmalapura Forest and Deccan countryside. Trekking is best from September to February, with early-morning ascents recommended for cooler conditions .Constructed as a frontier outpost of the Vijayanagara kingdom, Madhugiri Fort later became a strategic stronghold for the rulers of Mysore. Hyder Ali and Tipu Sultan expanded its fortifications before the British captured it in 1791 during the Third Anglo-Mysore War. Its successive layers of defenses reflect centuries of military adaptation. Built entirely of granite, the fort features seven concentric defensive walls, bastions, gateways, and watchtowers ascending the monolithic hill. The monumental entrance—known locally as Diddibagilu (“Gate of Hell”)—once stored ammunition and provisions and contained a secret escape passage. Within the upper precinct stands a temple dedicated to Lord Gopalakrishna and stone cisterns fed by an ancient rain-harvesting system still visible today .Madhugiri, meaning “honey hill,” derives its name from wild honeybee colonies that once thrived there. The site is accessible via road from Bengaluru and Tumakuru, with parking available near the trailhead. Though facilities are limited, the fort remains a symbol of regional resilience and is among Karnataka’s most impressive hill-fort legacies .",
    images: [madhugiri],
    source: "(src: karnataka.com )",
  },
  {
    name: "Sri Krishna Temple Udupi",
    description:
      "The Sri Krishna Temple in Udupi, Karnataka, is one of South India’s most revered Hindu pilgrimage sites. Founded in the 13th century by the philosopher-saint Madhvacharya, it is dedicated to Lord Krishna in his child form, known as Balakrishna. The temple is famed for its distinctive west-facing idol viewed through a silver-plated, nine-holed window called the Kanakana Kindi.The Sri Krishna Temple in Udupi, Karnataka, is one of South India’s most revered Hindu pilgrimage sites. Founded in the 13th century by the philosopher-saint Madhvacharya, it is dedicated to Lord Krishna in his child form, known as Balakrishna. The temple is famed for its distinctive west-facing idol viewed through a silver-plated, nine-holed window called the Kanakana Kindi.The complex blends traditional Dravidian and local coastal elements, with carved wooden ceilings, stone pillars, copper roofs, and a sacred tank called Madhwa Sarovara. Surrounding the shrine are the Ashta Mathas—eight monasteries established by Madhvacharya’s disciples—whose heads rotate the temple’s administration every two years through the Paryaya system. Darshan is offered exclusively through the Kanakana Kindi. Rituals follow strict Vedic traditions, including early-morning Mangala Aarti, Panchamrita Abhisheka, and nightly Ekanta Seva. The temple’s Annadana Seva serves free vegetarian meals to thousands daily, continuing a centuries-old practice of community service.Major celebrations include Krishna Janmashtami, Paryaya Utsava, Rathotsava (chariot festival), and Laksha Deepotsava. During these events, the temple becomes a vibrant center of music, devotion, and cultural performance, attracting pilgrims nationwide.Udupi lies about 60 km north of Mangalore, accessible by air (Mangalore International Airport), train (Udupi Station ≈ 4 km), and road via NH-66. Modest attire is required—dhoti or pants for men, saree or salwar kameez for women. Photography is prohibited in the sanctum.Sri Krishna Temple, Udupi, remains both a living monastery complex and a symbol of devotion, hospitality, and philosophical heritage—often called the “Mathura of South India.” ",
    images: [krishna1,krishna2,krishna3],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Ghati Subramanya Temple",
    description:
      "Ghati Subramanya Temple is an ancient Hindu pilgrimage site near Doddaballapur, Karnataka, India, dedicated to Lord Subramanya (Kartikeya) and Lord Narasimha. It is among South India’s most revered shrines for serpent worship and fertility blessings, drawing thousands of devotees year-round.According to local legend, Lord Subramanya worships Lord Narasimha here, symbolizing the union of Shiva and Vishnu energies. The unique feature is the single stone idol with Subramanya facing east and Narasimha west—visible simultaneously through a mirror placed behind the sanctum. Devotees believe the temple grants prosperity, fertility, and relief from naga dosha (serpent afflictions).The temple’s granite structure reflects early Dravidian craftsmanship. The sanctum houses intricately carved idols, while the outer complex features mandapas, serpent stone installations, and ritual enclosures. The temple surroundings blend rural landscape with sacred groves, enhancing its spiritual atmosphere.Daily rituals include abhishekam (holy bathing) and special pujas for family welfare and progeny. The annual Subramanya Shashti festival, celebrated on a grand scale, features chariot processions, music, and mass worship. Devotees often install naga stones and perform milk offerings as acts of devotion.",
    images: [Ghati1],
    source: "(src: Wikipedia, )",
  },
  {
    name: "ISKCON Temple Bangalore",
    description:
      "The ISKCON Temple Bangalore (International Society for Krishna Consciousness, Bengaluru, Karnataka, India) is a major spiritual and cultural landmark dedicated to Lord Krishna. Located on Hare Krishna Hill in Rajajinagar, it is one of the largest ISKCON temples in the world and a prominent pilgrimage site and tourist attraction in South India.The temple complex combines traditional South Indian temple architecture with modern design. Its grand gopuram (tower) and gold-plated kalashas are visible from afar. Inside, six main shrines are dedicated to various deities, with intricate carvings, murals, and ornamental arches. The spacious complex includes prayer halls, cultural spaces, and an amphitheater for devotional and educational programs.The temple was inaugurated in 1997 by the then-President of India, Dr. Shankar Dayal Sharma. It was conceptualized by Madhu Pandit Dasa, a civil engineer turned spiritual leader, who led the construction under the guidance of International Society for Krishna Consciousness (ISKCON). The project aimed to create a place for worship, community service, and spiritual education in Bengaluru.ISKCON Bangalore conducts daily rituals, bhajans (devotional songs), and festivals such as Janmashtami and Ratha Yatra on a large scale. It also manages the Akshaya Patra Foundation, a renowned mid-day meal initiative serving millions of children across India. The temple’s outreach emphasizes spiritual learning, vegetarianism, and community welfare.",
    images: [iskcon1,iskcon2,iskcon3],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Vidhana Soudha",
    description:
      "Vidhana Soudha is the seat of the state legislature of Karnataka, located in Bengaluru, India. An iconic landmark of the city, it exemplifies post-independence Indian architecture that blends Dravidian, Rajasthani, and Indo-Saracenic styles. The building symbolizes democratic governance and the authority of the Karnataka state government.Vidhana Soudha’s design integrates traditional South Indian temple motifs with modern elements, reflecting regional pride and national identity. Constructed mainly from granite, it features grand staircases, ornate pillars, and domed towers. The building’s central dome, crowned by the Indian national emblem, serves as a visual centerpiece overlooking the city’s main boulevard.The project was initiated by Kengal Hanumanthaiah, who envisioned a monumental structure to represent the power and dignity of independent India’s southern states. Built largely by local artisans and masons, it replaced the older Attara Kacheri as the primary government complex and became a symbol of self-reliant craftsmanship in the early 1950s.Vidhana Soudha accommodates the Karnataka Legislative Assembly and the Karnataka Legislative Council, alongside offices of key ministers and secretaries. It hosts state legislative sessions and ceremonial events such as the Governor’s address, making it the epicenter of Karnataka’s political activity.Beyond its administrative purpose, Vidhana Soudha is a major tourist attraction and civic landmark. Illuminated on Sundays and public holidays, it draws visitors for its grandeur and historical resonance. Its motto, “Government’s Work is God’s Work,” engraved on its façade, reflects the ethos of public service in democratic India. ",
    images: [Vidhan1,Vidhan2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Devanahalli Fort",
    description:
      "Devanahalli Fort is a historic fortification located in Devanahalli, near Bengaluru, India. Built in the early 16th century, the fort is best known as the birthplace of Tipu Sultan and as a significant site in the region’s military history. It stands as a preserved example of southern Indian defensive architecture. The fort’s origins trace to the early 1500s under a local chieftain of the Saluva dynasty. It was later occupied by several powers including the Wodeyars of Mysore, the Maratha Empire, and the British East India Company. Hyder Ali and Tipu Sultan fortified it in the 18th century, transforming it into a strong stone bastion.The fort is an oval-shaped structure covering approximately 20 acres, with twelve semi-circular bastions. It features massive walls of dressed masonry, surrounded by a wide moat. Two prominent entrances—one facing the east and another the west—are adorned with wooden doors reinforced by iron spikes. Inside the fort lie remnants of military quarters, temples, and residential structures reflecting typical Dravidian architectural motifs.Devanahalli Fort is a protected monument under the Archaeological Survey of India. It attracts visitors interested in Mysore’s military heritage and the life of Tipu Sultan, whose birthplace shrine (Khadri Manzil) is nearby. The fort’s preservation contributes to understanding pre-colonial fortification systems in southern India. ",
    images: [Deva1,Deva2],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Murdeshwara Temple",
    description:
      "Perched on the scenic Kanduka Hill and surrounded by the pristine waters of the Arabian Sea on three sides, the Murudeshwara Temple in Uttara Kannada, Karnataka, stands as a magnificent blend of deep spiritual devotion, ancient mythology, and breathtaking contemporary architecture. The historical and sacred origins of this pilgrimage site are deeply rooted in the epic Ramayana, revolving around the divine Atma-Linga (the soul-linga of Lord Shiva) that granted immortality. The demon king Ravana had won this ultimate prize through intense penance, but under the strict condition that it would permanently fix to the ground wherever it was placed. Fearing his unmatched power, Lord Ganesha tricked Ravana into handing over the linga at nearby Gokarna and promptly set it on the earth. In a fit of furious desperation, Ravana tried to violently uproot the fixed monument, shattering it into pieces; the cloth covering the Atma-Linga was flung through the air and landed right here on Kanduka Hill, instantly sanctifying the ground and transforming it into a powerful center of worship.While its mythological heritage has endured for centuries, the modern-day temple complex underwent a massive historical revival in the late 20th century under the visionary patronage of philanthropist R.N. Shetty, transforming it into a world-renowned architectural marvel. Today, the coastline is dominated by two spectacular structures: a monumental 20-storied Raja Gopura that stands at an imposing 237 feet, and a colossal, awe-inspiring Lord Shiva statue towering at 123 feet. As the world’s second-tallest Shiva statue, it is meticulously positioned to catch the sun's rays, making it shimmer brilliantly against the vast blue ocean backdrop. Visitors can take a modern lift inside the Raja Gopura to its top floor for a spellbinding, panoramic view of the entire complex. Beyond the grand outer structures and the peaceful inner sanctum where the main Mridesa Linga is worshipped, Murudeshwar has evolved into a multi-faceted tourism hub. Especially during the vibrant festival of Maha Shivaratri, the area fills with echoing chants and hundreds of thousands of devotees. Melding profound Vedic history, striking modern engineering, and coastal adventures like scuba diving at the nearby Netrani Island, Murudeshwar remains a deeply enriching sanctuary where spiritual peace seamlessly meets natural tranquility.  ",
    images: [Eshwar1,Eshwar2,Eshwar3,Eshwar4,Eshwar5],
    source: "(src: Wikipedia, )",
  },
  {
    name: "Yana Caves",
    description:
      "Nestled within the lush, evergreen forests of the Sahyadri mountain range in the Uttara Kannada district of Karnataka, Yana Caves stand as one of India’s most spectacular and mysterious natural wonders. Unlike typical underground caverns formed by the gradual erosion of rock, Yana is famous for its two colossal, pitch-black crystalline karst limestone monoliths that rise sharply above the dense jungle canopy. These towering rock formations are known as the Bhairaveshwara Shikhara, standing at an imposing height of 120 meters, and the smaller Mohini Shikhara, which reaches 90 meters. The stark, dark color of these jagged rocks creates a breathtaking contrast against the vibrant green of the surrounding Western Ghats, earning the site a well-deserved status as a Geoheritage Site of National Importance by the Geological Survey of India.Beyond their geological marvel, the Yana Caves hold deep spiritual and mythological significance. According to local folklore, the demon king Bhasmasura obtained a boon from Lord Shiva that allowed him to turn anyone into ashes by placing his hand on their head. When the demon attempted to test this power on Shiva himself, Lord Vishnu intervened by taking the form of Mohini, a beautiful dancer. She challenged Bhasmasura to match her dance moves, eventually tricking him into placing his hand on his own head, reducing him to ashes. The intense heat from this event is mythologically said to have turned the Yana rocks black. Today, a cave temple dedicated to Lord Bhairaveshwara (a manifestation of Shiva) rests at the base of the main monolith, where a natural spring continuously drips water over a self-manifested lingam, attracting thousands of pilgrims during Shivaratri.For adventure enthusiasts and nature lovers, reaching the caves is an experience in itself. Visitors embark on a scenic, half-kilometer trek through a dense forest trail filled with the sounds of gurgling streams and chirping birds. The area is also recognized as one of the wettest and cleanest regions in Karnataka, offering a pristine getaway from urban chaos. Often paired with a visit to the nearby Vibhooti Waterfalls, Yana Caves offer a perfect blend of geological curiosity, spiritual tranquility, and raw natural beauty, making it an indispensable destination for trekkers and explorers alike. ",
    images: [Yana1,Yana2,Yana3],
    source: "(src: Wikipedia, )",
  },
   {
    name: "Mahabaleshwar Temple",
    description:
      "The Mahabaleshwar Temple in Gokarna is an ancient, highly revered Hindu pilgrimage site dedicated to Lord Shiva, uniquely positioned facing the serene Gokarna beach along the Arabian Sea in the Uttara Kannada district of Karnataka. Steeped in rich mythology, the temple's history is inextricably linked to the Treta Yuga and the demon king Ravana. According to legend, Ravana performed intense penance to please Lord Shiva and was rewarded with the Atmalinga (the soul linga), granted on the condition that it would bestow ultimate power wherever it was permanently placed on Earth. Fearing the consequences, the deities conspired with Lord Ganesha, who tricked Ravana into placing the linga down on the ground at Gokarna. Realizing he had been deceived, an infuriated Ravana tried to pull the linga back out with immense force, fracturing it in the process and shaping it like a cow's ear (giving the town its name, Gokarna). Unable to budge it, he declared the linga to be Mahabaleshwar—meaning 'the all-powerful one.' Historically, the shrine's antiquity is well-documented, with the core structure dating back to a 4th-century CE construction initiated by Mayurasharma of the Kadamba dynasty. Over the centuries, its historical prominence attracted grand figures; the legendary Maratha warrior king Shivaji famously visited the temple in 1665 to offer prayers after disbanding his army, and the English traveler John Fryer meticulously documented the vibrant Maha Shivaratri celebrations here in 1676.Architecturally, the temple stands as a magnificent testament to the classical Dravidian architectural style, built primarily out of robust granite. The complex features a massive, ornately carved Gopuram (entrance tower) that welcomes devotees into its deeply spiritual, stone-carved interiors. At the absolute heart of the temple lies the Garbagriha (sanctum sanctorum), which houses the sacred, self-manifested Atmalinga. Instead of a towering stone structure above ground, the actual linga is embedded deep within a subterranean pit, and devotees can only catch a glimpse of the top crest of the sacred stone through a small hole in a circular, golden-plated Yoni pedestal. The surrounding structure includes intricately sculpted pillars, a traditional Mantapa (hall) designed for rituals, and a beautifully carved stone image of Lord Shiva’s bull, Nandi, positioned facing the main deity. Recognized as one of the seven holy Muktishetras (places of salvation) in Karnataka, the temple seamlessly bridges mythological grandeur with timeless Dravidian craftsmanship, offering an atmosphere of profound mysticism where the rhythmic sound of crashing ocean waves blends with the continuous chanting of Vedic hymns. ",
    images: [Gokarna1,Gokarna2,Gokarna3],
    source: "(src: Wikipedia, )",
  },
];

const facts = [
 "The Tricolour’s True Home: The Karnataka Khadi Gramodyoga Samyukta Sangha in Hubli is the only unit in the entire country authorized by the government to manufacture and supply the official national flag of India.",
"Hampi was once one of the richest cities in the world during the Vijayanagara Empire.",  "Karnataka has 3 UNESCO World Heritage Sites – Hampi, Pattadakal, and the Western Ghats.",  
"Karnataka produces about 70% of India’s coffee, especially from regions like Coorg and Chikkamagaluru.",  
"Bengaluru is known as the “Silicon Valley of India” because it is a major IT and startup hub.",  
"Indian Space Research Organisation (ISRO), India’s space agency headquarters, is located in Bengaluru.",  
"Karnataka is the only state in India with a gold mine, the famous Kolar Gold Fields.",  
"Yakshagana performances often continue throughout the night with music, dance, and dialogue.",  
"Mysore Dasara is celebrated with grand processions, decorated elephants, and cultural events.",  "Jog Falls is one of the highest plunge waterfalls in India." , 
"Shravanabelagola has one of the world’s tallest monolithic statues, dedicated to Bahubali.", "Karnataka is strongly associated with Carnatic classical music, and many famous composers came from the state.",  
"The Western Ghats in Karnataka are among the world’s richest biodiversity regions." , 
"Mysore Palace is illuminated with nearly 100,000 lights during Dasara celebrations.",  
"Karnataka has the highest number of engineering colleges in India, especially around Bengaluru.",  "Karnataka has the largest tiger population in India according to recent tiger census reports", 
];

 const artGallery = [
  {
    title: "Mysore Pak",
    emoji: "🟨",
    color: "#F4D870",
    desc: "A rich, golden sweet made of chickpea flour, ghee, and sugar, originating from the royal Mysore Palace kitchen",
    image: gMysorePak,
  },
  {
    title: "Dharwad Pedha",
    emoji: "🧆",
    color: "#D4884A",
    desc: "A legendary, rich caramelized milk sweet with a unique grainy texture from Dharwad, dusted with fine sugar",
    image: gDharwadPedha,
  },
  {
    title: "Maddur Vada",
    emoji: "🍘",
    color: "#F4A84A",
    desc: "An iconic, crispy, and savory fried fritter packed with sliced onions, semolina, and spices from Maddur town",
    image: gMaddurVada,
  },
  {
    title: "Channapatna Toys",
    emoji: "🧸",
    color: "#E8733A",
    desc: "Traditional, colorful wooden toys and dolls lacquer-crafted using ivory wood and organic vegetable dyes",
    image: gChannapatnaToys,
  },
  {
    title: "Bidriware",
    emoji: "🏺",
    color: "#303030",
    desc: "An ancient, exquisite metal handicraft from Bidar, featuring intricate silver inlay work against a dark blackened soil surface",
    image: gBidriware,
  },
  {
    title: "Mysore Silk Saree",
    emoji: "🥻",
    color: "#D4A4E8",
    desc: "A luxurious, smooth handloom silk saree woven with 100% pure gold zari threads, reflecting royal heritage",
    image: gMysoreSilk,
  },
  {
    title: "Ilkal Saree",
    emoji: "🧣",
    color: "#C84830",
    desc: "Traditional handloom saree from northern Karnataka, distinguished by its red silk border and striking geometric pallu",
    image: gIlkalSaree,
  },
  {
    title: "Kasuti Embroidery",
    emoji: "🪡",
    color: "#E8A8C8",
    desc: "An ancient, highly complex form of traditional hand embroidery where intricate geometric patterns are stitched without any knots",
    image: gKasuti,
  },
  {
    title: "Mysore Rosewood Inlay",
    emoji: "🪟",
    color: "#D4883A",
    desc: "Exquisite craftsmanship where detailed multi-colored wood pieces are seamlessly inlaid into rosewood structures",
    image: gRosewoodInlay,
  },
  {
    title: "Ganjifa Cards of Mysore",
    emoji: "🃏",
    color: "#F8C840",
    desc: "Ancient, hand-painted circular playing cards featuring intricate, traditional depictions of mythological characters and deities",
    image: gGanjifaCards,
  },
  {
    title: "Navalgund Durries",
    emoji: "🎚️",
    color: "#A8C878",
    desc: "Beautifully woven, vibrant geometric cotton floor mats handcrafted exclusively by women weavers in Navalgund",
    image: gNavalgundDurries,
  },
  {
    title: "Yakshagana",
    emoji: "🎭",
    color: "#E88844",
    desc: "A spectacular, traditional theatre form combining heavy elaborate makeup, vibrant costumes, thunderous dance, and dialogue",
    image: gYakshagana,
  },
  {
    title: "Dollu Kunitha",
    emoji: "🥁",
    color: "#F4B830",
    desc: "A powerful, high-energy folk group dance performed to the roaring synchronized rhythms of large decorated drums",
    image: gDolluKunitha,
  },
  {
    title: "Bisi Bele Bath",
    emoji: "🍛",
    color: "#D4A864",
    desc: "A wholesome, spicy comforting meal combining rice, lentils, assorted vegetables, and a unique aromatic spice blend",
    image: gBisiBeleBath,
  },
  {
    title: "Mysore Masala Dosa",
    emoji: "🥞",
    color: "#F4E8C8",
    desc: "Crispy golden crepe lined with a distinct, fiery red garlic-chili chutney and filled with a spiced potato mash",
    image: gMysoreDosa,
  },
  {
    title: "Mangalorean Neer Dosa",
    emoji: "🍽️",
    color: "#E8F4F8",
    desc: "Super soft, light, and lacy paper-thin crepes prepared from a delicate, completely smooth, unfermented rice batter",
    image: gNeerDosa,
  },
  {
    title: "Ragi Mudde",
    emoji: "🧆",
    color: "#B4A090",
    desc: "Nutritious, steamed finger millet balls served as a primary staple with traditional spicy sambar or saaru",
    image: gRagiMudde,
  },
  {
    title: "Udupi Idli",
    emoji: "🥣",
    color: "#F8F0C4",
    desc: "Incredibly soft, fluffy steamed rice cakes made from fermented urad dal and rice batter, a timeless coastal breakfast staple",
    image: gUdupiIdli,
  },
  {
    title: "Obbattu / Holige",
    emoji: "🥞",
    color: "#F4D89C",
    desc: "A sweet, thin flatbread stuffed with a delectable mixture of lentils or grated coconut mixed with jaggery and cardamom",
    image: gObbattu,
  },
  {
    title: "Mysore Sandal Soap & Oil",
    emoji: "🧼",
    color: "#A8D4B4",
    desc: "World-famous manufactured natural soap and aromatic oil formulated directly with pure natural sandalwood extract",
    image: gSandalSoap,
  },
  {
    title: "Mysore Peta",
    emoji: "👑",
    color: "#E8B488",
    desc: "A magnificent, colorful silk turban heavily embellished with golden lace, historically worn by the erstwhile kings of Mysore",
    image: gMysorePeta,
  },
  {
    title: "Togalu Gombeyaata",
    emoji: "👥",
    color: "#D4A4E8",
    desc: "A traditional shadow puppet theater art using vibrant leather puppets to cast story-driven shadows onto a screen[cite: 2074].",
    image: gTogaluGombeyaata,
  },
  {
    title: "Veeragase",
    emoji: "🗡️",
    color: "#C84830",
    desc: "An intense and vigorous custom folk dance based on Hindu mythology, showcasing energetic movements and striking attire.",
    image: gVeeragase,
  },
  {
    title: "Kamsale",
    emoji: "🎵",
    color: "#F4A84A",
    desc: "A rhythmic and energetic folk art performed by male singers using a unique brass musical instrument called the Kamsale.",
    image: gKamsale,
  },
  {
    title: "Mridangam",
    emoji: "🪘",
    color: "#D4883A",
    desc: "A double-sided percussion drum that serves as the primary rhythmic accompaniment in classical Carnatic music concerts[cite: 134].",
    image: gMridangam,
  },
  {
    title: "Tamburi",
    emoji: "🪕",
    color: "#F8C840",
    desc: "A traditional long-necked, stringed drone instrument used by folk and devotional singers to maintain a steady musical pitch[cite: 134].",
    image: gTamburi,
  },
  {
    title: "Nadaswaram",
    emoji: "🎺",
    color: "#E8733A",
    desc: "A large, powerful wooden wind instrument that produces loud, auspicious music during temple festivals and weddings[cite: 135].",
    image: gNadaswaram,
  },
];