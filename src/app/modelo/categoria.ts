import {Injectable} from '@angular/core';

@Injectable()
export class Categoria {
  private _id: number;
  private _descricao: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get descricao(): string {
    return this._descricao;
  }

  set descricao(value: string) {
    this._descricao = value;
  }
}
