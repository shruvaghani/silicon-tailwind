import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoReel } from './video-reel';

describe('VideoReel', () => {
  let component: VideoReel;
  let fixture: ComponentFixture<VideoReel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoReel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoReel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
