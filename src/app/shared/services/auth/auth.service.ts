import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getAuthSession(): any {
    const sessionData = localStorage.getItem('authData');

    return sessionData ? JSON.parse(sessionData) : null;
  }
}
