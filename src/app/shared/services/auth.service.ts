import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject(false);
  constructor() {}

  getIsLogging() {
    return this.isLoggedIn;
    console.log('Is Losgging: from getter', this.isLoggedIn);
  }

  setLoggingIn() {
    this.isLoggedIn.next(true);
    console.log('Is Losgging: from setter in', this.isLoggedIn);
  }

  setloggingOut() {
    this.isLoggedIn.next(false);
    console.log('Is Losgging: from setter out', this.isLoggedIn);
  }
}
