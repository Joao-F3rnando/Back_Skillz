import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Challenge } from '../Skillz_services/challenge.service';

@Component({
  selector: 'app-upload-challenge',
  templateUrl: './upload-challenge.component.html',
  styleUrl: './upload-challenge.component.css',
})
export class UploadChallengeComponent {
  constructor(private upload: Challenge) {}
  public file: any;
  public clear: any;
  public pdf: boolean = false;
  public success: string = '';
  public arquivo: boolean = false;
  public label: any = 5;
  public isLoading: boolean = false;
  public feedback: boolean = true;
  public key: any;

  public formulario: FormGroup = new FormGroup({
    name: new FormControl(null),
  });

  public fileupload(event: Event) {
    this.file = (<HTMLInputElement>event.target).files;
  }

  public SetFiles() {
    this.isLoading = true;
    let teste = {
      name: `${this.formulario.value.name}.zip`,
      file: this.file[0],
    };
    this.upload.SetFile(teste).then((url) => {
      console.log('URL: ', url);
      let data = url;
      //this.downloadLink = url;
      this.isLoading = false;
      this.isLoading = false;
      this.feedback = false;
      this.arquivo = true;
      this.success = 'Projeto enviado com sucesso';
      this.clear = '';
      this.key = data;
      console.log(this.key[0].key);
      setTimeout(() => {
        window.location.reload();
      }, 10000);
      //
    });
    console.log(teste);
  }
  public SetPDF() {
    let teste = {
      name: `${this.formulario.value.name}`,
      file: this.file[0],
    };
    this.upload.SetFile(teste).then((url) => {
      console.log('URL: ', url);
      //this.downloadLink = url;
    });
    console.log(teste);
  }
  public GetFiles() {
    let data = undefined;
    this.upload.GetFiles().then((response: any) => {
      data = response;
      console.log(data[0].url);
      console.log(response);
    });
  }

  downloadFile(): void {
    let downloadLink =
      'https://firebasestorage.googleapis.com/v0/b/skillzbd-deb54.appspot.com/o/Challenge%2Fkkkkkkkkk.zip?alt=media&token=6e585999-69df-460a-a42e-f38848e05bc8';
    const link = document.createElement('a');
    link.href = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  downloadPDF(): void {
    let pdfDownloadLink =
      'https://firebasestorage.googleapis.com/v0/b/skillzbd-deb54.appspot.com/o/Challenge%2Fjjjjjj?alt=media&token=90bb38b0-0a06-4afa-b523-28e790d15227';
    const link = document.createElement('a');
    link.href = pdfDownloadLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  count(): void {
    this.label++;
  }
}
