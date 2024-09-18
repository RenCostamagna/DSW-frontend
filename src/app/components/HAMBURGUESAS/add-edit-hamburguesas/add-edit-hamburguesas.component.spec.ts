import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHamburguesaComponent } from './add-edit-hamburguesas.component';

describe('AddEditHamburguesasComponent', () => {
  let component: AddEditHamburguesaComponent;
  let fixture: ComponentFixture<AddEditHamburguesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHamburguesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditHamburguesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
