import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { chatListData, chatMessages } from './data';

@Component({
  selector: 'app-messages',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './messages.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Messages {
  chatListData = chatListData;
  chatMessages = chatMessages;
}
