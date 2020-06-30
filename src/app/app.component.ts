import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['',Validators.required],
      lastname1: ['', Validators.required],
      lastname2: ['',Validators.required],
      ssn: ['', [Validators.required, Validators.pattern("^(?!0{4})\\d{4}$")]],
      postalCode: ['', [Validators.required, Validators.pattern("^(?!0{4})\\d{4}$")]],
      birthday: ['', Validators.required],
      email: ['', [Validators.email,Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['',  [Validators.required]],

    });
  }
  
  onClickSubmit(
    name, lastname1,
     lastname2, ssn,
      postalCode,birthday,
       email, password){

          alert(' Name: '+ name+
          '\n Apellido paterno: '+ lastname1 +
          '\n Apellido materno: '+ lastname2 +
          '\n Ssn: '+ ssn +
          '\n Código postal: '+ postalCode +
          '\n Fecha de nacimiento: '+ birthday +
          '\n Correo electrónico: '+ email + 
          '\n Contraseña: '+ password);
  }

  ngOnInit() {
  }
}
