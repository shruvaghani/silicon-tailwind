const headsetLight = 'assets/img/about/icons/headset-light.svg';
const chatLight = 'assets/img/about/icons/chat-light.svg';
const addGroupLight = 'assets/img/about/icons/add-group-light.svg';
const locationLight = 'assets/img/about/icons/location-light.svg';

const brand01 = 'assets/img/brands/01.svg';
const brand02 = 'assets/img/brands/02.svg';
const brand03 = 'assets/img/brands/03.svg';
const brand04 = 'assets/img/brands/04.svg';
const brand05 = 'assets/img/brands/05.svg';
const brand06 = 'assets/img/brands/06.svg';

const avatar1 = 'assets/img/avatar/01.jpg';
const avatar5 = 'assets/img/avatar/05.jpg';
const avatar6 = 'assets/img/avatar/06.jpg';

const team9 = 'assets/img/team/09.jpg';
const team10 = 'assets/img/team/10.jpg';
const team11 = 'assets/img/team/11.jpg';
const team12 = 'assets/img/team/12.jpg';
const team13 = 'assets/img/team/13.jpg';
const team14 = 'assets/img/team/14.jpg';
const team15 = 'assets/img/team/15.jpg';

export type StatsType = {
  icon: string;
  value: string;
  strongText: string;
  normalText: string;
};

export const statsData: StatsType[] = [
  {
    icon: headsetLight,
    value: '2,480',
    strongText: 'Remote',
    normalText: 'Professionals',
  },
  {
    icon: chatLight,
    value: '1,200',
    strongText: 'Requests',
    normalText: 'per Week',
  },
  {
    icon: addGroupLight,
    value: '760',
    strongText: 'New Clients',
    normalText: 'per Month',
  },
  {
    icon: locationLight,
    value: '58',
    strongText: 'Countries',
    normalText: 'Using Our Product',
  },
];

export const brandsData: string[] = [brand01, brand02, brand03, brand04, brand05, brand06];

export type TestimonialType = {
  description: string;
  image: string;
  name: string;
  designation: string;
};

export const testimonialData: TestimonialType[] = [
  {
    description:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim.',
    image: avatar5,
    name: 'Ralph Edwards',
    designation: 'Head of Marketing at Lorem Ltd.',
  },
  {
    description:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet.',
    image: avatar6,
    name: 'Annette Black',
    designation: 'Strategic Advisor at Company LLC',
  },
  {
    description:
      'Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar.',
    image: avatar1,
    name: 'Darrell Steward',
    designation: 'Project Manager at Ipsum Ltd.',
  },
];

export type SocialLink = {
  icon: string;
  ariaLabel: string;
  hoverClass: string;
}

export type TeamMemberType = {
  image: string;
  name: string;
  role: string;
  socials: SocialLink[];
}

export const teamMembersData: TeamMemberType[] = [
  {
    image: team9,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        ariaLabel: 'LinkedIn',
        hoverClass: 'hover:bg-cyan-700 hover:text-white hover:border-cyan-700',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        ariaLabel: 'Twitter',
        hoverClass: 'hover:bg-sky-500 hover:text-white hover:border-sky-500',
      },
    ],
  },
  {
    image: team10,
    name: 'Darrell Steward',
    role: 'Lead Developer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-stackoverflow',
        ariaLabel: 'StackOverflow',
        hoverClass: 'hover:bg-orange-400 hover:text-white hover:border-orange-400',
      },
      {
        icon: 'tabler:brand-github-filled',
        ariaLabel: 'Github',
        hoverClass: 'hover:bg-cyan-700 hover:text-white hover:border-cyan-700',
      },
    ],
  },
  {
    image: team11,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-dribbble',
        ariaLabel: 'Dribbble',
        hoverClass: 'hover:bg-pink-500 hover:text-white hover:border-pink-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        ariaLabel: 'LinkedIn',
        hoverClass: 'hover:bg-cyan-700 hover:text-white hover:border-cyan-700',
      },
    ],
  },
  {
    image: team12,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socials: [
      {
        icon: 'tabler:brand-instagram',
        ariaLabel: 'Instagram',
        hoverClass: 'hover:bg-indigo-500 hover:text-white hover:border-indigo-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        ariaLabel: 'LinkedIn',
        hoverClass: 'hover:bg-cyan-700 hover:text-white hover:border-cyan-700',
      },
    ],
  },
  {
    image: team13,
    name: 'Annette Black',
    role: 'Lead UI Designer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-dribbble',
        ariaLabel: 'Dribbble',
        hoverClass: 'hover:bg-pink-500 hover:text-white hover:border-pink-500',
      },
      {
        icon: 'tabler:brand-behance',
        ariaLabel: 'Behance',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
    ],
  },
  {
    image: team14,
    name: 'Marvin McKinney',
    role: 'Senior Project Manager',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        ariaLabel: 'LinkedIn',
        hoverClass: 'hover:bg-cyan-700 hover:text-white hover:border-cyan-700',
      },
    ],
  },
  {
    image: team15,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        ariaLabel: 'Facebook',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
      {
        icon: 'tabler:brand-dribbble',
        ariaLabel: 'Dribbble',
        hoverClass: 'hover:bg-pink-500 hover:text-white hover:border-pink-500',
      },
      {
        icon: 'tabler:brand-behance',
        ariaLabel: 'Behance',
        hoverClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      },
    ],
  },
];
