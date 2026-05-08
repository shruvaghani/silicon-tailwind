import { Component } from '@angular/core';
import { Header } from "@app/components/header/header";
import { Hero } from "./hero/hero";
import { Features } from "./features/features";
import { MoreFeature } from "./more-feature/more-feature";
import { LandingPages } from "./landing-pages/landing-pages";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Features, MoreFeature, LandingPages, Footer],
  templateUrl: './home.html',
  styles: ``,
})
  
export class Home {}
