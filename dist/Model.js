function s(t, e) {
  const o = (n) => new e(n);
  return Array.isArray(t) && !!t.length ? t.map((n) => o(n)) : [];
}
const c = (t) => t ? String(t) : "", g = (t) => Number(t) || 0, a = (t) => !!t;
export {
  a as getBoolean,
  g as getNumber,
  c as getString,
  s as getTypedArray
};
