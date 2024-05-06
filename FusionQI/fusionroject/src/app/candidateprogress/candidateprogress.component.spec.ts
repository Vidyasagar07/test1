import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateprogressComponent } from './candidateprogress.component';

describe('CandidateprogressComponent', () => {
  let component: CandidateprogressComponent;
  let fixture: ComponentFixture<CandidateprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateprogressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
