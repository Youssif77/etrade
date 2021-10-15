import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoaded: boolean;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.isLoaded = this.loaderService.getIsLoading();
    console.log('HOLA HOME', this.isLoaded);
  }
}
