import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="text-7xl">🕌</div>
      <h1 className="text-3xl font-bold text-foreground" style={{ fontFamily: "'Cinzel', serif" }}>
        Page Not Found
      </h1>
      <p className="text-muted-foreground max-w-sm">
        The page you are looking for doesn't exist. Let's take you back to the map of India.
      </p>
      <button
        onClick={() => setLocation("/")}
        className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
        data-testid="not-found-home"
      >
        Back to Home
      </button>
    </div>
  );
}
