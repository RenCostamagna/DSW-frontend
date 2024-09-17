import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHamburguesasComponent } from './list-hamburguesas.component';

describe('ListHamburguesasComponent', () => {
  let component: ListHamburguesasComponent;
  let fixture: ComponentFixture<ListHamburguesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHamburguesasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHamburguesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
