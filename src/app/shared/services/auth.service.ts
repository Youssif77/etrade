import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject(false);
  constructor() {}

  getIsLogging(): boolean {
    return this.isLoggedIn.getValue();
    console.log('Is Losgging: from getter', this.isLoggedIn.getValue());
  }

  setLoggingIn(): void {
    this.isLoggedIn.next(true);
    console.log('Is Losgging: from setter in', this.isLoggedIn);
  }

  setloggingOut(): void {
    this.isLoggedIn.next(false);
    console.log('Is Losgging: from setter out', this.isLoggedIn);
  }
}
