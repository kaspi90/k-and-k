/**
 * Lokale Vorschau des Produktions-Builds – ohne zusätzliche Abhängigkeiten.
 * Verhält sich wie das Hosting (vercel.json, Preset „Other“):
 *   1. Weiterleitungen aus vercel.json (308, Anker bleibt im Browser erhalten)
 *   2. statische Datei bzw. Verzeichnis-index.html
 *   3. sonst 404.html mit HTTP-Status 404
 * Aufruf: npm run preview [-- --port 4173]
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const BUILD = path.join(ROOT, "build");
const { redirects = [] } = require(path.join(ROOT, "vercel.json"));
const portArg = process.argv.indexOf("--port");
const PORT = Number(portArg > -1 ? process.argv[portArg + 1] : process.env.PORT || 4173);
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".map": "application/json",
};

/** Unterstützt die in vercel.json genutzten Muster: exakte Pfade und `:path*`. */
function matchRedirect(pathname) {
  for (const rule of redirects) {
    if (rule.source.endsWith("/:path*")) {
      const base = rule.source.slice(0, -"/:path*".length);
      if (pathname.startsWith(base + "/")) {
        const rest = pathname.slice(base.length + 1);
        return { location: rule.destination.replace(":path*", rest), permanent: rule.permanent };
      }
    } else if (pathname === rule.source) {
      return { location: rule.destination, permanent: rule.permanent };
    }
  }
  return null;
}

function resolveFile(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const file of [path.join(BUILD, clean), path.join(BUILD, clean, "index.html")]) {
    if (!file.startsWith(BUILD)) continue;
    if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
}

http
  .createServer((req, res) => {
    const pathname = decodeURIComponent((req.url || "/").split("?")[0]);
    const redirect = matchRedirect(pathname.replace(/\/+$/, "") || "/");
    if (redirect) {
      res.writeHead(redirect.permanent ? 308 : 307, { Location: redirect.location });
      res.end();
      return;
    }
    const file = resolveFile(pathname);
    const target = file || path.join(BUILD, "404.html");
    res.writeHead(file ? 200 : 404, { "Content-Type": TYPES[path.extname(target)] || "application/octet-stream" });
    fs.createReadStream(target).pipe(res);
  })
  .listen(PORT, () => console.log(`Vorschau: http://localhost:${PORT}`));
