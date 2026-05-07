import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevAgencyV1 } from './software-dev-agency-v1';

describe('SoftwareDevAgencyV1', () => {
  let component: SoftwareDevAgencyV1;
  let fixture: ComponentFixture<SoftwareDevAgencyV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevAgencyV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevAgencyV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
