export type BlogPost = {
  category: string;
  time: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

export const blogPostsData: BlogPost[] = [
  {
    category: 'Tech',
    time: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    likes: 2,
    comments: 0,
    shares: 3,
  },
  {
    category: 'Strategy',
    time: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in.',
    likes: 8,
    comments: 4,
    shares: 2,
  },
  {
    category: 'Software',
    time: 'May 24, 2023',
    title: 'What the Software Stock Slump Means for the Market',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.',
    likes: 6,
    comments: 1,
    shares: 5,
  },
  {
    category: 'Startups',
    time: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur distinctio id.',
    likes: 8,
    comments: 7,
    shares: 3,
  },
  {
    category: 'Technology',
    time: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    likes: 5,
    comments: 3,
    shares: 9,
  },
];

export type BlogPostType = {
  title: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
};

export type BlogCategory = {
  category: string;
  categoryColor: string;
  link: string;
  posts: BlogPostType[];
};

export const blogCategoriesData: BlogCategory[] = [
  {
    category: 'Digital',
    categoryColor: 'bg-blue-500',
    link: '/blog/single',
    posts: [
      {
        title: '5 Bad Landing Page Examples & How We Would Fix Them',
        date: '12 hours ago',
        likes: 8,
        comments: 4,
        shares: 2,
      },
      {
        title: 'How Agile is Your Forecasting Process?',
        date: 'Sep 3, 2023',
        likes: 4,
        comments: 1,
        shares: 0,
      },
      {
        title: 'Inclusive Marketing: Why and How Does it Work?',
        date: 'Oct 9, 2023',
        likes: 5,
        comments: 1,
        shares: 2,
      },
    ],
  },

  {
    category: 'Technology',
    categoryColor: 'bg-danger',
    link: '/blog/single',
    posts: [
      {
        title: 'This Long-Awaited Technology May Finally Change the World',
        date: 'Sep 3, 2023',
        likes: 8,
        comments: 7,
        shares: 3,
      },
      {
        title: 'This Week in Search: New Limits and Exciting Features',
        date: 'Sep 16, 2023',
        likes: 4,
        comments: 7,
        shares: 2,
      },
      {
        title: 'Why UX Design Matters and How it Affects Ranking',
        date: 'Aug 19, 2023',
        likes: 2,
        comments: 0,
        shares: 0,
      },
    ],
  },

  {
    category: 'Marketing',
    categoryColor: 'bg-warning',
    link: '/blog/single',
    posts: [
      {
        title: 'Five Effective Lead Generation Techniques For Your Business',
        date: 'Sep 10, 2023',
        likes: 0,
        comments: 4,
        shares: 1,
      },
      {
        title: 'Your Guide to Optimising A JavaScript-enabled Website',
        date: '1 day ago',
        likes: 3,
        comments: 4,
        shares: 2,
      },
      {
        title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
        date: '12 hours ago',
        likes: 8,
        comments: 1,
        shares: 3,
      },
    ],
  },

  {
    category: 'Startups',
    categoryColor: 'bg-success',
    link: '/blog/single',
    posts: [
      {
        title: 'Does Brand Activism Impact Earning Potential?',
        date: 'Sep 3, 2023',
        likes: 3,
        comments: 9,
        shares: 1,
      },
      {
        title: 'The Ultimate Guide to On-Page SEO',
        date: 'Aug 19, 2023',
        likes: 8,
        comments: 4,
        shares: 2,
      },
      {
        title: 'Brand Analysis: Second Step to the Brand Identity',
        date: 'May 24, 2023',
        likes: 5,
        comments: 0,
        shares: 3,
      },
    ],
  },
];
