import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DBZListComponent } from './components/list/list.component';
import { DBZCharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DBZListComponent,
    DBZCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    MainPageComponent
  ]
})
export class DbzModule { }
