import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { paymentMethodsData } from './data';

@Component({
  selector: 'app-payment',
  imports: [LucideAngularModule],
  templateUrl: './payment.html',
  styles: ``,
})
export class Payment {
  paymentMethodsData = paymentMethodsData;
}
