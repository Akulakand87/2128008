import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/product/:productName">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;