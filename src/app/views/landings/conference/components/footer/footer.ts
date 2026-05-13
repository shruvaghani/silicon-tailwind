import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { footerData, socialLinks } from '../../data';

@Component({
  selector: 'conference-footer',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  footerData = footerData;
  socialLinks = socialLinks;
}
