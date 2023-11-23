import { Component } from '@angular/core';

@Component({
  selector: 'app-my-challenge',
  templateUrl: './my-challenge.component.html',
  styleUrls: ['./my-challenge.component.css']
})
export class MyChallengeComponent {

  constructor(){

  }

  downloadFile(): void {
    let downloadLink =
      'https://firebasestorage.googleapis.com/v0/b/skillzbd-deb54.appspot.com/o/Challenge%2FProjeto%201.zip?alt=media&token=e5c30be2-18ac-4f2f-8f35-4d958a623d51';
    const link = document.createElement('a');
    link.href = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
