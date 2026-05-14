import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video'
import lgZoom from 'lightgallery/plugins/zoom'
import { LightgalleryModule } from "lightgallery/angular";
@Component({
  selector: 'about-v1-video-reel',
  imports: [LightgalleryModule],
  templateUrl: './video-reel.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class VideoReel {
 isBrowser: boolean
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId)
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  }
}
