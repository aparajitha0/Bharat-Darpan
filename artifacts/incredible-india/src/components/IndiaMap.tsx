import { useState } from "react";
import { useLocation } from "wouter";
import { statesData } from "@/data/states";

interface TooltipState {
  name: string;
  x: number;
  y: number;
  visible: boolean;
}

export default function IndiaMap() {
  const [, setLocation] = useLocation();
  const [tooltip, setTooltip] = useState<TooltipState>({ name: "", x: 0, y: 0, visible: false });
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateId: string) => {
    setLocation(`/state/${stateId}`);
  };

  const handleMouseEnter = (stateId: string, e: React.MouseEvent<SVGPathElement>) => {
    const rect = (e.currentTarget.closest("svg") as SVGSVGElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltip({
      name: statesData[stateId]?.name || stateId,
      x,
      y,
      visible: true,
    });
    setHoveredState(stateId);
  };

  const handleMouseMove = (e: React.MouseEvent<SVGPathElement>) => {
    const rect = (e.currentTarget.closest("svg") as SVGSVGElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTooltip(prev => ({ ...prev, x, y }));
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
    setHoveredState(null);
  };

  const stateProps = (id: string, color: string) => ({
    className: "india-state",
    fill: hoveredState === id ? darkenColor(color) : color,
    stroke: "#fff",
    strokeWidth: "1.5",
    strokeLinejoin: "round" as const,
    onClick: () => handleStateClick(id),
    onMouseEnter: (e: React.MouseEvent<SVGPathElement>) => handleMouseEnter(id, e),
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { cursor: "pointer" },
    "data-testid": `map-state-${id}`,
  });

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 800 900"
        className="w-full h-auto drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Decorative background */}
        <defs>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.15)" />
          </filter>
          <radialGradient id="seaGrad" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#e8f4f8" />
            <stop offset="100%" stopColor="#d0e8f0" />
          </radialGradient>
        </defs>

        {/* Sea/water background */}
        <rect width="800" height="900" fill="url(#seaGrad)" rx="8" />

        <g filter="url(#shadow)">
          {/* ===== STATES ===== */}

          {/* Jammu & Kashmir */}
          <path
            {...stateProps("jammu-kashmir", statesData["jammu-kashmir"].mapColor)}
            d="M 215 60 L 230 45 L 260 42 L 285 55 L 295 70 L 310 80 L 315 95 L 305 108 L 285 115 L 270 108 L 255 115 L 240 108 L 225 95 L 215 80 Z"
          />

          {/* Ladakh */}
          <path
            {...stateProps("ladakh", statesData["ladakh"].mapColor)}
            d="M 260 42 L 310 35 L 355 42 L 375 60 L 370 80 L 355 90 L 335 88 L 315 95 L 310 80 L 295 70 L 285 55 Z"
          />

          {/* Himachal Pradesh */}
          <path
            {...stateProps("himachal-pradesh", statesData["himachal-pradesh"].mapColor)}
            d="M 225 95 L 240 108 L 255 115 L 270 108 L 285 115 L 295 125 L 290 140 L 275 148 L 255 145 L 238 138 L 225 125 L 218 112 Z"
          />

          {/* Punjab */}
          <path
            {...stateProps("punjab", statesData["punjab"].mapColor)}
            d="M 180 118 L 215 115 L 225 125 L 218 138 L 210 150 L 195 155 L 178 150 L 165 138 L 168 125 Z"
          />

          {/* Haryana */}
          <path
            {...stateProps("haryana", statesData["haryana"].mapColor)}
            d="M 215 115 L 238 138 L 255 145 L 262 160 L 255 172 L 238 175 L 222 168 L 210 155 L 195 155 L 210 150 L 218 138 Z"
          />

          {/* Delhi */}
          <path
            {...stateProps("delhi", statesData["delhi"].mapColor)}
            d="M 238 175 L 250 170 L 260 178 L 255 188 L 243 190 L 235 183 Z"
          />

          {/* Uttarakhand */}
          <path
            {...stateProps("uttarakhand", statesData["uttarakhand"].mapColor)}
            d="M 255 145 L 275 148 L 295 145 L 318 152 L 325 168 L 315 180 L 298 185 L 278 182 L 262 172 L 255 160 Z"
          />

          {/* Uttar Pradesh */}
          <path
            {...stateProps("uttar-pradesh", statesData["uttar-pradesh"].mapColor)}
            d="M 255 172 L 262 172 L 278 182 L 298 185 L 325 168 L 345 175 L 365 185 L 375 200 L 368 218 L 348 228 L 325 232 L 302 228 L 278 235 L 258 230 L 245 218 L 248 205 L 260 195 L 260 178 L 250 170 Z"
          />

          {/* Rajasthan */}
          <path
            {...stateProps("rajasthan", statesData["rajasthan"].mapColor)}
            d="M 148 152 L 178 150 L 195 155 L 210 155 L 222 168 L 238 175 L 235 183 L 243 190 L 248 205 L 245 218 L 232 235 L 215 248 L 195 258 L 172 265 L 148 268 L 130 258 L 118 242 L 115 222 L 120 202 L 132 185 L 140 168 Z"
          />

          {/* Bihar */}
          <path
            {...stateProps("bihar", statesData["bihar"].mapColor)}
            d="M 345 175 L 375 172 L 400 178 L 415 192 L 412 208 L 398 218 L 375 222 L 355 218 L 340 208 L 340 195 Z"
          />

          {/* Sikkim */}
          <path
            {...stateProps("sikkim", statesData["sikkim"].mapColor)}
            d="M 415 152 L 428 148 L 438 158 L 432 168 L 418 170 L 412 160 Z"
          />

          {/* Arunachal Pradesh */}
          <path
            {...stateProps("arunachal-pradesh", statesData["arunachal-pradesh"].mapColor)}
            d="M 435 132 L 475 122 L 515 128 L 545 138 L 552 152 L 540 162 L 515 165 L 488 162 L 462 165 L 445 158 L 438 145 Z"
          />

          {/* Assam */}
          <path
            {...stateProps("assam", statesData["assam"].mapColor)}
            d="M 435 165 L 462 165 L 488 162 L 515 165 L 530 175 L 532 188 L 518 198 L 498 200 L 475 198 L 455 202 L 438 195 L 432 180 Z"
          />

          {/* Nagaland */}
          <path
            {...stateProps("nagaland", statesData["nagaland"].mapColor)}
            d="M 518 198 L 535 195 L 548 205 L 545 218 L 530 222 L 518 215 Z"
          />

          {/* Manipur */}
          <path
            {...stateProps("manipur", statesData["manipur"].mapColor)}
            d="M 518 215 L 535 215 L 545 228 L 540 242 L 525 248 L 512 240 L 510 228 Z"
          />

          {/* Mizoram */}
          <path
            {...stateProps("mizoram", statesData["mizoram"].mapColor)}
            d="M 510 248 L 525 248 L 532 260 L 528 272 L 515 278 L 502 268 L 500 255 Z"
          />

          {/* Tripura */}
          <path
            {...stateProps("tripura", statesData["tripura"].mapColor)}
            d="M 480 238 L 498 235 L 508 248 L 505 260 L 490 265 L 478 255 Z"
          />

          {/* Meghalaya */}
          <path
            {...stateProps("meghalaya", statesData["meghalaya"].mapColor)}
            d="M 432 200 L 455 202 L 475 205 L 488 215 L 482 228 L 462 232 L 442 228 L 430 218 Z"
          />

          {/* West Bengal */}
          <path
            {...stateProps("west-bengal", statesData["west-bengal"].mapColor)}
            d="M 375 222 L 398 218 L 415 225 L 418 240 L 425 255 L 428 272 L 420 288 L 405 298 L 388 292 L 375 278 L 368 262 L 362 245 L 358 228 Z"
          />

          {/* Jharkhand */}
          <path
            {...stateProps("jharkhand", statesData["jharkhand"].mapColor)}
            d="M 340 208 L 355 218 L 375 222 L 358 228 L 355 242 L 345 255 L 330 258 L 315 248 L 308 235 L 312 218 Z"
          />

          {/* Odisha */}
          <path
            {...stateProps("odisha", statesData["odisha"].mapColor)}
            d="M 355 242 L 362 245 L 368 262 L 375 278 L 372 295 L 358 308 L 340 315 L 322 308 L 308 295 L 305 278 L 315 262 L 325 248 L 340 245 Z"
          />

          {/* Madhya Pradesh */}
          <path
            {...stateProps("madhya-pradesh", statesData["madhya-pradesh"].mapColor)}
            d="M 195 258 L 215 248 L 232 235 L 258 230 L 278 235 L 302 228 L 320 235 L 330 248 L 325 262 L 308 275 L 290 282 L 268 285 L 248 282 L 225 275 L 205 268 Z"
          />

          {/* Chhattisgarh */}
          <path
            {...stateProps("chhattisgarh", statesData["chhattisgarh"].mapColor)}
            d="M 308 235 L 325 232 L 345 238 L 355 252 L 350 268 L 338 278 L 320 282 L 305 275 L 298 262 L 300 248 Z"
          />

          {/* Gujarat */}
          <path
            {...stateProps("gujarat", statesData["gujarat"].mapColor)}
            d="M 115 222 L 130 235 L 130 255 L 118 268 L 105 282 L 95 298 L 88 318 L 95 332 L 108 342 L 118 332 L 128 318 L 138 308 L 148 298 L 155 308 L 158 322 L 152 338 L 140 348 L 125 350 L 108 342 L 95 332 L 82 318 L 78 298 L 82 278 L 90 262 L 100 248 L 108 235 Z"
          />

          {/* Maharashtra */}
          <path
            {...stateProps("maharashtra", statesData["maharashtra"].mapColor)}
            d="M 148 268 L 172 265 L 195 268 L 215 275 L 235 282 L 248 295 L 248 312 L 238 325 L 222 335 L 202 338 L 182 335 L 162 325 L 148 312 L 138 298 L 140 282 Z"
          />

          {/* Goa */}
          <path
            {...stateProps("goa", statesData["goa"].mapColor)}
            d="M 148 338 L 162 335 L 172 342 L 170 352 L 158 358 L 148 350 Z"
          />

          {/* Karnataka */}
          <path
            {...stateProps("karnataka", statesData["karnataka"].mapColor)}
            d="M 162 325 L 182 335 L 202 338 L 222 345 L 232 358 L 228 375 L 218 390 L 202 402 L 182 408 L 162 405 L 145 395 L 135 378 L 132 360 L 138 345 L 150 338 Z"
          />

          {/* Andhra Pradesh */}
          <path
            {...stateProps("andhra-pradesh", statesData["andhra-pradesh"].mapColor)}
            d="M 232 315 L 248 312 L 265 318 L 282 325 L 295 340 L 300 358 L 295 375 L 280 388 L 262 395 L 245 392 L 228 385 L 218 372 L 222 358 L 232 345 Z"
          />

          {/* Telangana */}
          <path
            {...stateProps("telangana", statesData["telangana"].mapColor)}
            d="M 248 282 L 268 285 L 290 282 L 308 288 L 315 302 L 308 318 L 295 328 L 278 332 L 262 328 L 248 315 L 242 302 Z"
          />

          {/* Tamil Nadu */}
          <path
            {...stateProps("tamil-nadu", statesData["tamil-nadu"].mapColor)}
            d="M 182 408 L 202 402 L 218 405 L 230 418 L 235 435 L 232 452 L 222 465 L 208 475 L 195 468 L 185 455 L 178 440 L 175 425 Z"
          />

          {/* Kerala */}
          <path
            {...stateProps("kerala", statesData["kerala"].mapColor)}
            d="M 145 395 L 162 405 L 178 412 L 182 428 L 178 445 L 172 462 L 162 475 L 150 478 L 140 468 L 135 452 L 138 435 L 142 418 Z"
          />

          {/* ===== NORTHEAST STATES ===== */}

        </g>

        {/* State Labels */}
        <g className="pointer-events-none select-none" fontSize="8" fontFamily="Inter, sans-serif" fill="#2d1a0e" fontWeight="600">
          <text x="250" y="82" textAnchor="middle" fontSize="7">J&K</text>
          <text x="330" y="65" textAnchor="middle" fontSize="7">Ladakh</text>
          <text x="258" y="130" textAnchor="middle" fontSize="7">H.P.</text>
          <text x="193" y="138" textAnchor="middle" fontSize="7">Punjab</text>
          <text x="225" y="158" textAnchor="middle" fontSize="7">Haryana</text>
          <text x="248" y="182" textAnchor="middle" fontSize="6">Delhi</text>
          <text x="290" y="165" textAnchor="middle" fontSize="7">Uttarakhand</text>
          <text x="305" y="205" textAnchor="middle" fontSize="7">Uttar Pradesh</text>
          <text x="380" y="200" textAnchor="middle" fontSize="7">Bihar</text>
          <text x="425" y="162" textAnchor="middle" fontSize="6">Sikkim</text>
          <text x="490" y="145" textAnchor="middle" fontSize="7">Arunachal Pradesh</text>
          <text x="483" y="182" textAnchor="middle" fontSize="7">Assam</text>
          <text x="532" y="210" textAnchor="middle" fontSize="6">Nagaland</text>
          <text x="528" y="232" textAnchor="middle" fontSize="6">Manipur</text>
          <text x="515" y="262" textAnchor="middle" fontSize="6">Mizoram</text>
          <text x="490" y="252" textAnchor="middle" fontSize="6">Tripura</text>
          <text x="460" y="218" textAnchor="middle" fontSize="6">Meghalaya</text>
          <text x="395" y="258" textAnchor="middle" fontSize="7">West Bengal</text>
          <text x="340" y="235" textAnchor="middle" fontSize="7">Jharkhand</text>
          <text x="338" y="282" textAnchor="middle" fontSize="7">Odisha</text>
          <text x="258" y="262" textAnchor="middle" fontSize="7">Madhya Pradesh</text>
          <text x="318" y="258" textAnchor="middle" fontSize="7">Chhattisgarh</text>
          <text x="108" y="295" textAnchor="middle" fontSize="7">Gujarat</text>
          <text x="192" y="308" textAnchor="middle" fontSize="7">Maharashtra</text>
          <text x="158" y="346" textAnchor="middle" fontSize="6">Goa</text>
          <text x="180" y="370" textAnchor="middle" fontSize="7">Karnataka</text>
          <text x="262" y="358" textAnchor="middle" fontSize="7">Andhra Pradesh</text>
          <text x="278" y="308" textAnchor="middle" fontSize="7">Telangana</text>
          <text x="185" y="248" textAnchor="middle" fontSize="7">Rajasthan</text>
          <text x="205" y="442" textAnchor="middle" fontSize="7">Tamil Nadu</text>
          <text x="152" y="440" textAnchor="middle" fontSize="7">Kerala</text>
        </g>

        {/* Tooltip */}
        {tooltip.visible && (
          <g>
            <rect
              x={tooltip.x - 55}
              y={tooltip.y - 32}
              width={110}
              height={24}
              rx={6}
              fill="rgba(45, 26, 14, 0.88)"
            />
            <text
              x={tooltip.x}
              y={tooltip.y - 16}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
            >
              {tooltip.name}
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

function darkenColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`;
}
