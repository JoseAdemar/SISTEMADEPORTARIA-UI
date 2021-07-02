import { Component, OnInit } from '@angular/core';
import { VisitaModel } from '../models/visita.model';
import { VisitanteModel } from '../models/visitante.model';
import { VisitaService } from '../servicos/visita.service';

@Component({
  selector: 'app-cadastro-visita',
  templateUrl: './cadastro-visita.component.html',
  styleUrls: ['./cadastro-visita.component.css']
})
export class CadastroVisitaComponent implements OnInit  {

  registro: VisitaModel = new VisitaModel();
  visita: Array<any> = new Array();
  ngx: any;

    constructor(private visitaService: VisitaService) {}

  ngOnInit() {
    this.listarVisita();
  }

  atualizar(id: number) {
      this.visitaService.atualizarVisita(id, this.registro).subscribe(data => {
      this.registro = new VisitaModel();
      this.listarVisita();

    }, error => { console.log('Erro ao atualizar visita', error) })
  }

  editar(id: number) {
    this.visitaService.carregarVisita(id, this.registro).subscribe(data => {
    this.registro = data;
  });
}

  remover(id:number){
      this.visitaService.removerVisita(id).subscribe(data => {
      this.registro = new VisitaModel();
      this.listarVisita();

    }, error => { console.log('Erro ao remover visita', error) })
  }



  cadastrar() {

    this.visitaService.cadastrarVisita(this.registro).subscribe(data => {
         this.registro = new VisitaModel();
         console.log(this.registro);
         this.listarVisita();


    }, error => { console.log('Erro ao cadastrar visita', error) })
  }

  listarVisita() {
    this.visitaService.listarVisita().subscribe(data => {
      this.visita = data;
      console.log(data);

    }, error => {
      console.log('Erro ao listar visita', error);
    })
  }






 /*
  registros = [
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
    { nome: 'Pedro Martins',idade: '25', nascimento: '18/06/1990', telefone: '8542158' },
  ];
}
*/
}