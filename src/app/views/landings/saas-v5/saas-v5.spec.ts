import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasV5 } from './saas-v5';

describe('SaasV5', () => {
  let component: SaasV5;
  let fixture: ComponentFixture<SaasV5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasV5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
