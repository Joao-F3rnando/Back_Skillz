import { Component } from '@angular/core';

@Component({
  selector: 'app-my-challenge',
  templateUrl: './my-challenge.component.html',
  styleUrls: ['./my-challenge.component.css'],
})
export class MyChallengeComponent {
  constructor() {}

  downloadFile(): void {
    let downloadLink =
      'https://firebasestorage.googleapis.com/v0/b/skillzbd-deb54.appspot.com/o/Challenge%2FDesafio%20HTML.zip?alt=media&token=eed6c70a-8ab1-4f99-a9a5-686113a9ab46';
    const link = document.createElement('a');
    link.href = downloadLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
