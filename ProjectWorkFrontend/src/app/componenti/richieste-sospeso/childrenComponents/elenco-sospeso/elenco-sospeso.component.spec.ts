import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoSospesoComponent } from './elenco-sospeso.component';

describe('ElencoSospesoComponent', () => {
  let component: ElencoSospesoComponent;
  let fixture: ComponentFixture<ElencoSospesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoSospesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoSospesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
