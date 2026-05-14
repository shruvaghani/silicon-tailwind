import { isPlatformBrowser } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import lgVideo from 'lightgallery/plugins/video';
import lgZoom from 'lightgallery/plugins/zoom';
import { LightgalleryModule } from "lightgallery/angular";

@Component({
  selector: 'about-v2-gallary',
  imports: [RouterLink, LightgalleryModule],
  templateUrl: './gallary.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Gallary {
  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
    selector: 'a',
  };
}
