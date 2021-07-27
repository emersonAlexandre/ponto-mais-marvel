import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DataTableComponent } from './components/data-table/data-table.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    PaginationComponent,
    DataTableComponent
  ],
    exports: [
        PaginationComponent,
        DataTableComponent
    ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class SharedModule { }
