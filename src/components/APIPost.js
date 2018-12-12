import React, { Component } from 'react';

export default class APIPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            rating: 0,
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('https://python-react-micro.herokuapp.com/movies_input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({title:this.state.title , rating:this.state.rating})
        }).then(response => {response.json()})
        .then(responseData => {return responseData})
        .catch(err => console.log("Submit Error " + err))
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

  render() {
    return (
      <div>
          <h1>Add A Movie</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Title:
                <input type='text' value={this.state.title} onChange={this.handleChange} name='title'/>
            </label>
            <label>Rating:
                <input type='integer' value={this.state.rating} onChange={this.handleChange} name='rating'/>
            </label>
            <input type='submit' value='Submit Movie'/>
          </form>
      </div>
    );
  }
}
