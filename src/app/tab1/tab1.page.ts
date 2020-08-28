import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { parse } from 'path';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  fac: string;
  IVA = 0;
  IT = 0;
  total = 0;
  utilidad = 0;
  df_IVA: string;



  constructor() {}

  calcular(){

    this.IVA = parseInt(this.fac)  * 0.13;

    this.IT = parseInt(this.fac) * 0.03;
    
    this.total = this.IVA + this.IT;
    
    this.utilidad = parseInt(this.fac) - this.total
  }

}
