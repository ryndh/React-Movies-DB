import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './components/app';

import APIFetch from './components/APIFetch';
import APIPost from './components/APIPost';
import APIDelete from './components/APIDelete';
import MovieSort from './components/MovieSort';



import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(

      <BrowserRouter>
        <div className='app' > 
        <div className='sidebar'>
          <Link to='/movie_add'>Add Movie</Link>
          <Link to='/'>HOME</Link>
          <Link to='/all_movies'>Movies</Link>
          <Link to='/remove'>Remove Movies</Link>
          <Link to='/movie_game'>Movie Game!</Link>
        </div>
        <div className='content'>
          <Route exact path='/' component={App}/>
          <Route path='/all_movies' component={APIFetch}/>
          <Route path='/movie_add' component={APIPost}/>
          <Route path='/remove' component={APIDelete}/>
          <Route path='/movie_game' component={MovieSort}/>
        </div>
        </div>
      </BrowserRouter>

    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
