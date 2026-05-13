import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { caseStudyData } from '../../data';
register();

@Component({
  selector: 'software-dev-agency2-studies',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './studies.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Studies {
  caseStudyData = caseStudyData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
    breakpoints: {
      '0': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: '#studypagination',
      clickable: true,
    },
  };
}
