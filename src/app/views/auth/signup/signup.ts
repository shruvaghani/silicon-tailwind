import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Header } from "@app/components/header/header";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-signup',
  imports: [RouterLink, Header, LucideAngularModule],
  templateUrl: './signup.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Signup {

}
