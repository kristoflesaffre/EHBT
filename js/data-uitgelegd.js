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
      "trauma-vs-complex",
      "zenuwstelsel-overleving"
    ]
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
      src: "img/concepten/trauma-vs-complex.png"
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
      src: "img/concepten/zenuwstelsel-overleving.png"
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
      src: "img/concepten/window-uitleg.png"
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
      src: "img/concepten/lichaam-onthoudt.png"
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
      src: "img/concepten/herstel-niet-lineair.png"
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
      src: "img/concepten/aces-uitgelegd.png"
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
      src: "img/concepten/emotionele-verwaarlozing.png"
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
      src: "img/concepten/triggers-cues.png"
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
      src: "img/concepten/intergenerationeel-trauma.png"
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
      src: "img/concepten/toxisch-schaamte-schuld.png"
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
      src: "img/concepten/hypervigilantie.png"
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
      src: "img/concepten/emotionele-incest-metafoor.png"
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
      src: "img/concepten/fawn-response.png"
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
      src: "img/stoornissen/borderline.png"
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
      src: "img/stoornissen/narcistisch.png"
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
      src: "img/stoornissen/vermijdend.png"
    }
  }
];

