const heading = React.createElement("h1", { class: "heading" }, "Hello World"); //h1 tag is created

// select the root from the html
const root = ReactDOM.createRoot(document.getElementById("root"));
// insert the heading tag inside that root
root.render(heading);
