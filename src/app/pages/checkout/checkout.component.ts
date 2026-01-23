import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  success = false;
  form: any;

  items$: Observable<CartItem[]>;
  total = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService
  ) {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', Validators.required]
    });

    this.items$ = this.cartService.items$;

    this.items$.subscribe(items => {
      this.total = items.reduce(
        (sum, i) => sum + i.product.price * i.qty,
        0
      );
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.cartService.clear();
    this.success = true;
  }
}
