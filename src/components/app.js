import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className='home'>
        <h1 className='app-heading'>Movies App</h1>
        <div className='home-grid'>
          <Link className='component' to='/all_movies'>View Current Movies in DB</Link>
          <Link className='component' to='/movie_add'>Add Movie to Database</Link>
          <Link className='component' to='/movie_game'>Test your movie knowledge! Play a game using movies in the DB</Link>
          <a className='component' target='_blank' href='https://python-react-micro.herokuapp.com/return_movies'>
            <div>Back End JSON</div>
          </a>
        </div>
      </div>

    );
  }
}
