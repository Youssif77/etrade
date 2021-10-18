import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishesList;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.select('wishes').subscribe((data) => {
      this.wishesList = data;
    });
  }
}
