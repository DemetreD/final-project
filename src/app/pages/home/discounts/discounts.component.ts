import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product';
import { ProductCardComponent } from '../../../product-card/product-card.component';
import { ProductsService } from '../../../services/product.service';
@Component({
  selector: 'app-discounts',
  imports: [CommonModule,ProductCardComponent],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.css'
})
export class DiscountsComponent {
   items: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getAll().subscribe(all => {
      this.items = all.slice(0, 4);
    });
  }

}



