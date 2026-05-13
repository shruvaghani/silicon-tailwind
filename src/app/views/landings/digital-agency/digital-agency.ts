import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Benefits } from "./components/benefits/benefits";
import { ProjectFeature } from "./components/project-feature/project-feature";
import { Services } from "./components/services/services";
import { Testimonial } from "./components/testimonial/testimonial";
import { Brands } from "./components/brands/brands";
import { Atmosphere } from "./components/atmosphere/atmosphere";
import { Blog } from "./components/blog/blog";
import { Awards } from "./components/awards/awards";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-digital-agency',
  imports: [Hero, Benefits, ProjectFeature, Services, Testimonial, Brands, Atmosphere, Blog, Awards, Footer],
  templateUrl: './digital-agency.html',
  styles: ``,
})
export class DigitalAgency {

}
