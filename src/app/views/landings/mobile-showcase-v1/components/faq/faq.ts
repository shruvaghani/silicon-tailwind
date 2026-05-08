import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { faqData, supportCardData } from '../../data';

@Component({
  selector: 'mobile-showcase-v1-faq',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Faq {
  faqData = faqData;
  supportCardData = supportCardData;
}
