import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { technologiesData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();
@Component({
  selector: 'software-dev-agency3-technology',
  imports: [SwiperDirective],
  templateUrl: './technology.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Technology {
  technologiesData = technologiesData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
    autoplay: true,
    breakpoints: {
      '0': {
        slidesPerView: 2,
      },
      '500': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 6,
      },
    },
    pagination: {
      el: '#technologypagination',
      clickable: true,
    },
  };
}
