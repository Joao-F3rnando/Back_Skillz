import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-challenge',
  templateUrl: './community-challenge.component.html',
  styleUrls: ['./community-challenge.component.css'],
})
export class CommunityChallengeComponent {
  constructor(private rotas: Router) {}

  public isLoading: boolean = false;

  public await(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.rotas.navigate(['/my-challenge']);
    }, 1000);
  }
}
