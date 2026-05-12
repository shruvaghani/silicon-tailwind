import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { featureIconsData } from '../../data';
@Component({
  selector: 'medical-feature-icon',
  imports: [RouterLink, CommonModule],
  templateUrl: './feature-icon.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureIcon {
  featureIconsData = featureIconsData;
}
