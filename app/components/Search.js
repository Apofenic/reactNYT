// Include React
var React = require("react");
//<div className="button" id="clearResults">Clear Results</div>
// Create the Search component
// Notice how the Search React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Search = React.createClass({
  render: function() {
    return (
     <div className= "container">
		<div className="jumbotron">
		  <div className="container">
		  	<div id="searchForm">
			  <form>
			  	<div className="header2"><h2>Search Parameters</h2></div>

				<label for="searchTerm">Search Term:</label>
				<input type="text" id="searchTerm"></input>

				<label for="dropdown">Number of Records to Retrieve</label>
				<select id="dropdown">
					<option value="1">1</option>
					<option value="5">5</option>
					<option value="10">10</option>
				</select>

				<label for="startYear">Start Year:</label>
				<input type="text" id="startYear"></input>

				<label for="endYear">End Year:</label>
				<input type="text" id="endYear"></input>

				<div id="buttonBox">
					<div className="button" id="searchButton">Search</div>
					
				</div>
			  </form>
			</div>
		  </div>
		</div> 
	 </div>	  
	
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
