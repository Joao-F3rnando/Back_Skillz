import { Component, OnInit } from '@angular/core';
import { authentication } from '../Skillz_services/authentication.service';
import * as firebase from 'firebase';
import { User } from '../Skillz_services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private authentication: authentication,
    private users: User,
  ) {}

  public email: any;
  public isLoading: boolean = false;
  public GetDataFromUsers: any;

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user: any) => {
      console.log(user);
      if (user) {
        this.email = user.email;
        this.users.GetUsers(this.email).then((data) => {
          console.log(name);
          this.GetDataFromUsers = data;
        });

        console.log(this.email);
      }
    });
  }

  public logout(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = true;
      this.authentication.logout();
    }, 1000);
  }
  downloadPDF(): void {
    let pdfDownloadLink =
      'https://firebasestorage.googleapis.com/v0/b/skillzbd-deb54.appspot.com/o/Challenge%2FTeste?alt=media&token=7f0d18d1-b9aa-447a-ac19-1fe2949cf780';
    const link = document.createElement('a');
    link.href = pdfDownloadLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
