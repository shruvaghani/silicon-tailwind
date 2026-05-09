import { Component } from '@angular/core';
import { Header } from '@app/components/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  imports: [Header, RouterOutlet],
  templateUrl: './landing-layout.html',
  styles: ``,
})
  
export class LandingLayout {}
