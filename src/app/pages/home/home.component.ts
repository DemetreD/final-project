import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PromoGridComponent } from './promo-grid/promo-grid.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from '../products/products.component';
import { FeatureTilesComponent } from './feature-tiles/feature-tiles.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { SummerSaleComponent } from './summer-sale/summer-sale.component';
import { ProductsSectionComponent } from './products-section/products-section.component';

@Component({
  selector: 'app-home',
  imports: [SummerSaleComponent, 
            DiscountsComponent, 
            FeatureTilesComponent, 
            // ProductsComponent, 
            CategoriesComponent, 
            PromoGridComponent, 
            HeroComponent,
            ProductsSectionComponent
            ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
