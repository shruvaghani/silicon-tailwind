import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { tabFeatureData, useCaseData } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'saas-v1-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Project {
  tabFeatureData = tabFeatureData;
  useCaseData = useCaseData;
}
