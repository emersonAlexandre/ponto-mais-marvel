import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCharactersComponent} from './components/list-characters/list-characters.component';
import {DetailCharacterComponent} from './components/detail-character/detail-character.component';

const routes: Routes = [
  {
    path: 'characters',
    children: [
      {
        path: '',
        component: ListCharactersComponent
      },
      {
        path: ':id',
        component: DetailCharacterComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
