const heading = React.createElement("h1", { class: "heading" }, "Hello World"); //h1 tag is created

// select the root from the html
const root = ReactDOM.createRoot(document.getElementById("root"));
// insert the heading tag inside that root

//creating nested elements in react
/**
 * <div class = "parent">
 *  <div class = "child">
 *      <h1></h1>
 *      <h1></h1>
 *  </div>
 * </div>
 */

//Creating the above nested element using react and inserting it inside the root container
const parent = React.createElement(
  "div",
  { class: "parent" },
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h1", {}, "World"),
  ]),
);

root.render(parent);
