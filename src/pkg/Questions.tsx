export interface MeerkeuzeVraag {
  vraag: string;
  opties: string[];
  correct: string;
  type: string;
}

export const CyberSecurityVragen: MeerkeuzeVraag[] = [
  {
    vraag: "Wat is phishing?",
    opties: [
      "Een methode om vissen te vangen",
      "Een aanval waarbij iemand zich voordoet als een betrouwbare bron om informatie te stelen",
      "Een techniek om bestanden sneller te downloaden",
    ],
    correct:
      "Een aanval waarbij iemand zich voordoet als een betrouwbare bron om informatie te stelen",
    type: "multi",
  },
  {
    vraag: "Wat is het doel van encryptie?",
    opties: [
      "Het comprimeren van bestanden om ruimte te besparen",
      "Het verbergen van gegevens zodat alleen geautoriseerde partijen ze kunnen lezen",
      "Het versnellen van internetverbindingen",
    ],
    correct:
      "Het verbergen van gegevens zodat alleen geautoriseerde partijen ze kunnen lezen",
    type: "multi",
  },
  {
    vraag: "Wat is een firewall?",
    opties: [
      "Een fysieke muur die hackers buitenhoudt",
      "Een beveiligingssysteem dat netwerkverkeer controleert en filtert",
      "Een software die virussen opspoort en verwijdert",
    ],
    correct:
      "Een beveiligingssysteem dat netwerkverkeer controleert en filtert",
    type: "multi",
  },
  {
    vraag: "Wat is een brute force aanval?",
    opties: [
      "Een aanval waarbij hackers handmatig wachtwoorden invoeren",
      "Een aanval waarbij alle mogelijke wachtwoordcombinaties automatisch worden geprobeerd",
      "Een aanval waarbij virussen worden verstuurd via e-mail",
    ],
    correct:
      "Een aanval waarbij alle mogelijke wachtwoordcombinaties automatisch worden geprobeerd",
    type: "multi",
  },
  {
    vraag: "Wat is een zero-day aanval?",
    opties: [
      "Een aanval die plaatsvindt op de eerste dag van de maand",
      "Een aanval die misbruik maakt van een onbekende kwetsbaarheid",
      "Een aanval waarbij hackers 24 uur lang non-stop proberen binnen te dringen",
    ],
    correct: "Een aanval die misbruik maakt van een onbekende kwetsbaarheid",
    type: "multi",
  },
  {
    vraag: "Wat is een VPN?",
    opties: [
      "Een netwerk dat alleen voor overheidsinstanties toegankelijk is",
      "Een tool die je internetverkeer versleutelt en je IP-adres verbergt",
      "Een programma dat automatisch virussen verwijdert",
    ],
    correct:
      "Een tool die je internetverkeer versleutelt en je IP-adres verbergt",
    type: "multi",
  },
  {
    vraag: "Wat betekent 'social engineering' in cybersecurity?",
    opties: [
      "Het ontwikkelen van veilige sociale media-apps",
      "Het manipuleren van mensen om gevoelige informatie vrij te geven",
      "Het bouwen van firewalls voor sociale netwerken",
    ],
    correct: "Het manipuleren van mensen om gevoelige informatie vrij te geven",
    type: "multi",
  },
  {
    vraag: "Wat is ransomware?",
    opties: [
      "Een type malware dat bestanden versleutelt en losgeld eist om ze te ontsleutelen",
      "Een virus dat alleen op Windows-computers werkt",
      "Een methode om veilige wachtwoorden te genereren",
    ],
    correct:
      "Een type malware dat bestanden versleutelt en losgeld eist om ze te ontsleutelen",
    type: "multi",
  },
  {
    vraag: "Wat is het belangrijkste doel van tweefactorauthenticatie (2FA)?",
    opties: [
      "Het sneller inloggen op websites",
      "Een extra beveiligingslaag toevoegen naast een wachtwoord",
      "Wachtwoorden overbodig maken",
    ],
    correct: "Een extra beveiligingslaag toevoegen naast een wachtwoord",
    type: "multi",
  },
  {
    vraag: "Wat is een 'DDoS-aanval'?",
    opties: [
      "Een aanval waarbij een website wordt overspoeld met verkeer om deze onbereikbaar te maken",
      "Een aanval waarbij een hacker een wachtwoord probeert te raden",
      "Een aanval waarbij gevoelige informatie wordt gestolen uit een database",
    ],
    correct:
      "Een aanval waarbij een website wordt overspoeld met verkeer om deze onbereikbaar te maken",
    type: "multi",
  },
  {
    vraag: "Hoe kun je jezelf beschermen tegen phishing-aanvallen?",
    opties: [],
    correct:
      "Door altijd de afzender van e-mails te controleren, geen onbekende links aan te klikken, sterke wachtwoorden te gebruiken en tweefactorauthenticatie (2FA) in te schakelen.",
    type: "open",
  },
  {
    vraag: "Wat zijn de voordelen en nadelen van encryptie?",
    opties: [],
    correct:
      "Voordelen: Beschermt gegevens tegen ongeoorloofde toegang, verhoogt privacy en voorkomt datalekken. Nadelen: Kan vertraging veroorzaken bij gegevensverwerking, versleutelde gegevens kunnen verloren gaan zonder de juiste sleutel.",
    type: "open",
  },
  {
    vraag: "Hoe werkt een firewall en waarom is deze belangrijk?",
    opties: [],
    correct:
      "Een firewall controleert en filtert inkomend en uitgaand netwerkverkeer op basis van vooraf ingestelde beveiligingsregels. Dit helpt om ongeautoriseerde toegang te voorkomen en cyberaanvallen tegen te gaan.",
    type: "open",
  },
  {
    vraag:
      "Wat zijn effectieve maatregelen om een brute-force aanval te voorkomen?",
    opties: [],
    correct:
      "Gebruik van sterke en lange wachtwoorden, implementatie van accountvergrendeling na meerdere mislukte inlogpogingen, gebruik van tweefactorauthenticatie (2FA) en IP-beperkingen instellen.",
    type: "open",
  },
  {
    vraag:
      "Kun je een voorbeeld geven van een recente zero-day aanval en de gevolgen ervan?",
    opties: [],
    correct:
      "Een recent voorbeeld is de zero-day kwetsbaarheid in Microsoft Exchange (ProxyLogon), waarbij hackers toegang kregen tot e-mailservers van bedrijven. Dit leidde tot datalekken en ongeautoriseerde toegang tot gevoelige informatie.",
    type: "open",
  },
];


export const AiVragen: MeerkeuzeVraag[] = [
  {
    vraag: "Waar staat A.I. voor?",
    opties: [
      "Artificial Intelligence",
      "Alternative Intelligence",
      "Adaptive Intelligence",
    ],
    correct: "Artificial Intelligence",
    type: "multi",
  },
  {
    vraag: "Wat is NLP, natural language processing?",
    opties: [
      "Het verstaan van alle talen",
      "Het omzetten van mensentaal naar computertaal",
      "Het creëren van chatbots",
    ],
    correct: "Het omzetten van mensentaal naar computertaal",
    type: "multi",
  },
  {
    vraag: "Wat houdt AI-bias in?",
    opties: [
      "Iemand die AI prefereert",
      "De persoonlijke voorkeuren die een chatbot voor zichzelf genereert",
      "Een vooroordeel dat bij AI ontstaat door bevooroordeelde gegevens",
    ],
    correct:
      "Een vooroordeel dat bij AI ontstaat door bevooroordeelde gegevens",
    type: "multi",
  },
  {
    vraag: "Wat is een deepfake?",
    opties: [
      "Een nepnieuwsartikel met een misleidende kop",
      "Een foto die is bewerkt met Photoshop",
      "Een video waarin AI iemands gezicht of stem vervalst",
    ],
    correct: "Een video waarin AI iemands gezicht of stem vervalst",
    type: "multi",
  },
  {
    vraag: "Waar staat GPT voor?",
    opties: [
      "Generative Pre-trained Transformer",
      "Generally Positive Tool",
      "Genius Processing Terminal",
    ],
    correct: "Generative Pre-trained Transformer",
    type: "multi",
  },
  {
    vraag: "Welke van deze AI-systemen gebruikt geen NLP?",
    opties: [
      "Een translator",
      "Een zelfrijdende auto",
      "Een zoekmachine die spraakopdrachten begrijpt",
    ],
    correct: "Een zelfrijdende auto",
    type: "multi",
  },
  {
    vraag:
      "Wat is op dit moment het belangrijkste doel voor het verbeteren van AI?",
    opties: [
      "Volledige autonomie",
      "Eigen creativiteit",
      "Transparantie en uitlegbaarheid",
    ],
    correct: "Transparantie en uitlegbaarheid",
    type: "multi",
  },
  {
    vraag: "Wat is een Turingtest?",
    opties: [
      "Een test om de intelligentie van een AI te testen",
      "Een test om te zien hoe goed een AI zich als mens kan voordoen",
      "Een test om te zien of een AI weet wie Alan Turing is",
    ],
    correct: "Een test om te zien hoe goed een AI zich als mens kan voordoen",
    type: "multi",
  },
  {
    vraag: "Waar gebruikt een AI CNN (Convolutional Neural Network) voor?",
    opties: ["Spraakherkenning", "Grote berekeningen", "Foto-herkenning"],
    correct: "Foto-herkenning",
    type: "multi",
  },
  {
    vraag: "NPC's in games zijn AI.",
    opties: ["Waar", "Niet waar", "Soms"],
    correct: "Soms",
    type: "multi",
  },
  {
    vraag:
      "Hoe beïnvloedt AI ons dagelijks leven op een positieve en negatieve manier?",
    opties: [],
    correct:
      "Positief: AI helpt bij gepersonaliseerde aanbevelingen, verbeterde medische diagnoses en efficiëntere klantenservice. Negatief: AI kan leiden tot privacyproblemen, baanverlies door automatisering en bias in algoritmes.",
    type: "open",
  },
  {
    vraag:
      "Op welke manieren kan AI-bias ontstaan, en hoe kan dit worden tegengegaan?",
    opties: [],
    correct:
      "AI-bias ontstaat door bevooroordeelde trainingsdata, menselijke vooroordelen in modellen en verkeerde interpretatie van gegevens. Dit kan worden tegengegaan door diverse datasets te gebruiken, ethische richtlijnen op te stellen en AI-transparantie te verbeteren.",
    type: "open",
  },
  {
    vraag: "Wat zijn de ethische dilemma's rondom deepfake-technologie?",
    opties: [],
    correct:
      "Deepfakes kunnen worden gebruikt voor entertainment en educatie, maar ook voor misleiding, fraude en reputatieschade. Dit roept ethische vragen op over misbruik, privacy en regulering.",
    type: "open",
  },
  {
    vraag:
      "Hoe zou AI in de toekomst transparanter en uitlegbaar kunnen worden?",
    opties: [],
    correct:
      "Door de ontwikkeling van explainable AI (XAI), waarbij algoritmes hun beslissingen kunnen verklaren, en het invoeren van ethische AI-richtlijnen en audits om bias en fouten te minimaliseren.",
    type: "open",
  },
  {
    vraag:
      "Wat zijn de belangrijkste toepassingen van Convolutional Neural Networks (CNN's)?",
    opties: [],
    correct:
      "CNN’s worden vooral gebruikt voor beeldherkenning, zoals gezichtsherkenning, medische beeldanalyse (zoals MRI-scans), zelfrijdende auto's en objectdetectie in bewakingssystemen.",
    type: "open",
  },
];

export const SocialMediaVragen: MeerkeuzeVraag[] = [
  {
    vraag: "Wat doen algoritmes op social media?",
    opties: [
      "Maakt inloggen makkelijker",
      "Zorgt voor persoonlijk contact met creators",
      "Bepalen wat gebruiker te zien krijgt",
    ],
    correct: "Bepalen wat gebruiker te zien krijgt",
    type: "multi",
  },
  {
    vraag: "Welk platform was tijdelijk verbannen in de Verenigde Staten?",
    opties: ["TikTok", "Snapchat", "Facebook"],
    correct: "TikTok",
    type: "multi",
  },
  {
    vraag: "Wat is de primaire functie van een hashtag?",
    opties: [
      "Verhogen prijs van advertenties",
      "Categoriseren van video’s",
      "Het heeft geen functie, gewoon decoratie",
    ],
    correct: "Categoriseren van video’s",
    type: "multi",
  },
  {
    vraag: "Welk platform startte short-form content?",
    opties: ["Vine", "TikTok", "MySpace"],
    correct: "Vine",
    type: "multi",
  },
  {
    vraag: "Welk social media platform werd het eerst gecreëerd?",
    opties: ["MySpace", "LinkedIn", "Facebook"],
    correct: "LinkedIn",
    type: "multi",
  },
  {
    vraag: "Wat is de beste manier om met haatreacties om te gaan?",
    opties: [
      "Haatberichten terugschrijven",
      "De discussie aangaan met de schrijver",
      "Het bericht rapporteren en negeren",
    ],
    correct: "Het bericht rapporteren en negeren",
    type: "multi",
  },
  {
    vraag: "Wat is een DM?",
    opties: ["Een Dungeon Master", "Een Direct Message", "Een Discord Message"],
    correct: "Een Direct Message",
    type: "multi",
  },
  {
    vraag: "Wat is een shadowban?",
    opties: [
      "Een instelling waarbij je alle donkere thema’s automatisch uitzet",
      "Wanneer een account minder of niet meer zichtbaar wordt gemaakt zonder dat de eigenaar dit weet",
      "Een ban uitgevoerd door een anonieme persoon",
    ],
    correct:
      "Wanneer een account minder of niet meer zichtbaar wordt gemaakt zonder dat de eigenaar dit weet",
    type: "multi",
  },
  {
    vraag:
      "Hoe heet het psychologische effect waardoor je sneller extreme meningen overneemt van het internet?",
    opties: ["Confirmation-bias", "Mandela-effect", "Placebo-effect"],
    correct: "Confirmation-bias",
    type: "multi",
  },
  {
    vraag:
      "Wat is geen factor voor een algoritme dat bepaalt welke content jij te zien krijgt?",
    opties: [
      "Jouw locatie",
      "Jouw eerdere interacties",
      "Jouw hoeveelheid volgers",
    ],
    correct: "Jouw hoeveelheid volgers",
    type: "multi",
  },
  {
    vraag:
      "Hoe beïnvloeden social media-algoritmes de manier waarop mensen informatie consumeren?",
    opties: [],
    correct:
      "Algoritmes bepalen welke content gebruikers te zien krijgen op basis van hun interacties, wat kan leiden tot gepersonaliseerde feeds, maar ook tot filterbubbels en echokamers die bepaalde meningen versterken.",
    type: "open",
  },
  {
    vraag:
      "Wat zijn de mogelijke gevolgen van een social media-platformban in een land?",
    opties: [],
    correct:
      "Gebruikers verliezen toegang tot een belangrijk communicatiekanaal, bedrijven verliezen klanten en er kan censuur ontstaan. Tegelijkertijd kan het helpen om desinformatie en veiligheidsrisico’s te verminderen.",
    type: "open",
  },
  {
    vraag:
      "Waarom is het belangrijk om bewust om te gaan met haatreacties online?",
    opties: [],
    correct:
      "Negatieve reacties kunnen psychologische schade veroorzaken en discussies escaleren. Het negeren of rapporteren van haatreacties helpt om een gezondere online omgeving te behouden.",
    type: "open",
  },
  {
    vraag:
      "Hoe kunnen social media-platforms misinformatie effectiever tegengaan?",
    opties: [],
    correct:
      "Door fact-checking te implementeren, waarschuwingen bij nepnieuws te tonen, algoritmes aan te passen om betrouwbare bronnen te promoten en gebruikers beter voor te lichten over mediawijsheid.",
    type: "open",
  },
  {
    vraag:
      "Op welke manieren kan een shadowban invloed hebben op een gebruiker en zijn/haar bereik?",
    opties: [],
    correct:
      "Een shadowban vermindert de zichtbaarheid van een gebruiker zonder melding, wat leidt tot minder interacties en bereik. Dit kan zowel een maatregel tegen spam zijn als een controversiële vorm van contentbeperking.",
    type: "open",
  },
];
