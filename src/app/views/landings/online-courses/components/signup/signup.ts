import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { socialLinksData } from '../../data';

@Component({
  selector: 'online-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Signup {
  socialLinksData = socialLinksData;
}
