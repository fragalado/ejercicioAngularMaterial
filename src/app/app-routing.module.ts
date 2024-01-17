import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { TablaArticulosComponent } from './vistas/tabla-articulos/tabla-articulos.component';
import { FormularioRegistroComponent } from './vistas/formulario-registro/formulario-registro.component';
import { ListaArticulosComponent } from './vistas/lista-articulos/lista-articulos.component';

const routes: Routes = [
  { path: "", component: BienvenidaComponent },
  {
    path: "menu", component: MenuComponent, children: [
      { path: "tabla", component: TablaArticulosComponent },
      { path: "formulario", component: FormularioRegistroComponent },
      { path: "listaArticulos", component: ListaArticulosComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
