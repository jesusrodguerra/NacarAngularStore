import { Component, OnInit } from '@angular/core';
import { AccesoriosService } from 'src/app/accesorios/accesorios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-accesorio',
  templateUrl: './create-accesorio.component.html',
  styleUrls: ['./create-accesorio.component.css']
})
export class CreateAccesorioComponent implements OnInit {

  form: FormGroup;
  img: Observable<any>;

  constructor(
    private accesorios: AccesoriosService,
    private formBuilder: FormBuilder,
    private route: Router,
    private afs: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  crearAccesorio(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const productoCrear = this.form.value;
      this.accesorios.createProduct(productoCrear).subscribe((newProduct) => {
        console.log(newProduct);
        this.route.navigate(['./admin/productA']);
      });
    }
  }

  subirImagen(event){
    const file = event.target.files[0];
    console.log(file);
    const dir = 'images';
    const fileRef = this.afs.ref(dir);
    const taskUpload = this.afs.upload(dir, file);

    taskUpload.snapshotChanges()
    .pipe(
      finalize(() => {
        this.img = fileRef.getDownloadURL();
        this.img.subscribe(url => {
          console.log(url);
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
