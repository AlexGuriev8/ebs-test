import React, { useContext } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import {
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import ProductsContext from '../../containers/Products/context/products-context';

const Chart = () => {
  const ctx = useContext(ProductsContext);

  return (
    <Grid container style={{ width: '60%' }}>
      {ctx.cartItems.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="center">Actions</TableCell>
                <TableCell align="center">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ctx.cartItems.map((product, idx: number) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {Object.values(product.category)}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{(product.price * product.amount).toFixed(2)}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <IconButton onClick={() => ctx.handleRemoveFromCart(product.name)}>
                      <RemoveIcon />
                    </IconButton>
                    Select
                    <IconButton onClick={() => ctx.handleAddToCart(product)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {ctx.cartItems.map((item) => item.name === product.name && item.amount)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Grid>
  );
};

export default Chart;
