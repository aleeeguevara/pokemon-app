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
import { ChangeEvent, useState } from 'react';

// Local
import { Title } from './styles';
import { Post, TableProps } from '../../types';

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

export const Table = ({ dataSource, title }: TableProps) => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  const classes = useStyles();

  return (
    <>
      <Title>{title}</Title>

      <TableContainer component={Paper}>
        <TableMU className={classes.table} size="small" aria-label="table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>

              <StyledTableCell align="right">E-mail</StyledTableCell>

              <StyledTableCell align="right">Content</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataSource
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item: Post) => (
                <TableRow key={item.name}>
                  <TableCell component="th" scope="post">
                    {item.name}
                  </TableCell>
                  
                  <TableCell align="right">
                    {item.email}
                  </TableCell>
                  
                  <TableCell align="right">
                    {item.body}
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </TableMU>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 15, 20]}
        component="div"
        count={dataSource.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}