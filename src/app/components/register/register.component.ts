import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('hols');
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern(`^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$`),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
    this.loginForm.valueChanges.subscribe((_) => console.log(this.loginForm));
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  getConfirmPassword() {
    return (
      this.loginForm.value.password === this.loginForm.value.confirmPassword &&
      this.loginForm.value.password !== ''
    );
  }

  onSubmit() {
    if (this.getConfirmPassword) this.route.navigate(['/']);
    else {
      console.log(this.loginForm);
      console.log('INCORRECT PASSWORD');
    }
  }
}
