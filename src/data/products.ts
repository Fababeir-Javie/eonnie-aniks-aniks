export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  status: 'available' | 'sold-out' | 'limited';
  label?: string;
  mainImage: string;
  gallery: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: 'eonnie-charms',
    name: 'Y2K Beaded Charm Selection',
    category: 'Charm',
    price: '2 for ₱50.00',
    status: 'limited',
    label: 'NEW ✦',
    mainImage: '/6086761170552427211.jpg',
    gallery: [
      '/6086761170552427206.jpg',
      '/6086761170552427204.jpg',
      '/6086761170552427209.jpg',
      '/6086761170552427208.jpg'
    ],
    description: 'A beautiful selection of limited edition handmade Y2K charms! Choose from our pastel bunny, lunar princess, midnight skullpanda, or kuromi cola designs. Pick any 2 for ₱50.00!',
  },
  {
    id: 'y2k-star-hairclips',
    name: 'Y2K Star Hairclip Set',
    category: 'Hair Accessories',
    price: '₱35.00',
    status: 'available',
    label: 'CUTE ♡',
    mainImage: '/hairclip.jpg',
    gallery: [
      '/hairclip2.jpg'
    ],
    description: 'Complete your Y2K look with these adorable handmade star hairclips! Super cute, stylish, and perfect for adding that extra sparkle to any outfit.',
  },
  {
    id: 'y2k-beaded-bracelets',
    name: 'Custom Beaded Bracelets',
    category: 'Accessories',
    price: '₱50.00',
    status: 'available',
    label: 'TRENDING ✨',
    mainImage: '/bracelet.jpg',
    gallery: [
      '/bracelet 2.jpg',
      '/bracelet 3.jpg',
      '/bracelet 4.jpg',
      '/bracelet 5.jpg',
      '/bracelet 6.jpg',
      '/bracelet 7.jpg',
      '/bracelet 8.jpg',
      '/bracelet 9.jpg',
      '/bracelet 10.jpg',
      '/bracelet 11.jpg',
      '/bracelet 12.jpg'
    ],
    description: 'Stack them up! These handmade Y2K beaded bracelets come in a variety of vibrant colors, cute charms, and pearl accents. Perfect for matching with besties or completing your everyday look.',
  },
  {
    id: 'y2k-beaded-keychains',
    name: 'Kawaii Beaded Keychains',
    category: 'Accessories',
    price: '₱45.00',
    status: 'available',
    label: 'NEW 🍒',
    mainImage: '/keychain.jpg',
    gallery: [],
    description: 'Dress up your bags, phones, or keys with these adorable Y2K beaded keychains! Featuring vibrant colors, cute charms, and aesthetic letter beads.',
  }
];
