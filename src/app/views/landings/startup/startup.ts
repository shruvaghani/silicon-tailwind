import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { UserFriendly } from "./components/user-friendly/user-friendly";
import { Works } from "./components/works/works";
import { Cta } from "./components/cta/cta";
import { Registration } from "./components/registration/registration";
import { Benefits } from "./components/benefits/benefits";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-startup',
  imports: [Hero, Features, UserFriendly, Works, Cta, Registration, Benefits, Footer],
  templateUrl: './startup.html',
  styles: ``,
})
export class Startup {

}
