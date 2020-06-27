import Smurfs from "./Smurfs";
import SmurfsForm from "./SmurfsForm";
import "./App.css";
import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <Jumbotron fluid style = {{padding: '5px'}}>
            <Container fluid>
              <h1 className="display-3">Welcome to the Smurf's Village!</h1>
              <p className="lead">
                We do not have enough Smurfs to sustain our village. Fill out the form bellow to add some new smurfs to our town!
              </p>
            </Container>
          </Jumbotron>
          <Smurfs />
        </div>
        <div className="smurfs-form">
          <h1>Add New Smurfs To Smurf Village</h1>
          <SmurfsForm />
        </div>
      </div>
    );
  }
}
export default App;
