import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

const GOLD = "#F5C518";
const GOLD_SOFT = "#E8B923";
const RED_BG = "#5A0E0E";
const RED_DEEP = "#3D0808";

export default function AboutPage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: RED_BG, color: GOLD }}>
      {/* Header */}
      <header
        className="border-b"
        style={{ backgroundColor: RED_DEEP, borderColor: "rgba(245,197,24,0.2)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: GOLD_SOFT }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <h1
            className="text-lg sm:text-xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            Bharat Darpan
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-16 px-6 text-center border-b"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(61,8,8,0.95) 0%, rgba(90,14,14,0.95) 100%)",
          borderColor: "rgba(245,197,24,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            About Bharat Darpan
          </h2>
          <p
            className="text-base sm:text-lg italic"
            style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
          >
            Preserving India's rich cultural legacy for generations to come.
          </p>
        </div>
      </section>

      {/* Body */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="rounded-2xl border p-8 sm:p-12"
          style={{
            backgroundColor: "rgba(61,8,8,0.5)",
            borderColor: "rgba(245,197,24,0.2)",
          }}
        >
          <p
            className="text-base leading-relaxed text-center"
            style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.85 }}
          >
            Content coming soon — this section will be updated shortly.
          </p>
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: GOLD,
              color: RED_DEEP,
              fontFamily: "'Cinzel', serif",
            }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-8"
        style={{ backgroundColor: RED_DEEP, borderColor: "rgba(245,197,24,0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="text-xs" style={{ color: GOLD_SOFT, opacity: 0.6 }}>
            Satyamev Jayate — Truth Alone Triumphs
          </p>
        </div>
      </footer>
    </div>
  );
}
