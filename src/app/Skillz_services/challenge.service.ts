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
      .push({ name: dados.name })
      .then((key) => {
        this.key = key.key;
        console.log('salvo');
        firebase
          .storage()
          .ref()
          .child(`Challenge/${dados.name}`)
          .put(dados.file)
          .then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url: any) => {
              console.log(`url da file recuperada: ${url}`);
              firebase
                .database()
                .ref(`Challenge/${this.key}`)
                .update({ url: url })
                .then(() => {
                  console.log('Imagem Salva ');
                });
            });
          });
      });
  }
  public SetFile1(data: any) {
    firebase
      .storage()
      .ref()
      .child(`Challenge/${data.name}`)
      .put(data.file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url: any) => {
          console.log(`url da file recuperada: ${url}`);
          //return url;
        });
      });
  }

  public SetFile(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .storage()
        .ref()
        .child(`Challenge/${data.name}`)
        .put(data.file)
        .then((snapshot) => {
          snapshot.ref
            .getDownloadURL()
            .then((url) => {
              console.log('file ', url);
              firebase
                .database()
                .ref('Challenge')
                .push({ url: url })
                .then((key) => {
                  this.key = key.key;
                  console.log('salvo');
                  let data: Array<any> = [];
                  let set = {
                    key: this.key,
                    url: url,
                  };
                  data.push(set);
                  resolve(data);
                });
            })
            .catch((err: any) => {
              reject(err);
            });
        });
    });
  }

  public GetFiles(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(`Challenge`)
        .orderByKey()
        .once('value')
        .then((snapshot: any) => {
          let consulta: Array<any> = [];
          snapshot.forEach((child: any) => {
            let teste = child.val();
            consulta.push(teste);
            resolve(consulta);
          });
        });
    });
  }
}
