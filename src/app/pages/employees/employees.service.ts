import { async } from '@angular/core/testing';
import { Employee } from './../../shared/models/Employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees: Observable<Employee[]>;
  teste: any;

  private employeeCollection: AngularFirestoreCollection<Employee>;


  constructor(private readonly afs: AngularFirestore) {
    this.employeeCollection = afs.collection<Employee>('users');
    this.getEmployee();
    // this.employees = collectionData(xcollection);
  }

  onDeleteEmployees(empId: string): Promise<void> {
    console.log('entrou no delete');
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.employeeCollection.doc(empId).delete();
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });
  }

  // tslint:disable-next-line:typedef
  onLoadEmployees(empId: string): Observable<any>{
    return this.employeeCollection.doc(empId).get();
  }


  onSaveEmployee(employee: Employee, empId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const id = empId || this.afs.createId();
        const data = { id, ...employee };
        const result = this.employeeCollection.doc(id).set(data);
        resolve(result);
      } catch (err) {
        reject(err.message);
      }
    });

  }

  private getEmployee(): void {
    this.employees = this.employeeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Employee))
    );
  }





}
