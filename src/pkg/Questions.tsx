export interface MeerkeuzeVraag {
  vraag: string;
  opties: string[];
  correct: string;
  type: string
}

// multi q are worth "2"0
// type: "multi"0p

export const AiVragen: MeerkeuzeVraag[] = [
  {
    vraag: "Waar staat A.I. voor?",
    opties: [
      "Artificial Intelligence",
      "Alternative Intelligence",
      "Adaptive Intelligence",
    ],
    correct: "0",
    type: "multi"
  },
  {
    vraag: "Wat is NLP, natural language processing?",
    opties: [
      "Het verstaan van alle talen",
      "Het omzetten van mensentaal naar computertaal",
      "Het creëren van chatbots",
    ],
    correct: "1",
    type: "multi"
  },
  {
    vraag: "Wat houdt AI-bias in?",
    opties: [
      "Iemand die AI prefereert",
      "De persoonlijke voorkeuren die een chatbot voor zichzelf genereert",
      "Een vooroordeel dat bij AI ontstaat door bevooroordeelde gegevens",
    ],
    correct: "2",
    type: "multi"
  },
  {
    vraag: "Wat is een deepfake?",
    opties: [
      "Een nepnieuwsartikel met een misleidende kop",
      "Een foto die is bewerkt met Photoshop",
      "Een video waarin AI iemands gezicht of stem vervalst",
    ],
    correct: "2",
    type: "multi"
  },
  {
    vraag: "Waar staat GPT voor?",
    opties: [
      "Generative Pre-trained Transformer",
      "Generally Positive Tool",
      "Genius Processing Terminal",
    ],
    correct: "0",
    type: "multi"
  },
  {
    vraag: "Welke van deze AI-systemen gebruikt geen NLP?",
    opties: [
      "Een translator",
      "Een zelfrijdende auto",
      "Een zoekmachine die spraakopdrachten begrijpt",
    ],
    correct: "1",
    type: "multi"
  },
  {
    vraag:
      "Wat is op dit moment het belangrijkste doel voor het verbeteren van AI?",
    opties: [
      "Volledige autonomie",
      "Eigen creativiteit",
      "Transparantie en uitlegbaarheid",
    ],
    correct: "2",
    type: "multi"
  },
  {
    vraag: "Wat is een Turingtest?",
    opties: [
      "Een test om de intelligentie van een AI te testen",
      "Een test om te zien hoe goed een AI zich als mens kan voordoen",
      "Een test om te zien of een AI weet wie Alan Turing is",
    ],
    correct: "1",
    type: "multi"
  },
  {
    vraag: "Waar gebruikt een AI CNN (Convolutional Neural Network) voor?",
    opties: ["Spraakherkenning", "Grote berekeningen", "Foto-herkenning"],
    correct: "2",
    type: "multi"
  },
  {
    vraag: "NPC's in games zijn AI.",
    opties: ["Waar", "Niet waar", "Soms"],
    correct: "2",
    type: "multi"
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
    correct: "2",
    type: "multi"
  },
  {
    vraag: "Welk platform was tijdelijk verbannen in de Verenigde Staten?",
    opties: ["TikTok", "Snapchat", "Facebook"],
    correct: "0",
    type: "multi"
  },
  {
    vraag: "Wat is de primaire functie van een hashtag?",
    opties: [
      "Verhogen prijs van advertenties",
      "Categoriseren van video’s",
      "Het heeft geen functie, gewoon decoratie",
    ],
    correct: "1",
    type: "multi"
  },
  {
    vraag: "Welk platform startte short-form content?",
    opties: ["Vine", "TikTok", "MySpace"],
    correct: "0",
    type: "multi"
  },
  {
    vraag: "Welk social media platform werd het eerst gecreëerd?",
    opties: ["MySpace", "LinkedIn", "Facebook"],
    correct: "1",
    type: "multi"
  },
  {
    vraag: "Wat is de beste manier om met haatreacties om te gaan?",
    opties: [
      "Haatberichten terugschrijven",
      "De discussie aangaan met de schrijver",
      "Het bericht rapporteren en negeren",
    ],
    correct: "2",
    type: "multi"
  },
  {
    vraag: "Wat is een DM?",
    opties: ["Een Dungeon Master", "Een Direct Message", "Een Discord Message"],
    correct: "1",
    type: "multi"
  },
  {
    vraag: "Wat is een shadowban?",
    opties: [
      "Een instelling waarbij je alle donkere thema’s automatisch uitzet",
      "Wanneer een account minder of niet meer zichtbaar wordt gemaakt zonder dat de eigenaar dit weet",
      "Een ban uitgevoerd door een anonieme persoon",
    ],
    correct: "1",
    type: "multi"
  },
  {
    vraag:
      "Hoe heet het psychologische effect waardoor je sneller extreme meningen overneemt van het internet?",
    opties: ["Confirmation-bias", "Mandela-effect", "Placebo-effect"],
    correct: "0",
    type: "multi"
  },
  {
    vraag:
      "Wat is geen factor voor een algoritme dat bepaalt welke content jij te zien krijgt?",
    opties: [
      "Jouw locatie",
      "Jouw eerdere interacties",
      "Jouw hoeveelheid volgers",
    ],
    correct: "2",
    type: "multi"
  },
];