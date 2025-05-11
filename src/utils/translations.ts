// This file contains translations for the application
// When adding new translations, make sure to add them to all languages

// Define the structure of the translations object
export interface Translations {
  appName: string;
  welcome: string;
  findTaxi: string;
  welcomeMessage: string;
  fromWhere: string;
  toWhere: string;
  search: string;
  travelingSoon: string;
  calculator: string;
  taxiMarketplace: string;
  language: string;
  english: string;
  afrikaans: string;
  zulu: string;
  xhosa: string;
  login: string;
  signUp: string;
  email: string;
  password: string;
  dontHaveAccount: string;
  loginSuccess: string;
  welcomeBack: string;
  name: string;
  confirmPassword: string;
  alreadyHaveAccount: string;
  signupSuccess: string;
  thankYou: string;
  fullName: string;
  createAccount: string;
  accountCreated: string;
  enterFullName: string;
  taxiCalculator: string;
  calculatorDescription: string;
  minibusMarketplace: string;
  minibusMarketplaceDesc: string;
  browseAds: string;
  postRequirement: string;
  availableServices: string;
  postedBy: string;
  postedOn: string;
  contact: string;
  phoneNumber: string;
  eventType: string;
  school: string;
  wedding: string;
  tour: string;
  corporate: string;
  other: string;
  date: string;
  budget: string;
  passengers: string;
  requirements: string;
  postAd: string;
  adPosted: string;
  adPostedDesc: string;
  bookingSuccess: string;
  bookingConfirmed: string;
  bookingError: string;
  fillAllFields: string;
}

// Define supported languages
export type SupportedLanguage = 'en' | 'zu' | 'xh' | 'af';

// English translations
export const enTranslations: Translations = {
  appName: "Ayoba Ride",
  welcome: "Welcome to Ayoba Ride",
  findTaxi: "Find a Taxi Near You",
  welcomeMessage: "Search for taxis in your area. Plan your trip with our easy-to-use tools.",
  fromWhere: "From where?",
  toWhere: "To where?",
  search: "Search",
  travelingSoon: "Tools for Your Journey",
  calculator: "Trip Calculator",
  taxiMarketplace: "Taxi Marketplace",
  language: "Language",
  english: "English",
  afrikaans: "Afrikaans",
  zulu: "Zulu",
  xhosa: "Xhosa",
  login: "Login",
  signUp: "Sign Up",
  email: "Email",
  password: "Password",
  dontHaveAccount: "Don't have an account?",
  loginSuccess: "Successfully logged in!",
  welcomeBack: "Welcome back to Ayoba Ride",
  name: "Full Name",
  confirmPassword: "Confirm Password",
  alreadyHaveAccount: "Already have an account?",
  signupSuccess: "Successfully signed up!",
  thankYou: "Thank you for joining Ayoba Ride",
  fullName: "Full Name",
  createAccount: "Create Account",
  accountCreated: "Your account has been created successfully!",
  enterFullName: "Enter your full name",
  taxiCalculator: "Taxi Fare Calculator",
  calculatorDescription: "Calculate your estimated fare based on distance and type of taxi.",
  minibusMarketplace: "Taxi Reservation Platform",
  minibusMarketplaceDesc: "Book taxis for events, school transport, tours and more.",
  browseAds: "Browse Services",
  postRequirement: "Post Requirement",
  availableServices: "Available Services",
  postedBy: "Posted by",
  postedOn: "Posted on",
  contact: "Contact",
  phoneNumber: "Phone Number",
  eventType: "Event Type",
  school: "School Transport",
  wedding: "Wedding",
  tour: "Tour",
  corporate: "Corporate",
  other: "Other",
  date: "Date",
  budget: "Budget",
  passengers: "Passengers",
  requirements: "Requirements",
  postAd: "Post Requirement",
  adPosted: "Requirement Posted",
  adPostedDesc: "Taxi providers will contact you soon",
  bookingSuccess: "Booking Initiated",
  bookingConfirmed: "The taxi provider will contact you shortly",
  bookingError: "Booking Error",
  fillAllFields: "Please fill all required fields"
};

// Afrikaans translations
export const afTranslations: Translations = {
  appName: "Ayoba Ride",
  welcome: "Welkom by Ayoba Ride",
  findTaxi: "Vind 'n Taxi Naby Jou",
  welcomeMessage: "Soek vir taxis in jou area. Beplan jou reis met ons maklik-om-te-gebruik gereedskap.",
  fromWhere: "Waarvandaan?",
  toWhere: "Waarheen?",
  search: "Soek",
  travelingSoon: "Gereedskap vir Jou Reis",
  calculator: "Reisgeld Berekening",
  taxiMarketplace: "Taxi Inkoop Sentrum",
  language: "Taal",
  english: "Engels",
  afrikaans: "Afrikaans",
  zulu: "Zoeloe",
  xhosa: "Xhosa",
  login: "Teken In",
  signUp: "Registreer",
  email: "E-pos",
  password: "Wagwoord",
  dontHaveAccount: "Het jy nie 'n rekening nie?",
  loginSuccess: "Suksesvol ingeteken!",
  welcomeBack: "Welkom terug by Ayoba Ride",
  name: "Volle Naam",
  confirmPassword: "Bevestig Wagwoord",
  alreadyHaveAccount: "Het jy reeds 'n rekening?",
  signupSuccess: "Suksesvol geregistreer!",
  thankYou: "Dankie dat jy by Ayoba Ride aangesluit het",
  fullName: "Volle Naam",
  createAccount: "Skep Rekening",
  accountCreated: "Jou rekening is suksesvol geskep!",
  enterFullName: "Voer jou volle naam in",
  taxiCalculator: "Taxi Tarief Berekener",
  calculatorDescription: "Bereken jou geskatte tarief gebaseer op afstand en tipe taxi.",
  minibusMarketplace: "Taxi Bespreking Platform",
  minibusMarketplaceDesc: "Bespreek taxis vir geleenthede, skooltransport, toere en meer.",
  browseAds: "Blaai Deur Dienste",
  postRequirement: "Plaas Vereiste",
  availableServices: "Beskikbare Dienste",
  postedBy: "Geplaas deur",
  postedOn: "Geplaas op",
  contact: "Kontak",
  phoneNumber: "Telefoonnommer",
  eventType: "Geleentheidstipe",
  school: "Skooltransport",
  wedding: "Troue",
  tour: "Toer",
  corporate: "Korporatief",
  other: "Ander",
  date: "Datum",
  budget: "Begroting",
  passengers: "Passasiers",
  requirements: "Vereistes",
  postAd: "Plaas Vereiste",
  adPosted: "Vereiste Geplaas",
  adPostedDesc: "Taxi verskaffers sal jou binnekort kontak",
  bookingSuccess: "Bespreking Geïnisieer",
  bookingConfirmed: "Die taxi verskaffer sal jou binnekort kontak",
  bookingError: "Bespreking Fout",
  fillAllFields: "Vul asseblief alle vereiste velde in"
};

// Zulu translations
export const zuTranslations: Translations = {
  appName: "Ayoba Ride",
  welcome: "Siyakwamukela ku-Ayoba Ride",
  findTaxi: "Thola i-Taxi Eduze Kwakho",
  welcomeMessage: "Sesha amatekisi endaweni yakho. Hlela uhambo lwakho ngamathuluzi ethu alula ukuwasebenzisa.",
  fromWhere: "Usuka kuphi?",
  toWhere: "Uya kuphi?",
  search: "Sesha",
  travelingSoon: "Amathuluzi Ohambo Lwakho",
  calculator: "Isibali Sohambo",
  taxiMarketplace: "Isitholo Sematekisi",
  language: "Ulimi",
  english: "isiNgisi",
  afrikaans: "isi-Afrikaans",
  zulu: "isiZulu",
  xhosa: "isiXhosa",
  login: "Ngena",
  signUp: "Bhalisa",
  email: "I-imeyili",
  password: "Iphasiwedi",
  dontHaveAccount: "Awunalo ikhawundi?",
  loginSuccess: "Ungene ngempumelelo!",
  welcomeBack: "Siyakwamukela futhi ku-Ayoba Ride",
  name: "Igama Eliphelele",
  confirmPassword: "Qinisekisa Iphasiwedi",
  alreadyHaveAccount: "Usuvele unalo ikhawundi?",
  signupSuccess: "Ubhalise ngempumelelo!",
  thankYou: "Siyabonga ngokujoyina i-Ayoba Ride",
  fullName: "Igama Eliphelele",
  createAccount: "Dala i-Akhawunti",
  accountCreated: "I-akhawunti yakho idalwe ngempumelelo!",
  enterFullName: "Faka igama lakho eliphelele",
  taxiCalculator: "Isibali Semali Yetekisi",
  calculatorDescription: "Bala imali engalinganisiwe isekelwe ebangeni nohlobo lwetekisi.",
  minibusMarketplace: "Ipulatifomu Yokubhalisa Itekisi",
  minibusMarketplaceDesc: "Bhalisa amatekisi ezenzakalo, ezokuthutha isikole, amahambohamba nokunye.",
  browseAds: "Bheka Izinsizakalo",
  postRequirement: "Faka Isidingo",
  availableServices: "Izinsizakalo Ezitholakalayo",
  postedBy: "Ifakwe ngu",
  postedOn: "Ifakwe ngo",
  contact: "Thintana",
  phoneNumber: "Inombolo Yocingo",
  eventType: "Uhlobo Lomcimbi",
  school: "Ukuthutha Isikole",
  wedding: "Umshado",
  tour: "Uhambo",
  corporate: "Inkampani",
  other: "Okunye",
  date: "Usuku",
  budget: "Ibhajethi",
  passengers: "Abagibeli",
  requirements: "Izidingo",
  postAd: "Faka Isidingo",
  adPosted: "Isidingo Sifakiwe",
  adPostedDesc: "Abaniki betekisi bazokuthinta maduze",
  bookingSuccess: "Ukubhukha Kuqalile",
  bookingConfirmed: "Umniki wetekisi uzokuthinta maduze",
  bookingError: "Iphutha Lokubhukha",
  fillAllFields: "Sicela ugcwalise wonke amasimu adingekayo"
};

// Xhosa translations
export const xhTranslations: Translations = {
  appName: "Ayoba Ride",
  welcome: "Wamkelekile kwi-Ayoba Ride",
  findTaxi: "Fumana i-Taxi Kufuphi Nawe",
  welcomeMessage: "Khangela iiteksi kwindawo yakho. Cwangcisa uhambo lwakho ngezixhobo zethu ezilula ukuzisebenzisa.",
  fromWhere: "Usuka phi?",
  toWhere: "Uya phi?",
  search: "Khangela",
  travelingSoon: "Izixhobo Zohambo Lwakho",
  calculator: "Isibali Sohambo",
  taxiMarketplace: "Ivenkile Yeetexi",
  language: "Ulwimi",
  english: "isiNgesi",
  afrikaans: "isi-Afrikaans",
  zulu: "isiZulu",
  xhosa: "isiXhosa",
  login: "Ngena",
  signUp: "Bhaliswa",
  email: "I-imeyile",
  password: "Iphasiwedi",
  dontHaveAccount: "Awunayo i-akhawunti?",
  loginSuccess: "Ungene ngempumelelo!",
  welcomeBack: "Wamkelekile kwakhona kwi-Ayoba Ride",
  name: "Igama Elipheleleyo",
  confirmPassword: "Qinisekisa Iphasiwedi",
  alreadyHaveAccount: "Sele unayo i-akhawunti?",
  signupSuccess: "Ubhalise ngempumelelo!",
  thankYou: "Enkosi ngokujoyina i-Ayoba Ride",
  fullName: "Igama Elipheleleyo",
  createAccount: "Yenza i-Akhawunti",
  accountCreated: "I-akhawunti yakho yenziwe ngempumelelo!",
  enterFullName: "Faka igama lakho elipheleleyo",
  taxiCalculator: "Isibali Sexabiso Leteksi",
  calculatorDescription: "Bala ixabiso elilinganisiweyo ngokusekwe kumgama nohlobo lweteksi.",
  minibusMarketplace: "Iqonga Lokubhukisha iTeksi",
  minibusMarketplaceDesc: "Bhukisha iiteksi zeziganeko, zokuthuthela esikolweni, amakhenketho nangaphezulu.",
  browseAds: "Jonga Iinkonzo",
  postRequirement: "Posta Imfuneko",
  availableServices: "Iinkonzo Ezikhoyo",
  postedBy: "Ipostwe ngu",
  postedOn: "Ipostwe ngo",
  contact: "Qhagamshelana",
  phoneNumber: "Inombolo Yefowuni",
  eventType: "Uhlobo Lwesihlo",
  school: "Ukuthuthwa Kwesikolo",
  wedding: "Umtshato",
  tour: "Ukhenketho",
  corporate: "Inkampani",
  other: "Okunye",
  date: "Umhla",
  budget: "Uhlahlo Lwabiwo-mali",
  passengers: "Abakhweli",
  requirements: "Iimfuneko",
  postAd: "Posta Imfuneko",
  adPosted: "Imfuneko Ipostiwe",
  adPostedDesc: "Abanikezeli beteksi baza kuqhagamshelana nawe kwakamsinya",
  bookingSuccess: "Ukubhukisha Kuqalisiwe",
  bookingConfirmed: "Umnikezeli weteksi uza kuqhagamshelana nawe kwakamsinya",
  bookingError: "Impazamo Yokubhukisha",
  fillAllFields: "Nceda gcwalisa onke amacandelwana afunekayo"
};

// Export all translations in a single object
export const translations = {
  en: enTranslations,
  af: afTranslations,
  zu: zuTranslations,
  xh: xhTranslations
};
