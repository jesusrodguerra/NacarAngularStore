import { Component, OnInit } from '@angular/core';
import { ModaService } from 'src/app/moda/moda.service';

@Component({
  selector: 'app-moda-list',
  templateUrl: './moda-list.component.html',
  styleUrls: ['./moda-list.component.css']
})
export class ModaListComponent implements OnInit {


  modaAdmin = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private modaService: ModaService
  ) { }

  ngOnInit(): void {
    this.fetchModa();
  }

  fetchModa() {
    this.modaService.getAllProduct().subscribe(product => {
      this.modaAdmin = product;
    });
  }

  delete(id) {
    this.modaService.deleteProduct(id).subscribe(rta => {
      console.log(rta);
      this.fetchModa();
    });
  }

}
