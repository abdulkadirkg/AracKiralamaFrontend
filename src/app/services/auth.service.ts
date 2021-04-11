import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { LoginResponseModel } from '../models/loginResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserModel } from '../models/userModel';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44389/api/auth/';
  constructor(private httpClient: HttpClient,
    private sharedService:SharedService) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<LoginResponseModel<TokenModel>>(
      this.sharedService.baseUrl + 'auth/login',
      loginModel
    );
  }

  register(registerModel:UserModel){
    return this.httpClient.post<LoginResponseModel<TokenModel>>(
      this.sharedService.baseUrl + 'auth/register',
      registerModel
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
