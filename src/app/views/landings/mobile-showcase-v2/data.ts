const btcIcon = 'assets/img/landing/app-showcase-2/crypto/btc.png';
const usdtIcon = 'assets/img/landing/app-showcase-2/crypto/usdt.png';
const ethIcon = 'assets/img/landing/app-showcase-2/crypto/eth.png';
const dotIcon = 'assets/img/landing/app-showcase-2/crypto/dot.png';

const btcGraph = 'assets/img/landing/app-showcase-2/crypto/graphs/btc.svg';
const usdtGraph = 'assets/img/landing/app-showcase-2/crypto/graphs/usdt.svg';
const ethGraph = 'assets/img/landing/app-showcase-2/crypto/graphs/eth.svg';
const dotGraph = 'assets/img/landing/app-showcase-2/crypto/graphs/dot.svg';

const paymentsIcon = 'assets/img/landing/app-showcase-1/features/payments.svg';
const cashbackIcon = 'assets/img/landing/app-showcase-2/features/cashback.svg';
const statisticsIcon = 'assets/img/landing/app-showcase-2/features/statistics.svg';
const securityIcon = 'assets/img/landing/app-showcase-2/features/security.svg';

const screen01 = 'assets/img/landing/app-showcase-2/screens/01.png';
const screen02 = 'assets/img/landing/app-showcase-2/screens/02.png';
const screen03 = 'assets/img/landing/app-showcase-2/screens/03.png';

const appstorelight = 'assets/img/market/appstore-light.svg';
const appstoredark = 'assets/img/market/appstore-dark.svg';

const googleplaylight = 'assets/img/market/googleplay-light.svg';
const googleplaydark = 'assets/img/market/googleplay-dark.svg';

const chat = 'assets/img/landing/app-showcase-2/icons/chat.svg'
const faq ='assets/img/landing/app-showcase-2/icons/faq.svg'
const email ='assets/img/landing/app-showcase-2/icons/email.svg'

export type CryptoType = {
  name: string;
  symbol: string;
  icon: string;
  price: string;
  change: string;
  changeColor: string;
  marketCap: string;
  graph: string;
};

export const cryptoListData: CryptoType[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: btcIcon,
    price: '$38,940.63',
    change: '+1.70%',
    changeColor: 'text-green-500',
    marketCap: '$736,124,602,670.97',
    graph: btcGraph,
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    icon: usdtIcon,
    price: '$15.09',
    change: '-0.27%',
    changeColor: 'text-red-500',
    marketCap: '$14,735,584,883.68',
    graph: usdtGraph,
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: ethIcon,
    price: '$2,829.07',
    change: '+1.27%',
    changeColor: 'text-green-500',
    marketCap: '$337,863,906,048.53',
    graph: ethGraph,
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    icon: dotIcon,
    price: '$13.28',
    change: '-1.35%',
    changeColor: 'text-red-500',
    marketCap: '$26,143,724,006.81',
    graph: dotGraph,
  },
];

export type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

export const featuresData: FeatureType[] = [
  {
    title: 'Top Up Account Easily',
    description:
      'Mollis consectetur congue egestas egestas suspendisse blandit proin volutpat mollis egestas in ultrices.',
    icon: paymentsIcon,
  },
  {
    title: 'Regular Cashback',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo lorem ipsum dolor sit amet, consectetur elit.',
    icon: cashbackIcon,
  },
  {
    title: 'Cost Statistics',
    description:
      'Congue fames odio tincidunt mus. Eleifend in at arcu id sit scelerisque in. Elit quis sem dictum non turpis eget.',
    icon: statisticsIcon,
  },
  {
    title: 'Data Security',
    description:
      'Vulputate commodo tincidunt risus ac odio cursus morbi ipsum ut in laoreet fermentum condimentum.',
    icon: securityIcon,
  },
];

export type ScreenTabType = {
  id: string;
  image: string;
  step: string;
  title: string;
  description: string;
  isActive?: boolean;
};

export const screenTabsData = [
  {
    id: 'screen-1',
    image: screen01,
    step: 'step 1',
    title: 'Create your account',
    description:
      'Tellus est ullamcorper diam phasellus. Commodo acine pharetra quam lacinia fames quam nibh in elementum pulvinar consectetur adipiscing. Et viverra maecenas quis cras sed gravida volutpat, cursus enim enim ut nulla netus porta lacus.',
    isActive: true,
  },
  {
    id: 'screen-2',
    image: screen02,
    step: 'step 2',
    title: 'Set up payment details',
    description:
      'Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam.',
  },
  {
    id: 'screen-3',
    image: screen03,
    step: 'step 3',
    title: 'Start trading',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta.',
  },
];

export type TestimonialType = {
  message: string;
  rating: number;
  name: string;
  role: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    message:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    name: 'Robert Fox',
    role: 'Founder of Lorem Company',
  },
  {
    message:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
    name: 'Annette Black',
    role: 'CEO of Ipsum Company',
  },
  {
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    name: 'Jerome Bell',
    role: 'Founder of the Agency',
  },
  {
    message:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
    name: 'Albert Flores',
    role: 'CEO of Dolor Ltd.',
  },
];

export type StoreType = {
  title: string;
  heading: string;
  ratingText: string;
  stars: number;
  lightImg: string;
  darkImg: string;
  imgClass: string;
};

export const storeData: StoreType[] = [
  {
    title: 'App Store',
    heading: "Editor's Choice",
    ratingText: 'rating 4.7, 187K+ reviews',
    stars: 5,
    lightImg: appstorelight,
    darkImg: appstoredark,
    imgClass: 'w-31',
  },
  {
    title: 'Google Play',
    heading: 'App of the Day',
    ratingText: 'rating 4.8, 30K+ reviews',
    stars: 5,
    lightImg: googleplaylight,
    darkImg: googleplaydark,
    imgClass: 'w-34',
  },
];

export type SupportCardType = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
};

export const supportCardsData: SupportCardType[] = [
  {
    title: '24/7 Chat Help',
    description: 'Chat support with our customer service specialists.',
    buttonText: 'Talk to Us',
    icon: chat,
  },
  {
    title: 'FAQ',
    description: 'Find answers. Learn more about the features and services.',
    buttonText: 'Learn more',
    icon: faq,
  },
  {
    title: 'Email',
    description: 'Please feel free to drop any questions to our email.',
    buttonText: 'Drop Us a line',
    icon: email,
  },
];
