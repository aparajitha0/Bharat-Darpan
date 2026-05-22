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

/* ─── Image imports — uncomment & fill paths after uploading ─────────────
 *
 * MAP
 * import upMap from "@assets/...";
 *
 * FESTIVALS
 * Kumbh Mela          : import kumbh1 from "@assets/..."; import kumbh2 from "@assets/..."; import kumbh3 from "@assets/..."; import kumbh4 from "@assets/..."; import kumbh5 from "@assets/...";
 * Diwali UP           : import diwaliUp1 from "@assets/..."; import diwaliUp2 from "@assets/..."; import diwaliUp3 from "@assets/..."; import diwaliUp4 from "@assets/..."; import diwaliUp5 from "@assets/...";
 * Holi Braj           : import holiBraj1 from "@assets/..."; import holiBraj2 from "@assets/..."; import holiBraj3 from "@assets/..."; import holiBraj4 from "@assets/..."; import holiBraj5 from "@assets/...";
 * Ram Navami          : import ramNavami1 from "@assets/..."; import ramNavami2 from "@assets/..."; import ramNavami3 from "@assets/..."; import ramNavami4 from "@assets/..."; import ramNavami5 from "@assets/...";
 * Eid Lucknow         : import eidLko1 from "@assets/..."; import eidLko2 from "@assets/..."; import eidLko3 from "@assets/..."; import eidLko4 from "@assets/...";
 * Buddha Purnima      : import buddhaPurnima1 from "@assets/..."; import buddhaPurnima2 from "@assets/..."; import buddhaPurnima3 from "@assets/..."; import buddhaPurnima4 from "@assets/..."; import buddhaPurnima5 from "@assets/...";
 * Lucknow Mahotsav    : import lkoMahotsav1 from "@assets/..."; import lkoMahotsav2 from "@assets/..."; import lkoMahotsav3 from "@assets/..."; import lkoMahotsav4 from "@assets/..."; import lkoMahotsav5 from "@assets/...";
 * Kajari              : import kajari1 from "@assets/..."; import kajari2 from "@assets/..."; import kajari3 from "@assets/..."; import kajari4 from "@assets/..."; import kajari5 from "@assets/...";
 * Local Fairs         : import localFairs1 from "@assets/..."; import localFairs2 from "@assets/..."; import localFairs3 from "@assets/..."; import localFairs4 from "@assets/..."; import localFairs5 from "@assets/...";
 *
 * HISTORICAL PLACES
 * Taj Mahal           : import tajMahal1 from "@assets/..."; import tajMahal2 from "@assets/..."; import tajMahal3 from "@assets/..."; import tajMahal4 from "@assets/..."; import tajMahal5 from "@assets/...";
 * Agra Fort           : import agraFort1 from "@assets/..."; import agraFort2 from "@assets/..."; import agraFort3 from "@assets/..."; import agraFort4 from "@assets/..."; import agraFort5 from "@assets/...";
 * Fatehpur Sikri      : import fatehpur1 from "@assets/..."; import fatehpur2 from "@assets/..."; import fatehpur3 from "@assets/..."; import fatehpur4 from "@assets/..."; import fatehpur5 from "@assets/...";
 * Buland Darwaza      : import buland1 from "@assets/..."; import buland2 from "@assets/..."; import buland3 from "@assets/..."; import buland4 from "@assets/..."; import buland5 from "@assets/...";
 * Ram Mandir          : import ramMandir1 from "@assets/..."; import ramMandir2 from "@assets/..."; import ramMandir3 from "@assets/..."; import ramMandir4 from "@assets/..."; import ramMandir5 from "@assets/...";
 * Kashi Vishwanath    : import kashiVishwa1 from "@assets/..."; import kashiVishwa2 from "@assets/..."; import kashiVishwa3 from "@assets/..."; import kashiVishwa4 from "@assets/..."; import kashiVishwa5 from "@assets/...";
 * Manikarnika Ghat    : import manikarnika1 from "@assets/..."; import manikarnika2 from "@assets/..."; import manikarnika3 from "@assets/..."; import manikarnika4 from "@assets/..."; import manikarnika5 from "@assets/...";
 * Ganga Aarti         : import gangaAarti1 from "@assets/..."; import gangaAarti2 from "@assets/..."; import gangaAarti3 from "@assets/..."; import gangaAarti4 from "@assets/..."; import gangaAarti5 from "@assets/...";
 * Sarnath             : import sarnath1 from "@assets/..."; import sarnath2 from "@assets/..."; import sarnath3 from "@assets/..."; import sarnath4 from "@assets/..."; import sarnath5 from "@assets/...";
 * Prem Mandir         : import premMandir1 from "@assets/..."; import premMandir2 from "@assets/..."; import premMandir3 from "@assets/..."; import premMandir4 from "@assets/..."; import premMandir5 from "@assets/...";
 * Banke Bihari        : import bankeBihari1 from "@assets/..."; import bankeBihari2 from "@assets/..."; import bankeBihari3 from "@assets/..."; import bankeBihari4 from "@assets/..."; import bankeBihari5 from "@assets/...";
 * Dwarkadhish         : import dwarkadhish1 from "@assets/..."; import dwarkadhish2 from "@assets/..."; import dwarkadhish3 from "@assets/..."; import dwarkadhish4 from "@assets/..."; import dwarkadhish5 from "@assets/...";
 * Jhansi Fort         : import jhansiFort1 from "@assets/..."; import jhansiFort2 from "@assets/..."; import jhansiFort3 from "@assets/..."; import jhansiFort4 from "@assets/..."; import jhansiFort5 from "@assets/...";
 * Lko Heritage        : import lkoHeritage1 from "@assets/..."; import lkoHeritage2 from "@assets/..."; import lkoHeritage3 from "@assets/..."; import lkoHeritage4 from "@assets/..."; import lkoHeritage5 from "@assets/...";
 *   Bara Imambara     : import baraImambara1 from "@assets/..."; import baraImambara2 from "@assets/..."; import baraImambara3 from "@assets/..."; import baraImambara4 from "@assets/..."; import baraImambara5 from "@assets/...";
 *   Chhota Imambara   : import chhataImambara1 from "@assets/..."; import chhataImambara2 from "@assets/..."; import chhataImambara3 from "@assets/..."; import chhataImambara4 from "@assets/..."; import chhataImambara5 from "@assets/...";
 *   Allahabad Fort    : import allahabadFort1 from "@assets/..."; import allahabadFort2 from "@assets/..."; import allahabadFort3 from "@assets/..."; import allahabadFort4 from "@assets/..."; import allahabadFort5 from "@assets/...";
 *   Chunar Fort       : import chunarFort1 from "@assets/..."; import chunarFort2 from "@assets/..."; import chunarFort3 from "@assets/..."; import chunarFort4 from "@assets/..."; import chunarFort5 from "@assets/...";
 *   Sankat Mochan     : import sankatMochan1 from "@assets/..."; import sankatMochan2 from "@assets/..."; import sankatMochan3 from "@assets/..."; import sankatMochan4 from "@assets/...";
 *
 * ART GALLERY (1 image each)
 * import gTundayKababi from "@assets/...";
 * import gGalouti from "@assets/...";
 * import gBedmiPoori from "@assets/...";
 * import gBanarasiPaan from "@assets/...";
 * import gMathuraPeda from "@assets/...";
 * import gAgraPetha from "@assets/...";
 * import gUPChaat from "@assets/...";
 * import gNihari from "@assets/...";
 * import gLittiChokha from "@assets/...";
 * import gGujiya from "@assets/...";
 * import gKathak from "@assets/...";
 * import gRaslila from "@assets/...";
 * import gCharkula from "@assets/...";
 * import gNautanki from "@assets/...";
 * import gKajriDance from "@assets/...";
 * import gChikankari from "@assets/...";
 * import gZardozi from "@assets/...";
 * import gMoradabadBrass from "@assets/...";
 * import gKumbhMela from "@assets/...";
 * import gGangaAartiArt from "@assets/...";
 * ─────────────────────────────────────────────────────────────────────── */

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

/* ─── Map placeholder ────────────────────────────────────────────────────── */
function MapPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border-2 border-border bg-muted/30 flex flex-col items-center justify-center py-16 gap-3">
      <div className="text-5xl opacity-40">🗺️</div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">Upload map image and replace this placeholder</p>
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

/* ─── Image grid ─────────────────────────────────────────────────────────── */
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
  images,
  onImageClick,
}: {
  number: number;
  name: string;
  tagline?: string;
  description: string;
  source?: string;
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
        {source && (
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
  images,
  subPlaces,
  onImageClick,
}: {
  number: number;
  name: string;
  description: string;
  source?: string;
  images?: string[];
  onImageClick: (src: string, alt: string) => void;
  subPlaces?: {
    name: string;
    location?: string;
    description: string;
    source?: string;
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
        {source && (
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
                {sub.source && (
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

/* ─── Data ───────────────────────────────────────────────────────────────── */
const festivals = [
  {
    name: "Kumbh Mela (Prayagraj)",
    tagline: "The world's largest religious gathering",
    description:
      "Kumbh Mela in Prayagraj is one of the world's largest religious gatherings, rooted in Hindu mythology and the sacred importance of river confluences. It is closely linked to the Triveni Sangam, where the Ganga and Yamuna meet, and where tradition also speaks of the invisible Saraswati. The festival's timing follows religious calendars and astrological calculations, shaping the rhythm of major bathing days. At its heart is the belief that ritual bathing during auspicious moments purifies and renews spiritual life. Large pilgrim flows transform Prayagraj into a temporary mega-city with tent settlements, bridges, medical camps, sanitation systems, and security planning. Akhadas and sadhus represent diverse monastic lineages, and their processions become visually iconic cultural events. Pilgrims participate in a mix of bathing, prayer, charity, storytelling, and listening to spiritual discourses. The Kumbh functions as a cultural archive where traditions are performed and renewed in a public, collective form. It also serves as an economic event, supporting local vendors, artisans, transport services, and hospitality networks. Cultural performances, folk arts, and devotional singing add to the festival's atmosphere beyond bathing rituals. The mela ground becomes a space where social diversity is visible — multiple languages, regions, and traditions converge. Prayagraj's identity as a pilgrimage city is deeply shaped by the recurring Kumbh cycle, anchoring its sacred geography in global consciousness.",
    images: [],
    source: "",
  },
  {
    name: "Diwali (UP traditions)",
    tagline: "Festival of lights — victory of good over evil",
    description:
      "Diwali in Uttar Pradesh is celebrated as a festival of lights that symbolizes the victory of good over evil and the return of auspiciousness to homes and communities. In many UP traditions, Diwali is linked to the return of Lord Ram to Ayodhya, giving the festival a special emotional and cultural significance in the state. Homes are cleaned and decorated with rangoli, diyas, and flower garlands, reflecting ideas of renewal, prosperity, and spiritual readiness. Lakshmi–Ganesh puja is central, with families offering sweets, incense, and lamps while seeking blessings for wealth and well-being. Ayodhya's Diwali celebrations are especially prominent, often featuring large-scale lamp-lighting events along the riverfront. In urban centres like Lucknow and Varanasi, markets become vibrant with lights, seasonal crafts, and festive food. Traditional snacks and sweets — gujiya, laddoos, mathri, and namkeen — play a major role in the festive atmosphere. Temple spaces organize special aartis, devotional music, and collective worship, linking household celebration to public religion. Rural areas often celebrate with community-level lighting, fairs, and performances, creating a shared public festival space. Diwali also marks an important moment for business communities to begin new account books and rituals of prosperity.",
    images: [],
    source: "",
  },
  {
    name: "Holi (Mathura & Vrindavan)",
    tagline: "The most vibrant Holi in India — rooted in Krishna's Braj",
    description:
      "Holi in Mathura and Vrindavan is internationally famous for its connection to Krishna's playful legends and the Braj region's deep bhakti culture. Celebrations often begin days in advance with temple events, devotional singing, and community gatherings across towns and villages. Colors (gulal), water, and music become tools of social bonding, allowing people to meet beyond ordinary boundaries and share joy. In Vrindavan and Barsana, distinctive traditions such as Lathmar Holi reflect local narratives and community performance styles. Temples like Banke Bihari and Dwarkadhish become central stages where rituals blend with public celebration. The festival expresses themes of spring renewal, love, and the playful divine, closely aligned with Krishna-centred devotion. Local folk songs, dhol rhythms, and kirtans create a soundscape that defines the festival's mood. Sweets and snacks — thandai, gujiya, malpua — are widely shared, adding culinary richness to the celebration. Ritual practices often include Holika Dahan, symbolizing the victory of devotion and righteousness over arrogance and harm. Holi's association with Krishna stories makes UP's Braj region a national centre of Holi pilgrimage.",
    images: [],
    source: "",
  },
  {
    name: "Ram Navami (Ayodhya)",
    tagline: "Birth of Lord Ram — Ayodhya's most sacred festival",
    description:
      "Ram Navami in Ayodhya commemorates the birth of Lord Ram and is one of the most important festivals in the city's sacred calendar. The festival is closely tied to Ramayana traditions and the belief that Ayodhya is Ram's birthplace, giving celebrations a uniquely powerful local meaning. Temples organize special aartis, bhajans, and recitations of Ramcharitmanas, creating a devotional atmosphere across the city. Processions and public events often highlight Ram, Sita, Lakshman, and Hanuman narratives through music, symbols, and community participation. Fasting and ritual discipline are common, with many devotees observing vrat and offering prasad after worship. The Sarayu riverfront becomes especially active as pilgrims bathe, pray, and participate in collective rituals. Ayodhya's streets and ghats are decorated, and markets offer flowers, sweets, and devotional items for worship. Cultural performances and storytelling sessions help transmit Ramayana narratives to younger generations. The festival reinforces UP's devotional culture and strengthens the connection between sacred geography and public life. Devotional music — kirtans, dhol, and chanting — forms a continuous soundscape during the festival period.",
    images: [],
    source: "",
  },
  {
    name: "Eid (Lucknow)",
    tagline: "Nawabi elegance meets community celebration",
    description:
      "Eid in Lucknow reflects the city's rich Indo-Islamic heritage, Urdu cultural traditions, and the everyday elegance for which Lucknow is famous. Celebrations typically begin with special prayers at Eidgahs and mosques, followed by greetings, charitable giving, and shared meals. The festival emphasizes community bonds, forgiveness, and gratitude, with families visiting relatives and neighbors throughout the day. Lucknow's bazaars become especially lively, with shopping for clothes, perfumes, bangles, and festive foods. Food traditions are central: biryani, kebabs, nihari, and sweet dishes are prepared for guests and family gatherings. The city's composite culture becomes visible as friends across communities exchange greetings and participate in festive hospitality. Eid also highlights the importance of charity (zakat/fitr), reinforcing social responsibility as a key spiritual value. Historic areas near old Lucknow connect Eid celebrations to heritage streets and Nawabi-era cultural memory. The festival supports local artisans — tailors, perfumers (ittar makers), and sweet shops — who see peak demand. Eid's cultural significance includes the continuation of Urdu poetry gatherings and social etiquette traditions, reinforcing Lucknow's identity as a centre of refined hospitality.",
    images: [],
    source: "",
  },
  {
    name: "Buddha Purnima (Sarnath)",
    tagline: "Commemorating the first sermon of the Buddha",
    description:
      "Buddha Purnima in and around Sarnath commemorates the Buddha's birth, enlightenment, and parinirvana, making it a deeply significant festival for Buddhists. Sarnath's sacred identity as the site of the first sermon intensifies the festival's meaning, attracting pilgrims and monks from India and abroad. Ceremonies often include prayers, chanting, offerings of flowers, and meditative practices in temples and near stupas. The festival emphasizes compassion, non-violence, and mindful living, reflecting core Buddhist teachings. Processions, lamp-lighting, and community gatherings create a calm and reflective festival atmosphere. Sarnath's international temples contribute diverse cultural expressions — chants and rituals in multiple languages and styles. The archaeological landscape becomes a backdrop for living faith, connecting ancient ruins to modern practice. The festival links UP to the broader Buddhist circuit, strengthening heritage tourism and cultural diplomacy. For pilgrims, it is a time to renew vows, practice meditation, and reconnect with the Buddha's teachings in the very place they were first delivered.",
    images: [],
    source: "",
  },
  {
    name: "Lucknow Mahotsav",
    tagline: "A heritage carnival celebrating Nawabi culture and craft",
    description:
      "Lucknow Mahotsav is a cultural festival that celebrates the city's heritage through music, dance, crafts, and culinary showcases. It reflects Lucknow's identity as a centre of refined arts, Urdu culture, and Nawabi-era aesthetics. Performances often include classical music, ghazals, folk dances, and contemporary acts that attract diverse audiences. Craft bazaars highlight chikankari, zardozi, pottery, jewelry, and regional handicrafts, supporting artisans and cultural livelihoods. Food stalls present Lucknow's famous cuisine — kebabs, biryanis, and sweets — turning the festival into a public culinary destination. The festival functions as an urban cultural marketplace where heritage is presented in accessible, celebratory forms. Visitors experience a blend of entertainment and cultural education through exhibitions and curated heritage displays. Community participation is strong, and families often attend as a leisure activity that builds civic pride. The event provides a platform for artists, craftspeople, and performers to reach wider audiences. Cultural narration often emphasizes the 'tehzeeb' (etiquette) of Lucknow and its composite cultural history.",
    images: [],
    source: "",
  },
  {
    name: "Kajari Festival (Eastern UP / Bhojpuri belt)",
    tagline: "Monsoon folk songs of longing and rural life",
    description:
      "Kajari is a monsoon-linked folk tradition of Eastern UP, expressed through songs (kajri) that celebrate rain, love, longing, and rural life. The festival season often aligns with agricultural rhythms, when the arrival of rain brings relief and renewal to fields and communities. Kajri songs are performed by women and community groups, using call-and-response styles and local poetic imagery. The tradition showcases Bhojpuri and related dialect cultures, preserving oral literature and folk music heritage. Rituals may include swings (jhoolas), community gatherings, and singing sessions that animate village courtyards. The songs often contain emotional themes — separation, devotion, and seasonal beauty — making them culturally rich narratives. Kajari is also linked to temples and fairs in some regions, blending folk culture with devotional practice. As a cultural practice, Kajari strengthens social bonds and women's cultural expression within community spaces. The tradition also connects to classical adaptations, as some kajri forms entered semi-classical music repertoires. Kajari reflects the deep relationship between climate, agriculture, and cultural creativity in the Gangetic plain.",
    images: [],
    source: "",
  },
  {
    name: "Other Local Fairs & Traditions",
    tagline: "Dev Deepawali, Ramlila, Magh Mela and more",
    description:
      "UP's cultural calendar includes countless local fairs (melas) tied to temples, river ghats, seasonal agriculture, and Sufi shrines. The Magh Mela in Prayagraj is a major annual riverfront gathering that continues beyond Kumbh cycles. Dev Deepawali in Varanasi (Kartika Purnima) lights up ghats with lamps, blending ritual devotion with spectacular riverfront aesthetics. Ramlila performances in many districts enact Ramayana narratives through community theater, costume, and music. Sufi urs celebrations at shrines showcase qawwali traditions and shared cultural participation. Rural cattle fairs and seasonal markets reflect agrarian life and regional economies. Temple fairs in the Braj region link with Krishna legends, combining devotion with folk games, songs, and food stalls. Wedding-season customs, folk songs, and ritual arts differ across Awadh, Bhojpuri, Braj, and Bundelkhand regions. Local wrestling (kushti) traditions in akharas remain an important cultural sport in many towns. Traditional storytelling forms — katha, bhajan mandalis, and folk dramas — maintain cultural transmission across generations.",
    images: [],
    source: "",
  },
];

const historicalPlaces = [
  {
    name: "Taj Mahal, Agra (UNESCO World Heritage Site)",
    description:
      "The Taj Mahal in Agra is a UNESCO World Heritage monument and one of the world's most recognized buildings, commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal. Built in white marble, it is celebrated for symmetrical design, refined proportions, and an atmosphere of serenity created by geometry, water channels, and gardens. Its central dome, flanking minarets, and balanced iwans reflect Indo-Islamic and Persian influences blended into a uniquely Mughal synthesis. The craftsmanship includes detailed pietra dura inlay work, calligraphic panels, and carved marble screens of exceptional precision. The surrounding complex — with mosque, guest house, and formal garden — creates a planned sacred landscape that reinforces the monument's spiritual and aesthetic intent. The Taj is one of the Seven Wonders of the World and the most visited monument in India.",
    images: [],
    source: "",
  },
  {
    name: "Agra Fort (UNESCO World Heritage Site)",
    description:
      "Agra Fort is a UNESCO World Heritage site that served as a major Mughal imperial fortress-palace, combining military strength with refined court architecture. Constructed largely in red sandstone, it encloses palaces, audience halls, courtyards, and mosques within massive walls overlooking the Yamuna. Its layered construction reflects multiple Mughal reigns, with additions and renovations that reveal evolving tastes and political needs. Key structures such as Jahangiri Mahal and Khas Mahal display the blending of Hindu and Islamic architectural motifs. The fort's strategic position overlooking the Yamuna also offers views toward the Taj Mahal, creating a visual dialogue between the two great Mughal monuments of Agra.",
    images: [],
    source: "",
  },
  {
    name: "Fatehpur Sikri (UNESCO World Heritage Site)",
    description:
      "Fatehpur Sikri is a UNESCO World Heritage site built by Emperor Akbar as a planned capital, representing a bold experiment in imperial urban design. Its palaces, courtyards, and ceremonial halls reveal Akbar's architectural imagination and his interest in integrating diverse artistic traditions. Constructed predominantly in red sandstone, the city displays intricate carving, bracketed pillars, and airy courtyards shaped for courtly life. The Diwan-i-Khas is especially famous for its central pillar that fans out into a bracket platform, a unique spatial invention. Though occupied for only about 14 years, the city remains one of the best-preserved examples of Mughal urban planning and stands as a testament to Akbar's syncretic vision.",
    images: [],
    source: "",
  },
  {
    name: "Buland Darwaza, Fatehpur Sikri",
    description:
      "Buland Darwaza, the 'Gate of Magnificence,' is the monumental entrance to the Jama Masjid complex at Fatehpur Sikri and is among the grandest gateways in Indo-Islamic architecture. Commissioned by Akbar to commemorate victory, it functions as both a political statement and a ceremonial threshold. Its towering scale and steep steps create a powerful sense of ascent, guiding visitors into a sacred space through architectural drama. The gateway's red sandstone and marble inlay, calligraphic inscriptions, and arched niches exemplify Mughal decorative arts at their most assured. At approximately 54 metres high, it remains one of the tallest gateways in India.",
    images: [],
    source: "",
  },
  {
    name: "Ayodhya Ram Mandir",
    description:
      "Ayodhya's Ram Mandir is a major contemporary temple complex associated with the sacred geography of the Ramayana tradition and the city's identity as Ram's birthplace in devotional belief. The site carries deep cultural resonance for many Hindus, shaping pilgrimage patterns, festivals, and religious narratives across North India. Architecturally, the new temple draws on classical Nagara-style temple elements, emphasizing carved stone, mandapas, and a layered shikhara silhouette that references ancient temple-building traditions. The temple complex is set within a larger spiritual precinct that includes ghats, shrines, and landscaped grounds along the Sarayu. The consecration of the temple in January 2024 drew global attention and marks a new era in Ayodhya's pilgrimage infrastructure.",
    images: [],
    source: "",
  },
  {
    name: "Kashi Vishwanath Temple, Varanasi",
    description:
      "Kashi Vishwanath Temple in Varanasi is one of Hinduism's most important Shiva temples, embedded in the city regarded as a timeless spiritual centre on the Ganga. The temple's significance arises from the belief that worship here connects devotees to liberation traditions and the sacred identity of Kashi. Its architectural form has evolved through history due to reconstructions, patronage, and changing urban contexts in Varanasi's dense old city. The temple complex functions within the broader Vishwanath Corridor, a recent development project that expanded public access, improved pilgrimage infrastructure, and opened new vistas connecting the temple to the Ganga ghats. Daily rituals, aartis, and the constant presence of devotees make the temple a living centre of Hindu worship.",
    images: [],
    source: "",
  },
  {
    name: "Manikarnika Ghat, Varanasi",
    description:
      "Manikarnika Ghat is among Varanasi's most sacred riverfront sites, widely known as a primary cremation ghat where Hindu funerary rites are performed. Its cultural importance is rooted in beliefs about moksha and the spiritual power of dying or being cremated in Kashi. The ghat's stepped architecture and continuous activity make it a profound example of living ritual space on the Ganga. Unlike purely monumental sites, Manikarnika is defined by ongoing rites, priestly roles, and the daily presence of mourners who maintain the fire said to burn continuously. Photography etiquette requires deep respect; the site is a place of genuine grief and ritual, not a spectacle. For visitors, it offers an encounter with the most intimate dimensions of life, death, and the river's sacred role in Hindu cosmology.",
    images: [],
    source: "",
  },
  {
    name: "Ganga Aarti — Dashashwamedh Ghat, Varanasi",
    description:
      "The Ganga Aarti in Varanasi, most famously performed at Dashashwamedh Ghat, is a daily ritual that blends devotion, choreography, and collective participation on the riverfront. Priests perform synchronized movements with lamps, incense, and conch shells, creating a dramatic spiritual spectacle framed by the river and stepped ghats. The ritual expresses gratitude and reverence to the Ganga as a goddess and life-giving presence in Hindu cosmology. The soundscape — chants, bells, drums, and the murmur of the crowd — creates a multisensory immersive experience unique to Varanasi. Thousands gather on ghats and in boats each evening, making the aarti both a devotional act and a defining cultural performance of the city. It is considered one of the most photographed and spiritually moving events in India.",
    images: [],
    source: "",
  },
  {
    name: "Sarnath (Dhamek Stupa & Buddhist Heritage)",
    description:
      "Sarnath, near Varanasi, is one of Buddhism's holiest sites, associated with the Buddha's first sermon after enlightenment, making it central to Buddhist pilgrimage. The archaeological landscape includes stupas, monasteries, and museums that preserve centuries of Buddhist art and monastic life. The Dhamek Stupa stands as a powerful architectural symbol, reflecting ancient stupa traditions that mark sacred memory through monumental form. Sarnath's calm atmosphere contrasts with busy Varanasi, offering a reflective space for meditation and heritage exploration. The Archaeological Museum houses the famous Ashokan lion capital — the national emblem of India. Sarnath's international temples, built by Sri Lanka, Japan, China, Thailand, and other Buddhist nations, demonstrate the site's global spiritual significance.",
    images: [],
    source: "",
  },
  {
    name: "Prem Mandir, Vrindavan",
    description:
      "Prem Mandir is a modern devotional monument in Vrindavan dedicated to Radha-Krishna and Sita-Ram, designed to evoke bhakti through grand scale and intricate artistry. Built primarily in white marble, it is known for detailed carvings depicting mythological scenes, floral patterns, and devotional motifs across pillars, facades, and domes. The temple complex is laid out with wide courtyards and landscaped gardens, creating an experience that blends pilgrimage with architectural spectacle. Night illumination transforms the white marble exterior into a glowing devotional statement visible from a great distance. The temple is a major draw for pilgrims visiting Vrindavan's sacred circuit.",
    images: [],
    source: "",
  },
  {
    name: "Banke Bihari Mandir, Vrindavan",
    description:
      "Banke Bihari Mandir is among Vrindavan's most revered temples, centred on the worship of Krishna as Banke Bihari, embodying playful grace and intimate devotion. The temple's tradition emphasizes darshan as an emotional, personal encounter, and the deity's curtains are periodically drawn to manage the intensity of devotion. Architecturally, the structure reflects North Indian temple influences with a distinctive facade and an inner sanctum designed for dense crowds. The temple's devotional atmosphere — bhajans, fragrant offerings, and the surge of pilgrims during festivals — creates an immersive experience of Vaishnava worship in the heart of Braj.",
    images: [],
    source: "",
  },
  {
    name: "Shri Dwarkadhish Temple, Mathura",
    description:
      "The Dwarkadhish Temple in Mathura is a major Krishna temple associated with the city revered as Krishna's birthplace region, anchoring the spiritual life of Mathura. Its architectural composition features carved pillars, arched openings, and painted surfaces that come alive during festivals and daily rituals. The temple is embedded in Mathura's dense old-city fabric, where narrow lanes guide pilgrims through markets and ghats toward sacred sites. Rituals include elaborate aartis, flower offerings, and festival celebrations that draw vast crowds, especially during Holi and Janmashtami.",
    images: [],
    source: "",
  },
  {
    name: "Jhansi Fort (Rani Lakshmibai Heritage)",
    description:
      "Jhansi Fort is a formidable hilltop fort in Bundelkhand, closely associated with the legacy of Rani Lakshmibai and the 1857 uprising against British rule. The fort's strategic position and thick walls reveal military architecture designed to control surrounding terrain and routes. Its structures include gateways, courtyards, and internal spaces that speak to both defense and governance. Jhansi's role in 1857 turned the fort into a symbol of resistance, courage, and popular memory of India's First War of Independence. Museums and memorials within the fort complex narrate the story of Rani Lakshmibai and the siege, making it a site of patriotic pilgrimage.",
    images: [],
    source: "",
  },
  {
    name: "Lucknow Heritage Cluster — Residency & Imambaras",
    description:
      "Lucknow's heritage cluster — anchored by the Residency ruins and the Imambaras — captures the city's Nawabi culture, Indo-Islamic elegance, and colonial-era turning points. The Lucknow Residency is strongly associated with the 1857 events, where siege narratives and ruined structures preserve a dramatic chapter of resistance and conflict. Its colonial buildings, cemetery, and museum interpretation help visitors understand the scale and complexity of the uprising in Awadh. The Imambaras, by contrast, represent the artistic apex of Nawabi patronage — grand ceremonial spaces built with both piety and civic ambition.",
    images: [],
    source: "",
    subPlaces: [
      {
        name: "Bara Imambara (Lucknow)",
        description:
          "Bara Imambara is one of Lucknow's most iconic monuments, commissioned by Nawab Asaf-ud-Daula and famed for its grand central hall — one of the largest arched constructions in the world without the use of iron or wood supports. The complex includes courtyards and gateways that create a ceremonial approach for visitors. Its labyrinthine passages (popularly linked with the 'bhool bhulaiya') add experiential intrigue and tourism appeal, making it one of the most visited heritage sites in Lucknow.",
        images: [],
        source: "",
      },
      {
        name: "Chhota Imambara (Lucknow)",
        description:
          "Chhota Imambara is known for ornate interiors, decorative chandeliers, and a richly embellished ceremonial atmosphere. It reflects the artistic preferences of the Nawabi period, where architecture, light, and ornament created immersive ritual settings. The monument's reflective surfaces and intricate décor contribute to its nickname as a 'palace of lights' during illuminated occasions. Architectural elements include domes, arches, and symmetrical layouts that reinforce formal grandeur.",
        images: [],
        source: "",
      },
      {
        name: "Allahabad Fort, Prayagraj",
        description:
          "Allahabad Fort in Prayagraj is a major riverside fortification strategically located near the confluence region associated with the Sangam. Built in the Mughal era, it reflects imperial military planning while also housing sacred and administrative spaces. Its massive walls and gateways communicate control over river routes and regional power. The fort's location ties it to the religious geography of Prayagraj, especially during Kumbh and Magh Mela seasons.",
        images: [],
        source: "",
      },
      {
        name: "Chunar Fort (Mirzapur/Varanasi region)",
        description:
          "Chunar Fort is an ancient and strategically significant fort overlooking the Ganga near Mirzapur, with layers of history spanning multiple dynasties. Its river-facing position made it crucial for controlling movement and trade along the Ganga corridor. The fort's architecture reflects adaptive construction over centuries, with additions by regional rulers and imperial powers. Photography benefits from panoramic viewpoints and the textured surfaces of weathered masonry.",
        images: [],
        source: "",
      },
      {
        name: "Sankat Mochan Hanuman Temple, Varanasi",
        description:
          "Sankat Mochan Temple is a major Hanuman temple in Varanasi, known for devotional gatherings and a calm atmosphere compared to the busiest riverfront zones. The temple is culturally significant for local worship patterns, Tuesday/Saturday special visits, and community-based devotional practices. Its architecture emphasizes accessibility and a strong focus on ritual participation. The temple's surroundings support a reflective visit, with a strong sense of local religious life that demonstrates how popular devotion sustains sacred spaces continuously.",
        images: [],
        source: "",
      },
    ],
  },
];

const facts = [
  "Varanasi (Kashi) is considered the oldest continuously inhabited city in the world.",
  "Ayodhya is believed to be the birthplace of Lord Rama, while Mathura is the birthplace of Lord Krishna.",
  "The First War of Independence (1857) began in Meerut, and Mangal Pandey played a key role in igniting the uprising.",
  "UP was home to mighty empires like the Mauryas, Kushans, and Mughals, making it central to Indian history.",
  "The Taj Mahal in Agra is one of the Seven Wonders of the World.",
  "The Kumbh Mela in Prayagraj is the largest religious gathering on Earth.",
  "Sarnath is where Lord Buddha gave his first sermon after attaining enlightenment.",
  "Fatehpur Sikri, built by Akbar, is a UNESCO World Heritage Site.",
  "UP has a population of over 200 million, larger than most countries in the world.",
  "UP sends 80 MPs to the Lok Sabha — the highest of any state in India.",
  "UP has a bicameral legislature with 404 Assembly seats and 100 Council seats.",
  "Lucknow is the capital, while Agra is the most populous district.",
  "UP is called the 'Sugarcane Bowl of India', producing nearly half of India's sugarcane.",
  "Malihabad mangoes are world-famous for their exceptional sweetness.",
  "UP is also a major producer of wheat, rice, potatoes, and guavas.",
  "UP borders 9 states — the maximum in India — and also shares a 651 km border with Nepal.",
  "The Ganga and Yamuna rivers both flow through UP, shaping its culture and agriculture.",
  "The Parijaat tree in Barabanki is believed to have been brought from heaven by Lord Krishna.",
  "UP's state animal is the Swamp Deer (Barasingha).",
  "The state bird is the Sarus Crane, the tallest flying bird in the world.",
  "The state flower is Palash (Flame of the Forest) and the state tree is Ashoka.",
  "UP has the most railway stations and highways in India.",
  "The state is famous for its Ganga-Jamuni Tehzeeb — a unique blend of Hindu and Muslim cultures.",
  "Many national leaders including Jawaharlal Nehru, Madan Mohan Malviya, and Govind Ballabh Pant hailed from UP.",
];

const artGallery = [
  { title: "Tunday Kababi", emoji: "🍖", color: "#8B2500", desc: "Legendary melt-in-the-mouth minced kebab of Lucknow", image: undefined },
  { title: "Galouti Kebab", emoji: "🍢", color: "#A0522D", desc: "Extremely soft Awadhi kebab — rich spice aroma", image: undefined },
  { title: "Bedmi Poori", emoji: "🥙", color: "#D2691E", desc: "Spiced fried bread with aloo sabzi — Agra/Mathura breakfast", image: undefined },
  { title: "Banarasi Paan", emoji: "🌿", color: "#228B22", desc: "Iconic Varanasi betel-leaf specialty — offered after meals", image: undefined },
  { title: "Mathura Peda", emoji: "🍮", color: "#DAA520", desc: "Famous milk-based sweet — prasad of Krishna's birthplace", image: undefined },
  { title: "Agra Petha", emoji: "🍬", color: "#F0E68C", desc: "Translucent ash-gourd sweet — signature souvenir of Agra", image: undefined },
  { title: "Chaat (UP Style)", emoji: "🥗", color: "#FF6347", desc: "Tangy, spicy street snacks — Varanasi & Lucknow styles", image: undefined },
  { title: "Nihari (Lucknow)", emoji: "🍲", color: "#8B4513", desc: "Slow-cooked Awadhi stew — deep layered flavour", image: undefined },
  { title: "Litti Chokha", emoji: "🔥", color: "#CD5C5C", desc: "Smoky wheat balls with roasted eggplant mash — eastern UP", image: undefined },
  { title: "Gujiya", emoji: "🥮", color: "#F4A460", desc: "Crescent sweet dumpling — iconic Holi festive treat", image: undefined },
  { title: "Kathak Dance", emoji: "💃", color: "#9370DB", desc: "Classical dance of UP — storytelling through footwork & spins", image: undefined },
  { title: "Raslila (Braj)", emoji: "🎭", color: "#FF69B4", desc: "Devotional dance-drama depicting Krishna & Radha — Vrindavan", image: undefined },
  { title: "Charkula Dance", emoji: "🪔", color: "#FFD700", desc: "Women balance multi-tiered lamps — Braj folk dance", image: undefined },
  { title: "Nautanki", emoji: "🎪", color: "#FF8C00", desc: "Vibrant folk opera of Awadh — dance, drama, music", image: undefined },
  { title: "Kajri (Monsoon Dance)", emoji: "🌧️", color: "#4169E1", desc: "Eastern UP monsoon folk songs of longing and romance", image: undefined },
  { title: "Chikankari", emoji: "🪡", color: "#E6E6FA", desc: "Delicate hand-embroidery of Lucknow — GI-tagged craft", image: undefined },
  { title: "Zardozi", emoji: "✨", color: "#FFD700", desc: "Metallic thread embroidery — Nawabi craft of Lucknow", image: undefined },
  { title: "Brassware (Moradabad)", emoji: "🏺", color: "#B8860B", desc: "Moradabad — 'Brass City of India' — world-famous metalwork", image: undefined },
  { title: "Kumbh Mela", emoji: "🏊", color: "#1E90FF", desc: "World's largest religious gathering — Prayagraj Sangam", image: undefined },
  { title: "Ganga Aarti", emoji: "🔥", color: "#FF4500", desc: "Nightly lamp ceremony on Varanasi's ghats — living ritual", image: undefined },
];

/* ─── Main page ──────────────────────────────────────────────────────────── */
export default function UttarPradeshPage() {
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
        style={{
          background: "linear-gradient(135deg, #B8860B 0%, #8B4513 40%, #2E8B57 100%)",
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
                Uttar Pradesh
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
                  { label: "Capital", value: "Lucknow" },
                  { label: "Population", value: "~20 Crore" },
                  { label: "Area", value: "2,40,928 sq km" },
                  { label: "Founded", value: "26 January 1950" },
                  { label: "Language", value: "Hindi, Urdu" },
                  { label: "Districts", value: "75 Districts" },
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
        <Section title="Capital" icon="🏛️">
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-2xl p-6 border border-yellow-100 dark:border-yellow-900/30 text-center">
            <div className="text-5xl mb-3">🏙️</div>
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Lucknow
            </h3>
            <p className="text-muted-foreground text-sm">
              Capital of Uttar Pradesh — City of Nawabs & Tehzeeb
            </p>
          </div>
        </Section>

        {/* Map */}
        <Section title="Map of Uttar Pradesh" icon="🗺️">
          <div className="flex flex-col items-center gap-3">
            <MapPlaceholder label="Map of Uttar Pradesh — upload map image and replace placeholder" />
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
              Uttar Pradesh (UP), with Lucknow as its capital, is one of India's most populous and
              historically influential states, located in the northern Indo-Gangetic Plain. It shares
              borders with Uttarakhand, Haryana, Delhi, Rajasthan, Madhya Pradesh, Chhattisgarh,
              Jharkhand, Bihar, and Nepal, making it a key bridge between the Himalayan foothills and
              central India. The state's geography is dominated by fertile alluvial plains,
              interspersed with riverine belts, wetlands, and ravines, all shaped by the life-giving
              flows of the Ganga, Yamuna, Gomti, and Ghaghara.
            </p>
            <p className="text-foreground">
              The land that is now Uttar Pradesh has been a cradle of early Indian civilization,
              supported by fertile plains and river systems that enabled dense settlements and trade.
              Ancient urban and cultural networks flourished along the Ganga and Yamuna, shaping
              political power centres and spiritual traditions. During the Mauryan era, the region's
              strategic river routes strengthened imperial administration and facilitated the spread
              of Buddhism and statecraft ideals. Ashokan patronage encouraged monasteries and
              educational centres — including Sarnath, where the Buddha gave his first sermon.
            </p>
            <p className="text-foreground">
              Through the medieval period, UP witnessed the rise of the Delhi Sultanate, the Mughal
              Empire, and the Nawabs of Awadh, each leaving extraordinary architectural legacies —
              from the Taj Mahal and Agra Fort to the Imambaras of Lucknow. The state was a central
              stage in the 1857 uprising, with Jhansi, Lucknow, and Meerut becoming symbols of
              resistance. Today, UP is a mosaic of sacred cities (Varanasi, Ayodhya, Mathura,
              Prayagraj), Mughal monuments, Nawabi refinement, folk arts, and living river cultures
              that together make it one of the richest heritage landscapes in the world.
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
        <Section title="Facts about Uttar Pradesh" icon="💡">
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
            Scroll horizontally to explore Uttar Pradesh's iconic foods, crafts, dances, and traditions.
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
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">
                        {item.desc}
                      </p>
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
          <p className="text-muted-foreground text-xs mt-2">
            © Bharat Darpan — Uttar Pradesh
          </p>
        </div>
      </footer>
    </div>
  );
}
