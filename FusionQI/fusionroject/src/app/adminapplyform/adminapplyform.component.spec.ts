import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapplyformComponent } from './adminapplyform.component';

describe('AdminapplyformComponent', () => {
  let component: AdminapplyformComponent;
  let fixture: ComponentFixture<AdminapplyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminapplyformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminapplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
