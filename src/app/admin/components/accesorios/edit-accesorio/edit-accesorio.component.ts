import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccesoriosService } from 'src/app/accesorios/accesorios.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-accesorio',
  templateUrl: './edit-accesorio.component.html',
  styleUrls: ['./edit-accesorio.component.css']
})
export class EditAccesorioComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private accesorios: AccesoriosService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.accesorios.getProducts(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  editarProducto(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const valor = this.form.value;
      this.accesorios.editProduct(this.id, valor).subscribe(edited => {
        console.log(edited);
        this.route.navigate(['admin/productA']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

}
