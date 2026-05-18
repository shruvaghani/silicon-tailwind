const service01 = 'assets/img/services/service01.jpg';
const service02 = 'assets/img/services/service02.jpg';
const service03 = 'assets/img/services/service03.jpg';
const digital = 'assets/img/services/icons/digital.svg';
const chart = 'assets/img/services/icons/chart.svg';
const marketing = 'assets/img/services/icons/marketing.svg';
const cybersecurity = 'assets/img/services/icons/cybersecurity.svg';
const insurance = 'assets/img/services/icons/insurance.svg';
const banking = 'assets/img/services/icons/banking.svg';
const payments = 'assets/img/services/icons/payments.svg';
const asset = 'assets/img/services/icons/asset.svg';
const operations = 'assets/img/services/icons/operations.svg';
const finance = 'assets/img/services/icons/finance.svg';
const audit = 'assets/img/services/icons/audit.svg';

const educationImg = 'assets/img/services/industries/education.jpg';
const ecommerceImg = 'assets/img/services/industries/ecommerce.jpg';
const sportsImg = 'assets/img/services/industries/sports.jpg';
const constructionImg = 'assets/img/services/industries/construction.jpg';
const medicineImg = 'assets/img/services/industries/medicine.jpg';
const realEstateImg = 'assets/img/services/industries/real-estate.jpg';
const wellnessImg = 'assets/img/services/industries/wellness.jpg';

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type ServiceType = {
  image: string;
  title: string;
  description: string;
  items: ServiceItem[];
  imageOnLeft?: boolean;
  reverseOrder?: boolean;
};

export const servicesData: ServiceType[] = [
  {
    image: service01,
    title: 'Consulting Services',
    description:
      'Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla velit ornare cras. Facilisis tempus non erat ornare imperdiet. In ac ullamcorper proin urna, lacus, tortor, ullamcorper egestas mattis mauris.',
    items: [
      {
        title: 'Digital transformation',
        description: 'Aliquam quis odio senectus.',
        icon: digital,
      },
      {
        title: 'Analytics services',
        description: 'Curabitur neque ut morbi sapien.',
        icon: chart,
      },
      {
        title: 'Marketing & sales',
        description: 'At faucibus molestie egestas sed.',
        icon: marketing,
      },
      {
        title: 'Cybersecurity & strategy',
        description: 'Orci bibendum ullamcorper lorem.',
        icon: cybersecurity,
      },
    ],
    imageOnLeft: true,
  },
  {
    image: service02,
    title: 'Banking Expertise',
    description:
      'Orci, ac libero sit ultrices enim volutpat augue. Congue sit nulla velit ornare cras. Facilisis tempus non erat ornare imperdiet. In ac ullamcorper proin urna, lacus, tortor, ullamcorper egestas mattis mauris.',
    items: [
      {
        title: 'Insurance',
        description: 'Nunc dui aliquam volutpat augue.',
        icon: insurance,
      },
      {
        title: 'Banking risk',
        description: 'Habitasse adipiscing aenean sapien.',
        icon: banking,
      },
      {
        title: 'Payments',
        description: 'At faucibus molestie egestas sed.',
        icon: payments,
      },
    ],
    imageOnLeft: false,
    reverseOrder: true,
  },
  {
    image: service03,
    title: 'Product Solutions',
    description:
      'Sem scelerisque laoreet commodo velit. Fringilla tempor egestas mattis mauris eu dui in. Viverra enim velit fringilla turpis suspendisse amet ipsum, nisi sed.',
    items: [
      {
        title: 'Asset management',
        description: 'Mattis sodales tellus risus placerat in.',
        icon: asset,
      },
      {
        title: 'Operations & technology',
        description: 'Viverra volutpat tellus orci enim.',
        icon: operations,
      },
      {
        title: 'Corporate finance',
        description: 'Aliquet amet pharetra fermentum sem.',
        icon: finance,
      },
      {
        title: 'Audit services',
        description: 'Venenatis congue iaculis malesuada.',
        icon: audit,
      },
    ],
    imageOnLeft: true,
  },
];

export type IndustryType = {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  imageWidthClass: string;
  imageMarginClass?: string;
  active?: boolean;
};

export const industriesData: IndustryType[] = [
  {
    id: 'education',
    title: 'Education',
    icon: 'graduation-cap',
    description:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim',
    image: educationImg,
    imageWidthClass: 'lg:w-148.5',
    imageMarginClass: 'mt-8',
    active: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    icon: 'shopping-cart',
    description:
      'Curabitur auctor quam ut iaculis suscipit. Morbi ullamcorper tellus eu purus dictum convallis. Duis posuere dui sit amet pellentesque malesuada. Morbi ultrices tortor ut diam molestie, vel pharetra lectus lacinia. Lorem ipsum dolor sit amet.',
    image: ecommerceImg,
    imageWidthClass: 'lg:w-125.5',
    imageMarginClass: 'mt-8',
  },
  {
    id: 'sports',
    title: 'Sports',
    icon: 'bike',
    description:
      'Etiam vehicula commodo nunc, ut tincidunt risus aliquam sit amet. Vivamus ut velit ut odio malesuada tincidunt ut non eros. Curabitur vel quam varius, ullamcorper mi quis, ultrices eros. Nam eget mi ut diam elementum facilisis vehicula eget augue.',
    image: sportsImg,
    imageWidthClass: 'lg:w-125.5',
    imageMarginClass: 'mt-4',
  },
  {
    id: 'construction',
    title: 'Construction',
    icon: 'paint-roller',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, nunc in iaculis vestibulum, nunc ex convallis est, ut viverra velit sapien ac erat. Vivamus aliquet mi tellus, vel viverra ex blandit sed. Sed blandit lobortis risus. Aliquam blandit cursus ex sed iaculis.',
    image: constructionImg,
    imageWidthClass: 'lg:w-136.5',
    imageMarginClass: 'mt-4',
  },
  {
    id: 'medicine',
    title: 'Medicine',
    icon: 'plus',
    description:
      'In vel nulla ac enim pellentesque tristique vel non dui. Integer vulputate ex leo, in accumsan purus consectetur quis. Cras scelerisque orci vel dapibus volutpat. In et consectetur enim. Maecenas lobortis viverra tortor, quis fermentum sem volutpat sit amet.',
    image: medicineImg,
    imageWidthClass: 'lg:w-136.5',
    imageMarginClass: 'mt-4',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: 'building-2',
    description:
      'Donec consequat nibh at urna tincidunt tempor. Integer quis lobortis felis. Nulla id quam vestibulum, aliquam mauris vitae, auctor ex. Aliquam augue nulla, faucibus sed lacus ac, placerat elementum nisi. Curabitur enim nunc, dictum et accumsan.',
    image: realEstateImg,
    imageWidthClass: 'lg:w-136.5',
    imageMarginClass: 'mt-4',
  },
  {
    id: 'wellness',
    title: 'Wellness',
    icon: 'spade',
    description:
      'Morbi ullamcorper tellus eu purus dictum convallis. Duis posuere dui sit amet pellentesque malesuada. Morbi ultrices tortor ut diam molestie, vel pharetra lectus lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius lectus lectus.',
    image: wellnessImg,
    imageWidthClass: 'lg:w-136.5',
    imageMarginClass: 'mt-4',
  },
];
