import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudClasesComponent } from './crud-clases.component';

describe('CrudClasesComponent', () => {
  let component: CrudClasesComponent;
  let fixture: ComponentFixture<CrudClasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudClasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudClasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
