import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { teamMembersData } from '../../data';
register();
@Component({
  selector: 'about-v2-leaders',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './leaders.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Leaders {
  teamMembersData = teamMembersData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 8,
    loop: true,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '480': {
        slidesPerView: 2,
      },
      '700': {
        slidesPerView: 3,
      },
      '900': {
        slidesPerView: 4,
      },
      '1160': {
        slidesPerView: 5,
      },
      '1500': {
        slidesPerView: 6,
      },
    },
  };
}
