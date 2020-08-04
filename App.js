import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import UnterbegriffeList from "./components/unterbegriffe-list.component";
import BegriffeList from "./components/begriffe-list.component";
import EditUnterbegriff from "./components/edit-unterbegriff.component";
import CreateUnterbegriff from "./components/create-unterbegriff.component";
import CreateBegriff from "./components/create-begriff.component";

function App() {
     return (
       <Router>
       <div className="container">
         <Navbar />
         <br/>
         <Route path="/" exact component={UnterbegriffeList} />
         <Route path="/" exact component={BegriffeList} />
         <Route path="/edit/:id" component={EditUnterbegriff} />
         <Route path="/create" component={CreateUnterbegriff} />
         <Route path="/begriff" component={CreateBegriff} />
        </div>
       </Router>
     );
    }

export default App;
