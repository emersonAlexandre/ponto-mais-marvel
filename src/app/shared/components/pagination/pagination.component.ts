import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {PaginationControlsDirective, PaginationInstance} from 'ngx-pagination';
import {SharedVarService} from '../../services/shared-var.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements AfterViewInit {

  @Input() config?: PaginationInstance;
  @Input() isLoading: boolean;
  @ViewChild('p') pagination: PaginationControlsDirective;

  constructor(private sharedVarService: SharedVarService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.sharedVarService.getVariable('currentPage').subscribe((value) => {
        if (!this.isLoading) {
          this.pagination.setCurrent(value);
        }
      });
    });
  }
}
