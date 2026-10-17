# Готовит картинки для ролика: обрезает прозрачные поля упаковок, вырезает игрушки Misoko с белого фона.
# Запуск из корня репозитория: python3 promo/prep.py
from PIL import Image, ImageFilter
from collections import deque
import os
OUT = 'promo/media'
os.makedirs(OUT, exist_ok=True)
CUT = {  # имя в ролике: исходник с прозрачностью
  'np-dog-mini': 'assets/products/dog-all.png', 'np-cat-indoor': 'assets/products/cat-indoor.png',
  'np-dog-weight': 'assets/products/dog-large.png', 'np-cat-sens': 'assets/products/cat-kitten.png',
  'np-cat-kitten': 'assets/products/cat-sterilised.png', 'np-dog-maxi': 'assets/products/dog-junior.png',
  'np-dog-red': 'assets/products/dog-small.png',
  'sc-white': 'assets/products/cat-sc-light.png', 'sc-dark': 'assets/products/cat-sc-dark.png', 'sc-red': 'assets/products/cat-sc-brown.png',
  'np-beauty': 'assets/float/np-beauty.webp', 'np-mobility': 'assets/float/np-mobility.webp', 'np-mzg': 'assets/float/np-mzg.webp',
  'np-salmon': 'assets/float/np-salmonoil.webp', 'np-weight': 'assets/float/np-weight.webp', 'np-whitecats': 'assets/float/np-whitecats.webp',
  'np-kitten': 'assets/float/np-kitten.webp', 'np-sensitive': 'assets/float/np-sensitive.webp',
  'ar-lamb': 'assets/products/art-dog-lamb.webp', 'ar-salmon': 'assets/products/art-cat-salmon.webp', 'ar-maxi': 'assets/products/art-dog-maxi.webp',
  'ar-poultry': 'assets/products/art-dog-poultry.webp', 'ar-outdoor': 'assets/products/art-cat-outdoor.webp',
  'ar-junior': 'assets/products/art-dog-junior.png', 'ar-kitten': 'assets/products/art-cat-kitten.png',
  'tp-5in1': 'assets/products/tpl-pn-5in1.webp', 'tp-magic': 'assets/products/tpl-pn-magicplex.webp', 'tp-detox': 'assets/products/tpl-pn-detox.webp',
  'tp-fur': 'assets/products/tpl-pn-furgrowth.webp', 'tp-sens': 'assets/products/tpl-pn-sensitive.webp',
  'logo': 'assets/logo.png',
}
for name, src in CUT.items():
    im = Image.open(src).convert('RGBA')
    bb = im.getchannel('A').point(lambda v: 255 if v > 8 else 0).getbbox()
    im = im.crop(bb)
    if max(im.size) > 1100: im.thumbnail((1100, 1100), Image.LANCZOS)
    im.save(f'{OUT}/{name}.png', optimize=True)
    print(name, im.size)

def key_white(src, dst):  # фон белый и связан с краями картинки → прозрачный, мягкий край
    im = Image.open(src).convert('RGB'); w, h = im.size; px = im.load()
    near = lambda p: min(p) >= 236 and max(p) - min(p) < 14
    bg = bytearray(w * h); q = deque()
    for x in range(w):
        for y in (0, h - 1):
            if near(px[x, y]) and not bg[y * w + x]: bg[y * w + x] = 1; q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if near(px[x, y]) and not bg[y * w + x]: bg[y * w + x] = 1; q.append((x, y))
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < w and 0 <= ny < h and not bg[ny * w + nx] and near(px[nx, ny]): bg[ny * w + nx] = 1; q.append((nx, ny))
    m = Image.frombytes('L', (w, h), bytes(255 - v * 255 for v in bg)).filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
    out = im.convert('RGBA'); out.putalpha(m)
    out = out.crop(m.point(lambda v: 255 if v > 20 else 0).getbbox()); out.save(dst, optimize=True)
    print(os.path.basename(dst), out.size)

for i in ['beimr01181', 'beimr01157', 'beimr01375', 'beirj01523', 'beirj06635', 'beirj06374', 'beirj01391', 'beirj02939', 'beimr01372', 'beirj06663']:
    key_white(f'assets/products/misoko-{i}.webp', f'{OUT}/toy-{i}.png')
