const fs = require('fs');

const pages = [
  { file: 'src/app/page.tsx', name: 'home', keywords: ['Codex换肤', 'Codex皮肤', 'Codex主题', 'Dream Skin', 'codexskin.top'] },
  { file: 'src/app/skins/page.tsx', name: 'skins', keywords: ['Codex皮肤库', 'Codex皮肤', '皮肤下载', '皮肤资源', 'Codex主题', 'codexskin.top'] },
  { file: 'src/app/studio/page.tsx', name: 'studio', keywords: ['Codex工作台', '皮肤制作', 'Codex皮肤', '在线换肤', '皮肤预览', 'codexskin.top'] },
  { file: 'src/app/pets/page.tsx', name: 'pets', keywords: ['Codex宠物', 'Codex Pets', '编程宠物', '宠物库', 'sprite校验', 'codexskin.top'] },
  { file: 'src/app/install/page.tsx', name: 'install', keywords: ['Codex皮肤安装', 'Dream Skin', '皮肤恢复', '安装指南', 'Codex皮肤', 'codexskin.top'] },
  { file: 'src/app/safety/page.tsx', name: 'safety', keywords: ['Codex皮肤安全', '数据隐私', '皮肤安全', '信任边界', 'Codex皮肤', 'codexskin.top'] },
  { file: 'src/app/custom/page.tsx', name: 'custom', keywords: ['Codex皮肤定制', '付费定制', '皮肤定制', '定制服务', 'Codex皮肤', 'codexskin.top'] },
];

for (const page of pages) {
  const rawContent = fs.readFileSync(page.file, 'utf8');

  // Count Chinese chars in raw file (accurate as grep does)
  const chineseChars = (rawContent.match(/[一-鿿㐀-䶿]/g) || []).length;

  // Strip ALL tags for keyword searching
  const plainText = rawContent
    .replace(/<[^>]*>/g, '')      // remove HTML/JSX tags
    .replace(/[\n\r\t]/g, '')     // remove newlines/tabs
    .replace(/\s+/g, '');         // collapse whitespace

  console.log('--- ' + page.name + ' (' + chineseChars + ' Chinese chars) ---');
  let totalKeywordChars = 0;
  let totalHits = 0;

  for (const kw of page.keywords) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const hits = (plainText.match(regex) || []).length;
    totalHits += hits;
    const keywordChars = hits * kw.length;
    totalKeywordChars += keywordChars;
    const density = (keywordChars / chineseChars * 100).toFixed(2);
    const icon = density >= 3.00 && density <= 5.00 ? ' ✓' : (density > 5.00 ? ' ⚠high' : ' ⚠low');
    console.log('  ' + kw + ': ' + hits + 'x, density=' + density + '%' + icon);
  }
  const overallDensity = (totalKeywordChars / chineseChars * 100).toFixed(2);
  console.log('  OVERALL: ' + totalHits + ' hits, density=' + overallDensity + '%');
  console.log('');
}
