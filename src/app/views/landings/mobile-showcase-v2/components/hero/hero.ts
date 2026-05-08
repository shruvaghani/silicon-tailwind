import { Component } from '@angular/core';
import { ParallaxDirective } from "@/app/directive/parallax.directive";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'mobile-showcase-v2-hero',
  imports: [ParallaxDirective, RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {

}
