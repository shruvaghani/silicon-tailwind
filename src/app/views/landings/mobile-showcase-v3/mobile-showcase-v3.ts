import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Integrations } from "./components/integrations/integrations";
import { Features } from "./components/features/features";
import { Works } from "./components/works/works";
import { Video } from "./components/video/video";
import { Benefits } from "./components/benefits/benefits";
import { Testimonial } from "./components/testimonial/testimonial";
import { Award } from "./components/award/award";
import { DownloadApp } from "./components/download-app/download-app";

@Component({
  selector: 'app-mobile-showcase-v3',
  imports: [Hero, Integrations, Features, Works, Video, Benefits, Testimonial, Award, DownloadApp],
  templateUrl: './mobile-showcase-v3.html',
  styles: ``,
})
export class MobileShowcaseV3 {

}
