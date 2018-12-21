import React, { Component } from 'react';

export default class APIPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:5000/movies_input', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title:this.state.title})
        }).then(response => {
            response.json(),
            console.log(response)
        })
        .then(responseData => {return responseData})
        .catch(err => console.log("Submit Error " + err))

        e.target.title.value = null
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
    
            <input type='submit' value='Submit Movie'/>
          </form>
      </div>
    );
  }
}
