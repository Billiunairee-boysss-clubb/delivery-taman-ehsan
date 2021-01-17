import React from 'react';
import './App.css';
import Web from './components/web';
import NoMatch from './components/nomatch';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";

/** Redux Provider */
import { Provider } from 'react-redux';

/** Store */
import store from './store';


function App() {
  return (
    
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <ApolloProvider client={client}>

          <Switch>
            <Route path='/' component={Web} />
            <Route component={NoMatch} />
          </Switch>
          </ApolloProvider>
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
