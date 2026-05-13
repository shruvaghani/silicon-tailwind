import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { servicesData } from '../../data';
register();

@Component({
  selector: 'software-dev-agency3-solution',
  imports: [SwiperDirective],
  templateUrl: './solution.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Solution {
  servicesData = servicesData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: '24',
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
    pagination: {
      el: '#solutionPagination',
      clickable: true,
    },
  };
}
