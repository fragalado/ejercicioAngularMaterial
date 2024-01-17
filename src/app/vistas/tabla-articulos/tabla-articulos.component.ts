import { Component } from '@angular/core';

export interface Articulo {
  nombre: string;
  cantidad: number;
}

const ELEMENT_DATA: Articulo[] = [
  {nombre: "Mochila", cantidad: 20},
  {nombre: "Lápiz", cantidad: 150},
  {nombre: "Monitor", cantidad: 3},
  {nombre: "Iphone", cantidad: 2},
  {nombre: "Teclado", cantidad: 13},
  {nombre: "Balón de Baloncesto", cantidad: 52},
  {nombre: "Gafas de sol", cantidad: 150},
  {nombre: "Cubo de Rubik", cantidad: 32},
  {nombre: "Botella de agua", cantidad: 200},
];

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent {
  displayedColumns: string[] = ['posicion', 'nombre', 'cantidad'];
  dataSource: Articulo[] = [];

  constructor() {
    // Agrega números del 1 al número de elementos
    this.dataSource = ELEMENT_DATA.map((element, index) => ({ ...element, posicion: index + 1 }));
  }
}

