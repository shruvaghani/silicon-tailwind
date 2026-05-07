import { Component } from '@angular/core';
import { landingPagesData } from '../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-landing-pages',
  imports: [RouterLink],
  templateUrl: './landing-pages.html',
  styles: ``,
})

export class LandingPages {
  landingPagesData = landingPagesData;
}
