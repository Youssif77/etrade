import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/home/products-list/products-list.component';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/home/wish-list/wish-list.component';
import { WishItemComponent } from './components/home/wish-item/wish-item.component';
import { StoreModule } from '@ngrx/store';
import { WishesReducer } from './store/wishes/wishes.reducer';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';
import { FixedPricePipe } from './shared/pipes/fixed-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    WishListComponent,
    WishItemComponent,
    LoaderComponent,
    CustomCurrencyPipe,
    FixedPricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ wishes: WishesReducer }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
