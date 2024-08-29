import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralResponse } from '../../interfaces/auth.response.model';

const BASE_URL = 'http://http://localhost:2031/api/v1/public/users/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
    constructor(private http: HttpClient) { }
  
    login(payload:any): Observable<any> {
      return this.http.post<GeneralResponse>(BASE_URL + 'login', {
       payload
      });
    }
  
  
}
