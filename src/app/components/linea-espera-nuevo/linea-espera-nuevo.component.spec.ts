import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaEsperaNuevoComponent } from './linea-espera-nuevo.component';

describe('LineaEsperaNuevoComponent', () => {
  let component: LineaEsperaNuevoComponent;
  let fixture: ComponentFixture<LineaEsperaNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineaEsperaNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaEsperaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
