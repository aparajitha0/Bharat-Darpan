import { useParams, useLocation } from "wouter";
import { statesData } from "@/data/states";
import { ArrowLeft, MapPin, Users, Landmark, Calendar, Globe, BookOpen, UtensilsCrossed, Music, Star } from "lucide-react";

export default function StatePage() {
  const params = useParams<{ stateId: string }>();
  const [, setLocation] = useLocation();
  const stateId = params.stateId;
  const state = statesData[stateId];

  if (!state) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-6">
        <div className="text-6xl text-muted-foreground">🗺️</div>
        <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Cinzel', serif" }}>
          State Not Found
        </h2>
        <p className="text-muted-foreground text-center max-w-sm">
          We couldn't find information about this state. Please select a valid state from the map.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
          data-testid="back-to-home"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Map
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero header */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${state.mapColor}dd 0%, ${state.mapColor}99 50%, hsl(155,45%,30%) 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-2 border-white translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
          <button
            data-testid="back-button"
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Map
          </button>

          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-4">
                {state.region}
              </div>

              <h1
                className="text-4xl md:text-6xl font-bold text-white mb-3"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {state.name}
              </h1>

              <p
                className="text-white/80 text-lg italic"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {state.tagline}
              </p>
            </div>

            {/* Quick facts card */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-5 min-w-[220px]">
              <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Quick Facts</h3>
              <div className="space-y-2">
                {[
                  { icon: MapPin, label: "Capital", value: state.capital },
                  { icon: Users, label: "Population", value: state.population },
                  { icon: Landmark, label: "Area", value: state.area },
                  { icon: Calendar, label: "Founded", value: state.founded },
                  { icon: Globe, label: "Language", value: state.language },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Icon className="w-3.5 h-3.5 text-white/60 mt-0.5 flex-shrink-0" />
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

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Placeholder notice */}
        <div className="mb-8 p-4 rounded-xl bg-primary/8 border border-primary/20 flex items-start gap-3">
          <Star className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">Content Coming Soon</p>
            <p className="text-sm text-muted-foreground mt-0.5">
              Rich cultural content about {state.name} will be added once you upload your documents. 
              All sections below are ready to be filled with your text and media.
            </p>
          </div>
        </div>

        {/* Content sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: BookOpen,
              title: "About " + state.name,
              content: state.description,
              id: "about",
            },
            {
              icon: Globe,
              title: "Culture & Heritage",
              content: state.culture,
              id: "culture",
            },
            {
              icon: UtensilsCrossed,
              title: "Cuisine & Food",
              content: state.cuisine,
              id: "cuisine",
            },
            {
              icon: Music,
              title: "Festivals & Celebrations",
              content: state.festivals,
              id: "festivals",
            },
          ].map(({ icon: Icon, title, content, id }) => (
            <div
              key={id}
              data-testid={`section-${id}`}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2
                  className="text-lg font-bold text-foreground"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {title}
                </h2>
              </div>
              <p
                className="text-muted-foreground leading-relaxed text-sm"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* Heritage Sites Section */}
        <div
          data-testid="section-heritage"
          className="mt-8 bg-card border border-border rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Landmark className="w-5 h-5 text-accent" />
            </div>
            <h2
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Heritage Sites & Landmarks
            </h2>
          </div>
          <p
            className="text-muted-foreground leading-relaxed text-sm"
            style={{ fontFamily: "'Lora', serif" }}
          >
            {state.heritage}
          </p>
        </div>

        {/* Photo gallery placeholder */}
        <div className="mt-8 bg-card border border-border rounded-2xl p-6">
          <h2
            className="text-lg font-bold text-foreground mb-4"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Photo Gallery
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                data-testid={`gallery-placeholder-${i}`}
                className="aspect-square rounded-xl bg-muted flex items-center justify-center"
                style={{ backgroundColor: state.mapColor + "33" }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">📷</div>
                  <div className="text-xs text-muted-foreground">Photo {i}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Photos will be added when you upload your media files
          </p>
        </div>

        {/* Navigation to other states */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-px w-16 bg-border" />
          </div>

          <button
            data-testid="explore-map-button"
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            <MapPin className="w-5 h-5" />
            Explore the Full Map
          </button>

          <p className="text-muted-foreground text-sm mt-3">
            Discover the culture of all 36 states and union territories
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-foreground/5 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <button
            onClick={() => setLocation("/")}
            className="text-primary font-semibold hover:underline text-sm"
          >
            ← Bharat Darpan
          </button>
          <p className="text-xs text-muted-foreground mt-2">Preserving India's rich cultural legacy for generations to come</p>
        </div>
      </footer>
    </div>
  );
}
