import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProssimiAppuntamentiComponent } from './prossimi-appuntamenti.component';

describe('ProssimiAppuntamentiComponent', () => {
  let component: ProssimiAppuntamentiComponent;
  let fixture: ComponentFixture<ProssimiAppuntamentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProssimiAppuntamentiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProssimiAppuntamentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
