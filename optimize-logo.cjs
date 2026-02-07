const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "src/assets/movix-logo (3).png");
const outputPath = path.join(__dirname, "src/assets/logo-optimized.webp");
const outputPathPng = path.join(__dirname, "src/assets/logo-optimized.png");

async function optimizeLogo() {
  try {
    // Create WebP version (best compression)
    await sharp(inputPath)
      .resize(120, 200, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log("✓ Created WebP logo: logo-optimized.webp");

    // Also create optimized PNG for fallback
    await sharp(inputPath)
      .resize(120, 200, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .png({
        quality: 85,
        compressionLevel: 9,
      })
      .toFile(outputPathPng);

    console.log("✓ Created PNG logo: logo-optimized.png");

    // Get file sizes
    const fs = require("fs");
    const originalSize = fs.statSync(inputPath).size;
    const webpSize = fs.statSync(outputPath).size;
    const pngSize = fs.statSync(outputPathPng).size;

    console.log(`\nOriginal: ${(originalSize / 1024).toFixed(1)} KB`);
    console.log(
      `Optimized WebP: ${(webpSize / 1024).toFixed(1)} KB (${((1 - webpSize / originalSize) * 100).toFixed(1)}% smaller)`,
    );
    console.log(
      `Optimized PNG: ${(pngSize / 1024).toFixed(1)} KB (${((1 - pngSize / originalSize) * 100).toFixed(1)}% smaller)`,
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

optimizeLogo();
