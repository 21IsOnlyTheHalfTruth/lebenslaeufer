import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPdfComponent } from './g-pdf.component';

describe('GPdfComponent', () => {
  let component: GPdfComponent;
  let fixture: ComponentFixture<GPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
