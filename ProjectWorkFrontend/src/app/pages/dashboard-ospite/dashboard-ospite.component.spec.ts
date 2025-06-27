import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOspiteComponent } from './dashboard-ospite.component';

describe('DashboardOspiteComponent', () => {
  let component: DashboardOspiteComponent;
  let fixture: ComponentFixture<DashboardOspiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardOspiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardOspiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
