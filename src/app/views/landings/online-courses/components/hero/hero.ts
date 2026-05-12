import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ParallaxDirective } from "@/app/directive/parallax.directive";

@Component({
  selector: 'online-hero',
  imports: [LucideAngularModule, ParallaxDirective],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {}
