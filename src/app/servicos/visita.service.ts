import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitaModel } from '../models/visita.model';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http: HttpClient) { }


  cadastrarVisita(visita: VisitaModel): Observable<any> {
    return this.http.post('http://localhost:8080/visitas', visita);
  }

    public listarVisita(): Observable<any> {
     return  this.http.get('http://localhost:8080/visitas');
   }

   atualizarVisita(id:any, visita: VisitaModel): Observable<any> {
    return this.http.put('http://localhost:8080/visitas/'.concat(id), visita);
  }

  carregarVisita(id:any, visita: VisitaModel): Observable<any> {
    return this.http.get('http://localhost:8080/visitas/'.concat(id));
  }

  removerVisita(id:any){
    return this.http.delete('http://localhost:8080/visitas/'.concat(id));
  }
}