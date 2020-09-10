import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { AccesoriosService } from '../accesorios.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  // accesorios: Producto[] = [
  //   {
  //     id: '1',
  //     titulo: 'Anillos',
  //     imagen: 'https://www.forever21.com/images/2_side_330/00407946-01.jpg',
  //     precio: 39000,
  //     detalle: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '2',
  //     titulo: 'Necklace',
  //     imagen: 'https://www.forever21.com/images/default_330/00404874-02.jpg',
  //     precio: 49000,
  //     detalle: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '3',
  //     titulo: 'Band Bangle Set',
  //     imagen: 'https://www.forever21.com/images/default_330/00403307-01.jpg',
  //     precio: 36000,
  //     detalle: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '4',
  //     titulo: 'Earrings',
  //     imagen: 'https://www.forever21.com/images/default_330/00408283-02.jpg',
  //     precio: 29000,
  //     detalle: 'Esta es la descipcion del producto'
  //   }
  // ];

  accesorios: Producto[] = [];

  constructor(
    private acServices: AccesoriosService
  ) { }

  ngOnInit(): void {
    this.fetchProductos();
  }

  fetchProductos() {
    this.acServices.getAllProduct()
    .subscribe(products => {
      console.log(products);
      this.accesorios = products;
    });
  }

}
