const comments = 'assets/img/landing/saas-2/features/comments.svg';
const analytics = 'assets/img/landing/saas-2/features/analytics.svg';
const group = 'assets/img/landing/saas-2/features/group.svg';
const notifications = 'assets/img/landing/saas-2/features/notifications.svg';
const tasks = 'assets/img/landing/saas-2/features/tasks.svg';
const security = 'assets/img/landing/saas-2/features/security.svg';

const img16 = 'assets/img/avatar/16.jpg';
const img08 = 'assets/img/avatar/08.jpg';
const img13 = 'assets/img/avatar/13.jpg';
const img09 = 'assets/img/avatar/09.jpg';

const appstorelight = 'assets/img/market/appstore-light.svg';
const appstoredark = 'assets/img/market/appstore-dark.svg';
const googleplaylight = 'assets/img/market/googleplay-light.svg';
const googleplaydark = 'assets/img/market/googleplay-dark.svg';

const googleImg = 'assets/img/brands/google.svg';
const zoomImg = 'assets/img/brands/zoom.svg';
const slackImg = 'assets/img/brands/slack.svg';
const gmailImg = 'assets/img/brands/gmail.svg';
const trelloImg = 'assets/img/brands/trello.svg';
const mailchimpImg = 'assets/img/brands/mailchimp.svg';
const dropboxImg = 'assets/img/brands/dropbox.svg';
const evernoteImg = 'assets/img/brands/evernote.svg';

export type featuresType = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const featuresData: featuresType[][] = [
  [
    {
      image: comments,
      alt: 'Comments',
      title: 'Comments on Tasks',
      description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
    },
    {
      image: analytics,
      alt: 'Analytics',
      title: 'Tasks Analytics',
      description:
        'Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate.',
    },
    {
      image: group,
      alt: 'Group',
      title: 'Multiple Assignees',
      description: 'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.',
    },
  ],

  [
    {
      image: notifications,
      alt: 'Notifications',
      title: 'Notifications',
      description:
        'Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra.',
    },
    {
      image: tasks,
      alt: 'Tasks',
      title: 'Sections & Subtasks',
      description: 'Mi feugiat hac id in. Sit elit placerat lacus nibh lorem ridiculus lectus.',
    },
    {
      image: security,
      alt: 'Security',
      title: 'Data Security',
      description: 'Aliquam malesuada neque eget elit nulla vestibulum nunc cras.',
    },
  ],
];

export type testimonialsType = {
  quote: string;
  rating: number;
  image: string;
  name: string;
  role: string;
};

export const testimonialsData: testimonialsType[] = [
  {
    quote:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 3,
    image: img16,
    name: 'Robert Fox',
    role: 'Founder of Lorem Company',
  },
  {
    quote:
      'Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.',
    rating: 5,
    image: img08,
    name: 'Annette Black',
    role: 'CEO of Ipsum Company',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.',
    rating: 4,
    image: img13,
    name: 'Jerome Bell',
    role: 'Founder of the Agency',
  },
  {
    quote:
      'Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    rating: 5,
    image: img09,
    name: 'Albert Flores',
    role: 'CEO of Dolor Ltd.',
  },
];

export type storeType = {
  platform: string;
  title: string;
  rating: string;
  reviews: string;
  stars: number;
  lightIcon: string;
  darkIcon: string;
  alt: string;
};

export const storeData: storeType[] = [
  {
    platform: 'App Store',
    title: "Editor's Choice",
    rating: '4.7',
    reviews: '187K+',
    stars: 5,
    lightIcon: appstorelight,
    darkIcon: appstoredark,
    alt: 'App Store',
  },
  {
    platform: 'Google Play',
    title: 'App of the Day',
    rating: '4.8',
    reviews: '30K+',
    stars: 5,
    lightIcon: googleplaylight,
    darkIcon: googleplaydark,
    alt: 'Google Play',
  },
];

export type pricingPlansType = {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  buttonClass: string;
  cardClass: string;
  innerClass?: string;
  textClass: string;
  buttonBorder?: boolean;
};

export const pricingPlansData: pricingPlansType[] = [
  {
    title: 'Team',
    subtitle: 'Best for small teams',
    price: '$10',
    duration: 'per month',
    buttonClass: 'bg-light text-dark hover:bg-light-hover',
    cardClass: 'bg-primary rounded-lg p-6 h-full',
    innerClass: 'bg-transparent border border-white/14 lg:py-12 md:py-6 py-4 rounded-lg',
    textClass: 'text-white',
  },
  {
    title: 'Company',
    subtitle: 'Best for growing teams',
    price: '$25',
    duration: 'per month',
    buttonClass: 'border border-primary/40 text-primary hover:bg-primary hover:text-white',
    cardClass:
      'bg-transparent border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4',
    textClass: 'text-default-900',
    buttonBorder: true,
  },
  {
    title: 'Enterprise',
    subtitle: 'Best for large teams',
    price: '$50',
    duration: 'per month',
    buttonClass: 'border border-primary/40 text-primary hover:bg-primary hover:text-white',
    cardClass:
      'bg-transparent border border-default-200 dark:border-white/14 dark:bg-white/4 lg:py-12 md:py-6 py-4',
    textClass: 'text-default-900',
    buttonBorder: true,
  },
];

export type BrandType = {
  image: string;
  alt: string;
  description: string;
};

export const brandItemsData: BrandType[] = [
  {
    image: googleImg,
    alt: 'Google',
    description: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis pretium.',
  },
  {
    image: zoomImg,
    alt: 'Zoom',
    description:
      'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.',
  },
  {
    image: slackImg,
    alt: 'Slack',
    description: 'Id mollis consectetur congue egestas egestas suspendisse blandit justo.',
  },
  {
    image: gmailImg,
    alt: 'Gmail',
    description:
      'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.',
  },
  {
    image: trelloImg,
    alt: 'Trello',
    description:
      'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.',
  },
  {
    image: mailchimpImg,
    alt: 'Mailchimp',
    description:
      'A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris integer.',
  },
  {
    image: dropboxImg,
    alt: 'Dropbox',
    description: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.',
  },
  {
    image: evernoteImg,
    alt: 'Evernote',
    description:
      'Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.',
  },
];

export const footerItemsData: string[] = [
  'Home',
  'Features',
  'Overview',
  'Blog',
  'Contacts',
  'Account',
];

export type SocialItemType = {
  label: string;
  icon: string;
  hoverClass: string;
}

export const SocialItemData: SocialItemType[] = [
  {
    label: 'Facebook',
    icon: 'tabler:brand-facebook-filled',
    hoverClass: 'hover:bg-blue-500',
  },
  {
    label: 'Instagram',
    icon: 'tabler:brand-instagram',
    hoverClass: 'hover:bg-indigo-500',
  },
  {
    label: 'Twitter',
    icon: 'tabler:brand-twitter-filled',
    hoverClass: 'hover:bg-blue-400',
  },
  {
    label: 'YouTube',
    icon: 'tabler:brand-youtube-filled',
    hoverClass: 'hover:bg-danger',
  },
];