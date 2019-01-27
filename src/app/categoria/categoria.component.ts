import { Component, OnInit } from '@angular/core';
import {Categoria} from '../modelo/categoria';
import {ClrDatagridSortOrder} from '@clr/angular';
import {CategoriasService} from '../services/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  load = false;
  page = 5;
  ordenacao = ClrDatagridSortOrder.ASC;
  categorias: Categoria[];
  constructor(private categoriaService: CategoriasService) { }

  ngOnInit() {
    this.getCategorias();
  }
  getCategorias() {
    this.categoriaService.get().subscribe( (x: any) => {
      this.categorias = x.data;
    });
  }
  clickAdicionar() {}
  clickEditar() {}
  clickDeletar() {}
}
