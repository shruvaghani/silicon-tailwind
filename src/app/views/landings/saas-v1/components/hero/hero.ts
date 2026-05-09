import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companyLogoData, heroParallaxLayerData } from '../../data';
import { ParallaxDirective } from '@/app/directive/parallax.directive';

@Component({
  selector: 'saas-v1-hero',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {
  companyLogoData = companyLogoData;
  heroParallaxLayerData = heroParallaxLayerData;
}
