/* Fælles kode for forside og admin */
export const FB_VERSION = "10.12.2";
const FB = (m) => `https://www.gstatic.com/firebasejs/${FB_VERSION}/firebase-${m}.js`;

const P = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
export const ICONS = {
  mower: P('<path d="M3 15h13v-3a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2z"/><path d="M14 11 19.5 3.5"/><path d="M18 3h3"/><circle cx="6.5" cy="18" r="2"/><circle cx="14" cy="18" r="2"/>'),
  hedge: P('<path d="M3 20h18"/><path d="M5 20v-7a3 3 0 0 1 3-3 3.5 3.5 0 0 1 4-3 3.5 3.5 0 0 1 4 3 3 3 0 0 1 3 3v7"/><path d="M9 20v-4M15 20v-4"/>'),
  tree: P('<path d="M12 21v-6"/><path d="M9 21h6"/><circle cx="12" cy="9" r="6"/><path d="M12 15l-2.5-2.5M12 13l2.5-2.5"/>'),
  leaf: P('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>'),
  stump: P('<ellipse cx="12" cy="8" rx="7" ry="2.5"/><path d="M5 8v8c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V8"/><ellipse cx="12" cy="8" rx="3" ry="1"/><path d="M5 16l-2.5 3M19 16l2.5 3M12 18.5V21"/>'),
  soil: P('<path d="M2 22v-5l5-5 5 5-5 5z"/><path d="M9.5 14.5 16 8"/><path d="m17 2 5 5-.5.5a3.54 3.54 0 0 1-5 0 3.54 3.54 0 0 1 0-5L17 2"/>'),
  weed: P('<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>'),
  wrench: P('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
  fence: P('<path d="M4 21V6l2-3 2 3v15M16 21V6l2-3 2 3v15M10 21V6l2-3 2 3v15"/><path d="M4 10h16M4 16h16"/>'),
  snow: P('<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/><path d="m9 3 3 2 3-2M9 21l3-2 3 2M3 9l2 3-2 3M21 9l-2 3 2 3"/>'),
  home: P('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>'),
  broom: P('<path d="m13 11 8-8"/><path d="M5.5 13.5 10.5 18.5"/><path d="M3 21c1-3 2-5.5 4-7.5l3.5 3.5C8.5 19 6 20 3 21z"/><path d="m7 13.5 3.5-3.5 3.5 3.5-3.5 3.5"/>'),
  phone: P('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  sms: P('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/>'),
  mail: P('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
  pin: P('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  clock: P('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'),
  check: P('<path d="M20 6 9 17l-5-5"/>'),
  arrow: P('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.33-.04-1.57-.14-2.88-.14C11.9 2 10 3.66 10 6.7v2.8H7v4h3V22h4z"/></svg>',
  x: P('<path d="M18 6 6 18M6 6l12 12"/>'),
  left: P('<path d="m15 18-6-6 6-6"/>'),
  right: P('<path d="m9 18 6-6-6-6"/>'),
  doc: P('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/>'),
  shield: P('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
  images: P('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>')
};
export const ICON_KEYS = ["mower","hedge","tree","leaf","stump","soil","weed","wrench","fence","broom","snow","home"];

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const fmtPhone = (p) => String(p || "").replace(/\D/g, "").replace(/(\d{2})(?=\d)/g, "$1 ").trim();
export const telHref = (p) => "tel:+45" + String(p || "").replace(/\D/g, "");

let _fb = null;
/** Indlæser Firebase (kun hvis config.js er udfyldt). */
export async function getFirebase(withAuth = false) {
  const cfg = window.HOLMQ_FIREBASE;
  if (!cfg || !cfg.projectId) return null;
  if (!_fb) {
    const [app, fs] = await Promise.all([import(FB("app")), import(FB("firestore"))]);
    const a = app.initializeApp(cfg);
    _fb = { app: a, fs, db: fs.getFirestore(a) };
  }
  if (withAuth && !_fb.auth) {
    const au = await import(FB("auth"));
    _fb.au = au;
    _fb.auth = au.getAuth(_fb.app);
  }
  return _fb;
}

/** Henter indhold + projekter. Falder tilbage til content.js. */
export async function loadSite() {
  const D = window.HOLMQ_DEFAULTS;
  const out = { content: structuredClone(D.content), projects: structuredClone(D.projects), live: false };
  try {
    const fb = await getFirebase();
    if (!fb) return out;
    const { fs, db } = fb;
    const [c, p] = await Promise.all([
      fs.getDoc(fs.doc(db, "site", "content")),
      fs.getDocs(fs.query(fs.collection(db, "projects"), fs.where("published", "==", true)))
    ]);
    if (c.exists()) Object.assign(out.content, c.data());
    const list = p.docs.map((d) => ({ id: d.id, ...d.data() })).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    if (list.length) out.projects = list;
    out.live = true;
  } catch (e) { console.warn("Firebase ikke tilgængelig – viser standardindhold", e); }
  return out;
}

const _imgCache = new Map();
/** Fuld billed-URL for et foto (statisk sti eller Firestore-billede). */
export async function photoUrl(ph) {
  if (ph.src) return ph.src;
  if (_imgCache.has(ph.id)) return _imgCache.get(ph.id);
  const fb = await getFirebase();
  const s = await fb.fs.getDoc(fb.fs.doc(fb.db, "images", ph.id));
  const url = s.exists() ? s.data().data : ph.thumb;
  _imgCache.set(ph.id, url);
  return url;
}
export const thumbUrl = (ph) => ph.src || ph.thumb;
