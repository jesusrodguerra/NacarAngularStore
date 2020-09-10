import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/producto.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  producto$: Observable<Producto[]>;

  constructor(
    private cartService: CartService
  ) {
    this.producto$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }

}
