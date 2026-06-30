import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const SUPPORTED = ['.webp', '.jpg', '.jpeg', '.png'];
const MAX_WIDTH = 1920;
const QUALITY = 78;

async function getAllImages(dir) {
  let images = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      images = images.concat(await getAllImages(fullPath));
    } else if (SUPPORTED.includes(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }
  return images;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function optimizeImage(filePath) {
  const before = (await stat(filePath)).size;
  const name = basename(filePath);

  try {
    // Leer en buffer primero para evitar bloqueo de archivo
    const inputBuffer = await readFile(filePath);
    const image = sharp(inputBuffer);
    const meta = await image.metadata();

    const pipeline = (meta.width && meta.width > MAX_WIDTH)
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;

    // Comprimir a buffer en memoria (sin escribir archivo temporal)
    const outputBuffer = await pipeline
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer();

    // Solo reemplazar si el resultado es más pequeño
    if (outputBuffer.length < before) {
      await writeFile(filePath, outputBuffer);
      const after = outputBuffer.length;
      const saved = ((before - after) / before * 100).toFixed(1);
      console.log(`✅ ${name}`);
      console.log(`   ${formatSize(before)} → ${formatSize(after)} (-${saved}%)`);
      return { before, after };
    } else {
      console.log(`➡️  ${name} (ya está optimizada, sin cambios)`);
      return { before, after: before };
    }
  } catch (err) {
    console.error(`❌ Error en ${name}: ${err.message}`);
    return { before, after: before };
  }
}

async function main() {
  console.log('🚀 Optimizando imágenes en /public...\n');
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`📁 Encontradas ${images.length} imágenes\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    const { before, after } = await optimizeImage(img);
    totalBefore += before;
    totalAfter += after;
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 TOTAL: ${formatSize(totalBefore)} → ${formatSize(totalAfter)}`);
  console.log(`💾 Ahorro total: ${formatSize(totalBefore - totalAfter)} (${((totalBefore - totalAfter) / totalBefore * 100).toFixed(1)}%)`);
  console.log('✨ ¡Listo!');
}

main();
