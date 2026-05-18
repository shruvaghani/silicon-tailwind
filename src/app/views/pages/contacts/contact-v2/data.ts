export type ContactType = {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
};

export const contactData: ContactType[] = [
  {
    title: 'Email us',
    description: 'Please feel free to drop us a line. We will respond as soon as possible.',
    buttonText: 'Leave a message',
    icon: 'mail',
  },
  {
    title: 'Careers',
    description: 'Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.',
    buttonText: 'Send an application',
    icon: 'users-round',
  },
];

export type MedicalCenterType = {
  title: string;
  address: string;
  phone: string;
  timings: {
    days: string;
    time: string;
  }[];
};

export const medicalCentersData: MedicalCenterType[] = [
  {
    title: 'Medical Center 1',
    address: '445 Bayshor Blvd, San Francisco, CA 94124',
    phone: '(406) 555-0120',
    timings: [
      {
        days: 'Mon – Fri:',
        time: '9:00 am – 22:00 pm',
      },
      {
        days: 'Sat – Sun:',
        time: '9:00 am – 20:00 pm',
      },
    ],
  },
  {
    title: 'Medical Center 2',
    address: '2464 Royal Ln. Mesa, New Jersey 45463',
    phone: '(406) 544-0123',
    timings: [
      {
        days: 'Mon – Fri:',
        time: '9:00 am – 22:00 pm',
      },
      {
        days: 'Sat – Sun:',
        time: '9:00 am – 20:00 pm',
      },
    ],
  },
];

export type SocialType = {
  icon: string;
  ariaLabel: string;
  hoverClass: string;
  iconClass: string;
};

export const socialLinksData: SocialType[] = [
  {
    icon: 'facebook',
    ariaLabel: 'Facebook',
    hoverClass: 'hover:bg-blue-500',
    iconClass:
      'fill-default-600 text-default-600 size-4 group-hover:fill-white group-hover:text-white',
  },
  {
    icon: 'instagram',
    ariaLabel: 'Instagram',
    hoverClass: 'hover:bg-indigo-500',
    iconClass: 'text-default-600 size-4 group-hover:text-white',
  },
  {
    icon: 'twitter',
    ariaLabel: 'Twitter',
    hoverClass: 'hover:bg-sky-500',
    iconClass:
      'fill-default-600 text-default-600 size-4 group-hover:fill-white group-hover:text-white',
  },
  {
    icon: 'youtube',
    ariaLabel: 'YouTube',
    hoverClass: 'hover:bg-danger',
    iconClass: 'text-default-600 size-4 group-hover:text-white',
  },
];
