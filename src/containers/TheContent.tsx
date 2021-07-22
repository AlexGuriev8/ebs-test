import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, makeStyles } from '@material-ui/core';

import Header from './Header/Header';

import generateRoutes from '../containers/GenericRoutes';
import ProductsContext from './Products/context/products-context';

import { Product, CartItemType } from './Products/utils';

const useStyles = makeStyles({
  routes: {
    paddingTop: '80px',
    display: 'flex',
    justifyContent: 'center',
  },
});

const TheContent = () => {
  const classes = useStyles();

  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  const getProducts = () => {
    axios.get(`${'http://localhost:3001/api/products/'}`).then((response) => {
      setProducts(response.data);
    });
  };

  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.name === product.name);

      if (isItemInCart) {
        return prev.map((item) => (item.name === product.name ? { ...item, amount: item.amount + 1 } : item));
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (name: string) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.name === name) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]),
    );
  };

  const getTotalItems = (items: CartItemType[]) => {
    const totalItems = items.reduce((ack: number, item) => ack + item.amount, 0);
    setTotalItems(totalItems);
  };

  const sortData = (key: string, sortType: string) => {
    const isReversed = sortType === 'asc' ? 1 : -1;

    if (key === 'category') {
      let sortedData = products.sort((a, b) => isReversed * a.category.name.localeCompare(b.category.name));
      setProducts([...sortedData]);
    }
    if (key === 'price') {
      let sortedData = products.sort((a, b) => isReversed * (a.price - b.price));

      setProducts([...sortedData]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getTotalItems(cartItems);
  }, [cartItems]);

  return (
    <ProductsContext.Provider
      value={{
        cartItems: cartItems,
        products: products,
        handleAddToCart: handleAddToCart,
        handleRemoveFromCart: handleRemoveFromCart,
        totalItems: totalItems,
        sort: sortData,
      }}
    >
      <Header />
      <Grid className={classes.routes}>{generateRoutes()}</Grid>
    </ProductsContext.Provider>
  );
};

export default TheContent;
