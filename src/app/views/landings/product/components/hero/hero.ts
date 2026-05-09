import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { sliderImages } from '../../data';

register();

@Component({
  selector: 'product-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Hero implements AfterViewInit {
  sliderImages = sliderImages;

  isBrowser: boolean;

  @ViewChild('heroSwiper')
  heroSwiper!: ElementRef;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  settings = {
    counter: false,
    selector: 'a',
  };

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      const swiperEl = this.heroSwiper.nativeElement;

      Object.assign(swiperEl, {
        slidesPerView: 1,
        effect: 'coverflow',
        centeredSlides: true,
        loop: true,
        speed: 650,

        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 560,
          modifier: 1,
          slideShadows: true,
        },

        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },

        navigation: {
          prevEl: '.btn-prev',
          nextEl: '.btn-next',
        },
      });

      swiperEl.initialize();
    }
  }
}
