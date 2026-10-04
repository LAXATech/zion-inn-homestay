export const INITIAL_ROOMS = [
  {
    id: 'ac-room',
    name: 'AC Room',
    roomType: 'ac',
    view: 'Garden View',
    capacity: 2,
    price: 2000,
    status: 'Available',
    image: '/images/ac-room1.jpg',
    gallery: [
      '/images/ac-room1.jpg',
      '/images/ac-room1-tv.jpg',
      '/images/ac-room2.jpg',
      '/images/bathroom.jpg',
      '/images/reception.jpg'
    ],
    description: 'A cool, tranquil haven with a handcrafted king-size bed, warm teakwood furnishings, and peaceful morning garden views. Perfect for couples or solo retreats seeking comfort.',
    bed: '1 King Bed (6ft)',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom'],
    amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'En-suite Bathroom with Hot Water', 'Daily Housekeeping', 'Electric Kettle with Tea/Coffee'],
    size: '280 sq.ft'
  },
  {
    id: 'non-ac-room',
    name: 'Non-AC Room',
    roomType: 'non-ac',
    view: 'Garden View',
    capacity: 2,
    price: 1500,
    status: 'Available',
    image: '/images/non-ac room2 view2.jpg',
    gallery: [
      '/images/non-ac room.jpg',
      '/images/non-ac room2 view2.jpg',
      '/images/bathroom2.jpg',
    ],
    description: 'A breezy, comfortable room with a handcrafted king-size bed, warm teakwood furnishings, and tranquil garden views. A simple, restful stay for couples or solo travellers.',
    bed: '1 King Bed (6ft)',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom'],
    amenities: ['High-speed Wi-Fi', 'Ceiling Fan', 'En-suite Bathroom with Hot Water', 'Daily Housekeeping', 'Electric Kettle with Tea/Coffee'],
    size: '280 sq.ft'
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
