import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-feature-tiles',
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-tiles.component.html',
  styleUrl: './feature-tiles.component.css'
})
export class FeatureTilesComponent {
tiles = [
    {
      title: 'Popular Products',
      desc: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      image: 'assets/products/watch.png',
      dark: false,
      link: '/products'
    },
    {
      title: 'Ipad Pro',
      desc: 'Pad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      image: 'assets/products/ipad.png',
      dark: false,
      link: '/products'
    },
    {
      title: 'Samsung Galaxy',
      desc: 'Pad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      image: 'assets/products/phone2.png',
      dark: false,
      link: '/products'
    },
    {
      title: 'Macbook Pro',
      desc: 'Pad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      image: 'assets/mac.png',
      dark: true,
      link: '/products'
    }
  ];
}



