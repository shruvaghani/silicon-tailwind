import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Email } from "./components/email/email";
import { Faq } from "./components/faq/faq";
import { Footer2 } from "@app/components/footer2/footer2";

@Component({
  selector: 'app-contact-v1',
  imports: [Hero, Email, Faq, Footer2],
  templateUrl: './contact-v1.html',
  styles: ``,
})
export class ContactV1 {

}
