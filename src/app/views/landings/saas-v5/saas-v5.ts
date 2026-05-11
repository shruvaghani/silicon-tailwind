import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Cases } from "./components/cases/cases";
import { Features } from './components/features/features';
import { Video } from "./components/video/video";
import { Testimonials } from "./components/testimonials/testimonials";
import { Companies } from './components/companies/companies';
import { Development } from "./components/development/development";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-saas-v5',
  imports: [Hero, Cases, Features, Video, Testimonials, Companies, Development, Footer],
  templateUrl: './saas-v5.html',
  styles: ``,
})
  
export class SaasV5 {}
