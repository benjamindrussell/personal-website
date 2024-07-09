import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCurveComponent } from './top-curve.component';

describe('TopCurveComponent', () => {
  let component: TopCurveComponent;
  let fixture: ComponentFixture<TopCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCurveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
