import { Component, OnInit } from '@angular/core';
import { Hamburguesa } from 'src/app/interfaces/hamburguesa'; // Corrige el nombre del interface
import { ToastrService } from 'ngx-toastr';
import { HamburguesaService } from 'src/app/services/hamburguesa.service'; // Corrige el nombre del servicio

@Component({
  selector: 'app-list-hamburguesas',
  templateUrl: './list-hamburguesas.component.html',
  styleUrls: ['./list-hamburguesas.component.css']
})
export class ListHamburguesasComponent implements OnInit { // Corrige el nombre de la clase

  listHamburguesa: Hamburguesa[] = []; // Corrige el nombre del interface
  loading: boolean = false;

  constructor(private _HamburguesaService: HamburguesaService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListHamburguesa();
  }

  // Función para obtener la lista de hamburguesas
  getListHamburguesa() {
    this.loading = true;
    this._HamburguesaService.getListHamburguesa().subscribe(
      (data) => { // Verifica la estructura de datos recibidos
        console.log('Datos recibidos desde la API:', data);
        this.listHamburguesa = data.data || []; // Verifica que `data` tenga la estructura esperada
        console.log('Lista de hamburguesas actualizada:', this.listHamburguesa);
        this.loading = false;
      },
      (error:any) => {
        console.error('Error al obtener las hamburguesas', error);
        this.toastr.error('Error al obtener las hamburguesas', 'Error'); // Agrega un mensaje de error con Toastr
        this.loading = false; // Asegúrate de que loading sea falso incluso si hay un error
      }
    );
  }
}
