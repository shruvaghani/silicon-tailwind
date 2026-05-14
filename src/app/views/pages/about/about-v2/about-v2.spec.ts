import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutV2 } from './about-v2';

describe('AboutV2', () => {
  let component: AboutV2;
  let fixture: ComponentFixture<AboutV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
