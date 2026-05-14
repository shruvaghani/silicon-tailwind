import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutV1 } from './about-v1';

describe('AboutV1', () => {
  let component: AboutV1;
  let fixture: ComponentFixture<AboutV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
