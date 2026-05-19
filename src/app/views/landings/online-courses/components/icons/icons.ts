import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { iconsData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'online-icons',
  imports: [SwiperDirective],
  templateUrl: './icons.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Icons {
  iconsData = iconsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView:1,
    spaceBetween: 20,
    pagination: {
      el: '#iconpagination',
      clickable: true,
    },
    breakpoints: {
      '600': {
        slidesPerView: 2,
      },
      '1000': {
        slidesPerView: 3,
      },
    },
  };
}
