const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "app/assets";
const outputDir = "app/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function getConfig(file) {
  const name = file.toLowerCase();

  // HERO / великий банер
  if (name.includes("big") || name.includes("hero") || name.includes("image")) {
    return {
      width: 1600,
      quality: 85,
    };
  }

  // звичайні фото
  if (name.includes("school") || name.includes("car") || name.includes("gulbil")) {
    return {
      width: 1200,
      quality: 80,
    };
  }

  // дрібні фото
  return {
    width: 900,
    quality: 75,
  };
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const inputPath = path.join(inputDir, file);

  const config = getConfig(file);

  const isPng = ext === ".png";

  const outputPath = path.join(
    outputDir,
    path.basename(file, ext) + (isPng ? ".png" : ".webp")
  );

  let pipeline = sharp(inputPath).resize({
    width: config.width,
    withoutEnlargement: true,
  });

  if (isPng) {
    pipeline = pipeline.png({
      compressionLevel: 9,
      quality: 100,
    });
  } else {
    pipeline = pipeline.webp({
      quality: config.quality,
      effort: 6,
    });
  }

  pipeline
    .toFile(outputPath)
    .then(() => {
      console.log(`✔ ${file} → ${path.basename(outputPath)} (${config.width}px)`);
    })
    .catch(err => {
      console.error(`✖ ${file}`, err);
    });
});