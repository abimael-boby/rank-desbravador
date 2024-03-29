import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employees$ = this.employeesSvc.employees;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };


  constructor(private router: Router, private employeesSvc: EmployeesService) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    console.log('oque vai', this.navigationExtras);
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  async onGoToDelete(empId: string): Promise<void>{
    console.log('entrou no delete list');
    try {
     await this.employeesSvc.onDeleteEmployees(empId);
     alert('Deleted');
    } catch (error) {
      console.log(error);
    }
  }

}
