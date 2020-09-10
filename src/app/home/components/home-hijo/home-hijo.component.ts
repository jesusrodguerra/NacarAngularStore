import { Component, OnInit, Input } from '@angular/core';
import { Ruta } from 'src/app/ruta.model';

@Component({
  selector: 'app-home-hijo',
  templateUrl: './home-hijo.component.html',
  styleUrls: ['./home-hijo.component.css']
})
export class HomeHijoComponent implements OnInit {

  @Input() galeria: Ruta;

  constructor() { }

  ngOnInit(): void {
  }

}
