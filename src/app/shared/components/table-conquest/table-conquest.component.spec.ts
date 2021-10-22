import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConquestComponent } from './table-conquest.component';

describe('TableConquestComponent', () => {
  let component: TableConquestComponent;
  let fixture: ComponentFixture<TableConquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConquestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
