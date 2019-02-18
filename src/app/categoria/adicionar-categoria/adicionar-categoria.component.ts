import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Produto} from '../../modelo/produto';
import {Categoria} from '../../modelo/categoria';
import {CategoriasService} from '../../services/categorias.service';

@Component({
  selector: 'app-adicionar-categoria',
  templateUrl: './adicionar-categoria.component.html',
  styleUrls: ['./adicionar-categoria.component.css']
})
export class AdicionarCategoriaComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @ViewChild('modal') modal;
  @Output() output: EventEmitter<any>  = new EventEmitter();
  categoria: Categoria;
  visivel: boolean;
  constructor(private categoriaService: CategoriasService) {
    this.categoria = new Categoria();
    this.visivel = false;
  }

  ngOnInit() {
  }

  salvar() {
    this.categoriaService.save(this.categoria).toPromise().then(( x: any) => {
      this.output.emit();
      this.modal = false;
    }).catch( error => {
      console.log(error);
    });
  }

  cancelar() {
    this.modal = false;
  }

}
