
export type TranslationKey =
  | 'appName'
  | 'whereToGo'
  | 'findTaxi'
  | 'welcomeMessage'
  | 'travelingSoon'
  | 'calculator'
  | 'taxiMarketplace'
  | 'login'
  | 'signUp'
  | 'fullName'
  | 'enterFullName'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'createAccount'
  | 'alreadyHaveAccount'
  | 'dontHaveAccount'
  | 'loginSuccess'
  | 'welcomeBack'
  | 'signupSuccess'
  | 'accountCreated'
  | 'invalidEmail'
  | 'passwordLengthError'
  | 'passwordsDontMatch'
  | 'pinLocation'
  | 'loadingLocation'
  | 'findNearbyTaxis'
  | 'searchingForTaxis'
  | 'taxisFound'
  | 'taxisNearby'
  | 'estimatedWait'
  | 'minutes'
  | 'currentLocation'
  | 'gpsLocation'
  | 'back'
  | 'toolsForJourney'
  | 'english'
  | 'zulu'
  | 'xhosa'
  | 'afrikaans';

export type SupportedLanguage = 'en' | 'zu' | 'af' | 'xh';

export type Translations = {
  [key in SupportedLanguage]: {
    [key in TranslationKey]?: string;
  };
};

export const translations = {
  en: {
    appName: 'Ayoba Ride',
    whereToGo: 'Where do you want to go?',
    findTaxi: 'Find a Taxi Near You',
    welcomeMessage: 'Welcome to Ayoba Ride, your reliable way to find taxis in South Africa.',
    travelingSoon: 'Plan your journey with us',
    toolsForJourney: 'Tools for your journey',
    calculator: 'Trip Calculator',
    taxiMarketplace: 'Taxi Marketplace',
    login: 'Login',
    signUp: 'Sign Up',
    pinLocation: 'Pin Location',
    loadingLocation: 'Loading your location...',
    findNearbyTaxis: 'Find Nearby Taxis',
    searchingForTaxis: 'Searching...',
    taxisFound: 'Taxis Found',
    taxisNearby: 'taxis near you',
    estimatedWait: 'Estimated wait time',
    minutes: 'minutes',
    currentLocation: 'Current Location',
    gpsLocation: 'GPS Location',
    back: 'Back',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: 'Don\'t have an account?',
    loginSuccess: 'Login Successful',
    welcomeBack: 'Welcome back!',
    signupSuccess: 'Signup Successful',
    accountCreated: 'Your account has been created!',
    invalidEmail: 'Invalid email address',
    passwordLengthError: 'Password must be at least 6 characters',
    passwordsDontMatch: 'Passwords do not match',
    english: 'English',
    zulu: 'isiZulu',
    xhosa: 'isiXhosa',
    afrikaans: 'Afrikaans',
  },
  zu: {
    appName: 'Ayoba Ride',
    whereToGo: 'Ufuna ukuya kuphi?',
    findTaxi: 'Thola i-Taxi Eduze Nawe',
    welcomeMessage: 'Siyakwamukela ku-Ayoba Ride, indlela yakho ethembekile yokuthola amatekisi eNingizimu Afrika.',
    travelingSoon: 'Hlela uhambo lwakho nathi',
    toolsForJourney: 'Amathuluzi ohambo lwakho',
    calculator: 'I-Calculator Yohambo',
    taxiMarketplace: 'I-Tekisi Marketplace',
    login: 'Ngena',
    signUp: 'Bhalisa',
    pinLocation: 'Beka Isiqondisi',
    loadingLocation: 'Ilayisha indawo yakho...',
    findNearbyTaxis: 'Thola Amatekisi Eduze',
    searchingForTaxis: 'Iyasesha...',
    taxisFound: 'Amatekisi Atholakele',
    taxisNearby: 'amatekisi eduze kwakho',
    estimatedWait: 'Isikhathi sokulinda esilinganiselwe',
    minutes: 'imizuzu',
    currentLocation: 'Indawo Yamanje',
    gpsLocation: 'Indawo ye-GPS',
    back: 'Emuva',
    fullName: 'Igama eligcwele',
    enterFullName: 'Faka igama lakho eligcwele',
    email: 'I-imeyili',
    password: 'Iphasiwedi',
    confirmPassword: 'Qinisekisa Iphasiwedi',
    createAccount: 'Dala i-Akhawunti',
    alreadyHaveAccount: 'Usuvele unayo i-akhawunti?',
    dontHaveAccount: 'Awunayo i-akhawunti?',
    loginSuccess: 'Ukungena ngemvume Kuphumelele',
    welcomeBack: 'Siyakwamukela emuva!',
    signupSuccess: 'Ukubhalisa Kuphumelele',
    accountCreated: 'I-akhawunti yakho idaliwe!',
    invalidEmail: 'Ikheli le-imeyili elingavumelekile',
    passwordLengthError: 'Iphasiwedi kufanele ibe nezinhlamvu okungenani ezi-6',
    passwordsDontMatch: 'Amaphasiwedi awafani',
    english: 'English',
    zulu: 'isiZulu',
    xhosa: 'isiXhosa',
    afrikaans: 'Afrikaans',
  },
  af: {
    appName: 'Ayoba Rit',
    whereToGo: 'Waar wil jy gaan?',
    findTaxi: 'Vind \'n Taxi naby jou',
    welcomeMessage: 'Welkom by Ayoba Rit, jou betroubare manier om taxi\'s in Suid-Afrika te vind.',
    travelingSoon: 'Beplan jou reis saam met ons',
    toolsForJourney: 'Gereedskap vir jou reis',
    calculator: 'Reis Sakrekenaar',
    taxiMarketplace: 'Taxi Markplein',
    login: 'Teken aan',
    signUp: 'Sluit aan',
    pinLocation: 'Speld ligging vas',
    loadingLocation: 'Laai jou ligging...',
    findNearbyTaxis: 'Vind Taxi\'s naby',
    searchingForTaxis: 'Soek...',
    taxisFound: 'Taxi\'s Gevind',
    taxisNearby: 'taxi\'s naby jou',
    estimatedWait: 'Geskate wagtyd',
    minutes: 'minute',
    currentLocation: 'Huidige Ligging',
    gpsLocation: 'GPS-ligging',
    back: 'Terug',
    fullName: 'Volle naam',
    enterFullName: 'Voer jou volle naam in',
    email: 'E-pos',
    password: 'Wagwoord',
    confirmPassword: 'Bevestig Wagwoord',
    createAccount: 'Skep rekening',
    alreadyHaveAccount: 'Het jy reeds \'n rekening?',
    dontHaveAccount: 'Het jy nie \'n rekening nie?',
    loginSuccess: 'Aanmelding suksesvol',
    welcomeBack: 'Welkom terug!',
    signupSuccess: 'Registrasie suksesvol',
    accountCreated: 'Jou rekening is geskep!',
    invalidEmail: 'Ongeldige e-pos adres',
    passwordLengthError: 'Wagwoord moet ten minste 6 karakters wees',
    passwordsDontMatch: 'Wagwoorde stem nie ooreen nie',
    english: 'English',
    zulu: 'isiZulu',
    xhosa: 'isiXhosa',
    afrikaans: 'Afrikaans',
  },
  xh: {
    appName: 'Ayoba Ride',
    whereToGo: 'Ufuna ukuya phi?',
    findTaxi: 'Fumana i-Taxi Kufuphi Nawe',
    welcomeMessage: 'Wamkelekile ku-Ayoba Ride, indlela yakho ethembekileyo yokufumana iiteksi eMzantsi Afrika.',
    travelingSoon: 'Ceba uhambo lwakho kunye nathi',
    toolsForJourney: 'Izixhobo zohambo lwakho',
    calculator: 'I-Calculator Yohambo',
    taxiMarketplace: 'I-Tekisi Marketplace',
    login: 'Ngena',
    signUp: 'Bhalisa',
    pinLocation: 'Indawo yePini',
    loadingLocation: 'Ilayisha indawo yakho...',
    findNearbyTaxis: 'Fumana iiteksi ezikufuphi',
    searchingForTaxis: 'Iyakhangela...',
    taxisFound: 'Iiteksi Zifunyanisiwe',
    taxisNearby: 'iiteksi kufuphi nawe',
    estimatedWait: 'Ixesha lokulinda eliqikelelweyo',
    minutes: 'imizuzu',
    currentLocation: 'Indawo Yangoku',
    gpsLocation: 'Indawo ye-GPS',
    back: 'Umva',
    english: 'English',
    zulu: 'isiZulu',
    xhosa: 'isiXhosa',
    afrikaans: 'Afrikaans',
  },
};

export const supportedLanguages = Object.keys(translations) as SupportedLanguage[];
