import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { blogItemsData } from '../../data';
import { RouterLink } from "@angular/router";

register();
@Component({
  selector: 'software-dev-agency1-news',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './news.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {
  blogItemsData = blogItemsData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: '#news-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '560': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  };
}
