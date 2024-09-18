import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Hamburguesa } from 'src/app/interfaces/hamburguesa';
import { HamburguesaService } from 'src/app/services/hamburguesa.service';


@Component({
  selector: 'app-add-edit-hamburguesas',
  templateUrl: './add-edit-hamburguesas.component.html',
  styleUrls: ['./add-edit-hamburguesas.component.css']
})
export class AddEditHamburguesaComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  idHamburguesa: number = 0;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: HamburguesaService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Extraer el parámetro de la ruta
    this.idHamburguesa = Number(this.aRouter.snapshot.paramMap.get('idHamburguesa'));

    if (this.idHamburguesa) {
      this.operacion = 'Editar ';
      this.getHamburguesa(this.idHamburguesa);
    }
  }

  getHamburguesa(idHambuguesa: number): void {
    this.loading = true;
    this._productService.getHamburguesa(idHambuguesa).subscribe(
      (data: Hamburguesa) => {
        this.loading = false;
        this.form.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion
        });
      },
      (error) => {
        this.loading = false;
        this.toastr.error('Error al cargar la hamburguesa', 'Error');
      }
    );
  }

  addHamburguesa(): void {
    if (this.form.invalid) return; 

    const hamburguesa: Hamburguesa = {
      nombre: this.form.value.nombre,
      descripcion: this.form.value.descripcion
    };

    if (this.idHamburguesa) {
      hamburguesa.idHamburguesa = this.idHamburguesa;
      this.loading = true;
      this._productService.updateHamburguesa(this.idHamburguesa, hamburguesa).subscribe(
        () => {
          this.toastr.success(`La hamburguesa ${hamburguesa.descripcion} fue modificada con éxito`, 'Hamburguesa Modificada');
          this.loading = false;
          this.router.navigate(['/listhamburguesas']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al modificar la hamburguesa', 'Error');
        }
      );
    } else {
      this.loading = true;
      this._productService.saveHamburguesa(hamburguesa).subscribe(
        () => {
          this.toastr.success(`La hamburguesa ${hamburguesa.descripcion} fue registrada con éxito`, 'Hamburguesa Registrada');
          this.loading = false;
          this.router.navigate(['/listhamburguesas']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al registrar la hamburguesa', 'Error');
        }
      );
    }
  }
}