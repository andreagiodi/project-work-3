import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOspiteComponent } from './info-ospite.component';

describe('InfoOspiteComponent', () => {
  let component: InfoOspiteComponent;
  let fixture: ComponentFixture<InfoOspiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoOspiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoOspiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
