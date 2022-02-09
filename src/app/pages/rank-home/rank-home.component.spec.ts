import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankHomeComponent } from './rank-home.component';

describe('RankHomeComponent', () => {
  let component: RankHomeComponent;
  let fixture: ComponentFixture<RankHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
