import { Component } from '@angular/core';
import { Header } from '@app/components/header/header';
import { LucideAngularModule } from 'lucide-angular';
import { ParallaxDirective } from '@/app/directive/parallax.directive';

@Component({
  selector: 'app-error-v2',
  imports: [Header, LucideAngularModule, ParallaxDirective],
  templateUrl: './error-v2.html',
})
export class ErrorV2 {}
