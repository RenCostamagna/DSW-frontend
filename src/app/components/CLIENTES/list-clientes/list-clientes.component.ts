import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente'; 
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service'; 

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit { 

  listCliente: Cliente[] = []; 
  loading: boolean = false;

  constructor(private _ClienteService: ClienteService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListCliente();
  }

  
  getListCliente() {
    this.loading = true;
    this._ClienteService.getListCliente().subscribe( (data) => { 
        console.log('Datos recibidos desde la API:', data);
        this.listCliente = data.data || []; 
        console.log('Lista de clientes actualizada:', this.listCliente);
        this.loading = false;
      },
      (error:any) => {
        console.error('Error al obtener los clientes', error);
        this.toastr.error('Error al obtener los clientes', 'Error'); 
        this.loading = false; 
      }
    );
  }


editCliente(cliente: Cliente) {
  console.log('Editando Cliente:', cliente);

}

deleteClientes(idCliente: number) {
  console.log('Eliminando Cliente:', idCliente);
  this.loading = true;
  this._ClienteService.deleteCliente(idCliente).subscribe(() =>{
    this.loading= false;
    this.getListCliente();
    this.toastr.warning('El cliente ha sido eliminado con éxito','Cliente Eliminado')

  })

}


addCliente() {
  console.log('Agregando nuevo cliente');
  }
}