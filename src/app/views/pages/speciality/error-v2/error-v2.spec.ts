import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorV2 } from './error-v2';

describe('ErrorV2', () => {
  let component: ErrorV2;
  let fixture: ComponentFixture<ErrorV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
