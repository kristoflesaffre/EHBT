#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");

const IMAGE_GROUPS = [
  { dir: "img/vragen", widths: [360, 720, 1200] },
  { dir: "img/therapieen", widths: [360, 720, 1200] },
  { dir: "img/concepten", widths: [360, 720, 1200] },
  { dir: "img/hechting", widths: [360, 720, 1200] },
  { dir: "img/stoornissen", widths: [360, 720, 1200] },
  { dir: "img/page-headers", widths: [640, 960, 1440] },
  { dir: "img/hero", widths: [768, 1280, 1920] },
  { dir: "img/covers", widths: [160, 320, 480] }
];

const VALID_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

function fallbackExtFor(ext) {
  const normalized = ext.toLowerCase();
  if (normalized === ".png") return ".png";
  if (normalized === ".gif") return ".gif";
  return ".jpg";
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(entry => entry.isFile() && VALID_EXTS.has(path.extname(entry.name).toLowerCase()))
    .map(entry => path.join(dir, entry.name));
}

function renderVariant(inputPath, outputPath, width, format, quality) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const args = [
    inputPath,
    "-auto-orient",
    "-strip",
    "-resize", `${width}x>`,
    "-quality", String(quality)
  ];

  if (format === "webp") {
    args.push("-define", "webp:method=6");
  }

  args.push(outputPath);
  execFileSync("magick", args, { stdio: "ignore" });
}

function generateForFile(inputPath, widths) {
  const ext = path.extname(inputPath);
  const name = path.basename(inputPath, ext);
  const dir = path.dirname(inputPath);
  const responsiveDir = path.join(dir, "_responsive");
  const fallbackExt = fallbackExtFor(ext);
  const srcStat = fs.statSync(inputPath);

  let created = 0;

  for (const width of widths) {
    const fallbackOut = path.join(responsiveDir, `${name}-${width}${fallbackExt}`);
    const webpOut = path.join(responsiveDir, `${name}-${width}.webp`);

    if (!fs.existsSync(fallbackOut) || fs.statSync(fallbackOut).mtimeMs < srcStat.mtimeMs) {
      renderVariant(inputPath, fallbackOut, width, fallbackExt.slice(1), 82);
      created += 1;
    }

    if (!fs.existsSync(webpOut) || fs.statSync(webpOut).mtimeMs < srcStat.mtimeMs) {
      renderVariant(inputPath, webpOut, width, "webp", 78);
      created += 1;
    }
  }

  return created;
}

let processed = 0;
let generated = 0;

for (const group of IMAGE_GROUPS) {
  const dir = path.join(ROOT, group.dir);
  const images = listImages(dir);
  for (const imagePath of images) {
    processed += 1;
    generated += generateForFile(imagePath, group.widths);
  }
}

console.log(`Responsive beelden klaar: ${processed} originelen verwerkt, ${generated} varianten aangemaakt/ververst.`);
