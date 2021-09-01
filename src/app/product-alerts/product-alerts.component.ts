import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product|undefined;
  @Output() notify = new EventEmitter();
}
export class ProductListComponent {
  product=products;
  share(){
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
implements OnInit {
  @Input() product!: Product;
  constructor() { }

  ngOnInit() {
  }

}