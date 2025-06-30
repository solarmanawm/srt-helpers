function c(n, e) {
  const r = ["Number", "String"], o = (t) => r.includes(e.name) ? e(t) : new e(t);
  return Array.isArray(n) && !!n.length ? n.map((t) => o(t)) : [];
}
const g = (n) => n ? String(n) : "", m = (n) => Number(n) || 0, i = (n) => !!n;
export {
  i as getBoolean,
  m as getNumber,
  g as getString,
  c as getTypedArray
};
