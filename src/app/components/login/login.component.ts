import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    this.route.navigate(['/']);
  }
}
