import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from "@/app/directive/parallax.directive";
import { heroStatsData } from '../../data';

@Component({
  selector: 'startup-hero',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Hero {
  heroStatsData = heroStatsData;
}
