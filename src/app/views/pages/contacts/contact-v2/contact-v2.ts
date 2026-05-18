import { Component } from '@angular/core';
import { ContactForm } from "./components/contact-form/contact-form";
import { Branches } from "./components/branches/branches"
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-contact-v2',
  imports: [ContactForm, Branches, Footer],
  templateUrl: './contact-v2.html',
  styles: ``,
})
export class ContactV2 {

}
