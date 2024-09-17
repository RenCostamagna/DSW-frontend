import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingrediente } from '../interfaces/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class ProductService {  //INGREDIENTESERVICE
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint
    this. myApiUrl = 'api/ingredientes/'

   }
   getListIngredientes(): Observable<{ data: Ingrediente[] }> {
    return this.http.get<{ data: Ingrediente[] }>(this.myAppUrl + this.myApiUrl);
  }
  
  deleteIngrediente(codIngrediente: number): Observable<void>{
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + codIngrediente)
  }
  
  saveIngrediente(ingrediente:Ingrediente):  Observable<void>{
    return this.http.post<void>(this.myAppUrl + this.myApiUrl , ingrediente)

  }
  getIngrediente(codIngrediente: number): Observable<Ingrediente>{
    return this.http.get<Ingrediente>(this.myAppUrl + this.myApiUrl + codIngrediente)
  }
  updateIngrediente(codIngrediente: number, ingrediente: Ingrediente): Observable<void>{
    return this.http.put<void>(this.myAppUrl + this.myApiUrl +codIngrediente, ingrediente)
  }
}
