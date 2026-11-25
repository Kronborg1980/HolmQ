# HolmQ Service ApS – hjemmeside

Informationsside for HolmQ Service ApS (haveservice, vedligeholdelse og små reparationer i Hirtshals) med en simpel, mobilvenlig admin.

- **Forside:** `index.html` – ydelser, før/efter-slider, projektgalleri med filtre, "sådan foregår det", om, område med kort, anmeldelser, FAQ, kontaktformular, fast "Ring/SMS/Tilbud"-bar på mobil, SEO (LocalBusiness-data, Open Graph).
- **Admin:** `admin.html` – projekter med billeder (tag billede direkte med telefonen), før/efter-markering, rækkefølge, kladder, henvendelser fra formularen og redigering af alle tekster, ydelser, FAQ og anmeldelser. Kan lægges på hjemmeskærmen som app.
- **Ingen build-step.** Ren HTML/JS, hostes gratis på GitHub Pages. Data i Firebase (gratis Spark-plan – billeder komprimeres i browseren og gemmes i Firestore, så der skal ikke betales for Storage).

Siden virker med det samme uden Firebase (viser standardindholdet fra `content.js`). Admin kræver Firebase.

---

## 1. Læg siden på GitHub Pages
1. Opret et nyt repo (fx `holmq`), og upload alle filer (Add file → Upload files).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save.
3. Siden ligger nu på `https://<bruger>.github.io/holmq/`.

**Eget domæne (fx holmq.dk):** Settings → Pages → Custom domain. Opret en CNAME-record hos domæneudbyderen, der peger på `<bruger>.github.io`.

## 2. Firebase (til admin)
1. Gå til [console.firebase.google.com](https://console.firebase.google.com) → *Add project* (fx `holmq-service`). Analytics er ikke nødvendigt.
2. **Build → Firestore Database → Create database** (production mode, region `eur3` / europe-west).
3. **Firestore → Rules:** kopiér hele indholdet af `firestore.rules` ind → *Publish*.
4. **Build → Authentication → Get started → Sign-in method → Email/Password → Enable.**
5. **Authentication → Users → Add user:** opret Emils login (og evt. dit eget).
6. **Authentication → Settings → Authorized domains:** tilføj `<bruger>.github.io` (og eget domæne).
7. **Project settings (tandhjul) → Your apps → Web (`</>`):** registrér app og kopiér `firebaseConfig` ind i `config.js`:
   ```js
   window.HOLMQ_FIREBASE = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." };
   ```
   (Firebase web-nøgler er ikke hemmelige – sikkerheden ligger i reglerne.)

## 3. Gør brugeren til admin
1. Åbn `admin.html` og log ind med kontoen fra trin 2.5. Du får vist et **bruger-ID**.
2. Firestore → *Start collection* → navn `admins` → Document ID = bruger-ID'et → tilføj fx feltet `navn` (string) = `Emil` → Save.
3. Genindlæs admin. Færdig.

Første gang: tryk **"Importér startprojekter"** for at få de 7 projekter fra Facebook ind i admin, så de kan redigeres.

## 4. Henvendelser på mail (valgfrit)
Alle henvendelser fra formularen gemmes under **Henvendelser** i admin. Skal de også komme på mail, så skriv en e-mail i *Indhold → Kontaktoplysninger → "E-mail der modtager henvendelser"*. Første henvendelse sender en bekræftelsesmail fra FormSubmit – klik på linket, så kommer resten automatisk.

## Filer
| Fil | Indhold |
|---|---|
| `index.html` | Den offentlige side |
| `admin.html` | Admin |
| `config.js` | Firebase-konfiguration |
| `content.js` | Standardtekster og startprojekter |
| `assets/shared.js` | Ikoner og fælles Firebase-kode |
| `assets/img/` | Logo, ikoner og billeder |
| `firestore.rules` | Sikkerhedsregler til Firestore |

## Datamodel (Firestore)
- `site/content` – alle tekster, kontaktinfo, ydelser, FAQ, anmeldelser
- `projects/{id}` – titel, kategori, sted, dato, beskrivelse, `published`, `order`, `photos[{id, thumb, tag}]`
- `images/{id}` – fuldt billede som komprimeret data-URL (max ~900 KB)
- `inquiries/{id}` – henvendelser fra kontaktformularen
- `admins/{uid}` – hvem der må redigere
