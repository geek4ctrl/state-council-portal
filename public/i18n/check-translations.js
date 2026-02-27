const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('./fr.json', 'utf8'));
const kg = JSON.parse(fs.readFileSync('./kg.json', 'utf8'));
const ln = JSON.parse(fs.readFileSync('./ln.json', 'utf8'));
const sw = JSON.parse(fs.readFileSync('./sw.json', 'utf8'));
const ts = JSON.parse(fs.readFileSync('./ts.json', 'utf8'));

function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (let key in obj) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], path));
    } else {
      keys.push(path);
    }
  }
  return keys;
}

const enKeys = getAllKeys(en).sort();
const frKeys = getAllKeys(fr).sort();
const kgKeys = getAllKeys(kg).sort();
const lnKeys = getAllKeys(ln).sort();
const swKeys = getAllKeys(sw).sort();
const tsKeys = getAllKeys(ts).sort();

console.log('=== Translation Key Count ===');
console.log('EN (English):', enKeys.length);
console.log('FR (French):', frKeys.length);
console.log('KG (Kikongo):', kgKeys.length);
console.log('LN (Lingala):', lnKeys.length);
console.log('SW (Swahili):', swKeys.length);
console.log('TS (Tshiluba):', tsKeys.length);

console.log('\n=== Missing Keys Analysis ===');

const missingInKG = enKeys.filter(k => !kgKeys.includes(k));
const missingInLN = enKeys.filter(k => !lnKeys.includes(k));
const missingInSW = enKeys.filter(k => !swKeys.includes(k));
const missingInTS = enKeys.filter(k => !tsKeys.includes(k));

console.log('\nKikongo missing:', missingInKG.length, 'keys');
if (missingInKG.length > 0) {
  console.log('First 10:', missingInKG.slice(0, 10));
}

console.log('\nLingala missing:', missingInLN.length, 'keys');
if (missingInLN.length > 0) {
  console.log('First 10:', missingInLN.slice(0, 10));
}

console.log('\nSwahili missing:', missingInSW.length, 'keys');
if (missingInSW.length > 0) {
  console.log('First 10:', missingInSW.slice(0, 10));
}

console.log('\nTshiluba missing:', missingInTS.length, 'keys');
if (missingInTS.length > 0) {
  console.log('First 10:', missingInTS.slice(0, 10));
}

console.log('\n=== Completion Status ===');
console.log('EN vs FR:', frKeys.length === enKeys.length ? '✓ Complete' : '✗ Incomplete');
console.log('EN vs KG:', kgKeys.length === enKeys.length ? '✓ Complete' : `✗ Missing ${enKeys.length - kgKeys.length} keys`);
console.log('EN vs LN:', lnKeys.length === enKeys.length ? '✓ Complete' : `✗ Missing ${enKeys.length - lnKeys.length} keys`);
console.log('EN vs SW:', swKeys.length === enKeys.length ? '✓ Complete' : `✗ Missing ${enKeys.length - swKeys.length} keys`);
console.log('EN vs TS:', tsKeys.length === enKeys.length ? '✓ Complete' : `✗ Missing ${enKeys.length - tsKeys.length} keys`);
