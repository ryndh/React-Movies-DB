import React, { Component } from 'react';

export default class APIPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            response: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/movies_input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title })
        }).then(response => { return response.json() })
            .then(responseData => { alert(responseData) })
            .catch(err => console.log("Submit Error " + err))

        e.target.title.value = null
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='content'>
                <div className='bg-text'>ADD <br /> MOVIES</div>
                <div className='bg-icon'>

                </div>
                <div className='page-content'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <label className='movie-label'>Title:
                            <input className='movie-input' type='text' value={this.state.title} onChange={this.handleChange} name='title' />
                        </label>

                        <input className='movie-button' type='submit' value='Submit Movie' />
                    </form>
                </div>
            </div>
        );
    }
}
