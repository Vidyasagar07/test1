import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminholder2Component } from './adminholder2.component';

describe('Adminholder2Component', () => {
  let component: Adminholder2Component;
  let fixture: ComponentFixture<Adminholder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adminholder2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Adminholder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
