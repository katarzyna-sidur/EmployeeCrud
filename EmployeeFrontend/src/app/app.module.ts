import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EmployeeService } from './services/employee.service';
import { Routes, RouterModule } from '@angular/router';
import { ShowEmployeesResolver } from './resolvers/list-resolver';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { FromEmployeeComponent } from './components/from-employee/from-employee.component';

const appRoutes: Routes = [
    {
        path: 'employee', component: MainPageComponent, resolve: {
            showEmployees: ShowEmployeesResolver
        }
    },
    { path: '', redirectTo: '/employee', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        MainPageComponent,
        ListEmployeesComponent,
        FromEmployeeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [EmployeeService],
    bootstrap: [AppComponent]
})
export class AppModule { }
