import React from "react";
import ReactDOM from "react-dom";
import { add,substract, multiply, divide } from "./calculator";

ReactDOM.render(
  <ul>
    <li>{add(1,2)}</li>
    <li>{substract(7,2)}</li>
<li>{multiply(5,4)}</li>
<li>{divide(5,2)}</li></ul>,
document.getElementById("root")
);