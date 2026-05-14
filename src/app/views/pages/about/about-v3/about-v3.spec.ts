import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutV3 } from './about-v3';

describe('AboutV3', () => {
  let component: AboutV3;
  let fixture: ComponentFixture<AboutV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
