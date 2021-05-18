import React from "react";

import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <p>No.of Items {props.item}</p>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;
  return { item: items };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return { buyItem: dispatchFunction };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// connect(null, mapDispatchToProps) when we pass only mapDispatchToProps
