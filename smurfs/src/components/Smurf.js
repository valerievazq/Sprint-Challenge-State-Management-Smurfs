import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
const Smurf = (props) => {
  const onDelete = (e) => {
    props.handleDelete(props.id);
  };

  return (
    <>
      <div className='container'>
        <Card body  className="text-center">
          <CardTitle>
            <h2>{props.name}</h2>
          </CardTitle>
          <CardText>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
          </CardText>
          <Button onClick={onDelete}>Delete</Button>
          
        </Card>
        <hr></hr>
      </div>
    </>
  );
};

export default Smurf;
