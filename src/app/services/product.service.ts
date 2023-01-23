import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductById(id: any) {
    return this.http.get('https://fakestoreapi.com/products/' + id);
  }
  getProductCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }
  getProductFilter(keyword:any) {
    return this.http.get(`https://fakestoreapi.com/products/category/${keyword}`);
  }
  addProduct(add:any) {
    return this.http.post(`https://fakestoreapi.com/products`,add);
  }

  editProduct(id: any , obj:any) {
    return this.http.put('https://fakestoreapi.com/products/' + id , obj);
  }
}
