import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Product } from '../../../models/product';
import { ProductsService } from '../../../services/product.service';
import { ProductCardComponent } from '../../../product-card/product-card.component';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getAll().pipe(
      map((items) => items.slice(0, 8)) );
  }
}
