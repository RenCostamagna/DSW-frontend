import { Component } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SISTEMA-HAMBURGUESERIA';

  constructor (private loginPrd:AutenticacionService){

  }
  public entrarAdmin():boolean{
    return this.loginPrd.habilitarlogueo();
  }
  
}
