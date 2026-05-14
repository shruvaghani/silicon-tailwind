import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceV2 } from './service-v2';

describe('ServiceV2', () => {
  let component: ServiceV2;
  let fixture: ComponentFixture<ServiceV2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceV2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceV2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
