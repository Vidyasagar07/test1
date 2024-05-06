import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsubComponent } from './paymentsub.component';

describe('PaymentsubComponent', () => {
  let component: PaymentsubComponent;
  let fixture: ComponentFixture<PaymentsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
