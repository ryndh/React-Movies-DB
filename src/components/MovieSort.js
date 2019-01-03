import React, { Component } from 'react';

export default class MovieSort extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            userSort: [],
            userYears: [],
            showYears: false,
            showModal: false,
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
        let updatedYears = [...this.state.userYears, userMovie[0][1]]
        this.setState({
            userSort: updatedList,
            userYears: updatedYears,
        })
        console.log(updatedList)

    }

    reset = () => {
        this.setState({
            userSort: [],
            userYears: [],
            showYears: false,
        })
    }
    show = () => {
        this.setState({ showYears: !this.state.showYears })
    }
    remover = movie => {
        let newUserSort = this.state.userSort.filter((film) => film != movie)
        let newUserYears = this.state.userYears.filter((year) => year != movie[1])
        this.setState({
            userSort: newUserSort,
            userYears: newUserYears
        })
    }

    closeOut = () => {
        this.setState({showModal: false})
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
                <div className={this.state.showModal ? 'results-modal-show' : 'results-modal-hidden'} onClick={this.closeOut}>
                    <div className='inner-modal'>
                        <div>{years.join() == userYears.join() ? "Correct!" : "Not Quite, Try Again!"}</div>
                        <div className='close'>x</div>
                    </div>
                </div>
                <div className='header'>
                    <h3>How well do you know your movies? <br /> Drag from the left column to the right to sort by release date, then hit submit to see if you got it right!</h3>
                </div>
                <div className='cards-container'>
                    <h3 className='cards-container-heading'>Movies</h3>
                    {this.state.movies.map((movie, index) => {
                        return (
                            <div
                                draggable={this.state.userSort.includes(movie) ? null : 'true'}
                                onDragStart={(e) => this.onDragStart(e, movie[0])}
                                className={this.state.userSort.includes(movie) ? 'movie moved' : 'movie'}
                                key={index}>
                                <p>{movie[0]}</p>
                                {this.state.userSort.includes(movie) ? <i className="far fa-check-circle"></i> : null}
                            </div>
                        )
                    })}
                </div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.setState({showModal: true})
                        console.log(this.state.userYears)
                    }}
                    className='user-list-container'>
                    <div className='user-list'
                        onDragOver={this.onDragOver}
                        onDrop={this.onDrop}>
                        <div className='dropper'>{this.state.userSort.length > 0 ? null : 'Drop Here'}</div>
                        {this.state.userSort.map((movie, index) => {
                            return (
                                <div
                                    className='sorted'
                                    key={index}>
                                    <p>{this.state.showYears ? `(${movie[1]})` : null} {movie[0]}</p>
                                    <i className="far fa-times-circle" onClick={() => this.remover(movie)}></i>
                                </div>
                            )
                        })}
                    </div>

                    <div className='buttons'>
                        <button type='submit'>Submit</button>
                        <button onClick={this.reset} type='reset'>Reset</button>
                        <button onClick={this.show} type='button'>Need Help? Show Years</button>
                    </div>
                </form>
            </div>

        );
    }
}
