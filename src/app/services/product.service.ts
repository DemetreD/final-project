import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }
  getById(id: number) {
  return this.getAll().pipe(
    map(items => items.find(p => p.id === id))
  );
}
}
