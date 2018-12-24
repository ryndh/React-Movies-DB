import React, { Component } from 'react';

export default class APIDelete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            nothing: ''
        }
    }

    componentWillMount() {
        fetch('http://localhost:5000/return_movies', {
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

    handleRemove = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/movies_delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: e.target.deleter.value })
        })
            .then(response => { return response.json() })
            .then(responseData => { alert(responseData) })
            .catch(err => console.log("Submit Error " + err))
    }

    render() {
        return (
            <div className='content'>
                <div className='bg-text'>DELETE <br /> MOVIES</div>
                <div className='bg-icon'>

                </div>
                <div className='page-content'>
                    <form className='form' onSubmit={this.handleRemove}>
                        <div className='select'>
                            <select name='deleter'>
                                {this.state.movies.map((movie, index) => {
                                    return (
                                        <option key={index} movietitle={movie[0]} movierating={movie[1]}>{movie[0]}</option>
                                    )
                                })}
                            </select>
                            <i className="far fa-arrow-alt-circle-down"></i>
                        </div>
                        <input className='movie-button' type='submit' value='Delete'/>
                    </form>
                </div>
            </div>
        );
    }
}
