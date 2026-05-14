import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component } from '@angular/core';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { featureItemsData } from '../../data';
register();
@Component({
  selector: 'digital-agency-benefits',
  imports: [SwiperDirective],
  templateUrl: './benefits.html',
  styles: ``,
})
export class Benefits {
  featureItemsData = featureItemsData;
  swiperCongfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '#pagination2',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '991': {
        slidesPerView: 3,
      },
    },
  };
}
