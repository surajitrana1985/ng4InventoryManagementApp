import { Component } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  selector: 'inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css']
})
export class InventoryApp {
  products:Array<Product>;

  constructor() {
    this.products = [
      new Product('NICEHAT', 'A Nice Black Hat', '../assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99),
      new Product('MYSHOES', 'Black Running Shoes', '../assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new Product('NEATOJACKET', 'Blue Jacket', '../assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.50)];
  }
}
