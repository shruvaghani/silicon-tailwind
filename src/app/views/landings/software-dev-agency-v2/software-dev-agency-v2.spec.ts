import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevAgencyV2 } from './software-dev-agency-v2';

describe('SoftwareDevAgencyV2', () => {
  let component: SoftwareDevAgencyV2;
  let fixture: ComponentFixture<SoftwareDevAgencyV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevAgencyV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
