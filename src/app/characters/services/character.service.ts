import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  publicApiKey = '4995b88cb41fe778dabf98831314fdbe';
  hashMD5 = '49afec875e24d3a277148528bf95f044';
  charactersUrl = `${environment.api}/characters`;
  defaultParamaters = `ts=1&apikey=${this.publicApiKey}&hash=${this.hashMD5}`;
  limit = 'limit=100';

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get<any>(`${this.charactersUrl}?${this.limit}&${this.defaultParamaters}`)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          return throwError(error);
        }
      }));
  }

  getInfoByCharacterId(characterId: string, infoType: string): Observable<any> {
    return this.httpClient.get<any>(`${this.charactersUrl}/${characterId}/${infoType}?${this.limit}&${this.defaultParamaters}`)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          return throwError(error);
        }
      }));
  }

  getCharacterId(characterId: string): Observable<any> {
    return this.httpClient.get<any>(`${this.charactersUrl}/${characterId}?${this.defaultParamaters}`)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          return throwError(error);
        }
      }));
  }
}
