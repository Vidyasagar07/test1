import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulesoftcoursesComponent } from './mulesoftcourses.component';

describe('MulesoftcoursesComponent', () => {
  let component: MulesoftcoursesComponent;
  let fixture: ComponentFixture<MulesoftcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulesoftcoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MulesoftcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
