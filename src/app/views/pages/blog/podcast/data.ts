const avatar02 = 'assets/img/avatar/02.jpg';
const avatar03 = 'assets/img/avatar/03.jpg';
const avatar05 = 'assets/img/avatar/05.jpg';
const avatar07 = 'assets/img/avatar/07.jpg';

const avatar01 = 'assets/img/avatar/01.jpg';
const avatar04 = 'assets/img/avatar/04.jpg';
const avatar06 = 'assets/img/avatar/06.jpg';

const podcast02 = 'assets/img/blog/podcasts/02.jpg';
const podcast03 = 'assets/img/blog/podcasts/03.jpg';
const podcast04 = 'assets/img/blog/podcasts/04.jpg';
const podcast05 = 'assets/img/blog/podcasts/05.jpg';

export type CommentType = {
  name: string;
  time: string;
  image: string;
  message: string;
  replyTo?: string;
  isReply?: boolean;
};

export const commentsData: CommentType[] = [
  {
    name: 'Esther Howard',
    time: '4 mins ago',
    image: avatar03,
    message:
      'Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris. Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus.',
  },
  {
    name: 'Ralph Edwards',
    time: 'September 9 at 12:48',
    image: avatar02,
    message:
      'Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet, luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?',
  },
  {
    name: 'Albert Flores',
    time: '16 hours ago',
    image: avatar05,
    replyTo: 'Ralph Edwards',
    isReply: true,
    message:
      'Vulputate malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque. Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien sed ut tempor.',
  },
  {
    name: 'Cameron Williamson',
    time: 'March 24 at 8:20',
    image: avatar07,
    message:
      'Mattis id ut sed arcu metus elit faucibus condimentum aliquam. Nam adipiscing diam et suspendisse. Sagittis massa maecenas laoreet nulla amet nunc sagittis, pulvinar neque. Duis imperdiet ipsum suspendisse massa lectus habitasse. Id ante volutpat hendrerit augue parturient eget. Ac vitae posuere leo morbi vitae at hac lectus. Nibh neque quam quis amet mattis sit. Faucibus risus at sit tempus ut.',
  },
];

export type SocialLink = {
  icon: string;
  hoverBg: string;
};

export const socialLinksData: SocialLink[] = [
  {
    icon: 'tabler:brand-linkedin-filled',
    hoverBg: 'hover:bg-cyan-600',
  },
  {
    icon: 'tabler:brand-facebook-filled',
    hoverBg: 'hover:bg-blue-500',
  },
  {
    icon: 'tabler:brand-twitter-filled',
    hoverBg: 'hover:bg-sky-500',
  },
  {
    icon: 'tabler:brand-instagram',
    hoverBg: 'hover:bg-indigo-500',
  },
];

export type PodcastType = {
  image: string;
  podcastImage: string;
  duration: string;
  category: string;
  time: string;
  title: string;
  likes: number;
  comments: number;
  shares: number;
}

export const podcastsData: PodcastType[] = [
  {
    image: avatar06,
    podcastImage: podcast04,
    duration: '0:25:43',
    category: 'Digital',
    time: '2 hours ago',
    title: 'IOS and the Changing Landscape of Data Privacy',
    likes: 4,
    comments: 2,
    shares: 0,
  },
  {
    image: avatar05,
    podcastImage: podcast05,
    duration: '0:25:43',
    category: 'Processes & Tools',
    time: '10 hours ago',
    title: 'Behavioral Science and Digital Marketing',
    likes: 9,
    comments: 5,
    shares: 6,
  },
  {
    image: avatar01,
    podcastImage: podcast02,
    duration: '0:25:43',
    category: 'Technology',
    time: '10 hours ago',
    title: 'Why You Should Care About Your Competitors',
    likes: 45,
    comments: 12,
    shares: 6,
  },
  {
    image: avatar04,
    podcastImage: podcast03,
    duration: '0:48:02',
    category: 'Marketing',
    time: '1 day ago',
    title: 'Tips for Marketing Managers: How to Maximise Leads',
    likes: 10,
    comments: 4,
    shares: 6,
  },
];