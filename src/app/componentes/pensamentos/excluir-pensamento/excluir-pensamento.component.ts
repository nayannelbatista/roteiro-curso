import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
      id: 0,
      conteudo: '',
      autoria: '',
      modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(pensamento => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(): void {
    this.service.excluir(this.pensamento.id).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }

}
