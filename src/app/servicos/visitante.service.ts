import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VisitanteModel } from '../models/visitante.model';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http: HttpClient) { }


  cadastrarVisitante(visitante: VisitanteModel): Observable<any> {
    return this.http.post('http://localhost:8080/visitantes', visitante);
  }

    public listarVisitantes(): Observable<any> {
     return  this.http.get('http://localhost:8080/visitantes');
   }

   atualizarVisitante(id:any, visitante: VisitanteModel): Observable<any> {
    return this.http.put('http://localhost:8080/visitantes/'.concat(id), visitante);
  }

  carregarVisitante(id:any, visitante: VisitanteModel): Observable<any> {
    return this.http.get('http://localhost:8080/visitantes/'.concat(id));
  }

  removerVisitante(id:any){
    return this.http.delete('http://localhost:8080/visitantes/'.concat(id));
  }
}