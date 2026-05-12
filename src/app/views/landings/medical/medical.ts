import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { FeatureIcon, } from "./components/feature-icon/feature-icon";
import { Video } from "./components/video/video";
import { Services } from "./components/services/services";
import { Team } from "./components/team/team";
import { Testimonials } from "./components/testimonials/testimonials";
import { Cta } from "./components/cta/cta";
import { News } from "./components/news/news";
import { Contacts } from "./components/contacts/contacts";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-medical',
  imports: [Hero, FeatureIcon, Video, Services, Team, Testimonials, Cta, News, Contacts, Footer],
  templateUrl: './medical.html',
  styles: ``,
})
export class Medical {

}
