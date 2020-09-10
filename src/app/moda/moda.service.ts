import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModaService {


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

  // getAllProduct() {
  //   return this.moda;
  // }

  // getProduct(id: string) {
    //   return this.moda.find(item => id === item.id);
    // }

    constructor(
      private http: HttpClient
    ) { }

  getAllProduct() {
    return this.http.get<Producto[]>('https://platzi-store.herokuapp.com/products/');
  }

  getProducts(id: string) {
    return this.http.get<Producto>(`https://platzi-store.herokuapp.com/products/${id}`);
  }

  createProduct(product: Producto) {
    return this.http.post('https://platzi-store.herokuapp.com/products/', product);
  }

  editProduct(id: string, cambios: Partial<Producto>) {
    return this.http.put(`https://platzi-store.herokuapp.com/products/${id}`, cambios);
  }

  deleteProduct(id: string) {
    return this.http.delete(`https://platzi-store.herokuapp.com/products/${id}`);
  }

}
