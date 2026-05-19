import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { categoryCardData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'saas-v5-cases',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './cases.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cases {
  categoryCardData = categoryCardData;
   swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 2,
      },
      '960': {
        slidesPerView: 3,
      },
    },
  }
}
