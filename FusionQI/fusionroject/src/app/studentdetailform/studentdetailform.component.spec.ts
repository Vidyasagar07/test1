import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdetailformComponent } from './studentdetailform.component';

describe('StudentdetailformComponent', () => {
  let component: StudentdetailformComponent;
  let fixture: ComponentFixture<StudentdetailformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentdetailformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentdetailformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
