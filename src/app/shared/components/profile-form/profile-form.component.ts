import { User } from 'src/app/shared/models/user';
import { EmployeesService } from './../../../pages/employees/employees.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/Employee';
import { Iasd } from '../../models/iasd';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  employee: Employee;
  public user: User;

  employeeForm: FormGroup;
  iasds: Iasd[] = [
    {value: 'etelvina', viewValue: 'Jd Etelvina'},
    {value: 'aurora', viewValue: 'Jd Aurora'},
    {value: 'robru', viewValue: 'Robrú'},
  ];



  private isEmail = /\S+@\S+\.\S+/;
  constructor(
    private readonly afs: AngularFirestore,
    private router: Router, private fb: FormBuilder,
    private employeesSvc: EmployeesService,
    public authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
    const usuarioLocal = window.localStorage.getItem('user');
    const cadastrado = window.localStorage.getItem('cadastrado');
    const getCadastrado = cadastrado;
    this.user = JSON.parse(usuarioLocal);
    console.log('vai', this.user.uid);

    if (getCadastrado === 'true') {
      this.router.navigate(['dashboard']);
    } else {
      this.employeeForm.patchValue(this.user);
    }

  }


  onSave(): void {
    console.log('Saved', this.employeeForm.value);
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      const employeeId = this.user.uid || null;
      this.employeesSvc.onSaveEmployee(employee, employeeId);
      localStorage.setItem('cadastrado', 'true');
      this.router.navigate(['dashboard']);
    }
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      uid: [''],
      photoURL: [''],
      isAnonymous: [''],
      displayName: ['', [Validators.required]],
      emailVerified: [false],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      igreja: ['', [Validators.required]],
      dataNascimento: [''],
      patente: ['Recruta'],
      adventista: [''],
      camiseta: [''],
      sangue: [''],
      pontos: [30],
      telefone: ['']
    });
  }


  onGoBackToList(): void {
    this.router.navigate(['list']);
  }

}
