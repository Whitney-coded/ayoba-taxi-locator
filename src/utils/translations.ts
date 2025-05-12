
export type SupportedLanguage = 'en' | 'zu' | 'xh' | 'af';

interface TranslationSet {
  [key: string]: string;
}

interface TranslationMap {
  [key in SupportedLanguage]: TranslationSet;
}

export const translations: TranslationMap = {
  en: {
    appName: "Ayoba Ride",
    findTaxi: "Find a Taxi Near You",
    welcomeMessage: "Welcome to Ayoba Ride, your smart taxi locator. Find and book taxis quickly and easily.",
    whereToGo: "Where would you like to go?",
    pinLocation: "Pin Location",
    toolsForJourney: "Tools for your journey",
    calculator: "Fare Calculator",
    taxiMarketplace: "Taxi Marketplace",
    english: "English",
    zulu: "isiZulu",
    xhosa: "isiXhosa",
    afrikaans: "Afrikaans",
    login: "Login",
    signUp: "Sign Up",
    findNearbyTaxis: "Find Nearby Taxis",
    taxiCalculator: "Taxi Fare Calculator",
    calculatorDescription: "Estimate your taxi fare before you ride."
  },
  zu: {
    appName: "Ayoba Ride",
    findTaxi: "Thola i-Taxi Eduze Nawe",
    welcomeMessage: "Siyakwamukela ku-Ayoba Ride, umkhombisi wetaxi ohlakaniphile. Thola futhi ubhuke amatekisi ngokushesha futhi kalula.",
    whereToGo: "Ufuna ukuya kuphi?",
    pinLocation: "Phawula Indawo",
    toolsForJourney: "Amathuluzi ohambo lwakho",
    calculator: "Isibali Semali",
    taxiMarketplace: "Isikimu Samatekisi",
    english: "English",
    zulu: "isiZulu",
    xhosa: "isiXhosa",
    afrikaans: "Afrikaans",
    login: "Ngena",
    signUp: "Bhalisa",
    findNearbyTaxis: "Thola Amatekisi Eduze",
    taxiCalculator: "Isibali Semali ye-Taxi",
    calculatorDescription: "Linganisa imali yakho ye-taxi ngaphambi kokuthi ugibele."
  },
  xh: {
    appName: "Ayoba Ride",
    findTaxi: "Fumana i-Taxi Kufuphi Nawe",
    welcomeMessage: "Wamkelekile ku-Ayoba Ride, isikroba sakho esihlakaniphileyo se-taxi. Fumana kwaye ubhukishe iiteksi ngokukhawuleza nangokukhawuleza.",
    whereToGo: "Ungathanda ukuya phi?",
    pinLocation: "Phawula Indawo",
    toolsForJourney: "Izixhobo zohambo lwakho",
    calculator: "Isibali Sexabiso",
    taxiMarketplace: "Imarike Yeetaxi",
    english: "English",
    zulu: "isiZulu",
    xhosa: "isiXhosa",
    afrikaans: "Afrikaans",
    login: "Ngena",
    signUp: "Bhalisela",
    findNearbyTaxis: "Fumana Iitaxi Ezikufuphi",
    taxiCalculator: "Isibali Sexabiso leTaxi",
    calculatorDescription: "Qikelela imali yakho yetaxi phambi kokuba ukhwele."
  },
  af: {
    appName: "Ayoba Ride",
    findTaxi: "Vind 'n Taxi Naby Jou",
    welcomeMessage: "Welkom by Ayoba Ride, jou slim taxi-opspoorder. Vind en bespreek taxi's vinnig en maklik.",
    whereToGo: "Waarheen wil jy gaan?",
    pinLocation: "Merk Ligging",
    toolsForJourney: "Gereedskap vir jou reis",
    calculator: "Reisgeldberekener",
    taxiMarketplace: "Taxi Markplek",
    english: "English",
    zulu: "isiZulu",
    xhosa: "isiXhosa",
    afrikaans: "Afrikaans",
    login: "Teken in",
    signUp: "Registreer",
    findNearbyTaxis: "Vind Taxi's in die Omgewing",
    taxiCalculator: "Taxi Reisgeld Berekener",
    calculatorDescription: "Beraam jou taxigeld voordat jy ry."
  }
};
