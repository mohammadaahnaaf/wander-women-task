export const destinationsData = [
  {
    id: '1',
    name: 'Istanbul',
    country: 'Turkiye',
    images: ['/turkiye/one.jpg', '/turkiye/two.jpg', '/turkiye/three.jpg', '/turkiye/four.jpg'],
    title: 'Istanbul, Türkiye',
    subTitle: 'Discover the timeless allure of Istanbul, where historic treasures and vibrant culture converge in an unforgettable embrace.',
    about: 'Experience the enchanting fusion of ancient allure and modern vibrancy in Istanbul, where the East meets the West. Immerse yourself in the rich tapestry of history as you wander through the iconic Hagia Sophia and Blue Mosque, marvel at the bustling Grand Bazaar, and sail along the scenic Bosphorus strait. Indulge in the delectable flavors of Turkish cuisine, savoring aromatic spices and culinary delights. With its captivating landscapes, architectural wonders, and warm hospitality, Istanbul invites you on a journey that seamlessly blends tradition with contemporary charm, making it an unforgettable destination for the discerning traveler.',
    weather: ['12°C - 18°C', '12°C - 18°C', '12°C - 18°C', '12°C - 18°C', '12°C - 18°C', '12°C - 18°C',],
    places: [
      "Hagia Sophia (Ayasofya)",
      "Blue Mosque (Sultan Ahmed Mosque)",
      "Topkapi Palace",
      "Grand Bazaar (Kapalıçarşı)"
    ],
    basics: {
      languages: 'Turkish, Kurdish, Arabic',
      country: 'Turkiye',
      currency: 'Turkish Lira',
      capital: 'Ankara',
      population: '15M',
      timeZone: '(EET, UTC+3)',
      timeToTravel: 'April - june, September - November'
    }
  },
  {
    id: '2',
    name: 'Bali',
    country: 'Indonesia',
    images: ['/bali/one.jpg', '/bali/two.jpg', '/bali/three.jpg', '/bali/four.jpg'],
    title: 'Bali, Indonesia',
    subTitle: 'Experience the tropical paradise of Bali, where serene landscapes, vibrant traditions, and enchanting temples create an idyllic escape.',
    about: 'Immerse yourself in the lush beauty of Bali, where emerald rice terraces cascade down hillsides, ancient temples reflect the island’s spiritual essence, and pristine beaches offer a haven for relaxation. Discover the unique Balinese culture through vibrant dance performances, intricate ceremonies, and traditional craftsmanship. Indulge in the tantalizing flavors of Balinese cuisine, explore lively markets, and unwind in luxurious resorts surrounded by nature. Bali beckons with its serene charm and warm hospitality, inviting you to embrace the island’s timeless allure.',
    weather: ['26°C - 31°C', '26°C - 31°C', '26°C - 31°C', '26°C - 31°C', '26°C - 31°C', '26°C - 31°C'],
    places: [
      "Sacred Monkey Forest Sanctuary",
      "Tanah Lot Temple",
      "Ubud Art Market",
      "Tegallalang Rice Terraces"
    ],
    basics: {
      languages: 'Indonesian, Balinese',
      country: 'Indonesia',
      currency: 'Indonesian Rupiah',
      capital: 'Jakarta',
      population: '4.2M',
      timeZone: '(Central Indonesia Time, UTC+8)',
      timeToTravel: 'May - August'
    }
  }

]

export const hotels = [
  {
    id: '1',
    pool: true,
    title: "Villa Dom",
    ratting: 4.9,
    location: "Istanbul / Turkiye",
    price_l: 1000,
    price_h: 4000,
    bed: 4,
    members: 10,
    b_room: 2,
    type: "large",
    img:'/turkiye/four.jpg'
  },
  {
    id: '1',
    pool: true,
    title: "Villa Dom",
    ratting: 4.9,
    location: "Istanbul / Turkiye",
    price_l: 1000,
    price_h: 4000,
    bed: 4,
    members: 10,
    b_room: 2,
    type: "large",
    img:'/turkiye/one.jpg'
  },
  {
    id: '2',
    pool: false,
    title: "Villa Ahnafya",
    ratting: 4.3,
    location: "Bali / Indonesia",
    price_l: 1000,
    price_h: 4000,
    bed: 2,
    members: 5,
    b_room: 1,
    type: 'dual-bed',
    img:'/bali/five.jpg'
  },
  {
    id: '1',
    pool: true,
    title: "Villa Dom",
    ratting: 4.9,
    location: "Istanbul / Turkiye",
    price_l: 1000,
    price_h: 4000,
    bed: 4,
    members: 10,
    b_room: 2,
    type: "large",
    img:'/turkiye/two.jpg'
  },
  {
    id: '1',
    pool: true,
    title: "Villa Fio",
    ratting: 5.0,
    location: "Istanbul / Turkiye",
    price_l: 1000,
    price_h: 1500,
    bed: 1,
    members: 2,
    b_room: 1,
    type: 'single',
    img:'/turkiye/five.jpg'
  },
  {
    id: '2',
    pool: true,
    title: "Hotel Abokash",
    ratting: 4.1,
    location: "Bali / Indonesia",
    price_l: 1000,
    price_h: 4000,
    bed: 3,
    members: 6,
    b_room: 2,
    type: 'family',
    img: '/bali/three.jpg'
  },
]

export const tours = [
  {
    id: '1',
    pool: true,
    title: "Villa Dom",
    ratting: 4.5,
    location: "Sajek / Rangamati",
    price_l: 1000,
    price_h: 4000,
    bed: 4,
    members: 10,
    b_room: 2,
    type: "large",
    img: '/turkiye/three.jpg'
  },
  {
    id: '2',
    pool: false,
    title: "Villa Ahnafya",
    ratting: 4.5,
    location: "Sajek / Rangamati",
    price_l: 1000,
    price_h: 4000,
    bed: 2,
    members: 5,
    b_room: 1,
    type: 'dual-bed',
    img: '/bali/three.jpg'
  },
  {
    id: '1',
    pool: true,
    title: "Villa Fio",
    ratting: 4.5,
    location: "Cox's Bazar",
    price_l: 1000,
    price_h: 1500,
    bed: 1,
    members: 2,
    b_room: 1,
    type: 'single',
    img: '/turkiye/four.jpg'
  },
  {
    id: '2',
    pool: true,
    title: "Hotel Abokash",
    ratting: 4.5,
    location: "Cox's Bazar",
    price_l: 1000,
    price_h: 4000,
    bed: 3,
    members: 6,
    b_room: 2,
    type: 'family',
    img: '/bali/one.jpg'
  },
  {
    id: '1',
    pool: true,
    title: "Villa Fio",
    ratting: 4.5,
    location: "Cox's Bazar",
    price_l: 1000,
    price_h: 1500,
    bed: 1,
    members: 2,
    b_room: 1,
    type: 'single',
    img: '/turkiye/one.jpg'
  },
  {
    id: '2',
    pool: true,
    title: "Hotel Abokash",
    ratting: 4.5,
    location: "Cox's Bazar",
    price_l: 1000,
    price_h: 4000,
    bed: 3,
    members: 6,
    b_room: 2,
    type: 'family',
    img: '/bali/four.jpg'
  },
]
