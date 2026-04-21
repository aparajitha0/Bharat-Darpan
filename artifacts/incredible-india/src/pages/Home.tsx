import { useLocation } from "wouter";
import IndiaMap from "@/components/IndiaMap";
import { statesList } from "@/data/states";

const GOLD = "#F5C518";
const GOLD_SOFT = "#E8B923";
const GOLD_DEEP = "#B8860B";
const RED_BG = "#5A0E0E";
const RED_DEEP = "#3D0808";
const RED_CARD = "#7A1414";
const HERO_RED = "#8B0000";
const HERO_RED_SOFT = "#A91B1B";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: RED_BG, color: GOLD }}>
      {/* Header */}
      <header
        className="relative overflow-hidden bg-[hsl(20,30%,15%)] min-h-screen flex flex-col"
        style={{ color: HERO_RED }}
      >
        {/* Blurred tricolour background */}
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #FF9933 0%, #FF9933 33.33%, #FFFFFF 33.33%, #FFFFFF 66.66%, #138808 66.66%, #138808 100%)",
            filter: "blur(28px)",
          }}
        />

        {/* Ashoka Chakra in the white band */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-[3px] border-[#000080] flex items-center justify-center pointer-events-none opacity-70">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-[2px] h-12 bg-[#000080] origin-top"
              style={{ transform: `translate(-50%, 0) rotate(${i * 15}deg)` }}
            />
          ))}
          <div className="w-3 h-3 rounded-full bg-[#000080] z-10" />
        </div>

        {/* Soft white veil for red text contrast */}
        <div className="absolute inset-0 bg-white/25" />

        {/* Decorative mandala circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-2 border-[#F5C518]/20 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full border-2 border-[#F5C518]/20 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-[#F5C518]/20 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center flex-1 flex flex-col justify-center w-full">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24" style={{ backgroundColor: HERO_RED, opacity: 0.7 }} />
            <span
              className="text-sm tracking-[0.3em] uppercase font-bold"
              style={{ color: HERO_RED, WebkitTextStroke: `0.2px ${GOLD}` }}
            >
              Ek Bharat Shreshtha Bharat
            </span>
            <div className="h-px w-24" style={{ backgroundColor: HERO_RED, opacity: 0.7 }} />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-wide"
            style={{
              fontFamily: "'Cinzel', serif",
              color: HERO_RED,
              WebkitTextStroke: `1px ${GOLD}`,
            }}
          >
            Bharat Darpan
          </h1>

          <div
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: HERO_RED }}
          />

          <p
            className="text-xl md:text-2xl mb-4 italic font-bold"
            style={{
              fontFamily: "'Lora', serif",
              color: HERO_RED,
              WebkitTextStroke: `0.4px ${GOLD}`,
            }}
          >
            A journey through the living tapestry of our civilization
          </p>

          <p
            className="max-w-2xl mx-auto text-base leading-relaxed font-bold"
            style={{
              color: HERO_RED,
              WebkitTextStroke: `0.3px ${GOLD}`,
            }}
          >
            Explore the rich cultural heritage, ancient traditions, vibrant festivals,
            and timeless wisdom of every state and union territory of India.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { num: "28", label: "States" },
              { num: "8", label: "Union Territories" },
              { num: "1,600+", label: "Languages & Dialects" },
              { num: "5,000+", label: "Years of History" },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center">
                  <div
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      color: HERO_RED,
                      WebkitTextStroke: `0.5px ${GOLD}`,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-sm mt-1 font-bold"
                    style={{ color: HERO_RED, WebkitTextStroke: `0.2px ${GOLD}` }}
                  >
                    {s.label}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div
                    className="w-px h-12 self-center hidden sm:block"
                    style={{ backgroundColor: HERO_RED, opacity: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2" style={{ color: HERO_RED }}>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold opacity-80">
              Scroll to explore
            </span>
            <span className="text-2xl animate-bounce">↓</span>
          </div>
        </div>

        {/* Gold border at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1 z-20"
          style={{
            background: `linear-gradient(to right, transparent, ${GOLD}, ${GOLD_DEEP}, ${GOLD}, transparent)`,
          }}
        />
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Map section */}
          <div className="lg:col-span-3">
            <div className="text-center mb-6">
              <h2
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
              >
                Political Map of India
              </h2>
              <p className="text-sm" style={{ color: GOLD_SOFT, opacity: 0.85 }}>
                Click on any state or union territory to discover its culture
              </p>
            </div>

            <div
              className="rounded-2xl p-4 shadow-md"
              style={{
                backgroundColor: "#FFF8E7",
                border: `2px solid ${GOLD}`,
                boxShadow: `0 0 24px rgba(245,197,24,0.25)`,
              }}
            >
              <IndiaMap />
            </div>

            <p
              className="text-center text-xs mt-3"
              style={{ color: GOLD_SOFT, opacity: 0.8 }}
            >
              Hover over a state to see its name. Click to explore.
            </p>
          </div>

          {/* States list */}
          <div className="lg:col-span-2">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
            >
              Explore by State
            </h2>
            <p className="text-sm mb-5" style={{ color: GOLD_SOFT, opacity: 0.85 }}>
              Browse the complete list of states and union territories
            </p>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 scrollbar-thin">
              {statesList.map((state) => (
                <button
                  key={state.id}
                  data-testid={`state-card-${state.id}`}
                  onClick={() => setLocation(`/state/${state.id}`)}
                  className="w-full text-left px-4 py-3 rounded-xl transition-all group flex items-center gap-3"
                  style={{
                    backgroundColor: RED_CARD,
                    border: `1px solid ${GOLD_DEEP}`,
                    color: GOLD,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = RED_DEEP;
                    e.currentTarget.style.borderColor = GOLD;
                    e.currentTarget.style.boxShadow = `0 0 12px rgba(245,197,24,0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = RED_CARD;
                    e.currentTarget.style.borderColor = GOLD_DEEP;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: state.mapColor }}
                  />
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-sm truncate"
                      style={{ color: GOLD }}
                    >
                      {state.name}
                    </div>
                    <div
                      className="text-xs truncate"
                      style={{ color: GOLD_SOFT, opacity: 0.75 }}
                    >
                      {state.capital} · {state.region}
                    </div>
                  </div>
                  <div className="text-xs" style={{ color: GOLD }}>
                    →
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* About section */}
        <section className="mt-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} />
            <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
          </div>

          <h2
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "'Cinzel', serif",
              color: GOLD,
              textShadow: "0 0 16px rgba(245,197,24,0.3)",
            }}
          >
            Preserving India's Living Heritage
          </h2>

          <p
            className="max-w-3xl mx-auto leading-relaxed text-base italic"
            style={{ fontFamily: "'Lora', serif", color: GOLD_SOFT, opacity: 0.9 }}
          >
            "India is not a country. It is an experience — a civilization that breathes through
            its art, music, dance, cuisine, festivals, and the wisdom passed down through millennia.
            This platform exists to ensure that every thread of this magnificent tapestry is seen,
            known, and celebrated."
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD_DEEP }} />
            <div className="h-px w-16" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
          </div>
        </section>

        {/* Regional sections */}
        <section className="mt-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-[0.4em]"
            style={{
              fontFamily: "'Cinzel', serif",
              color: GOLD,
              textShadow: "0 0 24px rgba(245,197,24,0.4)",
            }}
          >
            INDIA
          </h2>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="mt-20"
        style={{
          backgroundColor: RED_DEEP,
          borderTop: `2px solid ${GOLD}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3
            className="text-xl font-bold mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            Bharat Darpan
          </h3>
          <p
            className="text-sm max-w-lg mx-auto"
            style={{ color: GOLD_SOFT, opacity: 0.85 }}
          >
            A cultural preservation initiative celebrating the diversity, heritage, and living traditions of India's 28 states and 8 union territories.
          </p>
          <div className="mt-6 text-xs" style={{ color: GOLD_SOFT, opacity: 0.6 }}>
            <span>Satyamev Jayate — Truth Alone Triumphs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
