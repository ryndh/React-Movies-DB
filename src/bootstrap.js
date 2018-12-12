import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/app';
import reducers from './reducers';
import APIFetch from './components/APIFetch';
import APIPost from './components/APIPost';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div className='app' > 
          <Link to='/movie_add'>Add Movie</Link>
          <Link to='/'>HOME</Link>
          <Link to='/all_movies'>Movies</Link>
          <Route exact path='/' component={App}/>
          <Route path='/all_movies' component={APIFetch}/>
          <Route path='/movie_add' component={APIPost}/>
        </div>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
