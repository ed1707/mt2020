import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBegriff extends Component {

  constructor(props) {
    super(props);

    this.onChangeOberbegriff = this.onChangeOberbegriff.bind(this);
    this.onChangeAlternative_benennung = this.onChangeAlternative_benennung.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      oberbegriff: '',
      alternative_benennung: ''
    }
  }

  onChangeOberbegriff(e) {
    this.setState({
      oberbegriff: e.target.value
    })
  }

  onChangeAlternative_benennung(e) {
    this.setState({
      alternative_benennung: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const begriff = {
      oberbegriff: this.state.oberbegriff,
      alternative_benennung: this.state.alternative_benennung
    };

    console.log(begriff);

axios.post('http://localhost:5000/begriffe/add', begriff)
  .then(res => console.log(res.data));

      this.setState({
        oberbegriff: '',
        alternative_benennung: ''
      });
  }

  render() {
    return (
      <div>
        <h3>Create New Begriff</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Oberbegriff </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.oberbegriff}
              onChange={this.onChangeOberbegriff}
            />
          </div>
          <div className='form-group'>
            <label>Alternative Benennung </label>
            <input
              type='text'
              required
              className='form-control'
              value={this.state.alternative_benennung}
              onChange={this.onChangeAlternative_benennung}
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
