import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product.js';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
       name: ['',Validators.required],
       description: ['',Validators.required],
       price: [null,Validators.required],
       stock: [null,Validators.required],
    })
    
   }

  ngOnInit(): void {
  }
  addProduct(){
    console.log (this.form);



   /* const product: Product = {

  */  }
  }
