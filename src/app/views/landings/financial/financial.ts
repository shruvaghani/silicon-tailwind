import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Service } from "./components/service/service";
import { Banner } from "./components/banner/banner";
import { Features } from "./components/features/features";
import { Industries } from "./components/industries/industries";
import { Brands } from "./components/brands/brands";
import { Testimonials } from "./components/testimonials/testimonials";
import { News } from "./components/news/news";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-financial',
  imports: [Hero, Service, Banner, Features, Industries, Brands, Testimonials, News, Contact, Footer],
  templateUrl: './financial.html',
  styles: ``,
})
export class Financial {

}
