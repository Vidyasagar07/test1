import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidyasagarComponent } from './vidyasagar.component';

describe('VidyasagarComponent', () => {
  let component: VidyasagarComponent;
  let fixture: ComponentFixture<VidyasagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidyasagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VidyasagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
