import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormEsternoComponent } from './register-form-esterno.component';

describe('RegisterFormEsternoComponent', () => {
  let component: RegisterFormEsternoComponent;
  let fixture: ComponentFixture<RegisterFormEsternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormEsternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormEsternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
