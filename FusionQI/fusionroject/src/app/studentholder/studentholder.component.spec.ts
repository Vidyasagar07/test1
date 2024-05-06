import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentholderComponent } from './studentholder.component';

describe('StudentholderComponent', () => {
  let component: StudentholderComponent;
  let fixture: ComponentFixture<StudentholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
