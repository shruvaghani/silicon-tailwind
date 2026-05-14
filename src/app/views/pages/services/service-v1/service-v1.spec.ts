import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceV1 } from './service-v1';

describe('ServiceV1', () => {
  let component: ServiceV1;
  let fixture: ComponentFixture<ServiceV1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceV1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceV1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
