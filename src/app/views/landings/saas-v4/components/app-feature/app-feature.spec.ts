import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFeature } from './app-feature';

describe('AppFeature', () => {
  let component: AppFeature;
  let fixture: ComponentFixture<AppFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFeature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
