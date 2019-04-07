import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PrintService} from '../services/print.service';
import {Observable} from 'rxjs';
import {Printer} from '../modelo/printer';

@Component({
  selector: 'app-print-config',
  templateUrl: './print-config.component.html',
  styleUrls: ['./print-config.component.css']
})
export class PrintConfigComponent implements OnInit {
  printers: Observable<any>;
  selectPrinterIndex: any;
  printer: Printer;

  constructor(private printService: PrintService) { }

  ngOnInit() {
    // console.log(this.printService.getPrinters().subscribe());
    this.getPprinters();
  }

  getPprinters() {
    return this.printService.get().subscribe( (x: Observable<any>) => {
      this.printers = x;
    });
  }

  setPrinterId(event) {
    this.printer = new Printer();
    this.selectPrinterIndex = event.target.value;
    console.log(this.selectPrinterIndex);
  }

  setModel(event) {
    this.printer.modelo = event.target.value;
  }

  setPrinter() {
    this.printService.add(this.printer);
  }

  test() {
    this.printService.test(this.printer).toPromise().then( x => {
      console.log(x.printer);
    });
  }

}
