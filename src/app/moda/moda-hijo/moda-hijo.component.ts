import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-moda-hijo',
  templateUrl: './moda-hijo.component.html',
  styleUrls: ['./moda-hijo.component.css']
})
export class ModaHijoComponent implements OnInit {

  @Input() moda: Producto;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartService.addCarrito(this.moda);
  }

}
