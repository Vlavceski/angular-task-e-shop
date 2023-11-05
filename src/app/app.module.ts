import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sortFilterReducer } from './ngrx/sort-filter.state';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule, 
    StoreModule.forRoot({ sortFilter: sortFilterReducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
