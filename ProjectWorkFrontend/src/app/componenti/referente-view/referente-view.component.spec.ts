import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenteViewComponent } from './referente-view.component';

describe('ReferenteViewComponent', () => {
  let component: ReferenteViewComponent;
  let fixture: ComponentFixture<ReferenteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenteViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
