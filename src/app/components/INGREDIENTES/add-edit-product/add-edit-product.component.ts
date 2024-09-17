import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  codIngrediente: number = 0;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      stock: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    // Extraer el parámetro de la ruta
    this.codIngrediente = Number(this.aRouter.snapshot.paramMap.get('codIngrediente'));

    if (this.codIngrediente) {
      this.operacion = 'Editar ';
      this.getIngrediente(this.codIngrediente);
    }
  }

  getIngrediente(codIngrediente: number): void {
    this.loading = true;
    this._productService.getIngrediente(codIngrediente).subscribe(
      (data: Ingrediente) => {
        this.loading = false;
        this.form.setValue({
          descripcion: data.descripcion,
          stock: data.stock
        });
      },
      (error) => {
        this.loading = false;
        this.toastr.error('Error al cargar el ingrediente', 'Error');
      }
    );
  }

  addIngrediente(): void {
    if (this.form.invalid) return; // Asegúrate de que el formulario es válido

    const ingrediente: Ingrediente = {
      descripcion: this.form.value.descripcion,
      stock: this.form.value.stock
    };

    if (this.codIngrediente) {
      ingrediente.codIngrediente = this.codIngrediente;
      this.loading = true;
      this._productService.updateIngrediente(this.codIngrediente, ingrediente).subscribe(
        () => {
          this.toastr.success(`El ingrediente ${ingrediente.descripcion} fue modificado con éxito`, 'Ingrediente Modificado');
          this.loading = false;
          this.router.navigate(['/listingredients']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al modificar el ingrediente', 'Error');
        }
      );
    } else {
      this.loading = true;
      this._productService.saveIngrediente(ingrediente).subscribe(
        () => {
          this.toastr.success(`El ingrediente ${ingrediente.descripcion} fue registrado con éxito`, 'Ingrediente Registrado');
          this.loading = false;
          this.router.navigate(['/listingredients']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al registrar el ingrediente', 'Error');
        }
      );
    }
  }
}
