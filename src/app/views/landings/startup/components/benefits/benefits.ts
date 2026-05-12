import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { benefitsData } from '../../data';

@Component({
  selector: 'startup-benefits',
  imports: [RouterLink],
  templateUrl: './benefits.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Benefits {
  benefitsData = benefitsData;
}
