import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { awardsData } from '../../data';
register();

@Component({
  selector: 'software-dev-agency2-awards',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './awards.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Awards {
  awardsData = awardsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    spaceBetween: 24,
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
      el: '#awardPagination',
      clickable: true,
    },
  };
}
