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
    kort: "Trauma is niet de gebeurtenis zelf, maar wat er achterblijft in een zenuwstelsel dat overweldigd raakte zonder uitweg.",
    blokken: [
      {
        kop: "Niet de gebeurtenis, maar de impact",
        tekst: "We gebruiken 'trauma' vaak voor de gebeurtenis, maar in de traumawetenschap verwijst het naar het spoor dat een overweldigende ervaring nalaat. Bepalend is of je het kon verwerken, of je steun had, en of je je daarna weer veilig kon voelen. Trauma ontstaat juist waar die verwerking vastliep."
      },
      {
        kop: "Een zenuwstelsel in overlevingsstand",
        tekst: "Bij dreiging schakelt je lichaam razendsnel naar overleven: vechten, vluchten of bevriezen. Normaal zakt die staat weer als het gevaar voorbij is. Bij trauma blijft het systeem deels 'aan', alsof het gevaar nog bestaat. Daardoor reageer je later op onschuldige prikkels alsof ze levensbedreigend zijn."
      },
      {
        kop: "Groot en klein, eenmalig en langdurig",
        tekst: "Trauma kan ontstaan door één heftige gebeurtenis (een ongeval, geweld, verlies) maar ook door langdurige, minder zichtbare ervaringen: emotionele kou, onveiligheid of het stelselmatig niet gezien worden. Dat laatste noemen we vaak complex trauma. Geen van beide is 'erger' — ze laten andere sporen na."
      }
    ],
    kernpunten: [
      "Trauma zit in het spoor dat een ervaring nalaat, niet in de gebeurtenis op zich.",
      "Het zenuwstelsel blijft deels in overlevingsstand hangen.",
      "Ook 'kleine' of langdurige ervaringen kunnen diep traumatiseren."
    ],
    feitVsFabel: [
      {
        mythe: "Trauma is alleen voor oorlog, geweld of rampen.",
        feit: "Ook langdurige emotionele onveiligheid, verwaarlozing of het niet gezien worden kan traumatiseren. De impact op het zenuwstelsel telt, niet hoe 'spectaculair' de oorzaak is."
      }
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over trauma als een verandering in brein en zenuwstelsel."
      },
      {
        boek: "myth-of-normal",
        detail: "Over trauma als wat er binnenin je gebeurde."
      }
    ],
    gerelateerd: [
      "trauma-vs-complex",
      "zenuwstelsel-overleving"
    ]
  },
  {
    id: "trauma-vs-complex",
    titel: "Trauma vs. complex trauma (CPTSS)",
    icoon: "🕸️",
    accent: "#516b78",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Eénmalig trauma draait om een afgebakende gebeurtenis. Complex trauma ontstaat door herhaalde, vaak vroege onveiligheid — en raakt je identiteit en relaties dieper.",
    blokken: [
      {
        kop: "Klassiek (eenmalig) trauma",
        tekst: "Bij een eenmalig trauma — een ongeval, een overval, een natuurramp — kan posttraumatische stress (PTSS) ontstaan: herbelevingen, vermijding, prikkelbaarheid en een voortdurend alarm. De kern is een afgebakende gebeurtenis die het systeem overweldigde."
      },
      {
        kop: "Complex trauma (CPTSS)",
        tekst: "Complex trauma ontstaat door herhaalde of langdurige overweldiging, vaak vroeg in het leven en binnen relaties waar je juist veiligheid had moeten vinden. Bovenop de klassieke klachten komen er diepere thema's bij: een negatief zelfbeeld, moeite met emotieregulatie, en problemen in het aangaan en vertrouwen van relaties."
      },
      {
        kop: "Waarom het onderscheid telt",
        tekst: "Het verschil is geen rangorde van 'erger', maar het stuurt de aanpak. Complex trauma vraagt doorgaans meer tijd, meer nadruk op veiligheid en stabiliteit vóór verwerking, en meer aandacht voor de relatie en het zelfbeeld. Eén schokkende gebeurtenis verwerken verloopt vaak anders dan een heel patroon van vroege onveiligheid herzien."
      }
    ],
    kernpunten: [
      "PTSS draait om een afgebakende gebeurtenis; CPTSS om herhaalde, vaak vroege onveiligheid.",
      "Bij complex trauma spelen zelfbeeld, emotieregulatie en relaties een grotere rol.",
      "Het onderscheid bepaalt mee het tempo en de aanpak van behandeling."
    ],
    feitVsFabel: [
      {
        mythe: "Complex trauma is gewoon 'erge' PTSS.",
        feit: "Het is niet alleen meer van hetzelfde. Complex trauma raakt structureler aan identiteit, emotieregulatie en hechting, en vraagt daarom vaak een andere, meer gefaseerde aanpak."
      }
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de kenmerken en het herstel van complex trauma."
      },
      {
        boek: "healing-developmental-trauma",
        detail: "Over trauma dat vroeg in de ontwikkeling ontstaat."
      }
    ],
    gerelateerd: [
      "trauma-basis",
      "schaamte"
    ]
  },
  {
    id: "zenuwstelsel-overleving",
    titel: "Je zenuwstelsel: vechten, vluchten, bevriezen, pleasen",
    icoon: "🫁",
    accent: "#3f7d72",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Je overlevingsreacties zijn geen karaktereigenschappen maar automatische standen van je zenuwstelsel. Ze beschermden je — ook als ze nu in de weg zitten.",
    blokken: [
      {
        kop: "Vier overlevingsreacties",
        tekst: "Bij dreiging kiest je lichaam razendsnel en buiten je wil om een strategie: vechten (de dreiging bestrijden), vluchten (wegkomen), bevriezen (verstijven of dissociëren) of pleasen (de ander tevredenstellen om gevaar af te wenden). Welke reactie aanslaat hangt af van de situatie en van wat ooit het veiligst bleek."
      },
      {
        kop: "Geen keuze, maar reflex",
        tekst: "Deze reacties komen uit oudere, snelle delen van het brein en gaan aan voordat je denkende brein kan meebeslissen. Daarom heeft 'gewoon kalm blijven' op zo'n moment weinig effect. Het is geen onwil of zwakte — het is biologie die je wil beschermen."
      },
      {
        kop: "Van reflex naar keuze",
        tekst: "Je kunt leren je staat te herkennen en je zenuwstelsel te helpen kalmeren met ademhaling, beweging, grounding en veilige verbinding. Naarmate je systeem leert dat het nú veilig is, krijg je weer meer ruimte om bewust te kiezen in plaats van automatisch te reageren."
      }
    ],
    kernpunten: [
      "Vechten, vluchten, bevriezen en pleasen zijn automatische overlevingsstanden.",
      "Ze schakelen aan vóór je denkende brein kan meebeslissen.",
      "Je kunt je staat leren herkennen en kalmeren."
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over de toestanden van het autonome zenuwstelsel."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de vier overlevingsreacties, inclusief pleasen (fawn)."
      }
    ],
    gerelateerd: [
      "window-uitleg",
      "trauma-basis"
    ]
  },
  {
    id: "window-uitleg",
    titel: "De window of tolerance",
    icoon: "🎯",
    accent: "#46566e",
    categorie: "zenuwstelsel",
    leeswijzer: "4 min lezen",
    kort: "De zone waarin je stress aankunt zonder te overspoelen of dicht te klappen. Trauma maakt die zone smaller; je kunt hem weer verbreden.",
    blokken: [
      {
        kop: "Binnen en buiten het raam",
        tekst: "Binnen je 'window of tolerance' kun je voelen én denken tegelijk: je hanteert stress zonder eronder te bezwijken. Schiet je erboven, dan kom je in hyperactivatie (paniek, woede, overspoeling). Zak je eronder, dan kom je in hypoactivatie (leegte, verdoving, shutdown)."
      },
      {
        kop: "Een smal raam na trauma",
        tekst: "Trauma versmalt het raam: je schiet er sneller boven- of onderuit, en kleine prikkels duwen je er al overheen. Leren herkennen waar je zit — boven, in, of onder het raam — geeft je grip en is de eerste stap om bewust terug te keren naar veiligheid."
      },
      {
        kop: "Het raam verbreden",
        tekst: "Je verbreedt je window door telkens net aan de rand te oefenen en daarna terug te keren naar rust, niet door jezelf te forceren. Grounding, adem, beweging en veilige verbinding helpen je terug. Met herhaling leert je systeem dat het meer aankan."
      }
    ],
    kernpunten: [
      "Binnen het raam kun je voelen én denken; erbuiten overspoel je of klap je dicht.",
      "Trauma maakt het raam smaller.",
      "Oefenen aan de rand en terugkeren naar veiligheid verbreedt het raam."
    ],
    bronnen: [
      {
        boek: "anchored",
        detail: "Over toestanden van het zenuwstelsel en terugkeren naar veiligheid."
      }
    ],
    gerelateerd: [
      "zenuwstelsel-overleving",
      "herstel-niet-lineair"
    ]
  },
  {
    id: "schaamte",
    titel: "Schaamte: de stille kern van veel trauma",
    icoon: "🫥",
    accent: "#7c6f8f",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "Schaamte zegt niet 'ik deed iets fout' maar 'ik bén fout'. Bij trauma is die stem vaak diep verankerd — en juist mededogen ontkracht hem.",
    blokken: [
      {
        kop: "Schaamte versus schuld",
        tekst: "Schuld gaat over gedrag ('ik deed iets verkeerd'); schaamte gaat over je hele zelf ('ik deug niet'). Schuld kan je aanzetten tot herstel, maar schaamte verlamt en isoleert — ze fluistert dat je je moet verbergen."
      },
      {
        kop: "Waarom trauma schaamte kweekt",
        tekst: "Een kind dat onveiligheid meemaakt, geeft vaak zichzelf de schuld — want 'het ligt aan mij' voelt veiliger dan 'de mensen van wie ik afhankelijk ben, zijn onbetrouwbaar'. Zo ontstaat een diep gevoel van tekortschieten dat tot ver in het volwassen leven doorwerkt, ook zonder duidelijke herinnering."
      },
      {
        kop: "Het tegengif is verbinding",
        tekst: "Schaamte gedijt in stilte en isolement. Ze verliest haar macht wanneer je ervaring gezien en aanvaard wordt — door een veilig iemand, een therapeut, of door je eigen mededogen. Niet door jezelf streng toe te spreken, maar door zachter te worden, smelt de harde kern langzaam."
      }
    ],
    kernpunten: [
      "Schaamte raakt je hele zelf; schuld alleen je gedrag.",
      "Kinderen geven zichzelf vaak de schuld omdat dat veiliger voelt.",
      "Mededogen en gezien worden ontkrachten schaamte; strengheid voedt haar."
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de rol van toxische schaamte bij complex trauma."
      },
      {
        boek: "no-bad-parts",
        detail: "Over mededogen voor de delen die schaamte dragen."
      }
    ],
    gerelateerd: [
      "trauma-vs-complex",
      "herstel-niet-lineair"
    ]
  },
  {
    id: "herstel-niet-lineair",
    titel: "Herstel is niet-lineair",
    icoon: "🌱",
    accent: "#6a8f5e",
    categorie: "basis",
    leeswijzer: "4 min lezen",
    kort: "Heling verloopt in golven, met pieken en terugval. Een slechte periode wist je vooruitgang niet uit — het hoort bij het proces.",
    blokken: [
      {
        kop: "Geen rechte lijn",
        tekst: "We stellen ons herstel graag voor als een gestaag stijgende lijn, maar in de praktijk gaat het met golven. Goede periodes wisselen af met dalen, vaak rond stress, verjaardagen van gebeurtenissen of juist wanneer het beter gaat en er ruimte komt voor wat lang weggedrukt was."
      },
      {
        kop: "Terugval hoort erbij",
        tekst: "Een terugval voelt als falen, maar is dat niet. Het is vaak een teken dat er iets nieuws aangeraakt wordt, of simpelweg dat het leven even zwaar is. Veel mensen merken dat de dalen na verloop van tijd minder diep worden en dat ze er sneller uitkomen."
      },
      {
        kop: "Het doel verschuift",
        tekst: "Heling betekent zelden dat het verleden wordt uitgewist. Het betekent dat het je minder overneemt: triggers komen minder hard aan, je kalmeert sneller, je keuzes worden weer van jou. Richting telt meer dan snelheid."
      }
    ],
    kernpunten: [
      "Herstel verloopt in golven, niet in een rechte lijn.",
      "Terugval is onderdeel van het proces, geen mislukking.",
      "Het doel is niet uitwissen, maar minder overgenomen worden."
    ],
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over gefaseerd, niet-lineair herstel."
      },
      {
        boek: "body-keeps-score",
        detail: "Over de vele wegen naar herstel."
      }
    ],
    gerelateerd: [
      "window-uitleg",
      "schaamte"
    ]
  },
  {
    id: "aces-uitgelegd",
    titel: "ACE's uitgelegd",
    icoon: "📊",
    accent: "#5b6a7d",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "ACE's (Adverse Childhood Experiences) zijn meetbare vroege tegenslagen. Ze voorspellen geen lot, maar helpen begrijpen waarom je lichaam en brein zo reageren.",
    blokken: [
      {
        kop: "Wat zijn ACE's?",
        tekst: "ACE's zijn negen veelvoorkomende vormen van tegenslag vóór je achttiende: onder meer misbruik, verwaarlozing, huiselijk geweld, verslaving of psychische problemen van een ouder, en scheiding. Onderzoekers gebruikten ze om te meten hoe vroege stress doorwerkt in gezondheid en welzijn later in het leven."
      },
      {
        kop: "Een score is geen veroordeling",
        tekst: "Een hogere ACE-score wijst op meer risico op lichamelijke en psychische klachten, maar het is geen voorspelling van je toekomst. Veel mensen met hoge scores herstellen door veiligheid, steun en verwerking. De score is een startpunt voor begrip, geen etiket."
      },
      {
        kop: "Wat ACE's niet meten",
        tekst: "ACE's vangen niet alles: emotionele verwaarlozing, pesten, medische trauma's of subtiele onveiligheid vallen erbuiten. Je kunt een lage score hebben en toch diep gewond zijn — of omgekeerd. Jouw ervaring telt, niet alleen wat op een lijstje staat."
      }
    ],
    kernpunten: [
      "ACE's zijn meetbare vroege tegenslagen, geen diagnose.",
      "Een hogere score betekent meer risico, geen vaststaand lot.",
      "Niet alle vormen van trauma staan op de ACE-lijst."
    ],
    feitVsFabel: [
      {
        mythe: "Een hoge ACE-score betekent dat je nooit meer beter wordt.",
        feit: "ACE's tonen verbanden met gezondheidsrisico's, maar ze sluiten herstel niet uit. Veel mensen bouwen met steun en behandeling een vol en veilig leven op."
      }
    ],
    bronnen: [
      {
        boek: "deepest-well",
        detail: "Over de langetermijngevolgen van vroege tegenslag."
      },
      {
        boek: "body-keeps-score",
        detail: "Over hoe vroege stress het zenuwstelsel vormt."
      }
    ],
    gerelateerd: [
      "emotionele-verwaarlozing",
      "trauma-basis",
      "intergenerationeel-trauma"
    ]
  },
  {
    id: "emotionele-verwaarlozing",
    titel: "Emotionele verwaarlozing",
    icoon: "🌫️",
    accent: "#516b78",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Niet gezien, niet getroost, niet erbij mogen horen — emotionele verwaarlozing laat diepe sporen na, ook zonder geweld of misbruik.",
    blokken: [
      {
        kop: "Wat is het precies?",
        tekst: "Emotionele verwaarlozing is het structureel niet krijgen van wat een kind nodig heeft om zich veilig en waardevol te voelen: erkenning van gevoelens, troost bij verdriet, interesse in wie je bent, en het gevoel dat je er mag zijn zoals je bent. Het is de afwezigheid van aanwezigheid."
      },
      {
        kop: "Onzichtbaar maar diep",
        tekst: "Omdat er geen 'gebeurtenis' is, twijfelen veel mensen aan hun eigen pijn: 'Het viel toch wel mee.' Maar een kind dat leert dat zijn emoties storen, te veel zijn of genegeerd worden, bouwt een overlevingsstrategie van zelfredzaamheid, perfectionisme of pleasen — vaak zonder het te weten."
      },
      {
        kop: "Herkennen en helen",
        tekst: "Veelvoorkomende sporen zijn: moeite met je eigen behoeften voelen, schaamte over 'te veel' zijn, een leegte die je probeert te vullen, en relaties waarin je jezelf aanpast tot je niet meer weet wie je bent. Heling begint bij erkennen dat de leegte echt is — en dat je die niet had hoeven vullen alleen."
      }
    ],
    kernpunten: [
      "Emotionele verwaarlozing is de afwezigheid van erkenning en troost.",
      "Het is onzichtbaar maar kan even diep wonden als geweld.",
      "Perfectionisme en pleasen zijn vaak overlevingsstrategieën na gemis."
    ],
    feitVsFabel: [
      {
        mythe: "Als er geen misbruik was, valt het mee.",
        feit: "Het structureel niet gezien of getroost worden kan een kind net zo diep raken. De afwezigheid van veiligheid is zelf een vorm van trauma."
      }
    ],
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over de gevolgen van emotionele verwaarlozing bij volwassenen."
      },
      {
        boek: "tiny-traumas",
        detail: "Over de impact van kleine, herhaalde gemissen."
      }
    ],
    gerelateerd: [
      "aces-uitgelegd",
      "schaamte",
      "fawn-response"
    ]
  },
  {
    id: "triggers-cues",
    titel: "Triggers en cues",
    icoon: "⚡",
    accent: "#4a6b8a",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Een trigger is geen overdreven reactie maar een oud alarmsignaal dat nú afgaat. Cues zijn de kleine prikkels die dat alarm activeren.",
    blokken: [
      {
        kop: "Wat is een trigger?",
        tekst: "Een trigger is iets in het heden — een toon, geur, situatie, woord of gevoel — dat je zenuwstelsel herkent als het oude gevaar. Je lichaam reageert alsof het toen opnieuw gebeurt, ook als je hoofd weet dat het veilig is. Dat verschil tussen weten en voelen is typisch voor trauma."
      },
      {
        kop: "Cues: de kleine voorlopers",
        tekst: "Cues zijn de subtielere signalen die je systeem al in alarmstand zetten vóór de volle trigger: een bepaalde blik, stilte, de geur van een parfum, of het gevoel van buitengesloten worden. Leren je cues herkennen geeft je tijd om te interveniëren voordat je overspoeld raakt."
      },
      {
        kop: "Triggers verminderen",
        tekst: "Triggers verdwijnen niet door ze te negeren, maar door je zenuwstelsel te helpen leren dat het nú veilig is. Grounding, ademwerk, traumagerichte therapie en herhaalde veilige ervaringen verlagen de lading. De prikkel kan blijven, maar je reactie wordt kleiner en herstelbaarder."
      }
    ],
    kernpunten: [
      "Triggers zijn oud alarmsignalen die in het heden afgaan.",
      "Cues zijn subtiele voorlopers die je kunt leren herkennen.",
      "Therapie en grounding verlagen de lading, triggers verdwijnen niet door weg te kijken."
    ],
    feitVsFabel: [
      {
        mythe: "Als je getriggerd raakt, overdrijf je of zoek je aandacht.",
        feit: "Een trigger is een automatische lichaamsreactie, geen keuze. Je zenuwstelsel beschermt je nog steeds tegen een gevaar dat ooit echt was."
      }
    ],
    bronnen: [
      {
        boek: "body-keeps-score",
        detail: "Over hoe het lichaam triggers opslaat en activeert."
      },
      {
        boek: "anchored",
        detail: "Over herkennen en kalmeren van alarmtoestanden."
      }
    ],
    gerelateerd: [
      "hypervigilantie",
      "window-uitleg",
      "zenuwstelsel-overleving"
    ]
  },
  {
    id: "intergenerationeel-trauma",
    titel: "Intergenerationeel trauma",
    icoon: "🌳",
    accent: "#5f7259",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Trauma reikt verder dan één persoon. Wat niet verwerkt werd bij je ouders of grootouders, kan doorwerken in patronen, stiltes en lichaamstaal.",
    blokken: [
      {
        kop: "Wat betekent het?",
        tekst: "Intergenerationeel trauma verwijst naar hoe onverwerkt leed doorgegeven wordt aan volgende generaties — niet altijd via verhalen, maar via gedrag, angst, stilte, overbescherming of emotionele afwezigheid. Oorlog, vervolging, verslaving, huiselijk geweld of diepe armoede kunnen zo doorwerken, soms zonder dat iemand het expliciet benoemt."
      },
      {
        kop: "Hoe het doorgeeft",
        tekst: "Kinderen absorberen de staat van hun verzorgers: een ouder die constant alert is, leert een kind dat de wereld gevaarlijk is. Een ouder die emoties onderdrukt, leert een kind dat voelen niet veilig is. Soms draag je ook letterlijk stress in je lichaam — onderzoek naar epigenetica suggereert dat chronische stress sporen kan nalaten."
      },
      {
        kop: "Doorbreken zonder schuld",
        tekst: "Intergenerationeel trauma is geen beschuldiging van je ouders — het is een verklaring van patronen. Jij bent niet verantwoordelijk voor wat je ouders meemaakten, wél voor wat je nu met die kennis doet. Bewustwording, verwerking en andere keuzes in je eigen gezin of relaties zijn manieren om de cyclus te doorbreken."
      }
    ],
    kernpunten: [
      "Onverwerkt trauma kan doorgegeven worden via gedrag en stilte.",
      "Kinderen absorberen de stress-staat van hun verzorgers.",
      "Doorbreken begint bij bewustwording, niet bij schuld."
    ],
    feitVsFabel: [
      {
        mythe: "Als mijn ouders niet gewelddadig waren, is er geen intergenerationeel trauma.",
        feit: "Ook stilte, emotionele afwezigheid, overbescherming of onverwerkte angst kunnen doorgegeven worden. Het gaat om wat niet verwerkt bleef, niet alleen om wat zichtbaar schadelijk was."
      }
    ],
    bronnen: [
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
      "aces-uitgelegd",
      "emotionele-verwaarlozing",
      "trauma-vs-complex"
    ]
  },
  {
    id: "toxisch-schaamte-schuld",
    titel: "Toxische schaamte vs. schuld",
    icoon: "🪨",
    accent: "#7c6f8f",
    categorie: "basis",
    leeswijzer: "5 min lezen",
    kort: "Schuld zegt 'ik deed iets fout'. Toxische schaamte zegt 'ik bén fout'. Die tweede stem is een van de zwaarste erfenissen van trauma.",
    blokken: [
      {
        kop: "Schuld: over gedrag",
        tekst: "Gezonde schuld gaat over een specifieke actie: je hebt iets gedaan dat niet oké was, en je wilt het herstellen. Schuld kan motiverend zijn — ze wijst op je geweten en je vermogen om verantwoordelijkheid te nemen. Ze raakt je gedrag, niet je kern."
      },
      {
        kop: "Toxische schaamte: over je zelf",
        tekst: "Toxische schaamte is anders: ze zegt dat jij als geheel tekortschiet, beschamend bent, te veel, te weinig, of niet deugt. Ze komt vaak voort uit vroege ervaringen waarin je de schuld kreeg van iets wat niet jouw verantwoordelijkheid was. Die stem blijft fluisteren, ook als je niets 'fouts' deed."
      },
      {
        kop: "Het tegengif",
        tekst: "Toxische schaamte verliest haar macht in verbinding en mededogen — wanneer iemand je ervaring ziet zonder te oordelen, of wanneer je zelf leert je bange delen te troosten in plaats van te veroordelen. Schuld kun je repareren; schaamte heelt door gezien en aanvaard te worden."
      }
    ],
    kernpunten: [
      "Schuld gaat over gedrag; toxische schaamte over je hele zelf.",
      "Schaamte ontstaat vaak wanneer kinderen schuld krijgen van volwassen problemen.",
      "Mededogen en gezien worden ontkrachten toxische schaamte."
    ],
    feitVsFabel: [
      {
        mythe: "Schaamte houdt je scherp en motiveert je om beter te doen.",
        feit: "Toxische schaamte verlamt en isoleert. Ze leidt tot verbergen en zelfkritiek, niet tot groei. Mededogen werkt beter als motor voor verandering."
      }
    ],
    bronnen: [
      {
        boek: "healing-shame-binds",
        detail: "Over schaamte als bindmiddel en hoe je die losmaakt."
      },
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over toxische schaamte bij complex trauma."
      }
    ],
    gerelateerd: [
      "schaamte",
      "emotionele-verwaarlozing",
      "herstel-niet-lineair"
    ]
  },
  {
    id: "hypervigilantie",
    titel: "Hypervigilantie",
    icoon: "👁️",
    accent: "#46566e",
    categorie: "zenuwstelsel",
    leeswijzer: "4 min lezen",
    kort: "Altijd alert, altijd scannen op gevaar — hypervigilantie is je zenuwstelsel dat nog steeds op wacht staat, ook als er nú geen dreiging is.",
    blokken: [
      {
        kop: "Wat is het?",
        tekst: "Hypervigilantie is een verhoogde staat van waakzaamheid: je scant voortdurend je omgeving op dreiging, let op kleine veranderingen in toon of gezichtsuitdrukking, en bent snel startled. Het is alsof je innerlijke alarm nooit uitgaat — zelfs in rustige situaties."
      },
      {
        kop: "Waarom het ontstaat",
        tekst: "Als je vroeg leerde dat de wereld onvoorspelbaar of gevaarlijk was, werd alert blijven een overlevingsstrategie. Je lichaam leerde: 'als ik alles in de gaten houd, kan ik op tijd reageren.' Dat was slim — maar nu put het uit en maakt echte rust moeilijk."
      },
      {
        kop: "Kalmeren en vertragen",
        tekst: "Hypervigilantie vermindert niet door jezelf te dwingen te ontspannen, maar door je zenuwstelsel herhaaldelijk te laten ervaren dat het nú veilig is: vaste routines, voorspelbare relaties, slaap, beweging, en grounding-oefeningen. Traumagerichte therapie helpt het alarmsysteem geleidelijk terug te schakelen."
      }
    ],
    kernpunten: [
      "Hypervigilantie is voortdurend scannen op dreiging.",
      "Het was een slimme overlevingsstrategie die nu uitput.",
      "Herstel vraagt herhaalde ervaringen van veiligheid, niet wilskracht."
    ],
    feitVsFabel: [
      {
        mythe: "Hypervigilantie betekent dat je paranoïde of overspannen bent.",
        feit: "Het is een begrijpelijke lichaamsreactie op eerdere onveiligheid, geen karakterfout. Je zenuwstelsel doet wat het geleerd is om je te beschermen."
      }
    ],
    bronnen: [
      {
        boek: "ptsdreams",
        detail: "Over slaap, alertheid en het alarmsysteem na trauma."
      },
      {
        boek: "anchored",
        detail: "Over terugkeren van hyperactivatie naar rust."
      }
    ],
    gerelateerd: [
      "triggers-cues",
      "window-uitleg",
      "zenuwstelsel-overleving"
    ]
  },
  {
    id: "emotionele-incest-metafoor",
    titel: "Emotionele incest (metafoor)",
    icoon: "🪞",
    accent: "#8f6a9b",
    categorie: "basis",
    leeswijzer: "6 min lezen",
    kort: "Geen seksueel misbruik, maar wel de emotionele rol van een partner of ouder voor je eigen ouder. Die omkering laat diepe sporen na.",
    blokken: [
      {
        kop: "Wat de metafoor bedoelt",
        tekst: "Emotionele incest — ook wel covert incest genoemd — beschrijft een situatie waarin een ouder een kind gebruikt als emotionele partner: voor troost, advies, conflicten of intimiteit die bij een volwassene thuishoort. Het kind wordt 'de speciale' of 'de sterke', maar betaalt met zijn eigen grenzen en kind-zijn."
      },
      {
        kop: "Hoe het voelt",
        tekst: "Veel mensen herkennen zich in: het gevoel verantwoordelijk te zijn voor het geluk van een ouder, schuld bij eigen behoeften, moeite met intieme relaties (je bent al 'bezet'), en een diep gevoel van onzichtbare last. Er was geen seksueel contact, maar de relationele grens was wel overschreden."
      },
      {
        kop: "Herstel begint bij grenzen",
        tekst: "Heling betekent erkennen dat je een kind was, geen partner. Je mag je eigen behoeften hebben zonder schuld. Vaak helpt therapie om de rol los te laten, schaamte te verlichten en te leren dat nabijheid niet gelijk staat aan verantwoordelijkheid voor de ander."
      }
    ],
    kernpunten: [
      "Emotionele incest is een grensoverschrijding zonder seksueel contact.",
      "Het kind wordt de emotionele partner van de ouder.",
      "Herstel begint bij erkennen van de rol en het terugclaimen van grenzen."
    ],
    feitVsFabel: [
      {
        mythe: "Als er geen misbruik was, was de relatie met mijn ouder normaal.",
        feit: "Een kind dat de emotionele last van een volwassene draagt, mist zijn eigen kind-zijn. Die omkering is schadelijk, ook zonder fysieke aanraking."
      }
    ],
    bronnen: [
      {
        boek: "trapped-in-the-mirror",
        detail: "Over de spiegeling tussen ouder en kind in emotioneel incest."
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
    ]
  },
  {
    id: "fawn-response",
    titel: "Fawn response",
    icoon: "🤝",
    accent: "#9a7b4f",
    categorie: "zenuwstelsel",
    leeswijzer: "5 min lezen",
    kort: "Pleasen, aanpassen, verzoenen — de fawn response is je zenuwstelsel dat veiligheid zoekt door de ander tevreden te stellen.",
    blokken: [
      {
        kop: "De vierde overlevingsreactie",
        tekst: "Naast vechten, vluchten en bevriezen bestaat er pleasen (fawn): je past je aan, gaat conflicten uit de weg, zegt ja terwijl je nee bedoelt, en leest de ander om gevaar af te wenden. Het is geen 'te aardig zijn' maar een automatische strategie wanneer vechten of vluchten niet veilig was."
      },
      {
        kop: "Hoe het ontstaat",
        tekst: "Fawn ontstaat vaak bij kinderen die afhankelijk waren van onvoorspelbare of emotioneel volatiele verzorgers. Door de ander tevreden te houden, hield je de vrede — en soms jezelf veilig. Die strategie werd zo ingesleten dat je haar nu automatisch inzet, ook als er geen gevaar meer is."
      },
      {
        kop: "Van fawn naar keuze",
        tekst: "Herstel betekent niet hard worden of conflicten zoeken, maar leren je eigen grenzen te voelen en nee te zeggen zonder paniek. Kleine oefeningen — een grens aangeven bij iemand veilig, je behoefte benoemen — helpen je systeem leren dat authenticiteit niet gevaarlijk hoeft te zijn."
      }
    ],
    kernpunten: [
      "Fawn is de vierde overlevingsreactie: veiligheid via aanpassing.",
      "Het ontstaat vaak bij onvoorspelbare of emotioneel volatiele verzorgers.",
      "Herstel is leren grenzen voelen, niet hard worden."
    ],
    feitVsFabel: [
      {
        mythe: "Pleasen betekent dat je zwak bent of geen ruggengraat hebt.",
        feit: "Fawn is een slimme overlevingsstrategie die je zenuwstelsel in gevaar inzette. Het is geen karaktereigenschap maar een aanpassing die je kunt herleren."
      }
    ],
    bronnen: [
      {
        boek: "cptsd-surviving-thriving",
        detail: "Over de fawn response als vierde overlevingsreactie."
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
    ]
  }
];

const HECHTINGSSTIJLEN = [
  {
    id: "veilig",
    naam: "Veilige hechting",
    icoon: "🪺",
    accent: "#5f7259",
    kleur: "#e3eadf",
    inEenZin: "Nabijheid voelt veilig en autonomie ook — je kunt dichtbij komen én jezelf blijven.",
    herkenbaar: [
      "Je kunt steun vragen én alleen zijn zonder dat het bedreigend voelt.",
      "Conflict maakt je niet kapot; je gelooft dat het opgelost kan worden.",
      "Je vertrouwt er doorgaans op dat mensen het goed met je voorhebben."
    ],
    ontstaan: "Veilige hechting groeit als verzorgers vaak genoeg afgestemd, voorspelbaar en troostend waren. Je leerde dat je behoeften welkom waren en dat er iemand kwam als je riep — niet perfect, maar 'goed genoeg'.",
    inRelaties: "In relaties kun je nabijheid en ruimte combineren. Je durft je kwetsbaar op te stellen, grenzen te stellen en je partner te vertrouwen zonder voortdurend te hoeven controleren of vluchten.",
    groei: "Ook wie niet veilig begon, kan 'verdiende veiligheid' opbouwen: door corrigerende ervaringen in veilige relaties of therapie kan je systeem alsnog leren dat verbinding veilig is.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over de veilige hechtingsstijl bij volwassenen."
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
    inEenZin: "Je verlangt sterk naar nabijheid en bent gevoelig voor tekenen van afstand of afwijzing.",
    herkenbaar: [
      "Je piekert snel of de ander nog wel van je houdt.",
      "Afstand voelt bedreigend; je zoekt geruststelling en bevestiging.",
      "Een korte stilte of kort antwoord kan een alarm in je triggeren."
    ],
    ontstaan: "Angstige hechting ontstaat vaak bij onvoorspelbare zorg: soms warm en beschikbaar, soms afwezig of afwijzend. Je leerde extra je best te doen en alert te blijven om verbinding te behouden.",
    inRelaties: "Je hebt veel te geven, maar verlatingsangst kan leiden tot vastklampen, controleren of overmatig aanpassen. Onbedoeld kan dat een vermijdende partner juist verder wegduwen.",
    groei: "Leren je eigen alarm te herkennen en te kalmeren, en je waarde niet af te laten hangen van de reactie van de ander, verbreedt je ruimte. Veilige, betrouwbare relaties helpen je systeem geruststellen.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over de angstige hechtingsstijl en de dynamiek met vermijdende partners."
      },
      {
        boek: "running-on-empty",
        detail: "Over hoe vroege gemis doorwerkt in je behoefte aan bevestiging."
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
    inEenZin: "Je hecht waarde aan onafhankelijkheid en voelt je ongemakkelijk bij te veel nabijheid of afhankelijkheid.",
    herkenbaar: [
      "Je redt jezelf liever en vindt hulp vragen lastig.",
      "Bij veel nabijheid of emotie heb je neiging tot afstand nemen.",
      "Je kunt je 'overspoeld' voelen door de behoeften van een ander."
    ],
    ontstaan: "Vermijdende hechting ontstaat vaak als emoties en behoeften vroeg niet welkom waren of werden afgewezen. Je leerde dat je beter op jezelf kon rekenen en dat kwetsbaarheid risicovol was.",
    inRelaties: "Je bent vaak betrouwbaar en zelfstandig, maar emotionele nabijheid kan benauwen. Onder druk trek je je terug, wat een angstige partner juist ongerust maakt — een pijnlijke dans van toenadering en afstand.",
    groei: "Kleine stappen in kwetsbaarheid, leren je eigen emoties toe te laten, en ontdekken dat afhankelijkheid niet gevaarlijk hoeft te zijn, vergroten je vermogen tot nabijheid zonder jezelf te verliezen.",
    bronnen: [
      {
        boek: "attached",
        detail: "Over de vermijdende hechtingsstijl bij volwassenen."
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
    inEenZin: "Je verlangt naar nabijheid én bent er bang voor — de twee impulsen botsen, vaak na vroege onveiligheid.",
    herkenbaar: [
      "Je trekt mensen aan en duwt ze weer weg, soms binnen korte tijd.",
      "Nabijheid kan tegelijk troostend en bedreigend voelen.",
      "Relaties voelen soms verwarrend, intens of chaotisch."
    ],
    ontstaan: "Deze stijl ontstaat vaak wanneer de bron van troost óók de bron van angst was — bijvoorbeeld bij een verzorger die onvoorspelbaar, beangstigend of zelf getraumatiseerd was. Het systeem leerde geen consistente strategie, vandaar de innerlijke botsing.",
    inRelaties: "Toenadering en terugtrekking wisselen elkaar af, wat voor jou en je partner verwarrend is. Onder de chaos zit vaak een diep verlangen naar veilige verbinding én een diepe angst dat die verbinding gevaarlijk is.",
    groei: "Met veiligheid, voorspelbaarheid en doorgaans professionele steun kan ook deze stijl verschuiven richting meer veiligheid. Het begint bij een relatie — vaak met een therapeut — die standvastig veilig blijft.",
    bronnen: [
      {
        boek: "healing-developmental-trauma",
        detail: "Over vroege relationele onveiligheid en de gevolgen voor hechting."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over de innerlijke botsing tussen verlangen naar en angst voor nabijheid."
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
    inEenZin: "Intense emoties, een wankel zelfgevoel en een diepe angst om verlaten te worden — vaak geworteld in vroege onveiligheid.",
    watHetIs: [
      {
        kop: "Een patroon, geen karakter",
        tekst: "Het borderline-patroon kenmerkt zich door heftige, snel wisselende emoties, impulsiviteit, een onstabiel zelfbeeld en stormachtige relaties. Veel mensen met dit patroon hebben een geschiedenis van vroege onveiligheid of trauma; het wordt steeds vaker begrepen als een begrijpelijke aanpassing aan een onveilige start."
      },
      {
        kop: "De kern: angst voor verlating",
        tekst: "Onder het gedrag zit vaak een diepe angst om in de steek gelaten te worden, en een moeite om emoties zelf te kalmeren. Wat van buiten 'manipulatief' of 'overdreven' lijkt, is van binnen vaak pure overlevingsnood."
      }
    ],
    vaakVerwardMet: "Heftige emoties of een moeilijke periode betekenen niet meteen 'borderline'. Ook complex trauma (CPTSS) en bipolaire stemmingswisselingen lijken er soms op, maar verschillen wezenlijk. Alleen een professional kan dit onderscheiden.",
    binnenkant: "Van binnen kan het voelen als leven zonder huid: emoties komen razendsnel en overweldigend binnen, de leegte kan ondraaglijk zijn, en de angst dat mensen weggaan kleurt bijna elke relatie. Veel mensen schamen zich diep voor reacties die ze zelf niet kunnen stoppen.",
    watHelpt: [
      "Dialectische gedragstherapie (DBT) voor emotieregulatie en crisisvaardigheden.",
      "Schematherapie voor de onderliggende patronen.",
      "Een stabiele, voorspelbare therapeutische relatie."
    ],
    nietDoen: [
      "'Borderline' als scheldwoord of verklaring-voor-alles gebruiken.",
      "Iemand reduceren tot een diagnose.",
      "Zelf een diagnose plakken op jezelf of een ander."
    ],
    disclaimer: "Dit is educatieve uitleg, geen diagnose. Een persoonlijkheidsstoornis wordt uitsluitend door een gekwalificeerde professional vastgesteld.",
    bronnen: [
      {
        boek: "complex-ptsd-workbook",
        detail: "Over de overlap tussen complex trauma en emotieregulatieproblemen."
      },
      {
        boek: "healing-fragmented-selves",
        detail: "Over de innerlijke delen achter heftige reacties."
      }
    ],
    gerelateerd: [
      "narcistisch",
      "vermijdend"
    ]
  },
  {
    id: "narcistisch",
    naam: "Narcistisch patroon",
    ookGenoemd: "narcistische persoonlijkheidsstoornis (NPS)",
    icoon: "🪞",
    accent: "#9a7b4f",
    inEenZin: "Een broze eigenwaarde verborgen achter een schild van grootsheid of gevoeligheid voor kritiek — vaak met een gewonde kern.",
    watHetIs: [
      {
        kop: "Het schild en de wond",
        tekst: "Het narcistische patroon wordt vaak geassocieerd met grandiositeit, behoefte aan bewondering en weinig zichtbare empathie. Maar onder dat schild zit doorgaans een fragiele eigenwaarde en diepe schaamte. Het beeld van 'grootsheid' is dan een afweer tegen een gevoel van waardeloosheid."
      },
      {
        kop: "Twee gezichten",
        tekst: "Sommige mensen tonen vooral de grootse, dominante kant (grandioos); anderen vooral een kwetsbare, snel gekrenkte kant (kwetsbaar narcisme). Beide delen vaak een achtergrond waarin liefde voorwaardelijk was — afhankelijk van presteren of een rol spelen."
      }
    ],
    vaakVerwardMet: "Zelfvertrouwen, ambitie of af en toe egoïstisch gedrag is geen narcistische stoornis. De term wordt online vaak losjes gebruikt; een werkelijke persoonlijkheidsstoornis is iets anders dan vervelend gedrag.",
    binnenkant: "Van binnen kan er een voortdurende, uitputtende druk zijn om een beeld hoog te houden, en een grote kwetsbaarheid voor kritiek of vernedering. Echte nabijheid voelt riskant, omdat ze de gewonde kern zou kunnen blootleggen.",
    watHelpt: [
      "Langdurige, op de relatie gerichte psychotherapie (zoals schematherapie).",
      "Werken aan de onderliggende schaamte in plaats van enkel het gedrag.",
      "Voor naasten: stevige grenzen en eigen steun."
    ],
    nietDoen: [
      "'Narcist' als scheldwoord gebruiken voor iedereen die egoïstisch doet.",
      "Op afstand diagnoses stellen over publieke figuren of exen.",
      "Vergeten dat ook achter dit patroon een gewonde mens schuilt."
    ],
    disclaimer: "Dit is educatieve uitleg, geen diagnose. Persoonlijkheidsstoornissen worden alleen door professionals vastgesteld — niet op basis van een lijstje of een conflict.",
    bronnen: [
      {
        boek: "myth-of-normal",
        detail: "Over hoe vroege voorwaardelijkheid een broos zelf kan vormen."
      }
    ],
    gerelateerd: [
      "borderline",
      "vermijdend"
    ]
  },
  {
    id: "vermijdend",
    naam: "Vermijdend patroon",
    ookGenoemd: "vermijdende persoonlijkheidsstoornis",
    icoon: "🚪",
    accent: "#5a7d86",
    inEenZin: "Een diepe gevoeligheid voor afwijzing die leidt tot terugtrekking — niet uit onverschilligheid, maar uit angst.",
    watHetIs: [
      {
        kop: "Verlangen én vermijden",
        tekst: "Bij het vermijdende patroon verlangt iemand sterk naar verbinding, maar vermijdt die uit angst voor afwijzing, kritiek of vernedering. Sociale situaties worden uit de weg gegaan, niet omdat men anderen niet wil, maar omdat de pijn van mogelijke afwijzing te groot voelt."
      },
      {
        kop: "Niet hetzelfde als verlegenheid",
        tekst: "Verlegenheid is alledaags; bij dit patroon is de angst zo doordringend dat ze werk, relaties en het dagelijks leven flink beperkt. Vaak ligt er een geschiedenis van kleinerende of afwijzende ervaringen aan ten grondslag."
      }
    ],
    vaakVerwardMet: "Introversie of verlegenheid is iets anders: introverte mensen genieten van alleen-zijn zonder de verlammende angst voor afwijzing. Ook sociale angst overlapt, maar verschilt in reikwijdte.",
    binnenkant: "Van binnen is er vaak een pijnlijk verlangen om erbij te horen, gecombineerd met de overtuiging 'als ze me echt kennen, wijzen ze me af'. Die overtuiging maakt elke stap naar nabijheid spannend en uitputtend.",
    watHelpt: [
      "Therapie die stap voor stap veilige sociale ervaringen opbouwt.",
      "Werken aan het onderliggende gevoel van tekortschieten en schaamte.",
      "Een geduldige, niet-oordelende therapeutische relatie."
    ],
    nietDoen: [
      "Aandringen of pushen ('doe niet zo moeilijk, ga gewoon').",
      "Terugtrekking opvatten als desinteresse of arrogantie.",
      "De diagnose zelf invullen — laat dat aan een professional."
    ],
    disclaimer: "Dit is educatieve uitleg, geen diagnose. Twijfel je over jezelf of een naaste? Zoek een gekwalificeerde hulpverlener.",
    bronnen: [
      {
        boek: "running-on-empty",
        detail: "Over hoe vroege afwijzing een diep gevoel van tekortschieten vormt."
      }
    ],
    gerelateerd: [
      "borderline",
      "narcistisch"
    ]
  }
];

