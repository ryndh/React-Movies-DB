import React, { Component } from 'react';

export default class APIPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            response: '',
            showModal: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch('https://python-react-micro.herokuapp.com/movies_input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title })
        }).then(response => { return response.json() })
            .then(responseData => {
                this.setState({
                    response: responseData,
                    showModal: true,
                })
            })
            .catch(err => console.log("Submit Error " + err))

        e.target.title.value = null
    }

    handleChange(event) {
        this.setState({
             [event.target.name]: event.target.value,
            })
    }

    closeOut = () => {
        this.setState({showModal: false})
    }

    render() {
        return (
            <div className='content'>
                <div className={this.state.showModal ? 'results-modal-show' : 'results-modal-hidden'} onClick={this.closeOut}>
                    <div className='inner-modal'>
                        <div>{this.state.response}</div>
                        <div className='close'>x</div>
                    </div>
                </div>
                <div className='bg-text'>ADD <br /> MOVIES</div>
                <div className='bg-icon'>

                </div>
                <div className='page-content'>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <label className='movie-label'>Title:
                            <input autocomplete='off' className='movie-input' type='text' value={this.state.title} onChange={this.handleChange} name='title' />
                        </label>

                        <input className='movie-button' type='submit' value='Submit Movie' />
                    </form>
                </div>
            </div>
        );
    }
}
