import React, { Component } from 'react';

export default class APIFetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentWillMount(){
        fetch('https://python-react-micro.herokuapp.com/return_movies', {
            method: "GET",
            headers: {
                "accept": "application/json",
                "content-type": 'application/json'
            }
        })
        .then(response => {return response.json()})
        .then(responseData => {return responseData})
        .then(data => {this.setState({movies:data})})
        .catch(err => console.log("Fetch Error", err))
    }
  render() {
    return (
      <div>
            <h1>Current Movies</h1>
        {this.state.movies.map((movie, index)=> {
            return (
                <div key={index}>
                    <p>Title: {movie[0]}</p>
                    <p>Rating: {movie[1]}</p>
                </div>
            )
        })}
      </div>
    );
  }
}
