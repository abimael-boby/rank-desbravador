import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees/employees.service';

@Component({
  selector: 'app-rank-home',
  templateUrl: './rank-home.component.html',
  styleUrls: ['./rank-home.component.scss']
})
export class RankHomeComponent implements OnInit {

  constructor(private router: Router, private employeesSvc: EmployeesService) { }
  employees$ = this.employeesSvc.employees;
  ngOnInit(): void {
  }

}
