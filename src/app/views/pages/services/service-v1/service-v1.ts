import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Testimonial } from "./components/testimonial/testimonial";
import { Features } from "./components/features/features";
import { ContactForm } from "./components/contact-form/contact-form";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-service-v1',
  imports: [Hero, Testimonial, Features, ContactForm, Footer],
  templateUrl: './service-v1.html',
  styles: ``,
})
export class ServiceV1 {

}
