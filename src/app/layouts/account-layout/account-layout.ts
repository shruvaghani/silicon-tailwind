import { Component } from '@angular/core';
import { Header } from '@app/components/header/header';
import { Footer } from '@app/components/footer/footer';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { accountMenuData } from './data';

@Component({
  selector: 'app-account-layout',
  imports: [RouterOutlet, Header, Footer, LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './account-layout.html',
  styles: ``,
})
export class AccountLayout {
  accountMenuData = accountMenuData;
}
