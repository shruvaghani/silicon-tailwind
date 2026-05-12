import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import Swiper from 'swiper';
import { ctaSlidesData, ctaImagesData, type CtaSlide, type CtaImage } from '../../data';
import { isPlatformBrowser } from '@angular/common';

register();

@Component({
  selector: 'medical-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Cta {
  ctaSlidesData = ctaSlidesData;
  ctaImagesData = ctaImagesData;
  @ViewChild('workSwiper', { static: true })
  workSwiper!: ElementRef;

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    autoHeight: true,
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

    const activeTab = document.querySelector(`#image-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
