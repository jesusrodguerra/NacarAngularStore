import { Component, OnInit } from '@angular/core';
import { ModaService } from 'src/app/moda/moda.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-moda-edit',
  templateUrl: './moda-edit.component.html',
  styleUrls: ['./moda-edit.component.css']
})
export class ModaEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private modaService: ModaService,
    private route: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.modaService.getProducts(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  editModa(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const valor = this.form.value;
      this.modaService.editProduct(this.id, valor).subscribe(edited => {
        console.log(edited);
        this.route.navigate(['admin/productM']);
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
