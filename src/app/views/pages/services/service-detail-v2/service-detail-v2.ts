import { Component } from '@angular/core';
import { Breadcrum } from "./components/breadcrum/breadcrum";
import { Hero } from "./components/hero/hero";
import { DentalService } from "./components/dental-service/dental-service";
import { Team } from "./components/team/team";
import { Prices } from "./components/prices/prices";
import { LatestNews } from "./components/latest-news/latest-news";
import { Contacts } from "./components/contacts/contacts";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-service-detail-v2',
  imports: [Breadcrum, Hero, DentalService, Team, Prices, LatestNews, Contacts, Footer],
  templateUrl: './service-detail-v2.html',
  styles: ``,
})
export class ServiceDetailV2 {

}
