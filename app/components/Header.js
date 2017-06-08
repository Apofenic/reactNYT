// Include React
var React = require("react");

// Create the Header component
// Notice how the Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Header = React.createClass({
  render: function() {
    return (
     <div className="pageHeader">
  		<h1>New York Times Search</h1>
	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
