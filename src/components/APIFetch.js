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
        console.log(this.state.movies)
        return (
            <div className='content'>
                {this.state.movies.length == 0 ? <div className='waiting'>Loading Movies (Or there aren't any in the db) <span className='dotOne'>.</span><span className='dotTwo'>.</span><span className='dotThree'>.</span></div> : null}
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
