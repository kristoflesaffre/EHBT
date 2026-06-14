// ============================================================
// EHBT — Eerste Hulp bij Trauma
// router, renderers, zoeken & micro-animaties
// ============================================================

const VRAGEN = [
  ...VRAGEN_1,
  ...VRAGEN_2,
  ...VRAGEN_3,
  ...VRAGEN_4,
  ...VRAGEN_5,
  ...VRAGEN_6,
  ...VRAGEN_7,
  ...VRAGEN_8,
  ...VRAGEN_9,
  ...VRAGEN_10,
  ...VRAGEN_11,
  ...VRAGEN_12,
  ...VRAGEN_13,
  ...VRAGEN_14,
  ...VRAGEN_15,
  ...VRAGEN_16,
  ...VRAGEN_17,
  ...VRAGEN_18,
  ...VRAGEN_19
];
const app = document.getElementById("app");

const themaVan = id => THEMAS.find(t => t.id === id);
const boekVan = id => BOEKEN[id];
const vraagVan = id => VRAGEN.find(v => v.id === id);
const therapieVan = id => THERAPIEEN.find(t => t.id === id);
const conceptVan = id => CONCEPTEN.find(c => c.id === id);
const hechtingVan = id => HECHTINGSSTIJLEN.find(h => h.id === id);
const stoornisVan = id => STOORNISSEN.find(s => s.id === id);
const leeftijdNaam = id => (LEEFTIJDEN.find(l => l.id === id) || {}).naam || id;
const leeftijdPillsHTML = leeftijden => (leeftijden || [])
  .map(id => `<span class="kaart-leeftijd-pill">${leeftijdNaam(id)}</span>`)
  .join("");

/* ---------- crisis ---------- */

function crisisBalkHTML() {
  const lijnen = CRISISLIJNEN.map(c =>
    `<span class="crisis-lijn"><a href="tel:${c.nummer}">${c.nummer}</a> ${c.naam} <span class="cl-uitleg">${c.uitleg}</span></span>`
  ).join("");
  return `
  <div class="crisis-balk verschijn" role="note">
    <span class="crisis-balk-kop">⚠ Direct gevaar of crisis?</span>
    <div class="crisis-balk-lijnen">${lijnen}</div>
  </div>`;
}

/* ---------- bouwstenen ---------- */

function vraagKaartHTML(v, i = 0, groot = false) {
  const t = themaVan(v.thema);
  return `
  <a class="vraag-kaart verschijn ${groot ? "kaart-groot" : ""}" href="#/vraag/${v.id}"
     style="--accent:${t.accent}; --wacht:${Math.min(i * 0.07, 0.5)}s">
    <span class="kaart-thema">${t.icoon} ${t.naam}</span>
    <h3>${v.vraag}</h3>
    <p class="kort">${v.kort}</p>
    <span class="kaart-voet">
      <span class="kaart-leeftijden" aria-label="Voor wie">${leeftijdPillsHTML(v.leeftijd)}</span>
      <span class="pijl">Lees <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </span>
  </a>`;
}

function bronHTML(b) {
  const boek = boekVan(b.boek);
  if (!boek) return "";
  return `
  <a class="bron" href="#/boek/${b.boek}" style="--boekkleur:${boek.kleur}">
    ${bronThumbHTML(b.boek, boek)}
    <span class="bron-info">
      <strong>${boek.titel}</strong>
      <em>${boek.auteur} (${boek.jaar})</em><br>${b.detail}
    </span>
  </a>`;
}

function bronThumbHTML(id, boek) {
  if (!boek.cover) return `<span class="bron-rug" aria-hidden="true"></span>`;
  return `<span class="bron-rug bron-cover-wrap" aria-hidden="true"><img src="${boek.cover}" alt="" loading="lazy"></span>`;
}

function boekCoverHTML(id, boek, decoratief = true) {
  if (!boek.cover) {
    return `<span class="boek-rug" style="--boekkleur:${boek.kleur}" ${decoratief ? `aria-hidden="true"` : ""}><span>${boek.icoon}</span></span>`;
  }
  const alt = decoratief ? "" : `Boekomslag van ${boek.titel}`;
  return `<span class="boek-rug boek-cover-wrap" style="--boekkleur:${boek.kleur}" ${decoratief ? `aria-hidden="true"` : ""}>
    <img class="boek-cover" src="${boek.cover}" alt="${alt}" loading="lazy">
  </span>`;
}

const WINKEL_LOGOS = {
  "Bol.com": { src: "assets/logos/bol.svg", klasse: "bol" },
  "Standaard Boekhandel": { src: "assets/logos/standaard-boekhandel.svg", klasse: "standaard" },
  "Amazon": { src: "assets/logos/amazon.svg", klasse: "amazon" }
};

function winkelLogoHTML(label) {
  const logo = WINKEL_LOGOS[label];
  if (!logo) return "";
  return `<span class="winkel-logo winkel-logo-${logo.klasse}" aria-hidden="true"><img src="${logo.src}" alt="" loading="lazy"></span>`;
}

function sterrenHTML(score) {
  const pct = (score / 5 * 100).toFixed(1);
  return `<span class="sterren" style="--pct:${pct}%" aria-label="${score} van 5 sterren">
    <span class="sterren-grijs" aria-hidden="true">★★★★★</span>
    <span class="sterren-kleur" aria-hidden="true">★★★★★</span>
  </span>`;
}

function amazonRatingHTML(boek) {
  const r = boek.amazonRating;
  if (!r || !r.score || !r.count) return "";
  const fmt = new Intl.NumberFormat("nl-NL");
  const amazonLink = (boek.koopLinks || []).find(link => link.label === "Amazon")?.url || "#/boeken";
  return `
    <a class="boek-rating amazon-rating geladen" href="${amazonLink}" target="_blank" rel="noopener noreferrer" aria-label="Amazon-score: ${r.score.toFixed(1)} van 5 sterren, ${fmt.format(r.count)} reviews">
      <span class="rating-bron"><span class="winkel-logo winkel-logo-amazon" aria-hidden="true"><img src="assets/logos/amazon.svg" alt="" loading="lazy"></span> Amazon</span>
      ${sterrenHTML(r.score)}
      <span class="rating-score">${r.score.toFixed(1)}</span>
      <span class="rating-tel">${fmt.format(r.count)} reviews</span>
    </a>`;
}

function koopLinksHTML(boek) {
  if (!boek.koopLinks || !boek.koopLinks.length) return "";
  return `
    <div class="koop-blok verschijn" style="--wacht:.16s">
      <span class="koop-label">Koop of zoek dit boek</span>
      <div class="koop-links">
        ${boek.koopLinks.map(link => `<a class="koop-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${winkelLogoHTML(link.label)}<span class="koop-link-label">${link.label}</span></a>`).join("")}
      </div>
    </div>`;
}

function chipRijHTML(actiefId = null) {
  return THEMAS.map(t => {
    const tel = VRAGEN.filter(v => v.thema === t.id).length;
    return `<a class="chip ${t.id === actiefId ? "actief" : ""}" href="#/thema/${t.id}">
      ${t.icoon} ${t.naam} <span class="chip-tel">${tel}</span></a>`;
  }).join("");
}

function schud(lijst) {
  const kopie = [...lijst];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

function vindLichtkrantBotsing(lijst) {
  if (lijst.length < 2) return -1;
  for (let i = 0; i < lijst.length; i++) {
    if (lijst[i].thema === lijst[(i + 1) % lijst.length].thema) return i;
  }
  return -1;
}

function herstelLichtkrantVolgorde(lijst) {
  let huidige = [...lijst];
  const maxPogingen = huidige.length * 2;

  for (let poging = 0; poging < maxPogingen; poging++) {
    const botsing = vindLichtkrantBotsing(huidige);
    if (botsing === -1) return huidige;

    const volgende = (botsing + 1) % huidige.length;
    for (let kandidaat = 0; kandidaat < huidige.length; kandidaat++) {
      if (kandidaat === botsing || kandidaat === volgende) continue;
      const test = [...huidige];
      [test[volgende], test[kandidaat]] = [test[kandidaat], test[volgende]];
      if (vindLichtkrantBotsing(test) === -1) {
        huidige = test;
        break;
      }
    }
  }

  return huidige;
}

function gemengdeLichtkrantVragen(vragen) {
  const groepen = THEMAS.map(t => ({
    thema: t.id,
    vragen: schud(vragen.filter(v => v.thema === t.id))
  })).filter(g => g.vragen.length);
  const resultaat = [];
  let laatsteThema = null;

  while (groepen.some(g => g.vragen.length)) {
    const eersteThema = resultaat[0]?.thema;
    const laatsteKeuze = groepen.reduce((som, g) => som + g.vragen.length, 0) === 1;
    let kandidaten = groepen.filter(g =>
      g.vragen.length &&
      g.thema !== laatsteThema &&
      (!laatsteKeuze || g.thema !== eersteThema)
    );
    if (!kandidaten.length) kandidaten = groepen.filter(g => g.vragen.length && g.thema !== laatsteThema);
    if (!kandidaten.length) kandidaten = groepen.filter(g => g.vragen.length);

    const hoogsteAantal = Math.max(...kandidaten.map(g => g.vragen.length));
    const besteKandidaten = kandidaten.filter(g => g.vragen.length === hoogsteAantal);
    const gekozen = besteKandidaten[Math.floor(Math.random() * besteKandidaten.length)];
    resultaat.push(gekozen.vragen.pop());
    laatsteThema = gekozen.thema;
  }

  return herstelLichtkrantVolgorde(resultaat);
}

const PAGINA_BEELDEN = {
  // Paginakopbeelden zijn optioneel; zonder beeld degradeert sectieKop netjes.
};

function kopBeeldHTML(id) {
  const src = PAGINA_BEELDEN[id];
  if (!src) return "";
  return `<figure class="kopbeeld kopbeeld-${id}" aria-hidden="true">
    <img src="${src}" alt="" loading="lazy">
  </figure>`;
}

function sectieKop(label, titel, intro = "", beeldId = "", naLink = null) {
  const beeld = kopBeeldHTML(beeldId);
  const titelRij = naLink
    ? `<div class="sectie-kop-rij"><h2>${titel}</h2><a class="sectie-alle-link" href="${naLink.href}">${naLink.label}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>`
    : `<h2>${titel}</h2>`;
  return `<div class="sectie-kop${beeld ? " sectie-kop-met-beeld" : ""} verschijn">
    <div class="sectie-kop-tekst">
      <span class="bovenlabel">${label}</span>
      ${titelRij}
      ${intro ? `<p class="sectie-intro">${intro}</p>` : ""}
    </div>
    ${beeld}
  </div>`;
}

/* ---------- home ---------- */

function renderHome() {
  const uitgelicht = VRAGEN.filter(v => v.uitgelicht);
  const rest = VRAGEN.filter(v => !v.uitgelicht).slice(0, 3);
  const bandItems = gemengdeLichtkrantVragen(VRAGEN).map(v => {
    const t = themaVan(v.thema);
    return `<a class="band-item" href="#/vraag/${v.id}"><span class="b-icoon">${t.icoon}</span>${v.vraag}</a>`;
  }).join("");

  app.innerHTML = `
  <section class="held">
    <div class="held-vormen" aria-hidden="true">
      <div class="vorm-boog"></div>
      <div class="vorm vorm-1"></div><div class="vorm vorm-2"></div><div class="vorm vorm-3"></div>
    </div>
    <div class="held-binnen">
      <h1 class="verschijn" style="--wacht:.22s">Rustige uitleg over <em>trauma en herstel</em></h1>
      <p class="held-intro verschijn" style="--wacht:.44s">Begrijpelijke, onderbouwde antwoorden over wat trauma met lichaam, brein en relaties doet — en welke wegen naar herstel er zijn. Geschreven in gewone taal, geïnspireerd door traumawetenschap en hechtingsonderzoek. Geen diagnose, geen oordeel: richting, op je eigen tempo.</p>
      <div class="held-acties verschijn" style="--wacht:.66s">
        <a class="knop knop-vol" href="#/uitgelegd">Begin bij de basis <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        <a class="knop knop-nood" href="#/noodhulp">🆘 Acute hulp — het overspoelt nú</a>
      </div>
      <div class="held-cijfers verschijn" style="--wacht:.88s">
        <div class="cijfer"><span class="getal">${VRAGEN.length}</span><span class="uitleg">vragen</span></div>
        <div class="cijfer"><span class="getal">${THERAPIEEN.length}</span><span class="uitleg">therapieën</span></div>
        <div class="cijfer"><span class="getal">${NOODHULP.length}</span><span class="uitleg">acute plannen</span></div>
        <div class="cijfer"><span class="getal">${MYTHES.length}</span><span class="uitleg">mythes ontkracht</span></div>
      </div>
    </div>
  </section>

  <div class="lopende-band" aria-label="Veelgestelde vragen">
    <div class="band-spoor">${bandItems}${bandItems}</div>
  </div>

  <section class="sectie home-sectie">
    ${sectieKop("Begin hier", "Trauma uitgelegd, stap voor stap", "Geen jargon: rustige uitleg over wat trauma is, het verschil met complex trauma, hechtingsstijlen en hoe je zenuwstelsel reageert.", "", { href: "#/uitgelegd", label: "Naar Trauma uitgelegd" })}
    <div class="kaart-raster">
      ${CONCEPTEN.slice(0, 3).map((c, i) => conceptKaartHTML(c, i)).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Veelgevraagd", "Waar zit jij mee?", "De vragen die vaak terugkomen — met meteen een kort, eerlijk antwoord erbij.")}
    <div class="kaart-raster">
      ${uitgelicht.map((v, i) => vraagKaartHTML(v, i, i === 0)).join("")}
      ${rest.map((v, i) => vraagKaartHTML(v, uitgelicht.length + i)).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Op thema", "Verken per onderwerp")}
    <div class="chip-rij verschijn">${chipRijHTML()}</div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("🆘 Acute hulp", "Voor als het nú overspoelt", "Geen theorie maar een stappenplan voor het moment zelf: een flashback, een paniekaanval, dissociatie of de drang om jezelf pijn te doen.", "", { href: "#/noodhulp", label: `Alle ${NOODHULP.length} plannen` })}
    ${crisisBalkHTML()}
    <div class="kaart-raster nood-raster">
      ${NOODHULP.slice(0, 4).map((n, i) => `
        <a class="nood-kaart verschijn" href="#/nood/${n.id}" style="--wacht:${i * 0.07}s">
          <h3>${n.icoon} ${n.titel}</h3>
          <p class="kort">${n.kort}</p>
          <span class="kaart-voet"><span>${n.stappen.length} stappen</span>
          <span class="pijl" style="color:var(--nood)">Open plan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span>
        </a>`).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Behandeling", "Welke therapieën helpen bij trauma?", "Van EMDR tot somatische therapie en IFS: wat het is, voor wie het bedoeld is en hoe stevig het onderbouwd is.", "", { href: "#/therapieen", label: `Alle ${THERAPIEEN.length} therapieën` })}
    <div class="onderzoek-raster onderzoek-raster-home">
      ${THERAPIEEN.slice(0, 3).map((t, i) => therapieKaartHTML(t, i)).join("")}
    </div>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("Hardnekkige mythes", "Dit denkt men vaak — en het klopt niet", "Over trauma circuleren veel halve waarheden. Klik open voor wat het onderzoek werkelijk laat zien.")}
    <div id="mytheLijst">
      ${MYTHES.slice(0, 3).map(mytheHTML).join("")}
    </div>
    <p class="verschijn" style="margin-top:22px"><a class="knop knop-rand" href="#/mythes">Alle ${MYTHES.length} mythes ontkracht</a></p>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("De rode draad", "Grondbeginselen van traumasensitief herstel", "Traumawetenschap, klinische praktijk en gerenommeerde bronnen wijzen opvallend vaak dezelfde kant op. Oriënterende inzichten om daarna zelf verder te lezen.")}
    <div class="regel-raster home-regel-swimlane">
      ${REGELS.map((r, i) => regelHTML(r, i)).join("")}
    </div>
    <p class="verschijn" style="margin-top:22px"><a class="knop knop-rand" href="#/regels">Alle ${REGELS.length} grondbeginselen</a></p>
  </section>

  <section class="sectie home-sectie">
    ${sectieKop("De bronnen", "Boeken om verder te lezen", "Deze site bevat eigen tekst, bibliografische verwijzingen en zoeklinks — geen boekbestanden of officiële samenvattingen. Gerenommeerde werken om zelf verder in te lezen.")}
    <div class="chip-rij verschijn">
      ${Object.entries(BOEKEN).map(([id, b]) => `<a class="chip" href="#/boek/${id}">${b.icoon} ${b.titel}</a>`).join("")}
    </div>
  </section>`;
}

function mytheHTML(m, i = 0) {
  const boek = boekVan(m.bron);
  const bronRegel = boek
    ? `<p class="mythe-bron">Bron: <a href="#/boek/${m.bron}">${boek.titel}</a>${m.bronDetail ? ` — ${m.bronDetail}` : ""}</p>`
    : "";
  return `
  <div class="mythe verschijn" style="--wacht:${i * 0.06}s">
    <button class="mythe-kop" aria-expanded="false">
      <span class="mythe-label">Mythe</span>
      <span class="mythe-titel">${m.mythe}</span>
      <svg class="klepje" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="mythe-romp"><div>
      <div class="mythe-binnen">
        <span class="mythe-feit">Wat het onderzoek zegt</span>
        ${m.feit.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        ${bronRegel}
      </div>
    </div></div>
  </div>`;
}

function miniMytheHTML(m, i = 0) {
  return `
  <div class="mythe verschijn" style="--wacht:${i * 0.06}s">
    <button class="mythe-kop" aria-expanded="false">
      <span class="mythe-label">Fabel</span>
      <span class="mythe-titel">${m.mythe}</span>
      <svg class="klepje" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="mythe-romp"><div>
      <div class="mythe-binnen">
        <span class="mythe-feit">Wat klopt</span>
        ${m.feit.split('\n\n').map(p => `<p>${p}</p>`).join('')}
      </div>
    </div></div>
  </div>`;
}

function regelHTML(r, i) {
  const boek = boekVan(r.bron);
  const bronRegel = boek
    ? `<a class="regel-bron" href="#/boek/${r.bron}"><span>Vooral uit: ${boek.titel}</span><svg flex-shrink="0" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`
    : "";
  return `
  <article class="regel verschijn" style="--wacht:${Math.min(i * 0.06, 0.4)}s">
    <span class="regel-nr">${String(i + 1).padStart(2, "0")}</span>
    <h3>${r.titel}</h3>
    <p>${r.tekst}</p>
    ${bronRegel}
  </article>`;
}

/* ---------- therapie-kaarten ---------- */

const EVIDENTIE_LABEL = {
  sterk: "Sterk onderbouwd",
  veelbelovend: "Groeiende evidentie",
  "in ontwikkeling": "Klinisch kader"
};
const EVIDENTIE_KLEUR = {
  sterk: "var(--evidentie-sterk)",
  veelbelovend: "var(--evidentie-veelbelovend)",
  "in ontwikkeling": "var(--evidentie-ontwikkeling)"
};

function evidentieBadgeHTML(niveau, eigenLabel = "") {
  const label = eigenLabel || EVIDENTIE_LABEL[niveau] || niveau;
  const kleur = EVIDENTIE_KLEUR[niveau] || "var(--evidentie-sterk)";
  return `<span class="evidentie-badge" style="--ev:${kleur}">${label}</span>`;
}

function therapieKaartHTML(t, i = 0) {
  return `
  <a class="onderzoek-kaart therapie-kaart verschijn" href="#/therapie/${t.id}" style="--accent:${t.accent}; --wacht:${Math.min(i * 0.05, 0.45)}s">
    <span class="onderzoek-label">${t.icoon} Therapie</span>
    <h3>${t.naam}</h3>
    <span class="therapie-voluit">${t.voluit}</span>
    <p class="onderzoek-haakje">${t.kort}</p>
    ${evidentieBadgeHTML(t.evidentieNiveau, t.evidentieLabel)}
  </a>`;
}

function conceptKaartHTML(c, i = 0) {
  return `
  <a class="vraag-kaart verschijn" href="#/concept/${c.id}" style="--accent:${c.accent}; --wacht:${Math.min(i * 0.07, 0.5)}s">
    <span class="kaart-thema">${c.icoon} Uitgelegd</span>
    <h3>${c.titel}</h3>
    <p class="kort">${c.kort}</p>
    <span class="kaart-voet">
      <span>${c.leeswijzer || "Lees"}</span>
      <span class="pijl">Lees <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </span>
  </a>`;
}

function hechtingKaartHTML(h, i = 0) {
  return `
  <a class="hechting-kaart verschijn" href="#/hechting/${h.id}" style="--accent:${h.accent}; --tint:${h.kleur}; --wacht:${Math.min(i * 0.07, 0.4)}s">
    <span class="h-icoon" aria-hidden="true">${h.icoon}</span>
    <h3>${h.naam}</h3>
    <p class="h-zin">${h.inEenZin}</p>
    <span class="pijl">Lees <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
  </a>`;
}

function stoornisKaartHTML(s, i = 0) {
  return `
  <a class="vraag-kaart verschijn" href="#/stoornis/${s.id}" style="--accent:${s.accent}; --wacht:${Math.min(i * 0.07, 0.5)}s">
    <span class="kaart-thema">${s.icoon} Persoonlijkheid</span>
    <h3>${s.naam}</h3>
    <p class="kort">${s.inEenZin}</p>
    <span class="kaart-voet">
      <span>Educatief</span>
      <span class="pijl">Lees <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </span>
  </a>`;
}

/* ---------- doelgroep-filter & swimlanes ---------- */

function leeftijdStripHTML() {
  const filterAccent = "#3f7d72";
  const opties = [
    { id: "alle",   icoon: "🌗", kort: "Alles",  naam: "Alle invalshoeken", actief: true },
    { id: "zelf",   icoon: "🫀", kort: "Jij",    naam: "Voor jezelf",       actief: false },
    { id: "naaste", icoon: "🤝", kort: "Samen",  naam: "Voor een naaste",   actief: false },
    { id: "recent", icoon: "⚡", kort: "Recent", naam: "Recent trauma",     actief: false },
    { id: "vroeg",  icoon: "🕰", kort: "Vroeg",  naam: "Vroeg / complex",   actief: false }
  ];
  return opties.map(opt => `<button class="leeftijd-card${opt.actief ? " actief" : ""}" data-leeftijd="${opt.id}" style="--ls-k:${filterAccent}" aria-pressed="${opt.actief}">
    <span class="leeftijd-card-beeld" aria-hidden="true">
      <span class="lc-emoji">${opt.icoon}</span>
    </span>
    <span class="leeftijd-card-inhoud">
      <span class="leeftijd-card-bereik">${opt.kort}</span>
      <span class="leeftijd-card-naam">${opt.naam}</span>
    </span>
  </button>`).join("");
}

function swimLanesHTML(vragen) {
  return THEMAS.map(t => {
    const groep = vragen.filter(v => v.thema === t.id);
    if (!groep.length) return "";
    return `
    <div class="swim-lane verschijn" data-thema="${t.id}">
      <a class="swim-lane-kop" href="#/thema/${t.id}" style="--accent:${t.accent}">
        <span class="swim-lane-label">${t.icoon} ${t.naam}</span>
        <span class="swim-lane-rechts">
          <span class="swim-lane-tel">${groep.length}</span>
          <svg class="swim-lane-pijl" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>
      <div class="swim-lane-rij">
        ${groep.map((v, i) => vraagKaartHTML(v, i)).join("")}
      </div>
    </div>`;
  }).join("");
}

/* ---------- vragen ---------- */

function renderThemas() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Alle vragen", "Waar zit jij mee?", "Kies een thema of filter op invalshoek. Elk antwoord: eerst kort, dan onderbouwd, altijd met bronnen.", "vragen")}
    <div class="chip-rij verschijn">${chipRijHTML()}</div>
    <div class="leeftijd-strip verschijn" role="group" aria-label="Filter op invalshoek">
      ${leeftijdStripHTML()}
    </div>
    <div id="vragenRaster" style="margin-top:34px">
      ${swimLanesHTML(VRAGEN)}
    </div>
  </section>`;

  app.querySelectorAll("[data-leeftijd]").forEach(knop => {
    knop.addEventListener("click", () => {
      app.querySelectorAll("[data-leeftijd]").forEach(k => { k.classList.remove("actief"); k.setAttribute("aria-pressed", "false"); });
      knop.classList.add("actief"); knop.setAttribute("aria-pressed", "true");
      const keuze = knop.dataset.leeftijd;
      const gefilterd = keuze === "alle" ? VRAGEN : VRAGEN.filter(v => (v.leeftijd || []).includes(keuze));
      const raster = document.getElementById("vragenRaster");
      raster.innerHTML = gefilterd.length
        ? swimLanesHTML(gefilterd)
        : `<p class="leeg-melding">Nog geen vragen voor deze invalshoek.</p>`;
      animaties();
    });
  });
}

function renderThema(id) {
  const t = themaVan(id);
  if (!t) return renderHome();
  const lijst = VRAGEN.filter(v => v.thema === id);
  app.innerHTML = `
  <section class="sectie">
    <a class="terug-link" href="#/themas"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Alle thema's</a>
    ${sectieKop(`${t.icoon} Thema`, t.naam, t.uitleg)}
    <div class="chip-rij verschijn" style="margin-bottom:34px">${chipRijHTML(id)}</div>
    ${lijst.length
      ? `<div class="kaart-raster">${lijst.map((v, i) => vraagKaartHTML(v, i)).join("")}</div>`
      : `<p class="leeg-melding">Nog geen vragen in dit thema — binnenkort meer.</p>`}
  </section>`;
}

function renderVraag(id) {
  const v = vraagVan(id);
  if (!v) return renderHome();
  const t = themaVan(v.thema);

  app.innerHTML = `
  <article class="sectie sectie-smal">
    <nav class="kruimels verschijn" aria-label="Kruimelpad">
      <a href="#/">Home</a><span class="scheider">/</span>
      <a href="#/thema/${t.id}">${t.icoon} ${t.naam}</a><span class="scheider">/</span>
      <span>${(v.leeftijd || []).map(leeftijdNaam).join(" · ")}</span>
    </nav>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${v.vraag}</h1>
    <div class="tldr verschijn" style="--wacht:.12s"><p>${v.kort}</p></div>
    <div class="antwoord-blok">
      ${v.blokken.map((b, i) => `
        ${b.kop ? `<h2 class="verschijn">${b.kop}</h2>` : ""}
        <p class="verschijn" style="--wacht:${Math.min(i * 0.04, 0.2)}s">${b.tekst}</p>`).join("")}
    </div>
    <div class="doe-vermijd">
      <div class="dv-kaart dv-doe verschijn">
        <h3>✓ Doe dit</h3>
        <ul>${v.doeDit.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
      <div class="dv-kaart dv-vermijd verschijn" style="--wacht:.08s">
        <h3>✕ Vermijd dit</h3>
        <ul>${v.vermijd.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
    </div>
    ${v.zegDit ? `
    <div class="zeg-dit verschijn">
      <h3>💬 Zinnen die kunnen helpen</h3>
      <ul>${v.zegDit.map(z => `<li>${z}</li>`).join("")}</ul>
    </div>` : ""}
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${v.bronnen.map(bronHTML).join("")}</div>
    </div>
    <p class="disclaimer-blok"><span>Informatief en educatief — geen vervanging voor professionele hulp. Herken je veel? Bespreek het met je huisarts of een erkende hulpverlener.</span></p>
    ${v.gerelateerd && v.gerelateerd.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Lees ook</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${v.gerelateerd.map(vraagVan).filter(Boolean).map((g, i) => vraagKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

/* ---------- acute hulp ---------- */

function renderNoodhulp() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("🆘 Acute hulp", "Het overspoelt <em>nú</em>. Kies je situatie.", "Geen achtergrond, geen theorie — die staan bij de vragen. Hier vind je alleen wat je het komende moment kunt doen, stap voor stap.", "noodhulp")}
    ${crisisBalkHTML()}
    <div class="kaart-raster nood-raster">
      ${NOODHULP.map((n, i) => `
        <a class="nood-kaart verschijn" href="#/nood/${n.id}" style="--wacht:${i * 0.06}s">
          <h3>${n.icoon} ${n.titel}</h3>
          <p class="kort">${n.kort}</p>
          <span class="kaart-voet"><span>${n.stappen.length} stappen</span>
          <span class="pijl" style="color:var(--nood)">Open plan <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></span>
        </a>`).join("")}
    </div>
  </section>`;
}

function renderNood(id) {
  const n = NOODHULP.find(x => x.id === id);
  if (!n) return renderNoodhulp();
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <div class="detail-nav-rij">
      <a class="terug-link" href="#/noodhulp" style="color:var(--nood)"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Alle plannen</a>
      <span class="bovenlabel verschijn" style="color:var(--nood)">🆘 Acuut plan</span>
    </div>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${n.icoon} ${n.titel}</h1>
    <p class="sectie-intro verschijn" style="--wacht:.1s">${n.kort}</p>
    ${crisisBalkHTML()}
    <div class="nood-stappen">
      ${n.stappen.map((s, i) => `
        <div class="stap verschijn" style="--wacht:${i * 0.08}s">
          <h3>${s.kop}</h3>
          <p>${s.tekst}</p>
          ${s.zeg ? `<span class="stap-zeg">${s.zeg}</span>` : ""}
        </div>`).join("")}
    </div>
    ${n.bronnen && n.bronnen.length ? `
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">
        ${n.bronnen.map(bid => {
          const b = boekVan(bid);
          if (!b) return "";
          return `<a class="bron" href="#/boek/${bid}" style="--boekkleur:${b.kleur}">
            ${bronThumbHTML(bid, b)}
            <span class="bron-info"><strong>${b.titel}</strong><em>${b.auteur} (${b.jaar})</em></span></a>`;
        }).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

/* ---------- mythes ---------- */

function renderMythes() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Mythbusters", "Hardnekkige mythes over trauma, ontkracht", "Halve waarheden die vaak doorgegeven worden en die onderzoek en de geraadpleegde bronnen stevig tegenspreken. Klik open voor wat er wél klopt.", "mythes")}
    <div class="leeftijd-strip mythe-filter verschijn" role="group" aria-label="Filter mythes op invalshoek">
      ${leeftijdStripHTML()}
    </div>
    <div id="mytheLijst" style="margin-top:34px">${MYTHES.map(mytheHTML).join("")}</div>
  </section>`;

  app.querySelectorAll("[data-leeftijd]").forEach(knop => {
    knop.addEventListener("click", () => {
      app.querySelectorAll("[data-leeftijd]").forEach(k => { k.classList.remove("actief"); k.setAttribute("aria-pressed", "false"); });
      knop.classList.add("actief"); knop.setAttribute("aria-pressed", "true");
      const keuze = knop.dataset.leeftijd;
      const lijst = keuze === "alle" ? MYTHES : MYTHES.filter(m => (m.leeftijd || []).includes(keuze));
      const doel = document.getElementById("mytheLijst");
      doel.innerHTML = lijst.length
        ? lijst.map(mytheHTML).join("")
        : `<p class="leeg-melding">Nog geen mythes voor deze invalshoek.</p>`;
      koppelMythes();
      animaties();
    });
  });
}

/* ---------- therapieën ---------- */

function renderTherapieen() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Therapieën", "Welke behandelingen helpen bij trauma?", "Er bestaat geen enkele 'beste' traumatherapie. De juiste aanpak hangt sterk af van het soort trauma, je klachten en hoeveel veiligheid/regulatie er eerst nodig is.", "therapieen")}
    <div class="bron-notitie verschijn">
      <strong>Lees dit eerst:</strong> richtlijnen geven vooral sterke steun aan traumagerichte behandelingen zoals EMDR en trauma-focused CBT voor PTSS. Bij complex of vroeg relationeel trauma is vaak meer nodig: stabilisatie, lichaamswerk, hechting/relatie, schaamte en delenwerk. Deze pagina's helpen je het gesprek met een hulpverlener voor te bereiden — ze vervangen dat gesprek niet.
    </div>
    <div class="therapie-context-grid verschijn">
      <article class="therapie-context-kaart">
        <h2>PTSS of complex trauma?</h2>
        <p>Bij een afgebakende traumatische gebeurtenis staat vaak de herinnering centraal: herbeleving, vermijding en alarm. Bij complex trauma gaat het meestal om herhaalde of vroege onveiligheid, vaak in relaties. Dan spelen ook zelfbeeld, emotieregulatie, schaamte, dissociatie en vertrouwen mee.</p>
      </article>
      <article class="therapie-context-kaart">
        <h2>Waar past DBT dan?</h2>
        <p>DBT is sterk voor crisisvaardigheden, emotieregulatie en zelfbeschadiging. Het is meestal geen volledige traumaverwerking op zich. Bij complex trauma kan DBT wel een belangrijke eerste laag zijn: veilig genoeg worden om daarna lichaamsgericht, relationeel of traumagericht te kunnen werken.</p>
      </article>
    </div>
    <div class="onderzoek-raster">
      ${THERAPIEEN.map((t, i) => therapieKaartHTML(t, i)).join("")}
    </div>
  </section>`;
}

function renderTherapie(id) {
  const t = therapieVan(id);
  if (!t) return renderTherapieen();
  const verwant = (t.gerelateerd || []).map(therapieVan).filter(Boolean);
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <a class="terug-link" href="#/therapieen"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Alle therapieën</a>
    <span class="bovenlabel verschijn" style="color:${t.accent}">${t.icoon} Therapie</span>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${t.naam}</h1>
    <p class="sectie-intro verschijn" style="--wacht:.08s">${t.voluit}</p>
    <div class="tldr verschijn" style="--wacht:.12s"><p>${t.kort}</p></div>
    <div class="therapie-voorwie verschijn"><span><strong>Voor wie</strong>${t.voorWie}</span></div>
    <div class="antwoord-blok">
      ${(t.blokken || []).map((b, i) => `
        ${b.kop ? `<h2 class="verschijn">${b.kop}</h2>` : ""}
        <p class="verschijn" style="--wacht:${Math.min(i * 0.04, 0.2)}s">${b.tekst}</p>`).join("")}
    </div>
    ${t.hoeWerkt && t.hoeWerkt.length ? `
    <h2 class="verschijn" style="margin-top:8px">Hoe het werkt</h2>
    <div class="nood-stappen">
      ${t.hoeWerkt.map((s, i) => `
        <div class="stap verschijn" style="--wacht:${i * 0.08}s">
          <h3>${s.kop}</h3>
          <p>${s.tekst}</p>
        </div>`).join("")}
    </div>` : ""}
    <div class="evidentie-rij verschijn">
      ${evidentieBadgeHTML(t.evidentieNiveau, t.evidentieLabel)}
      <p>${t.evidentie}</p>
    </div>
    ${t.bronnen && t.bronnen.length ? `
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${t.bronnen.map(bronHTML).join("")}</div>
    </div>` : ""}
    <p class="disclaimer-blok"><span>Informatief — geen vervanging voor professioneel advies. Bespreek met een erkende therapeut welke aanpak bij jou past.</span></p>
    ${verwant.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Verwante therapieën</h2>
      <div class="onderzoek-raster" style="margin-top:20px">
        ${verwant.map((g, i) => therapieKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

/* ---------- trauma uitgelegd (hub) ---------- */

const UITGELEGD_CATEGORIEEN = [
  { id: "basis",      naam: "De basis",                icoon: "🌑" },
  { id: "zenuwstelsel", naam: "Lichaam & zenuwstelsel", icoon: "🫁" },
  { id: "hechting",   naam: "Hechting",                icoon: "🪢" },
  { id: "stoornissen", naam: "Persoonlijkheid",        icoon: "🪞" }
];

function renderUitgelegd() {
  const perCat = UITGELEGD_CATEGORIEEN.map(cat => {
    const items = CONCEPTEN.filter(c => c.categorie === cat.id);
    if (!items.length) return "";
    return `
    <div class="uitgelegd-categorie">
      <h2 class="uitgelegd-categorie-titel verschijn"><span class="uc-icoon">${cat.icoon}</span> ${cat.naam}</h2>
      <div class="kaart-raster">${items.map((c, i) => conceptKaartHTML(c, i)).join("")}</div>
    </div>`;
  }).join("");

  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Trauma uitgelegd", "Begrijpen wat er gebeurt", "Rustige, jargonvrije uitleg over trauma en herstel. Begin bovenaan of spring naar wat je nu nodig hebt.", "uitgelegd")}
    ${perCat}

    <div class="uitgelegd-categorie">
      <h2 class="uitgelegd-categorie-titel verschijn"><span class="uc-icoon">🪢</span> Hechtingsstijlen</h2>
      <p class="sectie-intro verschijn" style="margin-bottom:20px">Hoe je vroege banden je gevoel van veiligheid, nabijheid en vertrouwen kleuren — en hoe stijlen kunnen verschuiven richting meer veiligheid.</p>
      <div class="hechting-raster">${HECHTINGSSTIJLEN.map((h, i) => hechtingKaartHTML(h, i)).join("")}</div>
    </div>

    <div class="uitgelegd-categorie">
      <h2 class="uitgelegd-categorie-titel verschijn"><span class="uc-icoon">🪞</span> Persoonlijkheidsstoornissen</h2>
      <div class="disclaimer-blok stoornis-banner verschijn"><span><strong>Belangrijk:</strong> deze uitleg is educatief en niet-stigmatiserend bedoeld. Het is géén diagnose-instrument. Een persoonlijkheidsstoornis stel je niet zelf vast — en gebruik deze termen nooit als verwijt.</span></div>
      <div class="kaart-raster">${STOORNISSEN.map((s, i) => stoornisKaartHTML(s, i)).join("")}</div>
    </div>
  </section>`;
}

function renderConcept(id) {
  const c = conceptVan(id);
  if (!c) return renderUitgelegd();
  const cat = UITGELEGD_CATEGORIEEN.find(x => x.id === c.categorie);
  const verwant = (c.gerelateerd || []).map(conceptVan).filter(Boolean);
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <nav class="kruimels verschijn" aria-label="Kruimelpad">
      <a href="#/">Home</a><span class="scheider">/</span>
      <a href="#/uitgelegd">Trauma uitgelegd</a>${cat ? `<span class="scheider">/</span><span>${cat.icoon} ${cat.naam}</span>` : ""}
    </nav>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${c.titel}</h1>
    ${c.leeswijzer ? `<p class="sectie-intro verschijn" style="--wacht:.08s">${c.leeswijzer}</p>` : ""}
    <div class="tldr verschijn" style="--wacht:.12s"><p>${c.kort}</p></div>
    <div class="antwoord-blok">
      ${c.blokken.map((b, i) => `
        ${b.kop ? `<h2 class="verschijn">${b.kop}</h2>` : ""}
        <p class="verschijn" style="--wacht:${Math.min(i * 0.04, 0.2)}s">${b.tekst}</p>`).join("")}
    </div>
    ${c.kernpunten && c.kernpunten.length ? `
    <h2 class="verschijn" style="font-size:1.35rem">In het kort</h2>
    <ul class="kern-lijst">
      ${c.kernpunten.map((k, i) => `<li class="verschijn" style="--wacht:${i * 0.07}s">${k}</li>`).join("")}
    </ul>` : ""}
    ${c.feitVsFabel && c.feitVsFabel.length ? `
    <h2 class="verschijn" style="font-size:1.35rem; margin-top:36px">Feit vs. fabel</h2>
    <div style="margin-top:16px">${c.feitVsFabel.map((m, i) => miniMytheHTML(m, i)).join("")}</div>` : ""}
    ${c.bronnen && c.bronnen.length ? `
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${c.bronnen.map(bronHTML).join("")}</div>
    </div>` : ""}
    <p class="disclaimer-blok"><span>Informatief en educatief — geen vervanging voor professionele psychologische hulp.</span></p>
    ${verwant.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Lees verder</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${verwant.map((g, i) => conceptKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

function renderHechting() {
  app.innerHTML = `
  <section class="sectie">
    <a class="terug-link" href="#/uitgelegd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Trauma uitgelegd</a>
    ${sectieKop("🪢 Hechting", "De vier hechtingsstijlen", "Hoe je als kind leerde of nabijheid veilig was, vormt een blauwdruk voor latere relaties. Geen vast etiket: stijlen kunnen verschuiven richting meer veiligheid.")}
    <div class="hechting-raster">${HECHTINGSSTIJLEN.map((h, i) => hechtingKaartHTML(h, i)).join("")}</div>
  </section>`;
}

function renderHechtingsstijl(id) {
  const h = hechtingVan(id);
  if (!h) return renderHechting();
  const verwant = (h.gerelateerd || []).map(hechtingVan).filter(Boolean);
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <a class="terug-link" href="#/uitgelegd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Trauma uitgelegd</a>
    <span class="bovenlabel verschijn" style="color:${h.accent}">${h.icoon} Hechtingsstijl</span>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${h.naam}</h1>
    <div class="tldr verschijn" style="--wacht:.12s"><p>${h.inEenZin}</p></div>
    <div class="antwoord-blok">
      <h2 class="verschijn">Hoe het eruit kan zien</h2>
      <ul class="kern-lijst">${h.herkenbaar.map((k, i) => `<li class="verschijn" style="--wacht:${i * 0.06}s">${k}</li>`).join("")}</ul>
      <h2 class="verschijn">Waar het vandaan komt</h2>
      <p class="verschijn">${h.ontstaan}</p>
      <h2 class="verschijn">In volwassen relaties</h2>
      <p class="verschijn">${h.inRelaties}</p>
      <h2 class="verschijn">Richting meer veiligheid</h2>
      <p class="verschijn">${h.groei}</p>
    </div>
    ${h.bronnen && h.bronnen.length ? `
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${h.bronnen.map(bronHTML).join("")}</div>
    </div>` : ""}
    <p class="disclaimer-blok"><span>Hechtingsstijlen zijn patronen, geen diagnose of vast lot. Twijfel je? Een hulpverlener kan met je meekijken.</span></p>
    ${verwant.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Andere stijlen</h2>
      <div class="hechting-raster" style="margin-top:20px">
        ${verwant.map((g, i) => hechtingKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

function renderStoornissen() {
  app.innerHTML = `
  <section class="sectie">
    <a class="terug-link" href="#/uitgelegd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Trauma uitgelegd</a>
    ${sectieKop("🪞 Persoonlijkheid", "Persoonlijkheidsstoornissen, met respect uitgelegd", "Patronen die vaak wortelen in vroege onveiligheid. Educatief en niet-stigmatiserend bedoeld.")}
    <div class="disclaimer-blok stoornis-banner verschijn"><span><strong>Belangrijk:</strong> dit is geen diagnose-instrument. Een persoonlijkheidsstoornis stel je niet zelf of bij een ander vast — dat doet een gekwalificeerde professional. Gebruik deze termen nooit als verwijt of scheldwoord.</span></div>
    <div class="kaart-raster">${STOORNISSEN.map((s, i) => stoornisKaartHTML(s, i)).join("")}</div>
  </section>`;
}

function renderStoornis(id) {
  const s = stoornisVan(id);
  if (!s) return renderStoornissen();
  const verwant = (s.gerelateerd || []).map(stoornisVan).filter(Boolean);
  app.innerHTML = `
  <article class="sectie sectie-smal">
    <a class="terug-link" href="#/uitgelegd"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Trauma uitgelegd</a>
    <span class="bovenlabel verschijn" style="color:${s.accent}">${s.icoon} Persoonlijkheid</span>
    <h1 class="vraag-titel verschijn" style="--wacht:.05s">${s.naam}</h1>
    ${s.ookGenoemd ? `<p class="sectie-intro verschijn" style="--wacht:.08s">Ook wel: ${s.ookGenoemd}</p>` : ""}
    <div class="disclaimer-blok stoornis-banner verschijn"><span><strong>${s.disclaimer}</strong></span></div>
    <div class="tldr verschijn" style="--wacht:.12s"><p>${s.inEenZin}</p></div>
    <div class="antwoord-blok">
      ${s.watHetIs.map((b, i) => `
        ${b.kop ? `<h2 class="verschijn">${b.kop}</h2>` : ""}
        <p class="verschijn" style="--wacht:${Math.min(i * 0.04, 0.2)}s">${b.tekst}</p>`).join("")}
      ${s.vaakVerwardMet ? `<h2 class="verschijn">Vaak verward met</h2><p class="verschijn">${s.vaakVerwardMet}</p>` : ""}
      ${s.binnenkant ? `<h2 class="verschijn">Hoe het van binnen kan voelen</h2><p class="verschijn">${s.binnenkant}</p>` : ""}
    </div>
    ${s.watHelpt && s.watHelpt.length ? `
    <div class="stoornis-wathelpt verschijn">
      <h3>Wat kan helpen</h3>
      <ul>${s.watHelpt.map(w => `<li>${w}</li>`).join("")}</ul>
    </div>` : ""}
    ${s.nietDoen && s.nietDoen.length ? `
    <div class="doe-vermijd">
      <div class="dv-kaart dv-vermijd verschijn">
        <h3>✕ Liever niet</h3>
        <ul>${s.nietDoen.map(d => `<li>${d}</li>`).join("")}</ul>
      </div>
    </div>` : ""}
    ${s.bronnen && s.bronnen.length ? `
    <div class="bronnen verschijn">
      <h2>Waar dit vandaan komt</h2>
      <div class="bron-lijst">${s.bronnen.map(bronHTML).join("")}</div>
    </div>` : ""}
    <p class="disclaimer-blok"><span>Educatief, geen diagnose. Vermoed je bij jezelf of een naaste iets? Zoek een gekwalificeerde professional.</span></p>
    ${verwant.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Lees ook</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${verwant.map((g, i) => stoornisKaartHTML(g, i)).join("")}
      </div>
    </div>` : ""}
  </article>`;
}

/* ---------- grondbeginselen ---------- */

function renderRegels() {
  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("De rode draad", "Grondbeginselen van traumasensitief herstel", "Traumawetenschap, klinische ervaring en gerenommeerde bronnen komen opvallend vaak op dezelfde kern uit. Oriënterende inzichten — geen voorschriften.", "regels")}
    <div class="regel-raster">${REGELS.map((r, i) => regelHTML(r, i)).join("")}</div>
  </section>`;
}

/* ---------- boeken ---------- */

function renderBoeken() {
  const CATS = [
    { id: "lichaam",   naam: "Lichaam",   icoon: "🫁" },
    { id: "cptss",     naam: "Complex trauma", icoon: "🕸️" },
    { id: "hechting",  naam: "Hechting",  icoon: "🪢" },
    { id: "delen",     naam: "Delen & IFS", icoon: "🪞" },
    { id: "herstel",   naam: "Herstel",   icoon: "🌱" },
    { id: "neuro",     naam: "Brein",     icoon: "🧠" },
    { id: "familie",   naam: "Familie",   icoon: "🏠" },
    { id: "werkboek",  naam: "Werkboeken", icoon: "📓" }
  ];

  const mustReads = Object.entries(BOEKEN).filter(([, b]) => b.mustRead);

  function boekKaartHTML(id, b, i) {
    return `
      <a class="boek-kaart verschijn" href="#/boek/${id}" style="--boekkleur:${b.kleur}; --wacht:${Math.min(i * 0.05, 0.4)}s">
        ${boekCoverHTML(id, b)}
        <span>
          <h3>${b.titel}</h3>
          <span class="auteur">${b.auteur}</span>
          <span class="boek-jaar">${b.jaar}</span>
          <p class="kern">${b.kern}</p>
        </span>
      </a>`;
  }

  function gridHTML(filter) {
    const items = Object.entries(BOEKEN)
      .filter(([, b]) => !filter || (b.categorieen || []).includes(filter));
    if (!items.length) return `<p class="geen-resultaat">Geen boeken in deze categorie.</p>`;
    return items.map(([id, b], i) => boekKaartHTML(id, b, i)).join("");
  }

  app.innerHTML = `
  <section class="sectie">
    ${sectieKop("Boekenkast", "Bronnen en verder lezen", "Elk antwoord verwijst naar boeken en experts waar vergelijkbare inzichten verder worden uitgewerkt. Klik een boek voor kernpunten, bijhorende vragen en zoeklinks.", "boeken")}

    <div class="boek-aanraders verschijn">
      <p class="aanraders-label">⭐ Absolute aanraders</p>
      <div class="aanraders-rij">
        ${mustReads.map(([id, b]) => `
          <a class="boek-kaart boek-aanrader" href="#/boek/${id}" style="--boekkleur:${b.kleur}">
            ${boekCoverHTML(id, b)}
            <span>
              <h3>${b.titel}</h3>
              <span class="auteur">${b.auteur}</span>
              <span class="boek-jaar">${b.jaar}</span>
              <p class="kern">${b.kern}</p>
            </span>
          </a>`).join("")}
      </div>
    </div>

    <div class="boek-filters" role="group" aria-label="Filter op categorie">
      <button class="boek-filter-knop actief" data-cat="">Alle boeken</button>
      ${CATS.map(c => `<button class="boek-filter-knop" data-cat="${c.id}">${c.icoon} ${c.naam}</button>`).join("")}
    </div>

    <div class="boek-raster" id="boekRaster">
      ${gridHTML("")}
    </div>
  </section>`;

  document.querySelectorAll(".boek-filter-knop").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".boek-filter-knop").forEach(b => b.classList.remove("actief"));
      btn.classList.add("actief");
      const raster = document.getElementById("boekRaster");
      raster.innerHTML = gridHTML(btn.dataset.cat);
      animaties();
    });
  });
}

function renderBoek(id) {
  const b = boekVan(id);
  if (!b) return renderBoeken();
  const citerend = VRAGEN.filter(v => v.bronnen.some(x => x.boek === id));
  app.innerHTML = `
  <section class="sectie sectie-smal">
    <a class="terug-link" href="#/boeken"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg> Boekenkast</a>
    <div class="boek-held verschijn">
      ${boekCoverHTML(id, b, false)}
      <div>
        <span class="bovenlabel">${b.auteur} · ${b.jaar}</span>
        <h1 style="font-size:clamp(1.8rem,4vw,2.8rem)">${b.titel}</h1>
        <p class="sectie-intro">${b.kern}</p>
        ${amazonRatingHTML(b)}
        ${koopLinksHTML(b)}
      </div>
    </div>
    <h2 class="verschijn" style="margin-top:44px; font-size:1.45rem">Oriënterende kernpunten</h2>
    <ul class="kern-lijst">
      ${b.bullets.map((k, i) => `<li class="verschijn" style="--wacht:${i * 0.08}s">${k}</li>`).join("")}
    </ul>
    ${citerend.length ? `
    <div class="gerelateerd">
      <h2 class="verschijn" style="font-size:1.4rem">Vragen die op dit boek steunen</h2>
      <div class="kaart-raster" style="margin-top:20px">
        ${citerend.map((v, i) => vraagKaartHTML(v, i)).join("")}
      </div>
    </div>` : ""}
  </section>`;
}

/* ---------- router ---------- */

const routes = [
  [/^#?\/?$/, () => { renderHome(); return "Eerste Hulp bij Trauma"; }],
  [/^#\/themas$/, () => { renderThemas(); return "Alle vragen"; }],
  [/^#\/thema\/(.+)$/, m => { renderThema(m[1]); return (themaVan(m[1]) || {}).naam; }],
  [/^#\/vraag\/(.+)$/, m => { renderVraag(m[1]); return (vraagVan(m[1]) || {}).vraag; }],
  [/^#\/noodhulp$/, () => { renderNoodhulp(); return "Acute hulp"; }],
  [/^#\/nood\/(.+)$/, m => { renderNood(m[1]); return "Acuut plan"; }],
  [/^#\/mythes$/, () => { renderMythes(); return "Mythes ontkracht"; }],
  [/^#\/therapieen$/, () => { renderTherapieen(); return "Therapieën"; }],
  [/^#\/therapie\/(.+)$/, m => { renderTherapie(m[1]); return (therapieVan(m[1]) || {}).naam; }],
  [/^#\/uitgelegd$/, () => { renderUitgelegd(); return "Trauma uitgelegd"; }],
  [/^#\/concept\/(.+)$/, m => { renderConcept(m[1]); return (conceptVan(m[1]) || {}).titel; }],
  [/^#\/hechting$/, () => { renderHechting(); return "Hechtingsstijlen"; }],
  [/^#\/hechting\/(.+)$/, m => { renderHechtingsstijl(m[1]); return (hechtingVan(m[1]) || {}).naam; }],
  [/^#\/stoornissen$/, () => { renderStoornissen(); return "Persoonlijkheidsstoornissen"; }],
  [/^#\/stoornis\/(.+)$/, m => { renderStoornis(m[1]); return (stoornisVan(m[1]) || {}).naam; }],
  [/^#\/regels$/, () => { renderRegels(); return "Grondbeginselen"; }],
  [/^#\/boeken$/, () => { renderBoeken(); return "Boekenkast"; }],
  [/^#\/boek\/(.+)$/, m => { renderBoek(m[1]); return (boekVan(m[1]) || {}).titel; }]
];

function navigeer() {
  const hash = location.hash || "#/";

  if (navigeer._huidig) {
    sessionStorage.setItem("scroll:" + navigeer._huidig, window.scrollY);
  }

  let titel = null;
  for (const [patroon, actie] of routes) {
    const m = hash.match(patroon);
    if (m) { titel = actie(m); break; }
  }
  if (titel === null) { renderHome(); titel = "Eerste Hulp bij Trauma"; }
  document.title = (titel && titel !== "Eerste Hulp bij Trauma")
    ? `${titel} — EHBT · Eerste Hulp bij Trauma`
    : "EHBT · Eerste Hulp bij Trauma — begrijpelijke antwoorden over trauma en herstel";

  const opgeslagen = sessionStorage.getItem("scroll:" + hash);
  if (opgeslagen !== null) {
    sessionStorage.removeItem("scroll:" + hash);
    window.scrollTo({ top: +opgeslagen, behavior: "instant" });
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  navigeer._huidig = hash;
  markeerNav(hash);
  koppelMythes();
  animaties();
  kalibreerLopendeBand();
  document.getElementById("mobielMenu").hidden = true;
  document.getElementById("menuKnop").setAttribute("aria-expanded", "false");
}

function markeerNav(hash) {
  document.querySelectorAll(".hoofdnav a").forEach(a => {
    const sleutel = a.dataset.nav;
    const actief =
      (sleutel === "themas" && (hash.startsWith("#/thema") || hash.startsWith("#/vraag"))) ||
      (sleutel === "noodhulp" && hash.startsWith("#/nood")) ||
      (sleutel === "mythes" && hash.startsWith("#/mythes")) ||
      (sleutel === "therapieen" && hash.startsWith("#/therapie")) ||
      (sleutel === "uitgelegd" && (hash.startsWith("#/uitgelegd") || hash.startsWith("#/concept") || hash.startsWith("#/hechting") || hash.startsWith("#/stoornis"))) ||
      (sleutel === "boeken" && hash.startsWith("#/boek"));
    a.classList.toggle("actief", actief);
  });
}

/* ---------- mythes-accordeon ---------- */

function koppelMythes() {
  document.querySelectorAll(".mythe-kop").forEach(knop => {
    knop.addEventListener("click", () => {
      const mythe = knop.closest(".mythe");
      const open = mythe.classList.toggle("open");
      knop.setAttribute("aria-expanded", open);
    });
  });
}

/* ---------- scroll-animaties ---------- */

let kijker = null;

function animaties() {
  if (kijker) kijker.disconnect();
  kijker = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("zichtbaar");
        kijker.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
  document.querySelectorAll(".verschijn").forEach(el => kijker.observe(el));
}

/* ---------- lopende band ---------- */

function kalibreerLopendeBand() {
  const spoor = document.querySelector(".band-spoor");
  if (!spoor) return;

  requestAnimationFrame(() => {
    const afstand = spoor.scrollWidth / 2;
    if (!afstand) return;

    const pixelsPerSeconde = 28;
    const minimaleDuur = 160;
    const duur = Math.max(minimaleDuur, Math.round(afstand / pixelsPerSeconde));
    spoor.style.setProperty("--band-duur", `${duur}s`);
  });
}

/* ---------- zoeken ---------- */

const zoekLaag = document.getElementById("zoekLaag");
const zoekInput = document.getElementById("zoekInput");
const zoekResultaten = document.getElementById("zoekResultaten");
let zoekIndexGekozen = -1;

function zoekIndex() {
  const items = [];
  VRAGEN.forEach(v => items.push({
    soort: "Vraag", titel: v.vraag, kort: v.kort, url: `#/vraag/${v.id}`,
    tekst: `${v.vraag} ${v.kort} ${(v.tags || []).join(" ")}`.toLowerCase()
  }));
  THERAPIEEN.forEach(t => items.push({
    soort: "Therapie", titel: t.naam, kort: t.kort, url: `#/therapie/${t.id}`,
    tekst: `${t.naam} ${t.voluit} ${t.kort} ${t.voorWie} ${(t.geschiktBij || []).join(" ")}`.toLowerCase()
  }));
  CONCEPTEN.forEach(c => items.push({
    soort: "Uitgelegd", titel: c.titel, kort: c.kort, url: `#/concept/${c.id}`,
    tekst: `${c.titel} ${c.kort} ${(c.blokken || []).map(b => b.tekst).join(" ")}`.toLowerCase()
  }));
  HECHTINGSSTIJLEN.forEach(h => items.push({
    soort: "Hechting", titel: h.naam, kort: h.inEenZin, url: `#/hechting/${h.id}`,
    tekst: `${h.naam} ${h.inEenZin} ${(h.herkenbaar || []).join(" ")} hechting`.toLowerCase()
  }));
  STOORNISSEN.forEach(s => items.push({
    soort: "Persoonlijkheid", titel: s.naam, kort: s.inEenZin, url: `#/stoornis/${s.id}`,
    tekst: `${s.naam} ${s.ookGenoemd || ""} ${s.inEenZin} persoonlijkheidsstoornis`.toLowerCase()
  }));
  NOODHULP.forEach(n => items.push({
    soort: "Acuut plan", titel: n.titel, kort: n.kort, url: `#/nood/${n.id}`,
    tekst: `${n.titel} ${n.kort} acuut crisis nu`.toLowerCase()
  }));
  MYTHES.forEach(m => items.push({
    soort: "Mythe", titel: m.mythe, kort: m.feit.slice(0, 110) + "…", url: "#/mythes",
    tekst: `${m.mythe} ${m.feit}`.toLowerCase()
  }));
  Object.entries(BOEKEN).forEach(([id, b]) => items.push({
    soort: "Boek", titel: b.titel, kort: `${b.auteur} · ${b.jaar}`, url: `#/boek/${id}`,
    tekst: `${b.titel} ${b.auteur} ${b.kern}`.toLowerCase()
  }));
  return items;
}

const ZOEKBAAR = zoekIndex();

function zoek(q) {
  const termen = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!termen.length) return [];
  return ZOEKBAAR
    .map(item => {
      let score = 0;
      for (const term of termen) {
        if (!item.tekst.includes(term)) return null;
        if (item.titel.toLowerCase().includes(term)) score += 3;
        else score += 1;
        if (item.soort === "Vraag") score += 1;
      }
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(r => r.item);
}

function toonResultaten(q) {
  const lijst = zoek(q);
  zoekIndexGekozen = -1;
  if (!q.trim()) {
    zoekResultaten.innerHTML = `<div class="zoek-leeg"><strong>Waar zoek je naar?</strong>Probeer “flashback”, “dissociatie”, “EMDR” of “hechting”.</div>`;
    return;
  }
  if (!lijst.length) {
    zoekResultaten.innerHTML = `<div class="zoek-leeg"><strong>Niets gevonden voor “${q}”</strong>Probeer een ander woord — of blader door <a href="#/uitgelegd">Trauma uitgelegd</a>.</div>`;
    return;
  }
  zoekResultaten.innerHTML = lijst.map(r => `
    <a class="zoek-item" href="${r.url}">
      <span class="zi-soort">${r.soort}</span>
      <span class="zi-titel">${r.titel}</span>
      <span class="zi-kort">${r.kort}</span>
    </a>`).join("");
}

function openZoek() {
  zoekLaag.hidden = false;
  document.body.style.overflow = "hidden";
  zoekInput.value = "";
  toonResultaten("");
  setTimeout(() => zoekInput.focus(), 30);
}

function sluitZoek() {
  zoekLaag.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("zoekKnop").addEventListener("click", openZoek);
document.getElementById("mobielZoekbalk").addEventListener("click", openZoek);
document.getElementById("zoekSluit").addEventListener("click", () => {
  if (zoekInput.value) {
    zoekInput.value = "";
    zoekInput.dispatchEvent(new Event("input"));
    zoekInput.focus();
  } else {
    sluitZoek();
  }
});
zoekLaag.addEventListener("click", e => { if (e.target === zoekLaag) sluitZoek(); });
zoekInput.addEventListener("input", () => toonResultaten(zoekInput.value));
zoekResultaten.addEventListener("click", e => { if (e.target.closest(".zoek-item")) sluitZoek(); });

document.addEventListener("keydown", e => {
  if (e.key === "/" && zoekLaag.hidden && !/input|textarea/i.test(document.activeElement.tagName)) {
    e.preventDefault(); openZoek();
  }
  if (e.key === "Escape" && !zoekLaag.hidden) sluitZoek();
  if (!zoekLaag.hidden && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter")) {
    const items = [...zoekResultaten.querySelectorAll(".zoek-item")];
    if (!items.length) return;
    if (e.key === "Enter") {
      const doel = items[Math.max(zoekIndexGekozen, 0)];
      if (doel) { location.hash = doel.getAttribute("href"); sluitZoek(); }
      e.preventDefault();
      return;
    }
    e.preventDefault();
    zoekIndexGekozen += e.key === "ArrowDown" ? 1 : -1;
    zoekIndexGekozen = (zoekIndexGekozen + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle("gekozen", i === zoekIndexGekozen));
    items[zoekIndexGekozen].scrollIntoView({ block: "nearest" });
  }
});

/* ---------- header & menu ---------- */

const siteKop = document.getElementById("siteKop");
window.addEventListener("scroll", () => {
  siteKop.classList.toggle("gescrold", window.scrollY > 8);
}, { passive: true });

const menuKnop = document.getElementById("menuKnop");
const mobielMenu = document.getElementById("mobielMenu");
menuKnop.addEventListener("click", () => {
  const open = mobielMenu.hidden;
  mobielMenu.hidden = !open;
  menuKnop.setAttribute("aria-expanded", String(open));
});

let bandResizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(bandResizeTimer);
  bandResizeTimer = setTimeout(kalibreerLopendeBand, 120);
}, { passive: true });

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(kalibreerLopendeBand);
}

/* ---------- start ---------- */

window.addEventListener("hashchange", navigeer);
navigeer();
