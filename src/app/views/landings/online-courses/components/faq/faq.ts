import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { faqData } from '../../data';

@Component({
  selector: 'online-faq',
  imports: [LucideAngularModule],
  templateUrl: './faq.html',
  styles: ``,
})
export class Faq {
  faqData = faqData;
}
