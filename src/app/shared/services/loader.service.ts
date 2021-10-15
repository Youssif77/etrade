import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private isLoading = new BehaviorSubject(false);
  constructor() {}

  getIsLoading() {
    return this.isLoading.getValue();
  }
  setLoading() {
    this.isLoading.next(true);
  }
  removeLoading() {
    this.isLoading.next(false);
  }
}
