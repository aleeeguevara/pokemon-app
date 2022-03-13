// 3rd parties
import { Container } from "@material-ui/core";

// Components
import { PokemonsTable } from "../../components/PokemonsTable";

export default function Home() {
  return (
    <Container>
      <PokemonsTable />
    </Container>
  );
}
