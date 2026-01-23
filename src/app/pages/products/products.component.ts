// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Product } from '../../models/product';
// import { ProductsService } from '../../services/product.service';
// import { ProductCardComponent } from '../../product-card/product-card.component';

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule, ProductCardComponent],
//   templateUrl: './products.component.html',
//   styleUrl: './products.component.css'
// })
// export class ProductsComponent implements OnInit {
//   products: Product[] = [];
//   activeTab: 'new' | 'bestseller' | 'featured' = 'new';

//   constructor(private productsService: ProductsService) {}

//   ngOnInit(): void {
//     this.productsService.getAll().subscribe(data => {
//       this.products = data;
//     });
//   }

//   setTab(tab: 'new' | 'bestseller' | 'featured') {
//     this.activeTab = tab;
//   }

//   get filtered(): Product[] {
//     return this.products.filter(p => p.tag === this.activeTab);
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
 this.productsService.getAll().subscribe(items => {
  const phones = items.filter(p =>
    (p.title + ' ' + p.subtitle).toLowerCase().includes('iphone') ||
    (p.title + ' ' + p.subtitle).toLowerCase().includes('galaxy')
  );

  const base = phones.length ? phones : items;

  this.products = Array.from({ length: 6 }).flatMap(() => base);
});
  }
  trackByIndex(index: number) {
    return index;
  }

}
