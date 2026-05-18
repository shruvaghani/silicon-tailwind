const icon1 = 'assets/img/services/single/icons/01.svg';
const icon2 = 'assets/img/services/single/icons/02.svg';
const icon3 = 'assets/img/services/single/icons/03.svg';
const icon4 = 'assets/img/services/single/icons/04.svg';
const icon5 = 'assets/img/services/single/icons/05.svg';
const icon6 = 'assets/img/services/single/icons/06.svg';
const toothImg = 'assets/img/services/single/tooth.jpg';

const teamImg1 = 'assets/img/team/17.jpg';
const teamImg2 = 'assets/img/team/18.jpg';
const teamImg3 = 'assets/img/team/19.jpg';
const teamImg4 = 'assets/img/team/21.jpg';

const newsImg1 = 'assets/img/landing/medical/news/01.jpg'
const newsImg2 = 'assets/img/landing/medical/news/02.jpg'
const newsImg3 = 'assets/img/landing/medical/news/03.jpg'
const newsImg4 = 'assets/img/landing/medical/news/04.jpg'

const avatar36 = 'assets/img/avatar/36.jpg'
const avatar37 = 'assets/img/avatar/37.jpg'
const avatar38 = 'assets/img/avatar/38.jpg'

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export type ServiceSectionType = {
  leftServices: ServiceItem[];
  rightServices: ServiceItem[];
  centerImage: string;
};

export const serviceSectionData: ServiceSectionType = {
  centerImage: toothImg,

  leftServices: [
    {
      title: 'Dental cleaning',
      description:
        'Mi ac neque gravida sit tellus elit tellus nunc ultricies semper velit sagittis',
      image: icon1,
    },
    {
      title: 'Surgery and implant',
      description: 'Diam sed sit praesent in porttitor mi posuere sem in sit arcu massa',
      image: icon2,
    },
    {
      title: 'Thooth removal',
      description: 'Mi habitasse in mollis orci elementum duis ultricies vehicula nullam tristique',
      image: icon3,
    },
  ],

  rightServices: [
    {
      title: 'Thooth implant',
      description: 'Bibendum massa nam enim erat suspendisse sagittis risus urna',
      image: icon4,
    },
    {
      title: 'Full teeth cleaning',
      description: 'Nisiner elit leo aliquam vulputate venenatis pellentesque pulvinar',
      image: icon5,
    },
    {
      title: 'Aesthetic dentistry',
      description: 'Pellentesque rhoncus viverra vestibulum, purus purus',
      image: icon6,
    },
  ],
};

export type TeamType = {
  name: string;
  role: string;
  image: string;
  rating: number;
  reviews: number;
};

export const teamData: TeamType[] = [
  {
    name: 'Dr. Esther Howard',
    role: 'Dentist',
    image: teamImg1,
    rating: 5,
    reviews: 4,
  },
  {
    name: 'Dr. Jerome Bell',
    role: 'Dentist',
    image: teamImg2,
    rating: 4,
    reviews: 4,
  },
  {
    name: 'Dr. Ralph Edwards',
    role: 'Surgeon',
    image: teamImg3,
    rating: 5,
    reviews: 8,
  },
  {
    name: 'Dr. Annette Black',
    role: 'Dentist',
    image: teamImg4,
    rating: 4,
    reviews: 10,
  },
];


export type PricingType = {
  title: string
  price: string
}

export const pricingData: PricingType[] = [
  {
    title: 'Surgery and Implantation',
    price: '$120',
  },
  {
    title: 'Full teeth cleaning',
    price: '$1,200',
  },
  {
    title: 'Therapeutic dentistry',
    price: '$500',
  },
  {
    title: 'Aesthetic dentistry',
    price: '$2,000',
  },
  {
    title: 'Professional oral hygiene',
    price: '$100',
  },
  {
    title: 'Full teeth cleaning',
    price: '$1,300',
  },
]

export type MedicalNewsType ={
  category: string
  date: string
  title: string
  image: string
  author: {
    name: string
    degree: string
    avatar: string
    rounded?: boolean
  }
}

export const medicalNewsData: MedicalNewsType[] = [
  {
    category: 'Health',
    date: 'Oct 13, 2023',
    title: 'Vitamin D: benefits, deficiency, sources, and dosage',
    image: newsImg4,
    author: {
      name: 'Jenny Wilson',
      degree: 'Ph.D. Physiology',
      avatar: avatar37,
    },
  },
  {
    category: 'Diseases',
    date: '12 hours ago',
    title: 'Updates on COVID-19 vaccination efforts in your area',
    image: newsImg1,
    author: {
      name: 'Ralph Edwards',
      degree: 'MBBS, MD Gynaecology',
      avatar: avatar36,
    },
  },
  {
    category: 'Healthy Tips',
    date: '1 day ago',
    title: 'New drug to halt dementia after multiple head injuries',
    image: newsImg2,
    author: {
      name: 'Jenny Wilson',
      degree: 'Ph.D. Physiology',
      avatar: avatar37,
    },
  },
  {
    category: 'Psychology',
    date: 'Nov 24, 2023',
    title: 'Empowering women to make their health a priority',
    image: newsImg3,
    author: {
      name: 'Albert Flores',
      degree: 'M.Sc. Clinical Neuroscience',
      avatar: avatar38,
      rounded: true,
    },
  },
]

export type FooterLink = {
  text: string;
  cssClass?: string;
};

export const usefulLinks: string[] = ['Home', 'Features', 'Integrations', 'Our Clients', 'Blog'];

export const legalLinks: FooterLink[] = [
  { text: 'Terms & Conditions', cssClass: 'text-nowrap' },
  { text: 'Privacy Policy' },
];

export const socialLinks: string[] = ['Facebook', 'LinkedIn', 'Twitter', 'Instagram'];
