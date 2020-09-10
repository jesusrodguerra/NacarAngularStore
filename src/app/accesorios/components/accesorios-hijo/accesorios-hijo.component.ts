import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { CartService } from './../../../cart.service';

@Component({
  selector: 'app-accesorios-hijo',
  templateUrl: './accesorios-hijo.component.html',
  styleUrls: ['./accesorios-hijo.component.css']
})
export class AccesoriosHijoComponent implements OnInit {

  @Input() productos: Producto;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart() {
    this.cartService.addCarrito(this.productos);
  }

}
