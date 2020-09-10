import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AccesoriosService } from '../accesorios.service';
import { Producto } from 'src/app/producto.model';

@Component({
  selector: 'app-accesorios-detail',
  templateUrl: './accesorios-detail.component.html',
  styleUrls: ['./accesorios-detail.component.css']
})
export class AccesoriosDetailComponent implements OnInit {

  accesoriosId: Producto;

  constructor(
    private accesorios: AccesoriosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      const id = params.id;
      this.fetchProductos(id);
      // this.accesoriosId = this.accesorios.getProducts(id);
    });
  }

  fetchProductos(id: string) {
    this.accesorios.getProducts(id).subscribe(product => {
      console.log(product);
      this.accesoriosId = product;
    });
  }

}
