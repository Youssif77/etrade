import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveWish } from 'src/app/store/wishes/wishes.action';

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.scss'],
})
export class WishItemComponent implements OnInit {
  @Input() wich;
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    console.log('FIRE FROM WICH ITEM', this.wich);
  }

  removeFromWishList(e) {
    this.store.dispatch(new RemoveWish(this.wich));
  }
}
