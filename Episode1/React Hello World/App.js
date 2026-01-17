import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { key: 1 }, "Hello World"); //h1 tag is created

// select the root from the html
const root = ReactDOM.createRoot(document.getElementById("root"));
// insert the heading tag inside that root

//creating nested elements in react
/**
 * <div className = "parent">
 *  <div className = "child">
 *      <h1></h1>
 *      <h1></h1>
 *  </div>
 * </div>
 */

//Creating the above nested element using react and inserting it inside the root container
const parent = React.createElement(
  "div",
  { key: 2 },
  React.createElement("div", { key: 3 }, [
    React.createElement("h1", { key: 4 }, "Hello"),
    React.createElement("h1", { key: 5 }, "World"),
  ]),
);

root.render(parent);
