import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyheaderComponent } from './dummyheader.component';

describe('DummyheaderComponent', () => {
  let component: DummyheaderComponent;
  let fixture: ComponentFixture<DummyheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DummyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
