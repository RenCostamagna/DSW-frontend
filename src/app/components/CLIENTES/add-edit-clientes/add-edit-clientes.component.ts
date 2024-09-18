import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-add-edit-clientes',
  templateUrl: './add-edit-clientes.component.html',
  styleUrls: ['./add-edit-clientes.component.css']
})
export class AddEditClientesComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  idCliente: number = 0;
  operacion: string = 'Agregar ';

  constructor(
    private fb: FormBuilder,
    private _productService: ClienteService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Extraer el parámetro de la ruta
    this.idCliente = Number(this.aRouter.snapshot.paramMap.get('idCliente'));

    if (this.idCliente) {
      this.operacion = 'Editar ';
      this.getCliente(this.idCliente);
    }
  }

  getCliente(idCliente: number): void {
    this.loading = true;
    this._productService.getCliente(idCliente).subscribe(
      (data: Cliente) => {
        this.loading = false;
        this.form.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          email: data.email,
          direccion: data.direccion
        });
      },
      (error) => {
        this.loading = false;
        this.toastr.error('Error al cargar el Cliente', 'Error');
      }
    );
  }

  addCliente(): void {
    if (this.form.invalid) return; 

    const cliente: Cliente = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      telefono: this.form.value.telefono,
      email: this.form.value.email,
      direccion: this.form.value.direccion

    };

    if (this.idCliente) {
      cliente.idCliente = this.idCliente;
      this.loading = true;
      this._productService.updateCliente(this.idCliente, cliente).subscribe(
        () => {
          this.toastr.success(`El cliente ${cliente.nombre} ${cliente.apellido} fue modificado con éxito`, 'Cliente Modificado');
          this.loading = false;
          this.router.navigate(['/listclientes']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al modificar el cliente', 'Error');
        }
      );
    } else {
      this.loading = true;
      this._productService.saveCliente(cliente).subscribe(
        () => {
          this.toastr.success(`El cliente ${cliente.nombre} ${cliente.apellido} fue registrado con éxito`, 'Cliente Registrado');
          this.loading = false;
          this.router.navigate(['/listclientes']);
        },
        (error) => {
          this.loading = false;
          this.toastr.error('Error al registrar el cliente', 'Error');
        }
      );
    }
  }
}