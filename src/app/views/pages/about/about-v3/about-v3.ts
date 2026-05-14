import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Story } from "./components/story/story";
import { Locations } from "./components/locations/locations";
import { Team } from "./components/team/team";
import { Stats } from "./components/stats/stats";
import { Testimonial } from "./components/testimonial/testimonial";
import { CTA } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-about-v3',
  imports: [Hero, Story, Locations, Team, Stats, Testimonial, CTA, Footer],
  templateUrl: './about-v3.html',
  styles: ``,
})
export class AboutV3 {

}
