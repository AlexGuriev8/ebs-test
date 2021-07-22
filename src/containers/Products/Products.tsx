import React, { useContext } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

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
  Tooltip,
  Typography,
} from '@material-ui/core';

import ProductsContext from './context/products-context';

const Products = () => {
  const ctx = useContext(ProductsContext);
  const [priceSort, setPriceSort] = React.useState<boolean>(true);
  const [categorySort, setCategorySort] = React.useState<boolean>(true);

  return (
    <Grid container style={{ width: '60%' }}>
      {ctx.products.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Grid container>
                    <Typography>Category</Typography>
                    {categorySort ? (
                      <Tooltip title="Sort by asc">
                        <ArrowUpwardIcon
                          onClick={() => {
                            ctx.sort('category', 'asc');
                            setCategorySort(false);
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Sort by desc">
                        <ArrowDownwardIcon
                          onClick={() => {
                            ctx.sort('category', 'desc');
                            setCategorySort(true);
                          }}
                        />
                      </Tooltip>
                    )}
                  </Grid>
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>
                  <Grid container>
                    <Typography>Price</Typography>
                    {priceSort ? (
                      <Tooltip title="Sort by asc">
                        <ArrowUpwardIcon
                          onClick={() => {
                            ctx.sort('price', 'asc');
                            setPriceSort(false);
                          }}
                        />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Sort by desc">
                        <ArrowDownwardIcon
                          onClick={() => {
                            ctx.sort('price', 'desc');
                            setPriceSort(true);
                          }}
                        />
                      </Tooltip>
                    )}
                  </Grid>
                </TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ctx.products.map((product, idx: number) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {Object.values(product.category)}
                  </TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    <IconButton onClick={() => ctx.handleRemoveFromCart(product.name)}>
                      <RemoveIcon />
                    </IconButton>
                    Select
                    <IconButton onClick={() => ctx.handleAddToCart(product)}>
                      <AddIcon />
                    </IconButton>
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

export default Products;
