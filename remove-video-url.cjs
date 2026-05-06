const fs = require('fs');

// Read all JSON files
const foodData = JSON.parse(fs.readFileSync('./json-data/food-data.json', 'utf-8'));
const specialtyData = JSON.parse(fs.readFileSync('./json-data/specialty-data.json', 'utf-8'));
const heritageData = JSON.parse(fs.readFileSync('./json-data/heritage-data.json', 'utf-8'));

function removeVideoUrl(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        delete item.videoUrl;
      }
    });
  } else if (typeof obj === 'object' && obj !== null) {
    delete obj.videoUrl;
  }
}

// Remove videoUrl from all items
foodData.forEach(p => p.foodList.forEach(item => delete item.videoUrl));
specialtyData.forEach(p => p.specialtyList.forEach(item => delete item.videoUrl));
heritageData.forEach(p => p.heritageList.forEach(item => delete item.videoUrl));

console.log('Removed videoUrl fields');

// Write back
fs.writeFileSync('./json-data/food-data.json', JSON.stringify(foodData, null, 2));
fs.writeFileSync('./json-data/specialty-data.json', JSON.stringify(specialtyData, null, 2));
fs.writeFileSync('./json-data/heritage-data.json', JSON.stringify(heritageData, null, 2));

console.log('Saved all JSON files');