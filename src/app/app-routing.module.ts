import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListProductsComponent } from './components/INGREDIENTES/list-products/list-products.component';
import { AddEditProductComponent } from './components/INGREDIENTES/add-edit-product/add-edit-product.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ListHamburguesasComponent } from './components/HAMBURGUESAS/list-hamburguesas/list-hamburguesas.component';
import { AddEditHamburguesasComponent } from './components/HAMBURGUESAS/add-edit-hamburguesas/add-edit-hamburguesas.component';

const routes: Routes = [
  { path: 'menu', component: MainMenuComponent },
  // Ingredientes
  { path: 'listingredients', component: ListProductsComponent },
  { path: 'listingredients/add', component: AddEditProductComponent },
  { path: 'listingredients/edit/:codIngrediente', component: AddEditProductComponent },
  // Hamburguesas
  { path: 'listhamburguesas', component: ListHamburguesasComponent },
  { path: 'listhamburguesas/add', component: AddEditHamburguesasComponent },
  { path: 'listhamburguesas/edit/:idHamburguesa', component: AddEditHamburguesasComponent },
  // Ruta comodín
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Llaves simples y coma
  exports: [RouterModule]
})
export class AppRoutingModule {} // Nombre de clase corregido
