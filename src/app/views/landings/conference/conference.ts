import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Sponsors } from "./components/sponsors/sponsors";
import { Speakers } from "./components/speakers/speakers";
import { Tickets } from "./components/tickets/tickets";
import { Highlights } from "./components/highlights/highlights";
import { Schedule } from "./components/schedule/schedule";
import { Testimonials } from "./components/testimonials/testimonials";
import { Location } from "./components/location/location";
import { CtaTicket } from "./components/cta-ticket/cta-ticket";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-conference',
  imports: [Hero, Sponsors, Speakers, Tickets, Highlights, Schedule, Testimonials, Location, CtaTicket, Footer],
  templateUrl: './conference.html',
  styles: ``,
})
export class Conference {

}
