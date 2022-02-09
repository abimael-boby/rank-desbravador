import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/pages/employees/employees.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  btnHiden = false;

  constructor(
    public authService: AuthService,
    private router: Router,
    public ngZone: NgZone,
    private employeesSvc: EmployeesService
  ) { }

  ngOnInit(): void {
    const cadastrado = window.localStorage.getItem('cadastrado');
    console.log('teste cas', cadastrado);
    this.btnHiden = cadastrado === 'true' ? true : false;
  }

  onGoToEdit(item: any): void {
    this.router.navigate(['profile/edit']);
  }

}
