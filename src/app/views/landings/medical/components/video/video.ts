import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom'
import lgVideo from 'lightgallery/plugins/video'
import { LightgalleryModule } from 'lightgallery/angular'

@Component({
  selector: 'medical-video',
  imports: [LightgalleryModule],
  templateUrl: './video.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Video {
  isBrowser = false;

  settings = {
    counter: false,
    download: false,
    plugins: [lgVideo],
    selector: 'a',
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
}
