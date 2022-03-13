// 3rd parties
import { ChangeEvent, useEffect, useState } from 'react';

import { GetPokemons, Pokemon } from '../../types';
import { getPokemonService, getPokemonsService } from '../../services/pokemons';

export const usePokemons = () => {
  const [payload, setPayload] = useState<GetPokemons>();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [open, setOpen] = useState(false);

  const handleChangePage = async (event: unknown, newPage: number) => {
    setPage(newPage);

    const offset = rowsPerPage * ((page > newPage) ? page - 1 : page + 1);

    const response = await getPokemonsService({ limit: rowsPerPage, offset });

    setPayload(response.data);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  const toggleDetails = () => {
    setOpen(!open);

    setPokemon(null);
  };

  const getPokemon = async (url: string) => {
    const response = await getPokemonService(url);

    setPokemon(response.data);
  };

  useEffect(() => {
    (async () => {
      const response = await getPokemonsService({ limit: rowsPerPage, offset: 0 })

      setPayload(response.data)
    })()
  }, [rowsPerPage]);

  return {
    payload,
    handleChangePage,
    toggleDetails,
    getPokemon,
    page,
    rowsPerPage,
    pokemon,
    open,
    handleChangeRowsPerPage
  };
}