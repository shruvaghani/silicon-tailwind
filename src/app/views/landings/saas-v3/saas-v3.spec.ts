import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasV3 } from './saas-v3';

describe('SaasV3', () => {
  let component: SaasV3;
  let fixture: ComponentFixture<SaasV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
