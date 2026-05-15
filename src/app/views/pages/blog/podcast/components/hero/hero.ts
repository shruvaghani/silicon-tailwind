import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'podcast-hero',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {

}
