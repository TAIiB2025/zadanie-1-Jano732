// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./product/product.component";
import { KoszykComponent } from './koszyk/koszyk.component';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, KoszykComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zadanie1';

  products: Product[] = [
    new Product('Krzesło', 20.00, new Date(2001, 8, 30), false),
    new Product('Wazon', 35.50, new Date(2022, 5, 15), false),
    new Product('Biurko', 99.99, new Date(2023, 10, 12), true),
    new Product('Doniczka', 15.75, new Date(2021, 2, 28), false),
    new Product('Regał', 149.90, new Date(2024, 3, 7), true)
  ];

  cartValue: number = 0;
  showProducts: boolean = true;
  
  updateCart(price: number) {
    this.cartValue += price;
  }
  
  toggleProducts() {
    this.showProducts = !this.showProducts;
  }
}