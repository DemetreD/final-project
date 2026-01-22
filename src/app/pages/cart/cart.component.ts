import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartItem, CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items$!: Observable<CartItem[]>;
  selectedColor = '';
  selectedSize = '';

  constructor(public cartService: CartService) {
    this.items$ = this.cartService.items$;
     this.items$.subscribe(items => {
      this.subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
      // this.tax = this.subtotal * 0.02; 
      // this.total = this.subtotal + this.tax;
    });
  }


  inc(id: number) { this.cartService.inc(id); }
  dec(id: number) { this.cartService.dec(id); }
  remove(id: number) { this.cartService.remove(id); }
  clear() { this.cartService.clear(); }

  subtotal = 0;
  tax = 0;
  total = 0;


  

 
}
