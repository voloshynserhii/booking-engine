import { Room } from '@/src/types';
import { hotels } from './hotels';
import { roomPrices } from './roomPrices';
import { amenities } from './amenities';

export const rooms: Room[] = [
  {
    id: 'r1',
    hotelId: 'h1',
    name: 'Double Room',
    description: `40m²• Garden view• Non-smoking• Body soap• Air conditioned• Room Safe• Heating• Dining Setting• Desk• Separate toilet area• Bath• Closets in room• Shower• Luxury linen type• Bathroom amenities• Private bathroom• Linen and Towels Provided• TV• Shower over bath

Our Double Rooms offer a calm and comfortable retreat, blending traditional countryside charm with modern design details.

Each room features warm, natural tones, soft lighting, and carefully chosen furnishings that reflect the rural setting of The Pines Retreat. Original features sit comfortably alongside contemporary comforts, creating a relaxed and welcoming space to unwind.

All Double Rooms include:
•Comfortable double bed with quality linens
•En-suite bathroom with walk-in shower or bath tub
•Air conditioning and heating
•Flat-screen TV
•Free Wi-Fi
•Thoughtful lighting and seating
•Chic design with a traditional countryside feel

Ideal for couples or solo travellers looking for a peaceful base at the foot of the mountains.`,
    roomType: 'STANDARD',
    maxGuests: 2,
    quantity: 5,
    imageUrls: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r1'),
    amenities: [amenities[0], amenities[1]], // WiFi, Air Conditioning
  },
  {
    id: 'r2',
    hotelId: 'h1',
    name: 'Deluxe Suite',
    description: `65m²• Mountain view• Non-smoking• Body soap• Air conditioned• Room Safe• Heating• Dining Setting• Desk• Separate toilet area• Bath• Closets in room• Shower• Luxury linen type• Bathroom amenities• Private bathroom• Linen and Towels Provided• TV• Shower over bath• Balcony• Mini bar• Coffee machine

Our Deluxe Suites provide an elevated experience of luxury and space, perfect for those seeking extra comfort and stunning mountain views.

These spacious suites combine elegant contemporary design with rustic alpine charm. The separate living area offers additional space to relax, while the private balcony provides breathtaking views of the surrounding peaks.

All Deluxe Suites include:
•King-size bed with premium linens
•Spacious living area with sofa
•Private balcony with mountain views
•Luxurious en-suite bathroom with double vanity
•Air conditioning and heating
•Flat-screen TV in both bedroom and living area
•Mini bar and coffee machine
•Free Wi-Fi throughout
•Room service available

Perfect for couples celebrating special occasions or guests who appreciate extra space and luxury.`,
    roomType: 'SUITE',
    maxGuests: 4,
    quantity: 3,
    imageUrls: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r2'),
    amenities: [amenities[0], amenities[1], amenities[2], amenities[3]], // WiFi, AC, Pool, Gym
  },
  {
    id: 'r3',
    hotelId: 'h1',
    name: 'Family Room',
    description: `80m²• Garden view• Non-smoking• Body soap• Air conditioned• Room Safe• Heating• Dining Setting• Desk• Separate toilet area• Bath• Closets in room• Shower• Luxury linen type• Bathroom amenities• Private bathroom• Linen and Towels Provided• TV• Shower over bath• Connecting rooms available• Extra beds available

Our Family Rooms are designed with families in mind, offering spacious accommodation that comfortably sleeps up to 6 guests.

These generously sized rooms feature flexible sleeping arrangements with multiple beds, a separate seating area, and plenty of space for everyone to relax. The family-friendly design includes thoughtful touches like extra storage and a dining area for meals.

All Family Rooms include:
•Multiple beds (king + twin beds or bunks)
•Spacious seating area
•Dining area with table and chairs
•Two en-suite bathrooms
•Air conditioning and heating
•Flat-screen TV
•Free Wi-Fi
•Extra bedding and towels available
•Connecting room options

Ideal for families, groups of friends, or anyone needing extra space during their stay.`,
    roomType: 'FAMILY',
    maxGuests: 6,
    quantity: 2,
    imageUrls: [
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800'
    ],
    createdAt: '2024-01-01T00:00:00Z',
    hotel: hotels[0],
    ratePlans: hotels[0].ratePlans,
    prices: roomPrices.filter(price => price.roomId === 'r3'),
    amenities: [amenities[0], amenities[1], amenities[2], amenities[4]], // WiFi, AC, Pool, Restaurant
  },
];