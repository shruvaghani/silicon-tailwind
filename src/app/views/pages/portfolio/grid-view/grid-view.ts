import { Component } from '@angular/core';
import { Footer2 } from '@app/components/footer2/footer2';
import { Breadcrumb } from '../components/breadcrumb/breadcrumb';
import { Cta } from '../components/cta/cta';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { portfoliosData, portfolioTabs } from './data';

@Component({
  selector: 'app-grid-view',
  imports: [Footer2, Breadcrumb, Cta, RouterLink, LucideAngularModule],
  templateUrl: './grid-view.html',
  styles: ``,
})

export class GridView {
  portfolioTabs = portfolioTabs;
  portfoliosData = portfoliosData;
}
