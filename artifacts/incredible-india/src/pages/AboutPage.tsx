import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

const GOLD = "#F5C518";
const GOLD_SOFT = "#E8B923";
const RED_BG = "#5A0E0E";
const RED_DEEP = "#3D0808";

export default function AboutPage() {
  const [, setLocation] = useLocation();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: RED_BG, color: GOLD }}
    >
      {/* Header */}
      <header
        className="border-b"
        style={{
          backgroundColor: RED_DEEP,
          borderColor: "rgba(245,197,24,0.2)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center">
          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: GOLD_SOFT }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
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
            style={{
              color: GOLD_SOFT,
              fontFamily: "'Lora', serif",
              opacity: 0.9,
            }}
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
            style={{
              color: GOLD_SOFT,
              fontFamily: "'Lora', serif",
              opacity: 0.9,
            }}
          >
            India is one of the world's oldest civilizations, home to a
            breathtaking tapestry of cultures, languages, traditions, and art
            forms that have evolved over thousands of years. From the
            snow-capped peaks of the Himalayas to the sun-kissed shores of
            Kanyakumari, every region of India pulses with its own unique
            identity — expressed through its festivals, cuisine, music, dance,
            architecture, and rituals. With over 1.4 billion people speaking
            more than 700 languages and practicing a multitude of religions in
            harmony, India stands as a living testament to the beauty of
            diversity. Our project seeks to bring this magnificent heritage to
            the digital world, creating an interactive platform that not only
            preserves these timeless traditions but makes them accessible,
            engaging, and inspiring for generations to come.
          </p>

          <h3
            className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-center"
            style={{
              fontFamily: "'Cinzel', serif",
              color: GOLD,
              letterSpacing: "0.05em",
            }}
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
                SDG 4 — Quality Education{" "}
                <span className="text-xs italic opacity-80">
                  (Primary Goal)
                </span>
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{
                  color: GOLD_SOFT,
                  fontFamily: "'Lora', serif",
                  opacity: 0.9,
                }}
              >
                The project creates a free, accessible digital learning platform
                about Indian culture for students. It supports inclusive
                education by making cultural knowledge available to anyone with
                a browser, regardless of location or economic background. Also
                directly supports NEP 2020's vision of value-based education
                rooted in Indian traditions.
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
                SDG 9 — Industry, Innovation and Infrastructure
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{
                  color: GOLD_SOFT,
                  fontFamily: "'Lora', serif",
                  opacity: 0.9,
                }}
              >
                The project demonstrates innovative use of technology (HTML,
                CSS, JavaScript) by first-year students to solve a real social
                problem — digitizing cultural heritage. It contributes to
                building digital infrastructure for cultural awareness in India.
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
                style={{
                  color: GOLD_SOFT,
                  fontFamily: "'Lora', serif",
                  opacity: 0.9,
                }}
              >
                Cultural knowledge of smaller states and Union Territories (like
                Nagaland, Lakshadweep, Ladakh) is often overlooked in mainstream
                media. This project gives equal representation to every state,
                ensuring marginalized regional cultures get the same digital
                visibility as popular ones.
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
                SDG 11 — Sustainable Cities and Communities
              </h4>
              <p
                className="text-base leading-relaxed text-justify"
                style={{
                  color: GOLD_SOFT,
                  fontFamily: "'Lora', serif",
                  opacity: 0.9,
                }}
              >
                Target 11.4 specifically states: "Strengthen efforts to protect
                and safeguard the world's cultural and natural heritage." This
                project digitally preserves and documents the festivals,
                historical places, art forms, food, and dance of all 28 states
                and 8 UTs — directly contributing to cultural heritage
                safeguarding.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <section className="mt-16">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2"
            style={{ color: GOLD_SOFT, opacity: 0.7 }}
          >
            The People Behind It
          </p>
          <h3
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: GOLD }}
          >
            Meet the Team (SYNKAG)
          </h3>
          <p
            className="text-sm sm:text-base mb-8 text-justify"
            style={{
              color: GOLD_SOFT,
              fontFamily: "'Lora', serif",
              opacity: 0.85,
            }}
          >
            A group of students passionate about celebrating India's diversity.
          </p>

          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex gap-5" style={{ minWidth: "max-content" }}>
              {teamMembers.map((m) => (
                <div
                  key={m.name}
                  className="flex-shrink-0 w-56 rounded-2xl border p-6 flex flex-col items-center text-center transition-shadow hover:shadow-lg"
                  style={{
                    backgroundColor: "rgba(61,8,8,0.5)",
                    borderColor: "rgba(245,197,24,0.2)",
                  }}
                >
                  {/* Avatar circle (placeholder for image) */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4 overflow-hidden"
                    style={{
                      border: `2px solid ${GOLD}`,
                    }}
                  >
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4
                    className="text-base font-bold mb-1"
                    style={{ color: GOLD, fontFamily: "'Cinzel', serif" }}
                  >
                    {m.name}
                  </h4>
                  <p
                    className="text-sm mb-3"
                    style={{
                      color: GOLD_SOFT,
                      fontFamily: "'Lora', serif",
                      opacity: 0.85,
                    }}
                  >
                    {m.role}
                  </p>
                  <span
                    className="inline-block text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(245,197,24,0.12)",
                      color: GOLD_SOFT,
                      border: "1px solid rgba(245,197,24,0.3)",
                      fontFamily: "'Lora', serif",
                    }}
                  >
                    {m.contribution}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

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
        style={{
          backgroundColor: RED_DEEP,
          borderColor: "rgba(245,197,24,0.15)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <img
            src="/logo.png"
            alt="Bharat Darpan"
            className="w-16 h-16 mx-auto mb-3 rounded-full"
          />
          <p className="text-xs" style={{ color: GOLD_SOFT, opacity: 0.6 }}>
            Satyamev Jayate — Truth Alone Triumphs
          </p>
        </div>
      </footer>
    </div>
  );
}

const teamMembers = [
  {
    name: "Neha Bhat",
    role: "Team Lead",
    contribution: "Website Designing",
    initials: "NB",
    bg: "#FCE4A6",
    text: "#5A0E0E",
    image: "/images/neha.jpeg",
  },
  {
    name: "P Aparajitha",
    role: "Content Writer",
    contribution: "Visual Designing",
    initials: "PA",
    bg: "#C9E8D2",
    text: "#1F4D2E",
    image: "/images/appu.jpeg",
  },
  {
    name: "Kruthi SN",
    role: "Researcher",
    contribution: "Map & Graphics",
    initials: "KS",
    bg: "#F8C4C4",
    text: "#7A1A1A",
    image: "/images/kurti.jpeg",
  },
  {
    name: "Yasha Patil",
    role: "Researcher",
    contribution: "Festivals & Art",
    initials: "YP",
    bg: "#D4C4F0",
    text: "#3D2870",
    image: "/images/yasu_temp.jpeg",
  },
  {
    name: "Sinchana Hegde",
    role: "Researcher",
    contribution: "History & Culture",
    initials: "SH",
    bg: "#FBD9A6",
    text: "#7A4A0E",
    image: "/images/sinchana.jpeg",
  },
  {
    name: "Gayathri Pullaiahgari",
    role: "Researcher",
    contribution: "Art Gallery & Facts",
    initials: "GP",
    bg: "#BCDFEF",
    text: "#0E4A6A",
    image: "/images/gayathri_temp.jpeg",
  },
];
