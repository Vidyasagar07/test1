import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesidebarComponent } from './candidatesidebar.component';

describe('CandidatesidebarComponent', () => {
  let component: CandidatesidebarComponent;
  let fixture: ComponentFixture<CandidatesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatesidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
