import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Brands } from "./components/brands/brands";
import { Trading } from "./components/trading/trading";
import { App } from "./components/app/app";
import { Feature } from "./components/feature/feature";
import { Works } from "./components/works/works";
import { Testimonial } from "./components/testimonial/testimonial";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-saas-v3',
  imports: [Hero, Brands, Trading, App, Feature, Works, Testimonial, Cta, Footer],
  templateUrl: './saas-v3.html',
  styles: ``,
})
  
export class SaasV3 {

}
