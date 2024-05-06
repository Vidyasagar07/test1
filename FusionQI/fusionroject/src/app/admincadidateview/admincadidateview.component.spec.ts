import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincadidateviewComponent } from './admincadidateview.component';

describe('AdmincadidateviewComponent', () => {
  let component: AdmincadidateviewComponent;
  let fixture: ComponentFixture<AdmincadidateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincadidateviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincadidateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
