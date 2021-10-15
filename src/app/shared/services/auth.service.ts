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
  }
  setLoggingIn(): void {
    this.isLoggedIn.next(true);
  }

  setloggingOut(): void {
    this.isLoggedIn.next(false);
  }
}
