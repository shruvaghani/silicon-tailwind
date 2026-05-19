const collection01 = 'assets/img/account/collection01.jpg';
const collection02 = 'assets/img/account/collection02.jpg';
const collection03 = 'assets/img/account/collection03.jpg';

export type CollectionType = {
  image: string;
  date: string;
  title: string;
  category: string;
};

export const collectionsData: CollectionType[] = [
  {
    image: collection01,
    date: 'Nov 30, 2023',
    title: '3D Shape Illustration',
    category: 'NFT / Graphic Design / Motion Design',
  },
  {
    image: collection02,
    date: 'Oct 18, 2023',
    title: 'Scene of Sunglasses & Headphone on Human Head',
    category: 'Graphic Design / Art / Identity / Motion Design',
  },
  {
    image: collection03,
    date: 'Aug 05, 2023',
    title: 'Mannequin Hands Holding Phone',
    category: 'NFT / Mobile App Design / Graphic Design / Art',
  },
];
