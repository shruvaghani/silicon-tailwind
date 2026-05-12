import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { contactInfoData } from '../../data';

@Component({
  selector: 'financial-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {
  contactInfoData = contactInfoData;
}
