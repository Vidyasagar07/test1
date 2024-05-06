import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsubComponent } from './contactsub.component';

describe('ContactsubComponent', () => {
  let component: ContactsubComponent;
  let fixture: ComponentFixture<ContactsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
