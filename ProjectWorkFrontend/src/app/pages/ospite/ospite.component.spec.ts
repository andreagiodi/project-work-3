import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OspiteComponent } from './ospite.component';

describe('OspiteComponent', () => {
  let component: OspiteComponent;
  let fixture: ComponentFixture<OspiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OspiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OspiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
