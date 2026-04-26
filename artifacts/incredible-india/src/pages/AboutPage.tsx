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
            className="text-base sm:text-lg leading-relaxed text-justify"
            style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
          >
            India is one of the world's oldest civilizations, home to a breathtaking tapestry of cultures, languages, traditions, and art forms that have evolved over thousands of years. From the snow-capped peaks of the Himalayas to the sun-kissed shores of Kanyakumari, every region of India pulses with its own unique identity — expressed through its festivals, cuisine, music, dance, architecture, and rituals. With over 1.4 billion people speaking more than 700 languages and practicing a multitude of religions in harmony, India stands as a living testament to the beauty of diversity. Our project seeks to bring this magnificent heritage to the digital world, creating an interactive platform that not only preserves these timeless traditions but makes them accessible, engaging, and inspiring for generations to come.
          </p>

          <h3
            className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-center"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD, letterSpacing: "0.05em" }}
          >
            Alignment with SDG Goals
          </h3>

          <div className="space-y-6">
            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: "rgba(90,14,14,0.4)",
                borderColor: "rgba(245,197,24,0.18)",
              }}
            >
              <h4
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
              >
                SDG 4 — Quality Education <span className="text-xs italic opacity-80">(Primary Goal)</span>
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
              >
                The project creates a free, accessible digital learning platform about Indian culture for students. It supports inclusive education by making cultural knowledge available to anyone with a browser, regardless of location or economic background. Also directly supports NEP 2020's vision of value-based education rooted in Indian traditions.
              </p>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: "rgba(90,14,14,0.4)",
                borderColor: "rgba(245,197,24,0.18)",
              }}
            >
              <h4
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
              >
                SDG 11 — Sustainable Cities & Communities
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
              >
                Target 11.4 specifically states: "Strengthen efforts to protect and safeguard the world's cultural and natural heritage." This project digitally preserves and documents the festivals, historical places, art forms, food, and dance of all 28 states and 8 UTs — directly contributing to cultural heritage safeguarding.
              </p>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: "rgba(90,14,14,0.4)",
                borderColor: "rgba(245,197,24,0.18)",
              }}
            >
              <h4
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
              >
                SDG 10 — Reduced Inequalities
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
              >
                Cultural knowledge of smaller states and Union Territories (like Nagaland, Lakshadweep, Ladakh) is often overlooked in mainstream media. This project gives equal representation to every state, ensuring marginalized regional cultures get the same digital visibility as popular ones.
              </p>
            </div>

            <div
              className="rounded-xl border p-5"
              style={{
                backgroundColor: "rgba(90,14,14,0.4)",
                borderColor: "rgba(245,197,24,0.18)",
              }}
            >
              <h4
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
              >
                SDG 9 — Industry, Innovation & Infrastructure
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{ color: GOLD_SOFT, fontFamily: "'Lora', serif", opacity: 0.9 }}
              >
                The project demonstrates innovative use of technology (HTML, CSS, JavaScript) by first-year students to solve a real social problem — digitizing cultural heritage. It contributes to building digital infrastructure for cultural awareness in India.
              </p>
            </div>
          </div>
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
