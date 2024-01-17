import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDrag, CdkDropList, CdkDropListGroup} from '@angular/cdk/drag-drop';

const modulos = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  NoopAnimationsModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  DragDropModule,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
]

@NgModule({
  imports: modulos,
  exports: modulos  
})
export class MaterialModule { }
