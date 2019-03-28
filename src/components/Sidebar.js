import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidebarShown: false,
    }
  }
  resetter = () => {
    this.setState({sidebarShown: false})
  }
  render() {
    return (

      <div className={`sidebar ${this.state.sidebarShown ? 'opened' : 'closed'}`}>
        <div className='reveal-button' onClick={() => {
          this.setState({ 
            sidebarShown: !this.state.sidebarShown,
           })
          console.log(this.state.sidebarShown)
        }
        }>
          <h3>{this.state.sidebarShown ? 'Hide' : 'Show'}</h3>
          <i className={`fas fa-arrow-circle-right ${this.state.sidebarShown ? 'flipped' : 'reverse'}`}></i>
        </div>
        {this.state.sidebarShown ? <Link className='link' onClick={this.resetter} to='/'>HOME</Link> : null}
        {this.state.sidebarShown ? <Link className='link' onClick={this.resetter} to='/movie_add'>Add Movie</Link> : null}
        {this.state.sidebarShown ? <Link className='link' onClick={this.resetter} to='/all_movies'>Movie List</Link> : null}
        {this.state.sidebarShown ? <Link className='link' onClick={this.resetter} to='/remove'>Delete Movies</Link> : null}
        {this.state.sidebarShown ? <Link className='link' onClick={this.resetter} to='/movie_game'>Game</Link> : null}
      </div>

    );
  }
}
