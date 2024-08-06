import React from 'react';
import { Provider } from 'react-redux';
import ProductList from './components/ProductList';
import store from './redux/store';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </Provider>
  );
};

export default App;
