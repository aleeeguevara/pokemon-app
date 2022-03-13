export interface ListPokemon {
  name: string;
  url: string;
}

export interface GetPokemons {
  count: number;
  next: string;
  previous: string;
  results: ListPokemon[];
}

export type Abilitiy = {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export type GameIndex = {
  game_index: string
  version: {
    name: string
    url: string
  }
}

export type Move = {
  move: {
    name: string
    url: string
  }
}

export type Species = {
  name: string
  url: string
}

export type Sprites = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type Stat = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type Type = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface Pokemon {
  abilities: Abilitiy[]
  base_experience: number;
  game_indices: GameIndex[]
  height: number;
  id: number;
  moves: Move[] 
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[]
  types: Type;
  weight: number;
}
