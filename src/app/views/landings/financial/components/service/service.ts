import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { servicesData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'financial-service',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './service.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Service {
  servicesData = servicesData;
   swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView:1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#servicepagination',
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
  }
}
