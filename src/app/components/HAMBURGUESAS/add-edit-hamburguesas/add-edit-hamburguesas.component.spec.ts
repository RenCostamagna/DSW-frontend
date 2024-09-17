import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHamburguesasComponent } from './add-edit-hamburguesas.component';

describe('AddEditHamburguesasComponent', () => {
  let component: AddEditHamburguesasComponent;
  let fixture: ComponentFixture<AddEditHamburguesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHamburguesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHamburguesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
