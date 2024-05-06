import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateviewComponent } from './candidateview.component';

describe('CandidateviewComponent', () => {
  let component: CandidateviewComponent;
  let fixture: ComponentFixture<CandidateviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
