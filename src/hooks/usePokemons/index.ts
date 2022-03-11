// 3rd parties
import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { GetPokemons, Pokemon } from '../../types';

import { GET_POKEMONS } from './constants'

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async ()  => {
      const response: AxiosResponse<GetPokemons> = await axios.get(GET_POKEMONS);

      setPokemons(response.data.results)
    }
  
    fetchPokemons();
  }, []);

  return pokemons;
}