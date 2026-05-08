import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';

@Component({
  selector: 'mobile-showcase-v3-works',
  imports: [],
  templateUrl: './works.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Works implements AfterViewInit {
  @ViewChild('workSwiper', { static: true })
  workSwiper!: ElementRef;

  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '#stepsPagination',
      type: 'fraction',
    },

    navigation: {
      prevEl: '#prev-screen',
      nextEl: '#next-screen',
    },
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const swiper = new Swiper(this.workSwiper.nativeElement, this.swiperConfig);

      this.updateActiveTab(swiper.realIndex);

      swiper.on('slideChange', () => {
        this.updateActiveTab(swiper.realIndex);
      });
    }
  }

  updateActiveTab(index: number): void {
    document.querySelectorAll('.swiper-tab').forEach((tab) => {
      tab.classList.add('hidden');
      tab.classList.remove('active');
    });

    const activeTab = document.querySelector(`#screen-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
