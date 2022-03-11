export interface Pokemon {
  name: string;
  url: string;
}

export interface TableProps {
  dataSource: Pokemon[];
  title: string;
}

export interface GetPokemons {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}