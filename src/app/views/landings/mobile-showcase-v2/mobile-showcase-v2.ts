import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Crypto } from "./components/crypto/crypto";
import { Feature } from "./components/feature/feature";
import { WorkSlider } from "./components/work-slider/work-slider";
import { Cta } from "./components/cta/cta";
import { Testimonials } from "./components/testimonials/testimonials";
import { Info } from "./components/info/info";

@Component({
  selector: 'app-mobile-showcase-v2',
  imports: [Hero, Crypto, Feature, WorkSlider, Cta, Testimonials, Info],
  templateUrl: './mobile-showcase-v2.html',
  styles: ``,
})
export class MobileShowcaseV2 {

}
