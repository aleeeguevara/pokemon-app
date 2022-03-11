// 3rd parties
import { Container, StylesProvider } from '@material-ui/core';

// Components
import { Table } from './components/Table';

// Hooks
import { usePokemons } from './hooks/usePokemons';

export default function AppPage() {
  const pokemons = usePokemons();

  return (
    <StylesProvider injectFirst>
      <Container>
        <Table dataSource={pokemons} title="Pokemons" />
      </Container>
    </StylesProvider>  
  );
}