import React from "react";

import { connect } from "react-redux";

function ItemContainer(props) {
  return (
    <div>
      <p>No.of Items {props.item}</p>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const items = ownProps.cake
    ? state.cake.numberOfCakes
    : state.iceCream.numberOfIceCreams;
  return { item: items };
};
export default connect(mapStateToProps)(ItemContainer);
