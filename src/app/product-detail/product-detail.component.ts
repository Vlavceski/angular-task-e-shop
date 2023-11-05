import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VendureService } from '../vendure.service';
import { CartService } from '../cart-servis/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private vendureService: VendureService,
    private cardService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = params['id'];

      this.vendureService.getProductDetails(productId).subscribe((result: any) => {
        this.product = result.data.product;
        console.log(this.product);
      });
    });
  }

  addToCart(variant: any) {
    this.cardService.addToCart(variant);
  }
}
