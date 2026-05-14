import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';
import { LucideAngularModule } from 'lucide-angular';
import { LightgalleryModule } from 'lightgallery/angular';
import lgZoom from 'lightgallery/plugins/zoom'
import { AnimationItem } from 'lottie-web';
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'digital-agency-hero',
  imports: [RouterLink, LottieComponent, LucideAngularModule,LightgalleryModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  options: AnimationOptions | null = null;

  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.options = {
        path: `assets/json/animation-digital-agency.json`,
      };
    }
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
  
  animationCreated(animationItem: AnimationItem): void {
    animationItem.setSpeed(1.25)
    animationItem.loop = true
  }
}
