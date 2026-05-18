import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

type SessionType = {
  icon: string;
  title: string;
  browser: string;
  status?: string;
  lastActive?: string;
};

@Component({
  selector: 'app-security',
  imports: [LucideAngularModule],
  templateUrl: './security.html',
  styles: ``,
})
export class Security {
  sessionData: SessionType[] = [
    {
      icon: 'monitor-check',
      title: 'Mac – New York, USA',
      browser: 'Chrome',
      status: 'Active now',
    },
    {
      icon: 'smartphone',
      title: 'Iphone 12 – New York, USA',
      browser: 'Silicon App',
      lastActive: '20 hours ago',
    },
    {
      icon: 'monitor-check',
      title: 'Windows 10.1 – New York, USA',
      browser: 'Chrome',
      lastActive: 'November 15 at 8:42 am',
    },
  ];
}
