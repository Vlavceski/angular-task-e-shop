import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './cart/cart.component';

const routes: Routes = [
  { 
    path: 'products', component: ProductsComponent
  },
  { 
    path: 'products/:id', component: ProductDetailComponent
  },
  { 
    path: 'cart', component: OrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
