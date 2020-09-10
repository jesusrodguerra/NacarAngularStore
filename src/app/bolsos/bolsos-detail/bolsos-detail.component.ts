import { Component, OnInit } from '@angular/core';
import { BolsosService } from '../bolsos.service';
import { Producto } from 'src/app/producto.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-bolsos-detail',
  templateUrl: './bolsos-detail.component.html',
  styleUrls: ['./bolsos-detail.component.css']
})
export class BolsosDetailComponent implements OnInit {

  bolsoId: Producto;

  constructor(
    private bolsoService: BolsosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.bolsoId = this.bolsoService.getBolso(id);
    });
  }

}
