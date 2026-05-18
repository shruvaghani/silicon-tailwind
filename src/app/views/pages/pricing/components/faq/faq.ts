import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { faqData } from '../../data';

@Component({
  selector: 'pricing-faq',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqData = faqData;
}
