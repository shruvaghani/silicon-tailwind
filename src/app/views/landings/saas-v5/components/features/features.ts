import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParallaxDirective } from '@/app/directive/parallax.directive';

@Component({
  selector: 'saas-v5-features',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './features.html',
  styles: ``,
})
  
export class Features {

}
