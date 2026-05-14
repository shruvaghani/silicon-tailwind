const team24 = 'assets/img/team/24.jpg';
const team25 = 'assets/img/team/25.jpg';
const team26 = 'assets/img/team/26.jpg';
const team27 = 'assets/img/team/27.jpg';
const team28 = 'assets/img/team/28.jpg';
const team29 = 'assets/img/team/29.jpg';
const team30 = 'assets/img/team/30.jpg';
const team31 = 'assets/img/team/31.jpg';

const brand1 = 'assets/img/brands/01.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/03.svg';
const brand4 = 'assets/img/brands/04.svg';
const brand5 = 'assets/img/brands/05.svg';
const brand6 = 'assets/img/brands/06.svg';

const avatar02 = 'assets/img/avatar/02.jpg'
const avatar03 = 'assets/img/avatar/03.jpg'
const avatar10 = 'assets/img/avatar/10.jpg'

export type TimelineType = {
  year: string;
  description: string;
  className: string;
};

export const timelineData: TimelineType[] = [
  {
    year: '2018',
    description:
      'Nibh in natoque ut blandit est sed massa quam massa. Nisi eu aenean tristique sed tortor tincidunt.',
    className: 'lg:after:w-1/2 lg:after:end-0 lg:pb-0 pb-6',
  },
  {
    year: '2019',
    description:
      'Orci, lorem rutrum euismod est urna commodo. Dictum fringilla ac sit egestas pharetra tellus in tristique.',
    className: 'lg:after:w-full lg:after:end-0 lg:py-0 py-6',
  },
  {
    year: '2021',
    description:
      'Quisque felis in augue dolor. Risus, id pretium vitae a adipiscing adipiscing posuere maecenas.',
    className: 'lg:after:w-full lg:after:end-0 lg:py-0 py-6',
  },
  {
    year: '2023',
    description:
      'Nunc, sit tempus, varius est duis. Elementum commodo tincidunt mi quis arcu lorem consequat.',
    className: 'lg:after:w-1/2 lg:after:start-0 lg:py-0 py-6 before:h-1/2',
  },
];

export type SocialLink = {
  icon: string;
  hoverClass: string;
};

export type TeamMemberType = {
  image: string;
  name: string;
  role: string;
  socials: SocialLink[];
};

export const teamMembersData: TeamMemberType[] = [
  {
    image: team24,
    name: 'Ralph Edwards',
    role: 'Founder & CEO',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team25,
    name: 'Albert Flores',
    role: 'Principal Consultant',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team26,
    name: 'Jenny Wilson',
    role: 'UX Designer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team27,
    name: 'Marvin McKinney',
    role: 'Product Manager',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team28,
    name: 'Esther Howard',
    role: 'VP of Strategy',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team29,
    name: 'Cameron Williamson',
    role: 'Co-Founder',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team30,
    name: 'Jerome Bell',
    role: 'Strategic Advisor',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
  {
    image: team31,
    name: 'Darrell Steward',
    role: 'Senior Project Manager',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500 hover:text-white',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700 hover:text-white',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500 hover:text-white',
      },
    ],
  },
];

export const brandItemsData: string[] = [brand1, brand2, brand3, brand4, brand5, brand6, brand1];

export type TestimonialType = {
  quote: string
  rating: number
  image: string
  alt: string
  name: string
  designation: string
}

export const testimonialData: TestimonialType[] = [
  {
    quote:
      'Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.',
    rating: 5,
    image: avatar03,
    alt: 'Robert Fox',
    name: 'Annette Black',
    designation: 'Co-founder of Lorem Company',
  },
  {
    quote:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    image: avatar02,
    alt: 'Annette Black',
    name: 'Robert Fox',
    designation: 'CEO of Ipsum Company',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    image: avatar10,
    alt: 'Jerome Bell',
    name: 'Jerome Bell',
    designation: 'Founder of the Agency',
  },
  {
    quote:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 4,
    image: avatar02,
    alt: 'Annette Black',
    name: 'Robert Fox',
    designation: 'CEO of Ipsum Company',
  },
]
export type SocialLinkType = {
  label: string
  icon: string
  hoverBgClass: string
}

export const socialLinksData: SocialLinkType[] = [
  {
    label: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverBgClass: 'hover:bg-blue-500',
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-twitter-filled',
    hoverBgClass: 'hover:bg-blue-400',
  },
  {
    label: 'Instagram',
    icon: 'tabler:brand-instagram',
    hoverBgClass: 'hover:bg-indigo-500',
  },
  {
    label: 'YouTube',
    icon: 'tabler:brand-youtube-filled',
    hoverBgClass: 'hover:bg-danger',
  },
]

export const footerLinksData: string[] = [
'Home',
'Features',
'Overview',
'Blog',
'Contacts',
'Account'
]