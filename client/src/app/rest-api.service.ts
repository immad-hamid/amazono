import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {
  apiConstant: string;

  constructor(private http: HttpClient) {
    this.apiConstant = 'http://localhost:3030/api'
  }

  // get header
  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

  // get method
  get(link: string) {
    return this.http.get(link, { headers: this.getHeaders() }).toPromise();
  }

  // post method
  post(link: string, body: any) {
    return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
  }

}
