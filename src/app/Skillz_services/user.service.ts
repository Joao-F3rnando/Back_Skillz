import { Users } from '../Skillz_models/user.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private rotas: Router) {}

  public async GetUsers(email: any): Promise<string> {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(`Skillz_Users/${btoa(email)}`)
        .on('value', (snapshot: any) => {
          snapshot.forEach((childSnapshot: any) => {
            const UserData = childSnapshot.val();
            const data = UserData;
            console.log(data);
            resolve(data);
          });
        });
    });
  }
}
