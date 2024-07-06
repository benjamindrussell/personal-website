import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCurveComponent } from './bottom-curve.component';

describe('BottomCurveComponent', () => {
  let component: BottomCurveComponent;
  let fixture: ComponentFixture<BottomCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomCurveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
