import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.css']
})
export class CadastroVisitanteComponent {

  registros = [
    { nome: 'Pedro Martins', cpf:'544219545', telefone: '85421585' },
    { nome: 'Maria Eloisa', cpf:'544219545', telefone: '85421585' },
    { nome: 'José Junior', cpf:'544219545', telefone: '85421585' }
  ];
}
