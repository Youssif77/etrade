import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  NgForm,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
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
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      userName: [
        null,
        [Validators.required, Validators.pattern('^[a-zA-Z0-9.-_$@*!]{3,30}$')],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(8),
          Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{1,8}'),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
      addresses: this.fb.array([]),
    });
    // this.loginForm.valueChanges.subscribe((_) => console.log(this.loginForm));
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  get confirmPasswordState() {
    return (
      this.loginForm.value.password === this.loginForm.value.confirmPassword &&
      this.loginForm.value.password !== ''
    );
  }

  get addressesForm() {
    return this.loginForm.get('addresses') as FormArray;
  }

  addAddresses() {
    const address = this.fb.group({
      address: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9_ .-]*$')],
      ],
      street: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9_ .-]*$')],
      ],
      country: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z_ .-]*$')],
      ],
      city: ['', [Validators.required, Validators.pattern('^[a-zA-Z_ .-]*$')]],
    });
    this.addressesForm.push(address);
  }

  removeAddresses(i) {
    this.addressesForm.removeAt(i);
  }

  onSubmit() {
    if (this.confirmPasswordState) {
      console.log(this.confirmPasswordState);
      this.route.navigate(['/']);
    } else {
      console.log(this.confirmPasswordState);
      console.log('INCORRECT PASSWORD');
    }
  }
}
