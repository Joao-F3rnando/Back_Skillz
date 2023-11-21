import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from '../Skillz_models/user.model';
import { authentication } from '../Skillz_services/authentication.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private authentication: authentication) {}
  public isLoading: boolean = false;

  formulario: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    nome_completo: new FormControl(null),
    telefone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{11}$'),
    ]),
    nome_usuario: new FormControl(null),
    senha: new FormControl(null),
  });

  public CadUser(): void {
    this.isLoading = true;
    if (
      this.formulario.value.senha.length < 6 ||
      this.formulario.value.nome_usuario.length < 3 ||
      this.formulario.value.nome_completo.length < 3
    ) {
      this.isLoading = false;
      alert('Preencha todos os campos');
    } else {
      const usuario: Users = new Users(
        this.formulario.value.email,
        this.formulario.value.nome_completo,
        this.formulario.value.telefone,
        this.formulario.value.nome_usuario,
        btoa(this.formulario.value.senha),
      );
      console.log(usuario);
      this.authentication
        .createUser(usuario)
        .then(() => {
          this.isLoading = false;
        })
        .catch((e: string) => console.log(e));
    }
  }
}
