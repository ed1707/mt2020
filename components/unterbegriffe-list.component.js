
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Unterbegriff = props => (
  <tr>
    <td>{props.unterbegriff.oberbegriff}</td>
    <td>{props.unterbegriff.vorzugsbenennung}</td>
    <td>{props.unterbegriff.definition}</td>
    <td>{props.unterbegriff.abgelehnte_benennungen}</td>
    <td>{props.unterbegriff.abgrenzung_zu}</td>
    <td>{props.unterbegriff.betroffene_kunststoffe}</td>
    <td>{props.unterbegriff.ursachen}</td>
    <td>{props.unterbegriff.anmerkung}</td>
    <td>{props.unterbegriff.bearbeitungsstatus}</td>
    <td>
      <Link to={"/edit/"+props.unterbegriff._id}>edit</Link> | <a href="javascript.;" onClick={() => { props.deleteUnterbegriff(props.unterbegriff._id) }}>delete</a>
    </td>
  </tr>
)

export default class UnterbegriffeList extends Component {
  constructor(props) {
   super(props);

   this.deleteUnterbegriff= this.deleteUnterbegriff.bind(this)

   this.state = {unterbegriffe: []};
 }

 componentDidMount() {
   axios.get('http://localhost:5000/unterbegriffe/')
     .then(response => {
       this.setState({ unterbegriffe: response.data })
     })

     .catch((error) => { console.log(error)})
   }

  deleteUnterbegriff(id) {
   axios.delete('http://localhost:5000/unterbegriffe/'+id)
     .then(response => { console.log(response.data)});

     this.setState({
     unterbegriffe: this.state.unterbegriffe.filter(el => el._id !== id)
   })
 }

 unterbegriffList() {
   return this.state.unterbegriffe.map(currentunterbegriff => {
     return <Unterbegriff unterbegriff={currentunterbegriff} deleteUnterbegriff={this.deleteUnterbegriff} key={currentunterbegriff._id}/>;
   })
 }

  render() {
   return (
     <div>
       <h3>Vorhandene Unterbegriffe</h3>
       <table className="table">
         <thead className="thead-light">
           <tr>
             <th>Oberbegriff</th>
             <th>Vorzugbenennung</th>
             <th>Definition</th>
             <th>Abgelehnte Benennungen</th>
             <th>Abgrenzung zu</th>
             <th>Betroffene Kunststoffe</th>
             <th>Ursachen</th>
             <th>Anmerkung</th>
             <th>Bearbeitungsstatus</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           { this.unterbegriffList() }
         </tbody>
       </table>
     </div>
    )
  }
}

