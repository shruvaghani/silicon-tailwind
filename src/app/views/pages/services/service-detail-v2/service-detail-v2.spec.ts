import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailV2 } from './service-detail-v2';

describe('ServiceDetailV2', () => {
  let component: ServiceDetailV2;
  let fixture: ComponentFixture<ServiceDetailV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDetailV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
