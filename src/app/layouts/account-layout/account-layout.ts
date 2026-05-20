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
  closeAccordion() {
  const accordion = document.querySelector('#account-btn');

  if (accordion?.classList.contains('active')) {
    accordion.classList.remove('active');

    const content = document.querySelector('#account-menu') as HTMLElement;

    if (content) {
      content.classList.add('hidden');
      content.style.height = '0px';
    }
  }
}
}
