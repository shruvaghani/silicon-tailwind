const avatar19 = 'assets/img/avatar/19.jpg';
const avatar20 = 'assets/img/avatar/20.jpg';
const avatar21 = 'assets/img/avatar/21.jpg';
const avatar22 = 'assets/img/avatar/22.jpg';
const avatar23 = 'assets/img/avatar/23.jpg';
const avatar24 = 'assets/img/avatar/24.jpg';
const avatar25 = 'assets/img/avatar/25.jpg';
const avatar26 = 'assets/img/avatar/26.jpg';
const avatar27 = 'assets/img/avatar/27.jpg';
const avatar28 = 'assets/img/avatar/28.jpg';
const avatar29 = 'assets/img/avatar/29.jpg';

export type ChatListType = {
  name: string;
  message: string;
  time: string;
  image: string;
  alt: string;
  active?: boolean;
  typing?: boolean;
};

export const chatListData: ChatListType[] = [
  {
    name: 'Devon Lane',
    message: 'Dolor, quam habitant...',
    time: '18:02',
    image: avatar19,
    alt: 'Devon Lane',
  },
  {
    name: 'Albert Flores',
    message: 'You are welcome 😊',
    time: '17:33',
    image: avatar20,
    alt: 'Albert Flores',
    active: true,
  },
  {
    name: 'Bessie Cooper',
    message: 'Typing...',
    time: '12:04',
    image: avatar21,
    alt: 'Bessie Cooper',
    typing: true,
  },
  {
    name: 'Ronald Richards',
    message: 'Ok 👌',
    time: '08:00',
    image: avatar22,
    alt: 'Ronald Richards',
  },
  {
    name: 'Robert Fox',
    message: 'Praesent ut mi.',
    time: '14 Nov',
    image: avatar23,
    alt: 'Robert Fox',
  },
  {
    name: 'Jerome Bell',
    message: 'In pretium a eget nunc...',
    time: '8 Oct',
    image: avatar24,
    alt: 'Jerome Bell',
  },
  {
    name: 'Kathryn Murphy',
    message: 'Tempor amet?',
    time: '16 Sep',
    image: avatar25,
    alt: 'Kathryn Murphy',
  },
  {
    name: 'Dianne Russell',
    message: 'Vehicula accumsan leo.',
    time: '27 Aug',
    image: avatar26,
    alt: 'Dianne Russell',
  },
  {
    name: 'Cody Fisher',
    message: 'Erat cum amet viverra...',
    time: '18 Aug',
    image: avatar27,
    alt: 'Cody Fisher',
  },
  {
    name: 'Darlene Robertson',
    message: 'Orci convallis eget sit...',
    time: '13 Jul',
    image: avatar28,
    alt: 'Darlene Robertson',
  },
];

export type ChatMessage = {
  sender: 'receiver' | 'sender';
  messages: string[];
  time: string;
  image: string;
  date?: string;
  seen?: boolean;
  delivered?: boolean;
};

export const chatMessages: ChatMessage[] = [
  {
    date: 'November 27, 2023',
    sender: 'receiver',
    messages: ['Tellus, ipsum, commodo, dui ac. Ultrices mi arcu orci aliquam et.'],
    time: '09:04 am',
    image: avatar20,
  },
  {
    sender: 'sender',
    messages: ['Orci convallis eget sit ultricies rutrum.'],
    time: '10:36 am',
    image: avatar29,
    seen: true,
  },
  {
    sender: 'receiver',
    messages: [
      'Blandit tempus, erat cum amet viverra pharetra, morbi. Vivamus pretium tristique amet, nulla aenean sed blandit?',
    ],
    time: '14:48 pm',
    image: avatar20,
  },
  {
    sender: 'sender',
    messages: [
      'Vel enim lacus, ac, fermentum, id. Aliquet faucibus pellentesque egestas.',
      'Thank you!',
    ],
    time: '16:29 pm',
    image: avatar29,
    delivered: true,
  },
  {
    date: 'November 28, 2023',
    sender: 'receiver',
    messages: ['You are welcome 😊'],
    time: '17:33 pm',
    image: avatar20,
  },
];
