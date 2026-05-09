import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileShowcaseV3 } from './mobile-showcase-v3';

describe('MobileShowcaseV3', () => {
  let component: MobileShowcaseV3;
  let fixture: ComponentFixture<MobileShowcaseV3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShowcaseV3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileShowcaseV3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
