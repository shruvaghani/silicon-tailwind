import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasV1 } from './saas-v1';

describe('SaasV1', () => {
  let component: SaasV1;
  let fixture: ComponentFixture<SaasV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
