import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';

@Injectable({
  providedIn: 'root'
})
export class ChaquetasService {

  chaquetas: Producto[] = [
    {
      id: '1',
      title: 'Chaqueta Hood Yellow',
      image: 'https://www.forever21.com/images/default_330/00406418-01.jpg',
      price: 160000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '2',
      title: 'Chaqueta Denim',
      image: 'https://www.forever21.com/images/default_330/00395762-04.jpg',
      price: 160000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '3',
      title: 'Chaqueta Denim Perlas',
      image: 'https://www.forever21.com/images/5_detail_330/00399567-02.jpg',
      price: 160000,
      description: 'Esta es la descipcion del producto'
    },
    {
      id: '4',
      title: 'Chaqueta Denim Grey Pale',
      image: 'https://www.forever21.com/images/4_full_330/00406429-04.jpg',
      price: 160000,
      description: 'Esta es la descipcion del producto'
    }
  ];

  getAllProduct() {
    return this.chaquetas;
  }

  getProduct(id: string) {
    return this.chaquetas.find(item => id === item.id);
  }

  constructor() { }
}
