import { ParallaxDirective } from '@/app/directive/parallax.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-v5-features',
  imports: [RouterLink, ParallaxDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Features {

}
