import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
      private cartServise: CartService,
      private formBuilder: FormBuilder
    ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
    }

  ngOnInit() {
    this.items = this.cartServise.getItems();
  }

  onSubmit(data) {
    this.items = this.cartServise.clearCart();
    console.warn('Success;', data);
    this.checkoutForm.reset();
  }

}