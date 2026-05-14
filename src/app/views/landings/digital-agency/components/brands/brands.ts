import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { brandsData } from '../../data';
register();

@Component({
  selector: 'digital-agency-brands',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Brands {
  brandsData = brandsData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    navigation: {
      prevEl: '#prev-brand',
      nextEl: '#next-brand',
    },
    loop: true,
    pagination: {
      el: '#logospagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      '650': {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      '900': {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      '1100': {
        slidesPerView: 6,
        spaceBetween: 8,
      },
    },
  };
}
