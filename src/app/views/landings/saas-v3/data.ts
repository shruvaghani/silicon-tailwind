const brandOneImage = 'assets/img/brands/01.svg';
const brandTwoImage = 'assets/img/brands/02.svg';
const brandThreeImage = 'assets/img/brands/03.svg';
const brandFourImage = 'assets/img/brands/04.svg';
const brandFiveImage = 'assets/img/brands/05.svg';
const brandSixImage = 'assets/img/brands/06.svg';

const binanceImage = 'assets/img/landing/saas-3/feature-3/binance.svg';
const ensImage = 'assets/img/landing/saas-3/feature-3/ens.svg';
const tetherImage = 'assets/img/landing/saas-3/feature-3/tether.svg';
const alqoImage = 'assets/img/landing/saas-3/feature-3/alqo.svg';
const blockfiImage = 'assets/img/landing/saas-3/feature-3/blockfi.svg';
const bitcoinImage = 'assets/img/landing/saas-3/feature-3/bitcoin.svg';

const robertFoxImage = 'assets/img/avatar/40.jpg';
const annetteBlackImage = 'assets/img/avatar/08.jpg';
const jeromeBellImage = 'assets/img/avatar/13.jpg';
const albertFloresImage = 'assets/img/avatar/09.jpg';

export const brandData: string[] = [
  brandOneImage,
  brandTwoImage,
  brandThreeImage,
  brandFourImage,
  brandFiveImage,
  brandSixImage,
];

export type CryptoBrandType = {
  image: string;
  alt: string;
};

export const cryptoBrandData: CryptoBrandType[] = [
  {
    image: binanceImage,
    alt: 'Bitcoin',
  },
  {
    image: ensImage,
    alt: 'Ens',
  },
  {
    image: tetherImage,
    alt: 'Tether',
  },
  {
    image: alqoImage,
    alt: 'Alqo',
  },
  {
    image: blockfiImage,
    alt: 'BlockFi',
  },
  {
    image: bitcoinImage,
    alt: 'Bitcoin',
  },
];

export type TestimonialType = {
  description: string;
  rating: number;
  image: string;
  name: string;
  designation: string;
};

export const testimonialData: TestimonialType[] = [
  {
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    image: robertFoxImage,
    name: 'Robert Fox',
    designation: 'Founder of Lorem Company',
  },
  {
    description:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
    image: annetteBlackImage,
    name: 'Annette Black',
    designation: 'CEO of Ipsum Company',
  },
  {
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    image: jeromeBellImage,
    name: 'Jerome Bell',
    designation: 'Founder of the Agency',
  },
  {
    description:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
    image: albertFloresImage,
    name: 'Albert Flores',
    designation: 'CEO of Dolor Ltd.',
  },
];

export const featureListData: string[] = [
  'Purus vestibulum pharetra amet tincidunt pretium',
  'Haretra justo magna pharetra dui gravida sed nec',
  'Venenatis risus faucibus volutpat amet feugiat a',
];

export type FooterLinkGroupType = {
  links: string[];
};

export const footerLinkGroupData: FooterLinkGroupType[] = [
  {
    links: ['Home', 'Features', 'Integrations', 'Our Clients', 'Blog'],
  },
  {
    links: ['Terms & Conditions', 'Privacy Policy'],
  },
];

export const socialLinkData: string[] = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram'];