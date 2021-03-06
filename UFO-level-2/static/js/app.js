// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through `data` and console.log each ufo sighting object & display on table
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row =tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
    // console.log(key, value);

    var cell = row.append("td");
    cell.text(value);        
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement_dtg = d3.select("#datetime-input");
    var inputElement_state = d3.select("#state-input");
    var inputElement_shape = d3.select("#shape-input");
    var inputElement_city = d3.select("#city-input");
  
    // Get the value property of the input element
    var inputValue_dtg = inputElement_dtg.property("value");
    var inputValue_state = inputElement_state.property("value");
    var inputValue_shape = inputElement_shape.property("value");
    var inputValue_city = inputElement_city.property("value");

 // reads the values that are entered for filtering

    var filteredData = tableData;

    if (inputValue_dtg) {
      filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === inputValue_dtg);
    };

    if (inputValue_state) {
      filteredData = filteredData.filter(ufoSighting => ufoSighting.state === inputValue_state);
    };

    if (inputValue_shape) {
      filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === inputValue_shape);
    };

    if (inputValue_city) {
      filteredData = filteredData.filter(ufoSighting => ufoSighting.city === inputValue_city);
    };

       // clears the table to display only current results
       var list = d3.select("tbody");
       list.html("");
   
       // Loop through `data` and console.log each ufo sighting object
       filteredData.forEach(function(ufoSighting){
           // console.log(ufoSighting);
           var row =tbody.append("tr");
   
       Object.entries(ufoSighting).forEach(function([key, value]) {
         console.log(key, value);
   
         var cell = row.append("td");
         cell.text(value);        
           });
       });
}
