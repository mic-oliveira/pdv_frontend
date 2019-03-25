import {Component, OnInit, ViewChild} from '@angular/core';
import {Categoria} from '../modelo/categoria';
import {ClrDatagridSortOrder} from '@clr/angular';
import {CategoriasService} from '../services/categorias.service';
import {AdicionarCategoriaComponent} from './adicionar-categoria/adicionar-categoria.component';
import {AlertApp} from '../modelo/alert-app';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  @ViewChild(AdicionarCategoriaComponent) child: AdicionarCategoriaComponent;
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  categorias: Categoria[];
  constructor(private categoriaService: CategoriasService, private alertService: AlertService) { }

  ngOnInit() {
    this.getCategorias();
  }
  getCategorias() {
    this.load = true;
    this.categoriaService.get().subscribe( (x: any) => {
      this.categorias = x.data;
      this.load = false;
    });
  }
  clickAdicionar() {
    this.child.categoria = new Categoria();
    this.child.modal = true;
  }
  clickEditar() {}
  clickDeletar() {}
}
