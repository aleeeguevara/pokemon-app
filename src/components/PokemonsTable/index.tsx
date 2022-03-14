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
  const {
    getPokemon,
    handleChangePage,
    handleChangeRowsPerPage,
    open,
    page,
    payload,
    pokemon,
    rowsPerPage,
    toggleDetails
  } = usePokemons();

  const classes = useStyles();

  const renderPokemons = () => {
    if (!payload || payload.count === 0) {
      return (
        <TableRow>
          <TableCell>Nenhum resultado encontrado</TableCell>
        </TableRow>
      )
    }

    return payload.results.map(({ name, url }: ListPokemon) => (
      <TableRow key={name}>
        <TableCell component="th" scope="post">
          {name}
        </TableCell>                  
        <TableCell component="th" scope="post">
          <Link
            component="button"
            variant="body2"
            onClick={()=> {
              getPokemon(url)
              toggleDetails()
            }}
          >
            See More
          </Link>  
        </TableCell>                  
      </TableRow>
  ))
  }

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
            {renderPokemons()}
          </TableBody>
        </TableMU>
      </TableContainer>

      {payload && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 30, 50, 80]}
          component="div"
          count={payload.count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}

      {pokemon && <PokemonDetails pokemon={pokemon} open={open} handleClose={toggleDetails} />}
    </>
  )
}