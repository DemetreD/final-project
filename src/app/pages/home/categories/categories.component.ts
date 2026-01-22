import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [
    { name: 'Phones', icon: 'assets/phones.png' },
    { name: 'Smart Watches', icon: 'assets/watches.png' },
    { name: 'Cameras', icon: 'assets/cameras.png' },
    { name: 'Headphones', icon: 'assets/headphones.png' },
    { name: 'Computers', icon: 'assets/computers.png' },
    { name: 'Gaming', icon: 'assets/gaming.png' },
  ];

}
