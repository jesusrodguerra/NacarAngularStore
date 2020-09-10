import { Component, OnInit } from '@angular/core';
import { ModaService } from 'src/app/moda/moda.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moda-create',
  templateUrl: './moda-create.component.html',
  styleUrls: ['./moda-create.component.css']
})
export class ModaCreateComponent implements OnInit {

  form: FormGroup;
  img: Observable<any>;

  constructor(
    private modaService: ModaService,
    private route: Router,
    private formBuilder: FormBuilder,
    private af: AngularFireStorage
  ) {

    this.buildForm();
  }

  ngOnInit(): void {
  }

  createModa(event: Event) {
    event.preventDefault();
    const productoCrear = this.form.value;
    this.modaService.createProduct(productoCrear).subscribe((newProduct) => {
      console.log(newProduct);
      this.route.navigate(['./admin/productM']);
    });
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const dir = 'images';
    const fileRef = this.af.ref(dir);
    const taskUpload = this.af.upload(dir, file);

    taskUpload.snapshotChanges()
    .pipe(
      finalize(() => {
        this.img = fileRef.getDownloadURL();
        this.img.subscribe(url => {
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

}
