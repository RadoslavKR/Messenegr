import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'enctype': 'multipart/form-data;',
        'Accept': 'plain/text',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
      })
    };
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phone', data.phone);
    formData.append('image', data.image);
    return this.http.post('http://127.0.0.1:8000/api/add_user', formData, httpOptions);
  }

  async getUsers() {
    let getData = [];
    await this.http.get('http://127.0.0.1:8000/api/get_users').subscribe((data: any[]) => {
      data.forEach(element => {
        getData.push(element.fields);
      });
    });
    console.log(getData);
    return getData;
  }
}
