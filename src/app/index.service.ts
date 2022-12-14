import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './interface/Ihome-page-interface';
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Employees";

  getEmployees() {
    return this.http.get<Employees[]>(this.url)
  }
}
