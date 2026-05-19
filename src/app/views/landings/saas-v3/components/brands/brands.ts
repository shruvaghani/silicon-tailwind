import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { brandData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

@Component({
  selector: 'saas-v3-brands',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Brands {
  brandData = brandData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,

    pagination: {
      el: '#brandspagination',
      clickable: true,
    },
    breakpoints: {
      '500': { slidesPerView: 3, spaceBetween: 8 },
      '650': { slidesPerView: 4, spaceBetween: 8 },
      '850': { slidesPerView: 5, spaceBetween: 8 },
      '992': { slidesPerView: 6, spaceBetween: 8 },
    },
  };
}
