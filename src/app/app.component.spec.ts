import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        AppComponent // since you're using standalone component
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // ✅ confirms the component is created
  });

  it('should have an invalid form when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.form.valid).toBeFalse(); // ✅ empty form should be invalid
  });

  it('should have a valid form when required fields are filled', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.form.setValue({
      fullName: 'Rishabh Saini',
      email: 'rishabh@example.com',
      password: 'mypassword123',
      gender: 'Male',
      country: 'India',
      terms: true
    });

    expect(app.form.valid).toBeTrue(); // ✅ form is valid with correct inputs
  });
});

