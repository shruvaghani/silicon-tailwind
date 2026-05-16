import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'service-v1-contact-form',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './contact-form.html',
  styles: ``,
})
export class ContactForm {

}
