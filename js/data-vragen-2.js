// ============================================================
// EHBT — Vragen, deel 2
// Onafhankelijk geschreven, geïnspireerd door traumawetenschap.
// ============================================================

const VRAGEN_2 = [
  {
    id: "kan-ik-geen-nee-zeggen",
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
        detail: "Over slaap, hyperalertheid en hoe het zenuwstelsel rust opnieuw leert."
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
    kort: "Je hoeft geen therapeut te zijn — je grootste bijdrage is veilig, voorspelbaar en aanwezig zijn. En je mag óók je eigen grenzen en draagkracht serieus nemen.",
    blokken: [
      {
        tekst: "Iemand liefhebben met trauma kan verwarrend zijn: terugtrekking, prikkelbaarheid of plotselinge afstand voelen soms als afwijzing, terwijl het vaak overlevingsreacties zijn. Je wilt helpen, maar weet niet altijd hoe — en raakt zelf soms uitgeput."
      },
      {
        kop: "Veiligheid is je grootste geschenk",
        tekst: "Je hoeft het trauma niet te 'repareren'. Wat het meeste helpt, is een stabiele, voorspelbare aanwezigheid: kalm blijven als je partner overspoeld raakt, niet persoonlijk nemen wat uit angst voortkomt, en samen rust opzoeken. Dit heet co-regulatie: jouw gereguleerde zenuwstelsel helpt dat van je partner kalmeren."
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
        detail: "Over co-regulatie: hoe een gereguleerd zenuwstelsel een ander helpt kalmeren."
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
        tekst: "Moderne traumabehandeling werkt gefaseerd. De eerste fase draait om stabilisatie: veiligheid, zelfregulatie en grip krijgen op overspoeling. Pas als die basis er is, wordt er — gedoseerd — gewerkt aan de herinneringen, en altijd binnen je 'window of tolerance'. Opnieuw overspoeld raken is geen behandeling maar een teken dat het te snel of te veel gaat."
      },
      {
        kop: "Verwerken zonder verdrinken",
        tekst: "Methodes als EMDR of somatische therapie helpen je het verleden te verwerken terwijl je met één voet stevig in het heden blijft. Je hoeft niet alles in detail te vertellen of te herbeleven om vooruit te komen. Een goede therapeut doseert, checkt voortdurend of je het aankunt, en stopt voordat het te veel wordt."
      }
    ],
    doeDit: [
      "Zoek een traumagerichte therapeut die gefaseerd werkt.",
      "Bespreek vooraf hoe overspoeling wordt voorkomen en hoe je 'stop' aangeeft.",
      "Bouw eerst stabiliteit en zelfregulatie op."
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
        detail: "Over verwerken binnen het draagvermogen van het zenuwstelsel."
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
        tekst: "De 'window of tolerance' is een handig beeld voor de zone waarin je je veilig genoeg voelt om helder te denken, te voelen én aanwezig te blijven. Binnen dat raam kun je stress hanteren. Erbuiten schiet je omhoog (overspoeling, paniek, woede) of omlaag (verdoving, leegte, shutdown)."
      },
      {
        kop: "Trauma versmalt het raam",
        tekst: "Bij trauma wordt die zone vaak smal: je schiet sneller in hyperactivatie of in shutdown, en kleine prikkels duwen je er al overheen. Dat is geen onwil, maar een zenuwstelsel dat overgevoelig is afgesteld. Herkennen waar je zit — boven, binnen of onder het raam — is de eerste stap naar regie."
      },
      {
        kop: "Het raam verbreden",
        tekst: "Je verbreedt je window niet door grenzen te forceren, maar door telkens net aan de rand te oefenen en dan terug te keren naar veiligheid. Grounding, ademhaling, beweging en de aanwezigheid van veilige mensen helpen je terug in het raam. Met herhaling leert je systeem dat het meer aankan — de zone groeit mee."
      }
    ],
    doeDit: [
      "Leer je signalen herkennen van 'te hoog' (paniek) en 'te laag' (verdoofd).",
      "Gebruik adem en grounding om terug te keren naar je raam.",
      "Oefen aan de rand en keer terug naar veiligheid — zo groeit de zone."
    ],
    vermijd: [
      "Jezelf forceren ver buiten je raam 'omdat je sterk moet zijn'.",
      "Overspoeling of shutdown negeren en doorduwen.",
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
    kort: "Goede traumatherapie is erop gericht om je stap voor stap te helpen verwerken, niet om je te overspoelen. Een tijdelijke toename van emoties kan voorkomen, maar langdurig meer ontregeling is een signaal dat het tempo, de aanpak of de samenwerking opnieuw bekeken moet worden.",
    blokken: [
      {
        kop: "Het verschil zit in tempo en veiligheid",
        tekst: "Veel mensen zijn bang dat therapie oude pijn opnieuw opent. Die bezorgdheid is begrijpelijk. Misschien heb je ervaringen bewust of onbewust op afstand gehouden om te kunnen functioneren, of heb je eerder hulp gehad die te snel ging. Toch is goede traumatherapie niet bedoeld om je zomaar terug te brengen naar pijnlijke ervaringen. Het doel is juist om moeilijke ervaringen op een veilige en draagbare manier te benaderen.\nkop: Het verschil zit in tempo en veiligheid\ntekst: Traumatherapie werkt meestal het best wanneer er eerst voldoende veiligheid, stabiliteit en vertrouwen is opgebouwd. Pas daarna wordt gekeken naar wat verwerkt wil worden. <strong>Een tijdelijke toename van emoties, vermoeidheid of gevoeligheid na een sessie kan normaal zijn.</strong> Verwerken vraagt energie. Maar wanneer je langdurig overspoeld blijft, steeds verder ontregeld raakt of je onveilig voelt binnen het therapeutische contact, verdient dat aandacht. Dat betekent niet automatisch dat therapie verkeerd is, maar wel dat het tempo of de aanpak mogelijk niet goed aansluit bij wat jij nodig hebt.\nkop: Jij hoeft het niet alleen te dragen\ntekst: Goede traumatherapie gebeurt samen. Je mag aangeven wanneer iets te veel wordt, vragen om te vertragen of bespreken wat een sessie met je doet. Een therapeut hoort ruimte te maken voor die signalen. <strong>Vertrouwen en samenwerking zijn geen extra's, maar een belangrijk onderdeel van herstel.</strong> Voelt het contact structureel onveilig of niet passend, dan mag je onderzoeken of een andere therapeut beter bij je past.\n\nkop: Meer voelen is niet hetzelfde als achteruitgaan\ntekst: Wanneer mensen voor het eerst meer contact krijgen met emoties, lichaamsreacties of herinneringen die lang op afstand stonden, kan dat aanvoelen alsof het slechter gaat. Soms is dat een teken dat er meer bewustzijn ontstaat, niet dat er schade wordt aangericht. Het verschil zit vaak in de vraag of je na verloop van tijd ook meer begrip, keuzevrijheid, stabiliteit of herstelmomenten ervaart. Als dat uitblijft, bespreek dat dan open met je behandelaar."
      }
    ],
    doeDit: [
      "Bespreek vooraf hoe een therapeut omgaat met veiligheid, stabilisatie en overspoeling.",
      "Geef aan wanneer iets te snel gaat of te intens voelt.",
      "Houd in de gaten hoe je je tussen sessies voelt en bespreek langdurige ontregeling.",
      "Zoek een therapeut bij wie je je voldoende veilig voelt om eerlijk te zijn over je grenzen."
    ],
    vermijd: [
      "Denken dat meer emoties automatisch betekenen dat therapie schade doet.",
      "Een slechte ervaring met één therapeut zien als bewijs dat therapie niet werkt.",
      "Blijven doorgaan met een aanpak die je telkens opnieuw overspoelt zonder dit te bespreken.",
      "Je ongemak verzwijgen uit angst om lastig gevonden te worden."
    ],
    zegDit: "\"Dit voelt te veel voor mij op dit moment.\", \"Kunnen we vertragen?\", \"Ik merk dat ik tussen sessies ontregeld blijf.\", \"Ik wil graag begrijpen waarom we deze stap zetten.\"",
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerde traumabehandeling, stabilisatie en het belang van tempo."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over veiligheid, zelfregulatie en het voorkomen van overspoeling tijdens traumawerk."
      }
    ],
    gerelateerd: [
      "moet-ik-herbeleven",
      "hoe-lang-duurt-herstel",
      "weinig-jeugdherinneringen"
    ],
    _index: 13
  }
];
