import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { collectionsData } from "./data";

@Component({
  selector: 'app-collections',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './collections.html',
  styles: ``,
})
export class Collections {
  collectionsData = collectionsData;
}
