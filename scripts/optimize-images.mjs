import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const publicDir = path.join(root, "public");
const outputRoot = path.join(publicDir, "_optimized");
const widths = [320, 640, 900, 1400, 1800];
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function* walk(dir) {
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_optimized") continue;
      yield* walk(absolute);
    } else if (entry.isFile() && imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      yield absolute;
    }
  }
}

async function optimizeOne(file) {
  const relative = path.relative(publicDir, file);
  const parsed = path.parse(relative);

  for (const width of widths) {
    const output = path.join(outputRoot, `w${width}`, parsed.dir, `${parsed.name}.webp`);
    await fs.mkdir(path.dirname(output), { recursive: true });

    await sharp(file)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(output);
  }
}

async function main() {
  await fs.rm(outputRoot, { recursive: true, force: true });

  const files = [];
  for await (const file of walk(publicDir)) {
    files.push(file);
  }

  await Promise.all(files.map(optimizeOne));
  console.log(`Optimized ${files.length} public image(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
