import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Brands } from "./components/brands/brands";
import { Features } from "./components/features/features";
import { Works } from "./components/works/works";
import { Transfer } from "./components/transfer/transfer";
import { Testimonial } from "./components/testimonial/testimonial";
import { Faq } from "./components/faq/faq";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-mobile-showcase-v1',
  imports: [Hero, Brands, Features, Works, Transfer, Testimonial, Faq, Cta],
  templateUrl: './mobile-showcase-v1.html',
  styles: ``,
})
  
export class MobileShowcaseV1 {

}
