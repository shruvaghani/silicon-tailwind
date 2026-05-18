import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { contactsData } from '../../data';

@Component({
  selector: 'contact-v1-email',
  imports: [LucideAngularModule],
  templateUrl: './email.html',
  styles: ``,
})
export class Email {
  contactsData = contactsData;
}
