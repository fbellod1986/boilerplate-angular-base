import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDePruebaComponent } from './vista-de-prueba.component';

describe('VistaDePruebaComponent', () => {
  let component: VistaDePruebaComponent;
  let fixture: ComponentFixture<VistaDePruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDePruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDePruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
