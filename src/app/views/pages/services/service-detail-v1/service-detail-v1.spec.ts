import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailV1 } from './service-detail-v1';

describe('ServiceDetailV1', () => {
  let component: ServiceDetailV1;
  let fixture: ComponentFixture<ServiceDetailV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
