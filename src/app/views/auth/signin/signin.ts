import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Header } from '@app/components/header/header';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { credits } from '@common/constants';

@Component({
  selector: 'app-signin',
  imports: [Header, RouterLink, LucideAngularModule],
  templateUrl: './signin.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Signin {
  credits = credits;
}
