import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSucesoComponent } from './formulario-suceso.component';

describe('FormularioSucesoComponent', () => {
  let component: FormularioSucesoComponent;
  let fixture: ComponentFixture<FormularioSucesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSucesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioSucesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
