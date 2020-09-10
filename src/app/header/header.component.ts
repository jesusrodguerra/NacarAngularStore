import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$.pipe(
      map(productos => productos.length));
   }

  ngOnInit(): void {
  }

}
