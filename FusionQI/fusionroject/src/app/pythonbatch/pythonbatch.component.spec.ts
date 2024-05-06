import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonbatchComponent } from './pythonbatch.component';

describe('PythonbatchComponent', () => {
  let component: PythonbatchComponent;
  let fixture: ComponentFixture<PythonbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonbatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PythonbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
