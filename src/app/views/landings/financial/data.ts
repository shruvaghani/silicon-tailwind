const avatar01 = 'assets/img/avatar/01.jpg';
const avatar02 = 'assets/img/avatar/02.jpg';
const avatar03 = 'assets/img/avatar/03.jpg';
const avatar06 = 'assets/img/avatar/06.jpg';
const avatar04 = 'assets/img/avatar/04.jpg';
const avatar05 = 'assets/img/avatar/05.jpg';
const avatar40 = 'assets/img/avatar/40.jpg';
const avatar41 = 'assets/img/avatar/41.jpg';

const news01 = 'assets/img/landing/financial/news/01.jpg';
const news02 = 'assets/img/landing/financial/news/02.jpg';
const news03 = 'assets/img/landing/financial/news/03.jpg';
const news04 = 'assets/img/landing/financial/news/04.jpg';

const service01 = 'assets/img/landing/financial/services/01.jpg';
const service02 = 'assets/img/landing/financial/services/02.jpg';
const service03 = 'assets/img/landing/financial/services/03.jpg';

const industry01 = 'assets/img/landing/financial/industries/01.jpg';
const industry02 = 'assets/img/landing/financial/industries/02.jpg';
const industry03 = 'assets/img/landing/financial/industries/03.jpg';

const brand01 = 'assets/img/brands/01.svg';
const brand02 = 'assets/img/brands/02.svg';
const brand03 = 'assets/img/brands/03.svg';
const brand04 = 'assets/img/brands/04.svg';
const brand05 = 'assets/img/brands/05.svg';
const brand06 = 'assets/img/brands/06.svg';

export type ContactInfoType = {
  icon: string;
  text: string;
  type: 'text' | 'email' | 'phone';
  link?: string;
};

export const contactInfoData: ContactInfoType[] = [
  {
    icon: 'lucide:map-pin',
    text: '6391 Elgin St. Celina, Delaware 10299',
    type: 'text',
  },
  {
    icon: 'lucide:mail',
    text: 'email@example.com',
    type: 'email',
    link: 'mailto:email@example.com',
  },
  {
    icon: 'lucide:phone-call',
    text: '(406) 555‑0120',
    type: 'phone',
    link: 'tel:4065550120',
  },
];
export type IndustryType = {
  title: string;
  description: string;
  image: string;
  id: string;
};

export const industriesData: IndustryType[] = [
  {
    title: 'Transportation & Logistics',
    description:
      'Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit. Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. Enim ut nulla netus porta lacus diam. Et enim ultrices nunc, nunc. In iaculis venenatis at sit.',
    image: industry01,
    id: 'industry-1',
  },
  {
    title: 'Construction & Real Estate',
    description:
      'Nunc, amet et, et at habitant. Eget quis justo, metus at metus sapien. Urna quisque rutrum pharetra pulvinar vitae quam blandit non. Orci tempor cursus egestas quis orci at nisi maecenas. Enim in ultrices tortor, nibh quis sollicitudin tellus non maecenas. In libero ut semper nunc magna tortor.',
    image: industry02,
    id: 'industry-2',
  },
  {
    title: 'Education',
    description:
      'Vivamus nisl sit volutpat laoreet ligula et. Nunc, duis est justo, cras ipsum vulputate eget tellus augue. Amet, sagittis ut enim nisl commodo, pharetra. Sapien imperdiet tristique interdum aliquet varius vitae facilisis vel. Erat convallis eget elit eget iaculis. Morbi id facilisis ligula odio sed amet suspendisse duis aliquet. Justo quam convallis id sed.',
    image: industry03,
    id: 'industry-3',
  },
];

export type BrandType = {
  image: string;
  alt: string;
};

export const brandsData: BrandType[] = [
  {
    image: brand01,
    alt: 'Brand 1',
  },
  {
    image: brand02,
    alt: 'Brand 2',
  },
  {
    image: brand03,
    alt: 'Brand 3',
  },
  {
    image: brand04,
    alt: 'Brand 4',
  },
  {
    image: brand05,
    alt: 'Brand 5',
  },
  {
    image: brand06,
    alt: 'Brand 6',
  },
];

export type FeatureType = {
  icon: string;
  title: string;
  description: string;
};

export const featuresData: FeatureType[] = [
  {
    icon: 'tabler:rocket',
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.',
  },
  {
    icon: 'tabler:thumb-up',
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies. Magna aliquam id nunc.',
  },
  {
    icon: 'tabler:clock-hour-4',
    title: 'On Time Service',
    description:
      'Nisi augue at ridiculus odio ullamcorper in id. In bibendum diam nunc dignissim magna morbi mattis enim.',
  },
  {
    icon: 'tabler:users',
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat.',
  },
];

export type ServiceType = {
  title: string;
  image: string;
  features: string[];
};

export const servicesData: ServiceType[] = [
  {
    title: 'Consulting Services',
    image: service01,
    features: [
      'Ut auctor egestas leo arcu',
      'Adipiscing velit enim nec id etiam',
      'Imperdiet quis suspendisse imperdiet',
    ],
  },
  {
    title: 'Banking Expertise',
    image: service02,
    features: [
      'Quis euismod lacus, at consectetur porta',
      'Dictumst enim lectus dis eget non metus cras',
      'Risus volutpat tellus hendrerit nibh',
    ],
  },
  {
    title: 'Product Solutions',
    image: service03,
    features: [
      'Sit scelerisque venenatis, at orci',
      'Felis nascetur tempus nibh dictum tristique mus',
      'Consectetur neque vestibulum, vel ut fermentum',
    ],
  },
];

export type TestimonialType = {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
};

export const testimonialsData: TestimonialType[] = [
  {
    name: 'Fannie Summers',
    role: 'Medical Center patient',
    avatar: avatar03,
    content:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
  },
  {
    name: 'Robert Fox',
    role: 'Medical Center patient',
    avatar: avatar02,
    content:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
  },
  {
    name: 'Annette Black',
    role: 'Medical Center patient',
    avatar: avatar06,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
  },
  {
    name: 'Albert Flores',
    role: 'Medical Center patient',
    avatar: avatar01,
    content:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
  },
];

export type NewsType = {
  image: string;
  category: string;
  time: string;
  title: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export const newsData: NewsType[] = [
  {
    image: news01,
    category: 'Business',
    time: '12 hours ago',
    title: 'How agile is your forecasting process?',
    author: {
      name: 'Marvin McKinney',
      role: 'Deputy Director, Capital Department',
      avatar: avatar40,
    },
  },
  {
    image: news02,
    category: 'Enterprise',
    time: '1 day ago',
    title: 'A future with high public debt: low-for-long is not low forever',
    author: {
      name: 'Jenny Wilson',
      role: 'Financial Sector Expert',
      avatar: avatar04,
    },
  },
  {
    image: news03,
    category: 'Finance',
    time: 'Nov 24, 2023',
    title: 'Understanding the rise in long-term rates',
    author: {
      name: 'Albert Flores',
      role: 'Financial Counsellor and Director',
      avatar: avatar05,
    },
  },
  {
    image: news04,
    category: 'Ticks Trips',
    time: 'Oct 13, 2023',
    title: 'Stocks making the biggest moves after hours',
    author: {
      name: 'Jerome Bell',
      role: 'Business Analyst',
      avatar: avatar41,
    },
  },
];

export type FooterLinkType = {
  text: string;
  nowrap?: boolean;
  class?: string
};

export const usefulLinksData: FooterLinkType[] = [
  {
    text: 'Home',
  },
  {
    text: 'Features',
  },
  {
    text: 'Integrations',
  },
  {
    text: 'Our Clients',
  },
  {
    text: 'Blog',
  },
  {
    text: 'Terms & Conditions',
    class: 'mt-2',
    nowrap: true,
  },
  {
    text: 'Privacy Policy',
  },
];

export const socialLinksData: string[] = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram'];
