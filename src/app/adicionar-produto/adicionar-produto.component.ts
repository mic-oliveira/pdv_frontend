import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Produto} from '../modelo/produto';
import {ProdutosService} from '../services/produtos.service';
import {NgForm} from '@angular/forms';
import {ConcretService} from '../services/concret-service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('modal') modal;
  @Output() output: EventEmitter<any>  = new EventEmitter();
  produto: Produto = new Produto();
  constructor(private produtoService: ProdutosService) {
    this.produtoService.url = 'produtos';
  }

  ngOnInit() {
  }

  clickAdicionar(produto: Produto) {
    this.produtoService.save(produto).toPromise().then(x => {
      this.output.emit();
      this.modal = false;
    }).catch( (error: Response) => {
      // alert(error.statusText);
      console.log(error);
      this.modal = false;
    });
  }
  clickCancelar() {
    this.output.emit();
    this.modal = false;
  }
  parsePreco(event: any) {
    this.produto.preco = event.target.value;
  }
}
