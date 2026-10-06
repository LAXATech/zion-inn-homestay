export const INITIAL_ROOMS = [
  {
    id: 'ac-room',
    name: 'AC Room',
    roomType: 'ac',
    view: 'Garden View',
    capacity: 2,
    occupancyNote: '2 Adults (Two kids go free)',
    kidPolicy: 'Two kids go free',
    price: 1200,
    status: 'Available',
    image: '/images/ac-room1.jpg',
    gallery: [
      '/images/ac-room1.jpg',
      '/images/ac-room1-tv.jpg',
      '/images/ac-room2.jpg',
      '/images/bathroom.jpg',
      '/images/reception.jpg'
    ],
    description: 'A cool, tranquil haven with a handcrafted king-size bed, warm teakwood furnishings, and peaceful morning garden views. Rate covers two adults, and two kids go free.',
    bed: '1 King Bed (6ft)',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom', 'Two kids go free'],
    amenities: ['High-speed Wi-Fi', 'Air Conditioning', 'En-suite Bathroom', 'Daily Housekeeping', 'Complementary Drinking Water', 'Toiletries'],
    size: '180 sq.ft'
  },
  {
    id: 'non-ac-room',
    name: 'Non-AC Room',
    roomType: 'non-ac',
    view: 'Garden View',
    capacity: 2,
    occupancyNote: '2 Adults (Two kids go free)',
    kidPolicy: 'Two kids go free',
    price: 1000,
    status: 'Available',
    image: '/images/non-ac room2 view2.jpg',
    gallery: [
      '/images/non-ac room.jpg',
      '/images/non-ac room2 view2.jpg',
      '/images/bathroom2.jpg',
    ],
    description: 'A breezy, comfortable room with a handcrafted king-size bed, warm teakwood furnishings, and tranquil garden views. Rate covers two adults, and two kids go free.',
    bed: '1 King Bed (6ft)',
    features: ['1 King Bed (6ft)', 'Free Wi-Fi', 'Private Balcony', 'Attached Bathroom', 'Two kids go free'],
    amenities: ['High-speed Wi-Fi', 'Ceiling Fan', 'En-suite Bathroom', 'Daily Housekeeping', 'Complementary Drinking Water', 'Toiletries'],
    size: '180 sq.ft'
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
    id: 'amenities',
    name: 'Amenities',
    desc: 'Complementary drinking water, toiletries, and thoughtful room essentials.',
    iconName: 'Sparkles'
  },
  {
    id: 'power',
    name: '24/7 Power Backup',
    desc: 'Uninterrupted power support for lights, fans, and Wi-Fi.',
    iconName: 'Zap'
  },
  {
    id: 'garden',
    name: 'Garden',
    desc: 'Lush outdoor greenery and peaceful open spaces to relax and unwind.',
    iconName: 'Trees'
  }
];

export const ATTRACTIONS_LIST = [
  {
    id: 'padmanabhapuram',
    name: 'Padmanabhapuram Palace',
    distance: '5 km',
    category: 'History & Culture',
    image: '/images/padmanabhapuram.webp',
    description: 'Renowned 16th-century wooden palace of the Travancore Maharajas, famed for intricate wood carvings, cool black granite floors, and regal heritage.',
    driveTime: '12 min drive',
    bestTime: 'Morning (9:00 AM - 1:00 PM)'
  },
  {
    id: 'muttom',
    name: 'Muttom Beach',
    distance: '12 km',
    category: 'Coastline',
    image: '/images/muttom-beach.webp',
    description: 'A striking rocky beach featuring an iconic century-old colonial lighthouse, dramatic sea waves, panoramic sunset vistas, and tranquil shores.',
    driveTime: '22 min drive',
    bestTime: 'Sunset (4:30 PM - 6:30 PM)'
  },
  {
    id: 'mathur',
    name: 'Mathur Aqueduct',
    distance: '8 km',
    category: 'Scenic Spot',
    image: '/images/mathur-aqueduct.webp',
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
  accreditation: 'Ministry of Tourism Approved',
  addressLine1: 'Zion Inn Homestay, Neyyoor',
  addressLine2: 'Kanyakumari District, Tamil Nadu – 629802',
  landmark: 'Near Eraniel Railway Station (3 km), close to CSI Hospital Neyyoor',
  phone1: '+91 81484 37600',
  phone1Raw: '+918148437600',
  phone2: '+91 93856 68505',
  phone2Raw: '+919385668505',
  whatsapp: '917418220321',
  whatsappNumber: '917418220321',
  whatsappDisplay: '+91 74182 20321',
  email: 'zioninn.bnb@gmail.com',
  googleMapsUrl: 'https://maps.google.com/?q=Neyyoor,+Kanyakumari+District,+Tamil+Nadu+629802'
};

export const HOMESTAY_FAQS = [
  {
    q: 'How far is Zion Inn Homestay from Eraniel Railway Station?',
    a: 'Zion Inn is just 3.2 km (8 minutes drive) from Eraniel Railway Station (ERL). Local auto-rickshaws and taxis are readily available at the station, or we can assist in arranging a local driver to receive you.'
  },
  {
    q: 'What are the check-in and check-out timings?',
    a: 'Standard check-in is between 2:00 PM – 10:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out is accommodated whenever the room schedule permits.'
  },
  {
    q: 'Is high-speed Wi-Fi available for remote work?',
    a: 'Yes, we provide dual-band high-speed fiber Wi-Fi throughout all rooms, verandas, and the garden courtyard, backed by uninterrupted solar and inverter power support.'
  },
  {
    q: 'What amenities are included in each room?',
    a: 'All rooms include private en-suite bathrooms, complementary drinking water, toiletries, high-speed fiber Wi-Fi, 24/7 power backup, and private garden-facing verandas. Authentic local dining spots are also just minutes away.'
  },
  {
    q: 'Can children stay with us? What is the kids policy?',
    a: 'Yes! Families with children are warmly welcome. Room rates cover two adults, and two kids stay free.'
  },
  {
    q: 'Is safe parking available on premises?',
    a: 'Yes, we have secure, gated on-site parking for both cars and two-wheelers inside the homestay compound.'
  }
];
