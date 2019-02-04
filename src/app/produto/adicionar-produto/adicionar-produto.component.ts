import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Produto} from '../../modelo/produto';
import {ProdutosService} from '../../services/produtos.service';
import {NgForm} from '@angular/forms';
import {ConcretService} from '../../services/concret-service';
import {Categoria} from '../../modelo/categoria';
import {CategoriasService} from '../../services/categorias.service';
import {error, isUndefined} from 'util';
import {DomSanitizer} from '@angular/platform-browser';

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
  visivel: boolean;
  imagePreview = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfNzdcbzyOd6xzsIpkpwqaS3ZKiHldyqoievdmb7vQ5MFQ6WS';
  constructor(private produtoService: ProdutosService, private categoriaService: CategoriasService, public sanitizer: DomSanitizer) {
    this.produto = new Produto();
    this.categorias = [];
    this.categoria = new Categoria();
    this.visivel = false;
  }

  ngOnInit() {
    this.getCategorias();
  }

  clickAdicionar(produto: Produto) {
    console.log(this.produto.imagem);
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
    // VERIFICA SE ID DE PRODUTO EXISTE, CASO CONTRÁRIO ENTENDE QUE É UM PRODUTO NOVO
    if (isUndefined(this.produto.id) && !this.produto.categorias.some( x => x.id === this.categoria.id)) {
      this.produto.categorias.push(this.categoria);
      this.visivel = false;
      return true;
    }
    // CASO PRODUTO TENHA UM ID SERVIÇO ENVIA PARA A API E FAZ A ATUALIZAÇÃO DO ARRAY DE CATEGORIAS
    this.produtoService.addCategoria(this.produto, this.categoria).toPromise()
      .then( (x: any) => {
        this.produto.categorias.push(x.data);
        this.visivel = false;
      })
      .catch(erro => {
        this.visivel = true;
      });
  }
  removerCategoria(categoria: Categoria) {
    // VERIFICA SE ID DE PRODUTO EXISTE, CASO CONTRÁRIO ENTENDE QUE É UM PRODUTO NOVO
    this.produto.categorias = this.produto.categorias.filter( x => x.id !== categoria.id);
    // CASO PRODUTO TENHA UM ID SERVIÇO ENVIA PARA A API E FAZ A ATUALIZAÇÃO DO ARRAY DE CATEGORIAS
    this.produtoService.delCategoria(this.produto, categoria).toPromise()
      .then( (x: any) => {
        this.produto.categorias = this.produto.categorias.filter( cat => cat.id !== categoria.id );
        this.visivel = false;
      })
      .catch(erro => {
        this.visivel = true;
      });
  }

  upload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.produto.imagem = event.target.result;
      };
      this.produto.imagem = event.target.files[0];
    }
  }

  imagemUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.produto.imagem);
  }
}
