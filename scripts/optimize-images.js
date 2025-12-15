// scripts/optimize-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Configuration
const CONFIG = {
  maxWidth: 1920, // Maximum width for large images
  mediumWidth: 1200, // For medium-sized images
  smallWidth: 800, // For thumbnails
  quality: 85, // WebP quality (0-100)
  formats: ['webp', 'jpg'], // Generate both WebP and optimized JPG
};

async function optimizeImage(inputPath, outputDir, filename) {
  const fileExt = path.extname(filename).toLowerCase();
  const baseName = path.basename(filename, fileExt);
  
  // Skip if already optimized
  if (filename.includes('_optimized') || filename.includes('.webp')) {
    console.log(`Skipping ${filename} (already optimized)`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`Optimizing ${filename}...`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024).toFixed(1)}KB`);
    
    // Determine target width based on image size
    let targetWidth = CONFIG.mediumWidth;
    if (metadata.width > CONFIG.maxWidth) {
      targetWidth = CONFIG.maxWidth;
    } else if (metadata.width < CONFIG.smallWidth) {
      targetWidth = metadata.width; // Keep original if smaller
    }
    
    // Generate WebP version
    if (CONFIG.formats.includes('webp')) {
      const webpPath = path.join(outputDir, `${baseName}.webp`);
      await image
        .resize(targetWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ 
          quality: CONFIG.quality,
          effort: 6 // Maximum compression effort
        })
        .toFile(webpPath);
      
      const webpStats = fs.statSync(webpPath);
      console.log(`  WebP: ${targetWidth}x${Math.round(targetWidth * (metadata.height / metadata.width))}, ${(webpStats.size / 1024).toFixed(1)}KB`);
    }
    
    // Generate optimized JPG version
    if (CONFIG.formats.includes('jpg') && ['.jpg', '.jpeg', '.png'].includes(fileExt)) {
      const jpgPath = path.join(outputDir, `${baseName}_optimized.jpg`);
      await image
        .resize(targetWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .jpeg({ 
          quality: CONFIG.quality,
          mozjpeg: true // Better compression
        })
        .toFile(jpgPath);
      
      const jpgStats = fs.statSync(jpgPath);
      console.log(`  JPG: ${targetWidth}x${Math.round(targetWidth * (metadata.height / metadata.width))}, ${(jpgStats.size / 1024).toFixed(1)}KB`);
    }
    
    // Also optimize the original PNG/JPG if needed
    if (['.png', '.jpg', '.jpeg'].includes(fileExt)) {
      const optimizedOriginalPath = path.join(outputDir, `${baseName}_optimized${fileExt}`);
      await image
        .resize(targetWidth, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .toFormat(fileExt.replace('.', ''))
        .toFile(optimizedOriginalPath);
    }
    
  } catch (error) {
    console.error(`Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeDirectory(dirPath) {
  console.log(`\n📁 Processing directory: ${dirPath}`);
  
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory ${dirPath} doesn't exist. Skipping.`);
    return;
  }
  
  const files = fs.readdirSync(dirPath);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file)
  );
  
  if (imageFiles.length === 0) {
    console.log('No images found in directory.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize.`);
  
  // Process each image
  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file);
    await optimizeImage(inputPath, dirPath, file);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  // Directories to optimize
  const directories = [
    'public/hobbies',
    'public/projects',
    'public' // For earth.png and hamza.png
  ];
  
  // Process each directory
  for (const dir of directories) {
    await optimizeDirectory(dir);
  }
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Summary:');
  console.log('- WebP versions created for better compression');
  console.log('- JPG versions optimized with mozjpeg');
  console.log('- Images resized to appropriate dimensions');
  console.log('- Original files preserved (not overwritten)');
}

// Run the script
main().catch(console.error);