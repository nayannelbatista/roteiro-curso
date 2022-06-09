import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // pensamento = {
  //   id: 0,
  //   conteudo: '',
  //   autoria: '',
  //   modelo: 'modelo1'
  // }

  pensamento?: Pensamento;

  constructor() { }

  ngOnInit() {
  }

  criarPensamento() {
    alert("Novo pensamento criado")
  }

  cancelar() {
    alert("Ação cancelada")
  }

}
