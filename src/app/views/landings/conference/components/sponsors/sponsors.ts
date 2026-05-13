import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { brandData } from '../../data';
register();

@Component({
  selector: 'conference-sponsors',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './sponsors.html',
  styles: ``,
})
export class Sponsors {
  brandData = brandData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: '#sponsorpagination',
      clickable: true,
    },
    breakpoints: {
      '500': { slidesPerView: 3 },
      '650': { slidesPerView: 4 },
      '900': { slidesPerView: 5 },
      '1100': { slidesPerView: 6 },
    },
  };
}
