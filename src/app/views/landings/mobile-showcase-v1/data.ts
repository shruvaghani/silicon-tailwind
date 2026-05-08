const brandLogo1 = 'assets/img/brands/01.svg';
const brandLogo2 = 'assets/img/brands/02.svg';
const brandLogo3 = 'assets/img/brands/03.svg';
const brandLogo4 = 'assets/img/brands/04.svg';
const brandLogo5 = 'assets/img/brands/05.svg';
const brandLogo6 = 'assets/img/brands/06.svg';

const paymentIcon = 'assets/img/landing/app-showcase-1/features/payments.svg';
const securityIcon = 'assets/img/landing/app-showcase-1/features/security.svg';
const statisticsIcon = 'assets/img/landing/app-showcase-1/features/statistics.svg';
const supportIcon = 'assets/img/landing/app-showcase-1/features/support.svg';
const cashbackIcon = 'assets/img/landing/app-showcase-1/features/cashback.svg';
const standardsIcon = 'assets/img/landing/app-showcase-1/features/happy.svg';

const screenImage1 = 'assets/img/landing/app-showcase-1/screens/01.png';
const screenImage2 = 'assets/img/landing/app-showcase-1/screens/02.png';
const screenImage3 = 'assets/img/landing/app-showcase-1/screens/03.png';
const screenImage4 = 'assets/img/landing/app-showcase-1/screens/04.png';

const avatar42 = 'assets/img/avatar/42.png';
const avatar43 = 'assets/img/avatar/43.png';
const avatar44 = 'assets/img/avatar/44.png';
const avatar45 = 'assets/img/avatar/45.png';

export const brandData: string[] = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
];

export type FeatureType = {
  image: string;
  title: string;
  description: string;
};

export const featureData: FeatureType[] = [
  {
    image: paymentIcon,
    title: 'Easy Payments',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    image: securityIcon,
    title: 'Data Security',
    description: 'Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.',
  },
  {
    image: statisticsIcon,
    title: 'Cost Statistics',
    description: 'Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.',
  },
  {
    image: supportIcon,
    title: 'Support 24/7',
    description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
  },
  {
    image: cashbackIcon,
    title: 'Regular Cashback',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.',
  },
  {
    image: standardsIcon,
    title: 'Top Standards',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
];

export type ScreenType = {
  image: string;
  alt: string;
  swiperTab: string;
};

export const screenData: ScreenType[] = [
  {
    image: screenImage1,
    alt: 'Screen 1',
    swiperTab: '#text-1',
  },
  {
    image: screenImage2,
    alt: 'Screen 2',
    swiperTab: '#text-2',
  },
  {
    image: screenImage3,
    alt: 'Screen 3',
    swiperTab: '#text-3',
  },
  {
    image: screenImage4,
    alt: 'Screen 4',
    swiperTab: '#text-4',
  },
  {
    image: screenImage1,
    alt: 'Screen 5',
    swiperTab: '#text-5',
  },
  {
    image: screenImage2,
    alt: 'Screen 6',
    swiperTab: '#text-6',
  },
];

export type SwiperTabType = {
  id: string;
  title: string;
  description: string;
  isActive?: boolean;
};

export const swiperTabData: SwiperTabType[] = [
  {
    id: 'text-1',
    title: 'Step 1. Advanced budget management',
    description:
      'Consequat ut cras nisl, enim purus in facilisi. Ipsum amet, lectus malesuada risus sollicitudin accumsan. Id sem elit vel vel lectus risus senectus.',
    isActive: true,
  },
  {
    id: 'text-2',
    title: 'Step 2. Latest transaction history',
    description:
      'Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.',
  },
  {
    id: 'text-3',
    title: 'Step 3. Transfers to people from your contact list',
    description:
      'Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.',
  },
  {
    id: 'text-4',
    title: 'Step 4. Card-to-card transfers',
    description:
      'A sed lorem felis, pulvinar pharetra. At tempus, vel sed faucibus amet sit elementum sed erat. Id nunc blandit pharetra facilisis.',
  },
];

export type TestimonialType = {
  rating: number;
  review: string;
  image: string;
  name: string;
  role: string;
};

export const testimonialData: TestimonialType[] = [
  {
    rating: 4,
    review:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
    image: avatar42,
    name: 'Fannie Summers',
    role: 'Designer',
  },
  {
    rating: 5,
    review:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
    image: avatar43,
    name: 'Robert Fox',
    role: 'QA Engineer',
  },
  {
    rating: 4,
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
    image: avatar44,
    name: 'Annette Black',
    role: 'Project Manager',
  },
  {
    rating: 5,
    review:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
    image: avatar45,
    name: 'Jerome Bell',
    role: 'Developer',
  },
];

export type SupportCardType = {
  iconName: string;
  iconClass: string;
  title: string;
  buttonText: string;
  buttonClass: string;
};

export const supportCardData: SupportCardType[] = [
  {
    iconName: 'phone-call',
    iconClass: 'fill-primary text-primary md:block text-2xl',
    title: 'Still have questions?',
    buttonText: 'Call Us',
    buttonClass: 'text-primary group-hover:text-primary-hover transition-all duration-300',
  },
  {
    iconName: 'message-circle-more',
    iconClass: 'md:block text-2xl text-success',
    title: 'Still have questions?',
    buttonText: 'Chat with us',
    buttonClass: 'text-success',
  },
];

export type FaqType = {
  id: string;
  headingId: string;
  question: string;
  firstParagraph: string;
  secondParagraph: string;
};

export const faqData: FaqType[] = [
  {
    id: 'q1',
    headingId: 'q1-heading',
    question: 'Is any of my personal information stored in the App?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    id: 'q2',
    headingId: 'q2-heading',
    question: 'What formats can I download my transaction history in?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    id: 'q3',
    headingId: 'q3-heading',
    question: 'Can I schedule future transfers?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    id: 'q4',
    headingId: 'q4-heading',
    question: 'When can I use Banking App services?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    id: 'q5',
    headingId: 'q5-heading',
    question: 'Can I create my own password that is easy for me to remember?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
  {
    id: 'q6',
    headingId: 'q6-heading',
    question: 'What happens if I forget or lose my password?',
    firstParagraph:
      'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.',
    secondParagraph:
      'Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.',
  },
];