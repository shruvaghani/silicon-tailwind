import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'about-v3-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}
