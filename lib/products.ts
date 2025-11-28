export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Tree Of Life Leather Journal',
    description: 'Handcrafted leather journal featuring an intricate Tree of Life embossing. Perfect for nature lovers and spiritual seekers.',
    image: '/images/tree-of-life.jpg',
    price: '$25.00'
  },
  {
    id: '2',
    title: 'Star 7 Stone Leather Journal',
    description: 'A mystical journal embedded with seven stones and star patterns. Unruled pages for sketching and free writing.',
    image: '/images/star-7-stone.jpg',
    price: '$30.00'
  },
  {
    id: '3',
    title: 'Loving Heart Embossed Journal',
    description: 'Beautifully embossed with a heart design. Contains 200 pages of handmade paper.',
    image: '/images/loving-heart.jpg',
    price: '$22.00'
  },
  {
    id: '4',
    title: 'D-Lock Antique Leather Journal',
    description: 'Secure your thoughts with this antique-style D-lock journal. Rustic and durable.',
    image: '/images/d-lock.png',
    price: '$28.00'
  },
  {
    id: '5',
    title: 'Decal Vintage Leather Journal',
    description: 'Vintage-inspired design with decal details. A classic choice for writers.',
    image: '/images/decal-vintage.jpg',
    price: '$24.00'
  },
  {
    id: '6',
    title: 'Key Closure Executive Diary',
    description: 'Professional executive diary with a functional key closure for added privacy.',
    image: '/images/key-closure.jpg',
    price: '$35.00'
  },
  {
    id: '7',
    title: 'Professional Black Handmade Journal',
    description: 'Sleek black leather journal with a strap lock. Ideal for business and professional use.',
    image: '/images/professional-black.jpg',
    price: '$26.00'
  },
  {
    id: '8',
    title: 'Tie Closure Office Diary',
    description: 'Traditional tie closure leather diary. Simple, elegant, and functional.',
    image: '/images/tie-closure.jpg',
    price: '$20.00'
  },
  {
    id: '9',
    title: 'Floral Embossed Notebook',
    description: 'Delicate floral embossing on high-quality leather. 200 pages of 7x5 inch paper.',
    image: '/images/floral-embossed.jpg',
    price: '$27.00'
  },
  {
    id: '10',
    title: 'Strap Lock Leather Bound Journal',
    description: 'Robust strap lock design ensuring your notes stay safe. 200 pages.',
    image: '/images/strap-lock.jpg',
    price: '$29.00'
  },
  {
    id: '11',
    title: 'Hamsa Hand Stone Journal',
    description: 'Features the protective Hamsa Hand symbol and a central stone. Unruled pages.',
    image: '/images/hamsa-hand.png',
    price: '$32.00'
  }
];
