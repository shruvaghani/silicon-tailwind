import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { processData } from '../../data';
import { register } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'software-dev-agency3-benefits',
  imports: [SwiperDirective],
  templateUrl: './benefits.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Benefits {
  processData = processData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
    autoplay: true,
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
      el: '#benefitpagination',
      clickable: true,
    },
  };
}
