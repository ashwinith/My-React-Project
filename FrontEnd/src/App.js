import React from 'react';
import {Route,Switch} from "react-router-dom";
import Header from './Components/header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/contactus" component={ContactUs}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
