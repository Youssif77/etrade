import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject(false);
  constructor() {}

  getIsLoading() {
    console.log('FIRED IN GET SERVICSES');
    return this.isLoading.getValue();
  }
  setLoading() {
    console.log('FIRED IN SET SERVICSES');
    this.isLoading.next(true);
  }
  removeLoading() {
    console.log('FIRED IN REMOVE SERVICSES');
    this.isLoading.next(false);
  }
}
