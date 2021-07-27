import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharactersComponent } from './components/list-characters/list-characters.component';
import { DetailCharacterComponent } from './components/detail-character/detail-character.component';
import { CharactersRoutingModule } from './characters-routing.module';
import {SharedModule} from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ListCharactersComponent,
    DetailCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class CharactersModule { }
