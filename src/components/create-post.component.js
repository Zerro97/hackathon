import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      username: '',
      price: '',
      //tag: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }  

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      name: this.state.name,
      username: this.state.username,
      description: this.state.description,
      price: this.state.price
    }

    console.log(post);
    
    axios.post('http://localhost:5000/posts/add', post)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create Post</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>

        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Post" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}