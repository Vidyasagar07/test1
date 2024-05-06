import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuleComponent } from './mule.component';

describe('MuleComponent', () => {
  let component: MuleComponent;
  let fixture: ComponentFixture<MuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
