import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { LoginResponseModel } from '../models/loginResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44389/api/auth/';
  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<LoginResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
