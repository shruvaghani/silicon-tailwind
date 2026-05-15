import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';
import { BlogCta } from '@app/components/blog-cta/blog-cta';
import { Footer } from '@app/components/footer/footer';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from '@angular/common';

const blogImg1 = 'assets/img/blog/01.jpg';
const blogImg2 = 'assets/img/blog/06.jpg';
const blogImg3 = 'assets/img/blog/05.jpg';
const blogImg4 = 'assets/img/blog/09.jpg';
const blogImg5 = 'assets/img/blog/03.jpg';
const blogImg6 = 'assets/img/blog/02.jpg';

const avatar1 = 'assets/img/avatar/01.jpg';
const avatar2 = 'assets/img/avatar/02.jpg';
const avatar4 = 'assets/img/avatar/04.jpg';
const avatar5 = 'assets/img/avatar/05.jpg';

type BlogPostType = {
  category: string;
  date: string;
  title: string;
  description: string;
  blogImage: string;
  author: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
};

@Component({
  selector: 'app-list-no-sidebar',
  imports: [Breadcrumb, BlogCta, Footer, RouterLink, LucideAngularModule,CommonModule],
  templateUrl: './list-no-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListNoSidebar {
  blogPostsData: BlogPostType[] = [
    {
      category: 'Processes & Tools',
      date: 'Sep 3, 2023',
      title: '5 Bad Landing Page Examples & How We Would Fix Them',
      description:
        'Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.',
      blogImage: blogImg1,
      author: {
        name: 'Jerome Bell',
        avatar: avatar1,
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
      blogImage: blogImg2,
      author: {
        name: 'Albert Flores',
        avatar: avatar5,
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
      blogImage: blogImg3,
      author: {
        name: 'Jane Cooper',
        avatar: avatar4,
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
      blogImage: blogImg4,
      author: {
        name: 'Ralph Edwards',
        avatar: avatar2,
      },
      stats: {
        likes: 8,
        comments: 7,
        shares: 4,
      },
    },
    {
      category: 'Business',
      date: 'Sep 16, 2023',
      title: 'This Week in Search: New Limits and Exciting Features',
      description:
        'Aliquet donec cras amet orci in in neque. Ut sed diam quis consectetur purus lorem eu, sit. Aliquam eget arcu sed urna feugiat. In integer nisl at dui malesuada. Diam pellentesque lobortis elementum lacus at in lectus.',
      blogImage: blogImg5,
      author: {
        name: 'Ralph Edwards',
        avatar: avatar2,
      },
      stats: {
        likes: 5,
        comments: 8,
        shares: 4,
      },
    },
    {
      category: 'Digital',
      date: 'Aug 19, 2023',
      title: 'Why UX Design Matters and How it Affects Ranking',
      description:
        'In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique. Adipiscing dui orci ac purus lacus.',
      blogImage: blogImg6,
      author: {
        name: 'Jerome Bell',
        avatar: avatar1,
      },
      stats: {
        likes: 5,
        comments: 3,
        shares: 9,
      },
    },
  ];
}
