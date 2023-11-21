import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { authentication } from './authentication.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private autenticacao: authentication) {}
  canActivate(): boolean {
    return this.autenticacao.CheckUser();
  }
}