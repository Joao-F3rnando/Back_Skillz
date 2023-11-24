import { Users } from '../Skillz_models/user.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authentication {
  public token_id: any;

  constructor(private rotas: Router) {}

  public async createUser(user: Users): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.senha)
      .then((response: any) => {
        firebase
          .database()
          .ref(`Skillz_Users/${btoa(response.email)}`)
          .push(user);
        //alert('Usuário cadastrado com sucesso');
        this.rotas.navigate(['/login']);
      })
      .catch((err: Error) => console.log(err))
      .then((response: any) => {
        console.log(response);
      });
  }

  public async checkAuthentication(login: any): Promise<any> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.senha)
      .then(() => {
        //alert('Autenticação realizada com sucesso');
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((id: string) => {
            this.token_id = id;
            console.log(this.token_id);
            localStorage.setItem('id_token', id);
            this.rotas.navigate(['/myproject']);
          });
      })
      .catch((err: Error) => {
        alert('algo deu errado');
        console.log(err);
      });
  }

  public async deleteUserFromDatabase(email: string): Promise<any> {
    const del = firebase.database().ref(`Skillz_Users/${btoa(email)}`);
    try {
      await del.remove();
      console.log('Dados deletados com sucesso');
    } catch (err) {
      console.log(err);
    }
  }

  public logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('id_token');
        this.token_id = undefined;
        this.rotas.navigate(['/login']);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  public CheckUser(): boolean {
    let ok: boolean = false;
    if (localStorage.getItem('id_token') != null) {
      this.token_id = localStorage.getItem('id_token');
      ok = true;
    }
    if (this.token_id === undefined) {
      ok = false;
      this.rotas.navigate(['/']);
    }
    return ok;
  }
}
