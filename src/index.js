import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
const moment = require("moment");
console.log(moment());

ReactDOM.render(<App />, document.querySelector("#root"));
