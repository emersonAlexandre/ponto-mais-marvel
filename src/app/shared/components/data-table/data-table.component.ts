import {Component, Input, NgZone, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() config: PaginationInstance;
  @Input() data?: any;
  @Input() columnsToDisplay: any[];
  @Input() dataType: string;
  @Input() isLoading: boolean;

  constructor(private ngZone: NgZone, private router: Router) {
  }

  ngOnInit(): void {
  }

  getMinWidthTr(): string {
    const minWidthList = [];
    this.columnsToDisplay.filter(columnToDisplay => minWidthList.push(parseInt(columnToDisplay.minWidth.replace('px', ''), 10) + 28));
    const minWidthTr = minWidthList.reduce((a, b) => a + b, 0) - 10;
    return minWidthTr.toString() + 'px';
  }

  isArray(data: any): boolean {
    return Array.isArray(data);
  }

  isString(data: any): boolean {
    return typeof data === 'string';
  }

  getTextAnalyzed(text: string): string {
    return this.isString(text) && text.length > 150 ? text.substring(0, 150) + '...' : text;
  }

  goToCharacterDetail(characterId: number): void {
    this.router.navigate([`/characters/${characterId.toString()}`]);
  }

  arrayMock(): Array<any> {
    return new Array(10);
  }
}
