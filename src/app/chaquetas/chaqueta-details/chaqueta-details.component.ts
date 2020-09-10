import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ChaquetasService } from '../chaquetas.service';
import { Producto } from 'src/app/producto.model';

@Component({
  selector: 'app-chaqueta-details',
  templateUrl: './chaqueta-details.component.html',
  styleUrls: ['./chaqueta-details.component.css']
})
export class ChaquetaDetailsComponent implements OnInit {

  chaquetaId: Producto;

  constructor(
    private chaquetaService: ChaquetasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.chaquetaId = this.chaquetaService.getProduct(id);
    });
  }

}
