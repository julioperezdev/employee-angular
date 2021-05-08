import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {IEmployee} from 'src/models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(
      `${this.apiServerUrl}/employee/add`,
      employee,
    );
  }

  public updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(
      `${this.apiServerUrl}/employee/update`,
      employee,
    );
  }

  public deleteEmployeeById(employeeId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/employee/delete/${employeeId}`
    );
  }
}
