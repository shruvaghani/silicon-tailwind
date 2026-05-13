import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Awards } from "./components/awards/awards";
import { Studies } from "./components/studies/studies";
import { About } from "./components/about/about";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-software-dev-agency-v2',
  imports: [Hero, Services, Awards, Studies, About, Cta, Footer],
  templateUrl: './software-dev-agency-v2.html',
  styles: ``,
})
export class SoftwareDevAgencyV2 {

}
