import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class BolsosService {

  bolsos: Producto[] = [
    {
      id: '1',
      title: 'Bolso Denim',
      image: 'https://www.forever21.com/images/default_330/00397815-02.jpg',
      price: 60000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '2',
      title: 'Bolso Etnico',
      image: 'https://www.forever21.com/images/default_330/00395801-02.jpg',
      price: 90000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '3',
      title: 'Bolso Popsicle',
      image: 'https://www.forever21.com/images/default_330/00405472-01.jpg',
      price: 130000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '4',
      title: 'Bolso Cactus',
      image: 'https://www.forever21.com/images/default_330/00410392-01.jpg',
      price: 60000,
      description: 'Esta es la descipcion del producto'
    }
  ];

  getAllBolsos() {
    return this.bolsos;
  }

  getBolso(id: string) {
    return this.bolsos.find(item => id === item.id);
  }

  constructor() { }
}
