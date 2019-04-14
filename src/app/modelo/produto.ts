import {Categoria} from './categoria';
import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {AppConfig} from '../app-config';

@Injectable()
export class Produto {
  id: number;
  descricao: string;
  preco: number;
  estoque: number;
  categorias: Categoria[] = [];
  imagem: any;

  public addCategoria(categoria: Categoria) {
    this.categorias.push(categoria);
  }

  public verificaCategorias(id) {
    this.categorias.find((x: Categoria) => {
      if (x.id === id) {
        return true;
      }
      return false;
    });
  }
}
