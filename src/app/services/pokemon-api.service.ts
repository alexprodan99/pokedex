import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonsData } from '../model/pokemons-data';
import { PokemonData } from '../model/pokemon-data';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  readonly BASE_URL = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  getPokemonsData(): Observable<PokemonsData> {
    return this.httpClient.get<PokemonsData>(`${this.BASE_URL}/pokemon`);
  }

  getPokemonsPage(pageNumber: number): Observable<PokemonsData> {
    return this.httpClient.get<PokemonsData>(
      `${this.BASE_URL}/pokemon?offset=${20 * pageNumber}&limit=20`
    );
  }
  getPokemonData(endPoint: string): Observable<PokemonData> {
    return this.httpClient.get<PokemonData>(endPoint);
  }
}
