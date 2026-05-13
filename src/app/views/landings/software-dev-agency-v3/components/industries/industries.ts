import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element';
import { Navigation } from 'swiper/modules';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { industriesData } from '../../data';
register();

@Component({
  selector: 'software-dev-agency3-industries',
  imports: [RouterLink],
  templateUrl: './industries.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Industries {
  industriesData = industriesData;
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

    const activeTab = document.querySelector(`#industry-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
