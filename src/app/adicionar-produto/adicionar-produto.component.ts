import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Produto} from '../modelo/produto';
import {ProdutosService} from '../services/produtos.service';
import {NgForm} from '@angular/forms';
import {ConcretService} from '../services/concret-service';
import {Categoria} from '../modelo/categoria';
import {CategoriasService} from '../services/categorias.service';
import {error} from 'util';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('modal') modal;
  @Output() output: EventEmitter<any>  = new EventEmitter();
  produto: Produto;
  categorias: Categoria[];
  categoria: Categoria;
  constructor(private produtoService: ProdutosService, private categoriaService: CategoriasService) {
    this.produto = new Produto();
    this.categorias = [];
    this.categoria = new Categoria();
  }

  ngOnInit() {
    this.getCategorias();
  }

  clickAdicionar(produto: Produto) {
    this.produtoService.save(produto).toPromise().then(x => {
      this.output.emit();
      this.modal = false;
    }).catch( erro => {
      this.modal = false;
    });
  }
  getCategorias() {
    this.categoriaService.get().toPromise().then((x: any) => {
      this.categorias = x.data as Categoria[];
    });
  }
  clickCancelar() {
    this.output.emit();
    this.modal = false;
  }

  adicionaCategoria() {
    this.produtoService.addCategoria(this.produto, this.categoria).toPromise()
      .then( (x: any) => {
        console.log(x);
        this.produto.categorias.push(x.data);
        console.log(x.success);
      })
      .catch(erro => {
        alert(erro.error);
      });
  }
  removerCategoria(categoria: Categoria) {
    this.produtoService.delCategoria(this.produto, categoria).toPromise()
      .then( (x: any) => {
        console.log(x);
        this.produto.categorias.filter((categorias: Categoria) => {
          if (categorias.id === categoria.id) {
            return true;
          }
        });
      })
      .catch(erro => {
        alert(erro);
      });
  }
}
