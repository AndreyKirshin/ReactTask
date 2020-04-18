import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'
// I chenged HashRouter to BrowserRouter since the last one is more approtiated for cthe current task
// If using of HashRoter is obligatory I'm ready to turn it back
// import { HashRouter , Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import ProductsContainer from './components/Products/ProductsContainer'
import NotFound from './components/NotFound/NotFound'
import ProductCreateContainer from './components/ProductCreate/ProductCreateContainer'
import ProductEditContainer from './components/ProductEdit/ProductEditContainer';

export function getRoutes() {
  return (
    <Router basename="/">
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsContainer}/>,
          <Route path="/create" component={ProductCreateContainer}/>,
          <Route path="/edit/:id" component={ProductEditContainer}/>,
          <Route path="*" component={NotFound}/>,
        </Switch>
      </Main>
    </Router >
  )
}

export default getRoutes
