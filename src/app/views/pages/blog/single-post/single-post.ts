import { Component } from '@angular/core';
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Hero } from "./components/hero/hero";
import { Content } from "./components/content/content";
import { Comments } from "./components/comments/comments";
import { CommentForm } from "./components/comment-form/comment-form";
import { Article } from "./components/article/article";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-single-post',
  imports: [Breadcrumb, Hero, Content, Comments, CommentForm, Article, Footer],
  templateUrl: './single-post.html',
  styles: ``,
})
export class SinglePost {

}
