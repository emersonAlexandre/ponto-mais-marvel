import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {take} from 'rxjs/operators';
import {CharacterService} from '../../services/character.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss']
})
export class DetailCharacterComponent implements OnInit {
  currentTab = 'series';
  data = [];
  characterIsLoading = true;
  infoIsLoading = true;
  characterId = '';
  character: any;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  columnsToDisplay = [
    {
      name: 'name',
      label: 'Nome',
      minWidth: '200px'
    },
    {
      name: 'start',
      label: 'Início',
      minWidth: '50px'
    },
    {
      name: 'end',
      label: 'Fim',
      minWidth: '50px'
    },
    {
      name: 'description',
      label: 'Descrição',
      minWidth: '232px'
    }
  ];

  constructor(private characterService: CharacterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    this.characterId = snapshot.params.id;
    this.getCharacterData();
    this.getDataOfCurrentTab();
  }

  getCharacterData(): void {
    this.characterIsLoading = true;
    this.characterService.getCharacterId(this.characterId).pipe(take(1)).toPromise().then((res) => {
      this.character = this.mountedCharacterFiltered(res.data.results[0]);
    }).finally(() => {
      this.characterIsLoading = false;
    });
  }

  getDataOfCurrentTab(): void {
    this.infoIsLoading = true;
    this.characterService.getInfoByCharacterId(this.characterId, this.currentTab).pipe(take(1)).toPromise().then((res) => {
      this.data = this.mountedDataFiltered(res.data.results);
    }).finally(() => {
      this.infoIsLoading = false;
    });
  }

  mountedDataFiltered(data: any[]): any[] {
    const dataFiltered = [];

    data.filter((item) => {
      const itemFiltered = {};

      itemFiltered[`image`] = item.thumbnail.path + '/portrait_small.' + item.thumbnail.extension;
      itemFiltered[`title`] = item.title;
      itemFiltered[`description`] = item.description;
      itemFiltered[`start`] = this.currentTab === 'events' ? item.start.split('-')[0] : item.startYear;
      itemFiltered[`end`] = this.currentTab === 'events' ? item.start.split('-')[0] : item.endYear;

      dataFiltered.push(itemFiltered);
    });

    return dataFiltered;
  }

  mountedCharacterFiltered(character: any): any {
    const characterFiltered = {};

    characterFiltered[`image`] = character.thumbnail.path + '/portrait_incredible.' + character.thumbnail.extension;
    characterFiltered[`name`] = character.name;
    characterFiltered[`description`] = character.description;
    characterFiltered[`urls`] = character.urls;

    return characterFiltered;
  }
}
