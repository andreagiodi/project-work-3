import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiesteSospesoComponent } from './richieste-sospeso.component';

describe('RichiesteSospesoComponent', () => {
  let component: RichiesteSospesoComponent;
  let fixture: ComponentFixture<RichiesteSospesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RichiesteSospesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichiesteSospesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
