import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = environment.baseUrl;
  PRODUCT_URL: string = `${this.BASE_URL}/products`;
  constructor(private _http: HttpClient) {}

  fetchAllProducts(): Observable<Array<Iproduct>> {
    return this._http.get<Array<Iproduct>>(this.PRODUCT_URL).pipe(
      map((arr: Array<Iproduct>) => {
        let completedTodos: Array<any> = arr.filter(
          (product) =>
            !product.category.toLowerCase().includes('books and toys')
        );
        return completedTodos;
      })
    );
  }

  getProduct(prodId: string): Observable<Iproduct> {
    return this._http.get<Iproduct>(`${this.PRODUCT_URL}/${prodId}`);
  }
}
