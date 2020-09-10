import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ModaService } from '../moda.service';
import { Producto } from 'src/app/producto.model';

@Component({
  selector: 'app-moda-detail',
  templateUrl: './moda-detail.component.html',
  styleUrls: ['./moda-detail.component.css']
})
export class ModaDetailComponent implements OnInit {

  modaId: Producto;

  constructor(
    private route: ActivatedRoute,
    private modaService: ModaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.modaService.getProducts(id).subscribe(product => {
      this.modaId = product;
    });
  }

}
