import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import "./App.css";

const SmurfsForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const handleChangesName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleChangesAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const handleChangesHeight = (e) => {
    e.preventDefault();
    setHeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(name, age, height);
    setName("");
    setHeight("");
    setAge("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="formInput">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Name: </InputGroupText>
            </InputGroupAddon>
            <Input
              
              type="text"
              name="name"
              value={name}
              onChange={handleChangesName}
            />
          </InputGroup>
        </div>
        <div className="formInput">
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Age: </InputGroupText>
            </InputGroupAddon>
            <Input
              
              type="text"
              name="age"
              value={age}
              onChange={handleChangesAge}
            />
          </InputGroup>
        </div>

        <div className='formInput'>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Height:</InputGroupText>
            </InputGroupAddon>
            <Input
              
              type="text"
              name="height"
              value={height}
              onChange={handleChangesHeight}
            />
          </InputGroup>
        </div>
        <Button color="primary">Add Smurf to population</Button>{" "}
      </form>
    </div>
  );
};

// export default SmurfsForm

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { addSmurf })(SmurfsForm);
