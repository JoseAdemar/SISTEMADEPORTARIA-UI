import { Component, OnInit } from '@angular/core';
import { VisitaModel } from '../models/visita.model';
import { VisitanteModel } from '../models/visitante.model';
import { VisitaService } from '../servicos/visita.service';
import Swal from 'sweetalert2';

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




 //Metodo de alertas abaixo

 opensweetalert(){
  Swal.fire({
    text: 'Cadastrado com sucesso',
    icon: 'success'
  })

//fim do metodo de alertas
}

//inicio do alerta excluir
opensweetalertExcluir(){
  Swal.fire({
    text: 'Excluído com sucesso',
    icon: 'success'
  })

//fim do alerta excluir
}}



