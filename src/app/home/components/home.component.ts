import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/ruta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  galeria: Ruta[] = [
    {
      id: '1',
      titulo: 'Accesorios',
      imagen: 'https://static.pullandbear.net/2/static2/itxwebstandard/images/editorial/2019/parrillas/accesorios/sra/bisuteria_v3.jpg',
      ruta: '/accesorios'
    },
    {
      id: '2',
      titulo: 'Chaquetas',
      imagen: 'https://www.forever21.com/images/default_330/00399567-02.jpg',
      ruta: '/chaquetas'
    },
    {
      id: '3',
      titulo: 'Bolsos',
      imagen: 'https://static.pullandbear.net/2/photos//2020/I/1/1/p/4123/540/124/4123540124_6_1_8.jpg?t=1579871864910&imwidth=375',
      ruta: '/bolsos'
    },
    {
      id: '4',
      titulo: 'Moda',
      imagen: 'https://static.pullandbear.net/2/photos//2020/I/0/1/p/5671/307/711/5671307711_6_1_8.jpg?t=1587738583265&imwidth=375',
      ruta: '/moda'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
