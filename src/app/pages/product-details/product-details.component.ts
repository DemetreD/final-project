import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/product.service';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { map, Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product?: Product; 
  related$!: Observable<Product[]>;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  // ngOnInit(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productsService.getById(id).subscribe((p) => {
  //   this.product = p;
  //   console.log('DETAIL PRODUCT:', this.product);

  //   });
  // }


  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.productsService.getById(id).subscribe(p => {
    this.product = p;
  });

  this.related$ = this.productsService.getAll().pipe(
    map((items) => {
      const current = items.find(x => x.id === id);
      if (!current) return [];

      const pool = items.filter(x => x.id !== id);

      const sameType = current.type
        ? pool.filter(x => x.type === current.type)
        : [];

      const base = sameType.length ? sameType : pool.filter(x => x.tag === current.tag);

      return base.slice(0, 4);
    })
  );
}




  get colors(): string[] {
  return this.product?.colors?.length ? this.product.colors : ['#000000', '#e5e5e5'];
}

get storages(): string[] {
  return this.product?.storages ?? [];
}



selectedColor = '#000000';
selectedStorage = '';

setColor(c: string) { this.selectedColor = c; }
setStorage(s: string) { this.selectedStorage = s; }



}
