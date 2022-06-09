import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  // pensamento: Pensamento = {
  //   id: 0,
  //   conteudo: 'Angular é o melhor!',
  //   autoria: 'Nay',
  //   modelo: 'modelo1'
  // }

  pensamento?: Pensamento;

  listaPensamentos: any[] = [
    {
      id: 0,
      conteudo: 'Diretiva *ngFor',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      id: 0,
      conteudo: 'Aprendi na Alura',
      autoria: 'Dev',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  //pensamentoPequeno = true;

  ngOnInit(): void {
    // this.listaPensamentos.forEach(element => {
    //   if(element.conteudo.length >= 256){
    //     this.pensamentoPequeno = !this.pensamentoPequeno
    //   }
    // });
  }


  // larguraPensamento(): any{
  //   this.listaPensamentos.forEach(element => {
  //     if(element.conteudo.length >= 256){
  //       return 'pensamento-g'
  //     }
  //     return 'pensamento-p'
  //   });
  // }

  larguraPensamento(): any{
      if(this.pensamento && this.pensamento.conteudo.length >= 256){
        return 'pensamento-g'
      }
      return 'pensamento-p'
    };
}

