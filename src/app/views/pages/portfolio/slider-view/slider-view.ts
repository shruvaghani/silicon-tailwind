import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Footer } from '@app/components/footer/footer';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { portfolioProjectsData } from './data';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slider-view',
  imports: [Footer, RouterLink, LucideAngularModule],
  templateUrl: './slider-view.html',
  styles: ``,
})
export class SliderView {
  portfolioProjectsData = portfolioProjectsData;
  @ViewChild('workSwiper', { static: true })
  workSwiper!: ElementRef;

  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
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

    const activeTab = document.querySelector(`#project-${index + 1}`);

    if (activeTab) {
      activeTab.classList.remove('hidden');
      activeTab.classList.add('active');
    }
  }
}
