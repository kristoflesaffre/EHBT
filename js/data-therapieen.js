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
    kort: "Verwerkt vastzittende herinneringen terwijl je aandacht wordt afgeleid door oogbewegingen of ander links-rechts ritme.",
    voorWie: "Sterk bewezen bij eenmalig trauma en PTSS; ook ingezet bij complex trauma, dan gefaseerd en aangepast.",
    blokken: [
      {
        tekst: "EMDR is een gestructureerde therapie waarbij je kort terugdenkt aan een nare herinnering terwijl je tegelijk een afleidende taak doet — meestal de ogen heen en weer bewegen, soms tikjes of geluiden links en rechts."
      },
      {
        kop: "Waarom dat werkt",
        tekst: "Het idee is dat een traumatische herinnering 'vast' is blijven zitten, los van de rest van je geheugen, met alle bijbehorende beelden en sensaties nog scherp. De dubbele taak — herinneren én tegelijk iets anders doen — lijkt het brein te helpen de herinnering alsnog te verwerken en weg te zetten als 'voorbij'. De lading neemt af: de herinnering blijft, maar overvalt je niet meer."
      }
    ],
    hoeWerkt: [
      {
        kop: "Voorbereiding & stabilisatie",
        tekst: "Eerst bouw je veiligheid en zelfregulatie op, en kies je samen een herinnering om aan te werken."
      },
      {
        kop: "Activeren",
        tekst: "Je haalt kort het beeld, de gedachte en het lichaamsgevoel naar boven die bij de herinnering horen."
      },
      {
        kop: "Verwerken met bilaterale stimulatie",
        tekst: "Tijdens sets oogbewegingen (of tikjes/geluiden) laat je gewoon opkomen wat er komt; de lading zakt geleidelijk."
      },
      {
        kop: "Verankeren",
        tekst: "Je versterkt een helpende overtuiging en checkt of het lichaam rustig is voordat je afsluit."
      }
    ],
    evidentie: "EMDR behoort tot de best onderzochte traumabehandelingen en wordt door internationale richtlijnen aanbevolen voor PTSS. Bij complex trauma kan EMDR ook helpen, maar meestal pas wanneer er voldoende stabiliteit, veiligheid en therapeutische afstemming is.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Richtlijnbehandeling PTSS",
    overzichtGroep: "ptss",
    pastBij: "Vooral PTSS",
    geschiktBij: [
      "wat-is-trauma",
      "emoties"
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Bespreekt EMDR als een van de effectieve wegen om vastgelopen herinneringen te verwerken."
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
    kort: "Werkt rechtstreeks met traumaherinneringen, vermijding en vastzittende overtuigingen zoals schuld, schaamte of gevaar.",
    voorWie: "Vooral PTSS na een afgebakende gebeurtenis of reeks herinneringen. Bij CPTSS kan het deel zijn van behandeling, maar meestal pas na stabilisatie en met aandacht voor dissociatie, schaamte en relaties.",
    blokken: [
      {
        tekst: "Traumagerichte cognitieve gedragstherapie is een verzamelnaam voor behandelingen die rechtstreeks werken met de traumaherinnering, vermijding en overtuigingen die na trauma vastlopen. Denk aan trauma-focused CBT, Cognitive Processing Therapy (CPT) en vormen van exposure."
      },
      {
        kop: "Waar het op mikt",
        tekst: "De behandeling helpt je brein opnieuw leren dat de gebeurtenis voorbij is, dat vermijden de angst vaak in stand houdt, en dat overtuigingen als 'het was mijn schuld' of 'ik ben nooit veilig' onderzocht kunnen worden. Bij complex trauma gebeurt dit doorgaans trager, gefaseerder en met meer aandacht voor regulatie."
      }
    ],
    hoeWerkt: [
      {
        kop: "Psycho-educatie",
        tekst: "Je leert hoe PTSS, vermijding, herbeleving en alarmreacties werken."
      },
      {
        kop: "Herinnering benaderen",
        tekst: "Je werkt stapsgewijs met de herinnering of met vermeden situaties, zonder jezelf te overspoelen."
      },
      {
        kop: "Betekenis onderzoeken",
        tekst: "Vastzittende overtuigingen rond schuld, schaamte, machteloosheid of gevaar worden zorgvuldig bekeken."
      },
      {
        kop: "Nieuwe veiligheid oefenen",
        tekst: "Je bouwt ervaring op dat herinneringen en triggers te dragen zijn zonder dat het oude gevaar terugkeert."
      }
    ],
    evidentie: "Traumagerichte CBT, CPT en exposure behoren tot de best onderzochte richtlijnbehandelingen voor PTSS. Bij complex trauma kunnen ze nuttig zijn, maar zelden als snelle standaardroute: stabiliteit, tempo en therapeutische veiligheid wegen dan zwaarder.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Richtlijnbehandeling PTSS",
    overzichtGroep: "ptss",
    pastBij: "Vooral PTSS",
    geschiktBij: [
      "wat-is-trauma",
      "emoties"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Bespreekt gefaseerd werken, stabilisatie en traumagerichte verwerking bij complex trauma."
      },
      {
        boek: "body-keeps-score",
        detail: "Over PTSS, traumaherinneringen en waarom verwerking meer vraagt dan alleen begrijpen."
      }
    ],
    gerelateerd: [
      "emdr",
      "dbt",
      "schematherapie"
    ]
  },
  {
    id: "somatic-experiencing",
    naam: "Somatic Experiencing",
    voluit: "Somatic Experiencing (SE) — lichaamsgerichte traumatherapie",
    icoon: "🫁",
    accent: "#3f7d72",
    kort: "Werkt via het lichaam: vastgehouden overlevingsenergie krijgt alsnog de kans om te ontladen, in kleine, veilige stappen.",
    voorWie: "Mensen bij wie trauma vooral lichamelijk doorwerkt, bijvoorbeeld spanning, freeze, dissociatie of chronische alertheid; vaak passend bij complex of ontwikkelingstrauma.",
    blokken: [
      {
        tekst: "Somatic Experiencing, ontwikkeld door Peter Levine, gaat ervan uit dat trauma niet zozeer in de gebeurtenis zit maar in een zenuwstelsel dat in de overlevingsstand bleef hangen. De aandacht ligt op lichaamssensaties, niet op het in detail navertellen van het verhaal."
      },
      {
        kop: "Titratie en pendelen",
        tekst: "Je werkt in heel kleine doseringen (titratie) en beweegt steeds heen en weer tussen een beetje activatie en een gevoel van veiligheid (pendelen). Zo kan het lichaam vastgehouden spanning beetje bij beetje ontladen — soms via trillen, warmte of een diepe ademteug — zonder opnieuw overspoeld te raken."
      }
    ],
    hoeWerkt: [
      {
        kop: "Hulpbronnen opbouwen",
        tekst: "Je leert eerst plekken van rust en veiligheid in je lichaam herkennen."
      },
      {
        kop: "Sensaties volgen",
        tekst: "Met aandacht volg je wat er in het lichaam gebeurt rond een herinnering of trigger."
      },
      {
        kop: "Pendelen",
        tekst: "Je beweegt tussen lichte activatie en veiligheid, telkens in kleine doses."
      },
      {
        kop: "Ontladen & integreren",
        tekst: "Vastgehouden energie krijgt ruimte om te ontladen; het zenuwstelsel komt tot rust."
      }
    ],
    evidentie: "Somatic Experiencing is klinisch veel gebruikt en sluit goed aan bij trauma dat lichamelijk doorwerkt. Er is groeiend onderzoek met positieve effecten, maar de gecontroleerde evidentiebasis is kleiner dan die van richtlijnbehandelingen zoals EMDR en trauma-focused CBT.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiende evidentie",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / lichaam",
    geschiktBij: [
      "lichaam",
      "herstel"
    ],
    bronnen: [
      {
        boek: "waking-the-tiger",
        detail: "Het grondleggende werk over Somatic Experiencing."
      },
      {
        boek: "anchored",
        detail: "Sluit aan bij het werken met toestanden van het zenuwstelsel."
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
    kort: "Benadert je psyche als een systeem van 'delen' — beschermers en gekwetste delen — geleid door een kalm innerlijk Zelf.",
    voorWie: "Mensen met zelfkritiek, innerlijk conflict, schaamte of dissociatieve delen; veel gebruikt bij complex trauma.",
    blokken: [
      {
        tekst: "Internal Family Systems, ontwikkeld door Richard Schwartz, gaat ervan uit dat we allemaal bestaan uit verschillende 'delen', elk met een eigen rol. Sommige delen beschermen, andere dragen oude pijn. Het uitgangspunt: er bestaan geen slechte delen — alleen delen met een zware taak."
      },
      {
        kop: "Leiden vanuit het Zelf",
        tekst: "Onder de delen ligt een kern die IFS het 'Zelf' noemt: kalm, nieuwsgierig en compassievol. Heling ontstaat wanneer je vanuit dat Zelf naar je delen leert luisteren in plaats van ze weg te duwen. Beschermers mogen ontspannen als de gekwetste delen die zij bewaken eindelijk gezien en getroost worden."
      }
    ],
    hoeWerkt: [
      {
        kop: "Delen leren kennen",
        tekst: "Je leert je beschermende en gekwetste delen herkennen en benoemen."
      },
      {
        kop: "Toegang tot het Zelf",
        tekst: "Je oefent om vanuit kalmte en nieuwsgierigheid naar een deel te kijken."
      },
      {
        kop: "Toestemming van beschermers",
        tekst: "Beschermende delen mogen een stap terug doen als ze zich gehoord voelen."
      },
      {
        kop: "Ontlasten",
        tekst: "Gekwetste delen krijgen erkenning en kunnen hun oude last loslaten."
      }
    ],
    evidentie: "IFS wordt klinisch veel gebruikt bij complex trauma, schaamte, innerlijke conflicten en dissociatieve klachten. De theorie sluit goed aan bij delenwerk in traumatherapie; gecontroleerd onderzoek groeit, maar is nog minder breed dan bij klassieke PTSS-behandelingen.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiende evidentie",
    overzichtGroep: "cptss",
    pastBij: "CPTSS / delen",
    geschiktBij: [
      "innerlijk",
      "cptss"
    ],
    bronnen: [
      {
        boek: "no-bad-parts",
        detail: "De toegankelijke introductie in IFS door de grondlegger."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over werken met delen bij trauma en dissociatie."
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
    kort: "Een benadering specifiek voor ontwikkelingstrauma, die werkt in het hier-en-nu in plaats van het verleden eindeloos uit te diepen.",
    voorWie: "Mensen met vroeg, relationeel of ontwikkelingstrauma en hardnekkige identiteits- en zelfwaardethema's.",
    blokken: [
      {
        tekst: "NARM, ontwikkeld door Laurence Heller, richt zich op trauma dat vroeg in de ontwikkeling ontstond — niet door één gebeurtenis, maar door gemiste afstemming, veiligheid of erkenning. Het kijkt naar vijf kernbehoeften: contact, afstemming, vertrouwen, autonomie en liefde."
      },
      {
        kop: "Overlevingsstijlen in het nu",
        tekst: "Als die behoeften vroeg onvoldoende werden beantwoord, ontwikkelde je overlevingsstrategieën die nu nog je zelfbeeld en relaties sturen. NARM diept niet eindeloos het verleden uit, maar onderzoekt hoe die patronen zich híer en nú tonen en hoe ze je verbinding met jezelf in de weg zitten."
      }
    ],
    hoeWerkt: [
      {
        kop: "Patronen herkennen",
        tekst: "Je verkent welke overlevingsstijl(en) bij jou meespelen."
      },
      {
        kop: "Werken in het heden",
        tekst: "De focus ligt op hoe het patroon nú voelt en functioneert."
      },
      {
        kop: "Contact met jezelf herstellen",
        tekst: "Je oefent om je eigen ervaring te voelen en serieus te nemen."
      },
      {
        kop: "Zelfregulatie versterken",
        tekst: "Stukje bij beetje groeit het vermogen om bij jezelf te blijven."
      }
    ],
    evidentie: "NARM is een klinisch invloedrijk model voor ontwikkelingstrauma en relationele patronen. Het is inhoudelijk sterk uitgewerkt, maar de gecontroleerde onderzoeksbasis is nog beperkt; zie het daarom als gespecialiseerd klinisch kader, niet als breed bewezen standaardbehandeling.",
    evidentieNiveau: "in ontwikkeling",
    evidentieLabel: "Klinisch kader",
    overzichtGroep: "cptss",
    pastBij: "Ontwikkelingstrauma",
    geschiktBij: [
      "cptss",
      "hechting"
    ],
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Het kernwerk over het NeuroAffective Relational Model."
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
    kort: "Leert concrete vaardigheden voor emotieregulatie, crisis verdragen en gezondere relaties — vooral als stabilisatie, niet als volledige traumaverwerking.",
    voorWie: "Mensen die overspoeld raken door emoties, met zelfbeschadiging of suïcidaliteit worstelen, of een borderline-patroon herkennen. Bij complex trauma vooral nuttig als stabiliserende laag vóór of naast traumaverwerking.",
    blokken: [
      {
        tekst: "Dialectische gedragstherapie (DBT) is ontwikkeld door Marsha Linehan en combineert acceptatie en verandering. Ze leert praktische vaardigheden in vier domeinen: mindfulness, crisis verdragen, emotieregulatie en intermenselijke effectiviteit."
      },
      {
        kop: "Vaardigheden als fundament, niet als eindpunt",
        tekst: "DBT is sterk gericht op oefenen: je leert technieken om in een crisis niet impulsief te handelen, om intense emoties te benoemen en te temperen, en om grenzen te stellen zonder relaties te beschadigen. Bij complex trauma is dat vaak nodig, maar niet genoeg: DBT helpt vooral om veilig genoeg te worden voor traumaverwerking, lichaamsgericht werk of relationeel herstel."
      }
    ],
    hoeWerkt: [
      {
        kop: "Mindfulness",
        tekst: "Leren waarnemen wat je voelt zonder er meteen door meegesleurd te worden."
      },
      {
        kop: "Crisis verdragen",
        tekst: "Concrete technieken om een piek te doorstaan zonder schade."
      },
      {
        kop: "Emotieregulatie",
        tekst: "Emoties herkennen, benoemen en hun intensiteit beïnvloeden."
      },
      {
        kop: "Relaties",
        tekst: "Vaardigheden om nee te zeggen en behoeften te uiten met behoud van de band."
      }
    ],
    evidentie: "DBT is goed onderzocht voor emotieregulatieproblemen, zelfbeschadiging, suïcidaliteit en het borderline-patroon. Dat betekent niet dat standaard-DBT de kern van complex trauma verwerkt. Bij CPTSS is DBT vooral ondersteunend: stabiliseren, vaardigheden opbouwen en daarna of daarnaast traumagericht, lichaamsgericht of relationeel werken.",
    evidentieNiveau: "sterk",
    evidentieLabel: "Sterk als stabilisatie",
    overzichtGroep: "stabilisatie",
    pastBij: "Stabilisatie",
    geschiktBij: [
      "emoties",
      "cptss"
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Verwijst naar vaardigheidsgericht werken als stabiliserende basis."
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
    kort: "Werkt met diepgewortelde patronen ('schema's') uit de jeugd en de 'modi' waarin je schiet, met veel aandacht voor de therapeutische relatie.",
    voorWie: "Mensen met hardnekkige, levensbrede patronen en persoonlijkheidsproblematiek, vaak met een trauma-achtergrond.",
    blokken: [
      {
        tekst: "Schematherapie, ontwikkeld door Jeffrey Young, combineert inzichten uit cognitieve therapie, hechting en gestalt. Het richt zich op 'schema's': diepe overtuigingen over jezelf en anderen die vroeg ontstonden, zoals 'ik ben niet de moeite waard' of 'anderen verlaten me toch'."
      },
      {
        kop: "Modi en herbemoedering",
        tekst: "Die schema's activeren 'modi' — toestanden waarin je schiet, zoals een gekwetst kind of een straffende ouderstem. Een belangrijk werkzaam element is 'limited reparenting': de therapeut biedt binnen veilige grenzen een corrigerende, zorgzame ervaring, zodat oude tekorten alsnog deels worden aangevuld."
      }
    ],
    hoeWerkt: [
      {
        kop: "Schema's in kaart brengen",
        tekst: "Je onderzoekt welke vroege patronen je leven sturen."
      },
      {
        kop: "Modi herkennen",
        tekst: "Je leert de toestanden herkennen waarin je schiet, en hun functie."
      },
      {
        kop: "Corrigerende ervaring",
        tekst: "Binnen de therapierelatie ontstaat een nieuwe, veiligere ervaring."
      },
      {
        kop: "Gezonde volwassene versterken",
        tekst: "Je bouwt een interne stem op die voor je gekwetste delen zorgt."
      }
    ],
    evidentie: "Schematherapie heeft een stevige onderzoeksbasis voor persoonlijkheidsproblematiek en complexe, langdurige klachten.",
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
    naam: "Polyvagaal-geïnformeerd werken",
    voluit: "Polyvagaaltheorie als kader voor traumawerk",
    icoon: "⚓",
    accent: "#46566e",
    kort: "Geen therapie op zich, maar een kader dat helpt je zenuwstelsel te lezen en stap voor stap meer veiligheid op te bouwen.",
    voorWie: "Iedereen die het lichaam en het zenuwstelsel centraal wil zetten; vaak verweven met andere therapieën.",
    blokken: [
      {
        tekst: "De polyvagaaltheorie, geïntroduceerd door Stephen Porges en toegankelijk gemaakt door onder meer Deb Dana, beschrijft hoe je autonome zenuwstelsel schakelt tussen drie grove toestanden: veiligheid en verbinding, mobilisatie (vecht/vlucht) en shutdown (bevriezen)."
      },
      {
        kop: "Veiligheid als voorwaarde",
        tekst: "Het kader benadrukt dat verandering en verbinding pas mogelijk zijn vanuit een gevoel van veiligheid. Polyvagaal-geïnformeerd werken is daarom geen losse methode, maar een lens die binnen veel therapieën wordt gebruikt: je leert je toestand herkennen en met kleine, herhaalde signalen van veiligheid je systeem helpen kalmeren."
      }
    ],
    hoeWerkt: [
      {
        kop: "Je toestand leren lezen",
        tekst: "Je leert herkennen of je in veiligheid, mobilisatie of shutdown zit."
      },
      {
        kop: "Triggers en ankers",
        tekst: "Je brengt in kaart wat je uit balans brengt en wat je terugbrengt."
      },
      {
        kop: "Signalen van veiligheid",
        tekst: "Ademhaling, stem, ritme en verbinding nodigen het systeem uit tot rust."
      },
      {
        kop: "Herhalen",
        tekst: "Kleine momenten van veiligheid, vaak herhaald, herijken het zenuwstelsel."
      }
    ],
    evidentie: "De polyvagaaltheorie is klinisch zeer invloedrijk als verklarend kader; sommige aannames zijn wetenschappelijk nog in debat, en het wordt vooral als lens binnen andere behandelingen gebruikt.",
    evidentieNiveau: "in ontwikkeling",
    evidentieLabel: "Kader, geen losse therapie",
    overzichtGroep: "stabilisatie",
    pastBij: "Regulatie",
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
    voluit: "Neurofeedback — EEG-biofeedback voor zelfregulatie",
    icoon: "📡",
    accent: "#4a6b8a",
    kort: "Meet hersenactiviteit in realtime en leert je brein flexibeler te reageren op stress — vooral ingezet bij hardnekkige regulatieproblemen.",
    voorWie: "Mensen met complex of ontwikkelingstrauma, dissociatie of een zenuwstelsel dat moeilijk tot rust komt; vaak als aanvulling op gesprekstherapie.",
    blokken: [
      {
        tekst: "Neurofeedback is een vorm van biofeedback waarbij sensoren op je hoofd hersengolven meten terwijl je iets rustigs doet, zoals een spelletje of een film kijken. Het systeem geeft subtiele feedback wanneer je brein in een rustiger, meer gereguleerd patroon zit — en zo leert je zenuwstelsel die toestand vaker te bereiken."
      },
      {
        kop: "Regulatie trainen, niet praten",
        tekst: "In tegenstelling tot gesprekstherapie richt neurofeedback zich niet op het verhaal, maar op het kalibreren van het brein zelf. Bij trauma kan het alarmsysteem zo gevoelig zijn geworden dat praten alleen niet genoeg is om het lichaam mee te krijgen. Neurofeedback werkt aan de onderliggende regulatie, zodat je makkelijker bij jezelf kunt blijven en andere therapieën beter aankomen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Baseline meten",
        tekst: "Eerst wordt een beeld gemaakt van hoe je brein nu reageert op rust en op spanning."
      },
      {
        kop: "Sessies met feedback",
        tekst: "Tijdens korte sessies krijg je realtime signaal wanneer je brein in een gewenst patroon zit."
      },
      {
        kop: "Geleidelijk hertrainen",
        tekst: "Door herhaling leert het zenuwstelsel vaker en sneller naar rust te schakelen."
      },
      {
        kop: "Combineren met therapie",
        tekst: "Neurofeedback wordt meestal ingezet naast andere traumabehandeling, niet als vervanging ervan."
      }
    ],
    evidentie: "Er is groeiend onderzoek naar neurofeedback bij trauma, vooral bij ontwikkelingstrauma en regulatieproblemen. De resultaten zijn interessant, maar de methode vraagt een ervaren behandelaar en wordt meestal gezien als aanvulling op traumatherapie, niet als volledige vervanging.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiende evidentie",
    overzichtGroep: "stabilisatie",
    pastBij: "Regulatie",
    geschiktBij: [
      "lichaam",
      "cptss",
      "herstel"
    ],
    bronnen: [
      {
        boek: "neurofeedback-developmental",
        detail: "Het kernwerk over neurofeedback bij vroeg en complex trauma."
      },
      {
        boek: "body-keeps-score",
        detail: "Bespreekt hoe het brein en zenuwstelsel bij trauma veranderen en welke benaderingen regulatie ondersteunen."
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
    kort: "Je schrijft je nachtmerrie op en oefent overdag een nieuw, veiliger verloop — zodat het brein 's nachts minder vaak de oude versie afspeelt.",
    voorWie: "Mensen met terugkerende nachtmerries na trauma of PTSS; ook nuttig wanneer slaapstoornissen andere behandeling in de weg zitten.",
    blokken: [
      {
        tekst: "Imagery Rehearsal Therapy (IRT) is een korte, gestructureerde techniek specifiek voor nachtmerries. Je beschrijft je nachtmerrie in detail, kiest één element dat je wilt veranderen, en schrijft een nieuwe versie met een ander — veiliger — verloop. Die nieuwe droom oefen je een paar keer per dag in gedachten, zonder de nachtmerrie 's nachts opnieuw te beleven."
      },
      {
        kop: "Waarom nachtmerries blijven terugkomen",
        tekst: "Nachtmerries zijn vaak het brein dat nog probeert een dreiging te verwerken of te waarschuwen. IRT geeft dat proces een andere richting: niet door de nachtmerrie te onderdrukken, maar door overdag een corrigerend script aan te bieden. Het is geen escapisme — je blijft bij de thema's, maar verandert het einde."
      }
    ],
    hoeWerkt: [
      {
        kop: "Nachtmerrie vastleggen",
        tekst: "Je schrijft de nachtmerrie op zoals die zich herhaalt, in de tegenwoordige tijd."
      },
      {
        kop: "Nieuw verloop bedenken",
        tekst: "Je kiest wat je wilt veranderen en schrijft een nieuwe versie die niet bedreigend eindigt."
      },
      {
        kop: "Dagelijks oefenen",
        tekst: "Je herhaalt de nieuwe droom een paar minuten per dag, ontspannen en zonder spanning op te roepen."
      },
      {
        kop: "Evalueren en bijstellen",
        tekst: "Na een paar weken kijk je samen of de frequentie en heftigheid van nachtmerries zijn afgenomen."
      }
    ],
    evidentie: "IRT behoort tot de best onderzochte interventies voor nachtmerries en wordt aanbevolen bij trauma-gerelateerde slaapstoornissen. Het is relatief kort, laagdrempelig en kan goed gecombineerd worden met andere traumabehandeling.",
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
        detail: "Over dromen en nachtmerries bij trauma, inclusief imagery rehearsal."
      },
      {
        boek: "body-keeps-score",
        detail: "Bespreekt slaapstoornissen en hyperalertheid als kernsymptomen van trauma."
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
    kort: "Helpt koppels (en soms families) om onder conflict en afstand de onderliggende hechtingsbehoeften te herkennen en veilige verbinding te herstellen.",
    voorWie: "Koppels die vastlopen in terugkerende ruzies, afstand of verlatingsangst; ook waar trauma de relatie binnensluipt via hechtingspatronen.",
    blokken: [
      {
        tekst: "Emotionally Focused Therapy (EFT), ontwikkeld door Sue Johnson, gaat ervan uit dat conflict in relaties zelden over de oppervlakte gaat. Achter kritiek, terugtrekken of woede zitten meestal onvervulde hechtingsbehoeften: de behoefte om gezien, veilig en geliefd te zijn."
      },
      {
        kop: "De dans van afstand en nabijheid",
        tekst: "EFT beschrijft relaties als een 'dans' van patronen: de een zoekt nabijheid, de ander trekt zich terug — of omgekeerd — en beiden raken gefrustreerd. Trauma kan die dans versterken: wie vroeg onveiligheid leerde, reageert sneller met angst of afsluiting. EFT helpt partners die patronen te herkennen en samen een veiliger verbinding op te bouwen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Patronen in kaart brengen",
        tekst: "Je verkent samen welke negatieve cyclus jullie steeds herhaalt."
      },
      {
        kop: "Emoties benoemen",
        tekst: "Onder woede of afstand zoek je naar de kwetsbaardere gevoelens: angst, schaamte, verlangen naar verbinding."
      },
      {
        kop: "Kwetsbaar communiceren",
        tekst: "Partners leren behoeften uiten in plaats van elkaar aan te vallen of weg te gaan."
      },
      {
        kop: "Veilige verbinding versterken",
        tekst: "Door herhaalde ervaringen van respons en nabijheid groeit vertrouwen in de relatie."
      }
    ],
    evidentie: "EFT is goed onderzocht als relatietherapie en wordt internationaal aanbevolen. Het helpt ook om te begrijpen hoe hechtingstrauma doorwerkt in volwassen relaties — ook als je het alleen leest, zonder therapie.",
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
        detail: "De toegankelijke introductie tot EFT voor koppels en hechtingswerk."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over hoe relationele veiligheid het zenuwstelsel kalmeert — relevant voor hechting in relaties."
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
    kort: "Combineert IFS-delenwerk met lichaamsgerichte aandacht: je bereikt beschermers en gekwetste delen via sensaties, niet alleen via gedachten.",
    voorWie: "Mensen die veel in hun hoofd zitten, dissociëren of moeite hebben om emoties lichamelijk te voelen; vaak bij complex trauma.",
    blokken: [
      {
        tekst: "Somatic IFS, ontwikkeld door Susan McConnell, verbindt Internal Family Systems met lichaamsgericht werk. Het uitgangspunt: je 'delen' leven niet alleen als gedachten of stemmen, maar ook als lichaamsgevoelens — spanning in de schouders, een knoop in de maag, leegte in de borst."
      },
      {
        kop: "Via het lichaam naar de delen",
        tekst: "In plaats van alleen te praten over een deel, volg je waar het in je lichaam voelbaar is. Een beschermend deel kan zich uiten als samengeknepen kaken; een gekwetst kind-deel als een hol gevoel. Door met zachte aandacht die sensatie te benaderen — vanuit het kalme Zelf — kun je delen bereiken die met woorden alleen ontoegankelijk bleven."
      }
    ],
    hoeWerkt: [
      {
        kop: "Lichaamsscan en gronden",
        tekst: "Je leert eerst veilig in je lichaam te landen, in kleine doses."
      },
      {
        kop: "Sensatie als ingang",
        tekst: "Een lichaamsgevoel wordt het startpunt om een deel te ontmoeten."
      },
      {
        kop: "Zelf-leiderschap oefenen",
        tekst: "Vanuit kalmte en nieuwsgierigheid benader je het deel dat via het lichaam zichtbaar wordt."
      },
      {
        kop: "Integreren",
        tekst: "Wanneer delen gehoord en getroost worden, ontspant het lichaam vaak mee."
      }
    ],
    evidentie: "Somatic IFS is klinisch invloedrijk binnen het IFS-werkveld en sluit aan bij het groeiende inzicht dat trauma in het lichaam leeft. Gecontroleerd onderzoek specifiek naar deze combinatie is nog beperkt.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiende evidentie",
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
        detail: "Het kernwerk over het combineren van IFS met lichaamsgerichte technieken."
      },
      {
        boek: "waking-the-tiger",
        detail: "Over trauma als lichamelijke ervaring en het belang van het lichaam in herstel."
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
    kort: "Yoga en bewuste beweging aangepast aan trauma: geen dwang, veel keuze, aandacht voor het lichaam zonder te overspoelen.",
    voorWie: "Mensen die spanning in het lichaam willen verlichten, weer contact willen maken met hun lijf, of voor wie traditionele yoga te triggering of te snel gaat.",
    blokken: [
      {
        tekst: "Trauma-informed yoga is geen aparte yogastijl, maar een manier van lesgeven en bewegen waarbij veiligheid, keuze en zelfregulatie centraal staan. De instructeur nodigt uit in plaats van te commanderen; je mag altijd een houding aanpassen, pauzeren of de oefening overslaan."
      },
      {
        kop: "Beweging zonder overweldiging",
        tekst: "Bij trauma kan het lichaam zowel gevoelloos als overgevoelig zijn. Trauma-informed yoga werkt in kleine stappen: ademhaling, zachte beweging, aandacht voor sensaties — zonder je te dwingen in houdingen die spanning oproepen. Het doel is niet perfectie, maar weer thuiskomen in je lichaam en je zenuwstelsel rustiger leren schakelen."
      }
    ],
    hoeWerkt: [
      {
        kop: "Veilige omgeving",
        tekst: "De ruimte, het tempo en de taal zijn afgestemd op mensen met een trauma-achtergrond."
      },
      {
        kop: "Keuze en controle",
        tekst: "Je bepaalt zelf wat je doet; de instructeur geeft opties, geen orders."
      },
      {
        kop: "Lichaamsbewustzijn",
        tekst: "Je leert sensaties opmerken — spanning, warmte, rust — zonder ze te moeten veranderen."
      },
      {
        kop: "Regulatie via adem en beweging",
        tekst: "Zachte oefeningen helpen het zenuwstelsel om te schakelen tussen activatie en rust."
      }
    ],
    evidentie: "Onderzoek naar trauma-informed yoga en lichaamsgerichte beweging bij PTSS laat bemoedigende effecten zien, vooral bij stressreductie en lichaamsbewustzijn. Het wordt meestal ingezet als aanvulling, niet als enige behandeling.",
    evidentieNiveau: "veelbelovend",
    evidentieLabel: "Groeiende evidentie",
    overzichtGroep: "stabilisatie",
    pastBij: "Lichaam / regulatie",
    geschiktBij: [
      "lichaam",
      "herstel"
    ],
    bronnen: [
      {
        boek: "heal-body-heal-mind",
        detail: "Over lichaamsgerichte oefeningen, adem en beweging bij trauma-gerelateerde spanning."
      },
      {
        boek: "nurturing-resilience",
        detail: "Over veerkracht opbouwen via het lichaam en herhaalde ervaringen van veiligheid."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe trauma het lichaam beïnvloedt en waarom lichaamsgericht werk een rol speelt in herstel."
      }
    ],
    gerelateerd: [
      "somatic-experiencing",
      "polyvagaal"
    ]
  }
];
