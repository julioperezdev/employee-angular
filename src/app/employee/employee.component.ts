import {HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {IEmployee} from 'src/models/employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  public employees: IEmployee[];

  constructor(private employeeService: EmployeeService) { }

  public ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: any) => {
        this.employees = response.body;
	console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      })
  }
}
