import React, { Component } from 'react';

export default class MovieSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            userSort: [],
            userYears: [],
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

    onDragStart = (e, movie) => {
        console.log('drag started');
        e.dataTransfer.setData('id', movie);
    }

    onDragOver = (e) => {
        e.preventDefault()
    }

    onDrop = e => {
        let id = e.dataTransfer.getData('id')

        let userMovie = this.state.movies.filter((movie) => movie[0] == id)
        let updatedList = [...this.state.userSort, ...userMovie]
        let updatedYears = [...this.state.userYears, userMovie[0][1] ]
        this.setState({ 
            userSort: updatedList,
            userYears: updatedYears,
        })
        console.log(updatedYears)

    }

    right = (e) => {
        e.preventDefault()
        alert('right')
    }
    wrong = (e) => {
        e.preventDefault()
        alert('wrong')
    }
    reset = () => {
        this.setState({
            userSort: [],
            userYears: [],
        })
    }

    render() {
        let years = []
        for (let film of this.state.movies) {
            years.push(film[1])
        }
        years.sort()
        console.log(years)
        let userYears = this.state.userYears

        return (
            <div className='movies-game'>
                <div className='cards-container'>
                    {this.state.movies.map((movie, index) => {
                        return (
                            <div draggable onDragStart={(e) => this.onDragStart(e, movie[0])} className='movie' key={index}>
                                <p>Title: {movie[0]}</p>
                            </div>
                        )
                    })}
                </div>
                <form onSubmit={years.join() == userYears.join() ? this.right : this.wrong} className='user-list' onDragOver={this.onDragOver} onDrop={this.onDrop} >
                    {this.state.userSort.map((movie, index) => {
                        return (
                            <div key={index}>
                                {movie[0]}
                            </div>
                        )
                    })}
                    <button type='submit'>Submit</button>
                    <button onClick={this.reset} type='reset'>Reset</button>
                </form>
            </div>

        );
    }
}
