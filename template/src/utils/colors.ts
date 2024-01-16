function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const h_i = Math.floor(h * 6);
  const f = h * 6 - h_i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r = 0,
    g = 0,
    b = 0;
  if (h_i === 0) {
    r = v;
    g = t;
    b = p;
  } else if (h_i === 1) {
    r = q;
    g = v;
    b = p;
  } else if (h_i === 2) {
    r = p;
    g = v;
    b = t;
  } else if (h_i === 3) {
    r = p;
    g = q;
    b = v;
  } else if (h_i === 4) {
    r = t;
    g = p;
    b = v;
  } else if (h_i === 5) {
    r = v;
    g = p;
    b = q;
  }
  return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
}

const goldenRatioConjugate = 0.618033988749895;

export function genColor(h = 0.5, s = 0.5, v = 0.95, alpha = 1): string {
  h += goldenRatioConjugate;
  h %= 1;
  const [r, g, b] = hsvToRgb(h, s, v);
  return `rgba(${r},${g},${b},${alpha})`;
}
