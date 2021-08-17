import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import home from '../pages/HomePage';
import cart from './../pages/Cart'
import detailPage from '../pages/ProductDetailPage'
import searchPage from '../pages/SearchResults';
import AboutUs from '../pages/AboutUs';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/newbooks" component={home} />
      <Route path="/search" component={searchPage} />
      <Route path="/about" component={AboutUs} />
      <Route path="/cart" component={cart} />
      <Route path="/detail/:bookId" component={detailPage} />
    </Switch>
  );

}

export default Routes;