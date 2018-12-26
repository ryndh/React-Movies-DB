import React, { Component } from 'react';

export default class APIFetch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
        }
    }

    componentWillMount() {
        fetch('https://python-react-micro.herokuapp.com/return_movies', {
            method: "GET",
            headers: {
                "accept": "application/json",
                "content-type": 'application/json'
            }
        })
            .then(response => { return response.json() })
            .then(responseData => { return responseData })
            .then(data => { this.setState({ movies: data }) })
            .catch(err => console.log("Fetch Error", err))
    }


    render() {
        return (
            <div className='content'>

                <div className='movies-container'>
                    {this.state.movies.map((movie, index) => {
                        return (
                            <div className='movie' key={index}>
                                <p>{movie[0]}</p>
                                <p>Year: {movie[1] == 0 ? 'Pending' : movie[1]}</p>
                                <p className='stats'> Entered {movie[2]} time(s) so far.</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
