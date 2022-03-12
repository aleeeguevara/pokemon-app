// 3rd parties
import { Container } from "@material-ui/core";

// Components
import { Table } from "../../components/Table";

// Hooks
import { usePokemons } from "../../hooks/usePokemons";

export default function Home() {
    const pokemons = usePokemons();
    return (
    <Container>
        <Table dataSource={pokemons} title="Pokemons" />
    </Container>
    );
}