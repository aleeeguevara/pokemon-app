// 3rd parties
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { GetPokemons, Pokemon } from '../../types';

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<GetPokemons> = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1126');

      setPokemons(response.data.results)
    })()
  }, []);

  return pokemons;
}