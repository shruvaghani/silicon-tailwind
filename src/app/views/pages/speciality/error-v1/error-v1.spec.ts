import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorV1 } from './error-v1';

describe('ErrorV1', () => {
  let component: ErrorV1;
  let fixture: ComponentFixture<ErrorV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
