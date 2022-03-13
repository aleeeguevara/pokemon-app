// 3rd parties
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TableMU from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// Local
import { usePokemons } from '../../hooks/usePokemons';
import { Title } from './styles';
import { ListPokemon } from '../../types';
import { PokemonDetails } from '../PokemonDetails';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export const PokemonsTable = () => {
  const pokemons = usePokemons();

  const classes = useStyles();

  return (
    <>
      <Title>Pokemons</Title>

      <TableContainer component={Paper}>
        <TableMU className={classes.table} size="small" aria-label="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Info</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {pokemons.payload?.results.map((item: ListPokemon) => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="post">
                    {item.name}
                  </TableCell>                  
                  <TableCell component="th" scope="post">
                    <Link
                      component="button"
                      variant="body2"
                      onClick={()=> {
                        pokemons.getPokemon(item.url)
                        pokemons.toggleDetails()
                      }}
                    >
                      See More
                    </Link>  
                  </TableCell>                  
                </TableRow>
            ))}
          </TableBody>
        </TableMU>
      </TableContainer>

      {pokemons.payload && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 50, 80]}
          component="div"
          count={pokemons.payload.count}
          rowsPerPage={pokemons.rowsPerPage}
          page={pokemons.page}
          onPageChange={pokemons.handleChangePage}
          onRowsPerPageChange={pokemons.handleChangeRowsPerPage}
        />
      )}

      {pokemons.pokemon && <PokemonDetails pokemon={pokemons.pokemon} open={pokemons.open} handleClose={pokemons.toggleDetails} />}
    </>
  )
}