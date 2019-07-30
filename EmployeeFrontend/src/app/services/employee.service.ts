import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    baseUrl = 'https://localhost:44339/api/employee';


    constructor(private httpClient: HttpClient) {
    }


    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }

    postEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee);
    }

    putEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(this.baseUrl + '/' + employee.Id.toString(), employee);
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.httpClient.delete<Employee>(this.baseUrl + '/' + id.toString());
    }

}
