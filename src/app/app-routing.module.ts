import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListProductsComponent } from './components/INGREDIENTES/list-products/list-products.component';
import { AddEditProductComponent } from './components/INGREDIENTES/add-edit-product/add-edit-product.component';
import { ListHamburguesasComponent } from './components/HAMBURGUESAS/list-hamburguesas/list-hamburguesas.component';
import { AddEditHamburguesaComponent } from './components/HAMBURGUESAS/add-edit-hamburguesas/add-edit-hamburguesas.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { ClientePrincipalComponent } from './components/cliente-principal/cliente-principal.component';
import { LoginPComponent } from './components/login/layout/publico/login-p/login-p.component';
import { MainMenuAdminComponent } from './components/main-menu-admin/main-menu-admin.component';
import { AddEditClientesComponent } from './components/CLIENTES/add-edit-clientes/add-edit-clientes.component';
import { ListClientesComponent } from './components/CLIENTES/list-clientes/list-clientes.component';

const routes: Routes = [
  { path: 'menu', component: SelectUserComponent },
  {path:'cliente',component:ClientePrincipalComponent },
  {path:'admin-login',component:LoginPComponent},
  {path:'main-menu-admin',component:MainMenuAdminComponent},
  // Ingredientes
  { path: 'listingredients', component: ListProductsComponent },
  { path: 'listingredients/add', component: AddEditProductComponent },
  { path: 'listingredients/edit/:codIngrediente', component: AddEditProductComponent },
  // Hamburguesas
  { path: 'listhamburguesas', component: ListHamburguesasComponent },
  { path: 'listhamburguesas/add', component: AddEditHamburguesaComponent },
  { path: 'listhamburguesas/edit/:idHamburguesa', component: AddEditHamburguesaComponent },
   // Clientes
   { path: 'listclientes', component: ListClientesComponent },
   { path: 'listclientes/add', component: AddEditClientesComponent },
   { path: 'listclientes/edit/:idCliente', component: AddEditClientesComponent },
  // Ruta comodín
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Llaves simples y coma
  exports: [RouterModule]
})
export class AppRoutingModule {} // Nombre de clase corregido
