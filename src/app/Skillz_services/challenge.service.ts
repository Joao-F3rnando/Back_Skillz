import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class Challenge {
  public key: any;

  public SetFiles(dados: any): void {
    firebase
      .database()
      .ref(`Challenge`)
      .push({ endereco: dados.endereco, numero: dados.numero })
      .then((key) => {
        this.key = key.key;
        console.log('salvo');
        firebase
          .storage()
          .ref()
          .child(`Challenge/${this.key}`)
          .put(dados.imagem)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url: any) => {
              console.log(`url da imagem recuperada: ${url}`);
              firebase
                .database()
                .ref(`Quadras/${this.key}`)
                .update({ url: url })
                .then(() => {
                  console.log('Imagem Salva ');
                });
            });
          });
      });
  }
}
