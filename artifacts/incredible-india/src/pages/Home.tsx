import { useLocation } from "wouter";
import IndiaMap from "@/components/IndiaMap";
import { statesList } from "@/data/states";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden text-white bg-[hsl(20,30%,15%)]">
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

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Decorative mandala circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full border-2 border-white/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full border-2 border-white/10 -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-white/10 translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 text-center">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-white/40" />
            <span className="text-white/70 text-sm tracking-[0.3em] uppercase font-medium">Ek Bharat Shreshtha Bharat</span>
            <div className="h-px w-24 bg-white/40" />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-wide"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Bharat Darpan
          </h1>

          <div className="w-24 h-1 bg-white/60 mx-auto mb-6 rounded-full" />

          <p
            className="text-xl md:text-2xl text-white/85 mb-4 italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            A journey through the living tapestry of our civilization
          </p>

          <p className="text-white/70 max-w-2xl mx-auto text-base leading-relaxed">
            Explore the rich cultural heritage, ancient traditions, vibrant festivals, 
            and timeless wisdom of every state and union territory of India.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>28</div>
              <div className="text-white/70 text-sm mt-1">States</div>
            </div>
            <div className="w-px h-12 bg-white/20 self-center hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>8</div>
              <div className="text-white/70 text-sm mt-1">Union Territories</div>
            </div>
            <div className="w-px h-12 bg-white/20 self-center hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>1,600+</div>
              <div className="text-white/70 text-sm mt-1">Languages & Dialects</div>
            </div>
            <div className="w-px h-12 bg-white/20 self-center hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>5,000+</div>
              <div className="text-white/70 text-sm mt-1">Years of History</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Map section */}
          <div className="lg:col-span-3">
            <div className="text-center mb-6">
              <h2
                className="text-2xl font-bold text-foreground mb-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Political Map of India
              </h2>
              <p className="text-muted-foreground text-sm">
                Click on any state or union territory to discover its culture
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-4 shadow-md">
              <IndiaMap />
            </div>

            <p className="text-center text-xs text-muted-foreground mt-3">
              Hover over a state to see its name. Click to explore.
            </p>
          </div>

          {/* States list */}
          <div className="lg:col-span-2">
            <h2
              className="text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Explore by State
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Browse the complete list of states and union territories
            </p>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 scrollbar-thin">
              {statesList.map((state) => (
                <button
                  key={state.id}
                  data-testid={`state-card-${state.id}`}
                  onClick={() => setLocation(`/state/${state.id}`)}
                  className="w-full text-left px-4 py-3 rounded-xl border border-border bg-card hover:bg-accent/5 hover:border-primary/30 transition-all group flex items-center gap-3"
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: state.mapColor }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                      {state.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {state.capital} · {state.region}
                    </div>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors text-xs">
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
            <div className="h-px w-16 bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-border" />
          </div>

          <h2
            className="text-3xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Preserving India's Living Heritage
          </h2>

          <p
            className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-base italic"
            style={{ fontFamily: "'Lora', serif" }}
          >
            "India is not a country. It is an experience — a civilization that breathes through 
            its art, music, dance, cuisine, festivals, and the wisdom passed down through millennia. 
            This platform exists to ensure that every thread of this magnificent tapestry is seen, 
            known, and celebrated."
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-border" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="h-px w-16 bg-border" />
          </div>
        </section>

        {/* Regional sections */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold text-foreground mb-8 text-center"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            INDIA
          </h2>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-foreground/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <h3
            className="text-xl font-bold text-foreground mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Bharat Darpan
          </h3>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            A cultural preservation initiative celebrating the diversity, heritage, and living traditions of India's 28 states and 8 union territories.
          </p>
          <div className="mt-6 text-xs text-muted-foreground/60">
            <span>Satyamev Jayate — Truth Alone Triumphs</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
