// todo: Buổi 13 redux
import React, { Component} from "react";

const Counter = (props) => {
  const { value, onIncrement, onDecrement } = props;
  return(                                           
    <p>
      Clicked: {value} times <button anClick={onIncrement}> + </button>{" "}
      <button onclick={onDecrement}> - </button>{" "}
    </p>
  );
};
export default Counter;
                           