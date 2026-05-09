import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { workManagementFeatureData } from '../../data';

@Component({
  selector: 'saas-v1-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Dashboard {
  workManagementFeatureData = workManagementFeatureData;
}
