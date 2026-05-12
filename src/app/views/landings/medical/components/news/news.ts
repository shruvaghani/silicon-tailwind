import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { newsData } from '../../data';

register();

@Component({
  selector: 'medical-news',
  imports: [RouterLink],
  templateUrl: './news.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class News {
  newsData = newsData;
}
