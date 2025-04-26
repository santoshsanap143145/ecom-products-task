import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iproduct } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit, OnDestroy {
  prodId!: string;
  product!: Iproduct;
  loading: boolean = true
  ProdSub!: Subscription;
  selectedImg!: string;
  stars: Array<number> = [0, 1, 2, 3, 4];
  rating!: number;
  orderCount: number = 0;
  activeTab: string = 'details';
  constructor(
    private _actRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.prodId = this._actRoute.snapshot.params['prodid'];
    this.ProdSub = this._productService
      .getProduct(this.prodId)
      .subscribe((res) => {
        this.product = res;
        console.log(this.product);
        this.selectedImg = this.product.images[0];
        this.rating = this.product.rating;
        this.loading = false
      });


  }

  selectImage(img: string) {
    this.selectedImg = img;
  }

  getStarFill(index: number): string {
    const fullStars = Math.floor(this.rating);
    const partial = this.rating - fullStars;

    if (index < fullStars) {
      return '100%';
    } else if (index === fullStars) {
      return `${partial * 100}%`;
    } else {
      return '0%';
    }
  }

  ngOnDestroy(): void {
    this.ProdSub.unsubscribe();
  }

  increaseOnClick() {
    if (this.orderCount >= 0) {
      this.orderCount++;
    }
  }
  reducOnClick() {
    if (this.orderCount > 0) {
      this.orderCount--;
    }
  }
}
