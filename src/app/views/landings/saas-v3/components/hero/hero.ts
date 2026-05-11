
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from "@/app/directive/parallax.directive";

@Component({
  selector: 'saas-v3-hero',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
  
export class Hero {}
