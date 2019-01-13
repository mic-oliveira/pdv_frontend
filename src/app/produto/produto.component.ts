import { Component, OnInit } from '@angular/core';
import {Produto} from '../modelo/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  constructor() { }

  ngOnInit() {
  }

}
