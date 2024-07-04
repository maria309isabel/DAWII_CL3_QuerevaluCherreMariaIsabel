import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../pregunta2/character';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getHumanCharacters(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(this.apiUrl).pipe(
      map((response) => response.results.filter((character) => character.species === 'Human'))
    );
  }

}
