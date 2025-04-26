import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // products: Array<Iproduct> = [];
  // categories: string[] = [];
  // ProductsSub!: Subscription;
  // product!: Iproduct
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all products from the API
    // this.ProductsSub = this._productService
    //   .fetchAllProducts()
    //   .subscribe((res) => {
    //     this.products = res;
    //     this.categories = this.getUniqueCategories(this.products);
    //     console.log(this.categories);
        
    //   });
  }

  // getUniqueCategories(products: any[]): string[] {
  //   const allCategories = products.map((product) => product.category);
  //   return [...new Set(allCategories)];
  // }

}
