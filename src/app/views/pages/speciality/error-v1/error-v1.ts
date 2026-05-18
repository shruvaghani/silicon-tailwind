import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Header } from "@app/components/header/header";
import { LucideAngularModule } from "lucide-angular";
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-error-v1',
  imports: [Header, LucideAngularModule, LottieComponent, RouterLink],
  templateUrl: './error-v1.html',
  styles: ``,
})
export class ErrorV1 {
  options: AnimationOptions | null = null
  isBrowser = true
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId)

    if (this.isBrowser) {
      this.options = {
        path: `assets/json/animation-404-v1.json`,
        loop: true,
      }
    }
  }
}
