export interface Country {
  name: string
  code: string
  capital: string
  population: string
  language: string
  religion: string
  currency: string
  continent: string
  silhouette: string
  coordinates: { lat: number; lng: number }
  facts: string[]
}

export interface CountryBasic {
  name: string
  code: string
  coordinates: { lat: number; lng: number }
}

// Target countries with full details (countries that can be the answer)
export const countries: Country[] = [
  {
    name: "France",
    code: "FR",
    capital: "Paris",
    population: "67.4 million",
    language: "French",
    religion: "Christianity",
    currency: "Euro",
    continent: "Europe",
    silhouette: "/silhouettes/france.svg",
    coordinates: { lat: 46.2276, lng: 2.2137 },
    facts: [
      "France is the most visited country in the world with 90+ million tourists annually",
      "The Eiffel Tower was meant to be demolished after 20 years but was saved by radio antennas",
      "France has 12 time zones - more than any other country including Russia",
      "French law forbids naming a pig Napoleon",
      "The Louvre is the world's largest art museum with 380,000 pieces"
    ]
  },
  {
    name: "Japan",
    code: "JP",
    capital: "Tokyo",
    population: "125.8 million",
    language: "Japanese",
    religion: "Shinto/Buddhism",
    currency: "Yen",
    continent: "Asia",
    silhouette: "/silhouettes/japan.svg",
    coordinates: { lat: 36.2048, lng: 138.2529 },
    facts: [
      "Japan consists of 6,852 islands but most people live on just 4",
      "There are more pets than children in Japan",
      "Slurping noodles loudly is considered polite and shows appreciation",
      "Japan has over 5 million vending machines selling everything from eggs to umbrellas",
      "The world's oldest company was Japanese, founded in 578 AD"
    ]
  },
  {
    name: "Brazil",
    code: "BR",
    capital: "Brasilia",
    population: "214.3 million",
    language: "Portuguese",
    religion: "Christianity",
    currency: "Real",
    continent: "South America",
    silhouette: "/silhouettes/brazil.svg",
    coordinates: { lat: -14.235, lng: -51.9253 },
    facts: [
      "Brazil is the only South American country that speaks Portuguese",
      "The Amazon River pumps 20% of all freshwater that flows into the world's oceans",
      "Brazil has won the FIFA World Cup 5 times - more than any other nation",
      "Sao Paulo has more helicopters than any city except Tokyo",
      "Brazil borders every South American country except Chile and Ecuador"
    ]
  },
  {
    name: "Australia",
    code: "AU",
    capital: "Canberra",
    population: "26.4 million",
    language: "English",
    religion: "Christianity",
    currency: "Australian Dollar",
    continent: "Oceania",
    silhouette: "/silhouettes/australia.svg",
    coordinates: { lat: -25.2744, lng: 133.7751 },
    facts: [
      "Wombats are the only animals that produce cube-shaped poop",
      "The Great Barrier Reef is visible from space and has its own mailbox",
      "Australia has over 10,000 beaches - it would take 27 years to visit one per day",
      "Kangaroos and emus cannot walk backwards, which is why they're on the coat of arms",
      "90% of Australians live on the coast because the interior is mostly desert"
    ]
  },
  {
    name: "Italy",
    code: "IT",
    capital: "Rome",
    population: "59.1 million",
    language: "Italian",
    religion: "Christianity",
    currency: "Euro",
    continent: "Europe",
    silhouette: "/silhouettes/italy.svg",
    coordinates: { lat: 41.8719, lng: 12.5674 },
    facts: [
      "Italy has 58 UNESCO World Heritage sites - more than any other country",
      "A free wine fountain runs 24/7 in the Abruzzo region for pilgrims",
      "The Vatican City, the world's smallest country, is entirely within Rome",
      "Italians invented the piano, thermometer, and eyeglasses",
      "An Italian town has a law making it illegal to die - lack of cemetery space"
    ]
  },
  {
  name: "Canada",
  code: "CA",
  capital: "Ottawa",
  population: "40.5 million",
  language: "English/French",
  religion: "Christianity",
  currency: "Canadian Dollar",
  continent: "North America",
  silhouette: "/silhouettes/canada.svg",
  coordinates: { lat: 56.1304, lng: -106.3468 },
  facts: [
    "Canada has the longest coastline of any country in the world",
    "Over half of Canada is covered by forest",
    "Canada has more lakes than the rest of the world combined",
    "The maple leaf has been a Canadian symbol since the 1700s",
    "It has six time zones"
  ]
},
{
  name: "Afghanistan",
  code: "AF",
  capital: "Kabul",
  population: "41.1 million",
  language: "Pashto / Dari",
  religion: "Islam",
  currency: "Afghani",
  continent: "Asia",
  silhouette: "/silhouettes/afghanistan.svg",
  coordinates: { lat: 33.9391, lng: 67.71 },
  facts: [
    "Afghanistan has been inhabited for over 50,000 years",
    "It sits at the crossroads of major ancient trade routes",
    "The country is extremely mountainous with harsh terrain",
    "Buzkashi is a traditional national sport played on horseback",
    "Afghanistan was once part of the Silk Road"
  ]
},
{
  name: "Albania",
  code: "AL",
  capital: "Tirana",
  population: "2.8 million",
  language: "Albanian",
  religion: "Islam / Christianity",
  currency: "Lek",
  continent: "Europe",
  silhouette: "/silhouettes/albania.svg",
  coordinates: { lat: 41.1533, lng: 20.1683 },
  facts: [
    "Albania has over 750,000 concrete bunkers built during communism",
    "It has pristine beaches along the Adriatic and Ionian seas",
    "Albanians nod for no and shake their head for yes",
    "Mother Teresa was ethnically Albanian",
    "The country was isolated for decades under a strict dictatorship"
  ]
},
{
  name: "Algeria",
  code: "DZ",
  capital: "Algiers",
  population: "45.6 million",
  language: "Arabic",
  religion: "Islam",
  currency: "Algerian Dinar",
  continent: "Africa",
  silhouette: "/silhouettes/algeria.svg",
  coordinates: { lat: 28.0339, lng: 1.6596 },
  facts: [
    "Algeria is the largest country in Africa",
    "Over 80% of Algeria is covered by the Sahara Desert",
    "It gained independence from France in 1962",
    "Ancient Roman ruins are scattered across the country",
    "Algiers is known as 'Algiers the White'"
  ]
},
{
  name: "Argentina",
  code: "AR",
  capital: "Buenos Aires",
  population: "46.2 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Peso",
  continent: "South America",
  silhouette: "/silhouettes/argentina.svg",
  coordinates: { lat: -38.4161, lng: -63.6167 },
  facts: [
    "Argentina is the birthplace of tango",
    "It has the highest mountain in the Americas (Aconcagua)",
    "The country stretches across multiple climate zones",
    "Beef consumption is among the highest in the world",
    "Argentina won the FIFA World Cup three times"
  ]
},
{
  name: "Armenia",
  code: "AM",
  capital: "Yerevan",
  population: "2.8 million",
  language: "Armenian",
  religion: "Christianity",
  currency: "Dram",
  continent: "Asia",
  silhouette: "/silhouettes/armenia.svg",
  coordinates: { lat: 40.0691, lng: 45.0382 },
  facts: [
    "Armenia was the first country to adopt Christianity as a state religion",
    "Mount Ararat is a national symbol but lies outside its borders",
    "Yerevan is one of the oldest continuously inhabited cities",
    "The Armenian alphabet has 39 unique letters",
    "The country has a strong wine-making tradition"
  ]
},
{
  name: "Austria",
  code: "AT",
  capital: "Vienna",
  population: "9.1 million",
  language: "German",
  religion: "Christianity",
  currency: "Euro",
  continent: "Europe",
  silhouette: "/silhouettes/austria.svg",
  coordinates: { lat: 47.5162, lng: 14.5501 },
  facts: [
    "Austria is home to much of the Alps mountain range",
    "Vienna consistently ranks as one of the world's most livable cities",
    "Mozart was born in Austria",
    "The country has no coastline",
    "Coffee house culture is protected by UNESCO"
  ]
},
{
  name: "Bahamas",
  code: "BS",
  capital: "Nassau",
  population: "412,000",
  language: "English",
  religion: "Christianity",
  currency: "Bahamian Dollar",
  continent: "North America",
  silhouette: "/silhouettes/bahamas.svg",
  coordinates: { lat: 25.0343, lng: -77.3963 },
  facts: [
    "The Bahamas has over 700 islands",
    "It has some of the clearest water in the world",
    "Swimming pigs live on one of the islands",
    "Tourism drives most of the economy",
    "The country sits on shallow coral banks"
  ]
},
{
  name: "Belgium",
  code: "BE",
  capital: "Brussels",
  population: "11.7 million",
  language: "Dutch / French / German",
  religion: "Christianity",
  currency: "Euro",
  continent: "Europe",
  silhouette: "/silhouettes/belgium.svg",
  coordinates: { lat: 50.5039, lng: 4.4699 },
  facts: [
    "Belgium is famous for chocolate and waffles",
    "It hosts the headquarters of the European Union",
    "The country has three official languages",
    "Belgium produces over 1,500 types of beer",
    "French fries likely originated here"
  ]
},
{
  name: "Bolivia",
  code: "BO",
  capital: "Sucre",
  population: "12.3 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Boliviano",
  continent: "South America",
  silhouette: "/silhouettes/bolivia.svg",
  coordinates: { lat: -16.2902, lng: -63.5887 },
  facts: [
    "Bolivia has two capital cities",
    "La Paz is the highest administrative capital in the world",
    "The Salar de Uyuni is the world's largest salt flat",
    "Over 30 indigenous languages are spoken",
    "The country has no coastline"
  ]
},
{
  name: "Botswana",
  code: "BW",
  capital: "Gaborone",
  population: "2.6 million",
  language: "English",
  religion: "Christianity",
  currency: "Pula",
  continent: "Africa",
  silhouette: "/silhouettes/botswana.svg",
  coordinates: { lat: -22.3285, lng: 24.6849 },
  facts: [
    "Botswana has one of the world's largest elephant populations",
    "The Okavango Delta floods inland instead of reaching the sea",
    "It is one of Africa’s most stable democracies",
    "Much of the country is covered by the Kalahari Desert",
    "Diamonds drive much of the economy"
  ]
},
{
  name: "Belarus",
  code: "BY",
  capital: "Minsk",
  population: "9.2 million",
  language: "Belarusian / Russian",
  religion: "Christianity",
  currency: "Belarusian Ruble",
  continent: "Europe",
  silhouette: "/silhouettes/belarus.svg",
  coordinates: { lat: 53.7098, lng: 27.9534 },
  facts: [
    "Belarus has more than 11,000 lakes",
    "Nearly 40% of the country is forested",
    "Minsk was almost completely rebuilt after WWII",
    "It has one of the lowest population densities in Europe",
    "Bison are a national symbol"
  ]
},
{
  name: "Belize",
  code: "BZ",
  capital: "Belmopan",
  population: "420,000",
  language: "English",
  religion: "Christianity",
  currency: "Belize Dollar",
  continent: "North America",
  silhouette: "/silhouettes/belize.svg",
  coordinates: { lat: 17.1899, lng: -88.4976 },
  facts: [
    "Belize is the only Central American country with English as its official language",
    "It has the second-largest barrier reef in the world",
    "More than 40% of the land is protected",
    "Ancient Mayan ruins are found throughout the country",
    "Jaguars are protected by law"
  ]
},
{
  name: "Benin",
  code: "BJ",
  capital: "Porto-Novo",
  population: "13.3 million",
  language: "French",
  religion: "Christianity / Islam",
  currency: "West African CFA Franc",
  continent: "Africa",
  silhouette: "/silhouettes/benin.svg",
  coordinates: { lat: 9.3077, lng: 2.3158 },
  facts: [
    "Benin is the birthplace of the Vodun religion",
    "The Dahomey Kingdom once dominated the region",
    "It has a large stilt village called Ganvié",
    "Porto-Novo is the official capital, but Cotonou is the largest city",
    "It was formerly called Dahomey"
  ]
},
{
  name: "Bhutan",
  code: "BT",
  capital: "Thimphu",
  population: "780,000",
  language: "Dzongkha",
  religion: "Buddhism",
  currency: "Ngultrum",
  continent: "Asia",
  silhouette: "/silhouettes/bhutan.svg",
  coordinates: { lat: 27.5142, lng: 90.4336 },
  facts: [
    "Bhutan measures progress using Gross National Happiness",
    "It is one of the world’s most environmentally friendly countries",
    "Television was only introduced in 1999",
    "The country has no traffic lights",
    "Traditional dress is required in public buildings"
  ]
},
{
  name: "Bosnia and Herzegovina",
  code: "BA",
  capital: "Sarajevo",
  population: "3.2 million",
  language: "Bosnian / Serbian / Croatian",
  religion: "Islam / Christianity",
  currency: "Convertible Mark",
  continent: "Europe",
  silhouette: "/silhouettes/bosnia-and-herzegovina.svg",
  coordinates: { lat: 43.9159, lng: 17.6791 },
  facts: [
    "Sarajevo hosted the 1984 Winter Olympics",
    "The country has a very small coastline",
    "It is one of the most culturally diverse countries in the Balkans",
    "The Latin Bridge is linked to the start of World War I",
    "Coffee culture is central to daily life"
  ]
},
{
  name: "Brunei",
  code: "BN",
  capital: "Bandar Seri Begawan",
  population: "450,000",
  language: "Malay",
  religion: "Islam",
  currency: "Brunei Dollar",
  continent: "Asia",
  silhouette: "/silhouettes/brunei.svg",
  coordinates: { lat: 4.5353, lng: 114.7277 },
  facts: [
    "Brunei is one of the richest countries per capita",
    "Oil and gas dominate the economy",
    "The Sultan lives in one of the world’s largest palaces",
    "There is no income tax",
    "Alcohol sales are banned"
  ]
},
{
  name: "Bulgaria",
  code: "BG",
  capital: "Sofia",
  population: "6.4 million",
  language: "Bulgarian",
  religion: "Christianity",
  currency: "Lev",
  continent: "Europe",
  silhouette: "/silhouettes/bulgaria.svg",
  coordinates: { lat: 42.7339, lng: 25.4858 },
  facts: [
    "Bulgaria is one of the oldest countries in Europe",
    "It uses the Cyrillic alphabet",
    "Rose oil production is world-famous",
    "The country has over 600 mineral springs",
    "Yogurt originated here"
  ]
},
{
  name: "Burkina Faso",
  code: "BF",
  capital: "Ouagadougou",
  population: "23.2 million",
  language: "French",
  religion: "Islam / Christianity",
  currency: "West African CFA Franc",
  continent: "Africa",
  silhouette: "/silhouettes/burkina-faso.svg",
  coordinates: { lat: 12.2383, lng: -1.5616 },
  facts: [
    "The name means 'Land of Honest People'",
    "It hosts Africa’s largest film festival",
    "The country is landlocked",
    "Gold is a major export",
    "Music and dance are central to culture"
  ]
},
{
  name: "Burundi",
  code: "BI",
  capital: "Gitega",
  population: "13 million",
  language: "Kirundi / French",
  religion: "Christianity",
  currency: "Burundian Franc",
  continent: "Africa",
  silhouette: "/silhouettes/burundi.svg",
  coordinates: { lat: -3.3731, lng: 29.9189 },
  facts: [
    "Burundi is one of the smallest countries in Africa",
    "It lies along Lake Tanganyika",
    "Drumming is a national tradition",
    "It is one of the most densely populated countries",
    "Coffee is the main export"
  ]
},
{
  name: "Cambodia",
  code: "KH",
  capital: "Phnom Penh",
  population: "17 million",
  language: "Khmer",
  religion: "Buddhism",
  currency: "Riel",
  continent: "Asia",
  silhouette: "/silhouettes/cambodia.svg",
  coordinates: { lat: 12.5657, lng: 104.991 },
  facts: [
    "Angkor Wat is the largest religious monument in the world",
    "The country has a tragic recent history under the Khmer Rouge",
    "The Tonlé Sap River reverses direction seasonally",
    "Rice is a staple food",
    "The flag features a building"
  ]
},
{
  name: "Cameroon",
  code: "CM",
  capital: "Yaoundé",
  population: "28 million",
  language: "French / English",
  religion: "Christianity",
  currency: "Central African CFA Franc",
  continent: "Africa",
  silhouette: "/silhouettes/cameroon.svg",
  coordinates: { lat: 7.3697, lng: 12.3547 },
  facts: [
    "Cameroon is called 'Africa in Miniature'",
    "It has beaches, rainforests, deserts, and mountains",
    "Mount Cameroon is an active volcano",
    "Over 250 languages are spoken",
    "Football is extremely popular"
  ]
},
{
  name: "Canada",
  code: "CA",
  capital: "Ottawa",
  population: "40 million",
  language: "English / French",
  religion: "Christianity",
  currency: "Canadian Dollar",
  continent: "North America",
  silhouette: "/silhouettes/canada.svg",
  coordinates: { lat: 56.1304, lng: -106.3468 },
  facts: [
    "Canada has the longest coastline in the world",
    "Over half the country is covered by forest",
    "It has more lakes than the rest of the world combined",
    "The maple leaf is a national symbol",
    "It experiences some of the coldest winters"
  ]
},
{
  name: "Chad",
  code: "TD",
  capital: "N'Djamena",
  population: "18 million",
  language: "French / Arabic",
  religion: "Islam / Christianity",
  currency: "Central African CFA Franc",
  continent: "Africa",
  silhouette: "/silhouettes/chad.svg",
  coordinates: { lat: 15.4542, lng: 18.7322 },
  facts: [
    "Chad has no coastline",
    "Lake Chad has shrunk dramatically over decades",
    "It is one of the hottest countries on Earth",
    "Over 200 ethnic groups live there",
    "Nomadic lifestyles are common"
  ]
},
{
  name: "Chile",
  code: "CL",
  capital: "Santiago",
  population: "19.6 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Chilean Peso",
  continent: "South America",
  silhouette: "/silhouettes/chile.svg",
  coordinates: { lat: -35.6751, lng: -71.543 },
  facts: [
    "Chile is one of the longest north–south countries",
    "It spans deserts, glaciers, and islands",
    "Easter Island belongs to Chile",
    "It is one of South America’s most stable economies",
    "Wine production is world-renowned"
  ]
},
{
  name: "China",
  code: "CN",
  capital: "Beijing",
  population: "1.41 billion",
  language: "Mandarin",
  religion: "Buddhism / Taoism / Folk Religions",
  currency: "Yuan",
  continent: "Asia",
  silhouette: "/silhouettes/china.svg",
  coordinates: { lat: 35.8617, lng: 104.1954 },
  facts: [
    "China is the most populous country in the world",
    "The Great Wall stretches over 13,000 miles",
    "Paper, gunpowder, and printing were invented here",
    "China spans five time zones but uses only one",
    "It has the world’s largest high-speed rail network"
  ]
},
{
  name: "Colombia",
  code: "CO",
  capital: "Bogotá",
  population: "52 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Colombian Peso",
  continent: "South America",
  silhouette: "/silhouettes/colombia.svg",
  coordinates: { lat: 4.5709, lng: -74.2973 },
  facts: [
    "Colombia produces some of the world’s best coffee",
    "It is the only South American country with Caribbean and Pacific coasts",
    "Bogotá is one of the highest capital cities in the world",
    "The country is megadiverse",
    "Yellow, blue, and red appear on the flag"
  ]
},
{
  name: "Comoros",
  code: "KM",
  capital: "Moroni",
  population: "850,000",
  language: "Comorian / French / Arabic",
  religion: "Islam",
  currency: "Comorian Franc",
  continent: "Africa",
  silhouette: "/silhouettes/comoros.svg",
  coordinates: { lat: -11.875, lng: 43.8722 },
  facts: [
    "Comoros is an island nation in the Indian Ocean",
    "It lies between Madagascar and mainland Africa",
    "Volcano Mount Karthala is still active",
    "Fishing is vital to the economy",
    "It is one of Africa’s smallest countries"
  ]
},
{
  name: "Congo",
  code: "CG",
  capital: "Brazzaville",
  population: "5.8 million",
  language: "French",
  religion: "Christianity",
  currency: "Central African CFA Franc",
  continent: "Africa",
  silhouette: "/silhouettes/congo.svg",
  coordinates: { lat: -0.228, lng: 15.8277 },
  facts: [
    "The Congo River is the second longest in Africa",
    "Brazzaville lies directly across from Kinshasa",
    "Rainforests cover most of the country",
    "It is rich in oil and timber",
    "Wildlife includes gorillas and forest elephants"
  ]
},
{
  name: "Costa Rica",
  code: "CR",
  capital: "San José",
  population: "5.2 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Costa Rican Colón",
  continent: "North America",
  silhouette: "/silhouettes/costa-rica.svg",
  coordinates: { lat: 9.7489, lng: -83.7534 },
  facts: [
    "Costa Rica has no standing army",
    "Over 25% of the country is protected land",
    "It produces renewable energy almost entirely",
    "Biodiversity is extremely high",
    "Sloths are a national symbol"
  ]
},
{
  name: "Croatia",
  code: "HR",
  capital: "Zagreb",
  population: "3.9 million",
  language: "Croatian",
  religion: "Christianity",
  currency: "Euro",
  continent: "Europe",
  silhouette: "/silhouettes/croatia.svg",
  coordinates: { lat: 45.1, lng: 15.2 },
  facts: [
    "Croatia has over 1,000 islands",
    "The necktie originated here",
    "Dubrovnik was a filming location for Game of Thrones",
    "It has a long Adriatic coastline",
    "Tourism is a major industry"
  ]
},
{
  name: "Cuba",
  code: "CU",
  capital: "Havana",
  population: "11.2 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Cuban Peso",
  continent: "North America",
  silhouette: "/silhouettes/cuba.svg",
  coordinates: { lat: 21.5218, lng: -77.7812 },
  facts: [
    "Cuba is the largest island in the Caribbean",
    "Classic American cars are still common",
    "Cigars are world-famous",
    "Salsa music is deeply rooted in culture",
    "Healthcare and education are state-run"
  ]
},
{
  name: "Cyprus",
  code: "CY",
  capital: "Nicosia",
  population: "1.3 million",
  language: "Greek / Turkish",
  religion: "Christianity / Islam",
  currency: "Euro",
  continent: "Europe",
  silhouette: "/silhouettes/cyprus.svg",
  coordinates: { lat: 35.1264, lng: 33.4299 },
  facts: [
    "Cyprus is divided into two regions",
    "Nicosia is the world’s last divided capital",
    "It is associated with the myth of Aphrodite",
    "The island has over 300 days of sunshine",
    "Halloumi cheese originates here"
  ]
},
{
  name: "Czech Republic",
  code: "CZ",
  capital: "Prague",
  population: "10.7 million",
  language: "Czech",
  religion: "Secular",
  currency: "Czech Koruna",
  continent: "Europe",
  silhouette: "/silhouettes/czech-republic.svg",
  coordinates: { lat: 49.8175, lng: 15.473 },
  facts: [
    "Prague is nicknamed the City of a Hundred Spires",
    "Beer consumption per capita is the highest in the world",
    "The country has thousands of castles",
    "It was once part of Czechoslovakia",
    "The Velvet Revolution was peaceful"
  ]
},
{
  name: "Denmark",
  code: "DK",
  capital: "Copenhagen",
  population: "5.9 million",
  language: "Danish",
  religion: "Christianity",
  currency: "Danish Krone",
  continent: "Europe",
  silhouette: "/silhouettes/denmark.svg",
  coordinates: { lat: 56.2639, lng: 9.5018 },
  facts: [
    "Denmark consistently ranks among the happiest countries",
    "Copenhagen is one of the world’s most bike-friendly cities",
    "LEGO originated here",
    "The country includes Greenland",
    "Wind power supplies much of its energy"
  ]
},
{
  name: "Djibouti",
  code: "DJ",
  capital: "Djibouti",
  population: "1.1 million",
  language: "French / Arabic",
  religion: "Islam",
  currency: "Djiboutian Franc",
  continent: "Africa",
  silhouette: "/silhouettes/djibouti.svg",
  coordinates: { lat: 11.8251, lng: 42.5903 },
  facts: [
    "Djibouti lies at a major global shipping route",
    "Lake Assal is one of the saltiest lakes on Earth",
    "It hosts several foreign military bases",
    "Much of the land is volcanic",
    "The climate is extremely hot"
  ]
},
{
  name: "Dominican Republic",
  code: "DO",
  capital: "Santo Domingo",
  population: "11.3 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "Dominican Peso",
  continent: "North America",
  silhouette: "/silhouettes/dominican-republic.svg",
  coordinates: { lat: 18.7357, lng: -70.1627 },
  facts: [
    "It shares the island of Hispaniola with Haiti",
    "Santo Domingo is the oldest European city in the Americas",
    "Merengue music originated here",
    "Tourism drives the economy",
    "Baseball is extremely popular"
  ]
},
{
  name: "Ecuador",
  code: "EC",
  capital: "Quito",
  population: "18 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "US Dollar",
  continent: "South America",
  silhouette: "/silhouettes/ecuador.svg",
  coordinates: { lat: -1.8312, lng: -78.1834 },
  facts: [
    "The equator runs through the country",
    "The Galápagos Islands belong to Ecuador",
    "Quito is one of the highest capitals in the world",
    "Biodiversity is extremely high",
    "It uses the US dollar as currency"
  ]
},
{
  name: "Egypt",
  code: "EG",
  capital: "Cairo",
  population: "112 million",
  language: "Arabic",
  religion: "Islam / Christianity",
  currency: "Egyptian Pound",
  continent: "Africa",
  silhouette: "/silhouettes/egypt.svg",
  coordinates: { lat: 26.8206, lng: 30.8025 },
  facts: [
    "Ancient pyramids are over 4,500 years old",
    "The Nile is one of the longest rivers in the world",
    "Cairo is Africa’s largest city",
    "Hieroglyphics were an early writing system",
    "Ancient Egypt shaped modern civilization"
  ]
},
{
  name: "El Salvador",
  code: "SV",
  capital: "San Salvador",
  population: "6.4 million",
  language: "Spanish",
  religion: "Christianity",
  currency: "US Dollar",
  continent: "North America",
  silhouette: "/silhouettes/el-salvador.svg",
  coordinates: { lat: 13.7942, lng: -88.8965 },
  facts: [
    "El Salvador is the smallest country in Central America",
    "It has over 20 volcanoes",
    "Bitcoin is legal tender",
    "Surfing is world-class",
    "Coffee is a major export"
  ]
}




]

// All countries that can be guessed (with country codes for flags)
export const allCountries: CountryBasic[] = [
  { name: "Afghanistan", code: "AF", coordinates: { lat: 33.9391, lng: 67.71 } },
  { name: "Albania", code: "AL", coordinates: { lat: 41.1533, lng: 20.1683 } },
  { name: "Algeria", code: "DZ", coordinates: { lat: 28.0339, lng: 1.6596 } },
  { name: "Andorra", code: "AD", coordinates: { lat: 42.5063, lng: 1.5218 } },
  { name: "Angola", code: "AO", coordinates: { lat: -11.2027, lng: 17.8739 } },
  { name: "Argentina", code: "AR", coordinates: { lat: -38.4161, lng: -63.6167 } },
  { name: "Armenia", code: "AM", coordinates: { lat: 40.0691, lng: 45.0382 } },
  { name: "Australia", code: "AU", coordinates: { lat: -25.2744, lng: 133.7751 } },
  { name: "Austria", code: "AT", coordinates: { lat: 47.5162, lng: 14.5501 } },
  { name: "Azerbaijan", code: "AZ", coordinates: { lat: 40.1431, lng: 47.5769 } },
  { name: "Bahamas", code: "BS", coordinates: { lat: 25.0343, lng: -77.3963 } },
  { name: "Bahrain", code: "BH", coordinates: { lat: 26.0667, lng: 50.5577 } },
  { name: "Bangladesh", code: "BD", coordinates: { lat: 23.685, lng: 90.3563 } },
  { name: "Barbados", code: "BB", coordinates: { lat: 13.1939, lng: -59.5432 } },
  { name: "Belarus", code: "BY", coordinates: { lat: 53.7098, lng: 27.9534 } },
  { name: "Belgium", code: "BE", coordinates: { lat: 50.5039, lng: 4.4699 } },
  { name: "Belize", code: "BZ", coordinates: { lat: 17.1899, lng: -88.4976 } },
  { name: "Benin", code: "BJ", coordinates: { lat: 9.3077, lng: 2.3158 } },
  { name: "Bhutan", code: "BT", coordinates: { lat: 27.5142, lng: 90.4336 } },
  { name: "Bolivia", code: "BO", coordinates: { lat: -16.2902, lng: -63.5887 } },
  { name: "Bosnia and Herzegovina", code: "BA", coordinates: { lat: 43.9159, lng: 17.6791 } },
  { name: "Botswana", code: "BW", coordinates: { lat: -22.3285, lng: 24.6849 } },
  { name: "Brazil", code: "BR", coordinates: { lat: -14.235, lng: -51.9253 } },
  { name: "Brunei", code: "BN", coordinates: { lat: 4.5353, lng: 114.7277 } },
  { name: "Bulgaria", code: "BG", coordinates: { lat: 42.7339, lng: 25.4858 } },
  { name: "Burkina Faso", code: "BF", coordinates: { lat: 12.2383, lng: -1.5616 } },
  { name: "Burundi", code: "BI", coordinates: { lat: -3.3731, lng: 29.9189 } },
  { name: "Cambodia", code: "KH", coordinates: { lat: 12.5657, lng: 104.991 } },
  { name: "Cameroon", code: "CM", coordinates: { lat: 7.3697, lng: 12.3547 } },
  { name: "Canada", code: "CA", coordinates: { lat: 56.1304, lng: -106.3468 } },
  { name: "Cape Verde", code: "CV", coordinates: { lat: 16.5388, lng: -23.0418 } },
  { name: "Central African Republic", code: "CF", coordinates: { lat: 6.6111, lng: 20.9394 } },
  { name: "Chad", code: "TD", coordinates: { lat: 15.4542, lng: 18.7322 } },
  { name: "Chile", code: "CL", coordinates: { lat: -35.6751, lng: -71.543 } },
  { name: "China", code: "CN", coordinates: { lat: 35.8617, lng: 104.1954 } },
  { name: "Colombia", code: "CO", coordinates: { lat: 4.5709, lng: -74.2973 } },
  { name: "Comoros", code: "KM", coordinates: { lat: -11.875, lng: 43.8722 } },
  { name: "Congo", code: "CG", coordinates: { lat: -0.228, lng: 15.8277 } },
  { name: "Costa Rica", code: "CR", coordinates: { lat: 9.7489, lng: -83.7534 } },
  { name: "Croatia", code: "HR", coordinates: { lat: 45.1, lng: 15.2 } },
  { name: "Cuba", code: "CU", coordinates: { lat: 21.5218, lng: -77.7812 } },
  { name: "Cyprus", code: "CY", coordinates: { lat: 35.1264, lng: 33.4299 } },
  { name: "Czech Republic", code: "CZ", coordinates: { lat: 49.8175, lng: 15.473 } },
  { name: "Denmark", code: "DK", coordinates: { lat: 56.2639, lng: 9.5018 } },
  { name: "Djibouti", code: "DJ", coordinates: { lat: 11.8251, lng: 42.5903 } },
  { name: "Dominican Republic", code: "DO", coordinates: { lat: 18.7357, lng: -70.1627 } },
  { name: "Ecuador", code: "EC", coordinates: { lat: -1.8312, lng: -78.1834 } },
  { name: "Egypt", code: "EG", coordinates: { lat: 26.8206, lng: 30.8025 } },
  { name: "El Salvador", code: "SV", coordinates: { lat: 13.7942, lng: -88.8965 } },
  { name: "Equatorial Guinea", code: "GQ", coordinates: { lat: 1.6508, lng: 10.2679 } },
  { name: "Eritrea", code: "ER", coordinates: { lat: 15.1794, lng: 39.7823 } },
  { name: "Estonia", code: "EE", coordinates: { lat: 58.5953, lng: 25.0136 } },
  { name: "Eswatini", code: "SZ", coordinates: { lat: -26.5225, lng: 31.4659 } },
  { name: "Ethiopia", code: "ET", coordinates: { lat: 9.145, lng: 40.4897 } },
  { name: "Fiji", code: "FJ", coordinates: { lat: -17.7134, lng: 178.065 } },
  { name: "Finland", code: "FI", coordinates: { lat: 61.9241, lng: 25.7482 } },
  { name: "France", code: "FR", coordinates: { lat: 46.2276, lng: 2.2137 } },
  { name: "French Guiana", code: "GF", coordinates: { lat: 3.9339, lng: -53.1258 } },
  { name: "Gabon", code: "GA", coordinates: { lat: -0.8037, lng: 11.6094 } },
  { name: "Gambia", code: "GM", coordinates: { lat: 13.4432, lng: -15.3101 } },
  { name: "Georgia", code: "GE", coordinates: { lat: 42.3154, lng: 43.3569 } },
  { name: "Germany", code: "DE", coordinates: { lat: 51.1657, lng: 10.4515 } },
  { name: "Ghana", code: "GH", coordinates: { lat: 7.9465, lng: -1.0232 } },
  { name: "Greece", code: "GR", coordinates: { lat: 39.0742, lng: 21.8243 } },
  { name: "Grenada", code: "GD", coordinates: { lat: 12.1165, lng: -61.679 } },
  { name: "Guatemala", code: "GT", coordinates: { lat: 15.7835, lng: -90.2308 } },
  { name: "Guinea", code: "GN", coordinates: { lat: 9.9456, lng: -9.6966 } },
  { name: "Guyana", code: "GY", coordinates: { lat: 4.8604, lng: -58.9302 } },
  { name: "Haiti", code: "HT", coordinates: { lat: 18.9712, lng: -72.2852 } },
  { name: "Honduras", code: "HN", coordinates: { lat: 15.2, lng: -86.2419 } },
  { name: "Hungary", code: "HU", coordinates: { lat: 47.1625, lng: 19.5033 } },
  { name: "Iceland", code: "IS", coordinates: { lat: 64.9631, lng: -19.0208 } },
  { name: "India", code: "IN", coordinates: { lat: 20.5937, lng: 78.9629 } },
  { name: "Indonesia", code: "ID", coordinates: { lat: -0.7893, lng: 113.9213 } },
  { name: "Iran", code: "IR", coordinates: { lat: 32.4279, lng: 53.688 } },
  { name: "Iraq", code: "IQ", coordinates: { lat: 33.2232, lng: 43.6793 } },
  { name: "Ireland", code: "IE", coordinates: { lat: 53.1424, lng: -7.6921 } },
  { name: "Israel", code: "IL", coordinates: { lat: 31.0461, lng: 34.8516 } },
  { name: "Italy", code: "IT", coordinates: { lat: 41.8719, lng: 12.5674 } },
  { name: "Ivory Coast", code: "CI", coordinates: { lat: 7.54, lng: -5.5471 } },
  { name: "Jamaica", code: "JM", coordinates: { lat: 18.1096, lng: -77.2975 } },
  { name: "Japan", code: "JP", coordinates: { lat: 36.2048, lng: 138.2529 } },
  { name: "Jordan", code: "JO", coordinates: { lat: 30.5852, lng: 36.2384 } },
  { name: "Kazakhstan", code: "KZ", coordinates: { lat: 48.0196, lng: 66.9237 } },
  { name: "Kenya", code: "KE", coordinates: { lat: -0.0236, lng: 37.9062 } },
  { name: "Kuwait", code: "KW", coordinates: { lat: 29.3117, lng: 47.4818 } },
  { name: "Kyrgyzstan", code: "KG", coordinates: { lat: 41.2044, lng: 74.7661 } },
  { name: "Laos", code: "LA", coordinates: { lat: 19.8563, lng: 102.4955 } },
  { name: "Latvia", code: "LV", coordinates: { lat: 56.8796, lng: 24.6032 } },
  { name: "Lebanon", code: "LB", coordinates: { lat: 33.8547, lng: 35.8623 } },
  { name: "Lesotho", code: "LS", coordinates: { lat: -29.61, lng: 28.2336 } },
  { name: "Liberia", code: "LR", coordinates: { lat: 6.4281, lng: -9.4295 } },
  { name: "Libya", code: "LY", coordinates: { lat: 26.3351, lng: 17.2283 } },
  { name: "Liechtenstein", code: "LI", coordinates: { lat: 47.166, lng: 9.5554 } },
  { name: "Lithuania", code: "LT", coordinates: { lat: 55.1694, lng: 23.8813 } },
  { name: "Luxembourg", code: "LU", coordinates: { lat: 49.8153, lng: 6.1296 } },
  { name: "Madagascar", code: "MG", coordinates: { lat: -18.7669, lng: 46.8691 } },
  { name: "Malawi", code: "MW", coordinates: { lat: -13.2543, lng: 34.3015 } },
  { name: "Malaysia", code: "MY", coordinates: { lat: 4.2105, lng: 101.9758 } },
  { name: "Maldives", code: "MV", coordinates: { lat: 3.2028, lng: 73.2207 } },
  { name: "Mali", code: "ML", coordinates: { lat: 17.5707, lng: -3.9962 } },
  { name: "Malta", code: "MT", coordinates: { lat: 35.9375, lng: 14.3754 } },
  { name: "Mauritania", code: "MR", coordinates: { lat: 21.0079, lng: -10.9408 } },
  { name: "Mauritius", code: "MU", coordinates: { lat: -20.3484, lng: 57.5522 } },
  { name: "Mexico", code: "MX", coordinates: { lat: 23.6345, lng: -102.5528 } },
  { name: "Moldova", code: "MD", coordinates: { lat: 47.4116, lng: 28.3699 } },
  { name: "Monaco", code: "MC", coordinates: { lat: 43.7384, lng: 7.4246 } },
  { name: "Mongolia", code: "MN", coordinates: { lat: 46.8625, lng: 103.8467 } },
  { name: "Montenegro", code: "ME", coordinates: { lat: 42.7087, lng: 19.3744 } },
  { name: "Morocco", code: "MA", coordinates: { lat: 31.7917, lng: -7.0926 } },
  { name: "Mozambique", code: "MZ", coordinates: { lat: -18.6657, lng: 35.5296 } },
  { name: "Myanmar", code: "MM", coordinates: { lat: 21.9162, lng: 95.956 } },
  { name: "Namibia", code: "NA", coordinates: { lat: -22.9576, lng: 18.4904 } },
  { name: "Nepal", code: "NP", coordinates: { lat: 28.3949, lng: 84.124 } },
  { name: "Netherlands", code: "NL", coordinates: { lat: 52.1326, lng: 5.2913 } },
  { name: "New Zealand", code: "NZ", coordinates: { lat: -40.9006, lng: 174.886 } },
  { name: "Nicaragua", code: "NI", coordinates: { lat: 12.8654, lng: -85.2072 } },
  { name: "Niger", code: "NE", coordinates: { lat: 17.6078, lng: 8.0817 } },
  { name: "Nigeria", code: "NG", coordinates: { lat: 9.082, lng: 8.6753 } },
  { name: "North Korea", code: "KP", coordinates: { lat: 40.3399, lng: 127.5101 } },
  { name: "North Macedonia", code: "MK", coordinates: { lat: 41.5124, lng: 21.7453 } },
  { name: "Norway", code: "NO", coordinates: { lat: 60.472, lng: 8.4689 } },
  { name: "Oman", code: "OM", coordinates: { lat: 21.4735, lng: 55.9754 } },
  { name: "Pakistan", code: "PK", coordinates: { lat: 30.3753, lng: 69.3451 } },
  { name: "Palestine", code: "PS", coordinates: { lat: 31.9522, lng: 35.2332 } },
  { name: "Panama", code: "PA", coordinates: { lat: 8.538, lng: -80.7821 } },
  { name: "Papua New Guinea", code: "PG", coordinates: { lat: -6.315, lng: 143.9555 } },
  { name: "Paraguay", code: "PY", coordinates: { lat: -23.4425, lng: -58.4438 } },
  { name: "Peru", code: "PE", coordinates: { lat: -9.19, lng: -75.0152 } },
  { name: "Philippines", code: "PH", coordinates: { lat: 12.8797, lng: 121.774 } },
  { name: "Poland", code: "PL", coordinates: { lat: 51.9194, lng: 19.1451 } },
  { name: "Portugal", code: "PT", coordinates: { lat: 39.3999, lng: -8.2245 } },
  { name: "Qatar", code: "QA", coordinates: { lat: 25.3548, lng: 51.1839 } },
  { name: "Romania", code: "RO", coordinates: { lat: 45.9432, lng: 24.9668 } },
  { name: "Russia", code: "RU", coordinates: { lat: 61.524, lng: 105.3188 } },
  { name: "Rwanda", code: "RW", coordinates: { lat: -1.9403, lng: 29.8739 } },
  { name: "Saudi Arabia", code: "SA", coordinates: { lat: 23.8859, lng: 45.0792 } },
  { name: "Senegal", code: "SN", coordinates: { lat: 14.4974, lng: -14.4524 } },
  { name: "Serbia", code: "RS", coordinates: { lat: 44.0165, lng: 21.0059 } },
  { name: "Sierra Leone", code: "SL", coordinates: { lat: 8.4606, lng: -11.7799 } },
  { name: "Singapore", code: "SG", coordinates: { lat: 1.3521, lng: 103.8198 } },
  { name: "Slovakia", code: "SK", coordinates: { lat: 48.669, lng: 19.699 } },
  { name: "Slovenia", code: "SI", coordinates: { lat: 46.1512, lng: 14.9955 } },
  { name: "Somalia", code: "SO", coordinates: { lat: 5.1521, lng: 46.1996 } },
  { name: "South Africa", code: "ZA", coordinates: { lat: -30.5595, lng: 22.9375 } },
  { name: "South Korea", code: "KR", coordinates: { lat: 35.9078, lng: 127.7669 } },
  { name: "South Sudan", code: "SS", coordinates: { lat: 6.877, lng: 31.307 } },
  { name: "Spain", code: "ES", coordinates: { lat: 40.4637, lng: -3.7492 } },
  { name: "Sri Lanka", code: "LK", coordinates: { lat: 7.8731, lng: 80.7718 } },
  { name: "Sudan", code: "SD", coordinates: { lat: 12.8628, lng: 30.2176 } },
  { name: "Suriname", code: "SR", coordinates: { lat: 3.9193, lng: -56.0278 } },
  { name: "Sweden", code: "SE", coordinates: { lat: 60.1282, lng: 18.6435 } },
  { name: "Switzerland", code: "CH", coordinates: { lat: 46.8182, lng: 8.2275 } },
  { name: "Syria", code: "SY", coordinates: { lat: 34.8021, lng: 38.9968 } },
  { name: "Taiwan", code: "TW", coordinates: { lat: 23.6978, lng: 120.9605 } },
  { name: "Tajikistan", code: "TJ", coordinates: { lat: 38.861, lng: 71.2761 } },
  { name: "Tanzania", code: "TZ", coordinates: { lat: -6.369, lng: 34.8888 } },
  { name: "Thailand", code: "TH", coordinates: { lat: 15.87, lng: 100.9925 } },
  { name: "Togo", code: "TG", coordinates: { lat: 8.6195, lng: 0.8248 } },
  { name: "Trinidad and Tobago", code: "TT", coordinates: { lat: 10.6918, lng: -61.2225 } },
  { name: "Tunisia", code: "TN", coordinates: { lat: 33.8869, lng: 9.5375 } },
  { name: "Turkey", code: "TR", coordinates: { lat: 38.9637, lng: 35.2433 } },
  { name: "Turkmenistan", code: "TM", coordinates: { lat: 38.9697, lng: 59.5563 } },
  { name: "Uganda", code: "UG", coordinates: { lat: 1.3733, lng: 32.2903 } },
  { name: "Ukraine", code: "UA", coordinates: { lat: 48.3794, lng: 31.1656 } },
  { name: "United Arab Emirates", code: "AE", coordinates: { lat: 23.4241, lng: 53.8478 } },
  { name: "United Kingdom", code: "GB", coordinates: { lat: 55.3781, lng: -3.436 } },
  { name: "United States", code: "US", coordinates: { lat: 37.0902, lng: -95.7129 } },
  { name: "Uruguay", code: "UY", coordinates: { lat: -32.5228, lng: -55.7658 } },
  { name: "Uzbekistan", code: "UZ", coordinates: { lat: 41.3775, lng: 64.5853 } },
  { name: "Venezuela", code: "VE", coordinates: { lat: 6.4238, lng: -66.5897 } },
  { name: "Vietnam", code: "VN", coordinates: { lat: 14.0583, lng: 108.2772 } },
  { name: "Yemen", code: "YE", coordinates: { lat: 15.5527, lng: 48.5164 } },
  { name: "Zambia", code: "ZM", coordinates: { lat: -13.1339, lng: 27.8493 } },
  { name: "Zimbabwe", code: "ZW", coordinates: { lat: -19.0154, lng: 29.1549 } }
]

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 3959 // Earth's radius in miles
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}

// Calculate bearing/direction from point 1 to point 2
export function calculateBearing(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const dLng = toRad(lng2 - lng1)
  const y = Math.sin(dLng) * Math.cos(toRad(lat2))
  const x =
    Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) -
    Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLng)
  const bearing = Math.atan2(y, x)
  return ((bearing * 180) / Math.PI + 360) % 360
}

// Get arrow direction based on bearing (pointing towards the target country)
// Bearing 0 = North, 90 = East, 180 = South, 270 = West
export function getDirectionArrow(bearing: number): string {
  if (bearing >= 337.5 || bearing < 22.5) return "↑" // North
  if (bearing >= 22.5 && bearing < 67.5) return "↗" // Northeast
  if (bearing >= 67.5 && bearing < 112.5) return "→" // East
  if (bearing >= 112.5 && bearing < 157.5) return "↘" // Southeast
  if (bearing >= 157.5 && bearing < 202.5) return "↓" // South
  if (bearing >= 202.5 && bearing < 247.5) return "↙" // Southwest
  if (bearing >= 247.5 && bearing < 292.5) return "←" // West
  return "↖" // Northwest
}
