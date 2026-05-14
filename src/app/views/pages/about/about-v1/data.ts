const ideaIcon = 'assets/img/landing/digital-agency/icons/idea.svg';
const awardIcon = 'assets/img/landing/digital-agency/icons/award.svg';
const teamIcon = 'assets/img/landing/digital-agency/icons/team.svg';

const webbyImg = 'assets/img/landing/digital-agency/awards/webby.svg';
const cssdaImg = 'assets/img/landing/digital-agency/awards/cssda.svg';
const awwwardsImg = 'assets/img/landing/digital-agency/awards/awwwards.svg';

const avatar14 = 'assets/img/avatar/14.jpg';
const avatar13 = 'assets/img/avatar/13.jpg';
const avatar11 = 'assets/img/avatar/11.jpg';

const team1 = 'assets/img/team/01.jpg';
const team2 = 'assets/img/team/02.jpg';
const team3 = 'assets/img/team/03.jpg';
const team4 = 'assets/img/team/04.jpg';
const team5 = 'assets/img/team/05.jpg';
const team6 = 'assets/img/team/06.jpg';
const team7 = 'assets/img/team/07.jpg';
const team8 = 'assets/img/team/08.jpg';

export type StatType = {
  count: string;
  highlight: string;
  text: string;
};

export const statsData: StatType[] = [
  {
    count: '2,480',
    highlight: 'Remote',
    text: 'Sales Experts',
  },
  {
    count: '760',
    highlight: 'New Clients',
    text: 'per Month',
  },
  {
    count: '1,200',
    highlight: 'Requests',
    text: 'per Week',
  },
];

export type FeatureType = {
  icon: string;
  alt: string;
  title: string;
  description: string;
};

export const featuresData: FeatureType[] = [
  {
    icon: ideaIcon,
    alt: 'Bulb icon',
    title: 'Creative Solutions',
    description: 'Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.',
  },
  {
    icon: awardIcon,
    alt: 'Award icon',
    title: 'Award Winning',
    description: 'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.',
  },
  {
    icon: teamIcon,
    alt: 'Team icon',
    title: 'Team of Professionals',
    description: 'Nam venenatis urna aenean quis feugiat et senectus turpis.',
  },
];

export type AwardsType = {
  image: string;
  title: string;
  description?: string;
};

export const awardsData: AwardsType[] = [
  {
    image: webbyImg,
    title: '4x mobile of the day',
  },
  {
    image: cssdaImg,
    title: '1x Kudos',
  },
  {
    image: awwwardsImg,
    title: '3x website of the day',
  },
  {
    image: webbyImg,
    title: '2x best website',
  },
];

export type TestimonialType = {
  quote: string;
  image: string;
  alt: string;
  name: string;
  designation: string;
};

export const testimonialsData: TestimonialType[] = [
  {
    quote:
      'Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada.',
    image: avatar14,
    alt: 'Annette Black',
    name: 'Annette Black',
    designation: 'Strategic Advisor at Company LLC',
  },
  {
    quote:
      'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
    image: avatar13,
    alt: 'Ralph Edwards',
    name: 'Ralph Edwards',
    designation: 'Head of Marketing at Lorem Ltd.',
  },
  {
    quote:
      'Ac at sed sit senectus massa. Mas ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa.Orci leo tortor ornare.',
    image: avatar11,
    alt: 'Darrell Steward',
    name: 'Darrell Steward',
    designation: 'Project Manager at Ipsum Ltd.',
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
    image: team1,
    name: 'Jenny Wilson',
    role: 'Co-Founder & CEO',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500',
      },
    ],
  },
  {
    image: team2,
    name: 'Ralph Edwards',
    role: 'Co-Founder',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500',
      },
    ],
  },
  {
    image: team3,
    name: 'Cameron Williamson',
    role: 'Creative Director',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-dribbble',
        hoverClass: 'hover:bg-pink-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700',
      },
    ],
  },
  {
    image: team4,
    name: 'Jerome Bell',
    role: 'Marketing Director',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700',
      },
    ],
  },
  {
    image: team5,
    name: 'Marvin McKinney',
    role: 'Lead Designer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-behance',
        hoverClass: 'hover:bg-blue-700',
      },
      {
        icon: 'tabler:brand-dribbble',
        hoverClass: 'hover:bg-pink-500',
      },
    ],
  },
  {
    image: team6,
    name: 'Esther Howard',
    role: 'Motion Designer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-dribbble',
        hoverClass: 'hover:bg-pink-500',
      },
      {
        icon: 'tabler:brand-behance',
        hoverClass: 'hover:bg-blue-700',
      },
    ],
  },
  {
    image: team7,
    name: 'Darrell Steward',
    role: 'Lead Developer',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-stackoverflow',
        hoverClass: 'hover:bg-orange-700',
      },
      {
        icon: 'tabler:brand-github-filled',
        hoverClass: 'hover:bg-cyan-800',
      },
    ],
  },
  {
    image: team8,
    name: 'Jane Cooper',
    role: 'Senior Project Manager',
    socials: [
      {
        icon: 'tabler:brand-facebook-filled',
        hoverClass: 'hover:bg-blue-500',
      },
      {
        icon: 'tabler:brand-linkedin-filled',
        hoverClass: 'hover:bg-cyan-700',
      },
      {
        icon: 'tabler:brand-twitter-filled',
        hoverClass: 'hover:bg-cyan-500',
      },
    ],
  },
];
export type SocialType = {
  name: string;
  username: string;
  icon: string;
  hoverClass: string;
};

export const socialItemsData: SocialType[] = [
  {
    name: 'Facebook',
    username: 'silicon',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'group-hover:bg-blue-500',
  },
  {
    name: 'Instagram',
    username: '@silicon',
    icon: 'tabler:brand-instagram',
    hoverClass: 'group-hover:bg-indigo-500',
  },
  {
    name: 'Twitter',
    username: '@silicon',
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'group-hover:bg-cyan-600',
  },
  {
    name: 'LinkedIn',
    username: 'Silicon Inc.',
    icon: 'tabler:brand-linkedin-filled',
    hoverClass: 'group-hover:bg-cyan-700',
  },
  {
    name: 'YouTube',
    username: 'Silicon',
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'group-hover:bg-danger',
  },
  {
    name: 'Dribbble',
    username: 'Silicon',
    icon: 'tabler:brand-dribbble',
    hoverClass: 'group-hover:bg-pink-500',
  },
];
