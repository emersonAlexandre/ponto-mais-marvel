import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {take} from 'rxjs/operators';
import {PaginationInstance} from 'ngx-pagination';
import {SharedVarService} from '../../../shared/services/shared-var.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {
  isLoading = true;
  characters = [];
  originalCharacters = [];
  subscription: Subscription;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  columnsToDisplay = [
    {
      name: 'name',
      label: 'Nome',
      minWidth: '150px'
    },
    {
      name: 'series',
      label: 'Séries',
      minWidth: '232px'
    },
    {
      name: 'events',
      label: 'Eventos',
      minWidth: '150px'
    }
  ];

  constructor(private characterService: CharacterService, private sharedVarService: SharedVarService) {
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService.getCharacters().pipe(take(1)).toPromise().then((res) => {
      this.originalCharacters = this.mountedCharactersFiltered(res.data.results);
      this.sharedVarService.setVariable('characters', this.originalCharacters);
      this.subscribeCharacters();
    }).finally(() => {
      this.isLoading = false;
    });
  }

  subscribeCharacters(): void {
    this.sharedVarService.getVariable('characters').subscribe((value) => {
      this.characters = value;
    });
  }

  mountedCharactersFiltered(characters: any[]): any[] {
    const charactersFiltered = [];

    characters.filter((character) => {
      const characterFiltered = {};
      const allSeries = character.series.items;
      const allEvents = character.events.items;

      characterFiltered[`id`] = character.id;
      characterFiltered[`name`] = character.name;
      characterFiltered[`image`] = character.thumbnail.path + '/portrait_small.' + character.thumbnail.extension;
      characterFiltered[`series`] = allSeries.slice(0, 3);
      characterFiltered[`events`] = allEvents.slice(0, 3);

      charactersFiltered.push(characterFiltered);
    });

    return charactersFiltered;
  }

  filteredCharactersByChar(event: any): void {
    const char = event.target.value;
    let charactersFiltered: any[];

    charactersFiltered = this.originalCharacters.filter((character) => {
      if (character.name.replace(/\s/g, '').toLowerCase().includes(char.replace(/\s/g, '').toLowerCase())) {
        return character;
      }
    });

    if (charactersFiltered.length < 1 && char === '') {
      charactersFiltered = this.originalCharacters;
    }

    this.sharedVarService.setVariable('characters', charactersFiltered);
    this.sharedVarService.setVariable('currentPage', 1);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
