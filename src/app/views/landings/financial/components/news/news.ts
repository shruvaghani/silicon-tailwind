import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { newsData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'financial-news',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './news.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class News {
  newsData = newsData;
   swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween:16,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
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
  }
}
