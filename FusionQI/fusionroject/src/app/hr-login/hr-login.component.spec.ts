import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLoginComponent } from './hr-login.component';

describe('HrLoginComponent', () => {
  let component: HrLoginComponent;
  let fixture: ComponentFixture<HrLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
