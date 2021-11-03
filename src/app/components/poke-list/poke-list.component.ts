import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../../model/pokemon-data';
import { PokemonApiService } from '../../services/pokemon-api.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  constructor(private pokemonApi: PokemonApiService) {}
  pagePokemons: PokemonData[] = [];
  currentPageNumber: number = 1;
  maxPageNumber: number;
  searchText: string;
  ngOnInit() {
    this.pokemonApi.getPokemonsPage(this.currentPageNumber).subscribe(
      (data) => {
        const results = data.results;
        this.maxPageNumber = data.count / 20;
        if (data.count % 20 != 0) {
          this.maxPageNumber++;
        }
        this.collectPokemons(results);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  clearPokemons() {
    this.pagePokemons = [];
  }
  collectPokemons(results: { name: string; url: string }[]) {
    for (const pokemonOverview of results) {
      this.pokemonApi.getPokemonData(pokemonOverview.url).subscribe(
        (data) => {
          console.log(data.types);
          this.pagePokemons.push(data);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  onPageChange(pageNumber: number) {
    this.clearPokemons();
    this.pokemonApi.getPokemonsPage(pageNumber).subscribe(
      (data) => {
        const results = data.results;
        this.collectPokemons(results);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  extractPokemonTypes(pokemon: PokemonData) {
    return pokemon.types.map((type: { type: { name: any } }) => type.type.name);
  }

  extractPokemonAbilities(pokemon: PokemonData) {
    return pokemon.abilities.map(
      (ability: { ability: { name: any } }) => ability.ability.name
    );
  }

  createPokemonDesc(pokemon: PokemonData) {
    return `Pokemon ${pokemon.name} has a weight of ${
      pokemon.weight
    } kilos and a height of ${
      pokemon.height
    }m. It's abilities are: ${this.extractPokemonAbilities(pokemon)}`;
  }

  onSearchChange(value: string) {
    this.searchText = value;
  }
}
