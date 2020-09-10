import { Injectable } from '@angular/core';
import { Producto } from '../producto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosService {

  // accesorios: Producto[] = [
  //   {
  //     id: '1',
  //     title: 'Anillos',
  //     image: 'https://www.forever21.com/images/2_side_330/00407946-01.jpg',
  //     price: 39000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '2',
  //     title: 'Necklace',
  //     image: 'https://www.forever21.com/images/default_330/00404874-02.jpg',
  //     price: 49000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '3',
  //     title: 'Band Bangle Set',
  //     image: 'https://www.forever21.com/images/default_330/00403307-01.jpg',
  //     price: 36000,
  //     description: 'Esta es la descipcion del producto'
  //   },
  //   {
  //     id: '4',
  //     title: 'Earrings',
  //     image: 'https://www.forever21.com/images/default_330/00408283-02.jpg',
  //     price: 29000,
  //     description: 'Esta es la descipcion del producto'
  //   }
  // ];

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
