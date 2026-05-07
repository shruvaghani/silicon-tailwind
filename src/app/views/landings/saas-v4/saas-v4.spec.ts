import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasV4 } from './saas-v4';

describe('SaasV4', () => {
  let component: SaasV4;
  let fixture: ComponentFixture<SaasV4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasV4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasV4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
