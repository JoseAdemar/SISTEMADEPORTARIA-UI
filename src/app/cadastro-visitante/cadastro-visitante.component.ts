import { Component, OnInit } from '@angular/core';
import { VisitanteModel } from '../models/visitante.model';
import { VisitanteService } from '../servicos/visitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.css']
})
export class CadastroVisitanteComponent implements OnInit {

  p: VisitanteModel = new VisitanteModel();
  visitantes: Array<any> = new Array();

    constructor(private visitanteService: VisitanteService) {}

  ngOnInit() {
    this.listarVisitantes();
  }

  atualizar(id: number) {
      this.visitanteService.atualizarVisitante(id, this.p).subscribe(data => {
      this.p = new VisitanteModel();
      this.listarVisitantes();

    }, error => { console.log('Erro ao atualizar cadastro de visitante', error) })
  }

  editar(id: number) {
    console.log(id);
    // aqui voce precisa chamar o metodo que busca por id, pra preencher o objeto.
    this.visitanteService.carregarVisitante(id, this.p).subscribe(data => {
      this.p = data;
      console.log(data);
    });

}


  remover(id:number){
      this.visitanteService.removerVisitante(id).subscribe(data => {
      this.p = new VisitanteModel();
      this.listarVisitantes();

    }, error => { console.log('Erro ao remover cadastro de visitante', error) })
  }



  cadastrar() {
    console.log(this.p);
    this.visitanteService.cadastrarVisitante(this.p).subscribe(data => {
         this.p = new VisitanteModel();
         this.listarVisitantes();

    }, error => { console.log('Erro ao cadastrar visitante', error) })
  }

  listarVisitantes() {
    this.visitanteService.listarVisitantes().subscribe(data => {
      this.visitantes = data;
      console.log(data);
      debugger

    }, error => {
      console.log('Erro ao listar os visitantes', error);
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


