import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from 'src/app/accesorios/accesorios.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsAdmin = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private accessorios: AccesoriosService
  ) { }

  ngOnInit(): void {
    this.fetchAccesorios();
  }

  fetchAccesorios() {
    this.accessorios.getAllProduct().subscribe(product => {
      this.productsAdmin = product;
    });
  }

  delete(id: string) {
    this.accessorios.deleteProduct(id).subscribe(rta => {
      console.log(rta);
      this.fetchAccesorios();
    });
  }

}
