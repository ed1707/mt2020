import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBegriff extends Component {
  constructor(props) {
    super(props);

    this.onChangeOberbegriff = this.onChangeOberbegriff.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      oberbegriff: ''
    }
  }

  onChangeOberbegriff(e) {
    this.setState({
      oberbegriff: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const begriff = {
      oberbegriff: this.state.oberbegriff
    }

    console.log(begriff);

axios.post('http://localhost:5000/begriffe/add', begriff)
  .then(res => console.log(res.data));

      this.setState({
        oberbegriff: ''
      })
  }

  render() {
    return (
      <div>
        <h3>Create New Begriff</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Oberbegriff: </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.oberbegriff}
              onChange={this.onChangeOberbegriff}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='Create Begriff' className='btn btn-primary' />
          </div>
        </form>
      </div>
    )
  }
}
