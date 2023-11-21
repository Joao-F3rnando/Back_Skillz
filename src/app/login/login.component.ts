import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../Skillz_models/user.model';
import { authentication } from '../Skillz_services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private authentication: authentication) {}

  public isLoading: boolean = false;

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null),
    senha: new FormControl(null),
  });
  public Login(): void {
    this.isLoading = true;
    if (
      this.formulario.value.senha.length < 6 ||
      this.formulario.value.senha < 3
    ) {
      this.isLoading = false;
      alert('preencha corretamente todos os campos');
    } else {
      let login = {
        email: this.formulario.value.email,
        senha: btoa(this.formulario.value.senha),
      };
      this.authentication
        .checkAuthentication(login)
        .then(() => {
          this.isLoading = false;
          console.log('logado com sucesso');
        })
        .catch((e: string) => {
          console.log(e);
        });
    }
  }
}
