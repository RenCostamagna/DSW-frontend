import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ingrediente } from 'src/app/interfaces/ingrediente';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: Ingrediente[] = [];
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getListIngredientes();
  }

  // Función para obtener la lista de ingredientes
  getListIngredientes() {
    this.loading = true;
    this._productService.getListIngredientes().subscribe((data) => {
        console.log('Datos recibidos desde la API:', data); 
        this.listProducts = data.data; 
        console.log('Lista de productos actualizada:', this.listProducts);
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los ingredientes', error);
      }
    )
  }
  


  editIngrediente(ingrediente: Ingrediente) {
    console.log('Editando ingrediente:', ingrediente);

  }

  deleteIngrediente(codIngrediente: number) {
    console.log('Eliminando ingrediente:', codIngrediente);
    this.loading = true;
    this._productService.deleteIngrediente(codIngrediente).subscribe(() =>{
      this.loading= false;
      this.getListIngredientes();
      this.toastr.warning('El ingrediente ha sido eliminado con éxito','Ingrediente Eliminado')

    })

  }

  // Función para agregar un nuevo ingrediente
  addIngrediente() {
    console.log('Agregando nuevo ingrediente');
    // Lógica para agregar un nuevo ingrediente (aquí puedes abrir un modal o formulario para agregar)
  }
}
