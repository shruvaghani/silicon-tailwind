import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Stats } from "./components/stats/stats";
import { Gallary } from "./components/gallary/gallary";
import { BrandSwiper } from "./components/brand-swiper/brand-swiper";
import { Testimonial } from "./components/testimonial/testimonial";
import { Leaders } from "./components/leaders/leaders";
import { Contact } from "./components/contact/contact";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-about-v2',
  imports: [Hero, About, Breadcrumb, Stats, Gallary, BrandSwiper, Testimonial, Leaders, Contact, Footer],
  templateUrl: './about-v2.html',
  styles: ``,
})
export class AboutV2 {

}
