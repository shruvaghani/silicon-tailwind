import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Service } from "./components/service/service";
import { Industries } from "./components/industries/industries";
import { ContactForm } from "./components/contact-form/contact-form";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-service-v2',
  imports: [Service, Industries, ContactForm, Hero, Footer],
  templateUrl: './service-v2.html',
  styles: ``,
})
export class ServiceV2 {

}
