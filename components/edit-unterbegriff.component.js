import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditUnterbegriff extends Component {
  constructor(props) {
    super(props);

    this.onChangeOberbegriff = this.onChangeOberbegriff.bind(this);
    this.onChangeVorzugsbenennung = this.onChangeVorzugsbenennung.bind(this);
    this.onChangeDefinition = this.onChangeDefinition.bind(this);
    this.onChangeAbgelehnte_Benennungen = this.onChangeAbgelehnte_Benennungen.bind(this);
    this.onChangeAbgrenzung_zu = this.onChangeAbgrenzung_zu.bind(this);
    this.onChangeBetroffene_Kunststoffe = this.onChangeBetroffene_Kunststoffe.bind(this);
    this.onChangeUrsachen = this.onChangeUrsachen.bind(this);
    this.onChangeAnmerkung = this.onChangeAnmerkung.bind(this);
    this.onChangeBearbeitungsstatus = this.onChangeBearbeitungsstatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      oberbegriff: '',
      vorzugsbenennung: '',
      definition: '',
      abgelehnte_benennungen: '',
      abgrenzung_zu:'',
      betroffene_kunststoffe: '',
      ursachen: '',
      anmerkung: '',
      bearbeitungsstatus: '',
      date: new Date(),
      begriffe: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/unterbegriffe/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          oberbegriff: response.data.oberbegriff,
          vorzugsbenennung: response.data.vorzugsbenennung,
          definition: response.data.definition,
          abgelehnte_benennungen: response.data.abgelehnte_benennungen,
          abgrenzung_zu: response.data.abgrenzung_zu,
          betroffene_kunststoffe: response.data.betroffene_kunststoffe,
          ursachen: response.data.ursachen,
          anmerkung: response.data.anmerkung,
          bearbeitungsstatus: response.data.bearbeitungsstatus,
          date: new Date(response.data.date)
        })
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/begriffe/')
      .then(response => {
         if (response.data.length > 0) {
        this.setState({
          begriffe: response.data.map(begriff => begriff.oberbegriff),
        })
      }
    })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeOberbegriff(e) {
    this.setState({
      oberbegriff: e.target.value
    })
  }

  onChangeVorzugsbenennung(e) {
    this.setState({
      unterbegriff: e.target.value
    })
  }

  onChangeDefinition(e) {
    this.setState({
      definition: e.target.value
    })
  }

  onChangeAbgelehnte_Benennungen(e) {
    this.setState({
      abgelehnte_benennungen: e.target.value
    })
  }

  onChangeAbgrenzung_zu(e) {
    this.setState({
      abgrenzung_zu: e.target.value
    })
  }

  onChangeBetroffene_Kunststoffe(e) {
    this.setState({
      betroffene_kunststoffe: e.target.value
    })
  }

  onChangeUrsachen(e) {
    this.setState({
      ursachen: e.target.value
    })
  }

  onChangeAnmerkung(e) {
    this.setState({
      anmerkung: e.target.value
    })
  }

  onChangeBearbeitungsstatus(e) {
  this.setState({
    bearbeitungsstatus: e.target.value
  })
}

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const unterbegriff = {
      oberbegriff: this.state.oberbegriff,
      vorzugsbenennung: this.state.vorzugsbenennung,
      definition: this.state.definition,
      abgelehnte_benennungen: this.state.abgelehnte_benennungen,
      abgrenzung_zu: this.state.abgrenzung_zu,
      betroffene_kunststoffe: this.state.betroffene_kunststoffe,
      ursachen: this.state.ursachen,
      anmerkung: this.state.anmerkung,
      bearbeitungsstatus: this.state.bearbeitungsstatus,
      date: this.state.date
    }

    console.log(unterbegriff);

    axios.post('http://localhost:5000/unterbegriffe/update/'+this.props.match.params.id, unterbegriff)
      .then(res => console.log(res.data));

      window.location = '/';
      }


  render() {
    return (
    <div>
      <h3>Edit Unterbegriff</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Oberbegriff: </label>
          <select ref="begriffInput"
              required
              className="form-control"
              value={this.state.oberbegriff}
              onChange={this.onChangeOberbegriff}>
              {
                this.state.begriffe.map(function(begriff) {
                  return <option
                    key={begriff}
                    value={begriff}>{begriff}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label>Vorzugbenennung: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.vorzugsbenennung}
              onChange={this.onChangeVorzugsbenennung}
              />
        </div>
        <div className="form-group">
          <label>Definition: </label>
          <input
              type="text"
              className="form-control"
              value={this.state.definition}
              onChange={this.onChangeDefinition}
              />
          </div>

          <div className="form-group">
            <label>Abgelehnte Benennungen: </label>
            <input
                type="text"
                className="form-control"
                value={this.state.abgelehnte_benennungen}
                onChange={this.onChangeAbgelehnte_Benennungen}
              />
           </div>

           <div className="form-group">
           <label>Abgrenzung_zu: </label>
           <input
                  type="text"
                  className="form-control"
                  value={this.state.abgrenzung_zu}
                  onChange={this.onChangeAbgrenzung_zu}
               />
            </div>

           <div className="form-group">
             <label>Betroffene_kunststoffe: </label>
             <input
                  type="text"
                  className="form-control"
                  value={this.state.betroffene_kunststoffe}
                  onChange={this.onChangeBetroffene_Kunststoffe}
                />
            </div>

            <div className="form-group">
            <label>Ursachen: </label>
            <input
                   type="text"
                   className="form-control"
                   value={this.state.ursachen}
                   onChange={this.onChangeUrsachen}
                />
             </div>

            <div className="form-group">
            <label>Anmerkung: </label>
            <input
                   type="text"
                   className="form-control"
                   value={this.state.anmerkung}
                   onChange={this.onChangeAnmerkung}
                 />
              </div>

              <div className="form-group">
              <div className="form-check form-check-inline">
              <input  className="form-check-input"
                    type="radio"
                    name="bearbeitungsstatus"
                    id="statusinBearbeitung"
                    value="in Bearbeitung"
                    checked={this.state.bearbeitungsstatus==='in Bearbeitung'}
                    onChange={this.onChangeBearbeitungsstatus}
                    />
              <label className="form-check-label">in Bearbeitung</label>
              </div>

              <div className="form-check form-check-inline">
              <input  className="form-check-input"
                    type="radio"
                    name="bearbeitungsstatus"
                    id="statusFreigegeben"
                    value="freigegeben"
                    checked={this.state.bearbeitungsstatus==='freigegeben'}
                    onChange={this.onChangeBearbeitungsstatus}
                    />
              <label className="form-check-label">freigegeben</label>
              </div>

              <div className="form-check form-check-inline">
              <input  className="form-check-input"
                    type="radio"
                    name="bearbeitungsstatus"
                    id="statusGesperrt"
                    value="gesperrt"
                    checked={this.state.bearbeitungsstatus==='gesperrt'}
                    onChange={this.onChangeBearbeitungsstatus}
                    />
              <label className="form-check-label">gesperrt</label>
              </div>
              </div>


            <div className="form-group">
            <label>Date</label>
            <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
            />
            </div>

        <div className="form-group">
          <input type="submit" value="Edit Unterbegriff" className="btn btn-primary" />
        </div>
        </form>
       </div>
  )
}
}
