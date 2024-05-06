import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulebatchComponent } from './mulebatch.component';

describe('MulebatchComponent', () => {
  let component: MulebatchComponent;
  let fixture: ComponentFixture<MulebatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MulebatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MulebatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
