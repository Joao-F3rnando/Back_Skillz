import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
import { Challenge } from '../Skillz_services/challenge.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css',
})
export class UploadFilesComponent {
  constructor(private upload: Challenge) {}
  public imagem: any;

  public formulario: FormGroup = new FormGroup({
    name: new FormControl(null),
  });

  public fileupload(event: Event) {
    this.imagem = (<HTMLInputElement>event.target).files;
  }

  public SetFiles() {
    let teste = {
      name: this.formulario.value.name,
      imagem: this.imagem[0],
    };
    this.upload.SetFiles(teste);
    console.log(teste);
  }
  public Recuperar() {}
}
