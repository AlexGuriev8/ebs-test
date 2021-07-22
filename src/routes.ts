import Chart from "containers/Chart/Chart";
import HomePage from "containers/HomePage//HomePage";
import Products from "containers/Products/Products";

export const genericRoutes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/products", exact: true, name: "Products", component: Products },
  {
    path: "/chart",
    exact: true,
    name: "Chart",
    component: Chart,
  },
];