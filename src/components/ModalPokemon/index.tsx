import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TableMU from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// App
import { joinItems } from '../../utils/joinItems';

export interface ModalPokemonProps {
  pokemon: any;
  open: boolean;
  handleClose: ()=>void;
}

export const ModalPokemon = ({ pokemon, open, handleClose }: ModalPokemonProps) => {  
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Pokemon Details</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TableContainer>
            <TableMU>
              <TableBody>
                <TableRow>
                  <TableCell><strong>Photo</strong></TableCell>
                  <TableCell><img src={pokemon.sprites.front_default} alt={pokemon.name} /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell>{pokemon.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Species</strong></TableCell>
                  <TableCell>{pokemon.species.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Height</strong></TableCell>
                  <TableCell>{pokemon.height}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Weight</strong></TableCell>
                  <TableCell>{pokemon.weight}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Base Experience</strong></TableCell>
                  <TableCell>{pokemon.base_experience}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Order</strong></TableCell>
                  <TableCell>{pokemon.order}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Abilities</strong></TableCell>
                  <TableCell>  
                    {joinItems(pokemon.abilities, 'ability')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Moves</strong></TableCell>
                  <TableCell>  
                    {joinItems(pokemon.moves, 'move')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Types</strong></TableCell>
                  <TableCell>  
                    {joinItems(pokemon.types, 'type')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Stats</strong></TableCell>
                  <TableCell>  
                    {joinItems(pokemon.stats, 'stat')}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong>Game indices</strong></TableCell>
                  <TableCell>  
                    {joinItems(pokemon.game_indices, 'version')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </TableMU>
          </TableContainer>           
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}