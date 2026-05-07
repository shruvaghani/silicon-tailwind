import { Component } from '@angular/core';
import { Header } from '@app/components/header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-landing-layout',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './landing-layout.html',
  styles: ``,
})
  
export class LandingLayout {}
