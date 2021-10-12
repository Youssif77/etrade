import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('hols');
    this.myForm = this.fb.group({
      name: '',
      email: '',
      userName: '',
      password: '',
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
}
