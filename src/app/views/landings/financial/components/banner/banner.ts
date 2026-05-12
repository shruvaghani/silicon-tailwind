import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'financial-banner',
  imports: [RouterLink,LottieComponent],
  templateUrl: './banner.html',
  styles: ``,
})
export class Banner {
  isBrowser = true
  options: AnimationOptions | null = null
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId)

    if (this.isBrowser) {
      this.options = {
        path: `assets/json/animation-financial-landing.json`,
      }
    }
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '416px',
    margin: '0 auto',
  }
}
