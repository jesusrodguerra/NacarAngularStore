import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  campoEmail: FormControl;

  constructor( ) {
    this.campoEmail = new FormControl('', [Validators.required, Validators.email]);
    // this.campoEmail.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit(): void {
  }

  enviarEmail() {
    if (this.campoEmail.valid) {
      console.log(this.campoEmail.value);
    }
  }

}
