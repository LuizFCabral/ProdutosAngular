import { Product } from './product';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable <Product[]>{
    let url = "http://localhost:3000/products/";
    return this.http.get<Product[]>(url);
  }

  getProductById(id: number): Observable <Product[]>{
    let url = "http://localhost:3000/products/?id=";
    return this.http.get<Product[]>(url + id);
  }
}
