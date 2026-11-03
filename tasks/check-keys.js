// Проверка данных после правок. Запуск из корня проекта:  node tasks/check-keys.js
// 1) все 4 файла — валидный JS; 2) у каждого товара Nature's Protection есть запись
// в np-official.js и описание в descriptions.js; 3) нет «осиротевших» ключей;
// 4) нигде не осталось фасовки 400 г у сухих кормов; 5) az.name = en.name.
const fs = require('fs');
const vm = require('vm');
const ctx = { window: {}, document: { addEventListener() {} } };
vm.createContext(ctx);
let bad = 0;
const fail = m => { bad++; console.log('FAIL ' + m); };
for (const f of ['js/translations.js', 'js/catalog.js', 'js/np-official.js', 'js/descriptions.js']) {
  try { vm.runInContext(fs.readFileSync(f, 'utf8') + '\n;this.__T=typeof TRANSLATIONS!=="undefined"?TRANSLATIONS:this.__T;this.__P=typeof PRODUCTS!=="undefined"?PRODUCTS:this.__P;this.__O=typeof NP_OFFICIAL!=="undefined"?NP_OFFICIAL:this.__O;this.__D=typeof FULL_DESC!=="undefined"?FULL_DESC:this.__D;this.__B=typeof BRANDS_EXTRA!=="undefined"?BRANDS_EXTRA:this.__B;', ctx, { filename: f }); console.log('OK   ' + f + ' — валидный JS'); }
  catch (e) { fail(f + ' — ошибка JS: ' + e.message); }
}
const P = ctx.__P, O = ctx.__O || {}, D = ctx.__D || {};
const keys = new Set();
if (P) for (const sp of Object.keys(P)) for (const g of P[sp]) for (const it of g.items || []) {
  if (!it.en) continue;
  const k = sp + '||' + (it.en.cat || '') + '||' + (it.en.name || '');
  keys.add(k);
  if (!O[k]) fail('нет записи в np-official.js: ' + k);
  if (!D[k]) fail('нет описания в descriptions.js: ' + k);
  if (it.az && it.az.name !== it.en.name) fail('az.name ≠ en.name: «' + it.az.name + '» / «' + it.en.name + '»');
  const packs = (O[k] && O[k].packs) || [];
  if (/dry|сух|quru/i.test(g.group && (g.group.en || '')) && packs.some(p => /^0?\.4\s*kg$|^400\s*g$/i.test(String(p).trim()))) fail('400 г у сухого корма: ' + k);
}
const orphan = obj => Object.keys(obj).filter(k => k.includes('||') && !keys.has(k));
// Лишние ключи — только предупреждение: 3 старых в descriptions.js были ещё до правок, они ничего не ломают.
// Но если после переименования здесь появился СТАРЫЙ ключ, а выше FAIL с новым — ключ забыли переименовать.
orphan(O).forEach(k => console.log('WARN лишний ключ в np-official.js (товара нет): ' + k));
orphan(D).forEach(k => console.log('WARN лишний ключ в descriptions.js (товара нет): ' + k));
const B = ctx.__B;
if (B) for (const br of Object.keys(B)) {
  const walk = x => { if (Array.isArray(x)) x.forEach(walk); else if (x && typeof x === 'object') { if (x.az && x.en && typeof x.az.name === 'string' && typeof x.en.name === 'string' && x.az.name !== x.en.name) fail(br + ': az.name ≠ en.name: «' + x.az.name + '» / «' + x.en.name + '»'); Object.values(x).forEach(walk); } };
  walk(B[br]);
}
console.log(bad ? `\n${bad} проблем(ы)` : '\nВсё в порядке');
process.exitCode = bad ? 1 : 0;
