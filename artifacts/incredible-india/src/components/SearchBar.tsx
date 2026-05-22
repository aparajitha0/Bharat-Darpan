import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { searchIndex, type SearchEntry } from "@/data/searchIndex";

const SAFFRON = "#FF9933";
const SAFFRON_DARK = "#E07010";
const GOLD = "#F5C518";
const RED_BG = "#5A0E0E";
const RED_DEEP = "#3D0808";

const QUICK_TAGS = [
  "Diwali",
  "Taj Mahal",
  "Onam",
  "Durga Puja",
  "Pongal",
  "Hawa Mahal",
];

const CATEGORY_EMOJI: Record<string, string> = {
  Festival: "🎉",
  Monument: "🏛️",
  "Art & Craft": "🎨",
  Cuisine: "🍛",
  "Culture & Tradition": "🪔",
  "Heritage Site": "🏺",
  State: "🗺️",
  Fact: "💡",
};

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark
        style={{
          background: SAFFRON + "44",
          color: "inherit",
          borderRadius: 2,
          padding: "0 1px",
        }}
      >
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

function search(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((e) => e.term.toLowerCase().includes(q));
}

export default function SearchBar() {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const runSearch = useCallback((q: string) => {
    const found = search(q);
    setResults(found);
    setOpen(found.length > 0);
    setActiveIdx(-1);
  }, []);

  useEffect(() => {
    if (query.trim().length > 0) {
      runSearch(query);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query, runSearch]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function navigate(entry: SearchEntry) {
    setOpen(false);
    setQuery(entry.term);
    setLocation(entry.page);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || results.length === 0) {
      if (e.key === "Enter" && query.trim()) {
        runSearch(query);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0 && activeIdx < results.length) {
        navigate(results[activeIdx]);
      } else if (results.length === 1) {
        navigate(results[0]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleTagClick(tag: string) {
    setQuery(tag);
    inputRef.current?.focus();
    const found = search(tag);
    setResults(found);
    setOpen(found.length > 0);
    setActiveIdx(-1);
  }

  function handleSearchClick() {
    if (query.trim()) {
      runSearch(query);
    }
  }

  return (
    <div
      className="w-full flex flex-col items-center px-4 py-8"
      style={{
        background: `linear-gradient(180deg, rgba(61,8,8,0) 0%, rgba(61,8,8,0.6) 50%, rgba(61,8,8,0) 100%)`,
      }}
    >
      <div ref={containerRef} className="w-full" style={{ maxWidth: 580 }}>
        {/* Search bar */}
        <div className="relative">
          <div
            className="flex items-center overflow-visible"
            style={{
              borderRadius: 50,
              border: `2px solid ${SAFFRON}`,
              background: "rgba(255,255,255,0.97)",
              boxShadow: `0 0 24px rgba(255,153,51,0.35), 0 4px 16px rgba(0,0,0,0.2)`,
            }}
          >
            {/* Search icon */}
            <span
              className="pl-5 pr-2 text-lg flex-shrink-0 select-none"
              style={{ color: SAFFRON }}
            >
              🔍
            </span>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => {
                if (results.length > 0) setOpen(true);
              }}
              placeholder="Search festivals, monuments, traditions…"
              className="flex-1 bg-transparent outline-none text-sm py-3 pr-2"
              style={{
                color: "#1a0505",
                fontFamily: "'Lora', serif",
                fontSize: "0.93rem",
              }}
              autoComplete="off"
            />

            {/* Search button */}
            <button
              onClick={handleSearchClick}
              className="flex items-center gap-2 px-5 py-3 font-bold text-sm flex-shrink-0 transition-all"
              style={{
                borderRadius: "0 48px 48px 0",
                background: `linear-gradient(135deg, ${SAFFRON} 0%, ${SAFFRON_DARK} 100%)`,
                color: "#fff",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.04em",
                border: "none",
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              <span style={{ fontSize: "1rem" }}>☸</span>
              Search
            </button>
          </div>

          {/* Dropdown results */}
          {open && results.length > 0 && (
            <div
              className="absolute left-0 right-0 mt-2 rounded-2xl overflow-hidden z-50"
              style={{
                background: "#fffbf0",
                border: `1.5px solid ${SAFFRON}`,
                boxShadow: `0 8px 32px rgba(255,153,51,0.25), 0 4px 16px rgba(0,0,0,0.2)`,
                maxHeight: 360,
                overflowY: "auto",
              }}
            >
              {results.length > 12 && (
                <div
                  className="px-4 py-2 text-xs font-medium border-b"
                  style={{
                    color: SAFFRON_DARK,
                    borderColor: SAFFRON + "33",
                    background: SAFFRON + "10",
                    fontFamily: "'Lora', serif",
                  }}
                >
                  {results.length} results — type more to narrow down
                </div>
              )}
              {results.map((entry, idx) => (
                <button
                  key={`${entry.page}-${entry.term}-${idx}`}
                  className="w-full text-left flex items-start gap-3 px-4 py-2.5 transition-colors"
                  style={{
                    background:
                      idx === activeIdx ? SAFFRON + "22" : "transparent",
                    borderBottom:
                      idx < results.length - 1
                        ? `1px solid ${SAFFRON}22`
                        : "none",
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => navigate(entry)}
                >
                  <span className="text-base mt-0.5 flex-shrink-0">
                    {CATEGORY_EMOJI[entry.category] ?? "📍"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-sm font-semibold leading-tight"
                      style={{ color: RED_DEEP, fontFamily: "'Cinzel', serif" }}
                    >
                      {highlight(entry.term, query)}
                    </div>
                    <div
                      className="text-xs mt-0.5 flex items-center gap-1.5"
                      style={{ color: "#7a4010" }}
                    >
                      <span
                        className="px-1.5 py-0.5 rounded-full text-[10px] font-medium"
                        style={{
                          background: SAFFRON + "28",
                          color: SAFFRON_DARK,
                        }}
                      >
                        {entry.category}
                      </span>
                      <span>·</span>
                      <span>{entry.stateName}</span>
                    </div>
                  </div>
                  <span
                    className="text-xs self-center flex-shrink-0 opacity-50"
                    style={{ color: SAFFRON_DARK }}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Helper text */}
        <p
          className="text-center mt-3 text-xs"
          style={{
            color: GOLD,
            opacity: 0.75,
            fontFamily: "'Lora', serif",
            fontStyle: "italic",
          }}
        >
          Results will take you directly to the relevant page.
        </p>

        {/* Quick tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {QUICK_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="text-xs font-medium px-4 py-1.5 transition-all"
              style={{
                borderRadius: 50,
                border: `1.5px solid ${SAFFRON}80`,
                color: GOLD,
                background: "rgba(255,153,51,0.08)",
                fontFamily: "'Lora', serif",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = SAFFRON + "28";
                e.currentTarget.style.borderColor = SAFFRON;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,153,51,0.08)";
                e.currentTarget.style.borderColor = SAFFRON + "80";
                e.currentTarget.style.color = GOLD;
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
