import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  clickhandler = () => console.log('Hey')

  render() {
    return (

      <div className='home'>
        <h1 className='app-heading' onClick={this.clickhandler}>Movies App</h1>
        <div className='home-grid'>
          <Link className='component' to='/all_movies'>View Current Movies in DB</Link>
          <Link className='component two' to='/movie_add'>Add Movie to Database</Link>
          <Link className='component three' to='/movie_game'>Test your movie memory!</Link>
        </div>
      </div>

    );
  }
}
