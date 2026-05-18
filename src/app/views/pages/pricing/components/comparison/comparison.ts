import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { pricingsData, pricingTableData } from '../../data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'pricing-comparison',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './comparison.html',
  styles: ``,
})
export class Comparison {
  pricingsData = pricingsData;
  pricingTableData = pricingTableData;
}
