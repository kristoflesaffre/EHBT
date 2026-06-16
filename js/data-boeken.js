// ============================================================
// EHBT — Boeken (bronnen), thema's & doelgroepen
// Alle samenvattingen zijn onafhankelijk geschreven, geïnspireerd
// door de genoemde werken — geen overgenomen boektekst.
// ============================================================

function zoekLinks(titel, auteur) {
  const q = encodeURIComponent(`${titel} ${auteur}`);
  return [
    { label: "Bol.com", url: `https://www.bol.com/be/nl/s/?searchtext=${q}` },
    { label: "Standaard Boekhandel", url: `https://www.standaardboekhandel.be/zoeken?text=${q}` }
  ];
}
const BOEKEN = {
  "body-keeps-score": {
    titel: "The Body Keeps the Score",
    auteur: "Bessel van der Kolk",
    jaar: 2014,
    kleur: "#3f7d72",
    icoon: "🧠",
    kern: "Het invloedrijke standaardwerk over hoe trauma zich nestelt in lichaam en brein — en waarom praten alleen vaak niet volstaat.",
    bullets: [
      "Trauma verandert hoe het brein gevaar inschat: het alarmsysteem blijft afgaan, ook als het gevaar voorbij is.",
      "Herinneringen aan trauma worden niet als verhaal opgeslagen maar als lichamelijke sensaties, beelden en emoties.",
      "Herstel vraagt vaak lichaamsgerichte wegen — beweging, ademhaling, ritme, veiligheid — naast gesprekstherapie."
    ],
    categorieen: [
      "neuro",
      "lichaam",
      "herstel"
    ],
    mustRead: true,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Body%20Keeps%20the%20Score%20Bessel%20van%20der%20Kolk"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Body%20Keeps%20the%20Score%20Bessel%20van%20der%20Kolk"
      }
    ],
    cover: "img/covers/body-keeps-score.jpg"
  },
  "cptsd-surviving-thriving": {
    titel: "Complex PTSD: From Surviving to Thriving",
    auteur: "Pete Walker",
    jaar: 2013,
    kleur: "#516b78",
    icoon: "🧭",
    kern: "Een warme, praktische gids over complex trauma, geschreven door een therapeut die het zelf doorleefde.",
    bullets: [
      "Introduceert de 'emotionele flashback': overspoeld worden door oude gevoelens zonder beeld of verhaal erbij.",
      "Beschrijft vier overlevingsreacties — vechten, vluchten, bevriezen en pleasen (fawn) — als begrijpelijke aanpassingen.",
      "Centraal staat het temmen van de innerlijke criticus en het opbouwen van zelfcompassie."
    ],
    categorieen: [
      "cptss",
      "herstel"
    ],
    mustRead: true,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Complex%20PTSD%20From%20Surviving%20to%20Thriving%20Pete%20Walker"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Complex%20PTSD%20From%20Surviving%20to%20Thriving%20Pete%20Walker"
      }
    ],
    cover: "img/covers/cptsd-surviving-thriving.jpg"
  },
  "no-bad-parts": {
    titel: "No Bad Parts",
    auteur: "Richard Schwartz",
    jaar: 2021,
    kleur: "#7c6f8f",
    icoon: "🪞",
    kern: "De grondlegger van Internal Family Systems legt uit dat we allemaal uit 'delen' bestaan — en dat geen enkel deel slecht is.",
    bullets: [
      "Je psyche bestaat uit deeltjes met eigen rollen; beschermers en gekwetste delen ontstonden om je te helpen overleven.",
      "Onder de delen ligt een kalm, wijs 'Zelf' dat kan leiden en helen.",
      "Heling komt door je delen met nieuwsgierigheid te benaderen in plaats van ze weg te duwen of te bestrijden."
    ],
    categorieen: [
      "delen",
      "herstel"
    ],
    mustRead: true,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=No%20Bad%20Parts%20Internal%20Family%20Systems%20Richard%20Schwartz"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=No%20Bad%20Parts%20Internal%20Family%20Systems%20Richard%20Schwartz"
      }
    ],
    cover: "img/covers/no-bad-parts.jpg"
  },
  anchored: {
    titel: "Anchored",
    auteur: "Deb Dana",
    jaar: 2022,
    kleur: "#3f7d72",
    icoon: "⚓",
    kern: "Een toegankelijke vertaling van de polyvagaaltheorie: leren je zenuwstelsel te begrijpen en te kalmeren.",
    bullets: [
      "Je zenuwstelsel beweegt tussen veiligheid, in actie komen (vecht/vlucht) en dichtklappen (shutdown) — vaak buiten je wil om.",
      "Door je 'innerlijke landkaart' te leren lezen herken je sneller waar je zit en wat je nodig hebt.",
      "Kleine, herhaalde momenten van veiligheid en verbinding helpen het systeem opnieuw te ijken."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: true,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Anchored%20Deb%20Dana%20polyvagal%20Deb%20Dana"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Anchored%20Deb%20Dana%20polyvagal%20Deb%20Dana"
      }
    ],
    cover: "img/covers/anchored.jpg"
  },
  "waking-the-tiger": {
    titel: "Waking the Tiger",
    auteur: "Peter A. Levine",
    jaar: 1997,
    kleur: "#9a7b4f",
    icoon: "🐅",
    kern: "Het fundament van Somatic Experiencing: trauma is geÏmplodeerde overlevingsenergie die het lichaam wil voltooien.",
    bullets: [
      "Dieren in het wild 'schudden' stress letterlijk van zich af; mensen blokkeren die ontlading vaak.",
      "Trauma zit niet in de gebeurtenis maar in een vastgelopen zenuwstelsel.",
      "Door zachtjes en gedoseerd lichaamssensaties te volgen kan vastgehouden spanning alsnog ontladen."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Waking%20the%20Tiger%20Healing%20Trauma%20Peter%20Levine"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Waking%20the%20Tiger%20Healing%20Trauma%20Peter%20Levine"
      }
    ],
    cover: "img/covers/waking-the-tiger.jpg"
  },
  "healing-developmental-trauma": {
    titel: "Healing Developmental Trauma",
    auteur: "Laurence Heller & Aline LaPierre",
    jaar: 2012,
    kleur: "#5f7259",
    icoon: "🌱",
    kern: "Introduceert het NeuroAffective Relational Model (NARM) voor trauma dat vroeg in de ontwikkeling ontstond.",
    bullets: [
      "Vroege gemiste behoeften vormen vijf kernthema's: contact, afstemming, vertrouwen, autonomie en liefde-seksualiteit.",
      "Overlevingsstrategieën uit de kindertijd blijven het volwassen leven sturen.",
      "Heling richt zich op het hier-en-nu en op het herstellen van het contact met jezelf, niet enkel op het verleden."
    ],
    categorieen: [
      "cptss",
      "lichaam",
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Healing%20Developmental%20Trauma%20NARM%20Laurence%20Heller"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Healing%20Developmental%20Trauma%20NARM%20Laurence%20Heller"
      }
    ],
    cover: "img/covers/healing-developmental-trauma.jpg"
  },
  "running-on-empty": {
    titel: "Running on Empty",
    auteur: "Jonice Webb",
    jaar: 2012,
    kleur: "#5a7d86",
    icoon: "🫥",
    kern: "Over emotionele verwaarlozing in de jeugd — niet wat er gebeurde, maar wat er níet gebeurde.",
    bullets: [
      "Emotionele verwaarlozing is vaak onzichtbaar: ouders die het beste wilden maar emoties niet zagen of spiegelden.",
      "Het gevolg kan een leegte zijn: moeite met voelen, met hulp vragen en met weten wat je nodig hebt.",
      "Herstel begint met je eigen gevoelens leren opmerken, benoemen en serieus nemen."
    ],
    categorieen: [
      "hechting",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Running%20on%20Empty%20Childhood%20Emotional%20Neglect%20Jonice%20Webb"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Running%20on%20Empty%20Childhood%20Emotional%20Neglect%20Jonice%20Webb"
      }
    ],
    cover: "img/covers/running-on-empty.jpg"
  },
  "healing-fragmented-selves": {
    titel: "Healing the Fragmented Selves of Trauma Survivors",
    auteur: "Janina Fisher",
    jaar: 2017,
    kleur: "#7c6f8f",
    icoon: "🧩",
    kern: "Over hoe trauma de persoonlijkheid kan opsplitsen — en hoe je vriendschap sluit met je eigen delen.",
    bullets: [
      "Na trauma kan een deel 'gewoon doorgaan' terwijl andere delen de angst, woede of schaamte dragen.",
      "Zelfvervreemding en zelfhaat zijn vaak een innerlijk conflict tussen delen.",
      "Heling betekent leren om met mededogen naar elk deel te luisteren in plaats van het te verbannen."
    ],
    categorieen: [
      "delen",
      "cptss"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Healing%20the%20Fragmented%20Selves%20of%20Trauma%20Survivors%20Janina%20Fisher"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Healing%20the%20Fragmented%20Selves%20of%20Trauma%20Survivors%20Janina%20Fisher"
      }
    ],
    cover: "img/covers/healing-fragmented-selves.jpg"
  },
  "myth-of-normal": {
    titel: "The Myth of Normal",
    auteur: "Gabor Maté & Daniel Maté",
    jaar: 2022,
    kleur: "#6a8f5e",
    icoon: "🌍",
    kern: "Een breed pleidooi dat veel 'normaal' lijden eigenlijk een begrijpelijke reactie is op een ongezonde omgeving.",
    bullets: [
      "Trauma is niet alleen wat je overkwam, maar ook wat er daardoor binnenin je gebeurde.",
      "Chronische stress en onderdrukte emoties kunnen doorwerken in de fysieke gezondheid.",
      "Authenticiteit en verbinding zijn tegengiffen tegen de afsplitsing die trauma veroorzaakt."
    ],
    categorieen: [
      "neuro",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Myth%20of%20Normal%20Gabor%20Mate"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Myth%20of%20Normal%20Gabor%20Mate"
      }
    ],
    cover: "img/covers/myth-of-normal.jpg"
  },
  "complex-ptsd-workbook": {
    titel: "The Complex PTSD Workbook",
    auteur: "Arielle Schwartz",
    jaar: 2020,
    kleur: "#516b78",
    icoon: "📓",
    kern: "Een praktisch werkboek met oefeningen om stap voor stap met complex trauma aan de slag te gaan.",
    bullets: [
      "Combineert inzichten uit lichaamsgerichte, cognitieve en relationele benaderingen.",
      "Veel nadruk op werken in stappen: eerst stevig worden en veiligheid, dan pas verwerken.",
      "Oefeningen helpen om veerkracht en zelfcompassie te versterken."
    ],
    categorieen: [
      "cptss",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Complex%20PTSD%20Workbook%20Arielle%20Schwartz"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Complex%20PTSD%20Workbook%20Arielle%20Schwartz"
      }
    ],
    cover: "img/covers/complex-ptsd-workbook.jpg"
  },
  "deepest-well": {
    titel: "The Deepest Well",
    auteur: "Nadine Burke Harris",
    jaar: 2018,
    kleur: "#4a6b8a",
    icoon: "💧",
    kern: "Over Adverse Childhood Experiences (ACE's) en hoe vroege tegenslag de gezondheid een leven lang beïnvloedt.",
    bullets: [
      "Een hoog aantal nare jeugdervaringen verhoogt het risico op latere lichamelijke en psychische klachten.",
      "De toxische stress van vroege tegenslag verandert het zich ontwikkelende brein en immuunsysteem.",
      "Vroege herkenning en steun kunnen de schadelijke keten doorbreken."
    ],
    categorieen: [
      "neuro",
      "cptss"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Deepest%20Well%20Nadine%20Burke%20Harris%20Nadine%20Burke%20Harris"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Deepest%20Well%20Nadine%20Burke%20Harris%20Nadine%20Burke%20Harris"
      }
    ],
    cover: "img/covers/deepest-well.jpg"
  },
  attached: {
    titel: "Attached",
    auteur: "Amir Levine & Rachel Heller",
    jaar: 2010,
    kleur: "#5f7259",
    icoon: "🪢",
    kern: "Een toegankelijke inleiding in volwassen hechting: veilig, angstig en vermijdend in relaties.",
    bullets: [
      "Je hechtingsstijl bepaalt mee hoe je nabijheid, afstand en conflict beleeft in relaties.",
      "Angstige en vermijdende stijlen kunnen elkaar onbedoeld versterken in een pijnlijke dans.",
      "Inzicht in je stijl helpt om bewustere keuzes te maken in wie en hoe je liefhebt."
    ],
    categorieen: [
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Attached%20the%20new%20science%20of%20adult%20attachment%20Amir%20Levine"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Attached%20the%20new%20science%20of%20adult%20attachment%20Amir%20Levine"
      }
    ],
    cover: "img/covers/attached.jpg"
  },
  "in-an-unspoken-voice": {
    titel: "In an Unspoken Voice",
    auteur: "Peter A. Levine",
    jaar: 2010,
    kleur: "#3f7d72",
    icoon: "🫀",
    kern: "Hoe het lichaam trauma opslaat en weer kan genezen — met aandacht voor sensaties, niet alleen verhalen.",
    bullets: [
      "Trauma is een lichamelijke blokkade: overlevingsenergie die niet kon ontladen.",
      "Heling begint bij lichaamsbewustzijn en voorzichtig contact met je lichaamsgevoelens.",
      "Je hoeft het verhaal niet te kennen om het lichaam te kunnen helpen herstellen."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=In%20an%20Unspoken%20Voice%20Peter%20Levine%20Peter%20Levine"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=In%20an%20Unspoken%20Voice%20Peter%20Levine%20Peter%20Levine"
      }
    ],
    cover: "img/covers/in-an-unspoken-voice.jpg"
  },
  "trauma-and-memory": {
    titel: "Trauma and Memory",
    auteur: "Peter A. Levine & Bessel van der Kolk",
    jaar: 2015,
    kleur: "#4a6b8a",
    icoon: "🧩",
    kern: "Over hoe traumaherinneringen werken — in losse stukjes, lichamelijk, soms afwezig — en waarom dat normaal is.",
    bullets: [
      "Traumaherinneringen worden anders opgeslagen dan gewone herinneringen: als beelden, sensaties en emoties.",
      "Gaten in het geheugen betekenen niet dat er niets gebeurde.",
      "Herstel richt zich op het verlagen van de lading, niet op een perfect verhaal."
    ],
    categorieen: [
      "neuro",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Trauma%20and%20Memory%20Peter%20Levine%20Peter%20Levine"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Trauma%20and%20Memory%20Peter%20Levine%20Peter%20Levine"
      }
    ],
    cover: "img/covers/trauma-and-memory.jpg"
  },
  "when-body-says-no": {
    titel: "When the Body Says No",
    auteur: "Gabor Maté",
    jaar: 2003,
    kleur: "#6a8f5e",
    icoon: "💊",
    kern: "Hoe onderdrukte stress en emotionele last doorwerken in lichamelijke ziekte en chronische klachten.",
    bullets: [
      "Chronische stress en het onderdrukken van emoties kunnen het immuunsysteem en organen belasten.",
      "Veel 'lichamelijke' klachten hebben een begrijpelijke psychologische en relationele context.",
      "Grenzen stellen en authenticiteit zijn geen luxe maar gezondheid."
    ],
    categorieen: [
      "neuro",
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=When%20the%20Body%20Says%20No%20Gabor%20Mate%20Gabor%20Mate"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=When%20the%20Body%20Says%20No%20Gabor%20Mate%20Gabor%20Mate"
      }
    ],
    cover: "img/covers/when-body-says-no.jpg"
  },
  "what-happened-to-you": {
    titel: "What Happened to You?",
    auteur: "Bruce D. Perry & Oprah Winfrey",
    jaar: 2021,
    kleur: "#5b6a7d",
    icoon: "💬",
    kern: "Een toegankelijk gesprek over hoe vroege ervaringen het brein vormen — en waarom 'wat gebeurde er?' belangrijker is dan 'wat is er mis met jou?'",
    bullets: [
      "Vraag 'wat gebeurde er met je?' in plaats van 'wat is er mis met je?' — dat verandert de blik op gedrag.",
      "Het zich ontwikkelende brein is sequentieel gevoelig: timing van stress telt enorm.",
      "Herstel begint met begrip, veiligheid en relationele genezing."
    ],
    categorieen: [
      "neuro",
      "cptss",
      "hechting"
    ],
    mustRead: true,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=What%20Happened%20to%20You%20Bruce%20Perry%20Oprah%20Bruce%20Perry"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=What%20Happened%20to%20You%20Bruce%20Perry%20Oprah%20Bruce%20Perry"
      }
    ],
    cover: "img/covers/what-happened-to-you.jpg"
  },
  "break-the-cycle": {
    titel: "Break the Cycle",
    auteur: "Mariel Buqué",
    jaar: 2024,
    kleur: "#5f7259",
    icoon: "🌳",
    kern: "Een gids voor intergenerationeel trauma: patronen doorbreken die van ouder op kind werden doorgegeven.",
    bullets: [
      "Trauma kan generaties doorgeven via gedrag, stress en hechtingspatronen — niet alleen via verhalen.",
      "Bewustwording van familiepatronen is de eerste stap om de cyclus te doorbreken.",
      "Heling voor jezelf helpt ook toekomstige generaties."
    ],
    categorieen: [
      "cptss",
      "hechting",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Break%20the%20Cycle%20Mariel%20Buque%20intergenerational%20Mariel%20Buque"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Break%20the%20Cycle%20Mariel%20Buque%20intergenerational%20Mariel%20Buque"
      }
    ],
    cover: "img/covers/break-the-cycle.jpg"
  },
  "tiny-traumas": {
    titel: "Tiny Traumas",
    auteur: "Meg Arroll",
    jaar: 2022,
    kleur: "#5a7d86",
    icoon: "🪶",
    kern: "Kleine, chronische tegenslagen stapelen op — en kunnen net zo veel impact hebben als één grote gebeurtenis.",
    bullets: [
      "'Kleine t trauma's' zijn herhaalde momenten van onveiligheid, afwijzing of overbelasting.",
      "De impact telt cumulatief: veel kleine wonden kunnen een groot spoor nalaten.",
      "Je pijn hoeft geen catastrofe te zijn om serieus genomen te worden."
    ],
    categorieen: [
      "cptss",
      "neuro"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Tiny%20Traumas%20Meg%20Arroll%20Meg%20Arroll"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Tiny%20Traumas%20Meg%20Arroll%20Meg%20Arroll"
      }
    ],
    cover: "img/covers/tiny-traumas.jpg"
  },
  "end-of-trauma": {
    titel: "The End of Trauma",
    auteur: "George A. Bonanno",
    jaar: 2021,
    kleur: "#516b78",
    icoon: "🌤️",
    kern: "Over veerkracht: de meeste mensen herstellen, en flexibiliteit in omgaan met tegenslag is leerbaar.",
    bullets: [
      "Veerkracht is geen uitzondering maar veel voorkomender dan we denken.",
      "Flexibel omgaan met emoties — niet vermijden, niet vastlopen — voorspelt herstel.",
      "Trauma is ernstig, maar hopeloosheid is zelden gerechtvaardigd."
    ],
    categorieen: [
      "herstel",
      "neuro"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20End%20of%20Trauma%20George%20Bonanno%20George%20Bonanno"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20End%20of%20Trauma%20George%20Bonanno%20George%20Bonanno"
      }
    ],
    cover: "img/covers/end-of-trauma.jpg"
  },
  "politics-of-trauma": {
    titel: "The Politics of Trauma",
    auteur: "Staci K. Haines",
    jaar: 2019,
    kleur: "#9a7b4f",
    icoon: "✊",
    kern: "Trauma verbinden met lichaam, gemeenschap en rechtvaardigheid — heling is ook collectief.",
    bullets: [
      "Trauma ontstaat niet alleen individueel maar ook in systemen van onderdrukking en onveiligheid.",
      "Lichaamsgericht werk en gemeenschap versterken elkaar in herstel.",
      "Grenzen, veiligheid en verbinding zijn politiek én persoonlijk."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Politics%20of%20Trauma%20Staci%20Haines%20Staci%20Haines"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Politics%20of%20Trauma%20Staci%20Haines%20Staci%20Haines"
      }
    ],
    cover: "img/covers/politics-of-trauma.jpg"
  },
  "healing-shame-binds": {
    titel: "Healing the Shame That Binds You",
    auteur: "John Bradshaw",
    jaar: 1988,
    kleur: "#7c6f8f",
    icoon: "⛓️",
    kern: "Over toxische schaamte — het gevoel dat je als mens fundamenteel tekortschiet — en hoe je die kunt losmaken.",
    bullets: [
      "Toxische schaamte zegt 'ik ben fout', niet 'ik deed iets fout'.",
      "Veel trauma-achtergronden kweken diep verankerde schaamte via afwijzing of misbruik.",
      "Kwetsbaarheid in veilige verbinding is het tegengif."
    ],
    categorieen: [
      "delen",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Healing%20the%20Shame%20That%20Binds%20You%20John%20Bradshaw%20John%20Bradshaw"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Healing%20the%20Shame%20That%20Binds%20You%20John%20Bradshaw%20John%20Bradshaw"
      }
    ],
    cover: "img/covers/healing-shame-binds.jpg"
  },
  carefrontation: {
    titel: "Carefrontation",
    auteur: "Arlene Drake",
    jaar: 2016,
    kleur: "#516b78",
    icoon: "🛡️",
    kern: "Zachte maar duidelijke confrontatie met je verleden — om je innerlijk kind te beschermen in plaats van te blijven aanpassen.",
    bullets: [
      "Je hoeft je ouders niet te haten om grenzen te stellen tegen oude pijn.",
      "Carefrontation combineert zorg voor jezelf met eerlijkheid over wat er gebeurde.",
      "Volwassen worden betekent je eigen veiligheid centraal zetten."
    ],
    categorieen: [
      "cptss",
      "herstel",
      "familie"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Carefrontation%20Arlene%20Drake%20Arlene%20Drake"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Carefrontation%20Arlene%20Drake%20Arlene%20Drake"
      }
    ],
    cover: "img/covers/carefrontation.jpg"
  },
  "its-not-your-fault": {
    titel: "It's Not Your Fault",
    auteur: "Alex Howard",
    jaar: 2023,
    kleur: "#3f7d72",
    icoon: "🤲",
    kern: "Een toegankelijke introductie tot trauma en herstel — met nadruk op begrip, niet op schuld.",
    bullets: [
      "Wat je overkwam is niet jouw schuld; je reacties waren overlevingsstrategieën.",
      "Herstel begint bij veiligheid en zelfbegrip, niet bij zelfkritiek.",
      "Kleine, consistente stappen werken beter dan grote sprongen."
    ],
    categorieen: [
      "herstel",
      "cptss"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=It's%20Not%20Your%20Fault%20Alex%20Howard%20trauma%20Alex%20Howard"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=It's%20Not%20Your%20Fault%20Alex%20Howard%20trauma%20Alex%20Howard"
      }
    ],
    cover: "img/covers/its-not-your-fault.jpg"
  },
  "overcoming-childhood-trauma": {
    titel: "Overcoming Your Childhood Trauma",
    auteur: "Sostenes B. Lima",
    jaar: 2024,
    kleur: "#5a7d86",
    icoon: "🧭",
    kern: "Praktische stappen om jeugdtrauma te begrijpen en stap voor stap aan herstel te werken.",
    bullets: [
      "Herkenning van patronen is de eerste stap — niet het eindpunt.",
      "Werk met compassie, niet met zelfbeschuldiging.",
      "Professionele steun versterkt wat je zelf al kunt doen."
    ],
    categorieen: [
      "cptss",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Overcoming%20Your%20Childhood%20Trauma%20Sostenes%20Lima%20Sostenes%20Lima"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Overcoming%20Your%20Childhood%20Trauma%20Sostenes%20Lima%20Sostenes%20Lima"
      }
    ],
    cover: "img/covers/overcoming-childhood-trauma.jpg"
  },
  "wounded-inner-child": {
    titel: "Healing Your Wounded Inner Child",
    auteur: "Maria Clarke",
    jaar: 2022,
    kleur: "#7c6f8f",
    icoon: "🧒",
    kern: "Het 'innerlijk kind' als metafoor voor de delen die nog pijn dragen — en hoe je die kunt troosten.",
    bullets: [
      "Je innerlijk kind is het deel dat vroeg gewond raakte en nog steeds reageert.",
      "Troosten betekent niet infantiel zijn, maar eindelijk krijgen wat je toen miste.",
      "Oefeningen helpen om met mildheid naar dat deel te kijken."
    ],
    categorieen: [
      "delen",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Healing%20Your%20Wounded%20Inner%20Child%20Maria%20Clarke%20Maria%20Clarke"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Healing%20Your%20Wounded%20Inner%20Child%20Maria%20Clarke%20Maria%20Clarke"
      }
    ],
    cover: "img/covers/wounded-inner-child.jpg"
  },
  "transforming-legacy": {
    titel: "Transforming the Legacy",
    auteur: "Kathryn Karusaitis Basham",
    jaar: 2004,
    kleur: "#5f7259",
    icoon: "🌳",
    kern: "Klinisch werk over intergenerationeel trauma in families — hoe patronen doorgeven en doorbreken.",
    bullets: [
      "Families geven stress, hechting en coping vaak onbewust door.",
      "Inzicht in je familiesysteem helpt om niet blind hetzelfde te herhalen.",
      "Verbinding met veiligere generaties of relaties kan de keten doorbreken."
    ],
    categorieen: [
      "cptss",
      "hechting",
      "familie"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Transforming%20the%20Legacy%20Kathryn%20Basham%20Kathryn%20Basham"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Transforming%20the%20Legacy%20Kathryn%20Basham%20Kathryn%20Basham"
      }
    ],
    cover: "img/covers/transforming-legacy.jpg"
  },
  "drama-gifted-child": {
    titel: "The Drama of the Gifted Child",
    auteur: "Alice Miller",
    jaar: 1979,
    kleur: "#516b78",
    icoon: "🎭",
    kern: "Over kinderen die hun eigen gevoelens onderdrukten om ouders te beschermen — en de prijs die ze als volwassene betalen.",
    bullets: [
      "Het 'begaafde' kind paste zich aan door eigen behoeften te negeren.",
      "Daardoor groeit een volwassene die niet weet wat hij voelt of nodig heeft.",
      "Eerlijkheid over het verleden — ook tegenover jezelf — opent de weg naar herstel."
    ],
    categorieen: [
      "cptss",
      "familie",
      "delen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Drama%20of%20the%20Gifted%20Child%20Alice%20Miller%20Alice%20Miller"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Drama%20of%20the%20Gifted%20Child%20Alice%20Miller%20Alice%20Miller"
      }
    ],
    cover: "img/covers/drama-gifted-child.jpg"
  },
  "emotional-incest": {
    titel: "The Emotional Incest Syndrome",
    auteur: "Patricia Love & Jo Robinson",
    jaar: 1990,
    kleur: "#8f6a9b",
    icoon: "🚧",
    kern: "Wanneer een ouder een kind emotioneel partner maakt — grenzen, autonomie en eigen identiteit raken verstoord.",
    bullets: [
      "Emotioneel incest is geen seksueel misbruik, maar een grensoverschrijdende emotionele rol.",
      "Het kind leert dat de behoeften van de ouder zwaarder wegen dan de eigen grenzen.",
      "Herstel vraagt om grenzen, eigen identiteit en het loslaten van ouderlijke loyaliteit."
    ],
    categorieen: [
      "familie",
      "cptss",
      "grenzen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Emotional%20Incest%20Syndrome%20Patricia%20Love%20Patricia%20Love"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Emotional%20Incest%20Syndrome%20Patricia%20Love%20Patricia%20Love"
      }
    ],
    cover: "img/covers/emotional-incest.jpg"
  },
  "will-i-ever-be-good-enough": {
    titel: "Will I Ever Be Good Enough?",
    auteur: "Karyl McBride",
    jaar: 2009,
    kleur: "#9a7b4f",
    icoon: "👩",
    kern: "Voor dochters van narcistische moeders: het gevoel nooit genoeg te zijn, en de weg naar eigenwaarde.",
    bullets: [
      "Narcistische moeders zien het kind vaak als extensie van zichzelf, niet als eigen persoon.",
      "Dochters leren perfectionisme, pleasen en zelftwijfel als overlevingsstrategie.",
      "Herstel betekent je eigenwaarde losmaken van de goedkeuring van je moeder."
    ],
    categorieen: [
      "familie",
      "delen",
      "grenzen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Will%20I%20Ever%20Be%20Good%20Enough%20Karyl%20McBride%20Karyl%20McBride"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Will%20I%20Ever%20Be%20Good%20Enough%20Karyl%20McBride%20Karyl%20McBride"
      }
    ],
    cover: "img/covers/will-i-ever-be-good-enough.jpg"
  },
  "trapped-in-the-mirror": {
    titel: "Trapped in the Mirror",
    auteur: "Elan Golomb",
    jaar: 1992,
    kleur: "#7c6f8f",
    icoon: "🪞",
    kern: "Volwassen kinderen van narcistische ouders: hoe de afspiegeling van de ouder het eigen zelf beheerst.",
    bullets: [
      "Kinderen van narcisten internaliseren vaak de stem en eisen van de ouder.",
      "Autonomie en eigenwaarde voelen gevaarlijk omdat ze indruisen tegen ouderlijke verwachtingen.",
      "Therapie en grenzen helpen een eigen identiteit op te bouwen."
    ],
    categorieen: [
      "familie",
      "delen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Trapped%20in%20the%20Mirror%20Elan%20Golomb%20narcissistic%20parents%20Elan%20Golomb"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Trapped%20in%20the%20Mirror%20Elan%20Golomb%20narcissistic%20parents%20Elan%20Golomb"
      }
    ],
    cover: "img/covers/trapped-in-the-mirror.jpg"
  },
  "disease-to-please": {
    titel: "The Disease to Please",
    auteur: "Harriet Braiker",
    jaar: 2001,
    kleur: "#9a7b4f",
    icoon: "😊",
    kern: "Over het people-pleasing syndroom: altijd ja zeggen uit angst voor afwijzing, en hoe je dat doorbreekt.",
    bullets: [
      "Pleasen is vaak een angstreactie, geen vriendelijkheid.",
      "Je leert grenzen door kleine nee's en het verdagen van schuldgevoel.",
      "Eigenwaarde hoeft niet af te hangen van anderen tevredenstellen."
    ],
    categorieen: [
      "grenzen",
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Disease%20to%20Please%20Harriet%20Braiker%20Harriet%20Braiker"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Disease%20to%20Please%20Harriet%20Braiker%20Harriet%20Braiker"
      }
    ],
    cover: "img/covers/disease-to-please.jpg"
  },
  "not-price-of-admission": {
    titel: "Not the Price of Admission",
    auteur: "Laura S. Brown",
    jaar: 2015,
    kleur: "#516b78",
    icoon: "🎟️",
    kern: "Gezonde relaties vragen geen opoffering van je veiligheid, grenzen of identiteit als 'toegangsprijs'.",
    bullets: [
      "Je hoeft je niet klein te maken om liefde of verbinding te krijgen.",
      "Trauma maakt soms ongezonde prijzen normaal: misbruik tolereren voor nabijheid.",
      "Echte intimiteit respecteert grenzen."
    ],
    categorieen: [
      "hechting",
      "grenzen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Not%20the%20Price%20of%20Admission%20Laura%20Brown%20Laura%20Brown"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Not%20the%20Price%20of%20Admission%20Laura%20Brown%20Laura%20Brown"
      }
    ],
    cover: "img/covers/not-price-of-admission.jpg"
  },
  "healing-emotional-self": {
    titel: "Healing Your Emotional Self",
    auteur: "Beverly Engel",
    jaar: 2006,
    kleur: "#5a7d86",
    icoon: "💛",
    kern: "Herstel van emotioneel misbruik en verwaarlozing door je 'emotionele zelf' opnieuw op te bouwen.",
    bullets: [
      "Emotioneel misbruik laat vaak geen zichtbare littekens maar diepe twijfel aan jezelf.",
      "Je emotionele zelf verdient bescherming, niet voortdurende zelfkritiek.",
      "Oefeningen helpen om zelfcompassie en grenzen te versterken."
    ],
    categorieen: [
      "cptss",
      "delen",
      "familie"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Healing%20Your%20Emotional%20Self%20Beverly%20Engel%20Beverly%20Engel"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Healing%20Your%20Emotional%20Self%20Beverly%20Engel%20Beverly%20Engel"
      }
    ],
    cover: "img/covers/healing-emotional-self.jpg"
  },
  "compassion-self-hate": {
    titel: "Compassion and Self-Hate",
    auteur: "Theodore Isaac Rubin",
    jaar: 1975,
    kleur: "#7c6f8f",
    icoon: "🕊️",
    kern: "Zelfhaat als verstikkende kracht — en compassie als weg naar vrijheid.",
    bullets: [
      "Zelfhaat voelt soms als motivatie, maar verlamt en isoleert.",
      "Compassie is geen zwakte maar de basis voor echte verandering.",
      "Kleine daden van vriendelijkheid naar jezelf tellen op."
    ],
    categorieen: [
      "delen",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Compassion%20and%20Self-Hate%20Theodore%20Rubin%20Theodore%20Rubin"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Compassion%20and%20Self-Hate%20Theodore%20Rubin%20Theodore%20Rubin"
      }
    ],
    cover: "img/covers/compassion-self-hate.jpg"
  },
  "soul-without-shame": {
    titel: "Soul Without Shame",
    auteur: "Byron Brown",
    jaar: 1998,
    kleur: "#46566e",
    icoon: "🔥",
    kern: "De innerlijke criticus begrijpen en transformeren via mededogen — in de traditie van de Ridhwan-school.",
    bullets: [
      "De criticus is een beschermer die je klein houdt uit angst voor afwijzing.",
      "Zachtheid naar jezelf ontkracht de cyclus van schaamte en zelfaanval.",
      "Bewustwording van de criticus geeft ruimte voor een authentieker leven."
    ],
    categorieen: [
      "delen"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Soul%20Without%20Shame%20Byron%20Brown%20Byron%20Brown"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Soul%20Without%20Shame%20Byron%20Brown%20Byron%20Brown"
      }
    ],
    cover: "img/covers/soul-without-shame.jpg"
  },
  "nurturing-resilience": {
    titel: "Nurturing Resilience",
    auteur: "Kathy L. Kain & Stephen J. Terrell",
    jaar: 2018,
    kleur: "#3f7d72",
    icoon: "🌿",
    kern: "Somatische benadering van vroeg en complex trauma — veerkracht opbouwen via het lichaam.",
    bullets: [
      "Vroeg trauma verstoort het zenuwstelsel; het lichaam is het startpunt voor herstel.",
      "Samen kalmeren (co-regulatie) en veilige aanraking (waar passend) helpen het systeem kalmeren.",
      "Veerkracht groeit door herhaalde ervaringen van veiligheid."
    ],
    categorieen: [
      "lichaam",
      "cptss",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Nurturing%20Resilience%20Kathy%20Kain%20Kathy%20Kain"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Nurturing%20Resilience%20Kathy%20Kain%20Kathy%20Kain"
      }
    ],
    cover: "img/covers/nurturing-resilience.jpg"
  },
  "heal-body-heal-mind": {
    titel: "Heal the Body, Heal the Mind",
    auteur: "Susanne Babbel",
    jaar: 2018,
    kleur: "#3f7d72",
    icoon: "🧘",
    kern: "Lichaamsgerichte oefeningen en inzichten om trauma-gerelateerde spanning en angst te verlichten.",
    bullets: [
      "Mindfulness en lichaamsbewustzijn helpen triggers en spanning vroeg te herkennen.",
      "Adem, houding en beweging beïnvloeden direct het zenuwstelsel.",
      "Korte dagelijkse oefeningen kunnen grote impact hebben."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Heal%20the%20Body%20Heal%20the%20Mind%20Susanne%20Babbel%20Susanne%20Babbel"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Heal%20the%20Body%20Heal%20the%20Mind%20Susanne%20Babbel%20Susanne%20Babbel"
      }
    ],
    cover: "img/covers/heal-body-heal-mind.jpg"
  },
  "becoming-the-body": {
    titel: "Becoming the Body",
    auteur: "Ken Michaels",
    jaar: 2023,
    kleur: "#3f7d72",
    icoon: "🫧",
    kern: "Weer thuiskomen in je lichaam na trauma en afhaken (dissociatie).",
    bullets: [
      "Afhaken (dissociatie) is weg zijn uit je lichaam; weer in je lichaam komen is de terugweg.",
      "Zachte sensatie-oefeningen helpen zonder te overspoelen.",
      "Het lichaam is geen vijand maar een bondgenoot in herstel."
    ],
    categorieen: [
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Becoming%20the%20Body%20Ken%20Michaels%20somatic%20Ken%20Michaels"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Becoming%20the%20Body%20Ken%20Michaels%20somatic%20Ken%20Michaels"
      }
    ],
    cover: "img/covers/becoming-the-body.jpg"
  },
  "body-first-healing": {
    titel: "Body-First Healing",
    auteur: "Brittany Piper",
    jaar: 2025,
    kleur: "#3f7d72",
    icoon: "🦋",
    kern: "Trauma herstellen door eerst het lichaam te adresseren — praktisch en toegankelijk.",
    bullets: [
      "Begin bij wat je lichaam nu voelt, niet bij het hele verhaal.",
      "Kleine bewegingen en ademhaling openen de weg naar diepere verwerking.",
      "Je tempo bepaalt de snelheid."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Body-First%20Healing%20Brittany%20Piper%20Brittany%20Piper"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Body-First%20Healing%20Brittany%20Piper%20Brittany%20Piper"
      }
    ],
    cover: "img/covers/body-first-healing.jpg"
  },
  "mindful-somatic-awareness": {
    titel: "Mindful Somatic Awareness for Anxiety Relief",
    auteur: "Michele L. Blume",
    jaar: 2020,
    kleur: "#4a6b8a",
    icoon: "🌬️",
    kern: "Mindfulness gecombineerd met lichaamsgericht werk om angst en trauma-spanning te verlichten.",
    bullets: [
      "Angst leeft in het lichaam; aandacht voor sensaties dempt de lading.",
      "Mindfulness zonder lichaam mist vaak de kern bij trauma.",
      "Oefeningen zijn geschikt voor thuis, in kleine doses."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Mindful%20Somatic%20Awareness%20Michele%20Blume%20Michele%20Blume"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Mindful%20Somatic%20Awareness%20Michele%20Blume%20Michele%20Blume"
      }
    ],
    cover: "img/covers/mindful-somatic-awareness.jpg"
  },
  "somatic-ifs": {
    titel: "Somatic Internal Family Systems Therapy",
    auteur: "Susan McConnell",
    jaar: 2020,
    kleur: "#7c6f8f",
    icoon: "🫂",
    kern: "IFS en het lichaam verbinden: delen voelen en helen via sensaties en aanwezigheid.",
    bullets: [
      "Delen leven niet alleen in gedachten maar ook als lichaamsgevoelens.",
      "Somatisch IFS helpt beschermers en gekwetste delen via het lichaam te bereiken.",
      "Ideaal voor wie veel in het hoofd zit maar het lijf moeilijk voelt."
    ],
    categorieen: [
      "delen",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Somatic%20Internal%20Family%20Systems%20Susan%20McConnell%20Susan%20McConnell"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Somatic%20Internal%20Family%20Systems%20Susan%20McConnell%20Susan%20McConnell"
      }
    ],
    cover: "img/covers/somatic-ifs.jpg"
  },
  "ifs-workbook": {
    titel: "Internal Family Systems Therapy Workbook",
    auteur: "Susan McConnell",
    jaar: 2025,
    kleur: "#7c6f8f",
    icoon: "📔",
    kern: "Praktische oefeningen om zelf met delenwerk aan de slag te gaan — onder begeleiding aanbevolen.",
    bullets: [
      "Stap-voor-stap oefeningen om delen te identificeren en te benaderen.",
      "Werkt het beste naast therapie of met ervaring in IFS.",
      "Zelfcompassie en nieuwsgierigheid staan centraal."
    ],
    categorieen: [
      "delen",
      "werkboek"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Internal%20Family%20Systems%20Therapy%20Workbook%20Susan%20McConnell%20Susan%20McConnell"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Internal%20Family%20Systems%20Therapy%20Workbook%20Susan%20McConnell%20Susan%20McConnell"
      }
    ],
    cover: "img/covers/ifs-workbook.jpg"
  },
  "narm-practical-guide": {
    titel: "The Practical Guide for Healing Developmental Trauma",
    auteur: "Laurence Heller & Brad J. Kammer",
    jaar: 2022,
    kleur: "#5f7259",
    icoon: "📘",
    kern: "Toegankelijke NARM-gids met oefeningen voor ontwikkelingstrauma en jezelf kalmeren.",
    bullets: [
      "Vijf overlevingsstijlen van NARM uitgelegd met praktische voorbeelden.",
      "Werken in het hier-en-nu, niet eindeloos in het verleden graven.",
      "Geschikt als aanvulling op therapie."
    ],
    categorieen: [
      "cptss",
      "werkboek",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Practical%20Guide%20Healing%20Developmental%20Trauma%20Heller%20Laurence%20Heller"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Practical%20Guide%20Healing%20Developmental%20Trauma%20Heller%20Laurence%20Heller"
      }
    ],
    cover: "img/covers/narm-practical-guide.jpg"
  },
  "tender-parts": {
    titel: "The Tender Parts",
    auteur: "Ilyse Kennedy",
    jaar: 2022,
    kleur: "#7c6f8f",
    icoon: "🌸",
    kern: "Zachte introductie tot delenwerk en innerlijk kind-werk voor wie met complex trauma leeft.",
    bullets: [
      "Toegankelijke taal voor wie overweldigd is door vakjargon.",
      "Focus op troost en veiligheid voor kwetsbare delen.",
      "Oefeningen voor thuis, met nadruk op zachtheid."
    ],
    categorieen: [
      "delen",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=The%20Tender%20Parts%20Ilyse%20Kennedy%20Ilyse%20Kennedy"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=The%20Tender%20Parts%20Ilyse%20Kennedy%20Ilyse%20Kennedy"
      }
    ],
    cover: "img/covers/tender-parts.jpg"
  },
  "cptsd-coping-workbook": {
    titel: "The Complex PTSD Coping Skills Workbook",
    auteur: "Tamara McClintock Greenberg",
    jaar: 2022,
    kleur: "#516b78",
    icoon: "🧰",
    kern: "Concrete vaardigheden om met klachten om te gaan in het dagelijks leven met complex trauma.",
    bullets: [
      "Vaardigheden om je emoties te kalmeren en om te gaan met triggers en relaties.",
      "Geschikt als eerste stap of aanvulling op therapie.",
      "Korte, haalbare oefeningen."
    ],
    categorieen: [
      "cptss",
      "werkboek",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Complex%20PTSD%20Coping%20Skills%20Workbook%20Greenberg%20Tamara%20Greenberg"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Complex%20PTSD%20Coping%20Skills%20Workbook%20Greenberg%20Tamara%20Greenberg"
      }
    ],
    cover: "img/covers/cptsd-coping-workbook.jpg"
  },
  "dbt-cptsd-workbook": {
    titel: "The DBT Skills Workbook for CPTSD",
    auteur: "Sheri van Dijk",
    jaar: 2024,
    kleur: "#516b78",
    icoon: "📗",
    kern: "DBT-vaardigheden speciaal afgestemd op complex trauma: jezelf kalmeren zonder jezelf te verliezen.",
    bullets: [
      "Aandacht (mindfulness), een crisis doorkomen en je emoties kalmeren bij CPTSS.",
      "Eerst stevig worden vóór diepere verwerking.",
      "Praktisch en stap voor stap."
    ],
    categorieen: [
      "cptss",
      "werkboek",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=DBT%20Skills%20Workbook%20for%20CPTSD%20Sheri%20van%20Dijk%20Sheri%20van%20Dijk"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=DBT%20Skills%20Workbook%20for%20CPTSD%20Sheri%20van%20Dijk%20Sheri%20van%20Dijk"
      }
    ],
    cover: "img/covers/dbt-cptsd-workbook.jpg"
  },
  ptsdreams: {
    titel: "PTSDreams",
    auteur: "Linda Yael Schiller",
    jaar: 2022,
    kleur: "#46566e",
    icoon: "🌙",
    kern: "Dromen en nachtmerries bij trauma begrijpen en transformeren — inclusief imagery rehearsal.",
    bullets: [
      "Nachtmerries zijn vaak het brein dat nog probeert te verwerken.",
      "Imagery rehearsal: overdag een nieuw, veiliger einde aan de droom geven.",
      "Dromenwerk kan onderdeel zijn van traumatherapie."
    ],
    categorieen: [
      "slaap",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=PTSDreams%20Linda%20Yael%20Schiller%20nightmares%20Linda%20Schiller"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=PTSDreams%20Linda%20Yael%20Schiller%20nightmares%20Linda%20Schiller"
      }
    ],
    cover: "img/covers/ptsdreams.jpg"
  },
  "stoning-demons-1": {
    titel: "Stoning Demons: Childhood Trauma as a Primer for CPTSD",
    auteur: "Kimberly Callis",
    jaar: 2014,
    kleur: "#516b78",
    icoon: "📖",
    kern: "Een heldere introductie tot complex trauma voor wie net ontdekt dat vroege ervaringen diep doorwerken.",
    bullets: [
      "Legt CPTSS uit in begrijpelijke taal.",
      "Verbindt symptomen met hun oorsprong zonder te diagnosticeren.",
      "Goed startpunt vóór diepere boeken of therapie."
    ],
    categorieen: [
      "cptss"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Stoning%20Demons%20Childhood%20Trauma%20CPTSD%20Kimberly%20Callis%20Kimberly%20Callis"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Stoning%20Demons%20Childhood%20Trauma%20CPTSD%20Kimberly%20Callis%20Kimberly%20Callis"
      }
    ],
    cover: "img/covers/stoning-demons-1.jpg"
  },
  "stoning-demons-2": {
    titel: "Stoning Demons: Symptoms and Progression of CPTSD",
    auteur: "Kimberly Callis",
    jaar: 2014,
    kleur: "#516b78",
    icoon: "📖",
    kern: "Hoe CPTSS zich kan manifesteren en verlopen — symptomen begrijpen zonder jezelf te labelen.",
    bullets: [
      "Overzicht van veelvoorkomende klachten en patronen bij complex trauma.",
      "Helpt om te begrijpen waarom bepaalde reacties 'logisch' zijn gezien je verleden.",
      "Geen vervanging voor professionele beoordeling."
    ],
    categorieen: [
      "cptss"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Stoning%20Demons%20Symptoms%20CPTSD%20Kimberly%20Callis%20Kimberly%20Callis"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Stoning%20Demons%20Symptoms%20CPTSD%20Kimberly%20Callis%20Kimberly%20Callis"
      }
    ],
    cover: "img/covers/stoning-demons-2.jpg"
  },
  "neurofeedback-developmental": {
    titel: "Neurofeedback in the Treatment of Developmental Trauma",
    auteur: "Sebern F. Fisher",
    jaar: 2014,
    kleur: "#4a6b8a",
    icoon: "📡",
    kern: "Hoe neurofeedback het zenuwstelsel kan helpen kalmeren bij vroeg en complex trauma.",
    bullets: [
      "Neurofeedback traint het brein om flexibeler te reageren op stress.",
      "Vooral nuttig bij hardnekkige moeite om tot rust te komen en afhaken (dissociatie).",
      "Vraag een ervaren behandelaar; het is geen doe-het-zelf methode."
    ],
    categorieen: [
      "neuro",
      "lichaam"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Neurofeedback%20Developmental%20Trauma%20Sebern%20Fisher%20Sebern%20Fisher"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Neurofeedback%20Developmental%20Trauma%20Sebern%20Fisher%20Sebern%20Fisher"
      }
    ],
    cover: "img/covers/neurofeedback-developmental.jpg"
  },
  "hold-me-tight": {
    titel: "Hold Me Tight",
    auteur: "Sue Johnson",
    jaar: 2008,
    kleur: "#5f7259",
    icoon: "💞",
    kern: "Emotionally Focused Therapy voor koppels: veilige verbinding herstellen na afstand en conflict.",
    bullets: [
      "Conflict in relaties gaat vaak over verlatingsangst en niet-gehaalde hechtingsbehoeften.",
      "Veilige emotionele verbinding is het doel, niet 'gelijk hebben'.",
      "Ook nuttig om te begrijpen waarom relaties zo pijnlijk kunnen aanvoelen."
    ],
    categorieen: [
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Hold%20Me%20Tight%20Sue%20Johnson%20EFT%20Sue%20Johnson"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Hold%20Me%20Tight%20Sue%20Johnson%20EFT%20Sue%20Johnson"
      }
    ],
    cover: "img/covers/hold-me-tight.jpg"
  },
  "journey-abandonment": {
    titel: "The Journey from Abandonment to Healing",
    auteur: "Susan Anderson",
    jaar: 1994,
    kleur: "#4a6b8a",
    icoon: "🚶",
    kern: "Verlatingswond en verlatingsangst begrijpen — en de vijf fasen van herstel na verlies of afwijzing.",
    bullets: [
      "Verlatingsangst kan voortkomen uit vroege of latere afwijzing.",
      "De 'outer child' reageert impulsief; de 'inner child' draagt de pijn.",
      "Concrete stappen helpen om weer te vertrouwen en te helen."
    ],
    categorieen: [
      "hechting",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Journey%20from%20Abandonment%20to%20Healing%20Susan%20Anderson%20Susan%20Anderson"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Journey%20from%20Abandonment%20to%20Healing%20Susan%20Anderson%20Susan%20Anderson"
      }
    ],
    cover: "img/covers/journey-abandonment.jpg"
  },
  "understanding-borderline-mother": {
    titel: "Understanding the Borderline Mother",
    auteur: "Christine Ann Lawson",
    jaar: 2004,
    kleur: "#8f6a9b",
    icoon: "🌪️",
    kern: "Voor volwassen kinderen: de vier types borderline-moeders begrijpen en je eigen leven losmaken.",
    bullets: [
      "Helpt om chaotisch of wisselend oudergedrag te begrijpen zonder jezelf te verliezen.",
      "Educatief — geen excuus voor schade, wel context voor herstel.",
      "Grenzen en eigen identiteit staan centraal."
    ],
    categorieen: [
      "familie",
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Understanding%20the%20Borderline%20Mother%20Christine%20Lawson%20Christine%20Lawson"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Understanding%20the%20Borderline%20Mother%20Christine%20Lawson%20Christine%20Lawson"
      }
    ],
    cover: "img/covers/understanding-borderline-mother.jpg"
  },
  "hate-you-dont-leave": {
    titel: "I Hate You — Don't Leave Me",
    auteur: "Jerold J. Kreisman & Hal Straus",
    jaar: 2010,
    kleur: "#8f6a9b",
    icoon: "🌊",
    kern: "Begrijpelijke uitleg over het borderline-patroon — voor naasten en voor wie zichzelf herkent.",
    bullets: [
      "Intense emoties en verlatingsangst worden begrijpelijk gemaakt.",
      "Helpt om gedrag niet persoonlijk op te vatten.",
      "Geen diagnoseboek — wel oriëntatie voor gesprekken met hulpverleners."
    ],
    categorieen: [
      "familie",
      "hechting",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=I%20Hate%20You%20Don't%20Leave%20Me%20borderline%20Kreisman%20Jerold%20Kreisman"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=I%20Hate%20You%20Don't%20Leave%20Me%20borderline%20Kreisman%20Jerold%20Kreisman"
      }
    ],
    cover: "img/covers/hate-you-dont-leave.jpg"
  },
  "surviving-compassion-fatigue": {
    titel: "Surviving Compassion Fatigue",
    auteur: "Beverly Diane Kyer",
    jaar: 2016,
    kleur: "#5a7d86",
    icoon: "🫶",
    kern: "Voor hulpverleners en naasten: secundaire traumatisering herkennen en je eigen grenzen bewaken.",
    bullets: [
      "Wie anderen helpt, kan zelf overspoeld raken door hun verhalen.",
      "Zelfzorg is geen luxe maar beroeps- en relationele hygiëne.",
      "Grenzen en supervisie beschermen je draagkracht."
    ],
    categorieen: [
      "herstel",
      "familie"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Surviving%20Compassion%20Fatigue%20Beverly%20Kyer%20Beverly%20Kyer"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Surviving%20Compassion%20Fatigue%20Beverly%20Kyer%20Beverly%20Kyer"
      }
    ],
    cover: "img/covers/surviving-compassion-fatigue.jpg"
  },
  "get-me-out-of-here": {
    titel: "Get Me Out of Here",
    auteur: "Rachel Reiland",
    jaar: 2004,
    kleur: "#8f6a9b",
    icoon: "📕",
    kern: "Een openhartig memoir over herstel van borderline-patroon — menselijk en herkenbaar, geen handboek.",
    bullets: [
      "Persoonlijk verhaal maakt abstracte diagnoses tastbaar.",
      "Herstel is mogelijk maar vraagt tijd, therapie en steun.",
      "Geen vervanging voor professionele hulp, wel hoop en herkenning."
    ],
    categorieen: [
      "herstel",
      "hechting"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Get%20Me%20Out%20of%20Here%20Rachel%20Reiland%20borderline%20Rachel%20Reiland"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Get%20Me%20Out%20of%20Here%20Rachel%20Reiland%20borderline%20Rachel%20Reiland"
      }
    ],
    cover: "img/covers/get-me-out-of-here.jpg"
  },
  "when-body-speaks": {
    titel: "When the Body Speaks",
    auteur: "Liz Tenuto",
    jaar: 2026,
    kleur: "#3f7d72",
    icoon: "🗣️",
    kern: "Leren luisteren naar lichaamssignalen als weg naar begrip en rust na stress en trauma.",
    bullets: [
      "Het lichaam 'spreekt' via spanning, vermoeidheid en sensaties — niet via woorden.",
      "Aandacht voor signalen helpt triggers vroeg te herkennen.",
      "Kleine dagelijkse check-ins bouwen lichaamsbewustzijn op."
    ],
    categorieen: [
      "lichaam",
      "herstel"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=When%20the%20Body%20Speaks%20Liz%20Tenuto%20Liz%20Tenuto"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=When%20the%20Body%20Speaks%20Liz%20Tenuto%20Liz%20Tenuto"
      }
    ],
    cover: "img/covers/when-body-speaks.jpg"
  },
  "neurodivergent-somatics": {
    titel: "Neurodivergent Somatics in Therapy",
    auteur: "Nyck Walsh",
    jaar: 2026,
    kleur: "#516b78",
    icoon: "🧩",
    kern: "Lichaamsgericht werk afgestemd op neurodivergente zenuwstelsels — minder standaard, meer maatwerk.",
    bullets: [
      "Autisme en ADHD veranderen hoe prikkels binnenkomen en hoe je kalmeert.",
      "Een lichaamsgerichte aanpak moet rekening houden met gevoeligheid voor prikkels.",
      "Wat voor de één werkt, kan voor de ander overspoelen — tempo en aanpassing tellen."
    ],
    categorieen: [
      "lichaam",
      "neuro"
    ],
    mustRead: false,
    koopLinks: [
      {
        label: "Bol.com",
        url: "https://www.bol.com/be/nl/s/?searchtext=Neurodivergent%20Somatics%20in%20Therapy%20Nyck%20Walsh%20Nyck%20Walsh"
      },
      {
        label: "Standaard Boekhandel",
        url: "https://www.standaardboekhandel.be/zoeken?text=Neurodivergent%20Somatics%20in%20Therapy%20Nyck%20Walsh%20Nyck%20Walsh"
      }
    ],
    cover: "img/covers/neurodivergent-somatics.jpg"
  }
};

const THEMAS = [
  {
    id: "wat-is-trauma",
    naam: "Trauma begrijpen",
    icoon: "🌑",
    accent: "#5b6a7d",
    uitleg: "Wat trauma met je doet — in lichaam, brein en relaties."
  },
  {
    id: "cptss",
    naam: "Complex trauma",
    icoon: "🕸️",
    accent: "#516b78",
    uitleg: "Herhaald, vroeg of langdurig trauma en zijn diepe sporen."
  },
  {
    id: "lichaam",
    naam: "Lichaam & zenuwstelsel",
    icoon: "🫁",
    accent: "#3f7d72",
    uitleg: "Vechten, vluchten, bevriezen — en hoe het lijf weer kalmeert."
  },
  {
    id: "emoties",
    naam: "Emoties & flashbacks",
    icoon: "🌊",
    accent: "#4a6b8a",
    uitleg: "Overspoeling, triggers, emotionele flashbacks en angst."
  },
  {
    id: "hechting",
    naam: "Hechting & relaties",
    icoon: "🪢",
    accent: "#5f7259",
    uitleg: "Hoe vroege banden je vertrouwen en nabijheid kleuren."
  },
  {
    id: "innerlijk",
    naam: "Innerlijke criticus & delen",
    icoon: "🪞",
    accent: "#7c6f8f",
    uitleg: "De harde stem binnenin en de delen die je beschermen."
  },
  {
    id: "herstel",
    naam: "Herstel & veerkracht",
    icoon: "🌱",
    accent: "#6a8f5e",
    uitleg: "Wat heling werkelijk is: traag, met vallen en opstaan, mogelijk."
  },
  {
    id: "grenzen",
    naam: "Grenzen & pleasen",
    icoon: "🧭",
    accent: "#9a7b4f",
    uitleg: "Nee leren zeggen na een leven van aanpassen."
  },
  {
    id: "slaap",
    naam: "Slaap & nachtmerries",
    icoon: "🌙",
    accent: "#46566e",
    uitleg: "Altijd op scherp staan, nachtmerries en rust opnieuw leren."
  },
  {
    id: "naasten",
    naam: "Voor naasten",
    icoon: "🤝",
    accent: "#5a7d86",
    uitleg: "Iemand met trauma steunen zonder jezelf te verliezen."
  },
  {
    id: "familie",
    naam: "Familie & jeugd",
    icoon: "🏠",
    accent: "#8f6a9b",
    uitleg: "Ouders, verwaarlozing, narcisme en patronen uit je gezin van herkomst."
  }
];

const LEEFTIJDEN = [
  {
    id: "zelf",
    naam: "Voor jezelf"
  },
  {
    id: "naaste",
    naam: "Voor een naaste"
  },
  {
    id: "recent",
    naam: "Recent trauma"
  },
  {
    id: "vroeg",
    naam: "Vroeg / complex"
  }
];

