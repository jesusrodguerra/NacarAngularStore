import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/producto.model';
import { ModaService } from '../moda.service';

@Component({
  selector: 'app-moda',
  templateUrl: './moda.component.html',
  styleUrls: ['./moda.component.css']
})
export class ModaComponent implements OnInit {

  // moda: Producto[] = [
  //   {
  //     id: '1',
  //     title: 'Lentes Cuadrados',
  //     image: 'https://www.forever21.com/images/default_330/00408456-01.jpg',
  //     price: 43000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '2',
  //     title: 'Lentes redondeados',
  //     image: 'https://www.forever21.com/images/default_330/00402422-02.jpg',
  //     price: 39000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '3',
  //     title: 'Almohada Corazon',
  //     image: 'https://www.forever21.com/images/default_330/00413299-01.jpg',
  //     price: 93000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '4',
  //     title: 'Correa de aros',
  //     image: 'https://www.forever21.com/images/default_330/00403121-01.jpg',
  //     price: 160000,
  //     description: 'Esta es la descipcion del producto'
  //   }
  // ];

  moda: Producto[];

  constructor(
    private modaService: ModaService
  ) { }

  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct() {
    this.modaService.getAllProduct().subscribe(product => {
      this.moda = product;
    });
  }

}
