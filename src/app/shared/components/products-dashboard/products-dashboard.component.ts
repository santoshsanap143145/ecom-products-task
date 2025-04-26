import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent implements OnInit, OnDestroy {
  productsArr : Array<Iproduct> = []
  loading: boolean = true
  hoveredProductId: string | null = null
  ProductsSub !: Subscription
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
     this.ProductsSub = this._productService.fetchAllProducts()
    .subscribe(res => {
      this.productsArr = res.reverse()
      this.loading = false
    })
  }

  ngOnDestroy(): void {
    this.ProductsSub.unsubscribe()
  }
}
