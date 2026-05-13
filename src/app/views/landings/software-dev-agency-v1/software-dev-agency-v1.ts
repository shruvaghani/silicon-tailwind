import { Component } from '@angular/core';
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Studies } from "./components/studies/studies";
import { Features } from "./components/features/features";
import { Testimonials } from "./components/testimonials/testimonials";
import { News } from "./components/news/news";
import { Brands } from "./components/brands/brands";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-software-dev-agency-v1',
  imports: [About, Hero, Services, Studies, Features, Testimonials, News, Brands, Cta, Footer],
  templateUrl: './software-dev-agency-v1.html',
  styles: ``,
})
export class SoftwareDevAgencyV1 {

}
