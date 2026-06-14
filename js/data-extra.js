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
    kort: "Wakker geschrokken, hart bonzend, gedesoriënteerd. Zo kom je terug naar veiligheid en rust.",
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
        tekst: "Merk je vaak overspoeling, dan helpt het om je 'window of tolerance' te leren kennen en te verbreden, eventueel met een traumagerichte hulpverlener."
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
        tekst: "Stuur één bericht: 'Ik heb het moeilijk en heb steun nodig.' Of bel Tele-Onthaal (106) en blijf aan de lijn. Verbinding is het tegengif van isolement.",
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
        tekst: "Terugkerende woede-explosies verdienen aandacht. Ze wijzen vaak op oude wonden of een te smal draagvermogen. Bespreek het met een hulpverlener die trauma begrijpt."
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
        tekst: "Als relaties je steeds terug in oude pijn trekken, helpt traumagerichte relatietherapie of individuele therapie om triggers te herkennen en je window of tolerance te verbreden."
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
    feit: "Het ontbreken van herinneringen bewijst niets. Juist onder hoge stress of op jonge leeftijd slaat het brein ervaringen vaak fragmentarisch op, of houdt het ze beschermend op afstand.\n\nTrauma laat zich ook voelen zonder helder verhaal: via lichaamsreacties, terugkerende gevoelens en patronen in relaties. Je hoeft niet 'alles te weten' om er last van te hebben — of om er iets aan te kunnen doen.",
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
    feit: "Praten kan helpen, maar het in detail navertellen van je trauma is geen voorwaarde — en kan zelfs schaden als er nog geen veiligheid is. Voor veel mensen werken lichaamsgerichte wegen minstens zo goed.\n\nGoede traumatherapie begint met stabiliteit en doseert zorgvuldig. Methodes als EMDR of somatische therapie helpen je verwerken zonder dat je alles hoeft uit te spreken of te herbeleven.",
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
    feit: "Als je vroeg leerde dat kwetsbaarheid bestraft werd, voelt tonen wie je bent inderdaad riskant. Dat was een slimme aanpassing aan een onveilige omgeving — geen karakterfout.\n\nIn veilige contexten is kwetsbaarheid juist de weg naar verbinding en heling. Het gevaar zat in het verleden; nu kun je geleidelijk leren wie veilig genoeg is om je echte gevoelens te delen. Dat is geen zwakte, maar moed.",
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
    feit: "PTSS is een diagnose voor een specifiek patroon na een afgebakende, overweldigende gebeurtenis: herbelevingen, vermijding, hyperalertheid. Trauma is breder: het verwijst naar wat er in je zenuwstelsel achterbleef, met of zonder die diagnose.\n\nVeel mensen dragen diepe sporen van langdurige onveiligheid — complex trauma — zonder aan alle PTSS-criteria te voldoen. Jouw lijden hoeft geen label te hebben om echt te zijn, of om hulp te verdienen.",
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
    feit: "Dissociatie — wegdrijven, leegte, 'niet bij jezelf zijn' — voelt vaak beangstigend, maar het is geen gekte. Het is een ingebouwde bescherming van je zenuwstelsel wanneer iets te overweldigend werd om te voelen.\n\nMiljoenen mensen dissociëren; het is een normale overlevingsreactie, geen defect. Met begrip, grounding en vaak traumagerichte hulp kun je leren weer aanwezig te zijn — zonder angst voor je eigen beschermingssysteem.",
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
    feit: "Medicatie is geen teken dat je faalt, maar een hulpmiddel wanneer je zenuwstelsel zo lang onder druk stond dat het extra steun nodig heeft. Slaap, angst of depressie na trauma hebben een biologische basis — geen gebrek aan wilskracht.\n\nSommige mensen hebben medicatie tijdelijk nodig om überhaupt te kunnen rusten of deelnemen aan therapie. Dat is geen uitweg maar een steiger — en de keuze ervoor is net zo legitiem als de keuze ertegen.",
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
    feit: "Kinderen passen zich van nature aan hun verzorgers aan — ook door de pijn van volwassenen te dragen of het geheim te bewaren. Dat rolletje kan tot ver in het volwassen leven doorwerken: je verdedigt hen, minimaliseert wat er gebeurde, of voelt schuld als je boos bent.\n\nMaar jij was het kind. Het was niet jouw taak om hen te beschermen. Herstel begint vaak bij toestemming om de waarheid te zien — zonder dat je loyaal hoeft te blijven aan het stilzwijgen.",
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
    feit: "Therapeuten verschillen sterk in opleiding, aanpak en trauma-begrip. Een slechte ervaring betekent niet dat hulp niet werkt — het kan betekenen dat de match, methode of timing niet klopte.\n\nTraumagerichte benaderingen (EMDR, somatisch werk, IFS, schematherapie) vragen specifieke kennis. Zoek iemand die jouw type trauma herkent, veiligheid serieus neemt en je tempo respecteert. De juiste match kan alles verschil maken.",
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
    feit: "Lichaamsgerichte traumatherapie is geen modegril maar steunt op decennia onderzoek: trauma wordt opgeslagen in het zenuwstelsel en lichaam, niet alleen als verhaal in je hoofd. Adem, beweging, aanraking en grounding zijn meetbare ingangen naar herstel.\n\nBenaderingen als somatische therapie, sensorimotor werk en polyvagaal-geïnformeerde oefeningen worden wereldwijd in traumaklinieken toegepast. Het voelt soms ongewoon, maar de wetenschap erachter is degelijk.",
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
    feit: "Trauma laat diepe sporen na — dat ontkennen we niet. Maar 'beschadigd voor altijd' is geen wetmatigheid. Hersenen en zenuwstelsels zijn veranderbaar: met veiligheid, verwerking en herhaalde corrigerende ervaringen kan je systeem opnieuw leren.\n\nHerstel betekent zelden dat alles wordt uitgewist. Het betekent dat het verleden je minder overneemt, dat je sneller terugkalmeert, en dat je weer keuzes maakt die van jou zijn. Veel mensen leven niet ondanks hun verleden, maar met een dieper begrip van zichzelf erna.",
    bron: "end-of-trauma",
    bronDetail: "over neuroplasticiteit en de mogelijkheid van herstel na trauma.",
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
    tekst: "Doseren, niet overspoelen. Verwerken binnen je draagvermogen heelt; eroverheen geduwd worden destabiliseert. Traag mag — richting telt meer dan snelheid.",
    bron: "waking-the-tiger"
  },
  {
    titel: "Verbinding heelt, isolement verdiept",
    tekst: "Trauma gedijt in eenzaamheid en schaamte. Een veilige relatie — met een dierbare of therapeut — is een van de krachtigste helende factoren die er zijn.",
    bron: "no-bad-parts"
  },
  {
    titel: "Je reacties waren overleving",
    tekst: "Vechten, vluchten, bevriezen, pleasen, dissociëren: het waren slimme aanpassingen aan een onmogelijke situatie. Geen zwakte, maar bescherming die zijn werk deed.",
    bron: "cptsd-surviving-thriving"
  },
  {
    titel: "Mededogen verslaat de criticus",
    tekst: "Zachtheid voor jezelf is geen luxe maar de tegenkracht die trauma nodig heeft. Strengheid voedt schaamte; mededogen ontkracht haar.",
    bron: "no-bad-parts"
  },
  {
    titel: "Herstel is niet-lineair",
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
    tekst: "Je hoeft je ouders, familie of verleden niet te beschermen ten koste van jezelf. Loyaliteit aan het stilzwijgen is geen liefde — eerlijkheid naar jezelf is de basis van herstel.",
    bron: "will-i-ever-be-good-enough"
  },
  {
    titel: "Herstel is mogelijk",
    tekst: "Trauma verandert je, maar definieert je niet permanent. Met tijd, veiligheid en de juiste hulp kan je zenuwstelsel opnieuw leren — niet perfect, maar vrijer.",
    bron: "end-of-trauma"
  }
];

