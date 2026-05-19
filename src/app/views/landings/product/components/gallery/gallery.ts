import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Autoplay, FreeMode } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'product-gallery',
  imports: [SwiperDirective],
  templateUrl: './gallery.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Gallery {
  swiperConfig: SwiperOptions = {
    modules: [FreeMode, Autoplay],
    loop: true,
    grabCursor: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    speed: 38000,
    breakpoints: {
      '0': {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      '500': {
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  };
}
