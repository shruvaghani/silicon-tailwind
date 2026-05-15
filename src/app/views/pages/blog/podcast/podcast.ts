import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Content } from "./components/content/content";
import { Comments } from "./components/comments/comments";
import { CommentForm } from "./components/comment-form/comment-form";
import { Podcasts } from "./components/podcasts/podcasts";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-podcast',
  imports: [Hero, Breadcrumb, Content, Comments, CommentForm, Podcasts, Footer],
  templateUrl: './podcast.html',
  styles: ``,
})
export class Podcast {

}
