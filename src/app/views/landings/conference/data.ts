const brand1 = 'assets/img/brands/01.svg';
const brand2 = 'assets/img/brands/02.svg';
const brand3 = 'assets/img/brands/03.svg';
const brand4 = 'assets/img/brands/04.svg';
const brand5 = 'assets/img/brands/05.svg';
const brand6 = 'assets/img/brands/06.svg';

const team24 = 'assets/img/team/24.jpg';
const team25 = 'assets/img/team/25.jpg';
const team26 = 'assets/img/team/26.jpg';
const team27 = 'assets/img/team/27.jpg';
const team28 = 'assets/img/team/28.jpg';
const team29 = 'assets/img/team/29.jpg';
const team30 = 'assets/img/team/30.jpg';
const team31 = 'assets/img/team/31.jpg';

const avatar14 = 'assets/img/avatar/14.jpg';
const avatar11 = 'assets/img/avatar/11.jpg';
const avatar13 = 'assets/img/avatar/13.jpg';

export type BrandType = {
  image: string;
  alt: string;
};

export const brandData: BrandType[] = [
  {
    image: brand1,
    alt: 'Brand 1',
  },
  {
    image: brand2,
    alt: 'Brand 2',
  },
  {
    image: brand3,
    alt: 'Brand 3',
  },
  {
    image: brand4,
    alt: 'Brand 4',
  },
  {
    image: brand5,
    alt: 'Brand 5',
  },
  {
    image: brand6,
    alt: 'Brand 6',
  },
];

export type TeamMemberType = {
  image: string;
  name: string;
  designation: string;
};

export const teamMembersData: TeamMemberType[] = [
  {
    image: team24,
    name: 'Ralph Edwards',
    designation: 'Founder & CEO, Uber',
  },
  {
    image: team25,
    name: 'Albert Flores',
    designation: 'Principal Consultant, Twitch',
  },
  {
    image: team26,
    name: 'Jenny Wilson',
    designation: 'UX Designer, Glassdoor',
  },
  {
    image: team27,
    name: 'Marvin McKinney',
    designation: 'Product Manager, Google',
  },
  {
    image: team28,
    name: 'Esther Howard',
    designation: 'VP of Strategy, Stretto Inc.',
  },
  {
    image: team29,
    name: 'Cameron Williamson',
    designation: 'Co-Founder, Invision LTD',
  },
  {
    image: team30,
    name: 'Jerome Bell',
    designation: 'Strategic Advisor, Shopify',
  },
  {
    image: team31,
    name: 'Darrell Steward',
    designation: 'Senior Project Manager, Uber',
  },
];

export type EventStatType = {
  count: string;
  description: string;
};

export const eventStatsData: EventStatType[] = [
  {
    count: '20+',
    description: 'Hours of digital content, workshops & side-events',
  },
  {
    count: '3K+',
    description: 'Industry experts, students, and enthusiasts',
  },
  {
    count: '18',
    description: 'Digital experts, instructors and panelists for our side-events',
  },
];

export type TestimonialType = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export const TestimonialData: TestimonialType[] = [
  {
    quote:
      'Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa lobortis facilisis.',
    name: 'Annette Black',
    role: 'Founder of Lorem Company',
    image: avatar14,
  },
  {
    quote:
      'Id nibh sed purus eu. Viverra eu sed quam pellentesque magna ac sit odio. Mi at interdum hendrerit neque vulputate semper vulputate. Et augue lacinia magna tempor blandit dui porttitor in senectus. Porttitor nulla in ac in quis. Et ultrices lacus, nunc at nulla eu sodales. At aliquam euismod est in praesent ornare etiam id.',
    name: 'Jerome Bell',
    role: 'Co-founder of Lorem Company',
    image: avatar11,
  },
  {
    quote:
      'Nec iaculis fermentum interdum habitasse feugiat massa id pellentesque. Ut porta gravida lobortis facilisis dui augue. Fringilla nunc porttitor eget dictum tempus. Lorem erat eu congue curabitur est. Pulvinar morbi pulvinar venenatis rhoncus egestas euismod massa mauris. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.',
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company',
    image: avatar13,
  },
];

export const footerData = ['Home', 'Speakers', 'Schedule', 'About', 'Sponsors', 'Prices'];

export type SocialLinks= {
    label: string;
    icon: string;
    hoverClass: string;
}

export const socialLinks :SocialLinks[] = [
  {
    label: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500'
  },
  {
    label: 'Instagram',
    icon: 'tabler:brand-instagram',
    hoverClass: 'hover:bg-indigo-500'
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'hover:bg-blue-400'
  },
  {
    label: 'YouTube',
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-danger'
  },
];
