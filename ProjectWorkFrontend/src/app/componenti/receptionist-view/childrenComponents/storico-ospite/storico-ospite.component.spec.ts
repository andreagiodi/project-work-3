import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoOspiteComponent } from './storico-ospite.component';

describe('StoricoOspiteComponent', () => {
  let component: StoricoOspiteComponent;
  let fixture: ComponentFixture<StoricoOspiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoricoOspiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoricoOspiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
