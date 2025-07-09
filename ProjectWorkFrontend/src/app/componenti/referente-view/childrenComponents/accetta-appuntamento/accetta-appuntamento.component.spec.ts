import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccettaAppuntamentoComponent } from './accetta-appuntamento.component';

describe('AccettaAppuntamentoComponent', () => {
  let component: AccettaAppuntamentoComponent;
  let fixture: ComponentFixture<AccettaAppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccettaAppuntamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccettaAppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
