import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtentiAdminComponent } from './utenti-admin.component';

describe('UtentiAdminComponent', () => {
  let component: UtentiAdminComponent;
  let fixture: ComponentFixture<UtentiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtentiAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtentiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
