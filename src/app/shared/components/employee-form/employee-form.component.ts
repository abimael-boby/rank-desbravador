import { EmployeesService } from './../../../pages/employees/employees.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/Employee';

interface Iasd {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee;
  employeeForm: FormGroup;
  iasds: Iasd[] = [
    {value: 'etelvina', viewValue: 'Jd Etelvina'},
    {value: 'aurora', viewValue: 'Jd Aurora'},
    {value: 'robru', viewValue: 'Robrú'},
  ];



  private isEmail = /\S+@\S+\.\S+/;
  constructor(private router: Router, private fb: FormBuilder, private employeesSvc: EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();

    if (typeof this.employee === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.employeeForm.patchValue(this.employee);
      console.log('teste do edit', this.employee);
    }
  }

  onSave(): void {
    console.log('Saved', this.employeeForm.value);
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.uid || null;
      this.employeesSvc.onSaveEmployee(employee, employeeId);
      this.employeeForm.reset();
    }
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      uid: [''],
      photoURL: [''],
      isAnonymous: [''],
      displayName: ['', [Validators.required]],
      emailVerified: [''],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      igreja: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      patente: [''],
      adventista: ['', [Validators.required]],
      camiseta: ['', [Validators.required]],
      sanguinio: ['', [Validators.required]],
    });
  }


  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

}
