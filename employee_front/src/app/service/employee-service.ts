import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private apiVersion: number = 1
  private mainUrl = `http://localhost:8080/api/v${this.apiVersion}`


  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    let endPoint: string = `/employees`
    const finalUrl: string = `${this.mainUrl}${endPoint}`

    return this.httpClient.get<Employee[]>(finalUrl);
  }

}
