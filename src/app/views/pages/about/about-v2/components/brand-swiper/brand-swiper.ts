import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { brandsData } from '../../data';

@Component({
  selector: 'about-v2-brand-swiper',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './brand-swiper.html',
  styles: ``,
})
export class BrandSwiper {
  brandsData = brandsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    breakpoints: {
      '375': {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      '1440': {
        slidesPerView: 6,
        spaceBetween: 16,
      },
    },
  };
}
