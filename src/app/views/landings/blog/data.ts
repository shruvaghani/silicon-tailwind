const blogImg1 = 'assets/img/blog/01.jpg'
const blogImg2 = 'assets/img/blog/02.jpg'
const blogImg3 = 'assets/img/blog/03.jpg'
const blogImg4 = 'assets/img/blog/04.jpg'
const blogImg5 = 'assets/img/blog/05.jpg'
const blogImg6 = 'assets/img/blog/06.jpg'
const blogImg7 = 'assets/img/blog/07.jpg'

const avatar1 = 'assets/img/avatar/01.jpg'
const avatar2 = 'assets/img/avatar/02.jpg'
const avatar3 = 'assets/img/avatar/03.jpg'
const avatar4 = 'assets/img/avatar/04.jpg'
const avatar5 = 'assets/img/avatar/05.jpg'
const avatar6 = 'assets/img/avatar/06.jpg'

const blogImg9 = 'assets/img/blog/09.jpg'

const avatar8 = 'assets/img/avatar/08.jpg'

const avatar01 = 'assets/img/avatar/01.jpg'
const avatar04 = 'assets/img/avatar/04.jpg'
const avatar05 = 'assets/img/avatar/05.jpg'
const avatar06 = 'assets/img/avatar/06.jpg'

const podcast02 = 'assets/img/blog/podcasts/02.jpg'
const podcast03 = 'assets/img/blog/podcasts/03.jpg'
const podcast04 = 'assets/img/blog/podcasts/04.jpg'
const podcast05 = 'assets/img/blog/podcasts/05.jpg'

export type BlogType = {
  category: string;
  date: string;
  title: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
}

export const blogData: BlogType[] = [
  {
    category: 'Digital',
    date: '1 day ago',
    title: 'Mobile App Generates Data for the Energy Management',
    likes: 8,
    comments: 4,
    shares: 2,
    link: '/blog/single',
  },
  {
    category: 'Business',
    date: 'May 24, 2023',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    likes: 2,
    comments: 0,
    shares: 3,
    link: '/blog/single',
  },
  {
    category: 'Digital',
    date: 'May 25, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    likes: 5,
    comments: 0,
    shares: 2,
    link: '/blog/single',
  },
  {
    category: 'Technology',
    date: 'May 26, 2023',
    title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
    likes: 7,
    comments: 4,
    shares: 1,
    link: '/blog/single',
  },
  {
    category: 'Startups',
    date: 'May 27, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    likes: 5,
    comments: 3,
    shares: 9,
    link: '/blog/single',
  },
  {
    category: 'Web',
    date: 'May 28, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    likes: 3,
    comments: 5,
    shares: 2,
    link: '/blog/single',
  },
];

export type PostType = {
  category: string
  date: string
  title: string
  blogImage: string
  author: string
  authorImage: string
}

export const postData: PostType[] = [
  {
    category: 'Web design',
    date: 'May 19, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    blogImage: blogImg1,
    author: 'Annette Black',
    authorImage: avatar6,
  },
  {
    category: 'Digital',
    date: 'Sep 28, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    blogImage: blogImg2,
    author: 'Jerome Bell',
    authorImage: avatar1,
  },
  {
    category: 'Business',
    date: 'Sep 16, 2023',
    title: 'This Week in Search: New Limits and Exciting Features',
    blogImage: blogImg3,
    author: 'Ralph Edwards',
    authorImage: avatar2,
  },
  {
    category: 'Processes & Tools',
    date: '12 hours ago',
    title: 'Five Effective Lead Generation Techniques For Your Business',
    blogImage: blogImg4,
    author: 'Esther Howard',
    authorImage: avatar3,
  },
  {
    category: 'Digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    blogImage: blogImg5,
    author: 'Jane Cooper',
    authorImage: avatar4,
  },
  {
    category: 'Marketing',
    date: 'Apr 2, 2023',
    title: 'How Agile is Your Forecasting Process?',
    blogImage: blogImg6,
    author: 'Albert Flores',
    authorImage: avatar5,
  },
  {
    category: 'Processes & Tools',
    date: 'Sep 3, 2023',
    title: 'Your Guide to Optimising A JavaScript-enabled Website',
    blogImage: blogImg7,
    author: 'Ralph Edwards',
    authorImage: avatar2,
  },
]

export type BlogTabItem = {
  id: string
  tabId: string
  controls: string
  label: string
  active?: boolean
}

export const blogTabsData: BlogTabItem[] = [
  {
    id: 'post-1',
    tabId: '#blog-1',
    controls: 'blog-1',
    label: 'All Topics',
    active: true,
  },
  {
    id: 'post-2',
    tabId: '#blog-2',
    controls: 'blog-2',
    label: 'Digital',
  },
  {
    id: 'post-3',
    tabId: '#blog-3',
    controls: 'blog-3',
    label: 'Marketing',
  },
  {
    id: 'post-4',
    tabId: '#blog-4',
    controls: 'blog-4',
    label: 'Success Stories',
  },
  {
    id: 'post-5',
    tabId: '#blog-5',
    controls: 'blog-5',
    label: 'Startups',
  },
  {
    id: 'post-6',
    tabId: '#blog-6',
    controls: 'blog-6',
    label: 'Events',
  },
  {
    id: 'post-7',
    tabId: '#blog-7',
    controls: 'blog-7',
    label: 'Technology',
  },
  {
    id: 'post-8',
    tabId: '#blog-8',
    controls: 'blog-8',
    label: 'Business',
  },
  {
    id: 'post-9',
    tabId: '#blog-9',
    controls: 'blog-9',
    label: 'Processes & Tools',
  },
]

export interface BlogStats {
  likes: number
  comments: number
  shares: number
}

export interface BlogAuthor {
  name: string
  role?: string
  image: string
}

export interface BlogListItem {
  category: string
  date: string
  title: string
  description: string
  image: string
  author: BlogAuthor
  stats: BlogStats
}

export const blogListData: BlogListItem[] = [
  {
    category: 'Processes & Tools',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    description:
      'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
    image: blogImg1,
    author: {
      name: 'Annette Black',
      role: 'Product Manager',
      image: avatar8,
    },
    stats: {
      likes: 8,
      comments: 7,
      shares: 4,
    },
  },
  {
    category: 'Startups',
    date: 'Sep 10, 2023',
    title: 'How Agile is Your Forecasting Process?',
    description:
      'Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.',
    image: blogImg6,
    author: {
      name: 'Albert Flores',
      image: avatar5,
    },
    stats: {
      likes: 3,
      comments: 6,
      shares: 0,
    },
  },
  {
    category: 'Digital',
    date: 'Oct 9, 2023',
    title: 'Inclusive Marketing: Why and How Does it Work?',
    description:
      'Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.',
    image: blogImg5,
    author: {
      name: 'Jane Cooper',
      image: avatar4,
    },
    stats: {
      likes: 5,
      comments: 0,
      shares: 2,
    },
  },
  {
    category: 'Strategy',
    date: 'Sep 3, 2023',
    title: 'This Long-Awaited Technology May Finally Change the World',
    description:
      'Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.',
    image: blogImg9,
    author: {
      name: 'Ralph Edwards',
      image: avatar2,
    },
    stats: {
      likes: 8,
      comments: 7,
      shares: 4,
    },
  },
]

export type PodcastType = {
  avatar: string
  podcastImage: string
  duration: string
  category: string
  timeAgo: string
  title: string
  likes: number
  comments: number
  shares: number
}

export const podcastsData: PodcastType[] = [
  {
    avatar: avatar06,
    podcastImage: podcast04,
    duration: '0:25:43',
    category: 'Digital',
    timeAgo: '2 hours ago',
    title: 'IOS and the Changing Landscape of Data Privacy',
    likes: 4,
    comments: 2,
    shares: 0,
  },
  {
    avatar: avatar05,
    podcastImage: podcast05,
    duration: '0:25:43',
    category: 'Processes & Tools',
    timeAgo: '10 hours ago',
    title: 'Behavioral Science and Digital Marketing',
    likes: 9,
    comments: 5,
    shares: 6,
  },
  {
    avatar: avatar01,
    podcastImage: podcast02,
    duration: '0:25:43',
    category: 'Technology',
    timeAgo: '10 hours ago',
    title: 'Why You Should Care About Your Competitors',
    likes: 45,
    comments: 12,
    shares: 6,
  },
  {
    avatar: avatar04,
    podcastImage: podcast03,
    duration: '0:48:02',
    category: 'Marketing',
    timeAgo: '1 day ago',
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    likes: 10,
    comments: 4,
    shares: 6,
  },
]