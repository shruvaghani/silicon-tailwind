import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { checkboxOptionsData, stepsData } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'startup-registration',
  imports: [RouterLink],
  templateUrl: './registration.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Registration {
  stepsData = stepsData;
  checkboxOptionsData = checkboxOptionsData;
}
