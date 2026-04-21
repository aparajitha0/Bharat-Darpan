import { useLocation } from "wouter";
import IndiaMap from "@/components/IndiaMap";
import { statesList } from "@/data/states";
import { MapPin, BookOpen, Globe, Landmark } from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-[hsl(25,90%,40%)] via-[hsl(20,80%,35%)] to-[hsl(155,45%,30%)] text-white">
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

      {/* Features row */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: MapPin, label: "Click a state on the map", sub: "to explore its heritage" },
            { icon: BookOpen, label: "Rich cultural stories", sub: "from every region" },
            { icon: Globe, label: "All 28 States", sub: "and 8 Union Territories" },
            { icon: Landmark, label: "Ancient to modern", sub: "living traditions" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            Explore by Region
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { region: "North India", description: "The mighty Himalayas, ancient kingdoms, Mughal grandeur, and the sacred Ganges.", color: "from-amber-500 to-orange-600", states: ["Punjab", "Haryana", "Delhi", "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh"] },
              { region: "South India", description: "Dravidian temples, classical arts, tropical coastlines, and ancient knowledge.", color: "from-emerald-500 to-teal-600", states: ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh", "Telangana"] },
              { region: "East India", description: "The cradle of enlightenment, sweets, durga puja, and coastal traditions.", color: "from-blue-500 to-cyan-600", states: ["West Bengal", "Odisha", "Bihar", "Jharkhand"] },
              { region: "West India", description: "Desert palaces, vibrant textiles, Bollywood, and coastal Goan charm.", color: "from-yellow-500 to-amber-600", states: ["Rajasthan", "Gujarat", "Maharashtra", "Goa"] },
              { region: "Central India", description: "Tiger reserves, tribal art, cave temples, and untouched wilderness.", color: "from-lime-500 to-green-600", states: ["Madhya Pradesh", "Chhattisgarh"] },
              { region: "Northeast India", description: "The Seven Sisters — misty hills, living root bridges, and tribal wisdom.", color: "from-purple-500 to-violet-600", states: ["Assam", "Meghalaya", "Manipur", "Mizoram", "Nagaland", "Tripura", "Sikkim", "Arunachal Pradesh"] },
            ].map(({ region, description, color, states }) => (
              <div
                key={region}
                className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className={`bg-gradient-to-br ${color} p-5`}>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                    {region}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-1">
                    {states.map((s) => {
                      const stateId = statesList.find(st => st.name === s)?.id;
                      return (
                        <button
                          key={s}
                          data-testid={`region-state-${s}`}
                          onClick={() => stateId && setLocation(`/state/${stateId}`)}
                          className="text-xs px-2 py-1 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground font-medium"
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
