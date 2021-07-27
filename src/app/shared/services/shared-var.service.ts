import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedVarService {
  private characters: BehaviorSubject<any[]>;
  private currentPage: BehaviorSubject<number>;

  constructor() {
    this.characters = new BehaviorSubject<any>([{}]);
    this.currentPage = new BehaviorSubject<number>(1);
  }

  getVariable(variable: string): Observable<any> {
    return this[variable].asObservable();
  }

  setVariable(variable: string, newValue: any): void {
    this[variable].next(newValue);
  }
}
