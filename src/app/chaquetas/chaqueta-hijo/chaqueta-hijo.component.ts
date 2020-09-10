import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-chaqueta-hijo',
  templateUrl: './chaqueta-hijo.component.html',
  styleUrls: ['./chaqueta-hijo.component.css']
})
export class ChaquetaHijoComponent implements OnInit {

  @Input() chaquetas: Producto;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartService.addCarrito(this.chaquetas);
  }

}
