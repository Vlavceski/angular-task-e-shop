import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { 
    path: 'products', component: ProductsComponent
  },
  { 
    path: 'products/:id', component: ProductDetailComponent
  },
  { 
    path: 'orders', component: OrdersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
