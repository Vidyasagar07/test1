import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminholderComponent } from './adminholder.component';

describe('AdminholderComponent', () => {
  let component: AdminholderComponent;
  let fixture: ComponentFixture<AdminholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
