import { useState } from "react";
import type { MouseEvent } from "react";
import { useLocation } from "wouter";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { statesData } from "@/data/states";
import indiaGeoJson from "@/data/india_states.json";

interface TooltipState {
  name: string;
  x: number;
  y: number;
  visible: boolean;
}

// Map GeoJSON state names to our stateId slugs
const geoNameToId: Record<string, string> = {
  "Andaman and Nicobar": "andaman-nicobar",
  "Andhra Pradesh": "andhra-pradesh",
  "Arunachal Pradesh": "arunachal-pradesh",
  "Assam": "assam",
  "Bihar": "bihar",
  "Chandigarh": "chandigarh",
  "Chhattisgarh": "chhattisgarh",
  "Dadra and Nagar Haveli": "dadra-nagar-haveli",
  "Daman and Diu": "daman-diu",
  "Delhi": "delhi",
  "Goa": "goa",
  "Gujarat": "gujarat",
  "Haryana": "haryana",
  "Himachal Pradesh": "himachal-pradesh",
  "Jammu and Kashmir": "jammu-kashmir",
  "Jharkhand": "jharkhand",
  "Karnataka": "karnataka",
  "Kerala": "kerala",
  "Lakshadweep": "lakshadweep",
  "Madhya Pradesh": "madhya-pradesh",
  "Maharashtra": "maharashtra",
  "Manipur": "manipur",
  "Meghalaya": "meghalaya",
  "Mizoram": "mizoram",
  "Nagaland": "nagaland",
  "Orissa": "odisha",
  "Puducherry": "puducherry",
  "Punjab": "punjab",
  "Rajasthan": "rajasthan",
  "Sikkim": "sikkim",
  "Tamil Nadu": "tamil-nadu",
  "Tripura": "tripura",
  "Uttar Pradesh": "uttar-pradesh",
  "Uttaranchal": "uttarakhand",
  "West Bengal": "west-bengal",
};

// Fallback color for states not in our data (UTs etc.)
const defaultColors: Record<string, string> = {
  "andaman-nicobar": "#89C4C4",
  "chandigarh": "#D4A8A8",
  "dadra-nagar-haveli": "#C4B488",
  "daman-diu": "#B4C894",
  "lakshadweep": "#94B4D4",
  "puducherry": "#D4A4C4",
  "ladakh": "#B4C8E4",
};

function getStateColor(stateId: string): string {
  if (statesData[stateId]) return statesData[stateId].mapColor;
  return defaultColors[stateId] || "#D4C5A9";
}

function getStateName(geoName: string): string {
  const stateId = geoNameToId[geoName];
  if (stateId && statesData[stateId]) return statesData[stateId].name;
  // Normalize Orissa → Odisha, Uttaranchal → Uttarakhand
  if (geoName === "Orissa") return "Odisha";
  if (geoName === "Uttaranchal") return "Uttarakhand";
  return geoName;
}

export default function IndiaMap() {
  const [, setLocation] = useLocation();
  const [tooltip, setTooltip] = useState<TooltipState>({ name: "", x: 0, y: 0, visible: false });
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null);

  const handleClick = (geoName: string) => {
    const stateId = geoNameToId[geoName];
    if (stateId && statesData[stateId]) {
      setLocation(`/state/${stateId}`);
    } else if (stateId) {
      setLocation(`/state/${stateId}`);
    }
  };

  return (
    <div className="relative w-full select-none">
      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="absolute z-50 px-3 py-1.5 bg-[hsl(20,30%,12%)] text-white text-xs font-semibold rounded-lg shadow-lg pointer-events-none whitespace-nowrap"
          style={{
            left: tooltip.x,
            top: tooltip.y - 40,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.name}
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [82.5, 22],
        }}
        width={600}
        height={700}
        style={{ width: "100%", height: "auto" }}
        data-testid="india-map"
      >
        <Geographies geography={indiaGeoJson as object}>
          {({ geographies }: { geographies: import("react-simple-maps").Geography[] }) =>
            geographies.map((geo: import("react-simple-maps").Geography) => {
              const geoName = geo.properties["NAME_1"] as string;
              const stateId = geoNameToId[geoName];
              const color = getStateColor(stateId || "");

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-testid={`map-state-${stateId || geoName}`}
                  style={{
                    default: {
                      fill: color,
                      stroke: "#ffffff",
                      strokeWidth: 0.8,
                      outline: "none",
                    },
                    hover: {
                      fill: adjustColor(color, -25),
                      stroke: "#ffffff",
                      strokeWidth: 1.2,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: adjustColor(color, -40),
                      stroke: "#ffffff",
                      strokeWidth: 1.2,
                      outline: "none",
                    },
                  }}
                  onClick={() => handleClick(geoName)}
                  onMouseEnter={(e: MouseEvent<SVGPathElement>) => {
                    const containerRect = (e.currentTarget.closest("div") as HTMLDivElement).getBoundingClientRect();
                    setTooltip({
                      name: getStateName(geoName),
                      x: e.clientX - containerRect.left,
                      y: e.clientY - containerRect.top,
                      visible: true,
                    });
                    setHoveredGeo(geoName);
                  }}
                  onMouseMove={(e: MouseEvent<SVGPathElement>) => {
                    const containerRect = (e.currentTarget.closest("div") as HTMLDivElement).getBoundingClientRect();
                    setTooltip(prev => ({
                      ...prev,
                      x: e.clientX - containerRect.left,
                      y: e.clientY - containerRect.top,
                    }));
                  }}
                  onMouseLeave={() => {
                    setTooltip(prev => ({ ...prev, visible: false }));
                    setHoveredGeo(null);
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

function adjustColor(hexColor: string, amount: number): string {
  const hex = hexColor.replace("#", "");
  const r = Math.max(0, Math.min(255, parseInt(hex.slice(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(hex.slice(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(hex.slice(4, 6), 16) + amount));
  return `rgb(${r}, ${g}, ${b})`;
}
