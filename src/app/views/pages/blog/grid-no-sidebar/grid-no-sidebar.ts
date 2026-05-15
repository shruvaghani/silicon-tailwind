import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';
import { BlogCta } from '@app/components/blog-cta/blog-cta';
import { Footer } from '@app/components/footer/footer';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

const blog1 = 'assets/img/blog/01.jpg';
const blog2 = 'assets/img/blog/02.jpg';
const blog3 = 'assets/img/blog/03.jpg';
const blog4 = 'assets/img/blog/04.jpg';
const blog5 = 'assets/img/blog/05.jpg';
const blog6 = 'assets/img/blog/06.jpg';
const blog7 = 'assets/img/blog/07.jpg';
const blog8 = 'assets/img/blog/08.jpg';
const blog9 = 'assets/img/blog/09.jpg';

const avatar1 = 'assets/img/avatar/01.jpg';
const avatar2 = 'assets/img/avatar/02.jpg';
const avatar3 = 'assets/img/avatar/03.jpg';
const avatar4 = 'assets/img/avatar/04.jpg';
const avatar5 = 'assets/img/avatar/05.jpg';

export type BlogPostType = {
  image: string;
  category: string;
  date: string;
  title: string;
  author: string;
  avatar: string;
};

@Component({
  selector: 'app-grid-no-sidebar',
  imports: [Breadcrumb, BlogCta, Footer, RouterLink, LucideAngularModule],
  templateUrl: './grid-no-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GridNoSidebar {
  blogPostsData: BlogPostType[] = [
    {
      image: blog1,
      category: 'Business',
      date: 'May 19, 2023',
      title: '5 Bad Landing Page Examples & How We Would Fix Them',
      author: 'Jerome Bell',
      avatar: avatar1,
    },
    {
      image: blog2,
      category: 'Digital',
      date: 'Sep 28, 2023',
      title: 'Why UX Design Matters and How it Affects Ranking',
      author: 'Jerome Bell',
      avatar: avatar1,
    },
    {
      image: blog3,
      category: 'Business',
      date: 'Sep 16, 2023',
      title: 'This Week in Search: New Limits and Exciting Features',
      author: 'Ralph Edwards',
      avatar: avatar2,
    },
    {
      image: blog4,
      category: 'Processes & Tools',
      date: '12 hours ago',
      title: 'Five Effective Lead Generation Techniques For Your Business',
      author: 'Esther Howard',
      avatar: avatar3,
    },
    {
      image: blog5,
      category: 'Digital',
      date: 'Oct 9, 2023',
      title: 'Inclusive Marketing: Why and How Does it Work?',
      author: 'Jane Cooper',
      avatar: avatar4,
    },
    {
      image: blog6,
      category: 'Marketing',
      date: 'Apr 2, 2023',
      title: 'How Agile is Your Forecasting Process?',
      author: 'Albert Flores',
      avatar: avatar5,
    },
    {
      image: blog7,
      category: 'Processes & Tools',
      date: 'Sep 3, 2023',
      title: 'Your Guide to Optimising A JavaScript-enabled Website',
      author: 'Ralph Edwards',
      avatar: avatar2,
    },
    {
      image: blog8,
      category: 'Processes & Tools',
      date: 'Sep 10, 2023',
      title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
      author: 'Esther Howard',
      avatar: avatar3,
    },
    {
      image: blog9,
      category: 'Strategy',
      date: 'Sep 16, 2023',
      title: 'This Long-Awaited Technology May Finally Change the World',
      author: 'Ralph Edwards',
      avatar: avatar2,
    },
  ];
}
