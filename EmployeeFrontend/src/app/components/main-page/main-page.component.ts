import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ListEmployeesComponent } from '../list-employees/list-employees.component';
import { FromEmployeeComponent } from '../from-employee/from-employee.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    @ViewChild('list')
    list: ListEmployeesComponent;

    employee: Employee;

    @ViewChild('form')
    form: FromEmployeeComponent;

    constructor(private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    saveEmployee(employee) {
        if (!employee.Id) {
            this.employeeService.postEmployee(employee).subscribe((data) => {
                this.list.employees.push(data);
                this.form.employee = {
                    Id: null,
                    FirstName: null,
                    LastName: null,
                    Gender: null,
                    Salary: null
                };
            });
        } else {
            this.employeeService.putEmployee(employee).subscribe((data) => {
                this.list.employees = this.list.employees.filter((item) => {
                    return item.Id !== data.Id;
                });
                this.list.employees.push(data);
                this.form.employee = {
                    Id: null,
                    FirstName: null,
                    LastName: null,
                    Gender: null,
                    Salary: null
                };
            });
        }

    }

    updateForm(employee) {
        this.form.employee = Object.assign({}, employee);
    }

}
