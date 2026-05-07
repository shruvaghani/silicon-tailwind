import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasV2 } from './saas-v2';

describe('SaasV2', () => {
  let component: SaasV2;
  let fixture: ComponentFixture<SaasV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
