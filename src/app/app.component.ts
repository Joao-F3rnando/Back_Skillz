import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'skillz';

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDhGi7EZqla0pNTJw5Etukb9AaIqlOIYBo',
      authDomain: 'skillzbd-deb54.firebaseapp.com',
      databaseURL: 'https://skillzbd-deb54-default-rtdb.firebaseio.com',
      projectId: 'skillzbd-deb54',
      storageBucket: 'skillzbd-deb54.appspot.com',
      messagingSenderId: '693798394500',
      appId: '1:693798394500:web:40ff2b5973b726f90200d1',
    };
    firebase.initializeApp(firebaseConfig);
    console.log('Sucessfully initialized');
  }
}
