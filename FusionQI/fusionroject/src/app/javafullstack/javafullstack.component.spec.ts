import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavafullstackComponent } from './javafullstack.component';

describe('JavafullstackComponent', () => {
  let component: JavafullstackComponent;
  let fixture: ComponentFixture<JavafullstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavafullstackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavafullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
