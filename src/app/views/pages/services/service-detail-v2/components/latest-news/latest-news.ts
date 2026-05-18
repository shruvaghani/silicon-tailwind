import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { medicalNewsData } from '../../data';
register();

@Component({
  selector: 'service-detail-v2-latest-news',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './latest-news.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestNews {
  medicalNewsData = medicalNewsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: {
      el: '#pagination',
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
