import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-breadcrumb',
  imports: [LucideAngularModule],
  templateUrl: './breadcrumb.html',
  styles: ``,
})
export class Breadcrumb {
  @Input() title!: string;
}
