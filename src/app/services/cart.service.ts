import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

export interface CartItem {
  product: Product;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  add(product: Product) {
    const items = [...this.itemsSubject.value];
    const found = items.find(i => i.product.id === product.id);

    if (found) found.qty += 1;
    else items.push({ product, qty: 1 });

    this.itemsSubject.next(items);
  }

  remove(productId: number) {
    this.itemsSubject.next(this.itemsSubject.value.filter(i => i.product.id !== productId));
  }

  inc(productId: number) {
    const items = [...this.itemsSubject.value];
    const found = items.find(i => i.product.id === productId);
    if (found) found.qty += 1;
    this.itemsSubject.next(items);
  }

  dec(productId: number) {
    const items = [...this.itemsSubject.value];
    const found = items.find(i => i.product.id === productId);
    if (!found) return;
    found.qty -= 1;
    const updated = found.qty <= 0 ? items.filter(i => i.product.id !== productId) : items;
    this.itemsSubject.next([...updated]);
  }

  clear() {
    this.itemsSubject.next([]);
  }

  total(): number {
    return this.itemsSubject.value.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  }
}
