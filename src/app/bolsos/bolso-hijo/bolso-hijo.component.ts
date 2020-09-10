import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { CartService } from './../../cart.service';

@Component({
  selector: 'app-bolso-hijo',
  templateUrl: './bolso-hijo.component.html',
  styleUrls: ['./bolso-hijo.component.css']
})
export class BolsoHijoComponent implements OnInit {

  @Input() bolsos: Producto;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartService.addCarrito(this.bolsos);
  }
}
