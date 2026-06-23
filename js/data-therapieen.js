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
    titel: "PTSS of complex trauma?",
    label: "Therapiewijzer",
    accent: "#4a6b8a",
    leeswijzer: "5 min lezen",
    beeld: {
      src: "img/therapieen/ptss-of-complex-trauma.jpg",
      alt: "Therapeut die twee beeldkaarten toont om het verschil tussen een afgebakende traumaherinnering en relationeel complex trauma uit te leggen.",
      kaartPos: "54% center",
      detailPos: "54% center"
    },
    kort: "Bij PTSS staat vaak één schokkende herinnering centraal. Bij complex trauma gaat het vaker om herhaalde of vroege onveiligheid, met extra impact op zelfbeeld, emotieregulatie, afhaken (dissociatie) en vertrouwen.",
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
