import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const ATTACHED_ASSETS_DIR = path.resolve(
  import.meta.dirname,
  "..",
  "..",
  "attached_assets",
);

/**
 * Serves attached_assets at /attached_assets/<file> so image imports never
 * use Vite's /@fs/ prefix (which the Replit proxy strips the ?import query
 * from, causing a MIME-type mismatch in the browser).
 */
function attachedAssetsPlugin() {
  return {
    name: "attached-assets-serve",
    // Resolve @assets/foo.png → virtual:attached-asset:foo.png
    resolveId(id: string) {
      const prefix = "@assets/";
      if (id.startsWith(prefix)) {
        return `\0virtual:attached-asset:${id.slice(prefix.length)}`;
      }
    },
    // Load the virtual module as a JS module that exports the public URL
    load(id: string) {
      const marker = "\0virtual:attached-asset:";
      if (id.startsWith(marker)) {
        const file = id.slice(marker.length);
        return `export default "/attached_assets/${file}";`;
      }
    },
    // Serve the raw file at /attached_assets/<file> in dev
    configureServer(server: import("vite").ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const prefix = "/attached_assets/";
        if (req.url && req.url.startsWith(prefix)) {
          const file = req.url.slice(prefix.length).split("?")[0];
          const filePath = path.join(ATTACHED_ASSETS_DIR, file);
          if (fs.existsSync(filePath)) {
            res.setHeader("Cache-Control", "no-store");
            const ext = path.extname(file).toLowerCase();
            const mimeMap: Record<string, string> = {
              ".png": "image/png",
              ".jpg": "image/jpeg",
              ".jpeg": "image/jpeg",
              ".gif": "image/gif",
              ".webp": "image/webp",
              ".svg": "image/svg+xml",
            };
            res.setHeader("Content-Type", mimeMap[ext] ?? "application/octet-stream");
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
  };
}

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    attachedAssetsPlugin(),
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    headers: process.env.NODE_ENV !== "production" ? {
      "Cache-Control": "no-store",
    } : {},
    fs: {
      strict: true,
      allow: [
        path.resolve(import.meta.dirname),
        path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
      ],
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
