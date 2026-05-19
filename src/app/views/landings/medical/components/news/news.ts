import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { newsData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'medical-news',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './news.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {
  newsData = newsData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    navigation: {
      prevEl: '#prev-news',
      nextEl: '#next-news',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  };
}
