import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <p>Number of cakes - {props.numberOfCakes}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      &nbsp;
      <button onClick={() => props.buyCake(number)}>Buy{number} Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
