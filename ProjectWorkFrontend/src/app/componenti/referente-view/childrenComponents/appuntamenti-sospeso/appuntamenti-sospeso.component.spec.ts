import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppuntamentiSospesoComponent } from './appuntamenti-sospeso.component';

describe('AppuntamentiSospesoComponent', () => {
  let component: AppuntamentiSospesoComponent;
  let fixture: ComponentFixture<AppuntamentiSospesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppuntamentiSospesoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppuntamentiSospesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
