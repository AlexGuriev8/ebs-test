import React, { useContext } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid, Badge, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import ProductsContext from '../Products/context/products-context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    links: {
      textAlign: 'center',
    },
    link: {
      paddingInlineEnd: '10px',
      color: '#fff',
    },
  }),
);

interface IRoutes {
  name?: string;
  path: string;
  component?: JSX.Element;
}

const Header = () => {
  const classes = useStyles();
  const ctx = useContext(ProductsContext);

  const routes = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Products',
      path: '/products',
    },
    {
      path: '/chart',
      component: (
        <Badge badgeContent={ctx.totalItems} color="error">
          <AddShoppingCartIcon />
        </Badge>
      ),
    },
  ];

  return (
    <Grid>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>

          <Grid className={classes.links}>
            {routes.map(({ name, path, component }: IRoutes) => (
              <Link key={path} to={path} className={classes.link}>
                {name ? name : component}
              </Link>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
