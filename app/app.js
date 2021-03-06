// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
// We need to include all of the components we"re utilizing
// Include the Header, Results, and Search components
var Header = require("./components/Header");
var Results = require("./components/Results");
var Search = require("./components/Search");

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="main-container">
    <Header />
    <Search />
    <Results />
    
  </div>
  , document.getElementById("app")
);
// // Include the Main Component
// var Main = require("./Components/Main");

// // This code here allows us to render our main component (in this case "Main")
// ReactDOM.render(<Main />, document.getElementById("app"));
