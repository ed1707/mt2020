
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Begriff = props => (
  <tr>
    <td>{props.begriff.oberbegriff}</td>
    <td>{props.begriff.alternative_benennung}</td>
    <td>
      <Link to={"/edit/"+props.begriff._id}>edit</Link> | <a href="javascript.;" onClick={() => { props.deleteBegriff(props.begriff._id) }}>delete</a>
    </td>
  </tr>
)

export default class BegriffeList extends Component {
  constructor(props) {
   super(props);

   this.deleteBegriff= this.deleteBegriff.bind(this)

   this.state = {begriffe: []};
 }

 componentDidMount() {
   axios.get('http://localhost:5000/begriffe/')
     .then(response => {
       this.setState({ begriffe: response.data })
     })

     .catch((error) => { console.log(error)})
   }

  deleteBegriff(id) {
   axios.delete('http://localhost:5000/begriffe/'+id)
     .then(response => { console.log(response.data)});

     this.setState({
     begriffe: this.state.begriffe.filter(el => el._id !== id)
   })
 }

 begriffList() {
   return this.state.begriffe.map(currentbegriff => {
     return <Begriff begriff={currentbegriff} deleteBegriff={this.deleteBegriff} key={currentbegriff._id}/>;
   })
 }

  render() {
   return (
     <div>
       <h3>Vorhandene Begriffe</h3>
       <table className="table">
         <thead className="thead-light">
           <tr>
             <th>Oberbegriff</th>
             <th>Alternative Benennungen</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           { this.begriffList() }
         </tbody>
       </table>
     </div>
    )
  }
}
