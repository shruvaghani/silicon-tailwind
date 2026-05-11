import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { testimonialColumnsData } from '../../data';

@Component({
  selector: 'saas-v5-companies',
  imports: [RouterLink],
  templateUrl: './companies.html',
  styles: ``,
})
  
export class Companies {
  testimonialColumnsData = testimonialColumnsData;
}
