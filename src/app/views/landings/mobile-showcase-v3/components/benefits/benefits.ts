import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { benefitCategoryData, benefitConditionData, statisticsFeatureData } from '../../data';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'mobile-showcase-v3-benefits',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './benefits.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Benefits {
  statisticsFeatureData = statisticsFeatureData;
  benefitConditionData = benefitConditionData;
  benefitCategoryData = benefitCategoryData;
}
