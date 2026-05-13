import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { eventStatsData } from '../../data';
import lgVideo from 'lightgallery/plugins/video';
import { LightgalleryModule } from 'lightgallery/angular';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'conference-highlights',
  imports: [LightgalleryModule],
  templateUrl: './highlights.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Highlights {
  eventStatsData = eventStatsData;
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
