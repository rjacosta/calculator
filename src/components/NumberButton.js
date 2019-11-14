import React from "react";
import "../App.css";

function onNumberButtonClick(number, parentCallbackFn) {
    parentCallbackFn(number);
}

function NumberButton(props) {
  return (
    <button onClick={() => onNumberButtonClick(props.number, props.parentCallbackFn)} className="number-tile">{props.number}</button>
  );
}

export default NumberButton;
