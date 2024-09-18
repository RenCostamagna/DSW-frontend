import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private ingresar: boolean =false;

  constructor() { }

  public ingresarAdminisitrativo(obj:any):boolean{
   this.ingresar = obj.usuario=='admin' && obj.password=='123' ;
    return this.ingresar;
      
    
}

  public habilitarlogueo(){
    return this.ingresar;
  }
}