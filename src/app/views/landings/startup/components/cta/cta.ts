import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ParallaxDirective } from "@/app/directive/parallax.directive";

@Component({
  selector: 'startup-cta',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './cta.html',
  styles: ``,
})
export class Cta {}
