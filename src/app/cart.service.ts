import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productos: Producto[] = [];
  private cart = new BehaviorSubject<Producto[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCarrito(product: Producto) {
    this.productos = [...this.productos, product];
    this.cart.next(this.productos);
  }
}
