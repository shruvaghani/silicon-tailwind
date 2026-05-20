export type BlogTopicType = {
  title: string;
  count: number;
  active?: boolean;
};

export const blogTopicsData: BlogTopicType[] = [
  {
    title: 'All topics',
    count: 48,
    active: true,
  },
  {
    title: 'Digital',
    count: 12,
  },
  {
    title: 'Marketing',
    count: 5,
  },
  {
    title: 'Startups',
    count: 10,
  },
  {
    title: 'Technology',
    count: 9,
  },
  {
    title: 'Business',
    count: 4,
  },
  {
    title: 'Processes & Tools',
    count: 3,
  },
];

export type RecentPostType = {
  title: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
};

export const recentPostsData: RecentPostType[] = [
  {
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    date: '12 hours ago',
    likes: 8,
    comments: 4,
    shares: 2,
  },
  {
    title: 'How Agile is Your Forecasting Process?',
    date: 'Oct 9, 2023',
    likes: 4,
    comments: 1,
    shares: 0,
  },
  {
    title: 'Inclusive Marketing: Why and How Does it Work?',
    date: 'Sep 13, 2023',
    likes: 5,
    comments: 2,
    shares: 4,
  },
];

export const tagsData: string[] = [
  '#lifestyle',
  '#ux',
  '#tech',
  '#user',
  '#software',
  '#it',
  '#network',
  '#engineering',
];

export type SocialLinkType = {
  icon: string;
  hoverClass: string;
};

export const socialLinksData: SocialLinkType[] = [
  {
    icon: 'tabler:brand-linkedin-filled',
    hoverClass: 'hover:bg-cyan-600',
  },
  {
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'hover:bg-sky-500',
  },
  {
    icon: 'tabler:brand-instagram',
    hoverClass: 'hover:bg-indigo-500',
  },
];


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
