import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { TablaArticulosComponent } from './vistas/tabla-articulos/tabla-articulos.component';
import { FormularioRegistroComponent } from './vistas/formulario-registro/formulario-registro.component';
import { ListaArticulosComponent } from './vistas/lista-articulos/lista-articulos.component';
import { MaterialModule } from './core/material/material.module';
import { MenuComponent } from './vistas/menu/menu.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    TablaArticulosComponent,
    FormularioRegistroComponent,
    ListaArticulosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
