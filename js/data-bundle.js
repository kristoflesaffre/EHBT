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


// ============================================================
// EHBT — Vragen, deel 1
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_1 = [
  {
    id: "wat-is-trauma-erg-genoeg",
    beeld: {
      src: "img/vragen/wat-is-trauma-erg-genoeg.jpg"
    },
    vraag: "Wat is trauma eigenlijk — en is mijn trauma wel 'erg genoeg'?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "wat is trauma",
      "erg genoeg",
      "vergelijken",
      "klein trauma",
      "definitie",
      "ptss"
    ],
    kort: "Trauma gaat niet over hoe 'erg' de gebeurtenis was volgens anderen, maar over wat er in jou achterbleef. Als iets je overweldigde en sporen naliet, telt het — vergelijken met anderen helpt je niet verder.",
    blokken: [
      {
        tekst: "Veel mensen twijfelen of ze 'recht' hebben op het woord trauma. Ze denken aan oorlog of geweld en concluderen dat hun eigen pijn niet meetelt. Maar trauma is geen ranglijst van gebeurtenissen — het is wat er gebeurt in een zenuwstelsel dat overweldigd raakte en geen uitweg vond."
      },
      {
        kop: "Niet de gebeurtenis, maar het spoor",
        tekst: "Twee mensen kunnen hetzelfde meemaken en er heel verschillend uitkomen. Wat telt is of je het kon verwerken, of je steun had, en of je je veilig genoeg voelde om te herstellen. Trauma ontstaat juist waar die verwerking vastliep. Daarom kan ook iets wat 'klein' lijkt diepe sporen nalaten — en kan langdurige emotionele kou even beschadigend zijn als één heftige gebeurtenis."
      },
      {
        kop: "Vergelijken is een valkuil",
        tekst: "“Anderen hebben het erger gehad” klinkt nederig, maar het houdt je vooral klein en weg van hulp. Je pijn hoeft geen wedstrijd te winnen om aandacht te verdienen. Als iets je dagelijks leven, je slaap, je relaties of je gevoel van veiligheid blijft beïnvloeden, is dat reden genoeg om er serieus naar te kijken."
      }
    ],
    doeDit: [
      "Neem je eigen reacties serieus, ook als je niet kunt 'bewijzen' dat het erg genoeg was.",
      "Let op de sporen: slaap, schrikachtigheid, vermijding, terugkerende gedachten of gevoelens.",
      "Praat met een huisarts of psycholoog als klachten blijven — je hebt geen 'groot' verhaal nodig om hulp te zoeken."
    ],
    vermijd: [
      "Je pijn afmeten aan die van anderen.",
      "Wachten tot het 'vanzelf' overgaat terwijl het je leven blijft beperken.",
      "Jezelf veroordelen omdat je 'er nog steeds last van hebt'."
    ],
    zegDit: "“Wat ik voel is echt, ook al begrijp ik nog niet helemaal waarom.”,“Mijn pijn hoeft niet de ergste te zijn om er hulp voor te zoeken.”",
    bronnen: [
      "[object Object]",
      "[object Object]"
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "trauma-vs-complex",
      "hoe-lang-duurt-herstel"
    ]
  },
  {
    id: "lichaam-reageert-zonder-gevaar",
    beeld: {
      src: "img/vragen/lichaam-reageert-zonder-gevaar.jpg"
    },
    vraag: "Mijn lichaam reageert terwijl er geen gevaar is. Word ik gek?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "hartkloppingen",
      "paniek",
      "hyperalert",
      "trigger",
      "zenuwstelsel",
      "lichaam"
    ],
    kort: "Nee. Je zenuwstelsel doet precies waarvoor het ooit leerde te zorgen: je beschermen. Het reageert op een echo van vroeger gevaar, niet op het heden. Dat is geen gekte, maar een overactief alarm.",
    blokken: [
      {
        tekst: "Bonkend hart, kortademigheid, een brok in je keel, plotseling zweten — terwijl er objectief niets aan de hand is. Het voelt verwarrend en soms beangstigend. Maar je lichaam is niet kapot; het is overdreven goed in beschermen."
      },
      {
        kop: "Een alarm dat te gevoelig staat",
        tekst: "Na trauma stelt het brein zijn gevaarsdetectie scherper af. Een geur, een toon in iemands stem, een bepaalde blik — en het alarm gaat af alsof het gevaar nu echt is. Dit gebeurt sneller dan je denkende brein kan bijbenen, daarom voelt het 'onlogisch'. Het is geen aanstellerij en geen zwakte: het is biologie."
      },
      {
        kop: "Je kunt het alarm leren herijken",
        tekst: "Het goede nieuws is dat het zenuwstelsel kneedbaar blijft. Door tijdens zo'n reactie je lichaam te helpen ontdekken dat het nú veilig is — met ademhaling, beweging, grounding of de aanwezigheid van een veilig iemand — leert het systeem stukje bij beetje opnieuw onderscheid maken tussen toen en nu."
      }
    ],
    doeDit: [
      "Benoem wat er gebeurt: 'dit is mijn alarm, niet echt gevaar nu'.",
      "Verleng je uitademing en zet je voeten stevig op de grond om te aarden.",
      "Laat een arts lichamelijke oorzaken uitsluiten als je twijfelt, en bespreek aanhoudende klachten met een hulpverlener."
    ],
    vermijd: [
      "Jezelf 'gek' of 'aansteller' noemen — dat verergert de stress.",
      "Alles vermijden wat het alarm triggert; vermijding maakt de cirkel kleiner.",
      "Vechten tegen de sensatie; meebewegen en geruststellen werkt beter."
    ],
    zegDit: [
      "“Mijn lichaam beschermt me. Er is nu geen gevaar.”",
      "“Dit gaat voorbij. Ik adem rustig uit en voel de grond.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over hoe het autonome zenuwstelsel schakelt tussen veiligheid en alarm — en hoe je het herkent."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over trauma als vastgelopen overlevingsenergie in het lichaam."
      }
    ],
    gerelateerd: [
      "wat-is-trauma-erg-genoeg",
      "window-of-tolerance",
      "flashback-wat-doe-ik"
    ]
  },
  {
    id: "flashback-wat-doe-ik",
    beeld: {
      src: "img/vragen/flashback-wat-doe-ik.jpg"
    },
    vraag: "Wat is een flashback en wat doe ik op dat moment?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "flashback",
      "emotionele flashback",
      "trigger",
      "overspoeling",
      "grounding"
    ],
    kort: "Een flashback is geen herinnering die je rustig terugziet, maar het heden dat even wordt overgenomen door het verleden. Grounding — terug in het hier en nu komen — is je belangrijkste gereedschap.",
    blokken: [
      {
        tekst: "Bij een flashback voelt het alsof het gevaar nú gebeurt. Soms zie je beelden, maar vaak — zeker bij complex trauma — is er geen film, alleen een golf van angst, schaamte of kleinheid die uit het niets lijkt te komen. Pete Walker noemde dat laatste een 'emotionele flashback'."
      },
      {
        kop: "Waarom het zo overweldigt",
        tekst: "Tijdens een flashback neemt het overlevingsbrein het over en gaat het denkende deel offline. Daarom werkt 'gewoon nadenken dat het voorbij is' op dat moment niet goed. Je hebt iets nodig dat je lichaam vertelt: het is nu veilig. Dat is precies wat grounding doet."
      },
      {
        kop: "Terug naar het nu",
        tekst: "Grounding-technieken halen je aandacht terug naar je zintuigen en je omgeving: voel vijf dingen, hoor vier geluiden, zet je voeten op de grond, drink iets kouds. Herinner jezelf eraan dat het gevoel echt is, maar dat het uit het verleden komt. Na verloop van tijd herken je je triggers sneller en wordt de golf korter."
      }
    ],
    doeDit: [
      "Zeg tegen jezelf: 'ik heb een flashback — het voelt nu, maar het is van toen'.",
      "Gebruik grounding via je zintuigen (5-4-3-2-1) en je adem.",
      "Zoek fysieke veiligheid: een rustige plek, een veilig persoon, iets vertrouwds."
    ],
    vermijd: [
      "Jezelf verwijten dat je 'overdrijft'.",
      "Belangrijke beslissingen nemen midden in de golf.",
      "Alcohol of middelen om het gevoel weg te drukken."
    ],
    zegDit: [
      "“Dit is een flashback. Ik ben nu veilig, het is voorbij.”",
      "“Mijn voeten staan op de grond. Ik ben hier, in dit moment.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks en hoe je ze herkent en doorstaat."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe traumatische herinneringen het heden kunnen overnemen."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "dissociatie-naast-mezelf",
      "window-of-tolerance"
    ]
  },
  {
    id: "dissociatie-naast-mezelf",
    beeld: {
      src: "img/vragen/dissociatie-naast-mezelf.jpg"
    },
    vraag: "Ik voel soms niets meer of sta 'naast mezelf'. Wat is dat?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "dissociatie",
      "verdoofd",
      "leegte",
      "afwezig",
      "shutdown",
      "depersonalisatie"
    ],
    kort: "Dat heet dissociatie: een noodrem van het zenuwstelsel als iets te veel wordt. Het beschermde je ooit. Vandaag kun je leren het op te merken en jezelf zachtjes terug te halen.",
    blokken: [
      {
        tekst: "Je staart voor je uit, voelt je leeg of ver weg, alsof je naar je eigen leven kijkt door matglas. Tijd valt soms weg. Dissociatie is geen aanstellerij of 'zweverigheid' — het is een diepe overlevingsreactie."
      },
      {
        kop: "De noodrem van het lichaam",
        tekst: "Als vechten of vluchten niet kan, schakelt het zenuwstelsel naar een soort dichtklappen (shutdown): gevoel, pijn en aanwezigheid worden gedempt. Voor een kind dat niet kon ontsnappen, was dat een geniale bescherming. Maar als de noodrem ook nu nog aanslaat bij stress, kan hij je afsnijden van jezelf en van anderen."
      },
      {
        kop: "Zachtjes terugkomen",
        tekst: "Forceren werkt niet; uitnodigen wel. Beweging, koude of warme sensaties, geur, geluid en het noemen van wat je ziet helpen het lichaam om weer 'aan' te gaan. Wees mild: dissociatie is een teken dat er ooit te veel was, niet dat je faalt."
      }
    ],
    doeDit: [
      "Merk het vroeg op: leegte, mistigheid, 'ver weg' zijn zijn signalen.",
      "Activeer je zintuigen: iets kouds vasthouden, een sterke geur, je voeten bewegen.",
      "Bespreek terugkerende dissociatie met een traumagerichte hulpverlener."
    ],
    vermijd: [
      "Jezelf hard toespreken om 'erbij' te blijven.",
      "Autorijden of risicovolle taken tot je weer geaard bent.",
      "Denken dat het betekent dat er iets onherstelbaar mis is met je."
    ],
    zegDit: [
      "“Ik merk dat ik wegglijd. Ik ben veilig, ik kom terug.”",
      "“Ik voel mijn voeten, ik hoor de geluiden om me heen.”"
    ],
    bronnen: [
      {
        boek: "healing-fragmented-selves",
        detail: "Over dissociatie en het werken met afgesplitste delen van jezelf."
      },
      {
        boek: "anchored",
        detail: "Over de toestand waarin je dichtklapt (shutdown) en hoe je er weer uitkomt."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "window-of-tolerance",
      "innerlijke-criticus"
    ]
  },
  {
    id: "weinig-jeugdherinneringen",
    beeld: {
      src: "img/vragen/weinig-jeugdherinneringen.jpg"
    },
    vraag: "Ik herinner me weinig van mijn jeugd. Betekent dat iets?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "geheugen",
      "jeugd",
      "vergeten",
      "complex trauma",
      "amnesie",
      "herinneringen"
    ],
    kort: "Gaten in je jeugdgeheugen kunnen, maar hoeven niet, met trauma te maken hebben. Belangrijker dan het terughalen van herinneringen is hoe je je nú voelt — daar kun je mee werken.",
    blokken: [
      {
        tekst: "Veel mensen met een moeilijke jeugd hebben grote lege plekken in hun geheugen. Dat is begrijpelijk: een brein dat lang onder zware stress staat, slaat herinneringen anders op — in meer losse stukjes — en soms beschermt het je door ervaringen op afstand te houden."
      },
      {
        kop: "Herinneren is niet het doel",
        tekst: "Het is een misverstand dat je eerst alles moet terughalen om te helen. Soms komen herinneringen later vanzelf, soms niet — en jagen op herinneringen kan je zelfs uit balans brengen. Wat telt is je huidige beleving: je lichaamsreacties, je patronen in relaties, je gevoel van veiligheid. Daar grijpt herstel op aan, ook zonder compleet verhaal."
      },
      {
        kop: "Wees voorzichtig met 'bewijs'",
        tekst: "Het geheugen is geen camera. Onder druk kunnen herinneringen vervormen. Een goede traumatherapeut jaagt daarom niet op verdrongen beelden, maar helpt je rust en stevigheid op te bouwen en jezelf te leren kalmeren — van daaruit ontstaat ruimte voor wat er echt speelt."
      }
    ],
    doeDit: [
      "Richt je op je huidige klachten en patronen, niet op het 'compleet maken' van het verleden.",
      "Werk met een traumagerichte therapeut als je dieper wilt kijken.",
      "Geef jezelf toestemming om niet alles te hoeven weten."
    ],
    vermijd: [
      "Krampachtig herinneringen proberen op te graven.",
      "Conclusies hard maken op basis van vage, losse flarden.",
      "Denken dat 'geen herinnering' betekent 'het stelde niets voor'."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe stress de manier verandert waarop herinneringen worden opgeslagen."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd werken: eerst stabiliteit, dan pas verwerking."
      }
    ],
    gerelateerd: [
      "trauma-vs-complex",
      "therapie-erger-maken",
      "hoe-lang-duurt-herstel"
    ]
  },
  {
    id: "steeds-onveilige-relaties",
    beeld: {
      src: "img/vragen/steeds-onveilige-relaties.jpg"
    },
    vraag: "Waarom kies ik steeds dezelfde onveilige relaties?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "relaties",
      "patronen",
      "hechting",
      "aantrekking",
      "onveilig",
      "herhaling"
    ],
    kort: "Wat vertrouwd voelt en wat gezond is, zijn niet altijd hetzelfde. Je zenuwstelsel herkent oude patronen als 'thuis', ook als ze pijn doen. Dat patroon is te begrijpen — en te veranderen.",
    blokken: [
      {
        tekst: "Je valt steeds op mensen die afstandelijk, onvoorspelbaar of afwijzend zijn, en het 'klikt' juist daar het sterkst. Dat is geen karakterfout of domme keuze. Je systeem zoekt het bekende, en als liefde vroeger samenging met onzekerheid, voelt onzekerheid later als liefde."
      },
      {
        kop: "De blauwdruk van vroeger",
        tekst: "In je eerste relaties leerde je wat nabijheid betekent: of het veilig was om dichtbij te komen, of je je gevoelens mocht tonen, of er iemand kwam als je riep. Die ervaringen vormden een innerlijke blauwdruk. Een veilig iemand kan daardoor zelfs saai of 'zonder vonk' voelen, terwijl iemand die je angst aanwakkert juist intens spannend lijkt."
      },
      {
        kop: "Patronen kun je herzien",
        tekst: "Bewustwording is de eerste stap: leren herkennen wat je naar bepaalde mensen toetrekt, en het verschil voelen tussen spanning en veiligheid. Met tijd, en vaak met hulp, kun je 'verdiende veiligheid' opbouwen — nieuwe ervaringen die je systeem leren dat rustige liefde óók echt is."
      }
    ],
    doeDit: [
      "Leer je eigen hechtingsstijl en triggers herkennen.",
      "Let op het verschil tussen 'spannend' en 'veilig' — vraag jezelf welke je zoekt.",
      "Oefen kleine, veilige verbindingen op; veiligheid is te leren."
    ],
    vermijd: [
      "Jezelf veroordelen als 'kapot' of 'hopeloos in de liefde'.",
      "Intensiteit verwarren met intimiteit.",
      "Verwachten dat inzicht alleen meteen je gevoel verandert — het lijf heeft oefening nodig."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "attached",
        detail: "Over hoe hechtingsstijlen je keuzes en dynamiek in relaties sturen."
      },
      {
        boek: "running-on-empty",
        detail: "Over hoe vroege emotionele gemis doorwerkt in latere relaties."
      }
    ],
    gerelateerd: [
      "wat-is-trauma-erg-genoeg",
      "kan-ik-geen-nee-zeggen",
      "trauma-vs-complex"
    ]
  },
  {
    id: "innerlijke-criticus",
    beeld: {
      src: "img/vragen/innerlijke-criticus.jpg"
    },
    vraag: "Hoe ga ik om met die harde, kritische stem in mijn hoofd?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "innerlijke criticus",
      "zelfhaat",
      "schaamte",
      "perfectionisme",
      "zelfcompassie",
      "delen"
    ],
    kort: "Die stem is vaak een oude beschermer die dacht je veilig te houden door je klein te houden. Je hoeft hem niet te bevechten — je kunt leren ermee in gesprek te gaan en zachter te worden.",
    blokken: [
      {
        tekst: "“Je bent niks waard.” “Doe niet zo aanstellerig.” “Zie je wel, je faalt weer.” Voor veel mensen met trauma is de wreedste stem hun eigen. Die innerlijke criticus voelt als de waarheid, maar het is een aangeleerde stem — vaak een echo van vroeger."
      },
      {
        kop: "Een beschermer met goede bedoelingen",
        tekst: "In de visie van delenwerk (IFS) is de criticus geen vijand maar een deel dat ooit een taak op zich nam: je aanpassen, presteren of klein blijven, zodat je niet werd afgewezen of gestraft. Hard tegen jezelf zijn voelde veiliger dan kwetsbaar zijn. De stem overdrijft, maar hij komt voort uit angst, niet uit waarheid."
      },
      {
        kop: "Van bevechten naar verstaan",
        tekst: "Je de criticus toeschreeuwen versterkt het conflict meestal. Effectiever is nieuwsgierigheid: waar is dit deel bang voor? Wat probeert het te voorkomen? Door met mildheid te luisteren, verliest de stem zijn macht en ontstaat ruimte voor zelfcompassie — niet als zwakte, maar als de tegenkracht die trauma juist nodig heeft."
      }
    ],
    doeDit: [
      "Geef de stem een naam of vorm, zodat je er afstand van krijgt: 'dat is mijn criticus'.",
      "Vraag je nieuwsgierig af waar dit deel bang voor is.",
      "Oefen één vriendelijke zin tegen jezelf, ook als je het nog niet gelooft."
    ],
    vermijd: [
      "De stem geloven als objectieve waarheid.",
      "Jezelf straffen omdat je 'zo negatief' bent — dat is meer kritiek.",
      "Verwachten dat de stem meteen verdwijnt; mildheid groeit traag."
    ],
    zegDit: [
      "“Dank je dat je me wilde beschermen. Ik ben nu veilig genoeg.”",
      "“Ik praat tegen mezelf zoals tegen iemand van wie ik houd.”"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "Over de innerlijke criticus als beschermend deel, en het leiden vanuit het Zelf."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over het temmen van de innerlijke criticus bij complex trauma."
      }
    ],
    gerelateerd: [
      "dissociatie-naast-mezelf",
      "kan-ik-geen-nee-zeggen",
      "hoe-lang-duurt-herstel"
    ]
  },
  {
    id: "hoe-lang-duurt-herstel",
    beeld: {
      src: "img/vragen/hoe-lang-duurt-herstel.jpg"
    },
    vraag: "Hoe lang duurt herstel van trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "herstel",
      "duur",
      "geduld",
      "terugval",
      "niet-lineair",
      "heling"
    ],
    kort: "Er is geen vaste tijdlijn, en herstel verloopt zelden in een rechte lijn. Het doel is niet 'genezen alsof er niets gebeurde', maar je leven terugkrijgen — met meer keuze, rust en verbinding.",
    blokken: [
      {
        tekst: "Het eerlijke antwoord: het hangt af van wat er gebeurde, hoe lang, hoe vroeg, en van de steun die je nu hebt. Eénmalig trauma op volwassen leeftijd verloopt vaak anders dan trauma dat vroeg en herhaald was. Maar voor bijna iedereen geldt: vooruitgang is mogelijk."
      },
      {
        kop: "Met golven, niet in een rechte lijn",
        tekst: "Herstel gaat met pieken en dalen. Een goede periode kan gevolgd worden door een terugval, vaak rond verjaardagen van gebeurtenissen, stress of nieuwe nabijheid. Dat is geen mislukking maar onderdeel van het proces. Veel mensen merken dat de dalen na verloop van tijd minder diep worden en dat ze er sneller uitkomen."
      },
      {
        kop: "Het doel verschuift",
        tekst: "Heling betekent zelden dat het verleden uitgewist wordt. Het betekent dat het je minder overneemt: dat triggers minder hard aankomen, dat je sneller kalmeert, dat je relaties en keuzes weer van jou zijn. Velen vinden zelfs een vorm van groei — niet ondanks, maar dóór het verwerken. Tempo mag traag zijn; richting telt meer dan snelheid."
      }
    ],
    doeDit: [
      "Meet vooruitgang in maanden en thema's, niet in dagen.",
      "Verwacht golven en wees mild bij terugval.",
      "Bouw steun op: een goede therapeut, veilige mensen, gezonde routines."
    ],
    vermijd: [
      "Jezelf een deadline opleggen ('binnen X moet ik over zijn').",
      "Terugval lezen als bewijs dat je faalt.",
      "Alles alleen willen doen."
    ],
    zegDit: [
      "“Herstel is geen rechte lijn. Een terugval wist mijn vooruitgang niet uit.”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over herstel in stappen, met vallen en opstaan, en realistische verwachtingen."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de vele wegen naar herstel en het terugwinnen van je leven."
      }
    ],
    gerelateerd: [
      "therapie-erger-maken",
      "moet-ik-herbeleven",
      "wat-is-trauma-erg-genoeg"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 2
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// ============================================================

const VRAGEN_2 = [
  {
    id: "kan-ik-geen-nee-zeggen",
    beeld: {
      src: "img/vragen/kan-ik-geen-nee-zeggen.jpg"
    },
    vraag: "Waarom kan ik geen nee zeggen?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "nee zeggen",
      "grenzen",
      "pleasen",
      "fawn",
      "people-pleasing",
      "schuldgevoel"
    ],
    kort: "Aanpassen en pleasen was misschien ooit je veiligste optie. 'Fawn' is een echte overlevingsreactie. Grenzen leren stellen is geen egoïsme maar een vaardigheid die je opnieuw kunt opbouwen.",
    blokken: [
      {
        tekst: "Je voelt de 'nee' wel, maar er komt 'ja' uit. Achteraf baal je, of je voelt je schuldig zodra je toch een grens stelt. Dit is een herkenbaar patroon bij wie vroeg leerde dat de behoeften van anderen vóórgingen."
      },
      {
        kop: "Pleasen als overleving",
        tekst: "Naast vechten, vluchten en bevriezen bestaat er een vierde reactie: fawn — anderen tevredenstellen om gevaar af te wenden. Voor een kind in een onveilige of onvoorspelbare omgeving was meegaand en behulpzaam zijn vaak de slimste manier om verbonden en veilig te blijven. Dat patroon zit diep en schakelt automatisch aan, ook waar het niet meer nodig is."
      },
      {
        kop: "Grenzen zijn te leren",
        tekst: "Een grens is geen aanval; het is informatie over waar jij ophoudt en de ander begint. Begin klein, met laag-risico situaties, en verdraag het ongemak dat erna komt — dat schuldgevoel is een oude alarmbel, geen bewijs dat je iets fout doet. Hoe vaker je oefent, hoe normaler 'nee' gaat voelen."
      }
    ],
    doeDit: [
      "Oefen kleine nee's in veilige situaties en bouw op.",
      "Koop tijd: 'ik kom er bij je op terug' in plaats van meteen ja.",
      "Verwacht en verdraag het schuldgevoel — het is een oude reflex, geen waarheid."
    ],
    vermijd: [
      "Jezelf 'zwak' noemen omdat pleasen automatisch gaat.",
      "Pas grenzen stellen als je al uitgeput of woedend bent.",
      "Denken dat een grens uitleg of excuus nodig heeft."
    ],
    zegDit: [
      "“Dat past nu niet voor mij.”",
      "“Ik laat het je morgen weten.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de fawn-respons en het herstellen van gezonde grenzen."
      },
      {
        boek: "running-on-empty",
        detail: "Over leren voelen en benoemen wat je zelf nodig hebt."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "innerlijke-criticus",
      "partner-trauma-steunen"
    ]
  },
  {
    id: "slaap-nachtmerries",
    beeld: {
      src: "img/vragen/slaap-nachtmerries.jpg"
    },
    vraag: "Ik slaap slecht en heb nachtmerries. Wat kan helpen?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "slaap",
      "nachtmerries",
      "hyperalert",
      "inslapen",
      "nachtelijke paniek",
      "rust"
    ],
    kort: "Slecht slapen hoort vaak bij trauma: een waakzaam zenuwstelsel laat zich 's nachts niet zomaar uitschakelen. Met veiligheid, ritme en gerichte technieken is er veel te verbeteren.",
    blokken: [
      {
        tekst: "Niet kunnen inslapen, schrikken bij elk geluid, levendige nachtmerries, of juist niet dúrven slapen. De nacht is voor veel mensen met trauma het moeilijkste deel van de dag, omdat de waakzaamheid die overdag beschermt 's nachts geen 'uit'-knop vindt."
      },
      {
        kop: "Een waakzaam systeem",
        tekst: "Slaap vraagt overgave, en overgave vraagt veiligheid — precies wat trauma ondermijnt. Het brein blijft de omgeving scannen, en in de REM-slaap kunnen onverwerkte ervaringen terugkomen als nachtmerries. Dit is geen onwil; het is een zenuwstelsel dat nog op scherp staat."
      },
      {
        kop: "Veiligheid en ritme opbouwen",
        tekst: "Werk aan signalen van veiligheid: een vast ritueel, een opgeruimde donkere kamer, gedempt licht, en je lichaam laten weten dat het kan ontspannen. Voor terugkerende nachtmerries bestaan effectieve methodes zoals imagery rehearsal, waarbij je de droom overdag een nieuw, veiliger einde geeft. Bespreek hardnekkige problemen met een arts of traumatherapeut."
      }
    ],
    doeDit: [
      "Houd een vast slaapritme en een kalmerend avondritueel aan.",
      "Maak de slaapkamer zo veilig en voorspelbaar mogelijk.",
      "Vraag professionele hulp bij aanhoudende nachtmerries (bijv. imagery rehearsal of EMDR)."
    ],
    vermijd: [
      "Schermen en confronterend nieuws vlak voor het slapen.",
      "Alcohol als slaapmiddel — het verstoort juist je diepe slaap.",
      "In bed liggen vechten tegen de slaap; sta even op en kom tot rust."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over slaap, altijd op scherp staan, en hoe het zenuwstelsel weer leert rusten."
      },
      {
        boek: "anchored",
        detail: "Over signalen van veiligheid die het zenuwstelsel helpen kalmeren."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "window-of-tolerance",
      "flashback-wat-doe-ik"
    ]
  },
  {
    id: "partner-trauma-steunen",
    beeld: {
      src: "img/vragen/partner-trauma-steunen.jpg"
    },
    vraag: "Mijn partner heeft trauma. Hoe steun ik zonder mezelf te verliezen?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "partner",
      "naasten",
      "steunen",
      "co-regulatie",
      "grenzen",
      "zelfzorg"
    ],
    kort: "Je hoeft geen therapeut te zijn — je grootste bijdrage is veilig, voorspelbaar en aanwezig zijn. En je mag óók je eigen grenzen en wat je aankunt serieus nemen.",
    blokken: [
      {
        tekst: "Iemand liefhebben met trauma kan verwarrend zijn: terugtrekking, prikkelbaarheid of plotselinge afstand voelen soms als afwijzing, terwijl het vaak overlevingsreacties zijn. Je wilt helpen, maar weet niet altijd hoe — en raakt zelf soms uitgeput."
      },
      {
        kop: "Veiligheid is je grootste geschenk",
        tekst: "Je hoeft het trauma niet te 'repareren'. Wat het meeste helpt, is een stabiele, voorspelbare aanwezigheid: kalm blijven als je partner overspoeld raakt, niet persoonlijk nemen wat uit angst voortkomt, en samen rust opzoeken. Dit heet samen kalmeren (co-regulatie): doordat jij rustig blijft, helpt jouw zenuwstelsel dat van je partner kalmeren."
      },
      {
        kop: "Jij telt ook mee",
        tekst: "Steunen zonder grenzen leidt tot uitputting en wrok — en dan help je niemand. Het is geen egoïsme om je eigen behoeften, rust en steun serieus te nemen; het is wat je duurzaam aanwezig houdt. Moedig professionele hulp aan, maar maak jezelf niet verantwoordelijk voor het herstel van een ander."
      }
    ],
    doeDit: [
      "Blijf kalm en voorspelbaar; jouw rust werkt aanstekelijk (co-regulatie).",
      "Vraag wat helpt in plaats van het in te vullen.",
      "Bewaak je eigen grenzen en zoek ook voor jezelf steun."
    ],
    vermijd: [
      "Overlevingsreacties persoonlijk opvatten als afwijzing.",
      "De rol van therapeut op je nemen.",
      "Jezelf wegcijferen tot je leeg bent."
    ],
    zegDit: [
      "“Ik ben er. We hoeven dit nu niet op te lossen.”",
      "“Wat heb je van mij nodig op dit moment?”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over samen kalmeren (co-regulatie): hoe jouw rust een ander helpt kalmeren."
      },
      {
        boek: "attached",
        detail: "Over hechtingsdynamiek tussen partners en wat veiligheid opbouwt."
      }
    ],
    gerelateerd: [
      "kan-ik-geen-nee-zeggen",
      "steeds-onveilige-relaties",
      "window-of-tolerance"
    ]
  },
  {
    id: "moet-ik-herbeleven",
    beeld: {
      src: "img/vragen/moet-ik-herbeleven.jpg"
    },
    vraag: "Moet ik mijn trauma opnieuw beleven om te helen?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "herbeleven",
      "exposure",
      "verwerken",
      "veiligheid",
      "fasen",
      "vertellen"
    ],
    kort: "Nee — heling vraagt niet dat je jezelf opnieuw overspoelt. Goede traumatherapie werkt gedoseerd en begint met veiligheid en stabiliteit. Verwerken gebeurt binnen wat je aankunt, niet daarbuiten.",
    blokken: [
      {
        tekst: "Een hardnekkig en schadelijk misverstand is dat je je trauma in geuren en kleuren moet 'herbeleven' om eroverheen te komen. Veel mensen mijden daarom hulp uit angst opnieuw door de hel te moeten. Die angst is begrijpelijk — en het uitgangspunt klopt niet."
      },
      {
        kop: "Eerst veiligheid, dan verwerking",
        tekst: "Moderne traumabehandeling werkt in fasen. De eerste fase draait om stevig worden: veiligheid, jezelf leren kalmeren en grip krijgen op overspoeling. Pas als die basis er is, wordt er — in kleine stapjes — gewerkt aan de herinneringen, en altijd binnen wat je aankunt (je 'window of tolerance'). Opnieuw overspoeld raken is geen behandeling, maar een teken dat het te snel of te veel gaat."
      },
      {
        kop: "Verwerken zonder verdrinken",
        tekst: "Methodes als EMDR of lichaamsgerichte (somatische) therapie helpen je het verleden te verwerken terwijl je met één voet stevig in het heden blijft. Je hoeft niet alles in detail te vertellen of te herbeleven om vooruit te komen. Een goede therapeut doseert, checkt voortdurend of je het aankunt, en stopt voordat het te veel wordt."
      }
    ],
    doeDit: [
      "Zoek een traumagerichte therapeut die gefaseerd werkt.",
      "Bespreek vooraf hoe overspoeling wordt voorkomen en hoe je 'stop' aangeeft.",
      "Bouw eerst rust en stevigheid op, en leer jezelf kalmeren."
    ],
    vermijd: [
      "Jezelf dwingen het hele verhaal in detail te vertellen 'omdat het moet'.",
      "Behandeling die je structureel overspoelt accepteren als 'normaal'.",
      "Hulp vermijden uit angst voor herbeleving."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd werken: stabiliseren vóór verwerken."
      },
      {
        boek: "body-keeps-score",
        detail: "Over verwerken binnen wat je zenuwstelsel aankan."
      }
    ],
    gerelateerd: [
      "hoe-lang-duurt-herstel",
      "therapie-erger-maken",
      "window-of-tolerance"
    ]
  },
  {
    id: "window-of-tolerance",
    beeld: {
      src: "img/vragen/window-of-tolerance.jpg"
    },
    vraag: "Wat is de 'window of tolerance' en hoe blijf ik erin?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "window of tolerance",
      "regulatie",
      "overspoeling",
      "shutdown",
      "zenuwstelsel",
      "grounding"
    ],
    kort: "Je window of tolerance is de zone waarin je stress aankunt zonder over de kook te gaan of dicht te klappen. Trauma maakt die zone smaller — maar je kunt hem stap voor stap weer verbreden.",
    blokken: [
      {
        tekst: "De 'window of tolerance' is een handig beeld voor de zone waarin je je veilig genoeg voelt om helder te denken, te voelen én aanwezig te blijven. Binnen dat raam kun je stress aan. Erbuiten schiet je omhoog (overspoeling, paniek, woede) of omlaag (verdoving, leegte, dichtklappen)."
      },
      {
        kop: "Trauma versmalt het raam",
        tekst: "Bij trauma wordt die zone vaak smal: je schiet sneller omhoog (paniek, woede) of je klapt dicht, en kleine prikkels duwen je er al overheen. Dat is geen onwil, maar een zenuwstelsel dat overgevoelig staat afgesteld. Herkennen waar je zit — boven, binnen of onder het raam — is de eerste stap naar grip."
      },
      {
        kop: "Het raam verbreden",
        tekst: "Je maakt je zone breder, niet door grenzen te forceren, maar door telkens net aan de rand te oefenen en dan terug te keren naar veiligheid. Aarden (grounding), ademhaling, beweging en veilige mensen om je heen helpen je terug in het raam. Met herhaling leert je systeem dat het meer aankan — de zone groeit mee."
      }
    ],
    doeDit: [
      "Leer je signalen herkennen van 'te hoog' (paniek) en 'te laag' (verdoofd).",
      "Gebruik adem en grounding om terug te keren naar je raam.",
      "Oefen aan de rand en keer terug naar veiligheid — zo groeit de zone."
    ],
    vermijd: [
      "Jezelf forceren ver buiten je raam 'omdat je sterk moet zijn'.",
      "Overspoeling of dichtklappen negeren en doorduwen.",
      "Denken dat een smal raam permanent is."
    ],
    zegDit: [
      "“Ik merk dat ik buiten mijn raam schiet. Ik vertraag en kom terug.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over het herkennen van toestanden van het zenuwstelsel en terugkeren naar veiligheid."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over gedoseerd werken met activatie zonder te overspoelen."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "flashback-wat-doe-ik",
      "moet-ik-herbeleven"
    ]
  },
  {
    id: "therapie-erger-maken",
    beeld: {
      src: "img/vragen/therapie-erger-maken.jpg"
    },
    vraag: "Kan therapie oude wonden niet juist erger maken?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "therapie",
      "angst voor hulp",
      "veiligheid",
      "destabilisatie",
      "behandeling",
      "vertrouwen"
    ],
    kort: "Goede traumatherapie helpt je stap voor stap verwerken, niet om je te overspoelen. Even meer emoties kan voorkomen, maar blijf je lang uit balans, dan is dat een signaal dat het tempo, de aanpak of de samenwerking opnieuw bekeken moet worden.",
    blokken: [
      {
        tekst: "Veel mensen zijn bang dat therapie oude pijn opnieuw openmaakt. Die angst is begrijpelijk. Misschien heb je ervaringen bewust of onbewust op afstand gehouden om te kunnen functioneren, of ging eerdere hulp te snel. Toch is goede traumatherapie er niet op gericht je zomaar terug te brengen naar pijnlijke ervaringen. Het doel is juist om moeilijke dingen op een veilige en behapbare manier te benaderen."
      },
      {
        kop: "Het verschil zit in tempo en veiligheid",
        tekst: "Traumatherapie werkt meestal het best als er eerst genoeg veiligheid, rust en vertrouwen is opgebouwd. Pas daarna kijk je naar wat verwerkt wil worden. <strong>Je kunt je na een sessie tijdelijk emotioneler, moe of gevoeliger voelen — dat kan normaal zijn.</strong> Verwerken kost energie. Maar als je lang overspoeld blijft, steeds verder uit balans raakt, of je onveilig voelt bij je therapeut, dan verdient dat aandacht. Dat betekent niet meteen dat therapie verkeerd is, maar wel dat het tempo of de aanpak misschien niet goed past bij wat jij nodig hebt."
      },
      {
        kop: "Je hoeft het niet alleen te dragen",
        tekst: "Goede traumatherapie doe je samen. Je mag aangeven wanneer iets te veel wordt, vragen om te vertragen, of bespreken wat een sessie met je doet. Een therapeut hoort daar ruimte voor te maken. <strong>Vertrouwen en samenwerken zijn geen extra's, maar een belangrijk onderdeel van herstel.</strong> Voelt het contact steeds onveilig of niet passend, dan mag je kijken of een andere therapeut beter bij je past."
      },
      {
        kop: "Meer voelen is niet hetzelfde als achteruitgaan",
        tekst: "Als je voor het eerst meer contact krijgt met emoties, lichaamsreacties of herinneringen die lang op afstand stonden, kan dat voelen alsof het slechter gaat. Soms is dat juist een teken dat er meer bewustzijn ontstaat, niet dat er schade wordt aangericht. Het verschil zit vaak in de vraag of je na verloop van tijd ook meer begrip, keuzevrijheid, rust of goede momenten ervaart. Blijft dat uit, bespreek dat dan open met je behandelaar."
      }
    ],
    doeDit: [
      "Bespreek vooraf hoe een therapeut omgaat met veiligheid, stabilisatie en overspoeling.",
      "Geef aan wanneer iets te snel gaat of te intens voelt.",
      "Houd in de gaten hoe je je tussen sessies voelt, en bespreek het als je lang uit balans blijft.",
      "Zoek een therapeut bij wie je je voldoende veilig voelt om eerlijk te zijn over je grenzen."
    ],
    vermijd: [
      "Denken dat meer emoties automatisch betekenen dat therapie schade doet.",
      "Een slechte ervaring met één therapeut zien als bewijs dat therapie niet werkt.",
      "Blijven doorgaan met een aanpak die je telkens opnieuw overspoelt zonder dit te bespreken.",
      "Je ongemak verzwijgen uit angst om lastig gevonden te worden."
    ],
    zegDit: "\"Dit voelt te veel voor mij op dit moment.\", \"Kunnen we vertragen?\", \"Ik merk dat ik tussen sessies uit balans blijf.\", \"Ik wil graag begrijpen waarom we deze stap zetten.\"",
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerde traumabehandeling, stabilisatie en het belang van tempo."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over veiligheid, jezelf leren kalmeren en overspoeling voorkomen tijdens traumawerk."
      }
    ],
    gerelateerd: [
      "moet-ik-herbeleven",
      "hoe-lang-duurt-herstel",
      "weinig-jeugdherinneringen"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 3
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_3 = [
  {
    id: "waar-begin-ik-met-trauma",
    beeld: {
      src: "img/vragen/waar-begin-ik-met-trauma.jpg"
    },
    vraag: "Waar begin ik als ik denk dat ik trauma heb?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "beginnen",
      "eerste stap",
      "hulp zoeken",
      "herkenning",
      "startpunt",
      "trauma"
    ],
    kort: "Begin niet bij het hele verleden, maar bij wat je nú voelt. Erken je ervaring, zoek betrouwbare informatie en overweeg professionele hulp — je hoeft niet alles alleen uit te zoeken.",
    blokken: [
      {
        tekst: "Als je voor het eerst denkt 'misschien is dit trauma', kan dat beangstigend én bevrijdend zijn. Veel mensen voelen zich verloren: waar begin je? Moet je alles begrijpen? Moet je meteen naar een therapeut? Het goede nieuws: je hoeft niet alles tegelijk."
      },
      {
        kop: "Begin bij het heden",
        tekst: "De meest zinvolle eerste stap is niet je hele levensverhaal ordenen, maar kijken naar wat je nú belemmert: slaapproblemen, constante alertheid, moeite met vertrouwen, leegte, lichamelijke klachten zonder duidelijke oorzaak. Dat zijn signalen die je serieus mag nemen — ook als je nog niet precies weet wat er gebeurde."
      },
      {
        kop: "Kleine, veilige stappen",
        tekst: "Lees betrouwbare informatie, praat met iemand die je vertrouwt, of maak een afspraak bij je huisarts. Je hoeft je hele verhaal in één keer te vertellen. Een goede hulpverlener begint met luisteren naar waar jij nú bent, niet met je onder druk zetten om alles te onthullen. Trauma-inzicht groeit geleidelijk; haast is zelden je vriend."
      }
    ],
    doeDit: [
      "Noteer wat je nú het meest belemmert — slaap, relaties, energie, gevoelens.",
      "Zoek betrouwbare informatie en vermijd sensatiezuchtige 'quick fixes'.",
      "Overweeg een gesprek met huisarts of psycholoog; je hoeft niet alles te weten om hulp te zoeken."
    ],
    vermijd: [
      "Jezelf dwingen het hele verleden in één keer te begrijpen.",
      "Wachten tot het 'echt erg genoeg' is voordat je hulp zoekt.",
      "Alles alleen uitzoeken terwijl je je overweldigd voelt."
    ],
    zegDit: [
      "“Ik hoef niet alles te weten om hulp te zoeken.”",
      "“Wat ik nú voel, is een goed startpunt.”"
    ],
    bronnen: [
      {
        boek: "what-happened-to-you",
        detail: "Over trauma begrijpen vanuit 'wat gebeurde er met jou', niet 'wat is er mis met jou'."
      },
      {
        boek: "myth-of-normal",
        detail: "Over normaliseren van trauma-ervaringen en de moed om hulp te zoeken."
      }
    ],
    gerelateerd: [
      "wat-is-trauma-erg-genoeg",
      "goede-therapeut-kiezen",
      "wat-zijn-aces"
    ]
  },
  {
    id: "wat-is-emotionele-verwaarlozing",
    beeld: {
      src: "img/vragen/wat-is-emotionele-verwaarlozing.jpg"
    },
    vraag: "Wat is emotionele verwaarlozing?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "emotionele verwaarlozing",
      "CEN",
      "ouder",
      "gevoelens",
      "zichtbaar",
      "behoeften"
    ],
    kort: "Emotionele verwaarlozing is niet per se fysiek geweld, maar het structureel niet zien, horen of erkennen van je gevoelens en behoeften. Het laat vaak geen zichtbare wond achter — maar wel diepe sporen.",
    blokken: [
      {
        tekst: "Veel mensen denken dat trauma alleen gaat over wat er wél gebeurde: mishandeling, geweld, misbruik. Maar soms gaat het juist over wat er níet gebeurde: niemand die je troostte, niemand die je gevoelens serieus nam, niemand die je echt zag. Dat heet emotionele verwaarlozing."
      },
      {
        kop: "Wat er ontbrak",
        tekst: "Bij emotionele verwaarlozing kreeg je niet wat een kind nodig heeft om zich veilig en waardevol te voelen: erkenning, troost, nieuwsgierigheid naar je innerlijke wereld, het gevoel dat je ertoe doet. Je ouders hoefden niet per se 'slecht' te zijn — soms waren ze afwezig, overbelast, zelf getraumatiseerd, of simpelweg niet in staat om emotioneel aanwezig te zijn."
      },
      {
        kop: "Onzichtbare sporen",
        tekst: "Omdat er geen duidelijk 'incident' was, twijfelen veel mensen lang aan hun eigen pijn. 'Ik had het toch goed?' is een veelgehoorde zin. Maar de gevolgen zijn echt: moeite met je gevoelens herkennen, chronisch leegte, perfectionisme, schaamte, en het gevoel dat je behoeften te veel zijn. Dat is geen karakterfout — het is een logisch gevolg van wat je miste."
      }
    ],
    doeDit: [
      "Erken dat 'niets gebeurde' ook een vorm van schade kan zijn.",
      "Let op patronen: moeite met je gevoelens benoemen, leegte, schaamte over behoeften.",
      "Zoek hulp bij iemand die emotionele verwaarlozing herkent — niet elke therapeut ziet het meteen."
    ],
    vermijd: [
      "Je pijn afmeten aan fysiek geweld of zichtbare mishandeling.",
      "Denken dat 'goede bedoelingen' de impact ongedaan maken.",
      "Jezelf verwijten dat je 'te gevoelig' bent."
    ],
    zegDit: [
      "“Wat ik miste, telt ook — ook al was het onzichtbaar.”",
      "“Mijn behoeften zijn niet te veel; ze werden vroeger niet gezien.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over emotionele verwaarlozing (CEN) en hoe het doorwerkt in volwassen leven."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over de impact van een ouder die emotioneel niet beschikbaar was."
      }
    ],
    gerelateerd: [
      "waarom-voel-ik-me-leeg",
      "wat-zijn-aces",
      "narcistische-ouder-betekenis"
    ]
  },
  {
    id: "wat-zijn-aces",
    beeld: {
      src: "img/vragen/wat-zijn-aces.jpg"
    },
    vraag: "Wat zijn ACE's?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "ACE",
      "ACE's",
      "Adverse Childhood Experiences",
      "jeugd",
      "risico",
      "onderzoek"
    ],
    kort: "ACE's (Adverse Childhood Experiences) zijn negatieve ervaringen in de jeugd — van mishandeling tot verwaarlozing — die wetenschappelijk gelinkt zijn aan latere gezondheids- en welzijnsproblemen. Het is geen label, maar een hulpmiddel om patronen te begrijpen.",
    blokken: [
      {
        tekst: "ACE's staan voor Adverse Childhood Experiences: nadelige ervaringen in de kindertijd. Het begrip komt uit onderzoek dat liet zien dat wat je als kind meemaakte, doorwerkt in je lichaam, brein en leven als volwassene — soms decennia later."
      },
      {
        kop: "Wat telt mee?",
        tekst: "De originele ACE-vragenlijst omvat onder meer fysieke, emotionele of seksuele mishandeling, verwaarlozing, huiselijk geweld, verslaving of psychische problemen van een ouder, scheiding, en gevangenisstraf van een ouder. Het gaat niet om één slechte dag, maar om ervaringen die structureel en overweldigend waren voor een kind."
      },
      {
        kop: "Geen veroordeling, wel inzicht",
        tekst: "Een hoge ACE-score betekent niet dat je 'kapot' bent of dat je lot bezegeld is. Het helpt vooral om te begrijpen waarom je lichaam en brein zo reageren als ze doen. Veel mensen voelen opluchting: eindelijk een taal voor ervaringen die ze altijd minimaliseerden. Beschermende factoren — één veilig persoon, later goede hulp — maken een enorm verschil."
      }
    ],
    doeDit: [
      "Doe de ACE-vragenlijst als oriëntatie, niet als definitief oordeel.",
      "Let op beschermende factoren: wie was er wél veilig in je leven?",
      "Gebruik het inzicht om hulp gerichter te zoeken, niet om jezelf te labelen."
    ],
    vermijd: [
      "Een score lezen als 'ik ben verloren'.",
      "Denken dat ACE's alleen over extreme gevallen gaan.",
      "Je score gebruiken om je pijn te minimaliseren ('mijn score is laag, dus het telt niet')."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over hoe vroege stress het lichaam en de gezondheid decennia later beïnvloedt."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over het begrijpen van je verhaal vanuit je ervaringen, niet vanuit schaamte."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "waar-begin-ik-met-trauma",
      "intergenerationeel-trauma"
    ]
  },
  {
    id: "wat-is-een-trigger",
    beeld: {
      src: "img/vragen/wat-is-een-trigger.jpg"
    },
    vraag: "Wat is een trigger?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "trigger",
      "prikkel",
      "reactie",
      "herinnering",
      "alarm",
      "overlevingsreactie"
    ],
    kort: "Een trigger is iets in het heden — een geluid, geur, toon, situatie — dat je zenuwstelsel laat reageren alsof het gevaar van vroeger nú terug is. Het is geen overdreven gevoeligheid, maar een alarm dat nog niet geleerd heeft onderscheid te maken tussen toen en nu.",
    blokken: [
      {
        tekst: "Iets kleins gebeurt — een bepaalde blik, een deur die dichtvalt, een zin — en plotseling schiet je hartslag omhoog, word je boos, verdrietig, of verdoofd. Je weet rationeel dat er niets aan de hand is, maar je lichaam denkt van wel. Dat is een trigger."
      },
      {
        kop: "Waarom het gebeurt",
        tekst: "Tijdens trauma slaat het brein details op die samengingen met gevaar: de geur in de kamer, de toon van een stem, het gevoel van machteloosheid. Later herkent het zenuwstelsel een vergelijkbaar signaal en schakelt het automatisch in overlevingsmodus — sneller dan je bewuste brein kan bijbenen. Daarom voelt een trigger vaak 'onlogisch'."
      },
      {
        kop: "Triggers zijn te begrijpen",
        tekst: "Triggers vermijden maakt je wereld kleiner. Het doel is niet om alles te vermijden, maar te leren herkennen wat er gebeurt ('dit is een trigger, niet gevaar nú'), en je lichaam te helpen kalmeren. Met tijd en hulp worden triggers vaak minder heftig en herken je ze sneller."
      }
    ],
    doeDit: [
      "Leer je triggers herkennen: wat gebeurde vlak vóór de heftige reactie?",
      "Benoem het: 'dit is mijn alarm, niet gevaar nu'.",
      "Gebruik grounding en ademhaling om terug te komen in het heden."
    ],
    vermijd: [
      "Jezelf 'overgevoelig' noemen — het is een beschermingsmechanisme.",
      "Alles wat triggert permanent vermijden — dat versterkt angst.",
      "Belangrijke beslissingen nemen midden in een getriggerde staat."
    ],
    zegDit: [
      "“Dit is een trigger. Het voelt nu, maar het komt uit het verleden.”",
      "“Ik ben veilig. Dit alarm is te gevoelig, niet gevaarlijk.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe het lichaam triggers opslaat en later automatisch activeert."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over triggers bij complex trauma en hoe je ze herkent en beheerst."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "wat-is-hyperalertheid",
      "emotionele-flashback-vs-herinnering"
    ]
  },
  {
    id: "waarom-ben-ik-altijd-moe",
    beeld: {
      src: "img/vragen/waarom-ben-ik-altijd-moe.jpg"
    },
    vraag: "Waarom ben ik altijd zo moe?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vermoeidheid",
      "moe",
      "uitputting",
      "hyperalert",
      "zenuwstelsel",
      "energie"
    ],
    kort: "Chronische vermoeidheid hoort vaak bij trauma: een zenuwstelsel dat constant op scherp staat, verdrongen emoties en slechte slaap putten je uit — ook als je 'niets doet'. Het is geen luiheid.",
    blokken: [
      {
        tekst: "Je slaapt genoeg, doet niet eens zoveel, en toch voel je je constant uitgeput. Alsof je innerlijk een motor draait die nooit uitgaat. Veel mensen met trauma herkennen dit — en voelen zich schuldig omdat anderen het 'gewoon doen'."
      },
      {
        kop: "Een zenuwstelsel op volle kracht",
        tekst: "Hyperalertheid — constant scannen op gevaar — kost enorm veel energie, ook als je het niet bewust merkt. Je brein en lichaam werken overuren om je 'veilig' te houden. Daarnaast kost het onderdrukken of verdragen van emoties veel kracht. Vermoeidheid is hier geen karaktereigenschap, maar een lichamelijk signaal."
      },
      {
        kop: "Slaap, lichaam en herstel",
        tekst: "Trauma verstoort vaak de slaap, en slechte slaap versterkt vermoeidheid. Sommige mensen hebben ook lichamelijke klachten — spierspanning, chronische pijn, spijsverteringsproblemen — die energie slurpen. Laat lichamelijke oorzaken uitsluiten bij je huisarts, en bespreek vermoeidheid als mogelijk trauma-symptoom met een hulpverlener."
      }
    ],
    doeDit: [
      "Erken dat vermoeidheid een echt lichaamsignaal is, geen gebrek aan wilskracht.",
      "Bouw rustmomenten in, ook korte — je zenuwstelsel heeft pauzes nodig.",
      "Bespreek aanhoudende uitputting met huisarts en overweeg traumagerichte hulp."
    ],
    vermijd: [
      "Jezelf 'lui' noemen of harder pushen tot je instort.",
      "Vermoeidheid wegwuiven als 'gewoon stress'.",
      "Alleen op koffie of wilskracht vertrouwen."
    ],
    zegDit: [
      "“Mijn vermoeidheid is echt. Mijn lichaam werkt hard.”",
      "“Rust is geen luxe voor mij — het is nodig.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over hoe chronische stress en onderdrukte emoties het lichaam uitputten."
      },
      {
        boek: "anchored",
        detail: "Over hoe een overactief zenuwstelsel constant energie verbruikt."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "slaap-nachtmerries",
      "trauma-lichamelijke-klachten"
    ]
  },
  {
    id: "wat-is-hyperalertheid",
    beeld: {
      src: "img/vragen/wat-is-hyperalertheid.jpg"
    },
    vraag: "Wat is hyperalertheid?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "hyperalertheid",
      "hypervigilant",
      "alert",
      "scanning",
      "gevaar",
      "zenuwstelsel"
    ],
    kort: "Hyperalertheid is een constante staat van verhoogde waakzaamheid: je scant je omgeving, mensen en situaties op gevaar, ook wanneer er objectief veiligheid is. Het beschermde je ooit — nu put het je uit.",
    blokken: [
      {
        tekst: "Je zit in een restaurant en scant de ruimte: wie zit waar, wie kijkt boos, waar is de uitgang. Je schrikt van onverwachte geluiden. Je analyseert elke toon in iemands stem. Je kunt niet echt ontspannen, ook thuis. Dat is hyperalertheid."
      },
      {
        kop: "Een overlevingsstand die blijft hangen",
        tekst: "Na trauma leert het zenuwstelsel dat de wereld gevaarlijk is. Het schakelt naar een permanente waakmodus: altijd klaar om te vechten, vluchten of bevriezen. Dit gebeurt grotendeels onbewust — je 'kiest' niet om alert te zijn, je systeem doet het automatisch. Dat verklaart waarom je zo moe bent en waarom ontspannen zo moeilijk voelt."
      },
      {
        kop: "Langzaam terug naar veiligheid",
        tekst: "Hyperalertheid verdwijnt niet door je te vertellen dat het veilig is. Je lichaam moet veiligheid ervaren — via voorspelbare routines, veilige relaties, aarden (grounding) en lichaamsgerichte oefeningen. Met tijd en de juiste hulp kan het alarm minder gevoelig worden. Geduld en zachtheid zijn hier belangrijker dan wilskracht."
      }
    ],
    doeDit: [
      "Herken het patroon: constant scannen, schrikken, moeite met ontspannen.",
      "Bouw voorspelbaarheid en veiligheid in je dag in.",
      "Oefen signalen van veiligheid: adem, beweging, een vertrouwde plek of persoon."
    ],
    vermijd: [
      "Jezelf verwijten dat je 'te angstig' bent.",
      "Denken dat alert zijn je veilig houdt — het put je vooral uit.",
      "Hyperalertheid negeren en doorgaan alsof alles normaal is."
    ],
    zegDit: [
      "“Mijn waakzaamheid beschermde me. Nu mag ik leren ontspannen.”",
      "“Ik ben nu veilig. Ik hoef niet alles te scannen.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over altijd op scherp staan als kernklacht van trauma in het zenuwstelsel."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over het overlevingsbrein dat alert blijft wanneer de dreiging voorbij is."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "waarom-ben-ik-altijd-moe",
      "wat-is-een-trigger"
    ]
  },
  {
    id: "trauma-lichamelijke-klachten",
    beeld: {
      src: "img/vragen/trauma-lichamelijke-klachten.jpg"
    },
    vraag: "Kan trauma lichamelijke klachten geven?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "lichamelijke klachten",
      "pijn",
      "spijsvertering",
      "hoofdpijn",
      "somatisch",
      "lichaam"
    ],
    kort: "Ja. Trauma slaat niet alleen op in je hoofd — het leeft in je lichaam. Chronische pijn, spijsverteringsproblemen, hoofdpijn en andere klachten zonder duidelijke medische oorzaak kunnen samenhangen met onverwerkte stress.",
    blokken: [
      {
        tekst: "Je bent al bij de derde specialist geweest en niemand vindt iets. Toch heb je pijn, maagklachten, huidproblemen, of een constant gespannen lichaam. Veel mensen met trauma herkennen dit — en voelen zich onbegrepen of wantrouwig gemaakt door de medische wereld."
      },
      {
        kop: "Het lichaam onthoudt",
        tekst: "Trauma activeert stresssystemen die bedoeld zijn voor korte noodsituaties, maar bij chronische stress blijven draaien. Dat beïnvloedt spieren, spijsvertering, immuunsysteem en hormonen. Het lichaam 'praat' via klachten wanneer emoties lang onderdrukt zijn of wanneer het zenuwstelsel vastzit in alarmstand."
      },
      {
        kop: "Beide kanten serieus nemen",
        tekst: "Lichamelijke klachten zijn echt — het is geen 'in je hoofd'. Laat medische oorzaken uitsluiten, en overweeg daarnaast dat trauma een rol kan spelen. Lichaamsgerichte (somatische) therapie, lichaamsgericht traumawerk en oefeningen om te kalmeren kunnen helpen wanneer een gewone behandeling alleen de symptomen bestrijdt."
      }
    ],
    doeDit: [
      "Laat lichamelijke klachten medisch laten onderzoeken — neem ze serieus.",
      "Overweeg dat stress en trauma fysieke sporen nalaten.",
      "Zoek hulp die lichaam én geest meeneemt, bijvoorbeeld lichaamsgerichte (somatische) traumatherapie."
    ],
    vermijd: [
      "Klachten negeren omdat 'de arts niets vond'.",
      "Denken dat het 'allemaal psychisch' betekent dat het niet echt is.",
      "Alleen symptomen behandelen zonder naar stress en trauma te kijken."
    ],
    zegDit: [
      "“Mijn klachten zijn echt, ook al is de oorzaak niet meteen zichtbaar.”",
      "“Mijn lichaam probeert me iets te vertellen.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma zich in het lichaam laat voelen, niet alleen in gedachten."
      },
      {
        boek: "when-body-says-no",
        detail: "Over de link tussen emotionele stress en lichamelijke ziekte."
      },
      {
        boek: "heal-body-heal-mind",
        detail: "Over aanpakken die lichaam en geest samen nemen bij trauma."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "waarom-ben-ik-altijd-moe",
      "wat-is-grounding"
    ]
  },
  {
    id: "goede-therapeut-kiezen",
    beeld: {
      src: "img/vragen/goede-therapeut-kiezen.jpg"
    },
    vraag: "Hoe kies ik een goede therapeut?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "therapeut",
      "hulp zoeken",
      "traumatherapie",
      "match",
      "veiligheid",
      "keuze"
    ],
    kort: "Zoek iemand met specifieke traumakennis, vertrouw op je gevoel of het veilig voelt, en weet dat je mag wisselen als de match niet klopt. Een goede therapeut werkt in jouw tempo en neemt overspoeling serieus.",
    blokken: [
      {
        tekst: "Therapie zoeken kan overweldigend zijn. Er zijn honderden aanpakken, wachtlijsten, en je moet iemand vertrouwen met je kwetsbaarste ervaringen. Hoe weet je wie goed is? En wat als het niet klikt?"
      },
      {
        kop: "Waar je op let",
        tekst: "Zoek iemand met aantoonbare ervaring in trauma — niet alleen 'praten over gevoelens', maar specifieke training in traumabehandeling (EMDR, lichaamsgericht werk, IFS, schematherapie, en dergelijke). Vraag hoe ze omgaan met overspoeling, of ze gefaseerd werken, en of je het tempo mag bepalen. Een goede therapeut beantwoordt die vragen open en geruststellend."
      },
      {
        kop: "Veiligheid boven alles",
        tekst: "Na één of enkele sessies weet je vaak of je je gehoord en veilig voelt. Dat gevoel is belangrijker dan diploma's alleen. Je mag wisselen — dat is geen falen. Traumawerk vraagt vertrouwen; zonder dat werkt zelfs de beste methode niet. Luister naar je lichaam: voel je je kleiner na een sessie, of juist iets lichter?"
      }
    ],
    doeDit: [
      "Zoek een therapeut met specifieke traumatraining, niet alleen algemene gesprekstherapie.",
      "Stel vragen over tempo, overspoeling en werkwijze vóór of in de eerste sessie.",
      "Vertrouw op je gevoel — wisselen mag als de match niet klopt."
    ],
    vermijd: [
      "De eerste therapeut accepteren uit angst om te kiezen.",
      "Doorgaan bij iemand die je structureel overspoelt of klein maakt.",
      "Denken dat je de 'juiste' persoon moet vinden voordat je überhaupt begint."
    ],
    zegDit: [
      "“Ik wil graag weten hoe u met overspoeling omgaat.”",
      "“Ik mag het tempo meebepalen — klopt dat?”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over wat je mag verwachten van traumagerichte behandeling."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over traumagerichte benaderingen en het belang van veiligheid in therapie."
      }
    ],
    gerelateerd: [
      "therapie-erger-maken",
      "waar-begin-ik-met-trauma",
      "moet-ik-herbeleven"
    ]
  },
  {
    id: "wat-is-grounding",
    beeld: {
      src: "img/vragen/wat-is-grounding.jpg"
    },
    vraag: "Wat is grounding en hoe doe ik dat?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "grounding",
      "aarden",
      "hier en nu",
      "zintuigen",
      "techniek",
      "zelfregulatie"
    ],
    kort: "Grounding — aarden — is het terugbrengen van je aandacht naar het nu, via je lichaam en je zintuigen. Het helpt wanneer je overspoeld raakt, afhaakt (dissocieert), of het verleden het heden overneemt.",
    blokken: [
      {
        tekst: "Grounding betekent letterlijk: terug naar de grond, terug naar het nu. Wanneer een trigger, flashback of paniekgolf je meesleurt, helpt grounding je lichaam en brein te herinneren: ik ben hier, nu, en ik ben veilig."
      },
      {
        kop: "Hoe het werkt",
        tekst: "Grounding activeert je zintuigen en je lichaam — kanalen die het overlevingsbrein kan bereiken wanneer denken alleen niet werkt. Je voelt je voeten op de grond, noemt vijf dingen die je ziet, drinkt iets kouds, ruikt een sterke geur, of drukt je handen tegen een muur. Het doel is niet om het gevoel weg te duwen, maar om naast het gevoel ook het heden te voelen."
      },
      {
        kop: "Oefenen maakt het sterker",
        tekst: "De 5-4-3-2-1 techniek is populair: noem vijf dingen die je ziet, vier die je hoort, drie die je voelt, twee die je ruikt, één die je proeft. Maar elke zintuiglijke anker werkt. Oefen ook wanneer het relatief rustig is — dan is grounding makkelijker beschikbaar wanneer je het echt nodig hebt."
      }
    ],
    doeDit: [
      "Oefen grounding dagelijks, ook in rustige momenten.",
      "Gebruik de 5-4-3-2-1 techniek of voel je voeten stevig op de grond.",
      "Combineer met rustige uitademing: langzaam uit ademen kalmeert het zenuwstelsel."
    ],
    vermijd: [
      "Grounding als enige oplossing zien — bij hardnekkige klachten hoort ook professionele hulp.",
      "Jezelf verwijten als het niet meteen werkt — het is een vaardigheid.",
      "Grounding gebruiken om gevoelens voor altijd te vermijden in plaats van ermee te leren omgaan."
    ],
    zegDit: [
      "“Ik ben hier. Ik voel mijn voeten op de grond.”",
      "“Dit gevoel komt uit het verleden. Nu ben ik veilig.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over grounding als kernvaardigheid bij emotionele flashbacks."
      },
      {
        boek: "somatic-ifs",
        detail: "Over lichaamsgerichte technieken om terug in het heden te komen."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "window-of-tolerance",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "waarom-voel-ik-me-leeg",
    beeld: {
      src: "img/vragen/waarom-voel-ik-me-leeg.jpg"
    },
    vraag: "Waarom voel ik me zo leeg?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "leegte",
      "numb",
      "verdoofd",
      "innerlijk",
      "emoties",
      "dissociatie"
    ],
    kort: "Innerlijke leegte is een veelvoorkomend trauma-symptoom: je voelt weinig, alsof er een gat is waar gevoelens horen te zitten. Het is vaak een overlevingsstrategie — niet iets wat 'mis' is met jou als persoon.",
    blokken: [
      {
        tekst: "Je kijkt naar je leven en voelt… niets. Of een vaag gat. Anderen lijken te genieten, te huilen, boos te worden — jij voelt vaak weinig, of alleen een vage leegte. Soms mis je zelfs het gevoel dat je echt bestaat."
      },
      {
        kop: "Leegte als bescherming",
        tekst: "Veel mensen met trauma leerden vroeg hun gevoelens af te sluiten. Voelen was te pijnlijk, te gevaarlijk, of er was niemand om je gevoelens te spiegelen. Het zenuwstelsel schakelde naar verdoving — dichtklappen (shutdown). Die leegte beschermde je toen. Nu voelt het als verlies: alsof je niet echt leeft."
      },
      {
        kop: "Langzaam terug naar voelen",
        tekst: "Gevoelens komen niet terug door er hard aan te trekken. Ze komen terug via kleine, veilige stappen: een zachte aanraking, muziek, beweging, een therapeut die je helpt voelen zonder te overspoelen. Leegte is geen bewijs dat je 'kapot' bent — het is een teken dat er ooit te veel was. Met tijd en hulp kan de innerlijke wereld weer gaan leven."
      }
    ],
    doeDit: [
      "Wees mild: leegte is een overlevingsreactie, geen karakterfout.",
      "Oefen kleine zintuiglijke ervaringen: warm douchen, wandelen, muziek.",
      "Zoek hulp die geleidelijk werkt aan het terugbrengen van gevoelens."
    ],
    vermijd: [
      "Jezelf 'dood' of 'gebroken' noemen.",
      "Forceren om te voelen — dat kan overspoelen.",
      "Leegte verwarren met 'ik heb geen trauma' — soms is het juist een teken ervan."
    ],
    zegDit: [
      "“Mijn leegte beschermde me. Ik mag langzaam leren voelen.”",
      "“Er is ruimte in mij — die mag weer gevuld worden.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over emotionele leegte en moeite met voelen bij emotionele verwaarlozing."
      },
      {
        boek: "wounded-inner-child",
        detail: "Over het innerlijke kind dat leerde om gevoelens af te sluiten."
      }
    ],
    gerelateerd: [
      "dissociatie-naast-mezelf",
      "wat-is-emotionele-verwaarlozing",
      "waarom-zoveel-schaamte"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 4
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_4 = [
  {
    id: "narcistische-ouder-betekenis",
    beeld: {
      src: "img/vragen/narcistische-ouder-betekenis.jpg"
    },
    vraag: "Mijn ouder was narcistisch — wat betekent dat voor mij?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "narcisme",
      "ouder",
      "familie",
      "zelfwaarde",
      "grenzen",
      "kinderrol"
    ],
    kort: "Opgroeien met een narcistische ouder betekent vaak dat jouw behoeften, gevoelens en identiteit ondergeschikt waren aan die van je ouder. De sporen — twijfel aan jezelf, schaamte, moeite met grenzen — zijn begrijpelijk en te helen.",
    blokken: [
      {
        tekst: "Als je opgroeide met een ouder die vooral aan zichzelf dacht — die jouw gevoelens minimaliseerde, je gebruikte voor eigen behoeften, of je klein hield zodat zij groter bleef — dan leerde je vroeg dat jouw waarde afhing van wat je voor anderen betekende, niet van wie je bent."
      },
      {
        kop: "Wat je mogelijk meekreeg",
        tekst: "Kinderen van narcistische ouders leren vaak: mijn gevoelens tellen niet, ik moet perfect zijn om liefde te verdienen, conflicten zijn gevaarlijk, en ik ben verantwoordelijk voor het welzijn van mijn ouder. Je innerlijke criticus kan extreem hard zijn. Je twijfelt aan je eigen waarneming ('misschien overdrijf ik wel'). En je voelt diepe schaamte over dingen die niet jouw schuld waren."
      },
      {
        kop: "Het is niet jouw schuld",
        tekst: "Een kind kan geen narcistische ouder 'veroorzaken' of 'beter maken'. Wat je meekreeg, is geen bewijs van falen — het is het logische gevolg van opgroeien in een omgeving waar jouw zelf niet mocht bestaan. Heling betekent leren wie jij bent los van die ouder, grenzen stellen (ook innerlijk), en je eigen waarde langzaam terugwinnen."
      }
    ],
    doeDit: [
      "Erken dat wat je meemaakte echt was — twijfel aan je waarneming is zelf een spoor.",
      "Leer het verschil tussen liefde verdienen en inherent waardevol zijn.",
      "Zoek hulp bij iemand die narcistische ouder-dynamiek herkent."
    ],
    vermijd: [
      "Jezelf de schuld geven voor het gedrag van je ouder.",
      "Blijven proberen je ouder te 'begrijpen' ten koste van jezelf.",
      "Denken dat je 'over moet zijn' omdat je volwassen bent."
    ],
    zegDit: [
      "“Wat ik meemaakte, was niet mijn schuld.”",
      "“Ik hoef niet perfect te zijn om waardevol te zijn.”"
    ],
    bronnen: [
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over opgroeien met een narcistische moeder en de innerlijke sporen."
      },
      {
        boek: "trapped-in-the-mirror",
        detail: "Over de impact van een narcistische ouder op identiteit en zelfbeeld."
      },
      {
        boek: "break-the-cycle",
        detail: "Over patronen doorbreken die je van een narcistische ouder meekreeg."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "waarom-zoveel-schaamte",
      "boos-en-liefde-ouders"
    ]
  },
  {
    id: "emotionele-flashback-vs-herinnering",
    beeld: {
      src: "img/vragen/emotionele-flashback-vs-herinnering.jpg"
    },
    vraag: "Wat is een emotionele flashback vs een gewone herinnering?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "emotionele flashback",
      "flashback",
      "herinnering",
      "overspoeling",
      "verleden",
      "gevoel"
    ],
    kort: "Een gewone herinnering kun je rustig terugzien, als een film op afstand. Een emotionele flashback voelt alsof het nú gebeurt: je wordt overspoeld door angst, schaamte of kleinheid zonder duidelijke beelden — het verleden neemt het heden over.",
    blokken: [
      {
        tekst: "Bij een normale herinnering zie je iets uit het verleden voor je: je weet dat het toen was, je voelt misschien verdriet, maar je blijft in het nu. Bij een emotionele flashback is er vaak geen film — alleen een golf van gevoel dat uit het niets lijkt te komen, en het voelt alsof het nú gebeurt."
      },
      {
        kop: "Herken de verschillen",
        tekst: "Een gewone herinnering: je weet wanneer en waar het was, je kunt erover praten zonder overspoeld te raken, het voelt als 'toen'. Een emotionele flashback: je voelt plotseling intens angstig, schaamtevol, hulpeloos of woedend zonder duidelijke aanleiding; je denkende brein gaat offline; je reageert alsof het gevaar nú is; achteraf snap je niet waarom het zo heftig was."
      },
      {
        kop: "Wat te doen bij een emotionele flashback",
        tekst: "Herken het: 'ik heb een emotionele flashback — het voelt nu, maar het is van toen'. Gebruik grounding om terug te komen in het heden. Wees mild: dit is geen zwakte maar een teken dat er ooit te veel was. Met herhaling leer je triggers sneller herkennen en worden de golven korter."
      }
    ],
    doeDit: [
      "Leer het verschil: herinnering = afstand, flashback = overspoeling in het nu.",
      "Benoem het: 'dit is een emotionele flashback'.",
      "Gebruik grounding en zelfcompassie; zoek hulp als flashbacks je leven beperken."
    ],
    vermijd: [
      "Denken dat het 'gewoon een bad mood' is — het patroon herhalen zonder het te herkennen.",
      "Jezelf verwijten dat je 'overreageert'.",
      "Flashbacks negeren in plaats van te leren ermee om te gaan."
    ],
    zegDit: [
      "“Dit is een emotionele flashback. Ik ben nu veilig.”",
      "“Het gevoel is echt, maar het komt uit het verleden.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks: herkenning, oorzaken en doorstaan."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over oefeningen om flashbacks te herkennen en tot rust te brengen."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "wat-is-een-trigger",
      "wat-is-grounding"
    ]
  },
  {
    id: "waarom-zoveel-schaamte",
    beeld: {
      src: "img/vragen/waarom-zoveel-schaamte.jpg"
    },
    vraag: "Waarom heb ik zo veel schaamte?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "schaamte",
      "zelfhaat",
      "innerlijke criticus",
      "kwaal",
      "identiteit",
      "gevoel"
    ],
    kort: "Chronische schaamte is een van de meest voorkomende sporen van trauma — vooral als je als kind de boodschap kreeg dat jij het probleem was. Schaamte is geleerd, niet waarheid. Het is te verzachten.",
    blokken: [
      {
        tekst: "Schaamte die niet weggaat. Het gevoel dat er iets fundamenteel mis is met jou — niet wat je deed, maar wie je bent. Alsof je een geheim draagt dat, als het uitkomt, zou bewijzen dat je onwaardig bent. Veel mensen met trauma herkennen dit als constante metgezel."
      },
      {
        kop: "Schaamte vs schuld",
        tekst: "Schuld zegt: 'ik deed iets fout'. Schaamte zegt: 'ik ben fout'. Kinderen die misbruikt, verwaarloosd of afgewezen werden, krijgen vaak de boodschap dat zíj het probleem zijn — niet de situatie, niet de ouder. Die boodschap nestelt zich diep. Je innerlijke criticus herhaalt haar dagelijks, ook als je rationeel weet dat het niet klopt."
      },
      {
        kop: "Van schaamte naar zelfcompassie",
        tekst: "Schaamte overleeft in isolatie — delen met een veilige persoon of therapeut vermindert haar macht. Zelfcompassie is het tegengif: jezelf behandelen zoals je een geliefd kind zou behandelen. Het gaat niet snel, maar schaamte is geen permanent deel van je identiteit. Het is een oude bescherming die je niet meer nodig hebt."
      }
    ],
    doeDit: [
      "Onderscheid schaamte ('ik ben fout') van schuld ('ik deed iets fout').",
      "Deel veilig — schaamte verliest macht in verbinding.",
      "Oefen één zachte zin tegen jezelf, ook als je het nog niet gelooft."
    ],
    vermijd: [
      "Schaamte verbergen en doen alsof alles in orde is.",
      "Schaamte geloven als bewijs van ondeugd.",
      "Jezelf straffen voor het voelen van schaamte."
    ],
    zegDit: [
      "“Schaamte is iets wat ik leerde — het is niet de waarheid over mij.”",
      "“Ik ben menselijk. Dat maakt me niet waardeloos.”"
    ],
    bronnen: [
      {
        boek: "its-not-your-fault",
        detail: "Over de schaamte die kinderen van misbruik en verwaarlozing dragen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over chronische schaamte bij complex trauma en het pad naar zelfcompassie."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "narcistische-ouder-betekenis",
      "waarom-voel-ik-me-leeg"
    ]
  },
  {
    id: "boos-en-liefde-ouders",
    beeld: {
      src: "img/vragen/boos-en-liefde-ouders.jpg"
    },
    vraag: "Kan ik boos zijn op mijn ouders en ze toch graag zien?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "boosheid",
      "ouders",
      "ambivalentie",
      "liefde",
      "schuldgevoel",
      "gevoelens"
    ],
    kort: "Ja — en die twee gevoelens tegelijk hebben is normaal bij complex trauma. Boosheid is geen verraad; het is een gezond signaal dat er iets misging. Liefde en pijn kunnen naast elkaar bestaan.",
    blokken: [
      {
        tekst: "Je bent boos — echt boos — op iemand van wie je ook houdt. Misschien voel je je schuldig over die boosheid. 'Ze deden hun best.' 'Ze wisten het niet beter.' 'Boos zijn maakt me een slecht kind.' Die innerlijke strijd is een van de meest pijnlijke kanten van trauma in de familie."
      },
      {
        kop: "Ambivalentie is normaal",
        tekst: "Kinderen zijn biologisch gericht op hechting aan hun ouders — zelfs wanneer die ouders pijn doen. Boosheid én liefde tegelijk voelen heet ambivalentie, en het is geen teken van verwarring of zwakte. Het is een teken dat je zowel de pijn als de band erkent. Beide mogen bestaan."
      },
      {
        kop: "Boosheid is informatie",
        tekst: "Boosheid vertelt je dat een grens overschreden werd, dat je iets nodig had dat je niet kreeg. Het is geen bevel om contact te verbreken — tenzij dat voor jouw veiligheid nodig is. Je mag boos zijn zonder je liefde te verliezen, en je mag liefhebben zonder je boosheid te onderdrukken. In therapie leer je beide gevoelens ruimte geven."
      }
    ],
    doeDit: [
      "Geef jezelf toestemming om boos te zijn — het is geen verraad.",
      "Erken dat liefde en pijn tegelijk kunnen bestaan.",
      "Zoek hulp om ambivalente gevoelens te verwerken zonder schuld."
    ],
    vermijd: [
      "Boosheid onderdrukken om 'lief' te blijven.",
      "Boosheid gebruiken om al het goede te wissen.",
      "Jezelf een slecht kind noemen omdat je boos bent."
    ],
    zegDit: [
      "“Ik mag boos zijn én van je houden.”",
      "“Mijn boosheid vertelt me dat iets niet oké was.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over gezonde confrontatie en ambivalente gevoelens richting ouders."
      },
      {
        boek: "break-the-cycle",
        detail: "Over boosheid erkennen zonder de cyclus voort te zetten."
      }
    ],
    gerelateerd: [
      "narcistische-ouder-betekenis",
      "vergeven-om-te-helen",
      "wat-is-emotionele-verwaarlozing"
    ]
  },
  {
    id: "intergenerationeel-trauma",
    beeld: {
      src: "img/vragen/intergenerationeel-trauma.jpg"
    },
    vraag: "Wat is intergenerationeel trauma?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "intergenerationeel",
      "generaties",
      "familie",
      "doorgeven",
      "epigenetica",
      "patronen"
    ],
    kort: "Intergenerationeel trauma is trauma dat door generaties heen doorwerkt — via opvoeding, onverwerkte pijn, overlevingspatronen en soms zelfs biologische sporen. Je kunt lijden onder ervaringen die niet direct van jou zijn.",
    blokken: [
      {
        tekst: "Je ouders of grootouders overleefden oorlog, vervolging, misbruik, of groeiden op in chaos — en namen die pijn mee in hun opvoeding, ook zonder het bewust te beseffen. Jij voelt de echo's: angst, controle, emotionele afwezigheid, of extreme overbescherming. Dat is intergenerationeel trauma."
      },
      {
        kop: "Hoe het doorgeeft",
        tekst: "Trauma wordt doorgegeven via gedrag: een ouder die zelf nooit troost kreeg, kan moeite hebben met troosten. Een ouder die hyperalert was, maakt kinderen hyperalert. Soms via verhalen die verteld worden — of juist verzwegen. Onderzoek wijst er ook op dat zware stress lichamelijke sporen kan nalaten die doorwerken over generaties, al wordt dat nog volop onderzocht."
      },
      {
        kop: "Doorbreken begint bij bewustwording",
        tekst: "Inzicht in intergenerationeel trauma is geen excuus voor schadelijk gedrag — het is verklaring die ruimte maakt voor keuze. Jij bent niet verantwoordelijk voor wat je voorouders meemaakten, maar je kunt wel kiezen het patroon te doorbreken. Dat begint met erkennen wat je meekreeg, en doorwerken wat van jou is."
      }
    ],
    doeDit: [
      "Onderzoek je familiegeschiedenis — wat werd verteld, wat werd verzwegen?",
      "Erken patronen zonder alles te moeten weten.",
      "Zie doorbreken als een daad van liefde voor volgende generaties."
    ],
    vermijd: [
      "Alles wijten aan 'generaties' en je eigen verantwoordelijkheid negeren.",
      "Schuld voelen over pijn die niet van jou is.",
      "Denken dat doorbreken onmogelijk is."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over hoe vroege stress generaties door beïnvloedt."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen en intergenerationele patronen doorbreken."
      },
      {
        boek: "break-the-cycle",
        detail: "Over bewust stoppen met het doorgeven van trauma."
      }
    ],
    gerelateerd: [
      "wat-zijn-aces",
      "narcistische-ouder-betekenis",
      "wat-is-emotionele-verwaarlozing"
    ]
  },
  {
    id: "waarom-vertrouw-ik-niemand",
    beeld: {
      src: "img/vragen/waarom-vertrouw-ik-niemand.jpg"
    },
    vraag: "Waarom vertrouw ik niemand?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vertrouwen",
      "samenwerking",
      "hechting",
      "wantrouwen",
      "veiligheid",
      "relaties"
    ],
    kort: "Moeite met vertrouwen is een logisch gevolg wanneer de mensen die je het dichtst stonden — ouders, verzorgers — je teleurstelden of beschadigden. Vertrouwen is te leren, maar het vraagt tijd en kleine, veilige ervaringen.",
    blokken: [
      {
        tekst: "Je houdt mensen op afstand. Zelfs degenen die 'goed' lijken, vertrouw je niet echt. Intiem worden voelt gevaarlijk. Je test mensen, of trekt je terug voordat zij het kunnen doen. Soms voel je je eenzaam, maar openheid voelt nog gevaarlijker."
      },
      {
        kop: "Vertrouwen als overlevingsles",
        tekst: "Vertrouwen leer je in je eerste relaties. Als de mensen die je moest vertrouwen — ouders, verzorgers — onvoorspelbaar, afwijzend of schadelijk waren, leerde je: vertrouwen is gevaarlijk. Dat was een slimme conclusie voor een kind. Als volwassene beschermt hetzelfde patroon je tegen teleurstelling — maar ook tegen echte verbinding."
      },
      {
        kop: "Vertrouwen is geleidelijk te bouwen",
        tekst: "Vertrouwen komt niet terug door je te dwingen 'gewoon te vertrouwen'. Het groeit via kleine, herhaalde ervaringen van betrouwbaarheid: iemand die doet wat ze beloven, die blijft als het moeilijk wordt, die je grenzen respecteert. Begin klein. Eén veilig persoon kan genoeg zijn om het ijs te breken."
      }
    ],
    doeDit: [
      "Erken dat wantrouwen een bescherming was, geen karakterfout.",
      "Begin met kleine vertrouwensstappen bij mensen die betrouwbaar lijken.",
      "Werk in therapie aan hechtingspatronen en vroege teleurstellingen."
    ],
    vermijd: [
      "Jezelf 'koud' of 'beschadigd' noemen.",
      "Iedereen op afstand houden en dan eenzaamheid verwijten aan anderen.",
      "Vertrouwen forceren bij mensen die rode vlaggen tonen."
    ],
    zegDit: [
      "“Vertrouwen voelt gevaarlijk omdat het ooit gevaarlijk was.”",
      "“Ik mag langzaam leren vertrouwen — stap voor stap.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hechtingsstijlen en hoe vertrouwen in relaties wordt opgebouwd."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsangst, wantrouwen en het terugwinnen van veiligheid in relaties."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "wat-is-verlatingsangst",
      "partner-trauma-steunen"
    ]
  },
  {
    id: "wat-is-verlatingsangst",
    beeld: {
      src: "img/vragen/wat-is-verlatingsangst.jpg"
    },
    vraag: "Wat is verlatingsangst?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "verlatingsangst",
      "afwijzing",
      "hechting",
      "angst",
      "relaties",
      "verlaten"
    ],
    kort: "Verlatingsangst is een diepe angst om achtergelaten, afgewezen of alleen te worden — vaak geworteld in vroege ervaringen waarin verbinding onbetrouwbaar was. Het drijft veel relationeel gedrag, van clinging tot afstand nemen.",
    blokken: [
      {
        tekst: "Een partner die even afstandelijk is, en je paniek voelt alsof alles instort. Vrienden die niet meteen reageren, en je denkt dat ze je haten. Je doet alles om niet verlaten te worden — of je trekt je juist terug voordat de ander kan gaan. Dat is verlatingsangst."
      },
      {
        kop: "Waar het vandaan komt",
        tekst: "Kinderen hebben een biologische behoefte aan consistente, betrouwbare verbinding. Wanneer ouders onvoorspelbaar waren — soms liefdevol, soms afwezig of afwijzend — leerde je dat liefde niet veilig is. Het zenuwstelsel koppelt nu elke dreiging van afstand aan die oude angst: als ik verlaten word, overleef ik het niet."
      },
      {
        kop: "Herkennen en kalmeren",
        tekst: "Verlatingsangst laat zich op verschillende manieren zien: een overdreven grote behoefte aan bevestiging, jaloezie, moeite met alleen zijn, snel afstand nemen als iemand te dichtbij komt, of juist partners kiezen die toch onbereikbaar zijn. Bewustwording is de eerste stap. Daarna: leren dat afstand niet altijd verlaten betekent, en innerlijke veiligheid opbouwen die niet helemaal afhangt van anderen."
      }
    ],
    doeDit: [
      "Herken het patroon: paniek bij afstand, extreme behoefte aan bevestiging.",
      "Leer onderscheid maken tussen 'afstand' en 'verlaten'.",
      "Bouw innerlijke veiligheid op via therapie en veilige relaties."
    ],
    vermijd: [
      "Clingend gedrag als enige strategie — het drijft mensen juist weg.",
      "Afstand nemen als enige bescherming — dat versterkt eenzaamheid.",
      "Verlatingsangst negeren en doen alsof je 'te needy' bent."
    ],
    zegDit: [
      "“Afstand betekent niet altijd verlaten.”",
      "“Ik ben bang, maar ik ben veilig. De angst komt uit het verleden.”"
    ],
    bronnen: [
      {
        boek: "journey-abandonment",
        detail: "Over de oorsprong en heling van verlatingsangst."
      },
      {
        boek: "hold-me-tight",
        detail: "Over hechtingsangst in relaties en hoe partners samen veiligheid opbouwen."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "waarom-vertrouw-ik-niemand",
      "people-pleasing-herkennen"
    ]
  },
  {
    id: "people-pleasing-herkennen",
    beeld: {
      src: "img/vragen/people-pleasing-herkennen.jpg"
    },
    vraag: "Hoe herken ik people-pleasing?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "people-pleasing",
      "pleasen",
      "fawn",
      "grenzen",
      "aanpassen",
      "behagen"
    ],
    kort: "People-pleasing is het automatisch prioriteit geven aan andermans behoeften, gevoelens en goedkeuring boven je eigen. Het voelt als vriendelijkheid, maar is vaak een overlevingsstrategie die je uitput en van jezelf af snijdt.",
    blokken: [
      {
        tekst: "Je zegt ja terwijl je nee voelt. Je anticipeert op wat anderen nodig hebben voordat ze het vragen. Je voelt je schuldig als iemand teleurgesteld is — zelfs als je niets fout deed. Je weet soms niet eens wat jij zelf wilt. People-pleasing voelt als 'aardig zijn', maar het kost je jezelf."
      },
      {
        kop: "Pleasen als overleving",
        tekst: "People-pleasing is de fawn-respons: anderen tevredenstellen om gevaar af te wenden. Voor een kind in een onveilige omgeving was aanpassen en behagen vaak de slimste manier om verbonden en veilig te blijven. Het patroon schakelt nu nog automatisch aan — ook waar het niet meer nodig is."
      },
      {
        kop: "Herken de signalen",
        tekst: "Typische tekenen: je voelt je verantwoordelijk voor andermans gevoelens; je vermijdt conflict ten koste van alles; je voelt je schuldig als je een grens stelt; je weet niet wat je zelf nodig hebt; je bent uitgeput door anderen helpen; je voelt je waardeloos als iemand teleurgesteld is. Herkenning is de eerste stap naar verandering — niet door hardere grenzen te forceren, maar door geleidelijk te leren wat jij nodig hebt."
      }
    ],
    doeDit: [
      "Let op automatisch ja-zeggen en schuldgevoel bij nee.",
      "Vraag jezelf regelmatig: 'wat wil ík?'",
      "Oefen kleine grenzen in veilige situaties."
    ],
    vermijd: [
      "People-pleasing verwarren met echte vriendelijkheid.",
      "Jezelf 'egoïstisch' noemen als je je eigen behoeften noemt.",
      "Alles in één keer veranderen — begin klein."
    ],
    zegDit: [
      "“Ik hoef niet iedereen tevreden te stellen om veilig te zijn.”",
      "“Wat heb ík nodig?”"
    ],
    bronnen: [
      {
        boek: "disease-to-please",
        detail: "Over people-pleasing herkennen en doorbreken."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de fawn-respons en het herstellen van gezonde grenzen."
      }
    ],
    gerelateerd: [
      "kan-ik-geen-nee-zeggen",
      "innerlijke-criticus",
      "narcistische-ouder-betekenis"
    ]
  },
  {
    id: "trauma-seksualiteit-intimiteit",
    beeld: {
      src: "img/vragen/trauma-seksualiteit-intimiteit.jpg"
    },
    vraag: "Trauma en seksualiteit/intimiteit — wat moet ik weten?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "intimiteit",
      "seksualiteit",
      "lichaam",
      "grenzen",
      "veiligheid",
      "relaties"
    ],
    kort: "Trauma — vooral seksueel of in vroege hechting — kan intimiteit ingewikkeld maken: verdoofdheid, angst, triggers, of juist grenzeloosheid. Je lichaam reageert op oude ervaringen. Dat is begrijpelijk en bespreekbaar in goede hulp.",
    blokken: [
      {
        tekst: "Intimiteit — fysiek of emotioneel — kan na trauma verwarrend zijn. Sommigen vermijden het volledig. Anderen voelen niets, of juist een compulsieve behoefte. Triggers kunnen onverwacht opduiken. Schaamte maakt het moeilijk om erover te praten, zelfs met een partner."
      },
      {
        kop: "Hoe trauma intimiteit beïnvloedt",
        tekst: "Het lichaam onthoudt wat het brein verdrongen heeft. Aanraking, nabijheid, kwetsbaarheid — dit alles kan het alarm activeren. Seksueel trauma kan specifieke triggers achterlaten. Maar ook niet-seksueel trauma — verwaarlozing, emotionele misbruik — kan intimiteit moeilijk maken, omdat dichtbij komen ooit gevaarlijk was."
      },
      {
        kop: "Veiligheid eerst",
        tekst: "Intimiteit vraagt veiligheid — en dat bouw je op, niet forceert. Communiceer met een partner over grenzen en triggers. Ga in je eigen tempo. Somaatische therapie en traumagerichte behandeling kunnen helpen het lichaam opnieuw veilig te laten voelen bij nabijheid. Je hoeft dit niet alleen uit te zoeken."
      }
    ],
    doeDit: [
      "Erken dat moeite met intimiteit een trauma-signaal kan zijn, geen 'storing'.",
      "Communiceer grenzen en triggers met een veilige partner.",
      "Zoek traumagerichte hulp als intimiteit je leven of relatie beperkt."
    ],
    vermijd: [
      "Jezelf forceren 'normaal' te zijn.",
      "Intimiteit vermijden zonder te begrijpen waarom.",
      "Schaamte gebruiken als reden om het nooit te bespreken."
    ],
    zegDit: [
      "“Mijn lichaam reageert op het verleden — dat is niet mijn schuld.”",
      "“Ik heb tijd en veiligheid nodig. Dat mag.”"
    ],
    bronnen: [
      {
        boek: "in-an-unspoken-voice",
        detail: "Over het lichaam, seksualiteit en trauma, bekeken vanuit het lichaam."
      },
      {
        boek: "emotional-incest",
        detail: "Over grensoverschrijdende dynamiek en de impact op latere intimiteit."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over hechting, lichaam en veiligheid in nabijheid."
      }
    ],
    gerelateerd: [
      "trauma-lichamelijke-klachten",
      "steeds-onveilige-relaties",
      "wat-is-een-trigger"
    ]
  },
  {
    id: "vergeven-om-te-helen",
    beeld: {
      src: "img/vragen/vergeven-om-te-helen.jpg"
    },
    vraag: "Moet ik mijn ouders vergeven om te helen?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "vergeving",
      "ouders",
      "heling",
      "boosheid",
      "druk",
      "keuze"
    ],
    kort: "Nee — vergeving is geen verplichting voor herstel. Heling gaat over jouw verwerking, grenzen en welzijn, niet over het vrijpleiten van wie je pijn deed. Vergeving mag een keuze zijn, nooit een eis.",
    blokken: [
      {
        tekst: "Overal hoor je het: 'Je moet vergeven om verder te kunnen.' 'Houdt bitterheid je gevangen.' Alsof herstel pas begint wanneer je de ander genade schenkt. Voor veel mensen met trauma voelt dat als een tweede wond — alsof je nu ook nog verantwoordelijk bent voor het gevoel van je ouder."
      },
      {
        kop: "Vergeving is geen voorwaarde",
        tekst: "Heling en vergeving zijn niet hetzelfde. Je kunt diep helen — je leven terugkrijgen, triggers verminderen, relaties verbeteren — zonder je ouders te vergeven. Vergeving is, als het al gebeurt, een mogelijk gevolg van heling, niet de ingang. Sommigen komen er nooit aan toe, en dat is oké."
      },
      {
        kop: "Wat wél helpt",
        tekst: "Wat helpt is: je boosheid en verdriet erkennen, grenzen stellen, stoppen met jezelf de schuld geven, en werken aan je eigen welzijn. Dat kan betekenen contact verminderen of verbreken met schadelijke ouders — dat is geen falen, maar zelfbescherming. Vergeving, als je het ooit overweegt, moet op jouw voorwaarden zijn — niet op die van anderen."
      }
    ],
    doeDit: [
      "Geef jezelf toestemming om níet te vergeven als dat niet voelt.",
      "Richt je op je eigen heling, niet op het gevoel van je ouder.",
      "Stel grenzen — ook dat is een vorm van gezondheid."
    ],
    vermijd: [
      "Vergeving forceren omdat anderen het van je verwachten.",
      "Denken dat boosheid houden je gevangen houdt — boosheid kan ook beschermen.",
      "Contact blijven onderhouden met schadelijke ouders 'omdat je moet vergeven'."
    ],
    zegDit: [
      "“Ik hoef niet te vergeven om te helen.”",
      "“Mijn heling gaat over mij — niet over hun gevoel.”"
    ],
    bronnen: [
      {
        boek: "its-not-your-fault",
        detail: "Over schaamte loslaten zonder vergeving te forceren."
      },
      {
        boek: "carefrontation",
        detail: "Over gezonde grenzen stellen richting ouders, los van vergeving."
      },
      {
        boek: "break-the-cycle",
        detail: "Over heling en doorbreken zonder de ander te moeten vrijpleiten."
      }
    ],
    gerelateerd: [
      "boos-en-liefde-ouders",
      "narcistische-ouder-betekenis",
      "hoe-lang-duurt-herstel"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 5
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_5 = [
  {
    id: "trauma-werk-burnout",
    beeld: {
      src: "img/vragen/trauma-werk-burnout.jpg"
    },
    vraag: "Heeft trauma te maken met mijn burn-out of problemen op het werk?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "burn-out",
      "werk",
      "uitputting",
      "zenuwstelsel",
      "hyperalert",
      "functioneren"
    ],
    kort: "Trauma en burn-out overlappen vaak: een zenuwstelsel dat jaren op scherp stond, raakt op den duur leeg. Werk kan triggers zijn, maar ook de plek waar je lichaam eindelijk 'nee' zegt.",
    blokken: [
      {
        tekst: "Je functioneerde jarenlang — soms uitstekend — en ineens val je uit. Concentratie weg, prikkelgevoelig, emotioneel leeg, fysiek uitgeput. Burn-out klinkt als 'te veel gewerkt', maar achter veel uitputting schuilt vaak een lichaam dat al lang te veel draagt."
      },
      {
        kop: "Het zenuwstelsel betaalt de rekening",
        tekst: "Trauma houdt je systeem in een staat van waakzaamheid of constante aanpassing. Op werk leerde je misschien overleven door presteren, pleasen of doorgaan. Dat kost enorm veel energie. Burn-out is dan niet alleen 'te veel uren', maar het moment waarop een systeem dat al jaren alarm draaide, zijn reserves op is."
      },
      {
        kop: "Werk als trigger én als spiegel",
        tekst: "Autoriteit, kritiek, onvoorspelbaarheid of machtsongelijkheid op het werk kunnen oude patronen activeren — ook als je baas 'niets kwaads' bedoelt. Tegelijk kan werk de enige plek zijn geweest waar je controle voelde, waardoor je daar al je kracht naartoe stuurde. Herstel vraagt vaak beide: je lichaam kalmeren én je grenzen op werk opnieuw leren kennen."
      }
    ],
    doeDit: [
      "Laat lichamelijke en psychische klachten medisch uitsluiten en bespreek burn-out met huisarts of arbeidsarts.",
      "Onderzoek welke werksituaties je zenuwstelsel activeren — dat is informatie, geen zwakte.",
      "Bouw rust en veiligheid op vóór je verwacht dat je weer 'volledig' presteert."
    ],
    vermijd: [
      "Denken dat uitval bewijs is dat je 'niet sterk genoeg' bent.",
      "Meteen terug duwen in hetzelfde tempo zodra je even op adem bent.",
      "Burn-out enkel als wilskwestie behandelen terwijl je lichaam duidelijk protesteert."
    ],
    zegDit: [
      "“Mijn uitputting is begrijpelijk. Mijn lichaam vraagt om rust.”",
      "“Ik hoef niet te bewijzen dat het erg genoeg is om te vertragen.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe chronische stress en trauma het zenuwstelsel uitputten."
      },
      {
        boek: "when-body-says-no",
        detail: "Over de link tussen emotionele belasting, aanpassen en lichamelijke uitval."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over secundaire uitputting bij mensen die lang voor anderen draaien."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "window-of-tolerance",
      "kan-ik-geen-nee-zeggen"
    ]
  },
  {
    id: "trauma-verslaving",
    beeld: {
      src: "img/vragen/trauma-verslaving.jpg"
    },
    vraag: "Heeft mijn verslaving te maken met trauma?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "verslaving",
      "middelen",
      "zelfmedicatie",
      "overleving",
      "afhankelijkheid",
      "coping"
    ],
    kort: "Verslaving is zelden 'alleen zwakte'. Vaak is het een manier om pijn, angst of leegte te dempen wanneer het zenuwstelsel geen andere uitweg zag. Begrijpen waarom je grijpt, is geen excuus — het is een start voor echte hulp.",
    blokken: [
      {
        tekst: "Alcohol, drugs, gokken, eten, scrollen, seks, werk — verslaving heeft vele gezichten. Wat ze gemeen hebben: iets in jou wordt tijdelijk stiller of verdraagbaarder. Dat is geen karakterfout; het is vaak de slimste oplossing die je op dat moment had."
      },
      {
        kop: "Zelfmedicatie van een pijnlijk systeem",
        tekst: "Trauma maakt het moeilijk om veilig te voelen in je eigen lijf. Middelen of compulsief gedrag kunnen overspoeling dempen, slaap forceren, leegte vullen of controle geven. Het probleem is niet dat je 'zwak' bent, maar dat de onderliggende pijn niet werd gezien — en je brein een snelle oplossing vond die op korte termijn werkt."
      },
      {
        kop: "Heling vraagt meer dan stoppen",
        tekst: "Alleen stoppen met het middel lost zelden de bron op; vaak keert de pijn terug, soms harder. Effectieve hulp combineert vaak verslavingsbegeleiding met traumagerichte zorg: leren wat je probeerde te verdoven, je zenuwstelsel stabiliseren en nieuwe manieren vinden om veilig te voelen. Schaamte vermindert de kans op hulp — mildheid vergroot hem."
      }
    ],
    doeDit: [
      "Zoek hulp die verslaving én onderliggende pijn serieus neemt — niet het ene of het andere.",
      "Wees eerlijk tegen hulpverleners over gebruik; zij zijn er niet om te oordelen.",
      "Bouw kleine, niet-destructieve manieren om je systeem te kalmeren (adem, beweging, veilig contact)."
    ],
    vermijd: [
      "Jezelf als 'hopeloos' bestempelen — verslaving is een overlevingsstrategie die vastliep.",
      "Trauma werk doen zonder stabiliteit rond middelengebruik als dat riskant is.",
      "Alleen willen stoppen uit schaamte, zonder steun of plan."
    ],
    zegDit: [
      "“Ik gebruik dit niet omdat ik dom ben, maar omdat het ooit hielp.”",
      "“Ik verdien hulp voor beide: de pijn én het patroon eromheen.”"
    ],
    bronnen: [
      {
        boek: "in-an-unspoken-voice",
        detail: "Over verslaving als adaptieve reactie op overweldiging en pijn."
      },
      {
        boek: "myth-of-normal",
        detail: "Over trauma, afhankelijkheid en wat mensen nodig hebben om te helen."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de neurobiologie van zelfmedicatie na trauma."
      }
    ],
    gerelateerd: [
      "dissociatie-naast-mezelf",
      "window-of-tolerance",
      "trauma-eetproblemen"
    ]
  },
  {
    id: "trauma-eetproblemen",
    beeld: {
      src: "img/vragen/trauma-eetproblemen.jpg"
    },
    vraag: "Kan trauma te maken hebben met mijn eetproblemen?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "eten",
      "eetstoornis",
      "controle",
      "lichaam",
      "schaamte",
      "zelfmedicatie"
    ],
    kort: "Eetgedrag kan een manier zijn om gevoelens te regelen, controle terug te vinden of een lichaam dat onveilig voelt te beheersen. Dat betekent niet dat eten 'het echte probleem' is — vaak is het een boodschap van iets diepers.",
    blokken: [
      {
        tekst: "Te veel, te weinig, obsessief tellen, purgeren, of eten als enige troost — eetproblemen komen in veel vormen. Ze raken vaak aan schaamte over het lichaam, controlebehoefte en het gevoel dat je innerlijk 'te veel' bent."
      },
      {
        kop: "Het lichaam als slagveld",
        tekst: "Na trauma kan het lichaam voelen als iets dat je verraden heeft, dat zichtbaar maakt wat je liever verbergt, of dat pijn opslaat. Eten wordt dan een manier om dat lichaam te straffen, te troosten of te beheersen. Weinig eten kan controle geven; overeten kan leegte vullen; beide kunnen afhaken (dissociatie) of angst dempen."
      },
      {
        kop: "Meer dan wilskracht",
        tekst: "Eetproblemen zijn geen simpele keuze. Ze hangen samen met stress, hechting, schaamte en hoe je zenuwstelsel tot rust komt. Behandeling die alleen op gewicht of gedrag focust, mist vaak de kern. Traumagerichte en lichaamsgerichte hulp — naast eventueel specialistische eetstoorniszorg — kan helpen om onder de symptomen te werken aan veiligheid en zelfrespect."
      }
    ],
    doeDit: [
      "Zoek gespecialiseerde hulp bij vermoedens van een eetstoornis — dit is te ernstig om alleen te dragen.",
      "Let op wat je vlak vóór eten voelt: angst, leegte, woede, verdoofdheid?",
      "Behandel je lichaam als iets dat bescherming nodig had, niet als iets dat gestraft moet worden."
    ],
    vermijd: [
      "Denken dat 'gewoon normaler eten' de oplossing is zonder naar de onderliggende pijn te kijken.",
      "Schuld opbouwen na elke 'fout' — dat voedt vaak juist het patroon.",
      "Trauma bagatelliseren omdat 'het toch over eten gaat'."
    ],
    zegDit: [
      "“Mijn relatie met eten draagt een boodschap. Ik mag die serieus nemen.”",
      "“Mijn lichaam is geen vijand — het heeft bescherming nodig.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma je lichaamsbeeld beïnvloedt en het kalmeren van jezelf."
      },
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte rond het lichaam en hoe die patronen in stand houdt."
      },
      {
        boek: "running-on-empty",
        detail: "Over emotionele honger en behoeften die via andere wegen geprobeerd worden te stillen."
      }
    ],
    gerelateerd: [
      "trauma-verslaving",
      "innerlijke-criticus",
      "lichaam-reageert-zonder-gevaar"
    ]
  },
  {
    id: "trauma-chronische-pijn",
    beeld: {
      src: "img/vragen/trauma-chronische-pijn.jpg"
    },
    vraag: "Kan trauma chronische pijn veroorzaken of verergeren?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "chronische pijn",
      "lichaam",
      "spanningsklachten",
      "fibromyalgie",
      "zenuwstelsel",
      "psychosomatisch"
    ],
    kort: "Chronische pijn is niet 'ingebeeld'. Trauma kan het pijnalarm gevoeliger maken en spanning vasthouden in spieren en zenuwen. Lichaam en geest zijn één systeem — pijn vragen om beide serieus genomen te worden.",
    blokken: [
      {
        tekst: "Rugpijn die blijft, spanningshoofdpijn, buikklachten, fibromyalgie-achtige klachten zonder duidelijke oorzaak — veel mensen horen 'er is niets aan de hand' terwijl ze wél lijden. Dat is frustrerend en eenzaam."
      },
      {
        kop: "Een alarmsysteem dat blijft staan",
        tekst: "Trauma verandert hoe het brein pijn inschat en verwerkt. Het alarmsysteem kan blijven 'aan' staan, waardoor normale signalen als gevaar worden gelezen. Spanning die nooit volledig ontlaadt, kan zich opstapelen in het lichaam — in kaak, schouders, darmen, bekken. Dat is geen aanstellerij; het is neurobiologie."
      },
      {
        kop: "Beide kanten erkennen",
        tekst: "Psychosomatisch betekent niet 'niet echt'. Het betekent: je lichaam spreekt een taal die stress, angst en oude ervaringen mee inbouwt. Goede zorg combineert medisch onderzoek (om lichamelijke oorzaken uit te sluiten) met traumagerichte en lichaamsgerichte aanpakken — zodat je niet hoeft te kiezen tussen 'lichamelijk' of 'psychisch'."
      }
    ],
    doeDit: [
      "Laat ernstige of nieuwe klachten medisch onderzoeken.",
      "Zoek hulpverleners die lichaam én trauma begrijpen, zonder je klachten weg te relativen.",
      "Oefen zachte lichaamsgerichte methodes die spanning mogen laten zakken, in je eigen tempo."
    ],
    vermijd: [
      "Jezelf geloven als iemand zegt 'het zit tussen je oren' zonder je pijn te horen.",
      "Alles op trauma schuiven zonder medische controle.",
      "Door pijn heen duwen — je lichaam vraagt vaak om langzamer en zachter."
    ],
    zegDit: [
      "“Mijn pijn is echt, ook als de scan niets toont.”",
      "“Ik zoek zorg die mijn hele systeem ziet, niet alleen één symptoom.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over de relatie tussen stress, onderdrukte emoties en lichamelijke klachten."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over vastgehouden spanning en het lichaam dat trauma opslaat."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het pijn- en alarmsysteem beïnvloedt."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "medische-ingreep-trauma",
      "wat-is-somatische-therapie"
    ]
  },
  {
    id: "adhd-of-trauma",
    beeld: {
      src: "img/vragen/adhd-of-trauma.jpg"
    },
    vraag: "Heb ik ADHD of is het trauma? Hoe onderscheid je dat?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "ADHD",
      "diagnose",
      "concentratie",
      "hyperactiviteit",
      "overlap",
      "complex trauma"
    ],
    kort: "ADHD en trauma kunnen sterk op elkaar lijken: concentratieproblemen, rusteloosheid, impulsiviteit, vermijding. Soms is het één, soms het andere, vaak overlappen ze. Een zorgvuldige blik op je geschiedenis helpt — zonder jezelf in hokjes te persen.",
    blokken: [
      {
        tekst: "Je las over ADHD en herkende alles — of je kreeg het label, maar voelt dat 'iets anders' meespeelt. Dat is geen zeldzaamheid. Trauma en aandachtsproblemen delen veel symptomen, en complex trauma kan zelfs hersenontwikkeling beïnvloeden."
      },
      {
        kop: "Waarom het verwarrend is",
        tekst: "Hyperalertheid lijkt op hyperactiviteit. Dissociatie lijkt op dagdromen. Overlevingsmodus put uit en lijkt op concentratieverlies. Moeite om je emoties te kalmeren komt bij beide voor. Bij vroeg, herhaald trauma kan het moeilijk zijn te weten wat 'van nature' is en wat een aanpassing op stress werd."
      },
      {
        kop: "Diagnose is hulpmiddel, geen identiteit",
        tekst: "Een goede professional kijkt naar je ontwikkelingsgeschiedenis, wanneer klachten begonnen, en of trauma-symptomen (triggers, flashbacks, vermijding) meespelen. ADHD-medicatie kan soms helpen; soms maakt het angst erger. Behandeling die alleen het label behandelt en trauma negeert — of omgekeerd — mist vaak stukken. Beide kunnen waar zijn tegelijk."
      }
    ],
    doeDit: [
      "Zoek een hulpverlener die ADHD én trauma kan onderscheiden en overlappen erkent.",
      "Noteer wanneer concentratie wegvalt: bij stress, triggers, vermoeidheid of altijd?",
      "Behandel stabiliteit en veiligheid eerst als trauma duidelijk meespeelt."
    ],
    vermijd: [
      "Jezelf diagnosticeren via online tests en daarop conclusies bouwen.",
      "Denken dat één label alles verklaart.",
      "Trauma negeren omdat ADHD 'het antwoord' lijkt — of omgekeerd."
    ],
    zegDit: [
      "“Ik wil begrijpen wat er speelt — niet alleen een sticker op mijn voorhoofd.”",
      "“Mijn symptomen mogen meerdere verklaringen hebben.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe vroeg trauma aandacht, zelfbeheersing en het kalmeren van emoties beïnvloedt."
      },
      {
        boek: "deepest-well",
        detail: "Over de cumulatieve impact van stress op kinderontwikkeling en functioneren."
      },
      {
        boek: "myth-of-normal",
        detail: "Over diagnostische labels versus wat mensen werkelijk meemaakten."
      }
    ],
    gerelateerd: [
      "weinig-jeugdherinneringen",
      "trauma-werk-burnout",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "medische-ingreep-trauma",
    beeld: {
      src: "img/vragen/medische-ingreep-trauma.jpg"
    },
    vraag: "Kan een medische ingreep trauma veroorzaken?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "medisch",
      "operatie",
      "ziekenhuis",
      "medische trauma",
      "machteloosheid",
      "pijn"
    ],
    kort: "Ja. Medische situaties waarin je machteloos, alleen of niet gehoord bent, kunnen diep trauma nalaten — ook als de ingreep 'medisch succesvol' was. Je reactie is geen overdrijving.",
    blokken: [
      {
        tekst: "Een operatie, intensive care, miskraambehandeling, bevalling met ingrijpen, onverwachte diagnoses — soms verloopt alles 'volgens protocol', en toch blijf jij met angst, nachtmerries of een gevoel van verraad achter."
      },
      {
        kop: "Machteloosheid en verlies van controle",
        tekst: "Trauma ontstaat waar je overweldigd raakt en geen uitweg vindt. Op de operatietafel ben je afhankelijk, soms bewusteloos, soms in pijn zonder uitleg. Als je niet gerustgesteld, geïnformeerd of gerespecteerd werd, kan het zenuwstelsel die ervaring opslaan als gevaar — los van de medische uitkomst."
      },
      {
        kop: "Medisch trauma is onderbelicht",
        tekst: "Veel mensen schamen zich: 'anderen overleven erger'. Maar je lichaam weet niet wat 'normaal' hoort. Herkenning is belangrijk: medisch trauma bestaat echt en wordt erkend. EMDR, lichaamsgerichte (somatische) therapie of gespecialiseerde begeleiding kunnen helpen — naast eventueel contact met het ziekenhuis als dat veilig voelt."
      }
    ],
    doeDit: [
      "Erken dat je reactie geldig is, ook als de arts tevreden was over het resultaat.",
      "Zoek traumagerichte hulp als je vermijdt zorg, paniek voelt bij medische settings, of terugkerende beelden hebt.",
      "Bereid medische afspraken voor met iemand die je steunt, als dat kan."
    ],
    vermijd: [
      "Medische zorg vermijden tot het fysiek gevaarlijk wordt.",
      "Jezelf vertellen dat je dankbaar moet zijn en dus niet mag klagen.",
      "Aannemen dat 'technisch goed verlopen' automatisch betekent psychisch oké."
    ],
    zegDit: [
      "“Wat ik meemaakte, telde voor mijn lichaam — ook in het ziekenhuis.”",
      "“Ik mag hulp zoeken voor wat de ingreep met me deed.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over medische procedures en het vastleggen van machteloosheid in het zenuwstelsel."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over hoe ervaringen van onveiligheid en machteloosheid trauma vormen."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over het lichaam dat ingrijpen als bedreiging kan opslaan."
      }
    ],
    gerelateerd: [
      "wat-is-trauma-erg-genoeg",
      "trauma-chronische-pijn",
      "flashback-wat-doe-ik"
    ]
  },
  {
    id: "verlies-rouw-vs-trauma",
    beeld: {
      src: "img/vragen/verlies-rouw-vs-trauma.jpg"
    },
    vraag: "Wat is het verschil tussen rouw en trauma?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "rouw",
      "verlies",
      "trauma",
      "verdriet",
      "schok",
      "verwerking"
    ],
    kort: "Rouw is het natuurlijke verdriet om iets of iemand kwijt te zijn. Trauma ontstaat wanneer het verlies overweldigend, schokkend of verwarrend was — en het zenuwstelsel vastliep. Beide kunnen tegelijk spelen.",
    blokken: [
      {
        tekst: "Iemand overlijden, een relatie die eindigt, gezondheid die verandert — verlies hoort bij het leven. Rouw is het proces van wennen aan wat er niet meer is. Maar sommige verliezen voelen anders: alsof je vastzit, schrikt bij alles, of het niet kunt integreren."
      },
      {
        kop: "Rouw beweegt, trauma blijft hangen",
        tekst: "Bij gezonde rouw komen golven van verdriet, maar na verloop van tijd is er ook ruimte voor andere gevoelens en herinneringen. Bij traumatisch verlies — plotseling overlijden, geweld, verlies in isolatie, of verlies gekoppeld aan schuld — kan het zenuwstelsel blijven schrikken alsof het nú nog gebeurt. Flashbacks, vermijding en verdoofdheid passen daar eerder bij."
      },
      {
        kop: "Je hoeft niet te kiezen",
        tekst: "Rouw en trauma sluiten elkaar niet uit. Je kunt iemand missen én traumatisch zijn geschokt door hoe het ging. Traumagerichte rouwbegeleiding erkent beide: het verdriet om wat weg is, én de schok van hoe het verloren ging."
      }
    ],
    doeDit: [
      "Geef verdriet tijd — rouw heeft geen strak schema.",
      "Zoek hulp als je vastzit in angst, schuld, vermijding of herbeleving na verlies.",
      "Zoek steun bij mensen die zowel je verdriet als je schok mogen horen."
    ],
    vermijd: [
      "Jezelf haasten met 'weer verder' omdat anderen dat verwachten.",
      "Denken dat traumatisch rouwen betekent dat je de persoon niet 'goed genoeg' mist.",
      "Alcohol of isolatie als enige manier om de pijn te dragen."
    ],
    zegDit: [
      "“Ik mag rouwen én geschokt zijn — dat sluit elkaar niet uit.”",
      "“Verdriet hoort bij verlies. Vastzitten vraagt soms extra hulp.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe schokkend verlies anders wordt opgeslagen dan gewone rouw."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlies, hechting en de pijn van afwijzing of abrupte scheiding."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over hoe overweldigende ervaringen het verwerkingsvermogen raken."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "hoe-lang-duurt-herstel",
      "wat-is-trauma-erg-genoeg"
    ]
  },
  {
    id: "opvoeden-met-eigen-trauma",
    beeld: {
      src: "img/vragen/opvoeden-met-eigen-trauma.jpg"
    },
    vraag: "Hoe kan ik opvoeden terwijl ik zelf trauma heb?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "opvoeden",
      "ouderschap",
      "eigen trauma",
      "generaties",
      "triggers",
      "herstel"
    ],
    kort: "Je eigen pijn maakt je geen slechte ouder — maar onverwerkt trauma kan je reacties sturen voordat je het doorhebt. Bewustwording, steun en herstel zijn cadeaus aan jezelf én je kind.",
    blokken: [
      {
        tekst: "Je wilt het anders doen dan vroeger bij jou, en toch schiet je soms uit elke bocht: schreeuwen, bevriezen, overcompenseren of voelen dat je faalt. Dat is verwarrend en schuldig makend — maar ook heel menselijk."
      },
      {
        kop: "Kinderen activeren oude wonden",
        tekst: "Schreeuwende peuters, tiener-afstand, machteloosheid, slaaptekort — het kan oude gevoelens van onveiligheid, kleinheid of woede wakker maken. Je reageert dan soms op je eigen verleden in plaats of op je kind nú. Dat is geen bewijs dat je 'net je ouders' bent; het is een signaal dat je systeem hulp nodig heeft."
      },
      {
        kop: "Herstel is geen luxe maar basis",
        tekst: "Goed ouderschap betekent niet perfect zijn. Het betekent leren herstellen na fouten, je triggers kennen, en hulp zoeken. Door te werken aan je eigen rust — jezelf leren kalmeren — geef je je kind iets wat misschien aan jou ontbrak: een ouder die terugkomt, uitlegt en de band herstelt. Dat doorbreekt generaties."
      }
    ],
    doeDit: [
      "Leer je triggers herkennen vóór je reageert — pauze is oké.",
      "Herstel de band na een foute reactie: bied troost en verantwoordelijkheid.",
      "Zoek traumagerichte therapie of oudergroepen; je hoeft dit niet alleen te doen."
    ],
    vermijd: [
      "Overcompenseren door alles toe te staan uit schuld.",
      "Jezelf bestraffen na elke fout — dat maakt je onvoorspelbaarder, niet beter.",
      "Denken dat je eerst 'helemaal genezen' moet zijn om ouder te mogen zijn."
    ],
    zegDit: [
      "“Ik werd boos, dat lag niet aan jou. Ik kalmeer nu.”",
      "“Ik leer ook. We proberen het samen opnieuw.”"
    ],
    bronnen: [
      {
        boek: "break-the-cycle",
        detail: "Over generatietrauma doorbreken en bewuster ouderschap."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over hoe vroege ervaringen doorwerken in latere relaties, ook met kinderen."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen bij kinderen én ouders tegelijk."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "steeds-onveilige-relaties",
      "secondary-trauma"
    ]
  },
  {
    id: "secondary-trauma",
    beeld: {
      src: "img/vragen/secondary-trauma.jpg"
    },
    vraag: "Wat is secondary trauma — en kan ik dat als naaste of hulpverlener krijgen?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "secondary trauma",
      "hulpverlener",
      "naaste",
      "compassion fatigue",
      "uitputting",
      "overname"
    ],
    kort: "Secondary trauma ontstaat wanneer iemand anders zijn pijn zo diep op je inwerkt dat jij zelf symptomen krijgt. Hulpverleners én naasten zijn kwetsbaar — het is geen zwakte, maar een teken dat je grenzen overschreden zijn.",
    blokken: [
      {
        tekst: "Je luistert, helpt, bent er — en merkt dat je zelf slechter slaapt, angstiger bent, prikkelbaarder wordt, of de verhalen van de ander als flashbacks meedraagt. Misschien voel je je leeg, cynisch of emotioneel afgesloten."
      },
      {
        kop: "Meeleven zonder buffer",
        tekst: "Mensen zijn sociale wezens: we resoneren met elkaars emoties. Dat is mooi, maar zonder herstel en grenzen kan het zenuwstelsel van de helper zelf gaan 'schrikken'. Secondary trauma — ook wel vicarious trauma genoemd — betekent dat je de impact van andermans trauma in je eigen lijf draagt."
      },
      {
        kop: "Bescherming is professioneel én liefdevol",
        tekst: "Voor hulpverleners horen supervisie, collega's en eigen therapie bij het vak. Voor naasten geldt: je bent geen onuitputtelijke bron. Steun zoeken, pauzes nemen, en professionele hulp voor jezelf is geen verraad aan degene die je liefhebt — het maakt duurzame zorg mogelijk."
      }
    ],
    doeDit: [
      "Let op eigen signalen: uitputting, nachtmerries, vermijding, cynisme.",
      "Zoek supervisie, collegiale steun of eigen therapie als je veel met trauma werkt.",
      "Als naaste: spreek af over grenzen en zoek zelf ook een luisterend oor."
    ],
    vermijd: [
      "Denken dat 'goede' hulpverleners of partners alles aankunnen.",
      "De ander zijn enige steun zijn — dat overbelast jullie beiden.",
      "Symptomen negeren tot je zelf uitvalt."
    ],
    zegDit: [
      "“Ik wil je steunen, en ik heb ook zorg voor mezelf nodig.”",
      "“Wat ik voel, is een signaal — geen falen.”"
    ],
    bronnen: [
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over uitputting en secundaire stress bij zorgverleners."
      },
      {
        boek: "carefrontation",
        detail: "Over grenzen stellen in helpende relaties zonder de band te breken."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma zich verspreidt via relaties en nabijheid."
      }
    ],
    gerelateerd: [
      "partner-trauma-steunen",
      "trauma-werk-burnout",
      "opvoeden-met-eigen-trauma"
    ]
  },
  {
    id: "dissociatieve-identiteit",
    beeld: {
      src: "img/vragen/dissociatieve-identiteit.jpg"
    },
    vraag: "Wat is dissociatieve identiteit — en heb ik dat?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "DID",
      "dissociatieve identiteit",
      "delen",
      "amnesie",
      "identiteit",
      "complex trauma"
    ],
    kort: "Dissociatieve identiteitsstoornis (DIS/DID) is een ernstige vorm van dissociatie waarbij verschillende 'delen' of identiteiten ontstonden om overweldigend trauma te overleven. Het is zeldzaam, vaak verkeerd begrepen, en niet iets wat je via een online checklist vaststelt.",
    blokken: [
      {
        tekst: "Je hoorde over 'meervoudige persoonlijkheid', las over tijdverlies, stemmen, of delen van je leven die je niet herinnert — en vraagt je af: heb ik dat? Die vraag verdient een voorzichtig, respectvol antwoord."
      },
      {
        kop: "Extreme dissociatie als overleving",
        tekst: "DIS ontstaat meestal na herhaald, vroeg trauma, vaak in situaties waar een kind geen fysieke uitweg had. Het zenuwstelsel splitst ervaringen af in deeltjes — soms met aparte gevoelens, gedragingen of herinneringen — zodat het geheel draaglijk blijft. Dat is geen aanstellerij; het is een extreme bescherming."
      },
      {
        kop: "Niet elke dissociatie is DIS",
        tekst: "Veel mensen met trauma dissociëren: afwezig zijn, leegte, tijdverlies, 'delen' in de zin van IFS. Dat betekent niet automatisch DIS. Echte DIS kenmerkt zich door duidelijke, blijvende aparte identiteiten, geheugengaten tussen die toestanden, en een grote impact op het dagelijks leven. Diagnose hoort bij een gespecialiseerde professional — niet bij films of sensatie."
      }
    ],
    doeDit: [
      "Zoek een traumatherapeut met kennis van dissociatie als je tijdverlies of sterke identiteitswisselingen ervaart.",
      "Wees voorzichtig met zelfdiagnose via social media — DIS wordt online vaak vereenvoudigd.",
      "Werk aan stabiliteit en veiligheid; dat is de basis vóór dieper delenwerk."
    ],
    vermijd: [
      "Jezelf labelen op basis van losse symptomen.",
      "DIS romantiseren of bagatelliseren — het is ernstig en behandelbaar.",
      "Therapie zoeken bij iemand zonder dissociatieve expertise als DIS vermoed wordt."
    ],
    zegDit: [
      "“Ik wil begrijpen wat er in mij gebeurt — zonder paniek of schaamte.”",
      "“Mijn ervaringen zijn echt, ook als de naam moeilijk te vinden is.”"
    ],
    bronnen: [
      {
        boek: "healing-fragmented-selves",
        detail: "Over werken met dissociatieve delen en het opsplitsen na trauma."
      },
      {
        boek: "no-bad-parts",
        detail: "Over delenwerk en het begrijpen van beschermende identiteiten — met aandacht voor het verschil met ernstige dissociatie."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over dissociatie en gefaseerd werken bij complex trauma."
      }
    ],
    gerelateerd: [
      "dissociatie-naast-mezelf",
      "weinig-jeugdherinneringen",
      "innerlijke-criticus"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 6
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_6 = [
  {
    id: "wat-verwacht-van-emdr",
    beeld: {
      src: "img/vragen/wat-verwacht-van-emdr.jpg"
    },
    vraag: "Wat kan ik verwachten van EMDR?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "EMDR",
      "therapie",
      "verwerking",
      "herinneringen",
      "verwachtingen",
      "bilateral"
    ],
    kort: "EMDR helpt je brein traumatische herinneringen opnieuw te verwerken, vaak sneller dan alleen praten. Het is geen tovermiddel: stabiliteit, vertrouwen in je therapeut en realistische verwachtingen maken het verschil.",
    blokken: [
      {
        tekst: "EMDR staat voor Eye Movement Desensitization and Reprocessing — een veelgebruikte traumatherapie waarbij je een heftige herinnering oproept terwijl je ogen een beweging volgen, of terwijl je tikken voelt of horen. Het klinkt vreemd, maar onderzoek toont vaak goede resultaten bij trauma."
      },
      {
        kop: "Wat gebeurt er in een sessie?",
        tekst: "Eerst bouw je met je therapeut stabiliteit op: een veiligheidsanker, copingvaardigheden, vertrouwen. Daarna kies je samen een herinnering. Je brengt het beeld, de gedachte en het lichaamsgevoel in je op, terwijl je de bilaterale stimulatie doet. Herinneringen kunnen veranderen van intensiteit; soms komen nieuwe inzichten. Je mag pauzeren. Je blijft de hele sessie bij bewustzijn."
      },
      {
        kop: "Wat EMDR wel en niet is",
        tekst: "EMDR is geen hypnose en je hoeft niet alles opnieuw te beleven. Het werkt het best bij mensen die enigszins stabiel zijn en een goede therapeutische relatie hebben. Soms voel je je na een sessie moe of emotioneel; soms merk je na enkele sessies al verschil, soms duurt het langer. Het is één methode — geen garantie op 'genezing in vijf sessies'."
      }
    ],
    doeDit: [
      "Zoek een EMDR-therapeut met erkende opleiding en traumadiagnose-ervaring.",
      "Bespreek vooraf je stabiliteit, medicatie en wat je hoopt te bereiken.",
      "Plan rust na zware sessies en houd contact met je therapeut bij terugval."
    ],
    vermijd: [
      "Denken dat EMDR herinneringen 'wist' — het verandert vooral hoe ze je raken.",
      "Diep duiken zonder stabiliteit of zonder vertrouwen in je therapeut.",
      "Stoppen na één moeilijke sessie zonder het met je therapeut te bespreken."
    ],
    zegDit: [
      "“Ik mag vragen wat we vandaag doen en wanneer we pauzeren.”",
      "“Als het te veel wordt, zeg ik dat — dat hoort bij EMDR.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over EMDR en andere manieren om traumatische herinneringen te herverwerken."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over wat herstel vraagt en waarom relationele veiligheid centraal staat."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd werken vóór en na intensieve verwerking."
      }
    ],
    gerelateerd: [
      "moet-ik-herbeleven",
      "therapie-erger-maken",
      "wat-is-somatische-therapie"
    ]
  },
  {
    id: "wat-is-somatische-therapie",
    beeld: {
      src: "img/vragen/wat-is-somatische-therapie.jpg"
    },
    vraag: "Wat is lichaamsgerichte (somatische) therapie — en wanneer helpt het?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "somatisch",
      "lichaamstherapie",
      "SE",
      "zenuwstelsel",
      "sensaties",
      "ontlading"
    ],
    kort: "Lichaamsgerichte therapie (ook wel 'somatische' therapie) werkt via het lichaam: wat je voelt, beweging en het zenuwstelsel. Handig wanneer praten alleen niet genoeg is, of wanneer je lichaam 'vast' zit terwijl je hoofd al begrijpt wat er gebeurde.",
    blokken: [
      {
        tekst: "Je begrijpt rationeel wat er gebeurde, maar je lichaam schrikt nog steeds, verstijft of zakt weg. Deze lichaamsgerichte therapie richt zich op díe laag: wat je voelt in spieren, adem, warmte, trilling — en hoe je systeem spanning kan afmaken en loslaten."
      },
      {
        kop: "Het lichaam als ingang",
        tekst: "Methodes zoals Somatic Experiencing (SE) gaan ervan uit dat trauma vastgehouden overlevingsenergie is. Door zachtjes sensaties te volgen — zonder alles opnieuw te beleven — kan het zenuwstelsel leren dat het gevaar voorbij is. Andere vormen, zoals somatische IFS of lichaamsgerichte psychotherapie, combineren lichaamswerk met gesprek of delenwerk."
      },
      {
        kop: "Voor wie is het?",
        tekst: "Lichaamsgerichte therapie kan helpen bij flashbacks, langdurige spanning, afhaken (dissociatie), slaapproblemen en het gevoel 'vast' te zitten. Het vraagt wel dat je geleidelijk leert voelen wat soms lang vermeden werd — daarom hoort het vaak in een veilige therapeutische relatie, in een tempo dat jij aankan."
      }
    ],
    doeDit: [
      "Zoek een therapeut opgeleid in SE, somatische IFS of vergelijkbare methodes.",
      "Merk op wat je lichaam doet vóór je het uitlegt — dat is waardevolle informatie.",
      "Ga langzaam: kleine sensaties tellen meer dan grote doorbraken."
    ],
    vermijd: [
      "Denken dat je eerst alles moet kunnen benoemen voordat lichaamswerk mag.",
      "Therapeuten die je dwingen intense ontlading na te jagen.",
      "Lichaamswerk zonder enige stabiliteit als je sterk dissocieert."
    ],
    zegDit: [
      "“Ik merk spanning in mijn … — kunnen we daar beginnen?”",
      "“Dit tempo is genoeg voor vandaag.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over Somatic Experiencing en het voltooien van vastgelopen overlevingsreacties."
      },
      {
        boek: "somatic-ifs",
        detail: "Over het combineren van lichaamswerk met delenwerk."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel kalmeren via kleine, herhaalde ervaringen van veiligheid."
      }
    ],
    gerelateerd: [
      "lichaam-reageert-zonder-gevaar",
      "dissociatie-naast-mezelf",
      "wat-verwacht-van-emdr"
    ]
  },
  {
    id: "medicatie-bij-trauma",
    beeld: {
      src: "img/vragen/medicatie-bij-trauma.jpg"
    },
    vraag: "Helpt medicatie bij trauma — en wanneer?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "medicatie",
      "antidepressiva",
      "slaap",
      "angst",
      "psychiatrie",
      "behandeling"
    ],
    kort: "Medicatie lost trauma zelden op, maar kan soms de randen verzachten: slaap, angst, depressie of prikkelbaarheid. Het is een steuntje, geen vervanging voor traumagerichte zorg of relationele veiligheid.",
    blokken: [
      {
        tekst: "Je vraagt je af of een pil je kan helpen slapen, kalmeren of functioneren. Medicatie kan een rol spelen bij trauma — maar het verhaal is genuanceerder dan 'pillen of therapie'."
      },
      {
        kop: "Symptomen dempen, niet de kern genezen",
        tekst: "Antidepressiva, angstremmers of slaapmiddelen kunnen soms ruimte creëren wanneer je zenuwstelsel te luid schreeuwt om te kunnen werken aan herstel. Ze veranderen zelden de onderliggende herinneringen of patronen. Daarvoor blijven traumatherapie, lichaamswerk en steun nodig."
      },
      {
        kop: "Samen beslissen met een arts",
        tekst: "Medicatie heeft bijwerkingen en interacties; wat voor de een werkt, helpt de ander niet. Een psychiater of huisarts kan meedenken over wat nu het meest urgent is — slaap, paniek, depressie — en of medicatie op korte of langere termijn zinvol is. Stoppen of wisselen hoort altijd begeleid te gebben."
      }
    ],
    doeDit: [
      "Bespreek medicatie openlijk met een arts, inclusief trauma-achtergrond.",
      "Combineer medicatie waar mogelijk met traumagerichte therapie — niet als óf-óf.",
      "Houd bij wat verandert: slaap, prikkelbaarheid, energie — dat helpt bij dosering."
    ],
    vermijd: [
      "Medicatie als enige oplossing zien en therapie uitstellen.",
      "Zelf stoppen of dosering wijzigen zonder medisch advies.",
      "Denken dat medicatie gebruiken betekent dat je 'faalt' in herstel."
    ],
    zegDit: [
      "“Ik zoek wat me nu stabiliteit geeft — medicatie kan een deel zijn.”",
      "“Ik wil begrijpen wat dit doet en wat het níet oplost.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over medicatie, neurobiologie en de grenzen van farmacologische hulp."
      },
      {
        boek: "myth-of-normal",
        detail: "Over wanneer medicatie helpt en wanneer de context — trauma, stress — genezen vraagt."
      },
      {
        boek: "in-an-unspoken-voice",
        detail: "Over het kalmeren van het zenuwstelsel en verschillende aanpakken."
      }
    ],
    gerelateerd: [
      "slaap-nachtmerries",
      "window-of-tolerance",
      "wat-verwacht-van-emdr"
    ]
  },
  {
    id: "wat-is-veiligheidsplan",
    beeld: {
      src: "img/vragen/wat-is-veiligheidsplan.jpg"
    },
    vraag: "Wat is een veiligheidsplan — en heb ik dat nodig?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "veiligheidsplan",
      "crisis",
      "coping",
      "flashback",
      "zelfbeschadiging",
      "noodplan"
    ],
    kort: "Een veiligheidsplan is een concreet stappenplan voor momenten waarop je overspoeld raakt, dissocieert of in crisis komt. Het is geen teken van zwakte — het is verstandig werken mét je zenuwstelsel in plaats van ertegen.",
    blokken: [
      {
        tekst: "Als de golf komt — flashback, paniek, drang tot zelfbeschadiging, afhaken (dissociatie) — is het moeilijk helder te denken. Een veiligheidsplan legt vóóraf vast wat je dan doet, wie je belt, en welke signalen waarschuwen dat het erger wordt."
      },
      {
        kop: "Wat staat erin?",
        tekst: "Typisch bevat een plan: vroege waarschuwingssignalen (sleeplessheid, prikkelbaarheid), copingstrategieën die werken (adem, kou, bewegen, muziek), mensen om te contacteren, professionele hulplijnen, en stappen om direct gevaar te vermijden. Het is persoonlijk — wat voor jou kalmeert, staat erin."
      },
      {
        kop: "Niet alleen voor 'acute crisis'",
        tekst: "Ook mensen die niet suïcidaal zijn, hebben baat bij een plan. Trauma-herstel gaat met golven; weten wat je doet als de golf komt, vermindert schaamte en chaos. Je therapeut kan helpen het op te stellen; sommige mensen hangen het thuis op of bewaren het in hun telefoon."
      }
    ],
    doeDit: [
      "Schrijf je plan op als je relatief stabiel bent — niet midden in een crisis.",
      "Deel het met één of twee vertrouwde mensen als dat veilig voelt.",
      "Oefen de stappen klein: als ademhaling helpt, gebruik die ook bij milde stress."
    ],
    vermijd: [
      "Denken dat een plan alleen voor 'echt ernstige' gevallen is.",
      "Het plan maken en nooit meer bekijken — update het als je leert wat werkt.",
      "Jezelf straffen als je het plan niet perfect volgt."
    ],
    zegDit: [
      "“Als het te veel wordt, doe ik dit — het staat op papier.”",
      "“Ik hoef niet helder te zijn om hulp te mogen vragen.”"
    ],
    bronnen: [
      {
        boek: "cptsd-coping-workbook",
        detail: "Over praktische copingplannen en crisisstrategieën bij complex trauma."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over stabiliteit opbouwen vóór diepere verwerking."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over aarden (grounding) en jezelf kalmeren bij emotionele flashbacks."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "dissociatie-naast-mezelf",
      "window-of-tolerance"
    ]
  },
  {
    id: "ondersteunend-netwerk-opbouwen",
    beeld: {
      src: "img/vragen/ondersteunend-netwerk-opbouwen.jpg"
    },
    vraag: "Hoe bouw ik een ondersteunend netwerk op na trauma?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "netwerk",
      "steun",
      "verbinding",
      "eenzaamheid",
      "vertrouwen",
      "community"
    ],
    kort: "Herstel gebeurt zelden alleen. Een netwerk bouw je niet in één klap — het groeit via kleine, herhaalde ervaringen van veiligheid: één betrouwbaar persoon, één groep, één ritueel tegelijk.",
    blokken: [
      {
        tekst: "Trauma leerde je misschien dat mensen onbetrouwbaar zijn, of dat kwetsbaarheid gevaarlijk is. Daardoor trek je je terug — begrijpelijk, maar eenzaam. Een netwerk opbouwen voelt dan als een berg, terwijl het eerder een reeks kleine stappen is."
      },
      {
        kop: "Kwaliteit boven kwantiteit",
        tekst: "Eén persoon bij wie je ademhaalt zonder masker is waardevoller dan twintig oppervlakkige contacten. Begin daar: een vriend, collega, therapeut, peer-groep, of online community met duidelijke grenzen. Veiligheid voel je in je lijf — niet alleen in woorden."
      },
      {
        kop: "Langzaam vertrouwen oefenen",
        tekst: "Deel klein, kijk wat er gebeurt, en breid uit als iemand betrouwbaar blijkt. Soms moet je oude contacten loslaten die je klein houden. Groepen rond trauma, hechting of herstel kunnen normaliseren wat je meemaakt — mits ze veilig en niet victim-blaming zijn."
      }
    ],
    doeDit: [
      "Identificeer één persoon of groep die redelijk veilig voelt — begin daar.",
      "Zoek peer-support of herstelgroepen met duidelijke regels en facilitators.",
      "Oefen 'micro-verbinding': korte check-ins, wandelingen, gedeelde routines."
    ],
    vermijd: [
      "Meteen je hele verhaal delen met iemand die dat nog niet aankan.",
      "Blijven in relaties die je systematisch klein maken of triggeren.",
      "Denken dat isolatie veiligheid ís — het beschermt soms, maar versterkt ook angst."
    ],
    zegDit: [
      "“Ik bouw langzaam aan mensen die ik kan vertrouwen.”",
      "“Ik hoef niet alles te delen om verbinding te mogen zoeken.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hoe hechting je keuzes in relaties kleurt — en hoe je bewuster kiest."
      },
      {
        boek: "hold-me-tight",
        detail: "Over veilige verbinding opbouwen in nabije relaties."
      },
      {
        boek: "running-on-empty",
        detail: "Over emotionele eenzaamheid en leren wat je nodig hebt van anderen."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "trauma-eenzaamheid",
      "partner-trauma-steunen"
    ]
  },
  {
    id: "trauma-eenzaamheid",
    beeld: {
      src: "img/vragen/trauma-eenzaamheid.jpg"
    },
    vraag: "Waarom voel ik me zo eenzaam na trauma?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "eenzaamheid",
      "isolatie",
      "verbinding",
      "schuld",
      "schamte",
      "afstand"
    ],
    kort: "Eenzaamheid na trauma is geen teken dat je 'niet leuk genoeg' bent. Vaak leerde je dat nabijheid gevaarlijk was, of voelt niemand begrijpen wat je meemaakte. Verbinding is te herstellen — stap voor stap.",
    blokken: [
      {
        tekst: "Om je heen zijn mensen, maar je voelt je toch alleen. Of je trekt je terug, vermijd je gesprekken, of speel je een rol die niemand raakt. Eenzaamheid na trauma is wijdverbreid — en diep menselijk."
      },
      {
        kop: "Bescherming die isolatie creëert",
        tekst: "Als vertrouwen vroeg werd geschonden, kan nabijheid angst geven. Afstand houden voelt dan veiliger dan kwetsbaar zijn. Tegelijk verlang je misschien naar begrip — maar schaamte of het gevoel 'niemand snapt het' houdt je stil. Dat is geen koppigheid; het is een overlevingsstrategie."
      },
      {
        kop: "Eenzaamheid is niet permanent",
        tekst: "Je brein en zenuwstelsel kunnen opnieuw leren dat verbinding veilig kan zijn — via kleine, positieve ervaringen. Dat hoeft niet met iedereen; soms is één goede therapeut, één vriend, of één groep genoeg om de eenzaamheid te verlichten. Eenzaamheid erkennen is al een stap naar buiten."
      }
    ],
    doeDit: [
      "Erken je eenzaamheid zonder jezelf te veroordelen — het is een signaal, geen faalscore.",
      "Zoek mensen of groepen waar trauma-begrip normaal is.",
      "Oefen kleine contactmomenten, ook als je je nog niet 'klaar' voelt."
    ],
    vermijd: [
      "Denken dat je eerst 'helemaal beter' moet zijn om erbij te mogen horen.",
      "Social media als vervanging voor echte verbinding gebruiken.",
      "Jezelf isoleren uit schaamte terwijl je steun nodig hebt."
    ],
    zegDit: [
      "“Ik ben eenzaam — dat zegt iets over wat ik nodig heb, niet over mijn waarde.”",
      "“Ik mag langzaam opnieuw verbinden.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over emotionele eenzaamheid en onvervulde hechtingsbehoeften."
      },
      {
        boek: "myth-of-normal",
        detail: "Over isolatie, schaamte en de menselijke behoefte aan verbinding."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsgevoelens en de angst om alleen te zijn."
      }
    ],
    gerelateerd: [
      "ondersteunend-netwerk-opbouwen",
      "steeds-onveilige-relaties",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "saboteren-goede-dingen",
    beeld: {
      src: "img/vragen/saboteren-goede-dingen.jpg"
    },
    vraag: "Waarom saboteer ik goede dingen in mijn leven?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "sabotage",
      "zelfdestructie",
      "succes",
      "veiligheid",
      "verdiende geluk",
      "patronen"
    ],
    kort: "Saboteren voelt als zelfdestructie, maar is vaak oude bescherming: als geluk vroeger gevaarlijk was, kan je systeem het nú nog steeds afwenden. Herkennen is de eerste stap naar andere keuzes.",
    blokken: [
      {
        tekst: "Net als het goed gaat — relatie, baan, rust — doe je iets dat het kapot maakt. Of je trekt je terug, start ruzie, stopt met therapie, of vindt een manier om het te laten mislukken. Het voelt irrationeel, en toch herhaalt het zich."
      },
      {
        kop: "Vertrouwd ≠ veilig",
        tekst: "Als je opgroeide in chaos, voelde rust misschien als 'te mooi om waar te zijn' — of als het moment vóór de volgende klap. Je zenuwstelsel koppelt geluk dan onbewust aan dreigend gevaar. Sabotage is soms een poging om controle terug te krijgen: liever zelf laten mislukken dan verrast worden."
      },
      {
        kop: "Delen die bang zijn voor verandering",
        tekst: "In delenwerk zie je sabotage vaak als een beschermer: een deel dat denkt dat succes je kwetsbaar maakt, zichtbaar maakt, of teleurstelling onverdraagbaar. Door dat deel te horen in plaats van het te bekampen, kun je langzaam leren dat veilig geluk bestaat — en dat terugval geen bewijs is dat je het niet verdient."
      }
    ],
    doeDit: [
      "Merk het patroon op zonder jezelf te veroordelen: 'dit is oude bescherming'.",
      "Praat met een therapeut over wat er gebeurt vlak vóór je sabotage.",
      "Vier kleine successen en blijf aanwezig — dat leert je lichaam nieuwe associaties."
    ],
    vermijd: [
      "Jezelf als 'zelfdestructief' labelen en opgeven.",
      "Grote veranderingen tegelijk forceren zonder steun.",
      "Denken dat je 'het niet verdient' — dat is vaak een oude boodschap, geen waarheid."
    ],
    zegDit: [
      "“Er is een deel van mij dat bang is voor goed — ik luister ernaar.”",
      "“Ik mag wennen aan rust, ook als dat eng voelt.”"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "Over beschermende delen die verandering tegenhouden."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over verdiende veiligheid en angst voor het goede."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over innerlijke overtuigingen die succes en geluk ondermijnen."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "steeds-onveilige-relaties",
      "perfectionisme-trauma"
    ]
  },
  {
    id: "perfectionisme-trauma",
    beeld: {
      src: "img/vragen/perfectionisme-trauma.jpg"
    },
    vraag: "Heeft mijn perfectionisme te maken met trauma?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "perfectionisme",
      "prestatiedruk",
      "controle",
      "fouten",
      "criticus",
      "overleving"
    ],
    kort: "Perfectionisme is vaak geen streven naar excellentie, maar angst: angst om afgewezen, gestraft of zichtbaar onvoldoende te zijn. Het hield je misschien veilig — maar kost nu veel te veel.",
    blokken: [
      {
        tekst: "Alles moet kloppen. Fouten voelen catastrofaal. Rust voelt als falen. Je herkent je in 'hoge standaarden', maar vanbinnen voelt het als overleven: als je perfect bent, ben je misschien veilig, liefbaar of niet de target."
      },
      {
        kop: "Perfectie als schild",
        tekst: "Kinderen in onvoorspelbare of kritische omgevingen leren soms: presteer, pas aan, maak geen fouten — dan overleef je. Perfectionisme is dan geen karaktereigenschap maar een pantser. Het beschermt tegen schaamte en afwijzing, maar sluit ook uit, put uit en maakt fouten ondraaglijk."
      },
      {
        kop: "Loslaten is een vaardigheid",
        tekst: "Minder perfect zijn voelt eerst als gevaar. Herstel betekent leren dat 'goed genoeg' veilig kan zijn, dat fouten niet je waarde bepalen, en dat de innerlijke criticus niet de baas hoeft te zijn. Dat gaat met kleine oefeningen: iets imperfect afleveren, hulp vragen, of stoppen vóór uitputting."
      }
    ],
    doeDit: [
      "Onderzoek waar je bang voor bent als je niet perfect bent — afwijzing, woede, schaamte?",
      "Oefen bewust 'goed genoeg' in lage-risico situaties.",
      "Werk met een therapeut aan de innerlijke criticus en onderliggende angst."
    ],
    vermijd: [
      "Perfectionisme romantiseren als 'hoge standaarden'.",
      "Jezelf pushen tot crash en dat dan weer 'falen' noemen.",
      "Denken dat mildheid voor jezelf luiheid is."
    ],
    zegDit: [
      "“Goed genoeg is vandaag genoeg.”",
      "“Een fout maakt mij niet waardeloos.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over perfectionisme en de innerlijke criticus bij complex trauma."
      },
      {
        boek: "disease-to-please",
        detail: "Over prestatiedruk, pleasen en angst om teleur te stellen."
      },
      {
        boek: "drama-gifted-child",
        detail: "Over kinderen die perfectionisme ontwikkelden om chaos te overleven."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "kan-ik-geen-nee-zeggen",
      "saboteren-goede-dingen"
    ]
  },
  {
    id: "zelfcompassie-hoe-begin",
    beeld: {
      src: "img/vragen/zelfcompassie-hoe-begin.jpg"
    },
    vraag: "Hoe leer ik zelfcompassie — waar begin ik?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "zelfcompassie",
      "zelfkritiek",
      "mildheid",
      "oefening",
      "schaamte",
      "herstel"
    ],
    kort: "Zelfcompassie is geen zachte luxe — het is tegengif voor trauma. Je begint niet met jezelf 'leuk' vinden, maar met één vriendelijke zin, één adem, één moment waarop je niet tegen jezelf vecht.",
    blokken: [
      {
        tekst: "Iedereen zegt 'wees lief voor jezelf', maar je innerlijke stem blijft hard. Zelfcompassie voelt dan als onbereikbaar, of als iets voor mensen die het 'minder erg' hadden. Toch is het een van de krachtigste hefbomen in herstel."
      },
      {
        kop: "Compassie is geen excuus",
        tekst: "Zelfcompassie betekent niet dat alles oké was of dat je geen verantwoordelijkheid draagt. Het betekent: je pijn erkennen zoals je die van een vriend zou erkennen. Trauma leerde je vaak het tegenovergestelde — hard zijn was overleven. Mildheid is een nieuwe spier."
      },
      {
        kop: "Klein beginnen, vaak herhalen",
        tekst: "Start met één hand op je hart, één zin ('dit is moeilijk, ik ben niet alleen'), of één vraag ('wat heb ik nú nodig?'). Het hoeft niet oprecht te voelen om te werken; herhaling leert je zenuwstelsel dat vriendelijkheid veilig kan zijn. Veel mensen oefenen dit het best met structuur: workbook, therapie, of dagelijkse mini-rituelen."
      }
    ],
    doeDit: [
      "Kies één vaste, kleine oefening — bijvoorbeeld drie rustige ademhalingen met een vriendelijke zin.",
      "Vraag: 'Hoe zou ik tegen een vriend praten die dit meemaakt?' — en richt dat zachtjes op jezelf.",
      "Zoek hulp als zelfkritiek zo hard is dat je er alleen niet uitkomt."
    ],
    vermijd: [
      "Zelfcompassie als nieuwe prestatie zien ('ik moet het goed doen').",
      "Jezelf straffen als mildheid niet meteen 'werkt'.",
      "Denken dat zelfhaat je motiveert — op lange termijn versterkt het trauma."
    ],
    zegDit: [
      "“Dit is moeilijk. Ik mag zacht zijn, ook al voelt het vreemd.”",
      "“Ik leer iets nieuws — dat vraagt tijd.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over zelfcompassie als kern van herstel bij complex trauma."
      },
      {
        boek: "no-bad-parts",
        detail: "Over mild leiden vanuit het Zelf in plaats van vechten met delen."
      },
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte loslaten en vriendelijker naar jezelf worden."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "perfectionisme-trauma",
      "hoe-lang-duurt-herstel"
    ]
  },
  {
    id: "wanneer-genoeg-hersteld",
    beeld: {
      src: "img/vragen/wanneer-genoeg-hersteld.jpg"
    },
    vraag: "Wanneer is traumaherstel 'genoeg'?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "herstel",
      "eindpunt",
      "genezen",
      "acceptatie",
      "groei",
      "verwachtingen"
    ],
    kort: "Herstel is zelden 'klaar' als een project. 'Genoeg' betekent meestal: het verleden neemt niet meer je hele leven over, je hebt keuze en verbinding terug, en je kunt met terugvallen omgaan zonder te verzinken.",
    blokken: [
      {
        tekst: "Je werkt al jaren aan herstel en vraagt je af: wanneer mag ik stoppen met 'bezig zijn met trauma'? Wanneer ben ik genezen? Die vraag is begrijpelijk — en het antwoord is subtieler dan een einddatum."
      },
      {
        kop: "Genezen ≠ vergeten",
        tekst: "Herstel betekent zelden dat je nooit meer triggert, nooit meer verdriet voelt, of nooit meer terugvalt. Het betekent dat triggers korter en minder overweldigend worden, dat je sneller terugkomt, dat je relaties en keuzes weer deels van jou zijn. Sommige littekens blijven — maar ze hoeven je leven niet meer te leiden."
      },
      {
        kop: "Tekenen van 'genoeg' voor nú",
        tekst: "Veel mensen merken dat ze 'genoeg' zijn als ze: basale veiligheid voelen, kunnen werken of studeren (in hun tempo), relaties aankunnen zonder constant in overleving, en weten wat te doen bij een terugval. 'Genoeg' kan ook betekenen: ik hoef niet elke week in therapie, maar ik weet waar ik hulp vind als het nodig is. Herstel kan doorgaan als groei, niet als noodgeval."
      }
    ],
    doeDit: [
      "Meet vooruitgang in levenskwaliteit: slaap, relaties, keuzevrijheid, niet enkel in 'geen symptomen'.",
      "Vier wat al veranderd is — ook als het niet perfect voelt.",
      "Bespreek met je therapeut wanneer afbouwen of onderhoudszorg passend is."
    ],
    vermijd: [
      "Jezelf voortdurend meten aan een onbereikbaar ideaal van 'volledig genezen'.",
      "Therapie abrupt stoppen zonder plan bij terugval.",
      "Denken dat terugval betekent dat je 'nooit genoeg' zult zijn."
    ],
    zegDit: [
      "“Ik hoef niet perfect hersteld te zijn om een goed leven te mogen hebben.”",
      "“Genoeg betekent: ik kan weer kiezen, ook als het verleden soms meekomt.”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over realistische verwachtingen en gefaseerd herstel."
      },
      {
        boek: "body-keeps-score",
        detail: "Over wat herstel werkelijk inhoudt — terugwinnen van je leven."
      },
      {
        boek: "myth-of-normal",
        detail: "Over heling als één geheel worden, niet als terugkeer naar 'voorheen'."
      }
    ],
    gerelateerd: [
      "hoe-lang-duurt-herstel",
      "zelfcompassie-hoe-begin",
      "therapie-erger-maken"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 7
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_7 = [
  {
    id: "wat-is-ptss",
    beeld: {
      src: "img/vragen/wat-is-ptss.jpg"
    },
    vraag: "Wat is PTSS?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "naaste",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "PTSS",
      "posttraumatisch",
      "diagnose",
      "symptomen",
      "herbeleving",
      "alarm"
    ],
    kort: "PTSS (posttraumatische stressstoornis) is een reactie op één of meerdere heftige gebeurtenissen waarbij je lichaam en brein vast blijven zitten in gevaar — met herbelevingen, vermijding, spanning of verdoving. Het is geen zwakte, maar een beschermingsreactie die te lang aan blijft staan.",
    blokken: [
      {
        tekst: "Na een ernstige gebeurtenis — geweld, ongeval, overval, medisch trauma — kan je zenuwstelsel blijven reageren alsof het gevaar nú nog steeds aanwezig is. Slaap verstoort, je schrikt van alles, bepaalde prikkels trekken je terug naar het moment zelf. Wanneer dat weken of maanden aanhoudt en je dagelijks leven belemmert, spreken we van PTSS."
      },
      {
        kop: "Kernsymptomen",
        tekst: "PTSS omvat vaak drie clusters: herbeleving (flashbacks, nachtmerries, lichaam dat opnieuw reageert), vermijding (plaatsen, mensen of gedachten mijden) en verhoogde prikkelbaarheid of verdoving (alert zijn, schrikken, moeite met concentreren, afstand voelen). Niet iedereen heeft hetzelfde beeld — sommigen vechten, anderen bevriezen of vluchten innerlijk weg."
      },
      {
        kop: "PTSS versus complex trauma",
        tekst: "PTSS gaat in de klassieke definitie vaak over één of enkele duidelijke gebeurtenissen. Wanneer trauma herhaaldelijk en vroeg in het leven gebeurde — bijvoorbeeld in de opvoeding — kan het breder doorwerken: identiteit, relaties, zelfbeeld. Dat lijkt op PTSS, maar wordt soms CPTSS genoemd. Beide zijn echt; het verschil helpt vooral bij het kiezen van passende hulp."
      }
    ],
    doeDit: [
      "Herken signalen: herbeleving, vermijding, alertheid of verdoving die blijft hangen.",
      "Zoek traumagerichte hulp — PTSS is behandelbaar, vaak met EMDR, exposure of lichaamsgericht werk.",
      "Leg naasten uit dat PTSS geen 'overdramatiseren' is, maar een zenuwstelsel dat vastzit."
    ],
    vermijd: [
      "Denken dat je 'sterk genoeg' had moeten zijn om er overheen te komen.",
      "Jezelf diagnosticeren zonder professionele beoordeling.",
      "Symptomen verbergen tot je volledig instort."
    ],
    zegDit: [
      "“Mijn reactie past bij wat ik heb meegemaakt — dat is geen zwakte.”",
      "“Ik zoek hulp omdat mijn lichaam nog in alarmstand staat.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het brein en zenuwstelsel verandert, inclusief PTSS-symptomen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip van trauma vanuit ervaring in plaats van schaamte."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over het verschil tussen PTSS en complex trauma en wat behandeling kan bieden."
      }
    ],
    gerelateerd: [
      "wat-is-trauma-erg-genoeg",
      "flashback-wat-doe-ik",
      "freeze-response-wat-is"
    ]
  },
  {
    id: "klein-t-trauma",
    beeld: {
      src: "img/vragen/klein-t-trauma.jpg"
    },
    vraag: "Wat is kleine-t trauma? (tiny trauma)",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "klein-t",
      "accumulatie",
      "chronisch",
      "stress",
      "verwaarlozing",
      "impact"
    ],
    kort: "Kleine-t trauma of tiny trauma's zijn herhaalde, chronische stressvolle ervaringen zonder één grote 'shock' — denk aan constante kritiek, verwaarlozing of instabiliteit. Opeenstapelen ze zich en kunnen ze net zo diep ingrijpen als één groot trauma.",
    blokken: [
      {
        tekst: "Niet iedereen herkent zich in één dramatisch moment. Sommigen groeien op met constante spanning: een kritische ouder, onvoorspelbare ruzies, emotionele afwezigheid, pesten jaar na jaar. Geen enkel incident voelt 'erg genoeg' — maar samen vormen ze een zware last."
      },
      {
        kop: "Waarom 'klein' misleidend is",
        tekst: "De term klein-t trauma beschrijft niet de impact, maar het ontbreken van één duidelijke gebeurtenis. Voor een kind is chronische onveiligheid overweldigend. Het zenuwstelsel leert: de wereld is niet veilig, ik moet me aanpassen, mijn behoeften tellen niet. Die lessen blijven vaak onbewust doorwerken in volwassen leven."
      },
      {
        kop: "Herkenning zonder minimaliseren",
        tekst: "Mensen met klein-t trauma twijfelen vaak lang: 'Anderen hadden het erger.' Dat maakt hulp zoeken moeilijk. Toch kunnen de gevolgen echt zijn: moeite met grenzen, perfectionisme, relatieproblemen, lichamelijke klachten. Je hoeft geen 'groot verhaal' te hebben om recht te hebben op begrip en herstel."
      }
    ],
    doeDit: [
      "Tel de patronen, niet alleen het ene incident: wat herhaalde zich structureel?",
      "Erken dat chronische stress ook trauma kan zijn, ook zonder geweld.",
      "Zoek hulp bij iemand die complex en cumulatief trauma begrijpt."
    ],
    vermijd: [
      "Je pijn afmeten aan andermans 'grotere' verhalen.",
      "Denken dat klein-t trauma 'minder ernstig' betekent dat het niet telt.",
      "Alles bagatelliseren omdat er geen enkel duidelijk keerpunt was."
    ],
    zegDit: "“Wat herhaaldelijk gebeurde, telt ook — ook zonder één grote gebeurtenis.”,“Chronische stress laat echte sporen na.”",
    bronnen: [
      {
        boek: "tiny-traumas",
        detail: "Over hoe kleine, herhaalde verwondingen zich opstapelen tot grote impact."
      },
      {
        boek: "running-on-empty",
        detail: "Over emotionele verwaarlozing en chronische tekorten in de jeugd."
      },
      {
        boek: "myth-of-normal",
        detail: "Over normaliseren van chronische stress en de moed om impact te erkennen."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "wat-zijn-aces",
      "toxic-stress-uitgelegd"
    ]
  },
  {
    id: "medisch-ziekenhuis-trauma",
    beeld: {
      src: "img/vragen/medisch-ziekenhuis-trauma.jpg"
    },
    vraag: "Wat is medisch of ziekenhuis trauma?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "medisch trauma",
      "ziekenhuis",
      "operatie",
      "IC",
      "pijn",
      "machteloosheid"
    ],
    kort: "Medisch trauma ontstaat wanneer medische behandeling zelf angstig, pijnlijk of ontmachtend was — denk aan operaties, intensive care, complicaties of onvoldoende uitleg. Je lichaam kan daarna angstig reageren op zorg, zelfs wanneer die bedoeld is om te helpen.",
    blokken: [
      {
        tekst: "Je ging naar het ziekenhuis om geholpen te worden — en juist dáár voelde je je machteloos, alleen, bang of pijn. Misschien lag je vastgebonden, voelde je je niet gehoord, of gebeurde er iets onverwachts onder narcose. Daarna ben je bang voor controles, artsen of zelfs de geur van een ziekenhuis."
      },
      {
        kop: "Waarom medische situaties traumatisch kunnen zijn",
        tekst: "Trauma draait vaak om machteloosheid, alleen-zijn in gevaar, en een lichaam dat niet reageert zoals je wilt. Operaties, pijn, wachten op uitslagen, onverwachte diagnoses — dat raakt precies die knoppen. Ook als iedereen 'goede bedoelingen' had. Het zenuwstelsel slaat op wat je ervoer, niet wat bedoeld was."
      },
      {
        kop: "Herstel en medische zorg combineren",
        tekst: "Medisch trauma betekent niet dat je geen zorg meer mag zoeken. Het helpt wel om het te benoemen: tegen jezelf, je naasten en je zorgverleners. Vraag om uitleg, neem iemand mee, bespreek angst vooraf, en overweeg traumagerichte hulp als ziekenhuisbezoek je lam legt. Je lichaam mag leren dat hulp ook veilig kan zijn."
      }
    ],
    doeDit: [
      "Benoem medische ervaringen die angstig of ontmachtend voelden — ook als de behandeling 'nodig' was.",
      "Bespreek angst vooraf met zorgverleners; vraag om tempo, uitleg en een vertrouwenspersoon.",
      "Zoek traumahulp als medische situaties je sterk triggeren of vermijden."
    ],
    vermijd: [
      "Denken dat medisch trauma 'onlogisch' is omdat ze je wilden helpen.",
      "Zorg vermijden uit angst — bespreek angst in plaats van alles uit te stellen.",
      "Jezelf verwijten dat je 'dankbaar' had moeten zijn in plaats van bang."
    ],
    zegDit: [
      "“Mijn angst komt uit eerdere medische ervaringen — ik heb extra uitleg nodig.”",
      "“Ik wil graag weten wat er gebeurt voordat we verdergaan.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over hoe het lichaam machteloosheid en dreiging opslaat, ook in medische context."
      },
      {
        boek: "body-keeps-score",
        detail: "Over trauma en lichamelijke ervaringen, inclusief medische ingrepen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip van angst vanuit wat je hebt meegemaakt, niet vanuit schuld."
      }
    ],
    gerelateerd: [
      "medische-ingreep-trauma",
      "wat-is-een-trigger",
      "flashback-wat-doe-ik"
    ]
  },
  {
    id: "natuurramp-ongeval-trauma",
    beeld: {
      src: "img/vragen/natuurramp-ongeval-trauma.jpg"
    },
    vraag: "Kan een natuurramp of ongeval trauma veroorzaken?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "natuurramp",
      "ongeval",
      "PTSS",
      "schrik",
      "overleving",
      "machteloosheid"
    ],
    kort: "Ja. Eén heftige gebeurtenis — brand, overstroming, verkeersongeval, inbraak — kan PTSS veroorzaken, ook als niemand 'opzettelijk' kwaad deed. Angst, schuldgevoelens en lichamelijke reacties daarna zijn normale overlevingsreacties die soms blijven hangen.",
    blokken: [
      {
        tekst: "Een auto-ongeluk, brand, overstroming, ernstige val of plotseling overlijden van iemand dichtbij — één moment waarin je leven kantelde. Daarna schrik je van sirenes, vermijd je bepaalde routes, droom je nachtmerries, of voel je schuld dat jij het overleefde. Dat kan trauma zijn, ook zonder misbruik of langdurige mishandeling."
      },
      {
        kop: "Acuut versus langdurig",
        tekst: "Bij een enkele gebeurtenis reageert het zenuwstelsel met acute alarmfase: vechten, vluchten of bevriezen. Meestal kalmeert dat na weken. Blijft de angst, vermijding of herbeleving hangen, dan kan PTSS ontstaan. Dat geldt ook voor getuigen — je hoeft niet zelf gewond te zijn geraakt om getraumatiseerd te raken."
      },
      {
        kop: "Schuld en schaamte",
        tekst: "Na rampen horen mensen vaak: 'Je leeft nog, wees dankbaar.' Dat maakt het moeilijk om pijn te erkennen. Overlevingschuld — waarom ik wel, zij niet — is een veelvoorkomend, pijnlijk patroon. Je mag hulp zoeken, ook als anderen denken dat het 'meeviel'. Wat jij voelt, telt."
      }
    ],
    doeDit: [
      "Erken dat één heftige gebeurtenis genoeg kan zijn voor trauma — je hoeft geen 'lang verhaal' te hebben.",
      "Let op signalen: nachtmerries, vermijding, schrikreacties, lichamelijke spanning.",
      "Zoek professionele hulp bij aanhoudende klachten; vroeg beginnen helpt vaak."
    ],
    vermijd: [
      "Jezelf haasten met 'weer normaal zijn'.",
      "Schuldgevoelens als bewijs dat je geen hulp verdient.",
      "Alles verdrinken in werk of afleiding zonder te verwerken."
    ],
    zegDit: [
      "“Wat ik meemaakte, was heftig genoeg om sporen na te laten.”",
      "“Ik mag hulp zoeken, ook als ik het materieel overleefde.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over het overlevingsbrein na schokkende gebeurtenissen en hoe ontlading helpt."
      },
      {
        boek: "body-keeps-score",
        detail: "Over PTSS na enkele gebeurtenissen en de rol van het lichaam."
      },
      {
        boek: "end-of-trauma",
        detail: "Over herstel na acute traumatische ervaringen."
      }
    ],
    gerelateerd: [
      "wat-is-ptss",
      "flashback-wat-doe-ik",
      "verlies-rouw-vs-trauma"
    ]
  },
  {
    id: "verlies-van-ouder",
    beeld: {
      src: "img/vragen/verlies-van-ouder.jpg"
    },
    vraag: "Hoe werkt het verlies van een ouder door in je leven?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: true,
    tags: [
      "verlies",
      "ouder",
      "rouw",
      "kind",
      "wees",
      "hechting"
    ],
    kort: "Het verlies van een ouder — door overlijden, vertrek of langdurige afwezigheid — raakt de basis van veiligheid en hechting. Bij kinderen kan het diep trauma achterlaten; bij volwassenen kan oude rouw alsnog openbarsten.",
    blokken: [
      {
        tekst: "Een ouder is je eerste anker: degene die (hopelijk) troost biedt, structuur geeft, laat zien dat de wereld de moeite waard is. Wanneer die ouder overlijdt, vertrekt, verslaafd raakt of emotioneel verdwijnt, verliest een kind niet alleen een persoon — maar ook een gevoel van veiligheid en identiteit."
      },
      {
        kop: "Verschillende vormen van verlies",
        tekst: "Overlijden is het meest zichtbare verlies, maar ook scheiding, detentie, ernstige psychische problemen of emotionele afwezigheid kunnen voelen als 'verlies van ouder'. Een kind dat moet opgroeien zonder troost, voorspelbaarheid of bescherming, draagt dat vaak decennia mee — soms zonder het woord 'rouw' te gebruiken."
      },
      {
        kop: "Rouw en trauma overlappen",
        tekst: "Niet elk verlies wordt trauma, maar bij plotseling overlijden, geweld, of verlies zonder adequate steun kan rouw verweven raken met trauma. Volwassenen merken soms dat oude verdriet bij nieuwe verliezen terugkomt. Traumagerichte rouwbegeleiding helpt wanneer herbeleving, schuld of vermijding de rouw blokkeren."
      }
    ],
    doeDit: [
      "Erken verlies in al zijn vormen — ook emotionele afwezigheid telt.",
      "Zoek steun die past bij leeftijd en situatie; kinderen hebben woorden én veiligheid nodig.",
      "Overweeg rouw- of traumahulp wanneer verdriet vastzit of je leven blokkeert."
    ],
    vermijd: [
      "Kinderen dwingen 'sterk' te zijn of verdriet te verbergen.",
      "Denken dat jong verlies 'vergeten' wordt — het verandert vorm.",
      "Rouw verwarren met zwakte; beide mogen ruimte krijgen."
    ],
    zegDit: [
      "“Het verlies van mijn ouder raakte mijn veiligheid — dat is begrijpelijk.”",
      "“Ik mag rouwen op mijn tempo, ook jaren later.”"
    ],
    bronnen: [
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsangst en verlies van ouderlijke aanwezigheid."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege hechtingswonden en verlies in de ontwikkeling."
      },
      {
        boek: "attached",
        detail: "Over hechting en wat er gebeurt wanneer het primaire anker verdwijnt."
      }
    ],
    gerelateerd: [
      "verlies-rouw-vs-trauma",
      "wat-is-verlatingsangst",
      "wat-is-emotionele-verwaarlozing"
    ]
  },
  {
    id: "wat-is-parentificatie",
    beeld: {
      src: "img/vragen/wat-is-parentificatie.jpg"
    },
    vraag: "Wat is parentificatie?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "parentificatie",
      "ouderrol",
      "kind",
      "zorgen",
      "rolomkering",
      "jeugd"
    ],
    kort: "Parentificatie is wanneer een kind de rol van ouder op zich neemt — voor jongere broers of zussen, of zelfs voor de eigen ouder. Het kind leert zijn eigen behoeften weg te drukken om anderen te dragen. Dat laat vaak diepe sporen na.",
    blokken: [
      {
        tekst: "Als kind was jij degene die moest zorgen: broers troosten, de keuken opruimen, de dronken ouder naar bed helpen, of de stem van de reden zijn in huis. Volwassenen prezen je 'volwassenheid'. Maar jij miste iets belangrijks: het recht om gewoon kind te zijn."
      },
      {
        kop: "Twee vormen",
        tekst: "Praktische parentificatie gaat over taken: koken, oppassen, administratie. Emotionele parentificatie gaat over het dragen van de gevoelswereld van de ouder: troosten, bemiddelen, de gevoelens van papa of mama kalmeren. Beide zijn te zwaar voor een kind. Het kind leert: mijn waarde = wat ik voor anderen doe."
      },
      {
        kop: "Sporen in volwassen leven",
        tekst: "Geparentificeerde kinderen worden vaak zorgende volwassenen die moeite hebben met hulp vragen, nee zeggen, of kwetsbaarheid tonen. Burn-out, perfectionisme en relatiepatronen waarin je altijd de drager bent, komen veel voor. Herkenning is geen verwijt aan je ouders — het is een stap naar het terugclaimen van je eigen leven."
      }
    ],
    doeDit: [
      "Herken waar je vroeg te veel verantwoordelijkheid droeg.",
      "Oefen hulp vragen en grenzen stellen — dat is nieuw leren, geen falen.",
      "Zoek therapie die rolpatronen en schaamte over 'egoïsme' aanpakt."
    ],
    vermijd: [
      "Trots zijn op je 'volwassenheid' zonder te zien wat het je kostte.",
      "Nog steeds de drager zijn in elke relatie.",
      "Denken dat zorgen voor anderen bewijs is van liefde — ten koste van jezelf."
    ],
    zegDit: [
      "“Ik mocht te jong volwassen worden. Nu mag ik ook gezien worden.”",
      "“Hulp vragen is geen zwakte — het is iets wat ik nooit mocht leren.”"
    ],
    bronnen: [
      {
        boek: "drama-gifted-child",
        detail: "Over kinderen die te vroeg volwassen werden in disfunctionele gezinnen."
      },
      {
        boek: "emotional-incest",
        detail: "Over emotionele rolomkering tussen ouder en kind."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over kinderen die leren dat hun waarde afhangt van wat ze presteren voor anderen."
      }
    ],
    gerelateerd: [
      "gouden-kind-zwart-schaap",
      "people-pleasing-herkennen",
      "kan-ik-geen-nee-zeggen"
    ]
  },
  {
    id: "gouden-kind-zwart-schaap",
    beeld: {
      src: "img/vragen/gouden-kind-zwart-schaap.jpg"
    },
    vraag: "Wat is het verschil tussen gouden kind en zwart schaap?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "gouden kind",
      "zwart schaap",
      "familierol",
      "dynamiek",
      "identiteit",
      "schaamte"
    ],
    kort: "In sommige gezinnen krijgt elk kind een vaste rol: het gouden kind (presteert, glimt, verbergt problemen) of het zwart schaap (krijgt de schuld, valt op door 'probleemgedrag'). Beide rollen zijn overlevingsstrategieën — geen echte identiteit.",
    blokken: [
      {
        tekst: "In jouw gezin was er misschien duidelijk wie 'goed' was en wie 'het probleem'. Het gouden kind haalde hoge cijfers, glimlachte op foto's, liet nooit iets los. Het zwart schaap viel op met ruzie, verslaving, of 'moeilijk gedrag'. Beide rollen voelden vaak als een kooi."
      },
      {
        kop: "Gouden kind: perfectie als schild",
        tekst: "Het gouden kind leert: liefde krijg ik als ik functioneer, glimlach en geen problemen maak. Van buiten succesvol, van binnen vaak angstig, uitgeput of leeg. Falen voelt existentieel. Emoties worden verborgen omdat kwetsbaarheid 'te veel' lijkt. De rol beschermt — maar kost authenticiteit."
      },
      {
        kop: "Zwart schaap: de zondebok",
        tekst: "Het zwart schaap draagt vaak de schuld voor familieproblemen die groter zijn dan één kind. Het gedrag is soms een uiting van pijn, niet de oorzaak. Schaamte, afwijzing en het gevoel 'ik hoor er niet bij' kunnen diep trauma achterlaten. Beide rollen vragen om loskomen: je bent meer dan de rol die je kreeg."
      }
    ],
    doeDit: [
      "Onderzoek welke rol je in je gezin kreeg — en wat die je kostte.",
      "Erken dat 'succes' of 'probleemgedrag' beide overlevingsstrategieën kunnen zijn.",
      "Zoek hulp om je echte zelf te onderscheiden van de familierol."
    ],
    vermijd: [
      "Je waarde blijven meten aan de oude rol.",
      "Broers of zussen blijven labelen als gouden kind of zwart schaap.",
      "Denken dat de rol 'je ware ik' beschrijft."
    ],
    zegDit: [
      "“De rol die ik kreeg, beschermde me — maar zij is niet wie ik ben.”",
      "“Ik hoef niet perfect te zijn om liefde te verdienen.”"
    ],
    bronnen: [
      {
        boek: "drama-gifted-child",
        detail: "Over vaste rollen in disfunctionele gezinssystemen."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over het gouden kind en de druk om perfect te zijn voor de ouder."
      },
      {
        boek: "trapped-in-the-mirror",
        detail: "Over identiteit en schaamte binnen narcistische gezinsdynamieken."
      }
    ],
    gerelateerd: [
      "narcistische-ouder-betekenis",
      "sibling-rivalry-trauma",
      "wat-is-parentificatie"
    ]
  },
  {
    id: "sibling-rivalry-trauma",
    beeld: {
      src: "img/vragen/sibling-rivalry-trauma.jpg"
    },
    vraag: "Kan sibling rivalry trauma veroorzaken?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "broers",
      "zussen",
      "rivaliteit",
      "jaloers",
      "gunst",
      "gezin"
    ],
    kort: "Broer-zusrivaliteit is normaal, maar wordt traumatisch wanneer ouders partij kiezen, vergelijken, of geweld en vernedering structureel toestaan. Het kind leert: liefde is schaars, en ik moet vechten om te bestaan.",
    blokken: [
      {
        tekst: "Broers en zussen vechten — dat hoort bij opgroeien. Maar in sommige gezinnen gaat het verder: constante vergelijking ('waarom ben jij niet zoals je broer?'), openlijk favorieten, fysiek geweld zonder ingrijpen, of het pitting tegen elkaar op door een ouder. Dat is geen 'gewone ruzie' — dat is een gebrek aan veilige structuur."
      },
      {
        kop: "Wanneer rivaliteit wond maakt",
        tekst: "Kinderen hebben een ouder nodig die grenzen stelt en elk kind ziet. Wanneer een ouder een kind idealiseert en een ander afwijst, ontstaat diepe sibling rivalry: jaloezie, haat, schaamte, soms geweld dat decennia doorwerkt. Volwassenen kunnen nauwelijks contact houden met broers of zussen — niet uit 'koppigheid', maar uit oude pijn."
      },
      {
        kop: "Herstel is mogelijk — niet verplicht",
        tekst: "Inzicht in de gezinsdynamiek helpt: vaak waren jullie allemaal kinderen die om schaarse aandacht streden. Herstel van sibling-relaties kan, maar alleen wanneer veilig en gewenst. Soms is afstand de gezondste keuze. Traumawerk gaat dan over jouw rol en pijn — niet per se over verzoening."
      }
    ],
    doeDit: [
      "Onderzoek hoe ouders vergelijken of partij kozen — dat verklaart veel.",
      "Stel grenzen in sibling-contact als oude dynamiek pijn blijft doen.",
      "Zoek hulp voor je eigen pijn, los van of je broer/zus meedoet."
    ],
    vermijd: [
      "Jezelf de schuld geven voor gezinsrivaliteit die door ouders gevoed werd.",
      "Verzoening forceren uit schuldgevoel.",
      "Sibling-geweld bagatelliseren als 'pesten onder broers'."
    ],
    zegDit: [
      "“We waren allemaal kinderen in een moeilijk systeem — dat verklaart, niet excuseren.”",
      "“Ik mag afstand nemen als contact te pijnlijk blijft.”"
    ],
    bronnen: [
      {
        boek: "drama-gifted-child",
        detail: "Over gezinsrollen en dynamiek tussen siblings in disfunctionele gezinnen."
      },
      {
        boek: "understanding-borderline-mother",
        detail: "Over favoritisme en sibling-splitting in complexe gezinssystemen."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over kinderen die schuld dragen voor wat volwassenen creëerden."
      }
    ],
    gerelateerd: [
      "gouden-kind-zwart-schaap",
      "narcistische-ouder-betekenis",
      "intergenerationeel-trauma"
    ]
  },
  {
    id: "toxic-stress-uitgelegd",
    beeld: {
      src: "img/vragen/toxic-stress-uitgelegd.jpg"
    },
    vraag: "Wat is toxic stress?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "toxic stress",
      "chronische stress",
      "ACE",
      "zenuwstelsel",
      "ontwikkeling",
      "kinderen"
    ],
    kort: "Toxic stress is langdurige, intense stress zonder voldoende steun — bijvoorbeeld mishandeling, verwaarlozing of chronische angst. Het overbelast het ontwikkelende zenuwstelsel van kinderen en kan levenslang doorwerken in lichaam, brein en gedrag.",
    blokken: [
      {
        tekst: "Niet alle stress is schadelijk. Positieve stress (spanning voor een toets, met steun daarna) helpt kinderen groeien. Toxic stress (giftige stress) ontstaat wanneer stress lang duurt, heftig is en er geen beschermende relatie is: een kind dat maanden of jaren in angst leeft, zonder iemand die het helpt kalmeren."
      },
      {
        kop: "Wat het doet met het lichaam",
        tekst: "Bij toxic stress blijven stresshormonen te lang te hoog. Het brein-in-ontwikkeling past zich aan: altijd op scherp, snel bevriezen, moeite met leren, zelfbeheersing en het kalmeren van emoties. Later verhoogt het de kans op lichamelijke klachten, verslaving, depressie en relatieproblemen. Dat is geen lot — het is biologie die reageerde op een onveilige omgeving."
      },
      {
        kop: "Beschermende factoren",
        tekst: "Eén stabiele, liefdevolle volwassene kan toxic stress flink opvangen. Daarom telt 'wie was er wél veilig?' net zo hard als 'wat gebeurde er?' Herstel is mogelijk: het zenuwstelsel blijft leerbaar. Traumagerichte hulp, veiligheid en oefeningen om te kalmeren kunnen helpen, ook tientallen jaren later."
      }
    ],
    doeDit: [
      "Herken chronische jeugdstress als biologische belasting, niet als karakterfout.",
      "Zoek informatie over ACE's en toxic stress als oriëntatie.",
      "Investeer in veiligheid, slaap en regulatie — je zenuwstelsel kan herleren."
    ],
    vermijd: [
      "Denken dat kinderen stress 'gewoon moeten verwerken'.",
      "Toxic stress negeren omdat er geen enkel 'groot incident' was.",
      "Verwachten dat inzicht alleen al het lichaam kalmeert."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over toxic stress, ACE's en de impact op gezondheid door het leven heen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip van ontwikkeling en stress vanuit ervaring."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen na toxic stress in de jeugd."
      }
    ],
    gerelateerd: [
      "wat-zijn-aces",
      "klein-t-trauma",
      "waarom-ben-ik-altijd-moe"
    ]
  },
  {
    id: "freeze-response-wat-is",
    beeld: {
      src: "img/vragen/freeze-response-wat-is.jpg"
    },
    vraag: "Wat is een freeze response?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "freeze",
      "bevriezen",
      "shutdown",
      "overlevingsreactie",
      "dissociatie",
      "machteloosheid"
    ],
    kort: "De freeze response is een overlevingsreactie waarbij je lichaam 'bevriest': stilvallen, verdoofd raken, niet kunnen bewegen of praten. Het beschermde je toen vluchten of vechten geen optie was — maar kan later terugkomen als verdoving of lamheid.",
    blokken: [
      {
        tekst: "Iedereen kent vechten of vluchten. Minder bekend is bevriezen: het lichaam schakelt uit als beide andere opties te gevaarlijk zijn. Je wordt stil, starend, verdoofd. Soms kun je je lichaam niet aansturen. Dat is geen 'niets doen' — het is een automatische bescherming tegen overweldigende dreiging."
      },
      {
        kop: "Wanneer freeze optreedt",
        tekst: "Freeze komt vaak voor bij onvermijdbare dreiging: geweld waarbij verzet gevaarlijker werd, medische situaties, verlamming door angst, of langdurige machteloosheid. Het zenuwstelsel kiest de enige optie die overblijft: minimaliseren, verdoofd raken, dissociëren. Later kan hetzelfde patroon terugkomen bij stress, conflict of zelfs intimiteit."
      },
      {
        kop: "Herkennen en loskomen",
        tekst: "Freeze voelt vaak als schaamte: 'Ik had iets moeten doen.' Maar je lichaam deed precies wat het moest doen. Herkenning helpt: trage adem, beweging, aarden (grounding) en lichaamsgerichte (somatische) therapie kunnen het zenuwstelsel leren dat bewegen en voelen weer veilig mag. Geduld is heel belangrijk — forceren versterkt freeze."
      }
    ],
    doeDit: [
      "Herken freeze: verdoofd, lam, afwezig, alsof je 'uit' schakelt.",
      "Beweeg klein en langzaam: voeten wiebelen, armen strekken, adem verlengen.",
      "Zoek lichaamsgerichte (somatische) of traumagerichte hulp als freeze je dagelijks leven beïnvloedt."
    ],
    vermijd: [
      "Jezelf verwijten dat je 'niets deed' tijdens dreiging.",
      "Freeze forceren door extreme prikkels of confrontatie.",
      "Freeze verwarren met luiheid of onverschilligheid."
    ],
    zegDit: [
      "“Bevriezen was mijn lichaam dat me beschermde — geen falen.”",
      "“Ik mag langzaam terugkomen; mijn systeem heeft tijd nodig.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over freeze als derde overlevingsreactie na vechten en vluchten."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel (polyvagaal) en dichtklappen (shutdown)."
      },
      {
        boek: "body-keeps-score",
        detail: "Over afhaken (dissociatie) en bevriezen (freeze) als trauma-reacties."
      }
    ],
    gerelateerd: [
      "dissociatie-naast-mezelf",
      "vechten-modus-herkennen",
      "vluchten-modus-herkennen"
    ]
  },
  {
    id: "vechten-modus-herkennen",
    beeld: {
      src: "img/vragen/vechten-modus-herkennen.jpg"
    },
    vraag: "Hoe herken ik de vechten-modus?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vechten",
      "fight",
      "woede",
      "prikkelbaar",
      "overlevingsmodus",
      "reactief"
    ],
    kort: "De vechten-modus (fight modus van fight-or-flight) is een overlevingsreactie: snel boos, defensief, controlerend of agressief — ook wanneer er objectief geen gevaar is. Het beschermde je ooit; nu kan het relaties en rust beschadigen.",
    blokken: [
      {
        tekst: "Je reageert sneller dan je wilt: schreeuwen, sarcastisch worden, de controle grijpen, dreigen met weggaan, of fysiek opspringen. Daarna spijt het je — maar in het moment voelt het als overleven. Dat is de vechten-modus: het zenuwstelsel dat denkt dat aanvallen de enige manier is om veilig te blijven."
      },
      {
        kop: "Signalen van fight",
        tekst: "Lichamelijk: gespannen kaak, vuisten, snelle ademhaling, warmte in het lichaam, hartkloppingen. Emotioneel: woede, irritatie, het gevoel aangevallen te worden, moeite met luisteren. Gedrag: onderbreken, domineren, blame, controleren. Vaak triggert iets kleins een disproportionele reactie — omdat het oude gevaar activeert."
      },
      {
        kop: "Van overleven naar tot rust komen",
        tekst: "Vechten-modus is geen 'slecht karakter'. Het is een alarm dat te gevoelig staat. Herkenning is stap één: pauze nemen vóór je reageert, ademhalen, lichaam bewegen om opgebouwde energie te ontladen. Traumatherapie helpt het alarm minder gevoelig te maken. Je mag leren dat veiligheid niet meer via agressie hoeft."
      }
    ],
    doeDit: [
      "Let op lichaamssignalen vóór de uitbarsting: spanning, warmte, snelle adem.",
      "Neem een pauze zodra je merkt dat je in fight-modus schiet.",
      "Zoek hulp voor woede en trauma — vechten is vaak oude angst in vermomming."
    ],
    vermijd: [
      "Jezelf 'toxic' noemen zonder het zenuwstelsel te begrijpen.",
      "Vechten rechtvaardigen als 'wie ik ben'.",
      "Boze reacties analyseren midden in de storm — wacht tot je kalmer bent."
    ],
    zegDit: "“Dit is mijn vecht-modus — ik heb een pauze nodig.”,“Mijn woede beschermde me vroeger. Nu zoek ik veiligere manieren.”",
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over vechten als overlevingsreactie en het belang van ontlading."
      },
      {
        boek: "body-keeps-score",
        detail: "Over prikkelbaarheid en agressie als trauma-symptomen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks en woede bij complex trauma."
      }
    ],
    gerelateerd: [
      "freeze-response-wat-is",
      "vluchten-modus-herkennen",
      "wat-is-een-trigger"
    ]
  },
  {
    id: "vluchten-modus-herkennen",
    beeld: {
      src: "img/vragen/vluchten-modus-herkennen.jpg"
    },
    vraag: "Hoe herken ik de vluchten-modus?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vluchten",
      "flight",
      "vermijden",
      "ontsnappen",
      "overlevingsmodus",
      "angst"
    ],
    kort: "De vluchten-modus is een overlevingsreactie: weg willen, vermijden, afsluiten, overwerken of versnellen — alles om gevaar te ontvluchten, ook als het gevaar emotioneel is. Het beschermde je; nu kan het je vastzetten in vermijding.",
    blokken: [
      {
        tekst: "Bij spanning wil je weg: de kamer uit, de relatie beëindigen, de afspraak afzeggen, eindeloos scrollen, werken tot je instort, of fysiek wegrennen. Je hoofd maakt plannen om te ontsnappen terwijl er objectief geen gevaar is. Dat is vluchten — niet alleen met je benen, maar ook met je aandacht en emoties."
      },
      {
        kop: "Vormen van flight",
        tekst: "Fysiek vluchten: weglopen, vermijden van plaatsen of mensen. Mentale vlucht: afleiding, fantasie, afhaken (dissociatie), eindeloos blijven malen. Gedrag: overwerken, perfectionisme, verslaving, altijd druk zijn — want stilstand voelt gevaarlijk. Emotioneel: intimiteit vermijden, gesprekken afkappen, 'ghosting'."
      },
      {
        kop: "Tussen vluchten en veilig blijven",
        tekst: "Vluchten hield je veilig toen blijven te gevaarlijk was. Nu maakt het soms problemen juist groter: vermeden gesprekken, uitgestelde zorg, eenopvallend leven. Het doel is niet nooit meer vluchten, maar herkennen wanneer het actief is, en geleidelijk leren dat sommige situaties nú veilig genoeg zijn om te blijven — met grounding en ondersteuning."
      }
    ],
    doeDit: [
      "Herken vermijdingspatronen: afsluiten, overwerken, altijd 'druk' zijn.",
      "Blijf kleine momenten langer in oncomfortabele maar veilige situaties.",
      "Gebruik grounding en ademhaling voordat je wegvlucht."
    ],
    vermijd: [
      "Vluchten altijd als 'laf' bestempelen — het was overleven.",
      "Jezelf dwingen alles te confronteren zonder stabiliteit.",
      "Chronische vermijding negeren omdat het 'rustiger' voelt."
    ],
    zegDit: [
      "“Ik merk dat ik wil vluchten — ik blijf nog even ademen.”",
      "“Vermijden hielp me vroeger. Nu kies ik bewuster.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over vluchten als overlevingsreactie en het belang van voltooide actie."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel en verschillende overlevingsstanden."
      },
      {
        boek: "cptsd-coping-workbook",
        detail: "Over vermijding herkennen en geleidelijk verkleinen bij complex trauma."
      }
    ],
    gerelateerd: [
      "freeze-response-wat-is",
      "vechten-modus-herkennen",
      "window-of-tolerance"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 8
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_8 = [
  {
    id: "polyvagaal-praktisch",
    beeld: {
      src: "img/vragen/polyvagaal-praktisch.jpg"
    },
    vraag: "Hoe pas ik polyvagaal theorie praktisch toe?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "polyvagaal",
      "zenuwstelsel",
      "veiligheid",
      "ventraal",
      "sympathisch",
      "dorsaal"
    ],
    kort: "De polyvagaaltheorie beschrijft drie standen van je zenuwstelsel: veilig en verbonden, alarm (vechten of vluchten), en dichtklappen (bevriezen). In de praktijk: herken in welke stand je zit, geef je lichaam signalen van veiligheid, en ga vanuit 'dichtgeklapt' niet meteen analyseren.",
    blokken: [
      {
        tekst: "Je zenuwstelsel bepaalt voor een groot deel hoe je je voelt — sneller dan je bewuste brein. De polyvagaaltheorie helpt begrijpen waarom je je soms niet uit paniek kunt 'denken', waarom je verdoofd raakt, of waarom een kalme stem je meteen rustiger maakt. Het is geen zweverig gedoe — het is hoe je zenuwstelsel werkt, vertaald naar het dagelijks leven."
      },
      {
        kop: "Drie standen herkennen",
        tekst: "Veilig (in vaktaal: ventraal): je ademt rustig, voelt verbinding, kunt luisteren en lachen. Alarm (sympathisch): hartkloppingen, snelle adem, woede of angst, willen vechten of vluchten. Dichtgeklapt (dorsaal): leeg, moe, afwezig, niet kunnen bewegen of praten. Je wisselt steeds tussen die standen — dat is normaal. Trauma maakt vooral 'alarm' en 'dichtgeklapt' te makkelijk bereikbaar."
      },
      {
        kop: "Praktische toepassing",
        tekst: "Vraag niet 'wat is er mis met mij?' maar 'in welke stand zit mijn zenuwstelsel?' Uit 'dichtgeklapt' kom je via kleine beweging, warmte en zachte stemmen — niet via streng analyseren. Uit 'alarm' kom je via traag uitademen, je voeten voelen en voorspelbaarheid. Veilige relaties laten je het snelst kalmeren: oogcontact, een rustige toon, aanwezigheid. Oefen signalen van veiligheid, niet alleen nadenken."
      }
    ],
    doeDit: [
      "Check regelmatig: ben ik veilig verbonden, in alarm, of dichtgeklapt?",
      "Gebruik lichaamssignalen — traag ademen, beweging, warmte — om naar een rustigere stand te schuiven.",
      "Zoek mensen en plekken waar je je veilige, verbonden stand kunt oefenen."
    ],
    vermijd: [
      "Jezelf verwijten dat je 'logisch' had moeten reageren toen je dichtgeklapt was.",
      "Direct van paniek naar diep trauma-praten gaan zonder eerst te kalmeren.",
      "De polyvagaaltheorie als excuus gebruiken om nooit uit je comfortzone te komen."
    ],
    zegDit: [
      "“Mijn zenuwstelsel zit in alarm — ik heb rust nodig, geen analyse.”",
      "“Kleine signalen van veiligheid helpen mijn lichaam kalmeren.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over de polyvagaaltheorie en praktische oefeningen om je zenuwstelsel te kalmeren."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe het autonome zenuwstelsel trauma opslaat en activeert."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over werken met de standen van het zenuwstelsel in traumatherapie."
      }
    ],
    gerelateerd: [
      "freeze-response-wat-is",
      "ademhaling-kalmeren",
      "window-of-tolerance"
    ]
  },
  {
    id: "ademhaling-kalmeren",
    beeld: {
      src: "img/vragen/ademhaling-kalmeren.jpg"
    },
    vraag: "Hoe kan ademhaling mijn zenuwstelsel kalmeren?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "ademhaling",
      "regulatie",
      "parasympathisch",
      "paniek",
      "grounding",
      "techniek"
    ],
    kort: "Ademhaling is een directe knop voor je zenuwstelsel — vooral langzaam uitademen zet het kalmerende systeem aan. Het lost trauma niet op, maar helpt je vanuit alarm of dichtklappen terug te komen in het nu.",
    blokken: [
      {
        tekst: "Bij stress adem je sneller en hoger — dat voedt het alarmsysteem. Omgekeerd: langzaam en diep uitademen stuurt een signaal naar je brein: gevaar voorbij. Ademhaling is daarmee een van de makkelijkste manieren om te kalmeren — gratis, altijd beschikbaar, en wetenschappelijk onderbouwd."
      },
      {
        kop: "Wat werkt — en wat niet",
        tekst: "Langzaam uitademen (bijvoorbeeld 4 seconden in, 6–8 seconden uit) kalmeert vaak effectiever dan geforceerd diep inademen. Bij paniek kan te veel focus op adem juist angst versterken — begin dan klein: voel één rustige uitademing. Box breathing (4-4-4-4) helpt sommigen; anderen kiezen liever voor het natuurlijk verlengen van de uitademing. Probeer wat bij jou past."
      },
      {
        kop: "Adem als brug, niet als oplossing",
        tekst: "Ademhaling kalmeert — het verwerkt geen trauma. Het maakt wel ruimte: je kunt weer denken, praten, keuzes maken. Oefen dagelijks in rustige momenten, zodat het beschikbaar is wanneer je het nodig hebt. Combineer met voeten voelen, een vertrouwde stem, of beweging voor sterker effect."
      }
    ],
    doeDit: [
      "Oefen dagelijks 2–5 minuten rustige ademhaling, vooral verlengde uitademing.",
      "Combineer adem met lichaamsankers: voeten op de grond, schouders laten zakken.",
      "Gebruik adem als eerste stap bij paniek — daarna pas praten of analyseren."
    ],
    vermijd: [
      "Ademhaling forceren tot duizeligheid.",
      "Denken dat ademhaling alle trauma-symptomen wegneemt.",
      "Jezelf verwijten als het niet meteen werkt — het is oefening."
    ],
    zegDit: [
      "“Ik adem langzaam uit — mijn lichaam mag kalmeren.”",
      "“Eén rustige adem is genoeg om te beginnen.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over ademhaling en het zenuwstelsel (polyvagaal) als manier om te kalmeren."
      },
      {
        boek: "mindful-somatic-awareness",
        detail: "Over bewuste ademhaling in lichaamsgerichte oefeningen."
      },
      {
        boek: "heal-body-heal-mind",
        detail: "Over adem en lichaamswerk bij stress en trauma."
      }
    ],
    gerelateerd: [
      "wat-is-grounding",
      "polyvagaal-praktisch",
      "trauma-hartkloppingen"
    ]
  },
  {
    id: "spierspanning-trauma",
    beeld: {
      src: "img/vragen/spierspanning-trauma.jpg"
    },
    vraag: "Waarom houd ik zoveel spierspanning vast na trauma?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "spierspanning",
      "pijn",
      "lichaam",
      "vastzitten",
      "schouders",
      "kaak"
    ],
    kort: "Trauma zet het lichaam klaar om te vechten of vluchten — spieren spannen zich aan en vergeten soms te ontspannen. Chronische spanning in nek, kaak, schouders of bekken is een veelvoorkomend lichaamsgeheugen, geen 'slechte houding'.",
    blokken: [
      {
        tekst: "Je schouders zitten permanent omhoog, je kaak klemt 's nachts, je nek is stijf, je buik voelt als een strakke band. Massages helpen even — en daarna keert alles terug. Veel mensen met trauma herkennen dit: het lichaam leeft alsof het nog steeds moet beschermen."
      },
      {
        kop: "Spanning als overblijfsel",
        tekst: "Tijdens dreiging spannen spieren zich aan om actie mogelijk te maken. Wanneer die actie niet kon voltooien — bevriezen, overmacht, langdurige stress — blijft spanning hangen. Het zenuwstelsel leert: ontspannen is gevaarlijk. Daarom voelt rust soms bedreigend en spanning 'normaal'."
      },
      {
        kop: "Wat helpt",
        tekst: "Langzaam, trauma-informed lichaamswerk: zacht rekken, tril-oefeningen, lichaamsgerichte (somatische) therapie, yoga met aandacht voor je grenzen. Forceer geen diepe massage als dat triggert. Combineer het met kalmeren — spanning loslaten kan emoties losmaken. Ga in jouw tempo; je lichaam bepaalt het tempo."
      }
    ],
    doeDit: [
      "Let op chronische spanningsplekken: kaak, nek, schouders, bekken.",
      "Oefen zachte beweging en bewust loslaten — niet forceren.",
      "Zoek somatische of traumagerichte lichaamstherapie bij hardnekkige spanning."
    ],
    vermijd: [
      "Denken dat 'even rechtzitten' voldoende is.",
      "Aggressieve massage of stretching die het lichaam als vijand behandelt.",
      "Spanning negeren omdat 'iedereen wel stress heeft'."
    ],
    zegDit: [
      "“Mijn spanning beschermde me. Ik mag leren loslaten.”",
      "“Mijn lichaam mag ontspannen — ik ben nu veilig.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over onafgemaakte overlevingsenergie en spierspanning."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma zich vastzet in het lichaam."
      },
      {
        boek: "somatic-ifs",
        detail: "Over lichaamsgericht werk met spierspanning en innerlijke delen."
      }
    ],
    gerelateerd: [
      "trauma-lichamelijke-klachten",
      "tremor-schudden-stress",
      "yoga-en-trauma"
    ]
  },
  {
    id: "maag-darm-stress",
    beeld: {
      src: "img/vragen/maag-darm-stress.jpg"
    },
    vraag: "Waarom reageert mijn maag-darmkanaal zo op stress en trauma?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "maag",
      "darm",
      "IBS",
      "spijsvertering",
      "stress",
      "buik"
    ],
    kort: "Maag en darmen hebben een eigen zenuwstelsel dat sterk verbonden is met stress en emotie. Trauma kan spijsverteringsklachten veroorzaken of verergeren — ook zonder duidelijke medische oorzaak.",
    blokken: [
      {
        tekst: "Stress en je buik gaan hand in hand: misselijkheid voor een presentatie, diarree bij angst, een 'knoop' in je maag bij verdriet. Bij trauma is die link vaak structureel: chronische buikpijn, IBS-achtige klachten, reflux, of eetproblemen zonder dat de arts iets vindt."
      },
      {
        kop: "De darm als stressmeter",
        tekst: "Je 'buikbrein' (de zenuwen rond je darmen) staat constant in contact met je brein, via een grote zenuw (de nervus vagus). Bij langdurige stress blijft dat systeem overactief of juist verlamd. Emoties die je niet mag voelen, komen soms via je darmen naar buiten. Dat is geen verbeelding — zo werkt je lichaam."
      },
      {
        kop: "Beide kanten aanpakken",
        tekst: "Laat medische oorzaken uitsluiten. Daarna: kalmeer-oefeningen (adem, aarden), traumagerichte therapie, en soms aanpassingen in je voeding. Alleen de klachten bestrijden zonder naar stress en trauma te kijken, mist vaak de kern. Je buik vertelt een verhaal — luister ernaar."
      }
    ],
    doeDit: [
      "Neem buikklachten serieus — laat medisch onderzoek doen.",
      "Let op verband tussen stress, triggers en spijsvertering.",
      "Combineer kalmeer-oefeningen met traumagerichte hulp bij aanhoudende klachten."
    ],
    vermijd: [
      "Klachten afdoen als 'alleen stress' — ze zijn echt.",
      "Extreme diëten als enige oplossing zonder naar trauma te kijken.",
      "Buikpijn negeren uit schaamte."
    ],
    zegDit: [
      "“Mijn buik reageert op stress — dat is begrijpelijk.”",
      "“Mijn lichaam verdient zowel medische als emotionele aandacht.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over de link tussen emotionele stress en lichamelijke klachten, inclusief spijsvertering."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het lichaam beïnvloedt, inclusief organen."
      },
      {
        boek: "heal-body-heal-mind",
        detail: "Over een aanpak die lichaam en geest samen neemt."
      }
    ],
    gerelateerd: [
      "trauma-lichamelijke-klachten",
      "trauma-eetproblemen",
      "polyvagaal-praktisch"
    ]
  },
  {
    id: "hoofdpijn-spanning-trauma",
    beeld: {
      src: "img/vragen/hoofdpijn-spanning-trauma.jpg"
    },
    vraag: "Kan trauma hoofdpijn en spanning veroorzaken?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "hoofdpijn",
      "migraine",
      "spanning",
      "kaak",
      "nek",
      "pijn"
    ],
    kort: "Ja. Chronische hoofdpijn, spanningshoofdpijn en migraine komen vaker voor bij trauma en langdurige stress. Spanning in kaak, nek en schouders, plus een overactief alarmsysteem, spelen een grote rol.",
    blokken: [
      {
        tekst: "Je hoofd bonkt regelmatig — soms dagelijks. Medicijnen helpen beperkt. Artsen vinden weinig. Intussen merk je dat hoofdpijn erger wordt bij stress, conflict, of slechte slaap. Veel mensen met trauma herkennen dit patroon."
      },
      {
        kop: "Hoe stress het hoofd raakt",
        tekst: "Bij stress spannen kaak-, nek- en schedelspieren zich aan. Stresshormonen veranderen bloedvaten en pijnverwerking. Slaapverstoring — veelvoorkomend bij trauma — triggert hoofdpijn. Migraine en spanningshoofdpijn zijn niet 'in je hoofd' in de zin van verbeelding — ze zijn neurologisch en lichamelijk echt."
      },
      {
        kop: "Aanpak voor lichaam én geest",
        tekst: "Medisch onderzoek blijft belangrijk. Daarnaast spelen mee: kaakspanning (nachtknarsen), houding, leren omgaan met stress en traumawerk. Soms vermindert hoofdpijn wanneer het zenuwstelsel kalmer wordt — niet omdat het 'psychisch' was, maar omdat de oorzaken samenhangen. Geduld en een combinatie van lichaam en geest werken vaak het best."
      }
    ],
    doeDit: [
      "Houd een eenvoudig dagboek bij: hoofdpijn, stress, slaap, triggers.",
      "Let op kaakspanning en nek — zachte oefeningen kunnen helpen.",
      "Bespreek het verband met stress en trauma bij je huisarts of behandelaar."
    ],
    vermijd: [
      "Hoofdpijn negeren of alleen met pijnstillers behandelen.",
      "Denken dat het 'alleen stress' betekent dat het niet echt is.",
      "Overmatig medicijngebruik zonder onderliggende oorzaak te onderzoeken."
    ],
    zegDit: [
      "“Mijn hoofdpijn is echt — stress maakt het erger, niet verzonnen.”",
      "“Ik zoek hulp voor zowel pijn als de spanning eronder.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over chronische pijn en stress, inclusief spanningsklachten."
      },
      {
        boek: "body-keeps-score",
        detail: "Over lichamelijke gevolgen van trauma."
      },
      {
        boek: "body-first-healing",
        detail: "Over het verband tussen trauma en aanhoudende lichamelijke pijn."
      }
    ],
    gerelateerd: [
      "spierspanning-trauma",
      "trauma-lichamelijke-klachten",
      "slaap-nachtmerries"
    ]
  },
  {
    id: "chronische-vermoeidheid-trauma",
    beeld: {
      src: "img/vragen/chronische-vermoeidheid-trauma.jpg"
    },
    vraag: "Waarom houd ik chronische vermoeidheid over na trauma?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vermoeidheid",
      "uitputting",
      "CFS",
      "burn-out",
      "zenuwstelsel",
      "energie"
    ],
    kort: "Chronische vermoeidheid na trauma komt vaak doordat je zenuwstelsel jarenlang op scherp stond, slaap verstoord raakte, en je lichaam constant energie stopt in overleven. Het is geen luiheid — het is uitputting op celniveau.",
    blokken: [
      {
        tekst: "Je bent moe na acht uur slaap. Moe na rust. Moe terwijl je 'niets doet'. Collega's begrijpen het niet; jij voelt je schuldig. Chronische vermoeidheid bij trauma is anders dan gewone tiredness — het voelt als lood in je botten, als een batterij die nooit vol laadt."
      },
      {
        kop: "Waarom trauma uitput",
        tekst: "Altijd op scherp staan kost enorm veel energie — ook onbewust. Verdrongen emoties, slechte slaap, spierspanning, ontstekingen en stresshormonen slurpen je reserves op. Na langdurige stress kan het lichaam in een soort spaarstand schakelen (lijkt op dichtklappen). Dat is geen gebrek aan wil — het is biologie."
      },
      {
        kop: "Realistisch herstel",
        tekst: "Je tempo bewaken is heel belangrijk: niet pushen tot je instort, maar langzaam opbouwen. Goede slaapgewoontes, kalmeren, traumatherapie en soms medisch onderzoek (schildklier, ijzer, enzovoort) horen erbij. Volledig herstel kost tijd. Vermoeidheid erkennen als klacht — niet als karakterfout — is de eerste stap."
      }
    ],
    doeDit: [
      "Erken vermoeidheid als lichaamsignaal, niet als falen.",
      "Pas pacing toe: rust vóór je instort, niet erna.",
      "Laat medische oorzaken uitsluiten en bespreek trauma als mogelijke factor."
    ],
    vermijd: [
      "Harder pushen 'om eroverheen te komen'.",
      "Vermoeidheid vergelijken met anderen die 'het wel volhouden'.",
      "Alleen op koffie, supplementen of wilskracht vertrouwen."
    ],
    zegDit: [
      "“Mijn vermoeidheid is echt — mijn lichaam is uitgeput van overleven.”",
      "“Rust is onderdeel van herstel, geen luxe.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over uitputting door chronische stress en onderdrukte emoties."
      },
      {
        boek: "anchored",
        detail: "Over hoe een overactief zenuwstelsel constant energie verbruikt."
      },
      {
        boek: "body-keeps-score",
        detail: "Over vermoeidheid en slaapstoornissen bij trauma."
      }
    ],
    gerelateerd: [
      "waarom-ben-ik-altijd-moe",
      "wat-is-hyperalertheid",
      "slaap-nachtmerries"
    ]
  },
  {
    id: "tremor-schudden-stress",
    beeld: {
      src: "img/vragen/tremor-schudden-stress.jpg"
    },
    vraag: "Waarom tril of schud ik soms na stress?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "tremor",
      "trillen",
      "schudden",
      "ontlading",
      "ontspanning",
      "lichaam"
    ],
    kort: "Trillen of schudden na stress kan een natuurlijke ontlading zijn: je lichaam maakt opgebouwde overlevingsenergie los. Het voelt vreemd, maar is vaak geen teken dat er 'iets mis' is — tenzij het aanhoudend of beangstigend is.",
    blokken: [
      {
        tekst: "Na een heftig gesprek, conflict of flashback begin je te trillen — handen, benen, soms je hele lichaam. Of het gebeurt na ontspanning: eindelijk veilig, en dan schudt alles. Veel mensen schrikken en proberen het te stoppen. Maar trillen kan juist betekenen dat je lichaam iets afmaakt wat ooit onderbroken werd."
      },
      {
        kop: "Ontlading na dreiging",
        tekst: "Dieren trillen na ontsnapping uit gevaar — dat is hoe het zenuwstelsel stresshormonen afvoert. Mensen onderdrukken dat vaak ('niet laten zien dat je bang bent'). Onderdrukte energie blijft hangen in spieren. Wanneer veiligheid terugkeert, kan het lichaam alsnog spanning loslaten door te trillen. Dat is biologie, geen zwakte."
      },
      {
        kop: "Wanneer hulp zoeken",
        tekst: "Af en toe trillen na stress is meestal normaal. Blijft het trillen aanhouden, gebeurt het zonder duidelijke trigger, of ben je er erg bang voor — bespreek dat dan met je huisarts om medische oorzaken uit te sluiten. Traumagerichte, lichaamsgerichte (somatische) therapie leert je veilig spanning loslaten. Forceer trillen niet; laat het gebeuren in een veilige omgeving wanneer het vanzelf komt."
      }
    ],
    doeDit: [
      "Laat mild trillen zijn in een veilige setting — onderdruk niet automatisch.",
      "Adem rustig en voel je voeten op de grond tijdens ontlading.",
      "Bespreek aanhoudende of beangstigende tremor met huisarts of therapeut."
    ],
    vermijd: [
      "Jezelf beschuldigen van 'zwakte' bij trillen.",
      "Trillen agressief onderdrukken uit schaamte.",
      "Tremor negeren als het dagelijks leven belemmert."
    ],
    zegDit: [
      "“Mijn lichaam laat spanning los — dat mag.”",
      "“Trillen is ontlading, geen gevaar.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over trillen en spanning loslaten als natuurlijk onderdeel van traumaverwerking."
      },
      {
        boek: "somatic-ifs",
        detail: "Over lichaamsgerichte ontlading en veilig voelen in het lichaam."
      },
      {
        boek: "body-first-healing",
        detail: "Over lichaamsgerichte benaderingen bij stress en trauma."
      }
    ],
    gerelateerd: [
      "spierspanning-trauma",
      "freeze-response-wat-is",
      "yoga-en-trauma"
    ]
  },
  {
    id: "koude-warmte-grounding",
    beeld: {
      src: "img/vragen/koude-warmte-grounding.jpg"
    },
    vraag: "Hoe gebruik ik koude en warmte voor grounding?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "koude",
      "warmte",
      "grounding",
      "zintuigen",
      "regulatie",
      "techniek"
    ],
    kort: "Koude en warmte prikkelen je zintuigen direct en kunnen je zenuwstelsel snel terugbrengen naar het heden. IJs in je hand, koud water over polsen, een warme douche of deken — simpele tools bij dissociatie, paniek of shutdown.",
    blokken: [
      {
        tekst: "Wanneer denken niet werkt — bij afhaken (dissociatie), paniek of bevriezen (freeze) — heb je iets nodig dat je lichaam direct bereikt. Temperatuur is zo'n kanaal. Een ijsblokje in je hand, koud water, of juist een warme kop thee: het lichaam merkt het meteen en krijgt een anker in het nu."
      },
      {
        kop: "Koude voor alertheid en terugkeer",
        tekst: "Koude activeert het lichaam kort en scherp: houd een ijsklontje, dompel gezicht kort in koud water (duikreflex), of drink iets kouds. Dat kan helpen bij afhaken (dissociatie) of wanneer je je 'te ver weg' voelt. Niet langdurig — korte prikkel, daarna rust. Let op bij hartproblemen; bespreek extreme methodes met een professional."
      },
      {
        kop: "Warmte voor veiligheid en kalmering",
        tekst: "Warmte betekent voor je lichaam vaak veiligheid: warme douche, kruik, zwaar dekentje, warme thee in twee handen. Handig bij dichtklappen, koude rillingen, of nadat je spanning hebt losgelaten. Combineer met ademhaling en je voeten voelen. Temperatuur vervangt geen therapie — maar het is een krachtige eerste hulp om te kalmeren."
      }
    ],
    doeDit: [
      "Houd koude en warmte paraat: ijs, koud water, warme deken of thee.",
      "Gebruik korte koude prikkels bij afhaken (dissociatie); warmte bij dichtklappen of na stress.",
      "Combineer met 5-4-3-2-1 aarden (grounding) voor sterker effect."
    ],
    vermijd: [
      "Extreme koude toepassen (lange ijsbaden) zonder begeleiding.",
      "Temperatuur als enige coping — bij hardnekkige klachten hoort ook hulp.",
      "Koude gebruiken om gevoelens permanent af te sluiten."
    ],
    zegDit: [
      "“Ik voel de koude/warmte — ik ben hier, nu.”",
      "“Mijn lichaam reageert; ik ben terug in het moment.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over aarden (grounding) met je zintuigen als anker."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over praktisch jezelf kalmeren bij overspoeling."
      },
      {
        boek: "mindful-somatic-awareness",
        detail: "Over zintuiglijke awareness en lichaamsankers."
      }
    ],
    gerelateerd: [
      "wat-is-grounding",
      "ademhaling-kalmeren",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "trauma-hartkloppingen",
    beeld: {
      src: "img/vragen/trauma-hartkloppingen.jpg"
    },
    vraag: "Waarom krijg ik hartkloppingen bij trauma en stress?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "hartkloppingen",
      "tachycardie",
      "paniek",
      "alarm",
      "lichaam",
      "angst"
    ],
    kort: "Hartkloppingen bij stress zijn een normale alarmreactie: je sympathische zenuwstelsel pompt adrenaline en versnelt je hart — ook zonder fysiek gevaar. Bij trauma kan dat sneller en heftiger gebeuren, soms zonder duidelijke trigger.",
    blokken: [
      {
        tekst: "Je hart bonkt plotseling — thuis, in de winkel, midden in de nacht. Geen inspanning, geen reden. Paniek volgt: 'Ga ik dood?' Vaak is het je zenuwstelsel dat denkt dat gevaar terug is. Dat voelt levensbedreigend, maar is meestal geen hartinfarct."
      },
      {
        kop: "Alarm zonder gevaar",
        tekst: "Bij trauma leert het lichaam sneller in alarm te gaan. Adrenaline stroomt, hartslag stijgt, adem versnelt — hetzelfde systeem dat je ooit beschermde. Triggers kunnen subtiel zijn: een geur, toon, gedachte. Hartkloppingen zijn het lichaam dat zegt: opgelet. Niet per se dat er nú gevaar is."
      },
      {
        kop: "Medisch én trauma",
        tekst: "Laat aanhoudende of nieuwe hartkloppingen medisch checken — vooral bij pijn op de borst, flauwvallen of risicofactoren. Als de arts niets vindt, kunnen angst en trauma de drijvende kracht zijn. Kalmeren (adem, aarden), traumatherapie en soms medicatie bij een paniekstoornis kunnen helpen. Je lichaam liegt niet — het reageert op oude en nieuwe signalen."
      }
    ],
    doeDit: [
      "Laat hartkloppingen medisch uitsluiten als ze nieuw of heftig zijn.",
      "Gebruik trage uitademing en aarden (grounding) wanneer je hart bonkt.",
      "Noteer triggers en context — dat helpt patronen te herkennen."
    ],
    vermijd: [
      "Direct denken dat je sterft — check medisch, adem daarna.",
      "Hartkloppingen negeren als ze vaak terugkomen.",
      "Alleen situaties vermijden zonder jezelf te leren kalmeren."
    ],
    zegDit: [
      "“Dit is mijn alarmsysteem — ik adem langzaam uit.”",
      "“Mijn hart reageert op stress, niet op gevaar nu.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over lichamelijke alarmreacties bij trauma."
      },
      {
        boek: "anchored",
        detail: "Over het automatische zenuwstelsel en het kalmeren van je hartslag."
      },
      {
        boek: "when-body-says-no",
        detail: "Over stress en lichamelijke reacties."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "ademhaling-kalmeren",
      "polyvagaal-praktisch"
    ]
  },
  {
    id: "yoga-en-trauma",
    beeld: {
      src: "img/vragen/yoga-en-trauma.jpg"
    },
    vraag: "Is yoga veilig en nuttig bij trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "yoga",
      "trauma-informed",
      "lichaam",
      "beweging",
      "stretch",
      "regulatie"
    ],
    kort: "Yoga kan helpen bij trauma — mits trauma-informed: geen gedwongen houdingen, oogcontact of aanraking, wel keuze en grenzen. Verkeerde yoga kan triggeren; de juiste aanpak kan je helpen kalmeren en je lichaam beter te voelen.",
    blokken: [
      {
        tekst: "Yoga belooft rust, flexibiliteit en verbinding met je lichaam. Voor sommigen met trauma voelt een les juist bedreigend: de instructeur past je aan zonder te vragen, je moet diep rekken, iedereen kijkt, of bepaalde heupoefeningen roepen oude herinneringen op. Yoga is niet automatisch veilig — de aanpak telt."
      },
      {
        kop: "Trauma-informed yoga",
        tekst: "Trauma-informed yoga geeft keuze: doe mee of niet, blijf zitten wanneer je wilt, geen fysieke aanpassingen zonder toestemming, geen verplicht oogcontact of 'omhelzende' houdingen. Focus op adem, je voeten voelen, en kleine beweging. De docent begrijpt dat afhaken (dissociatie), bevriezen en triggers kunnen opkomen — en vindt pauzes heel normaal."
      },
      {
        kop: "Begin klein",
        tekst: "Start met online trauma-yoga, kleine groepen, of thuisoefeningen. Vermijd competitieve of intense hot yoga als je zenuwstelsel al overbelast is. Yoga is geen vervanging voor therapie, maar een aanvulling die lichaam en adem verbindt. Luister naar je lichaam — het is de baas."
      }
    ],
    doeDit: [
      "Zoek expliciet trauma-informed of gentle yoga.",
      "Geef aan dat je grenzen hebt — geen aanraking zonder toestemming.",
      "Start thuis of online als groepslessen te overweldigend zijn."
    ],
    vermijd: [
      "Doorgaan met pijn of afhaken (dissociatie) 'om mee te kunnen'.",
      "Docenten die je fysiek corrigeren zonder te vragen.",
      "Yoga als 'fix alles'-oplossing zonder andere hulp."
    ],
    zegDit: [
      "“Ik doe mee op mijn tempo — soms betekent dat rusten.”",
      "“Mijn lichaam bepaalt hoe ver ik ga.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over yoga en lichaamsgerichte aanpakken bij trauma."
      },
      {
        boek: "mindful-somatic-awareness",
        detail: "Over mindful beweging en lichaamsbewustzijn."
      },
      {
        boek: "heal-body-heal-mind",
        detail: "Over het samengaan van lichaamsoefeningen en herstel."
      }
    ],
    gerelateerd: [
      "bewegen-helpt-trauma",
      "spierspanning-trauma",
      "massage-aanraking-grenzen"
    ]
  },
  {
    id: "bewegen-helpt-trauma",
    beeld: {
      src: "img/vragen/bewegen-helpt-trauma.jpg"
    },
    vraag: "Hoe helpt bewegen bij trauma — en hoe begin ik?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "beweging",
      "sport",
      "wandelen",
      "lichaam",
      "ontlading",
      "regulatie"
    ],
    kort: "Beweging helpt het zenuwstelsel stress af te voeren, spierspanning te verlichten en het lichaam weer als bondgenoot te ervaren. Begin klein — wandelen, dansen, zwemmen — en vermijd overtraining als je al uitgeput bent.",
    blokken: [
      {
        tekst: "Trauma zet je lichaam vast: bevriezen, spanning, vermijding van sensaties. Beweging doorbreekt dat patroon — niet door hard te pushen, maar door het lichaam opnieuw te laten ervaren dat het kan bewegen, ademen en ontspannen. Onderzoek toont dat regelmatige beweging depressie, angst en slaap kan verbeteren."
      },
      {
        kop: "Waarom het werkt",
        tekst: "Beweging activeert het parasympathische systeem na inspanning, voert stresshormonen af, en geeft het brein positieve lichaamservaringen. Wandelen in de natuur, zwemmen, fietsen, dansen — alles telt. Het maakt ook onafgemaakte vlucht- of vechtenergie soms alsnog af — trillen na inspanning is normaal."
      },
      {
        kop: "Begin veilig",
        tekst: "Als je chronisch vermoeid bent, begin met 10 minuten wandelen, niet met marathontraining. Kies activiteiten die je zenuwstelsel niet overprikkelen. Vermijd competitie als dat stress geeft. Beweging is geen straf voor je lichaam — het is samenwerking. Combineer met traumatherapie voor diepere verwerking."
      }
    ],
    doeDit: [
      "Start klein: dagelijks 10–20 minuten wandelen of zachte beweging.",
      "Kies activiteiten die je zenuwstelsel kalmeren, niet overprikkelen.",
      "Let op hoe je je ná beweging voelt — ontspanning is het doel."
    ],
    vermijd: [
      "Overtraining als compensatie voor innerlijke pijn.",
      "Beweging als straf of 'moeten' in plaats van zorg.",
      "Doorgaan bij pijn, duizeligheid of dissociatie zonder aanpassing."
    ],
    zegDit: [
      "“Beweging helpt mijn lichaam spanning loslaten.”",
      "“Ik begin klein — elke stap telt.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over beweging en voltooide overlevingsacties."
      },
      {
        boek: "body-keeps-score",
        detail: "Over lichaamsactiviteit en traumaherstel."
      },
      {
        boek: "body-first-healing",
        detail: "Over lichaamsgerichte benaderingen en beweging."
      }
    ],
    gerelateerd: [
      "yoga-en-trauma",
      "spierspanning-trauma",
      "chronische-vermoeidheid-trauma"
    ]
  },
  {
    id: "massage-aanraking-grenzen",
    beeld: {
      src: "img/vragen/massage-aanraking-grenzen.jpg"
    },
    vraag: "Hoe ga ik om met massage en aanraking na trauma?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "massage",
      "aanraking",
      "grenzen",
      "toestemming",
      "lichaam",
      "touch"
    ],
    kort: "Aanraking kan helen of triggeren — bij trauma is toestemming, voorspelbaarheid en controle essentieel. Kies trauma-informed behandelaars, spreek grenzen vooraf, en weet dat 'nee' altijd mag, ook midden in een sessie.",
    blokken: [
      {
        tekst: "Massage, fysiotherapie, knuffels, intimiteit — aanraking hoort bij mens-zijn. Maar na trauma kan het lichaam aanraking associëren met gevaar, machteloosheid of overschrijding. Je verstijft, dissocieert, of vermijdt contact volledig. Dat is geen 'fout' — het is je zenuwstelsel dat beschermt."
      },
      {
        kop: "Wat trauma-informed betekent",
        tekst: "Een trauma-informed masseur of therapeut vraagt toestemming vóór elke zone, respecteert 'nee' zonder uitleg, laat jou de regie houden (druk, tempo, stilte), en forceert geen diep werk. Je mag kleding aanhouden, stoppen wanneer je wilt, en hoef je niet te praten. Voorspelbaarheid kalmeert het zenuwstelsel."
      },
      {
        kop: "Grenzen oefenen",
        tekst: "Begin met wat voelt bearable: misschien alleen handen of voeten, korte sessies, of zelfmassage. Werk in therapie aan aanraking wanneer professionele touch te heftig is. Intieme relaties vragen om expliciete communicatie: wat is oké, wat niet, en dat dat kan veranderen. Aanraking mag weer veilig worden — in jouw tempo, met jouw regels."
      }
    ],
    doeDit: [
      "Kies behandelaars die trauma-informed werken en grenzen respecteren.",
      "Spreek vooraf af: zones, druk, stopwoord, kleding.",
      "Begin met korte sessies of zelf-aanraking als professionele touch te veel is."
    ],
    vermijd: [
      "Doorgaan met aanraking die dissociatie of paniek triggert 'om eroverheen te komen'.",
      "Behandelaars die grenzen negeren of druk uitoefenen.",
      "Aanraking vermijden zonder ooit te onderzoeken wat wél veilig kan zijn."
    ],
    zegDit: [
      "“Ik bepaal waar en hoe aangeraakt wordt — stop is altijd oké.”",
      "“Mijn lichaam mag nee zeggen, ook zonder uitleg.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over aanraking, lichaamsgrenzen en trauma."
      },
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte rond het lichaam en grenzen herstellen."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over relationele en lichaamsgerichte werk met grenzen."
      }
    ],
    gerelateerd: [
      "kan-ik-geen-nee-zeggen",
      "trauma-seksualiteit-intimiteit",
      "yoga-en-trauma"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 9
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_9 = [
  {
    id: "woede-trauma-herkennen",
    beeld: {
      src: "img/vragen/woede-trauma-herkennen.jpg"
    },
    vraag: "Waarom voel ik zoveel woede — en hoort dat bij trauma?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "woede",
      "boosheid",
      "emoties",
      "grens",
      "onrecht",
      "regulatie"
    ],
    kort: "Woede na trauma is vaak geen karakterfout, maar een signaal van onrecht, grensoverschrijding of een lichaam dat nog in verdedigingsmodus staat. Je mag boos zijn — het gaat erom hoe je die woede veilig kunt dragen en begrijpen.",
    blokken: [
      {
        tekst: "Soms barst de woede uit het niets: een kleine opmerking, iemand die te dichtbij komt, een situatie die 'niets' lijkt. Je schrikt van jezelf. Anderen noemen je 'te fel'. Maar die woede komt zelden uit het niets — vaak is het oude pijn die nú een stem krijgt."
      },
      {
        kop: "Woede als bescherming",
        tekst: "Kinderen die machteloos waren, leerden soms dat verdriet of angst gevaarlijk was — maar woede gaf een fractie van kracht. Woede kan ook het zenuwstelsel activeren wanneer je vastzit in verdoving: het is energie die wil bewegen. Bij trauma wijst woede vaak op iets dat niet gezien, gehoord of gerespecteerd werd — niet op wie jij 'bent'."
      },
      {
        kop: "Van explosie naar begrip",
        tekst: "Het doel is niet om nooit meer boos te zijn, maar te leren wat je woede probeert te beschermen. Somatic werk, IFS, DBT of traumagerichte therapie kan helpen om woede te voelen zonder jezelf of anderen te schaden. Vraag jezelf: waar voel ik dit in mijn lichaam? Wat werd er overschreden? Wat had ik toen nodig?"
      }
    ],
    doeDit: [
      "Herken woede als signaal, niet als bewijs dat je 'slecht' bent.",
      "Let op lichaamssignalen vóór een uitbarsting: spanning, warmte, korte adem.",
      "Zoek hulp om woede veilig te reguleren en te begrijpen wat ze beschermt."
    ],
    vermijd: [
      "Woede volledig onderdrukken — dat versterkt vaak explosies later.",
      "Belangrijke beslissingen nemen midden in heftige woede.",
      "Jezelf 'toxisch' noemen alleen omdat je voelt wat er gebeurde."
    ],
    zegDit: [
      "“Mijn woede vertelt me dat er iets niet oké was.”",
      "“Ik mag boos zijn — ik leer hoe ik dat veilig uitdruk.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over hoe vastgelopen overlevingsenergie zich kan uiten als woede of agitatie."
      },
      {
        boek: "no-bad-parts",
        detail: "Over woede als beschermend deel, niet als vijand van jezelf."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over het kalmeren van emoties en woede bij complex trauma."
      }
    ],
    gerelateerd: [
      "constante-irritatie-oorzaak",
      "emotionele-overspoeling",
      "window-of-tolerance"
    ]
  },
  {
    id: "verdriet-blijft-hangen",
    beeld: {
      src: "img/vragen/verdriet-blijft-hangen.jpg"
    },
    vraag: "Waarom blijft mijn verdriet maar hangen?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "verdriet",
      "rouw",
      "verlies",
      "chronisch",
      "emoties",
      "verwerking"
    ],
    kort: "Aanhoudend verdriet hoort vaak bij onverwerkte verliezen, chronische onveiligheid of verdriet dat nooit veilig mocht worden gevoeld. Het verdwijnt niet door harder te vechten — het vraagt ruimte, erkenning en soms professionele begeleiding.",
    blokken: [
      {
        tekst: "Het is jaren geleden, of het voelt alsof het gisteren was — en toch is er een verdriet dat niet weggaat. Soms komt het in golven, soms is het een constante achtergrond. Je vraagt je af: moet ik dit niet allang 'verwerkt' hebben?"
      },
      {
        kop: "Verdriet dat niet afgerond kon",
        tekst: "Trauma-verdriet is niet altijd hetzelfde als rouw om een duidelijk verlies. Het kan gaan om het kind dat nooit getroost werd, om veiligheid die nooit kwam, om een zelf dat nooit mocht zijn wie het was. Zolang dat verlies niet erkend en gevoeld is — in een veilige context — kan verdriet blijven terugkomen."
      },
      {
        kop: "Ruimte in plaats van haast",
        tekst: "Verdriet wegduwen of minimaliseren ('anderen hadden het erger') verlengt het vaak. Traumagericht werk helpt niet door verdriet te forceren, maar door langzaam ruimte te maken: rituelen, schrijven, therapie, een veilige relatie waarin je mag huilen. Verdriet dat gezien wordt, verandert van vorm — het hoeft niet eeuwig even scherp te blijven."
      }
    ],
    doeDit: [
      "Erken dat langdurig verdriet een logisch gevolg kan zijn van wat je meemaakte.",
      "Zoek veilige uitlaatkleppen: schrijven, wandelen, iemand die luistert zonder te 'fixen'.",
      "Overweeg traumagerichte hulp als verdriet je dagelijks leven beperkt."
    ],
    vermijd: [
      "Jezelf een deadline geven voor 'klaar zijn met rouwen'.",
      "Verdriet vergelijken met andermans leed om het kleiner te maken.",
      "Alleen functioneren en nooit stilstaan bij wat je verloor."
    ],
    zegDit: [
      "“Mijn verdriet mag tijd kosten.”",
      "“Ik hoef niet over te zijn om verder te mogen leven.”"
    ],
    bronnen: [
      {
        boek: "journey-abandonment",
        detail: "Over diep verdriet bij verlatings- en hechtingstrauma."
      },
      {
        boek: "in-an-unspoken-voice",
        detail: "Over hoe het lichaam rouw en verlies vasthoudt wanneer woorden tekortschieten."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over verwerking van vroege verliezen en gemiste ontwikkelingsbehoeften."
      }
    ],
    gerelateerd: [
      "verlies-rouw-vs-trauma",
      "waarom-voel-ik-me-leeg",
      "emotionele-uitputting"
    ]
  },
  {
    id: "gevoelloosheid-na-trauma",
    beeld: {
      src: "img/vragen/gevoelloosheid-na-trauma.jpg"
    },
    vraag: "Waarom voel ik me gevoelloos of verdoofd?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "numb",
      "verdoofd",
      "dissociatie",
      "shutdown",
      "gevoelloos",
      "afsluiten"
    ],
    kort: "Gevoelloosheid is vaak een overlevingsreactie: je zenuwstelsel klapt dicht ('shutdown') wanneer voelen te overweldigend werd. Het is geen bewijs dat je geen gevoelens hebt — ze zitten vaak op afstand, wachtend op veiligheid.",
    blokken: [
      {
        tekst: "Je kijkt naar iets dat verdrietig of spannend zou moeten zijn, en voelt… niets. Of je voelt alsof je achter glas zit. Anderen zeggen dat je 'koud' bent, terwijl jij soms denkt: als ik alles zou voelen, zou ik instorten."
      },
      {
        kop: "Dichtklappen (shutdown) als bescherming",
        tekst: "Naast vechten en vluchten kent het zenuwstelsel een derde reactie: bevriezen of afsluiten. Wanneer gevaar te groot was of hulp ontbrak, kan verdoving de enige optie zijn geweest. Die strategie werkte toen. Nu kan ze ervoor zorgen dat je je afgesneden voelt van vreugde én van pijn."
      },
      {
        kop: "Terug naar voelen, in kleine stappen",
        tekst: "Gevoelloosheid verdwijnt niet door jezelf te dwingen. Begin met lichaamssignalen: spanning, warmte, vermoeidheid. Lichaamsgerichte oefeningen, aarden (grounding) en traumatherapie die afhaken (dissociatie) serieus neemt, helpen je geleidelijk weer contact maken — zonder overspoeling. Voelen is een vaardigheid die je opnieuw kunt leren."
      }
    ],
    doeDit: [
      "Zie verdoving als bescherming, niet als persoonlijk gebrek.",
      "Oefen korte lichaams-checks: waar voel ik spanning of niets?",
      "Zoek hulp die afhaken (dissociatie) en dichtklappen herkent en stap voor stap werkt."
    ],
    vermijd: [
      "Jezelf 'emotioneel onbeschikbaar' noemen als karakteroordeel.",
      "Alles op één keer willen voelen — dat kan het systeem opnieuw afsluiten.",
      "Gevoelloosheid negeren en doorgaan alsof alles normaal is."
    ],
    zegDit: [
      "“Mijn verdoving beschermde me toen voelen te veel was.”",
      "“Ik leer langzaam weer contact maken met mijn lichaam.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over dichtklappen (shutdown) en hoe het zenuwstelsel afsluit bij overweldiging."
      },
      {
        boek: "when-body-speaks",
        detail: "Over het lichaam dat emoties opslaat wanneer bewust voelen onmogelijk was."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over afhaken (dissociatie) en verdoofde delen die bescherming boden."
      }
    ],
    gerelateerd: [
      "waarom-voel-ik-me-leeg",
      "dissociatie-naast-mezelf",
      "wat-is-grounding"
    ]
  },
  {
    id: "constante-irritatie-oorzaak",
    beeld: {
      src: "img/vragen/constante-irritatie-oorzaak.jpg"
    },
    vraag: "Waarom ben ik constant geïrriteerd?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "irritatie",
      "prikkelbaar",
      "kort lontje",
      "stress",
      "hyperalert",
      "overprikkeling"
    ],
    kort: "Constante irritatie wijst vaak op een overbelast zenuwstelsel: te weinig rust, te veel prikkels, of onderliggende angst en pijn die geen andere uitweg vindt. Het is zelden 'gewoon je karakter'.",
    blokken: [
      {
        tekst: "Kleine dingen ergeren je: geluiden, traag rijden, iemand die iets vraagt, een onverwachte aanraking. Je voelt je schuldig achteraf, maar in het moment is alles te veel. Alsof je huid van binnenuit rauw is."
      },
      {
        kop: "Een systeem op het randje",
        tekst: "Altijd op scherp staan en langdurige stress maken je zenuwstelsel gevoelig voor elke extra prikkel. Irritatie is soms de dunne laag boven angst, verdriet of uitputting. Wanneer je lang in overlevingsmodus hebt geleefd, heeft je systeem weinig buffer — elke kleine storing voelt als een dreiging."
      },
      {
        kop: "Eerst kalmeren, dan pas oordelen",
        tekst: "Meer wilskracht lost dit niet op. Rust, voorspelbaarheid, slaap, beweging en het verlagen van prikkels helpen. Therapie kan onderliggende triggers en emoties aanpakken. Vraag niet alleen 'waarom ben ik zo irritabel', maar 'wat heeft mijn systeem nú nodig om te kalmeren?'"
      }
    ],
    doeDit: [
      "Check basisbehoeften: slaap, eten, rust, te veel prikkels?",
      "Plan herstelmomenten in — je zenuwstelsel heeft buffer nodig.",
      "Onderzoek of irritatie een masker is voor angst, verdriet of woede."
    ],
    vermijd: [
      "Jezelf strenger zijn — dat voegt alleen druk toe.",
      "Irritatie wegwuiven als 'gewoon slecht humeur'.",
      "Blijven functioneren zonder je systeem ooit te laten herstellen."
    ],
    zegDit: [
      "“Ik ben overprikkeld — dit is geen karakterfout.”",
      "“Ik heb nu rust nodig, niet meer taken.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over prikkelbaarheid en moeite om je emoties te kalmeren bij CPTSS."
      },
      {
        boek: "neurodivergent-somatics",
        detail: "Over overprikkeling en het kalmeren van je zenuwstelsel."
      },
      {
        boek: "when-body-says-no",
        detail: "Over hoe chronische stress zich uit als constante spanning en kort lontje."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "woede-trauma-herkennen",
      "waarom-ben-ik-altijd-moe"
    ]
  },
  {
    id: "angst-zonder-duidelijke-oorzaak",
    beeld: {
      src: "img/vragen/angst-zonder-duidelijke-oorzaak.jpg"
    },
    vraag: "Waarom heb ik angst zonder duidelijke reden?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "angst",
      "vage angst",
      "onverklaarbaar",
      "alarm",
      "lichaam",
      "trigger"
    ],
    kort: "Angst zonder 'reden' is vaak je lichaam dat oude gevaarssignalen herkent — niet je verstand dat overdrijft. Het alarm ging ooit af voor goede redenen; het is alleen nog niet bijgeleerd dat het nu vaak veilig is.",
    blokken: [
      {
        tekst: "Rationeel weet je dat er niets aan de hand is. Toch knijpt je borst, raast je hart, of voel je een vaag gevaar. Je zoekt een verklaring en vindt er geen. Dat maakt het extra beangstigend — alsof je niet meer op jezelf kunt vertrouwen."
      },
      {
        kop: "Het lichaam onthoudt",
        tekst: "Trauma slaat gevaar op in het zenuwstelsel, niet alleen in bewuste herinneringen. Een geur, een toon, een gevoel van machteloosheid kan het alarm activeren zonder dat je weet waarom. Die angst is echt — alleen de timing klopt niet altijd met het huidige moment."
      },
      {
        kop: "Van angst naar begrip",
        tekst: "Grounding, ademwerk en traumatherapie helpen je lichaam onderscheid te leren tussen toen en nu. Benoem wat er gebeurt: 'dit is oud alarm'. Zoek professionele hulp als angst je leven beperkt. Je hoeft de angst niet logisch te maken om haar serieus te nemen."
      }
    ],
    doeDit: [
      "Benoem het: 'mijn lichaam denkt dat er gevaar is'.",
      "Gebruik grounding en langzame uitademing wanneer angst opkomt.",
      "Houd een dagboek bij: wat gebeurde vlak vóór de angst?"
    ],
    vermijd: [
      "Jezelf 'irrationeel' noemen — dat helpt het alarm niet kalmeren.",
      "Angst volledig vermijden — dat houdt het systeem gespannen.",
      "Medische hulp uitstellen als angst fysieke klachten geeft."
    ],
    zegDit: [
      "“Deze angst is echt, ook al zie ik de oorzaak niet.”",
      "“Ik ben nu veilig — mijn alarm is te gevoelig.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe angst in het lichaam wordt opgeslagen en later zonder context activeert."
      },
      {
        boek: "end-of-trauma",
        detail: "Over het herkalibreren van het alarmsysteem na trauma."
      },
      {
        boek: "ptsdreams",
        detail: "Over angst, slaap en onbewuste verwerking van gevaar."
      }
    ],
    gerelateerd: [
      "wat-is-een-trigger",
      "wat-is-hyperalertheid",
      "paniek-versus-trauma"
    ]
  },
  {
    id: "paniek-versus-trauma",
    beeld: {
      src: "img/vragen/paniek-versus-trauma.jpg"
    },
    vraag: "Wat is het verschil tussen paniek en trauma-reacties?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "paniek",
      "paniekaanval",
      "trauma",
      "flashback",
      "alarm",
      "verschil"
    ],
    kort: "Paniek en trauma-reacties overlappen — beide komen uit een overactief alarmsysteem. Paniek voelt vaak plots en lichamelijk; trauma-reacties kunnen getriggerd worden door specifieke herinneringen of gevoelens van machteloosheid uit het verleden.",
    blokken: [
      {
        tekst: "Je hart bonkt, je adem stokt, je denkt dat je gek wordt of sterft. Is dit een paniekaanval? Een flashback? Een trauma-reactie? Het voelt allemaal even heftig — en het verschil is niet altijd meteen duidelijk."
      },
      {
        kop: "Paniek: het lichaam alarmeert",
        tekst: "Een paniekaanval is een plotselinge piek van angst met sterke lichamelijke symptomen: hartkloppingen, duizeligheid, beven, doodsangst. Het kan 'zonder aanleiding' komen, maar vaak speelt een overbelast zenuwstelsel mee. Bij trauma is paniek extra voorkomend omdat het alarmsysteem al op scherp staat."
      },
      {
        kop: "Trauma: het verleden in het heden",
        tekst: "Trauma-reacties — inclusief emotionele flashbacks — worden vaak getriggerd door iets dat lijkt op vroeger: een toon, een gevoel van verloren zijn, een situatie van machteloosheid. Je voelt niet alleen angst, maar soms ook woede, schaamte of verdoving. Behandeling overlapt deels, maar traumawerk kijkt ook naar wat het alarm ooit leerde."
      }
    ],
    doeDit: [
      "Leer je eigen patronen herkennen: plots vs. na een trigger.",
      "Gebruik grounding bij acute episodes; zoek hulp voor beide.",
      "Bespreek met een hulpverlener of er trauma onder paniek zit."
    ],
    vermijd: [
      "Denken dat je 'alleen' paniek hebt en trauma uitsluiten.",
      "Symptomen negeren omdat je de aanleiding niet vindt.",
      "Zelfmedicatie met alcohol of kalmerende middelen zonder begeleiding."
    ],
    zegDit: [
      "“Dit is mijn alarmsysteem — het gaat voorbij.”",
      "“Ik hoef niet te weten welk label het is om hulp te zoeken.”"
    ],
    bronnen: [
      {
        boek: "cptsd-coping-workbook",
        detail: "Over coping bij acute angst en trauma-ontregeling."
      },
      {
        boek: "dbt-cptsd-workbook",
        detail: "Over vaardigheden bij intense emoties en paniek."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over overlevingsreacties die lijken op paniek."
      }
    ],
    gerelateerd: [
      "flashback-wat-doe-ik",
      "emotionele-overspoeling",
      "wat-is-grounding"
    ]
  },
  {
    id: "emoties-benomen-leren",
    beeld: {
      src: "img/vragen/emoties-benomen-leren.jpg"
    },
    vraag: "Hoe leer ik mijn emoties benoemen?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "emoties benoemen",
      "alexithymie",
      "emotiewoorden",
      "herkennen",
      "CEN",
      "bewustwording"
    ],
    kort: "Emoties benoemen is een vaardigheid die je soms nooit hebt mogen leren — vooral na emotionele verwaarlozing of trauma. Je begint klein: lichaamssignalen, simpele woorden, en oefenen in veilige context.",
    blokken: [
      {
        tekst: "Iemand vraagt 'hoe voel je je?' en je weet het niet. Je zegt 'oké' of 'moe', terwijl er vanbinnen storm is — of juist leegte. Emoties benoemen voelt als een vreemde taal die anderen wel spreken."
      },
      {
        kop: "Waarom het moeilijk is",
        tekst: "Kinderen leren emotietaal door gespiegeld te worden: 'je bent verdrietig', 'dat is eng'. Wie dat miste, of wie voelen gevaarlijk vond, bouwde geen woorden voor innerlijke ervaringen. Dat heet soms alexithymie — niet 'geen gevoelens', maar moeite om ze te identificeren en te benoemen."
      },
      {
        kop: "Oefenen in laag tempo",
        tekst: "Begin bij het lichaam: spanning, warmte, holte, rusteloosheid. Koppel daar simpele woorden aan: bang, boos, verdrietig, gespannen, opgelucht. Gebruik emotielijsten, dagboeken of apps. In therapie kun je veilig oefenen zonder dat je meteen alles hoeft te delen. Elke stap telt."
      }
    ],
    doeDit: [
      "Start bij lichaamssignalen vóór je zoekt naar het 'juiste' woord.",
      "Gebruik een emotiewoordenlijst als hulpmiddel, niet als toets.",
      "Oefen in veilige relaties of therapie — niet onder druk."
    ],
    vermijd: [
      "Jezelf 'emotioneel ongeletterd' beschamen.",
      "Complexe emoties verwachten voordat je basiswoorden kent.",
      "Voelen forceren in onveilige situaties."
    ],
    zegDit: [
      "“Ik weet het nog niet precies — ik voel wel iets in mijn lichaam.”",
      "“Ik leer een taal die ik vroeger niet mocht oefenen.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over moeite met emoties herkennen bij emotionele verwaarlozing."
      },
      {
        boek: "attached",
        detail: "Over het kalmeren van emoties en het leren van een taal voor gevoelens in relaties."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over het stap voor stap terugkrijgen van grip op je emoties."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "gevoelloosheid-na-trauma",
      "window-of-tolerance"
    ]
  },
  {
    id: "emotionele-uitputting",
    beeld: {
      src: "img/vragen/emotionele-uitputting.jpg"
    },
    vraag: "Wat is emotionele uitputting?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "uitputting",
      "burn-out",
      "emoties",
      "overbelasting",
      "CPTSS",
      "energie"
    ],
    kort: "Emotionele uitputting is het gevoel dat je innerlijke batterij leeg is: te veel voelen, te veel onderdrukken, of te lang voor anderen zorgen. Bij trauma is het vaak een teken dat je zenuwstelsel en grenzen structureel overbelast zijn.",
    blokken: [
      {
        tekst: "Je kunt niet meer luisteren, niet meer troosten, niet meer 'erbij zijn'. Zelfs kleine emotionele vragen van anderen voelen als te veel. Je bent niet hard geworden — je bent leeg."
      },
      {
        kop: "Wanneer emoties te veel kosten",
        tekst: "Mensen met trauma dragen vaak jarenlang onverwerkte pijn, het altijd op scherp staan, en de behoeften van anderen. Emotioneel onderdrukken kost ook energie. Op een gegeven moment is er geen buffer meer — je reageert verdoofd, geïrriteerd of burn-outachtig. Dat is geen zwakte; het is overbelasting."
      },
      {
        kop: "Herstel begint bij grenzen",
        tekst: "Emotionele uitputting vraagt rust, minder prikkels, en vaak hulp om patronen te doorbreken: people-pleasing, geen nee zeggen, altijd de sterke zijn. Traumatherapie en zelfcompassie helpen je leren dat jouw energie eindig is — en beschermbaar mag zijn."
      }
    ],
    doeDit: [
      "Erken uitputting als signaal, niet als falen.",
      "Verminder emotionele last waar mogelijk: minder verplichtingen, meer rust.",
      "Zoek hulp bij aanhoudende leegte of burn-out-klachten."
    ],
    vermijd: [
      "Doorploegen tot je volledig instort.",
      "Jezelf verwijten dat je 'niet empathisch genoeg' bent.",
      "Uitputting oplossen met alleen vakantie, zonder grenzen te herzien."
    ],
    zegDit: [
      "“Ik ben emotioneel leeg — ik heb herstel nodig.”",
      "“Ik mag nu minder geven zonder schuldig te zijn.”"
    ],
    bronnen: [
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over uitputting bij langdurig zorgen en emotionele overbelasting."
      },
      {
        boek: "disease-to-please",
        detail: "Over hoe people-pleasing leidt tot emotionele uitputting."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over chronische uitputting als CPTSS-symptoom."
      }
    ],
    gerelateerd: [
      "waarom-ben-ik-altijd-moe",
      "people-pleasing-herkennen",
      "verdriet-blijft-hangen"
    ]
  },
  {
    id: "jaloezie-hechting-trauma",
    beeld: {
      src: "img/vragen/jaloezie-hechting-trauma.jpg"
    },
    vraag: "Waarom voel ik zoveel jaloezie — en wat zegt dat over hechting?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "jaloezie",
      "hechting",
      "verlatingsangst",
      "onveilig",
      "relatie",
      "behoefte"
    ],
    kort: "Jaloezie wijst vaak op oude angst voor verlies, verlaten worden of niet genoeg zijn — niet op 'bezitterigheid' als karakterfout. Het is een signaal van een hechtingssysteem dat veiligheid nog niet vertrouwt.",
    blokken: [
      {
        tekst: "Je ziet je partner lachen met iemand anders, of een vriend krijgt aandacht die jij mist, en plotseling knijpt iets in je borst. Schaamte volgt snel. Je denkt: ik ben jaloers, ik ben toxisch. Maar jaloezie vertelt vaak een ouder verhaal."
      },
      {
        kop: "Hechting en verliesangst",
        tekst: "Bij onveilige hechting leerde je dat liefde weg kan vallen, dat anderen belangrijker zijn, of dat je constant moet vechten om aandacht. Jaloezie is dan geen 'fout gevoel', maar een alarm: 'ik raak iemand kwijt' of 'ik ben niet genoeg'. Het komt uit overlevingslogica, niet uit liefde zelf."
      },
      {
        kop: "Van schaamte naar behoefte",
        tekst: "In plaats van jaloezie te onderdrukken, vraag: welke behoefte zit eronder? Zekerheid, nabijheid, erkenning? EFT en hechtingsgerichte therapie helpen partners en vrienden dit te begrijpen. Jaloezie wordt kleiner wanneer veiligheid groeit — niet wanneer je jezelf harder straft."
      }
    ],
    doeDit: [
      "Vraag bij jaloezie: 'waar ben ik bang voor te verliezen?'",
      "Deel je angst zonder beschuldigen — bij voorkeur wanneer je kalm bent.",
      "Overweeg hechtingsgerichte therapie bij hardnekkige jaloezie."
    ],
    vermijd: [
      "Jaloezie als bewijs dat je 'niet goed genoeg bent voor een relatie'.",
      "Controleren, stalken of grenzen van anderen schenden.",
      "Jaloezie alleen wegduwen zonder de onderliggende angst te onderzoeken."
    ],
    zegDit: [
      "“Onder mijn jaloezie zit angst om verlaten te worden.”",
      "“Ik heb geruststelling nodig — dat is een behoefte, geen zwakte.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hechtingsstijlen en hoe angst en vermijding jaloezie voeden."
      },
      {
        boek: "hold-me-tight",
        detail: "Over jaloezie en verbindingsbehoeften in partnerrelaties."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsangst als wortel van intense jaloezie."
      }
    ],
    gerelateerd: [
      "jaloezie-partnerrelatie",
      "wat-is-verlatingsangst",
      "anxious-avoidant-dans"
    ]
  },
  {
    id: "schaamte-na-grensoverschrijding",
    beeld: {
      src: "img/vragen/schaamte-na-grensoverschrijding.jpg"
    },
    vraag: "Waarom schaam ik me zo na grensoverschrijding?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "schaamte",
      "grenzen",
      "overschrijding",
      "misbruik",
      "schuld",
      "zelfbeschuldiging"
    ],
    kort: "Schaamte na grensoverschrijding wijst vaak op het gevoel 'ik ben fout' — terwijl de grens door iemand anders werd overschreden. Schaamte beschermt soms tegen woede of verdriet; het is te begrijpen én te ontkrachten.",
    blokken: [
      {
        tekst: "Iemand ging te ver — met je lichaam, je vertrouwen, je privacy. En toch draag jij de schaamte alsof jij iets verkeerd deed. Je verbergt het, minimaliseert het, of denkt dat anderen je anders zouden zien als ze het wisten."
      },
      {
        kop: "Schaamte vs. schuld",
        tekst: "Schuld zegt: ik deed iets fout. Schaamte zegt: ík ben fout. Bij grensoverschrijding hoort schuld bij de dader — maar slachtoffers dragen vaak schaamte, vooral als ze jong waren, afhankelijk, of niet werden geloofd. Schaamte houdt je klein en stil; dat beschermde je soms destijds, maar kost je nu veel."
      },
      {
        kop: "De schaamte teruggeven",
        tekst: "Heling betekent langzaam de schaamte te verplaatsen: wat gebeurde, was niet jouw schuld. Therapie, zelfcompassie en soms schrijven of getuigen helpen. Je mag boos zijn op wat er gebeurde. Schaamte verliest macht wanneer je het in woorden durft te brengen — ook al is dat eng."
      }
    ],
    doeDit: [
      "Oefen: 'ik schaam me, maar wat gebeurde was niet mijn schuld'.",
      "Zoek iemand die gelooft en niet minimaliseert.",
      "Overweeg traumatherapie die schaamte en schuld apart behandelt."
    ],
    vermijd: [
      "Schaamte gebruiken als bewijs dat je 'meespeelde' of 'het verdiende'.",
      "Jezelf isoleren uit angst voor oordeel.",
      "Snel 'vergeven' om schaamte niet te hoeven voelen."
    ],
    zegDit: [
      "“De schaamte hoort niet bij mij — bij wat er gebeurde.”",
      "“Ik was niet fout. Mijn grens werd overschreden.”"
    ],
    bronnen: [
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte die vastzit na grensoverschrijding en misbruik."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over het teruggeven van schuld en schaamte aan wie ze toekomen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrijpen wat er met je gebeurde zonder jezelf te beschuldigen."
      }
    ],
    gerelateerd: [
      "waarom-zoveel-schaamte",
      "schuldgevoel-na-misbruik",
      "kan-ik-geen-nee-zeggen"
    ]
  },
  {
    id: "schuldgevoel-na-misbruik",
    beeld: {
      src: "img/vragen/schuldgevoel-na-misbruik.jpg"
    },
    vraag: "Waarom voel ik schuld na misbruik?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "schuld",
      "misbruik",
      "slachtoffer",
      "zelfbeschuldiging",
      "kinderlogica",
      "schuldgevoel"
    ],
    kort: "Schuld na misbruik is een veelvoorkomend trauma-spoor: kinderen (en volwassenen) zoeken logica in chaos en nemen verantwoordelijkheid om een wereld van onmacht te verdragen. De schuld is niet waar — maar het gevoel is echt.",
    blokken: [
      {
        tekst: "'Had ik nee moeten zeggen?' 'Waarom heb ik niet weggegaan?' 'Misschien gaf ik signalen.' De vragen blijven komen, ook al weet je rationeel dat iemand je pijn deed. Schuld voelt alsof het de waarheid is."
      },
      {
        kop: "Kinderlogica en overleving",
        tekst: "Wanneer een kind wordt misbruikt door iemand die het zou moeten beschermen, is de enige 'aanpasbare' verklaring vaak: ik ben fout. Dat houdt hoop in dat gedrag verandering kan brengen — en het beschermt tegen de volle woede op een onmachtige situatie. Die logica blijft soms jaren hangen."
      },
      {
        kop: "Schuld is geen bewijs",
        tekst: "Schuld na misbruik is een symptoom, geen feit. Therapie helpt de verantwoordelijkheid terug te leggen waar die hoort. Dat betekent niet dat je alles opnieuw moet doorleven — wel dat je innerlijke verhaal mag veranderen van 'ik liet het toe' naar 'ik overleefde wat ik niet kon stoppen'."
      }
    ],
    doeDit: [
      "Herhaal: overleven is geen instemming.",
      "Schrijf een brief aan je jongere zelf — met compassie, niet met oordeel.",
      "Zoek gespecialiseerde hulp bij misbruik en schuldgevoelens."
    ],
    vermijd: [
      "Schuld gebruiken om anderen te sparen of jezelf te straffen.",
      "Details analyseren alsof je 'bewijs' zoekt van eigen schuld.",
      "Jezelf haasten naar vergeving voordat je schuld erkent als trauma-spoor."
    ],
    zegDit: [
      "“Ik deed wat ik kon om te overleven.”",
      "“De schuld is van degene die mij pijn deed — niet van mij.”"
    ],
    bronnen: [
      {
        boek: "its-not-your-fault",
        detail: "Over schuldgevoelens bij misbruik en hoe ze ontstaan."
      },
      {
        boek: "wounded-inner-child",
        detail: "Over het innerlijke kind dat de schuld opnam om te overleven."
      },
      {
        boek: "politics-of-trauma",
        detail: "Over maatschappelijke en persoonlijke dynamiek van schuld bij slachtoffers."
      }
    ],
    gerelateerd: [
      "schaamte-na-grensoverschrijding",
      "waarom-zoveel-schaamte",
      "vergeven-om-te-helen"
    ]
  },
  {
    id: "emotionele-overspoeling",
    beeld: {
      src: "img/vragen/emotionele-overspoeling.jpg"
    },
    vraag: "Wat is emotionele overspoeling en wat kan ik doen?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "overspoeling",
      "overweldigd",
      "emoties",
      "window of tolerance",
      "regulatie",
      "crisis"
    ],
    kort: "Emotionele overspoeling is wanneer gevoelens je helemaal overnemen en je niet meer kunt denken, praten of kalmeren. Het hoort bij trauma wanneer de zone waarin je spanning aankunt (je 'window of tolerance') te smal is geworden — vaardigheden om te kalmeren en hulp kunnen die zone weer breder maken.",
    blokken: [
      {
        tekst: "Het begint als een golf: verdriet, woede, paniek — en plotseling ben je erin. Je kunt niet meer helder nadenken, je zegt dingen die je betreurt, of je verdooft helemaal. Na afloop voel je je uitgeput en beschaamd."
      },
      {
        kop: "Buiten de zone die je aankunt",
        tekst: "Iedereen heeft een zone waarin emoties te dragen zijn — je 'window of tolerance' (hoeveel spanning je aankunt). Trauma maakt die zone vaak smaller: kleine triggers kunnen je eruit duwen. Schiet je er bovenuit: te veel spanning (paniek, woede). Zak je er onderuit: dichtklappen (verdoving). Beide voelen als verlies van controle."
      },
      {
        kop: "Terug in je zone",
        tekst: "In het moment: verander je omgeving, gebruik koud water, druk met je voeten, adem langzaam uit. Op langere termijn: DBT-vaardigheden, aarden (grounding), traumatherapie en veilige relaties maken je zone breder. Overspoeling is geen falen — het is een signaal dat je systeem hulp nodig heeft."
      }
    ],
    doeDit: [
      "Herken vroege signalen: hartslag, hete oren, tunnelvisie, drang om weg te gaan.",
      "Gebruik snelle kalmeer-technieken: koude, beweging, intens ademen, druk.",
      "Werk in therapie aan het breder maken van de zone die je aankunt (window of tolerance)."
    ],
    vermijd: [
      "Belangrijke gesprekken voeren wanneer je al bijna overspoeld bent.",
      "Jezelf straffen na een episode — dat vergroot schaamte en spanning.",
      "Overspoeling negeren en doorgaan alsof je 'gewoon moet kunnen'."
    ],
    zegDit: [
      "“Ik ben overspoeld — ik heb even pauze nodig.”",
      "“Dit gaat voorbij. Ik leer mijn zone breder te maken.”"
    ],
    bronnen: [
      {
        boek: "dbt-cptsd-workbook",
        detail: "Over vaardigheden bij emotionele overspoeling en crisis."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over hoeveel spanning je aankunt (window of tolerance) bij complex trauma."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over jezelf kalmeren en omgaan met overweldigende emoties."
      }
    ],
    gerelateerd: [
      "window-of-tolerance",
      "wat-is-grounding",
      "paniek-versus-trauma"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 10
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_10 = [
  {
    id: "veilige-hechting-opbouwen",
    beeld: {
      src: "img/vragen/veilige-hechting-opbouwen.jpg"
    },
    vraag: "Kan ik als volwassene nog veilige hechting opbouwen?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "veilige hechting",
      "hechting",
      "herstel",
      "relaties",
      "vertrouwen",
      "volwassenheid"
    ],
    kort: "Ja — hechting is geen vaststaand lot. Via veilige relaties, therapie en oefenen met nabijheid en grenzen kun je als volwassene leren wat je vroeger miste: voorspelbaarheid, troost en het gevoel dat je er mag zijn.",
    blokken: [
      {
        tekst: "Als je opgroeide met onveilige hechting, kan het voelen alsof 'veilig verbonden zijn' voor anderen is, niet voor jou. Je twijfelt of je nog kunt veranderen. Het goede nieuws: het hechtingssysteem blijft leerbaar — ook op volwassen leeftijd."
      },
      {
        kop: "Earned secure attachment",
        tekst: "Onderzoekers spreken van 'verdiende veilige hechting': mensen met een moeilijk verleden die via reflectie, therapie en stabiele relaties leren wat veiligheid is. Dat betekent niet dat je nooit meer angst voelt — wel dat je herkent wanneer oud alarm afgaat en stap voor stap nieuwe ervaringen opbouwt."
      },
      {
        kop: "Wat helpt concreet?",
        tekst: "Een therapeut die consistent en betrouwbaar is. Een partner of vriend die respectvol blijft, ook bij conflicten. Oefenen met kwetsbaarheid in kleine doses. Grenzen stellen zonder relaties meteen te verlaten. Veilige hechting groeit in herhaling — niet in één perfecte relatie."
      }
    ],
    doeDit: [
      "Zoek één betrouwbare relatie om in te oefenen — therapeut, vriend of partner.",
      "Let op consistentie: komen mensen terug na moeilijke momenten?",
      "Vier kleine successen: een eerlijk gesprek, een grens die gerespecteerd werd."
    ],
    vermijd: [
      "Denken dat je 'te beschadigd' bent om ooit veilig te hechten.",
      "Perfectionisme: één conflict betekent niet dat alles mislukt.",
      "Onveilige dynamiek rationaliseren omdat 'passie' hoort bij liefde."
    ],
    zegDit: [
      "“Mijn hechtingsstijl is niet mijn lot — ik kan leren.”",
      "“Veiligheid bouw ik op in kleine, herhaalde ervaringen.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hechtingsstijlen en hoe ze veranderen door nieuwe ervaringen."
      },
      {
        boek: "hold-me-tight",
        detail: "Over het opbouwen van veilige verbinding in volwassen relaties."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht en herstel van hechting na tegenspoed."
      }
    ],
    gerelateerd: [
      "anxious-avoidant-dans",
      "vertrouwen-opnieuw-leren",
      "nabijheid-zonder-paniek"
    ]
  },
  {
    id: "anxious-avoidant-dans",
    beeld: {
      src: "img/vragen/anxious-avoidant-dans.jpg"
    },
    vraag: "Wat is de anxious-avoidant dans in relaties?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "anxious",
      "avoidant",
      "hechting",
      "relatiepatroon",
      "push-pull",
      "dynamiek"
    ],
    kort: "De anxious-avoidant dans is een patroon waarin de één nabijheid zoekt en de ander afstand neemt — vaak elkaar versterkend. Het voelt als liefde, maar is vaak oude hechtingsangst die elkaar triggert.",
    blokken: [
      {
        tekst: "De ene partner wordt onrustig, stuurt extra berichten, wil 'praten over ons'. De ander trekt zich terug, wordt koud, heeft 'ruimte nodig'. Hoe meer de één nadert, hoe verder de ander wegloopt — tot de achtervolger opgeeft en de vermijdende partner weer naderbij komt. Herkenbaar?"
      },
      {
        kop: "Twee overlevingsstrategieën",
        tekst: "Angstige hechting leerde: nabijheid is broos, ik moet vechten om niet verlaten te worden. Vermijdende hechting leerde: nabijheid is gevaarlijk, afstand houdt me veilig. Samen creëren ze een dans die beide in oude pijn houdt — zonder dat iemand 'de slechte' is."
      },
      {
        kop: "De dans doorbreken",
        tekst: "Inzicht is stap één: herken wanneer je achtervolgt of terugtrekt. Stap twee: communiceer je angst in plaats van je gedrag te laten spreken. Stap drie: EFT of hechtingsgerichte therapie helpt koppels elkaars signalen begrijpen. De dans stopt niet door harder te vechten — maar door veiliger te worden."
      }
    ],
    doeDit: [
      "Herken je rol: achtervolger, vermijder, of afwisselend.",
      "Pauzeer bij hevige drang om te appen of weg te lopen — adem eerst.",
      "Overweeg EFT of hechtingsgerichte relatietherapie."
    ],
    vermijd: [
      "Je partner 'fixen' in plaats van je eigen hechtingspatroon te onderzoeken.",
      "De dans romantiseren als 'intense liefde'.",
      "Afstand nemen zonder te zeggen wat je voelt."
    ],
    zegDit: [
      "“Ik merk dat ik ga achtervolgen — ik ben bang dat je weggaat.”",
      "“Ik trek me terug omdat nabijheid eng is — niet omdat ik je niet leuk vind.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over angstige en vermijdende hechting en hun dynamiek."
      },
      {
        boek: "hold-me-tight",
        detail: "Over de negatieve cyclus en hoe koppels die kunnen doorbreken."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsangst achter het achtervolgen."
      }
    ],
    gerelateerd: [
      "jaloezie-hechting-trauma",
      "verlaten-worden-vrezen",
      "intimiteit-en-angst"
    ]
  },
  {
    id: "vriendschappen-en-trauma",
    beeld: {
      src: "img/vragen/vriendschappen-en-trauma.jpg"
    },
    vraag: "Hoe beïnvloedt trauma mijn vriendschappen?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "vriendschap",
      "relaties",
      "vertrouwen",
      "eenzaamheid",
      "grenzen",
      "verbinding"
    ],
    kort: "Trauma kan vriendschappen maken ingewikkeld: te snel vertrouwen of juist niemand binnenlaten, jaloezie, verdwijnen bij conflict, of het gevoel dat je 'te veel' bent. Met inzicht en veilige oefening zijn diepe vriendschappen wél mogelijk.",
    blokken: [
      {
        tekst: "Sommigen hebben tientallen oppervlakkige contacten maar niemand die echt weet wie ze zijn. Anderen verdwijnen na de eerste teleurstelling. Weer anderen worden de 'therapeut' van de groep en raken uitgeput. Trauma kleurt hoe je verbinding zoekt én vermijdt."
      },
      {
        kop: "Typische patronen",
        tekst: "Moeite met vertrouwen na verraad of verwaarlozing. Overmatig aanpassen om niet afgewezen te worden. Jaloezie wanneer vrienden anderen kiezen. Conflicten ervaren als gevaar — en vriendschappen beëindigen voordat je afgewezen wordt. Of: niemand toe laten omdat kwetsbaarheid te eng is."
      },
      {
        kop: "Vriendschap als oefenveld",
        tekst: "Vriendschappen kunnen een veilige plek zijn om hechting te herstellen — zonder de intensiteit van een partnerrelatie. Begin met één betrouwbare persoon, wees eerlijk over je tempo, en oefen grenzen. Niet elke vriendschap hoeft diep te zijn; wel helpt één echte verbinding meer dan twintig oppervlakkige."
      }
    ],
    doeDit: [
      "Reflecteer: vermijd ik nabijheid, of geef ik mezelf weg?",
      "Investeer bewust in één of twee betrouwbare vriendschappen.",
      "Communiceer je tempo: 'ik heb tijd nodig om te vertrouwen'."
    ],
    vermijd: [
      "Jezelf isoleren en denken dat niemand je zou begrijpen.",
      "Vriendschappen als therapie gebruiken zonder wederkerigheid.",
      "Meteen afbreken bij de eerste teleurstelling zonder te praten."
    ],
    zegDit: [
      "“Ik laat mensen langzaam toe — dat is oké.”",
      "“Ik wil graag vrienden, en ik leer hoe dat voor mij werkt.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over moeite met emotionele nabijheid in vriendschappen na CEN."
      },
      {
        boek: "carefrontation",
        detail: "Over eerlijke communicatie en grenzen in relaties."
      },
      {
        boek: "tiny-traumas",
        detail: "Over kleine wonden in relaties en het terugvinden van verbinding."
      }
    ],
    gerelateerd: [
      "ondersteunend-netwerk-opbouwen",
      "waarom-vertrouw-ik-niemand",
      "veilige-hechting-opbouwen"
    ]
  },
  {
    id: "collegas-en-wantrouwen",
    beeld: {
      src: "img/vragen/collegas-en-wantrouwen.jpg"
    },
    vraag: "Waarom vertrouw ik collega's niet?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "werk",
      "collega's",
      "wantrouwen",
      "veiligheid",
      "hiërarchie",
      "professioneel"
    ],
    kort: "Wantrouwen op het werk past vaak bij eerdere ervaringen met macht, verraad of competitie. Je brein scant collega's en leidinggevenden soms als potentiële dreiging — ook wanneer objectief niets aan de hand is.",
    blokken: [
      {
        tekst: "Je deelt weinig over jezelf, interpreteert feedback als aanval, of verwacht dat collega's je gebruiken. Eén onhandige opmerking en je sluit je af. Je voelt je een buitenstaander, ook in een vriendelijk team."
      },
      {
        kop: "Werk als triggerscène",
        tekst: "Werkplekken hebben hiërarchie, beoordeling en competitie — dat kan oude dynamieken activeren: de leraar die je kleineerde, de ouder die onvoorspelbaar was, de groep die je buitensloot. Wantrouwen is dan geen 'slechte houding', maar een overlevingsstrategie die op de verkeerde plek actief blijft."
      },
      {
        kop: "Professioneel én menselijk",
        tekst: "Je hoeft collega's niet alles te vertellen om functioneel te zijn. Wel helpt het om onderscheid te maken: wie is veilig genoeg voor lichte kwetsbaarheid? Waar zijn mijn grenzen? Traumawerk en soms coaching helpen om professionele relaties te herzien zonder jezelf bloot te stellen aan onveilige omgevingen."
      }
    ],
    doeDit: [
      "Let op triggers: kritiek, hiërarchie, groepsdynamiek.",
      "Bouw één betrouwbare werkrelatie op in plaats van iedereen te wantrouwen.",
      "Scheid 'mijn oud verhaal' van 'wat er nú gebeurt'."
    ],
    vermijd: [
      "Alles verbergen en dan verwonderen dat je je geïsoleerd voelt.",
      "Elke collega als vijand zien zonder bewijs.",
      "Blijven in een toxische werkomgeving omdat 'dat nu eenmaal werk is'."
    ],
    zegDit: [
      "“Ik ben voorzichtig met vertrouwen — dat beschermt me.”",
      "“Ik kies bewust met wie ik professioneel open ben.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over trauma en spanning op de werkvloer."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe onveilige omgevingen — ook op werk — stress versterken."
      },
      {
        boek: "carefrontation",
        detail: "Over grenzen en eerlijke communicatie in professionele context."
      }
    ],
    gerelateerd: [
      "waarom-vertrouw-ik-niemand",
      "wat-is-hyperalertheid",
      "trauma-eenzaamheid"
    ]
  },
  {
    id: "dating-met-trauma",
    beeld: {
      src: "img/vragen/dating-met-trauma.jpg"
    },
    vraag: "Hoe date ik met een trauma-achtergrond?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "daten",
      "relatie",
      "trauma",
      "kwetsbaarheid",
      "grenzen",
      "starten"
    ],
    kort: "Daten met trauma vraagt om langzaam tempo, duidelijke grenzen en het herkennen van je triggers. Je hoeft je verleden niet meteen te delen — wel mag je beschermen wat kwetsbaar is en letten op veiligheid in plaats van alleen chemie.",
    blokken: [
      {
        tekst: "Daten kan heerlijk zijn — en angstaanjagend. Eén verkeerde opmerking, te snelle intimiteit, of iemand die inconsistent is, en je zenuwstelsel slaat alarm. Je vraagt je af: moet ik het vertellen? Hoe snel? Wat als ik overspoel raak?"
      },
      {
        kop: "Tempo en veiligheid eerst",
        tekst: "Chemie is geen garantie voor veiligheid. Let op consistentie: komt iemand afspraken na? Respecteren ze nee? Word je kleiner of juist meer jezelf? Deel je verleden geleidelijk — wanneer er enige vertrouwen is, niet als test op de eerste date. Je mag zeggen: 'ik heb tijd nodig om iemand te vertrouwen'."
      },
      {
        kop: "Triggers herkennen",
        tekst: "Snel verliefd worden, direct aan iemand vastklampen, of juist afknappen bij de eerste irritatie — dat kunnen hechtingspatronen zijn. Dating is een oefenplek: merk wat je lichaam doet, gebruik aarden (grounding), en wees mild als het misgaat. Niet elke date hoeft te leiden tot een relatie; soms is 'nee' de beste keuze."
      }
    ],
    doeDit: [
      "Kies rustige eerste ontmoetingen — geen alcohol als het je ontregelt.",
      "Let op rode vlaggen: inconsistentie, grenzen negeren, haast met intimiteit.",
      "Deel je tempo: 'ik laat mensen graag langzaam toe'."
    ],
    vermijd: [
      "Je verleden als openingszin gebruiken om afstand af te dwingen.",
      "Rode vlaggen negeren omdat je zo graag verbonden wilt zijn.",
      "Daten gebruiken om heling te forceren zonder stabiliteit."
    ],
    zegDit: [
      "“Ik leer iemand kennen in mijn eigen tempo.”",
      "“Veiligheid is voor mij belangrijker dan snelle intimiteit.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hechtingspatronen in het begin van relaties."
      },
      {
        boek: "attached",
        detail: "Over herkennen van onveilige dynamiek vroeg in dating."
      },
      {
        boek: "break-the-cycle",
        detail: "Over oude patronen doorbreken in nieuwe relaties."
      }
    ],
    gerelateerd: [
      "anxious-avoidant-dans",
      "intimiteit-en-angst",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "intimiteit-en-angst",
    beeld: {
      src: "img/vragen/intimiteit-en-angst.jpg"
    },
    vraag: "Waarom is intimiteit zo eng voor mij?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "intimiteit",
      "angst",
      "kwetsbaarheid",
      "nabijheid",
      "hechting",
      "vertrouwen"
    ],
    kort: "Intimiteit — emotioneel én fysiek — vraagt dat je zichtbaar bent. Na trauma voelt dat vaak als gevaar: je werd gezien en kwetsbaar gemaakt, of niemand was er toen je het nodig had. Angst voor intimiteit is begrijpelijk en te verkleinen.",
    blokken: [
      {
        tekst: "Iemand wil dichterbij — praten over gevoelens, samen slapen, je verhaal horen — en je voelt paniek. Je wordt afstandelijk, sarcastisch, of verdwijnt. Je wilt verbinding, maar nabijheid voelt als een val."
      },
      {
        kop: "Intimiteit = kwetsbaarheid",
        tekst: "Emotionele intimiteit betekent: ik laat je mijn innerlijke wereld zien. Als dat vroeger leidde tot misbruik, spot of verwaarlozing, leerde je: dichtbij komen is gevaarlijk. Je lichaam reageert nog steeds alsof zichtbaar zijn een risico is — ook bij iemand die veilig is."
      },
      {
        kop: "Langzaam dichterbij",
        tekst: "Intimiteit groeit in kleine stappen: één eerlijk gesprek, één aanraking die oké voelt, één geheim minder. EFT en traumatherapie helpen het onderscheid tussen toen en nu. Je mag intimiteit weigeren wanneer het niet veilig voelt — en oefenen wanneer het dat wél begint te voelen."
      }
    ],
    doeDit: [
      "Oefen micro-intimiteit: kleine eerlijkheden, korte oogcontact-momenten.",
      "Communiceer angst: 'ik wil dichterbij, maar dit voelt eng'.",
      "Werk in therapie aan wat nabijheid vroeger gekoppeld was aan gevaar."
    ],
    vermijd: [
      "Intimiteit forceren om 'normaal' te lijken.",
      "Angst interpreteren als 'ik hou niet van deze persoon'.",
      "Je partner straffen voor je eigen hechtingsangst."
    ],
    zegDit: [
      "“Nabijheid voelt eng — dat komt uit mijn verleden.”",
      "“Ik wil leren dichterbij komen, in mijn tempo.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over emotionele intimiteit en angst in koppels."
      },
      {
        boek: "emotional-incest",
        detail: "Over verwarde grenzen die intimiteit eng maken."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over ontwikkelingsgerelateerde angst voor nabijheid."
      }
    ],
    gerelateerd: [
      "nabijheid-zonder-paniek",
      "seks-na-trauma",
      "veilige-hechting-opbouwen"
    ]
  },
  {
    id: "seks-na-trauma",
    beeld: {
      src: "img/vragen/seks-na-trauma.jpg"
    },
    vraag: "Hoe ga ik om met seks na trauma?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "seks",
      "seksualiteit",
      "intimiteit",
      "lichaam",
      "grenzen",
      "herstel"
    ],
    kort: "Seks na trauma kan moeilijk, triggerend of verdoofd aanvoelen. Je lichaam onthoudt wat er gebeurde. Heling betekent keuze, consent, tempo bepalen en soms gespecialiseerde hulp — niet 'gewoon doorgaan'.",
    blokken: [
      {
        tekst: "Seksuele intimiteit kan triggers oproepen, verdoving veroorzaken, of het gevoel geven dat je er niet bij bent. Sommigen vermijden seks volledig; anderen gaan mee terwijl het innerlijk niet oké is. Beide zijn begrijpelijke reacties op een lichaam dat ooit seksueel grenzen zag overschreden — of seks koppelde aan onveiligheid."
      },
      {
        kop: "Het lichaam en consent",
        tekst: "Trauma kan het verschil vervagen tussen 'ik doe mee' en 'ik wil dit'. Echt consent voelt als ja in je hele lichaam — niet alleen in je hoofd. Je mag stoppen, vertragen, of seks tijdelijk vermijden. Somaatische seksualiteitstherapie en traumatherapie werken aan het terugwinnen van lichaamsgevoel en grenzen."
      },
      {
        kop: "Met een partner",
        tekst: "Bespreek triggers en signalen vooraf — niet midden in een moment. Gebruik stopwoorden, bouw langzaam op, en wees eerlijk als iets niet voelt. Een veilige partner respecteert tempo zonder je te beschuldigen van 'koud' zijn. Seks mag weer plezier worden — maar dat is geen race."
      }
    ],
    doeDit: [
      "Luister naar je lichaam: verdoving, spanning of terugtrekken zijn signalen.",
      "Bespreek grenzen en stopwoorden met een vertrouwde partner.",
      "Zoek gespecialiseerde hulp bij seksueel trauma of aanhoudende triggers."
    ],
    vermijd: [
      "Seks gebruiken om een relatie te redden of jezelf te bewijzen.",
      "Triggers negeren en doorgaan — dat versterkt het trauma.",
      "Jezelf 'gebroken' noemen als seks moeilijk blijft."
    ],
    zegDit: [
      "“Ik bepaal het tempo van mijn lichaam.”",
      "“Stoppen is altijd oké — ook zonder uitleg.”"
    ],
    bronnen: [
      {
        boek: "becoming-the-body",
        detail: "Over het lichaam terugwinnen na seksueel trauma."
      },
      {
        boek: "somatic-ifs",
        detail: "Over lichaamsdelen en delen die bescherming bieden rond seksualiteit."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de impact van trauma op seksualiteit en intimiteit."
      }
    ],
    gerelateerd: [
      "intimiteit-en-angst",
      "grenzen-liefdesrelatie",
      "lichaam-reageert-zonder-gevaar"
    ]
  },
  {
    id: "grenzen-liefdesrelatie",
    beeld: {
      src: "img/vragen/grenzen-liefdesrelatie.jpg"
    },
    vraag: "Hoe stel ik grenzen in een liefdesrelatie?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "grenzen",
      "relatie",
      "nee zeggen",
      "respect",
      "liefde",
      "zelfbescherming"
    ],
    kort: "Grenzen in een relatie zijn geen muur tegen liefde — ze maken veiligheid mogelijk. Na trauma kun je te veel toegeven uit angst voor verlies, of te hard afsluiten. Leren grenzen stellen is een vorm van zelfrespect én relationele gezondheid.",
    blokken: [
      {
        tekst: "Je zegt ja terwijl je nee bedoelt. Je slikt irritatie door tot je explodeert. Of je zet meteen een muur op bij de eerste tegenspraak. Grenzen voelen als gevaar — alsof je de relatie op het spel zet."
      },
      {
        kop: "Grenzen zijn geen straf",
        tekst: "Een gezonde grens zegt: 'dit kan ik dragen, dit niet (nu)'. Bij trauma leerde je soms dat je grenzen niet telden, of dat liefde afhing van aanpassen. Grenzen stellen voelt dan als verraad — terwijl het juist de basis is van wederzijds respect."
      },
      {
        kop: "Oefenen in de relatie",
        tekst: "Begin klein: 'ik heb vanavond rust nodig', 'die toon raakt me', 'ik wil dit gesprek later voortzetten'. Let op hoe je partner reageert — respect is een rode vlag in positieve zin. Bij geweld of structureel grenzen negeren: veiligheid gaat vóór de relatie."
      }
    ],
    doeDit: [
      "Oefen korte, duidelijke grenzen — niet lange uitleg ter verdediging.",
      "Observeer reacties: wordt je grens gerespecteerd of genegeerd?",
      "Herhaal grenzen vriendelijk maar stevig; je hoeft je niet te verdedigen."
    ],
    vermijd: [
      "Grenzen stellen midden in een crisis of overspoeling.",
      "Wachten tot je ontploft in plaats van eerder nee te zeggen.",
      "Blijven bij iemand die je grenzen structureel overschrijdt."
    ],
    zegDit: [
      "“Nee is een volledige zin.”",
      "“Ik hou van je én ik heb dit nodig voor mezelf.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over eerlijke confrontatie en grenzen in nabije relaties."
      },
      {
        boek: "disease-to-please",
        detail: "Over moeite met nee zeggen uit angst voor afwijzing."
      },
      {
        boek: "break-the-cycle",
        detail: "Over grenzen stellen om oude patronen te doorbreken."
      }
    ],
    gerelateerd: [
      "kan-ik-geen-nee-zeggen",
      "people-pleasing-herkennen",
      "partner-trauma-steunen"
    ]
  },
  {
    id: "jaloezie-partnerrelatie",
    beeld: {
      src: "img/vragen/jaloezie-partnerrelatie.jpg"
    },
    vraag: "Hoe ga ik om met jaloezie in mijn partnerrelatie?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "jaloezie",
      "partner",
      "relatie",
      "vertrouwen",
      "angst",
      "communicatie"
    ],
    kort: "Jaloezie in een partnerrelatie wijst meestal op onbeantwoorde behoeften aan veiligheid en zekerheid — niet op liefde zelf. De oplossing is zelden controleren; wel eerlijk praten over angst en samen veiligheid opbouwen.",
    blokken: [
      {
        tekst: "Je checkt berichten, interpreteert elke blik, of voelt paniek wanneer je partner tijd doorbrengt met anderen. Schaamte maakt het erger — je weet dat 'controleren niet oké is', maar de angst blijft."
      },
      {
        kop: "Wat jaloezie vraagt",
        tekst: "Onder jaloezie zit vaak: ben ik genoeg? Ga je weg? Ben ik veilig in deze band? Bij trauma is die angst soms gerechtvaardigd geweest — je werd verlaten, vervangen, of niet gekozen. Je lichaam onthoudt dat. Jaloezie is een alarm, geen bewijs dat je partner fout is."
      },
      {
        kop: "Van controle naar verbinding",
        tekst: "Deel je angst zonder beschuldiging: 'ik voel me onzeker wanneer…'. Vraag wat je nodig hebt: geruststelling, voorspelbaarheid, quality time. EFT helpt koppels dit te doen zonder de cyclus van achtervolgen en terugtrekken. Als jaloezie gepaard gaat met controleren of geweld: zoek hulp — dat is niet 'normale' relatiestress."
      }
    ],
    doeDit: [
      "Pauzeer vóór je gaat checken of beschuldigen.",
      "Formuleer angst als gevoel: 'ik ben bang dat…' in plaats van 'jij doet…'.",
      "Overweeg relatietherapie bij hardnekkige jaloezie."
    ],
    vermijd: [
      "Jaloezie gebruiken als bewijs van liefde.",
      "Partner isoleren of constante controle.",
      "Jaloezie onderdrukken zonder de angst te bespreken."
    ],
    zegDit: [
      "“Ik ben jaloers — en daaronder zit angst om je te verliezen.”",
      "“Ik heb geruststelling nodig, niet controle over jou.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over jaloezie en onveiligheid in koppels en hoe die te bespreken."
      },
      {
        boek: "attached",
        detail: "Over angstige hechting en jaloezie in partnerrelaties."
      },
      {
        boek: "hate-you-dont-leave",
        detail: "Over intense jaloezie en instabiele relatiedynamiek."
      }
    ],
    gerelateerd: [
      "jaloezie-hechting-trauma",
      "anxious-avoidant-dans",
      "verlaten-worden-vrezen"
    ]
  },
  {
    id: "verlaten-worden-vrezen",
    beeld: {
      src: "img/vragen/verlaten-worden-vrezen.jpg"
    },
    vraag: "Waarom ben ik zo bang om verlaten te worden?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "verlatingsangst",
      "afwijzing",
      "hechting",
      "paniek",
      "relatie",
      "verlies"
    ],
    kort: "Verlatingsangst komt vaak voort uit vroege ervaringen waarin mensen die je nodig had, wegvielen — fysiek of emotioneel. Je brein reageert op mogelijk verlies alsof het overleving betreft, ook in volwassen relaties.",
    blokken: [
      {
        tekst: "Een partner die even afstandelijk is, een vriend die niet terugappt, een collega die je negeert — en plotseling voelt het als levensbedreigend. Je klampt vast, gaat over je grenzen, of trekt je terug voordat de ander kan vertrekken."
      },
      {
        kop: "Verlies als overlevingsdreiging",
        tekst: "Voor een kind is verlaten worden door een verzorger letterlijk levensgevaarlijk. Wie dat vroeg meemaakte — door scheiding, verwaarlozing, emotionele afwezigheid — draagt een zenuwstelsel dat verlies als alarm leest. Als volwassene is verlaten worden pijnlijk, maar zelden levensbedreigend — je lichaam weet dat nog niet altijd."
      },
      {
        kop: "Angst kalmeren, veiligheid bouwen",
        tekst: "Herken de angst als oud alarm. Aarden (grounding) helpt in het moment. Op langere termijn: hechtingstherapie, EFT, en relaties waarin mensen terugkomen na conflict. Je leert dat verlaten worden niet hetzelfde is als de dood — en dat je ook alleen kunt overleven, al voelt dat nu onmogelijk."
      }
    ],
    doeDit: [
      "Herken lichaamssignalen van verlatingspaniek vóór je reageert.",
      "Oefen zelfstandigheid: activiteiten die je zelfstandig doet en waardeert.",
      "Zoek hulp bij hardnekkige verlatingsangst die relaties saboteert."
    ],
    vermijd: [
      "Clingy gedrag of dreigingen om iemand te laten blijven.",
      "Relaties beginnen of beëindigen puur uit angst.",
      "Verlatingsangst negeren en doorgaan alsof het 'passie' is."
    ],
    zegDit: [
      "“Mijn angst om verlaten te worden is oud — ik ben nú veiliger.”",
      "“Ik kan pijn voelen zonder meteen in paniek te schieten.”"
    ],
    bronnen: [
      {
        boek: "journey-abandonment",
        detail: "Over verlatingsangst en de wortels in vroege ervaringen."
      },
      {
        boek: "attached",
        detail: "Over angstige hechting en verlatingspaniek."
      },
      {
        boek: "wounded-inner-child",
        detail: "Over het innerlijke kind dat bang is om alleen te blijven."
      }
    ],
    gerelateerd: [
      "wat-is-verlatingsangst",
      "anxious-avoidant-dans",
      "veilige-hechting-opbouwen"
    ]
  },
  {
    id: "vertrouwen-opnieuw-leren",
    beeld: {
      src: "img/vragen/vertrouwen-opnieuw-leren.jpg"
    },
    vraag: "Hoe leer ik opnieuw vertrouwen?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "vertrouwen",
      "herstel",
      "relaties",
      "risico",
      "veiligheid",
      "opnieuw"
    ],
    kort: "Vertrouwen na trauma is geen blind geloof — het is een geleidelijk proces van kleine, bevestigde ervaringen waarin iemand consistent en respectvol is. Je leert opnieuw vertrouwen door te kiezen wie je toe laat, niet door iedereen meteen binnen te halen.",
    blokken: [
      {
        tekst: "Iemand heeft je beschadigd — een ouder, partner, vriend, professional. Nu voelt elke nieuwe persoon als potentiële dreiging. Je wilt verbinding, maar vertrouwen voelt als domheid. 'Als ik vertrouw, word ik weer gekwetst.'"
      },
      {
        kop: "Vertrouwen is geleidelijk",
        tekst: "Vertrouwen betekent niet: ik geloof alles en laat alles toe. Het betekent: ik geef stap voor stap ruimte en kijk wat er gebeurt. Komt iemand terug? Respecteert iemand nee? Geloof ik ze en klopt het? Elke positieve ervaring verruimt je vermogen om weer te vertrouwen — elke teleurstelling leert je grenzen scherper te stellen."
      },
      {
        kop: "Niet iedereen verdient hetzelfde niveau",
        tekst: "Vertrouwen heeft niveaus: collega, vriend, partner, therapeut. Niet iedereen hoeft je diepste verhalen te horen. Begin met mensen die bewijs leveren van betrouwbaarheid. Therapie kan een veilige oefenplek zijn. Vertrouwen opnieuw leren is moedig — niet naïef."
      }
    ],
    doeDit: [
      "Geef vertrouwen in kleine doses: eerst lichte kwetsbaarheid, dan meer.",
      "Evalueer: wat deed deze persoon toen ik een grens stelde?",
      "Gebruik therapie als plek om vertrouwen te oefenen zonder grote risico's."
    ],
    vermijd: [
      "Iedereen meteen volledig vertrouwen om 'over je verleden te zijn'.",
      "Niemand meer toe laten uit angst — isolatie versterkt wantrouwen.",
      "Vertrouwen verwarren met controle of blind geloof."
    ],
    zegDit: [
      "“Vertrouwen bouw ik op — het is geen switch.”",
      "“Ik kies bewust wie dichterbij mag komen.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over het herstellen van vertrouwen en veilige verbinding in relaties."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrijpen wat vertrouwen brak en wat herstel vraagt."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht en het terugwinnen van vertrouwen na tegenslag."
      }
    ],
    gerelateerd: [
      "waarom-vertrouw-ik-niemand",
      "veilige-hechting-opbouwen",
      "vriendschappen-en-trauma"
    ]
  },
  {
    id: "nabijheid-zonder-paniek",
    beeld: {
      src: "img/vragen/nabijheid-zonder-paniek.jpg"
    },
    vraag: "Hoe kan ik nabijheid ervaren zonder in paniek te raken?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "nabijheid",
      "paniek",
      "regulatie",
      "aanraking",
      "veiligheid",
      "venster"
    ],
    kort: "Nabijheid zonder paniek begint met begrijpen dat je lichaam ooit leerde dat dichtbij komen gevaarlijk is. Via aarden (grounding), kleine stappen, voorspelbare veiligheid en therapie kun je de zone die je aankunt breder maken — nabijheid wordt dan mogelijk in plaats van bedreigend.",
    blokken: [
      {
        tekst: "Een knuffel, iemand die naast je op de bank zit, oogcontact dat even te lang duurt — en je adem versnelt, je wilt weg, of je verdooft. Je verlangt naar verbinding, maar je lichaam schreeuwt: gevaar."
      },
      {
        kop: "De zone breder maken",
        tekst: "Paniek bij nabijheid betekent dat je buiten de zone bent die je aankunt (je 'window of tolerance'). Je zenuwstelsel heeft nog niet geleerd dat deze persoon, dit moment, veilig kan zijn. Dat leer je niet door jezelf te dwingen, maar door heel kleine stapjes nabijheid, met kalmeren: korte aanraking, ademen, stoppen wanneer nodig."
      },
      {
        kop: "Voorspelbaarheid helpt",
        tekst: "Onverwachte nabijheid triggert vaker dan afgesproken contact. Vraag: 'mag ik even naast je zitten?' Gebruik aarden (grounding) vóór en na. Werk met een therapeut aan wat aanraking en nabijheid vroeger betekenden. Langzaam kan je lichaam nabijheid koppelen aan veiligheid in plaats van gevaar."
      }
    ],
    doeDit: [
      "Plan nabijheid: korte momenten, met mogelijkheid om te stoppen.",
      "Adem langzaam uit tijdens nabijheid; voel je voeten op de grond.",
      "Communiceer met je partner of vriend wat je nodig hebt om veilig te voelen."
    ],
    vermijd: [
      "Nabijheid forceren tot je paniekt — dat versterkt het alarm.",
      "Jezelf beschuldigen van 'koud' of 'afstandelijk' zijn.",
      "Stoppen met alle nabijheid zonder ooit kleine stappen te proberen."
    ],
    zegDit: [
      "“Ik wil nabijheid — mijn lichaam heeft tijd nodig om dat te geloven.”",
      "“Stoppen is oké. Ik kom terug wanneer ik klaar ben.”"
    ],
    bronnen: [
      {
        boek: "narm-practical-guide",
        detail: "Over kalmeren en stap voor stap meer nabijheid aankunnen."
      },
      {
        boek: "anchored",
        detail: "Over het kalmeren van het zenuwstelsel bij nabijheid en aanraking."
      },
      {
        boek: "becoming-the-body",
        detail: "Over het lichaam geleidelijk laten wennen aan veilige aanraking."
      }
    ],
    gerelateerd: [
      "intimiteit-en-angst",
      "window-of-tolerance",
      "veilige-hechting-opbouwen"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 11
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_11 = [
  {
    id: "innerlijk-kind-wat-is-dat",
    beeld: {
      src: "img/vragen/innerlijk-kind-wat-is-dat.jpg"
    },
    vraag: "Wat is het innerlijke kind?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "innerlijk kind",
      "jeugd",
      "delen",
      "gevoelens",
      "hechting",
      "herkenning"
    ],
    kort: "Het innerlijke kind is geen kinderlijke fantasie, maar het deel van je dat nog draagt wat je als kind meemaakte — angst, verlangen, schaamte, speelsheid. Het leeft door in hoe je voelt, reageert en om liefde vraagt.",
    blokken: [
      {
        tekst: "Je hoort de term 'innerlijk kind' en denkt misschien aan iets zweverigs. Maar veel mensen met trauma herkennen iets anders: een jonge, kwetsbare kant die nog steeds bang is om afgewezen te worden, die schrikt van harde stemmen, of die smacht naar erkenning die nooit kwam."
      },
      {
        kop: "Niet letterlijk, wel echt",
        tekst: "Het innerlijke kind is een manier om te benoemen dat je vroege ervaringen niet verdwenen zijn — ze leven voort in je lichaam, emoties en overtuigingen. Wanneer je plotseling heel klein voelt, onredelijk gevoelig reageert, of intense behoefte hebt aan troost, kan dat het innerlijke kind zijn dat nú iets vraagt wat het toen miste."
      },
      {
        kop: "Helen door contact",
        tekst: "Herstel betekent niet dat je 'terug' wordt naar je kind-zelf, maar dat je leert luisteren naar wat dat deel nodig heeft: veiligheid, erkenning, speelsheid, grenzen. In therapie — vooral delenwerk of innerlijk-kindwerk — leer je dat deel niet weg te duwen, maar te troosten en te beschermen vanuit je volwassen ik."
      }
    ],
    doeDit: [
      "Merk op wanneer je je plotseling heel jong voelt — dat is informatie, geen zwakte.",
      "Vraag zacht: 'Wat had ik toen nodig?' en 'Wat heb ik nú nodig?'",
      "Zoek hulp die innerlijk-kindwerk kent als je vastloopt in schaamte of overspoeling."
    ],
    vermijd: [
      "Het innerlijke kind wegduwen als 'kindachtig' of 'zwak'.",
      "Denken dat je het verleden moet 'herbeleven' om het te helen.",
      "Het concept gebruiken om verantwoordelijkheid van volwassenen uit je verleden af te nemen."
    ],
    zegDit: [
      "“Er is een jong deel in mij dat pijn draagt — ik mag daar zacht mee zijn.”",
      "“Wat ik nú voel, mag ik serieus nemen.”"
    ],
    bronnen: [
      {
        boek: "wounded-inner-child",
        detail: "Over het gekwetste innerlijke kind en hoe je het kunt helen."
      },
      {
        boek: "no-bad-parts",
        detail: "Over jonge delen binnen het IFS-model en hun beschermende rol."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over jonge delen die vastzitten in oude angst en schaamte."
      }
    ],
    gerelateerd: [
      "waarom-voel-ik-me-leeg",
      "beschermende-delen-ifs",
      "zelfcompassie-hoe-begin"
    ]
  },
  {
    id: "beschermende-delen-ifs",
    beeld: {
      src: "img/vragen/beschermende-delen-ifs.jpg"
    },
    vraag: "Wat zijn beschermende delen in IFS?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "IFS",
      "delen",
      "beschermers",
      "managers",
      "brandweer",
      "innerlijk"
    ],
    kort: "In Internal Family Systems zijn beschermende delen de delen die je helpen overleven — door controle, afstand, perfectionisme, pleasen of zelfs automutilatie. Ze zijn niet de vijand; ze werkten ooit, maar kunnen nu te hard ingrijpen.",
    blokken: [
      {
        tekst: "IFS ziet je psyche als een innerlijk gezin van delen. Sommige delen dragen pijn en schaamte uit het verleden. Andere delen — de beschermers — proberen die pijn te verbergen of te voorkomen. Die beschermers herken je vaak als je innerlijke criticus, je perfectionisme, je vermijding, of je drang om alles onder controle te houden."
      },
      {
        kop: "Managers en brandweermannen",
        tekst: "Managers zijn vooruit denkende beschermers: ze plannen, controleren, pleasen, analyseren — alles om kwetsbaarheid te vermijden. Brandweermannen treden in als de pijn toch doorbreekt: impulsief gedrag, woede-uitbarstingen, afhaken (dissociatie), verslaving, of automutilatie. Beide typen doen hun best om je te redden, ook als hun manieren nu schade aanrichten."
      },
      {
        kop: "Van strijd naar samenwerking",
        tekst: "Heling in IFS begint niet met beschermers wegduwen, maar met nieuwsgierigheid: 'Wat probeer je voor mij te voorkomen?' Vanuit het kalme Zelf kun je delen geruststellen, bedanken voor hun inzet, en langzaam laten zien dat er nú veiligere manieren zijn. Dat vraagt tijd en vaak begeleiding."
      }
    ],
    doeDit: [
      "Herken je beschermers zonder ze te veroordelen: 'Dit deel probeert me te beschermen.'",
      "Vraag wat het deel bang maakt als het zijn rol loslaat.",
      "Werk met een IFS-therapeut als innerlijke conflicten je leven beperken."
    ],
    vermijd: [
      "Beschermende delen bestrijden of 'doodvechten'.",
      "Denken dat een hard deel bewijs is dat je slecht bent.",
      "Geweld tegen jezelf gebruiken om een deel te onderdrukken."
    ],
    zegDit: [
      "“Bedankt voor je bescherming — ik hoor dat je bang bent.”",
      "“We zoeken samen een veiligere manier.”"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "Over beschermende delen, managers en brandweermannen in IFS."
      },
      {
        boek: "ifs-workbook",
        detail: "Over oefeningen om contact te maken met beschermende delen."
      },
      {
        boek: "somatic-ifs",
        detail: "Over hoe beschermende delen zich in het lichaam uiten."
      }
    ],
    gerelateerd: [
      "innerlijk-kind-wat-is-dat",
      "delen-die-conflicteren",
      "perfectionisme-als-schild"
    ]
  },
  {
    id: "zelfhaat-begrijpen",
    beeld: {
      src: "img/vragen/zelfhaat-begrijpen.jpg"
    },
    vraag: "Hoe kan ik zelfhaat begrijpen?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "zelfhaat",
      "zelfverachting",
      "schaamte",
      "innerlijke criticus",
      "trauma",
      "identiteit"
    ],
    kort: "Zelfhaat is zelden 'wie je bent' — het is meestal een geleerde boodschap uit trauma: jij was het probleem, jij bent onwaardig. Die stem beschermde je ooit door je klein te houden; nu vergiftigt ze je leven.",
    blokken: [
      {
        tekst: "Je haat delen van jezelf — je lichaam, je gevoelens, je 'zwakke' kanten. Soms voelt het alsof je jezelf het liefst zou willen wegmaken. Zelfhaat is een van de meest verlammende sporen van trauma, en tegelijk een van de meest misverstane."
      },
      {
        kop: "Geleerd, niet waar",
        tekst: "Kinderen die misbruikt, genegeerd of constant bekritiseerd werden, horen vaak: jij bent het probleem. Die boodschap verankert zich dieper dan woorden — het wordt een innerlijke stem die alles herhaalt. Zelfhaat is geen bewijs van ondeugd; het is een overlevingsstrategie die zei: als ik mezelf hard genoeg aanpak, misschien verander ik genoeg om veilig te zijn."
      },
      {
        kop: "Het tegengif is geen positief denken",
        tekst: "Zelfhaat verdwijnt niet door jezelf te dwingen positief te zijn. Het vraagt om erkenning ('dit is pijn'), veiligheid, en langzaam leren dat compassie geen gevaar is. Veel mensen ontdekken dat achter zelfhaat een gekwetst kind-deel zit dat gelooft dat haat de enige manier is om controle te houden."
      }
    ],
    doeDit: [
      "Scheid de stem van de waarheid: 'Dit is iets wat ik leerde horen.'",
      "Zoek één veilig persoon of therapeut bij wie je de haat kunt benoemen.",
      "Oefen micro-doses zelfcompassie, ook als je het nog niet gelooft."
    ],
    vermijd: [
      "Zelfhaat geloven als accurate zelfkennis.",
      "Jezelf straffen voor het voelen van haat.",
      "Isolatie — zelfhaat groeit in stilte."
    ],
    zegDit: [
      "“Deze haat komt ergens vandaan — ze is niet de waarheid over mij.”",
      "“Ik mag leren milder te worden, ook al voelt dat vreemd.”"
    ],
    bronnen: [
      {
        boek: "compassion-self-hate",
        detail: "Over zelfhaat herkennen en stap voor stap verzachten."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over schaamte en zelfbeschuldiging na misbruik en verwaarlozing."
      },
      {
        boek: "healing-shame-binds",
        detail: "Over hoe schaamte en zelfhaat aan elkaar vastzitten."
      }
    ],
    gerelateerd: [
      "zelfverachting",
      "innerlijke-criticus",
      "waarom-zoveel-schaamte"
    ]
  },
  {
    id: "imposter-syndrome-trauma",
    beeld: {
      src: "img/vragen/imposter-syndrome-trauma.jpg"
    },
    vraag: "Heeft imposter syndrome te maken met trauma?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "imposter syndrome",
      "zelftwijfel",
      "prestatie",
      "schaamte",
      "identiteit",
      "werk"
    ],
    kort: "Imposter syndrome — het gevoel een bedrieger te zijn ondanks bewijs van succes — overlapt vaak met trauma: je leerde dat je waarde afhing van presteren, dat je echte zelf te veel of te weinig was, en dat zichtbaar zijn gevaarlijk kon zijn.",
    blokken: [
      {
        tekst: "Je krijgt complimenten, promotie, erkenning — en denkt: ze hebben het mis, straks ontdekken ze dat ik niet goed genoeg ben. Imposter syndrome klinkt als een werkterm, maar veel mensen met trauma herkennen de diepere laag: het gevoel dat je innerlijk kapot bent en de buitenwereld dat elk moment zal zien."
      },
      {
        kop: "Overleven door aanpassen",
        tekst: "In onveilige omgevingen leer je vaak je 'echte' zelf verbergen en een aanpasbare versie te tonen. Succes voelt dan niet als eigen verdienste, maar als een masker dat je goed speelt. Trauma leert ook: als je opvalt, ben je kwetsbaar. Imposter-gevoelens kunnen een restant zijn van die overtuiging."
      },
      {
        kop: "Meer dan zelfvertrouwen opbouwen",
        tekst: "Affirmaties alleen helpen zelden. Nuttiger is onderzoeken waar de stem vandaan komt, welke delen bang zijn voor ontmaskering, en of perfectionisme of pleasen je succes drijft. In herstel leer je langzaam: mijn waarde is niet alleen wat ik presteer, en zichtbaar zijn mag veiliger worden."
      }
    ],
    doeDit: [
      "Noteer wanneer imposter-gevoelens opkomen — vaak na succes, niet na falen.",
      "Onderzoek welke boodschap uit je verleden je nog volgt ('wees onzichtbaar', 'wees perfect').",
      "Deel met iemand veilig; geheimhouding voedt het gevoel van bedrog."
    ],
    vermijd: [
      "Denken dat meer presteren het gevoel van bedrog wegneemt.",
      "Succes minimaliseren of saboteren om de angst te vermijden.",
      "Imposter syndrome negeren als 'gewoon onzekerheid'."
    ],
    zegDit: [
      "“Mijn twijfel komt uit oude overtuigingen — niet uit feiten.”",
      "“Ik mag zichtbaar zijn, ook als dat eng voelt.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over chronische zelftwijfel en de innerlijke criticus bij complex trauma."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over het gevoel nooit goed genoeg te zijn ondanks prestaties."
      },
      {
        boek: "running-on-empty",
        detail: "Over moeite met het erkennen van eigen behoeften en successen."
      }
    ],
    gerelateerd: [
      "perfectionisme-als-schild",
      "perfectionisme-trauma",
      "identiteit-na-trauma"
    ]
  },
  {
    id: "automutilatie-waarom",
    beeld: {
      src: "img/vragen/automutilatie-waarom.jpg"
    },
    vraag: "Waarom automutileren sommige mensen met trauma?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "automutilatie",
      "zelfbeschadiging",
      "regulatie",
      "overlevingsreactie",
      "pijn",
      "brandweer"
    ],
    kort: "Automutilatie is geen aandachtszucht of manipulatie — het is vaak een wanhopige manier om overweldigende emoties te kalmeren, het afhaken (dissociatie) te doorbreken, of innerlijke pijn naar buiten te brengen. Het is een teken van lijden, geen karakterfout.",
    blokken: [
      {
        tekst: "Snijden, branden, slaan — gedrag dat van buitenaf moeilijk te begrijpen is. Veel mensen voelen schaamte en veroordeling, ook van hulpverleners. Toch is automutilatie bij trauma verrassend begrijpelijk wanneer je het ziet als wat het is: een overlevingsreactie."
      },
      {
        kop: "Wat het soms doet",
        tekst: "Automutilatie kan innerlijke pijn omzetten in iets voelbaars en 'beheersbaars'. Het kan het afhaken (dissociatie) — het gevoel los van je lichaam te zijn — doorbreken. Het kan intense emoties kort dempen via een lichamelijke schok. In delenwerk zie je het vaak als een brandweerman-deel dat snel ingrijpt wanneer alles te veel wordt."
      },
      {
        kop: "Weg uit schaamte, richting hulp",
        tekst: "Automutilatie stopt zelden door moraliseren of verbieden. Het vraagt veiligheid, andere manieren om te kalmeren, en vaak traumagerichte therapie. Als je automutilatie herkent: je bent niet 'gek' of 'slecht'. Zoek professionele hulp — niet omdat je zwak bent, maar omdat er andere manieren bestaan om te overleven."
      }
    ],
    doeDit: [
      "Benoem het als een manier om te kalmeren, niet als karakterfout.",
      "Zoek professionele hulp bij iemand met traumakennis.",
      "Bouw alternatieven op met begeleiding: koud water, intense beweging, grounding."
    ],
    vermijd: [
      "Automutilatie geheimhouden uit schaamte tot het escaleert.",
      "Jezelf straffen na een episode — dat versterkt de cyclus.",
      "Denken dat wilskracht alleen voldoende is."
    ],
    zegDit: [
      "“Dit is een manier waarop mijn lichaam probeert te overleven.”",
      "“Ik verdien hulp, geen veroordeling.”"
    ],
    bronnen: [
      {
        boek: "healing-fragmented-selves",
        detail: "Over brandweerman-delen en impulsief overlevingsgedrag."
      },
      {
        boek: "no-bad-parts",
        detail: "Over delen die extreme methodes gebruiken om pijn te stoppen."
      },
      {
        boek: "get-me-out-of-here",
        detail: "Over zelfbeschadiging en borderline-achtige overlevingspatronen."
      }
    ],
    gerelateerd: [
      "beschermende-delen-ifs",
      "dissociatie-naast-mezelf",
      "window-of-tolerance"
    ]
  },
  {
    id: "suicidale-gedachten-begrijpen",
    beeld: {
      src: "img/vragen/suicidale-gedachten-begrijpen.jpg"
    },
    vraag: "Hoe kan ik suïcidale gedachten begrijpen?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "suïcidale gedachten",
      "overleving",
      "pijn",
      "hopeloosheid",
      "schaamte",
      "herkenning"
    ],
    kort: "Suïcidale gedachten komen bij trauma vaker voor dan mensen durven zeggen. Ze betekenen niet altijd dat je echt wilt sterven — soms is het een uiting van ondraaglijke pijn, uitputting, of het verlangen dat het ophoudt. Begrijpen is geen oplossing, maar wel een eerste stap naar hulp.",
    blokken: [
      {
        tekst: "Gedachten als 'het zou makkelijker zijn als ik er niet meer was' kunnen angstig en beschaamd makend zijn. Veel mensen zwijgen, uit angst voor oordeel of gedwongen opname. Toch is het belangrijk te weten: suïcidale gedachten bij trauma zijn begrijpelijk — en bespreken kan levens redden."
      },
      {
        kop: "Verschillende soorten gedachten",
        tekst: "Sommige gedachten zijn passief: je wenst dat je niet wakker wordt, of dat de pijn stopt. Andere zijn actiever: je denkt na over methodes. Beide verdienen ernst. Bij trauma ontstaan ze vaak uit chronische pijn, isolatie, schaamte, slaapgebrek, of het gevoel dat herstel nooit komt — niet omdat je 'zwak' bent."
      },
      {
        kop: "Begrijpen ≠ alleen",
        tekst: "Deze pagina is educatief, geen crisisplan. Als je suïcidale gedachten hebt, praat met iemand — huisarts, therapeut, vertrouwenspersoon. Gedachten zijn informatie over hoeveel pijn je draagt; ze zijn geen bevel. Hulp zoeken is geen overreactie. Je hoeft het niet alleen te dragen."
      }
    ],
    doeDit: [
      "Erken de gedachten zonder ze te volgen: 'Dit is pijn die om hulp vraagt.'",
      "Praat met een professional of vertrouwenspersoon — geheimhouding maakt het zwaarder.",
      "Noteer triggers: uitputting, isolatie, terugval, conflicten."
    ],
    vermijd: [
      "Gedachten wegwuiven als 'niet ernstig genoeg'.",
      "Jezelf als zwak of egoïstisch bestempelen.",
      "Alcohol of drugs gebruiken om de gedachten te dempen."
    ],
    zegDit: [
      "“Deze gedachten komen door pijn — ze zijn geen waarheid over mijn waarde.”",
      "“Ik mag hulp vragen, ook als ik me schaam.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over hopeloosheid, verlatingsdepressie en het belang van veiligheid in herstel."
      },
      {
        boek: "myth-of-normal",
        detail: "Over lijden dat vaak onzichtbaar blijft en de behoefte aan echte verbinding."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over crisisherkenning en het opbouwen van ondersteuning."
      }
    ],
    gerelateerd: [
      "waarom-voel-ik-me-leeg",
      "zelfhaat-begrijpen",
      "ondersteunend-netwerk-opbouwen"
    ]
  },
  {
    id: "perfectionisme-als-schild",
    beeld: {
      src: "img/vragen/perfectionisme-als-schild.jpg"
    },
    vraag: "Is perfectionisme een schild na trauma?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "perfectionisme",
      "schild",
      "controle",
      "bescherming",
      "fouten",
      "criticus"
    ],
    kort: "Ja — perfectionisme is voor veel mensen geen streven naar excellentie, maar een pantser: als alles perfect is, ben je misschien veilig, liefbaar of niet de target. Het schild werkte ooit; nu beperkt het je leven.",
    blokken: [
      {
        tekst: "Je herkent perfectionisme misschien als 'hoge standaarden'. Maar vanbinnen voelt het anders: angst. Angst voor kritiek, afwijzing, straf. Angst dat één fout bewijst dat je inderdaad waardeloos bent. Dat is minder karakter dan overleving."
      },
      {
        kop: "Het schild in actie",
        tekst: "In onvoorspelbare of kritische omgevingen leer je: maak geen fouten, val niet op, wees onberispelijk — dan overleef je. Perfectionisme beschermt tegen schaamte en zichtbaarheid. Het houdt ook anderen op afstand: als niemand het 'echte' imperfecte zelf ziet, kan niemand afwijzen wat het het meest vreest."
      },
      {
        kop: "Langzaam het schild afleggen",
        tekst: "Het schild loslaten voelt als naakt zijn. Herstel betekent kleine oefeningen in 'goed genoeg', fouten toelaten, en de innerlijke criticus te temperen. In IFS is perfectionisme vaak een manager-deel dat bang is voor wat er gebeurt als het stopt met controleren."
      }
    ],
    doeDit: [
      "Vraag: 'Waar ben ik bang voor als ik niet perfect ben?'",
      "Oefen bewust imperfectie in lage-risico situaties.",
      "Werk met een therapeut aan het deel dat controle nodig heeft."
    ],
    vermijd: [
      "Perfectionisme romantiseren als discipline.",
      "Doorgaan tot uitputting en dat weer 'bewijs' van falen noemen.",
      "Het schild forceren af te leggen zonder veiligheid."
    ],
    zegDit: [
      "“Mijn perfectionisme beschermde me — ik zoek veiligere manieren.”",
      "“Goed genoeg is vandaag genoeg.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over perfectionisme als overlevingsstrategie en innerlijke criticus."
      },
      {
        boek: "no-bad-parts",
        detail: "Over manager-delen die via controle en perfectie beschermen."
      },
      {
        boek: "disease-to-please",
        detail: "Over prestatiedruk en angst om teleur te stellen."
      }
    ],
    gerelateerd: [
      "perfectionisme-trauma",
      "beschermende-delen-ifs",
      "imposter-syndrome-trauma"
    ]
  },
  {
    id: "innerlijke-leegte",
    beeld: {
      src: "img/vragen/innerlijke-leegte.jpg"
    },
    vraag: "Wat betekent innerlijke leegte bij trauma?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "leegte",
      "numb",
      "verdoofd",
      "dissociatie",
      "emoties",
      "innerlijk"
    ],
    kort: "Innerlijke leegte voelt als een gat waar gevoelens, identiteit of levenslust horen te zitten. Bij trauma is het vaak verdoving — een manier om te overleven wanneer voelen te pijnlijk of te gevaarlijk was.",
    blokken: [
      {
        tekst: "Je kijkt naar je leven en voelt weinig. Geen grote verdriet, geen vreugde — vooral leegte. Soms vraag je je af of je wel echt bestaat. Anderen lijken te leven; jij functioneert. Die leegte is een van de meest eenzame trauma-ervaringen."
      },
      {
        kop: "Leegte als dichtklappen (shutdown)",
        tekst: "Wanneer een kind te lang overweldigd wordt zonder troost, klapt het zenuwstelsel soms dicht (shutdown): voelen wordt te duur. Leegte is dan geen gebrek aan persoonlijkheid, maar een beschermende dimmer op je innerlijke wereld. Het hield je destijds bij elkaar."
      },
      {
        kop: "Terug naar voelen",
        tekst: "Gevoelens komen niet terug door er aan te trekken. Ze keren terug via kleine, veilige ervaringen: beweging, muziek, natuur, zachte aanraking, therapie die niet overspoelt. Leegte is geen bewijs dat er niets te helen valt — het wijst op iets dat ooit te veel was."
      }
    ],
    doeDit: [
      "Wees mild: leegte is overleving, geen falen.",
      "Oefen kleine zintuiglijke ervaringen zonder druk om te 'voelen'.",
      "Zoek traumagerichte hulp als verdoving je leven beperkt."
    ],
    vermijd: [
      "Leegte verwarren met 'ik heb geen trauma'.",
      "Jezelf 'dood' of 'leeg' noemen als identiteit.",
      "Gevoelens forceren — dat kan overspoelen."
    ],
    zegDit: [
      "“Mijn leegte beschermde me. Er mag weer ruimte komen.”",
      "“Ik hoef niet alles tegelijk te voelen.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over emotionele leegte en moeite met voelen na verwaarlozing."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over verdoofde delen en zelfvervreemding na trauma."
      },
      {
        boek: "wounded-inner-child",
        detail: "Over het innerlijke kind dat leerde af te sluiten."
      }
    ],
    gerelateerd: [
      "waarom-voel-ik-me-leeg",
      "dissociatie-naast-mezelf",
      "innerlijk-kind-wat-is-dat"
    ]
  },
  {
    id: "delen-die-conflicteren",
    beeld: {
      src: "img/vragen/delen-die-conflicteren.jpg"
    },
    vraag: "Wat als mijn innerlijke delen met elkaar vechten?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "delen",
      "innerlijk conflict",
      "IFS",
      "ambivalentie",
      "beschermers",
      "chaos"
    ],
    kort: "Innerlijke conflicten — het ene deel wil contact, het andere vluchten; het ene wil rust, het andere saboteert — zijn normaal na trauma. Delen ontstonden in verschillende contexten en beschermen soms tegenstrijdige dingen.",
    blokken: [
      {
        tekst: "Je wilt een relatie, maar een deel saboteert elke poging. Je wilt rust, maar een ander deel houdt je wakker met zorgen. Je haat je ouder en mist hem tegelijk. Innerlijke conflicten voelen chaotisch — alsof je tegen jezelf vecht."
      },
      {
        kop: "Geen teken van 'gek zijn'",
        tekst: "Na trauma ontstaan delen met verschillende taken: een deel dat pleit, een dat woedend is, een dat verdoofd, een dat controleert. Ze kennen elkaar niet altijd en vertrouwen elkaar niet. Conflict betekent dat meerdere overlevingsstrategieën tegelijk actief zijn — niet dat je kapot bent."
      },
      {
        kop: "Mediation in plaats van oorlog",
        tekst: "In delenwerk leer je conflicten niet 'winnen', maar bemiddelen vanuit het Zelf: elk deel horen, erkennen wat het beschermt, en langzaam nieuwe afspraken maken. Dat gaat niet in één sessie. Geduld en een ervaren therapeut maken het verschil."
      }
    ],
    doeDit: [
      "Benoem het conflict: 'Deel A wil X, deel B wil Y — beiden proberen me te helpen.'",
      "Stop met jezelf partij kiezen en straffen.",
      "Zoek IFS- of schematherapie als innerlijke strijd je keuzes blokkeert."
    ],
    vermijd: [
      "Eén deel demoniseren en een ander idealiseren.",
      "Innerlijk conflict negeren door impulsief te handelen.",
      "Denken dat je 'één persoon' moet zijn zonder tegenstrijdige gevoelens."
    ],
    zegDit: [
      "“Er zijn delen die botsen — ik mag bemiddelen in plaats van vechten.”",
      "“Beide kanten proberen me te beschermen.”"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "Over innerlijke conflicten en bemiddeling vanuit het Zelf."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over delen die elkaar tegenwerken na trauma."
      },
      {
        boek: "tender-parts",
        detail: "Over zacht contact met delen in conflict."
      }
    ],
    gerelateerd: [
      "beschermende-delen-ifs",
      "boos-en-liefde-ouders",
      "saboteren-goede-dingen"
    ]
  },
  {
    id: "zelfverachting",
    beeld: {
      src: "img/vragen/zelfverachting.jpg"
    },
    vraag: "Waar komt zelfverachting vandaan?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "zelfverachting",
      "waardeloosheid",
      "schaamte",
      "misbruik",
      "verwaarlozing",
      "identiteit"
    ],
    kort: "Zelfverachting is het diepe geloof dat je fundamenteel minder waard bent — niet alleen dat je fouten maakt. Het ontstaat meestal wanneer je als kind de boodschap kreeg dat jij het probleem was, niet de situatie.",
    blokken: [
      {
        tekst: "Zelfverachting gaat verder dan zelfkritiek. Het is een onderstroom van 'ik ben smerig', 'ik hoor er niet bij', 'niemand zou me echt kennen als ze wisten wie ik ben'. Het kleurt relaties, werk en zelfzorg — vaak onzichtbaar voor buitenstaanders."
      },
      {
        kop: "Internaliseren van de dader",
        tekst: "Bij misbruik, verwaarlozing of chronische afwijzing internaliseren kinderen soms de stem van de dader of verwaarlozer: jij bent waardeloos, jij vroeg het, jij bent te veel. Die boodschap wordt een identiteit. Zelfverachting is dan geen waarheid, maar een overgenomen script."
      },
      {
        kop: "Terug naar mens-zijn",
        tekst: "Herstel betekent langzaam leren dat waardeloosheid geleerd is. Schaamte verliest macht in verbinding; zelfcompassie is het tegengif. Veel mensen merken dat zelfverachting het hardst spreekt wanneer ze zich veilig beginnen te voelen — alsof een beschermer waarschuwt: 'niet te dichtbij komen'."
      }
    ],
    doeDit: [
      "Onderscheid de stem van feiten: 'Dit is wat ik hoorde — niet wie ik ben.'",
      "Deel veilig met therapeut of vertrouwenspersoon.",
      "Oefen één handeling van zelfrespect per dag, hoe klein ook."
    ],
    vermijd: [
      "Zelfverachting bewijzen door zelfdestructief gedrag.",
      "Relaties aangaan die de verachting bevestigen.",
      "Denken dat je het 'verdiend' hebt."
    ],
    zegDit: [
      "“Deze verachting komt uit mijn verleden — niet uit de werkelijkheid.”",
      "“Ik ben menselijk. Dat maakt me niet waardeloos.”"
    ],
    bronnen: [
      {
        boek: "soul-without-shame",
        detail: "Over schaamte, waardeloosheid en het terugvinden van waardigheid."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over schuld en schaamte die kinderen van misbruik dragen."
      },
      {
        boek: "healing-shame-binds",
        detail: "Over hoe schaamte en zelfverachting aan elkaar gebonden raken."
      }
    ],
    gerelateerd: [
      "zelfhaat-begrijpen",
      "waarom-zoveel-schaamte",
      "innerlijke-criticus"
    ]
  },
  {
    id: "identiteit-na-trauma",
    beeld: {
      src: "img/vragen/identiteit-na-trauma.jpg"
    },
    vraag: "Wie ben ik na trauma — hoe vind ik mijn identiteit terug?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "identiteit",
      "zelf",
      "herstel",
      "integratie",
      "authenticiteit",
      "verandering"
    ],
    kort: "Trauma kan je identiteit opsplitsen: wie je was, wie je moest zijn om te overleven, en wie je werkelijk bent. Identiteit terugvinden is geen terugkeer naar 'voorheen', maar langzaam ontdekken wie je bent wanneer overleven niet meer je enige opdracht is.",
    blokken: [
      {
        tekst: "Je vraagt je af: wie ben ik eigenlijk? Ben ik mijn trauma? Ben ik mijn manier van overleven? Ben ik de persoon die alles onder controle houdt, of degene die constant instort? Na jaren overleven voelt 'ik' vaak vaag, versplinterd of vervormd."
      },
      {
        kop: "Identiteit onder druk",
        tekst: "Trauma dwingt je soms een rol aan: het stille kind, de zorgende, de perfecte, de onzichtbare. Die rollen zijn geen nep-identiteit — ze waren nodig. Maar ze kunnen je echte voorkeuren, waarden en verlangens overschaduwen. Herstel betekent leren onderscheiden: wat is overleving, wat is mij?"
      },
      {
        kop: "Ontdekken in plaats van vinden",
        tekst: "Identiteit na trauma is geen schat die je opgraaft intact. Het is een proces: nieuwsgierig worden naar wat je leuk vindt, wat je raakt, waar je nee tegen zegt. Kleine keuzes — kleding, hobby, vriendschap, grens — bouwen een zelf dat niet alleen gedefinieerd is door pijn."
      }
    ],
    doeDit: [
      "Noteer momenten waarop je je 'echt' voelt — ook kort.",
      "Experimenteer met kleine keuzes zonder ze te moeten verdedigen.",
      "Werk in therapie aan integratie van delen en rollen."
    ],
    vermijd: [
      "Identiteit vastpinnen aan trauma ('ik ben alleen maar mijn verleden').",
      "Overlevingsrollen abrupt afleggen zonder steun.",
      "Vergelijken met anderen die 'wél weten wie ze zijn'."
    ],
    zegDit: [
      "“Ik ben meer dan wat mij overkwam.”",
      "“Ik mag ontdekken wie ik ben — dat hoeft niet perfect.”"
    ],
    bronnen: [
      {
        boek: "myth-of-normal",
        detail: "Over authenticiteit en terugkeren naar wie je werkelijk bent."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over identiteit en contact met jezelf na vroeg trauma."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over het samenbrengen van gesplitste delen tot een coherent zelf."
      }
    ],
    gerelateerd: [
      "wie-ben-ik-zonder-overleven",
      "imposter-syndrome-trauma",
      "wanneer-genoeg-hersteld"
    ]
  },
  {
    id: "wie-ben-ik-zonder-overleven",
    beeld: {
      src: "img/vragen/wie-ben-ik-zonder-overleven.jpg"
    },
    vraag: "Wie ben ik als ik niet meer alleen hoef te overleven?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "overleven",
      "identiteit",
      "rust",
      "angst",
      "verandering",
      "vrijheid"
    ],
    kort: "Wanneer overleven je hoofdtaak was, voelt rust of geluk soms leeg of eng. De vraag 'wie ben ik zonder constant alarm?' is een teken van vooruitgang — én van angst voor het onbekende.",
    blokken: [
      {
        tekst: "Je begint stabieler te worden. Triggers worden zachter. En ineens voel je je… verloren. Alsof je identiteit wegvalt wanneer het alarm stopt. 'Als ik niet meer bezig ben met overleven, wie ben ik dan?' Die vraag is dieper dan het klinkt."
      },
      {
        kop: "Overleven als identiteit",
        tekst: "Langdurig trauma maakt van overleven een fulltime job: alert zijn, aanpassen, controleren, pleasen. Dat wordt vertrouwd — zelfs als het uitputtend is. Wanneer het zenuwstelsel rustiger wordt, voelt vrijheid eerst als leegte of gevaar: 'te mooi om waar te zijn'."
      },
      {
        kop: "Ruimte voor leven",
        tekst: "Herstel opent ruimte voor interesses, relaties, speelsheid, keuzes. Dat is nieuw terrein. Je hoeft niet meteen antwoord te hebben op 'wie ben ik?' — je mag ontdekken. Veel mensen bouwen identiteit op in lagen: eerst veiligheid, dan verbinding, dan betekenis. Overleven was fase één; leven mag fase twee worden."
      }
    ],
    doeDit: [
      "Erken de angst bij rust: 'Er is een deel dat bang is voor leegte.'",
      "Vul lege momenten zacht: wandelen, creativiteit, contact — zonder prestatiedruk.",
      "Bespreek identiteitsvragen in therapie als ze vastlopen."
    ],
    vermijd: [
      "Rust saboteren omdat het 'onvertrouwd' voelt.",
      "Denken dat je 'klaar' moet zijn met trauma voordat je mag leven.",
      "Jezelf veroordelen voor het niet meteen weten wie je bent."
    ],
    zegDit: [
      "“Ik hoef niet meer alleen te overleven — ik mag leren leven.”",
      "“Leegte na rust is tijdelijk — er komt ruimte.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de overgang van overleven naar gedijen."
      },
      {
        boek: "end-of-trauma",
        detail: "Over wat er mogelijk is wanneer trauma niet meer het hele verhaal is."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel leren rusten na jaren alertheid."
      }
    ],
    gerelateerd: [
      "identiteit-na-trauma",
      "saboteren-goede-dingen",
      "wanneer-genoeg-hersteld"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 12
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_12 = [
  {
    id: "eerste-jaar-herstel",
    beeld: {
      src: "img/vragen/eerste-jaar-herstel.jpg"
    },
    vraag: "Wat kan ik verwachten in het eerste jaar van herstel?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "eerste jaar",
      "herstel",
      "verwachtingen",
      "tempo",
      "terugval",
      "begin"
    ],
    kort: "Het eerste hersteljaar is vaak onvoorspelbaar: meer inzicht, soms meer pijn, periodes van hoop afgewisseld met terugval. Vooruitgang is zelden rechtlijnig — stabiliteit opbouwen is meestal belangrijker dan alles begrijpen.",
    blokken: [
      {
        tekst: "Je begint met therapie, leest boeken, voelt eindelijk erkenning — en verwacht misschien dat het vanaf nu bergopwaarts gaat. Het eerste jaar kan verwarrend zijn: soms voel je je beter dan ooit, soms erger dan voor je begon. Dat is normaal, geen teken dat herstel niet werkt."
      },
      {
        kop: "Wat vaak gebeurt",
        tekst: "In het eerste jaar leer je vaak je symptomen benoemen, veiligere mensen vinden, en begrijpen wat er gebeurde. Tegelijk kunnen oude gevoelens opwellen wanneer je stopt met verdoven. Slaap, relaties en werk kunnen schommelen. Terugval betekent niet dat je terug bij af bent — het is onderdeel van een niet-lineair proces."
      },
      {
        kop: "Realistische verwachtingen",
        tekst: "Focus op stabiliteit: slaap, voeding, veilig netwerk, grounding, grenzen. Diep verwerken kan later komen. Meet vooruitgang in kleine dingen: één gesprek waarin je je gehoord voelt, één trigger die je sneller herkent, één dag met iets meer rust. Herstel is een marathon, geen sprint."
      }
    ],
    doeDit: [
      "Stel realistische doelen: stabiliteit vóór diep graven.",
      "Houd een eenvoudig logboek bij van kleine vooruitgang.",
      "Zoek ondersteuning — herstel alleen is zwaarder dan nodig."
    ],
    vermijd: [
      "Verwachten dat pijn lineair afneemt.",
      "Therapie stoppen na één terugval.",
      "Jezelf vergelijken met anderen die 'sneller' herstellen lijken."
    ],
    zegDit: [
      "“Terugval hoort bij herstel — het betekent niet dat ik faal.”",
      "“Klein vooruitgang telt.”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd herstel en realistische verwachtingen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de overgang van overleven naar gedijen."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over stabiliseren voordat je dieper werkt."
      }
    ],
    gerelateerd: [
      "hoe-lang-duurt-herstel",
      "wanneer-genoeg-hersteld",
      "therapie-erger-maken"
    ]
  },
  {
    id: "online-therapie-goed",
    beeld: {
      src: "img/vragen/online-therapie-goed.jpg"
    },
    vraag: "Is online therapie goed genoeg voor trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "online therapie",
      "videotherapie",
      "toegang",
      "veiligheid",
      "hulp",
      "afstand"
    ],
    kort: "Online therapie kan goed werken bij trauma, vooral voor stevig worden, uitleg over hoe trauma werkt, en werken aan relaties — mits je een veilige, privé plek hebt en de therapeut traumagericht werkt. Het is niet voor iedereen een perfecte vervanging, maar wel een serieuze optie.",
    blokken: [
      {
        tekst: "Online therapie werd normaal — en veel mensen vragen zich af of het 'echt' werkt voor trauma. Het antwoord is niet zwart-wit: voor sommigen is het ideaal, voor anderen mist het te veel."
      },
      {
        kop: "Wanneer het kan werken",
        tekst: "Online werkt vaak goed voor: kalmeer-oefeningen, delenwerk in rustig tempo, uitleg over hoe trauma werkt, en als afstand, moeite met reizen of angst voor wachtkamers een drempel vormen. Een vertrouwde therapeut die je al kent, kan online soms naadloos doorgaan."
      },
      {
        kop: "Wanneer voorzichtig",
        tekst: "Bij zwaar afhaken (dissociatie), gedachten aan zelfdoding, ingewikkeld lichaamsgericht werk, of als je geen privéruimte hebt, kan online beperkend zijn. Let op: een goede verbinding, een therapeut die overspoeling herkent, en afspraken over wat je doet als de verbinding wegvalt. Online is geen goedkope variant — kwaliteit en veiligheid tellen even hard mee."
      }
    ],
    doeDit: [
      "Zorg voor een privé, veilige plek met stabiele verbinding.",
      "Kies een therapeut met specifieke traumatraining.",
      "Bespreek vooraf hoe om te gaan met technische storingen of overspoeling."
    ],
    vermijd: [
      "Online therapie kiezen enkel omdat het goedkoper voelt — veiligheid gaat voor.",
      "Therapie doen op een plek waar je overspoeld of afgeluisterd wordt.",
      "Denken dat online automatisch minder diep kan gaan — dat hangt af van de match."
    ],
    zegDit: [
      "“Ik mag vragen hoe mijn therapeut online met trauma werkt.”",
      "“Als het niet veilig voelt, mag ik wisselen of overschakelen.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over verschillende wegen naar herstel, inclusief relationele veiligheid op afstand."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over het belang van veiligheid en verbinding in elke therapeutische vorm."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over traumagerichte principes die ook online gelden."
      }
    ],
    gerelateerd: [
      "goede-therapeut-kiezen",
      "therapie-afbreken-wanneer",
      "tweede-therapie-zoeken"
    ]
  },
  {
    id: "groepstherapie-zinvol",
    beeld: {
      src: "img/vragen/groepstherapie-zinvol.jpg"
    },
    vraag: "Is groepstherapie zinvol bij trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "groepstherapie",
      "groep",
      "verbinding",
      "schaamte",
      "herkenning",
      "steun"
    ],
    kort: "Groepstherapie kan krachtig zijn: herkenning vermindert schaamte, en veilig contact leert dat je niet alleen bent. Het vraagt wel een goed geleide groep, traumagerichte structuur, en dat je basale stabiliteit hebt.",
    blokken: [
      {
        tekst: "Het idee om je verhaal te delen met vreemden kan angstig zijn — of juist bevrijdend. Groepstherapie bij trauma is niet 'gewoon praten in een kring'. Goede groepen bieden structuur, veiligheid en begrip dat veel deelnemers hetzelfde stille verdriet kennen."
      },
      {
        kop: "Voordelen",
        tekst: "In een veilige groep hoor je: 'ik herken dat'. Schaamte verliest macht wanneer anderen niet geschokt zijn door wat jij meemaakte. Je oefent grenzen, luisteren, en soms voor het eerst contact zonder de druk van een één-op-één relatie. Sommige mensen leren in groep sneller dat ze niet 'de enige' zijn."
      },
      {
        kop: "Wanneer het niet past",
        tekst: "Groep is minder geschikt wanneer je sterk dissocieert, nog in acuut gevaar zit, of wanneer de groep niet traumagericht is geleid. Let op: verplicht delen, gebrek aan structuur, of deelnemers die elkaar triggeren zonder begeleiding. Een goede groep heeft duidelijke afspraken, een ervaren therapeut, en respect voor tempo."
      }
    ],
    doeDit: [
      "Vraag naar de werkwijze, grootte en traumatraining van de begeleider.",
      "Start met stabiliteit — groep aanvult, vervangt geen individuele therapie altijd.",
      "Respecteer je tempo: je hoeft niet alles te delen."
    ],
    vermijd: [
      "Groepen zonder duidelijke veiligheidsafspraken.",
      "Jezelf vergelijken met anderen ('zij hebben het erger').",
      "Doorgaan als je je structureel onveilig voelt."
    ],
    zegDit: [
      "“Ik mag mijn tempo bepalen in de groep.”",
      "“Herkenning helpt — ik hoef niet alles te vertellen.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over het belang van veilig contact en gedeelde herkenning."
      },
      {
        boek: "myth-of-normal",
        detail: "Over verbinding als tegengif tegen isolatie en schaamte."
      },
      {
        boek: "carefrontation",
        detail: "Over groepsdynamiek, grenzen en relationele heling."
      }
    ],
    gerelateerd: [
      "peer-support-trauma",
      "ondersteunend-netwerk-opbouwen",
      "waarom-zoveel-schaamte"
    ]
  },
  {
    id: "peer-support-trauma",
    beeld: {
      src: "img/vragen/peer-support-trauma.jpg"
    },
    vraag: "Wat is peer support en helpt dat bij trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "peer support",
      "lotgenoten",
      "steun",
      "herkenning",
      "community",
      "herstel"
    ],
    kort: "Peer support is hulp van mensen met vergelijkbare ervaringen — geen vervanging van therapie, maar een waardevolle aanvulling. Herkenning, praktische tips en het gevoel 'ik ben niet alleen' kunnen herstel versnellen.",
    blokken: [
      {
        tekst: "Peer support betekent: steun van gelijken — mensen die trauma of complexe achtergronden kennen uit eigen ervaring, vaak na training. Het kan informeel zijn (online community) of gestructureerd (peer-led groepen, buddy-systemen)."
      },
      {
        kop: "Waarom het werkt",
        tekst: "Professionele hulp is essentieel, maar peers bieden iets anders: 'ik snap het echt'. Schaamte vermindert wanneer iemand niet geschokt reageert op wat jij normaal vindt om te verbergen. Peers delen soms praktische overlevingstips — grounding, hulpverleners vinden, omgaan met familie — die alleen uit ervaring komen."
      },
      {
        kop: "Grenzen bewaken",
        tekst: "Peer support is geen therapie. Let op groepen die te veel detail delen zonder begeleiding, ongezonde afhankelijkheid, of 'advies' zonder nuance. Kies communities met moderatie, respect voor privacy, en duidelijke grenzen. Combineer peer support met professionele hulp voor diep traumawerk."
      }
    ],
    doeDit: [
      "Zoek betrouwbare communities met duidelijke regels en moderatie.",
      "Combineer peer support met professionele begeleiding.",
      "Deel in je eigen tempo — je bent geen verantwoordelijkheid voor anderen."
    ],
    vermijd: [
      "Peer support als enige hulp bij ernstige crisis.",
      "Groepen waar vergelijking of competitie om 'wie het ergst had' ontstaat.",
      "Te veel persoonlijke details delen in onbeveiligde online ruimtes."
    ],
    zegDit: [
      "“Ik mag steun zoeken bij lotgenoten — dat is geen zwakte.”",
      "“Peer support vult aan; het vervangt therapie niet.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over het belang van veilig contact en gedeelde ervaring."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over geven en ontvangen van steun zonder uitputting."
      },
      {
        boek: "politics-of-trauma",
        detail: "Over community, collectieve heling en peer-bewegingen."
      }
    ],
    gerelateerd: [
      "groepstherapie-zinvol",
      "ondersteunend-netwerk-opbouwen",
      "goede-therapeut-kiezen"
    ]
  },
  {
    id: "dagboeken-trauma",
    beeld: {
      src: "img/vragen/dagboeken-trauma.jpg"
    },
    vraag: "Helpt dagboekschrijven bij trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "dagboek",
      "journaling",
      "schrijven",
      "verwerking",
      "reflectie",
      "zelfhulp"
    ],
    kort: "Dagboekschrijven kan helpen om gedachten te ordenen, triggers te herkennen en emoties een plek te geven — mits je het veilig doet. Te vroeg of te diep graven zonder stabiliteit kan overspoelen.",
    blokken: [
      {
        tekst: "Schrijven over wat je meemaakte klinkt simpel — en voor sommigen is het bevrijdend. Voor anderen opent het de deur naar overspoeling. Dagboeken bij trauma werkt het best als hulpmiddel, niet als verplichting of vervanging van therapie."
      },
      {
        kop: "Wat het kan bieden",
        tekst: "Een dagboek geeft woorden aan wat moeilijk te zeggen is. Je ziet patronen: welke dagen zijn zwaar, welke triggers terugkomen, wat helpt. Sommige mensen schrijven brieven aan delen van zichzelf, of alleen feiten en gevoelens van de dag — zonder het hele verhaal te herhalen."
      },
      {
        kop: "Veilig schrijven",
        tekst: "Begin klein: vandaag voelde ik…, ik heb nodig… Sla het diepe graven over als je nog instabiel bent. Bewaar je dagboek veilig — fysiek afgesloten of digitaal beveiligd. Stop als je overspoeld raakt en gebruik grounding. Bespreek met je therapeut wat je wel en niet opschrijft."
      }
    ],
    doeDit: [
      "Start met korte, huidige notities — niet met je hele levensverhaal.",
      "Bewaar je dagboek op een veilige plek.",
      "Gebruik grounding na het schrijven als je gespannen raakt."
    ],
    vermijd: [
      "Graven in details zonder stabiliteit of begeleiding.",
      "Dagboek op een plek bewaren waar anderen het kunnen lezen.",
      "Schrijven als zelfkritiek of zelfbestraffing."
    ],
    zegDit: [
      "“Ik schrijf voor mij — niet om het perfect te maken.”",
      "“Ik mag stoppen als het te veel wordt.”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gestructureerde schrijfoefeningen bij complex trauma."
      },
      {
        boek: "cptsd-coping-workbook",
        detail: "Over dagelijks omgaan met klachten en oefeningen om stil te staan bij jezelf."
      },
      {
        boek: "ifs-workbook",
        detail: "Over schrijven vanuit en naar innerlijke delen."
      }
    ],
    gerelateerd: [
      "creatief-herstel",
      "wat-is-grounding",
      "eerste-jaar-herstel"
    ]
  },
  {
    id: "creatief-herstel",
    beeld: {
      src: "img/vragen/creatief-herstel.jpg"
    },
    vraag: "Kan creativiteit helpen bij traumaherstel?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "creativiteit",
      "kunst",
      "muziek",
      "expressie",
      "lichaam",
      "herstel"
    ],
    kort: "Creativiteit — tekenen, muziek, dans, schrijven, kleien — kan het lichaam en de emoties bereiken wanneer woorden tekortschieten. Het is geen luxe, maar een legitieme weg naar regulatie, expressie en betekenis.",
    blokken: [
      {
        tekst: "Niet iedereen is 'creatief' in de klassieke zin — maar trauma slaat vaak op in beelden, geluiden en lichaamsgevoelens die moeilijk in taal passen. Creatieve expressie biedt een andere uitweg: iets maken, bewegen, klanken laten horen, zonder alles te hoeven verklaren."
      },
      {
        kop: "Waarom het werkt",
        tekst: "Creativiteit zet andere delen van je brein aan dan analyseren. Het kan je zenuwstelsel kalmeren via ritme (muziek, trommelen), beweging (dans, yoga), of focus (tekenen, handwerk). Het hoeft geen 'mooi resultaat' op te leveren — het gaat om het doen zelf. Veel traumatherapeuten gebruiken kunst, muziek of beweging in de behandeling."
      },
      {
        kop: "Zonder druk",
        tekst: "Creatief herstel faalt wanneer het weer perfectionisme wordt. Het doel is expressie en aanwezigheid, geen tentoonstelling. Begin klein: kleur, klei, een playlist, vijf minuten tekenen. Als iets triggert, stop en ground. Creativiteit aanvult therapie — het vervangt diep traumawerk niet."
      }
    ],
    doeDit: [
      "Kies een vorm zonder prestatiedruk: schetsen, zingen, wandelen met muziek.",
      "Focus op het proces, niet op het eindresultaat.",
      "Combineer met therapie als creativiteit veel losmaakt."
    ],
    vermijd: [
      "Creativiteit als nieuwe prestatie zien.",
      "Doorgaan wanneer je overspoeld raakt.",
      "Denken dat je 'talent' nodig hebt om te profiteren."
    ],
    zegDit: [
      "“Ik hoef geen kunstenaar te zijn om te expresseren.”",
      "“Creativiteit is voor mij, niet voor anderen.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over beweging, ritme en expressie als wegen naar herstel."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over lichaamsgerichte expressie en het voltooien van overlevingsenergie."
      },
      {
        boek: "becoming-the-body",
        detail: "Over creatieve en lichaamsgerichte manieren om trauma te integreren."
      }
    ],
    gerelateerd: [
      "dagboeken-trauma",
      "natuur-en-herstel",
      "wat-is-grounding"
    ]
  },
  {
    id: "natuur-en-herstel",
    beeld: {
      src: "img/vragen/natuur-en-herstel.jpg"
    },
    vraag: "Helpt natuur bij traumaherstel?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "natuur",
      "buiten",
      "wandelen",
      "regulatie",
      "rust",
      "zenuwstelsel"
    ],
    kort: "Tijd in de natuur kan het zenuwstelsel kalmeren: groen, ritme, stilte en beweging bieden ankers die moeilijk te vinden zijn binnen vier muren. Het is geen wondermiddel, maar een ondersteunende factor.",
    blokken: [
      {
        tekst: "Veel mensen merken dat ze buiten rustiger ademen, minder in hun hoofd zitten, of zich even 'normaal' voelen. Natuur is geen hype — er is onderzoek dat groen, natuurlijk licht en wandelen stress hormonen kunnen verlagen en het parasympathische zenuwstelsel ondersteunen."
      },
      {
        kop: "Wat natuur biedt",
        tekst: "Natuur biedt ruimte zonder oordeel, ritme (seizoenen, golven), en zintuiglijke prikkels die zacht zijn in vergelijking met stedelijke overload. Wandelen combineert beweging — essentieel voor trauma — met externe focus. Voor sommigen is een boom, park of water een veilige plek om te grounden."
      },
      {
        kop: "Praktisch en realistisch",
        tekst: "Natuur is niet voor iedereen toegankelijk — stad, gezondheid, geld en veiligheid spelen mee. Begin waar je kunt: een plant, een balkon, een kort parkbezoek. Combineer met andere hulp. Als buiten alleen voelt, neem iemand mee of kies een vertrouwde plek."
      }
    ],
    doeDit: [
      "Plan korte, regelmatige momenten buiten — consistentie telt meer dan duur.",
      "Gebruik zintuigen bewust: voeten op de grond, geluiden horen, lucht voelen.",
      "Combineer natuur met grounding of rustige beweging."
    ],
    vermijd: [
      "Denken dat natuur alle therapie vervangt.",
      "Jezelf schuldig voelen als 'echte' natuur niet bereikbaar is.",
      "Alleen naar onveilige plekken gaan."
    ],
    zegDit: [
      "“Buiten ademen helpt mijn zenuwstelsel.”",
      "“Klein en dichtbij telt ook.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel kalmeren via omgeving en lichaamsbewustzijn."
      },
      {
        boek: "body-keeps-score",
        detail: "Over beweging en lichaamsgerichte activiteiten in herstel."
      },
      {
        boek: "mindful-somatic-awareness",
        detail: "Over bewuste aanwezigheid in lichaam en omgeving."
      }
    ],
    gerelateerd: [
      "creatief-herstel",
      "waarom-ben-ik-altijd-moe",
      "wat-is-grounding"
    ]
  },
  {
    id: "post-traumatische-groei",
    beeld: {
      src: "img/vragen/post-traumatische-groei.jpg"
    },
    vraag: "Wat is post-traumatische groei?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "post-traumatische groei",
      "groei",
      "betekenis",
      "veerkracht",
      "herstel",
      "perspectief"
    ],
    kort: "Post-traumatische groei beschrijft hoe sommige mensen na trauma dieperere relaties, nieuwe prioriteiten of meer zelfkennis ontwikkelen. Het is geen vergoeding voor lijden — en geen verplichting om 'dankbaar' te zijn voor wat je overkwam.",
    blokken: [
      {
        tekst: "Je hoort soms: 'wat je niet doodt, maakt je sterker.' Dat klinkt vaak krenkend als je midden in pijn zit. Post-traumatische groei (PTG) is een onderzoeksconcept dat beschrijft dat sommige mensen na verwerking nieuwe sterktes of perspectieven ontdekken — niet omdat trauma 'goed' was, maar omdat mensen betekenis zoeken en aanpassen."
      },
      {
        kop: "Wat groei kan inhouden",
        tekst: "Mogelijke dimensies: sterkere relaties met wie echt steunt, nieuwe mogelijkheden (werk, studie, advocacy), meer waardering voor het leven, spirituele of existentiële diepgang, of een scherper gevoel voor eigen kracht. Dit ontstaat meestal náádat er ruimte is voor pijn — niet door pijn te ontkennen."
      },
      {
        kop: "Geen druk tot dankbaarheid",
        tekst: "PTG is geen doel dat je moet halen. Niet iedereen ervaart groei, en dat is oké. Trauma was niet 'nodig' voor je ontwikkeling. Gebruik het concept als mogelijk perspectief, niet als maatstaf. Herstel mag ook gewoon betekenen: minder lijden, meer keuze."
      }
    ],
    doeDit: [
      "Erken eerst pijn — groei komt zelden vóór erkenning.",
      "Noteer kleine verschuivingen in waarden of relaties, zonder druk.",
      "Wees sceptisch tegenover 'positiviteit' die je lijden minimaliseert."
    ],
    vermijd: [
      "Groei gebruiken om trauma te romantiseren.",
      "Jezelf falen noemen als je geen 'groei' voelt.",
      "Anderen vertellen dat ze 'dankbaar' moeten zijn."
    ],
    zegDit: [
      "“Groei mag — maar mijn pijn was niet nodig.”",
      "“Ik hoef geen inspirati verhaal te zijn.”"
    ],
    bronnen: [
      {
        boek: "end-of-trauma",
        detail: "Over wat mogelijk wordt wanneer trauma niet meer alles bepaalt."
      },
      {
        boek: "myth-of-normal",
        detail: "Over heling, authenticiteit en betekenis na lijden."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht en groei in moeilijke omstandigheden."
      }
    ],
    gerelateerd: [
      "wanneer-genoeg-hersteld",
      "eerste-jaar-herstel",
      "identiteit-na-trauma"
    ]
  },
  {
    id: "therapie-afbreken-wanneer",
    beeld: {
      src: "img/vragen/therapie-afbreken-wanneer.jpg"
    },
    vraag: "Wanneer mag ik therapie afbreken of pauzeren?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "therapie stoppen",
      "afbouwen",
      "pauze",
      "einde",
      "match",
      "grenzen"
    ],
    kort: "Therapie stoppen mag — als de match niet klopt, als je overspoeld raakt zonder plan, of als je doelen bereikt zijn. Het beste is een bewuste afsluiting met je therapeut, niet ghosten of abrupt verdwijnen.",
    blokken: [
      {
        tekst: "Je twijfelt of je moet doorgaan. Misschien voelt het alsof het niet helpt, of juist te zwaar is. Stoppen met therapie is geen falen — maar hoe je stopt, maakt verschil voor je veiligheid en verder herstel."
      },
      {
        kop: "Redenen om te stoppen of wisselen",
        tekst: "Een slechte match: je voelt je kleiner, niet gehoord, of structureel overspoeld. Doelen bereikt: je hebt stabiliteit, weet wat te doen bij terugval, en wilt onderhoud of pauze. Financiële of praktische redenen. Of: een andere fase vraagt andere hulp (bijvoorbeeld van stabilisatie naar EMDR)."
      },
      {
        kop: "Bewust afsluiten",
        tekst: "Praat met je therapeut over stoppen — ook als het awkward voelt. Een goede afsluiting verwerkt wat er gebeurde, maakt een plan bij terugval, en soms helpt het je grenzen oefenen. Abrupt stoppen midden in diep werk zonder plan kan onverwerkte activatie achterlaten. Pauzeren kan ook: 'ik kom over drie maanden terug'."
      }
    ],
    doeDit: [
      "Evalueer eerlijk: help dit, of schaadt het?",
      "Bespreek stoppen of pauzeren met je therapeut.",
      "Maak een terugvalplan: wie bel je, wat doe je bij crisis?"
    ],
    vermijd: [
      "Doorgaan uit schuld of angst om de therapeut teleur te stellen.",
      "Ghosten zonder uitleg — dat mist een leermoment.",
      "Stoppen zonder alternatief bij actieve suïcidaliteit of instabiliteit."
    ],
    zegDit: [
      "“Ik mag evalueren of deze therapie nog past.”",
      "“Ik wil graag bewust afsluiten en bespreken wat ik meeneem.”"
    ],
    bronnen: [
      {
        boek: "narm-practical-guide",
        detail: "Over gefaseerd werken en wanneer van aanpak wisselen."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over realistische verwachtingen en onderhoud na intensieve fases."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over langdurig herstel en het tijdig aanpassen van hulp."
      }
    ],
    gerelateerd: [
      "goede-therapeut-kiezen",
      "therapie-erger-maken",
      "wanneer-genoeg-hersteld"
    ]
  },
  {
    id: "tweede-therapie-zoeken",
    beeld: {
      src: "img/vragen/tweede-therapie-zoeken.jpg"
    },
    vraag: "Hoe zoek ik een tweede therapeut of andere aanpak?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "tweede therapeut",
      "wisselen",
      "aanpak",
      "EMDR",
      "IFS",
      "match"
    ],
    kort: "Een tweede therapeut zoeken is normaal — verschillende fasen vragen verschillende methodes. Stevig worden, lichaamswerk, EMDR of delenwerk sluiten elkaar niet uit, maar vragen wel goede afstemming en duidelijke communicatie.",
    blokken: [
      {
        tekst: "Je hebt maanden of jaren gewerkt met één therapeut. Nu voel je dat je vastzit, of juist klaar bent voor een volgende stap — EMDR, lichaamsgericht werk, IFS. Hoe zoek je zonder alles kwijt te raken?"
      },
      {
        kop: "Waarom wisselen of aanvullen",
        tekst: "Geen enkele therapeut dekt alles. Stevig worden kan bij de ene; verwerking bij een EMDR-specialist; lichaamswerk bij een lichaamsgerichte therapeut. Soms klikt het niet — wisselen is dan geen verraad, maar zelfzorg. Andere keren stuurt je huidige therapeut door: 'voor dit stuk heb je iemand anders nodig'."
      },
      {
        kop: "Praktisch aanpakken",
        tekst: "Bespreek met je huidige therapeut dat je iets extra zoekt — dat voorkomt verwarring. Vraag nieuwe therapeuten naar traumatraining, werkwijze bij overspoeling, en samenwerking met anderen. Twee therapeuten tegelijk kan, maar alleen met duidelijke afspraken. Documenteer wat werkte en wat niet — dat bespaart tijd."
      }
    ],
    doeDit: [
      "Weet wat je zoekt: stabilisatie, verwerking, lichaam, delen?",
      "Vraag doorverwijzingen via huisarts, huidige therapeut of betrouwbare bronnen.",
      "Informeer beide therapeuten als je parallel werkt."
    ],
    vermijd: [
      "Wisselen zonder te weten wat je mist — dat herhaalt teleurstelling.",
      "Twee therapeuten zonder dat ze van elkaar weten.",
      "Denken dat de 'perfecte' therapeut alles in één moet doen."
    ],
    zegDit: [
      "“Ik zoek iemand met specifieke training in …”",
      "“Ik wil graag coördineren met mijn huidige begeleiding.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over verschillende traumabehandelingen en wanneer welke past."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over traumagerichte benaderingen en doorverwijzing."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd herstel en combineren van methodes."
      }
    ],
    gerelateerd: [
      "goede-therapeut-kiezen",
      "wanneer-doorverwijzen-specialist",
      "therapie-afbreken-wanneer"
    ]
  },
  {
    id: "herstel-werk-hervatten",
    beeld: {
      src: "img/vragen/herstel-werk-hervatten.jpg"
    },
    vraag: "Hoe pak ik werk weer op tijdens herstel?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "werk",
      "hervatten",
      "uitval",
      "burn-out",
      "tempo",
      "grenzen"
    ],
    kort: "Werk hervatten na trauma of uitval vraagt realisme: klein beginnen, grenzen bewaken, en accepteren dat volledig tempo misschien niet meteen haalbaar is. Werk kan onderdeel van herstel zijn — maar niet ten koste van stabiliteit.",
    blokken: [
      {
        tekst: "Je bent uitgevallen — door burn-out, depressie, trauma, of alles tegelijk. Nu overweeg je terug te gaan, en de angst is groot: val ik terug? Kan ik het wel? Werk hervatten is geen wedstrijd om 'normaal' te worden; het is een gefaseerd experiment."
      },
      {
        kop: "Klein en meetbaar",
        tekst: "Begin waar mogelijk: minder uren, andere taken, thuiswerken, of eerst vrijwilligerswerk. Bespreek met arbeidsarts of bedrijfsarts wat haalbaar is. Herstel en werk balanceren betekent soms: werk is onderdeel van het leven, niet de maatstaf van succes."
      },
      {
        kop: "Grenzen op het werk",
        tekst: "Trauma maakt je soms extra gevoelig voor kritiek, druk of onvoorspelbaarheid. Ken je triggers: harde deadlines, luidruchtige kantoren, autoritaire leiding. Communiceer waar veilig wat je nodig hebt — niet alles hoeft uitgelegd te worden. Een therapeut kan helpen om grenzen te oefenen zonder schuld."
      }
    ],
    doeDit: [
      "Start met een realistisch plan: uren, pauzes, thuiswerken.",
      "Bespreek met arbeidsarts en therapeut wat haalbaar is.",
      "Plan herstelmomenten in — niet alleen vrije dagen achteraf."
    ],
    vermijd: [
      "Meteen fulltime teruggaan om te 'bewijzen' dat je het kan.",
      "Werk gebruiken om te vermijden wat therapie opent.",
      "Jezelf veroordelen bij terugval of minder productiviteit."
    ],
    zegDit: [
      "“Ik bouw langzaam op — dat is verstandig, geen falen.”",
      "“Mijn herstel gaat voor op perfect presteren.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over stress, uitputting en de relatie met werk en grenzen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over werken met complex trauma en zelfzorg op de werkvloer."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over uitputting en herstel in helpende beroepen."
      }
    ],
    gerelateerd: [
      "waarom-ben-ik-altijd-moe",
      "eerste-jaar-herstel",
      "kan-ik-geen-nee-zeggen"
    ]
  },
  {
    id: "wanneer-doorverwijzen-specialist",
    beeld: {
      src: "img/vragen/wanneer-doorverwijzen-specialist.jpg"
    },
    vraag: "Wanneer moet ik doorverwezen worden naar een specialist?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "doorverwijzing",
      "specialist",
      "huisarts",
      "diagnose",
      "hulp",
      "niveau"
    ],
    kort: "Doorverwijzing naar een specialist is nodig wanneer klachten ernstig of ingewikkeld zijn of om specialistische hulp vragen — denk aan EMDR, dissociatieve stoornissen, ernstige verslaving, of wanneer basishulp onvoldoende helpt. Je huisarts of huidige therapeut kan meedenken.",
    blokken: [
      {
        tekst: "Je bent al een tijd in behandeling, of je huisarts behandelde je klachten als 'stress' — maar het wordt niet beter. Of je herkent ernstige klachten: hevig afhaken (dissociatie), flashbacks die je leven stilzetten, verslaving, eetproblemen, of gedachten aan zelfdoding. Wanneer is 'gewone' hulp niet genoeg?"
      },
      {
        kop: "Signalen voor specialistische hulp",
        tekst: "Overweeg doorverwijzing bij: complex trauma (CPTSS) met meerdere ernstige klachten; dissociatieve identiteitsstoornis of ernstig afhaken (dissociatie); traumaverwerking die EMDR, lichaamsgericht werk of IFS vraagt; daarnaast een verslaving of eetstoornis; lang niet kunnen functioneren ondanks gewone therapie; of wanneer je therapeut zelf aangeeft dat een specialist nodig is."
      },
      {
        kop: "Hoe het aanpakken",
        tekst: "Begin bij je huisarts voor doorverwijzing en uitsluiten lichamelijke oorzaken. Vraag expliciet om traumagerichte hulp — niet elke psycholoog is gespecialiseerd. Wachtlijsten zijn normaal; vraag om crisiscontact ondertussen. Als naaste kun je iemand ondersteunen bij zoeken, maar niet forceren."
      }
    ],
    doeDit: [
      "Bespreek met huisarts of therapeut: 'Ik denk dat dit specialistische hulp vraagt.'",
      "Vraag specifiek naar traumatraining en wachtlijstduur.",
      "Houd een symptoomoverzicht bij om gesprekken te structureren."
    ],
    vermijd: [
      "Maanden blijven hangen in hulp die duidelijk tekortschiet.",
      "Denken dat doorverwijzing betekent dat je 'te erg' bent.",
      "Specialisten vermijden uit schaamte of kostenangst zonder opties te onderzoeken."
    ],
    zegDit: [
      "“Ik heb specialistische traumahulp nodig — kunt u me doorverwijzen?”",
      "“Wat zijn de opties als de wachtlijst lang is?”"
    ],
    bronnen: [
      {
        boek: "what-happened-to-you",
        detail: "Over passende zorg en het belang van trauma-informed hulpverlening."
      },
      {
        boek: "body-keeps-score",
        detail: "Over gespecialiseerde traumabehandelingen en wanneer ze nodig zijn."
      },
      {
        boek: "deepest-well",
        detail: "Over vroege herkenning en doorverwijzing bij ernstige stress."
      }
    ],
    gerelateerd: [
      "goede-therapeut-kiezen",
      "tweede-therapie-zoeken",
      "waar-begin-ik-met-trauma"
    ]
  },
  {
    id: "krijgt-iedereen-ptss",
    beeld: {
      src: "img/vragen/krijgt-iedereen-ptss.png"
    },
    vraag: "Krijgt iedereen trauma na een schokkende gebeurtenis?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "ptss",
      "veerkracht",
      "herstel",
      "schok",
      "verwerking",
      "normaal"
    ],
    kort: "Nee. De meeste mensen krijgen na een schokkende gebeurtenis géén blijvende PTSS. Heftige reacties in de eerste weken zijn normaal en zakken meestal vanzelf. Veerkracht is de regel — maar wie wél klachten houdt, verdient goede hulp.",
    blokken: [
      {
        tekst: "Na een ongeval, geweld of verlies denken veel mensen dat PTSS bijna zeker volgt. Dat beeld klopt niet. In de eerste dagen en weken zijn heftige reacties — slecht slapen, schrikachtig zijn, beelden herbeleven, je verdoofd voelen — heel normaal. Bij de meeste mensen nemen die reacties vanzelf weer af."
      },
      {
        kop: "Veerkracht is de regel, niet de uitzondering",
        tekst: "Onderzoek bij grote groepen mensen na een schok laat steeds hetzelfde zien: het grootste deel herstelt op eigen kracht, vaak met steun van naasten. Een kleinere groep heeft meer tijd of hulp nodig om te herstellen. En een nog kleinere groep houdt langdurige klachten die we PTSS noemen. Er zijn dus meerdere wegen — en veerkracht komt het vaakst voor."
      },
      {
        kop: "Waarom de een wel en de ander niet",
        tekst: "Of je langdurig klachten houdt, zegt niets over 'sterk' of 'zwak' zijn. Het speelt mee of je eerder trauma meemaakte, of er steun om je heen is, of het gevaar echt voorbij is, hoe ernstig de gebeurtenis was en of je lichaam de stress kon ontladen. Houd je na enkele weken nog veel last, of wordt het erger? Dan is dat geen falen, maar een teken om hulp te zoeken."
      }
    ],
    doeDit: [
      "Geef jezelf de eerste weken rust en tijd; acute reacties horen bij een schok.",
      "Zoek steun bij mensen die je vertrouwt — verbinding helpt het herstel.",
      "Houden klachten na ongeveer een maand aan of worden ze erger? Bespreek het met je huisarts."
    ],
    vermijd: [
      "Jezelf onder druk zetten omdat je het 'nu toch wel verwerkt zou moeten hebben'.",
      "Elke heftige reactie meteen als PTSS bestempelen.",
      "Wachten met hulp zoeken bij aanhoudende klachten, uit angst om aan te stellen."
    ],
    zegDit: [
      "“Wat ik nu voel hoort bij een schok — het hoeft niet blijvend te zijn.”",
      "“Hulp zoeken mag, ook als anderen sneller lijken te herstellen.”"
    ],
    bronnen: [
      {
        boek: "end-of-trauma",
        detail: "Over hoe veerkracht de meest voorkomende uitkomst is na een schokkende gebeurtenis."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over wat veerkracht ondersteunt en herstel mogelijk maakt."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de verschillende manieren waarop mensen op schokkende gebeurtenissen reageren."
      }
    ],
    gerelateerd: [
      "wat-is-ptss",
      "post-traumatische-groei",
      "wat-is-trauma-erg-genoeg"
    ]
  },
  {
    id: "wat-is-felt-sense",
    beeld: {
      src: "img/vragen/wat-is-felt-sense.jpg"
    },
    vraag: "Wat is de 'felt sense' — en hoe gebruik ik die?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "felt sense",
      "lichaamsgevoel",
      "somatisch",
      "gewaarwording",
      "lichaamsbewustzijn",
      "signaal"
    ],
    kort: "De felt sense is het directe, lichamelijke gevoel van binnenuit — nog vóór je het in woorden vat. Leren dit op te merken (een knoop in je maag, warmte in je borst) is de basis van somatisch traumawerk: je lichaam vertelt iets wat je hoofd nog niet weet.",
    blokken: [
      {
        tekst: "Soms 'weet' je iets aan je lijf voordat je het kunt uitleggen: een onrustig gevoel, een knoop in je buik, je schouders die optrekken. Peter Levine noemt dat de felt sense — de levende, lichamelijke ervaring van dit moment, nog vóór gedachten of woorden."
      },
      {
        kop: "Waarom dit belangrijk is bij trauma",
        tekst: "Bij trauma raken hoofd en lichaam vaak los van elkaar. Je kunt 'het is oké' denken terwijl je lijf in alarm staat. De felt sense brengt die twee weer samen. Door rustig te voelen wat er ín je gebeurt, krijg je toegang tot signalen die je anders wegdrukt — en kan je zenuwstelsel stap voor stap ontladen."
      },
      {
        kop: "Hoe je ermee begint",
        tekst: "Begin klein en zonder oordeel. Vraag jezelf: 'Wat voel ik nú in mijn lichaam?' Merk plek, temperatuur, spanning of beweging op. Je hoeft niets te veranderen of te verklaren — alleen opmerken en benoemen ('mijn keel zit dicht'). Voelt het te veel? Richt je dan even op iets neutraals of fijns in je lijf en kom later terug."
      }
    ],
    doeDit: [
      "Neem dagelijks even tijd om te scannen: wat voel ik nú, en wáár?",
      "Gebruik simpele woorden voor sensaties: druk, warmte, trilling, leegte.",
      "Werk in kleine stukjes; pauzeer zodra het te intens wordt."
    ],
    vermijd: [
      "Sensaties meteen willen wegdenken of 'oplossen'.",
      "Jezelf dwingen om bij overweldigende gevoelens te blijven.",
      "Denken dat je het 'fout' voelt — er is geen juiste uitkomst."
    ],
    zegDit: [
      "“Ik mag voelen wat er is, zonder het meteen te begrijpen.”",
      "“Mijn lichaam geeft me informatie, geen bevel.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Over de felt sense als sleutel om vastgezette trauma-energie te ontladen."
      },
      {
        boek: "in-an-unspoken-voice",
        detail: "Over hoe lichamelijk gewaarworden het lichaam helpt trauma los te laten."
      },
      {
        boek: "body-keeps-score",
        detail: "Over het herstellen van het contact tussen lichaam en geest na trauma."
      }
    ],
    gerelateerd: [
      "wat-is-grounding",
      "window-of-tolerance",
      "wat-is-somatische-therapie"
    ]
  },
  {
    id: "mezelf-herouderen",
    beeld: {
      src: "img/vragen/mezelf-herouderen.jpg"
    },
    vraag: "Hoe herouder ik mezelf (reparenting)?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "reparenting",
      "herouderen",
      "innerlijk kind",
      "zelfzorg",
      "zelfcompassie",
      "herstel"
    ],
    kort: "Herouderen (reparenting) betekent: jezelf nu alsnog geven wat je als kind miste — veiligheid, troost, structuur en waardering. Niet door te doen alsof je weer kind bent, maar door als volwassene goed voor je jongere delen te zorgen.",
    blokken: [
      {
        tekst: "Als je opgroeide zonder genoeg veiligheid, troost of erkenning, draag je dat gemis vaak nog mee. Herouderen — ook wel reparenting — is het idee dat jij als volwassene alsnog die zorgende ouderrol op je kunt nemen voor je jongere, gekwetste delen."
      },
      {
        kop: "Wat het wél en niet is",
        tekst: "Herouderen is niet je ouders vervangen of doen alsof het verleden niet telt. Het is: opmerken wat je jongere zelf nodig had (gezien worden, getroost worden, grenzen), en dat nu bewust geven. Dat gaat van vriendelijk tegen jezelf praten tot structuur en rust in je dagelijks leven brengen."
      },
      {
        kop: "Hoe je begint",
        tekst: "Let op momenten waarop je je klein, bang of waardeloos voelt — dat is vaak een jonger deel. Reageer dan zoals een warme ouder zou doen: erken het gevoel ('het is logisch dat dit pijn doet'), bied geruststelling, en zorg voor je basis (slaap, eten, veiligheid). Klein en herhaald werkt beter dan groots."
      }
    ],
    doeDit: [
      "Spreek tegen jezelf zoals je tegen een bang kind zou praten.",
      "Geef jezelf structuur en rust — de basis die een kind nodig heeft.",
      "Erken een gevoel eerst, vóór je het wilt oplossen."
    ],
    vermijd: [
      "Jezelf hard toespreken als 'herouderen niet snel genoeg werkt'.",
      "Denken dat je je ouders moet vergeven om voor jezelf te mogen zorgen.",
      "Het alleen willen doen als het te zwaar wordt — steun mag."
    ],
    zegDit: [
      "“Wat je voelt mag er zijn — ik ben er nu voor je.”",
      "“Ik zorg vandaag voor mezelf zoals niemand dat vroeger deed.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over jezelf met zorg én eerlijkheid opnieuw opvoeden na een moeilijke jeugd."
      },
      {
        boek: "wounded-inner-child",
        detail: "Over het helen van het gekwetste innerlijke kind."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over herouderen als kernonderdeel van herstel bij complex trauma."
      }
    ],
    gerelateerd: [
      "innerlijk-kind-wat-is-dat",
      "innerlijke-criticus",
      "zelfcompassie-hoe-begin"
    ]
  },
  {
    id: "onderdrukte-emoties-ziek",
    beeld: {
      src: "img/vragen/onderdrukte-emoties-ziek.jpg"
    },
    vraag: "Kunnen onderdrukte emoties me ziek maken?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "emoties",
      "stress",
      "ziekte",
      "auto-immuun",
      "onderdrukken",
      "lichaam"
    ],
    kort: "Langdurig je emoties wegstoppen en 'altijd sterk of lief' zijn vraagt veel van je lichaam. Chronische stress kan op den duur bijdragen aan klachten en ziekten. Het is geen schuld of bewijs van zwakte — wél een reden om emoties weer ruimte te geven.",
    blokken: [
      {
        tekst: "Gabor Maté beschrijft hoe mensen die hun gevoelens stelselmatig wegstoppen — vaak uit zorg voor anderen — daar lichamelijk een prijs voor kunnen betalen. Niet omdat ze het 'verkeerd' doen, maar omdat het lijf chronische spanning niet eindeloos kan dragen."
      },
      {
        kop: "Hoe stress doorwerkt in je lichaam",
        tekst: "Als je voortdurend boosheid, verdriet of behoeften onderdrukt, blijft je stresssysteem aanstaan. Langdurige stress beïnvloedt onder meer je afweer, hormonen en ontstekingen. Dat kan bijdragen aan vermoeidheid, pijn en bij sommige mensen aan auto-immuun- of andere klachten. Emoties veroorzaken niet 'zomaar' ziekte, maar wegstoppen heeft wél effect."
      },
      {
        kop: "Wat helpt",
        tekst: "De uitweg is niet 'positiever denken', maar eerlijker voelen. Leren je grenzen aan te geven, boosheid en verdriet ruimte te geven en hulp te vragen, haalt druk van je systeem. Lichaam en emoties horen bij elkaar — naar beide luisteren is een vorm van zorg, geen egoïsme."
      }
    ],
    doeDit: [
      "Geef boosheid en verdriet ruimte in plaats van ze weg te lachen.",
      "Oefen met nee zeggen en grenzen — dat ontlast je lichaam.",
      "Neem aanhoudende lichamelijke klachten serieus en bespreek ze medisch."
    ],
    vermijd: [
      "Jezelf de schuld geven van ziekte ('het komt door mijn emoties').",
      "Altijd de sterke of aardige zijn ten koste van jezelf.",
      "Lichamelijke klachten enkel psychisch verklaren zonder medische check."
    ],
    zegDit: [
      "“Mijn gevoelens mogen er zijn — wegstoppen kost me te veel.”",
      "“Voor mezelf zorgen is geen egoïsme.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over de prijs van verborgen stress en onderdrukte emoties voor het lichaam."
      },
      {
        boek: "disease-to-please",
        detail: "Over hoe altijd 'lief' en pleasend zijn je gezondheid kan ondermijnen."
      },
      {
        boek: "myth-of-normal",
        detail: "Over de band tussen emotioneel wegstoppen, cultuur en ziekte."
      }
    ],
    gerelateerd: [
      "trauma-lichamelijke-klachten",
      "kan-ik-geen-nee-zeggen",
      "people-pleasing-herkennen"
    ]
  },
  {
    id: "relatie-herstellen-na-breuk",
    beeld: {
      src: "img/vragen/relatie-herstellen-na-breuk.jpg"
    },
    vraag: "Hoe herstel ik een relatie na een ruzie of breuk (rupture & repair)?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "relaties",
      "herstel",
      "conflict",
      "hechting",
      "verbinding",
      "vertrouwen"
    ],
    kort: "Geen enkele relatie verloopt zonder breuken. Wat een band veilig maakt, is niet het uitblijven van ruzie, maar het hérstel erna: terugkomen, erkennen wat er misging en de verbinding opnieuw maken. Dat 'rupture & repair' is een vaardigheid die je kunt leren.",
    blokken: [
      {
        tekst: "Veel mensen met trauma denken dat een goede relatie betekent: nooit botsen. Toch is dat onmogelijk. In elke band ontstaan breukjes — een misverstand, een snauw, je niet gehoord voelen. Sue Johnson laat zien dat veilige relaties niet de breuk vermijden, maar het herstel goed doen."
      },
      {
        kop: "Waarom herstel zo belangrijk is",
        tekst: "Als een breuk blijft hangen, stapelt afstand zich op en groeit wantrouwen. Word je na een conflict weer gezien en toegelaten, dan leert je zenuwstelsel: 'conflict is niet het einde, we komen er samen uit.' Juist dat herstel bouwt vertrouwen — vaak méér dan wanneer er nooit iets misgaat."
      },
      {
        kop: "Hoe je herstelt",
        tekst: "Wacht tot je allebei weer wat rustiger bent. Benoem je eigen aandeel zonder de ander aan te vallen ('ik reageerde fel, dat spijt me'). Luister naar wat de ander voelde, zonder meteen te verdedigen. En zoek weer toenadering — een gebaar, een blik, een woord. Bij trauma kan dit eng zijn; klein beginnen mag."
      }
    ],
    doeDit: [
      "Kom op een conflict terug als je allebei gekalmeerd bent.",
      "Benoem je eigen aandeel vóór je naar de ander wijst.",
      "Luister eerst naar het gevoel van de ander, los daarna pas op."
    ],
    vermijd: [
      "Doen alsof er niets gebeurde en de breuk laten liggen.",
      "Herstel forceren terwijl een van beiden nog overspoeld is.",
      "Winnen belangrijker maken dan de verbinding terugvinden."
    ],
    zegDit: [
      "“Ik wil dit goedmaken — onze band is me meer waard dan gelijk hebben.”",
      "“Het spijt me; vertel me hoe het voor jou was.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over breuken herstellen en veilige verbinding opnieuw opbouwen."
      },
      {
        boek: "attached",
        detail: "Over hoe hechtingsstijlen conflict en herstel in relaties kleuren."
      },
      {
        boek: "anchored",
        detail: "Over co-regulatie: samen terugkeren naar rust en veiligheid."
      }
    ],
    gerelateerd: [
      "grenzen-liefdesrelatie",
      "veilige-hechting-opbouwen",
      "vertrouwen-opnieuw-leren"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 13
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_13 = [
  {
    id: "grenzen-met-ouders-zetten",
    beeld: {
      src: "img/vragen/grenzen-met-ouders-zetten.jpg"
    },
    vraag: "Hoe zet ik grenzen met mijn ouders?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "grenzen",
      "ouders",
      "familie",
      "contact",
      "zelfbescherming",
      "volwassen"
    ],
    kort: "Grenzen met ouders stellen betekent niet dat je slecht bent — het betekent dat je volwassen behoeften beschermt. Begin klein, wees duidelijk, en accepteer dat schuldgevoel vaak oude loyaliteit is, geen bewijs van falen.",
    blokken: [
      {
        tekst: "Je bent volwassen, maar bij je ouders voel je je soms weer twaalf: klein, schuldig, verantwoordelijk voor hun gevoelens. Grenzen stellen voelt dan als verraad. Toch is het vaak juist de stap die je helpt uit oude rollen te stappen — niet om te straffen, maar om jezelf te beschermen."
      },
      {
        kop: "Wat een grens wél en niet is",
        tekst: "Een grens is geen straf of ultimatum om iemand te 'leren'. Het is informatie: dit kan ik wel, dit kan ik niet; zo wil ik behandeld worden; dit gesprek stop ik als het escaleert. Je hoeft je grenzen niet te rechtvaardigen met een hele geschiedenis. 'Dat past nu niet voor mij' is genoeg."
      },
      {
        kop: "Praktisch beginnen",
        tekst: "Start met één concreet punt: korter bellen, geen kritiek op je partner tolereren, geen geld lenen, of een onderwerp taboe maken. Bereid één zin voor en herhaal die rustig. Verwacht weerstand — dat hoort bij verandering. Zoek steun bij een therapeut of vertrouwde vriend; je hoeft dit niet alleen te doen tegen oude familiedynamiek in."
      }
    ],
    doeDit: [
      "Kies één concrete grens en formuleer die kort en duidelijk.",
      "Oefen je zin van tevoren; herhalen is oké, je hoeft niet te debatteren.",
      "Zoek steun bij iemand die familiedynamiek begrijpt."
    ],
    vermijd: [
      "Grenzen uitleggen tot je uitgeput raakt — je hoeft niet overtuigd te worden.",
      "Terugvallen in oude rollen uit schuld en dan jezelf verwijten.",
      "Denken dat respectvolle grenzen altijd vreedzaam ontvangen worden."
    ],
    zegDit: [
      "“Ik ga hier niet meer over praten.”",
      "“Als dit zo doorgaat, stop ik het gesprek.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over gezonde confrontatie en grenzen richting ouders zonder jezelf te verliezen."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over loskomen van de kindrol bij een moeilijke ouder."
      },
      {
        boek: "not-price-of-admission",
        detail: "Over relaties waarin je veiligheid geen toegangsprijs hoeft te zijn."
      }
    ],
    gerelateerd: [
      "boos-en-liefde-ouders",
      "vergeven-om-te-helen",
      "loyaliteit-vs-zelfbescherming"
    ]
  },
  {
    id: "no-contact-met-familie",
    beeld: {
      src: "img/vragen/no-contact-met-familie.jpg"
    },
    vraag: "Wanneer is no contact met familie gerechtvaardigd?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "no contact",
      "familie",
      "contact verbreken",
      "zelfbescherming",
      "grenzen",
      "NC"
    ],
    kort: "No contact is een extreme maar soms nodige grens wanneer contact herhaaldelijk schadelijk is en andere grenzen niet gerespecteerd worden. Het is geen drama — het is bescherming.",
    blokken: [
      {
        tekst: "No contact betekent bewust stoppen met communicatie en contact met een familielid — soms tijdelijk, soms langdurig. Het woord klinkt hard, en de omgeving reageert er vaak veroordelend op. Toch kiezen veel mensen hiervoor niet uit wraak, maar omdat elk contact opnieuw wonden opent."
      },
      {
        kop: "Wanneer het een optie is",
        tekst: "No contact is zelden de eerste stap. Het wordt overweegbaar wanneer er herhaald misbruik, manipulatie, dreiging of vernietiging van je welzijn is; wanneer kleinere grenzen keer op keer worden genegeerd; wanneer contact je mentale of fysieke gezondheid ernstig ondermijnt; of wanneer herstel onmogelijk blijft zolang de andere persoon geen verantwoordelijkheid neemt. Het gaat om veiligheid, niet om 'winnen'."
      },
      {
        kop: "Schuld en steun",
        tekst: "Schuldgevoel hoort vaak bij no contact — dat is loyaliteit uit het verleden, geen bewijs dat je fout zit. Je mag rouwen om het contact dat je nooit kreeg, én bescherming kiezen. Praat met een therapeut of steungroep; alleen beslissen maakt de keuze zwaarder dan nodig."
      }
    ],
    doeDit: [
      "Evalueer eerst of kleinere grenzen of low contact mogelijk zijn.",
      "Leg je beslissing vast bij iemand die je vertrouwt — niet om goedkeuring te krijgen, wel voor steun.",
      "Plan praktische zaken: feestdagen, gemengde contacten, informatie via derden."
    ],
    vermijd: [
      "No contact als straf of om iemand te 'leren' — het is zelfbescherming.",
      "Jezelf een permanent schuldgevoel opleggen als bewijs van liefde.",
      "Terugkeren in contact zonder dat er iets veranderd is, uit schuld alleen."
    ],
    zegDit: [
      "“Ik bescherm mezelf. Dat is geen haat.”",
      "“Ik hoef mijn keuze niet te verdedigen tegen iedereen.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over grenzen stellen richting ouders, ook wanneer contact stopt."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over schuld loslaten wanneer je afstand neemt van schadelijk gedrag."
      },
      {
        boek: "break-the-cycle",
        detail: "Over bewust stoppen met patronen die generaties doorgeven."
      }
    ],
    gerelateerd: [
      "grenzen-met-ouders-zetten",
      "low-contact-familie-uitleg",
      "loyaliteit-vs-zelfbescherming"
    ]
  },
  {
    id: "low-contact-familie-uitleg",
    beeld: {
      src: "img/vragen/low-contact-familie-uitleg.jpg"
    },
    vraag: "Wat is low contact met familie — en hoe werkt dat?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "low contact",
      "familie",
      "contact verminderen",
      "grenzen",
      "LC",
      "afstand"
    ],
    kort: "Low contact betekent bewust minder en beperkter contact — niet alles of niets, maar een middenweg die jouw energie en veiligheid beschermt.",
    blokken: [
      {
        tekst: "Niet iedereen kan of wil volledig breken met familie. Low contact is een middenweg: je houdt enige verbinding, maar op jouw voorwaarden — minder frequent, korter, oppervlakkiger, of alleen in groepsverband. Het is geen halfslachtige no contact; het is een bewuste strategie."
      },
      {
        kop: "Hoe het eruit kan zien",
        tekst: "Voorbeelden: alleen mailen in plaats van bellen; maximaal één keer per maand contact; geen een-op-een met een moeilijk familielid maar wel bij gezamenlijke feesten; geen persoonlijke onderwerpen delen; altijd een exit-strategie. Low contact vraagt duidelijkheid bij jezelf: waarom doe ik dit, en wat zijn mijn grenzen als iemand ze test?"
      },
      {
        kop: "Flexibel en geldig",
        tekst: "Low contact mag veranderen — soms tijdelijk verminderen na een conflict, soms permanent. Het doel is niet 'de perfecte balans voor altijd', maar bescherming zonder volledige isolatie als dat voor jou past. Luister naar je lichaam: ben je uitgeput na elk contact, of draagbaar?"
      }
    ],
    doeDit: [
      "Bepaal concreet wat je wél en niet meer doet — frequentie, diepte, kanalen.",
      "Plan hoe je reageert als iemand meer contact wil dan jij aankunt.",
      "Evalueer regelmatig: past deze balans nog bij mijn welzijn?"
    ],
    vermijd: [
      "Low contact zonder duidelijke grenzen — dan blijf je in oude patronen.",
      "Jezelf verwijten dat het 'niet genoeg' is als no contact te zwaar voelt.",
      "Te veel uitleggen waarom je minder beschikbaar bent."
    ],
    zegDit: [
      "“Ik heb nu minder ruimte voor contact — dat is geen afwijzing van jou als persoon.”",
      "“Ik reageer wanneer het me lukt.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over graduele grenzen en contact opnieuw vormgeven."
      },
      {
        boek: "disease-to-please",
        detail: "Over nee zeggen zonder alles te verliezen wat je deert."
      },
      {
        boek: "not-price-of-admission",
        detail: "Over relaties waarin nabijheid niet ten koste gaat van veiligheid."
      }
    ],
    gerelateerd: [
      "no-contact-met-familie",
      "grenzen-met-ouders-zetten",
      "familiefeesten-overleven"
    ]
  },
  {
    id: "grenzen-op-werk",
    beeld: {
      src: "img/vragen/grenzen-op-werk.jpg"
    },
    vraag: "Hoe stel ik grenzen op het werk?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "werk",
      "grenzen",
      "burnout",
      "collega's",
      "baas",
      "overbelasting"
    ],
    kort: "Grenzen op werk beschermen je energie en voorkomen dat oude overlevingspatronen — pleasen, overcompenseren, nooit nee zeggen — je opnieuw uitputten.",
    blokken: [
      {
        tekst: "Op werk ben je misschien de betrouwbare die alles aanneemt, nooit nee zegt, en 's avonds instort. Of juist: elke kritiek voelt als gevaar, elke autoriteit triggert oude angst. Grenzen op werk zijn niet alleen professioneel — voor mensen met trauma zijn ze vaak ook lichamelijk nodig."
      },
      {
        kop: "Herken oude patronen",
        tekst: "Vraag jezelf: zeg ik ja uit angst voor afwijzing? Werk ik harder om 'goed genoeg' te zijn? Vermijd ik conflict ten koste van mijn gezondheid? Trauma kan werk zowel trigger als vlucht maken. Grenzen beginnen bij herkennen waar je lichaam 'nee' zegt terwijl je mond 'ja' fluistert."
      },
      {
        kop: "Concreet handelen",
        tekst: "Begin met kleine grenzen: geen mails na een bepaald uur, pauzes daadwerkelijk nemen, één extra taak weigeren, hulp vragen zonder schaamte. Formuleer zakelijk en kort: 'Met mijn huidige planning kan ik dat niet tegen die deadline.' Je hoeft je hele verhaal niet te delen op kantoor."
      }
    ],
    doeDit: [
      "Noteer waar je structureel over je grens gaat — taken, uren, emotionele last.",
      "Oefen één professionele nee per week in een laag-risico situatie.",
      "Zoek hulp als werk chronisch je zenuwstelsel activeert."
    ],
    vermijd: [
      "Overcompenseren uit angst om ontslagen te worden.",
      "Grenzen stellen in woede — plan en formuleer rustig.",
      "Werk als enige plek zien waar je controle hebt, ten koste van alles."
    ],
    zegDit: [
      "“Ik kan dat nu niet aannemen zonder iets anders te verschuiven.”",
      "“Ik ben bereikbaar tot [tijd]; daarna reageer ik de volgende werkdag.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over fawn en overbelasting in professionele context."
      },
      {
        boek: "when-body-says-no",
        detail: "Over hoe chronische overbelasting het lichaam uitput."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over grenzen bewaken wanneer je veel draagt voor anderen."
      }
    ],
    gerelateerd: [
      "trauma-werk-burnout",
      "people-pleasing-herkennen",
      "kan-ik-geen-nee-zeggen"
    ]
  },
  {
    id: "mensen-die-energie-zuigen",
    beeld: {
      src: "img/vragen/mensen-die-energie-zuigen.jpg"
    },
    vraag: "Hoe ga ik om met mensen die mijn energie zuigen?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "energie",
      "toxisch",
      "relaties",
      "uitputting",
      "grenzen",
      "bescherming"
    ],
    kort: "Sommige mensen putten je uit — niet altijd met slechte bedoelingen, maar wel met gevolgen. Bescherming betekent grenzen, afstand en keuzes over wie dichtbij mag.",
    blokken: [
      {
        tekst: "Na contact met bepaalde mensen voel je je leeg, angstig, schuldig of uitgeput — terwijl je vooraf misschien hoopte op verbinding. 'Energievampiers' is een populaire term; begrijpelijker is: sommige dynamieken activeren je zenuwstelsel of oude rollen, en dat kost enorm veel kracht."
      },
      {
        kop: "Herken het patroon",
        tekst: "Signalen: je voelt je kleiner na gesprekken; je neemt hun emoties over; je geeft meer dan je krijgt; je vermijdt ze maar voelt je schuldig; je bent prikkelbaar of verdoofd na contact. Bij trauma is dit extra heftig: pleasers trekken soms onbewust mensen aan die veel vragen en weinig geven."
      },
      {
        kop: "Beschermen zonder jezelf te verliezen",
        tekst: "Je hoeft niemand te labelen als 'slecht' om afstand te nemen. Korter contact, minder diepte, geen een-op-een, of helemaal stoppen — alles mag. Focus op wat jij nodig hebt: rust, voorspelbaarheid, wederkerigheid. Investeer in relaties waar je ademhaalt."
      }
    ],
    doeDit: [
      "Let op hoe je lichaam reageert ná contact — dat is betrouwbare data.",
      "Beperk tijd, diepte en frequentie met uitputtende mensen.",
      "Investeer bewust in relaties die je energie geven."
    ],
    vermijd: [
      "Blijven proberen iemand te 'redden' ten koste van jezelf.",
      "Schuld gebruiken als reden om grensloos beschikbaar te blijven.",
      "Denken dat empathie betekent dat je alles moet dragen."
    ],
    zegDit: [
      "“Ik heb nu geen ruimte voor dit gesprek.”",
      "“Ik kan hier nu niet verder in meegaan.”"
    ],
    bronnen: [
      {
        boek: "disease-to-please",
        detail: "Over pleasen en uitputting in eenzijdige relaties."
      },
      {
        boek: "not-price-of-admission",
        detail: "Over relaties waarin je niet alles hoeft te geven om erbij te horen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over fawn en moeite met nee zeggen in relationele context."
      }
    ],
    gerelateerd: [
      "people-pleasing-herkennen",
      "low-contact-familie-uitleg",
      "grenzen-met-vrienden"
    ]
  },
  {
    id: "assertiviteit-leren",
    beeld: {
      src: "img/vragen/assertiviteit-leren.jpg"
    },
    vraag: "Hoe leer ik assertief te zijn?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "assertiviteit",
      "grenzen",
      "communicatie",
      "zelfvertrouwen",
      "nee zeggen",
      "behoeften"
    ],
    kort: "Assertiviteit is niet agressie — het is duidelijk zijn over wat jij nodig hebt en waar jij staat, zonder jezelf of de ander te vernietigen. Het is een vaardigheid die je geleidelijk opbouwt.",
    blokken: [
      {
        tekst: "Assertief zijn betekent: je behoeften en grenzen uiten op een manier die respectvol is voor jezelf én de ander. Het is het midden tussen onderdanig wegcijferen en agressief overschrijden. Veel mensen met trauma leerden vroeg dat hun stem gevaarlijk was — assertiviteit voelt dan als een bedreiging."
      },
      {
        kop: "Wat assertiviteit wél is",
        tekst: "Assertief: 'Ik kan daar niet bij zijn.' 'Ik voel me ongemakkelijk bij die opmerking.' 'Ik heb tijd nodig om na te denken.' Niet assertief: zwijgen en later wrok koesteren. Agressief: beschuldigen, vernederen, dreigen. Het doel is helderheid, geen overwinning."
      },
      {
        kop: "Stap voor stap oefenen",
        tekst: "Begin in veilige situaties: een verkeerd besteld kopje koffie teruggeven, een vriend vragen iets te verplaatsen, een collega vragen om verduidelijking. Let op je lichaam: trillen of schuld na een kleine assertieve actie is normaal — je zenuwstelsel leert dat je stem mag. Met herhaling wordt het rustiger."
      }
    ],
    doeDit: [
      "Oefen kleine assertieve zinnen in lage-stakes situaties.",
      "Gebruik 'ik'-taal: wat voel, wat heb ik nodig, wat kan ik wel.",
      "Vier kleine successen — je systeem heeft positieve ervaringen nodig."
    ],
    vermijd: [
      "Assertiviteit verwarren met hard zijn of ruzie zoeken.",
      "Alles in één keer willen veranderen — dat overspoelt.",
      "Jezelf afvallen als het eerste 'nee' schuldgevoel oplevert."
    ],
    zegDit: [
      "“Ik heb hier een andere behoefte.”",
      "“Dat past nu niet voor mij.”"
    ],
    bronnen: [
      {
        boek: "healing-emotional-self",
        detail: "Over zelfrespect en emotionele assertiviteit opbouwen."
      },
      {
        boek: "disease-to-please",
        detail: "Over pleasen doorbreken en duidelijker worden."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over fawn vervangen door gezonde zelfexpressie."
      }
    ],
    gerelateerd: [
      "nee-zeggen-zonder-schuld",
      "kan-ik-geen-nee-zeggen",
      "people-pleasing-herkennen"
    ]
  },
  {
    id: "nee-zeggen-zonder-schuld",
    beeld: {
      src: "img/vragen/nee-zeggen-zonder-schuld.jpg"
    },
    vraag: "Hoe zeg ik nee zonder schuldgevoel?",
    thema: "grenzen",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "nee zeggen",
      "schuldgevoel",
      "grenzen",
      "pleasen",
      "fawn",
      "zelfbescherming"
    ],
    kort: "Schuld na 'nee' is vaak een oude alarmbel — geen bewijs dat je iets verkeerd doet. Nee zeggen is een vaardigheid: kort, duidelijk, zonder overmatig uitleggen.",
    blokken: [
      {
        tekst: "Je zegt nee — en meteen voelt de schuld, de angst voor afwijzing, de stem die zegt dat je egoïstisch bent. Voor mensen die opgroeiden met emotionele verwaarlozing, misbruik of pleasen als overlevingsstrategie, is nee zeggen niet 'gewoon moeilijk'. Het voelt als gevaar."
      },
      {
        kop: "Schuld is geen kompas",
        tekst: "Schuldgevoel na een grens betekent vaak: vroeger was nee zeggen onveilig. Je lichaam herinnert zich dat. Het betekent niet automatisch dat je de ander pijn doet of fout zit. Leer schuld te herkennen als signaal van oude conditionering — en blijf toch bij je nee."
      },
      {
        kop: "Hoe nee klinkt",
        tekst: "Kort werkt beter dan lang verdedigen: 'Nee, dat lukt me niet.' 'Ik kan daar niet bij helpen.' 'Dat past niet in mijn planning.' Je hoeft geen reden te geven die de ander accepteert. Oefen in kleine situaties; verdraag het ongemak dat daarna komt — het neemt af."
      }
    ],
    doeDit: [
      "Formuleer één korte nee-zin en oefen die hardop.",
      "Verwacht schuldgevoel en benoem het: 'dit is oud, niet waar'.",
      "Begin met lage-risico situaties voordat je grote grenzen stelt."
    ],
    vermijd: [
      "Nee zeggen en het meteen terugnemen uit schuld.",
      "Eindeloos uitleggen tot de ander tevreden is.",
      "Jezelf 'slecht' noemen omdat je grenzen hebt."
    ],
    zegDit: [
      "“Nee, dat kan ik niet.”",
      "“Ik hoef geen reden te geven die jij accepteert.”"
    ],
    bronnen: [
      {
        boek: "disease-to-please",
        detail: "Over schuldgevoel na nee zeggen en hoe je dat doorbreekt."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de fawn-respons en het herstellen van nee als veilig signaal."
      },
      {
        boek: "not-price-of-admission",
        detail: "Over relaties waarin nee geen afwijzing van de band hoeft te betekenen."
      }
    ],
    gerelateerd: [
      "kan-ik-geen-nee-zeggen",
      "people-pleasing-herkennen",
      "assertiviteit-leren"
    ]
  },
  {
    id: "grenzen-met-vrienden",
    beeld: {
      src: "img/vragen/grenzen-met-vrienden.jpg"
    },
    vraag: "Hoe stel ik grenzen met vrienden?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "vrienden",
      "grenzen",
      "relaties",
      "vriendschap",
      "behoeften",
      "communicatie"
    ],
    kort: "Echte vriendschap kan grenzen aan — vrienden die blijven wanneer je nee zegt, zijn vaak de veiligste. Grenzen met vrienden zijn geen verraad; ze maken de band duurzamer.",
    blokken: [
      {
        tekst: "Met vrienden voelt grenzen stellen soms extra moeilijk: je wilt niet egoïstisch lijken, je bent bang de vriendschap te verliezen, of je bent gewend de 'steunende' rol te spelen. Toch kunnen vriendschappen zonder grenzen uitputtend worden — vooral als je altijd luistert maar zelden gehoord wordt."
      },
      {
        kop: "Wat je mag vragen",
        tekst: "Je mag aangeven: ik kan vanavond niet praten; dit onderwerp wil ik niet; ik heb ruimte nodig; ik kan niet meer lenen; ik wil niet elke week beschikbaar zijn. Vrienden die echt veilig zijn, kunnen teleurstelling voelen en toch blijven. Wie je grenzen bestraffen, geven je informatie over de kwaliteit van de band."
      },
      {
        kop: "Wederkerigheid en eerlijkheid",
        tekst: "Gezonde vriendschap is niet altijd fifty-fifty in elk moment, maar wel over tijd wederkerig. Als jij structureel geeft en leegloopt, is dat geen vriendschap-probleem alleen — het is een grens-probleem. Eerlijkheid over je capaciteit is respect, geen afwijzing."
      }
    ],
    doeDit: [
      "Communiceer vroeg als je capaciteit laag is — niet pas bij instorting.",
      "Let op eenzijdige patronen: wie belt, wie steunt, wie vraagt.",
      "Kies vrienden met wie je ook kwetsbaar mag zijn over je grenzen."
    ],
    vermijd: [
      "Altijd beschikbaar zijn uit angst om verlaten te worden.",
      "Grenzen stellen via ghosting in plaats van duidelijke woorden.",
      "Vriendschappen volhouden die structureel uitputten."
    ],
    zegDit: [
      "“Ik kan vanavond niet — laten we een andere keer plannen.”",
      "“Ik heb nu zelf steun nodig in plaats van te geven.”"
    ],
    bronnen: [
      {
        boek: "attached",
        detail: "Over hechting en veiligheid in close relaties, ook vriendschap."
      },
      {
        boek: "disease-to-please",
        detail: "Over pleasen en eenzijdige relationele patronen."
      },
      {
        boek: "not-price-of-admission",
        detail: "Over verbinding zonder opoffering van je welzijn."
      }
    ],
    gerelateerd: [
      "mensen-die-energie-zuigen",
      "nee-zeggen-zonder-schuld",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "familiefeesten-overleven",
    beeld: {
      src: "img/vragen/familiefeesten-overleven.jpg"
    },
    vraag: "Hoe overleef ik familiefeesten?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "feestdagen",
      "familie",
      "kerst",
      "bijeenkomst",
      "overleven",
      "grenzen"
    ],
    kort: "Familiefeesten kunnen oude rollen reactiveren. Overleven betekent plannen: tijdslimieten, exit-strategie, steun en realistische verwachtingen — niet perfect gedrag van iedereen.",
    blokken: [
      {
        tekst: "Kerst, verjaardagen, begrafenissen — familie bij elkaar klinkt warm, maar voor wie moeilijke familiedynamiek kent, voelt het als een mijnenveld. Oude kritiek, drank, spanning tussen ouders, of het gevoel weer twaef te zijn: het komt allemaal terug."
      },
      {
        kop: "Plan vóór je gaat",
        tekst: "Bepaal van tevoren: hoelang blijf ik; met wie praat ik wél; welke onderwerpen vermijd ik; wie is mijn 'buddy' buiten de familie; hoe kom ik weg als het te veel wordt. Neem een auto zelf, zet een alarm voor je vertrek, plan een rustmoment daarna. Je hoeft niet het hele feest te blijven om lief te zijn."
      },
      {
        kop: "Tijdens en erna",
        tekst: "Grounding helpt: voel je voeten, adem uit, stap even naar buiten. Je hoeft niet elk conflict te repareren of elke opmerking te beantwoorden. Daarna: geen zelfkritiek als het zwaar was. Rust, een veilige vriend, of een therapeut — feesten putten mensen met trauma extra uit."
      }
    ],
    doeDit: [
      "Maak een concreet plan: tijd, exit, steunpersoon, taboes.",
      "Bereid korte zinnen voor bij triggerende opmerkingen.",
      "Plan herstel na het feest — rust is geen luxe."
    ],
    vermijd: [
      "Alcohol gebruiken om het draaglijker te maken als dat je regulatie verstoort.",
      "Denken dat dit jaar alles anders wordt zonder grenzen.",
      "Jezelf verwijten als je midden in een flashback belandt."
    ],
    zegDit: [
      "“Ik moet straks vertrekken — fijn jullie even gezien te hebben.”",
      "“Daar ga ik niet op in.”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over omgaan met moeilijke familiecontacten en grenzen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over triggers en emotionele flashbacks in familiecontext."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over praktische plannen voor moeilijke situaties."
      }
    ],
    gerelateerd: [
      "low-contact-familie-uitleg",
      "grenzen-met-ouders-zetten",
      "loyaliteit-vs-zelfbescherming"
    ]
  },
  {
    id: "loyaliteit-vs-zelfbescherming",
    beeld: {
      src: "img/vragen/loyaliteit-vs-zelfbescherming.jpg"
    },
    vraag: "Loyaliteit versus zelfbescherming — hoe kies ik?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "loyaliteit",
      "familie",
      "zelfbescherming",
      "schuld",
      "grenzen",
      "keuze"
    ],
    kort: "Loyaliteit aan familie voelt heilig, maar mag nooit ten koste gaan van je veiligheid. Zelfbescherming is geen verraad — het is wat je in staat stelt te blijven leven en eventueel gezond te blijven verbinden.",
    blokken: [
      {
        tekst: "Je voelt je verscheurd: familie is toch familie, bloed is dikker dan water, je mag je ouders toch niet in de steek laten. Tegelijk lijdt je onder contact, of onder het zwijgen over wat er gebeurde. Loyaliteit versus zelfbescherming is een van de zwaarste dilemma's na moeilijke jeugd."
      },
      {
        kop: "Wat loyaliteit soms bedekt",
        tekst: "In disfunctionele families betekende 'loyaliteit' vaak: zwijgen, aanpassen, de ander beschermen, jezelf wegcijferen. Dat was overleven, geen vrije keuze. Volwassen loyaliteit kan ook betekenen: eerlijk zijn, grenzen stellen, of afstand nemen — omdat je de cyclus niet voortzet."
      },
      {
        kop: "Zelfbescherming is geen egoïsme",
        tekst: "Jezelf beschermen maakt je niet disloyaal; het maakt je levensvatbaar. Soms is de meest verantwoordelijke keuze juist afstand — voor jezelf, en soms ook om niet hetzelfde patroon door te geven aan je eigen kinderen. Je mag rouwen én beschermen tegelijk."
      }
    ],
    doeDit: [
      "Onderscheid oude loyaliteitsregels van volwassen keuzes.",
      "Vraag: wat kost contact mij — en wat levert het op?",
      "Zoek steun bij iemand die het dilemma kent zonder partij te kiezen."
    ],
    vermijd: [
      "Zelfbeschaming als bewijs van liefde voor familie.",
      "Contact volhouden puur uit schuld terwijl je instort.",
      "Denken dat je maar één 'goede' keuze hebt."
    ],
    zegDit: [
      "“Loyaliteit hoeft niet pijn te doen.”",
      "“Ik bescherm mezelf — dat is geen verraad van wie ik ben.”"
    ],
    bronnen: [
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over de prijs van loyaliteit aan een moeilijke ouder."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over schuld loslaten wanneer je voor jezelf kiest."
      },
      {
        boek: "break-the-cycle",
        detail: "Over bewust andere keuzes maken dan generaties vóór jou."
      }
    ],
    gerelateerd: [
      "no-contact-met-familie",
      "vergeven-om-te-helen",
      "boos-en-liefde-ouders"
    ]
  },
  {
    id: "siblings-contact-houden",
    beeld: {
      src: "img/vragen/siblings-contact-houden.jpg"
    },
    vraag: "Moet ik contact houden met mijn broers of zussen?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "broer",
      "zus",
      "siblings",
      "familie",
      "contact",
      "keuze"
    ],
    kort: "Contact met siblings is geen verplichting. Sommige broer-zus-banden zijn steun; andere herhalen oude dynamiek. Jij mag kiezen wat veilig en draagbaar is — los van druk van familie of omgeving.",
    blokken: [
      {
        tekst: "Broers en zussen deelden soms hetzelfde huis, maar niet dezelfde ervaring. De een was het gouden kind, de ander het zondebok; de een herinnert zich niets, de ander alles. Contact houden voelt dan als verplichting — 'het is toch je familie' — terwijl elk gesprek oude pijn opent."
      },
      {
        kop: "Verschillende rollen, verschillende behoeften",
        tekst: "Sommige siblings zijn mede-slachtoffers en kunnen steun bieden. Anderen bleven loyaal aan de ouder, ontkennen misbruik, of herhalen het patroon. Je hoeft geen contact te houden uit plicht als het je beschadigt. Je mag ook gelaagd contact kiezen: alleen mail, alleen in groep, alleen over praktische zaken."
      },
      {
        kop: "Je keuze is geldig",
        tekst: "Er is geen universeel antwoord. Vraag: voel ik me veiliger of kwetsbaarder na contact? Word ik gehoord of genegeerd? Draag ik schuld die niet van mij is? Antwoorden op die vragen tellen meer dan familieverwachtingen. Rouw om een broer-zus-band die je nooit kreeg, mag naast je keuze bestaan."
      }
    ],
    doeDit: [
      "Evalueer contact op veiligheid en wederkerigheid, niet op schuld.",
      "Overweeg low contact als volledige breuk te zwaar voelt.",
      "Zoek steun buiten de sibling-dynamiek als je twijfelt."
    ],
    vermijd: [
      "Contact volhouden om de ouder te pleasen.",
      "Denken dat siblings automatisch veilig zijn omdat ze hetzelfde huis kenden.",
      "Jezelf verwijten als de band niet 'normaal' voelt."
    ],
    zegDit: [
      "“Ik kies contact op een manier die voor mij werkt.”",
      "“We hebben verschillende herinneringen — dat hoeft mijn grens niet te wijzigen.”"
    ],
    bronnen: [
      {
        boek: "drama-gifted-child",
        detail: "Over verschillende rollen van kinderen in disfunctionele gezinnen."
      },
      {
        boek: "carefrontation",
        detail: "Over familierelaties hervormen zonder jezelf te verliezen."
      },
      {
        boek: "trapped-in-the-mirror",
        detail: "Over identiteit en rollen binnen het gezin."
      }
    ],
    gerelateerd: [
      "familiegeheimen-breken",
      "loyaliteit-vs-zelfbescherming",
      "no-contact-met-familie"
    ]
  },
  {
    id: "grenzen-met-ex-partner",
    beeld: {
      src: "img/vragen/grenzen-met-ex-partner.jpg"
    },
    vraag: "Hoe stel ik grenzen met mijn ex-partner?",
    thema: "naasten",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "ex",
      "relatie",
      "grenzen",
      "scheiding",
      "contact",
      "co-ouderschap"
    ],
    kort: "Grenzen met een ex zijn nodig voor herstel — zeker na een traumatische relatie. Duidelijke afspraken over contact, communicatie en onderwerpen beschermen je zenuwstelsel.",
    blokken: [
      {
        tekst: "Na een relatie met misbruik, manipulatie of intense hechting kan contact met een ex je terug in oude patronen trekken. Zelfs 'vriendelijk' contact kan triggers activeren. Grenzen zijn hier geen bitterheid — ze zijn medisch en relationeel nodig voor herstel."
      },
      {
        kop: "Wanneer contact beperken",
        tekst: "Overweeg strikte grenzen wanneer elk contact je uit balans brengt; wanneer de ex grenzen blijft overschrijden; wanneer er geen gedeelde kinderen zijn en contact geen praktische reden heeft; of wanneer je merkt dat je weer gaat pleasen of uitleggen. No contact kan tijdelijk of voor altijd — beide zijn oké."
      },
      {
        kop: "Met gedeelde kinderen",
        tekst: "Co-ouderschap vraagt soms contact, maar dat hoeft niet onbegrensd. Gebruik schriftelijke communicatie, vaste onderwerpen, apps voor co-ouderschap, en eventueel bemiddeling. Je kinderen hebben een stabiele ouder nodig — dat begint bij jouw grenzen, niet bij eindeloze beschikbaarheid voor de ex."
      }
    ],
    doeDit: [
      "Beperk kanalen: mail of app in plaats van bellen als dat veiliger is.",
      "Spreek alleen over noodzakelijke onderwerpen; geen heropening van de relatie.",
      "Zoek juridische of therapeutische steun bij complex co-ouderschap."
    ],
    vermijd: [
      "Contact houden uit schuld of hoop op verandering zonder bewijs.",
      "Grenzen stellen en ze meteen opgeven bij manipulatie.",
      "Kinderen als boodschapper gebruiken tussen jou en je ex."
    ],
    zegDit: [
      "“Ik communiceer alleen schriftelijk over [onderwerp].”",
      "“Dit gesprek ga ik niet voeren.”"
    ],
    bronnen: [
      {
        boek: "not-price-of-admission",
        detail: "Over relaties waarin veiligheid geen onderhandeling is."
      },
      {
        boek: "hate-you-dont-leave",
        detail: "Over intense, grensoverschrijdende relationele dynamiek."
      },
      {
        boek: "journey-abandonment",
        detail: "Over loslaten, hechting en terugvallen in oude banden."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "wat-is-verlatingsangst",
      "nee-zeggen-zonder-schuld"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 14
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_14 = [
  {
    id: "alcoholische-ouder-impact",
    beeld: {
      src: "img/vragen/alcoholische-ouder-impact.jpg"
    },
    vraag: "Wat doet een alcoholische ouder met een kind?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "alcohol",
      "verslaving",
      "ouder",
      "kind",
      "onvoorspelbaar",
      "ACE"
    ],
    kort: "Opgroeien met een alcoholische ouder betekent vaak leven in onvoorspelbaarheid: vandaag veilig, morgen chaos. Kinderen leren hyperalert te zijn, zich aan te passen en zich verantwoordelijk te voelen voor iets wat niet hun schuld was.",
    blokken: [
      {
        tekst: "Een ouder die drinkt verandert: humeur, aanwezigheid, eerlijkheid. Het kind leert vroeg de kamer scannen, stemmen interpreteren, en hopen dat het vandaag 'meevalt'. Die constante waakzaamheid is geen karaktereigenschap — het is een overlevingsantwoord op een onvoorspelbare thuissituatie."
      },
      {
        kop: "Typische sporen",
        tekst: "Veel volwassen kinderen van alcoholische ouders herkennen: moeite met ontspannen; schuld als iemand boos is; perfectionisme; zorgen voor anderen vóór jezelf; moeite met autoriteit; angst voor conflict; of het gevoel nooit echt kind te mogen zijn. Soms minimaliseer je ('het viel wel mee') terwijl je lichaam het anders onthoudt."
      },
      {
        kop: "Het was niet jouw schuld",
        tekst: "Kinderen denken vaak dat ze de ouder kunnen redden, de drank kunnen stoppen, of schuldig zijn aan het drinken. Dat is een kindlogica in een volwassen probleem. Herstel begint bij erkennen wat er was, steun zoeken (Al-Anon, therapie, lotgenoten), en leren dat jij niet verantwoordelijk bent voor andermans verslaving."
      }
    ],
    doeDit: [
      "Erken de impact — ook als er geen fysiek geweld was.",
      "Zoek steungroepen of therapie voor volwassen kinderen van alcoholische ouders.",
      "Let op eigen patronen: pleasen, hyperalertheid, schuld over andermans gevoelens."
    ],
    vermijd: [
      "De jeugd minimaliseren omdat 'het ergens anders erger is'.",
      "Jezelf de schuld geven voor het drinkgedrag van je ouder.",
      "Denken dat je eerst alles moet vergeven om te helen."
    ],
    zegDit: [
      "“Ik was een kind in een volwassen chaos — dat telt.”",
      "“Ik hoef mijn ouder niet te redden om waardevol te zijn.”"
    ],
    bronnen: [
      {
        boek: "drama-gifted-child",
        detail: "Over kinderen in disfunctionele gezinnen en de rollen die ze aannemen."
      },
      {
        boek: "deepest-well",
        detail: "Over vroege stress en de langetermijngevolgen voor gezondheid en welzijn."
      },
      {
        boek: "myth-of-normal",
        detail: "Over verslaving, pijn en wat er in gezinnen onbesproken blijft."
      }
    ],
    gerelateerd: [
      "wat-zijn-aces",
      "trauma-verslaving",
      "opvoeden-met-eigen-trauma"
    ]
  },
  {
    id: "narcistische-vader-impact",
    beeld: {
      src: "img/vragen/narcistische-vader-impact.jpg"
    },
    vraag: "Wat betekent opgroeien met een narcistische vader?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "narcisme",
      "vader",
      "ouder",
      "zelfwaarde",
      "identiteit",
      "familie"
    ],
    kort: "Een narcistische vader kan een kind klein houden, gebruiken voor eigen behoeften, of competitief maken. De sporen — twijfel, schaamte, moeite met eigen waarde — zijn herkenbaar en te helen.",
    blokken: [
      {
        tekst: "Een narcistische vader ziet het kind vaak als verlengstuk van zichzelf: trots als het hem flatteert, afwijzend als het eigen wil heeft. Emoties van het kind tellen minder dan zijn beeld, zijn behoeften, zijn regels. Het kind leert: mijn waarde hangt af van wat ik voor hem beteken."
      },
      {
        kop: "Specifieke dynamiek met vaders",
        tekst: "Vaderlijke narcisme kan zich uiten in competitie ('ik ben slimmer'), vernedering, emotionele afwezigheid gecombineerd met controle, of het kind kiezen als vertrouweling/partner. Dochters en zonen kunnen verschillende rollen krijgen — het gouden kind, de teleurstelling, de helper — maar gemeenschappelijk is: jouw zelf mocht niet volledig bestaan."
      },
      {
        kop: "Loskomen en helen",
        tekst: "Heling betekent leren wie jij bent los van zijn stem in je hoofd. Grenzen, afstand, therapie die narcistische dynamiek herkent, en het temperen van de innerlijke criticus zijn centrale stappen. Je hoeft hem niet te haten om te stoppen met jezelf klein te maken."
      }
    ],
    doeDit: [
      "Erken dat je waarneming geldig is — twijfel is zelf een spoor.",
      "Leer het verschil tussen liefde verdienen en inherent waardevol zijn.",
      "Zoek hulp bij iemand die narcistische ouder-dynamiek kent."
    ],
    vermijd: [
      "Blijven proberen zijn goedkeuring te winnen ten koste van jezelf.",
      "Jezelf de schuld geven voor zijn gedrag of humeur.",
      "Denken dat volwassen zijn betekent dat het 'niet meer telt'."
    ],
    zegDit: [
      "“Ik hoef niet perfect te zijn om liefde waard te zijn.”",
      "“Zijn stem in mijn hoofd is niet de waarheid over mij.”"
    ],
    bronnen: [
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over opgroeien met een narcistische ouder — veel voorbeelden gaan over moeders, maar de dynamiek is herkenbaar."
      },
      {
        boek: "trapped-in-the-mirror",
        detail: "Over identiteit en spiegeling bij een narcistische ouder."
      },
      {
        boek: "break-the-cycle",
        detail: "Over patronen doorbreken die je van een narcistische ouder meekreeg."
      }
    ],
    gerelateerd: [
      "narcistische-ouder-betekenis",
      "innerlijke-criticus",
      "grenzen-met-ouders-zetten"
    ]
  },
  {
    id: "borderline-moeder-als-kind",
    beeld: {
      src: "img/vragen/borderline-moeder-als-kind.jpg"
    },
    vraag: "Hoe is het om op te groeien met een borderline moeder?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "borderline",
      "moeder",
      "BPD",
      "onvoorspelbaar",
      "hechting",
      "kind"
    ],
    kort: "Een borderline moeder kan intens liefdevol en plots afwijzend zijn. Kinderen leren altijd op scherp te staan voor haar humeur, zich schuldig te voelen over de emoties van moeder, en hun eigen ik op de tweede plaats te zetten.",
    blokken: [
      {
        tekst: "Borderline gaat over extreme emotionele schommelingen, angst voor verlating, en soms grensoverschrijdend gedrag. Voor een kind is de boodschap vaak: jij bent verantwoordelijk voor mijn gevoelens; liefde kan elk moment omdraaien; ik moet me aanpassen om veilig te blijven. Dat is geen normale opvoeding — het is relationele onveiligheid."
      },
      {
        kop: "Wat kinderen leren",
        tekst: "Typische sporen: je voelt je schuldig als moeder lijdt; je weet nooit welke versie je krijgt; je verbergt je eigen behoeften; je wordt vroeg volwassen ('parentified'); je twijfelt aan je eigen waarneming ('ze deed het toch uit liefde'). Complex trauma (CPTSS) komt hier vaak bij kijken door herhaalde relationele stress zonder veilige haven."
      },
      {
        kop: "Herstel op volwassen leeftijd",
        tekst: "Heling vraagt erkenning van wat er was, grenzen, afstand indien nodig, en therapie die hechting en complex trauma begrijpt. Je mag rouwen om de moeder die je nodig had én bescherming kiezen tegen wat schadelijk bleef."
      }
    ],
    doeDit: [
      "Leer over borderline als patroon — niet om te diagnosticeren, wel om te begrijpen.",
      "Herken parentificatie en schuld over moeders gevoelens.",
      "Zoek traumagerichte therapie; dit is zelden 'even praten'."
    ],
    vermijd: [
      "Jezelf de schuld geven voor haar emotionele instabiliteit.",
      "Contact volhouden zonder grenzen omdat 'ze het moeilijk heeft'.",
      "Borderline online bagatelliseren of sensationaliseren."
    ],
    zegDit: [
      "“Ik was geen ouder voor mijn moeder — ik was een kind.”",
      "“Haar pijn was echt; het was niet mijn verantwoordelijkheid.”"
    ],
    bronnen: [
      {
        boek: "understanding-borderline-mother",
        detail: "Over de vier types borderline-moeders en de impact op volwassen kinderen."
      },
      {
        boek: "hate-you-dont-leave",
        detail: "Over het borderline-patroon en relationele stormen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over complex trauma door herhaalde relationele onveiligheid."
      }
    ],
    gerelateerd: [
      "narcistische-ouder-betekenis",
      "wat-is-emotionele-verwaarlozing",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "emotioneel-incest-herkennen",
    beeld: {
      src: "img/vragen/emotioneel-incest-herkennen.jpg"
    },
    vraag: "Hoe herken ik emotioneel incest?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "emotioneel incest",
      "covert incest",
      "ouder",
      "grenzen",
      "identiteit",
      "kind"
    ],
    kort: "Emotioneel incest is wanneer een ouder een kind gebruikt als emotionele partner — voor troost, geheimen of intimiteit die bij een volwassene thuishoort. Er is vaak geen fysiek misbruik, maar wel diepe relationele schade.",
    blokken: [
      {
        tekst: "Emotioneel incest — ook wel covert incest genoemd — betekent dat een ouder het kind 'de speciale' maakt: vertrouweling, adviseur, troostenaar, of emotionele partner. Het kind voelt zich gevleid én gevangen. Fysieke seksuele handelingen hoeven er niet te zijn; de grens tussen ouder en kind is wel structureel overschreden."
      },
      {
        kop: "Signalen herkennen",
        tekst: "Typische tekenen: je voelde je verantwoordelijk voor de gevoelens van je ouder; je kende te veel volwassen details; je had geen eigen kind-zijn; jaloezie als je andere relaties opbouwt; schuld bij afstand nemen; moeite met intimiteit later; het gevoel dat je lichaam of privacy niet helemaal van jou was. Veel slachtoffers twijfelen lang omdat 'er toch niets fysieks gebeurde'."
      },
      {
        kop: "Herstel en grenzen",
        tekst: "Heling begint bij benoemen: ik was een kind, geen partner. Grenzen met de ouder, therapie, en leren dat nabijheid niet gelijk staat aan verantwoordelijkheid voor de ander zijn centrale stappen. Schaamte hoort bij het patroon — het is niet jouw schuld."
      }
    ],
    doeDit: [
      "Lees betrouwbare info over emotioneel incest — herkenning alleen al helpt.",
      "Zoek therapie die relationele trauma en grenzen begrijpt.",
      "Oefen: mijn gevoelens zijn van mij; hun gevoelens zijn van hen."
    ],
    vermijd: [
      "Minimaliseren omdat er geen fysiek misbruik was.",
      "De 'speciale' rol blijven spelen uit schuld.",
      "Intimiteitsproblemen alleen als 'persoonlijk falen' zien."
    ],
    zegDit: [
      "“Ik was een kind — geen emotionele partner.”",
      "“Ik hoef hun gevoelens niet meer te dragen.”"
    ],
    bronnen: [
      {
        boek: "emotional-incest",
        detail: "Het kernwerk over emotioneel incest en de impact op identiteit en relaties."
      },
      {
        boek: "trapped-in-the-mirror",
        detail: "Over spiegeling en identiteitsverlies bij grensoverschrijdende ouder-kind dynamiek."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over het gouden kind en de prijs van ouderlijke loyaliteit."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "trauma-seksualiteit-intimiteit",
      "grenzen-met-ouders-zetten"
    ]
  },
  {
    id: "verwaarlozing-vs-misbruik",
    beeld: {
      src: "img/vragen/verwaarlozing-vs-misbruik.jpg"
    },
    vraag: "Wat is het verschil tussen verwaarlozing en misbruik?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "verwaarlozing",
      "misbruik",
      "ACE",
      "verschil",
      "trauma",
      "jeugd"
    ],
    kort: "Misbruik is wat er gebeurde dat schadelijk was; verwaarlozing is wat er ontbrak dat een kind nodig had. Beide kunnen diepe trauma-sporen nalaten — en ze komen vaak samen voor.",
    blokken: [
      {
        tekst: "In gesprekken over trauma gaat het vaak over misbruik: geweld, seksueel misbruik, mishandeling. Verwaarlozing klinkt minder 'erg' — maar voor een kind kan het missen van troost, voeding, veiligheid of emotionele aanwezigheid net zo overweldigend zijn."
      },
      {
        kop: "Misbruik: wat er wél gebeurde",
        tekst: "Misbruik omvat acties die schade toebrengen: fysiek, emotioneel of seksueel geweld; bedreiging; grensoverschrijding; vernedering. Het is iets dat iemand deed — of liet gebeuren — dat een kind niet aankon."
      },
      {
        kop: "Verwaarlozing: wat er ontbrak",
        tekst: "Verwaarlozing omvat wat niet gegeven werd: eten, hygiëne, medische zorg, emotionele troost, bescherming, aanwezigheid, interesse in het innerlijke leven van het kind. Emotionele verwaarlozing laat vaak geen zichtbare wond — maar wel CPTSS-achtige sporen: leegte, schaamte, moeite met voelen."
      },
      {
        kop: "Geen hiërarchie van lijden",
        tekst: "Het ene is niet 'erger' dan het andere; ze overlappen vaak. Wie alleen verwaarlozing meemaakte, twijfelt soms jaren aan eigen pijn. Die twijfel is zelf een spoor. Beide verdienen erkenning en hulp."
      }
    ],
    doeDit: [
      "Erken dat 'niets gebeurde' ook schade kan zijn.",
      "Vermijd je pijn afmeten aan fysiek misbruik alleen.",
      "Zoek hulp die zowel misbruik als verwaarlozing herkent."
    ],
    vermijd: [
      "Denken dat verwaarlozing 'minder erg' is en dus niet telt.",
      "ACE-scores gebruiken om je pijn te minimaliseren.",
      "Wachten op een 'erger' verhaal voordat je hulp zoekt."
    ],
    zegDit: [
      "“Wat ik miste, telt ook.”",
      "“Ik hoef mijn pijn niet te vergelijken om geldig te zijn.”"
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over emotionele verwaarlozing en de onzichtbare sporen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over trauma begrijpen vanuit ervaring, niet vanuit schaamte."
      },
      {
        boek: "deepest-well",
        detail: "Over ACE's en de impact van zowel misbruik als verwaarlozing."
      }
    ],
    gerelateerd: [
      "wat-is-emotionele-verwaarlozing",
      "wat-zijn-aces",
      "wat-is-trauma-erg-genoeg"
    ]
  },
  {
    id: "adoptie-en-hechting",
    beeld: {
      src: "img/vragen/adoptie-en-hechting.jpg"
    },
    vraag: "Hoe hangen adoptie en hechtingstrauma samen?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "adoptie",
      "hechting",
      "verlies",
      "identiteit",
      "trauma",
      "geborgenheid"
    ],
    kort: "Adoptie kan liefdevol én traumatisch zijn tegelijk: verlies van biologische band, vroege scheiding, en soms onverwerkte geschiedenis. Hechtingsproblemen betekenen niet dat adoptie 'mislukt' — ze wijzen op wat het zenuwstelsel meemaakte.",
    blokken: [
      {
        tekst: "Adoptie wordt soms gepresenteerd als 'happy ending', maar voor het kind kan er ook verlies, verwarring en vroege scheiding zijn geweest — soms al in de eerste levensdagen. Het lichaam onthoudt afwezigheid, overstap en onzekerheid, ook zonder bewuste herinneringen."
      },
      {
        kop: "Hechting en verlies",
        tekst: "Hechtingstrauma bij adoptie gaat niet over 'slechte' adoptieouders alleen. Het kan gaan om: vroege scheiding van de biologische moeder; meerdere plaatsingen; onbekende prenatal stress; of het gevoel ergens tussen twee werelden te staan. Adoptiekinderen kunnen liefde voelen én rouw, loyaliteitsconflict en moeite met vertrouwen."
      },
      {
        kop: "Erkenning helpt",
        tekst: "Heling begint wanneer adoptie niet alleen gevierd maar ook erkend mag worden als iets complexs. Openheid over geschiedenis, traumagerichte therapie, en ruimte voor vragen over identiteit en verlies zijn geen ingratitude — het is gezondheid."
      }
    ],
    doeDit: [
      "Erken zowel dankbaarheid als verlies — beide mogen bestaan.",
      "Zoek info over hechting en vroege scheiding, ook zonder herinneringen.",
      "Overweeg therapie die adoptie en trauma combineert."
    ],
    vermijd: [
      "Adoptie alleen als 'gelukkig' framings en rouw onderdrukken.",
      "Hechtingsproblemen zien als ingratitude tegenover adoptieouders.",
      "Biologische geschiedenis negeren als die beschikbaar is."
    ],
    zegDit: [
      "“Ik mag liefhebben én rouwen.”",
      "“Mijn hechtingsstruggles zijn geen bewijs dat ik kapot ben.”"
    ],
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege relationele trauma en hechtingspatronen."
      },
      {
        boek: "attached",
        detail: "Over hechtingsstijlen en hoe ze zich in relaties tonen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrijpen wat vroege ervaringen met je meenemen."
      }
    ],
    gerelateerd: [
      "steeds-onveilige-relaties",
      "waarom-vertrouw-ik-niemand",
      "weinig-jeugdherinneringen"
    ]
  },
  {
    id: "pleegkind-trauma",
    beeld: {
      src: "img/vragen/pleegkind-trauma.jpg"
    },
    vraag: "Wat is pleegkind-trauma?",
    thema: "hechting",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "pleegzorg",
      "pleegkind",
      "hechting",
      "verplaatsing",
      "verlies",
      "instabiliteit"
    ],
    kort: "Pleegkinderen meemaken vaak meerdere verliezen, verplaatsingen en onzekerheid — soms na misbruik thuis. Dat is relationeel trauma, ook in liefdevolle pleeggezinnen.",
    blokken: [
      {
        tekst: "Pleegzorg begint meestal omdat thuis niet veilig was. Daarna volgen vaak scheiding van ouders, broers en zussen, school, huis — soms meerdere keren. Zelfs in een zorgzaam pleeggezin kan het zenuwstelsel vasthouden aan: nergens echt thuishoren, elk moment kunnen vertrekken."
      },
      {
        kop: "Typische ervaringen",
        tekst: "Instabiliteit, loyaliteitsconflict (pleegouders vs biologische ouders), moeite met vertrouwen, 'probleemgedrag' als communicatie van angst, en soms verdrongen herinneringen aan wat vóór pleegzorg gebeurde. Volwassen pleegkinderen kunnen succesvol lijken en innerlijk leeg of alert blijven."
      },
      {
        kop: "Voor pleegkinderen én pleegouders",
        tekst: "Pleegouders: begrijp dat gedrag vaak angst is, niet ondankbaarheid. Stabiliteit, voorspelbaarheid en traumagerichte hulp zijn cruciaal. Pleegkinderen: je reacties zijn logisch. Hulp zoeken is geen verraad aan wie voor je zorgde."
      }
    ],
    doeDit: [
      "Erken meervoudig verlies — niet alleen het eerste huis.",
      "Zoek traumagerichte begeleiding voor kind én pleegouders.",
      "Bouw voorspelbaarheid en veilige routines."
    ],
    vermijd: [
      "Gedrag alleen zien als 'opvoedingsprobleem'.",
      "Pleegkinderen dwingen dankbaar te zijn en rouw te onderdrukken.",
      "Verplaatsingen minimaliseren ('je had het toch beter')."
    ],
    zegDit: [
      "“Mijn onrust heeft een geschiedenis.”",
      "“Stabiliteit mag tijd kosten — ik hoef niet meteen te vertrouwen.”"
    ],
    bronnen: [
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen bij kinderen met complexe achtergronden."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege relationele trauma en hechting."
      },
      {
        boek: "deepest-well",
        detail: "Over cumulatieve stress en vroege tegenslag."
      }
    ],
    gerelateerd: [
      "adoptie-en-hechting",
      "wat-zijn-aces",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "echtscheiding-impact-kind",
    beeld: {
      src: "img/vragen/echtscheiding-impact-kind.jpg"
    },
    vraag: "Hoe beïnvloedt echtscheiding een kind?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "echtscheiding",
      "scheiding",
      "kind",
      "ouder",
      "verlies",
      "loyaliteit"
    ],
    kort: "Scheiding is niet automatisch traumatisch — maar conflict, loyaliteitsdruk, en het verlies van veiligheid thuis kunnen diepe sporen nalaten. Hoe ouders scheiden telt vaak meer dan het feit alleen.",
    blokken: [
      {
        tekst: "Kinderen van gescheiden ouders vertellen vaak twee verhalen: 'het was een opluchting' of 'mijn wereld viel uit elkaar'. Scheiding zelf is neutraler dan de manier waarop gebeurt: vechtende ouders, een kind dat boodschapper wordt, of één ouder die de ander zwart maakt — dat raakt het zenuwstelsel."
      },
      {
        kop: "Wat kinderen nodig hebben",
        tekst: "Voorspelbaarheid, bescherming tegen volwassen conflict, geen loyaliteitsdruk, en het gevoel dat beide ouders — op hun manier — blijven. Wanneer een kind moet kiezen, volwassen worden voor een ouder, of getuige is van geweld, is de scheiding relationeel traumatisch — ongeacht leeftijd."
      },
      {
        kop: "Sporen op volwassen leeftijd",
        tekst: "Volwassenen kunnen moeite hebben met vertrouwen in relaties, angst voor verlating, schuld over ouders, of het gevoel verantwoordelijk te zijn voor andermans geluk. Dat is geen zwakte — het is een logisch gevolg van een kind dat te vroeg volwassen werd."
      }
    ],
    doeDit: [
      "Erken je ervaring — ook als anderen zeggen 'kinderen veerkrachtig'.",
      "Let op loyaliteitsconflict en parentificatie in je eigen leven.",
      "Zoek hulp als scheiding-gerelateerde pijn je relaties beïnvloedt."
    ],
    vermijd: [
      "Scheiding bagatelliseren omdat het 'tegenwoordig normaal' is.",
      "Jezelf de schuld geven voor het uiteengaan van je ouders.",
      "Eén ouder demoniseren of idealiseren zonder nuance."
    ],
    zegDit: [
      "“Ik was een kind in een volwassen storm.”",
      "“Ik hoef geen partij te kiezen om lief te hebben.”"
    ],
    bronnen: [
      {
        boek: "what-happened-to-you",
        detail: "Over hoe vroege ervaringen doorwerken in latere relaties en zelfbeeld."
      },
      {
        boek: "drama-gifted-child",
        detail: "Over rollen van kinderen in disfunctionele gezinssystemen."
      },
      {
        boek: "journey-abandonment",
        detail: "Over verlies, hechting en angst voor verlating."
      }
    ],
    gerelateerd: [
      "loyaliteit-vs-zelfbescherming",
      "siblings-contact-houden",
      "stiefouder-dynamiek"
    ]
  },
  {
    id: "stiefouder-dynamiek",
    beeld: {
      src: "img/vragen/stiefouder-dynamiek.jpg"
    },
    vraag: "Hoe werkt stiefouder-dynamiek bij trauma?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg",
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "stiefouder",
      "stiefgezin",
      "blended family",
      "loyaliteit",
      "hechting",
      "familie"
    ],
    kort: "Stiefgezinnen combineren vaak rouw, loyaliteit en nieuwe regels. Voor kinderen met trauma kan een stiefouder veiligheid bieden — of oude wonden openen door onduidelijke rollen.",
    blokken: [
      {
        tekst: "Een stiefouder komt in een systeem met geschiedenis: verlies, boosheid, hoop, en soms onverwerkt trauma. Het kind voelt vaak: als ik jou liefheb, verraad ik mijn andere ouder. Die loyaliteitsdruk is zwaar — en stiefouders die te snel 'ouder' willen zijn, kunnen weerstand oproepen die niet persoonlijk bedoeld is."
      },
      {
        kop: "Wat helpt",
        tekst: "Respect voor de biologische band, langzaam vertrouwen opbouwen, voorspelbare regels, en geen vervanging forceren. Voor volwassen kinderen met trauma: een stiefouder kan ondersteunend zijn, maar oude pijn rond verlaten, misbruik of verwaarlozing kan geactiveerd worden — dat vraagt begrip, geen schuld."
      },
      {
        kop: "Als stiefouder of partner",
        tekst: "Wees geduldig met hechting; forceer geen 'papa/mama'. Steun het kind in contact met beide biologische ouders waar veilig. Zoek hulp als het gezin vastloopt — blended family therapie kan relationele patronen doorbreken."
      }
    ],
    doeDit: [
      "Geef tijd — hechting is geen race.",
      "Respecteer loyaliteit aan biologische ouders; forceer geen keuze.",
      "Zoek gezinsgerichte hulp bij aanhoudende spanning."
    ],
    vermijd: [
      "Stiefouder willen zijn als 'vervanging' van de andere ouder.",
      "Kinderen straffen voor loyaliteitsgevoelens.",
      "Trauma-reacties persoonlijk nemen als afwijzing."
    ],
    zegDit: [
      "“Je mag beide ouders liefhebben.”",
      "“Vertrouwen bouw ik langzaam — dat is oké.”"
    ],
    bronnen: [
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht en relationele veiligheid in gezinnen."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over hechting en relationele patronen."
      },
      {
        boek: "attached",
        detail: "Over hechting en wat mensen nodig hebben in close relaties."
      }
    ],
    gerelateerd: [
      "echtscheiding-impact-kind",
      "adoptie-en-hechting",
      "opvoeden-met-eigen-trauma"
    ]
  },
  {
    id: "oma-opa-generatiepatronen",
    beeld: {
      src: "img/vragen/oma-opa-generatiepatronen.jpg"
    },
    vraag: "Hoe beïnvloeden oma en opa generatiepatronen?",
    thema: "familie",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "generaties",
      "oma",
      "opa",
      "familie",
      "patronen",
      "intergenerationeel"
    ],
    kort: "Grootouders droegen vaak eigen onverwerkte pijn — oorlog, armoede, taboes. Patronen van stilte, hardheid of angst kunnen doorgegeven zijn zonder dat iemand het bedoelde.",
    blokken: [
      {
        tekst: "Oma en opa kunnen warmte en geborgenheid geven — of juist de plek zijn waar oude regels voortleven: 'niet klagen', 'niet praten', 'sterk zijn'. Hun leven viel soms in andere tijden: oorlog, migratie, schaamte, onverwerkte verliezen. Dat leeft door in hoe je ouders opvoedden, en hoe jij nu reageert."
      },
      {
        kop: "Patronen herkennen",
        tekst: "Vraag: welke boodschappen hoorde ik over gevoelens, lichaam, conflict, man/vrouw, succes? Welke geheimen mochten niet genoemd? Soms is de 'lieve oma' ook de bewaarder van familieverhalen die nooit verteld werden. Patronen zijn geen veroordeling — ze zijn informatie."
      },
      {
        kop: "Jij mag anders kiezen",
        tekst: "Inzicht in generatiepatronen helpt je begrijpen waarom je ouders zo waren — zonder te vergoelijken wat schadelijk was. Je erft niet alleen genen, maar ook onuitgesproken regels. Bewust andere keuzes maken is intergenerationeel herstel."
      }
    ],
    doeDit: [
      "Stel vragen over familiegeschiedenis — wat mocht wel/niet verteld worden?",
      "Herken terugkerende thema's: stilte, schaamte, hard werken, geen klagen.",
      "Bepaal welke patronen jij bewust wilt stoppen."
    ],
    vermijd: [
      "Alles vergoelijken omdat 'het andere tijden waren'.",
      "Patronen herhalen zonder bewustzijn en dan denken dat het 'in de familie zit'.",
      "Grootouders demoniseren — nuance helpt begrijpen."
    ],
    zegDit: [
      "“Ik erken de geschiedenis — ik hoef haar niet te herhalen.”",
      "“Sommige familie-regels waren overleving, geen waarheid.”"
    ],
    bronnen: [
      {
        boek: "transforming-legacy",
        detail: "Over intergenerationeel trauma en het transformeren van familie-erfgoed."
      },
      {
        boek: "break-the-cycle",
        detail: "Over patronen doorbreken over generaties heen."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe maatschappelijke en familiale pijn doorwerkt."
      }
    ],
    gerelateerd: [
      "intergenerationeel-doorgeven-stoppen",
      "intergenerationeel-trauma",
      "familiegeheimen-breken"
    ]
  },
  {
    id: "intergenerationeel-doorgeven-stoppen",
    beeld: {
      src: "img/vragen/intergenerationeel-doorgeven-stoppen.jpg"
    },
    vraag: "Hoe stop ik met intergenerationeel trauma doorgeven?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "intergenerationeel",
      "generaties",
      "cyclus",
      "doorgeven",
      "herstel",
      "ouderschap"
    ],
    kort: "Intergenerationeel trauma doorgeven stopt niet met goede bedoelingen alleen — het vraagt bewustzijn, eigen herstel, en soms pijnlijke keuzes. Je bent niet verantwoordelijk voor wat vóór jou gebeurde, wel voor wat je bewust doorgeeft.",
    blokken: [
      {
        tekst: "Je zwoer: mijn kinderen krijgen het anders. En toch schiet je soms uit elke bocht, herhaal je oude zinnen, of voel je schuld over gevoelens die je ouders ook hadden. Intergenerationeel trauma is geen veroordeling — het is het doorgeven van onverwerkte pijn via gedrag, stilte en zenuwstelsel."
      },
      {
        kop: "Wat doorgegeven wordt",
        tekst: "Niet alleen verhalen, maar ook: manieren van omgaan met emoties, lichaamshouding, angst, schaamte, relaties, en wat taboe blijft. Ook epigenetica en stress in utero spelen een rol — maar het belangrijkste hefboom is wat jij nú bewust doet met je eigen herstel."
      },
      {
        kop: "Cyclus doorbreken",
        tekst: "Eigen traumawerk, grenzen met schadelijke familieleden, eerlijk ouderschap (herstellen na fouten), en stoppen met geheimen zijn concrete stappen. Perfectie is niet nodig — bewustwording en reparatie wel. Eén generatie die heelt, verandert de tak van de familieboom."
      }
    ],
    doeDit: [
      "Doe eigen traumagerichte therapie — dat is generatie-werk.",
      "Herstel na fouten in het ouderschap: erken, troost, repareer.",
      "Breek geheimen waar veilig; stilte houdt pijn in stand."
    ],
    vermijd: [
      "Denken dat liefde alleen genoeg is zonder eigen verwerking.",
      "Schuld gebruiken als enige motivatie — dat put uit.",
      "Onrealistische perfectie eisen en dan opgeven bij falen."
    ],
    zegDit: [
      "“Ik erf patronen — ik hoef ze niet te herhalen.”",
      "“Mijn herstel is een cadeau aan de volgende generatie.”"
    ],
    bronnen: [
      {
        boek: "break-the-cycle",
        detail: "Over bewust stoppen met het doorgeven van trauma."
      },
      {
        boek: "transforming-legacy",
        detail: "Over familie-erfgoed transformeren in plaats van doorgeven."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen bij kinderen én ouders."
      }
    ],
    gerelateerd: [
      "intergenerationeel-trauma",
      "opvoeden-met-eigen-trauma",
      "oma-opa-generatiepatronen"
    ]
  },
  {
    id: "familiegeheimen-breken",
    beeld: {
      src: "img/vragen/familiegeheimen-breken.jpg"
    },
    vraag: "Hoe breek ik familiegeheimen?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "geheimen",
      "familie",
      "stilte",
      "waarheid",
      "schandaal",
      "herstel"
    ],
    kort: "Familiegeheimen — misbruik, verslaving, psychische ziekte, adoptie — houden schaamte en isolatie in stand. De waarheid spreken (veilig en gedoseerd) is vaak een keerpunt in herstel — niet om te roddelen, maar om niet langer alleen te dragen.",
    blokken: [
      {
        tekst: "In veel families geldt: dit praten we niet over. Misbruik, een oom die 'vreemd' was, moeders depressie, vaders drank, een abortus, adoptie — het blijft onder de oppervlakte. Kinderen voelen vaak wél dat er iets is, maar krijgen geen woorden. Dat maakt twijfel aan eigen waarneming en diepe eenzaamheid."
      },
      {
        kop: "Waarom geheimen schadelijk zijn",
        tekst: "Geheimen beschermen soms de dader of het familie-imago, niet het kind. Ze leren: mijn ervaring mag niet bestaan. Schaamte groeit in stilte. Herstel vraagt vaak dat iemand — jij — de stilte doorbreekt, op een manier die veilig is voor jou."
      },
      {
        kop: "Hoe en wanneer spreken",
        tekst: "Je hoeft niet op een familiefeest alles te onthullen. Begin bij een therapeut, vertrouwde vriend, of lotgenoot. Bepaal wie veilig is en wie geheimen wil laten voortbestaan. Waarheid spreken is geen verraad — tenzij het anderen in gevaar brengt zonder plan. Jouw tempo telt."
      }
    ],
    doeDit: [
      "Schrijf je verhaal op — ook als je het nog niet deelt.",
      "Kies veilig audience: therapeut, vertrouwde persoon, steungroep.",
      "Bereid je voor op ontkenning; dat bevestigt soms waarom het geheim was."
    ],
    vermijd: [
      "Geheimen dragen om familie-vrede te bewaren ten koste van jezelf.",
      "Alles in één keer onthullen zonder steun of plan.",
      "Jezelf verwijten als familie de waarheid ontkent."
    ],
    zegDit: [
      "“Ik hoef dit geheim niet langer alleen te dragen.”",
      "“De waarheid is geen aanval — het is erkenning.”"
    ],
    bronnen: [
      {
        boek: "its-not-your-fault",
        detail: "Over schaamte en geheimen loslaten na misbruik en verwaarlozing."
      },
      {
        boek: "carefrontation",
        detail: "Over eerlijkheid en grenzen in moeilijke familierelaties."
      },
      {
        boek: "myth-of-normal",
        detail: "Over taboes, schaamte en wat maatschappij en gezin verzwijgen."
      }
    ],
    gerelateerd: [
      "siblings-contact-houden",
      "verwaarlozing-vs-misbruik",
      "intergenerationeel-doorgeven-stoppen"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 15
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_15 = [
  {
    id: "nachtmerries-kinderen",
    beeld: {
      src: "img/vragen/nachtmerries-kinderen.jpg"
    },
    vraag: "Mijn kind heeft nachtmerries. Wat kan ik doen?",
    thema: "slaap",
    leeftijd: [
      "naaste",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "kinderen",
      "nachtmerries",
      "slaap",
      "angst",
      "nacht",
      "ouder"
    ],
    kort: "Nachtmerries bij kinderen zijn vaak normaal, maar kunnen ook wijzen op stress of trauma. Rust, voorspelbaarheid en een kalme ouder die blijft zijn het belangrijkste — niet het droomverhaal analyseren midden in de nacht.",
    blokken: [
      {
        tekst: "Je kind schreeuwt wakker, trilt, of durft daarna niet meer te slapen. Als ouder voel je je machteloos en misschien bang dat er 'iets ergs' achter zit. Nachtmerries komen veel voor — en bij kinderen die stress, verandering of trauma meemaken, vaker en heftiger."
      },
      {
        kop: "Eerst veiligheid, dan uitleg",
        tekst: "In het moment telt vooral aanwezigheid: blijf kalm, ga naast het bed zitten, houd contact via stem of aanraking als je kind dat wil. Forceer geen gesprek over de droom als het kind nog overspoeld is. Overdag — wanneer het rustiger is — kun je vragen wat er gebeurde en samen een 'veilig einde' bedenken. Kinderen hebben vaak behoefte aan het gevoel dat jij de nacht aankan."
      },
      {
        kop: "Wanneer extra hulp?",
        tekst: "Slaapproblemen die wekenlang aanhouden, terugkerende nachtmerries over hetzelfde thema, overdag angst of terugtrekking, of nachtmerries na een concreet incident (ongeluk, geweld, verlies) zijn redenen om met je huisarts of een kinderpsycholoog te praten. Vroeg steun voorkomt dat angst en slaap elkaar versterken."
      }
    ],
    doeDit: [
      "Blijf rustig en voorspelbaar als je kind 's nachts wakker schrikt.",
      "Houd overdag een vast slaapritueel en beperk spannende prikkels vlak voor het slapen.",
      "Zoek hulp als nachtmerries lang aanhouden of het dagelijks leven beïnvloeden."
    ],
    vermijd: [
      "De droom 's nachts uitgebreid analyseren terwijl je kind nog in paniek is.",
      "Zeggen dat het 'maar een droom' is — voor een kind voelt het echt.",
      "Straffen of boos worden omdat het kind naar jouw bed komt."
    ],
    zegDit: [
      "“Ik ben hier. Je bent veilig. Ik blijf bij je tot het rustiger is.”",
      "“Die droom klonk eng. Overdag kunnen we samen iets veils bedenken.”"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over nachtmerries, slaap en het alarmsysteem — ook relevant voor kinderen onder stress."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over hoe ouders veerkracht en veiligheid helpen opbouwen bij angstige kinderen."
      },
      {
        boek: "deepest-well",
        detail: "Over hoe vroege stress en angst het lichaam en de slaap beïnvloeden."
      }
    ],
    gerelateerd: [
      "slaap-nachtmerries",
      "nachtelijk-wakker-schrikken",
      "kind-trauma-herkennen"
    ]
  },
  {
    id: "nachtelijk-wakker-schrikken",
    beeld: {
      src: "img/vragen/nachtelijk-wakker-schrikken.jpg"
    },
    vraag: "Ik schrik 's nachts wakker zonder duidelijke reden. Wat gebeurt er?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "nacht",
      "schrikken",
      "wakker",
      "hyperalert",
      "paniek",
      "slaap"
    ],
    kort: "Plotseling wakker schrikken zonder droom kan een teken zijn dat je zenuwstelsel 's nachts nog op scherp staat. Het is geen verbeelding — je lichaam denkt dat er gevaar is, ook als je rationeel weet van niet.",
    blokken: [
      {
        tekst: "Je valt in slaap, en uren later schiet je wakker: hart bonkt, adem snel, soms zweten of een gevoel van onheil. Geen droom, geen geluid — alleen alarm. Daarna lukt inslapen vaak moeilijk, omdat je alert blijft op de volgende 'aanval'."
      },
      {
        kop: "Het alarmsysteem slaapt niet mee",
        tekst: "Bij trauma leert het zenuwstelsel dat rust gevaarlijk kan zijn. Overdag houd je het soms onder controle; 's nachts, wanneer je bewuste brein minder stuur geeft, kan het alarm spontaan afgaan. Dit lijkt op 's nachts altijd op scherp staan of een slaapschok — het lichaam schakelt in één seconde van rust naar alarm."
      },
      {
        kop: "Terug naar rust",
        tekst: "Na het schrikken helpt het om niet meteen te vechten tegen de slaap. Sta kort op, drink water, adem langzaam uit, of doe een aardingsoefening (grounding). Overdag: werk eraan om je zenuwstelsel te kalmeren — beweging, voorspelbare routines, traumagerichte therapie. Bespreek aanhoudende klachten met huisarts of slaaptherapeut; soms spelen ook slaapapneu of medicatie mee."
      }
    ],
    doeDit: [
      "Herken het patroon: 'mijn alarm ging af, niet gevaar nu'.",
      "Gebruik langzame uitademing of grounding na het schrikken.",
      "Zoek traumagerichte hulp als dit regelmatig je nachtrust verstoort."
    ],
    vermijd: [
      "In bed blijven liggen terwijl je hartslag hoog blijft — sta kort op als dat helpt.",
      "Schermen of nieuws checken midden in de nacht.",
      "Jezelf verwijten dat je 'te angstig' bent."
    ],
    zegDit: [
      "“Dit is mijn zenuwstelsel. Ik ben nu veilig.”",
      "“Ik hoef niet meteen weer te slapen — eerst kalmeren.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over slaapproblemen en altijd op scherp staan als kernklachten van trauma."
      },
      {
        boek: "ptsdreams",
        detail: "Over nachtelijke alertheid en het alarmsysteem tijdens slaap."
      },
      {
        boek: "anchored",
        detail: "Over terugkeren van de actie-stand naar een rustiger zenuwstelsel."
      }
    ],
    gerelateerd: [
      "nachtelijke-hyperalertheid",
      "slaap-nachtmerries",
      "wat-is-hyperalertheid"
    ]
  },
  {
    id: "slaapritme-herstellen",
    beeld: {
      src: "img/vragen/slaapritme-herstellen.jpg"
    },
    vraag: "Hoe herstel ik mijn slaapritme na trauma?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "slaapritme",
      "routine",
      "herstel",
      "circadiaans",
      "ritueel",
      "regulatie"
    ],
    kort: "Na trauma is je ritme vaak verstoord: laat inslapen, nachtelijk wakker liggen, overdag vermoeid. Herstel vraagt geduld, vaste tijden en signalen van veiligheid — niet perfect slapen forceren.",
    blokken: [
      {
        tekst: "Je leven draait op andere uren: 's avonds alert, 's nachts wakker, overdag uitgeput. Slaap voelt onbetrouwbaar geworden. Dat is begrijpelijk — trauma verstoort niet alleen je gevoelens, maar ook je biologische klok en het vertrouwen dat rust veilig is."
      },
      {
        kop: "Ritme als veiligheidssignaal",
        tekst: "Je lichaam kalmeert wanneer dingen voorspelbaar worden. Vaste opsta- en bedtijden — ook als inslapen moeilijk is — helpen je circadiaans ritme opnieuw te synchroniseren. Een kalmerend avondritueel (gedimmed licht, geen schermen, warme douche, rustige ademhaling) vertelt je zenuwstelsel: de dag is voorbij, je mag landen."
      },
      {
        kop: "Kleine stappen, langdurig",
        tekst: "Verwacht geen perfecte nachten binnen een week. Begin met één verandering: eerder dimmen, of elke ochtend op hetzelfde uur licht op. Daglicht overdag, beweging, en beperk dutjes na 15 uur. Als angst of nachtmerries het ritme telkens breken, combineer goede slaapgewoontes met traumatherapie — het ritme volgt vaak pas wanneer het zenuwstelsel iets kalmer wordt."
      }
    ],
    doeDit: [
      "Kies vaste opsta- en bedtijden en houd die ook bij slechte nachten aan.",
      "Bouw een rustig avondritueel zonder schermen of zware gesprekken.",
      "Zoek daglicht en lichte beweging overdag om je biologische klok te steunen."
    ],
    vermijd: [
      "Elke avond later gaan slapen omdat inslapen toch niet lukt.",
      "Lange dutjes overdag die je nachtrust verder verstoren.",
      "Denken dat één slechte week betekent dat herstel onmogelijk is."
    ],
    zegDit: [
      "“Mijn lichaam leert opnieuw dat rust veilig mag zijn.”",
      "“Ritme is belangrijker dan perfecte uren slaap.”"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over goede slaapgewoontes en het herstellen van vertrouwen in de nacht."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma slaap verstoort en wat helpt om te kalmeren."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd werken aan stabiliteit, inclusief slaap en routine."
      }
    ],
    gerelateerd: [
      "slaap-nachtmerries",
      "bed-voelt-onveilig",
      "nachtelijke-hyperalertheid"
    ]
  },
  {
    id: "bed-voelt-onveilig",
    beeld: {
      src: "img/vragen/bed-voelt-onveilig.jpg"
    },
    vraag: "Mijn bed voelt onveilig. Hoe kan dat?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "bed",
      "onveilig",
      "slaapkamer",
      "nacht",
      "angst",
      "veiligheid"
    ],
    kort: "Als slapen onveilig voelt, heeft je lichaam vaak geleerd dat kwetsbaarheid gevaarlijk is — bijvoorbeeld na mishandeling, nachtelijk geweld of langdurige onvoorspelbaarheid thuis. Je kunt je slaapomgeving opnieuw leren vertrouwen.",
    blokken: [
      {
        tekst: "Je ligt in bed en voelt spanning: elke schaduw, elk geluid, het gevoel dat je niet mag ontspannen. Soms vermijd je zelfs je slaapkamer. Dit is geen irrationele angst — voor veel mensen met trauma is het bed of de nacht gekoppeld aan echte onveiligheid."
      },
      {
        kop: "Kwetsbaarheid als risico",
        tekst: "Slapen is de meest kwetsbare staat die er is. Wanneer je ooit 's nachts bent aangevallen, mishandeld, of nooit wist wat er zou gebeuren als je dichtviel, slaat het zenuwstelsel die koppeling op. Het bed wordt geen rustplek maar een herinnering aan machteloosheid. Dat verklaart waarom je 's avonds juist alert bent."
      },
      {
        kop: "Veiligheid opnieuw opbouwen",
        tekst: "Werk aan concrete signalen: slot op de deur als dat helpt, nachtlampje, een vertrouwd voorwerp naast je, of tijdelijk op een andere plek slapen tot het bed minder geladen voelt. Avondrituelen, co-regulatie met een partner, en traumatherapie kunnen de associatie langzaam verzachten. Je hoeft niet meteen 'normaal' in bed te slapen — veiligheid gaat voor conventie."
      }
    ],
    doeDit: [
      "Pas je slaapkamer aan: licht, geluid, slot of vertrouwde objecten.",
      "Bouw een kalmerend ritueel vóór je gaat liggen.",
      "Overweeg tijdelijk een andere slaapplek als het bed te geladen voelt."
    ],
    vermijd: [
      "Jezelf dwingen in een bed dat paniek oproept 'omdat het hoort'.",
      "Alcohol gebruiken om de angst te dempen — dat verstoort je slaap en je rust.",
      "Denken dat je 'dom' bent omdat je thuis bang bent."
    ],
    zegDit: [
      "“Mijn lichaam beschermde me. Ik mag stap voor stap leren rusten.”",
      "“Veiligheid opbouwen is belangrijker dan waar ik slaap.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma de slaap en het gevoel van veiligheid verstoort."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over altijd op scherp staan en hoe moeilijk rust en overgave dan zijn."
      },
      {
        boek: "anchored",
        detail: "Over signalen van veiligheid die het zenuwstelsel helpen kalmeren."
      }
    ],
    gerelateerd: [
      "slaapritme-herstellen",
      "nachtelijke-hyperalertheid",
      "lichaam-reageert-zonder-gevaar"
    ]
  },
  {
    id: "partner-snurken-triggers",
    beeld: {
      src: "img/vragen/partner-snurken-triggers.jpg"
    },
    vraag: "Het snurken of ademen van mijn partner triggert me. Wat kan ik doen?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "naaste",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "partner",
      "snurken",
      "trigger",
      "slaap",
      "relatie",
      "geluid"
    ],
    kort: "Geluiden in de nacht — snurken, zware ademhaling, onverwachte beweging — kunnen een trauma-alarm activeren, ook als je partner veilig is. Het is geen overdreven reactie; het vraagt begrip, praktische oplossingen en soms apart slapen.",
    blokken: [
      {
        tekst: "Je partner ligt naast je te slapen, en elk geluid maakt je gespannen of wakker. Soms voelt het alsof je moet waken om veilig te blijven — terwijl je rationeel weet dat er niets aan de hand is. Dit kan relaties belasten en je nachtrust verwoesten."
      },
      {
        kop: "Waarom juist dit geluid?",
        tekst: "Triggers zijn vaak zintuiglijk en 's nachts versterkt: je bewuste brein is minder actief, je zenuwstelsel scant de omgeving. Ademhaling, snurken of het onverwacht dichtvallen van iemands ogen kan lijken op situaties waarin iemand agressief, dronken of onvoorspelbaar was. Het lichaam reageert op het patroon, niet op je partner als persoon."
      },
      {
        kop: "Praktisch én relationeel",
        tekst: "Oordopjes, witte ruis, aparte slaapkamer of bedden naast elkaar zijn geen relatie-falen — het kan herstel ondersteunen. Bespreek het rustig overdag: leg uit dat het je zenuwstelsel is, niet afkeuring van je partner. Slaapapneu bij snurken laten onderzoeken helpt soms beiden. Traumatherapie kan de trigger zelf minder scherp maken."
      }
    ],
    doeDit: [
      "Bespreek overdag wat er gebeurt — zonder schuld, met uitleg over triggers.",
      "Probeer praktische oplossingen: oordopjes, witte ruis, apart slapen indien nodig.",
      "Laat aanhoudend snurken medisch checken op slaapapneu."
    ],
    vermijd: [
      "Boos worden op je partner omdat je lichaam alarm slaat.",
      "Jezelf dwingen naast iemand te liggen terwijl je nachtenlang alert bent.",
      "Het probleem jarenlang verzwijgen uit schaamte."
    ],
    zegDit: [
      "“Dit gaat over mijn zenuwstelsel, niet over jou als persoon.”",
      "“Aparte bedden helpen mij beter slapen — dat is goed voor ons beiden.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over hoe koppels moeilijke onderwerpen bespreken zonder afstand te creëren."
      },
      {
        boek: "body-keeps-score",
        detail: "Over zintuiglijke triggers en hoe het lichaam automatisch reageert."
      },
      {
        boek: "ptsdreams",
        detail: "Over slaapverstoring en prikkels in de nachtelijke omgeving."
      }
    ],
    gerelateerd: [
      "wat-is-een-trigger",
      "partner-trauma-steunen",
      "slaap-nachtmerries"
    ]
  },
  {
    id: "slaapmiddelen-trauma",
    beeld: {
      src: "img/vragen/slaapmiddelen-trauma.jpg"
    },
    vraag: "Zijn slaapmiddelen veilig bij trauma — en wanneer overweeg je ze?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "slaapmiddelen",
      "medicatie",
      "slaap",
      "benzodiazepinen",
      "huisarts",
      "nacht"
    ],
    kort: "Slaapmiddelen kunnen tijdelijk verlichting geven, maar lossen trauma zelf niet op. Sommige middelen verstoren diepe slaap of remming, of geven afhankelijkheid. Bespreek altijd voor- en nadelen met je huisarts in de context van je hele herstel.",
    blokken: [
      {
        tekst: "Je ligt al weken wakker, en iemand stelt slaapmiddelen voor — of je overweegt ze zelf. Bij trauma is slaap zo broos dat elke hulp verleidelijk voelt. Toch is het belangrijk om te weten wat medicatie wel en niet doet."
      },
      {
        kop: "Verlichting versus herstel",
        tekst: "Slaapmiddelen kunnen op korte termijn helpen om in te slapen, maar ze 'genezen' het altijd op scherp staan of nachtmerries niet. Sommige middelen onderdrukken de REM-slaap — juist de fase waarin je droomt en verwerkt. Bij langdurig gebruik kan afhankelijkheid ontstaan, of raakt je natuurlijke slaapritme verder verstoord."
      },
      {
        kop: "Wanneer wel overwegen?",
        tekst: "Kortdurend, onder medisch toezicht, kan medicatie soms helpen om een neerwaartse spiraal te doorbreken — bijvoorbeeld na ernstige uitputting. Praat over alternatieven voor benzo's, de wisselwerking met andere medicatie, en een afbouwplan. Combineer medicatie waar mogelijk met goede slaapgewoontes, traumatherapie en je zenuwstelsel kalmeren. Jij mag vragen stellen en nee zeggen."
      }
    ],
    doeDit: [
      "Bespreek slaapproblemen eerst met je huisarts — inclusief trauma en andere medicatie.",
      "Vraag naar kortdurend gebruik, bijwerkingen en afbouwmogelijkheden.",
      "Combineer medicatie met kalmeren, ritme en traumagerichte hulp waar mogelijk."
    ],
    vermijd: [
      "Slaapmiddelen langdurig zonder medisch overleg gebruiken.",
      "Alcohol combineren met slaapmiddelen.",
      "Denken dat pillen trauma-verwerking vervangen."
    ],
    zegDit: [
      "“Ik wil graag weten wat dit middel doet met mijn diepe slaap en dromen.”",
      "“Is er een plan om dit weer af te bouwen?”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over slaap, medicatie en het belang van diepe rust voor herstel."
      },
      {
        boek: "ptsdreams",
        detail: "Over slaapstoornissen bij trauma en behandelopties."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over zorg die alles samen neemt, waarin medicatie één puzzelstuk is."
      }
    ],
    gerelateerd: [
      "medicatie-bij-trauma",
      "slaap-nachtmerries",
      "slaapritme-herstellen"
    ]
  },
  {
    id: "nachtelijke-hyperalertheid",
    beeld: {
      src: "img/vragen/nachtelijke-hyperalertheid.jpg"
    },
    vraag: "Wat is nachtelijke hyperalertheid?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "hyperalert",
      "nacht",
      "waakzaam",
      "zenuwstelsel",
      "slaap",
      "scanning"
    ],
    kort: "Nachtelijke hyperalertheid betekent dat je zenuwstelsel 's nachts blijft zoeken naar gevaar: elk geluid, elke schaduw kan een reactie uitlokken. Het is het altijd op scherp staan van overdag, dat 's nachts geen pauze krijgt — juist als je het kwetsbaarst bent.",
    blokken: [
      {
        tekst: "Terwijl anderen diep slapen, ben jij half-wakker: oren gespitst, spieren gespannen, klaar om te springen. Soms hoor je dingen die anderen niet horen. Slaap voelt als wachtlopen. Dit put je uit en maakt overdag alles zwaarder."
      },
      {
        kop: "Geen 'uit'-knop na zonsondergang",
        tekst: "Altijd op scherp staan overdag is al zwaar; 's nachts wordt het erger omdat je bewuste controle afneemt en het overlevingsbrein de leiding neemt. Trauma leerde je systeem dat gevaar onvoorspelbaar komt — vaak juist wanneer je rust. Het lichaam weigert overgave zolang het nog geen veiligheid ervaart."
      },
      {
        kop: "Kalmeren, overdag en 's nachts",
        tekst: "Werk overdag aan het kalmeren van je zenuwstelsel: adem, beweging, voorspelbaarheid, veilige relaties. 's Avonds: vermijd prikkels die je alerter maken. Aarden (grounding) als je 's nachts wakker wordt. Traumatherapie — lichaamsgericht, EMDR of imagery rehearsal voor nachtmerries — kan het alarm geleidelijk minder gevoelig maken. Geduld: je lichaam leerde jarenlang waken; het leert ook weer rusten."
      }
    ],
    doeDit: [
      "Herken nachtelijke alertheid als trauma-symptoom, niet als karakterfout.",
      "Bouw overdag rust op (jezelf leren kalmeren) zodat je systeem 's nachts minder gespannen start.",
      "Zoek traumagerichte hulp als waakzaamheid je leven domineert."
    ],
    vermijd: [
      "Denken dat harder 'ontspannen proberen' het oplost.",
      "Nachten lang wakker blijven scannen op gevaar.",
      "Altijd op scherp staan negeren en alleen op koffie vertrouwen overdag."
    ],
    zegDit: [
      "“Mijn waakzaamheid beschermde me. Nu mag ik leren uitrusten.”",
      "“Dit is mijn alarm — ik ben veilig in dit moment.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over altijd op scherp staan als kernklacht van trauma, dag en nacht."
      },
      {
        boek: "ptsdreams",
        detail: "Over het alarmsysteem dat tijdens slaap actief blijft."
      },
      {
        boek: "anchored",
        detail: "Over het herkennen en verschuiven van zenuwstelseltoestanden."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "nachtelijk-wakker-schrikken",
      "bed-voelt-onveilig"
    ]
  },
  {
    id: "dromen-dagboek",
    beeld: {
      src: "img/vragen/dromen-dagboek.jpg"
    },
    vraag: "Helpt een dromendagboek bij trauma — en hoe begin ik?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "dromen",
      "dagboek",
      "journal",
      "nachtmerries",
      "verwerking",
      "imagery"
    ],
    kort: "Een dromendagboek kan helpen patronen te zien en dromen bewuster te benaderen — vooral in combinatie met technieken zoals imagery rehearsal. Het is geen verplichting om alles te onthouden; schrijf op wat blijft hangen.",
    blokken: [
      {
        tekst: "Je wordt wakker met beelden, gevoelens of fragmenten — en voor het ontbijt zijn ze al vervaagd. Of juist: dezelfde droom keert terug. Een dromendagboek kan structuur geven aan wat vaak chaotisch en beangstigend aanvoelt."
      },
      {
        kop: "Wat het kan opleveren",
        tekst: "Door dromen op te schrijven — desnoods in enkele woorden — zie je soms thema's: achtervolging, verlies, machteloosheid, herkenbare personen of plaatsen. Dat is informatie voor jezelf of je therapeut, geen waarheid die je moet analyseren tot in detail. Het maakt het onzichtbare iets zichtbaarder."
      },
      {
        kop: "Hoe beginnen zonder overweldiging",
        tekst: "Houd het notebook naast je bed. Schrijf direct na het wakker worden, of noteer 's middags wat je nog weet. Je hoeft niet elke nacht te schrijven. Bij heftige nachtmerries kan je therapeut imagery rehearsal voorstellen: overdag een nieuw, veilig einde aan de droom geven. Stop of vertraag als het dagboek je juist angstiger maakt — dan is het te vroeg of te veel."
      }
    ],
    doeDit: [
      "Leg pen en papier klaar en noteer kort wat je onthoudt.",
      "Zoek terugkerende thema's zonder alles te willen 'verklaren'.",
      "Bespreek opvallende patronen met een traumatherapeut."
    ],
    vermijd: [
      "Elke droom obsessief analyseren alsof het voorspellingen zijn.",
      "Doorgaan met schrijven als het je overdag overspoelt.",
      "Jezelf verwijten als je niets meer weet na het wakker worden."
    ],
    zegDit: [
      "“Ik schrijf op wat blijft — dat is genoeg.”",
      "“Deze droom voelt zwaar; ik hoef niet alles vandaag te begrijpen.”"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over dromen bij trauma, dagboeken en imagery rehearsal."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe onverwerkte ervaringen terugkomen in slaap en dromen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele verwerking en zelfreflectie in herstel."
      }
    ],
    gerelateerd: [
      "slaap-nachtmerries",
      "lucide-dromen-trauma",
      "nachtmerries-kinderen"
    ]
  },
  {
    id: "lucide-dromen-trauma",
    beeld: {
      src: "img/vragen/lucide-dromen-trauma.jpg"
    },
    vraag: "Zijn lucide dromen nuttig of riskant bij trauma?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "lucide dromen",
      "dromen",
      "controle",
      "nachtmerries",
      "slaap",
      "bewust"
    ],
    kort: "Lucide dromen — weten dat je droomt terwijl je droomt — klinkt aantrekkelijk als controle over nachtmerries. Sommigen vinden het helpend; anderen raken juist overspoeld. Voorzichtig experimenteren en professionele begeleiding bij zware nachtmerries is verstandig.",
    blokken: [
      {
        tekst: "Het idee: als je weet dat je droomt, kun je misschien de nachtmerrie stoppen, de richting veranderen, of angst overwinnen. Online staan talloze tips. Maar bij trauma is de nacht al geladen — extra experimenteren kan helpen of juist uit balans brengen."
      },
      {
        kop: "Controle versus overspoeling",
        tekst: "Voor sommige mensen geeft het besef dat ze dromen een gevoel van grip: 'ik hoef niet machteloos te zijn'. Anderen merken dat bewust dromen heftige beelden versterkt, of dat ze moeite hebben om écht te rusten. Trauma-dromen zijn niet 'spelletjes'; ze kunnen lichamelijke reacties uitlokken alsof het echt gebeurt."
      },
      {
        kop: "Voorzichtigheid eerst",
        tekst: "Bij ernstige nachtmerries of PTSS zijn bewezen methodes — imagery rehearsal, EMDR, lichaamsgerichte (somatische) therapie — vaak een beter startpunt dan lucide-droomtechnieken. Wil je het proberen, doe dat geleidelijk en stop bij meer angst of slechtere slaap. Bespreek het met je therapeut. Lucide dromen is geen vervanging voor traumaverwerking."
      }
    ],
    doeDit: [
      "Werk eerst aan rustigere slaap en aan jezelf kalmeren overdag, vóór je lucide technieken probeert.",
      "Stop meteen als lucide dromen je angstiger of minder uitgerust maakt.",
      "Overweeg bewezen nachtmerriebehandeling via een traumatherapeut."
    ],
    vermijd: [
      "Lucide dromen forceren als vervanging voor therapie bij zware nachtmerries.",
      "Online technieken volgen zonder op je lichaam te letten.",
      "Denken dat controle in dromen automatisch veiligheid in het leven geeft."
    ],
    zegDit: [
      "“Ik mag experimenteren, maar mijn slaap en veiligheid gaan voor.”",
      "“Als dit te veel wordt, stop ik — dat is wijsheid, geen falen.”"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over droomwerk bij trauma en de grenzen van zelfhulp."
      },
      {
        boek: "body-keeps-score",
        detail: "Over nachtmerries en waarom het lichaam droombeelden als echt kan ervaren."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over het zenuwstelsel en wat het kan activeren tijdens slaap."
      }
    ],
    gerelateerd: [
      "dromen-dagboek",
      "slaap-nachtmerries",
      "nachtmerries-kinderen"
    ]
  },
  {
    id: "slaap-alcohol",
    beeld: {
      src: "img/vragen/slaap-alcohol.jpg"
    },
    vraag: "Waarom helpt alcohol mijn slaap niet echt — en maakt het soms erger?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "alcohol",
      "slaap",
      "zelfmedicatie",
      "REM",
      "nachtmerries",
      "verslaving"
    ],
    kort: "Alcohol kan inslapen vergemakkelijken, maar verstoort je diepe en REM-slaap — de fases die je het meest laten herstellen. Bij trauma versterkt het vaak nachtmerries, alertheid en schaamte op lange termijn.",
    blokken: [
      {
        tekst: "Een glas wijn 'om te ontspannen', en je valt sneller in slaap. Maar je wordt 's nachts vaker wakker, droomt heftiger, voelt je 's ochtends leger — en na een tijdje heb je misschien méér nodig voor hetzelfde effect. Veel mensen met trauma kennen dit patroon."
      },
      {
        kop: "Valse rust",
        tekst: "Alcohol onderdrukt je zenuwstelsel tijdelijk, waardoor inslapen makkelijker lijkt. Maar na enkele uren komt de terugslag: lichtere slaap, vaker wakker worden, minder REM in de tweede helft van de nacht. REM is heel belangrijk voor het kalmeren van emoties en het verwerken van dromen — en juist die laag pakt alcohol je af."
      },
      {
        kop: "Trauma en zelfmedicatie",
        tekst: "Alcohol wordt soms gebruikt om gevoelens, nachtmerries of het altijd op scherp staan te dempen. Dat werkt kort, maar versterkt op termijn je angst, je slaapproblemen en je schaamte — en kan verslaving in de hand werken. Eerlijke hulp (huisarts, verslavingszorg, traumatherapie) is geen zwakte. Nuchtere, goede slaapgewoontes en je zenuwstelsel leren kalmeren zijn op de lange duur betere vrienden dan het glas voor het slapen."
      }
    ],
    doeDit: [
      "Wees eerlijk over hoeveel en hoe vaak je alcohol gebruikt voor slaap.",
      "Probeer minstens enkele alcoholvrije avonden en merk op wat er met je slaap gebeurt.",
      "Zoek hulp als alcohol de enige manier lijkt om de nacht aan te kunnen."
    ],
    vermijd: [
      "Alcohol structureel als slaapmiddel gebruiken.",
      "Denken dat 'maar één glas' geen invloed heeft als het patroon dagelijks is.",
      "Schaamte gebruiken als reden om niet met een hulpverlener te praten."
    ],
    zegDit: [
      "“Alcohol helpt me inslapen, maar niet uitrusten — ik zoek andere steun.”",
      "“Ik wil eerlijk zijn over mijn gebruik, ook als dat moeilijk is.”"
    ],
    bronnen: [
      {
        boek: "myth-of-normal",
        detail: "Over zelfmedicatie, verslaving en onderliggende pijn."
      },
      {
        boek: "body-keeps-score",
        detail: "Over slaap, middelen en het zenuwstelsel bij trauma."
      },
      {
        boek: "when-body-says-no",
        detail: "Over omgaan met klachten via middelen en de lichamelijke prijs op lange termijn."
      }
    ],
    gerelateerd: [
      "trauma-verslaving",
      "slaapmiddelen-trauma",
      "slaap-nachtmerries"
    ]
  },
  {
    id: "slaap-schermen",
    beeld: {
      src: "img/vragen/slaap-schermen.jpg"
    },
    vraag: "Hoe beïnvloeden schermen mijn slaap na trauma?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "schermen",
      "telefoon",
      "blauw licht",
      "slaap",
      "prikkels",
      "avond"
    ],
    kort: "Schermen 's avonds houden je brein alert: licht, nieuws en scrollen wekken je zenuwstelsel. Bij trauma — waar slaap al fragiel is — versterkt dat vaak nachtelijke waakzaamheid en moeilijk inslapen.",
    blokken: [
      {
        tekst: "Je ligt in bed met je telefoon: nog even nieuws, social media, een serie. Uur later ben je moe maar niet rustig — je hoofd draait, je lichaam is gespannen. Schermen lijken onschuldig, maar voor een alert zenuwstelsel zijn ze extra belastend."
      },
      {
        kop: "Licht en alertheid",
        tekst: "Blauw licht remt melatonine aan, het hormoon dat slaap opstart. Maar minstens zo belangrijk is de inhoud: confronterend nieuws, conflicten online, of prikkelende video's houden je in de actie-stand — vecht-of-vlucht. Trauma maakt je sowieso gevoeliger voor prikkels; schermen vóór bed zijn dan dubbel zwaar."
      },
      {
        kop: "Praktische grenzen",
        tekst: "Streef naar een schermvrije buffer van dertig tot zestig minuten voor het slapen. Dim licht, lees papier, luister rustige muziek, of doe een korte ademhalingsoefening. Leg je telefoon buiten bereik als je geneigd bent te scrollen uit angst of verveling. Perfectie is niet nodig — elke minuut minder prikkel helpt je systeem landen."
      }
    ],
    doeDit: [
      "Plan een schermvrije periode vóór het slapen.",
      "Gebruik 's nachts gedimd licht en vermijd nieuws of social media in bed.",
      "Leg vervangende kalmerende activiteiten klaar: boek, ademhaling, rustige muziek."
    ],
    vermijd: [
      "Nieuws of conflicten scrollen als je al angstig bent.",
      "Denken dat nachtmodus alle schade van inhoud en alertheid wegneemt.",
      "Telefoon als enige manier om 's nachts te kalmeren — probeer ook andere ankers."
    ],
    zegDit: null,
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over goede slaapgewoontes en minder prikkels in de avond."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel voorbereiden op rust en veiligheid."
      },
      {
        boek: "body-keeps-score",
        detail: "Over altijd op scherp staan en wat het systeem kalmeert of juist aanzet."
      }
    ],
    gerelateerd: [
      "slaapritme-herstellen",
      "nachtelijke-hyperalertheid",
      "slaap-nachtmerries"
    ]
  },
  {
    id: "ochtendangst",
    beeld: {
      src: "img/vragen/ochtendangst.jpg"
    },
    vraag: "Waarom voel ik 's ochtends meteen angst?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "ochtendangst",
      "angst",
      "opstaan",
      "cortisol",
      "emoties",
      "start dag"
    ],
    kort: "Ochtendangst — wakker worden met een brok in je maag of paniek — komt vaak voor bij trauma en stress. Cortisol piekt 's ochtends; een alert zenuwstelsel leest dat soms als gevaar. Het is echt, en er is veel aan te doen.",
    blokken: [
      {
        tekst: "Nog voor je voet de grond raakt, voel je angst: hart bonkt, gedachten racen, soms een gevoel van dreiging zonder duidelijke aanleiding. De dag voelt meteen zwaar. Je bent niet de enige — en het betekent niet dat er per se iets mis is vandaag."
      },
      {
        kop: "Biologie en trauma",
        tekst: "Cortisol — het stresshormoon — piekt 's ochtends van nature om je op gang te brengen. Bij trauma is dat systeem vaak overgevoelig: de piek voelt als paniek in plaats van energie. Slechte nachten, nachtmerries of 's nachts altijd op scherp staan maken ochtenden extra zwaar — je start al uitgeput en gespannen."
      },
      {
        kop: "Zacht beginnen",
        tekst: "Forceer geen grote beslissingen direct na het wakker worden. Begin klein: voeten op de grond, langzaam uitademen, daglicht, water, zachte beweging. Noteer één klein ding dat vandaag haalbaar is. Traumatherapie en betere slaap helpen op termijn. Blijft ochtendangst hevig, bespreek het met je huisarts — soms spelen ook depressie of angststoornis mee."
      }
    ],
    doeDit: [
      "Sta langzaam op en adem bewust uit vóór je meteen in je dag duikt.",
      "Zoek daglicht en water binnen de eerste halfuur.",
      "Plan geen zware gesprekken of beslissingen in het eerste uur."
    ],
    vermijd: [
      "Meteen je telefoon pakken en nieuws of berichten checken.",
      "Jezelf verwijten dat je 'weer begint met klagen'.",
      "De hele dag vooraf al afschrijven vanwege een zware ochtend."
    ],
    zegDit: [
      "“Dit is ochtendangst — het hoeft niet mijn hele dag te bepalen.”",
      "“Ik begin klein. Eén ademhaling, één stap.”"
    ],
    bronnen: [
      {
        boek: "when-body-says-no",
        detail: "Over stresshormonen, cortisol en het lichaam bij chronische spanning."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel kalmeren nadat het in de actie-stand stond."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over ochtendangst en emotionele flashbacks bij complex trauma."
      }
    ],
    gerelateerd: [
      "nachtelijk-wakker-schrikken",
      "waarom-ben-ik-altijd-moe",
      "wat-is-hyperalertheid"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 16
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_16 = [
  {
    id: "kind-trauma-herkennen",
    beeld: {
      src: "img/vragen/kind-trauma-herkennen.jpg"
    },
    vraag: "Hoe herken ik trauma bij een kind?",
    thema: "naasten",
    leeftijd: [
      "naaste",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "kind",
      "herkenning",
      "signalen",
      "gedrag",
      "ouder",
      "trauma"
    ],
    kort: "Trauma bij kinderen ziet er anders uit dan bij volwassenen: terugtrekking, agressie, regressie, concentratieproblemen of lichamelijke klachten kunnen signalen zijn. Eén symptoom is zelden genoeg — kijk naar verandering na stress of incident.",
    blokken: [
      {
        tekst: "Je kind gedraagt zich plots anders: nachtmerries, huilbuien, terugtrekking, woede-uitbarstingen, of juist te braaf zijn. Je vraagt je af: is dit puberteit, karakter, of iets ergs gebeurd? Herkennen is moeilijk — kinderen uiten pijn vaak via gedrag, niet via een verhaal."
      },
      {
        kop: "Signalen per leeftijd",
        tekst: "Peuters kunnen regressie tonen (weer bedplassen, plakkerig zijn), angst voor scheiding, of herhaald spelen van heftige thema's. Schoolkinderen kunnen concentratie verliezen, buikpijn klagen, of plots agressief of angstig worden. Tieners trekken zich terug, riskant gedrag vertonen, of lijken emotieloos. Let op verandering na een concreet gebeuren: scheiding, overlijden, ongeluk, pesten, mishandeling — maar ook langdurige spanning thuis telt."
      },
      {
        kop: "Wat nu?",
        tekst: "Ga niet meteen alles interpreteren als 'trauma', maar neem veranderingen serieus. Blijf benaderbaar, forceer geen verhalen, en zoek hulp via huisarts, CLB of kinderpsycholoog als klachten aanhouden. Vroeg ingrijpen — met veiligheid en stabiliteit — kan veel schade voorkomen."
      }
    ],
    doeDit: [
      "Let op gedragsverandering na stress, verlies of incidenten.",
      "Blijf rustig en benaderbaar; forceer geen bekentenis.",
      "Zoek professioneel advies als klachten wekenlang aanhouden."
    ],
    vermijd: [
      "Alles bagatelliseren als 'fase' zonder te luisteren.",
      "Het kind ondervragen tot het een verhaal vertelt.",
      "Boos worden op gedrag dat angst of pijn kan uitdrukken."
    ],
    zegDit: [
      "“Ik zie dat het moeilijk is. Je hoeft niet alles te vertellen — ik ben er.”",
      "“Wat jij voelt, is belangrijk. We zoeken samen hulp als dat nodig is.”"
    ],
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over hoe vroege stress het zich ontwikkelende kind beïnvloedt."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over signalen van stress en hoe ouders veerkracht ondersteunen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over kinderen begrijpen vanuit 'wat gebeurde er', niet 'wat is er mis'."
      }
    ],
    gerelateerd: [
      "nachtmerries-kinderen",
      "tiener-trauma-steunen",
      "baby-peuter-hechting"
    ]
  },
  {
    id: "tiener-trauma-steunen",
    beeld: {
      src: "img/vragen/tiener-trauma-steunen.jpg"
    },
    vraag: "Hoe steun ik een tiener met trauma?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: true,
    tags: [
      "tiener",
      "adolescent",
      "steunen",
      "ouder",
      "autonomie",
      "luisteren"
    ],
    kort: "Tieners met trauma hebben veiligheid én ruimte nodig: niet alles overnemen, wel bereikbaar blijven. Respecteer hun tempo bij praten, betrek hen bij hulp en herstel de relatie na conflicten.",
    blokken: [
      {
        tekst: "Je tiener trekt zich terug, wordt prikkelbaar, slaat school over, of lijkt 'niet meer dezelfde'. Je wilt helpen, maar alles wat je zegt lijkt verkeerd. Tieners zijn tussen kind en volwassene — ze willen autonomie, maar hebben soms intense behoefte aan een veilige ouder."
      },
      {
        kop: "Aanwezig zonder overnemend",
        tekst: "Dwing geen gesprekken. Bied aan: 'Ik ben er als je wilt praten — ook over moeilijke dingen.' Respecteer privacy waar het kan, maar grijp in bij gevaar (zelfbeschadiging, middelen, ernstige verwaarlozing). Stabiliteit thuis — voorspelbare regels, rustige reacties — helpt meer dan eindeloos preken."
      },
      {
        kop: "Hulp op hun manier",
        tekst: "Laat je tiener meebeslissen over hulp: welke therapeut, online of fysiek, individueel of groep. Herstel na ruzie: erken wat fout ging aan jouw kant, zonder alles te bagatelliseren. Trauma bij tieners kan zich uiten in schaamte — een niet-oordelende houding maakt disclosure makkelijker."
      }
    ],
    doeDit: [
      "Blijf bereikbaar zonder te pushen voor verhalen.",
      "Betrek je tiener bij keuzes rond hulp en therapeut.",
      "Herstel de band na conflicten: erkenning, geen straf voor kwetsbaarheid."
    ],
    vermijd: [
      "“Toen ik jouw leeftijd had…” als antwoord op hun pijn.",
      "Hulp opleggen zonder uitleg of zonder hun input.",
      "Gedrag straffen dat angst of dissociatie kan zijn."
    ],
    zegDit: [
      "“Ik geloof je. We zoeken samen uit wat helpt.”",
      "“Je mag nee zeggen tegen gesprekken — maar niet tegen veiligheid.”"
    ],
    bronnen: [
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht en relationele veiligheid bij jongeren."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip en relationele genezing bij jongeren."
      },
      {
        boek: "break-the-cycle",
        detail: "Over patronen doorbreken en anders reageren als ouder."
      }
    ],
    gerelateerd: [
      "kind-trauma-herkennen",
      "school-melden-trauma",
      "gezin-en-trauma"
    ]
  },
  {
    id: "baby-peuter-hechting",
    beeld: {
      src: "img/vragen/baby-peuter-hechting.jpg"
    },
    vraag: "Hoe beïnvloedt trauma de hechting bij baby's en peuters?",
    thema: "naasten",
    leeftijd: [
      "naaste",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "baby",
      "peuter",
      "hechting",
      "veiligheid",
      "ouders",
      "ontwikkeling"
    ],
    kort: "Baby's en peuters hebben geen woorden voor trauma, maar wel lichaam en relatie: angstige hechting, clingy gedrag of juist afstand kunnen wijzen op stress. Veilige, voorspelbare zorg — ook als de ouder zelf getraumatiseerd is — maakt het verschil.",
    blokken: [
      {
        tekst: "Een baby die niet kalmeert, een peuter die extreme angst bij scheiding toont, of een kind dat alles lijkt te negeren — soms gaat het om temperament, soms om stress in het gezin of wat het kind meemaakte. Hechting vormt zich in de eerste jaren via dagelijkse interacties, niet via grote woorden."
      },
      {
        kop: "Stress zonder verhaal",
        tekst: "Kleine kinderen registreren gevaar, ruzie, verwaarlozing of plotseling verlies via het lichaam: meer cortisol, moeite om te kalmeren, slaapproblemen, terugtrekken of vastklampen. Ouders met eigen onverwerkt trauma kunnen soms moeilijker afstemmen — niet uit onwil, maar omdat hun zenuwstelsel ook op scherp staat."
      },
      {
        kop: "Veiligheid herstellen",
        tekst: "Voorspelbare routines, rustige stem, oogcontact, troost bij huilen, en repareren na fouten ('mama was boos, dat was niet jouw schuld') bouwen veilig hechtingserfgoed. Zoek hulp voor jezelf als ouder én voor je kind als je vastloopt — vroeg steun is geen falen maar bescherming."
      }
    ],
    doeDit: [
      "Bied voorspelbare zorg: vaste routines, kalme reacties, troost bij stress.",
      "Repareer na harde momenten: erkenning en troost, geen schuld bij het kind.",
      "Zoek hulp voor ouder én kind als regulatie of hechting zorgen baart."
    ],
    vermijd: [
      "Huilen negeren om 'hechting te vermijden' — baby's hebben respons nodig.",
      "Denken dat peuters te jong zijn om stress te voelen.",
      "Alles alleen dragen terwijl je zelf overweldigd bent."
    ],
    zegDit: [
      "“Ik ben terug. Je bent veilig bij mij.”",
      "“Dat was eng. Ik help je kalmeren.”"
    ],
    bronnen: [
      {
        boek: "nurturing-resilience",
        detail: "Over hechting, stress en veerkracht bij jonge kinderen."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege relationele stress en wat het kind nodig heeft."
      },
      {
        boek: "deepest-well",
        detail: "Over toxische stress in de vroege jaren."
      }
    ],
    gerelateerd: [
      "kind-trauma-herkennen",
      "opvoeden-met-eigen-trauma",
      "gezin-en-trauma"
    ]
  },
  {
    id: "ouder-ptss-helpen",
    beeld: {
      src: "img/vragen/ouder-ptss-helpen.jpg"
    },
    vraag: "Hoe help ik mijn ouder met PTSS zonder mezelf te verliezen?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "ouder",
      "PTSS",
      "volwassen kind",
      "grenzen",
      "steunen",
      "familie"
    ],
    kort: "Een ouder met PTSS kan terugtrekken, uitbarsten of emotioneel afwezig zijn — dat raakt kinderen, ook volwassenen. Je kunt steun bieden zonder hun trauma te dragen: grenzen, eigen hulp en realistische verwachtingen zijn essentieel.",
    blokken: [
      {
        tekst: "Je ouder heeft PTSS — misschien door oorlog, geweld, verlies of langdurige stress. Je wilt helpen, maar voelt je schuldig, boos, machteloos of verantwoordelijk voor hun welzijn. Dat is een zware rol voor een kind, welk leeftijd je ook hebt."
      },
      {
        kop: "Jij bent geen therapeut",
        tekst: "Je kunt er zijn, praktisch helpen, naar afspraken gaan als dat gewenst is — maar je geneest hun trauma niet. Volwassen kinderen dragen soms onbewust de rol van trooster of beschermer die ze als kind al hadden. Herken dat patroon. Professionele hulp voor je ouder is hun verantwoordelijkheid; jouw welzijn is ook belangrijk."
      },
      {
        kop: "Grenzen met mededogen",
        tekst: "Bepaal wat je wél en niet aankan: hoe vaak je belt, of je meeluistert naar heftige details, of je samenwoont. Zoek zelf steun — therapeut, vrienden, lotgenoten. Mededogen voor je ouder betekent niet zelf opofferen tot uitputting."
      }
    ],
    doeDit: [
      "Moedig professionele hulp aan zonder het over te nemen.",
      "Stel grenzen aan gesprekken, tijd en emotionele last.",
      "Zoek zelf steun als je ouder's PTSS je raakt."
    ],
    vermijd: [
      "Jezelf verantwoordelijk voelen voor hun herstel of humeur.",
      "Heftige details aanhoren die jou overspoelen.",
      "Denken dat grenzen stellen ondankbaar of egoïstisch is."
    ],
    zegDit: [
      "“Ik wil je steunen, maar ik kan dit gesprek nu niet aan.”",
      "“Professionele hulp is belangrijk — voor jou én voor onze relatie.”"
    ],
    bronnen: [
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over uitputting bij naasten en helpers."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip voor wat iemand meemaakte, zonder alles te dragen."
      },
      {
        boek: "running-on-empty",
        detail: "Over emotionele rollen in familie en wat je zelf nodig hebt."
      }
    ],
    gerelateerd: [
      "naaste-uitgeput",
      "hulp-weigeren-respecteren",
      "gezin-en-trauma"
    ]
  },
  {
    id: "vriend-discloseert-trauma",
    beeld: {
      src: "img/vragen/vriend-discloseert-trauma.jpg"
    },
    vraag: "Mijn vriend(in) vertelt over trauma. Hoe reageer ik goed?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "vriend",
      "disclosure",
      "luisteren",
      "steun",
      "vertrouwen",
      "reactie"
    ],
    kort: "Als iemand je vertrouwt met een traumaverhaal, is luisteren zonder oordelen, zonder direct advies en zonder het over je heen te halen het belangrijkste. Vraag wat ze nú nodig hebben.",
    blokken: [
      {
        tekst: "Je vriend(in) deelt iets zwaars — misschien voor het eerst. Je schrikt, voelt medelijden, woede, of weet niet wat te zeggen. Die disclosure is een geschenk van vertrouwen. Hoe je reageert, blijft vaak hangen."
      },
      {
        kop: "Eerst veiligheid",
        tekst: "Rustig blijven, oogcontact, geen onderbreken om je eigen verhaal te vertellen. Zeg simpel: 'Dank je dat je me dit vertelt.' Vraag: 'Wat heb je nu nodig — luisteren, advies, of samen iets regelen?' Forceer geen details. Geloof wat gezegd wordt — twijfel uiten is beschadigend."
      },
      {
        kop: "Daarna",
        tekst: "Check later op — niet als onderzoeksrechter, maar als vriend: 'Hoe gaat het met je sinds je me vertelde?' Moedig professionele hulp aan als dat passend is, zonder te pushen. Let op je eigen grenzen: zware verhalen kunnen ook op jou inwerken. Dat is normaal."
      }
    ],
    doeDit: [
      "Luister zonder oordelen en zonder je eigen verhaal te centreren.",
      "Vraag wat ze nú nodig hebben.",
      "Check later op en respecteer hun tempo."
    ],
    vermijd: [
      "“Waarom heb je zo lang gewacht?” of “Had je niet eerder iets moeten doen?”",
      "Direct oplossingen pushen of het gesprek over jezelf trekken.",
      "Details vragen uit nieuwsgierigheid."
    ],
    zegDit: [
      "“Dank je dat je me dit vertelt. Ik geloof je.”",
      "“Wat zou je nu het meest helpen?”"
    ],
    bronnen: [
      {
        boek: "carefrontation",
        detail: "Over zorgzaam en eerlijk reageren zonder de ander te overschaduwen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over luisteren vanuit nieuwsgierigheid en mededogen."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over grenzen als vriend of naaste bij zware verhalen."
      }
    ],
    gerelateerd: [
      "niet-zeggen-bij-trauma",
      "hulp-weigeren-respecteren",
      "partner-trauma-steunen"
    ]
  },
  {
    id: "collega-met-trauma",
    beeld: {
      src: "img/vragen/collega-met-trauma.jpg"
    },
    vraag: "Hoe ga ik respectvol om met een collega die trauma heeft?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "collega",
      "werk",
      "professioneel",
      "grenzen",
      "privacy",
      "steun"
    ],
    kort: "Op het werk telt discretie en voorspelbaarheid: niet doorvragen, geen roddels, wel praktische aanpassingen waar nodig. Je bent collega, geen therapeut — wel een veilige omgeving helpen creëren.",
    blokken: [
      {
        tekst: "Je collega lijkt soms afwezig, reageert heftig op feedback, vermijdt bepaalde situaties, of heeft verteld over moeilijke ervaringen. Je wilt niet onhandig zijn, maar ook niet de therapeut spelen."
      },
      {
        kop: "Professionele afstand met warmte",
        tekst: "Respecteer privacy: doorvraag niet, verspreid geen verhalen. Voorspelbaarheid op werk helpt iedereen met een gevoelig zenuwstelsel: duidelijke afspraken, vooraf communiceren bij veranderingen, geen verrassende confrontaties in publiek. Kleine steun — 'ik dek je even', 'neem de tijd' — kan veel betekenen zonder de grens te overschrijden."
      },
      {
        kop: "Wanneer melden?",
        tekst: "Als gedrag de veiligheid of samenwerking ernstig belemmert, hoort dat bij leidinggevende of HR — niet bij roddels. Als iemand acuut in gevaar lijkt, volg het protocol van je organisatie. Anders: normaal blijven omgaan, inclusie tonen, en je eigen grenzen bewaken als het zwaar op je inwerkt."
      }
    ],
    doeDit: [
      "Wees voorspelbaar en respecteer privacy.",
      "Bied praktische steun waar passend — geen therapie op de werkvloer.",
      "Volg bedrijfsprotocol bij zorgen over veiligheid of functioneren."
    ],
    vermijd: [
      "Roddelen of details delen met andere collega's.",
      "Persoonlijke vragen stellen die niet nodig zijn voor het werk.",
      "Gedrag persoonlijk opvatten zonder context."
    ],
    zegDit: [
      "“Laat maar weten als ik iets praktisch kan regelen.”",
      "“Geen probleem — we pakken het rustig aan.”"
    ],
    bronnen: [
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over professionele grenzen en secundaire stress op werk."
      },
      {
        boek: "politics-of-trauma",
        detail: "Over trauma in professionele contexten en wat een ondersteunende omgeving vraagt."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrip zonder stigmatisering."
      }
    ],
    gerelateerd: [
      "secondary-trauma",
      "niet-zeggen-bij-trauma",
      "naaste-uitgeput"
    ]
  },
  {
    id: "niet-zeggen-bij-trauma",
    beeld: {
      src: "img/vragen/niet-zeggen-bij-trauma.jpg"
    },
    vraag: "Wat moet ik níet zeggen tegen iemand met trauma?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: true,
    tags: [
      "niet zeggen",
      "taboes",
      "reacties",
      "steun",
      "schade",
      "luisteren"
    ],
    kort: "Goede bedoelingen kunnen kwetsen: bagatelliseren, vergelijken, dwingen tot vergeven of details vragen — dat alles kan iemand terugtrekken. Minder praten, meer geloven en aanwezig zijn werkt vaak beter.",
    blokken: [
      {
        tekst: "Je wilt troosten en zegt iets als 'Stel je niet zo aan' of 'Het is toch al lang geleden?' — en merkt dat de ander dichtklapt. Veel mensen met trauma horen dit vaker dan je denkt. Bepaalde zinnen, hoe goed bedoeld ook, versterken schaamte en eenzaamheid."
      },
      {
        kop: "Vermijd deze patronen",
        tekst: "Bagatelliseren ('Anderen hebben het erger'), victim blaming ('Waarom ging je mee?'), haast tot vergeven ('Je moet loslaten'), je eigen verhaal centreren ('Ik heb ook…'), details vragen uit nieuwsgierigheid, of druk om aangifte/politie te doen. Ook: 'Je ziet er goed uit' als manier om te twijfelen aan hun lijden."
      },
      {
        kop: "Wat wél helpt",
        tekst: "Kort, warm, concreet: 'Dank je dat je me dit vertelt.' 'Ik geloof je.' 'Wat heb je nodig?' Stilte mag. Aanwezig blijven zonder alles te willen fixen. Als je iets verkeerd zei: erken het, bied geen excuus met uitleg — gewoon 'Sorry, dat was niet oké.'"
      }
    ],
    doeDit: [
      "Geloof wat iemand deelt, zonder te toetsen of het 'erg genoeg' is.",
      "Vraag wat ze nodig hebben in plaats van advies te geven.",
      "Erken en herstel als je per ongeluk iets krenkends zei."
    ],
    vermijd: [
      "“Je moet vergeten / vergeven / doorzetten.”",
      "“Had je niet…?” — elke vorm van beschuldiging.",
      "Je eigen verhaal als antwoord op het verhaal van de ander."
    ],
    zegDit: [
      "“Ik geloof je. Dank je voor je vertrouwen.”",
      "“Ik weet niet wat ik moet zeggen — maar ik ben er.”"
    ],
    bronnen: [
      {
        boek: "what-happened-to-you",
        detail: "Over relationele veiligheid en wat helend versus schadelijk is."
      },
      {
        boek: "carefrontation",
        detail: "Over zorgzame communicatie zonder de ander klein te maken."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over toxische schaamte en wat die versterkt of verlicht."
      }
    ],
    gerelateerd: [
      "vriend-discloseert-trauma",
      "hulp-weigeren-respecteren",
      "vergeven-om-te-helen"
    ]
  },
  {
    id: "hulp-weigeren-respecteren",
    beeld: {
      src: "img/vragen/hulp-weigeren-respecteren.jpg"
    },
    vraag: "Iemand die ik liefheb weigert hulp. Hoe respecteer ik dat?",
    thema: "herstel",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: false,
    tags: [
      "hulp weigeren",
      "autonomie",
      "respect",
      "naaste",
      "grenzen",
      "geduld"
    ],
    kort: "Hulp weigeren is vaak angst, schaamte of eerdere teleurstelling — geen koppigheid. Je kunt de deur openhouden zonder te duwen: aanbod herhalen, praktisch blijven, en je eigen leven niet op pauze zetten.",
    blokken: [
      {
        tekst: "Je ziet iemand lijden, weet dat hulp bestaat — en ze zeggen nee. Of ze stoppen halverwege. Dat voelt machteloos en soms boos makend. Je wilt redden; zij willen (nog) niet gered worden. Dat spanningsveld kennen veel naasten."
      },
      {
        kop: "Autonomie is ook zorg",
        tekst: "Trauma ontneemt mensen vaak controle. Hulp opleggen — zelfs met goede bedoelingen — kan voelen als opnieuw machteloos worden. Weigeren kan bescherming zijn: angst voor overspoeling, wantrouwen in hulpverleners, schaamte, of eerdere slechte ervaringen. Respecteren betekent niet opgeven; het betekent niet duwen tot iemand zich vervreemdt."
      },
      {
        kop: "De deur openhouden",
        tekst: "Bied concreet aan: 'Als je ooit wilt, help ik met zoeken.' Deel informatie zonder druk. Blijf praktisch beschikbaar. Grijp in bij acuut gevaar volgens afspraken of wet. En: leef je eigen leven verder — uitputting maakt je geen betere naaste."
      }
    ],
    doeDit: [
      "Respecteer nee, maar laat weten dat je er bent als ze ooit willen.",
      "Bied praktische, concrete hulp aan in plaats van abstract te preken.",
      "Zoek zelf steun voor je machteloosheid en grenzen."
    ],
    vermijd: [
      "Ultimatums stellen ('therapie of ik ga weg') tenzij veiligheid acuut op spel staat.",
      "Schuld gebruiken om iemand te dwingen.",
      "Je eigen leven stilleggen uit frustratie."
    ],
    zegDit: [
      "“Ik respecteer je nee. Als je van gedachten verandert, ben ik er.”",
      "“Ik kan niet voor je kiezen — wel naast je staan.”"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "Over veiligheid in relaties zonder de ander te overrompelen."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over vertrouwen opbouwen in plaats van forceren."
      },
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over grenzen wanneer hulp geweigerd wordt."
      }
    ],
    gerelateerd: [
      "ouder-ptss-helpen",
      "niet-zeggen-bij-trauma",
      "naaste-uitgeput"
    ]
  },
  {
    id: "naaste-uitgeput",
    beeld: {
      src: "img/vragen/naaste-uitgeput.jpg"
    },
    vraag: "Ik raak uitgeput door iemand met trauma te steunen. Wat nu?",
    thema: "naasten",
    leeftijd: [
      "naaste"
    ],
    uitgelicht: true,
    tags: [
      "uitputting",
      "compassion fatigue",
      "naaste",
      "grenzen",
      "zelfzorg",
      "secondary trauma"
    ],
    kort: "Uitgeput raken als naaste is geen falen — het signaal dat je grenzen overschreden zijn. Zelfzorg, eigen hulp en duidelijke afspraken zijn geen luxe maar voorwaarde om duurzaam te blijven steunen.",
    blokken: [
      {
        tekst: "Je bent altijd beschikbaar, luistert, regelt, kalmeert — en merkt dat je zelf slechter slaapt, prikkelbaarder bent, cynisch wordt, of emotioneel afstand neemt. Misschien draag je de verhalen van de ander als flashbacks mee. Je bent uitgeput."
      },
      {
        kop: "Compassion fatigue",
        tekst: "Naasten en hulpverleners kunnen secondary trauma of compassion fatigue ontwikkelen: het zenuwstelsel van de helper raakt overbelast door andermans pijn. Dat is geen gebrek aan liefde — het is biologie. Zonder herstel word je minder beschikbaar, niet meer."
      },
      {
        kop: "Terug naar duurzaam",
        tekst: "Stel grenzen: vaste tijden, geen nachtelijke crisis-gesprekken zonder nood, eigen therapie of steungroep, rust. Praat eerlijk met degene die je helpt: 'Ik wil blijven steunen, maar ik moet ook op mezelf letten.' Professionele hulp voor hen verlicht jouw rol. Jij bent geen enige reddingsboei."
      }
    ],
    doeDit: [
      "Herken signalen: uitputting, cynisme, slaapproblemen, vermijding.",
      "Stel concrete grenzen en zoek eigen steun of therapie.",
      "Moedig professionele hulp aan bij degene die je ondersteunt."
    ],
    vermijd: [
      "Doorgaan tot je instort uit schuld of loyaliteit.",
      "Denken dat grenzen stellen verraad is.",
      "Alles alleen dragen omdat 'zij het erger hebben'."
    ],
    zegDit: [
      "“Ik wil blijven helpen, maar ik moet ook op mezelf passen.”",
      "“Laten we samen kijken naar extra professionele steun.”"
    ],
    bronnen: [
      {
        boek: "surviving-compassion-fatigue",
        detail: "Over uitputting bij helpers en naasten, en hoe te herstellen."
      },
      {
        boek: "body-keeps-score",
        detail: "Over vicarious trauma en wat het met helpers en naasten doet."
      },
      {
        boek: "hold-me-tight",
        detail: "Over relaties waarin beide partners overeind blijven."
      }
    ],
    gerelateerd: [
      "secondary-trauma",
      "partner-trauma-steunen",
      "hulp-weigeren-respecteren"
    ]
  },
  {
    id: "gezin-en-trauma",
    beeld: {
      src: "img/vragen/gezin-en-trauma.jpg"
    },
    vraag: "Hoe beïnvloedt trauma een heel gezin?",
    thema: "familie",
    leeftijd: [
      "naaste",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "gezin",
      "systeem",
      "kinderen",
      "partner",
      "dynamiek",
      "herstel"
    ],
    kort: "Trauma raakt seldom één persoon: partners, kinderen en andere gezinsleden passen zich aan — soms onbewust. Gezinsherstel vraagt openheid, veiligheid voor iedereen, en dat ook naasten zelf steun krijgen.",
    blokken: [
      {
        tekst: "Eén gezinslid heeft trauma — en plots voelt het hele huishouden anders: spanning, loopgraven, stilte, of overcompensatie. Kinderen nemen soms de rol van trooster op; partners voelen zich buitenspel of overbelast."
      },
      {
        kop: "Het systeem past zich aan",
        tekst: "Gezinnen zijn systemen: als één persoon altijd op scherp staat, wordt het ritme strakker of juist chaotischer. Kinderen registreren stress ook zonder woorden. Onverwerkt trauma kan zich doorgeven via reacties, niet alleen via verhalen — dat doorgeven (intergenerationeel trauma) is geen veroordeling, wel een patroon om te herkennen."
      },
      {
        kop: "Herstel als gezin",
        tekst: "Individuele therapie voor wie het nodig heeft, plus soms gezins- of koppeltherapie. Open praten op een kindvriendelijke manier, routines herstellen, en ruimte voor elk gezinslid om eigen gevoelens te hebben. Niemand hoeft de held of redder te zijn — veiligheid is een gedeelde bouwplaats."
      }
    ],
    doeDit: [
      "Erken dat trauma het hele gezin raakt, niet alleen één persoon.",
      "Zorg dat elk gezinslid — ook kinderen — eigen steun kan krijgen.",
      "Herstel routines en voorspelbaarheid waar mogelijk."
    ],
    vermijd: [
      "Kinderen de volwassenen laten troosten.",
      "Geheimhouding die spanning voedt ('niet praten over papa's problemen').",
      "Denken dat alleen de 'zieke' persoon therapie nodig heeft."
    ],
    zegDit: [
      "“We zijn een team — ieders gevoel telt.”",
      "“Het is oké om hulp te vragen, ook voor ons gezin.”"
    ],
    bronnen: [
      {
        boek: "break-the-cycle",
        detail: "Over generatiepatronen doorbreken in gezinnen."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen bij gezinnen onder stress."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over relationele genezing binnen families."
      }
    ],
    gerelateerd: [
      "opvoeden-met-eigen-trauma",
      "intergenerationeel-trauma",
      "baby-peuter-hechting"
    ]
  },
  {
    id: "school-melden-trauma",
    beeld: {
      src: "img/vragen/school-melden-trauma.jpg"
    },
    vraag: "Moet ik de school informeren over trauma van mijn kind?",
    thema: "naasten",
    leeftijd: [
      "naaste",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "school",
      "CLB",
      "melden",
      "kind",
      "privacy",
      "ondersteuning"
    ],
    kort: "School informeren kan helpen — als het kind er baat bij heeft en je deelt wat nodig is, niet alles. Bespreek met je kind wat oké is; CLB en leerkracht kunnen ondersteunen bij concentratie, angst of gedrag.",
    blokken: [
      {
        tekst: "Je kind heeft thuis of elders iets zwaars meegemaakt, en school merkt gedrag op — of jij vraagt je af of je moet melden. Je wilt bescherming zonder privacy te schenden, en zonder dat je kind gelabeld wordt."
      },
      {
        kop: "Afgewogen delen",
        tekst: "School hoeft geen volledig dossier te krijgen. Wel nuttig: 'Ons kind heeft stress/trauma meegemaakt; concentratie en regulatie zijn nu moeilijker — wat kunnen jullie doen?' Bespreek met je kind (passend bij leeftijd) wat gedeeld wordt. Tieners hebben extra recht op inspraak."
      },
      {
        kop: "Wat school kan doen",
        tekst: "CLB, rustige uitvalruimte, flexibiliteit bij toetsen, geen straf voor angstgedrag, vertrouwenspersoon. Melden is geen zwakte — het voorkomt dat school verkeerd interpreteert. Bij vermoeden van kindermishandeling gelden wettelijke meldplichten; dat is iets anders dan vrijwillig informeren voor ondersteuning."
      }
    ],
    doeDit: [
      "Bespreek met je kind wat gedeeld mag worden.",
      "Deel functionele info: wat school praktisch kan doen, niet elk detail.",
      "Neem contact op met CLB of zorgcoördinator voor afspraken."
    ],
    vermijd: [
      "Alles vertellen zonder instemming van je kind (behalve bij acuut gevaar).",
      "Stil blijven terwijl school je kind verkeerd beoordeelt.",
      "Ervan uitgaan dat melden automatisch stigmatisering betekent."
    ],
    zegDit: [
      "“We delen wat nodig is zodat school je kan ondersteunen — niet om te roddelen.”",
      "“Wat vind jij oké dat ik vertel?”"
    ],
    bronnen: [
      {
        boek: "nurturing-resilience",
        detail: "Over samenwerking tussen thuis, school en hulpverlening."
      },
      {
        boek: "deepest-well",
        detail: "Over vroege stress en het belang van omgevingssteun."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over kinderen en jongeren begrijpen en beschermen."
      }
    ],
    gerelateerd: [
      "kind-trauma-herkennen",
      "tiener-trauma-steunen",
      "huisarts-gesprek-begeleiden"
    ]
  },
  {
    id: "huisarts-gesprek-begeleiden",
    beeld: {
      src: "img/vragen/huisarts-gesprek-begeleiden.jpg"
    },
    vraag: "Hoe bereid ik een huisartsgesprek over trauma voor — voor mezelf of een naaste?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "naaste",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "huisarts",
      "gesprek",
      "doorverwijzing",
      "voorbereiding",
      "hulp",
      "medisch"
    ],
    kort: "Een huisartsgesprek over trauma loopt beter met voorbereiding: noteer klachten, vraag om doorverwijzing, en weet dat je niet alles in één keer hoeft te vertellen. De huisarts is vaak de eerste poort naar gespecialiseerde hulp.",
    blokken: [
      {
        tekst: "Je wilt hulp, maar het gesprek met de huisarts voelt eng: schaamte, angst om niet geloofd te worden, of niet weten waar te beginnen. Of je begeleidt een naaste die zelf niet kan articuleren wat er speelt."
      },
      {
        kop: "Voorbereiden helpt",
        tekst: "Schrijf van tevoren op: lichamelijke klachten (slaap, pijn, hartkloppingen), emotionele klachten (angst, leegte, flashbacks), hoe lang het al speelt, en wat je hoopt (doorverwijzing psycholoog, medicatie bespreken, attest werk). Je hoeft je hele verhaal niet in tien minuten. Begin met: 'Ik denk dat trauma een rol speelt.'"
      },
      {
        kop: "Tijdens en na het gesprek",
        tekst: "Vraag duidelijk om doorverwijzing naar de GGZ of een traumapsycholoog als dat nodig is. Niet elke huisarts kent trauma diep — kom rustig voor jezelf op. Neem iemand mee als steun als dat helpt. Na afloop: noteer wat besproken is en de vervolgafspraken. Geen goede klik? Je mag een tweede mening of een andere huisarts zoeken."
      }
    ],
    doeDit: [
      "Noteer klachten en wat je wilt bereiken vóór het consult.",
      "Vraag expliciet om doorverwijzing of vervolgafspraak.",
      "Neem een vertrouwde persoon mee als dat je helpt praten."
    ],
    vermijd: [
      "Alles minimaliseren uit schaamte tijdens het gesprek.",
      "Wachten tot je 'het perfect kunt uitleggen' voordat je gaat.",
      "Accepteren van afwijzing zonder te vragen naar alternatieven."
    ],
    zegDit: [
      "“Ik vermoed dat trauma hierbij hoort. Ik wil graag doorverwezen worden.”",
      "“Ik hoef niet alles vandaag te vertellen — waar kunnen we beginnen?”"
    ],
    bronnen: [
      {
        boek: "what-happened-to-you",
        detail: "Over trauma begrijpen en gesprekken met zorgverleners."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over hulp zoeken en wat je mag verwachten."
      },
      {
        boek: "narm-practical-guide",
        detail: "Over vervolgstappen en wat te zoeken in gespecialiseerde hulp."
      }
    ],
    gerelateerd: [
      "waar-begin-ik-met-trauma",
      "medicatie-bij-trauma",
      "school-melden-trauma"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 17
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_17 = [
  {
    id: "cptss-vs-depressie",
    beeld: {
      src: "img/vragen/cptss-vs-depressie.jpg"
    },
    vraag: "Wat is het verschil tussen CPTSS en depressie?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "CPTSS",
      "depressie",
      "diagnose",
      "verschil",
      "symptomen",
      "complex trauma"
    ],
    kort: "Depressie en CPTSS delen veel symptomen — leegte, vermoeidheid, hopeloosheid — maar de oorsprong en diepte verschillen. CPTSS gaat vaak over langdurige onveiligheid; depressie is een breder label dat daaronder kan vallen.",
    blokken: [
      {
        tekst: "Je kreeg het label 'depressie', maar voelt dat er méér speelt: triggers, moeite met vertrouwen, een hardnekkig gevoel dat je 'kapot' bent. Dat is geen zeldzaamheid. Complex trauma (CPTSS) en depressie overlappen sterk — en worden niet altijd goed onderscheiden."
      },
      {
        kop: "Wat depressie benoemt",
        tekst: "Depressie beschrijft vooral een cluster van symptomen: somberheid, verlies van interesse, vermoeidheid, schuldgevoel, soms suïcidale gedachten. Het is een diagnose die veel mensen krijgen — soms terecht, soms als eerste verklaring wanneer de diepere context nog niet bekeken is."
      },
      {
        kop: "Wat CPTSS toevoegt",
        tekst: "CPTSS ontstaat door herhaalde of langdurige overweldiging, vaak vroeg in het leven. Naast depressieve klachten komen er vaak thema's bij: moeite om je emoties te kalmeren, negatief zelfbeeld, moeite met relaties, vermijding, schaamte en een zenuwstelsel dat chronisch op scherp staat. Behandeling die alleen de stemming behandelt, mist dan vaak de kern."
      }
    ],
    doeDit: [
      "Vraag je hulpverlener of vroege, herhaalde stress meespeelt — niet alleen 'nu depressief zijn'.",
      "Let op trauma-tekens: triggers, flashbacks, vermijding, relationele patronen.",
      "Zoek traumagerichte hulp als depressiebehandeling alleen de oppervlakte raakt."
    ],
    vermijd: [
      "Denken dat één diagnose alles verklaart.",
      "Trauma negeren omdat 'depressie' al op het recept staat.",
      "Jezelf afmeten aan of je 'depressief genoeg' bent om hulp te verdienen."
    ],
    zegDit: [
      "“Mijn klachten kunnen meer zijn dan alleen depressie.”",
      "“Ik wil begrijpen waar dit vandaan komt, niet alleen het symptoom dempen.”"
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over het onderscheid tussen complex trauma en andere diagnoses."
      },
      {
        boek: "stoning-demons-2",
        detail: "Over symptomen en verloop van CPTSS zonder jezelf te labelen."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe 'normale' diagnoses soms diepere ervaringen maskeren."
      }
    ],
    gerelateerd: [
      "adhd-of-trauma",
      "waarom-voel-ik-me-leeg",
      "waar-begin-ik-met-trauma"
    ]
  },
  {
    id: "cptss-vs-angststoornis",
    beeld: {
      src: "img/vragen/cptss-vs-angststoornis.jpg"
    },
    vraag: "Wat is het verschil tussen CPTSS en een angststoornis?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "CPTSS",
      "angst",
      "angststoornis",
      "GAD",
      "paniek",
      "verschil"
    ],
    kort: "Angst bij trauma is vaak begrijpelijk: je zenuwstelsel leerde dat de wereld gevaarlijk is. Een angststoornis-label beschrijft symptomen; CPTSS verklaart waarom je systeem zo reageert — en vraagt soms andere behandeling.",
    blokken: [
      {
        tekst: "Je bent altijd alert, vermijdt situaties, hebt paniekaanvallen of een constant gevoel van dreiging. De diagnose luidt misschien 'angststoornis'. Maar achter die angst kan een geschiedenis van onveiligheid schuilgaan die het label niet volledig dekt."
      },
      {
        kop: "Angst als alarmsysteem",
        tekst: "Bij een angststoornis ligt de nadruk op overmatige angst, vermijding en lichamelijke spanning zonder altijd naar de oorsprong te kijken. Bij CPTSS is angst vaak een logisch gevolg: je leerde vroeg dat mensen, situaties of je eigen gevoelens gevaarlijk kunnen zijn. Het alarm werkt nog steeds — ook wanneer het objectief veilig is."
      },
      {
        kop: "Behandeling verschilt soms",
        tekst: "Angstbehandeling richt zich vaak op blootstelling (exposure) en het verminderen van angst. Bij complex trauma hoort eerst stevig worden: veiligheid, kalmeren, vertrouwen. Te snel confronteren kan overspoelen. Beide kunnen waar zijn: je hebt angst én een trauma-achtergrond. Het gaat om de volgorde en de diepgang van de hulp."
      }
    ],
    doeDit: [
      "Onderzoek of je angst begon na specifieke gebeurtenissen of al vroeg aanwezig was.",
      "Werk aan regulatie vóór je jezelf dwingt tot blootstelling.",
      "Zoek een therapeut die angst én trauma-achtergrond meeneemt."
    ],
    vermijd: [
      "Angst wegwuiven als 'alleen maar angstig zijn'.",
      "Blootstellingstherapie zonder stabiliteit bij complex trauma.",
      "Denken dat medicatie alleen het alarm oplost zonder de bron te adresseren."
    ],
    zegDit: [
      "“Mijn angst is niet irrationeel — mijn systeem leerde vroeg dat gevaar normaal is.”",
      "“Ik wil eerst veiligheid, dan pas confronteren.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het alarmsysteem permanent gevoeliger maakt."
      },
      {
        boek: "anchored",
        detail: "Over het zenuwstelsel en het verschil tussen echte en vermeende dreiging."
      },
      {
        boek: "stoning-demons-1",
        detail: "Over CPTSS begrijpen als startpunt vóór specifieke diagnoses."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "wat-is-een-trigger",
      "window-of-tolerance"
    ]
  },
  {
    id: "cptss-vs-bipolaire",
    beeld: {
      src: "img/vragen/cptss-vs-bipolaire.jpg"
    },
    vraag: "Kan CPTSS lijken op een bipolaire stoornis?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "CPTSS",
      "bipolair",
      "stemming",
      "diagnose",
      "verwarring",
      "dysregulatie"
    ],
    kort: "Ja — stemmingswisselingen, impulsiviteit en periodes van opgewondenheid of crash kunnen bij CPTSS voorkomen én op bipolaire klachten lijken. Alleen een zorgvuldige anamnese maakt het onderscheid; zelfdiagnose is riskant.",
    blokken: [
      {
        tekst: "De ene dag ben je energiek, impulsief, bijna euforisch; de volgende dag instort je in leegte of woede. Iemand suggereert bipolaire stoornis. Maar complex trauma kan vergelijkbare patronen geven — zonder dat het om een stemmingsstoornis in klassieke zin gaat."
      },
      {
        kop: "Waarom ze op elkaar lijken",
        tekst: "Bij CPTSS kan moeite om je emoties te kalmeren heftig zijn: snel van 0 naar 100, moeite met remmen, periodes van veel energie gevolgd door uitputting. Afhaken (dissociatie), slaaptekort en altijd op scherp staan kunnen ook wisselende toestanden nabootsen. Trauma en bipolaire stoornis kunnen bovendien samen voorkomen."
      },
      {
        kop: "Waar professionals op letten",
        tekst: "Bij bipolaire stoornis zijn er typisch duidelijke episoden van manie of hypomanie en depressie, soms zonder duidelijke externe trigger. Bij CPTSS zijn wisselingen vaak sterk gekoppeld aan triggers, relaties, vermijding of innerlijke delen die afwisselend de leiding nemen. Timing van begin, familiegeschiedenis en respons op medicatie helpen onderscheiden — maar dat is werk voor een professional, niet voor Google."
      }
    ],
    doeDit: [
      "Houd een eenvoudig logboek bij: stemming, slaap, triggers, relaties.",
      "Zoek diagnostiek bij iemand die trauma én stemmingsstoornissen kent.",
      "Wees voorzichtig met stemmingsmedicatie zonder volledig beeld."
    ],
    vermijd: [
      "Jezelf labelen op basis van online symptomenlijsten.",
      "Een diagnose accepteren zonder je trauma-geschiedenis te bespreken.",
      "Denken dat het óf bipolair óf trauma moet zijn — overlap is mogelijk."
    ],
    zegDit: [
      "“Mijn stemmingswisselingen hangen vaak samen met … — klopt dat met wat u ziet?”",
      "“Ik wil een zorgvuldig onderscheid, niet het snelste label.”"
    ],
    bronnen: [
      {
        boek: "myth-of-normal",
        detail: "Over diagnostische verwarring en wat er werkelijk achter gedrag schuilgaat."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over wisselende innerlijke toestanden na trauma."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over moeite om je emoties te kalmeren bij complex trauma."
      }
    ],
    gerelateerd: [
      "cptss-vs-depressie",
      "dissociatie-naast-mezelf",
      "emotionele-flashback-vs-herinnering"
    ]
  },
  {
    id: "trauma-adhd-overlap",
    beeld: {
      src: "img/vragen/trauma-adhd-overlap.jpg"
    },
    vraag: "Hoe overlappen trauma en ADHD?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "ADHD",
      "trauma",
      "overlap",
      "concentratie",
      "impulsiviteit",
      "neurodivergent"
    ],
    kort: "Trauma en ADHD delen symptomen: rusteloosheid, concentratieproblemen, impulsiviteit, emotionele stormen. Vroeg trauma kan zelfs aandacht en impulscontrole beïnvloeden. Beide kunnen tegelijk waar zijn — behandeling moet beide meenemen.",
    blokken: [
      {
        tekst: "Je hebt ADHD, of vermoedt het — maar je trauma-verleden maakt het plaatje onduidelijk. Of omgekeerd: je trauma-symptomen lijken verdacht veel op ADHD. De overlap is groot en wordt in de praktijk vaak onderschat."
      },
      {
        kop: "Gedeelde symptomen",
        tekst: "Altijd op scherp staan lijkt op hyperactiviteit. Afhaken (dissociatie) lijkt op dagdromen. Overlevingsmodus put uit en lijkt op concentratieverlies. Impulsiviteit kan uit angst, vermijding of een overprikkeld zenuwstelsel komen — niet alleen uit een aandachtstekort. Vroege, langdurige stress kan de ontwikkeling van het brein beïnvloeden."
      },
      {
        kop: "Behandeling met beide in beeld",
        tekst: "Als alleen ADHD behandeld wordt terwijl trauma ongemoeid blijft, kan medicatie soms helpen — of juist angst versterken. Als alleen trauma behandeld wordt terwijl ADHD meespeelt, blijven praktische problemen bestaan. Het beste pad erkent beide: stabiliteit en veiligheid eerst, daarna maatwerk voor aandacht, structuur en verwerking."
      }
    ],
    doeDit: [
      "Zoek een professional die neurodiversiteit én trauma begrijpt.",
      "Noteer wanneer concentratie wegvalt: altijd, of vooral bij stress en triggers?",
      "Behandel je zenuwstelsel als basis — structuur en medicatie kunnen daarna volgen."
    ],
    vermijd: [
      "Eén label als volledige verklaring gebruiken.",
      "Trauma negeren omdat ADHD 'het antwoord' lijkt.",
      "ADHD ontkennen omdat 'het vast trauma is' — beide kan."
    ],
    zegDit: [
      "“Mijn brein en mijn verleden werken samen — ik wil beide serieus nemen.”",
      "“Wat helpt mij stabiliteit, niet alleen productiviteit?”"
    ],
    bronnen: [
      {
        boek: "neurodivergent-somatics",
        detail: "Over hoe neurodivergente zenuwstelsels trauma anders ervaren en tot rust komen."
      },
      {
        boek: "deepest-well",
        detail: "Over vroege stress en de impact op ontwikkeling en functioneren."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma aandacht, zelfbeheersing en het kalmeren van emoties beïnvloedt."
      }
    ],
    gerelateerd: [
      "adhd-of-trauma",
      "trauma-autisme-overlap",
      "waarom-ben-ik-altijd-moe"
    ]
  },
  {
    id: "trauma-autisme-overlap",
    beeld: {
      src: "img/vragen/trauma-autisme-overlap.jpg"
    },
    vraag: "Hoe overlappen trauma en autisme?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "autisme",
      "ASS",
      "trauma",
      "overlap",
      "sensorisch",
      "maskeren"
    ],
    kort: "Autistische mensen lopen vaker risico op pesten, misverstanden en onveiligheid — wat trauma kan geven. Trauma kan sociale angst, overprikkeling van de zintuigen en dichtklappen (shutdown) versterken. Het onderscheid is lastig; beide verdienen erkenning en aangepaste hulp.",
    blokken: [
      {
        tekst: "Je bent autistisch, of vermoedt het — en vraagt je af wat 'van het autisme' is en wat van wat je meemaakte komt. Of je herkent trauma-symptomen die ook op autisme lijken: vermijding, spanning, moeite met contact. Het antwoord is vaak: beide beïnvloeden elkaar."
      },
      {
        kop: "Autisme verhoogt kwetsbaarheid",
        tekst: "Autistische kinderen en volwassenen worden vaker gepest, verkeerd begrepen of overspoeld door een wereld die niet op hen is afgestemd. Maskeren — je aanpassen om 'normaal' over te komen — kost enorm veel energie en kan zelf traumatiserend zijn. Onveilige ervaringen stapelen zich op bestaande uitdagingen."
      },
      {
        kop: "Trauma versterkt autistische stress",
        tekst: "Na trauma kunnen prikkels via je zintuigen harder binnenkomen, sociale situaties angstiger voelen en dichtklappen (shutdown) of een meltdown vaker voorkomen. Dat betekent niet dat autisme 'veroorzaakt' is door trauma — maar dat trauma de belasting vergroot. Hulp die rekening houdt met beide — tempo, prikkels, communicatie — werkt beter dan een standaard traumabehandeling."
      }
    ],
    doeDit: [
      "Zoek hulpverleners met kennis van autisme én trauma.",
      "Erken maskeren als mogelijke bron van uitputting en schade.",
      "Pas kalmeer-oefeningen aan bij hoe gevoelig jij bent voor prikkels."
    ],
    vermijd: [
      "Alle klachten toeschrijven aan autisme en trauma negeren.",
      "Trauma behandelen zonder rekening te houden met sensorische overbelasting.",
      "Jezelf dwingen tot 'normaal' sociaal contact."
    ],
    zegDit: [
      "“Ik heb aanpassingen nodig — dat betekent niet dat mijn pijn minder echt is.”",
      "“Mijn zenuwstelsel werkt anders; mijn trauma ook.”"
    ],
    bronnen: [
      {
        boek: "neurodivergent-somatics",
        detail: "Over lichaamsgericht werk afgestemd op neurodivergente zenuwstelsels."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe omgeving en ervaring symptomen vormen, niet alleen 'aanleg'."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrijpen wat er met je gebeurde in plaats van wat er 'mis' is."
      }
    ],
    gerelateerd: [
      "trauma-adhd-overlap",
      "wat-is-hyperalertheid",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "trauma-persoonlijkheidsstoornis",
    beeld: {
      src: "img/vragen/trauma-persoonlijkheidsstoornis.jpg"
    },
    vraag: "Wat is de link tussen trauma en persoonlijkheidsstoornissen?",
    thema: "cptss",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "persoonlijkheidsstoornis",
      "borderline",
      "CPTSS",
      "diagnose",
      "patronen",
      "hechting"
    ],
    kort: "Veel persoonlijkheidsproblematiek — vooral borderline — heeft een trauma-achtergrond. Intense emoties, verlatingsangst en instabiel zelfbeeld kunnen overlevingspatronen zijn, geen 'gebrekkige persoonlijkheid'. Labels kunnen helpen of stigmatiseren.",
    blokken: [
      {
        tekst: "Je kreeg een diagnose als borderline, narcistische of vermijdende persoonlijkheidsstoornis — en voelt je alsof er iets fundamenteel mis is met wie je bent. Maar achter veel persoonlijkheidsproblematiek schuilt vaak een geschiedenis van onveiligheid, misbruik of verwaarlozing."
      },
      {
        kop: "Patronen, geen karakterfout",
        tekst: "Persoonlijkheidsstoornissen beschrijven langdurige patronen in denken, voelen en relaties. Veel daarvan zijn begrijpelijke aanpassingen op vroege stress: moeite met vertrouwen, extreme angst voor verlating, zwart-wit denken, sterke beschermende identiteiten. CPTSS en borderline overlappen zo sterk dat sommigen CPTSS een 'zusterdiagnose' noemen."
      },
      {
        kop: "Labels met nuance",
        tekst: "Een diagnose kan toegang geven tot hulp en erkenning. Maar 'persoonlijkheidsstoornis' klinkt voor velen als veroordeling. Traumagerichte aanpakken — schematherapie, DBT, lichaamsgericht werk — richten zich op patronen en veiligheid, niet op 'wie je bent'. Herstel is mogelijk; je bent geen vaststaand label."
      }
    ],
    doeDit: [
      "Vraag of trauma meespeelt bij je diagnose — en of traumabehandeling passend is.",
      "Zoek hulp die patronen behandelt zonder je te stigmatiseren.",
      "Lees over overlap tussen CPTSS en borderline voor context, niet als zelfdiagnose."
    ],
    vermijd: [
      "Een diagnose als levenslang vonnis zien.",
      "Trauma ontkennen omdat 'het al borderline is'.",
      "Jezelf of anderen reduceren tot een stoornisnaam."
    ],
    zegDit: [
      "“Mijn patronen zijn ontstaan om te overleven — dat is niet mijn hele identiteit.”",
      "“Ik zoek hulp die naar de oorsprong kijkt, niet alleen naar het label.”"
    ],
    bronnen: [
      {
        boek: "hate-you-dont-leave",
        detail: "Over het borderline-patroon begrijpen zonder te stigmatiseren."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege relationele patronen en overlevingsstijlen."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over complex trauma en relationele instabiliteit."
      }
    ],
    gerelateerd: [
      "cptss-vs-angststoornis",
      "wat-is-verlatingsangst",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "collectief-trauma",
    beeld: {
      src: "img/vragen/collectief-trauma.jpg"
    },
    vraag: "Wat is collectief of gemeenschapstrauma?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "recent",
      "naaste"
    ],
    uitgelicht: true,
    tags: [
      "collectief",
      "gemeenschap",
      "samenleving",
      "oorlog",
      "ramp",
      "gedeeld"
    ],
    kort: "Collectief trauma treft een hele groep: oorlog, genocide, pandemie, natuurramp of geweldsincidenten. Je draagt niet alleen je eigen pijn, maar soms ook die van je gemeenschap, familie of generatie — ook als je het zelf niet direct meemaakte.",
    blokken: [
      {
        tekst: "Na een ramp, conflict of maatschappelijke crisis voelt een hele gemeenschap getroffen — niet alleen individuen. Ook jij kunt daaronder vallen: via wat je zag, verloor, hoorde, of via wat je ouders en grootouders doorgaven zonder het uit te spreken."
      },
      {
        kop: "Gedeelde wonden",
        tekst: "Collectief trauma ontstaat wanneer een gebeurtenis een hele groep overspoelt: gedeelde angst, verlies, ontheemding of onderdrukking. Het verandert hoe mensen met elkaar omgaan, hoe kinderen worden opgevoed, welke verhalen wel of niet verteld worden. Intergenerationeel trauma is vaak een vorm hiervan."
      },
      {
        kop: "Heling is ook gemeenschappelijk",
        tekst: "Individuele therapie helpt, maar collectief trauma vraagt soms ook om gemeenschap: rituelen, herdenking, solidariteit, rechtvaardigheid. Je hoeft je schuldig te voelen als je 'minder direct' getroffen bent — impact is niet competitief. Erkenning van wat de groep meemaakte, is deel van herstel."
      }
    ],
    doeDit: [
      "Erken dat je reactie geldig kan zijn, ook als anderen 'erger' hadden.",
      "Zoek verbinding met mensen die hetzelfde herkennen — zonder competitie in leed.",
      "Overweeg zowel individuele als gemeenschapsgerichte vormen van steun."
    ],
    vermijd: [
      "Je pijn minimaliseren omdat 'anderen het erger hadden'.",
      "Collectief leed alleen individualiseren en context negeren.",
      "Denken dat je alleen moet herstellen zonder steun van buitenaf."
    ],
    zegDit: [
      "“Wat onze gemeenschap meemaakte, leeft ook in mij.”",
      "“Heling hoeft niet alleen te zijn — verbinding helpt.”"
    ],
    bronnen: [
      {
        boek: "politics-of-trauma",
        detail: "Over trauma in gemeenschap, lichaam en collectieve genezing."
      },
      {
        boek: "break-the-cycle",
        detail: "Over intergenerationeel trauma en patronen doorgeven."
      },
      {
        boek: "transforming-legacy",
        detail: "Over families en gemeenschappen die trauma doorgeven en doorbreken."
      }
    ],
    gerelateerd: [
      "intergenerationeel-trauma",
      "racisme-trauma",
      "institutioneel-trauma"
    ]
  },
  {
    id: "institutioneel-trauma",
    beeld: {
      src: "img/vragen/institutioneel-trauma.jpg"
    },
    vraag: "Wat is institutioneel trauma?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: false,
    tags: [
      "institutioneel",
      "systeem",
      "macht",
      "onveiligheid",
      "organisatie",
      "misbruik"
    ],
    kort: "Institutioneel trauma ontstaat wanneer machtssystemen — scholen, kerken, zorg, justitie, leger — onveiligheid, misbruik of vernedering mogelijk maken of verhullen. De schade zit niet alleen in één persoon, maar in het vertrouwen in het systeem zelf.",
    blokken: [
      {
        tekst: "Je werd niet alleen gewond door één persoon, maar door een instelling die het toeliet, verborg of onbestraft liet: een school, een religieuze gemeenschap, een zorginstelling, een gevangenis. Dat laat een ander soort spoor na — wantrouwen in gezag en in instellingen."
      },
      {
        kop: "Wanneer het systeem faalt",
        tekst: "Institutioneel trauma ontstaat waar macht ongelijk verdeeld is en waar klachten genegeerd, bestraft of weggepraat worden. Kinderen in pleegzorg, patiënten zonder inspraak, gevangenen, leerlingen die gepest worden zonder dat iemand ingrijpt — het patroon is: je bent machteloos tegenover een systeem dat je zou moeten beschermen."
      },
      {
        kop: "Herstel en erkenning",
        tekst: "Heling vraagt vaak meer dan individuele therapie: erkenning van wat er gebeurde, accountability waar mogelijk, en het herwinnen van agency — het gevoel dat jij weer invloed hebt. Dat kan lang duren. Je wantrouwen tegenover autoriteit is geen overdrevenheid; het is een logische les uit het verleden."
      }
    ],
    doeDit: [
      "Erken dat systeemfalen trauma kan veroorzaken — ook zonder één duidelijke dader.",
      "Zoek hulpverleners die macht en onveiligheid in instituties begrijpen.",
      "Herwin kleine stukjes controle: keuzes, grenzen, betrouwbare relaties buiten het systeem."
    ],
    vermijd: [
      "Denken dat 'het systeem bedoelde het goed' de schade ongedaan maakt.",
      "Jezelf verwijten dat je 'te wantrouwend' bent tegenover autoriteit.",
      "Stil blijven uit angst dat niemand je gelooft — zoek wel veilige kanalen."
    ],
    zegDit: [
      "“Wat het systeem deed of naliet, heeft me geraakt.”",
      "“Mijn wantrouwen is geleerd — niet irrationeel.”"
    ],
    bronnen: [
      {
        boek: "politics-of-trauma",
        detail: "Over trauma in systemen van macht en onderdrukking."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over begrijpen hoe omgeving en systemen gedrag en gezondheid vormen."
      },
      {
        boek: "carefrontation",
        detail: "Over grenzen stellen tegen macht en oude structuren."
      }
    ],
    gerelateerd: [
      "collectief-trauma",
      "racisme-trauma",
      "medische-ingreep-trauma"
    ]
  },
  {
    id: "armoede-trauma",
    beeld: {
      src: "img/vragen/armoede-trauma.jpg"
    },
    vraag: "Hoe hangen armoede en trauma samen?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "armoede",
      "sociaal",
      "stress",
      "onveiligheid",
      "ACE",
      "omgeving"
    ],
    kort: "Armoede is geen karakterfout — het is chronische stress: onzekerheid over eten, huis, veiligheid en waardigheid. Die constante dreiging kan trauma geven, vooral bij kinderen, en versterkt andere vormen van kwetsbaarheid.",
    blokken: [
      {
        tekst: "Geldzorgen zijn niet 'alleen maar stress'. Wanneer je structureel moet vechten om basisbehoeften, huisvesting of veiligheid, leeft je zenuwstelsel in een staat van permanente alertheid. Voor kinderen in armoede is dat vaak de norm — niet de uitzondering."
      },
      {
        kop: "Chronische onveiligheid",
        tekst: "Armoede brengt vaak mee: verhuizingen, lawaai en overbevolking, gebrek aan rust en privacy, schaamte, pesten, minder toegang tot zorg, en soms meer blootstelling aan geweld of verwaarlozing. ACE-onderzoek toont dat sociaaleconomische stress het risico op nadelige ervaringen vergroot. Het is context, geen persoonlijk falen."
      },
      {
        kop: "Erkenning zonder schaamte",
        tekst: "Veel mensen minimaliseren hun pijn omdat 'anderen het erger hebben' of omdat armoede genormaliseerd werd. Maar je zenuwstelsel maakt geen ranglijst. Herstel begint bij erkenning: wat je meemaakte door armoede en onzekerheid, telt. Praktische steun — huisvesting, inkomen, gemeenschap — is ook traumazorg."
      }
    ],
    doeDit: [
      "Erken armoede als stressor, niet als persoonlijke tekortkoming.",
      "Zoek hulp die financiële en praktische barrières begrijpt.",
      "Verbind met gemeenschappen of organisaties die ondersteuning bieden zonder oordeel."
    ],
    vermijd: [
      "Je pijn afmeten aan 'echt' geweld of misbruik alleen.",
      "Armoede internaliseren als schaamte of falen.",
      "Denken dat herstel alleen innerlijk werk is — context telt mee."
    ],
    zegDit: [
      "“Onzekerheid over basisbehoeften is echte stress — geen zwakte.”",
      "“Mijn omstandigheden vormden mijn zenuwstelsel — dat mag erkend worden.”"
    ],
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over ACE's, toxische stress en sociale context."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe omgeving en maatschappij gezondheid beïnvloeden."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over wat er met je gebeurde in de context waarin je opgroeide."
      }
    ],
    gerelateerd: [
      "wat-zijn-aces",
      "collectief-trauma",
      "waarom-voel-ik-me-leeg"
    ]
  },
  {
    id: "racisme-trauma",
    beeld: {
      src: "img/vragen/racisme-trauma.jpg"
    },
    vraag: "Wat is racisme als trauma?",
    thema: "wat-is-trauma",
    leeftijd: [
      "zelf",
      "vroeg",
      "recent"
    ],
    uitgelicht: true,
    tags: [
      "racisme",
      "discriminatie",
      "systemisch",
      "microagressies",
      "identiteit",
      "onveiligheid"
    ],
    kort: "Racisme — persoonlijk en in de samenleving — is voortdurende onveiligheid: kleine alledaagse vernederingen, uitsluiting, geweld en de boodschap dat je minder waard bent. Dat laat diepe sporen na in lichaam, brein en zelfbeeld, generatie na generatie.",
    blokken: [
      {
        tekst: "Racisme is niet 'alleen een mening' of 'iets waar je overheen moet stappen'. Het is herhaalde onveiligheid: de blik, de controle, de uitsluiting, het geweld, de boodschap dat je lichaam of identiteit gevaarlijk of minderwaardig is. Dat is trauma — individueel én collectief."
      },
      {
        kop: "Chronische dreiging",
        tekst: "Trauma door racisme ontstaat door herhaalde discriminatie, kleine alledaagse vernederingen, uitsluiting door instellingen, en geweld uit het verleden dat doorwerkt. Je zenuwstelsel leert alert te blijven in omgevingen die voor anderen veilig zijn. Altijd op scherp staan, vermoeidheid, woede, verdoving en lichamelijke klachten zijn begrijpelijke reacties — geen overdrijving."
      },
      {
        kop: "Heling met context",
        tekst: "Herstel vraagt erkenning van wat je meemaakte — niet wegwuiven ('je ziet het te groot'). Een veilige gemeenschap, trots op wie je bent, lichaamsgericht werk en therapeuten die jouw achtergrond begrijpen, maken verschil. Je hoeft racisme niet alleen te dragen om 'sterk' te zijn."
      }
    ],
    doeDit: [
      "Erken raciale ervaringen als trauma — niet als 'gevoeligheid'.",
      "Zoek steun in gemeenschap en bij hulpverleners met culturele competentie.",
      "Bescherm je energie: je hoeft elke confrontatie uit te vechten."
    ],
    vermijd: [
      "Je pijn minimaliseren omdat 'het erger kan'.",
      "Therapeuten die racisme niet serieus nemen of bagatelliseren.",
      "Denken dat veerkracht betekent dat je alles alleen moet verdragen."
    ],
    zegDit: [
      "“Wat ik meemaak door racisme, is echt en heeft impact.”",
      "“Ik verdien ruimte om te helen — niet om te bewijzen dat het erg genoeg is.”"
    ],
    bronnen: [
      {
        boek: "politics-of-trauma",
        detail: "Over trauma, onderdrukking en collectieve genezing."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe maatschappelijke context gezondheid en lijden vormt."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe chronische dreiging zich nestelt in het lichaam."
      }
    ],
    gerelateerd: [
      "collectief-trauma",
      "institutioneel-trauma",
      "intergenerationeel-trauma"
    ]
  },
  {
    id: "seksueel-misbruik-eerste-stap",
    beeld: {
      src: "img/vragen/seksueel-misbruik-eerste-stap.jpg"
    },
    vraag: "Wat is een eerste stap na seksueel misbruik?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "seksueel misbruik",
      "eerste stap",
      "hulp",
      "veiligheid",
      "erkenning",
      "herstel"
    ],
    kort: "De eerste stap is niet alles vertellen — het is erkennen dat het gebeurde en dat je het verdient om veilig te zijn nú. Praat met iemand die je vertrouwt of zoek gespecialiseerde hulp; je tempo bepaalt hoe snel je gaat.",
    blokken: [
      {
        tekst: "Als je seksueel misbruik hebt meegemaakt — recent of lang geleden — kan de eerste gedachte 'waar begin ik?' zijn. Schaamte, angst en verwardheid zijn normaal. Je hoeft niet alles te weten of te zeggen om hulp te mogen zoeken."
      },
      {
        kop: "Veiligheid eerst",
        tekst: "Begin bij het heden: ben je nú veilig? Zo niet, zoek direct hulp — politie, slachtofferhulp, een vertrouwenspersoon, een crisislijn. Als het verleden is: erken dat het gebeurde en dat de schuld niet bij jou ligt. Dat klinkt simpel, maar voor veel mensen is het de zwaarste en belangrijkste stap."
      },
      {
        kop: "Langzaam en in jouw tempo",
        tekst: "Je hoeft je hele verhaal niet in één keer te vertellen. Een goede therapeut of hulpverlener begint met stabiliteit en vertrouwen. Seksueel misbruik raakt identiteit, intimiteit, lichaam en vertrouwen — herstel is mogelijk, maar vraagt tijd en gespecialiseerde begeleiding. Je mag 'nee' zeggen tegen druk om sneller te gaan."
      }
    ],
    doeDit: [
      "Controleer eerst je huidige veiligheid — dat is prioriteit.",
      "Zoek één betrouwbaar persoon of een gespecialiseerde hulplijn.",
      "Kies hulpverleners met training in seksueel misbruik en trauma."
    ],
    vermijd: [
      "Jezelf dwingen alles te onthullen voordat je je veilig voelt.",
      "De schuld bij jezelf leggen — misbruik is altijd de verantwoordelijkheid van de dader.",
      "Wachten tot het 'erg genoeg' is om hulp te zoeken."
    ],
    zegDit: [
      "“Ik hoef niet alles te vertellen om hulp te verdienen.”",
      "“De schuld is niet van mij — wat er gebeurde, was misbruik.”"
    ],
    bronnen: [
      {
        boek: "healing-emotional-self",
        detail: "Over herstel na emotioneel en seksueel misbruik en het opbouwen van zelfwaarde."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over begrip en herstel zonder schuld en zelfbeschuldiging."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe seksueel trauma het lichaam en de psyche beïnvloedt."
      }
    ],
    gerelateerd: [
      "trauma-seksualiteit-intimiteit",
      "waar-begin-ik-met-trauma",
      "mishandeling-herkennen-volwassene"
    ]
  },
  {
    id: "mishandeling-herkennen-volwassene",
    beeld: {
      src: "img/vragen/mishandeling-herkennen-volwassene.jpg"
    },
    vraag: "Hoe herken ik mishandeling als volwassene?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "mishandeling",
      "huiselijk geweld",
      "herkenning",
      "volwassene",
      "grenzen",
      "veiligheid"
    ],
    kort: "Mishandeling is niet alleen blauwe plekken. Het omvat ook emotioneel geweld, controleren, isoleren, financiële dwang en seksueel geweld. Als volwassene normaliseer je het soms omdat je het als kind al leerde — herkenning is de eerste stap naar veiligheid.",
    blokken: [
      {
        tekst: "Je vraagt je af of wat je meemaakt 'mishandeling' is — of je het overdrijft. Veel volwassenen met een gewelddadige of controlerende achtergrond herkennen patronen pas laat, omdat onveiligheid ooit normaal werd."
      },
      {
        kop: "Meer dan fysiek geweld",
        tekst: "Mishandeling omvat fysiek geweld, maar ook: constante kritiek en vernedering, isolatie van vrienden en familie, controleren van geld of communicatie, dreigen, stalken, seksueel geweld of dwang, en het ondermijnen van je realiteit (gaslighting). Als je bang bent voor iemand in je omgeving, is dat een serieus signaal."
      },
      {
        kop: "Normalisatie door verleden",
        tekst: "Als je als kind mishandeling of controle meemaakte, voelt volwassen mishandeling soms 'vertrouwd' — niet veilig, maar bekend. Dat maakt herkenning moeilijker. Maar vertrouwd betekent niet acceptabel. Veiligheid is een recht, niet iets dat je moet verdienen door te blijven."
      }
    ],
    doeDit: [
      "Let op angst, isolatie en het gevoel 'op eieren lopen' in relaties.",
      "Praat vertrouwelijk met slachtofferhulp, huisarts of een vertrouwenspersoon.",
      "Maak een veiligheidsplan als je nú in gevaar bent — hulp bestaat."
    ],
    vermijd: [
      "Mishandeling afmeten aan alleen zichtbare verwondingen.",
      "Blijven omdat 'het niet altijd slecht is'.",
      "Jezelf verwijten dat je 'te lang gewacht' hebt om weg te gaan."
    ],
    zegDit: [
      "“Angst in mijn eigen huis is geen normale relatie.”",
      "“Ik verdien veiligheid — ook als ik het lang niet kende.”"
    ],
    bronnen: [
      {
        boek: "not-price-of-admission",
        detail: "Over gezonde relaties die geen opoffering van veiligheid vragen."
      },
      {
        boek: "healing-emotional-self",
        detail: "Over emotioneel misbruik herkennen en herstellen."
      },
      {
        boek: "carefrontation",
        detail: "Over grenzen stellen tegen oude en nieuwe vormen van schade."
      }
    ],
    gerelateerd: [
      "seksueel-misbruik-eerste-stap",
      "steeds-onveilige-relaties",
      "kan-ik-geen-nee-zeggen"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 18
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_18 = [
  {
    id: "emdr-hoe-voelt-dat",
    beeld: {
      src: "img/vragen/emdr-hoe-voelt-dat.jpg"
    },
    vraag: "Hoe voelt EMDR — wat gebeurt er in je lichaam?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "EMDR",
      "lichaam",
      "ervaring",
      "sensaties",
      "verwerking",
      "therapie"
    ],
    kort: "EMDR voelt voor iedereen anders: soms warmte of spanning die afneemt, soms beelden die verschuiven, soms vermoeidheid na afloop. Je blijft bij bewustzijn — het is geen trance of hypnose.",
    blokken: [
      {
        tekst: "Je hoort dat EMDR werkt, maar niemand legt uit hóe het voelt. Dat maakt het spannend. Het goede nieuws: je weet altijd waar je bent, je mag pauzeren, en je lichaam doet vaak het meeste werk — niet je verstand alleen."
      },
      {
        kop: "Tijdens de sessie",
        tekst: "Je roept een herinnering op — beeld, gedachte, lichaamsgevoel — terwijl je ogen een beweging volgen of je tikken hoort/voelt. Veel mensen merken: spanning in borst of buik, tranen, warmte, trilling, of juist verdoving die langzaam optrekt. Beelden kunnen vervagen of veranderen; de emotionele lading kan afnemen. Soms komt er woede of verdriet — dat hoort bij verwerking, niet bij falen."
      },
      {
        kop: "Na de sessie",
        tekst: "Veel mensen voelen zich moe, emotioneel of juist lichter. Soms dromen ze meer de nacht erna. Het is geen pijnloos proces, maar ook geen marteling: een goede therapeut doseert en checkt voortdurend. Als het te veel wordt, zeg je stop — dat is onderdeel van de methode."
      }
    ],
    doeDit: [
      "Bespreek vooraf wat je kunt verwachten en wanneer je mag pauzeren.",
      "Merk op wat je lichaam doet — dat is waardevolle informatie voor je therapeut.",
      "Plan rust na zware sessies; drink water en beweeg zachtjes."
    ],
    vermijd: [
      "Denken dat je 'niets voelt' betekent dat EMDR niet werkt.",
      "Doorgaan wanneer je overspoeld raakt uit angst om te falen.",
      "EMDR vergelijken met wat anderen vertellen — jouw ervaring telt."
    ],
    zegDit: [
      "“Ik voel … in mijn lichaam — is dat normaal?”",
      "“Dit is genoeg voor vandaag — ik wil pauzeren.”"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe EMDR het lichaam en de herverwerking van herinneringen betrekt."
      },
      {
        boek: "trauma-and-memory",
        detail: "Over hoe herinneringen als sensaties en beelden veranderen tijdens verwerking."
      },
      {
        boek: "in-an-unspoken-voice",
        detail: "Over lichaamservaringen tijdens trauma en herstel."
      }
    ],
    gerelateerd: [
      "wat-verwacht-van-emdr",
      "emdr-complex-trauma",
      "moet-ik-herbeleven"
    ]
  },
  {
    id: "emdr-complex-trauma",
    beeld: {
      src: "img/vragen/emdr-complex-trauma.jpg"
    },
    vraag: "Werkt EMDR bij complex trauma?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "EMDR",
      "complex trauma",
      "CPTSS",
      "fasering",
      "stabilisatie",
      "gefaseerd"
    ],
    kort: "EMDR kan helpen bij complex trauma, maar vraagt meer voorbereiding: stabiliteit, vertrouwen en gefaseerd werken. Te snel duiken zonder fundament kan overspoelen — de volgorde telt.",
    blokken: [
      {
        tekst: "EMDR staat bekend als effectief bij enkelvoudig trauma. Bij complex trauma — herhaald, vroeg, relationeel — is het genuanceerder. Het kan werken, maar niet als eerste en snelle stap zonder stabiliteit."
      },
      {
        kop: "Eerst stevig worden",
        tekst: "Bij CPTSS is er vaak afhaken (dissociatie), een hardnekkige innerlijke criticus, moeite met vertrouwen en een kleine zone die je aankunt. EMDR vraagt dat je een herinnering kunt ophalen zonder te verdrinken. Daarom bouw je eerst: aarden (grounding), een veilig anker, manieren om met klachten om te gaan, en een stabiele band met je therapeut. Soms maanden, soms langer."
      },
      {
        kop: "Gefaseerd en gedoseerd",
        tekst: "Bij complex trauma werkt een goede EMDR-therapeut in fasen: eerst recente triggers, dan middelzware herinneringen, pas later de zwaarste. Soms combineert ze EMDR met lichaamswerk of delenwerk. EMDR is dan één gereedschap in een groter herstelplan — geen snelkoppeling naar 'klaar'."
      }
    ],
    doeDit: [
      "Zoek een EMDR-therapeut met ervaring in complex trauma en afhaken (dissociatie).",
      "Vraag duidelijk naar werken in stappen en eerst stevig worden vóór verwerking.",
      "Wees eerlijk over afhaken (dissociatie), zelfbeschadiging of overspoeling."
    ],
    vermijd: [
      "Diep duiken omdat 'EMDR snel werkt'.",
      "Therapeuten die het eerst stevig worden overslaan bij CPTSS.",
      "Denken dat EMDR alleen al voldoende is bij jarenlange onveiligheid."
    ],
    zegDit: [
      "“Ik heb complex trauma — hoe faseert u EMDR?”",
      "“Ik wil eerst stabieler worden vóór we de zwaarste herinneringen aanpakken.”"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over in stappen werken en eerst stevig worden vóór de zware verwerking."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks en waarom tempo cruciaal is."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over delen en afhaken (dissociatie) bij EMDR en complex trauma."
      }
    ],
    gerelateerd: [
      "emdr-hoe-voelt-dat",
      "wat-verwacht-van-emdr",
      "therapie-erger-maken"
    ]
  },
  {
    id: "somatic-experiencing-intro",
    beeld: {
      src: "img/vragen/somatic-experiencing-intro.jpg"
    },
    vraag: "Wat is Somatic Experiencing — een korte introductie",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "Somatic Experiencing",
      "SE",
      "lichaam",
      "zenuwstelsel",
      "ontlading",
      "Peter Levine"
    ],
    kort: "Somatic Experiencing (SE) is lichaamsgerichte traumatherapie: je volgt zachtjes sensaties en helpt je zenuwstelsel vastgelopen overlevingsenergie alsnog te voltooien — zonder alles opnieuw te beleven.",
    blokken: [
      {
        tekst: "Somatic Experiencing, ontwikkeld door Peter Levine, gaat uit van een eenvoudig idee: trauma is vastgehouden overlevingsenergie. Het lichaam wil die energie voltooien en loslaten — maar dat lukte niet toen. SE helpt dat alsnog, stap voor stap."
      },
      {
        kop: "Hoe een sessie verloopt",
        tekst: "Je hoeft je hele verhaal niet te vertellen. De therapeut vraagt naar wat je nú voelt in je lichaam — spanning, warmte, trilling, zwaarte — en helpt je die sensaties gedoseerd te volgen. Soms komt er schudden, diepe ademhaling of emotie. Het tempo is langzaam; je mag altijd pauzeren. Het doel is niet herbeleven, maar voltooien."
      },
      {
        kop: "Voor wie?",
        tekst: "SE kan helpen bij flashbacks, langdurige spanning, afhaken (dissociatie), slaapproblemen en het gevoel 'vast' te zitten. Het werkt het best met een opgeleide SE-therapeut — niet als doe-het-zelf bij zwaar afhaken (dissociatie) of onverwerkte trauma's."
      }
    ],
    doeDit: [
      "Zoek een therapeut met officiële SE-opleiding.",
      "Begin bij kleine lichaamsignalen — niet bij de zwaarste herinnering.",
      "Meld dissociatie of overspoeling meteen; dosering is essentieel."
    ],
    vermijd: [
      "Intense ontlading najagen zonder begeleiding.",
      "Denken dat je eerst alles moet kunnen benoemen.",
      "SE als snelle fix zien — het is geleidelijk werk."
    ],
    zegDit: [
      "“Ik voel spanning in mijn … — kunnen we daar beginnen?”",
      "“Dit tempo is genoeg — ik wil niet overspoelen.”"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Het fundament van SE: trauma als vastgelopen overlevingsenergie."
      },
      {
        boek: "in-an-unspoken-voice",
        detail: "Over lichaamsgerichte heling en sensatie-werk."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over een lichaamsgerichte aanpak van vroeg en complex trauma."
      }
    ],
    gerelateerd: [
      "wat-is-somatische-therapie",
      "lichaam-reageert-zonder-gevaar",
      "dissociatie-naast-mezelf"
    ]
  },
  {
    id: "dbt-skills-thuis",
    beeld: {
      src: "img/vragen/dbt-skills-thuis.jpg"
    },
    vraag: "Kan ik DBT-vaardigheden thuis oefenen?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "DBT",
      "vaardigheden",
      "thuis",
      "regulatie",
      "coping",
      "werkboek"
    ],
    kort: "Ja — veel DBT-vaardigheden (Dialectical Behavior Therapy) kun je thuis oefenen: aandacht (mindfulness), een crisis doorkomen, je emoties kalmeren en omgaan met stress. Bij complex trauma werkt het het best als aanvulling op therapie, niet als vervanging.",
    blokken: [
      {
        tekst: "DBT (Dialectical Behavior Therapy) leert concrete vaardigheden voor intense emoties, impulsen en relationele stormen. Veel mensen met trauma herkennen zich — en vragen of ze dit zelf kunnen oefenen. Het antwoord is: gedeeltelijk ja, met een paar kanttekeningen."
      },
      {
        kop: "Wat je thuis kunt doen",
        tekst: "Werkboeken en apps bieden oefeningen: de STOP-vaardigheid, ijswater of intense beweging bij crisis, emotie benoemen en temperen, 'radicaal aanvaarden' van wat je niet kunt veranderen, en vaardigheden om moeilijke gesprekken te voeren. Korte, dagelijkse oefeningen werken beter dan af en toe een marathon."
      },
      {
        kop: "Wanneer begeleiding nodig is",
        tekst: "DBT werd ontwikkeld voor heftige, moeilijk te kalmeren emoties en zelfbeschadiging. Bij complex trauma kan zelfstandig oefenen helpen om steviger te worden — maar diepere verwerking vraagt vaak een therapeut. Als je afhaakt (dissocieert), in crisis bent of zelfbeschadiging overweegt, is professionele begeleiding essentieel. Thuis oefenen is aanvulling, geen solo-missie."
      }
    ],
    doeDit: [
      "Start met één vaardigheid — bijvoorbeeld crisis-overbrugging of ademhaling.",
      "Gebruik een CPTSS- of DBT-werkboek met stap-voor-stap oefeningen.",
      "Combineer met therapie als je symptomen heftig of chronisch zijn."
    ],
    vermijd: [
      "DBT als enige behandeling zien bij onverwerkt complex trauma.",
      "Jezelf verwijten als een vaardigheid niet meteen werkt.",
      "Crisis-overbrugging misbruiken om gevoelens permanent te vermijden."
    ],
    zegDit: [
      "“Ik oefen DBT om te reguleren — niet om alles weg te drukken.”",
      "“Als het te veel wordt, zoek ik hulp — dat hoort bij DBT.”"
    ],
    bronnen: [
      {
        boek: "dbt-cptsd-workbook",
        detail: "DBT-vaardigheden specifiek afgestemd op complex trauma."
      },
      {
        boek: "cptsd-coping-workbook",
        detail: "Concrete vaardigheden om met klachten om te gaan in het dagelijks leven met CPTSS."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over stabiliseren vóór diepere verwerking."
      }
    ],
    gerelateerd: [
      "window-of-tolerance-verbreden",
      "wat-is-grounding",
      "flashback-wat-doe-ik"
    ]
  },
  {
    id: "ifs-zelf-oefenen",
    beeld: {
      src: "img/vragen/ifs-zelf-oefenen.jpg"
    },
    vraag: "Kan ik IFS zelf oefenen — delenwerk thuis?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "IFS",
      "delen",
      "zelf",
      "thuis",
      "oefenen",
      "innerlijk kind"
    ],
    kort: "Basis-IFS kun je voorzichtig thuis verkennen: delen benoemen, nieuwsgierigheid oefenen, vanuit het Zelf reageren. Bij zwaar afhaken (dissociatie), gedachten aan zelfdoding of onverwerkt trauma is begeleiding sterk aanbevolen.",
    blokken: [
      {
        tekst: "Internal Family Systems (IFS) leert je om met 'delen' van jezelf te werken — beschermers, een innerlijke criticus, een gekwetst kind — vanuit een kalm 'Zelf'. Veel mensen vragen: kan ik dit alleen?"
      },
      {
        kop: "Wat thuis kan",
        tekst: "Je kunt beginnen met observeren: wanneer schiet een deel op? Welke stem is dat — de criticus, de pleaser, de verdoofde? Je kunt vragen stellen: 'Wat probeer je voor mij te doen?' en even wachten op een antwoord, zonder het deel weg te duwen. Werkboeken bieden gestructureerde oefeningen. Korte check-ins, dagboek, of een zachte innerlijke dialoog kunnen al veel doen."
      },
      {
        kop: "Wanneer je hulp nodig hebt",
        tekst: "Bij ernstig afhaken (dissociatie), delen met gedachten aan zelfdoding, of wanneer delen je overspoelen, is een IFS-therapeut belangrijk. Zelf werken kan je dan uit balans brengen. IFS is krachtig precies omdat het diep gaat — dat vraagt soms een veilige ander die mee helpt kalmeren. Thuis oefenen is een aanvulling, geen vervanging bij zware trauma's."
      }
    ],
    doeDit: [
      "Begin met benoemen: 'een deel van mij voelt …'",
      "Oefen nieuwsgierigheid in plaats van vechten met delen.",
      "Gebruik een IFS-werkboek en overweeg therapie bij heftige reacties."
    ],
    vermijd: [
      "Delen 'dwingen' naar voren of intense delen alleen confronteren.",
      "IFS gebruiken om therapie te vermijden bij ernstige symptomen.",
      "Denken dat je 'fout' doet als delen niet meteen antwoorden."
    ],
    zegDit: [
      "“Een deel van mij is bang — ik wil het horen, niet wegsturen.”",
      "“Ik leid vanuit rust, niet vanuit de criticus.”"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "De basis van IFS: geen slechte delen, alleen beschermende rollen."
      },
      {
        boek: "ifs-workbook",
        detail: "Praktische oefeningen om zelf met delenwerk te starten."
      },
      {
        boek: "tender-parts",
        detail: "Zachte introductie tot delenwerk voor wie overweldigd is door jargon."
      }
    ],
    gerelateerd: [
      "innerlijke-criticus",
      "waarom-voel-ik-me-leeg",
      "dissociatieve-identiteit"
    ]
  },
  {
    id: "schematherapie-wat-is",
    beeld: {
      src: "img/vragen/schematherapie-wat-is.jpg"
    },
    vraag: "Wat is schematherapie?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "schematherapie",
      "schema's",
      "modi",
      "patronen",
      "jeugd",
      "therapie"
    ],
    kort: "Schematherapie werkt met diepe patronen uit je jeugd — 'schema's' zoals 'ik ben niet de moeite waard' — en de toestanden (modi) waarin je schiet. De therapeutische relatie is een kerninstrument voor heling.",
    blokken: [
      {
        tekst: "Schematherapie richt zich op patronen die vroeg ontstonden en je volwassen leven sturen: verlatingsangst, perfectionisme, onderwerping, emotionele deprivatie. Het is ontwikkeld voor langdurige, complexe klachten — vaak bij mensen met trauma-achtergrond."
      },
      {
        kop: "Schema's en modi",
        tekst: "Een schema is een diepe overtuiging over jezelf of anderen, gevormd door herhaalde jeugdervaringen. Wanneer een schema activeert, schiet je in een 'modus': het gekwetste kind, de straffende ouder, de overlevende. Schematherapie helpt je die modi herkennen en vanuit een gezonde volwassene — of met hulp van de therapeut — te reageren."
      },
      {
        kop: "Alsnog goede zorg (limited reparenting)",
        tekst: "Een bijzonder element is 'limited reparenting': binnen veilige grenzen geeft de therapeut je iets van wat je vroeg miste — erkenning, warmte, betrouwbaarheid. Dat is geen vervanging van je ouders, maar een nieuwe, goede ervaring die oude tekorten deels aanvult. Het vraagt een langdurige, betrouwbare band met je therapeut."
      }
    ],
    doeDit: [
      "Onderzoek of je herkent: 'ik val altijd terug in hetzelfde patroon'.",
      "Zoek een schematherapeut met ervaring in trauma.",
      "Wees geduldig — schematherapie is langdurig werk met diepe patronen."
    ],
    vermijd: [
      "Denken dat inzicht alleen al patronen doorbreekt.",
      "Schematherapie verwachten als korte, snelle behandeling.",
      "De therapeutische relatie onderschatten — die is deel van de methode."
    ],
    zegDit: [
      "“Dit patroon kent me al sinds mijn jeugd — ik wil het begrijpen.”",
      "“Welke modus zit er nu bij mij op de stoel?”"
    ],
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege patronen en relationele heling — verwant aan schemadenken."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over overlevingspatronen en de innerlijke criticus bij complex trauma."
      },
      {
        boek: "running-on-empty",
        detail: "Over emotionele tekorten die diepe schema's kunnen voeden."
      }
    ],
    gerelateerd: [
      "trauma-persoonlijkheidsstoornis",
      "wat-is-emotionele-verwaarlozing",
      "steeds-onveilige-relaties"
    ]
  },
  {
    id: "neurofeedback-wie",
    beeld: {
      src: "img/vragen/neurofeedback-wie.jpg"
    },
    vraag: "Voor wie is neurofeedback bij trauma?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "neurofeedback",
      "brein",
      "regulatie",
      "dissociatie",
      "zenuwstelsel",
      "behandeling"
    ],
    kort: "Neurofeedback kan helpen bij hardnekkige moeite om tot rust te komen, afhaken (dissociatie) of altijd op scherp staan, wanneer andere methodes onvoldoende werken. Het is geen doe-het-zelf methode — je hebt een ervaren behandelaar nodig.",
    blokken: [
      {
        tekst: "Neurofeedback meet hersenactiviteit en geeft meteen feedback, zodat je brein leert soepeler te reageren op stress. Bij trauma klinkt dat aantrekkelijk — maar voor wie is het echt bedoeld?"
      },
      {
        kop: "Wanneer het overwogen wordt",
        tekst: "Neurofeedback wordt soms ingezet bij vroeg of complex trauma wanneer tot rust komen maar niet lukt: ernstig afhaken (dissociatie), slaapproblemen, altijd op scherp staan of concentratieproblemen die andere behandeling niet voldoende verlicht. Het werkt indirect: je traint het zenuwstelsel via het brein, niet door herinneringen te bespreken."
      },
      {
        kop: "Geen wondermiddel",
        tekst: "Het is kostbaar, vraagt meerdere sessies en een gekwalificeerde behandelaar met trauma-ervaring. Het vervangt geen traumatherapie of relationele heling — het kan wel ruimte creëren om die andere werkzaam te maken. Onderzoek is bemoedigend, maar het is niet voor iedereen nodig of geschikt."
      }
    ],
    doeDit: [
      "Overweeg neurofeedback als aanvulling wanneer regulatie vastzit.",
      "Zoek een behandelaar met ervaring in ontwikkelingstrauma.",
      "Bespreek het in je traumabehandeling — niet los ervan starten."
    ],
    vermijd: [
      "Neurofeedback als enige behandeling zien.",
      "Doe-het-zelf apparatuur zonder begeleiding gebruiken.",
      "Denken dat hersentraining herinneringen verwerkt zonder therapie."
    ],
    zegDit: [
      "“Kan neurofeedback mijn regulatie ondersteunen vóór diepere verwerking?”",
      "“Ik zoek een behandelaar met trauma-ervaring, niet alleen techniek.”"
    ],
    bronnen: [
      {
        boek: "neurofeedback-developmental",
        detail: "Over neurofeedback bij vroeg en ontwikkelingstrauma."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe het brein werkt en verschillende aanpakken bij trauma."
      },
      {
        boek: "anchored",
        detail: "Over het kalmeren van je zenuwstelsel als basis voor herstel."
      }
    ],
    gerelateerd: [
      "wat-is-hyperalertheid",
      "dissociatie-naast-mezelf",
      "medicatie-bij-trauma"
    ]
  },
  {
    id: "imagery-rehearsal-nachtmerries",
    beeld: {
      src: "img/vragen/imagery-rehearsal-nachtmerries.jpg"
    },
    vraag: "Wat is imagery rehearsal bij nachtmerries?",
    thema: "slaap",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "imagery rehearsal",
      "nachtmerries",
      "dromen",
      "slaap",
      "techniek",
      "IRT"
    ],
    kort: "Imagery rehearsal (IRT) is een bewezen techniek: je schrijft je nachtmerrie op en geeft haar overdag een nieuw, veiliger einde. Door dat nieuwe verhaal te oefenen, verandert de droom vaak vanzelf — zonder alles te moeten analyseren.",
    blokken: [
      {
        tekst: "Nachtmerries houden je wakker en laten je bang zijn om te slapen. Imagery rehearsal biedt een concrete, zelf uit te voeren techniek die bij trauma-nachtmerries vaak helpt — soms binnen enkele weken."
      },
      {
        kop: "Hoe het werkt",
        tekst: "Je noteert de nachtmerrie in de derde persoon ('hij/zij'), alsof je een film beschrijft. Daarna bedenk je een nieuw einde — niet fantasievol onrealistisch, maar veilig genoeg dat je lichaam kan ontspannen. Je leest dat nieuwe verhaal dagelijks voor je gaat slapen, en visualiseert het kort. Het brein herhaalt patronen; jij geeft het een nieuw patroon."
      },
      {
        kop: "Wanneer extra hulp nodig is",
        tekst: "IRT werkt goed bij terugkerende nachtmerries, ook bij PTSS. Bij zeer heftige of frequente nachtmerries, suïcidale gedachten na het wakker worden, of wanneer dromen je dag blokkeren, hoort ook professionele hulp — EMDR, dromenwerk of traumatherapie. IRT is een krachtig hulpmiddel, geen vervanging bij ernstige ontregeling."
      }
    ],
    doeDit: [
      "Schrijf de nachtmerrie op en verander alleen het einde — houd de rest gelijk.",
      "Oefen het nieuwe verhaal dagelijks, bij voorkeur 's avonds.",
      "Combineer met slaaphygiëne en grounding als je vaak wakker schrikt."
    ],
    vermijd: [
      "Het nieuwe einde te dramatisch of onrealistisch maken.",
      "IRT opgeven na drie dagen — het vraagt vaak twee tot vier weken.",
      "Nachtmerries negeren die je dagelijks functioneren blokkeren."
    ],
    zegDit: [
      "“Ik geef mijn droom een veiliger einde — mijn brein mag dat leren.”",
      "“Ik hoef de droom niet te begrijpen om haar te veranderen.”"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over nachtmerries bij trauma en imagery rehearsal in de praktijk."
      },
      {
        boek: "body-keeps-score",
        detail: "Over slaap, nachtmerries en het alarmsysteem na trauma."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over slaap en omgaan met klachten als onderdeel van stevig worden."
      }
    ],
    gerelateerd: [
      "slaap-nachtmerries",
      "wat-is-hyperalertheid",
      "emdr-hoe-voelt-dat"
    ]
  },
  {
    id: "trauma-informed-yoga",
    beeld: {
      src: "img/vragen/trauma-informed-yoga.jpg"
    },
    vraag: "Wat is trauma-informed yoga?",
    thema: "lichaam",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "yoga",
      "trauma-informed",
      "lichaam",
      "beweging",
      "veiligheid",
      "keuze"
    ],
    kort: "Trauma-informed yoga past yoga aan voor mensen met trauma: keuze en controle staan centraal, aanraking en houdingen zijn optioneel, en de docent weet dat het lichaam triggers kan hebben. Het is geen gewone sportles.",
    blokken: [
      {
        tekst: "Yoga kan heilzaam zijn na trauma — adem, beweging, aanwezigheid in het lichaam. Maar standaard yoga kan ook triggeren: onverwachte aanraking, houdingen die kwetsbaar voelen, of een docent die 'gewoon door je grens heen' duwt. Trauma-informed yoga doet het anders."
      },
      {
        kop: "Keuze en controle",
        tekst: "In trauma-informed yoga bepaal jij: je mag houdingen aanpassen, wegblijven, je ogen open houden, de ruimte verlaten. De docent vraagt toestemming vóór aanraking — of raakt helemaal niet aan. Er is geen 'push through the pain'. Het doel is veiligheid en verbinding met je lichaam, niet perfecte poses."
      },
      {
        kop: "Wanneer het past",
        tekst: "Het kan helpen bij spanning, afhaken (dissociatie) en het leren dat je lichaam weer een thuis kan zijn. Kies een docent met duidelijke trauma-training. Begin zacht; als je overspoeld raakt, is dat informatie — geen falen. Yoga vervangt geen traumatherapie, maar kan een waardevolle aanvulling zijn."
      }
    ],
    doeDit: [
      "Zoek expliciet trauma-informed of trauma-sensitive yoga.",
      "Oefen keuze: pas aan, stop, of doe alleen wat veilig voelt.",
      "Combineer met regulatie-oefeningen en therapie bij heftige triggers."
    ],
    vermijd: [
      "Docenten die aanraking zonder toestemming normaliseren.",
      "Jezelf dwingen houdingen vol te houden die triggeren.",
      "Yoga als enige behandeling bij onverwerkt complex trauma."
    ],
    zegDit: [
      "“Ik pas deze houding aan — dat is mijn keuze.”",
      "“Geen aanraking vandaag, dank u.”"
    ],
    bronnen: [
      {
        boek: "heal-body-heal-mind",
        detail: "Over lichaamsgerichte oefeningen en mindfulness bij trauma."
      },
      {
        boek: "becoming-the-body",
        detail: "Over weer thuiskomen in je lichaam na trauma."
      },
      {
        boek: "mindful-somatic-awareness",
        detail: "Over lichaamsbewustzijn en angstverlichting via beweging."
      }
    ],
    gerelateerd: [
      "wat-is-grounding",
      "somatic-experiencing-intro",
      "lichaam-reageert-zonder-gevaar"
    ]
  },
  {
    id: "veiligheidsplan-maken",
    beeld: {
      src: "img/vragen/veiligheidsplan-maken.jpg"
    },
    vraag: "Hoe maak ik een veiligheidsplan?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "veiligheidsplan",
      "crisis",
      "coping",
      "zelfbeschadiging",
      "noodplan",
      "stappen"
    ],
    kort: "Een veiligheidsplan legt vast wat je doet als je overspoeld raakt: signalen, manieren om te kalmeren, mensen om te bellen en noodstappen. Schrijf het op als je relatief stabiel bent — dan hoef je in crisis niet alles te bedenken.",
    blokken: [
      {
        tekst: "In een crisis is helder denken moeilijk. Een veiligheidsplan is een concreet document — op papier of in je telefoon — dat je vooraf maakt wanneer het beter met je gaat. Het is geen teken van zwakte; het is verstandig."
      },
      {
        kop: "Wat erin hoort",
        tekst: "Typisch bevat een plan: (1) vroege waarschuwingssignalen — slechte slaap, prikkelbaarheid, je terugtrekken; (2) wat jezelf kalmeert — adem, koud water, bewegen, muziek, aarden; (3) mensen om te bellen of te appen, in volgorde; (4) professionele hulplijnen; (5) stappen om direct gevaar te vermijden — middelen wegleggen, een veilige plek zoeken; (6) wat je therapeut of huisarts moet weten."
      },
      {
        kop: "Maak het persoonlijk",
        tekst: "Wat voor jou werkt, staat erin — niet wat 'hoort'. Test je plan in lichte momenten: weet je het nummer? Werkt het kalmeren echt? Pas het aan na elke crisis: wat hielp, wat niet? Deel het met iemand die je vertrouwt, of met je therapeut."
      }
    ],
    doeDit: [
      "Schrijf je plan op als je relatief kalm bent — niet midden in crisis.",
      "Zet nummers en stappen letterlijk in je telefoon, makkelijk vindbaar.",
      "Bespreek het met je therapeut en pas het aan naarmate je leert wat werkt."
    ],
    vermijd: [
      "Een plan maken en nooit meer naar kijken.",
      "Alleen op wilskracht vertrouwen in zware momenten.",
      "Jezelf verwijten als je het plan een keer niet volgt — het is een hulpmiddel."
    ],
    zegDit: [
      "“Ik heb een plan voor als het te veel wordt — dat is zorg voor mezelf.”",
      "“Stap 1 voor mij is … — dat weet ik nu al.”"
    ],
    bronnen: [
      {
        boek: "cptsd-coping-workbook",
        detail: "Over crisisvaardigheden en concrete plannen bij overspoeling."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over stevig worden en je voorbereiden op moeilijke momenten."
      },
      {
        boek: "dbt-cptsd-workbook",
        detail: "Over een crisis doorkomen en duidelijke noodstappen."
      }
    ],
    gerelateerd: [
      "wat-is-veiligheidsplan",
      "flashback-wat-doe-ik",
      "wat-is-grounding"
    ]
  },
  {
    id: "window-of-tolerance-verbreden",
    beeld: {
      src: "img/vragen/window-of-tolerance-verbreden.jpg"
    },
    vraag: "Hoe verbreed ik mijn window of tolerance?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "window of tolerance",
      "regulatie",
      "tolerantie",
      "zenuwstelsel",
      "oefenen",
      "herstel"
    ],
    kort: "Je 'window of tolerance' — de zone waarin je spanning aankunt — maak je breder via veel kleine ervaringen van veiligheid en kalmte, niet door jezelf te overweldigen. Geduld, aarden (grounding) en soms therapie vergroten de zone waarin je kunt voelen zonder af te haken of in paniek te raken.",
    blokken: [
      {
        tekst: "Je 'window of tolerance' is de zone waarin je kunt voelen, denken en reageren zonder dat je erbovenuit schiet (paniek, woede) of eronder zakt (afhaken, verdoving). Na trauma is die zone vaak smal. Breder maken kan — maar niet door hard te pushen."
      },
      {
        kop: "Kleine herhalingen",
        tekst: "Je zenuwstelsel leert via herhaling. Korte dagelijkse oefeningen — adem, aarden (grounding), zachte beweging, voorspelbare routines, veilige sociale contacten — tellen op. Elke keer dat je een lichte trigger opvangt en weer tot rust komt, leert je systeem: ik kan dit aan. Dat maakt de zone geleidelijk breder."
      },
      {
        kop: "Niet over de rand duwen",
        tekst: "Te veel te snel maakt de zone juist smaller. Werk aan de rand, niet eroverheen. Soms helpt traumatherapie, lichaamsgericht werk of medicatie om de basis breder te maken. Breder worden duurt maanden tot jaren — dat is normaal, geen falen."
      }
    ],
    doeDit: [
      "Oefen dagelijks kort met kalmeren — ook op goede dagen.",
      "Bouw voorspelbaarheid en veiligheid in je week.",
      "Werk met een therapeut als je steeds over de rand gaat."
    ],
    vermijd: [
      "Jezelf confronteren tot je instort 'om sterker te worden'.",
      "Denken dat kalmeren 'lui' is — het is trainen.",
      "De zone verwarren met 'geen emoties meer hebben'."
    ],
    zegDit: [
      "“Ik train mijn zenuwstelsel — kleine stappen, elke dag.”",
      "“Ik ben aan de rand — ik ga terug naar veiligheid.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over de kaart van het zenuwstelsel en terugkeren naar rust."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen via herhaalde veiligheid."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks en terugkeren binnen je window."
      }
    ],
    gerelateerd: [
      "window-of-tolerance",
      "wat-is-grounding",
      "dbt-skills-thuis"
    ]
  },
  {
    id: "co-regulatie-uitleg",
    beeld: {
      src: "img/vragen/co-regulatie-uitleg.jpg"
    },
    vraag: "Wat is co-regulatie — en hoe werkt het?",
    thema: "emoties",
    leeftijd: [
      "zelf",
      "naaste",
      "vroeg"
    ],
    uitgelicht: false,
    tags: [
      "co-regulatie",
      "regulatie",
      "relatie",
      "zenuwstelsel",
      "veiligheid",
      "verbinding"
    ],
    kort: "Co-regulatie (samen kalmeren) is wanneer een kalm zenuwstelsel een ander helpt kalmeren — via aanwezigheid, toon, adem of aanraking. Als kind leerde je het van veilige ouders; als volwassene kun je het opnieuw leren in veilige relaties.",
    blokken: [
      {
        tekst: "Je bent overspoeld en iemand blijft rustig naast je — niet pratend, niet oplossend — en langzaam zak je mee af. Dat is co-regulatie: twee zenuwstelsels die elkaar helpen kalmeren. Het is geen zwakte; het is hoe mensen van nature kalmeren."
      },
      {
        kop: "Hoe het werkt",
        tekst: "Je automatische zenuwstelsel neemt iets over van anderen. Een kalme adem, een zachte stem, voorspelbare aanwezigheid en veilige aanraking (als je dat wilt) zetten het deel aan dat zich veilig en verbonden voelt. Kinderen leren kalmeren via hun ouders; zonder die ervaring blijft jezelf kalmeren moeilijker. Als volwassene kun je samen kalmeren opnieuw opbouwen — in therapie, vriendschap, een relatie."
      },
      {
        kop: "Co-regulatie is geen redding",
        tekst: "Je bent niet afhankelijk van één persoon om te overleven — maar menselijke verbinding helpt herstel. Co-regulatie werkt het best wanneer beide partijen grenzen respecteren. Voor naasten: je hoeft niet te 'fixen', alleen stabiel aanwezig te zijn. Voor jezelf: het is oké om hulp te vragen wanneer je alleen niet meer terugkomt."
      }
    ],
    doeDit: [
      "Zoek één of enkele mensen bij wie je lichaam iets ontspant.",
      "Oefen kalme aanwezigheid — voor jezelf en voor naasten.",
      "Vraag in therapie om co-regulatie als je alleen niet terugkomt."
    ],
    vermijd: [
      "Denken dat je alles alleen moet reguleren om 'sterk' te zijn.",
      "Co-regulatie verwachten van mensen die zelf voortdurend uit balans zijn.",
      "Aanwezigheid van naasten als permanente redding zien — grenzen blijven nodig."
    ],
    zegDit: [
      "“Ik heb even jouw rust nodig — niet jouw oplossing.”",
      "“Samen kalmeren is menselijk — geen zwakte.”"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over samen kalmeren (co-regulatie) en het zenuwstelsel (polyvagaal)."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veiligheid in relaties en het kalmeren van het zenuwstelsel."
      },
      {
        boek: "what-happened-to-you",
        detail: "Over helen via relaties en het belang van veilige verbinding."
      }
    ],
    gerelateerd: [
      "partner-trauma-steunen",
      "ondersteunend-netwerk-opbouwen",
      "window-of-tolerance-verbreden"
    ]
  }
];

// ============================================================
// EHBT — Vragen, deel 19
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// Geen overgenomen boektekst. Educatief, geen vervanging voor hulp.
// ============================================================

const VRAGEN_19 = [
  {
    id: "trauma-spiritualiteit-geloven",
    beeld: {
      src: "img/vragen/trauma-spiritualiteit-geloven.jpg"
    },
    vraag: "Hoe verhouden trauma en spiritualiteit of geloof zich?",
    thema: "innerlijk",
    leeftijd: [
      "zelf",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "spiritualiteit",
      "geloof",
      "god",
      "zin",
      "schuld",
      "herstel"
    ],
    kort: "Trauma en geloof kunnen botsen — 'waar was God?', schuld, verlies van vertrouwen — maar spiritualiteit kan ook troost, gemeenschap en zin bieden. Er is geen verplicht pad: jouw relatie met geloof mag herstellen in jouw tempo.",
    blokken: [
      {
        tekst: "Voor sommigen is geloof een anker na trauma; voor anderen wordt het een bron van pijn — zeker als misbruik in een religieuze context plaatsvond, of wanneer je je afvraagt waarom een goede God zoiets toeliet. Beide ervaringen zijn echt en komen veel voor."
      },
      {
        kop: "Wanneer geloof wondt",
        tekst: "Institutioneel misbruik in kerken of gemeenschappen, schuldgevoelens ('ik heb het verdiend'), of het gevoel dat je moet vergeven voordat je klaar bent — dat kan trauma verergeren. Spirituele bypassing ('gewoon vertrouwen') kan echte pijn negeren. Je mag boos zijn, twijfelen, of afstand nemen zonder dat je 'zwak' in geloof bent."
      },
      {
        kop: "Wanneer geloof helpt",
        tekst: "Voor anderen biedt spiritualiteit ritme, gemeenschap, ademruimte en het gevoel dat ze niet alleen zijn. Meditatie, gebed, natuur of een liefdevolle gemeenschap kunnen reguleren en troost geven — naast, niet in plaats van, traumatherapie. Herstel van je relatie met geloof mag langzaam: soms eerst woede, dan later weer ruimte voor zin of verbinding."
      }
    ],
    doeDit: [
      "Erken je eigen pad — geloof behouden, herzien of loslaten mag allemaal.",
      "Zoek gemeenschappen die trauma serieus nemen en geen schuld prediken.",
      "Combineer spirituele praktijken met professionele hulp bij zware trauma's."
    ],
    vermijd: [
      "Jezelf dwingen te vergeven of te geloven 'om te genezen'.",
      "Spiritualiteit als vervanging van therapie of medische hulp.",
      "Geloofspijn minimaliseren met 'het zit in Gods plan'."
    ],
    zegDit: [
      "“Mijn geloof mag ruimte hebben voor woede en twijfel.”",
      "“Ik zoek zin op mijn manier — niet op iemand anders tempo.”"
    ],
    bronnen: [
      {
        boek: "healing-shame-binds",
        detail: "Over toxische schaamte en schuld — ook in religieuze context."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over schuld loslaten en begrip als basis voor herstel."
      },
      {
        boek: "myth-of-normal",
        detail: "Over authenticiteit, verbinding en zin na diepe wonden."
      }
    ],
    gerelateerd: [
      "vergeven-om-te-helen",
      "institutioneel-trauma",
      "waarom-zoveel-schaamte"
    ]
  },
  {
    id: "hoop-behouden-herstel",
    beeld: {
      src: "img/vragen/hoop-behouden-herstel.jpg"
    },
    vraag: "Hoe houd ik hoop vast tijdens herstel?",
    thema: "herstel",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ],
    uitgelicht: true,
    tags: [
      "hoop",
      "herstel",
      "veerkracht",
      "geduld",
      "terugval",
      "toekomst"
    ],
    kort: "Hoop tijdens herstel is geen blind optimisme — het is het geloof dat kleine stappen tellen, ook als het lang duurt en terugval hoort. Hoop voed je met realisme, verbinding en bewijs dat verandering mogelijk is.",
    blokken: [
      {
        tekst: "Herstel is zelden rechttoe rechtaan. Je bent twee stappen vooruit, dan weer terug. Op zulke momenten voelt hoop als een leugen — en toch is het vaak juist dan dat je haar het hardst nodig hebt. Niet als roze bril, maar als anker."
      },
      {
        kop: "Hoop is geen 'alles komt goed'",
        tekst: "Realistische hoop zegt niet dat je morgen genezen bent. Ze zegt: mensen kunnen leren zichzelf te kalmeren, relaties kunnen veiliger worden, je lichaam kan kalmer worden, je hoeft niet eeuwig in dezelfde pijn te blijven. Onderzoek naar veerkracht toont dat herstel vaker voorkomt dan we denken — maar het kost tijd en steun."
      },
      {
        kop: "Hoop voeden in de praktijk",
        tekst: "Noteer kleine winsten: één betere nacht, één gesprek waarin je grens respecteerde, één moment dat een trigger minder heftig was. Verbind met mensen die herstel kennen — niet alleen met lijdensverhalen. Terugval is geen bewijs dat het nooit lukt; het hoort bij niet-lineair herstel. Als hoop weg is, is dat een signaal om hulp te zoeken — niet om op te geven."
      }
    ],
    doeDit: [
      "Houd een eenvoudig logboek van kleine vooruitgang — niet alleen terugval.",
      "Zoek voorbeelden van herstel in boeken, groepen of therapeuten die het kennen.",
      "Vraag hulp wanneer hopeloosheid aanhoudt — dat is zelf zorg."
    ],
    vermijd: [
      "Jezelf vergelijken met anderen die 'sneller' herstellen.",
      "Terugval lezen als 'het werkt niet'.",
      "Hoop verwarren met het ontkennen van pijn."
    ],
    zegDit: [
      "“Vandaag is zwaar — dat betekent niet dat morgen hetzelfde is.”",
      "“Kleine stappen tellen — ik hoef niet alles tegelijk te fixen.”"
    ],
    bronnen: [
      {
        boek: "end-of-trauma",
        detail: "Over veerkracht en realistisch herstel na tegenslag."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over overleven naar wel leven — met praktische hoop."
      },
      {
        boek: "its-not-your-fault",
        detail: "Over begrip en kleine stappen als basis voor herstel."
      }
    ],
    gerelateerd: [
      "hoe-lang-duurt-herstel",
      "wanneer-genoeg-hersteld",
      "zelfcompassie-hoe-begin"
    ]
  }
];

// ============================================================
// EHBT — Therapieën
// Onafhankelijk geschreven, geïnspireerd door de vakliteratuur.
// Evidentieniveaus zijn algemene, oriënterende inschattingen — geen
// behandeladvies. Bespreek de keuze altijd met een professional.
// ============================================================
const THERAPIEEN = [
  {
    id: "emdr",
    naam: "EMDR",
    voluit: "Eye Movement Desensitization and Reprocessing",
    icoon: "👁️",
    accent: "#4a6b8a",
    beeld: {
      src: "img/therapieen/emdr.jpg",
      alt: "EMDR-sessie waarin een therapeut met twee vingers oogbewegingen begeleidt terwijl een cliënt meekijkt.",
      kaartPos: "center top"
    },
    kort: "Verwerkt herinneringen die zijn vastgelopen. Je aandacht wordt afgeleid door je ogen heen en weer te bewegen, of door tikjes of geluiden, om de beurt links en rechts.",
    voorWie: "Goed bewezen bij eenmalig trauma en PTSS. Wordt ook gebruikt bij complex trauma, maar dan stap voor stap en aangepast.",
    blokken: [
      {
        tekst: "EMDR is een therapie met een vaste opbouw. Je denkt kort terug aan een nare herinnering en doet tegelijk iets wat je aandacht afleidt — meestal je ogen heen en weer bewegen, soms tikjes of geluiden links en rechts."
      },
      {
        kop: "Waarom dat werkt",
        tekst: "Het idee is dat een nare herinnering 'vast' is komen te zitten, los van de rest van je geheugen. De beelden en gevoelens zijn nog scherp. Door terug te denken én tegelijk iets anders te doen, lijkt je brein de herinnering alsnog te kunnen verwerken en op te bergen als 'voorbij'. De lading wordt minder: de herinnering blijft, maar overvalt je niet meer."
      }
    ],
    hoeWerkt: [
      {
        kop: "Voorbereiding en rust opbouwen",
        tekst: "Eerst bouw je veiligheid op en leer je jezelf kalmeren. Samen kies je een herinnering om aan te werken."
      },
      {
        kop: "Naar boven halen",
        tekst: "Je haalt kort het beeld, de gedachte en het lichaamsgevoel naar boven die bij de herinnering horen."
      },
      {
        kop: "Verwerken met links-rechts prikkels",
        tekst: "Tijdens reeksen oogbewegingen (of tikjes of geluiden) laat je gewoon opkomen wat er komt. De lading zakt langzaam."
      },
      {
        kop: "Vastzetten",
        tekst: "Je versterkt een helpende gedachte en checkt of je lichaam rustig is voordat je stopt."
      }
    ],
    evidentie: "EMDR is een van de best onderzochte traumabehandelingen. Internationale richtlijnen raden het aan bij PTSS. Bij complex trauma kan EMDR ook helpen, maar meestal pas als je je veilig en stevig genoeg voelt en er een goede band met de therapeut is.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Aanbevolen bij PTSS",
    overzichtGroep: "ptss",
    pastBij: "Vooral PTSS",
    geschiktBij: [
      "wat-is-trauma",
      "emoties"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Bespreekt EMDR als een van de manieren die werken om vastgelopen herinneringen te verwerken."
      }
    ],
    gerelateerd: [
      "trauma-focused-cbt",
      "somatic-experiencing",
      "schematherapie"
    ]
  },
  {
    id: "trauma-focused-cbt",
    naam: "Traumagerichte CBT",
    voluit: "Trauma-focused CBT, CPT en exposure",
    icoon: "🧠",
    accent: "#4a6b8a",
    beeld: {
      src: "img/therapieen/trauma-focused-cbt.jpg",
      alt: "Traumagerichte CBT-sessie waarin een therapeut wijst naar een werkblad en kaartjes op tafel.",
      kaartPos: "center center"
    },
    kort: "Werkt rechtstreeks met traumaherinneringen, met vermijden, en met vastzittende gedachten zoals schuld, schaamte of gevaar.",
    voorWie: "Vooral PTSS na één duidelijke gebeurtenis of een reeks herinneringen. Bij CPTSS kan het een deel van de behandeling zijn, maar meestal pas als je stevig genoeg staat, en met aandacht voor afhaken (dissociatie), schaamte en relaties.",
    blokken: [
      {
        tekst: "Traumagerichte cognitieve gedragstherapie is een verzamelnaam. Het zijn behandelingen die rechtstreeks werken met de traumaherinnering, met vermijden, en met gedachten die na trauma vastlopen. Denk aan trauma-focused CBT, Cognitive Processing Therapy (CPT) en vormen van blootstelling (exposure)."
      },
      {
        kop: "Waar het op mikt",
        tekst: "De behandeling helpt je brein opnieuw te leren dat de gebeurtenis voorbij is. En dat vermijden de angst vaak juist in stand houdt. Gedachten als 'het was mijn schuld' of 'ik ben nooit veilig' bekijk je samen opnieuw. Bij complex trauma gaat dit meestal langzamer, stap voor stap, en met meer aandacht voor tot rust komen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Uitleg over hoe het werkt",
        tekst: "Je leert hoe PTSS, vermijden, herbeleven en alarmreacties werken.",
        zeg: null
      },
      {
        kop: "De herinnering opzoeken",
        tekst: "Je werkt stap voor stap met de herinnering of met dingen die je vermijdt, zonder jezelf te overspoelen.",
        zeg: null
      },
      {
        kop: "Betekenis onderzoeken",
        tekst: "Vastzittende gedachten over schuld, schaamte, machteloosheid of gevaar bekijk je rustig en eerlijk.",
        zeg: null
      },
      {
        kop: "Nieuwe veiligheid oefenen",
        tekst: "Je merkt dat je herinneringen en triggers kunt dragen, zonder dat het oude gevaar terugkomt.",
        zeg: null
      }
    ],
    evidentie: "Traumagerichte CBT (Cognitive Behavioral Therapy), CPT en exposure horen bij de best onderzochte behandelingen voor PTSS, en worden in richtlijnen aanbevolen. Bij complex trauma kunnen ze nuttig zijn, maar zelden als snelle standaardroute. Dan wegen veiligheid, tempo en een goede band met de therapeut zwaarder.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Aanbevolen bij PTSS",
    overzichtGroep: "ptss",
    pastBij: "Vooral PTSS",
    geschiktBij: [
      "wat-is-trauma",
      "emoties"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over stap voor stap werken, eerst rust opbouwen en daarna de herinnering verwerken bij complex trauma."
      },
      {
        boek: "body-keeps-score",
        detail: "Over PTSS, traumaherinneringen, en waarom verwerken meer vraagt dan alleen begrijpen."
      }
    ],
    gerelateerd: [
      "emdr",
      "dbt",
      "schematherapie"
    ],
    _index: 1
  },
  {
    id: "somatic-experiencing",
    naam: "Somatic Experiencing",
    voluit: "Somatic Experiencing (SE) — lichaamsgerichte traumatherapie",
    icoon: "🫁",
    accent: "#3f7d72",
    beeld: {
      src: "img/therapieen/somatic-experiencing.jpg",
      alt: "Somatic Experiencing-sessie waarin een cliënt met een hand op de borst lichaamsgevoelens volgt.",
      kaartPos: "center center"
    },
    kort: "Werkt via het lichaam. Spanning die is blijven hangen, krijgt alsnog de kans om los te komen, in kleine en veilige stappen.",
    voorWie: "Mensen bij wie trauma vooral in het lichaam zit, bijvoorbeeld spanning, verstijven (freeze), afhaken (dissociatie) of altijd op scherp staan. Past vaak bij complex trauma of trauma uit de vroege kindertijd.",
    blokken: [
      {
        tekst: "Somatic Experiencing is ontwikkeld door Peter Levine. Het gaat ervan uit dat trauma niet zozeer in de gebeurtenis zit, maar in een zenuwstelsel dat in de overlevingsstand bleef hangen. De aandacht ligt op wat je in je lichaam voelt, niet op het hele verhaal opnieuw vertellen."
      },
      {
        kop: "Kleine stapjes en heen en weer bewegen",
        tekst: "Je werkt met heel kleine stukjes tegelijk. Steeds beweeg je heen en weer tussen een beetje spanning en een gevoel van veiligheid. Zo kan je lichaam de vastgehouden spanning beetje bij beetje loslaten — soms door te trillen, warm te worden of diep te ademen — zonder opnieuw overspoeld te raken."
      }
    ],
    hoeWerkt: [
      {
        kop: "Rustplekken opbouwen",
        tekst: "Je leert eerst plekken van rust en veiligheid in je lichaam herkennen."
      },
      {
        kop: "Sensaties volgen",
        tekst: "Met aandacht volg je wat er in je lichaam gebeurt rond een herinnering of trigger."
      },
      {
        kop: "Heen en weer bewegen",
        tekst: "Je beweegt tussen een beetje spanning en veiligheid, telkens in kleine stapjes."
      },
      {
        kop: "Loslaten en tot rust komen",
        tekst: "De vastgehouden spanning krijgt ruimte om los te komen; je zenuwstelsel komt tot rust."
      }
    ],
    evidentie: "Somatic Experiencing wordt in de praktijk veel gebruikt en past goed bij trauma dat in het lichaam zit. Er is steeds meer onderzoek met positieve resultaten, maar dat onderzoek is nog kleiner dan bij EMDR en traumagerichte CBT.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiend bewijs",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / lichaam",
    geschiktBij: [
      "lichaam",
      "herstel"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Het basiswerk over Somatic Experiencing."
      },
      {
        boek: "anchored",
        detail: "Sluit aan bij het werken met de standen van je zenuwstelsel."
      }
    ],
    gerelateerd: [
      "polyvagaal",
      "emdr"
    ]
  },
  {
    id: "ifs",
    naam: "IFS — Delenwerk",
    voluit: "Internal Family Systems",
    icoon: "🪞",
    accent: "#7c6f8f",
    beeld: {
      src: "img/therapieen/ifs.jpg",
      alt: "IFS-sessie waarin een therapeut en cliënt delen in kaart brengen met kaartjes en houten figuren.",
      kaartPos: "center center"
    },
    kort: "Kijkt naar je binnenwereld als een team van 'delen' — beschermers en gekwetste delen — geleid door een kalme kern, het 'Zelf'.",
    voorWie: "Mensen met veel zelfkritiek, innerlijke strijd, schaamte of delen die afhaken (dissociatie). Wordt veel gebruikt bij complex trauma.",
    blokken: [
      {
        tekst: "Internal Family Systems is ontwikkeld door Richard Schwartz. Het gaat ervan uit dat we allemaal bestaan uit verschillende 'delen', elk met een eigen rol. Sommige delen beschermen, andere dragen oude pijn. Het uitgangspunt: er bestaan geen slechte delen — alleen delen met een zware taak."
      },
      {
        kop: "Leiden vanuit het Zelf",
        tekst: "Onder al die delen ligt een kern die IFS het 'Zelf' noemt: kalm, nieuwsgierig en mild. Heling ontstaat als je vanuit die kern naar je delen leert luisteren, in plaats van ze weg te duwen. Beschermers mogen ontspannen zodra de gekwetste delen die zij bewaken eindelijk gezien en getroost worden."
      }
    ],
    hoeWerkt: [
      {
        kop: "Je delen leren kennen",
        tekst: "Je leert je beschermende en gekwetste delen herkennen en een naam geven."
      },
      {
        kop: "Naar je kalme kern",
        tekst: "Je oefent om vanuit rust en nieuwsgierigheid naar een deel te kijken."
      },
      {
        kop: "Beschermers stappen terug",
        tekst: "Beschermende delen mogen een stap terug doen zodra ze zich gehoord voelen."
      },
      {
        kop: "Oude last loslaten",
        tekst: "Gekwetste delen krijgen erkenning en kunnen hun oude last loslaten."
      }
    ],
    evidentie: "IFS wordt in de praktijk veel gebruikt bij complex trauma, schaamte, innerlijke strijd en afhaken (dissociatie). Het past goed bij werken met delen. Er komt steeds meer onderzoek, maar nog niet zo breed als bij de klassieke PTSS-behandelingen.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiend bewijs",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / delen",
    geschiktBij: [
      "innerlijk",
      "cptss"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "De toegankelijke inleiding in IFS door de grondlegger."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over werken met delen bij trauma en afhaken (dissociatie)."
      }
    ],
    gerelateerd: [
      "schematherapie",
      "narm"
    ]
  },
  {
    id: "narm",
    naam: "NARM",
    voluit: "NeuroAffective Relational Model",
    icoon: "🌱",
    accent: "#5f7259",
    beeld: {
      src: "img/therapieen/narm.jpg",
      alt: "NARM-sessie waarin cliënt en therapeut in het hier-en-nu contact en lichaamssignalen verkennen.",
      kaartPos: "center center"
    },
    kort: "Een aanpak speciaal voor trauma uit de vroege kindertijd. Werkt in het hier-en-nu, in plaats van het verleden eindeloos uit te diepen.",
    voorWie: "Mensen met vroeg trauma, trauma in relaties, of hardnekkige twijfels over wie ze zijn en wat ze waard zijn.",
    blokken: [
      {
        tekst: "NARM is ontwikkeld door Laurence Heller. Het richt zich op trauma dat vroeg in je leven ontstond — niet door één gebeurtenis, maar door een gemis aan afstemming, veiligheid of erkenning. Het kijkt naar vijf basisbehoeften: contact, afstemming, vertrouwen, op jezelf staan, en liefde."
      },
      {
        kop: "Oude patronen in het nu",
        tekst: "Als die behoeften vroeg te weinig werden vervuld, ontwikkelde je manieren om te overleven. Die sturen nu nog je zelfbeeld en je relaties. NARM diept het verleden niet eindeloos uit, maar kijkt hoe die patronen zich híer en nú laten zien, en hoe ze het contact met jezelf in de weg zitten."
      }
    ],
    hoeWerkt: [
      {
        kop: "Patronen herkennen",
        tekst: "Je verkent welke overlevingspatronen bij jou meespelen."
      },
      {
        kop: "Werken in het nu",
        tekst: "De aandacht ligt op hoe het patroon nú voelt en werkt."
      },
      {
        kop: "Contact met jezelf herstellen",
        tekst: "Je oefent om je eigen gevoel te voelen en serieus te nemen."
      },
      {
        kop: "Bij jezelf leren blijven",
        tekst: "Stukje bij beetje lukt het beter om bij jezelf te blijven."
      }
    ],
    evidentie: "NARM is een invloedrijk model voor vroeg trauma en patronen in relaties. Het is inhoudelijk sterk uitgewerkt, maar er is nog weinig streng onderzoek naar. Zie het daarom als een gespecialiseerde aanpak uit de praktijk, niet als een breed bewezen standaardbehandeling.",
    evidentieNiveau: "in ontwikkeling",
    evidentieLabel: "Praktijkmodel",
    overzichtGroep: "cptss",
    pastBij: "Ontwikkelingstrauma",
    geschiktBij: [
      "cptss",
      "hechting"
    ],
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Het basiswerk over het NARM-model (NeuroAffective Relational Model)."
      }
    ],
    gerelateerd: [
      "ifs",
      "somatic-experiencing"
    ]
  },
  {
    id: "dbt",
    naam: "DBT",
    voluit: "Dialectische gedragstherapie",
    icoon: "🧰",
    accent: "#516b78",
    beeld: {
      src: "img/therapieen/dbt.jpg",
      alt: "DBT-sessie waarin een therapeut en cliënt praktische vaardigheidskaartjes en een werkblad gebruiken.",
      kaartPos: "center center"
    },
    kort: "Leert je concrete vaardigheden: je emoties kalmeren, een crisis doorstaan en gezondere relaties. Vooral om eerst stevig te worden, nog niet om het hele trauma te verwerken.",
    voorWie: "Mensen die overspoeld raken door emoties, worstelen met zelfbeschadiging of gedachten aan zelfdoding, of een borderline-patroon herkennen. Bij complex trauma vooral nuttig om eerst steviger te worden, vóór of naast het verwerken van trauma.",
    blokken: [
      {
        tekst: "Dialectische gedragstherapie (DBT) is ontwikkeld door Marsha Linehan. Ze combineert accepteren en veranderen. Je leert praktische vaardigheden op vier gebieden: aandacht (mindfulness), een crisis doorstaan, je emoties kalmeren, en omgaan met anderen."
      },
      {
        kop: "Vaardigheden als basis, niet als eindpunt",
        tekst: "DBT draait om oefenen. Je leert technieken om in een crisis niet meteen te handelen, om heftige emoties te benoemen en te temperen, en om grenzen te stellen zonder je relaties te beschadigen. Bij complex trauma is dat vaak nodig, maar niet genoeg. DBT helpt vooral om stevig genoeg te worden voor het verwerken van trauma, lichaamsgericht werk of herstel in relaties."
      }
    ],
    hoeWerkt: [
      {
        kop: "Aandacht (mindfulness)",
        tekst: "Leren opmerken wat je voelt, zonder er meteen in meegesleurd te worden."
      },
      {
        kop: "Een crisis doorstaan",
        tekst: "Concrete technieken om een piek te doorstaan zonder schade."
      },
      {
        kop: "Je emoties kalmeren",
        tekst: "Emoties herkennen, benoemen en zachter maken."
      },
      {
        kop: "Relaties",
        tekst: "Vaardigheden om nee te zeggen en te zeggen wat je nodig hebt, zonder de band te beschadigen."
      }
    ],
    evidentie: "DBT is goed onderzocht bij heftige emoties, zelfbeschadiging, gedachten aan zelfdoding en het borderline-patroon. Dat betekent niet dat gewone DBT de kern van complex trauma verwerkt. Bij CPTSS helpt DBT vooral om steviger te worden, vaardigheden op te bouwen, en daarna of daarnaast traumagericht, lichaamsgericht of in relaties te werken.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Sterk om eerst stevig te worden",
    overzichtGroep: "stabilisatie",
    pastBij: "Rust & stevigheid",
    geschiktBij: [
      "emoties",
      "cptss"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Verwijst naar werken met vaardigheden als stevige basis."
      }
    ],
    gerelateerd: [
      "schematherapie",
      "ifs"
    ]
  },
  {
    id: "schematherapie",
    naam: "Schematherapie",
    voluit: "Schematherapie",
    icoon: "🧩",
    accent: "#9a7b4f",
    beeld: {
      src: "img/therapieen/schematherapie.jpg",
      alt: "Schematherapie-sessie met stoelwerk en kaartjes voor schema's en modi.",
      kaartPos: "center center"
    },
    kort: "Werkt met diepe patronen ('schema's') uit je jeugd, en met de 'standen' waarin je schiet. Met veel aandacht voor de band met je therapeut.",
    voorWie: "Mensen met hardnekkige patronen die hun hele leven raken, en met persoonlijkheidsproblemen, vaak met trauma in de achtergrond.",
    blokken: [
      {
        tekst: "Schematherapie is ontwikkeld door Jeffrey Young. Ze combineert ideeën uit gedragstherapie, hechting en gestalt. Ze richt zich op 'schema's': diepe overtuigingen over jezelf en anderen die vroeg zijn ontstaan, zoals 'ik ben niet de moeite waard' of 'anderen laten me toch in de steek'."
      },
      {
        kop: "Standen en alsnog goede zorg",
        tekst: "Die schema's zetten 'standen' aan — toestanden waarin je schiet, zoals een gekwetst kind of een strenge, straffende stem. Een belangrijk werkzaam deel is 'limited reparenting': de therapeut geeft je binnen veilige grenzen alsnog een stukje van de zorg die je vroeger miste. Zo worden oude tekorten deels aangevuld."
      }
    ],
    hoeWerkt: [
      {
        kop: "Schema's in kaart brengen",
        tekst: "Je onderzoekt welke vroege patronen je leven sturen."
      },
      {
        kop: "Standen herkennen",
        tekst: "Je leert de standen herkennen waarin je schiet, en waar ze voor dienen."
      },
      {
        kop: "Een nieuwe, goede ervaring",
        tekst: "In de band met je therapeut ontstaat een nieuwe, veiligere ervaring."
      },
      {
        kop: "Je gezonde volwassen kant versterken",
        tekst: "Je bouwt een innerlijke stem op die voor je gekwetste delen zorgt."
      }
    ],
    evidentie: "Schematherapie heeft een stevige onderzoeksbasis voor persoonlijkheidsproblemen en langdurige, ingewikkelde klachten.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Sterk bij patronen",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / patronen",
    geschiktBij: [
      "cptss",
      "innerlijk",
      "hechting"
    ],
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Sluit aan bij werken met vroege patronen en onvervulde behoeften."
      }
    ],
    gerelateerd: [
      "ifs",
      "dbt"
    ]
  },
  {
    id: "polyvagaal",
    naam: "Werken met je zenuwstelsel (polyvagaal)",
    voluit: "Polyvagaaltheorie als kader voor traumawerk",
    icoon: "⚓",
    accent: "#46566e",
    beeld: {
      src: "img/therapieen/polyvagaal.jpg",
      alt: "Polyvagaal geïnspireerde sessie waarin therapeut en cliënt zenuwstelselstaten en regulatie verkennen.",
      kaartPos: "center center"
    },
    kort: "Geen therapie op zich, maar een manier van kijken. Het helpt je je zenuwstelsel te 'lezen' en stap voor stap meer veiligheid op te bouwen.",
    voorWie: "Iedereen die het lichaam en het zenuwstelsel centraal wil zetten. Wordt vaak gecombineerd met andere therapieën.",
    blokken: [
      {
        tekst: "De polyvagaaltheorie komt van Stephen Porges en werd toegankelijk gemaakt door onder anderen Deb Dana. Ze beschrijft hoe je zenuwstelsel automatisch schakelt tussen drie grove standen: veiligheid en verbinding, in actie komen (vechten of vluchten), en dichtklappen (bevriezen)."
      },
      {
        kop: "Veiligheid eerst",
        tekst: "Het idee: veranderen en verbinden kan pas vanuit een gevoel van veiligheid. Daarom is dit geen losse methode, maar een manier van kijken die binnen veel therapieën wordt gebruikt. Je leert welke stand je inzit, en helpt je systeem kalmeren met kleine, herhaalde signalen van veiligheid."
      }
    ],
    hoeWerkt: [
      {
        kop: "Je stand leren lezen",
        tekst: "Je leert herkennen of je in veiligheid, in actie, of in dichtklappen zit."
      },
      {
        kop: "Triggers en ankers",
        tekst: "Je brengt in kaart wat je uit balans brengt en wat je weer terugbrengt."
      },
      {
        kop: "Signalen van veiligheid",
        tekst: "Je adem, je stem, ritme en contact met anderen nodigen je systeem uit om te kalmeren."
      },
      {
        kop: "Herhalen",
        tekst: "Kleine momenten van veiligheid, vaak herhaald, stellen je zenuwstelsel opnieuw af."
      }
    ],
    evidentie: "De polyvagaaltheorie is in de praktijk heel invloedrijk als manier om dingen te verklaren. Over sommige aannames is in de wetenschap nog discussie. Het wordt vooral gebruikt als een manier van kijken binnen andere behandelingen.",
    evidentieNiveau: "in ontwikkeling",
    evidentieLabel: "Een kader, geen losse therapie",
    overzichtGroep: "stabilisatie",
    pastBij: "Tot rust komen",
    geschiktBij: [
      "lichaam",
      "herstel"
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "De toegankelijke vertaling van de polyvagaaltheorie naar de praktijk."
      }
    ],
    gerelateerd: [
      "somatic-experiencing",
      "narm"
    ]
  },
  {
    id: "neurofeedback",
    naam: "Neurofeedback",
    voluit: "Neurofeedback — hersentraining voor meer rust",
    icoon: "📡",
    accent: "#4a6b8a",
    beeld: {
      src: "img/therapieen/neurofeedback.jpg",
      alt: "Neurofeedback-sessie waarin een cliënt met sensoren hersenactiviteit volgt op een scherm.",
      kaartPos: "center center"
    },
    kort: "Meet je hersenactiviteit direct en leert je brein soepeler te reageren op stress. Vooral ingezet als je zenuwstelsel maar moeilijk tot rust komt.",
    voorWie: "Mensen met complex trauma of trauma uit de vroege kindertijd, met afhaken (dissociatie), of een zenuwstelsel dat moeilijk tot rust komt. Vaak als aanvulling op gesprekstherapie.",
    blokken: [
      {
        tekst: "Neurofeedback is een vorm van training met directe terugkoppeling. Sensoren op je hoofd meten je hersengolven terwijl je iets rustigs doet, zoals een spelletje of een film kijken. Het systeem geeft een klein signaal wanneer je brein in een rustiger patroon zit. Zo leert je zenuwstelsel die rustige stand vaker te vinden."
      },
      {
        kop: "Rust trainen, niet praten",
        tekst: "Anders dan bij gesprekstherapie gaat het hier niet om het verhaal, maar om het brein zelf rustiger te leren reageren. Bij trauma kan het alarmsysteem zo gevoelig zijn geworden dat praten alleen niet genoeg is om het lichaam mee te krijgen. Neurofeedback werkt aan die rust eronder, zodat je makkelijker bij jezelf blijft en andere therapieën beter aankomen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Eerst een meting",
        tekst: "Eerst wordt in beeld gebracht hoe je brein nu reageert op rust en op spanning."
      },
      {
        kop: "Sessies met terugkoppeling",
        tekst: "Tijdens korte sessies krijg je direct een signaal als je brein in de gewenste stand zit."
      },
      {
        kop: "Langzaam opnieuw trainen",
        tekst: "Door herhaling leert je zenuwstelsel vaker en sneller naar rust te schakelen."
      },
      {
        kop: "Naast therapie",
        tekst: "Neurofeedback wordt meestal ingezet naast andere traumabehandeling, niet in plaats daarvan."
      }
    ],
    evidentie: "Er is steeds meer onderzoek naar neurofeedback bij trauma, vooral bij vroeg trauma en moeite om tot rust te komen. De resultaten zijn interessant, maar je hebt er een ervaren behandelaar voor nodig. Meestal wordt het gezien als aanvulling op traumatherapie, niet als volledige vervanging.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiend bewijs",
    overzichtGroep: "stabilisatie",
    pastBij: "Tot rust komen",
    geschiktBij: [
      "lichaam",
      "cptss",
      "herstel"
    ],
    bronnen: [
      {
        boek: "neurofeedback-developmental",
        detail: "Het basiswerk over neurofeedback bij vroeg en complex trauma."
      },
      {
        boek: "body-keeps-score",
        detail: "Bespreekt hoe brein en zenuwstelsel bij trauma veranderen, en wat helpt om weer tot rust te komen."
      }
    ],
    gerelateerd: [
      "polyvagaal",
      "somatic-experiencing"
    ]
  },
  {
    id: "imagery-rehearsal",
    naam: "Imagery Rehearsal",
    voluit: "Imagery Rehearsal Therapy (IRT) — nachtmerries herkaderen",
    icoon: "🌙",
    accent: "#46566e",
    beeld: {
      src: "img/therapieen/imagery-rehearsal.jpg",
      alt: "Imagery Rehearsal-sessie waarin een cliënt een nieuwe droomversie opschrijft met kaartjes op tafel.",
      kaartPos: "68% 22%",
      detailPos: "center 38%"
    },
    kort: "Je schrijft je nachtmerrie op en oefent overdag een nieuw, veiliger einde. Zo speelt je brein 's nachts minder vaak de oude versie af.",
    voorWie: "Mensen met terugkerende nachtmerries na trauma of PTSS. Ook nuttig als slaapproblemen andere behandeling in de weg zitten.",
    blokken: [
      {
        tekst: "Imagery Rehearsal Therapy (IRT) is een korte, duidelijke techniek speciaal voor nachtmerries. Je beschrijft je nachtmerrie in detail, kiest één ding dat je wilt veranderen, en schrijft een nieuwe versie met een ander — veiliger — verloop. Die nieuwe droom oefen je een paar keer per dag in je hoofd, zonder de nachtmerrie 's nachts opnieuw te beleven."
      },
      {
        kop: "Waarom nachtmerries blijven terugkomen",
        tekst: "Nachtmerries zijn vaak je brein dat nog probeert een dreiging te verwerken of je te waarschuwen. IRT geeft dat een andere richting: niet door de nachtmerrie weg te duwen, maar door overdag een nieuw verhaal aan te bieden. Het is geen wegvluchten — je blijft bij dezelfde thema's, maar je verandert het einde."
      }
    ],
    hoeWerkt: [
      {
        kop: "Nachtmerrie opschrijven",
        tekst: "Je schrijft de nachtmerrie op zoals die steeds terugkomt, in de tegenwoordige tijd."
      },
      {
        kop: "Nieuw verloop bedenken",
        tekst: "Je kiest wat je wilt veranderen en schrijft een nieuwe versie die niet bedreigend eindigt."
      },
      {
        kop: "Elke dag oefenen",
        tekst: "Je herhaalt de nieuwe droom een paar minuten per dag, rustig en ontspannen."
      },
      {
        kop: "Bekijken en bijstellen",
        tekst: "Na een paar weken kijk je samen of de nachtmerries minder vaak en minder heftig zijn."
      }
    ],
    evidentie: "IRT hoort bij de best onderzochte aanpakken voor nachtmerries en wordt aanbevolen bij slaapproblemen door trauma. Het is kort, laagdrempelig en goed te combineren met andere traumabehandeling.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Sterk bij nachtmerries",
    overzichtGroep: "ptss",
    pastBij: "PTSS / slaap",
    geschiktBij: [
      "slaap",
      "herstel"
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over dromen en nachtmerries bij trauma, ook imagery rehearsal."
      },
      {
        boek: "body-keeps-score",
        detail: "Bespreekt slaapproblemen en altijd op scherp staan als kernklachten van trauma."
      }
    ],
    gerelateerd: [
      "emdr",
      "neurofeedback"
    ]
  },
  {
    id: "eft",
    naam: "EFT",
    voluit: "Emotionally Focused Therapy — hechtingsgerichte relatietherapie",
    icoon: "💞",
    accent: "#5f7259",
    beeld: {
      src: "img/therapieen/eft.jpg",
      alt: "EFT-sessie waarin een koppel met een therapeut werkt aan veiligheid en verbinding.",
      kaartPos: "center center"
    },
    kort: "Helpt koppels (en soms families) om onder de ruzies en de afstand te kijken: welke diepere behoefte aan veiligheid en nabijheid speelt er? En hoe herstel je die band?",
    voorWie: "Koppels die vastlopen in steeds dezelfde ruzies, afstand of angst om verlaten te worden. Ook als trauma de relatie binnensluipt via oude hechtingspatronen.",
    blokken: [
      {
        tekst: "Emotionally Focused Therapy (EFT) is ontwikkeld door Sue Johnson. Ze gaat ervan uit dat ruzie in relaties zelden echt over de oppervlakte gaat. Achter kritiek, terugtrekken of woede zit meestal een diepere behoefte: gezien, veilig en geliefd zijn."
      },
      {
        kop: "De dans van afstand en nabijheid",
        tekst: "EFT noemt relaties een 'dans' van patronen: de een zoekt nabijheid, de ander trekt zich terug — of andersom — en allebei raken ze gefrustreerd. Trauma kan die dans versterken: wie vroeg onveiligheid leerde, reageert sneller met angst of afsluiten. EFT helpt partners om die patronen te zien en samen een veiligere band op te bouwen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Patronen in kaart brengen",
        tekst: "Je kijkt samen welke nare cirkel jullie steeds herhalen."
      },
      {
        kop: "Gevoelens benoemen",
        tekst: "Onder de woede of de afstand zoek je de kwetsbaardere gevoelens: angst, schaamte, verlangen naar nabijheid."
      },
      {
        kop: "Kwetsbaar praten",
        tekst: "Partners leren zeggen wat ze nodig hebben, in plaats van elkaar aan te vallen of weg te lopen."
      },
      {
        kop: "De band sterker maken",
        tekst: "Door telkens weer nabijheid te ervaren, groeit het vertrouwen in de relatie."
      }
    ],
    evidentie: "EFT is goed onderzocht als relatietherapie en wordt wereldwijd aanbevolen. Het helpt ook begrijpen hoe vroege onveiligheid doorwerkt in je relaties als volwassene — ook als je het alleen leest, zonder therapie.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Sterk bij relaties",
    overzichtGroep: "relationeel",
    pastBij: "Hechting / relatie",
    geschiktBij: [
      "hechting",
      "emoties"
    ],
    bronnen: [
      {
        boek: "hold-me-tight",
        detail: "De toegankelijke inleiding tot EFT voor koppels en hechting."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over hoe veiligheid in relaties je zenuwstelsel kalmeert — belangrijk voor hechting."
      }
    ],
    gerelateerd: [
      "narm",
      "schematherapie"
    ]
  },
  {
    id: "somatic-ifs-combined",
    naam: "Somatic IFS",
    voluit: "Somatic Internal Family Systems — delenwerk via het lichaam",
    icoon: "🫂",
    accent: "#7c6f8f",
    beeld: {
      src: "img/therapieen/somatic-ifs-combined.jpg",
      alt: "Somatic IFS-sessie waarin lichaamsgevoelens en delenkaartjes samen worden verkend.",
      kaartPos: "center center"
    },
    kort: "Combineert delenwerk (IFS) met aandacht voor het lichaam. Je bereikt je beschermers en gekwetste delen via lichaamsgevoelens, niet alleen via gedachten.",
    voorWie: "Mensen die veel in hun hoofd zitten, afhaken (dissociatie) of moeilijk emoties in hun lichaam voelen. Vaak bij complex trauma.",
    blokken: [
      {
        tekst: "Somatic IFS is ontwikkeld door Susan McConnell. Het verbindt Internal Family Systems met lichaamsgericht werk. Het uitgangspunt: je 'delen' leven niet alleen als gedachten of stemmen, maar ook als lichaamsgevoelens — spanning in je schouders, een knoop in je maag, leegte in je borst."
      },
      {
        kop: "Via het lichaam naar de delen",
        tekst: "In plaats van alleen te práten over een deel, volg je waar het in je lichaam voelbaar is. Een beschermend deel voel je misschien als opeengeklemde kaken; een gekwetst kind-deel als een hol gevoel. Door met zachte aandacht naar die plek te gaan — vanuit je kalme kern — kun je delen bereiken die met woorden alleen niet te bereiken waren."
      }
    ],
    hoeWerkt: [
      {
        kop: "Landen in je lichaam",
        tekst: "Je leert eerst veilig in je lichaam te landen, in kleine stapjes."
      },
      {
        kop: "Een gevoel als ingang",
        tekst: "Een lichaamsgevoel wordt het startpunt om een deel te ontmoeten."
      },
      {
        kop: "Vanuit je kalme kern",
        tekst: "Vanuit rust en nieuwsgierigheid benader je het deel dat via je lichaam zichtbaar wordt."
      },
      {
        kop: "Tot rust komen",
        tekst: "Als delen gehoord en getroost worden, ontspant je lichaam vaak mee."
      }
    ],
    evidentie: "Somatic IFS is invloedrijk binnen het IFS-werkveld en past bij het groeiende inzicht dat trauma in het lichaam leeft. Streng onderzoek naar precies deze combinatie is er nog weinig.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiend bewijs",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / lichaam + delen",
    geschiktBij: [
      "innerlijk",
      "lichaam",
      "cptss"
    ],
    bronnen: [
      {
        boek: "somatic-ifs",
        detail: "Het basiswerk over IFS combineren met lichaamsgerichte technieken."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over trauma als lichamelijke ervaring en het belang van het lichaam bij herstel."
      }
    ],
    gerelateerd: [
      "ifs",
      "somatic-experiencing"
    ]
  },
  {
    id: "trauma-informed-yoga",
    naam: "Trauma-informed yoga",
    voluit: "Trauma-informed yoga en beweging",
    icoon: "🧘",
    accent: "#3f7d72",
    beeld: {
      src: "img/therapieen/trauma-informed-yoga.jpg",
      alt: "Trauma-informed yogasessie met zachte keuzegerichte beweging en ondersteunende props.",
      kaartPos: "center center"
    },
    kort: "Yoga en bewuste beweging aangepast aan trauma: geen dwang, veel keuze, en aandacht voor je lichaam zonder je te overspoelen.",
    voorWie: "Mensen die spanning in hun lichaam willen verlichten, weer contact willen maken met hun lijf, of voor wie gewone yoga te veel triggert of te snel gaat.",
    blokken: [
      {
        tekst: "Trauma-informed yoga is geen aparte yogastijl. Het is een manier van lesgeven en bewegen waarbij veiligheid, keuze en jezelf kalmeren centraal staan. De begeleider nodigt uit in plaats van te commanderen. Je mag altijd een houding aanpassen, pauzeren of een oefening overslaan."
      },
      {
        kop: "Bewegen zonder overspoeld te raken",
        tekst: "Bij trauma kan je lichaam zowel gevoelloos als overgevoelig zijn. Trauma-informed yoga werkt in kleine stappen: ademhaling, zachte beweging, aandacht voor wat je voelt — zonder je te dwingen in houdingen die spanning oproepen. Het doel is niet perfectie, maar weer thuiskomen in je lichaam en je zenuwstelsel rustiger leren schakelen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Een veilige omgeving",
        tekst: "De ruimte, het tempo en de woorden zijn afgestemd op mensen met trauma."
      },
      {
        kop: "Keuze en controle",
        tekst: "Je bepaalt zelf wat je doet; de begeleider geeft opties, geen bevelen."
      },
      {
        kop: "Je lichaam leren voelen",
        tekst: "Je leert opmerken wat je voelt — spanning, warmte, rust — zonder dat je het hoeft te veranderen."
      },
      {
        kop: "Rust via adem en beweging",
        tekst: "Zachte oefeningen helpen je zenuwstelsel schakelen tussen spanning en rust."
      }
    ],
    evidentie: "Onderzoek naar trauma-informed yoga en lichaamsgerichte beweging bij PTSS laat bemoedigende resultaten zien, vooral voor minder stress en meer lichaamsgevoel. Het wordt meestal ingezet als aanvulling, niet als enige behandeling.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiend bewijs",
    overzichtGroep: "stabilisatie",
    pastBij: "Lichaam & rust",
    geschiktBij: [
      "lichaam",
      "herstel"
    ],
    bronnen: [
      {
        boek: "heal-body-heal-mind",
        detail: "Over lichaamsgerichte oefeningen, adem en beweging bij spanning door trauma."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen via het lichaam en herhaalde ervaringen van veiligheid."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het lichaam beïnvloedt, en waarom lichaamsgericht werk meespeelt in herstel."
      }
    ],
    gerelateerd: [
      "somatic-experiencing",
      "polyvagaal"
    ]
  }
];

const THERAPIE_WEGWIJZERS = [
  {
    id: "ptss-of-complex-trauma",
    titel: "Enkelvoudig of meervoudig trauma?",
    label: "Therapiewijzer",
    accent: "#4a6b8a",
    leeswijzer: "5 min lezen",
    beeld: {
      src: "img/therapieen/ptss-of-complex-trauma.jpg",
      alt: "Therapeut die twee beeldkaarten toont om het verschil tussen een afgebakende traumaherinnering en relationeel complex trauma uit te leggen.",
      kaartPos: "54% center",
      detailPos: "54% center"
    },
    kort: "Bij enkelvoudig trauma (PTSS) staat vaak één schokkende herinnering centraal. Bij meervoudig of complex trauma (CPTSS) gaat het vaker om herhaalde of vroege onveiligheid, met extra impact op zelfbeeld, emotieregulatie, afhaken (dissociatie) en vertrouwen.",
    blokken: [
      {
        kop: "Wanneer PTSS vaak op de voorgrond staat",
        tekst: "Bij PTSS draait het meestal om één duidelijke gebeurtenis of een afgebakende reeks gebeurtenissen. De kernklachten zijn vaak herbeleven, vermijden en een zenuwstelsel dat nog steeds alarm slaat. Dan staan traumagerichte behandelingen zoals EMDR of trauma-focused CBT vaak sneller centraal, omdat de herinnering zelf nog 'te heet' is opgeslagen."
      },
      {
        kop: "Wat er bij complex trauma bijkomt",
        tekst: "Bij complex trauma gaat het vaker om onveiligheid die zich herhaalde of al vroeg begon, vaak juist in relaties. Daardoor blijft niet alleen een herinnering hangen, maar raakt ook je gevoel over jezelf, je vermogen om je emoties te kalmeren, je vertrouwen in anderen en soms je contact met je lichaam beschadigd. Schaamte, leegte, een harde innerlijke criticus en afhaken (dissociatie) komen dan vaker mee op de voorgrond."
      },
      {
        kop: "Waarom dit de therapiekeuze verandert",
        tekst: "Het onderscheid zegt niet welke vorm 'erger' is, maar wel waar je best begint. Bij klassieke PTSS kun je vaak sneller naar het verwerken van de herinnering zelf. Bij complex trauma is meestal meer gefaseerd werk nodig: eerst meer veiligheid, meer draagkracht en meer regulatie, en pas daarna dieper werken met herinneringen. Vaak hoort daar ook lichaamsgericht werk, delenwerk of hechtingsgericht werken bij."
      }
    ],
    kernpunten: [
      "PTSS draait vaak om herbeleven, vermijden en alarm rond een afgebakende gebeurtenis.",
      "Complex trauma raakt breder: zelfbeeld, emotieregulatie, relaties en soms dissociatie.",
      "Bij complex trauma telt de volgorde extra: eerst stevigheid, dan pas dieper verwerken."
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over klassieke PTSS, traumaherinneringen en waarom het lichaam in alarm kan blijven."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over emotionele flashbacks, schaamte en relationele sporen van complex trauma."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroeg en relationeel ontwikkelingstrauma en de gevolgen voor identiteit en contact."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd werken: eerst stabiliteit, daarna pas dieper verwerken."
      }
    ],
    gerelateerdeTherapieen: [
      "emdr",
      "trauma-focused-cbt",
      "somatic-experiencing",
      "narm"
    ]
  },
  {
    id: "waar-past-dbt-dan",
    titel: "Waar past DBT dan?",
    label: "Therapiewijzer",
    accent: "#516b78",
    leeswijzer: "4 min lezen",
    beeld: {
      src: "img/therapieen/waar-past-dbt-dan.jpg",
      alt: "Therapeut en client die samen een werkblad en vaardigheidskaartjes gebruiken als voorbereiding op emotieregulatie en stabilisatie.",
      kaartPos: "center center",
      detailPos: "center center"
    },
    kort: "DBT is meestal geen volledige traumaverwerking op zich. Wel is het vaak een sterke eerste laag: crisis verminderen, emoties leren dragen, zelfbeschadiging opvangen en genoeg stabiliteit opbouwen om later dieper te kunnen werken.",
    blokken: [
      {
        kop: "Waar DBT sterk in is",
        tekst: "DBT leert heel concrete vaardigheden: aandacht (mindfulness), crisis doorkomen zonder extra schade, emoties beter reguleren en relaties minder ontwrichtend laten verlopen. Voor mensen die snel overspoeld raken, zichzelf verwonden, vaak in crisis schieten of helemaal dichtklappen, kan dat een enorme eerste winst zijn."
      },
      {
        kop: "Wat DBT meestal niet alleen doet",
        tekst: "DBT verwerkt op zichzelf meestal niet de volle lading van oude traumaherinneringen, hechtingswonden of giftige schaamte. Het helpt je vooral om steviger te worden, zodat je niet telkens overspoeld raakt door wat er in je omgaat. Voor veel mensen is dat geen eindpunt maar een fundament: het maakt later ruimte voor traumagericht, lichaamsgericht of relationeel werk."
      },
      {
        kop: "Wanneer DBT juist heel passend is",
        tekst: "Bij complex trauma kan DBT bijzonder passend zijn als er veel crisis is: zelfbeschadiging, suïcidale gedachten, heftige emotiestormen, impulsief gedrag, of een zenuwstelsel dat nauwelijks binnen zijn stressvenster blijft. Dan is eerst leren kalmeren geen omweg, maar precies de voorwaarde om later veilig dieper te kunnen gaan."
      }
    ],
    kernpunten: [
      "DBT is sterk voor crisisvaardigheden, emotieregulatie en minder impulsief reageren.",
      "Bij complex trauma is DBT vaak een stevige eerste laag, geen volledige eindbehandeling.",
      "Meer aankunnen is vaak precies wat later traumaverwerking mogelijk maakt."
    ],
    bronnen: [
      {
        boek: "dbt-cptsd-workbook",
        detail: "Over DBT-vaardigheden speciaal afgestemd op complex trauma."
      },
      {
        boek: "complex-ptsd-workbook",
        detail: "Over stabilisatie en dagelijks houvast opbouwen voor je dieper werkt."
      },
      {
        boek: "anchored",
        detail: "Over je zenuwstelsel eerst leren kalmeren en je stressvenster verbreden."
      }
    ],
    gerelateerdeTherapieen: [
      "dbt",
      "schematherapie",
      "somatic-experiencing",
      "trauma-focused-cbt"
    ]
  }
];


// ============================================================
// EHBT — Trauma uitgelegd: concepten, hechtingsstijlen, stoornissen
// Onafhankelijk geschreven, educatief en niet-stigmatiserend.
// Geen diagnose-instrument. Geen overgenomen boektekst.
// ============================================================
const CONCEPTEN = [
  {
    id: "trauma-basis",
    titel: "Wat is trauma?",
    icoon: "🌑",
    accent: "#5b6a7d",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    beeld: {
      src: "img/concepten/trauma-basis.jpg",
      alt: "Een rustige matte hoofdvorm met subtiele barstlijnen in een zachte therapieruimte.",
      kaartPos: "57% center",
      detailPos: "center center"
    },
    kort: "Trauma is niet de gebeurtenis zelf. Het is wat er achterblijft in je lichaam en je hoofd, nadat iets je te veel werd en je geen uitweg had.",
    blokken: [
      {
        kop: "Niet de gebeurtenis, maar wat het met je doet",
        tekst: "In het dagelijks leven noemen we de gebeurtenis 'trauma'. Maar trauma is eigenlijk het spoor dat zo'n zware ervaring achterlaat. Of iets een trauma wordt, hangt af van een paar dingen: kon je het verwerken, had je steun, en voelde je je daarna weer veilig? Trauma ontstaat juist als dat verwerken vastliep."
      },
      {
        kop: "Je lichaam blijft in de overlevingsstand",
        tekst: "Bij gevaar schakelt je lichaam in een fractie van een seconde over op overleven: vechten, vluchten of bevriezen. Normaal zakt die stand weer als het gevaar weg is. Bij trauma blijft je systeem deels 'aan staan', alsof het gevaar er nog is. Daardoor schrik je later van gewone dingen, alsof ze levensgevaarlijk zijn."
      },
      {
        kop: "Groot of klein, één keer of jarenlang",
        tekst: "Trauma kan komen door één heftige gebeurtenis, zoals een ongeluk, geweld of een verlies. Maar het kan ook groeien door iets wat lang duurt en minder opvalt: kilte thuis, je nooit veilig voelen, of nooit echt gezien worden. Dat laatste noemen we vaak complex trauma. Geen van beide is 'erger' — ze laten alleen andere sporen na."
      }
    ],
    kernpunten: [
      "Trauma zit in het spoor dat een ervaring achterlaat, niet in de gebeurtenis zelf.",
      "Je lichaam blijft deels in de overlevingsstand hangen.",
      "Ook 'kleine' of langdurige ervaringen kunnen je diep raken."
    ],
    feitVsFabel: [
      {
        mythe: "Trauma is alleen voor oorlog, geweld of rampen.",
        feit: "Ook langdurig je niet veilig voelen, verwaarlozing of nooit gezien worden kan een trauma zijn. Wat telt is wat het met je deed, niet hoe 'groot' de oorzaak lijkt."
      }
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma je brein en je lichaam verandert."
      },
      {
        boek: "myth-of-normal",
        detail: "Over trauma als wat er vanbinnen met je gebeurde."
      }
    ],
    gerelateerd: [
      "trauma-symptomen",
      "trauma-vs-complex",
      "zenuwstelsel-overleving"
    ]
  },
  {
    id: "trauma-symptomen",
    titel: "Wat zijn de symptomen van trauma?",
    icoon: "🌊",
    accent: "#5a6e7f",
    categorie: "basis",
    leeswijzer: "10 min lezen",
    kort: "Trauma laat zich op veel verschillende manieren voelen — van gejaagdheid en herbelevingen tot chronische lichamelijke klachten en het gevoel niet te weten wie je bent. Bij meervoudig of complex trauma komen er lagen bij die dieper gaan dan de herinnering zelf.",
    blokken: [
      {
        kop: "Klachten die bij elk trauma kunnen voorkomen"
      },
      {
        kop: "Wanneer klachten aanhouden: enkelvoudig trauma (PTSS)",
        tekst: "Als bovenstaande klachten langer dan een maand duidelijk aanwezig blijven en je dagelijks leven raken, kan er sprake zijn van PTSS. Dan komen er vaak nog extra signalen bij:"
      },
      {
        kop: "Specifiek bij meervoudig of complex trauma (CPTSS)",
        tekst: "Bij onveiligheid die zich herhaalde — vaak al vroeg in je leven, door mensen op wie je had moeten kunnen vertrouwen — raken de klachten dieper. Ze gaan niet alleen over de herinnering, maar over wie je bent geworden om te overleven."
      },
      {
        kop: "Lichamelijke klachten"
      },
      {
        kop: "Identiteit en zelfbeeld"
      },
      {
        kop: "Emoties en relaties"
      },
      {
        tekst: "De klachten in het CPTSS-gedeelte zijn geen persoonlijkheidskenmerken of tekortkomingen. Ze zijn aanpassingen — ooit noodzakelijk om te overleven. Dat onderscheid zien is al een begin van herstel."
      }
    ],
    kernpunten: [
      "Traumaklachten zijn divers: van gejaagdheid en herbelevingen tot isolement, concentratieproblemen en woede.",
      "Je lichaam blijft reageren alsof het gevaar er nog is — ook als dat allang voorbij is.",
      "Bij meervoudig of complex trauma komen diepere lagen bij: chronische lichamelijke klachten, geen stabiel zelfgevoel, emoties die ontregelen en relatieproblemen.",
      "Diepe schaamte, dissociatie en oververantwoordelijkheid zijn aanpassingen aan vroege onveiligheid — geen karaktertrekken."
    ],
    feitVsFabel: [
      {
        mythe: "Als je de klachten lang genoeg negeert, verdwijnen ze vanzelf.",
        feit: "Zonder verwerking kunnen traumaklachten juist verankerd raken. Ze verminderen als je zenuwstelsel de kans krijgt om het verleden te onderscheiden van het heden — en dat vraagt aandacht, geen doorzetten."
      },
      {
        mythe: "Als je zo reageert, is er iets fundamenteel mis met jou.",
        feit: "Wat complex trauma achterlaat in je lichaam, zelfbeeld en relaties zijn aanpassingen aan een situatie die te zwaar was. Dat vertelt iets over wat je hebt meegemaakt — niet over wie je bent."
      }
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma lichaam en brein blijft beïnvloeden via het zenuwstelsel."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Pete Walker over de vier overlevingsstijlen, innerlijke criticus en het herstel van identiteit bij complex trauma."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over dissociatie, innerlijke delen en hoe vroeg trauma het zelfgevoel versnippert."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over hoe vroeg trauma zich nestelt in het lichaam en hoe dat de identiteitsontwikkeling verstoort."
      }
    ],
    gerelateerd: [
      "trauma-basis",
      "trauma-vs-complex",
      "zenuwstelsel-overleving"
    ],
    _index: 1,
    beeld: {
      src: "img/concepten/trauma-symptomen.png"
    }
  },
  {
    id: "trauma-vs-complex",
    titel: "Trauma vs. complex trauma (PTSS vs. CPTSS)",
    icoon: "🕸️",
    accent: "#516b78",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Gewoon trauma draait om één duidelijke gebeurtenis. Complex trauma groeit door onveiligheid die zich blijft herhalen, vaak al vroeg in je leven. Het raakt dieper aan wie je bent en aan je relaties.",
    blokken: [
      {
        kop: "Gewoon (eenmalig) trauma",
        tekst: "Bij een eenmalig trauma — een ongeluk, een overval, een ramp — kan PTSS ontstaan: posttraumatische stress. Je herbeleeft de gebeurtenis, je vermijdt dingen die eraan herinneren, je bent snel geprikkeld en je staat steeds op scherp. De kern is één duidelijke gebeurtenis die je te veel werd."
      },
      {
        kop: "Complex trauma (CPTSS)",
        tekst: "Complex trauma groeit door onveiligheid die lang duurt of zich vaak herhaalt. Meestal gebeurt dat vroeg in je leven, juist bij mensen bij wie je je veilig had moeten voelen. Bovenop de gewone klachten komen er diepere dingen bij: een negatief beeld van jezelf, moeite om je emoties te kalmeren, en moeite om mensen te vertrouwen en dichtbij te laten."
      },
      {
        kop: "Waarom dit verschil telt",
        tekst: "Het verschil zegt niet wat 'erger' is, maar het bepaalt wel de aanpak. Complex trauma vraagt meestal meer tijd. Eerst werk je aan rust en veiligheid, en pas daarna aan het verwerken. Ook is er meer aandacht nodig voor je relaties en je zelfbeeld. Eén schokkende gebeurtenis verwerken gaat vaak anders dan een heel patroon van vroege onveiligheid bijstellen."
      }
    ],
    kernpunten: [
      "PTSS draait om één duidelijke gebeurtenis; CPTSS om onveiligheid die zich herhaalt, vaak al vroeg.",
      "Bij complex trauma spelen je zelfbeeld, je emoties en je relaties een grotere rol.",
      "Het verschil bepaalt mee het tempo en de aanpak van de hulp."
    ],
    feitVsFabel: [
      {
        mythe: "Complex trauma is gewoon 'erge' PTSS.",
        feit: "Het is niet simpelweg meer van hetzelfde. Complex trauma raakt dieper aan wie je bent, aan je emoties en aan je hechting. Daarom is er vaak een andere aanpak nodig, stap voor stap."
      }
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de kenmerken van complex trauma en hoe je herstelt."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over trauma dat vroeg in je leven ontstaat."
      }
    ],
    gerelateerd: [
      "trauma-basis",
      "lichaam-onthoudt"
    ],
    _index: 1,
    beeld: {
      src: "img/concepten/trauma-vs-complex.jpg"
    }
  },
  {
    id: "zenuwstelsel-overleving",
    titel: "Je zenuwstelsel: vechten, vluchten, bevriezen, pleasen",
    icoon: "🫁",
    accent: "#3f7d72",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Je overlevingsreacties zijn geen karaktertrekken. Het zijn automatische standen van je lichaam. Ze beschermden je ooit — ook al zitten ze je nu soms in de weg.",
    blokken: [
      {
        kop: "Vier overlevingsreacties",
        tekst: "Bij gevaar kiest je lichaam razendsnel en zonder dat je het wilt een reactie: vechten (het gevaar bestrijden), vluchten (wegkomen), bevriezen (verstijven of afhaken) of pleasen (de ander tevreden houden om gevaar te voorkomen). Welke reactie het wordt, hangt af van de situatie en van wat vroeger het veiligst bleek."
      },
      {
        kop: "Geen keuze, maar een reflex",
        tekst: "Deze reacties komen uit oude, snelle delen van je brein. Ze gaan aan nog vóór je verstand kan meedenken. Daarom helpt 'gewoon rustig blijven' op zo'n moment bijna niet. Het is geen onwil en geen zwakte — het is je lichaam dat je wil beschermen."
      },
      {
        kop: "Van reflex naar keuze",
        tekst: "Je kunt leren welke stand je inschiet, en je lichaam helpen kalmeren: met je adem, met bewegen, met je voeten stevig op de grond, of met iemand bij je die veilig voelt. Hoe meer je lichaam merkt dat het nú veilig is, hoe meer ruimte je krijgt om zelf te kiezen in plaats van automatisch te reageren."
      }
    ],
    kernpunten: [
      "Vechten, vluchten, bevriezen en pleasen zijn automatische overlevingsstanden.",
      "Ze gaan aan nog vóór je verstand kan meedenken.",
      "Je kunt leren welke stand je inschiet, en jezelf kalmeren."
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over de verschillende standen van je zenuwstelsel."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de vier overlevingsreacties, ook pleasen (fawn)."
      }
    ],
    gerelateerd: [
      "window-uitleg",
      "trauma-basis"
    ],
    _index: 2,
    beeld: {
      src: "img/concepten/zenuwstelsel-overleving.jpg"
    }
  },
  {
    id: "window-uitleg",
    titel: "Stressvenster: hoeveel spanning je aankunt",
    icoon: "🎯",
    accent: "#46566e",
    categorie: "zenuwstelsel",
    leeswijzer: "4 min lezen",
    kort: "De 'window of tolerance' is de zone waarin je stress aankunt zonder in paniek te raken of helemaal dicht te klappen. Trauma maakt die zone smaller. Je kunt hem weer breder maken.",
    blokken: [
      {
        kop: "Binnen of buiten je zone",
        tekst: "Binnen je zone kun je tegelijk voelen én nadenken. Je hebt stress, maar je houdt het vast. Wordt het te veel, dan schiet je erboven: paniek, woede, je voelt je overspoeld. Wordt het te weinig, dan zak je eronder: leegte, verdoving, je klapt dicht. Deze zone heet in vakboeken ook wel de 'window of tolerance'."
      },
      {
        kop: "Na trauma is je zone smaller",
        tekst: "Trauma maakt die zone smaller. Je schiet er sneller boven- of onderuit, en kleine dingen duwen je er al overheen. Leren herkennen waar je zit — erboven, erin of eronder — geeft je houvast. Het is de eerste stap om bewust terug te gaan naar rust."
      },
      {
        kop: "Je zone weer breder maken",
        tekst: "Je maakt je zone breder door telkens een klein stukje aan de rand te oefenen en daarna terug te keren naar rust. Niet door jezelf te dwingen. Je voeten op de grond, je adem, bewegen en iemand die veilig voelt helpen je terug. Door dit vaak te herhalen, leert je lichaam dat het meer aankan."
      }
    ],
    kernpunten: [
      "Binnen je zone kun je voelen én nadenken; erbuiten raak je overspoeld of klap je dicht.",
      "Trauma maakt die zone smaller.",
      "Oefenen aan de rand en terugkeren naar rust maakt de zone weer breder."
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over de standen van je zenuwstelsel en terugkeren naar rust."
      }
    ],
    gerelateerd: [
      "zenuwstelsel-overleving",
      "herstel-niet-lineair"
    ],
    _index: 3,
    beeld: {
      src: "img/concepten/window-uitleg.jpg"
    }
  },
  {
    id: "lichaam-onthoudt",
    titel: "Trauma zit in je lichaam, niet in je hoofd",
    icoon: "🫀",
    accent: "#9a6a5e",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "Trauma is meer dan een nare herinnering. Je lichaam onthoudt de dreiging en blijft reageren — ook als je verstand allang weet dat het voorbij is.",
    blokken: [
      {
        kop: "Het lichaam houdt de score bij",
        tekst: "We denken bij trauma vaak aan het hoofd: een herinnering, een gedachte. Maar onderzoek laat zien dat trauma zich juist vastzet in je lichaam en je zenuwstelsel. Bessel van der Kolk vatte dat samen in één bekende zin: 'the body keeps the score' — je lichaam houdt de score bij. Het onthoudt de spanning, het alarm en de overlevingsstand, ook als je hoofd het verhaal niet meer scherp heeft."
      },
      {
        kop: "Wat je lichaam onthoudt",
        tekst: "Daardoor reageert je lijf soms uit zichzelf: een bonkend hart, gespannen spieren, een knoop in je maag, slecht slapen, of het gevoel altijd op scherp te staan. Dat gebeurt ook zonder duidelijke herinnering, en zelfs als je verstand weet dat er nú geen gevaar is. Het is geen aanstellerij — het is je lichaam dat nog in de overlevingsstand staat."
      },
      {
        kop: "Daarom is praten alleen niet altijd genoeg",
        tekst: "Omdat trauma in je lichaam zit, kun je het er niet altijd 'uit denken' of 'uit praten'. Je lichaam moet zelf ervaren dat het nú veilig is. Ademhaling, beweging, aarden (grounding) en lichaamsgerichte (somatische) therapie helpen daarbij. Heling gaat dus niet alleen via woorden, maar ook via je lijf."
      }
    ],
    kernpunten: [
      "Trauma zit niet alleen in je hoofd, maar ook in je lichaam en je zenuwstelsel.",
      "Je lichaam kan blijven reageren met spanning en alarm, ook zonder duidelijke herinnering.",
      "Herstel werkt vaak via het lichaam, niet alleen via praten."
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Het kernidee van dit boek: trauma leeft in het lichaam, niet alleen in het hoofd."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over trauma als vastgelopen overlevingsenergie in het lichaam."
      }
    ],
    gerelateerd: [
      "zenuwstelsel-overleving",
      "trauma-basis"
    ],
    _index: 4,
    beeld: {
      src: "img/concepten/lichaam-onthoudt.jpg"
    }
  },
  {
    id: "herstel-niet-lineair",
    titel: "Herstel gaat met vallen en opstaan",
    icoon: "🌱",
    accent: "#6a8f5e",
    categorie: "basis",
    leeswijzer: "4 min lezen",
    kort: "Herstel gaat in golven, met ups en downs. Een slechte week wist je vooruitgang niet uit — het hoort erbij.",
    blokken: [
      {
        kop: "Geen rechte lijn",
        tekst: "We stellen ons herstel graag voor als een lijn die langzaam omhoog gaat. In het echt gaat het met golven. Goede periodes wisselen af met mindere. Dat gebeurt vaak rond stress, rond de tijd van het jaar waarin iets ergs gebeurde, of juist als het beter gaat en er ruimte komt voor wat je lang hebt weggeduwd."
      },
      {
        kop: "Terugval hoort erbij",
        tekst: "Een terugval voelt als falen, maar dat is het niet. Vaak is het een teken dat er iets nieuws wordt aangeraakt, of gewoon dat het leven even zwaar is. Veel mensen merken dat de dalen na verloop van tijd minder diep worden, en dat ze er sneller weer uitkomen."
      },
      {
        kop: "Het doel verandert",
        tekst: "Herstel betekent bijna nooit dat het verleden wordt uitgewist. Het betekent dat het je minder overneemt. Triggers komen minder hard binnen, je kalmeert sneller, je keuzes worden weer van jou. De richting telt meer dan de snelheid."
      }
    ],
    kernpunten: [
      "Herstel gaat in golven, niet in een rechte lijn.",
      "Terugval hoort bij het proces, het is geen mislukking.",
      "Het doel is niet uitwissen, maar minder overgenomen worden."
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over herstel in stappen, met vallen en opstaan."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de vele wegen naar herstel."
      }
    ],
    gerelateerd: [
      "window-uitleg",
      "lichaam-onthoudt"
    ],
    _index: 5,
    beeld: {
      src: "img/concepten/herstel-niet-lineair.jpg"
    }
  },
  {
    id: "aces-uitgelegd",
    titel: "ACE's uitgelegd",
    icoon: "📊",
    accent: "#5b6a7d",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "ACE's zijn zware dingen die je vroeg meemaakte en die je kunt tellen. Ze bepalen niet je lot, maar helpen begrijpen waarom je lichaam en brein zo reageren.",
    blokken: [
      {
        kop: "Wat zijn ACE's?",
        tekst: "ACE's (Adverse Childhood Experiences) zijn negen veelvoorkomende vormen van tegenslag vóór je achttiende. Denk aan mishandeling, verwaarlozing, geweld thuis, een ouder met een verslaving of psychische problemen, of een scheiding. Onderzoekers gebruikten ze om te meten hoe vroege stress later doorwerkt in je gezondheid."
      },
      {
        kop: "Een score is geen oordeel",
        tekst: "Een hogere ACE-score betekent meer kans op lichamelijke en psychische klachten. Maar het is geen voorspelling van je toekomst. Veel mensen met een hoge score herstellen door veiligheid, steun en verwerking. De score is een startpunt om jezelf beter te begrijpen, geen stempel."
      },
      {
        kop: "Wat ACE's niet meten",
        tekst: "ACE's vangen niet alles. Emotionele verwaarlozing, pesten, een nare medische ervaring of stille onveiligheid staan er niet op. Je kunt een lage score hebben en toch diep gewond zijn — of andersom. Jouw ervaring telt, niet alleen wat op een lijstje past."
      }
    ],
    kernpunten: [
      "ACE's zijn zware vroege ervaringen die je kunt tellen, geen diagnose.",
      "Een hogere score betekent meer kans op klachten, geen vaststaand lot.",
      "Niet elke vorm van trauma staat op de ACE-lijst."
    ],
    feitVsFabel: [
      {
        mythe: "Een hoge ACE-score betekent dat je nooit meer beter wordt.",
        feit: "ACE's laten verbanden zien met gezondheid, maar ze sluiten herstel niet uit. Veel mensen bouwen met steun en hulp een vol en veilig leven op."
      }
    ],
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over de gevolgen van vroege tegenslag op de lange termijn."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe vroege stress je zenuwstelsel vormt."
      }
    ],
    gerelateerd: [
      "emotionele-verwaarlozing",
      "trauma-basis",
      "intergenerationeel-trauma"
    ],
    _index: 6,
    beeld: {
      src: "img/concepten/aces-uitgelegd.jpg"
    }
  },
  {
    id: "emotionele-verwaarlozing",
    titel: "Emotionele verwaarlozing",
    icoon: "🌫️",
    accent: "#516b78",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Niet gezien worden, niet getroost worden, er niet bij mogen horen — emotionele verwaarlozing laat diepe sporen na, ook zonder geweld of misbruik.",
    blokken: [
      {
        kop: "Wat is het precies?",
        tekst: "Emotionele verwaarlozing is dat je als kind steeds níét krijgt wat je nodig hebt om je veilig en waardevol te voelen. Denk aan: aandacht voor je gevoelens, troost bij verdriet, belangstelling voor wie je bent, en het gevoel dat je er mag zijn zoals je bent. Het gaat niet om iets wat er gebeurde, maar om wat er ontbrak."
      },
      {
        kop: "Onzichtbaar maar diep",
        tekst: "Omdat er geen duidelijke 'gebeurtenis' is, twijfelen veel mensen aan hun eigen pijn: 'Het viel toch wel mee?' Maar een kind dat leert dat zijn gevoelens lastig zijn, te veel zijn of niet tellen, gaat zich aanpassen. Het wordt heel zelfstandig, perfectionistisch of pleasend — vaak zonder het door te hebben."
      },
      {
        kop: "Herkennen en helen",
        tekst: "Veelvoorkomende sporen zijn: moeilijk voelen wat je zelf nodig hebt, schaamte dat je 'te veel' bent, een leegte die je probeert te vullen, en relaties waarin je je zo aanpast dat je jezelf kwijtraakt. Herstel begint met erkennen dat die leegte echt is — en dat je die niet alleen had hoeven dragen."
      }
    ],
    kernpunten: [
      "Emotionele verwaarlozing is het ontbreken van aandacht en troost.",
      "Het is onzichtbaar, maar kan even diep raken als geweld.",
      "Perfectionisme en pleasen zijn vaak manieren om met dat gemis om te gaan."
    ],
    feitVsFabel: [
      {
        mythe: "Als er geen misbruik was, valt het wel mee.",
        feit: "Steeds niet gezien of getroost worden kan een kind net zo diep raken. Het ontbreken van veiligheid is zelf een vorm van trauma."
      }
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over de gevolgen van emotionele verwaarlozing bij volwassenen."
      },
      {
        boek: "tiny-traumas",
        detail: "Over de impact van kleine gemissen die zich herhalen."
      }
    ],
    gerelateerd: [
      "aces-uitgelegd",
      "lichaam-onthoudt",
      "fawn-response"
    ],
    _index: 7,
    beeld: {
      src: "img/concepten/emotionele-verwaarlozing.jpg"
    }
  },
  {
    id: "triggers-cues",
    titel: "Emotionele triggers",
    icoon: "⚡",
    accent: "#4a6b8a",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Een trigger is geen aanstellerij. Het is een oud alarm dat nú afgaat. De kleine signalen die dat alarm aanzetten, noemen we cues.",
    blokken: [
      {
        kop: "Wat is een trigger?",
        tekst: "Een trigger is iets in het nu — een geluid, een geur, een situatie, een woord of een gevoel — dat je zenuwstelsel herkent als het oude gevaar. Je lichaam reageert alsof het toen opnieuw gebeurt, ook al weet je hoofd dat het veilig is. Dat verschil tussen weten en voelen hoort bij trauma."
      },
      {
        kop: "Cues: de kleine signalen vooraf",
        tekst: "Cues zijn de kleinere signalen die je systeem al op scherp zetten, nog vóór de echte trigger. Denk aan een bepaalde blik, een stilte, de geur van een parfum, of het gevoel buitengesloten te worden. Leer je die kleine signalen herkennen, dan heb je tijd om iets te doen voordat je overspoeld raakt."
      },
      {
        kop: "Triggers minder sterk maken",
        tekst: "Triggers verdwijnen niet als je ze negeert. Ze worden minder sterk als je je zenuwstelsel laat merken dat het nú veilig is. Je voeten op de grond, ademoefeningen, traumahulp en steeds opnieuw veilige ervaringen halen de lading eraf. De prikkel kan blijven, maar je reactie wordt kleiner en je herstelt sneller."
      }
    ],
    kernpunten: [
      "Triggers zijn oude alarmsignalen die in het nu afgaan.",
      "Cues zijn kleine signalen vooraf die je kunt leren herkennen.",
      "Hulp en aarden halen de lading eraf; wegkijken laat triggers niet verdwijnen."
    ],
    feitVsFabel: [
      {
        mythe: "Als je getriggerd raakt, overdrijf je of zoek je aandacht.",
        feit: "Een trigger is een automatische reactie van je lichaam, geen keuze. Je zenuwstelsel beschermt je tegen een gevaar dat ooit echt was."
      }
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe het lichaam triggers opslaat en aanzet."
      },
      {
        boek: "anchored",
        detail: "Over alarmtoestanden herkennen en kalmeren."
      }
    ],
    gerelateerd: [
      "hypervigilantie",
      "window-uitleg",
      "zenuwstelsel-overleving"
    ],
    _index: 8,
    beeld: {
      src: "img/concepten/triggers-cues.jpg"
    }
  },
  {
    id: "intergenerationeel-trauma",
    titel: "Trauma wordt doorgegeven van generatie op generatie",
    icoon: "🌳",
    accent: "#5f7259",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Trauma blijft niet bij één persoon. Wat je ouders of grootouders niet konden verwerken, kan doorwerken in gewoontes, stiltes en lichaamstaal.",
    blokken: [
      {
        kop: "Wat betekent het?",
        tekst: "Dit gaat over hoe onverwerkt leed wordt doorgegeven aan de volgende generatie. Vaak niet via verhalen, maar via gedrag, angst, stilte, overbescherming of afwezigheid. Oorlog, vervolging, verslaving, geweld thuis of diepe armoede kunnen zo doorwerken — soms zonder dat iemand het hardop zegt. Een ander woord hiervoor is intergenerationeel trauma: trauma dat van generatie op generatie gaat."
      },
      {
        kop: "Hoe het doorgaat",
        tekst: "Kinderen nemen de toestand van hun verzorgers over. Een ouder die altijd op scherp staat, leert een kind dat de wereld gevaarlijk is. Een ouder die gevoelens wegstopt, leert een kind dat voelen niet veilig is. Soms draag je stress ook letterlijk in je lichaam mee: er zijn aanwijzingen dat zware, langdurige stress sporen nalaat die doorgegeven kunnen worden."
      },
      {
        kop: "Doorbreken zonder schuld",
        tekst: "Dit is geen beschuldiging aan je ouders — het is een uitleg van patronen. Jij bent niet verantwoordelijk voor wat je ouders meemaakten. Wél voor wat je nu met die kennis doet. Door je bewust te worden, te verwerken en andere keuzes te maken in je eigen gezin of relaties, kun je de keten doorbreken."
      }
    ],
    kernpunten: [
      "Onverwerkt trauma kan doorgegeven worden via gedrag en stilte.",
      "Kinderen nemen de stress van hun verzorgers over.",
      "Doorbreken begint bij bewustwording, niet bij schuld."
    ],
    feitVsFabel: [
      {
        mythe: "Als mijn ouders niet gewelddadig waren, is er niets doorgegeven.",
        feit: "Ook stilte, afwezigheid, overbescherming of onverwerkte angst kan worden doorgegeven. Het gaat om wat niet verwerkt is, niet alleen om wat zichtbaar schadelijk was."
      }
    ],
    bronnen: [
      {
        boek: "break-the-cycle",
        detail: "Over patronen doorbreken over generaties heen."
      },
      {
        boek: "myth-of-normal",
        detail: "Over hoe pijn in families en in de maatschappij doorwerkt."
      }
    ],
    gerelateerd: [
      "aces-uitgelegd",
      "emotionele-verwaarlozing",
      "trauma-vs-complex"
    ],
    _index: 9,
    beeld: {
      src: "img/concepten/intergenerationeel-trauma.jpg"
    }
  },
  {
    id: "toxisch-schaamte-schuld",
    titel: "Giftige schaamte (toxic shame) vs. gewone schuld",
    icoon: "🪨",
    accent: "#7c6f8f",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "Schuld zegt 'ik deed iets fout'. Giftige schaamte zegt 'ik bén fout'. Die tweede stem is een van de zwaarste sporen van trauma.",
    blokken: [
      {
        kop: "Schuld: over wat je deed",
        tekst: "Gewone schuld gaat over één daad: je deed iets wat niet oké was, en je wilt het goedmaken. Schuld kan je vooruithelpen — ze laat zien dat je een geweten hebt en verantwoordelijkheid kunt nemen. Ze raakt wat je deed, niet wie je bent."
      },
      {
        kop: "Giftige schaamte: over wie je bent",
        tekst: "Giftige schaamte (in vakboeken: toxische schaamte) is anders. Ze zegt dat jij als geheel niet deugt, beschamend bent, te veel of te weinig. Ze komt vaak uit vroege ervaringen waarin jij de schuld kreeg van iets waar je niets aan kon doen. Die stem blijft fluisteren, ook als je niets fout deed."
      },
      {
        kop: "Het tegengif",
        tekst: "Giftige schaamte verliest haar kracht door verbinding en mildheid. Door iemand die je verhaal ziet zonder te oordelen. Of doordat je zelf je bange kanten leert troosten in plaats van afkraken. Schuld kun je herstellen; schaamte heelt doordat je gezien en aanvaard wordt."
      }
    ],
    kernpunten: [
      "Schuld gaat over wat je deed; giftige schaamte over wie je bent.",
      "Schaamte ontstaat vaak als kinderen de schuld krijgen van problemen van volwassenen.",
      "Mildheid en gezien worden maken giftige schaamte zwakker."
    ],
    feitVsFabel: [
      {
        mythe: "Schaamte houdt je scherp en zet je aan om beter te doen.",
        feit: "Giftige schaamte verlamt en zet je alleen. Ze leidt tot verstoppen en jezelf afkraken, niet tot groei. Mildheid werkt beter als motor voor verandering."
      }
    ],
    bronnen: [
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte die je vastzet en hoe je die losmaakt."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over giftige schaamte bij complex trauma."
      }
    ],
    gerelateerd: [
      "lichaam-onthoudt",
      "emotionele-verwaarlozing",
      "herstel-niet-lineair"
    ],
    _index: 10,
    beeld: {
      src: "img/concepten/toxisch-schaamte-schuld.jpg"
    }
  },
  {
    id: "hypervigilantie",
    titel: "Altijd op scherp staan (hypervigilantie)",
    icoon: "👁️",
    accent: "#46566e",
    categorie: "zenuwstelsel",
    leeswijzer: "4 min lezen",
    kort: "Altijd alert, altijd je omgeving aftasten op gevaar — dat is hypervigilantie. Je zenuwstelsel staat nog op wacht, ook als er nú geen gevaar is.",
    blokken: [
      {
        kop: "Wat is het?",
        tekst: "Hypervigilantie betekent dat je voortdurend op scherp staat. Je tast steeds je omgeving af op gevaar, je let op kleine veranderingen in iemands stem of gezicht, en je schrikt snel. Het is alsof je innerlijke alarm nooit uitgaat — zelfs als alles rustig is."
      },
      {
        kop: "Waarom het ontstaat",
        tekst: "Als je vroeg leerde dat de wereld onvoorspelbaar of gevaarlijk was, werd op scherp staan een manier om te overleven. Je lichaam leerde: 'als ik alles in de gaten houd, kan ik op tijd reageren.' Dat was slim. Maar nu put het je uit en maakt het echte rust moeilijk."
      },
      {
        kop: "Kalmeren en vertragen",
        tekst: "Op scherp staan wordt niet minder door jezelf te dwingen te ontspannen. Het wordt minder doordat je zenuwstelsel keer op keer merkt dat het nú veilig is: vaste routines, mensen op wie je kunt rekenen, slaap, bewegen en aardingsoefeningen. Traumahulp helpt je alarm langzaam terug te zetten."
      }
    ],
    kernpunten: [
      "Hypervigilantie is voortdurend op scherp staan en zoeken naar gevaar.",
      "Het was ooit een slimme manier om te overleven, maar het put je nu uit.",
      "Herstel vraagt om herhaalde ervaringen van veiligheid, niet om wilskracht."
    ],
    feitVsFabel: [
      {
        mythe: "Hypervigilantie betekent dat je paranoïde of overspannen bent.",
        feit: "Het is een begrijpelijke reactie van je lichaam op eerdere onveiligheid, geen karakterfout. Je zenuwstelsel doet wat het geleerd heeft om je te beschermen."
      }
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over slaap, alertheid en het alarmsysteem na trauma."
      },
      {
        boek: "anchored",
        detail: "Over terugkeren van hoge spanning naar rust."
      }
    ],
    gerelateerd: [
      "triggers-cues",
      "window-uitleg",
      "zenuwstelsel-overleving"
    ],
    _index: 11,
    beeld: {
      src: "img/concepten/hypervigilantie.jpg"
    }
  },
  {
    id: "emotionele-incest-metafoor",
    titel: "Emotionele incest ",
    icoon: "🪞",
    accent: "#8f6a9b",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Geen seksueel misbruik, maar wel: jij was de emotionele partner van je eigen ouder. Die omkering laat diepe sporen na.",
    blokken: [
      {
        kop: "Wat de term bedoelt",
        tekst: "Emotionele incest — ook wel 'verborgen incest' genoemd — beschrijft een situatie waarin een ouder een kind gebruikt als emotionele partner. Voor troost, advies, ruzies of nabijheid die bij een volwassene hoort. Het kind wordt 'de speciale' of 'de sterke', maar betaalt met zijn eigen grenzen en met zijn kind-zijn."
      },
      {
        kop: "Hoe het voelt",
        tekst: "Veel mensen herkennen dit: je voelt je verantwoordelijk voor het geluk van je ouder, je voelt schuld als je iets voor jezelf wilt, je hebt moeite met intieme relaties (je bent al 'bezet'), en je draagt een onzichtbare last. Er was geen seksueel contact, maar er werd wel een grens overschreden."
      },
      {
        kop: "Herstel begint bij grenzen",
        tekst: "Helen betekent erkennen: je was een kind, geen partner. Je mag je eigen behoeften hebben, zonder schuld. Vaak helpt therapie om die rol los te laten, de schaamte lichter te maken, en te leren dat dichtbij iemand zijn niet betekent dat je verantwoordelijk bent voor die ander."
      }
    ],
    kernpunten: [
      "Emotionele incest is een grens die overschreden wordt, zonder seksueel contact.",
      "Het kind wordt de emotionele partner van de ouder.",
      "Herstel begint bij erkennen van die rol en je grenzen terugpakken."
    ],
    feitVsFabel: [
      {
        mythe: "Als er geen misbruik was, was de band met mijn ouder normaal.",
        feit: "Een kind dat de emotionele last van een volwassene draagt, mist zijn eigen kind-zijn. Die omkering is schadelijk, ook zonder aanraking."
      }
    ],
    bronnen: [
      {
        boek: "trapped-in-the-mirror",
        detail: "Over hoe ouder en kind in elkaar spiegelen bij emotionele incest."
      },
      {
        boek: "will-i-ever-be-good-enough",
        detail: "Over de rol van het 'gouden kind' en de prijs van loyaliteit."
      }
    ],
    gerelateerd: [
      "emotionele-verwaarlozing",
      "fawn-response",
      "intergenerationeel-trauma"
    ],
    _index: 12,
    beeld: {
      src: "img/concepten/emotionele-incest-metafoor.jpg"
    }
  },
  {
    id: "fawn-response",
    titel: "People-pleasen als overlevingsreactie (fawning)",
    icoon: "🤝",
    accent: "#9a7b4f",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Pleasen, je aanpassen, het goedmaken — de fawn-reactie is je zenuwstelsel dat veiligheid zoekt door de ander tevreden te houden.",
    blokken: [
      {
        kop: "De vierde overlevingsreactie",
        tekst: "Naast vechten, vluchten en bevriezen is er pleasen (in het Engels: fawn). Je past je aan, je gaat ruzie uit de weg, je zegt ja terwijl je nee bedoelt, en je leest de ander om gevaar te voorkomen. Het is niet 'te aardig zijn', maar een automatische reactie van toen vechten of vluchten niet veilig was."
      },
      {
        kop: "Hoe het ontstaat",
        tekst: "Pleasen ontstaat vaak bij kinderen die afhankelijk waren van een ouder met sterk wisselende buien. Door de ander tevreden te houden, bewaarde je de vrede — en soms je eigen veiligheid. Die manier van doen sleet zo in dat je hem nu automatisch gebruikt, ook als er geen gevaar meer is."
      },
      {
        kop: "Van pleasen naar kiezen",
        tekst: "Herstel betekent niet hard worden of ruzie zoeken. Het betekent leren je eigen grenzen te voelen en nee te zeggen zonder paniek. Kleine oefeningen helpen: een grens aangeven bij iemand die veilig is, of zeggen wat je nodig hebt. Zo leert je systeem dat jezelf zijn niet gevaarlijk is."
      }
    ],
    kernpunten: [
      "Pleasen (fawn) is de vierde overlevingsreactie: veiligheid zoeken door je aan te passen.",
      "Het ontstaat vaak bij een ouder met sterk wisselende buien.",
      "Herstel is leren je grenzen voelen, niet hard worden."
    ],
    feitVsFabel: [
      {
        mythe: "Pleasen betekent dat je zwak bent of geen ruggengraat hebt.",
        feit: "Pleasen is een slimme overlevingsreactie die je zenuwstelsel in gevaar inzette. Het is geen karaktertrek, maar iets wat je kunt afleren."
      }
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over pleasen (fawn) als vierde overlevingsreactie."
      },
      {
        boek: "disease-to-please",
        detail: "Over pleasen als patroon en hoe je het doorbreekt."
      }
    ],
    gerelateerd: [
      "zenuwstelsel-overleving",
      "emotionele-verwaarlozing",
      "emotionele-incest-metafoor"
    ],
    _index: 13,
    beeld: {
      src: "img/concepten/fawn-response.jpg"
    }
  }
];

const HECHTINGSSTIJLEN = [
  {
    id: "veilig",
    naam: "Veilige hechting",
    icoon: "🪺",
    accent: "#5f7259",
    kleur: "#e3eadf",
    beeld: {
      src: "img/hechting/veilig.jpg",
      alt: "Twee volwassenen zitten dicht tegen elkaar aan; de ene leunt ontspannen tegen de ander in een warme kamer.",
      kaartPos: "center center",
      detailPos: "center 38%"
    },
    kaartZin: "Nabijheid voelt veilig, en afstand ook.",
    inEenZin: "Dichtbij zijn voelt veilig, en op jezelf staan ook — je kunt dichtbij komen én jezelf blijven.",
    herkenbaar: [
      "Je kunt om steun vragen én alleen zijn, zonder dat het bedreigend voelt.",
      "Ruzie maakt je niet kapot; je gelooft dat je het samen kunt oplossen.",
      "Je gaat er meestal van uit dat mensen het goed met je voorhebben."
    ],
    ontstaan: "Veilige hechting groeit als je verzorgers vaak genoeg goed op je waren afgestemd, voorspelbaar en troostend. Je leerde dat je behoeften welkom waren en dat er iemand kwam als je riep — niet perfect, maar 'goed genoeg'.",
    inRelaties: "In relaties kun je nabijheid en ruimte combineren. Je durft je kwetsbaar te tonen, grenzen te stellen en je partner te vertrouwen, zonder steeds te checken of weg te vluchten.",
    groei: "Ook wie niet veilig begon, kan alsnog veiligheid opbouwen. Door goede ervaringen in veilige relaties of in therapie kan je systeem leren dat dichtbij zijn veilig is.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over veilige hechting bij volwassenen."
      }
    ],
    gerelateerd: [
      "angstig",
      "vermijdend"
    ]
  },
  {
    id: "angstig",
    naam: "Angstige hechting",
    icoon: "🌊",
    accent: "#4a6b8a",
    kleur: "#dde6ee",
    beeld: {
      src: "img/hechting/angstig.jpg",
      alt: "Een volwassene zit alleen bij het raam met een hand bij de mond en een bezorgde blik.",
      kaartPos: "center center",
      detailPos: "center 36%"
    },
    kaartZin: "Je zoekt nabijheid en schrikt snel van afstand.",
    inEenZin: "Je verlangt sterk naar nabijheid en voelt snel of er afstand of afwijzing dreigt.",
    herkenbaar: [
      "Je piekert snel of de ander nog wel van je houdt.",
      "Afstand voelt bedreigend; je zoekt geruststelling en bevestiging.",
      "Een korte stilte of een kort antwoord kan meteen een alarm in je aanzetten."
    ],
    ontstaan: "Angstige hechting ontstaat vaak bij zorg die wisselt: soms warm en aanwezig, soms afwezig of afwijzend. Je leerde extra je best te doen en alert te blijven om de band niet te verliezen.",
    inRelaties: "Je hebt veel te geven, maar je angst om verlaten te worden kan leiden tot vastklampen, controleren of jezelf te veel wegcijferen. Zonder dat je het wilt, kan dat een vermijdende partner juist verder wegduwen.",
    groei: "Leer je eigen alarm herkennen en kalmeren. En laat je waarde niet afhangen van hoe de ander reageert. Dat geeft je meer ruimte. Veilige, betrouwbare relaties helpen je systeem tot rust te komen.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over angstige hechting en het samenspel met vermijdende partners."
      },
      {
        boek: "running-on-empty",
        detail: "Over hoe vroeg gemis doorwerkt in je behoefte aan bevestiging."
      }
    ],
    gerelateerd: [
      "vermijdend",
      "veilig"
    ]
  },
  {
    id: "vermijdend",
    naam: "Vermijdende hechting",
    icoon: "🏔️",
    accent: "#9a7b4f",
    kleur: "#ece3d6",
    beeld: {
      src: "img/hechting/vermijdend.jpg",
      alt: "Een man zit met gekruiste armen afgewend terwijl een vrouw naast hem voorzichtig contact zoekt.",
      kaartPos: "center center",
      detailPos: "center 42%"
    },
    kaartZin: "Je houdt graag ruimte en regie bij nabijheid.",
    inEenZin: "Je vindt onafhankelijkheid belangrijk en voelt je ongemakkelijk bij te veel nabijheid of afhankelijkheid.",
    herkenbaar: [
      "Je redt jezelf liever en vindt hulp vragen lastig.",
      "Bij veel nabijheid of emotie wil je afstand nemen.",
      "Je kunt je overspoeld voelen door wat een ander nodig heeft."
    ],
    ontstaan: "Vermijdende hechting ontstaat vaak als je gevoelens en behoeften vroeg niet welkom waren of werden afgewezen. Je leerde dat je beter op jezelf kon rekenen en dat je kwetsbaar opstellen risicovol was.",
    inRelaties: "Je bent vaak betrouwbaar en zelfstandig, maar emotionele nabijheid kan benauwen. Onder druk trek je je terug. Een angstige partner wordt daar juist ongerust van — een pijnlijke dans van toenadering en afstand.",
    groei: "Kleine stapjes in kwetsbaarheid, je eigen gevoelens leren toelaten, en ontdekken dat afhankelijkheid niet gevaarlijk hoeft te zijn: zo kun je dichterbij komen zonder jezelf te verliezen.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over vermijdende hechting bij volwassenen."
      }
    ],
    gerelateerd: [
      "angstig",
      "gedesorganiseerd"
    ]
  },
  {
    id: "gedesorganiseerd",
    naam: "Gedesorganiseerde hechting",
    icoon: "🌀",
    accent: "#7c6f8f",
    kleur: "#e6e0ec",
    beeld: {
      src: "img/hechting/gedesorganiseerd.jpg",
      alt: "Een volwassene zit alleen met beide handen bij het hoofd en een gespannen, zoekende blik.",
      kaartPos: "center center",
      detailPos: "center 36%"
    },
    kaartZin: "Nabijheid trekt én schrikt tegelijk af.",
    inEenZin: "Je verlangt naar nabijheid én bent er bang voor — die twee botsen, vaak na vroege onveiligheid.",
    herkenbaar: [
      "Je trekt mensen naar je toe en duwt ze weer weg, soms snel achter elkaar.",
      "Nabijheid kan tegelijk troostend en bedreigend voelen.",
      "Relaties voelen soms verwarrend, heftig of chaotisch."
    ],
    ontstaan: "Deze stijl ontstaat vaak als de bron van troost óók de bron van angst was. Bijvoorbeeld bij een verzorger die onvoorspelbaar of beangstigend was, of zelf getraumatiseerd. Je systeem vond geen vaste manier om mee om te gaan — vandaar de botsing vanbinnen.",
    inRelaties: "Toenadering en terugtrekking wisselen elkaar af. Dat is verwarrend voor jou en je partner. Onder de chaos zit vaak een diep verlangen naar veilige verbinding én een diepe angst dat die verbinding gevaarlijk is.",
    groei: "Met veiligheid, voorspelbaarheid en meestal professionele steun kan ook deze stijl opschuiven naar meer veiligheid. Het begint bij een relatie — vaak met een therapeut — die steeds opnieuw veilig blijft.",
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege onveiligheid in relaties en de gevolgen voor hechting."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over de botsing tussen verlangen naar en angst voor nabijheid."
      }
    ],
    gerelateerd: [
      "angstig",
      "vermijdend"
    ]
  }
];

const STOORNISSEN = [
  {
    id: "borderline",
    naam: "Borderline-patroon",
    ookGenoemd: "borderline-persoonlijkheidsstoornis (BPS), emotieregulatiestoornis",
    icoon: "🌊",
    accent: "#8f6a9b",
    inEenZin: "Heftige emoties, een wankel gevoel van wie je bent en een diepe angst om verlaten te worden — vaak ontstaan door vroege onveiligheid.",
    watHetIs: [
      {
        kop: "Een patroon, geen karakter",
        tekst: "Bij het borderline-patroon horen heftige emoties die snel omslaan, impulsief gedrag, een wisselend zelfbeeld en stormachtige relaties. Veel mensen met dit patroon maakten vroeg onveiligheid of trauma mee. Steeds vaker zien we het als een begrijpelijke aanpassing aan een onveilige start."
      },
      {
        kop: "De kern: angst om verlaten te worden",
        tekst: "Onder het gedrag zit vaak een diepe angst om in de steek gelaten te worden, en moeite om je emoties zelf te kalmeren. Wat van buiten 'aanstellerij' of 'manipulatie' lijkt, is vanbinnen vaak pure nood om te overleven."
      }
    ],
    vaakVerwardMet: "Heftige emoties of een zware periode betekenen niet meteen 'borderline'. Ook complex trauma (CPTSS) en de stemmingswisselingen van een bipolaire stoornis lijken er soms op, maar ze verschillen echt. Alleen een deskundige kan dit uit elkaar halen.",
    binnenkant: "Vanbinnen kan het voelen als leven zonder huid. Emoties komen razendsnel en veel te hard binnen, de leegte kan ondraaglijk zijn, en de angst dat mensen weggaan kleurt bijna elke relatie. Veel mensen schamen zich diep voor reacties die ze zelf niet kunnen stoppen.",
    watHelpt: [
      "Dialectische gedragstherapie (DBT): leren je emoties te kalmeren en crisismomenten aan te kunnen.",
      "Schematherapie: werken aan de patronen die eronder zitten.",
      "Een stabiele, voorspelbare band met je therapeut."
    ],
    nietDoen: [
      "'Borderline' gebruiken als scheldwoord of als verklaring voor alles.",
      "Iemand alleen nog zien als zijn diagnose.",
      "Zelf een diagnose plakken op jezelf of een ander."
    ],
    disclaimer: "Dit is uitleg om te begrijpen, geen diagnose. Een persoonlijkheidsstoornis stelt alleen een deskundige vast.",
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over de overlap tussen complex trauma en moeite om emoties te kalmeren."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over de innerlijke delen achter heftige reacties."
      }
    ],
    gerelateerd: [
      "narcistisch",
      "vermijdend"
    ],
    _index: 0,
    beeld: {
      src: "img/stoornissen/borderline.jpg"
    }
  },
  {
    id: "narcistisch",
    naam: "Narcistisch patroon",
    ookGenoemd: "narcistische persoonlijkheidsstoornis (NPS)",
    icoon: "🪞",
    accent: "#9a7b4f",
    inEenZin: "Een kwetsbare eigenwaarde, verborgen achter een schild van grootspraak of grote gevoeligheid voor kritiek — vaak met een gewonde kern.",
    watHetIs: [
      {
        kop: "Het schild en de wond",
        tekst: "Bij het narcistische patroon denken mensen aan grootspraak, een sterke behoefte aan bewondering en weinig zichtbaar inlevingsvermogen. Maar onder dat schild zit meestal een kwetsbare eigenwaarde en diepe schaamte. Zich groter voordoen is dan een manier om een gevoel van waardeloosheid te bedekken."
      },
      {
        kop: "Twee gezichten",
        tekst: "Sommige mensen tonen vooral de grote, dominante kant. Anderen vooral een kwetsbare, snel gekwetste kant. Beide hebben vaak een verleden waarin liefde voorwaardelijk was: je moest presteren of een rol spelen om erbij te horen."
      }
    ],
    vaakVerwardMet: "Zelfvertrouwen, ambitie of af en toe egoïstisch doen is geen narcistische stoornis. Het woord wordt online vaak te makkelijk gebruikt. Een echte persoonlijkheidsstoornis is iets anders dan vervelend gedrag.",
    binnenkant: "Vanbinnen kan er een voortdurende, uitputtende druk zijn om een mooi beeld op te houden, en een grote gevoeligheid voor kritiek of vernedering. Echt dichtbij iemand komen voelt riskant, want dan zou de gewonde kern zichtbaar kunnen worden.",
    watHelpt: [
      "Langdurige therapie die zich richt op de relatie (zoals schematherapie).",
      "Werken aan de schaamte eronder, niet alleen aan het gedrag.",
      "Voor naasten: stevige grenzen en zelf ook steun zoeken."
    ],
    nietDoen: [
      "'Narcist' als scheldwoord gebruiken voor iedereen die egoïstisch doet.",
      "Van een afstand een diagnose stellen over bekende mensen of je ex.",
      "Vergeten dat ook achter dit patroon een gewond mens schuilt."
    ],
    disclaimer: "Dit is uitleg om te begrijpen, geen diagnose. Persoonlijkheidsstoornissen stelt alleen een deskundige vast — niet op basis van een lijstje of een ruzie.",
    bronnen: [
      {
        boek: "myth-of-normal",
        detail: "Over hoe voorwaardelijke liefde vroeg een kwetsbaar zelf kan vormen."
      }
    ],
    gerelateerd: [
      "borderline",
      "vermijdend"
    ],
    _index: 1,
    beeld: {
      src: "img/stoornissen/narcistisch.jpg"
    }
  },
  {
    id: "vermijdend",
    naam: "Vermijdend patroon",
    ookGenoemd: "vermijdende persoonlijkheidsstoornis",
    icoon: "🚪",
    accent: "#5a7d86",
    inEenZin: "Een diepe gevoeligheid voor afwijzing die leidt tot terugtrekken — niet uit onverschilligheid, maar uit angst.",
    watHetIs: [
      {
        kop: "Verlangen én vermijden",
        tekst: "Bij het vermijdende patroon verlangt iemand sterk naar verbinding, maar gaat die uit de weg uit angst voor afwijzing, kritiek of vernedering. Sociale situaties worden vermeden, niet omdat men anderen niet wil, maar omdat de pijn van mogelijke afwijzing te groot voelt."
      },
      {
        kop: "Niet hetzelfde als verlegenheid",
        tekst: "Verlegenheid is heel gewoon. Bij dit patroon is de angst zo sterk dat ze werk, relaties en het dagelijks leven flink in de weg zit. Vaak ligt er een verleden van kleinerende of afwijzende ervaringen onder."
      }
    ],
    vaakVerwardMet: "Introvert of verlegen zijn is iets anders. Introverte mensen genieten van alleen zijn, zonder de verlammende angst voor afwijzing. Ook sociale angst lijkt erop, maar gaat minder ver.",
    binnenkant: "Vanbinnen is er vaak een pijnlijk verlangen om erbij te horen, samen met de gedachte 'als ze me echt kennen, wijzen ze me af'. Die gedachte maakt elke stap naar nabijheid spannend en uitputtend.",
    watHelpt: [
      "Therapie die stap voor stap veilige sociale ervaringen opbouwt.",
      "Werken aan het gevoel van tekortschieten en de schaamte eronder.",
      "Een geduldige therapeut die niet oordeelt."
    ],
    nietDoen: [
      "Aandringen of pushen ('doe niet zo moeilijk, ga gewoon').",
      "Terugtrekken zien als desinteresse of arrogantie.",
      "Zelf de diagnose invullen — laat dat aan een deskundige."
    ],
    disclaimer: "Dit is uitleg om te begrijpen, geen diagnose. Twijfel je over jezelf of een naaste? Zoek een gekwalificeerde hulpverlener.",
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over hoe vroege afwijzing een diep gevoel van tekortschieten vormt."
      }
    ],
    gerelateerd: [
      "borderline",
      "narcistisch"
    ],
    _index: 2,
    beeld: {
      src: "img/stoornissen/vermijdend.jpg"
    }
  }
];


// ============================================================
// EHBT — Crisislijnen, acute plannen, mythes & grondbeginselen
// Onafhankelijk geschreven. De acute plannen zijn grounding-hulp,
// geen behandeling. Bij gevaar: bel 112, 1813 of 106.
// ============================================================
const CRISISLIJNEN = [
  {
    naam: "Noodnummer",
    nummer: "112",
    uitleg: "bij acuut levensgevaar"
  },
  {
    naam: "Zelfmoordlijn",
    nummer: "1813",
    uitleg: "gratis, dag en nacht"
  },
  {
    naam: "Tele-Onthaal",
    nummer: "106",
    uitleg: "een luisterend oor"
  }
];

const NOODHULP = [
  {
    id: "nood-zelfbeschadiging",
    titel: "Drang om jezelf pijn te doen",
    icoon: "🆘",
    kort: "Als de drang er nú is: jij bent het waard om veilig te blijven. Begin hier, bel zo nodig meteen om hulp.",
    stappen: [
      {
        kop: "Bel als het acuut is",
        tekst: "Als je het gevoel hebt dat je jezelf iets gaat aandoen: bel nu 112, of de Zelfmoordlijn op 1813 (gratis, dag en nacht). Je hoeft dit niet alleen te dragen.",
        zeg: "“Ik bel nu. Ik hoef dit niet alleen op te lossen.”"
      },
      {
        kop: "Maak de drempel hoger",
        tekst: "Breng afstand tussen jou en de middelen: leg ze weg, ga naar een andere kamer, vraag iemand bij je te zijn. Tijd winnen is genoeg — de piek zakt."
      },
      {
        kop: "Overbrug de golf",
        tekst: "Probeer een sterke maar veilige prikkel: ijsblokjes vasthouden, een koude douche, hard knijpen in een kussen, intens bewegen. Dit kan de drang dempen zonder schade.",
        zeg: null
      },
      {
        kop: "Blijf niet alleen",
        tekst: "Stuur één bericht naar iemand die je vertrouwt, of bel een hulplijn en blijf aan de lijn tot het zakt. Verbinding is bescherming."
      },
      {
        kop: "Zoek daarna hulp",
        tekst: "Deze plannen overbruggen het moment, ze vervangen geen behandeling. Bespreek terugkerende drang met je huisarts of een hulpverlener — er is veel mogelijk."
      }
    ],
    bronnen: [
      "complex-ptsd-workbook"
    ]
  },
  {
    id: "nood-flashback",
    titel: "Emotionele flashback",
    icoon: "🌊",
    kort: "Overspoeld door een oud gevoel van angst, schaamte of kleinheid, zonder duidelijke aanleiding. Dit haalt je terug naar nu.",
    stappen: [
      {
        kop: "Benoem wat er gebeurt",
        tekst: "Zeg tegen jezelf dat dit een flashback is. Het voelt nu, maar het komt uit het verleden. Alleen al het benoemen geeft je denkende brein weer een voet aan de grond.",
        zeg: "“Dit is een flashback. Het voelt nu, maar het is van toen.”"
      },
      {
        kop: "Anker je in het heden",
        tekst: "Zet je voeten stevig op de grond, kijk om je heen en benoem waar je bent en welk jaar het is. Je bent niet meer waar het gebeurde."
      },
      {
        kop: "Vertraag je adem",
        tekst: "Adem langer uit dan in. Een lange uitademing vertelt je zenuwstelsel dat het gevaar voorbij is.",
        zeg: null
      },
      {
        kop: "Wees mild voor het bange deel",
        tekst: "Er is een deel van je dat zich nu heel klein en bang voelt. Spreek het toe zoals je een bang kind zou troosten — met warmte, niet met streng­heid.",
        zeg: "“Je bent nu veilig. Ik laat je niet alleen.”"
      },
      {
        kop: "Daarna",
        tekst: "Als flashbacks vaak terugkomen, helpt traumagerichte therapie (zoals EMDR) om de lading eronder te verwerken. Bespreek het met een hulpverlener."
      }
    ],
    bronnen: [
      "cptsd-surviving-thriving",
      "body-keeps-score"
    ]
  },
  {
    id: "nood-paniek",
    titel: "Paniekaanval",
    icoon: "💓",
    kort: "Bonkend hart, kortademig, het gevoel dat er iets vreselijks gebeurt. Het is heftig, maar niet gevaarlijk — en het zakt.",
    stappen: [
      {
        kop: "Weet: dit gaat voorbij",
        tekst: "Een paniekaanval voelt levensbedreigend, maar is het niet. Hij piekt en zakt vanzelf, meestal binnen enkele minuten. Je gaat dit doorstaan.",
        zeg: "“Dit is paniek. Het is heftig, maar het is niet gevaarlijk.”"
      },
      {
        kop: "Adem traag uit",
        tekst: "Adem in door je neus (tel tot 4) en langer uit door je mond (tel tot 6). De lange uitademing kalmeert je zenuwstelsel."
      },
      {
        kop: "Aard je in je zintuigen",
        tekst: "Noem 5 dingen die je ziet, 4 die je hoort, 3 die je voelt. Dit haalt je aandacht weg bij de paniek en terug naar het hier en nu.",
        zeg: null
      },
      {
        kop: "Vecht niet tegen de sensaties",
        tekst: "Laat de golf er zijn in plaats van ertegen te vechten. Verzet maakt paniek vaak groter; meebewegen laat hem sneller zakken."
      },
      {
        kop: "Daarna",
        tekst: "Komen paniekaanvallen vaker voor, laat dan een arts lichamelijke oorzaken uitsluiten en bespreek behandeling — paniek is goed behandelbaar."
      }
    ],
    bronnen: [
      "anchored"
    ]
  },
  {
    id: "nood-dissociatie",
    titel: "Dissociatie — terug uit de mist",
    icoon: "🌫️",
    kort: "Leeg, ver weg, of 'naast jezelf'? Deze stappen nodigen je lichaam uit om weer aanwezig te komen.",
    stappen: [
      {
        kop: "Merk het op zonder oordeel",
        tekst: "Dat 'mistige' of afwezige gevoel is dissociatie — een oude bescherming. Je hoeft jezelf niet hard terug te dwingen; uitnodigen werkt beter.",
        zeg: "“Ik glijd weg. Ik ben veilig en ik kom rustig terug.”"
      },
      {
        kop: "Wek je zintuigen (5-4-3-2-1)",
        tekst: "Noem 5 dingen die je ziet, 4 die je hoort, 3 die je voelt, 2 die je ruikt, 1 die je proeft. Concrete zintuigen halen je terug."
      },
      {
        kop: "Geef je lichaam een sterke prikkel",
        tekst: "Houd iets kouds vast, ruik iets sterks (munt, citroen), stamp met je voeten, of strek je armen. Sterke, veilige sensaties zetten het systeem weer 'aan'.",
        zeg: null
      },
      {
        kop: "Beweeg en kom in contact",
        tekst: "Sta op, loop rond, drink iets, of bel een veilig iemand. Beweging en verbinding helpen je terug in je lichaam."
      },
      {
        kop: "Daarna",
        tekst: "Terugkerende dissociatie verdient aandacht van een traumagerichte hulpverlener. Het is een teken dat er ooit te veel was — niet dat je faalt."
      }
    ],
    bronnen: [
      "healing-fragmented-selves",
      "anchored"
    ]
  },
  {
    id: "nood-nachtmerrie",
    titel: "Nachtelijke paniek of nachtmerrie",
    icoon: "🌙",
    kort: "Wakker geschrokken, hart bonzend, in de war. Zo kom je terug naar veiligheid en rust.",
    stappen: [
      {
        kop: "Oriënteer je",
        tekst: "Doe een zacht licht aan. Kijk om je heen en zeg waar je bent en welk jaar het is. De droom was echt in je lichaam, maar je bent nu veilig in je kamer.",
        zeg: "“Ik ben wakker, ik ben in mijn kamer, ik ben veilig.”"
      },
      {
        kop: "Kalmeer je lichaam",
        tekst: "Drink een slok water, voel het bed onder je, adem traag uit. Geef je hart even de tijd om te zakken."
      },
      {
        kop: "Forceer de slaap niet",
        tekst: "Lukt het niet meteen weer? Sta even op, doe iets rustigs en saais bij gedempt licht, en ga terug als je slaperig wordt. Vechten tegen de slaap werkt averechts.",
        zeg: null
      },
      {
        kop: "Daarna",
        tekst: "Bij terugkerende nachtmerries helpt overdag werken aan een nieuw, veiliger einde van de droom (imagery rehearsal), of traumagerichte therapie. Bespreek het met een hulpverlener."
      }
    ],
    bronnen: [
      "body-keeps-score"
    ]
  },
  {
    id: "nood-overspoeling",
    titel: "Overspoeld lichaam — te veel, te snel",
    icoon: "⚡",
    kort: "Alles is te veel: te luid, te fel, te dichtbij. Dit helpt je het volume omlaag te brengen.",
    stappen: [
      {
        kop: "Verklein je wereld",
        tekst: "Zoek een rustige, prikkelarme plek. Dim licht, demp geluid, ga even weg uit de situatie als dat kan. Minder input is geen vlucht maar verstandige zelfzorg.",
        zeg: "“Ik mag het rustiger maken. Dat is oké.”"
      },
      {
        kop: "Aard je via je lijf",
        tekst: "Voel je voeten op de grond, duw je handen tegen elkaar, of wikkel je in een deken. Stevige, begrenzende sensaties helpen je systeem kalmeren."
      },
      {
        kop: "Adem en vertraag",
        tekst: "Lange uitademingen, schouders laag. Je hoeft nu niets op te lossen — alleen het volume zakken.",
        zeg: null
      },
      {
        kop: "Daarna",
        tekst: "Raak je vaak overspoeld, dan helpt het om te leren hoeveel spanning je aankunt, en die ruimte langzaam groter te maken, eventueel met een traumagerichte hulpverlener."
      }
    ],
    bronnen: [
      "anchored",
      "waking-the-tiger"
    ]
  },
  {
    id: "nood-suicide",
    titel: "Suïcidale gedachten",
    icoon: "🫂",
    kort: "Als je denkt dat je niet meer verder kunt: je bent niet alleen, en deze gedachten hoeven geen opdracht te zijn. Begin hier.",
    stappen: [
      {
        kop: "Bel nu als je in gevaar bent",
        tekst: "Als je een concreet plan hebt of het gevoel dat je jezelf iets gaat aandoen: bel meteen 112 of de Zelfmoordlijn op 1813 (gratis, dag en nacht). Je hoeft dit niet alleen te dragen.",
        zeg: "“Ik bel nu. Ik hoef dit niet alleen op te lossen.”"
      },
      {
        kop: "Maak afstand tot het plan",
        tekst: "Leg middelen weg, ga naar een andere ruimte, of vraag iemand bij je te blijven. Elke minuut die je wint, maakt de piek kleiner. Gedachten zijn zwaar, maar ze zijn niet hetzelfde als handelen.",
        zeg: null
      },
      {
        kop: "Verbind met één veilig iemand",
        tekst: "Stuur één bericht: 'Ik heb het moeilijk en heb steun nodig.' Of bel Tele-Onthaal (106) en blijf aan de lijn. Verbinding is het tegengif van eenzaamheid.",
        zeg: "“Ik heb het nu zwaar. Ik hoef dit niet alleen te dragen.”"
      },
      {
        kop: "Herinner jezelf: dit is een golf",
        tekst: "Suïcidale gedachten komen vaak in pieken — ze voelen permanent, maar dat zijn ze meestal niet. Adem traag uit, drink water, blijf bij iemand tot de piek zakt.",
        zeg: null
      },
      {
        kop: "Zoek daarna professionele hulp",
        tekst: "Terugkerende suïcidale gedachten verdienen aandacht van een hulpverlener. Ze zijn een signaal van pijn, geen karakterfout. Bespreek het met je huisarts of een therapeut — er is veel mogelijk."
      }
    ],
    bronnen: [
      "complex-ptsd-workbook",
      "what-happened-to-you"
    ]
  },
  {
    id: "nood-woede",
    titel: "Woede die je overneemt",
    icoon: "🔥",
    kort: "Razend, trillend, klaar om te exploderen? Woede is vaak een beschermer — maar nú wil je veilig blijven, voor jezelf en anderen.",
    stappen: [
      {
        kop: "Stop en maak ruimte",
        tekst: "Verlaat de situatie als dat kan. Zeg desnoods: 'Ik heb even ruimte nodig.' Afstand is geen vlucht maar verstandige zelfbescherming.",
        zeg: "“Ik heb even ruimte nodig. Ik kom terug als ik kalmer ben.”"
      },
      {
        kop: "Ontlaad fysiek, veilig",
        tekst: "Stamp met je voeten, knijp in een kussen, ren, of duw je handen hard tegen elkaar. Laat de energie door je lichaam zonder schade aan te richten.",
        zeg: null
      },
      {
        kop: "Vertraag je adem",
        tekst: "Lange uitademingen kalmeren je zenuwstelsel. Adem in (4 tellen), uit (6 tellen). Herhaal tot je hart iets rustiger klopt.",
        zeg: "“Dit is woede. Het is heftig, maar ik ben veilig.”"
      },
      {
        kop: "Zoek wat eronder ligt",
        tekst: "Onder woede zit vaak iets kwetsbaarders: angst, pijn, vernedering of een oude grensoverschrijding. Je hoeft het nu niet op te lossen — alleen te erkennen dat er meer is dan alleen boosheid.",
        zeg: null
      },
      {
        kop: "Daarna",
        tekst: "Terugkerende woede-uitbarstingen verdienen aandacht. Ze wijzen vaak op oude wonden, of op dat je systeem nog maar weinig aankan. Bespreek het met een hulpverlener die trauma begrijpt."
      }
    ],
    bronnen: [
      "cptsd-surviving-thriving",
      "no-bad-parts"
    ]
  },
  {
    id: "nood-relatie-trigger",
    titel: "Trigger in een relatie of conflict",
    icoon: "💔",
    kort: "Een woord, toon of afstand van iemand dichtbij haalt je terug naar een oud gevaar. Zo kom je terug in het heden zonder de relatie te verliezen.",
    stappen: [
      {
        kop: "Pauzeer het gesprek",
        tekst: "Zeg rustig dat je even moet pauzeren. Dat is geen straf maar zelfzorg. 'Ik ben nu overspoeld en heb vijf minuten nodig' is een volwaardige grens.",
        zeg: "“Ik ben nu overspoeld. Ik heb even pauze nodig en kom dan terug.”"
      },
      {
        kop: "Benoem wat er gebeurt",
        tekst: "Dit voelt als toen, maar je bent nu in een ander moment met een andere persoon. Alleen al het benoemen — 'dit is een trigger' — haalt je denkende brein weer online.",
        zeg: "“Dit is een trigger. Het voelt als toen, maar ik ben nu hier.”"
      },
      {
        kop: "Kalmeer je lichaam",
        tekst: "Voel je voeten, adem lang uit, of stap even naar buiten. Je hoeft het conflict nu niet op te lossen — alleen je zenuwstelsel te helpen zakken.",
        zeg: null
      },
      {
        kop: "Kom terug als je klaar bent",
        tekst: "Als je kalmer bent, kun je het gesprek hervatten — eventueel met één zin: 'Wat er net gebeurde, raakte iets ouds bij mij.' Je hoeft niet alles uit te leggen om je grens te stellen.",
        zeg: null
      },
      {
        kop: "Daarna",
        tekst: "Als relaties je steeds terug in oude pijn trekken, helpt traumagerichte relatietherapie of individuele therapie om triggers te herkennen en de ruimte die je aankunt groter te maken."
      }
    ],
    bronnen: [
      "anchored",
      "break-the-cycle"
    ]
  }
];

const MYTHES = [
  {
    id: "mythe-tijd-heelt",
    mythe: "“Tijd heelt alle wonden.”",
    feit: "Tijd alleen heelt trauma meestal niet. Onverwerkt trauma kan jarenlang sluimeren en bij stress of triggers in alle hevigheid terugkomen — de klok zet het niet stil.\n\nWat heelt is niet de tijd zelf, maar wat je er in die tijd mee doet: veiligheid opbouwen, verwerken, verbinding vinden. Soms verzacht tijd de scherpe randen, maar de kern blijft vaak wachten tot ze gezien wordt.",
    bron: "body-keeps-score",
    bronDetail: "over hoe onverwerkt trauma actief blijft in lichaam en brein.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-geen-herinnering",
    mythe: "“Als je je het niet herinnert, is er niets ergs gebeurd.”",
    feit: "Het ontbreken van herinneringen bewijst niets. Juist onder hoge stress of op jonge leeftijd slaat het brein ervaringen vaak in losse stukjes op, of houdt het ze uit bescherming op afstand.\n\nTrauma laat zich ook voelen zonder helder verhaal: via lichaamsreacties, terugkerende gevoelens en patronen in relaties. Je hoeft niet 'alles te weten' om er last van te hebben — of om er iets aan te kunnen doen.",
    bron: "body-keeps-score",
    bronDetail: "over hoe stress de opslag van herinneringen verandert.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-moet-praten",
    mythe: "“Je moet erover praten om eroverheen te komen.”",
    feit: "Praten kan helpen, maar het in detail navertellen van je trauma is geen voorwaarde — en kan zelfs schaden als er nog geen veiligheid is. Voor veel mensen werken lichaamsgerichte wegen minstens zo goed.\n\nGoede traumatherapie begint met rust en stevigheid, en gaat in kleine stapjes. Methodes als EMDR of lichaamsgerichte (somatische) therapie helpen je verwerken zonder dat je alles hoeft uit te spreken of te herbeleven.",
    bron: "waking-the-tiger",
    bronDetail: "over verwerking via het lichaam, niet alleen via woorden.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-alleen-oorlog",
    mythe: "“Trauma is alleen voor soldaten en grote rampen.”",
    feit: "Trauma gaat niet over hoe spectaculair de oorzaak is, maar over wat er achterbleef in je zenuwstelsel. Ook langdurige emotionele kou, verwaarlozing of onveiligheid thuis kan diep traumatiseren.\n\nDat noemen we vaak complex trauma. Het laat soms minder zichtbare maar even hardnekkige sporen na — in je zelfbeeld, je emoties en je relaties.",
    bron: "myth-of-normal",
    bronDetail: "over de bredere, alledaagse oorsprong van trauma.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-sterker",
    mythe: "“Wat je niet doodt, maakt je sterker.”",
    feit: "Tegenslag maakt niet automatisch sterker. Onverwerkt trauma kan juist kwetsbaarder maken: voor angst, depressie, verslaving en lichamelijke klachten.\n\nGroei na trauma bestaat wél — 'posttraumatische groei' — maar die komt door verwerking, steun en betekenis geven, niet door de pijn op zich. De wond zelf is geen cadeau; wat je er met hulp mee doet, kan dat worden.",
    bron: "deepest-well",
    bronDetail: "over de gezondheidsgevolgen van onverwerkte vroege tegenslag.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-te-jong",
    mythe: "“Je was te jong om er iets van te onthouden, dus het deert je niet.”",
    feit: "Juist het jonge brein is extra kwetsbaar. Wat er vroeg gebeurt, vormt mee hoe je zenuwstelsel, je stressregulatie en je gevoel van veiligheid zich ontwikkelen — ook zonder bewuste herinnering.\n\nVroege ervaringen leven voort als lichaamspatronen en hechtingsstijlen. 'Niet herinneren' betekent dus niet 'geen invloed'; soms is de invloed juist het diepst.",
    bron: "healing-developmental-trauma",
    bronDetail: "over de impact van vroege ervaringen op de ontwikkeling.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-functioneert-prima",
    mythe: "“Jij functioneert prima, dus jij hebt geen trauma.”",
    feit: "Goed functioneren en trauma sluiten elkaar niet uit. Veel mensen werken, zorgen en presteren uitstekend terwijl ze van binnen worstelen — soms is dat functioneren zelf een overlevingsstrategie.",
    bron: "running-on-empty",
    bronDetail: "over hoog functioneren ondanks vroege emotionele verwaarlozing.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-vergeven-verplicht",
    mythe: "“Vergeven is verplicht om verder te kunnen.”",
    feit: "Vergeven kan heilzaam zijn, maar het is geen morele plicht en geen voorwaarde voor herstel. Je mag boos blijven, afstand nemen, of besluiten dat iemand geen tweede kans verdient — dat is geen falen, maar zelfbescherming.\n\nHerstel gaat over jouw vrijheid en veiligheid, niet over het geruststellen van degene die pijn deed. Soms is de meest helende stap juist: erkennen wat er gebeurde, zonder het goed te praten of te vergeten.",
    bron: "break-the-cycle",
    bronDetail: "over loskomen van schuld en plicht zonder jezelf te verliezen.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-zwakte-tonen",
    mythe: "“Zwakte tonen is gevaarlijk.”",
    feit: "Als je vroeg leerde dat kwetsbaarheid bestraft werd, voelt tonen wie je bent inderdaad riskant. Dat was een slimme aanpassing aan een onveilige omgeving — geen karakterfout.\n\nIn veilige situaties is kwetsbaarheid juist de weg naar verbinding en heling. Het gevaar zat in het verleden; nu kun je geleidelijk leren wie veilig genoeg is om je echte gevoelens te delen. Dat is geen zwakte, maar moed.",
    bron: "running-on-empty",
    bronDetail: "over het verbergen van behoeften na emotionele verwaarlozing.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-trauma-is-ptss",
    mythe: "“Trauma is hetzelfde als PTSS.”",
    feit: "PTSS is een diagnose voor een bepaald patroon na één duidelijke, overweldigende gebeurtenis: herbelevingen, vermijden en altijd op scherp staan. Trauma is breder: het gaat om wat er in je zenuwstelsel achterbleef, met of zonder die diagnose.\n\nVeel mensen dragen diepe sporen van langdurige onveiligheid — complex trauma — zonder dat ze aan alle kenmerken van PTSS voldoen. Jouw lijden hoeft geen etiket te hebben om echt te zijn, of om hulp te verdienen.",
    bron: "cptsd-surviving-thriving",
    bronDetail: "over het verschil tussen eenmalig trauma en complex trauma.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-boeken-alleen",
    mythe: "“Je kunt jezelf therapieën met boeken alleen.”",
    feit: "Boeken kunnen enorm verhelderen, troosten en richting geven. Maar ze vervangen geen therapeutische relatie, vooral niet wanneer trauma diep zit of wanneer je regelmatig overspoeld raakt.\n\nVerwerken vraagt vaak een veilig menselijk tegenover dat je tempo volgt, je lichaamssignalen meeneemt en ingrijpt als het te veel wordt. Boeken en professionele hulp vullen elkaar aan — ze zijn geen of-of.",
    bron: "complex-ptsd-workbook",
    bronDetail: "over gefaseerd herstel en wanneer professionele begeleiding nodig is.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-dissociatie-spook",
    mythe: "“Dissociatie is eng en spookachtig.”",
    feit: "Dissociatie — wegdrijven, leegte, 'niet bij jezelf zijn' — voelt vaak beangstigend, maar het is geen gekte. Het is een ingebouwde bescherming van je zenuwstelsel wanneer iets te overweldigend werd om te voelen.\n\nMiljoenen mensen dissociëren; het is een normale overlevingsreactie, niet iets wat stuk is. Met begrip, grounding en vaak traumagerichte hulp kun je leren weer aanwezig te zijn — zonder angst voor je eigen beschermingssysteem.",
    bron: "no-bad-parts",
    bronDetail: "over beschermende delen en het begrijpen van dissociatie zonder angst.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-medicatie-zwakte",
    mythe: "“Medicatie nemen is zwakte.”",
    feit: "Medicatie is geen teken dat je faalt, maar een hulpmiddel wanneer je zenuwstelsel zo lang onder druk stond dat het extra steun nodig heeft. Slaap, angst of depressie na trauma hebben een biologische basis — geen gebrek aan wilskracht.\n\nSommige mensen hebben medicatie tijdelijk nodig om überhaupt te kunnen rusten of mee te doen aan therapie. Dat is geen zwaktebod maar een steuntje — en de keuze ervoor is net zo goed als de keuze ertegen.",
    bron: "when-body-says-no",
    bronDetail: "over de lichamelijke kosten van chronische stress en wanneer steun nodig is.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-ouders-beschermen",
    mythe: "“Je moet je ouders beschermen.”",
    feit: "Kinderen passen zich van nature aan hun verzorgers aan — ook door de pijn van volwassenen te dragen of het geheim te bewaren. Dat rolletje kan tot ver in je volwassen leven doorwerken: je verdedigt hen, praat klein wat er gebeurde, of voelt je schuldig als je boos bent.\n\nMaar jij was het kind. Het was niet jouw taak om hen te beschermen. Herstel begint vaak met jezelf toestaan om de waarheid te zien — zonder dat je trouw hoeft te blijven aan het zwijgen.",
    bron: "will-i-ever-be-good-enough",
    bronDetail: "over de loyaliteit van het kind en de prijs van het beschermen van ouders.",
    leeftijd: [
      "zelf",
      "vroeg"
    ]
  },
  {
    id: "mythe-therapeuten-zelfde",
    mythe: "“Alle therapeuten zijn hetzelfde.”",
    feit: "Therapeuten verschillen sterk in opleiding, aanpak en trauma-begrip. Een slechte ervaring betekent niet dat hulp niet werkt — het kan betekenen dat de match, methode of timing niet klopte.\n\nTraumagerichte aanpakken (EMDR, lichaamsgericht werk, IFS, schematherapie) vragen specifieke kennis. Zoek iemand die jouw type trauma herkent, veiligheid serieus neemt en je tempo respecteert. De juiste match kan alles verschil maken.",
    bron: "what-happened-to-you",
    bronDetail: "over wat goede traumazorg inhoudt en waar je op kunt letten.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-lichaamswerk-zweverig",
    mythe: "“Lichaamswerk is zweverig en onwetenschappelijk.”",
    feit: "Lichaamsgerichte traumatherapie is geen rage, maar steunt op tientallen jaren onderzoek: trauma wordt opgeslagen in je zenuwstelsel en lichaam, niet alleen als verhaal in je hoofd. Adem, beweging, aanraking en aarden zijn echte, meetbare ingangen naar herstel.\n\nAanpakken als lichaamsgerichte (somatische) therapie en oefeningen die met je zenuwstelsel werken, worden wereldwijd in traumaklinieken gebruikt. Het voelt soms ongewoon, maar de wetenschap erachter is degelijk.",
    bron: "body-keeps-score",
    bronDetail: "over hoe trauma in het lichaam leeft en waarom lichaamsgerichte methodes werken.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  },
  {
    id: "mythe-voor-altijd-kapot",
    mythe: "“Trauma maakt je voor altijd kapot.”",
    feit: "Trauma laat diepe sporen na — dat ontkennen we niet. Maar 'voor altijd kapot' is geen wet. Hersenen en zenuwstelsels kunnen veranderen: met veiligheid, verwerking en steeds opnieuw goede ervaringen kan je systeem opnieuw leren.\n\nHerstel betekent zelden dat alles wordt uitgewist. Het betekent dat het verleden je minder overneemt, dat je sneller terug tot rust komt, en dat je weer keuzes maakt die van jou zijn. Veel mensen leven niet ondanks hun verleden, maar met een dieper begrip van zichzelf erna.",
    bron: "end-of-trauma",
    bronDetail: "over hoe het brein kan veranderen en herstel na trauma mogelijk is.",
    leeftijd: [
      "zelf",
      "recent",
      "vroeg"
    ]
  }
];

const REGELS = [
  {
    titel: "Veiligheid eerst, verwerking later",
    tekst: "Verwerken kan pas als er genoeg veiligheid en stabiliteit is. Goede traumazorg bouwt eerst een stevige basis; pas daarna wordt er gedoseerd aan de herinneringen gewerkt.",
    bron: "complex-ptsd-workbook"
  },
  {
    titel: "Het lichaam doet mee",
    tekst: "Trauma leeft in het lichaam, niet alleen in gedachten. Ademhaling, beweging, ritme en veiligheid zijn daarom geen bijzaak maar volwaardige wegen naar herstel.",
    bron: "body-keeps-score"
  },
  {
    titel: "Niet de gebeurtenis, maar het spoor",
    tekst: "Trauma is wat er binnenin achterbleef, niet de gebeurtenis op zich. Daarom telt jouw beleving — niet de vraag of het 'erg genoeg' was volgens anderen.",
    bron: "myth-of-normal"
  },
  {
    titel: "Tempo is therapie",
    tekst: "Doseren, niet overspoelen. Verwerken binnen wat je aankunt heelt; eroverheen geduwd worden brengt je uit balans. Traag mag — richting telt meer dan snelheid.",
    bron: "waking-the-tiger"
  },
  {
    titel: "Verbinding heelt, eenzaamheid verdiept",
    tekst: "Trauma gedijt in eenzaamheid en schaamte. Een veilige relatie — met een dierbare of therapeut — is een van de krachtigste helende factoren die er zijn.",
    bron: "no-bad-parts"
  },
  {
    titel: "Je reacties waren overleving",
    tekst: "Vechten, vluchten, bevriezen, pleasen, afhaken (dissociëren): het waren slimme aanpassingen aan een onmogelijke situatie. Geen zwakte, maar bescherming die haar werk deed.",
    bron: "cptsd-surviving-thriving"
  },
  {
    titel: "Mildheid wint van de strenge stem",
    tekst: "Zachtheid voor jezelf is geen luxe, maar precies de tegenkracht die trauma nodig heeft. Strengheid voedt schaamte; mildheid maakt haar zwakker.",
    bron: "no-bad-parts"
  },
  {
    titel: "Herstel gaat met vallen en opstaan",
    tekst: "Heling gaat met golven en terugval. Een slechte periode wist je vooruitgang niet uit. Geduld en mildheid horen bij het proces.",
    bron: "complex-ptsd-workbook"
  },
  {
    titel: "Vergeven is een keuze, geen plicht",
    tekst: "Je hoeft niemand te vergeven om te mogen helen. Herstel draait om jouw veiligheid en vrijheid — niet om de ander gerust te stellen of het verleden goed te praten.",
    bron: "break-the-cycle"
  },
  {
    titel: "Kwetsbaarheid is geen zwakte",
    tekst: "Tonen dat je het moeilijk hebt was vroeg misschien onveilig, maar in een veilige context is kwetsbaarheid de poort naar verbinding. Bescherming en openheid kunnen naast elkaar bestaan.",
    bron: "running-on-empty"
  },
  {
    titel: "Boeken én hulp gaan samen",
    tekst: "Zelfinzicht via boeken is waardevol, maar diep trauma vraagt vaak een veilig menselijk tegenover. Professionele begeleiding en eigen regie vullen elkaar aan.",
    bron: "complex-ptsd-workbook"
  },
  {
    titel: "Je mag de waarheid zien",
    tekst: "Je hoeft je ouders, familie of verleden niet te beschermen ten koste van jezelf. Trouw blijven aan het zwijgen is geen liefde — eerlijk zijn tegen jezelf is de basis van herstel.",
    bron: "will-i-ever-be-good-enough"
  },
  {
    titel: "Herstel is mogelijk",
    tekst: "Trauma verandert je, maar bepaalt niet voor altijd wie je bent. Met tijd, veiligheid en de juiste hulp kan je zenuwstelsel opnieuw leren — niet perfect, maar vrijer.",
    bron: "end-of-trauma"
  }
];

