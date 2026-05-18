import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { teamData } from '../../data';
register();

@Component({
  selector: 'service-detail-v2-team',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './team.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Team {
  teamData = teamData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    breakpoints: {
      '500': { slidesPerView: 2 },
      '700': { slidesPerView: 3 },
      '991': { slidesPerView: 4 },
    },
  };
}
