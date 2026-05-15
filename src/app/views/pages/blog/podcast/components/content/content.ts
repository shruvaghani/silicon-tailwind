import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'podcast-content',
  imports: [RouterLink, LucideAngularModule, CommonModule],
  templateUrl: './content.html',
  styles: ``,
})
export class Content {
  isPlaying = false;

  currentTime = '0:00';
  duration = '0:00';

  currentSeconds = 0;
  durationSeconds = 0;

  audioSrc = 'assets/audio/sample.wav';

  toggleAudio(audio: HTMLAudioElement): void {
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  onLoadedMetadata(audio: HTMLAudioElement): void {
    this.durationSeconds = audio.duration;
    this.duration = this.formatTime(audio.duration);
  }

  onTimeUpdate(audio: HTMLAudioElement): void {
    this.currentSeconds = audio.currentTime;
    this.currentTime = this.formatTime(audio.currentTime);
  }

  onAudioEnd(): void {
    this.isPlaying = false;
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }
}
