import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-list-employees',
    templateUrl: './list-employees.component.html',
    styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

    employees: Employee[];

    @Output()
    editEmployee = new EventEmitter();

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.employeeService.getEmployees().subscribe((data) => {
            this.employees = data;
        });
    }

    deleteEmployee(employee: Employee) {
        this.employeeService.deleteEmployee(employee.Id).subscribe((result) => {
            this.employees = this.employees.filter((item) => {
                return item.Id !== employee.Id;
            });
        });
    }

    edit(employee) {
        this.editEmployee.emit(employee);
    }


}
