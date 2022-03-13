// 3rd parties
import axios, { AxiosResponse } from 'axios';

// App
import { GetPokemons, Pokemon } from '../types';

export interface GetPokemonsService {
  limit: number;
  offset: number;
} 

export const getPokemonsService = async ({ limit, offset }: GetPokemonsService) => {
  const response: AxiosResponse<GetPokemons> = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  );

  return response;
};


export const getPokemonService = async (url: string) => {
  const response: AxiosResponse<Pokemon> = await axios.get(url);

  return response;
};
