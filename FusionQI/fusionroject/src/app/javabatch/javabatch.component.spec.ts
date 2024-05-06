import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavabatchComponent } from './javabatch.component';

describe('JavabatchComponent', () => {
  let component: JavabatchComponent;
  let fixture: ComponentFixture<JavabatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavabatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavabatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
