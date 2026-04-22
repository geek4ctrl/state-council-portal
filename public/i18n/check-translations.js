const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./en.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('./fr.json', 'utf8'));
const kg = JSON.parse(fs.readFileSync('./kg.json', 'utf8'));
const ln = JSON.parse(fs.readFileSync('./ln.json', 'utf8'));
const sw = JSON.parse(fs.readFileSync('./sw.json', 'utf8'));
const ts = JSON.parse(fs.readFileSync('./ts.json', 'utf8'));
const pt = JSON.parse(fs.readFileSync('./pt.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('./es.json', 'utf8'));
const de = JSON.parse(fs.readFileSync('./de.json', 'utf8'));
const it = JSON.parse(fs.readFileSync('./it.json', 'utf8'));

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
const ptKeys = getAllKeys(pt).sort();
const esKeys = getAllKeys(es).sort();
const deKeys = getAllKeys(de).sort();
const itKeys = getAllKeys(it).sort();

console.log('=== Translation Key Count ===');
console.log('EN (English):', enKeys.length);
console.log('FR (French):', frKeys.length);
console.log('KG (Kikongo):', kgKeys.length);
console.log('LN (Lingala):', lnKeys.length);
console.log('SW (Swahili):', swKeys.length);
console.log('TS (Tshiluba):', tsKeys.length);
console.log('PT (Portuguese):', ptKeys.length);
console.log('ES (Spanish):', esKeys.length);
console.log('DE (German):', deKeys.length);
console.log('IT (Italian):', itKeys.length);

console.log('\n=== Missing Keys Analysis ===');

const missingInKG = enKeys.filter(k => !kgKeys.includes(k));
const missingInLN = enKeys.filter(k => !lnKeys.includes(k));
const missingInSW = enKeys.filter(k => !swKeys.includes(k));
const missingInTS = enKeys.filter(k => !tsKeys.includes(k));
const missingInPT = enKeys.filter(k => !ptKeys.includes(k));
const missingInES = enKeys.filter(k => !esKeys.includes(k));
const missingInDE = enKeys.filter(k => !deKeys.includes(k));
const missingInIT = enKeys.filter(k => !itKeys.includes(k));

const extraInFR = frKeys.filter(k => !enKeys.includes(k));
const extraInKG = kgKeys.filter(k => !enKeys.includes(k));
const extraInLN = lnKeys.filter(k => !enKeys.includes(k));
const extraInSW = swKeys.filter(k => !enKeys.includes(k));
const extraInTS = tsKeys.filter(k => !enKeys.includes(k));
const extraInPT = ptKeys.filter(k => !enKeys.includes(k));
const extraInES = esKeys.filter(k => !enKeys.includes(k));
const extraInDE = deKeys.filter(k => !enKeys.includes(k));
const extraInIT = itKeys.filter(k => !enKeys.includes(k));

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

console.log('\nPortuguese missing:', missingInPT.length, 'keys');
if (missingInPT.length > 0) {
  console.log('First 10:', missingInPT.slice(0, 10));
}

console.log('\nSpanish missing:', missingInES.length, 'keys');
if (missingInES.length > 0) {
  console.log('First 10:', missingInES.slice(0, 10));
}

console.log('\nGerman missing:', missingInDE.length, 'keys');
if (missingInDE.length > 0) {
  console.log('First 10:', missingInDE.slice(0, 10));
}

console.log('\nItalian missing:', missingInIT.length, 'keys');
if (missingInIT.length > 0) {
  console.log('First 10:', missingInIT.slice(0, 10));
}

console.log('\n=== Extra Keys Analysis ===');

console.log('\nFrench extra:', extraInFR.length, 'keys');
if (extraInFR.length > 0) {
  console.log('First 10:', extraInFR.slice(0, 10));
}

console.log('\nKikongo extra:', extraInKG.length, 'keys');
if (extraInKG.length > 0) {
  console.log('First 10:', extraInKG.slice(0, 10));
}

console.log('\nLingala extra:', extraInLN.length, 'keys');
if (extraInLN.length > 0) {
  console.log('First 10:', extraInLN.slice(0, 10));
}

console.log('\nSwahili extra:', extraInSW.length, 'keys');
if (extraInSW.length > 0) {
  console.log('First 10:', extraInSW.slice(0, 10));
}

console.log('\nTshiluba extra:', extraInTS.length, 'keys');
if (extraInTS.length > 0) {
  console.log('First 10:', extraInTS.slice(0, 10));
}

console.log('\nPortuguese extra:', extraInPT.length, 'keys');
if (extraInPT.length > 0) {
  console.log('First 10:', extraInPT.slice(0, 10));
}

console.log('\nSpanish extra:', extraInES.length, 'keys');
if (extraInES.length > 0) {
  console.log('First 10:', extraInES.slice(0, 10));
}

console.log('\nGerman extra:', extraInDE.length, 'keys');
if (extraInDE.length > 0) {
  console.log('First 10:', extraInDE.slice(0, 10));
}

console.log('\nItalian extra:', extraInIT.length, 'keys');
if (extraInIT.length > 0) {
  console.log('First 10:', extraInIT.slice(0, 10));
}

console.log('\n=== Completion Status ===');
function completionStatus(missing, extra) {
  if (missing.length === 0 && extra.length === 0) {
    return '✓ Complete';
  }

  if (missing.length === 0) {
    return `✓ Complete (${extra.length} extra keys)`;
  }

  if (extra.length === 0) {
    return `✗ Missing ${missing.length} keys`;
  }

  return `✗ Missing ${missing.length} keys, ${extra.length} extra keys`;
}

console.log('EN vs FR:', completionStatus([], extraInFR));
console.log('EN vs KG:', completionStatus(missingInKG, extraInKG));
console.log('EN vs LN:', completionStatus(missingInLN, extraInLN));
console.log('EN vs SW:', completionStatus(missingInSW, extraInSW));
console.log('EN vs TS:', completionStatus(missingInTS, extraInTS));
console.log('EN vs PT:', completionStatus(missingInPT, extraInPT));
console.log('EN vs ES:', completionStatus(missingInES, extraInES));
console.log('EN vs DE:', completionStatus(missingInDE, extraInDE));
console.log('EN vs IT:', completionStatus(missingInIT, extraInIT));
