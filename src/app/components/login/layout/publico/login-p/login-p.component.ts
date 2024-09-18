import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginPrd: AutenticacionService,
    private router: Router // Inyectar el Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.createMyForm();
  }

  private createMyForm(): FormGroup {
    return this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  public submitFormulario() {
    if (this.myForm.invalid) {
      Object.values(this.myForm.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }

    if (!this.loginPrd.ingresarAdminisitrativo(this.myForm.value)) {
      alert("usuario o contraseña invalido");
    } else {
      // Navegar a la ruta '/main-menu' si el inicio de sesión es exitoso
      this.router.navigate(['/main-menu-admin']);
    }
  }

  public get f(): any {
    return this.myForm.controls;
  }

}

