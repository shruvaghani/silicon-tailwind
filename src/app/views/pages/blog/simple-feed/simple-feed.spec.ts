import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFeed } from './simple-feed';

describe('SimpleFeed', () => {
  let component: SimpleFeed;
  let fixture: ComponentFixture<SimpleFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
