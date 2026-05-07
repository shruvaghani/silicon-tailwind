import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevAgencyV3 } from './software-dev-agency-v3';

describe('SoftwareDevAgencyV3', () => {
  let component: SoftwareDevAgencyV3;
  let fixture: ComponentFixture<SoftwareDevAgencyV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevAgencyV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
