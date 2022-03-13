// 3rd parties
import { Container } from "@material-ui/core";

// Components
import { PokemonsTable } from "../../components/PokemonsTable";

// Hooks
import { usePokemons } from "../../hooks/usePokemons";

export default function Home() {
    const pokemons = usePokemons();
    return (
    <Container>
        <PokemonsTable dataSource={pokemons} title="Pokemons" />
    </Container>
    );
}