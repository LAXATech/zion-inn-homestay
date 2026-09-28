export const INITIAL_ROOMS = [
  {
    id: 'king-room',
    name: 'King Room',
    view: 'Garden View',
    capacity: 2,
    price: 2000,
    status: 'Available',
    image: '/images/king-room.jpg',
    gallery: [
      '/images/king-room.jpg',
      '/images/deluxe-room.jpg',
      '/images/the-space.jpg',
      '/images/simple-comforts.jpg'
    ],
    description: 'A tranquil haven with a handcrafted king-size bed, warm teakwood furnishings, and tranquil morning garden views. Perfect for couples or solo retreats seeking peace.',
    bed: '1 King Bed (6ft)',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom'],
    amenities: ['High-speed Wi-Fi', 'Ceiling Fan & Air Conditioning', 'En-suite Bathroom with Hot Water', 'Daily Housekeeping', 'Electric Kettle with Tea/Coffee'],
    size: '280 sq.ft'
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    view: 'Garden View',
    capacity: 3,
    price: 2500,
    status: 'Available',
    featured: true,
    image: '/images/deluxe-room.jpg',
    gallery: [
      '/images/deluxe-room.jpg',
      '/images/king-room.jpg',
      '/images/the-space.jpg',
      '/images/simple-comforts.jpg'
    ],
    description: 'Our most popular sanctuary featuring floor-to-ceiling glass doors opening onto an expansive private balcony overlooking tropical palms and lush flowering gardens.',
    bed: '1 King Bed (6ft) + Extra Daybed',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom'],
    amenities: ['High-speed Wi-Fi', 'In-room Seating Area', 'Private Veranda with Cane Chairs', 'Modern Rain Shower', '24/7 Power Backup', 'Work Desk'],
    size: '350 sq.ft'
  },
  {
    id: 'family-room',
    name: 'Family Room',
    view: 'Garden View',
    capacity: 4,
    price: 3500,
    status: 'Available',
    image: '/images/family-room.jpg',
    gallery: [
      '/images/family-room.jpg',
      '/images/the-space.jpg',
      '/images/deluxe-room.jpg',
      '/images/simple-comforts.jpg'
    ],
    description: 'Generously proportioned heritage suite with soaring timber truss ceilings, two expansive queen beds, ample wardrobe space, and a family lounge corner.',
    bed: '2 Queen Beds',
    features: ['2 Queen Beds', 'Free Wi-Fi', 'Garden Balcony', 'Spacious En-Suite'],
    amenities: ['High-speed Wi-Fi', 'Two Queen Size Cots', 'Large Luggage Storage', 'Attached Premium Bathroom', 'Dining & Tea Corner', 'Direct Garden Access'],
    size: '480 sq.ft'
  }
];

export const AMENITIES_LIST = [
  {
    id: 'wifi',
    name: 'High-speed Wi-Fi',
    desc: 'Seamless fiber internet across all rooms and garden verandas.',
    iconName: 'Wifi'
  },
  {
    id: 'balcony',
    name: 'Private Balconies',
    desc: 'Breathe fresh morning air with views of flowering greenery.',
    iconName: 'DoorOpen'
  },
  {
    id: 'parking',
    name: 'Free Parking',
    desc: 'Secure on-premises parking space for cars and two-wheelers.',
    iconName: 'Car'
  },
  {
    id: 'kitchen',
    name: 'Shared Kitchen',
    desc: 'Fully equipped kitchen with refrigerator, stove, and essentials.',
    iconName: 'UtensilsCrossed'
  },
  {
    id: 'power',
    name: '24/7 Power Backup',
    desc: 'Uninterrupted power support for lights, fans, and Wi-Fi.',
    iconName: 'Zap'
  },
  {
    id: 'safety',
    name: 'Clean & Safe',
    desc: 'Rigorous daily hygiene, clean linens, and warm trusted caretakers.',
    iconName: 'ShieldCheck'
  }
];

export const ATTRACTIONS_LIST = [
  {
    id: 'padmanabhapuram',
    name: 'Padmanabhapuram Palace',
    distance: '5 km',
    category: 'History & Culture',
    image: '/images/padmanabhapuram.jpg',
    description: 'Renowned 16th-century wooden palace of the Travancore Maharajas, famed for intricate wood carvings, cool black granite floors, and regal heritage.',
    driveTime: '12 min drive',
    bestTime: 'Morning (9:00 AM - 1:00 PM)'
  },
  {
    id: 'muttom',
    name: 'Muttom Beach',
    distance: '12 km',
    category: 'Coastline',
    image: '/images/muttom-beach.jpg',
    description: 'A striking rocky beach featuring an iconic century-old colonial lighthouse, dramatic sea waves, panoramic sunset vistas, and tranquil shores.',
    driveTime: '22 min drive',
    bestTime: 'Sunset (4:30 PM - 6:30 PM)'
  },
  {
    id: 'mathur',
    name: 'Mathur Aqueduct',
    distance: '8 km',
    category: 'Scenic Spot',
    image: '/images/mathur-aqueduct.jpg',
    description: 'One of Asia’s longest and highest hanging trough aqueducts, towering 115 ft above dense green coconut groves with breathtaking valley vistas.',
    driveTime: '18 min drive',
    bestTime: 'Late Afternoon'
  }
];

export const POLICIES = {
  checkIn: '2:00 PM - 10:00 PM',
  checkOut: '11:00 AM',
  noPets: true,
  noSmoking: true,
  cancellation: 'Free cancellation up to 48 hours before check-in.'
};

export const CONTACT_INFO = {
  name: 'Zion Inn Homestay',
  tagline: 'Stay. Relax. Feel at Home.',
  addressLine1: 'Zion Inn Homestay, Neyyoor',
  addressLine2: 'Kanyakumari District, Tamil Nadu – 629802',
  landmark: 'Near Eraniel Railway Station (3 km), close to CSI Hospital Neyyoor',
  phone1: '+91 81484 37600',
  phone1Raw: '+918148437600',
  phone2: '+91 81484 37600',
  whatsapp: '918148437600',
  whatsappNumber: '918148437600',
  email: 'stay@zioninnhomestay.com',
  googleMapsUrl: 'https://maps.google.com/?q=Neyyoor,+Kanyakumari+District,+Tamil+Nadu+629802'
};
