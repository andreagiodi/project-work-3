import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoAppuntamentoComponent } from './nuovo-appuntamento.component';

describe('NuovoAppuntamentoComponent', () => {
  let component: NuovoAppuntamentoComponent;
  let fixture: ComponentFixture<NuovoAppuntamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovoAppuntamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoAppuntamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
