import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
    selector: 'app-from-employee',
    templateUrl: './from-employee.component.html',
    styleUrls: ['./from-employee.component.css']
})
export class FromEmployeeComponent implements OnInit {

    employeeForm: NgForm;

    employee: Employee = {
        Id: null,
        FirstName: null,
        LastName: null,
        Gender: null,
        Salary: null
    };

    @Output()
    emitEmployee = new EventEmitter<Employee>();


    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
    }

    saveEmployee(employee) {
            this.emitEmployee.emit(employee);
    }

}
