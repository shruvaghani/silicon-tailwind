import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { VideoReel } from "./components/video-reel/video-reel";
import { Awards } from "./components/awards/awards";
import { Testimonial } from "./components/testimonial/testimonial";
import { Team } from "./components/team/team";
import { Contact } from "./components/contact/contact";
import { SocialNetwork } from "./components/social-network/social-network";
import { Footer } from "@app/components/footer/footer";

@Component({
  selector: 'app-about-v1',
  imports: [Hero, Features, VideoReel, Awards, Testimonial, Team, Contact, SocialNetwork, Footer],
  templateUrl: './about-v1.html',
  styles: ``,
})
export class AboutV1 {

}
