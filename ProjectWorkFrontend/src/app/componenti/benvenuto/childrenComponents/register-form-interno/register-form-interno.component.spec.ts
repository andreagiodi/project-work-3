import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormInternoComponent } from './register-form-interno.component';

describe('RegisterFormInternoComponent', () => {
  let component: RegisterFormInternoComponent;
  let fixture: ComponentFixture<RegisterFormInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
