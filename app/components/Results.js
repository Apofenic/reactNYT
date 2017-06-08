// Include React
var React = require("react");

// Create the Results component
// Notice how Results uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Results = React.createClass({
  render: function() {
    return (
    <div className= "container">
	    <div id="articleDump">
		  <div className="header2"><h2>Top Articles</h2></div>
		</div>
	</div>
      
     );
  }
});

// Export the component back for use in other files
module.exports = Results;
